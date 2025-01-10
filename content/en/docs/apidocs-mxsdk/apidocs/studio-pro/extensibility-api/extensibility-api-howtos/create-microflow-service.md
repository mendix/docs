---
title: "Create a Microflow and Add Activities"
url: /apidocs-mxsdk/apidocs/extensibility-api/create-microflow-add-activities/
weight: 14
---

## Introduction

The `IMicroflowService` is the service used to perform actions related to microflows. This how-to describes how you can create a new microflow and add some activities to it.

## `Initialize`

The `Initialize` method initializes a microflow that was previously created. It is part of a series of steps required for adding a microflow to the model:

1. Start a transaction (`IModel.StartTransaction`).
2. Create a microflow and add it to the module (`IModel.Create<IMicroflow>`).
3. Call `IMicroflowService.Initialize`. 

Internally, the `Initialize` method sets up the start and end flows, and adds any parameters that might be passed in (in the example below, you are passing a single parameter `boolParameter` of `DataType.Boolean`).

In the example below, you also add activities to the microflow, with `IMicroflowService.TryInsertAfterStart` (adding an activity as the first) or `IMicroflowService.TryInsertBeforeActivity` (adding an activity before another).

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

As you can see, this `IMicroflowService.Initialize` method can be cumbersome to use, since it is only part of the whole process of creating a new microflow. To have an easier method of creating microflows, use the `MicroflowService.CreateMicroflow` method. This method is described in the next section.

## `CreateMicroflow`

The `CreateMicroflow` method is the more advanced and comprehensive method to create microflows. It is a good alternative to the `IMicroflowService.Initialize` method.
The `CreateMicroflow` takes care of initialization and adding everything to the model in one single step. It requires the current `IModel`, the `IFolderBase` (module or folder) in which to save the microflow, a name, an optional `MicroflowReturnValue`, and an optional list of parameters. See the code below for a few examples.

### Creating a Simple Microflow

As shown in the code below, all that is required to create a microflow and add it to the model is the `IModel`, the `IFolderBase` in which to add the microflow, and its name.

```csharp
public void CreateMicroflow(IModel currentApp)
{
    var module = currentApp.Root.GetModules().Single(m => m.Name == "MyFirstModule");

    using var transaction = currentApp.StartTransaction("Create microflows");
   
    var microflow = _microflowService.CreateMicroflow(currentApp, module, "Microflow");

    transaction.Commit();
}
```

### Creating Microflow with Return Type and Parameters

In this more advanced example, you will see the `IMicroflowExpressionService.CreateFromString` method, which allows you to create expressions that can be then used as the `MicroflowReturnValue` of the microflow. Here, the expression is a simple addition of two values, and the return type is of `DataType.Integer`.

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

The `IMicroflowService.CreateMicroflow` method is a bit easier to use than the `IMicroflowService.Initialize` method because it doesn't require manually creating the microflow with `IModel.Create<IMicroflow>` and then manually adding it to the `IFolderBase` container. It can do everything behind the scenes as long as everything is supplied to it. For a comprehensive example on how to create microflows, see [Create Microflows for Calculations](/apidocs-mxsdk/apidocs/extensibility-api/create-microflows-for-calculations/)

## `TryInsertAfterStart` and `TryInsertBeforeActivity`

The `TryInsertAfterStart` and `TryInsertBeforeActivity` methods enable inserting an activity in the flow. It can be added right after the start event of the microflow, or be inserted before another specific activity.

```csharp
microflowService.TryInsertAfterStart(microflow, newActivity);
microflowService.TryInsertBeforeActivity(newAactivity, existingActivity);
```

## `GetParameters`

The `GetParameters` method enables retrieving all the parameters that are inputs into a microflow. It returns a list of `IMicroflowParameterObject`, which is composed of its name, its `IQualifiedName` identifier, a description, and its `DataType`. Any parameters passed into the microflow will be returned here together with their type.

```csharp
IReadOnlyList<IMicroflowParameterObject> parameters = _microflowService.GetParameters(microflow);
```

## `GetAllMicroflowActivities`

The `GetAllMicroflowActivities` method enables retrieving all the activities in the flow of a microflow. It returns a list of `IActivity`.

```csharp
IReadOnlyList<IActivity> activities = _microflowService.GetAllMicroflowActivities(microflow);
```

## `IsVariableNameInUse`

The `IsVariableNameInUse` method can check if the microflow already contains a variable with the name provided. This can be called before adding a new activity to the flow whose output variable name can overlap with existing variables. An example is as follows:

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
