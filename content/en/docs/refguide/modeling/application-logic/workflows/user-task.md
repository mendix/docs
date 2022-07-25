---
title: "User Task"
url: /refguide/user-task/
weight: 15
tags: ["workflow", "workflows", "user task", "task", "Studio Pro"]
---

## 1 Introduction

User task allows you to assign a workflow task to a certain user or a group of users. 

For example, you can add filters and assign a task to users with the Manager role:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/user-task/user-task.jpg" alt="User Task Example" >}}

When the workflow reaches the user task activity, the task is created and will be displayed in the Task inbox if you are using the **Workflow Commons** module:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/user-task/task-inbox.jpg" alt="Task Inbox" >}}

## 2 Properties

User task properties consist of the following sections:

* [Common](#common)
* [Display information](#display-info)
* [Due date](#due-date)
* [Events](#events)
* [General](#general)
* [Outcomes](#outcomes)
* [Task page](#task-page)
* [User assignment](#user-assignment)

### 2.1 Common Section {#common}

**Name** is the internal name of the user task. When referring to the user task in the app you will use this name. It must be unique within the workflow, but you can have two user tasks with the same name in different workflows. 

### 2.2 Display Information Section {#display-info}

#### 2.2.1 Task Name

**Task name** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task name** is used in page templates and on preconfigured pages to identify the task. 

For more information on using parameters, see the [Parameters](#parameters) section below.

#### 2.2.2 Task Description

**Task Description** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. If you are using the **Workflow Commons** module, the **Task description** is used in page templates. 

The **Task description** can contain parameters that are written between braces, e.g. {1}.

#### 2.2.3 Parameters {#parameters}

Parameters are attributes the value of which will be displayed. For example, you can display when the task is due using the **DueDate** parameter.

To view **Parameters**, click the ellipsis icon next to the **Task name** or **Task description** in properties depending on where you would like to display these parameters. 

Parameters have the following settings:

* **Index** – an identification number of a parameter
* **Expression** – an XPath expression that will be displayed

##### 2.2.3.1 Adding New Parameters

To add a parameter to the **Task name** or the **Task description**, do the following:

1. Click the ellipsis icon next to the **Task  name** or the **Task description**.

2. In the **Edit task name/description** dialog box > **Parameters** section, click the **New** button. 

3. In the **Template Parameter (String)** dialog box, specify the expression, and confirm your choice:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/user-task/parameter-example.jpg" alt="Parameter Example" >}}

    {{% alert color="info" %}}Make sure that the attribute you use in the expression is of the string type.{{% /alert %}}

4. In the **Template** setting, write the text you would like to display and type **Index** of the parameter you would like to include. For example, you can add a template for the **Task description** specifying the name of the workflow and what the workflow due date is :

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/user-task/task-description-example.jpg" alt="Task Description Example" >}} 


##### 2.2.3.2 Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click **Delete** or press <kbd>Delete</kbd> on your keyboard
* **Edit** – double-click a parameter to edit it or click **Edit**
* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**
* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

### 2.3 Due Date Section {#due-date}

**Due by** is stored in the System module on the **UserTask** entity as an attribute and its data can be dynamically displayed in the running app. For example, you can use it to set a deadline for the user task and display it in your app. However, this is not an automatic reminder but rather a deadline you reference when keeping track of the user task. If you are using the **Workflow Commons** module, **Due by** is used in page templates and preconfigured dashboards. 

### 2.4 Events Section {#events}

**On Created** event allows you to select a microflow that is executed immediately after users have been determined for a newly created task instance. You can use this setting for a microflow that will send an email notification about the user task to the assigned users.

### 2.5 General Section {#general}

**Caption** defines a title of the user task. 

### 2.6 Outcomes Section {#outcomes}

The outcomes property allows you to create new outcomes for the user task. Outcomes are translated into different outgoing paths of the user task and can be referred to by other elements, such as a button. For example, you have a process when you need to approve or reject a request. One button on a [task page](#task-page) can refer to the **Approve** outcome of the user task, while another one can use the **Reject** outcome. 

### 2.7 Task Page Section {#task-page}

**Task page** is the page that an assigned user will use to inspect their task and complete it. You can also allow users to add comments or attachments on this page. 

If you generate the page using the templates in the **Workflows Commons** module, these templates contain necessary data containers and associated context entity.

### 2.8 User Assignment Section {#user-assignment}

#### 2.8.1 Assign User Task Using {#assign-user-task}

**Assign user task using** allows you to manage what users will the task be assigned to. You can filter users using XPath or implement more flexible logic and add several checks using a microflow. 

Possible options of this property are described in the table below:

| Option    | Description                                                  |
| --------- | ------------------------------------------------------------ |
| XPath     | Allows you to filter users who should be assigned the user task. For example, you can assign a certain task only to users with the Manager user role. You can use attributes of the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |
| Microflow | Allows you to assign the user task to certain users. Using microflow you can check, for example, which users have the right to approve user tasks and are currently not on vacation and assign the task only to users who passed the check.<br />The return type of the microflow should be the **User Entity** set in [App Settings](/refguide/app-settings/#workflows). |

#### 2.8.2 XPath Constraint

Specifies the expression used to assign the user task. This option is displayed only when the [Assign user task using](#assign-user-task) is set to **XPath**.   

#### 2.8.3 Microflow

Specifies the microflow used to assign the user task. This option is displayed only when the [Assign user task using](#assign-user-task) is set to **Microflow**.   

#### 2.8.4 Auto Assign When Result Is One User {#auto-assign}

Enables automatically assigning a user task when a single user is targeted. This option is displayed only when the [Assign user task using](#assign-user-task) is set to **XPath** or **Microflow**. 

## 3 Read More

* [Workflows](/refguide/workflows/)