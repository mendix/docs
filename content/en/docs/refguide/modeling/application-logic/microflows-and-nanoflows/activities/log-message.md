---
title: "Log Message"
url: /refguide/log-message/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

## Introduction

With the **Log message** activity you can create messages that appear in the log of your Mendix application.

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message/log-message-properties.png" alt="Log Message Properties" width="900" class="no-border" >}}

The **Log message** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Log Level

The log level defines the severity of the log message. In the [Studio Pro Console pane](/refguide/view-menu/#console), messages have a different color and an icon for some log levels.

| Option | Icon | Description |
| --- | --- | --- |
| Trace |   | Used for detailed execution traces. |
| Debug |   | Used to debug execution. |
| Info  *(default)*  |   | Used to log informative messages. |
| Warning | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message/warning.png" alt="Warning"   width="15%"  class="no-border" >}} | Used to log warnings. These messages appear in orange. |
| Error | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message/error.png" alt="Error" width="15%" class="no-border" >}} | Used to log error messages. These messages appear in red. |
| Critical | {{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/log-message/critical-error.png" alt="Critical Error" width="15%" class="no-border" >}} | Used to log critical errors. These messages appear in white on red. |

### Log Node Name {#log-node-name}

{{% alert color="warning" %}}
This property is only available in microflows.
{{% /alert %}}

The log node name is a microflow expression that defines the source of the log message. For example, if you log messages from an email module, the log node name could be *Email module*. Use your own log node names as this avoids confusion with messages from the Mendix runtime which are written to the Mendix log nodes. The Mendix log nodes are listed in the [Default Mendix Log Nodes](/refguide/logging/#mendix-nodes) section of *Logging*.

{{% alert color="info" %}}
You can only set custom [log node levels](/developerportal/deploy/environments-details/#log-levels) for the environment if your app has posted a message to that log node. It is therefore recommended that you send an initial message to all your custom log nodes in an [after startup microflow](/refguide/app-settings/#after-startup).
{{% /alert %}}

### Template

A **Template** defines the message text. The template can contain parameters that are written as a number between braces, for example, `{1}`. The first parameter has number `1`, the second `2`, and so on.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](/refguide/expressions/) resulting in a string.

{{% alert color="info" %}}

With parameters you can customize your message with data specific to the situation. For example, the message *An email has been sent to department {1}*. with parameter `$Department/Name` shows the name of the department to which an email has been sent.

{{% /alert %}}

### Include Latest Stack Trace

Defines whether to include the stack trace of the latest error in this log message. In Studio Pro, log messages that include a stack trace are marked with a paperclip icon ({{% icon name="paperclip" %}}).

Double-clicking these log messages shows the stack trace.

This option also applies to `$latestSoapFault`. If you define an error handler for a web service call, and it catches a soap fault error, checking this box will add the stack trace to the logline in Studio Pro.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}
