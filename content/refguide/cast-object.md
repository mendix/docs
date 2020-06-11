---
title: "Cast Object"
parent: "object-activities"
menu_order: 10
tags: ["studio pro"]
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The cast object activity is used in a microflow after an [object type decision](object-type-decision) to change the type of object from the generalized object type to the specialized object type of the path out of the object type decision.

To read more about specialization and generalization, see [Entities](entities).

## 2 Properties

An example of cast object properties is represented in the image below:

![cast object properties](attachments/object-activities/cast-properties.png)

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The cast object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object Name

This is the name for the result of the cast. It can be used by all activities that follow this activity.

## 4 Common Section{#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Example

For example, there are three specializations of the **Question** object. Only an object of the specialized type **MultipleChoiceQuestion** needs to have some special actions performed on it. These will be done in a sub-microflow which has as the input type **MultipleChoiceQuestion**. Since an object of the type **Question** cannot get passed to the sub-microflow, the object first needs to be cast to the object type **MultipleChoiceQuestion**.

![Example of cast in a microflow](attachments/object-activities/cast-example.png)
