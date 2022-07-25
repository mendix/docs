---
title: "Workflow Properties"
url: /refguide/workflow-properties/
weight: 10
tags: ["workflow", "workflows", "workflow properties", "Studio Pro"]
---

## 1 Introduction

This document describes workflow properties. For details on what workflows are for and what kind of elements you can use there, see [Workflows](/refguide/workflows/).

## 2 Workflow Properties

Workflow properties consist of the following sections:

* [Admin page](#admin-page)
* [Common](#common)
* [Display information](#display-info)
* [Due date](#due-date)
* [Events](#events)
* [General](#general)

### 2.1 Admin Page Section {#admin-page} 

**Override admin page** is an optional page used for displaying an instance of the workflow to the workflow admin. This overrides a generic page used to display any workflow instances in the app, for example, when you have a **Show workflow admin page** set as an [on-click event](/refguide/on-click-event/#show-workflow-page) or as a [microflow action](/refguide/show-workflow-page/) and would like to override the page selected for this event/action. 

If you generate the page using the templates in **Workflows Commons** module, these templates contain necessary data containers and associated context entity.

### 2.2 Common Section {#common}

#### 2.2.1 Name {#name}

**Name** is the internal name of the workflow document. When referring to the workflow in the app you will use this name. It must be unique within the module, but you can have two workflows with the same name in different modules. When referring to the workflow, you will normally prepend the name of the module to ensure uniqueness and allow you to use workflows in other modules. 

You cannot change the **Name** of the workflow but you can change the [Caption](#general).

#### 2.2.2 Documentation

**Documentation** allows you to describe your workflow to make it easier for people to use and modify it.

### 2.4 Display Information Section {#display-info}

#### 2.4.1 Workflow Name

**Workflow name** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Workflow name** is used on preconfigured pages: the Admin Center and Workflow Admin page. 

The **Workflow name** can contain parameters that are written between braces, e.g. {1}.

For more information on using parameters, see the [Parameters](#parameters) section below.

#### 2.4.2 Workflow Description

**Workflow description** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Workflow description** is used in page templates. 

The **Workflow description** can contain parameters that are written between braces, e.g. {1}.

#### 2.4.3 Parameters {#parameters}

Parameters are attributes the value of which will be displayed. For example, you can display the name of the new employee who is being onboarded using the **FullName**  parameter.

To view **Parameters**, click the ellipsis icon next to the **Workflow name** or **Workflow description** in properties depending on where you would like to display these parameters. 

Parameters have the following settings:

* **Index** – an identification number of a parameter
* **Expression** – an XPath expression that will be displayed

##### 2.4.3.1 Adding New Parameters

To add a parameter to the **Workflow name** or the **Workflow description**, do the following:

1. Click the ellipsis icon next to the **Workflow name** or the **Workflow description**.

2. In the **Edit workflow name** dialog box > **Parameters** section, click the **New** button. 

3. In the **Template Parameter (String)** dialog box, specify the expression, and confirm your choice. 

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-properties/specifying-attribute.png" alt="Specifying the Attribute" >}}

    {{% alert color="info" %}}Make sure that the attribute you use in the expression is of the string type.{{% /alert %}}

4. In the **Template** setting, write the text you would like to display and type **Index** of the parameter you would like to include. In the example below, to include a full name of the new hire being onboarded, you need to use {1} index:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-properties/edit-workflow-name.png" alt="Edit Workflow Name Dialog Box" >}}

##### 2.4.3.2 Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

### 2.5 Events {#events}

**Events** section properties allow you to override app-wide events in the **App Settings** and to set a workflow-specific microflow that will be triggered on a state change of the current workflow and its user tasks. For more information on app-wide events, see the [Events](/refguide/app-settings/#events) section in *App Settings*.

#### 2.5.1 Workflow State Change 

{{% alert color="info" %}}

This setting overrides the app-wide setting in the **App Settings**. For more information see the [Workflow State Change](/refguide/app-settings/#workflow-state-change) section in *App Settings*.

{{% /alert %}}

**Workflow state change** allows you to select a microflow that is triggered when the state of the current workflow has changed, for example, when the workflow is in progress or completed. 

#### 2.5.2 User Task State Change

{{% alert color="info" %}}

This setting overrides the app-wide setting in the **App Settings**. For more information see the [User Task State Change](/refguide/app-settings/#user-task-state-change) section in *App Settings*.

{{% /alert %}}

**User task state change** allows you to select a microflow that is triggered when the state of a user task in the current workflow has changed, for example, when the a user task is completed or has failed. 

### 2.6 Due Date Section {#due-date}

**Due by** is stored in the System module on the **Workflow** entity as an attribute and its data can be dynamically displayed in the running app. For example, you can use it to set a deadline for the workflow and display it in your app. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the workflow. If you are using the **Workflow Commons** module, **Due by** is used in page templates. 

### 2.7 General Section {#general}

**Caption** defines a title of the workflow. You cannot change the [Name](#name) of the workflow but you can change the **Caption**.

## 3 Read More

* [Workflows](/refguide/workflows/)