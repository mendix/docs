---
title: "End Event"
url: /refguide/end-event/
weight: 2
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

An end event defines where the flow stops. It can return a value: an object, enumeration, a list, etc. For more information, see the [Return Type](#return-type) section below.

In the example below, a *Buyer* variable of the *Customer* entity is returned by the end event:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-event.png" class="no-border" >}}

The number of end events depends on the number of possible outcomes of the microflow or nanoflow. That means there can be more than one end event, for example when a [decision](/refguide/decision/) is used:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-events.png" width="500px" class="no-border" >}}

## Properties

The end event properties pane consists of the following sections:

* [Return value](#return-value)
* [Return type](#return-type)
* [Return variable name](#return-variable-name)

### Return Value {#return-value}

The return value is the value that is returned to the flow that called the current flow. You can specify or change the return value either through the **End Event** dialog box or through the **Properties** pane.

{{% alert color="info" %}}
The option to change the return value of an end event through the **Properties** pane was introduced in Studio Pro 10.3.0.
{{% /alert %}}

If you have several end events and they have a return value, they all need to return a value of the same type. For example, if one of the end events returns an object of type *Entity*, the others need to return the same type: 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/return-value.png"   width="300px"  class="no-border" >}}

### Return Type {#return-type}

You can choose to return nothing, or to return, for example, a list, enumeration, or Boolean value. For more information on possible return types, see [Data Types](/refguide/data-types/).

After you type an [expression](/refguide/expressions/) in the **End Event** dialog box, you will see an option that allows you to update the return type:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/end-event-form.png" width="500px" >}}

{{% alert color="info" %}}
If you are calling a microflow from another microflow, a *calling* microflow cannot control what is returned. It is controlled by the *called* microflow. 
{{% /alert %}}

### Return Variable Name {#return-variable-name}

The return value of a microflow or nanoflow will be given this name. 

When you update the return type, a default variable name is set based on the return type (whether it is a variable, object, or list). You can change the name of the returned variable which will be used later in the microflow or nanoflow call.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/events/end-event/return-variable-name.png" width="500px" >}}

## Read More

* [Start Event](/refguide/start-event/)
* [Microflow Call](/refguide/microflow-call/)
* [Call Nanoflow](/refguide/nanoflow-call/)
