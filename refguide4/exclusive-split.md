---
title: "Exclusive Split"
parent: "microflows"
space: "Reference Guide 4"
---
An exclusive split is an element that makes a choice based on a condition and follows (exactly) one of the outgoing sequence flows.

## Action Properties

### Type

Type defines whether an expression or a rule is used to define the condition of the split.

| Option | Description |
| --- | --- |
| Expression | An expression is used to define the conditions for the direction. |
| Rule | A rule is used to define the conditions for the direction. |

### Expression

If the property 'Type' is set to 'Expression' the expression field can be used to define the condition of the split. The condition can be entered as a [microflow expression](microflow-expressions). The expression should result in a boolean or an enumeration.

If you want to open a different order form per member type you can use an exclusive split. The selected customer is a parameter with name SelectedCustomer to the microflow. For each enumeration value a different sequence flow is followed. If the enumeration has no value the sequence flow with the caption (empty) is followed.

![](attachments/819203/918050.png)

The expression entered is given below. Because you want to go a different direction for each enumeration you can suffice by just stating the attribute.
`$SelectedCustomer/memberType`

### Rule

If the property 'Type' is set to 'Rule' a [rule](rules) can be selected to define the condition of the split. For each parameter of the rule an argument needs to be specified using [microflow expressions](microflow-expressions). For example, a rule that determines whether a customer deserves a certain status will have a customer object as a parameter.

## Common Properties

### Caption

See [Microflow Element Common Properties](microflow-element-common-properties).

## Debug Properties

### Break here

See [Microflow Element Common Properties](microflow-element-common-properties).

### Break condition

See [Microflow Element Common Properties](microflow-element-common-properties).
