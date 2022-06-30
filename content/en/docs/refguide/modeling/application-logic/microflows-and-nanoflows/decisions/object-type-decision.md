---
title: "Object Type Decision"
url: /refguide/object-type-decision/
weight: 2
tags: ["studio pro", "object type decision", "decisions"]
aliases:
    - /refguide/inheritance-split.html
    - /refguide/inheritance-split
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

An object type decision is an element that makes a choice based on the type of an object of a generalized entity. The output of the object type decision are the specialized entities that inherit from the generalized entity. For more information on specialization and generalization, see [Entities](/refguide/entities/).

If you want to use the specialized type in the rest of the microflow you can use a [Cast](/refguide/cast-object/) activity.

## 2 Properties

The object type decision properties consists of the following sections:

* [Common](#common)

* [Input](#input)

    {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/object-type-decision/object-type-decision-properties.png"   width="250"  >}}

### 2.1 Common Section {#common} 

#### 2.1.1 Caption

For more information, see the [Caption](/refguide/microflow-element-common-properties/#caption) section in *Common Properties*.

### 2.2 Input Section {#input}

#### 2.2.1 Object

The input object contains an object of a generalized entity.

For example, you have an entity **Student** and an entity **Professor** which have an entity **Member** as their generalization. You want to open a different page for **Professor** than for any other **Member**. The selected **Member** object is available in the parameter **SelectedMember** and is used as input to the object type decision. Note that there is no outgoing flow for **Student**. If an outgoing flow is missing, the closest generalization that has an outgoing flow is searched. In this case, this generalization is **Member**. The outgoing flow with the caption **(empty)** is followed when **SelectedMember** does not contain an object.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/decisions/object-type-decision.png" >}}



