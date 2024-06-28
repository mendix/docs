---
title: "End Event"
url: /refguide8/end-event/
weight: 2
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

An end event defines where the flow will stop. 

An end event can return a value: an object, enumeration, a list, etc. For more information, see the [Return Value](#return-value) section. 

In the example below, a *Buyer* variable of the *Customer* entity is returned by the end event:

{{< figure src="/attachments/refguide8/modeling/application-logic/events/end-event/end-event.png" class="no-border" >}}

The number of end events depends on the number of possible outcomes of the microflow or a nanoflow. That means there can be more than one end event, for example when a [decision](/refguide8/decision/) is used:

{{< figure src="/attachments/refguide8/modeling/application-logic/events/end-event/end-events.png" class="no-border" >}}

## 2 Behavior Properties

### 2.1 Return Value {#return-value}

The return value is the value that is returned to the flow that called the current flow. If you have several end events and they have a return value, they all need to return a value of the same type. For example, if one of the end events returns an object of type *Entity*, the others need to return the same type: 

{{< figure src="/attachments/refguide8/modeling/application-logic/events/end-event/return-value.png"   width="300"  class="no-border" >}}

You can choose to return nothing, or to return, for example, a list, enumeration, or Boolean value:

{{< figure src="/attachments/refguide8/modeling/application-logic/events/end-event/end-event-type.png" class="no-border" >}}

The return value can be entered as an [expression](/refguide8/expressions/).

{{% alert color="info" %}}

If you are calling a microflow from another microflow, note that a *calling* microflow cannot control what is returned. It is controlled by the *called* microflow. 

{{% /alert %}}

## 3 Read More

* [Start Event](/refguide8/start-event/)

* [Microflow Call](/refguide8/microflow-call/)
