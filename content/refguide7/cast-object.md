---
title: "Cast Object"
parent: "object-activities"
---

{{% alert type="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The Cast Object activity can be used in a microflow after an [inheritance split](inheritance-split) to change the type of object from the generalized object type to the specialized object type of the path out of the inheritance split. 

To read more about specialization and generalization, see [Entities](entities).

{{% alert type="info" %}}

For the properties that all the activities share (for example, a caption), see [Microflow Element Common Properties](microflow-element-common-properties). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Output Properties

### 2.1 Variable Name

This is the variable name for the result of the cast. It can be used by all activities that follow this activity.

## 3 Example

For a model share example, click [here](https://modelshare.mendix.com/models/f099fba5-ba6a-4854-b4ac-1da63e5cc5f5/example-of-activity-cast-object).

In this example, there are three specializations of the **Question** object. Only an object of the specialized type **MultipleChoiceQuestion** performs some special actions, which will be done in a sub-microflow which has as the input type **MultipleChoiceQuestion**. Since an object of the type **Question** cannot get passed to the sub-microflow, the object first needs to get casted to the object type **MultipleChoiceQuestion**.
