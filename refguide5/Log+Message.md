---
title: "Log Message"
category: "refguide5"
space: "Reference Guide 5"
---


With the log-message action you can create messages that appear in the log of your Mendix application.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Action Properties

### Log level

The log level defines the severity of the log message. In the modeler console dock, messages have a different color and an icon for some log levels.

<table><thead><tr><th class="confluenceTh">Option</th><th class="confluenceTh">Icon</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Trace</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Used for detailed execution traces.</td></tr><tr><td class="confluenceTd">Debug</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Used to debug execution.</td></tr><tr><td class="confluenceTd">Info</td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">Used to log informative messages.</td></tr><tr><td class="confluenceTd">Warning</td><td class="confluenceTd"><img class="confluence-embedded-image" src="attachments/819203/917893.png" data-image-src="https://world.mendix.com/download/attachments/819203/log_warning.png?version=1&amp;modificationDate=1289377605000&amp;api=v2"></td><td class="confluenceTd">Used to log warnings. These messages appear in <span>orange</span>.</td></tr><tr><td class="confluenceTd">Error</td><td class="confluenceTd"><img class="confluence-embedded-image" src="attachments/819203/917894.png" data-image-src="https://world.mendix.com/download/attachments/819203/log_error.png?version=1&amp;modificationDate=1289377605000&amp;api=v2"></td><td class="confluenceTd">Used to log error messages. These messages appear in <span>red</span>.</td></tr><tr><td class="confluenceTd">Critical</td><td class="confluenceTd"><img class="confluence-embedded-image" src="attachments/819203/917895.png" data-image-src="https://world.mendix.com/download/attachments/819203/log_critical.png?version=1&amp;modificationDate=1289377605000&amp;api=v2"></td><td class="confluenceTd">Used to log critical errors. These messages appear in <span>&nbsp;</span><span class="">white on red</span> <span>&nbsp;</span>.</td></tr></tbody></table>

_Default value:_ Info

### Log node name

The log node name is a microflow expression that defines the source of the log message. For example, if you log messages from an email module, the log node name could be 'Email module'.

<div class="alert alert-success">{% markdown %}

It is advised to use a constant for the log node name. This prevents typing errors and makes it easier to change the log node name afterwards.

{% endmarkdown %}</div>

### Template

Template defines the text of the message. The template can contain parameters that are written as a number between braces, e.g. {1}. The first parameter has number 1, the second 2 etcetera.

### Parameters

For each parameter in the template you define a microflow expression of which the value will be inserted at the position of the parameter. Parameters need to be entered using [microflow expressions](Microflow+Expressions) resulting in a string.

<div class="alert alert-success">{% markdown %}

With parameters you can customize your message with data specific to the situation. For example, the message "An e-mail has been sent to customer {1}." with parameter `$customer/FullName` will show the full name of the customer to whom an e-mail has been sent.

{% endmarkdown %}</div>

### Include latest stack trace

Defines whether to include the stack trace of the latest error in this log message. In the modeler, log messages that include a stack trace are marked with a paperclip icon (![](attachments/819203/917892.png)) and double-clicking them shows the stack trace.

This option also applies to $latestSoapFault. If you define an error handler for a web service call, and it catches a soap fault error, checking this box will add the stacktrace to the logline in the modeler.