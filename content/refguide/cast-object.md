---
title: "Cast Object"
parent: "object-activities"
menu_order: 1
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The cast object activity can be used in a microflow after an [object type decision](object-type-decision) to change the type of object from the generalized object type to the specialized object type of the path out of the object type decision. 

To read more about specialization and generalization, see [Entities](entities).

{{% alert type="info" %}}

For the properties that all the activities share (for example, a caption), see [Common Properties](microflow-element-common-properties). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Output Properties

### 2.1 Object Name

This is the name for the result of the cast. It can be used by all activities that follow this activity.

## 3 Example

For a model share example, see [SUB question cast example](https://modelshare.mendix.com/models/5f80169c-9833-4574-b472-71a21e480d19/sub-question-cast-example).

In this example, there are three specializations of the **Question** object. Only an object of the specialized type **MultipleChoiceQuestion** performs some special actions, which will be done in a sub-microflow which has as the input type **MultipleChoiceQuestion**. Since an object of the type **Question** cannot get passed to the sub-microflow, the object first needs to get casted to the object type **MultipleChoiceQuestion**.
