---
title: "C#을 사용하여 마이크로플로우 생성 및 활동 추가"
linktitle: "마이크로플로우 및 활동"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflow-add-activities/
weight: 14
---

## 소개

이 사용 방법(how-to)에서는 새 마이크로플로우를 만들고 활동을 추가하는 방법을 설명합니다. `IMicroflowService`는 마이크로플로우와 관련된 작업을 수행하는 데 사용됩니다.

## `Initialize`를 사용하여 마이크로플로우 생성 및 초기화

`Initialize` 메서드는 이전에 생성된 마이크로플로우를 초기화합니다. 다음 단계를 따르십시오:

1. `IModel.StartTransaction`을 사용하여 트랜잭션을 시작합니다.
2. 마이크로플로우를 생성하고 모듈에 추가합니다. `IModel.Create<IMicroflow>`를 사용하여 마이크로플로우를 생성하고 원하는 모듈에 추가합니다.
3. `IMicroflowService.Initialize`를 호출하여 마이크로플로우를 초기화합니다. `Initialize` 메서드는 시작 및 종료 흐름을 설정하고 파라미터(예: `DataType.Boolean`의 `boolParameter`)를 추가합니다.
4. `IMicroflowService.TryInsertAfterStart`를 사용하여 첫 번째 활동을 추가하고 `IMicroflowService.TryInsertBeforeActivity`를 사용하여 다른 활동 앞에 활동을 삽입하여 마이크로플로우에 활동을 삽입합니다.

```csharp
public void Initialize(IModel currentApp, params IActionActivity[] actionActivities)
{
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");

    using var transaction = currentApp.StartTransaction("Create and initialize microflow");
          
    var microflow = currentApp.Create<IMicroflow>();
    microflow.Name = "Microflow";
    module!.AddDocument(microflow);

    _microflowService.Initialize(microflow, ("boolParameter", DataType.Boolean));

    for (int i = 0; i < activities.Length; i++)
    {
        var activity = activities[i];
        if (i == 0)
            _microflowService.TryInsertAfterStart(microflow, activity);
        else
            _microflowService.TryInsertBeforeActivity(activity, activities[i-1]);
    }

    transaction.Commit();
}
```

이 `IMicroflowService.Initialize` 메서드는 여러 수동 단계가 필요합니다. 더 간단한 접근 방식을 사용하려면 아래 섹션에 설명된 `MicroflowService.CreateMicroflow`를 사용하십시오.

## `CreateMicroflow`를 사용하여 마이크로플로우 생성

`CreateMicroflow` 메서드는 마이크로플로우를 생성하는 더 진보되고 포괄적인 방법입니다. `IMicroflowService.Initialize` 메서드의 대안입니다. `CreateMicroflow` 메서드는 초기화 및 모델 통합을 한 단계로 처리합니다. 다음이 필요합니다:

* 현재 `IModel`
* `IFolderBase` (모듈 또는 폴더)
* 이름
* 선택 사항: 
    * `MicroflowReturnValue`
    * 파라미터 목록

### 간단한 마이크로플로우 생성

아래 코드에서 볼 수 있듯이 유일한 요구 사항은 `IModel`, `IFolderBase` 및 이름입니다.

```csharp
public void CreateMicroflow(IModel currentApp)
{
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");

    using var transaction = currentApp.StartTransaction("Create microflows");
   
    var microflow = _microflowService.CreateMicroflow(currentApp, module, "Microflow");

    transaction.Commit();
}
```

### 반환 유형 및 파라미터가 있는 마이크로플로우 생성

이 더 고급 예제에서는 `IMicroflowExpressionService.CreateFromString` 메서드를 볼 수 있습니다. 이 메서드를 사용하면 마이크로플로우의 `MicroflowReturnValue`로 사용할 수 있는 표현식을 만들 수 있습니다. 여기에서 표현식은 두 값의 간단한 덧셈이고 반환 유형은 `DataType.Integer`입니다.

```csharp
 void CreateMicroflow(IModel currentApp)
 {
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");    
    string returnValueExpression = "1 + 2";

    var microflow = microflowService.CreateMicroflow(currentApp, module, "Microflow",
         new MicroflowReturnValue(DataType.Integer, microflowExpressionService.CreateFromString(returnValueExpression)));

    transaction.Commit();
 }
```

`IMicroflowService.CreateMicroflow` 메서드는 `IModel.Create<IMicroflow>`를 사용하여 마이크로플로우를 수동으로 생성한 다음 `IFolderBase` 컨테이너에 수동으로 추가할 필요가 없습니다. 마이크로플로우를 생성하는 방법에 대한 포괄적인 예는 [C#을 사용하여 계산을 위한 마이크로플로우 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflows-for-calculations/)를 참조하십시오.

## 활동 삽입

마이크로플로우에 활동을 삽입하려면 다음 메서드를 사용하십시오:

* `TryInsertAfterStart` – 시작 이벤트 바로 뒤에 추가
* `TryInsertBeforeActivity` – 다른 특정 활동 앞에 활동 삽입

```csharp
microflowService.TryInsertAfterStart(microflow, newActivity);
microflowService.TryInsertBeforeActivity(newAactivity, existingActivity);
```

## 마이크로플로우 파라미터 검색

`GetParameters` 메서드를 사용하여 마이크로플로우의 모든 입력 파라미터를 검색합니다. 

다음을 포함하는 `IMicroflowParameterObject` 목록을 반환합니다:

* 이름
* `IQualifiedName` 식별자
* 설명
* `DataType`

```csharp
IReadOnlyList<IMicroflowParameterObject> parameters = _microflowService.GetParameters(microflow);
```

## 마이크로플로우 활동 검색

`GetAllMicroflowActivities` 메서드를 사용하여 마이크로플로우 흐름의 모든 활동을 검색합니다. `IActivity` 목록을 반환합니다.

```csharp
IReadOnlyList<IActivity> activities = _microflowService.GetAllMicroflowActivities(microflow);
```

## 변수 이름 충돌 확인

`IsVariableNameInUse` 메서드를 사용하여 마이크로플로우에 제공된 이름의 변수가 이미 포함되어 있는지 확인하십시오. 이는 출력 변수 이름이 기존 변수와 겹칠 수 있는 흐름에 새 활동을 추가하기 전에 호출할 수 있습니다. 

```csharp
public void AddNewActivity(IModel currentApp, IMicroflow microflow, string activityName)
{
    using var transaction = currentApp.StartTransaction("Create microflows");

    var microflowCallActivity = currentApp.Create<IActionActivity>();
    var microflowCallAction = currentApp.Create<IMicroflowCallAction>();
    microflowCallAction.MicroflowCall = currentApp.Create<IMicroflowCall>();
    microflowCallAction.MicroflowCall.Microflow = microflow.QualifiedName;
    microflowCallActivity!.Action = microflowCallAction;

    if (!_microflowService.IsVariableNameInUse(microflow, activityName))
        microflowCallAction.OutputVariableName = activityName;
    else
    {
        _messageBoxService.ShowError("That variable name is already in use.");
        return;
    }

    _microflowService.TryInsertAfterStart(microflow, microflowCallActivity);

    transaction.Commit();
}
```
