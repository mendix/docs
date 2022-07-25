---
title: "Cast Object"
url: /refguide7/cast-object/
tags: ["cast objects"]
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

The Cast Object activity can be used in a microflow after an [inheritance split](/refguide7/inheritance-split/) to change the type of object from the generalized object type to the specialized object type of the path out of the inheritance split. 

To read more about specialization and generalization, see [Entities](/refguide7/entities/).

{{% alert color="info" %}}
For the properties that all the activities share (for example, a caption), see [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/). This page only describes the properties specific to the action.
{{% /alert %}}

## 2 Output Properties

### 2.1 Variable Name

This is the variable name for the result of the cast. It can be used by all activities that follow this activity.

## 3 Example

For example, there are three specializations of the **Question** object. Only an object of the specialized type **MultipleChoiceQuestion** needs to have some special actions performed on it. These will be done in a sub-microflow which has as the input type **MultipleChoiceQuestion**. Since an object of the type **Question** cannot get passed to the sub-microflow, the object first needs to be cast to the object type **MultipleChoiceQuestion**.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/object-activities/cast-object/cast-example.png" >}}