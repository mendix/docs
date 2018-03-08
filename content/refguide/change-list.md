---
title: "Change List"
parent: "list-activities"
---


With the Change List activity you can change a list that is stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### List

Defines the list variable that is changed.

## Action Properties

### Type

Defines the type of change that is performed to the list.

| Option | Description |
| --- | --- |
| Add | The value is added to the list. |
| Remove | The value is removed from the list. |
| Clear | The list is emptied. |
| Replace | The list is emptied and the value is added to the list. |

_Default value:_ Add

### Value

Value defines the value that is used to change the list. The value is entered using a [microflow expression](expressions). The microflow expression should result in an object or list of the same [entity](entities) as the input list.
