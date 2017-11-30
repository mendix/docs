---
title: "Change List"
parent: "list-activities"
---
With the change-list action you can change the list that is stored in a variable.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Input Properties

### List

List defines the list variable that is changed.

## Action Properties

### Type

Type defines the how the value changes the list.

| Option | Description |
| --- | --- |
| Add | The value is added to the list. |
| Remove | The value is removed from the list. |
| Clear | The list is emptied. |
| Replace | The list is emptied and the value is added to the list. |

_Default value:_ Add

### Value

Value defines the value that is used to change the list. The value needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in an object or list of the same entity as the input list.

## Related Articles

*   [How To: Change a list](/howto40/change-a-list)
