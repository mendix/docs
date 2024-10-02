---
title: "Create Microflows for Calculations"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-microflows-for-calculations/
weight: 8
---

## Introduction

This how-to describes how you can create microflows which perform some calculations and return the result.

You can download the example in this how-to in [this GitHub repository](https://github.com/mendix/ExtensionAPI-Samples).

## Creating an Extension Class that Creates Microflows

1. Open the project that you previously created when you [created a menu extension](/apidocs-mxsdk/apidocs/extensibility-api/create-menu-extension/).
2. Add a new folder *MicroflowTutorial* to your solution.
3. Create a `MenuExtension` class.
4. Add a new class to the project and call it `CreateMicroflowsMenu.cs`.
5. Replace the code in the file with the code below. 

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

    As you can see, the `GetMenus` method is overridden to add your own menus to Studio Pro. The class `CalculationsMicroflowCreator` (which you will add shortly) will be called from the action of your menu. You can see that this class has been injected in the constructor of your menu extension.

## Microflow Creator

In this section, you will add the class `CalculationsMicroflowCreator.cs`, which will be injected into your menu extension so that it can be called from your menu action. Make sure to add the `Export` attribute to the class; otherwise, it will not be injected into your menu extension. The `ImportingConstructor` attribute on the constructor is also very important, as this allows the class to receive any required services via dependency injection.

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

This class contains one public method, which is the one called by your menu. The method `CreateMicroflows` requires the current app as the parameter. The `CreateMicroflowsMenu` extension has access to the `CurrentApp` property, so it will pass it to the method when calling it from the menu action. The `CurrentApp` property is the `IModel` for the app that is currently open in Studio Pro. Every extension that inherits the type `UIExtensionBase` (such as a `MenuBarExtension`) has access to the `CurrentApp` property and can interact and modify the model.

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

As you can see, the `CreateMicroflows` method starts a new transaction, by calling `currentApp.StartTransaction`, which is the only way an extension can modify the model of the app. If your class tried to create microflows outside of a transaction, an error will be thrown. For more information, see [Interact with the Model API](/apidocs-mxsdk/apidocs/extensibility-api/interact-with-model-api/).

 `IMicroflowService` enables creating microflows. For details, see [Create a Microflow and Add Activities](/apidocs-mxsdk/apidocs/extensibility-api/create-microflow-add-activities/). It requires the current model (`IModel`), the containing module or folder inside a module (`IFolderBase`), a name, and an optional `MicroflowReturnValue`. The return value is actually used in the example, so you will see how to create one as well.

A microflow returns a value with `IMicroflowExpression`. This can be achieved by using your `IMicroflowExpressionService`, which returns an expression from a String input, and set that expression as the microflow's return value.

A very simple `MicroflowReturnValue` can be created as follows:

```csharp
new MicroflowReturnValue(DataType.Boolean, microflowExpressionService.CreateFromString("true or false"));
```

However, the example will have more complicated expressions, which use parameter names. These parameter names match the return values from called microflows.
This simple extension will create three microflows. Two of them will perform mathematical calculations (multiplication and addition) and each of them will return their result. The other microflow will call these two microflows in sequence, compute their two results (subtract the addition result from the multiplication result), and return true or false if the value is larger than 0.

The method `CreateMicroflowsInFolder` will create the two microflows and the return values. Add the method.

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

To create a microflow which performs a multiplication between two input parameters (two numbers in this case), you can use the code below. As you can see, the String `multiplication1` and the String `multiplication2` match the parameters used in the expression for the return value. Note that for an expression, the dollar sign `$` must be put in front of the parameter name in order to be recognized as a variable input.

You can also see that the `DataType` of both parameters is integer.

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

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/multiplication-microflow.png" >}}

To create a microflow that performs an addition between two decimal values, you can use the code below. Just like the multiplication microflow example above, you can see that the String `addition1` and the String `addition2` match the parameters used in the expression for the return value. You can also see that their `DataType` is decimal.

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

 {{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/addition-microflow.png" >}}

Once a microflow is created, in order to enable this microflow to be called by other microflows, you need to add a call activity (`IActionActivity`). In the example, you have a method called `CreatMicroflowCallActivity` that can be used by both your multiplication and addition microflows.

There are a few prerequisites that you must complete before a microflow can be called by another microflow. This method can be broken down into parts:

```csharp
var microflowCallActivity = currentApp.Create<IActionActivity>();
var microflowCallAction = currentApp.Create<IMicroflowCallAction>();
microflowCallAction.MicroflowCall = currentApp.Create<IMicroflowCall>();
microflowCallAction.MicroflowCall.Microflow = calledMicroflow.QualifiedName;
microflowCallActivity.Action = microflowCallAction;

microflowCallAction.OutputVariableName = outputVariableName;
```

In order to create `IActionActivity`, `IMicroflowCallAction` must also be created, and set as the `Action` property of the `IActionActivity`.

Then, for `IMicroflowCallAction`, `IMicroflowCall` must also be created and set as the `MicroflowCall` property of the `IMicroflowCallAction`.

Next, `QualifiedName` of the microflow, which is to be called by this activity, must be set as the `Microflow` property of the `MicroflowCall` object.

Finally, you can set `OutputVariableName` on `IActionActivity`, which is what the calling microflow will read from the called microflow.

## Passing Parameters

It is also possible to pass a set of parameters to the action activity, which will be the inputs for the called microflow. This set of parameters is a simple `Tuple` of a name and an expression. In the example, these parameters are the two integers for the multiplication microflow and the two decimals for the addition microflow.

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

The method in its entirety is below and can be pasted into your `CalculationsMicroflowCreator` class.

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

To create a call activity for your multiplication and addition microflows, you can use something like the code below. As you can see, the parameter names for the activity match the parameter name from the microflow and their values are also passed in for integers and decimals.

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

The calling microflow looks as follows:

{{< figure src="/attachments/apidocs-mxsdk/apidocs/extensibility-api/main-microflow.png" >}}

## Java Actions

Outside of this calculation examples, you might want to create a microflow activity that calls a Java action file. See below for how to add an activity, and action and a call to the microflow to achieve that. Same as in the previous examples, you have to do this inside a transaction (`IModel.StartTransaction`).

First, create an `IActionActivity`, just like the calculation example above, but then, its `Action` property will have the type `IJavaActionCallAction` instead of `IMicroflowCallAction`. This `IJavaActionCallAction` will need to know which `IJavaAction` is linked to. You can achieve this by setting the property `JavaAction` on the `IJavaActionCallAction` object to the `IQualifiedName` of the `IJavaAction`. If you are creating a brand new `IJavaAction`, it is important to add it to the module before accessing its `IQualifiedName`. If you have `IJavaAction` already, and you want to set up a call for that one, find it in the app and pass along its `IQualifiedName`. See below for an example.

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

If you already have a Java action file that you previously created, simply pass its `IQualifiedName` to the Java action. You will need to query the model in order to retrieve the actual object. You can do so as follows:

```csharp
IQualifiedName FindJavaAction(string name, IModule module)
{
    var javaAction = module.GetDocuments().OfType<IJavaAction>().Single(ja => ja.Name == name);
    return javaAction.QualifiedName;
}
```

Download the [whole code](https://github.com/mendix/ExtensionAPI-Samples) to see the way it works in its entirety.
