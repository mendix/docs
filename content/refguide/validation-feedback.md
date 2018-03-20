---
title: "Validation Feedback"
parent: "client-activities"
---


With the validation-feedback action you can display a red text below a widget that displays an attribute or association.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Object

Object defines for which object the message will be shown.

### Member

Member defines for which attribute or association the message will be shown. In the case of a [reference selector](reference-selector) or [reference set selector](reference-set-selector) you should select the association that is edited with the selector.

### Template

Template defines the text of the validation message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

{{% alert type="warning" %}}

Nanoflows do not support text templates in validation feedback. Only a static message text can be provided.

{{% /alert %}}


### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [microflow expressions](expressions) resulting in a string.
