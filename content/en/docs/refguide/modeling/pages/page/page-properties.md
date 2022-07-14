---
title: "Page Properties"
url: /refguide/page-properties/
weight: 10
tags: ["studio pro", "page", "properties"]
---

## 1 Introduction

This document describes page properties. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](/refguide/pages/).

## 2 Properties

An example of page properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/page/page-properties/page-properties.png" alt="Page Properties"   width="250"  >}}

Page properties consist of the following sections:

* [Common](#common)
* [Designer](#designer)
* [General](#general)
* [Navigation](#navigation)
* [Pop-up](#pop-up)
* [Usage](#usage)

### 2.1 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.2 Designer Section {#designer}

{{% snippet file="/static/_includes/refguide/designer-properties.md" %}}

### 2.3 General Section {#general}

#### 2.3.1 Platform

The values for the **Platform** property are:

* Web *(default)* – pages which are going to be displayed in a browser or hybrid mobile app
* Native – pages which are going to be displayed in a native mobile app

#### 2.3.2 Layout Type {#layout-type}

The **Layout type**, determines the purpose of the page and how it is opened.

| Layout Type         | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Responsive**      | Pages that will work fine on all types of devices.           |
| **Tablet specific** | Pages to be displayed on a tablet because the responsive option does not provide a good user interface on a tablet. |
| **Phone specific**  | Pages to be displayed on a phone because the responsive option does not provide a good user interface on a phone. |
| **Modal pop-up**    | Pages that appear as [modal pop-up windows](https://www.wikiwand.com/en/Modal_window). |
| **Pop-up**          | Pages that appear as *modeless* pop-up windows.              |

#### 2.3.3 Layout

The [layout](/refguide/layout/) on which this page is based.

#### 2.3.4 Title {#title}

The title of the page that is shown using the [page title widget](/refguide/page-title/). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. 

The title can be overridden. For example, the [Create button](/refguide/control-bar/) and the [Edit button](/refguide/control-bar/) of a data grid can refer to the same page, but they override the titles to **New** and **Edit**, respectively.

#### 2.3.5 URL {#url}

The URL of the page can be used to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).

Pages with top-level data views (parameterized pages) can also have URLs. The URL property of such pages should contain the `{Id}` path segment at the end. In the browser, the `{Id}` segment will be replaced with the actual identifier of an entity.

In simple e-commerce applications, the URLs can be configured as follows:

* */orders/* – the URL for a page with a data grid for `Orders` (in a browser, the URL will look like `http://example.mendixcloud.com/p/orders/`)

* */order/{Id}* – the URL for a page with data from a particular `Order` (in a browser, the URL will look like `http://example.mendixcloud.com/p/order/3212449487634321`, wherein `3212449487634321` is the unique identifier of the `Order`)

### 2.4 Navigation Section {#navigation}

#### 2.4.1 Visible For

This property defines for what module roles the page is visible. This has an effect on [menus and navigation widgets](/refguide/menu-widgets/) and on buttons that are visible only if allowed (for example, an [action button](/refguide/button-widgets/) for editing).

For more information, see [Module Security](/refguide/module-security/).

### 2.5 Pop-Up Section {#pop-up}

The **Pop-up** section is only displayed for pop-up pages. For more information on what pop-up pages are, see the [Layout Type](#layout-type) section.

#### 2.5.1 Width (in Pixels)

This property specifies the pop-up page width in pixels. When set to 0, the width is determined automatically.

Default: *0*

#### 2.5.2 Height (in Pixels)

This property specifies the pop-up page height in pixels. When set to 0, the height is determined automatically.

Default: *0*

#### 2.5.3 Resizable

This property specifies whether the end-user can resize the pop-up or not.

Default: *Yes*

#### 2.5.4 Close Action

Configures the behavior of a button that closes the pop-up page. The default behavior of the pop-up close button is to rollback any changes and close the pop-up window. 

If you want to customize the behavior of the pop-up close button, you can point to a button on the page. When the pop-up close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the pop-up close button will revert back to the default behavior.

Default: *Default (cancel)*

### 2.6 Usage Section {#usage}

#### 2.6.1 Mark as Used

You can search for unused items in Studio Pro by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>. Pages that are only used from Java code will be listed as unused, because Studio Pro cannot look inside Java source code.

By setting the property **Mark as used** to *Yes*, you specify that the document is used implicitly and Studio Pro will no longer list it when searching for unused items.

*Default value*: No