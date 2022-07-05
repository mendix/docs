---
title: "Log Message"
url: /refguide7/log-message/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows, not in nanoflows.
{{% /alert %}}

## 1 Introduction

With the log-message action you can create messages that appear in the log of your Mendix application.

{{% alert color="info" %}}

See [Microflow Element Common Properties](/refguide7/microflow-element-common-properties/) for properties that all activities share (for example, caption). This page only describes the properties specific to the action.

{{% /alert %}}

## 2 Action Properties

### 2.1 Log Level

The log level defines the severity of the log message. In the modeler console dock, messages have a different color and an icon for some log levels.

| Option | Icon | Description |
| --- | --- | --- |
| Trace |   | Used for detailed execution traces. |
| Debug |   | Used to debug execution. |
| Info |   | Used to log informative messages. |
| Warning | {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/logging-activities/log-message/917893.png" >}} | Used to log warnings. These messages appear in orange. |
| Error | {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/logging-activities/log-message/917894.png" >}} | Used to log error messages. These messages appear in red. |
| Critical | {{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/logging-activities/log-message/917895.png" >}} | Used to log critical errors. These messages appear in  white on red  . |

_Default value:_ Info

### 2.2 Log Node Name

The log node name is a microflow expression that defines the source of the log message. For example, if you log messages from an email module, the log node name could be 'Email module'.

{{% alert color="success" %}}

It is advised to use a [constant](/refguide7/constants/) for the log node name. This prevents typing errors and makes it easier to change the log node name afterwards.

{{% /alert %}}

### 2.3 Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, for example, {1}. The first parameter has number 1, the second 2 etcetera.

### 2.4 Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](/refguide7/expressions/) resulting in a string.

{{% alert color="success" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### 2.5 Include Latest Stack Trace

Defines whether to include the stack trace of the latest error in this log message. In the modeler, log messages that include a stack trace are marked with a paperclip icon:

{{< figure src="/attachments/refguide7/desktop-modeler/application-logic/common-elements/activities/logging-activities/log-message/917892.png" >}}

Double-clicking these log messages shows the stack trace.

This option also applies to `$latestSoapFault`. If you define an error handler for a web service call, and it catches a soap fault error, checking this box will add the stacktrace to the logline in the modeler.
