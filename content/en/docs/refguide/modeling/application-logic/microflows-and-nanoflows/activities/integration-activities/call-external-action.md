---
title: "Call external action"
url: /refguide/call-external-action/
tags: ["studio pro", "integration activity", "call external action"]
weight: 5
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Call external action** activity allows you to call an external action that is defined by an OData service that your app consumes. You can pass parameters to the action and use its result.

## 2 Properties

An example of call external action properties is represented in the image below:

[ image: TODO ]

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The call external action properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

The properties dialog box consists of two tabs:

* [General](#general)
* [Public documentation](#public-documentation)

## 4 General Tab {#general}

### 4.1 Action

On the top of the General tab you will find the **Action** property, which contains the selected external action that will be called. By clicking **Select...** a selector dialog will pop up, which allows you to select an action from an OData service that you have consumed in your app.

After selecting an action, Studio Pro will verify if the types that are used by the parameters and the return value of the external action are available in your app. If a parameter or the return value has an enumeration type which is not yet consumed in your app, Studio Pro will create it. If a parameter or the return value is an object or a list of an external entity type that is not yet part of your domain model, it will ask you to confirm adding this external entity to the domain model. When you confirm this by clicking **OK**, the necessary external entities and enumerations will be added to the domain model of the same module as the current microflow you are editing. If you hit **Cancel**, the action will not be selected. 

### 4.2 Parameters

In the table below the selected action, you will find the parameters that are defined by the external action, with their name, type, and the value passed to them.

Selecting a row in the table and clicking **Edit parameter value**, or simply double-clicking it, will show you the [Edit External Action Parameter Mapping](#edit-parameter-mapping) dialog, where you can edit the value that will be passed when calling the external action.  

### 4.3 Output

The **Output** section shows what the action returns. You can use this value in the microflow, or choose not to use it.

## 5 Public Documentation Tab {#public-documentation}

In the **Public documentation** tab, you can find a **Summary** and a **Description**. These fields contain documentation provided by the author of the service.

## 6 Edit External Action Parameter Mapping Dialog {#edit-parameter-mapping}

[ image: TODO ]

The **Edit External Action Parameter Mapping** dialog allows you to set the value of an external action's parameter. You can either select a **Variable** from the dropdown field, or write a custom [microflow expression](/refguide/expressions/) that results in a value of the expected type.

Every parameter must have a value specified. When **Can be empty** is true, the selected variable or expression may evaluate to `empty`. When the value cannot be empty, the microflow will throw an error when the value evaluates to `empty`.
