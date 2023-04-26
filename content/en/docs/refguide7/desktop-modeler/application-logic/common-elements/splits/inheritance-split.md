---
title: "Inheritance Split"
url: /refguide7/inheritance-split/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

An inheritance split is an element that makes a choice based on the type of certain variable. For each specialization the microflow can continue in a different way. If you want to use the specialized type in the rest of the microflow you can use a [cast](/refguide7/cast-object/) action.

See [Entities](/refguide7/entities/) to read more about specialization and generalization.

## 2 Input Properties

### 2.1 Variable

The input variable is the variable of which the type is inspected to see how to continue.

{{% alert color="info" %}}

Let us say you have an entity Student and an entity Professor which have the entity Member as their generalization. For a professor you want to open a different form than for another member. The selected member is available in the parameter SelectedMember and is used as input variable for the inheritance split. Note that the sequence flow for Student is missing. If a sequence flow is missing, the closest generalization is searched that does have a sequence flow. In the case of Student this is Member. The sequence flow with the caption (empty) is followed when the parameter used as input variable does not contain an object.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/splits/inheritance-split/918058.png" >}}

{{% /alert %}}

## 3 Common Properties

### 3.1 Caption

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/).
