---
title: "Page"
url: /refguide7/page/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

{{% alert color="info" %}}

This document describes the properties of a page. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](/refguide7/pages/).

{{% /alert %}}

Pages define the end-user interface of a Mendix application. Every page is based on a [layout](/refguide7/layout/). A page fills the "gaps" defined by a layout with widgets such as the [data view](/refguide7/data-view/) and [data grid](/refguide7/data-grid/).

{{% alert color="success" %}}
From Mendix version 7.16 it is possible to see a preview of a page you are designing by clicking the **View mode** button in the page editor. You can return to editing the page by clicking **Edit mode**.

{{< figure src="/attachments/refguide7/desktop-modeler/pages/page/view-mode.png" alt="Edit mode and View mode buttons" >}}

{{% /alert %}}

## 2 Common Properties

{{% snippet file="/static/_includes/refguide7/Document+Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Documentation+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Document+Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

## 3 Designer Properties

{{% snippet file="/static/_includes/refguide7/Canvas+Width+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Canvas+Height+Property.md" %}}

## 4 General Properties

### 4.1 Title

The title of the page that is shown using the [page title widget](/refguide7/page-title/). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. The title can be overridden from places where forms are opened to make it possible to reuse a page for different purposes. For example, a [grid create button](/refguide7/grid-new-button/) and an [edit button](/refguide7/edit-button/) can refer to the same page, but they override the titles to **New** and **Edit**, respectively.

### 4.2 Layout

This is the [layout](/refguide7/layout/) on which this page is based.

### 4.3 URL

The URL of the page can be used to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).

Pages with top-level data views (parameterized pages) can also have URLs. The URL property of such pages should contain the `{Id}` path segment at the end. In the browser, the `{Id}` segment will be replaced with the actual identifier of an entity.

In simple e-commerce applications, the URLs can be configured as follows:

* */orders/* – the URL for a page with a data grid for `Orders` (in a browser, the URL will look like `http://example.mendixcloud.com/p/orders/`)

* */order/{Id}* – the URL for a page with data from a particular `Order` (actual URLs in a browser will look like `http://example.mendixcloud.com/p/order/3212449487634321`, wherein `3212449487634321` is the unique identifier of the `Order`)

## 5 Navigation Properties

### 5.1 Visible For

These are the module roles for which the page is visible. This has an effect on [menu widgets](/refguide7/menu-widgets/) and on buttons that are visible only if allowed (for example, the [edit button](/refguide7/edit-button/)).

For more information, see [Module Security](/refguide7/module-security/).

## 6 Pop-Up Properties

The pop-up properties are only relevant for pop-up pages (as opposed to content pages).

### 6.1 Width (Pixels)

This specifies the pop-up width in pixels. When set to 0, the width is determined automatically.

*Default value:* 0

### 6.2 Height (Pixels)

Specifies the pop-up height in pixels. When set to 0, the height is determined automatically.

*Default value:* 0

### 6.3 Resizable

Specifies whether the pop-up is resizable (Yes) or fixed-size (No).

*Default value:* Yes

### 6.4 Close Action

Configures the behavior of the popup close button (the little cross in the upper-right corner). The default behavior of the popup close button is to rollback any changes and close the popup. If you want to customize the behavior of the popup close button, you can point to a button on the page. When the popup close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the popup close button will revert back to the default behavior.

 _Default value:_ Default (cancel)

## 7 Usage Properties

### 7.1 Mark as Used

You can search for unused items in the Modeler by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>. Pages that are only used from Java code will be listed as unused, because the Modeler cannot look inside Java source code.

By setting the propery **Mark as used** to **Yes**, you specify that the document is used implicitly and the Modeler will no longer list it when searching for unused items.

*Default value:* No
