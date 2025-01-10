---
title: "Use the Untyped Model Access API"
url: /apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/untyped-model-access-api/
weight: 24
---

## Introduction

The Untyped Model Access API caters to the advanced users who are familiar with the internals of the Mendix platform. With the Untyped Model API, you can access the rich data of model elements.

When you need to use model elements, units, and property names in the Untyped Model API, you can reference the [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html). Moreover, you can find the type names used by the Untyped Model Access API under the [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) property of any model element.

{{% alert color="info" %}}
All methods provided by the Untyped Model API are recursive to reduce the amount of API calls necessary to get to the content you are looking for.
{{% /alert %}}

## Prerequisites

To see the Untyped Model API in action, as described in the examples in this document, you must create a microflow having the default name `MyFirstLogic` with an action, and add an entity to the domain model.

## Getting Started

To start using the Untyped Model API, import it:

```csharp
class Sample(IUntypedModelAccessService untypedModelAccessService)
{
}
```

## Gaining Access to the Model Root

To gain access to the model `Root`, request it from the newly added API service:

```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## Requesting Top-level Model Elements

To start going through the model elements, such as `Apps` and `Modules`, choose a starting point first:

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

## Accessing Child Elements

It is possible to access the child elements of a model element, such as the actions of a microflow or entities of a domain model.

Using either `GetElements` or `GetElementsOfType`, can help you, for example, analyze these elements' properties to implement custom validation rules. See an example below:

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

## Getting Model Unit's Properties

In case you would like to extract data out of a model element or unit, you need to access its properties. See an example below:

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
