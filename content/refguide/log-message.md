---
title: "Log Message"
parent: "logging-activities"
---


With the log-message action you can create messages that appear in the log of your Mendix application.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Log level

The log level defines the severity of the log message. In the modeler console dock, messages have a different color and an icon for some log levels.

| Option | Icon | Description |
| --- | --- | --- |
| Trace |   | Used for detailed execution traces. |
| Debug |   | Used to debug execution. |
| Info |   | Used to log informative messages. |
| Warning | ![](attachments/819203/917893.png) | Used to log warnings. These messages appear in orange. |
| Error | ![](attachments/819203/917894.png) | Used to log error messages. These messages appear in red. |
| Critical | ![](attachments/819203/917895.png) | Used to log critical errors. These messages appear in  white on red  . |

_Default value:_ Info

### Log node name

The log node name is a microflow expression that defines the source of the log message. For example, if you log messages from an email module, the log node name could be 'Email module'.

{{% alert type="success" %}}

It is advised to use a [constant](constants) for the log node name. This prevents typing errors and makes it easier to change the log node name afterwards.

{{% /alert %}}

### Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [expressions](expressions) resulting in a string.

{{% alert type="success" %}}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{{% /alert %}}

### Include latest stack trace

Defines whether to include the stack trace of the latest error in this log message. In the modeler, log messages that include a stack trace are marked with a paperclip icon (![](attachments/819203/917892.png)) and double-clicking them shows the stack trace.

This option also applies to $latestSoapFault. If you define an error handler for a web service call, and it catches a soap fault error, checking this box will add the stacktrace to the logline in the modeler.
