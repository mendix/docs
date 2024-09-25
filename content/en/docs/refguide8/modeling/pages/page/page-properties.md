---
title: "Page Properties"
url: /refguide8/page-properties/
weight: 10
---

## Introduction

This document describes page properties. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](/refguide8/pages/).

## Properties

An example of page properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/page/page-properties/page-properties.png" alt="Page Properties"   width="250"  class="no-border" >}}

Page properties consist of the following sections:

* [Common](#common)
* [Designer](#designer)
* [General](#general)
* [Navigation](#navigation)
* [Pop-up](#pop-up)
* [Usage](#usage)

### Common Section {#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Designer Section {#designer}

{{% snippet file="/static/_includes/refguide8/designer-properties.md" %}}

### General Section {#general}

#### Platform

The values for the **Platform** property are:

* Web *(default)* – pages which are going to be displayed in a browser or hybrid mobile app
* Native – pages which are going to be displayed in a native mobile app

#### Layout Type {#layout-type}

The **Layout type**, determines the purpose of the page and how it is opened.

| Layout Type         | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Responsive**      | Pages that will work fine on all types of devices.           |
| **Tablet specific** | Pages to be displayed on a tablet because the responsive option does not provide a good user interface on a tablet. |
| **Phone specific**  | Pages to be displayed on a phone because the responsive option does not provide a good user interface on a phone. |
| **Modal pop-up**    | Pages that appear as [modal pop-up windows](https://www.wikiwand.com/en/Modal_window). |
| **Pop-up**          | Pages that appear as *modeless* pop-up windows.              |

#### Layout

The [layout](/refguide8/layout/) on which this page is based.

#### Title {#title}

The title of the page that is shown using the [page title widget](/refguide8/page-title/). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. 

The title can be overridden. For example, the [Create button](/refguide8/control-bar/) and the [Edit button](/refguide8/control-bar/) of a data grid can refer to the same page, but they override the titles to **New** and **Edit**, respectively.

#### URL

The URL of the page can be used to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).

Pages with top-level data views (parameterized pages) can also have URLs. The URL property of such pages should contain the `{Id}` path segment at the end. In the browser, the `{Id}` segment will be replaced with the actual identifier of an entity.

In simple e-commerce applications, the URLs can be configured as follows:

* */orders/* – the URL for a page with a data grid for `Orders` (in a browser, the URL will look like `http://example.mendixcloud.com/p/orders/`)

* */order/{Id}* – the URL for a page with data from a particular `Order` (in a browser, the URL will look like `http://example.mendixcloud.com/p/order/3212449487634321`, wherein `3212449487634321` is the unique identifier of the `Order`)

### Navigation Section {#navigation}

#### Visible For

This property defines for what module roles the page is visible. This has an effect on [menu widgets](/refguide8/menu-widgets/) and on buttons that are visible only if allowed (for example, an [action button](/refguide8/button-widgets/) for editing).

For more information, see [Module Security](/refguide8/module-security/).

### Pop-Up Section {#pop-up}

The **Pop-up** section is only displayed for pop-up pages. For more information on what pop-up pages are, see the [Layout Type](#layout-type) section.

#### Width (in Pixels)

This property specifies the pop-up page width in pixels. When set to 0, the width is determined automatically.

Default: *0*

#### Height (in Pixels)

This property specifies the pop-up page height in pixels. When set to 0, the height is determined automatically.

Default: *0*

#### Resizable

This property specifies whether the end-user can resize the pop-up or not.

Default: *Yes*

#### Close Action

Configures the behavior of a button that closes the pop-up page. The default behavior of the pop-up close button is to rollback any changes and close the pop-up window. 

If you want to customize the behavior of the pop-up close button, you can point to a button on the page. When the pop-up close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the pop-up close button will revert back to the default behavior.

Default: *Default (cancel)*

### Usage Section {#usage}

#### Mark as Used

You can search for unused items in Studio Pro by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>. Pages that are only used from Java code will be listed as unused, because Studio Pro cannot look inside Java source code.

By setting the property **Mark as used** to *Yes*, you specify that the document is used implicitly and Studio Pro will no longer list it when searching for unused items.

*Default value*: No
