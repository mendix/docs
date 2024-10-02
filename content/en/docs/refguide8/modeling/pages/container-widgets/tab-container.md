---
title: "Tab Container"
url: /refguide8/tab-container/
weight: 40
aliases:
    - /refguide8/tab-page.html
    - /refguide8/tab-page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor <tab-page> below is mapped, so it should not be removed or changed.
---

## Introduction

Tab containers are used to show information categorized into tabs. This can be very useful if the amount of information that has to be displayed is larger than the amount of space on the screen.

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/tab-container/tab-container.png" alt="Tab Container" class="no-border" >}}

## Properties

An example of tab container properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/container-widgets/tab-container/tab-container-properties.png" alt="Tab Container Properties"   width="250"  class="no-border" >}}

Tab container properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [Visibility](#visibility)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 

### Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}

## Tab Page {#tab-page}

A tab container contains one or more tab pages where you place widgets. For example, a tab page can contain a grid of orders.

### Tab Page-Specific Properties

#### Default Tab Page

**Default tab page** defines which tab is displayed when the page is opened. If no tab is set as the default one, the first tab page will be shown. 

Default: *False*

#### Refresh on Show {#refresh}

**Refresh on show** indicates whether the contents of the tab page should be refreshed when the tab page is shown. Set this property to *No* if you know that nothing will affect the information on the tab page.

Default: *True*

{{% alert color="info" %}}
This property is not supported on native mobile pages.
{{% /alert %}}

## Read More

* [Page](/refguide8/page/)
* [Container Widgets](/refguide8/container-widgets/)
* [Properties Common in the Page Editor](/refguide8/common-widget-properties/)
