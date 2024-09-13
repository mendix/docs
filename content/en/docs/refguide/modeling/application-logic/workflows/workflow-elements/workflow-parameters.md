---
title: "Workflow Parameters"
url: /refguide/workflow-parameters/
weight: 20
---

## Introduction

The **WorkflowContext** parameter provides the means by which you can pass business-related data to the workflow. An entity that stores the business-related data has to be selected as the parameter type. When a workflow is triggered, the parameter is filled with the current object of the specified entity.

In the workflow editor, you can see the **WorkflowContext** parameter in the upper-left corner. In the image below, the parameter type (the specified entity) is shown in color blue and the parameter name is shown in color black.

{{< figure src="/attachments/refguide/modeling/application-logic/workflows/workflow-elements/workflow-parameters/workflow-parameters.png" class="no-border" >}}

## Output Section

### Entity {#entity}

The entity that you select as the parameter type. What is passed through the parameter is the object of this entity. The passed object is often referred to as a workflow context object or a context object. The entity is often referred to as a workflow context entity.

### Name

**Name** is the name of the parameter. The name is set as **WorkflowContext** and cannot be changed. 
