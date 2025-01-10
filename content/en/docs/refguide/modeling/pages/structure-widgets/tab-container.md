---
title: "Tab Container"
url: /refguide/tab-container/
weight: 40
aliases:
    - /refguide/tab-page.html
    - /refguide/tab-page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor <tab-page> below is mapped, so it should not be removed or changed.
---

## Introduction

Tab containers are used to show information categorized into tabs. This can be very useful if the amount of information that has to be displayed is larger than the amount of space on the screen.

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/tab-container/tab-container.png" alt="Tab Container" class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Tab container properties consist of the following sections:

Properties:

* [Visibility](#visibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## Properties 

### General

#### Define Default Tab {#define-default}

**Define default tab** defines whether a specific tab page should be shown by default. If set to **Yes**, an additional **Default tab page** property will be shown to set the default tab. If set to **No**, the first tab will be shown. Note that the **Attribute** property may override this behavior if configured.

Default: **No**

#### Attribute

The **Attribute** property can be used to set the active tab index (1-based) programmatically when the tab container is inside a data context. The selected attribute must be of type integer. The active tab will automatically change when the value of the attribute changes to a valid tab index.

#### On Change

The **On change** action can be used to run an action when the user selects a tab page.

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Tab Page {#tab-page}

A tab container contains one or more tab pages where you place widgets. For example, a tab page can contain a grid of orders.

### Tab Page-Specific Properties

#### Show badge

**Show badge** indicates whether a badge is shown next to the tab page caption. If set to *Yes*, an additional *Badge* property will be available to set its content dynamically.

#### Refresh on Show {#refresh}

**Refresh on show** indicates whether the contents of the tab page should be refreshed when the tab page is shown. Set this property to *No* if you know that nothing will affect the information on the tab page.

Default: *Yes*

{{% alert color="info" %}}
This property is not supported on native mobile pages.
{{% /alert %}}

## Best Practices

### Standalone (#standalone)

You can use a tab container as a standalone widget for greater ease. This means there is no need to place it within a container or other wrapper widgets, as doing so may disrupt the display of content.

### Usage with Scroll Container {#usage-with-scroll-container}

Avoid nesting tab containers inside of scroll container. It may break the way tab page content is displayed, and furthermore will disable rendering optimizations inside the tab view. 

{{% alert color="info" %}}
To enable scrollable behavior within a specific tab, place the **Tab Content** inside a scroll container or display it in a list view.
{{% /alert %}}

## Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
