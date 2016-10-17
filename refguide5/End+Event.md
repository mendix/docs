---
title: "End Event"
category: "refguide5"
space: "Reference Guide 5"
---


An end event defines the location where the microflow will stop. If the return type of the microflow is not `Nothing` a return value should be specified.

<div class="alert alert-info">{% markdown %}

If you want to stop your microflow after an activity, you link the activity, using a sequence flow with a stop event. In this case the microflow is called from another microflow that expects the buyer to be returned.

![](attachments/819203/917940.png)

{% endmarkdown %}</div>

## Output Properties

### Return value

The return value is the value that is returned to the microflow that called the current microflow. The value can be entered as a [microflow expression](Microflow+Expressions).

## Debug Properties

### Break here

See [Microflow Element Common Properties](Microflow+Element+Common+Properties).

### Break condition

See [Microflow Element Common Properties](Microflow+Element+Common+Properties).