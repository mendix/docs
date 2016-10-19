---
title: "Exclusive Split"
parent: "Microflows"
space: "Reference Guide 5"
---


An exclusive split is an element that makes a choice based on a condition and follows (exactly) one of the outgoing sequence flows.

## Action Properties

### Type

Type defines whether an expression or a rule is used to define the condition of the split.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Expression</td><td class="confluenceTd">An expression is used to define the conditions for the direction.</td></tr><tr><td class="confluenceTd">Rule</td><td class="confluenceTd">A rule is used to define the conditions for the direction.</td></tr></tbody></table>

### Expression

If the property 'Type' is set to 'Expression' the expression field can be used to define the condition of the split. The condition can be entered as a [microflow expression](Microflow+Expressions). The expression should result in a boolean or an enumeration.

<div class="alert alert-info">{% markdown %}

If you want to open a different order form per member type you can use an exclusive split. The selected customer is a parameter with name SelectedCustomer to the microflow. For each enumeration value a different sequence flow is followed. If the enumeration has no value the sequence flow with the caption (empty) is followed.

![](attachments/819203/918050.png)

The expression entered is given below. Because you want to go a different direction for each enumeration you can suffice by just stating the attribute.
`$SelectedCustomer/memberType`

{% endmarkdown %}</div>

### Rule

If the property 'Type' is set to 'Rule' a [rule](Rules) can be selected to define the condition of the split. For each parameter of the rule an argument needs to be specified using [microflow expressions](Microflow+Expressions). For example, a rule that determines whether a customer deserves a certain status will have a customer object as a parameter.

## Common Properties

### Caption

See [Microflow Element Common Properties](Microflow+Element+Common+Properties).

## Debug Properties

### Break here

See [Microflow Element Common Properties](Microflow+Element+Common+Properties).

### Break condition

See [Microflow Element Common Properties](Microflow+Element+Common+Properties).
