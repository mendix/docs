---
title: "End Event"
url: /refguide/end-event/
weight: 2
tags: ["studio pro", "end event", "event"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An end event defines where the flow will stop. 

An end event can return a value: an object, enumeration, a list, etc. For more information, see the [Return Value](#return-value) section. 

In the example below, a *Buyer* variable of the *Customer* entity is returned by the end event:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-event.png" >}}

The number of end events depends on the number of possible outcomes of the microflow or a nanoflow. That means there can be more than one end event, for example when a [decision](/refguide/decision/) is used:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-events.png" >}}

## 2 Behavior Properties

### 2.1 Return Value {#return-value}

The return value is the value that is returned to the flow that called the current flow. If you have several end events and they have a return value, they all need to return a value of the same type. For example, if one of the end events returns an object of type *Entity*, the others need to return the same type: 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/return-value.png"   width="300"  >}}

You can choose to return nothing, or to return, for example, a list, enumeration, or Boolean value:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-event-type.png" >}}

The return value can be entered as an [expression](/refguide/expressions/).

{{% alert color="info" %}}

If you are calling a microflow from another microflow, note that a *calling* microflow cannot control what is returned. It is controlled by the *called* microflow. 

{{% /alert %}}

## 3 Read More

* [Start Event](/refguide/start-event/)

* [Microflow Call](/refguide/microflow-call/)