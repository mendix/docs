---
title: "Gauge"
url: /refguide/metrics-gauge/
weight: 20
tags: ["studio pro", "metrics", "micrometer"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

## 1 Introduction

The **Gauge** activity can be used to set a gauge to a specific value.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/metrics-activities/metrics-gauge/gauge.png" alt="Gauge" >}}

## 2 Properties

An example of gauge properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/metrics-activities/metrics-gauge/gauge-properties.png" alt="Gauge Properties" >}}

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right.

The **Gauge** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Name

The name of the gauge for which you want to set a value, which must adhere to the following rules:.

* The name can only contain alpha-numeric characters, dots or underscores.
* The name must start with a letter.
* The name cannot start with `mx`, because this prefix is reserved for Mendix internal metrics.
* The name is case-insensitive.

{{% alert color="info" %}}
It is recommended to use a common prefix that uniquely defines your organisation and application.
{{% /alert %}}

### 3.2 Value

The value used to set the gauge to. Values are specified with [expressions](/refguide/expressions/) and should be of type Decimal.

### 3.3 Tags

You can specify a list of tags to enrich the gauge name with key/value pairs. See [Tag Naming](https://micrometer.io/docs/concepts#_tag_naming) on the Micrometer site for more guidance on using tags.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Metric Configuration](/refguide/metrics/)
* [Metrics Activities](/refguide/metrics-activities/)
* [Meter Concepts](https://micrometer.io/docs/concepts)
