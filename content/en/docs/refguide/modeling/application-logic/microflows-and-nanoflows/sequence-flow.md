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

## Flow Shape {#flow-shape}

A sequence flow can be rendered in one of two shapes:

* **Curved** – the flow is drawn as a curved line. This is the default shape.
* **Orthogonal** – the flow is drawn with right angles. You can use this shape to make your microflows, nanoflows, and rules look tidier on screen.

The flow shape is purely visual. It is stored in the model, but it does not affect deployment or the running app in any way.

{{% alert color="info" %}}
The orthogonal flow shape is a beta feature, available in Studio Pro 11.15 and above. To use it, you first need to enable it in the **Preferences** dialog box, as described in the [Enabling the Orthogonal Flow Shape](#enable-orthogonal) section below.
{{% /alert %}}

### Enabling the Orthogonal Flow Shape {#enable-orthogonal}

To enable the orthogonal flow shape, do the following:

1. In Studio Pro, open the [Preferences](/refguide/preferences-dialog/) dialog box.
2. Go to the **New features** tab.
3. Under **Microflow, Nanoflow, and Rule editor**, enable the orthogonal flow shape.

### Converting Flows {#convert}

When the orthogonal flow shape is enabled, you can convert flows through the context menu of the microflow, nanoflow, or rule editor:

* To convert a single flow, right-click it and choose to convert it from curved to orthogonal, or from orthogonal to curved.
* To convert every flow in the current document at once, use the corresponding option in the context menu.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/sequence-flow/orthogonal-flows-context-menu.png" class="no-border" >}}

### Setting the Default Flow Shape {#default-shape}

You can set the default flow shape for the whole app so that new flows are created with the shape you prefer. To set the default flow shape to orthogonal, use the [Default Flow Shape](/refguide/miscellaneous-tab/#default-flow-shape) setting on the **Miscellaneous** tab of the **App Settings** dialog box.

The default flow shape is an app setting, so it is shared between all contributors of the app.

### Behavior When the Feature Is Disabled {#orthogonal-disabled}

Because the flow shape is stored in the model and the default flow shape is an app setting, the following applies when the orthogonal flow shape feature is disabled:

* Flows that are already orthogonal are still rendered as orthogonal. You can always convert them back to curved.
* If the default flow shape is set to orthogonal in the App Settings, new flows are still created as orthogonal, regardless of whether the feature is enabled. You can always set the default flow shape back to curved.
