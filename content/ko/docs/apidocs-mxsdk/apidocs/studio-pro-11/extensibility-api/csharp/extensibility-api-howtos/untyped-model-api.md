---
title: "C#를 사용하여 Untyped Model Access API 사용하기"
linktitle: "Untyped Model API"
url: /apidocs-mxsdk/apidocs/untyped-model-access-api-11/
weight: 24
---

## 소개

Untyped Model Access API는 Mendix 플랫폼의 내부 구조에 익숙한 고급 사용자를 위해 설계되었습니다. It allows access to the rich data of model elements.

* For model elements, units, and property names, see the [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html).
* Type names used by the Untyped Model Access API are available under the [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) property of any model element.

{{% alert color="info" %}}
All methods in the Untyped Model API are recursive to reduce the amount of API calls necessary to retrieve content.
{{% /alert %}}

## 전제 조건

이 How-to의 예제를 사용하기 전에:

* Create a microflow named `MyFirstLogic` with an action
* Add an entity to the domain model

## 시작하기

Untyped Model Access API 서비스를 가져오는 것부터 시작하세요:

```csharp
class Sample(IUntypedModelAccessService untypedModelAccessService)
{
}
```

## 모델 루트에 접근하기

Use the Untyped Model Access AP to gain access to the model `Root`:

```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## 최상위 모델 요소 요청하기

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

## 자식 요소에 접근하기

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

## 모델 유닛의 속성 가져오기

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
