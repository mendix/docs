---
title: "Use the Untyped Model Access API"
url: /apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/untyped-model-api/
weight: 11
---

# Introduction into the Untyped Model Access API

The untyped model API is a part of our advanced toolset meant to cater to the power user, allowing access to the parts of the model no-one had access before. 
Since it's meant to be used by people used to the internals of our platform, you'll have to operate with model element and property names that you can look up on our [Official Model SDK Documentation page](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html).
Specifically the type names that you will see referenced all over our api can be found under the [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) property of any model element.

{{% alert color="info" %}}

All methods provided by our api are recursive to reduce the amount of API calls necessary to get to the countent you're interested in.

{{% /alert %}}

{{% alert color="info" %}}

To see the api in action using the examples in this guide you must create a microflow having the default name - "MyFirstLogic" with an action and add an entity to the domain model.

{{% /alert %}}

## Setup

All you have to do to start using our new api is to import it as you always did before.
```csharp
class Sample(IUntypedModelAccessService untypedModelAccessService)
{
}
```

## First steps

To gain access to the model root, all you have to do is to request it from the newly added service
```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## Requesting top level model elements(a.k.a. Project, Module)

To start going through the model you have to pick a starting point first.
```csharp
class Sample3(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelUnit GetProjectData() =>
        untypedModelAccessService.GetUntypedModel(currentApp)
            .GetUnitsOfType("Projects$Project")
            .Single();

    public IModelUnit GetMyModuleData() =>
        untypedModelAccessService.GetUntypedModel(currentApp)
            .GetUnitsOfType("Projects$Module")
            .Single(unit => unit.Name == "MyFirstModule");
}
```

## Accessing model element's child elements like microflow's actions and domain model entities

If you'd like to look up model unit's or element's sub elements. Please see the following example.
Using either `GetElements` or `GetElementsOfType` you can query Microflow's actions or Domain Model's entities, in case you'd like to analyze them or
implement custom validation rules based on these and many other elements of our model.
```csharp
class Sample4(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IReadOnlyList<IModelElement> GetMicroflowActionActivities() =>
        untypedModelAccessService.GetUntypedModel(currentApp)
            .GetUnitsOfType("Projects$Module")
            .Single(unit => unit.Name == "MyFirstModule")
            .GetUnitsOfType("Microflows$Microflow")
            .Single(unit => unit.Name == "MyFirstLogic")
            .GetElementsOfType("Microflows$ActionActivity");

    public IReadOnlyList<IModelElement> GetDomainModelEntities() =>
        untypedModelAccessService.GetUntypedModel(currentApp)
            .GetUnitsOfType("Projects$Module")
            .Single(unit => unit.Name == "MyFirstModule")
            .GetUnitsOfType("DomainModels$DomainModel").Single()
            .GetElementsOfType("DomainModels$Entity");
}
```

## Going deeper, getting model unit's properties

In case you need more of the model unit's data like its properties you can look those up too. Here's an example.
```csharp
class Sample5(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    private IReadOnlyList<IModelProperty> GetProjectRuntimeSettingsProperties() =>
        untypedModelAccessService.GetUntypedModel(currentApp)
            .GetUnitsOfType("Settings$ProjectSettings")
            .Single()
            .GetElements()
            .Single(element => element.Type == "Settings$RuntimeSettings")
            .GetProperties();


    public string? GetAfterStartupMicroflowId() =>
        GetProjectRuntimeSettingsProperties()
            .Single(property => property.Name == "AfterStartupMicroflowId")
            .Value?
            .ToString();
}
```
