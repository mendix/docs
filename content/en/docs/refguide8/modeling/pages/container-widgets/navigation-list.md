---
title: "Navigation List"
url: /refguide8/navigation-list/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The navigation list widget is not supported on native mobile pages.
{{% /alert %}}

## Introduction

A navigation list can be used to attach an action to an entire row when a user clicks this row. Such a row is called a navigation list item. 

For example, clicking one row can open a page, clicking another one can execute a microflow. 

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/navigation-list/navigation-list.png" alt="Navigation List" class="no-border" >}}

## Properties

An example of navigation list properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/navigation-list/navigation-list-properties.png" alt="Navigation List Properties"   width="250"  class="no-border" >}}

Navigation list properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Navigation List Item

A row in a navigation list is a navigation list item. You can set a separate **On click** event for each row of the navigation list. 

### Navigation List Item Properties

#### Common Section

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

#### General Section

In the **General** section, you can set a specific on click event for each navigation list item. An on click event defines what action is performed when a user clicks a row. For more information on on click events, see [On Click Event and Events Section](/refguide8/on-click-event/).

{{% alert color="info" %}}
Microflows set as an on click event for a navigation list item have no **Execution**, **Confirmation**, or **Advanced** microflow settings. For more information on calling a microflow, see [On Click Event and Events Section](/refguide8/on-click-event/#call-microflow). 
{{% /alert %}}

#### Visibility Section

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Read More

* [Page](/refguide8/page/)
* [Container Widgets](/refguide8/container-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
