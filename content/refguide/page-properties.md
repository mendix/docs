---
title: "Page Properties"
parent: "page"
menu_order: 10
tags: ["studio pro", "page", "properties"]
---

## 1 Introduction

This document describes page properties. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](pages).

## 2 Common Section

### 2.1 Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class `mx-name-{NAME}`, which can be useful for [Selenium testing](/howto7/integration/selenium-support).

### 2.2 Documentation

This property can be used to store developer documentation. End-users will never see this documentation.

### 2.3 Class

The class property allows you to specify one or more cascading style sheet (CSS) classes for the widget. The classes should be separated by a space. The classes will be applied to the widget in the browser and the widget will get the corresponding styling. The classes should be classes in the theme that is used in the project. It overrules the default styling of the widget.

Styling is applied in the following order:

1. The default styling defined by the theme the project uses.
2. The `Class` property.
3. The `Style` property.

You can see which widgets in a page have styling applied via the class or style property by clicking the <strong>Show styles</strong> button in **Structure mode**.

![](attachments/common-widget-properties/show-styles.png)

### 2.4 Style

The style property allows you to specify additional CSS styling. If a class is also specified, this styling is applied *after* the class. 

You can see which widgets in a page have styling applied via the style or class property by clicking the <strong>Show styles</strong> button in **Structure mode**.

## 3 Designer Section

{{% snippet file="refguide/designer-properties.md" %}}

## 4 General Section

### 4.1 Title {#title}

The title of the page that is shown using the [page title widget](page-title). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. The title can be overridden from places where forms are opened to make it possible to reuse a page for different purposes. For example, the [*Create* button](control-bar) and the [*Edit* button](control-bar) of a data grid can refer to the same page, but they override the titles to **New** and **Edit**, respectively.

### 4.2 Layout

This is the [layout](layout) on which this page is based.

### 4.3 URL

The URL of the page can be used to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).

Pages with top-level data views (parameterized pages) can also have URLs. The URL property of such pages should contain the `{Id}` path segment at the end. In the browser, the `{Id}` segment will be replaced with the actual identifier of an entity.

In simple e-commerce applications, the URLs can be configured as follows:

* */orders/* – the URL for a page with a data grid for `Orders` (in a browser, the URL will look like `http://example.mendixcloud.com/p/orders/`)

* */order/{Id}* – the URL for a page with data from a particular `Order` (actual URLs in a browser will look like `http://example.mendixcloud.com/p/order/3212449487634321`, wherein `3212449487634321` is the unique identifier of the `Order`)

## 5 Navigation Section

### 5.1 Visible For

These are the module roles for which the page is visible. This has an effect on [menu widgets](menu-widgets) and on buttons that are visible only if allowed (for example, an [action button](button-widgets) for editing).

For more information, see [Module Security](module-security).

## 6 Pop-Up Section

The pop-up properties are only relevant for pop-up pages (as opposed to content pages).

### 6.1 Width (Pixels)

This specifies the pop-up width in pixels. When set to 0, the width is determined automatically.

Default: *0*

### 6.2 Height (Pixels)

Specifies the pop-up height in pixels. When set to 0, the height is determined automatically.

Default: *0*

### 6.3 Resizable

Specifies whether the pop-up is resizable (Yes) or fixed-size (No).

Default: *Yes*

### 6.4 Close Action

Configures the behavior of the popup close button (the little cross in the top-right corner). The default behavior of the popup close button is to rollback any changes and close the popup. If you want to customize the behavior of the popup close button, you can point to a button on the page. When the popup close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the popup close button will revert back to the default behavior.

Default: *Default (cancel)*

## 7 Usage Section

### 7.1 Mark as Used

You can search for unused items in Studio Pro by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>. Pages that are only used from Java code will be listed as unused, because Studio Pro cannot look inside Java source code.

By setting the propery **Mark as used** to **Yes**, you specify that the document is used implicitly and Studio Pro will no longer list it when searching for unused items.

*Default value*: No