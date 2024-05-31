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

## 1 Introduction

Tab containers are used to show information categorized into tabs. This can be very useful if the amount of information that has to be displayed is larger than the amount of space on the screen.

{{< figure src="/attachments/refguide/modeling/pages/structure-widgets/tab-container/tab-container.png" alt="Tab Container" class="no-border" >}}

## 2 Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Tab container properties consist of the following sections:

Properties:

* [Visibility](#visibility)
* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

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

## 5 Tab Page {#tab-page}

A tab container contains one or more tab pages where you place widgets. For example, a tab page can contain a grid of orders.

### 5.1 Tab Page-Specific Properties

#### 5.1.1 Default Tab Page

**Default tab page** defines which tab is displayed when the page is opened. If no tab is set as the default one, the first tab page will be shown. 

Default: *False*

#### 5.1.2 Refresh on Show {#refresh}

**Refresh on show** indicates whether the contents of the tab page should be refreshed when the tab page is shown. Set this property to *No* if you know that nothing will affect the information on the tab page.

Default: *True*

{{% alert color="info" %}}
This property is not supported on native mobile pages.
{{% /alert %}}

## 6 Best Practices

### 6.1 Stand-Alone (#stand-alone)

You can use a tab container as a stand-alone widget for greater ease. This means there is no need to place it within a container or other wrapper widgets, as doing so may disrupt the display of content.

### 6.2 Usage with Scroll Container {#usage-with-scroll-container}

Avoid nesting tab containers inside of scroll container. It may break the way tab page content is displayed, and furthermore will disable rendering optimizations inside the tab view. 

{{% alert color="info" %}}
To enable scrollable behavior within a specific tab, place the **Tab Content** inside a scroll container or display it in a list view.
{{% /alert %}}

## 7 Read More

* [Page](/refguide/page/)
* [Structure](/refguide/structure-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
