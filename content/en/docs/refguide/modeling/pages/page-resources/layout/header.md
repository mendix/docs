---
title: "Header"
url: /refguide/header/
weight: 20
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A **header** combines the functionality of a page title and a control bar for your page. Due to its compact design and versatility it is often used in mobile pages. A header can only be used in a [layout](/refguide/layout/).

Headers consist of three distinct elements: a page title and a left and right [drop-zone](/refguide/page/#add-elements). The page title is indicated by the text `[Page title]`. The drop-zones cannot be seen by default, but they can be selected and also become visible when they have elements dropped into them.

For example, the following header has the right drop-zone selected and the user is dropping a button into the left drop-zone.

{{< figure src="/attachments/refguide/modeling/pages/page-resources/layout/header/header-layout.png" class="no-border" >}}

The drop-zones are intended for confirmation buttons, such as an [action button](/refguide/button-widgets/) for creating a new object, but can easily be appropriated for any number of alternate implementations.

The page title placeholder is replaced by the page title setting of the page being displayed.

For example, the image below shows an edit page derived from a layout with a header. The page title is automatically set to that of the page and the drop-zones have been used to add a save and cancel button, replacing the need to add a control bar to the data view.

{{< figure src="/attachments/refguide/modeling/pages/page-resources/layout/header/header-page.png"   width="350"  class="no-border" >}}

## Properties Pane

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Header properties consist of the following sections:

Properties:

* [Common](#common)

Styling:

* [Design Properties](#design-properties)
* [Common](#common-styling)

## Properties

### Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

## Styling

### Design Properties Section {#design-properties}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}
