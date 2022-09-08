---
title: "Report Parameter"
url: /refguide7/report-parameter/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---



With the report parameter, the user can specify a parameter of the dataset that is then used for filtering the data displayed in the [Report](/refguide7/report-widgets/).

Note that if you have a report parameter widget on the page, you must also add a [Report Button](/refguide7/report-button/) widget so that it is possible for the user to regenerate the report after specifying the parameter.

{{% alert color="warning" %}}

A drop-down menu can be used for a dataset parameter of any type except DateTime. DataTime parameters can be filtered by a [Report Date Parameter](/refguide7/report-date-parameter/).

{{% /alert %}}

## General Properties

### Parameter

Refers to the dataset parameter, the value of which is restricted by this widget. The corresponding dataset must be used by one of the report widgets on the page.

### Displayed Attribute

If the type of the dataset parameter is an object, this property indicates which attribute of the corresponding entity is shown in the drop-down menu.

## Common Properties

### Name, Class, Style

For details, see [Common Widget Properties](/refguide7/common-widget-properties/).
