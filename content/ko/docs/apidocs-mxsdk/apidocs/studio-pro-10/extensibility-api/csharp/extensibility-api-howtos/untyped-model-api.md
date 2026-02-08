---
title: "C#을 사용하여 비정형 모델 접근 API 사용하기"
linktitle: "비정형 모델 API"
url: /apidocs-mxsdk/apidocs/untyped-model-access-api-10/
weight: 24
---

## 소개

비정형 모델 접근 API는 Mendix 플랫폼의 내부에 익숙한 고급 사용자를 위해 설계되었습니다. 이를 통해 모델 요소의 풍부한 데이터에 접근할 수 있습니다.

* 모델 요소, 단위 및 속성 이름에 대해서는 [Mendix Model SDK](https://apidocs.rnd.mendix.com/modelsdk/latest/index.html)를 참조하십시오. 
* 비정형 모델 접근 API에서 사용하는 타입 이름은 모든 모델 요소의 [structureTypeName](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/Structure.html#structureTypeName) 속성에서 확인할 수 있습니다.

{{% alert color="info" %}}
비정형 모델 API의 모든 메서드는 콘텐츠를 검색하는 데 필요한 API 호출 수를 줄이기 위해 재귀적입니다.
{{% /alert %}}

## 전제 조건

이 사용 방법의 예제를 사용하기 전에:

* `MyFirstLogic`이라는 이름의 액션이 있는 Microflow를 만드십시오
* Domain Model에 Entity를 추가하십시오

## 시작하기

비정형 모델 접근 API 서비스를 가져오는 것으로 시작하십시오:

```csharp
class Sample(IUntypedModelAccessService untypedModelAccessService)
{
}
```

## 모델 루트에 접근하기

비정형 모델 접근 API를 사용하여 모델 `Root`에 접근하십시오:

```csharp
class Sample2(IUntypedModelAccessService untypedModelAccessService, IModel currentApp)
{
    public IModelRoot GetUntypedModelRoot() => untypedModelAccessService.GetUntypedModel(currentApp);
}

```

## 최상위 모델 요소 요청하기

`Apps`와 `Modules` 같은 모델 요소에 접근하려면 시작점을 선택하십시오:

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

Microflow 액션이나 Domain Model의 Entity와 같은 모델 요소의 자식 요소에 접근할 수 있습니다.

`GetElements` 또는 `GetElementsOfType`을 사용하여 요소 속성을 분석하고 사용자 정의 유효성 검사 규칙을 구현하십시오. 

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

## 모델 단위의 속성 가져오기

모델 요소 또는 단위에서 데이터를 추출하려면 해당 속성에 접근하십시오:

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
