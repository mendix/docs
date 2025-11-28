---
title: "Create Microflows for Calculations Using C#"
linktitle: "Calculation Microflows"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflows-for-calculations/
weight: 8
---

## Introduction

This how-to describes how to create microflows that perform calculations and return the result.

You can download the example in this how-to from [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating an Extension Class that Creates Microflows

1. Open the project you created when following [Create a Menu Extension](/apidocs-mxsdk/apidocs/csharp-extensibility-api-11/create-menu-extension/).
2. Add a new folder named *MicroflowTutorial* to your solution.
3. Create a `MenuExtension` class.
4. Add a new class named *CreateMicroflowsMenu.cs*.
5. Replace the code in the file with the following: 

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

    The code overrides the `GetMenus` method to add your custom menus into Studio Pro. The `CalculationsMicroflowCreator` class (added in the next step) is injected via the constructor and triggered by the menu action.

## Add the Microflow Creator Class

Add the `CalculationsMicroflowCreator.cs` class and follow the steps below:

1. Add the `Export` attribute to allow injection.
2. Add the `ImportingConstructor` attribute to support dependency injection.

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

This class includes one public method called `CreateMicroflows`, which is triggered when you click your custom menu. It needs the current app as a parameter to work.

The `CreateMicroflowsMenu` extension can access the current app through the `CurrentApp` property. When the menu is clicked, it passes `CurrentApp` to `CreateMicroflows`. 

The `CurrentApp` is the `IModel` that represents the app currently open in Studio Pro. Every extension that inherits from `UIExtensionBase` (like `MenuBarExtension`) has access to `CurrentApp`, which allows it to interact with and change the app's model. 

Add the method as follows:

```csharp
public void CreateMicroflows(IModel currentApp)
{
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");

    using var transaction = currentApp.StartTransaction("Create microflows");

    CreateMicroflowsInFolder(currentApp, module);

    transaction.Commit();
}
```

The `CreateMicroflows` method starts a new transaction by calling `currentApp.StartTransaction`, which is required to modify the model. If your class attempts to create microflows outside a transaction, it will result in an error. For more details, see [Interact with the Model API Using C#](/apidocs-mxsdk/apidocs/interact-with-model-api-10/).

Use `IMicroflowService` to create microflows. For more information, see [Create a Microflow and Add Activities Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflow-add-activities/). It requires:

* `IModel` (the current mode)
* `IFolderBase` (module or folder)
* Microflow name
* `MicroflowReturnValue` (optional)

A microflow returns a value with `IMicroflowExpression`. This can be done by using `IMicroflowExpressionService`, which returns an expression from a string input and sets the expression as the microflow's return value.

An example simple return value is seen below:

```csharp
new MicroflowReturnValue(DataType.Boolean, microflowExpressionService.CreateFromString("true or false"));
```

However, the example will have more complicated expressions, which use parameter names. These parameter names match the return values from called microflows.

This extension creates three microflows:

1. Multiplication microflow – multiplies integers and returns the result
2. Addition microflow – adds decimals and returns the result
3. Main microflow – Calls the above two microflows in sequence, subtracts the addition result from the multiplication result, and returns `true` or `false` if the value is larger than 0.

Use the `CreateMicroflowsInFolder` method to create the two microflows and their return values:

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

### Multiplication Microflow

To create a microflow that performs multiplication between two input parameters, use the code below:

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

The strings `multiplication1` and `multiplication2` match the parameters used in the expression for the return value. Note that for an expression, the dollar sign `$` must be put in front of the parameter name in order to be recognized as a variable input.

You can also see that the `DataType` of both parameters is integer.

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/multiplication-microflow.png" >}}

 ### Addition Microflow

To create a microflow that performs addition between two decimal values, use the code below:

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

Like the multiplication microflow example above, the strings `addition1` and `addition2` match the parameters used in the expression for the return value. Their `DataType` is decimal.

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/addition-microflow.png" >}}

## Create Call Activities 

After you create a microflow, you need to add a call activity (`IActionActivity`) so it can be used by other microflows. In the example, there is a method called `CreatMicroflowCallActivity` that works for both your multiplication and addition microflows.

Before one microflow can call another, you need to complete some prerequisites. This method can be broken down into parts:

```csharp
var microflowCallActivity = currentApp.Create<IActionActivity>();
var microflowCallAction = currentApp.Create<IMicroflowCallAction>();
microflowCallAction.MicroflowCall = currentApp.Create<IMicroflowCall>();
microflowCallAction.MicroflowCall.Microflow = calledMicroflow.QualifiedName;
microflowCallActivity.Action = microflowCallAction;

microflowCallAction.OutputVariableName = outputVariableName;
```

1. Create `IActionActivity`. This is the activity that will call another microflow.
2. Create `IMicroflowCallAction` and set it as the `Action` property of the `IActionActivity`.
3. Create `IMicroflowCall` and set as the `MicroflowCall` property of the `IMicroflowCallAction`.
4. Set `QualifiedName` of the microflow you want to call as the `Microflow` property of the `MicroflowCall` object.
5. Set the `OutputVariableName` on `IActionActivity` so the calling microflow can use the result returned by the called microflow.

## Passing Parameters to Called Microflows

You can pass parameters to the action activity, which will be the input for the called microflow. This set of parameters is a `Tuple` of a name and an expression. In the example, these parameters are the two integers for the multiplication microflow and the two decimals for the addition microflow.

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

Paste the code into your `CalculationsMicroflowCreator` class.

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

To create a call activity for your multiplication and addition microflows, use code similar to the following: 

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

As you can see, the parameter names for the activity match the parameter name from the microflow. Their values are passed in for integers and decimals.

The calling microflow looks as seen below:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/main-microflow.png" >}}

## Java Actions

You can create a microflow activity that calls a Java Action. This must be done inside a transaction (`IModel.StartTransaction`).

1. Start a transaction using `IModel.StartTransaction`.
2. Create an `IActionActivity`.
3. Set the `Action` property to `IJavaActionCallAction`.
4. Link `IJavaActionCallAction` to the `IJavaAction`.
5. Set the `JavaAction` property to the `IQualifiedName` of the `IJavaAction`.
6. For `IJavaAction`:
   1. For a new `IJavaAction` – add it to the module. Only access its `IQualifiedName` after it has been added.
   2. For an existing `IJavaAction` – find it in the app and pass its `IQualifiedName` to the `IJavaAction` property of `IJavaActionCallAction`.

```csharp
public void CreateMicroflowAndJavaAction(IModule module, IModel currentApp)
{
    using var transaction = currentApp.StartTransaction("Create microflows");

    var microflow = microflowService.CreateMicroflow(currentApp, module, "Microflow");

    var javaActionActivity = currentApp.Create<IActionActivity>();
    var javaCallAction = currentApp.Create<IJavaActionCallAction>();
    var javaAction = currentApp.Create<IJavaAction>();
    javaAction.Name = "java_action";

    // must add Java action file to module before using its qualified name
    module.AddDocument(javaAction);

    javaCallAction.JavaAction = javaAction.QualifiedName;
    javaActionActivity.Action = javaCallAction;

    microflowService.TryInsertAfterStart(microflow, javaActionActivity);

    transaction.Commit();
}
```

If you already previously created a Java action file, you can pass its `IQualifiedName` to the Java action. You will need to query the model to retrieve the actual object. You can do so as follows:

```csharp
IQualifiedName FindJavaAction(string name, IModule module)
{
    var javaAction = module.GetDocuments().OfType<IJavaAction>().Single(ja => ja.Name == name);
    return javaAction.QualifiedName;
}
```

Download the [whole code](https://github.com/mendix/ExtensionAPI-Samples) to see the full implementation. 
