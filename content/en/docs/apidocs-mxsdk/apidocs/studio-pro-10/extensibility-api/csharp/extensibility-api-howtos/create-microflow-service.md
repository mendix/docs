---
title: "Create a Microflow and Add Activities Using C#"
linktitle: "Microflows and Activities"
url: /apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflow-add-activities/
weight: 14
---

## Introduction

 This how-to describes how to create a new microflow and add activities to it. The `IMicroflowService` is used to perform actions related to microflows.

## Creating and Initializing a Microflow Using `Initialize`

The `Initialize` method initializes a microflow that was previously created. Follow the steps below:

1. Start a transaction using `IModel.StartTransaction`.
2. Create a microflow and add it to the module. Use `IModel.Create<IMicroflow>` to create the microflow and add it to the desired module.
3. Initialize the microflow by calling `IMicroflowService.Initialize`. The `Initialize` method sets up the start and end flows, and adds any parameters (for example, `boolParameter` of `DataType.Boolean`).
4. Insert activities into the microflow using `IMicroflowService.TryInsertAfterStart` to add the first activity, and `IMicroflowService.TryInsertBeforeActivity` to insert activities before others.

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

Note that this `IMicroflowService.Initialize` method requires multiple manual steps. For a simpler approach, use the `MicroflowService.CreateMicroflow`, described in the section below.

## Creating a Microflow Using `CreateMicroflow`

The `CreateMicroflow` method is the more advanced and comprehensive method to create microflows. It is an alternative to the `IMicroflowService.Initialize` method. The `CreateMicroflow` method handles initialization and model integration in one step. It requires:

* The current `IModel`
* `IFolderBase` (module or folder)
* A name
* Optional: 
    * `MicroflowReturnValue`
    * List of parameters

### Creating a Simple Microflow

As seen in the code below, the only requirements are `IModel`, the `IFolderBase`, and its name.

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

In this more advanced example, you see the `IMicroflowExpressionService.CreateFromString` method, which allows you to create expressions that can be then used as the `MicroflowReturnValue` of the microflow. Here, the expression is a simple addition of two values, and the return type is of `DataType.Integer`.

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

The `IMicroflowService.CreateMicroflow` method does not require manually creating the microflow with `IModel.Create<IMicroflow>`, then manually adding it to the `IFolderBase` container. For a comprehensive example on how to create microflows, see [Create Microflows for Calculations Using C#](/apidocs-mxsdk/apidocs/csharp-extensibility-api-10/create-microflows-for-calculations/)

## Inserting Activities

Use the following methods to insert activities into microflows:

* `TryInsertAfterStart` – adds an immediately after the start event 
* `TryInsertBeforeActivity` – inserts an actvitiy before another specific activity

```csharp
microflowService.TryInsertAfterStart(microflow, newActivity);
microflowService.TryInsertBeforeActivity(newAactivity, existingActivity);
```

## Retrieving Microflow Parameters

Use `GetParameters` method to retrieve all the input parameters of a microflow. 

It returns a list of `IMicroflowParameterObject`, which includes:

* Name
* `IQualifiedName` identifier
* Description
* `DataType`

```csharp
IReadOnlyList<IMicroflowParameterObject> parameters = _microflowService.GetParameters(microflow);
```

## Retrieving Microflow Activities

Use the `GetAllMicroflowActivities` method to retrieve all the activities in the flow of a microflow. It returns a list of `IActivity`.

```csharp
IReadOnlyList<IActivity> activities = _microflowService.GetAllMicroflowActivities(microflow);
```

## Checking for Variable Name Conflicts

Use the `IsVariableNameInUse` method to check if the microflow already contains a variable with the name provided. This can be called before adding a new activity to the flow whose output variable name can overlap with existing variables. 

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
