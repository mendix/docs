---
title: "Workflow Parameters"
parent: "workflows"
menu_order: 05
tags: ["workflow", "workflows", "parameters", "workflow parameters"]
---

## 1 Introduction

A parameter is a special kind of variable that is used as input for the workflow. When a workflow is triggered, the parameters are filled with the current values.

In the workflow editor, you can see two parameters in the top-left corner: **WorkflowContext** and **WorkflowInstance**. In the picture below, the object is shown in *blue* and the parameter name is shown in *black*.

![](attachments/workflow-parameters/workflow-parameters.png)

The **WorkflowInstance** parameter stores data on the workflow process. 

The **WorkflowContext** parameter is a business-related data that travels through the workflow. 

## 2 Properties

### 2.1 Entity {#entity}

The entity used by the workflow parameter. 

For **WorkflowInstance** parameter uses an entity that stores data on the workflow process. An **WorkflowInstance** entity (a specialization of **System.Workflow**) is generated when you create a new workflow and is automatically related to this parameter. You can add attributes to this entity that are specific to the workflow process and will be used throughout it. 

The **WorkflowContext** parameter uses a business-related entity that travels through the workflow. 

{{% alert type="info" %}}

The **WorkflowInstance** entity should have a one-to-one or a one-to-many association to the **WorkflowContext** entity. 

{{% /alert %}}

### 2.2 Name

**Name** is the name of the parameter and cannot be changed. 



