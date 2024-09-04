---
title: "Use the Untyped Model Access API"
url: /apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/untyped-model-api/
weight: 24
---

## Introduction

The Untyped Model API caters to the advanced users who are familiar with the internals of the Mendix platform. With the Untyped Model API, you can access the rich data of model elements.

For model element and property names, see [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html). Specifically, you can find the type names referenced by the Mendix APIs under the [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) property of any model element.

{{% alert color="info" %}}
All methods provided by the Untyped Model API are recursive to reduce the amount of API calls necessary to get to the content you are interested in.
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

To gain access to the model root, request it from the newly added service:

```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## Requesting Top-level Model Elements

To start going through the model and requesting top level-model elements, such as apps and modules, choose a starting point first:
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

To access the child elements of a model element, such as the actions of a microflow and entities of a domain model, see the example below:

Using either `GetElements` or `GetElementsOfType`, you can query the actions of a microflow and entities of a domain model. This can help you, for example, analyze these elements or implement custom validation rules.

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

In case you need more data of a model unit, like its properties, you can also access them. Below is an example:
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
