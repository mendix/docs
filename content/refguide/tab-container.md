---
title: "Tab Container"
parent: "container-widgets"
menu_order: 40
tags: ["studio pro", "tab container", "tab page", "container widget", "widget"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor <tab-page> below is mapped, so it should not be removed or changed.
---

## 1 Introduction

Tab containers are used to show information categorized into tabs. This can be very useful if the amount of information that has to be displayed is larger than the amount of space on the screen.

![Tab Container](attachments/container-widgets/tab-container.png)


## 2 Properties

An example of tab container properties is represented in the image below:

{{% image_container width="300" %}}![Tab Container Properties](attachments/container-widgets/tab-container-properties.png)
{{% /image_container %}}

Tab container properties consist of the following sections:

* [Common](#common)
* Design Properties
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Tab Page {#tab-page}

A tab container contains one or more tab pages where you place widgets. For example, a tab page can contain a grid of orders.

### 3.1 Tab Page Specific Properties

#### 3.1.1 Default Tab Page

**Default tab page** defines which tab is displayed when the page is opened. If no tab is set as the default one, the first tab page will be shown. 

Default: *False*

#### 3.1.2 Refresh on Show

**Refresh on show** indicates whether the contents of the tab page should be refreshed when the tab page is shown. Set this property to *No* if you know that nothing will affect the information on the tab page.

Default: *True*

{{% alert type="info" %}}This property is not supported on native mobile pages.{{% /alert %}}

## 4 Read More

* [Page](page)
* [Container Widgets](container-widgets)
* [Properties Common in the Page Editor](common-widget-properties)



