---
title: "Use the Untyped Model Access API Using C#"
linktitle: "Untyped Model API"
url: /apidocs-mxsdk/apidocs/untyped-model-access-api-10/
weight: 24
---

## Introduction

The Untyped Model Access API is designed for advanced users familiar with the internals of the Mendix platform. It allows access to the rich data of model elements.

* For model elements, units, and property names, see the [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html). 
* Type names used by the Untyped Model Access API are available under the [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) property of any model element.

{{% alert color="info" %}}
All methods in the Untyped Model API are recursive to reduce the amount of API calls necessary to retrieve content.
{{% /alert %}}

## Prerequisites

Before using the examples in this how-to:

* Create a microflow named `MyFirstLogic` with an action
* Add an entity to the domain model

## Getting Started

Begin by importing the Untyped Model Access API service:

```csharp
class Sample(IUntypedModelAccessService untypedModelAccessService)
{
}
```

## Access the Model Root

Use the Untyped Model Access AP to gain access to the model `Root`:

```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## Requesting Top-level Model Elements

To access the model elements, such as `Apps` and `Modules`, choose a starting point:

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

You can access the child elements of a model element, such as microflow actions or entities of a domain model.

Use `GetElements` or `GetElementsOfType` to analyze the element properties and implement custom validation rules. 

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

To extract data out of a model element or unit, access its properties:

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
