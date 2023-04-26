---
title: "Exclusive Split"
url: /refguide7/exclusive-split/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An exclusive split is an element that makes a choice based on a condition and follows (exactly) one of the outgoing sequence flows.

## 2 Action Properties

### 2.1 Type

Type defines whether an expression or a rule is used to define the condition of the split.

| Option | Description |
| --- | --- |
| Expression | An expression is used to define the conditions for the direction. |
| Rule | A rule is used to define the conditions for the direction. |

### 2.2 Expression

If the property 'Type' is set to 'Expression' the expression field can be used to define the condition of the split. The condition can be entered as an [expression](/refguide7/expressions/). The expression should result in a boolean or an enumeration.

{{% alert color="info" %}}

If you want to open a different order form per member type you can use an exclusive split. The selected customer is a parameter with name SelectedCustomer to the microflow. For each enumeration value a different sequence flow is followed. If the enumeration has no value the sequence flow with the caption (empty) is followed.

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/splits/exclusive-split/918050.png" >}}

The expression entered is given below. Because you want to go a different direction for each enumeration you can suffice by just stating the attribute.
`$SelectedCustomer/memberType`

{{% /alert %}}

### 2.3 Rule

If the property 'Type' is set to 'Rule', a [rule](/refguide7/rules/) can be selected to define the condition of the split. For each parameter of the rule an argument needs to be specified using [expressions](/refguide7/expressions/). For example, a rule that determines whether a customer deserves a certain status will have a customer object as a parameter.

## 3 Common Properties

### 3.1 Caption

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/).
