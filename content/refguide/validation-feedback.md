---
title: "Validation Feedback"
parent: "client-activities"
---

## 1 Introduction

With this action, you can display a red text below a widget that displays an attribute or association.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Object

Object defines for which object the message will be shown.

### 2.2 Member

Member defines for which attribute or association the message will be shown. In the case of a [reference selector](reference-selector) or [reference set selector](reference-set-selector) you should select the association that is edited with the selector.

### 2.3 Template

Template defines the text of the validation message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

{{% alert type="warning" %}}

Nanoflows do not support text templates in validation feedback. Only a static message text can be provided.

{{% /alert %}}

### 2.4 Parameters

For each parameter in the template you define an expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](expressions) resulting in a string.
