---
title: "Cast Object"
url: /refguide9/cast-object/
weight: 10
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Cast object** activity is used in a microflow after an [object type decision](/refguide9/object-type-decision/) to change the type of object from the generalized object type to the specialized object type of the path out of the object type decision.

For more information about specialization and generalization, see [Entities](/refguide9/entities/).

## Properties

An example of cast object properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/cast-object/cast-properties.png" alt="cast object properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The cast object properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section{#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Object Name

This is the name for the result of the cast. It can be used by all activities that follow this activity.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Example

For example, there are three specializations of the **Question** object. Only an object of the specialized type **MultipleChoiceQuestion** needs to have some special actions performed on it. These will be done in a sub-microflow which has the input type as **MultipleChoiceQuestion**. Since an object of the type **Question** cannot get passed to the sub-microflow, the object first needs to be cast to the object type **MultipleChoiceQuestion**.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/object-activities/cast-object/cast-example.png" alt="Example of cast in a microflow" class="no-border" >}}
