---
title: "C#을 사용하여 계산을 위한 마이크로플로우 만들기"
linktitle: "계산 마이크로플로우"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflows-for-calculations/
weight: 8
---

## 소개

이 사용 방법(how-to)에서는 계산을 수행하고 결과를 반환하는 마이크로플로우를 만드는 방법을 설명합니다.

이 사용 방법의 예제는 [이 GitHub 저장소](https://github.com/mendix/ExtensionAPI-Samples)에서 다운로드할 수 있습니다.

## 마이크로플로우를 생성하는 확장 클래스 생성

1. [메뉴 확장 프로그램 만들기](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/)를 따를 때 생성한 프로젝트를 엽니다.
2. 솔루션에 *MicroflowTutorial*이라는 새 폴더를 추가합니다.
3. `MenuExtension` 클래스를 생성합니다.
4. *CreateMicroflowsMenu.cs*라는 새 클래스를 추가합니다.
5. 파일의 코드를 다음 코드로 바꿉니다:

    ```csharp
    using Mendix.StudioPro.ExtensionsAPI.UI.Menu;
    using System.ComponentModel.Composition;
    
    namespace MicroflowTutorial;
    
    [Export(typeof(MenuExtension))]
    [method: ImportingConstructor]
    class CreateMicroflowsMenu(CalculationsMicroflowCreator microflowCreator) : MenuExtension
    {
        public override IEnumerable<MenuViewModel> GetMenus()
        {
            yield return new MenuViewModel("Create microflows", () =>
                {
                    if (CurrentApp == null)
                        return;
    
                    microflowCreator.CreateMicroflows(CurrentApp);
                }
            );
        }
    }
    ```

    이 코드는 `GetMenus` 메서드를 재정의하여 사용자 지정 메뉴를 Studio Pro에 추가합니다. `CalculationsMicroflowCreator` 클래스(다음 단계에서 추가됨)는 생성자를 통해 주입되고 메뉴 작업에 의해 트리거됩니다.

## 마이크로플로우 생성자 클래스 추가

`CalculationsMicroflowCreator.cs` 클래스를 추가하고 다음 단계를 따르십시오:

1. 주입을 허용하기 위해 `Export` 속성을 추가합니다.
2. 의존성 주입을 지원하기 위해 `ImportingConstructor` 속성을 추가합니다.

```csharp
using Mendix.StudioPro.ExtensionsAPI.Model;
using Mendix.StudioPro.ExtensionsAPI.Model.DataTypes;
using Mendix.StudioPro.ExtensionsAPI.Model.Microflows;
using Mendix.StudioPro.ExtensionsAPI.Model.Projects;
using Mendix.StudioPro.ExtensionsAPI.Services;
using System.ComponentModel.Composition;

namespace MicroflowTutorial;

[Export(typeof(CalculationsMicroflowCreator))]
[method: ImportingConstructor]
class CalculationsMicroflowCreator(IMicroflowService microflowService, IMicroflowExpressionService microflowExpressionService)
{
    
}
```

이 클래스에는 사용자 지정 메뉴를 클릭할 때 트리거되는 `CreateMicroflows`라는 하나의 공용 메서드가 포함되어 있습니다. 작동하려면 현재 앱을 파라미터로 필요로 합니다.

`CreateMicroflowsMenu` 확장은 `CurrentApp` 속성을 통해 현재 앱에 액세스할 수 있습니다. 메뉴를 클릭하면 `CurrentApp`을 `CreateMicroflows`에 전달합니다.

`CurrentApp`은 현재 Studio Pro에서 열려 있는 앱을 나타내는 `IModel`입니다. `UIExtensionBase`(예: `MenuBarExtension`)를 상속하는 모든 확장은 `CurrentApp`에 액세스할 수 있어 앱의 모델과 상호 작용하고 변경할 수 있습니다.

다음과 같이 메서드를 추가합니다:

```csharp
public void CreateMicroflows(IModel currentApp)
{
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");

    using var transaction = currentApp.StartTransaction("Create microflows");

    CreateMicroflowsInFolder(currentApp, module);

    transaction.Commit();
}
```

`CreateMicroflows` 메서드는 모델을 수정하는 데 필요한 `currentApp.StartTransaction`을 호출하여 새 트랜잭션을 시작합니다. 클래스가 트랜잭션 외부에서 마이크로플로우를 생성하려고 하면 오류가 발생합니다. 자세한 내용은 [C#을 사용하여 모델 API와 상호 작용하기](/apidocs-mxsdk/apidocs/interact-with-model-api-11/)를 참조하십시오.

마이크로플로우를 생성하려면 `IMicroflowService`를 사용하십시오. 자세한 내용은 [C#을 사용하여 마이크로플로우 생성 및 활동 추가](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-microflow-add-activities/)를 참조하십시오. 다음이 필요합니다:

* `IModel` (현재 모드)
* `IFolderBase` (모듈 또는 폴더)
* 마이크로플로우 이름
* `MicroflowReturnValue` (선택 사항)

마이크로플로우는 `IMicroflowExpression`으로 값을 반환합니다. 이는 문자열 입력에서 표현식을 반환하고 해당 표현식을 마이크로플로우의 반환 값으로 설정하는 `IMicroflowExpressionService`를 사용하여 수행할 수 있습니다.

간단한 반환 값의 예는 다음과 같습니다:

```csharp
new MicroflowReturnValue(DataType.Boolean, microflowExpressionService.CreateFromString("true or false"));
```

그러나 예제에는 파라미터 이름을 사용하는 더 복잡한 표현식이 있습니다. 이 파라미터 이름은 호출된 마이크로플로우의 반환 값과 일치합니다.

이 확장은 세 개의 마이크로플로우를 생성합니다:

1. 곱셈 마이크로플로우 – 정수를 곱하고 결과를 반환합니다.
2. 덧셈 마이크로플로우 – 소수를 더하고 결과를 반환합니다.
3. 메인 마이크로플로우 – 위의 두 마이크로플로우를 순서대로 호출하고 곱셈 결과에서 덧셈 결과를 뺀 다음 값이 0보다 크면 `true` 또는 `false`를 반환합니다.

`CreateMicroflowsInFolder` 메서드를 사용하여 두 마이크로플로우와 반환 값을 생성합니다:

```csharp
void CreateMicroflowsInFolder(IModel currentApp, IFolderBase folder)
{
    string multiplicationResult = "multiplicationResult";
    string additionResult = "additionResult";

    string returnValueExpression = $"(${multiplicationResult} - round(${additionResult}) > 0)";

    var callingMicroflow = microflowService.CreateMicroflow(currentApp, folder, "Microflow",
        new MicroflowReturnValue(DataType.Boolean, microflowExpressionService.CreateFromString(returnValueExpression)));

    CreateMultiplicationMicroflow(currentApp, folder, callingMicroflow, multiplicationResult);
    CreateAdditionMicroflow(currentApp, folder, callingMicroflow, additionResult);
}
```

### 곱셈 마이크로플로우

두 입력 파라미터 간의 곱셈을 수행하는 마이크로플로우를 생성하려면 아래 코드를 사용하십시오:

```csharp
void CreateMultiplicationMicroflow(IModel currentApp, IFolderBase folder, IMicroflow callingMicroflow, string outputVariableName)
{
    var multiplication1Param = "multiplication1";
    var multiplication2Param = "multiplication2";

    var returnExpression = microflowExpressionService.CreateFromString($"${multiplication1Param} * ${multiplication2Param}");
    var returnValue = new MicroflowReturnValue(DataType.Integer, returnExpression);

    var multiplicationMicroflow = microflowService.CreateMicroflow(currentApp, folder, "MultiplicationMicroflow",
        returnValue,
        (multiplication1Param, DataType.Integer),
        (multiplication2Param, DataType.Integer));

    CreateMicroflowCallActivity(currentApp, callingMicroflow, multiplicationMicroflow,
        outputVariableName,
        (multiplication1Param, "10"),
        (multiplication2Param, "100"));
}
```

문자열 `multiplication1` 및 `multiplication2`는 반환 값의 표현식에 사용된 파라미터와 일치합니다. 표현식의 경우 파라미터 이름 앞에 달러 기호 `$`를 붙여야 변수 입력으로 인식됩니다.

또한 두 파라미터의 `DataType`이 정수임을 알 수 있습니다.

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/multiplication-microflow.png" >}}

### 덧셈 마이크로플로우

두 소수 값 간의 덧셈을 수행하는 마이크로플로우를 생성하려면 아래 코드를 사용하십시오:

```csharp
void CreateAdditionMicroflow(IModel currentApp, IFolderBase folder, IMicroflow callingMicroflow, string outputVariableName)
{
    var addition1Param = "addition1";
    var addition2Param = "addition2";

    var returnExpression = microflowExpressionService.CreateFromString($"${addition1Param} + ${addition2Param}");
    var returnValue = new MicroflowReturnValue(DataType.Decimal, returnExpression);

    var additionMicroflow = microflowService.CreateMicroflow(currentApp, folder, "AdditionMicroflow",
        returnValue,
        (addition1Param, DataType.Decimal),
        (addition2Param, DataType.Decimal));

    CreateMicroflowCallActivity(currentApp, callingMicroflow, additionMicroflow,
        outputVariableName,
        (addition1Param, "1.2"),
        (addition2Param, "2.2"));
}
```

위의 곱셈 마이크로플로우 예제와 마찬가지로 문자열 `addition1` 및 `addition2`는 반환 값의 표현식에 사용된 파라미터와 일치합니다. `DataType`은 소수(decimal)입니다.

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/addition-microflow.png" >}}

## 호출 활동 생성

마이크로플로우를 생성한 후에는 다른 마이크로플로우에서 사용할 수 있도록 호출 활동(`IActionActivity`)을 추가해야 합니다. 예제에는 곱셈 및 덧셈 마이크로플로우 모두에 대해 작동하는 `CreatMicroflowCallActivity`라는 메서드가 있습니다.

한 마이크로플로우가 다른 마이크로플로우를 호출하기 전에 몇 가지 전제 조건을 완료해야 합니다. 이 메서드는 다음과 같이 부분적으로 나눌 수 있습니다:

```csharp
var microflowCallActivity = currentApp.Create<IActionActivity>();
var microflowCallAction = currentApp.Create<IMicroflowCallAction>();
microflowCallAction.MicroflowCall = currentApp.Create<IMicroflowCall>();
microflowCallAction.MicroflowCall.Microflow = calledMicroflow.QualifiedName;
microflowCallActivity.Action = microflowCallAction;

microflowCallAction.OutputVariableName = outputVariableName;
```

1. `IActionActivity`를 생성합니다. 이것은 다른 마이크로플로우를 호출할 활동입니다.
2. `IMicroflowCallAction`을 생성하고 `IActionActivity`의 `Action` 속성으로 설정합니다.
3. `IMicroflowCall`을 생성하고 `IMicroflowCallAction`의 `MicroflowCall` 속성으로 설정합니다.
4. 호출하려는 마이크로플로우의 `QualifiedName`을 `MicroflowCall` 객체의 `Microflow` 속성으로 설정합니다.
5. 호출하는 마이크로플로우가 호출된 마이크로플로우에서 반환된 결과를 사용할 수 있도록 `IActionActivity`에 `OutputVariableName`을 설정합니다.

## 호출된 마이크로플로우에 파라미터 전달

호출된 마이크로플로우의 입력이 될 작업 활동에 파라미터를 전달할 수 있습니다. 이 파라미터 세트는 이름과 표현식의 `Tuple`입니다. 예제에서 이 파라미터들은 곱셈 마이크로플로우의 경우 두 개의 정수이고 덧셈 마이크로플로우의 경우 두 개의 소수입니다.

```csharp
foreach (var (parameterName, expression) in parameters)
{
    var parameterInCalledMicroflow = microflowService.GetParameters(calledMicroflow).Single(p => p.Name == parameterName);
    var parameterMapping = currentApp.Create<IMicroflowCallParameterMapping>();
    parameterMapping.Argument = microflowExpressionService.CreateFromString(expression);
    parameterMapping.Parameter = parameterInCalledMicroflow.QualifiedName;
    microflowCallAction.MicroflowCall.AddParameterMapping(parameterMapping);
}
```

코드를 `CalculationsMicroflowCreator` 클래스에 붙여넣습니다.

```csharp
void CreateMicroflowCallActivity(IModel currentApp,
    IMicroflow microflowThatCalls,
    IMicroflow calledMicroflow,
    string outputVariableName,
    params (string parameterName, string expression)[] parameters)
{
    var microflowCallActivity = currentApp.Create<IActionActivity>();
    var microflowCallAction = currentApp.Create<IMicroflowCallAction>();
    microflowCallAction.MicroflowCall = currentApp.Create<IMicroflowCall>();
    microflowCallAction.MicroflowCall.Microflow = calledMicroflow.QualifiedName;
    microflowCallActivity.Action = microflowCallAction;
    microflowCallAction.OutputVariableName = outputVariableName;

    foreach (var (parameterName, expression) in parameters)
    {
        var parameterInCalledMicroflow = microflowService.GetParameters(calledMicroflow).Single(p => p.Name == parameterName);
        var parameterMapping = currentApp.Create<IMicroflowCallParameterMapping>();
        parameterMapping.Argument = microflowExpressionService.CreateFromString(expression);
        parameterMapping.Parameter = parameterInCalledMicroflow.QualifiedName;
        microflowCallAction.MicroflowCall.AddParameterMapping(parameterMapping);
    }

    microflowService.TryInsertAfterStart(microflowThatCalls, microflowCallActivity);
}
```

곱셈 및 덧셈 마이크로플로우에 대한 호출 활동을 생성하려면 다음과 유사한 코드를 사용하십시오:

```csharp
CreateMicroflowCallActivity(currentApp, callingMicroflow, mathMicroflow,
   outputVariableName,
   ("multiplication1", "10"),
   ("multiplication2", "100"));

CreateMicroflowCallActivity(currentApp, callingMicroflow, additionMicroflow,
   outputVariableName,
   ("addition1", "1.2"),
   ("addition2", "2.2"));
```

보시다시피, 활동의 파라미터 이름은 마이크로플로우의 파라미터 이름과 일치합니다. 정수와 소수에 대한 값이 전달됩니다.

호출하는 마이크로플로우는 아래와 같습니다:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/main-microflow.png" >}}

## Java 액션

Java 액션을 호출하는 마이크로플로우 활동을 만들 수 있습니다. 이는 트랜잭션(`IModel.StartTransaction`) 내부에서 수행되어야 합니다.

1. `IModel.StartTransaction`을 사용하여 트랜잭션을 시작합니다.
2. `IActionActivity`를 생성합니다.
3. `Action` 속성을 `IJavaActionCallAction`으로 설정합니다.
4. `IJavaActionCallAction`을 `IJavaAction`에 연결합니다.
5. `JavaAction` 속성을 `IJavaAction`의 `IQualifiedName`으로 설정합니다.
6. `IJavaAction`의 경우:
   1. 새 `IJavaAction`의 경우 – 모듈에 추가합니다. 추가된 후에만 `IQualifiedName`에 액세스하십시오.
   2. 기존 `IJavaAction`의 경우 – 앱에서 찾아 `IQualifiedName`을 `IJavaActionCallAction`의 `JavaAction` 속성에 전달합니다.

```csharp
public void CreateMicroflowAndJavaAction(IModule module, IModel currentApp)
{
    using var transaction = currentApp.StartTransaction("Create microflows");

    var microflow = microflowService.CreateMicroflow(currentApp, module, "Microflow");

    var javaActionActivity = currentApp.Create<IActionActivity>();
    var javaCallAction = currentApp.Create<IJavaActionCallAction>();
    var javaAction = currentApp.Create<IJavaAction>();
    javaAction.Name = "java_action";

    // Java 액션 파일을 모듈에 추가한 후 정규화된 이름을 사용해야 합니다.
    module.AddDocument(javaAction);

    javaCallAction.JavaAction = javaAction.QualifiedName;
    javaActionActivity.Action = javaCallAction;

    microflowService.TryInsertAfterStart(microflow, javaActionActivity);

    transaction.Commit();
}
```

이전에 Java 액션 파일을 이미 생성했다면 해당 `IQualifiedName`을 Java 액션에 전달할 수 있습니다. 실제 객체를 검색하려면 모델을 쿼리해야 합니다. 다음과 같이 할 수 있습니다:

```csharp
IQualifiedName FindJavaAction(string name, IModule module)
{
    var javaAction = module.GetDocuments().OfType<IJavaAction>().Single(ja => ja.Name == name);
    return javaAction.QualifiedName;
}
```

[전체 코드](https://github.com/mendix/ExtensionAPI-Samples)를 다운로드하여 전체 구현을 확인하십시오.
