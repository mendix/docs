---
title: "Page Properties"
url: /refguide/page-properties/
weight: 10
---

## 1 Introduction

This document describes page properties. For details on what pages are for and what kind of widgets can be placed on them, see [Pages](/refguide/pages/).

## 2 Properties Pane {#properties-pane}

The properties pane is divided into two major sections by a toggle at the top of the pane: **Properties** and **Styling**. Page properties consist of the following sections:

Properties:

* [General](#general)
* [Common](#common)
* [Data](#data)
* [Designer](#designer)
* [Usage](#usage)
* [Navigation](#navigation)
* [Pop-up](#pop-up)

Styling:

* [Common](#common-styling)

## 3 Properties {#properties}

### 3.1 General Section {#general}

#### 3.1.1 Platform

The values for the **Platform** property are:

* Web *(default)* – pages which are going to be displayed in a browser or web app
* Native – pages which are going to be displayed in a native mobile app

#### 3.1.2 Layout Type {#layout-type}

The **Layout type**, determines the purpose of the page and how it is opened.

| Layout Type         | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| **Responsive**      | Pages that will work fine on all types of devices.           |
| **Tablet specific** | Pages to be displayed on a tablet because the responsive option does not provide a good user interface on a tablet. |
| **Phone specific**  | Pages to be displayed on a phone because the responsive option does not provide a good user interface on a phone. |
| **Modal pop-up**    | Pages that appear as [modal pop-up windows](https://www.wikiwand.com/en/Modal_window). |
| **Pop-up**          | Pages that appear as *modeless* pop-up windows.              |

#### 3.1.3 Layout

The [layout](/refguide/layout/) on which this page is based.

#### 3.1.4 Title {#title}

The title of the page that is shown using the [page title widget](/refguide/page-title/). If the page is shown in a pop-up window, the title appears in the title bar of the pop-up. 

The title can be overridden. For example, the [Create button](/refguide/control-bar/) and the [Edit button](/refguide/control-bar/) of a data grid can refer to the same page, but they override the titles to **New** and **Edit**, respectively.

#### 3.1.5 URL {#url}

A page's URL allows end users to directly navigate to the page (for example, from external links or bookmarks). It will be shown in the address bar of the browser when you visit the page. When navigating to a page without a URL configured, the last visited URL is shown. Note that the full URL of the page will be the base URL of your application followed by `/p/` and then by the configured URL of the page (for example, `http://example.mendixcloud.com/p/home_page`).

Pages with parameters can also have URLs. For those pages, all page parameters must be present in the URL. To do this, define which attribute of each page parameter you want to be used in the URL. The syntax for this is the name of the page parameter, a `/`, and then the name of the attribute that should be used placed between curly brackets. 

For example, in the URL `product/{Product/Name}` the `Name` attribute of the page parameter `Product` will be used in the URL (in a browser, the URL appears as `http://example.mendixcloud.com/p/product/hammer`). Any attribute of type `Boolean`, `Decimal`, `Enumeration`, `Integer`, `Long`, or `String` can be used in the URL. 

Next to this, you can use `Id` as an attribute to include the identifier of the entity in the URL. This would appear as `product/{Product/Id}` for example. In the page URL dialog box, the configured URL is shown together with an example URL (with example values filled in for the parameters), and also shows which XPath queries the runtime will use to retrieve the page parameters. See this example URL in a dialog box:

{{< figure src="/attachments/refguide/modeling/pages/page/page-url-dialog.png" alt="page url dialog" class="no-border" >}}

{{% alert color="warning" %}}
Page URLs are not supported for pages that have non-persistable entities as parameters
{{%/alert %}}

In simple e-commerce applications, the URLs can be configured as follows:

* *orders/* – the URL for a page with a data grid for `Orders` (in a browser, the URL will look like `http://example.mendixcloud.com/p/orders/`)

* *order/{Order/Id}* – the URL for a page with data from a particular `Order` (in a browser, the URL will look like `http://example.mendixcloud.com/p/order/3212449487634321`, where `3212449487634321` is the unique identifier of the `Order`)

* *category/{Category/Code}/product/{Product/Name}* - the URL for a page that shows a product and a category (in a browser, the URL will look like `http://example.mendixcloud.com/p/category/tools/product/hammer` where `tools` is used to retrieve the `Category` by its `Code`, and `hammer` is used to retrieve the `Product` by its `Name`)

### 3.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 3.3 Data Section {#data}

#### 3.3.1 Parameters {#parameters}

The list of parameters that this page expects. These parameters can be used by [data views](/refguide/data-view/) with a page parameter data source.

A page parameter is an input that needs to be passed from the calling page, microflow, or nanoflow to the current page. Page parameters determine information that can be reused on the page. For example, if you want to build an **Employee_Details_Edit** page, the page will have a parameter **Employee**. Thus when this page is called an Employee object needs to be passed to it to show the corresponding Employee data.

You can also use multiple page parameters. Multiple page parameters allow you to easily use multiple objects on a page that are not associated with each other. Using multiple page parameters, you can pass multiple arguments when opening a page, the same as with microflows and nanoflows.

### 3.4 Usage Section {#usage}

#### 3.4.1 Mark as Used

You can search for unused items in Studio Pro by pressing <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>F</kbd>. Pages that are only used from Java code will be listed as unused, because Studio Pro cannot look inside Java source code.

By setting the property **Mark as used** to *Yes*, you specify that the document is used implicitly and Studio Pro will no longer list it when searching for unused items.

*Default value*: No

### 3.5 Designer Section {#designer}

{{% snippet file="/static/_includes/refguide/designer-properties.md" %}}

### 3.6 Navigation Section {#navigation}

#### 3.6.1 Visible For

This property defines for what module roles the page is visible. This has an effect on [menus and navigation widgets](/refguide/menu-widgets/) and on buttons that are visible only if allowed (for example, an [action button](/refguide/button-widgets/) for editing).

For more information, see [Module Security](/refguide/module-security/).

### 3.7 Pop-Up Section {#pop-up}

The **Pop-up** section is only displayed for pop-up pages. For more information on what pop-up pages are, see the [Layout Type](#layout-type) section.

#### 3.7.1 Width (in Pixels)

This property specifies the pop-up page width in pixels. When set to 0, the width is determined automatically.

Default: *0*

#### 3.7.2 Height (in Pixels)

This property specifies the pop-up page height in pixels. When set to 0, the height is determined automatically.

Default: *0*

#### 3.7.3 Resizable

This property specifies whether the end-user can resize the pop-up or not.

Default: *Yes*

#### 3.7.4 Close Action

Configures the behavior of a button that closes the pop-up page. The default behavior of the pop-up close button is to rollback any changes and close the pop-up window. 

If you want to customize the behavior of the pop-up close button, you can point to a button on the page. When the pop-up close button is clicked, it will then act as if the selected button is clicked. If the selected button is not available the pop-up close button will revert back to the default behavior.

Default: *Default (cancel)*

## 4 Styling {#styling}

### 4.1 Common Section {#common-styling}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}
