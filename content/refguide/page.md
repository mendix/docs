---
title: "Page"
parent: "pages"
---

{{% alert type="warning" %}}

This document describes the properties of a page. If you want to see what pages are for and what kind of widgets can be placed on them, please read the [Pages](pages) overview documentation.

{{% /alert %}}

Pages define the end user interface of a Mendix application. Every page is based on a [layout](layout). A page fills the 'gaps' defined by a layout with widgets such as the [data view](data-view) and the [data grid](data-grid).

## 1 Common Properties

### 1.1 Name

The name of the page. You can change the name via the project explorer.

{{% snippet file="refguide/Documentation+Property.md" %}}

### 1.2 Class

The class property allows you to specify a cascading style sheet (CSS) class for the page.

### 1.3 Style

The style property allows you to specify custom cascading style sheet (CSS) rules for this page. If a class is also specified, this styling is applied _after_ the class.

{{% alert type="info" %}}
`background-color:blue;`
This will result in a blue background
{{% /alert %}}

## 2 Designer Properties

### 2.1 Canvas Width

The canvas width property defines the width in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 800

### 2.2 Canvas Height

The canvas height property defines the preferred minimum height in pixels of the page in the page editor. It is purely used for editing purposes; this property has no effect on the actual application.

_Default value:_ 600

## 3 General Properties

### 3.1 Title

The title of the page that is shown using the [page title widget](page-title). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. The title can be overridden from places where forms are opened to make it possible to reuse a page for different purposes. For example, a [Grid Create Button](grid-new-button) and an [Edit button](edit-button) can refer to the same page but override the title to "New" and "Edit" respectively.

### 3.2 Layout

The [layout](layout) that this page is based on.

### 3.3 URL

The URL of the page can be used to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).
Pages with top level data views (parameterized pages) can also have URLs. The URL property of such pages should contain the `{Id}` path segment at the end.
In the browser, the `{Id}` segment will be replaced with the actual identifier of an entity.

In simple e-commerce applications, the URLs can be configured as follows:

*/orders/* - the URL for a page with a data grid for `Orders`. In browser the URL will look like `http://example.mendixcloud.com/p/orders/`.

*/order/{Id}* - the URL for a page with a data from particular `Order`. Actual URLs in browser will look like `http://example.mendixcloud.com/p/order/3212449487634321` where `3212449487634321` unique identifier of the `Order`.

## 4 Navigation Properties

### 4.1 Visible For

The module roles for which the page is visible. This has effect on [menu widgets](menu-widgets) and on buttons that are visible only if allowed. See, for example, the [Edit button](edit-button).

See also [Module Security](module-security).

## 5 Pop-up Properties

The pop-up properties are only relevant for popup pages, as opposed to content pages.

### 5.1 Width (Pixels)

Specifies the pop-up width in pixels. When set to 0, the width is determined automatically.

_Default value:_ 0

### 5.2 Height (Pixels)

Specifies the pop-up height in pixels. When set to 0, the height is determined automatically.

_Default value:_ 0

### 5.3 Resizable

Specifies whether the pop-up is resizable (Yes) or fixed-size (No).

_Default value:_ Yes

### 5.4 Close Action

Configures the behavior of the popup close button (the little cross in the top-right corner). The default behavior of the popup close button is to rollback any changes and close the popup. If you want to customize the behavior of the popup close button, you can point to a button on the page. When the popup close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the popup close button will revert back to the default behavior.

 _Default value:_ Default (cancel)

## 6 Usage Properties

### 6.1 Mark as Used

You can search for unused items (Ctrl+Shift+F, Search for = Unused items) in the Modeler. Pages that are only used from Java code will be listed as unused because the Modeler cannot look inside Java source code.

By setting the propery 'Mark as used' to 'Yes' you specify that the document is used implicitly and the Modeler will no longer list it when searching for unused items.

_Default value:_ No
