---
title: "Validation Feedback"
url: /refguide7/validation-feedback/
aliases:
    - /refguide7/Validation+Feedback.html
    - /refguide7/Validation+Feedback
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

With this action, you can display a red text below a widget that displays an attribute or association.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all microflow activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Object

Object defines for which object the message will be shown.

### 2.2 Member

Member defines for which attribute or association the message will be shown. In the case of a [reference selector](/refguide7/reference-selector/) or [reference set selector](/refguide7/reference-set-selector/) you should select the association that is edited with the selector.

### 2.3 Template

Template defines the text of the validation message. The template can contain parameters that are written as a number between braces, for example, {1}. The first parameter has number 1, the second 2 etcetera.

{{% alert color="warning" %}}

Nanoflows do not support text templates in validation feedback. Only a static message text can be provided.

{{% /alert %}}

### 2.4 Parameters

For each parameter in the template you define an expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](/refguide7/expressions/) resulting in a string.
