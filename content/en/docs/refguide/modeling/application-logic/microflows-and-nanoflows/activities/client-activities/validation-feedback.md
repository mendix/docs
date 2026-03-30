---
title: "Validation Feedback"
url: /refguide/validation-feedback/
weight: 70
aliases:
    - /refguide/Validation+Feedback.html
    - /refguide/Validation+Feedback
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline or native app. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline-First Data*.
{{% /alert %}}

## Introduction

The **Validation feedback** activity does a validation check, and if this check fails, it shows a red message to the end-user below the widget that displays the attribute or association which failed the validation. For example, if a customer did not verify their email, a message will be displayed that the customer should verify it before they can log in:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/validation-feedback/validation-feedback.png" alt="Validation Feedback"   width="200"  class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/validation-feedback/validation-feedback-properties.png" alt="Validation Feedback Properties" width="650px" class="no-border" >}}

The **Validation feedback** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Variable

**Variable** specifies which object will be validated.

### Member

**Member** defines for which attribute or association the message will be shown. In you have a [reference selector](/refguide/reference-selector/) or [reference set selector](/refguide/reference-set-selector/), you should select the association that is edited with these widgets.

### Template

**Template** is the message that will be shown to the end-user. The template can contain parameters that are written as a number between braces, for example, {1}. The first parameter has number 1, the second 2, etc.

{{% alert color="warning" %}}

Nanoflows do not support text templates in validation feedback. Only a static message text can be provided.

{{% /alert %}}

### Parameters

Parameters are attributes the value of which will be displayed. Parameters need to be entered using [expressions](/refguide/expressions/) resulting in a string.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide/activities/)
