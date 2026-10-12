---
title: "Show Message"
url: /refguide/show-message/
weight: 4
aliases:
    - /refguide/Show+Message.html
    - /refguide/Show+Message
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline or native app. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline-First Data*.
{{% /alert %}}

## Introduction

The **Show message** activity shows a blocking or non-blocking message to an end-user. For example, if the end-user did not select the customer grade in a form, you can show an error message telling them to select a grade to proceed:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-message/show-message.png" alt="Show Message"   width="300"  class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-message/show-message-properties.png" alt="Show Message Properties" class="no-border" >}}

The **Show message** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Type

**Type** defines the color scheme and icon of the message.

There are three message options:

* Information *(default)* 
* Warning
* Error 

### Template

**Template** defines the text of the message. The template can contain parameters that are written as a number between braces, for example, {1}. The first parameter has number 1, the second 2, etc.

### Parameters

For each parameter in the template, you define an attribute of the context entity or an associated entity. The value of this attribute will be inserted at the position of the parameter. Parameters should be entered using [expressions](/refguide/expressions/) resulting in a string.

With parameters you can customize your message with data specific to the situation. For example, the message "An email has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer who an email has been sent to.

### Blocking

The **Blocking** property defines whether the message shown to the end-user is blocking or not. A non-blocking message lets users continue their work in the app with the pop-up window open, while a blocking message does not let the user continue work until the pop-up window is closed.

| Option | Description |
| --- | --- |
| Yes *(default)* | The message appears in a pop-up in the center of the screen and does not let the user continue work until the pop-up window is closed. |
| No | The message appears in a pop-up in the center of the screen but does not block the rest of the screen, allowing the end-user to continue their work with the pop-up open. |

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide/activities/)
