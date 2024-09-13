---
title: "Workflow Properties"
url: /refguide/workflow-properties/
weight: 10
---

## Introduction

This document describes workflow properties. For details on what workflows are for and what kind of elements you can use there, see [Workflows](/refguide/workflows/).

## Workflow Properties

Workflow properties consist of the following sections:

* [General](#general)
* [Due date](#due-date)
* [Event Handlers](#event-handlers)
* ⚠ [Events (Deprecated)](#events)
* [Admin page](#admin-page)
* [Display information](#display-info)
* [Common](#common)

### General Section {#general}

**Caption** defines a title of the workflow. You cannot change the [Name](#name) of the workflow but you can change the **Caption**.

### Due Date Section {#due-date}

**Due date** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. For example, you can use it to set a deadline for the workflow and display it in your app. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the workflow. If you are using the **Workflow Commons** module, **Due date** is used in page templates. 

The **Due date** section properties are described in the table below:

| Property   | Description                                                                                                                                                                                                                                                          |
|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| None       | No due date is set.                                                                                                                                                                                                                                                  |
| Duration   | You can set the deadline for the workflow with the **Due in** option, which indicates the number of hours, days, or weeks the task is due in. Possible values of the property are the following ones:<br /><ul><li>Hours</li><li>Days</li><li>Weeks</li> </ul> |
| Expression | You can set a due date for the workflow writing an expression. For example, to set a due date to tomorrow, you can use `addDays([%CurrentDateTime%], 1)`.                                                                                                            |

### Event Handlers {#event-handlers}

**Event Handlers** section allows you to override the app-wide event handlers in the **App Settings** and to set workflow-specific event handlers that will be triggered when the workflow or its activities go through the transitions which warrant those workflow events. For more information on app-wide event handlers, see the [Events Handlers](/refguide/app-settings/#event-handlers) section in *App Settings*.

An event handler has the following configuration:

* **Name** – describes the event handler
* **Documentation** – provides more information regarding the usage of the event handler
* **When** – allows you to select the [workflow event types](/refguide/workflow-events/#workflow-event-types), for which the handler should be triggered
* **Microflow** – allows you to select a microflow that should be triggered for each of the above selected workflow event types

For more information on workflow events, see [Workflow Events](/refguide/workflow-events/).

{{% alert color="info"%}}
You can define multiple workflow-specific event handlers. Even if a single event handler is defined for a specific workflow definition, it overrides all available app-wide event handlers for the workflow instances belonging to that definition.
{{% /alert %}}

### ⚠ Events (Deprecated) {#events} 

{{% alert color="warning" %}}
State-change events are deprecated and replaced with the new [event handlers](#event-handlers) above that also contain events for state changes. It is suggested to migrate the microflows to the new event handlers.
{{% /alert %}}

**Events** section properties allow you to override app-wide events in the **App Settings** and to set a workflow-specific microflow that will be triggered on a state change of the current workflow and its user tasks. For more information on app-wide events, see the [Events](/refguide/app-settings/#events) section in *App Settings*.

#### Workflow State Change {#workflow-state-change}

{{% alert color="info" %}}
This setting overrides the app-wide setting in the **App Settings**. For more information see the [Workflow State Change](/refguide/app-settings/#workflow-state-change) section in *App Settings*.
{{% /alert %}}

**Workflow state change** allows you to select a microflow that is triggered when the state of the current workflow has changed, for example, when the workflow is in progress or completed.

#### User Task State Change {#user-task-state-change}

{{% alert color="info" %}}
This setting overrides the app-wide setting in the **App Settings**. For more information see the [User Task State Change](/refguide/app-settings/#user-task-state-change) section in *App Settings*.
{{% /alert %}}

**User task state change** allows you to select a microflow that is triggered when the state of a user task in the current workflow has changed, for example, when the a user task is completed or has failed.

### Admin Page Section {#admin-page}

**Override admin page** is an optional page used for displaying an instance of the workflow to the workflow admin. This overrides a generic page used to display any workflow instances in the app, for example, when you have a **Show workflow admin page** set as an [on-click event](/refguide/on-click-event/#show-workflow-page) or as a [microflow action](/refguide/show-workflow-page/) and would like to override the page selected for this event/action. 

If you generate the page using the templates in **Workflows Commons** module, these templates contain necessary data containers and associated context entity.

### Display Information Section {#display-info}

#### Workflow Name

**Workflow name** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Workflow name** is used on preconfigured pages: the Admin Center and Workflow Admin page. 

The **Workflow name** can contain parameters that are written between braces, for example, {1}.

For more information on using parameters, see the [Parameters](#parameters) section below.

#### Workflow Description

**Workflow description** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Workflow description** is used in page templates. 

The **Workflow description** can contain parameters that are written between braces, for example, {1}.

#### Parameters {#parameters}

Parameters are attributes the value of which will be displayed. For example, you can display the name of the new employee who is being onboarded using the **FullName**  parameter.

To view **Parameters**, click the ellipsis icon next to the **Workflow name** or **Workflow description** in properties depending on where you would like to display these parameters. 

Parameters have the following settings:

* **Index** – an identification number of a parameter
* **Expression** – an expression that results in a string value; usually it is an attribute from the context that is of type String, or is converted to a string, for instance, with `toString`

##### Adding New Parameters

To add a parameter to the **Workflow name** or the **Workflow description**, do the following:

1. Click the ellipsis icon next to the **Workflow name** or the **Workflow description**.

2. In the **Edit workflow name** dialog box > **Parameters** section, click the **New** button. 

3. In the **Template Parameter (String)** dialog box, specify the expression, and confirm your choice. 

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-properties/specifying-attribute.png" alt="Specifying the Attribute" class="no-border" >}}

   {{% alert color="info" %}}Make sure that the attribute you use in the expression is of the string type.{{% /alert %}}

4. In the **Template** setting, write the text you would like to display and type **Index** of the parameter you would like to include. In the example below, to include a full name of the new hire being onboarded, you need to use {1} index:

   {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-properties/edit-workflow-name.png" alt="Edit Workflow Name Dialog Box" class="no-border" >}}

##### Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

### Common Section {#common}

#### Name {#name}

**Name** is the internal name of the workflow document. When referring to the workflow in the app you will use this name. It must be unique within the module, but you can have two workflows with the same name in different modules. When referring to the workflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use workflows in other modules. 

You cannot change the **Name** of the workflow but you can change the [Caption](#general).

#### Documentation

**Documentation** allows you to describe your workflow to make it easier for people to use and modify it.

## Read More

* [Workflows](/refguide/workflows/)
