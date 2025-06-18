---
title: "Report Parameter"
url: /refguide9/report-parameter/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **Report parameter** allows the end-user to select a parameter for the [data set](/refguide9/data-sets/) that supplies the data for a [Report grid](/refguide9/report-grid/). The parameter is used to filter the results in different ways so that the same report can display different sets of data.

For example, a report may show order data for a customer and the report parameter can be used to specify which customer's data should be displayed.

The report parameter is displayed in **Structure mode** with the data set parameter name (and the attribute to be displayed if the parameter is an object) shown between square brackets and colored blue.

{{< figure src="/attachments/refguide9/modeling/pages/report-widgets/report-parameter/report-parameter.png" alt="Report parameter in structure mode" class="no-border" >}}

{{% alert color="info" %}}
A **Report parameter** cannot be used for data set parameters of type **Date and time**. Date and time parameters must be filtered by a [Report Date Parameter](/refguide9/report-date-parameter/) widget.

If you add a report parameter widget on the page, you must also add a [Report Button](/refguide9/report-button/) widget. This allows the end-user to regenerate the report after specifying the parameter.
{{% /alert %}}

## Report Parameter Properties

An example of report parameter properties is represented in the image below:

{{< figure src="/attachments/refguide9/modeling/pages/report-widgets/report-parameter/report-parameter-properties.png" alt="Report parameter in structure mode"   width="300"  class="no-border" >}}

Report parameter properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide9/common-section-link.md" %}}

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide9/design-section-link.md" %}}

### General Section{#general}

#### Parameter

**Parameter** is set to a data set parameter, the value of which is restricted by this widget. The corresponding data set must be used by one of the report widgets on the page.

#### Displayed Attribute

**Displayed attribute** is only available if the data set parameter is an object. Displayed attribute specifies which attribute of the corresponding entity is shown in the drop-down selection.
