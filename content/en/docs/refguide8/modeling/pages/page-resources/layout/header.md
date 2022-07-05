---
title: "Header"
url: /refguide8/header/
weight: 20
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/header.pdf).
{{% /alert %}}

## 1 Introduction


A **header** combines the functionality of a page title and a control bar for your page. Due to its compact design and versatility it is often used in mobile pages. A header can only be used in a [layout](/refguide8/layout/).

Headers consist of three distinct elements: a page title and a left and right [drop-zone](/refguide8/page/#add-elements). The page title is indicated by the text `[Page title]`. The drop-zones cannot be seen by default, but they can be selected and also become visible when they have elements dropped into them.

For example, the following header has the right drop-zone selected and the user is dropping a button into the left drop-zone.

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/layout/header/header-layout.png" >}}

The drop-zones are intended for confirmation buttons, such as an [action button](/refguide8/button-widgets/) for creating a new object, but can easily be appropriated for any number of alternate implementations.

The page title placeholder is replaced by the page title setting of the page being displayed.

For example, the image below shows an edit page derived from a layout with a header. The page title is automatically set to that of the page and the drop-zones have been used to add a save and cancel button, replacing the need to add a control bar to the data view.

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/layout/header/header-page.png"   width="350"  >}}


## 2 Properties

An example of header properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/layout/header/header-properties.png"   width="250"  >}}

Header properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)

### 2.1 Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### 2.2 Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}} 
