---
title: "Object Type Decision"
parent: "decisions"
menu_order: 2
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

An object type decision is an element that makes a choice based on the type of an object which has a known generalization. For each specialization the microflow can continue in a different way. If you want to use the specialized type in the rest of the microflow you can use a [cast](cast-object) action.

See [Entities](entities) to read more about specialization and generalization.

## 2 Input Properties

### 2.1 Object

The type of the input object is inspected to see how to continue.

{{% alert type="info" %}}

Let us say you have an entity `Student` and an entity `Professor` which have the entity `Member` as their generalization. For a `Professor` you want to open a different page than for another `Member`. The selected `Member` object is available in the parameter `SelectedMember` and is used as input to the object type decision. Note that there is no sequence flow for `Student`. If a sequence flow is missing, the closest generalization is searched that does have a sequence flow. In the case of `Student` this is `Member`. The sequence flow with the caption (empty) is followed when `SelectedMember` does not contain an object.

![](attachments/microflows-and-nanoflows/918058.png)

{{% /alert %}}

## 3 Common Properties

### 3.1 Caption

See [Microflow Element Common Properties](microflow-element-common-properties).
