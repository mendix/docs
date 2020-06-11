---
title: "Log Message"
parent: "activities"
menu_order: 70
tags: ["studio pro", "logging activity", "logging activities", "log message"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

## 1 Introduction

With the **Log message** activity you can create messages that appear in the log of your Mendix application:

![Log Message](attachments/log-message/log-message.png)

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

![Log Message Properties](attachments/log-message/log-message-properties.png)

The **Log message** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.3 Log Level

The log level defines the severity of the log message. In the [Studio Pro Console pane](view-menu#console), messages have a different color and an icon for some log levels.

| Option | Icon | Description |
| --- | --- | --- |
| Trace |   | Used for detailed execution traces. |
| Debug |   | Used to debug execution. |
| Info  *(default)*  |   | Used to log informative messages. |
| Warning | {{% image_container width="15%" %}}![Warning](attachments/log-message/warning.png){{% /image_container %}} | Used to log warnings. These messages appear in orange. |
| Error | {{% image_container width="15%" %}}![Error](attachments/log-message/error.png){{% /image_container %}} | Used to log error messages. These messages appear in red. |
| Critical | {{% image_container width="15%" %}}![Critical Error](attachments/log-message/critical-error.png){{% /image_container %}} | Used to log critical errors. These messages appear in white on red. |

### 3.2 Log Node Name {#log-node-name}

{{% alert type="warning" %}}
This property is only available in microflows.
{{% /alert %}}

The log node name is a microflow expression that defines the source of the log message. For example, if you log messages from an email module, the log node name could be *Email module*. Use your own log node names as this avoids confusion with messages from the Mendix runtime which are written to the Mendix log nodes. The Mendix log nodes are listed in the [Default Mendix Log Nodes](logging#mendix-nodes) section of *Logging*.

{{% alert type="info" %}}
It is advised to use a [constant](constants) for the log node name. This prevents errors when entering the node name and makes it easier to change the log node name afterwards.

You can only set custom [log node levels](/developerportal/deploy/environments-details#log-levels) for the environment if your app has posted a message to that log node. It is therefore recommended that you send an initial message to all your custom log nodes in an [after startup microflow](project-settings#after-startup).
{{% /alert %}}

### 3.3 Template

A **Template** defines the message text. The template can contain parameters that are written as a number between braces, e.g. `{1}`. The first parameter has number `1`, the second `2`, and so on.

### 3.4 Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](expressions) resulting in a string.

{{% alert type="info" %}}

With parameters you can customize your message with data specific to the situation. For example, the message *An e-mail has been sent to customer {1}*. with parameter `$customer/FullName` will show the full name of the customer who an e-mail has been sent to.

{{% /alert %}}

### 3.5 Include Latest Stack Trace

Defines whether to include the stack trace of the latest error in this log message. In Studio Pro, log messages that include a stack trace are marked with a paperclip icon.

Double-clicking these log messages shows the stack trace.

This option also applies to `$latestSoapFault`. If you define an error handler for a web service call, and it catches a soap fault error, checking this box will add the stacktrace to the logline in Studio Pro.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}