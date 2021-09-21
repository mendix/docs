---
title: "End Event"
parent: "events"
menu_order: 2
tags: ["studio pro", "end event", "event"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/end-event.pdf).
{{% /alert %}}

## 1 Introduction

An end event defines where the flow will stop. 

An end event can return a value: an object, enumeration, a list, etc. For more information, see the [Return Value](#return-value) section. 

In the example below, a *Buyer* variable of the *Customer* entity is returned by the end event:

![](attachments/events/end-event.png)

The number of end events depends on the number of possible outcomes of the microflow or a nanoflow. That means there can be more than one end event, for example when a [decision](decision) is used:

![](attachments/events/end-events.png)

## 2 Behavior Properties

### 2.1 Return Value {#return-value}

The return value is the value that is returned to the flow that called the current flow. If you have several end events and they have a return value, they all need to return a value of the same type. For example, if one of the end events returns an object of type *Entity*, the others need to return the same type: 

{{% image_container width="300" %}}
![](attachments/events/return-value.png)
{{% /image_container %}}

You can choose to return nothing, or to return, for example, a list, enumeration, or Boolean value:

![](attachments/events/end-event-type.png)

The return value can be entered as an [expression](expressions).

{{% alert type="info" %}}

If you are calling a microflow from another microflow, note that a *calling* microflow cannot control what is returned. It is controlled by the *called* microflow. 

{{% /alert %}}

## 3 Read More

* [Start Event](start-event)

* [Microflow Call](microflow-call)
