---
title: "Workflows"
url: /refguide/workflows/
weight: 20
tags: ["workflow", "workflows", "Studio Pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Workflow is a visual language that allows you to build extendable processes. It is fully integrated with other visual languages, such as the microflow editor and page editor. Implementing workflow processes is vital for organizations to enhance operational efficiency, ensure compliance with regulations, and mitigate risks. 

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

For more information on when and when not to use workflows, see the [When to Automate a Process with Workflows?](#when-to-use) and [When Not to Use Workflows?](#when-not) sections below.

For information on workflow use cases, see the [Workflow Example Use Cases](#use-case) section below.

For instructions on how to perform workflow basic functions, see [Performing Workflow Basic Functions](/refguide/perform-workflow-basic-functions/).

## 2 When to Automate a Process with Workflows? {#when-to-use}

Automating a process with workflow is most effective when the process meets specific criteria, ensuring smooth execution and optimization. By automating such processes, organizations can streamline operations, reduce errors, enhance efficiency, and free up human resources for more strategic tasks, ultimately driving productivity and achieving better outcomes. 

Below are the criteria that a process should meet to be successfully automated:

* Well-defined and known – the process is clearly understood and documented.
* Repeatable nature – the process involves tasks that are performed regularly or in a cyclical manner.
* High frequency of execution – the process occurs frequently, requiring consistent handling.
* Involvement of multiple participants – the process requires collaboration among different individuals or departments.
* Combination of human and automated tasks – the process involves a mix of activities that can be performed both by humans and automated systems.
* Stability – the process remains relatively unchanged over time, with minimal variations.
* Series of activities – it comprises a sequence of interconnected steps or actions.
* Longer duration – the process spans a significant period, ranging from hours to months, without significant alterations.

## 3 When Not to Use Workflows? {#when-not}

While workflow processes offer numerous benefits, they may not always be the ideal solution for every scenario. 

Below are situations where the use of workflows might not be appropriate:

* Lack of applicability – if not all the criteria outlined in the section above for automating a process are met, it may not be a suitable use case for workflow implementation.
* High degree of collaboration and interaction – processes characterized by extensive collaboration and interaction among individuals, where no clear path can be defined, may not align well with workflow structures.
* Dynamic or unpredictable work – processes that involve dynamic or unknown elements, or where individuals require a high degree of freedom to decide their next actions, may not fit within the constraints of a workflow.
* Outcome-driven processes – processes focused more on achieving specific outcomes rather than following a predefined series of steps may not be best suited for workflow implementation. It might be beneficial to consider alternative approaches, such as utilizing multiple smaller workflows that are loosely coupled with other logic.

## 4 Workflow Example Use Cases {#use-case}

While many applications built on Mendix are data or transaction-centric, the integration of workflow capabilities varies based on specific requirements. Unlike dedicated BPM (Business Process Management) solutions where development revolves around process definitions, Mendix offers a versatile development paradigm with multiple editors, including the workflow editor, enabling seamless incorporation of workflows into broader application design.

The table below presents a few use cases that are a good fit for Mendix workflows:

| Use case | Description |
| --- | --- |
| Supply chain management in a regulated industry | Companies in a highly regulated process industry can leverage Mendix workflows to manage supply chain information changes, such as changes in packaging, weight, and other conditions. The impact of supply changes at each stage of the process can be validated and assessed via workflows, ensuring seamless adaptation to evolving requirements |
| Migration from dedicated BPM platforms | Customers transitioning from dedicated BPM platforms to Mendix for reasons such as cost reduction, simplified maintenance, enhanced user experience, and accelerated time-to-value. |
| Maintenance plan approval | For customers who have migrated their industrial equipment maintenance plans from spreadsheets to Mendix, workflows facilitate to provide a structured review and approval process for instances requiring deviations. |
| Dynamic business process support for a new product launch | For companies who require a rapid application development to support an end-to-end business process for a new product launch, Mendix workflows can be seamlessly integrated for the subsequent legal and financial review and approval process. |
| Automated customer onboarding with orchestration | For organizations who need an application to streamline customer onboarding, involving orchestration across multiple systems, Mendix workflows can be utilized to prompt user intervention in cases of invalid situations, ensuring a smooth onboarding experience. |

## 5 Workflow Elements

A workflow is composed of elements that you can use in the workflow editor: you can either see them in the working area (start and end events, a parameter), or drag them from **Toolbox** to the flow. For more information, see [Workflow Elements](/refguide/workflow-elements/). 

## 6 Workflow Variables

Workflows have dedicated variables that can be used in an XPath and Expressions inside the Workflow editor. 

The list of variables is described below: 

* `$WorkflowContext` – an instance of the business-related entity that travels through the workflow
* `$WorkflowInstance` – an instance of a currently running workflow ([System.Workflow](/refguide/workflow-engine/#system-workflow))

For example, you can use these variables as parameters in the **Task name** and **Task description** properties of a user task. For more information, see [User Task](/refguide/user-task/). 

## 7 Workflow-Specific Activities in Microflows

You can add workflow-related activities to your microflows. For more information on these activities, see [Workflow Activities](/refguide/workflow-activities/). 

## 8 Workflow-Specific On-Click Events on Pages

You can trigger workflows or user tasks from pages via specific on-click events configured on widgets. For more details, see [On Click Event and Events Section](/refguide/on-click-event/).

## 9 Workflow Commons Module

The [Workflow Commons](/appstore/modules/workflow-commons/) module is a workflow specific module that has preconfigured page templates, pages, dashboards, etc. It can save you a lot of time during development. You can either download it from the Marketplace or use one of the app templates when creating a new app in the Developer Portal. These templates already contain the **Workflows Commons** module.

For more information on how to configure the **Workflow Commons** in an existing app, see [Adding a Workflow to an Existing App with Workflow Commons](/refguide/workflow-setting-up-app/).

## 10 Workflow Engine

The Workflow Engine is the Mendix Runtime engine for executing workflows. For information on how the engine works, how you can interact with the engine, and what information it stores, see [Workflow Engine](/refguide/workflow-engine/).

## 11 Read More

* [Configuring a Workflow in Studio Pro for the Employee Onboarding Process](/refguide/workflow-how-to-configure/)
* [Configuring Security for a Workflow Process](/refguide/workflow-security/)
* [Jumping to Different Activities in a Workflow](/refguide/jump-to/)
* [Workflow Events](/refguide/workflow-events/)
* [Workflow Versioning and Conflict Mitigation](/refguide/workflow-versioning/)
* [Adding a Custom Action to the Workflow Toolbox](/refguide/add-action-to-workflow-toolbox/)
