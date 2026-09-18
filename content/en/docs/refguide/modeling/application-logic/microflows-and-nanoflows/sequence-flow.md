---
title: "Sequence Flow"
url: /refguide/sequence-flow/
weight: 30
---

## Introduction

A sequence flow determines the order in which Studio Pro executes the elements of a microflow, nanoflow, or rule. It is represented by an arrow that runs from one element to the next, such as from an event to an activity or from an activity to a decision.

Execution follows the arrows along a single path, one element at a time. At a decision, the path continues in exactly one direction, so no two elements ever run at the same time.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/sequence-flow/sequence-flow.png" class="no-border" >}}

## Condition Value

A flow that leaves a [decision](/refguide/decision/) or an [object type decision](/refguide/object-type-decision/) must have a **Condition value**. Studio Pro follows the flow whose condition value matches the outcome of the decision.

Each possible condition value must have its own outgoing flow. This includes the `(empty)` value when the decision returns an enumeration value, or when the decision is an object type decision.

## Flow Type {#flow-type}

A sequence flow can be rendered as one of two types:

* **Curved** – the flow is drawn as a curved line. This is the default type.
* **Orthogonal** – the flow is drawn with right angles. You can use this type to make your microflows, nanoflows, and rules look tidier on screen.

The flow type is purely visual. It is stored in the model, but it does not affect deployment or the running app in any way.

{{% alert color="info" %}}
Using orthogonal flows is a beta feature, available in Studio Pro 11.15 and above. To use it, you first need to enable it in the **Preferences** dialog box, as described in the [Enabling Orthogonal Flows](#enable-orthogonal) section below.
{{% /alert %}}

### Enabling Orthogonal Flows {#enable-orthogonal}

To enable orthogonal flows, do the following:

1. In Studio Pro, open the [Preferences](/refguide/preferences-dialog/) dialog box.
2. Go to the **New features** tab.
3. Under **Microflow, Nanoflow, and Rule editor**, enable orthogonal flows.

### Converting Flows {#convert}

When orthogonal flows are enabled, you can convert flows through the context menu of the microflow, nanoflow, or rule editor:

* To convert a single flow, right-click it and choose to convert it from curved to orthogonal, or from orthogonal to curved.
* To convert every flow in the current document at once, right-click on any flow and use the corresponding option in the context menu.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/sequence-flow/orthogonal-flows-context-menu.png" class="no-border" >}}

### Setting the Default Flow Type {#default-type}

You can set the default flow type for the whole app so that new flows are created with the type you prefer. To set the default flow type to orthogonal, use the [Default Sequence Flow Type](/refguide/miscellaneous-tab/#default-flow-type) setting on the **Miscellaneous** tab of the **App Settings** dialog box.

The default flow type is an app setting, so it is shared between all contributors of the app.

### Behavior When the Feature Is Disabled {#orthogonal-disabled}

Because the flow type is stored in the model and the default flow type is an app setting, the following applies when the orthogonal flows feature is disabled:

* Flows that are already orthogonal are still rendered as orthogonal. You can always convert them back to curved.
* If the default flow type is set to orthogonal in the App Settings, new flows are still created as orthogonal, regardless of whether the feature is enabled. You can always set the default flow type back to curved.
