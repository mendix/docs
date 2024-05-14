---
title: "Workflows"
url: /refguide/workflows/
weight: 20
tags: ["workflow", "workflows", "Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Workflow is a visual language that allows you to build extendable processes. It is fully integrated with other visual languages, such as the microflow editor and page editor. Implementing workflow processes is vital for organizations to enhance operational efficiency, ensure compliance with regulations, and mitigate risks. 

### 1.1 Why Do Organizations Implement Workflow Processes?

Below are the key reasons why organizations adopt workflow processes:

* Compliance management:
    * Ensuring adherence to local rules, regulations, and laws.
    * Facilitating the documentation of actions taken, decisions made, and available data, providing a clear audit trail.

* Performance improvement:
    * Enhancing Key Performance Indicators (KPIs) by identifying and addressing bottlenecks.
    * Reducing the time to complete tasks, thereby minimizing overdue penalties.
    * Enhancing the quality and efficiency of operations, leading to improved worker satisfaction.

* Risk reduction:
    * Preventing overdue penalties by streamlining processes.
    * Anticipating potential bottlenecks that could impact KPIs or introduce additional risks.
    * Avoiding overwork and stress among users and teams, thus maintaining compliance and productivity.

### 1.2 When to Automate a Process with Workflows?

Automating a process with workflow is most effective when the process meets specific criteria, ensuring smooth execution and optimization. By automating such processes, organizations can streamline operations, reduce errors, enhance efficiency, and free up human resources for more strategic tasks, ultimately driving productivity and achieving better outcomes. 

Here is when a process can be successfully automated:

* Well-defined and known – the process is clearly understood and documented.
* Repeatable nature – the process involves tasks that are performed regularly or in a cyclical manner.
* High frequency of execution – the process occurs frequently, requiring consistent handling.
* Involvement of multiple participants – the process requires collaboration among different individuals or departments.
* Combination of human and automated tasks – it involves a mix of activities that can be performed both by humans and automated systems.
* Stability – the process remains relatively unchanged over time, with minimal variations.
* Series of activities – it comprises a sequence of interconnected steps or actions.
* Longer duration – the process spans a significant period, ranging from hours to months, without significant alterations.

### 1.3 When Not to Use Workflows?

While workflow processes offer numerous benefits, they may not always be the ideal solution for every scenario. 

Here are situations where the use of workflows might not be appropriate:

* Lack of applicability – if not all the criteria outlined in the section above for automating a process are met, it may not be a suitable use case for workflow implementation.
* High degree of collaboration and interaction – processes characterized by extensive collaboration and interaction among individuals, where no clear path can be defined, may not align well with workflow structures.
* Dynamic or unpredictable work – processes that involve dynamic or unknown elements, or where individuals require a high degree of freedom to decide their next actions, may not fit within the constraints of a workflow.
* Outcome-driven processes – processes focused more on achieving specific outcomes rather than following a predefined series of steps may not be best suited for workflow implementation. It might be beneficial to consider alternative approaches, such as utilizing multiple smaller workflows that are loosely coupled with other logic.

### 1.4 Example Use Cases

While many applications built on Mendix are data or transaction-centric, the integration of workflow capabilities varies based on specific requirements. Unlike dedicated BPM (Business Process Management) solutions where development revolves around process definitions, Mendix offers a versatile development paradigm with multiple editors, including the workflow editor, enabling seamless incorporation of workflows into broader application design. 

Below presents a few example use cases that are a good fit for Mendix workflows:

* Maintenance plan approval:
    
    A customer migrated their industrial equipment maintenance plans from spreadsheets to Mendix. While the core functionality revolves around these plans, instances requiring deviations necessitate a structured review and approval process facilitated by workflows.

* Supply chain management in a regulated industry:
    
    A company in a highly regulated process industry leveraged Mendix to manage supply chain information changes like changes in packaging, weight and other conditions. Their application validates and assesses the impact of supply changes at each stage of the process, ensuring seamless adaptation to evolving requirements.

* Migration from dedicated BPM platforms:
    
    Customers transitioning from dedicated BPM platforms to Mendix for reasons such as cost reduction, simplified maintenance, enhanced user experience, and accelerated time-to-value.

* Dynamic business process support for a new product launch:
    
    A bank required a rapid application development to support an end-to-end business process for a new product launch. While the initial phase demanded dynamic collaboration between various teams, the subsequent legal and financial review and approval process was seamlessly integrated using Mendix workflows.

* Automated customer onboarding with orchestration:
    
    An organization developed an application to streamline customer onboarding, involving orchestration across multiple systems. Although the process was highly automated, Mendix workflows were utilized to prompt user intervention in cases of invalid situations, ensuring a smooth onboarding experience.

## 2 Workflow Elements

A workflow is composed of elements that you can use in the workflow editor: you can either see them in the working area (start and end events, a parameter), or drag them from **Toolbox** to the flow. For more information, see [Workflow Elements](/refguide/workflow-elements/). 

## 3 Workflow Variables

Workflows have dedicated variables that can be used in an XPath and Expressions inside the Workflow editor. 

The list of variables is described below: 

* `$WorkflowContext` – an instance of the business-related entity that travels through the workflow
* `$WorkflowInstance` – an instance of a currently running workflow ([System.Workflow](/refguide/workflow-engine/#system-workflow))

For example, you can use these variables as parameters in the **Task name** and **Task description** properties of a user task. For more information, see [User Task](/refguide/user-task/). 

## 4 Performing Basic Functions

You can perform the following basic functions when working on workflows:

* [Add a workflow](#add-workflow)
* [Open a workflow](#open-workflow)
* [Delete a workflow](#delete-workflow)
* [Add elements to a workflow](#add-elements-to-workflow)
* [Move elements in a workflow](#move-elements)
* [Cut, copy, or paste elements in a workflow](#cut-copy-paste-elements)
* [View element properties](#view-element-properties)
* [Trigger a workflow from a page or via a microflow](#trigger-workflow)
* [Export a workflow to an image](#export-workflow)
* [Switch between portrait and landscape editor orientation](#orientation-modes)

### 4.1 Adding a Workflow {#add-workflow}

To add a workflow to your app, do the following:

1. In the [App Explorer](/refguide/app-explorer/), right-click the module or a folder you want to create a page in and select **Add workflow**.
2. In the **Add Workflow** dialog box, fill in the **Name** for the workflow.
3. Select an **Entity** to use it as a [workflow parameter](/refguide/workflow-parameters/):

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/add-workflow-dialog.png" alt="Adding Workflow" class="no-border" >}}

The workflow is created.

### 4.2 Opening a Workflow {#open-workflow}

To open a workflow in Studio Pro, do the following:

1. In the [App Explorer](/refguide/app-explorer/), open a module where this workflow is located.
2. Navigate to the workflow’s location inside the module and double-click the workflow.

The selected workflow is opened.

### 4.3 Deleting a Workflow {#delete-workflow}

To delete a workflow, do the following:

1. In the [App Explorer](/refguide/app-explorer/), select a workflow you would like to delete and right-click it.
2. In the displayed list, select **Delete** and confirm your choice by clicking **Delete** in the pop-up dialog.

The selected workflow is deleted. 

{{% alert color="info" %}}
The **Workflow** entity that was generated when the workflow was created remains in the domain model. You have to delete it manually.
{{% /alert %}}

### 4.4 Adding Elements to a Workflow {#add-elements-to-workflow}

There are several ways to add an element to a workflow:

* You can add an element via the **Toolbox**:

    1. Open the **Toolbox**.
    2. Select an element you would like to add and drag this element into the working area.

* You can add an element via an path in your workflow (available from Studio Pro 10.4.0):

    1. Place your mouse on any path you would like to add an element to. A plus icon appears to indicate that a new element can be added.
    2. Click the plus icon and select an element from the pop-up menu.

* You can also add an element by right-clicking an existing element (available from Studio Pro 10.4.0):

    1. Right-click an existing element and go to **Insert after**.
    2. Select an element from the menu.

When adding elements, note the following:

* It is not possible to add an **End** event or a **Jump** activity after an element as this makes the next element unreachable.
* It is not possible to add an **End** event or a **Jump** activity before an **End** event or a **Jump** activity as this makes the next element unreachable.
* An **End** event cannot be placed in paths of a parallel split. This is the same for placing an **End** event on, for example, an outcome of a user task if this user task is placed on a path of a parallel split. 

### 4.5 Moving Elements and Paths in a Workflow {#move-elements}

#### 4.5.1 Moving Elements in a Workflow

You can move elements around in your workflow. To do so, drag and drop an element to another path in the working area. 

This moves the whole structure of the dragged element, meaning that the element and its underlying elements are moved too.

You cannot move the first (and only) start event and the last end event.

#### 4.5.2 Moving Outgoing Paths in a Workflow

You can swap outgoing paths from a parallel split, a user task, or a decision in a workflow. To do so, drag and drop a path to another path of the same element.

This swaps the dragged path and its content with the targeted path. You can only swap paths that come from the same element.

### 4.6 Cutting/Coping/Pasting Elements in a Workflow {#cut-copy-paste-elements}

To cut/copy/paste elements, use <kbd>Ctrl</kbd> + <kbd>X</kbd> /  <kbd>Ctrl</kbd> + <kbd>C</kbd> / <kbd>Ctrl</kbd> + <kbd>V</kbd> or  <kbd>Cmd</kbd> + <kbd>X</kbd> /  <kbd>Cmd</kbd> + <kbd>C</kbd> / <kbd>Cmd</kbd> + <kbd>V</kbd>.

When using cut/copy/paste, note the following:

* When cutting or copying an element, the clipboard contains the whole structure of the element. For example, when copying a **User Task** with **Outcomes** which contain activities, the **User Task** and the **Outcomes** and its activities are copied. 

    Note that copying a **User Task** or a **Microflow** does not create a copy of the elements that are being referenced. Instead, the copied element will have the same references as the original. For example, when the original **User Task** has a task page configured, the copied **User Task** refers to the same task page.
* When no element is selected in the workflow, the clipboard content is pasted at the end of the workflow.
* When the start event is selected, the clipboard content is pasted at the start of the workflow.
* When an activity is selected, the clipboard content is pasted under the selected activity.
* When a flow is selected, the clipboard content is pasted at the beginning of the selected flow.
* When the clipboard contents has an **Annotation**, it can only be pasted into the workflow or into individual activities that support annotations.
* Pasting an activity after an **End** or **Jump** activity results in a consistency error as an **End** or **Jump** activity should be placed at the end of a flow.
* Pasting activity can result in a consistency error when the next activity becomes unreachable by either placing an **End** or **Jump** activity in front of it or when all flows before a merge end with an **End** or **Jump** activity.

#### 4.6.1 Elements that Cannot be Cut, Copied or Pasted

The following elements cannot be cut, copied or pasted in the workflow editor:

* Workflow (this can be only be done in the [App Explorer](/refguide/app-explorer/#basic-functions))
* WorkflowContext
* Start activity
* End activity (the final **End activity** which is at the end of the workflow)
* Outcomes (meaning outcomes of different outgoing flows from an activity that can have several flows, for example, a Decision)

### 4.7 Viewing Element Properties {#view-element-properties}

To view properties of an element, do one of the following:

1. Select an element and open **Properties** pane to view its properties.
2. Right-click an element and select **Properties** from the list of options that opens.
3. Double-click an element.

### 4.8 Triggering a Workflow {#trigger-workflow}

You can trigger a workflow [from a page](#trigger-page) or [via a microflow](#trigger-microflow). 

#### 4.8.1 Triggering a Workflow from a Page {#trigger-page}

To start the workflow, you can add a widget with a specific on-click event on a page. For more information on on-click events, see [On Click Event and Events Section](/refguide/on-click-event/).

Do the following:

1. Open a page from where you would like to trigger a workflow.
2. Make sure you have a data container with the workflow context on your page. 
3. Drag a widget that has on-click event in its properties (for example, a button) into the data container with the workflow context. 
4. Open button's properties > **Events** section. 
5. Set **On-click** property to **Call workflow**. 
6. Set **Workflow** to the workflow you would like to trigger.

You have configured the button to trigger the workflow.

#### 4.8.2 Triggering a Workflow via a Microflow {#trigger-microflow}

To trigger a workflow via a microflow, you can add a **Call workflow** activity to the microflow. For more information on this activity, see [Call Workflow](/refguide/workflow-call/).  

Do the following:

1. Open a microflow that will trigger a workflow.
2. Make sure the microflow has a necessary parameter with the workflow context.
3. In the **Toolbox**, find **Call workflow** activity and drag it into the microflow.
4. Double-click the activity to open its properties.
5. Set **Workflow** to to the workflow you would like to trigger.
6. Set **Context object** to the workflow context:

    {{< figure src="/attachments/refguide/modeling/application-logic/workflows/call-workflow-example.png" alt="Call Workflow Example" width="500" class="no-border" >}}

7. Click **OK**.

Now when you run this microflow, it will trigger the selected workflow. 

### 4.9 Exporting a Workflow to an Image {#export-workflow}

There are two ways to export a workflow to an image: 

* Through the [File menu](/refguide/file-menu/) in the top bar: **File** > **Export as image**.
* By clicking **Export as image** in the upper-left corner of the workflow editor.

Both options open a **Save file** dialog-box allowing you to choose a name and location for the exported image. After clicking **Save** the **Export workflow model to image** dialog-box is opened, where you can change parameters for your image export such as a transparent or opaque background and a relative size of the exported image by selecting a zoom level:

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/export-workflow-to-image.png" alt="Export workflow to image prompt" width="600" class="no-border" >}}

The current document is exported as an image in the .png format.

### 4.10 Switching between Portrait and Landscape Editor Orientation {#orientation-modes}

You can switch between the portrait (vertical) and landscape (horizontal) editor orientation by clicking the orientation icon located in the upper-right corner of the workflow editor. Despite potential minor visual differences in certain canvas elements, the functionality remains entirely consistent across both rendering modes.

It is important to bear in mind that the chosen orientation is not preserved or shared across projects. Consequently, each time you re-open a workflow, the orientation will reset to its default portrait mode.

## 5 Workflow-Specific Activities in Microflows

You can add workflow-related activities to your microflows. For more information on these activities, see [Workflow Activities](/refguide/workflow-activities/). 

## 6 Workflow-Specific On-Click Events on Pages

You can trigger workflows or user tasks from pages via specific on-click events configured on widgets. For more details, see [On Click Event and Events Section](/refguide/on-click-event/).

## 7 Workflow Commons Module

The [Workflow Commons](/appstore/modules/workflow-commons/) module is a workflow specific module that has preconfigured page templates, pages, dashboards, etc. It can save you a lot of time during development. You can either download it from the Marketplace or use one of the app templates when creating a new app in the Developer Portal. These templates already contain the **Workflows Commons** module.

For more information on how to configure the **Workflow Commons** in an existing app, see [Adding a Workflow to an Existing App with Workflow Commons](/refguide/workflow-setting-up-app/).

## 8 Workflow Engine

The Workflow Engine is the Mendix Runtime engine for executing workflows. For information on how the engine works, how you can interact with the engine, and what information it stores, see [Workflow Engine](/refguide/workflow-engine/).

## 9 Read More

* [Configuring a Workflow in Studio Pro for the Employee Onboarding Process](/refguide/workflow-how-to-configure/)
* [Configuring Security for a Workflow Process](/refguide/workflow-security/)
* [Jumping to Different Activities in a Workflow](/refguide/jump-to/)
* [Workflow Events](/refguide/workflow-events/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
* [Adding a Custom Action to the Workflow Toolbox](/refguide/add-action-to-workflow-toolbox/)
