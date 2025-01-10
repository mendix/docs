---
title: "Counter"
url: /refguide9/metrics-counter/
weight: 10
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## Introduction

The **Counter** activity can be used to increment a metrics counter by a specific value.

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/metrics-activities/metrics-counter/counter.png" alt="Counter" class="no-border" >}}

## Properties

An example of counter properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/metrics-activities/metrics-counter/counter-properties.png" alt="Counter Properties" class="no-border" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Counter** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Name

The name of the counter whose value you want to increment, which must adhere to the following rules:

* The name can only contain alpha-numeric characters, dots or underscores.
* The name must start with a letter.
* The name cannot start with `mx`, because this prefix is reserved for Mendix internal metrics.
* The name is case-insensitive.

{{% alert color="info" %}}
It is recommended to use a common prefix that uniquely defines your organization and application.
{{% /alert %}}

### Value

The value used to increment the counter's value. Values are specified with [expressions](/refguide9/expressions/) and should be of type Integer/Long. It is only possible to increment the counter, so values cannot be negative.

### Tags

You can specify a list of tags to enrich the counter name with key/value pairs. See [Tag Naming](https://micrometer.io/docs/concepts#_tag_naming) on the Micrometer site for more guidance on using tags.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Read More

* [Metric Configuration](/refguide9/metrics/)
* [Metrics Activities](/refguide9/metrics-activities/)
* [Meter Concepts](https://micrometer.io/docs/concepts)
