---
title: "Workflows"
url: /refguide/workflows/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document provides a general introduction to workflows, including the reasons why organizations adopt workflow processes, when and when not to use workflows, and a few Mendix workflow business use cases. For instructions on how to perform Mendix workflow basic functions, see [Performing Workflow Basic Functions](/refguide/perform-workflow-basic-functions/).

Workflow is a visual language that allows you to build extendable processes. In Mendix Studio Pro, it is fully integrated with other visual editors, such as the microflow editor and page editor. Implementing workflow processes is beneficial for organizations that would like to enhance operational efficiency, ensure compliance with regulations, and mitigate risks. 

Below are the key reasons why organizations adopt workflow processes:

* Compliance management:
    * Ensuring adherence to local rules, regulations, and laws.
    * Helping to document any available data, including actions taken and decisions made. This helps to provide a clear audit trail.

* Performance improvement:
    * Improving key performance indicators (KPIs) by identifying and addressing bottlenecks.
    * Reducing the time to complete tasks and minimizing overdue penalties.
    * Enhancing the quality and efficiency of operations, which improves work satisfaction.

* Risk reduction:
    * Preventing overdue penalties by streamlining processes.
    * Anticipating potential bottlenecks that could impact KPIs or introduce additional risks.
    * Avoiding overwork and stress among users and teams, thus maintaining compliance and productivity.

For more information on when and when not to use workflows, see the [When to Use Workflows?](#when-to-use) and [When Not to Use Workflows](#when-not) sections below.

For information on Mendix workflow use cases, see the [Mendix Workflow Use Cases](#use-case) section below.

## When to Use Workflows {#when-to-use}

Automating a process with workflows is the most effective when the process meets specific criteria, ensuring smooth execution and optimization. 

Below are the criteria that a process should meet to be successfully implemented with workflows:

* Well-defined and known – the process is clearly understood and documented.
* Repeatable nature – the process involves tasks that are performed regularly or in a cyclical manner.
* High frequency of execution – the process occurs frequently, requiring consistent handling.
* Involvement of multiple participants – the process requires collaboration among different individuals or departments.
* Combination of human and automated tasks – the process involves a mix of activities that can be performed both by humans and automated systems.
* Stability – the process remains relatively unchanged over time, with minimal variations.
* Series of activities – it comprises a sequence of interconnected steps or actions.
* Longer duration – the process spans a significant period, ranging from hours to months.

## When Not to Use Workflows {#when-not}

While workflow processes offer numerous benefits, they may not always be the ideal solution for every scenario. 

Below are situations where the use of workflows might not be appropriate:

* Lack of applicability – if not MOST of the criteria outlined in the section above are met, it may not be a suitable use case for workflow implementation.
* High degree of collaboration and interaction – processes characterized by extensive collaboration and interaction among individuals, where no clear path can be defined, may not align well with workflow structures.
* Dynamic or unpredictable work – processes that involve dynamic or unknown elements, or where individuals require a high degree of freedom to decide their next actions, may not fit within the constraints of a workflow.
* Outcome-driven processes – processes focused more on achieving specific outcomes rather than following a predefined series of steps may not be best suited for workflow implementation. It might be beneficial to consider alternative approaches, such as utilizing multiple smaller workflows that are loosely coupled with other logic.

## Mendix Workflow Use Cases {#use-case}

Mendix provides a development platform which supports multiple editors. This enables the integration of workflows into broader application design. With Mendix, you can keep workflows focused on representing your business processes, while using the other logic (such as microflows and nanoflows) for more technical implementations.

The table below presents a few use cases that are a good fit for Mendix workflows:

| Use case | Description |
| --- | --- |
| Supply chain management in regulated industries | Companies in highly regulated process industries can use Mendix workflows to manage supply chain changes, such as changes in packaging, weight, and other conditions. Mendix workflows validate and assess the impact of these changes at each stage, ensuring smooth adaptation to evolving requirements. |
| Migration from dedicated BPM platforms | Customers can transition from dedicated BPM platforms to Mendix to reduce cost, simplify maintenance, enhance user experience, and accelerate time-to-value. |
| Maintenance plan approval | For customers who have migrated their industrial equipment maintenance plans from spreadsheets to Mendix, workflows provide a structured review and approval process for changes of predefined maintenance plans. |
| Dynamic business process support for a new product launch | For companies needing rapid application development to support end-to-end business processes for new product launches, Mendix workflows can be integrated for the subsequent legal and financial review and approval. |
| Automated customer onboarding process | Organizations that need to streamline customer onboarding can use Mendix workflows to automate the process across multiple systems and involve user intervention for invalid situations. This ensures a smooth onboarding experience. |

For more information on a concrete use case, see [Configuring a Workflow in Studio Pro for the Employee Onboarding Process](/refguide/workflow-how-to-configure/).

## Workflow Elements

A workflow is composed of elements that you can use in the workflow editor: you can either see them in the working area (start and end events, a parameter), or drag them from **Toolbox** to the flow. For more information, see [Workflow Elements](/refguide/workflow-elements/). 

## Workflow Variables

Workflows have dedicated variables that can be used in an XPath and Expressions inside the Workflow editor. 

The list of variables is described below: 

* `$WorkflowContext` – an instance of the business-related entity that travels through the workflow
* `$WorkflowInstance` – an instance of a currently running workflow ([System.Workflow](/refguide/workflow-engine/#system-workflow))

For example, you can use these variables as parameters in the **Task name** and **Task description** properties of a user task. For more information, see [User Task](/refguide/user-task/). 

## Workflow-Specific Activities in Microflows

You can add workflow-related activities to your microflows. For more information on these activities, see [Workflow Activities](/refguide/workflow-activities/). 

## Workflow-Specific On-Click Events on Pages

You can trigger workflows or user tasks from pages via specific on-click events configured on widgets. For more details, see [On Click Event and Events Section](/refguide/on-click-event/).

## Workflow Commons Module

The [Workflow Commons](/appstore/modules/workflow-commons/) module is a workflow specific module that has preconfigured page templates, pages, dashboards, etc. It can save you a lot of time during development. You can either download it from the Marketplace or use one of the app templates when creating a new app in [Apps](https://sprintr.home.mendix.com/). These templates already contain the **Workflows Commons** module.

For more information on how to configure the **Workflow Commons** in an existing app, see [Adding a Workflow to an Existing App with Workflow Commons](/refguide/workflow-setting-up-app/).

## Workflow Engine

The Workflow Engine is the Mendix Runtime engine for executing workflows. For information on how the engine works, how you can interact with the engine, and what information it stores, see [Workflow Engine](/refguide/workflow-engine/).

## Read More

* [Performing Workflow Basic Functions](/refguide/perform-workflow-basic-functions/)
* [Configuring a Workflow in Studio Pro for the Employee Onboarding Process](/refguide/workflow-how-to-configure/)
* [Configuring Security for a Workflow Process](/refguide/workflow-security/)
