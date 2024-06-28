---
title: "Navigation List"
url: /refguide/navigation-list/
weight: 70
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The navigation list widget is not supported on native mobile pages.
{{% /alert %}}

## 1 Introduction

A navigation list can be used to attach an action to an entire row when a user clicks this row. Such a row is called a navigation list item. 

For example, clicking one row can open a page, clicking another one can execute a microflow. 

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/navigation-list/navigation-list.png" alt="Navigation List" class="no-border" >}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Navigation list properties consist of the following sections:

Properties:

* [Visibility](#visibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

Miscellaneous:

* [Navigation List Item Properties](#nav-list)

## 3 Properties

### 3.1 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### 3.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 4 Styling

### 4.1 Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 4.2 Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## 5 Miscellaneous

### 5.1 Navigation List Item Properties {#nav-list}

A row in a navigation list is a navigation list item. You can set a separate **On click** event for each row of the navigation list. 

#### 5.1.1 Common Section

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

#### 5.1.2 General Section

In the **General** section, you can set a specific on click event for each navigation list item. An on click event defines what action is performed when a user clicks a row. For more information on on click events, see [On Click Event and Events Section](/refguide/on-click-event/).

{{% alert color="info" %}}
Microflows set as an on click event for a navigation list item have no **Execution**, **Confirmation**, or **Advanced** microflow settings. For more information on calling a microflow, see [On Click Event and Events Section](/refguide/on-click-event/#call-microflow). 
{{% /alert %}}

## 6 Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
