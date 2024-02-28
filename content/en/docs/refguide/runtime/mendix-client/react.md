---
title: "React Client"
url: /refguide/mendix-client/react
category: "Mendix Runtime"
description: "Describes the React Client."
weight: 10
tags: ["runtime", "mendix client", "react client"]
---

## 1 Introduction



## 2 Prerequisites

This section explains all prerequisites that your application must fulfill before it can leverage the react client.

### 2.1 Mendix version

The react client was introduced in Mendix 10.7.0 as a [beta feature](/releasenotes/beta-features/). It is planned to be released for general availability in Mendix 10.12.0.

### 2.2 Widgets

Widgets must fulfill the following requirements to be compatible with application leveraging the react client:

* The widget must be a pluggable widget.
* The widget must be compiled using the pluggable-widget-tools version 9.4.1 or later.

### 2.3 JavaScript Actions

JavaScript actions must not use any of the following client apis:

* The global symbol `dojo`
* The global symbol `dijit`
* The setting `mx.modulePath`
* The function `mx.ui.openForm`

These APIs are related to dojo and are no longer needed. For opening pages, please use the Nanoflow action [Show Page](/refguide/show-page) instead.

### 2.4 Enable react client

To enable the react client for your Mendix project, make sure it fulfills the prerequesites above and then enable it in the [App Settings](/refguide/app-settings/#react-client).

The migration mode will show warnings instead of errors for all incompatible widgets found in your project. This can help exploring and testing the react client in your project. For deploying an application leveraging the react client, we recommend setting the react client to Yes and resolving all errors before deploying.

## 3 Migration Guide

This sections provides guides to convert your application to become ready for the react client.

### 3.1 Marketplace content

Not all content found on the Mendix marketplace is ready for the react client, yet. Refer to [Marketplace Content Rect Readiness](/refguide/mendix-client/content-readiness) to see which of the most popular marketplace content is ready. If a module or widget you are using is not on the list, test for yourself if it is compatible and reach out to the authors to update it if not.

Update all marketplace content before enabling the react client.

### 3.2 Dynamic & Static image

The Dynamic Image and Static Image widget are not supported in the react client. They should be replaced with the universal [Image](/appstore/widgets/image) widget. You can [download the Image widget from the Mendix Marketplace](https://marketplace.mendix.com/link/component/118579).

To automatically convert a Dynamic image or a Static image right click on the widget or the error message and select Convert to Image.

{{% alert color="info" %}}
We are working on a batch conversion for image widgets that lets you convert all images in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10).
{{% /alert %}}

### 3.3 Reference selector

The Reference selector widgets (Reference selector, Reference set selector, Input reference set selector) are not supported in the react client. They should be replaced with the [Combo box](/appstore/widgets/combobox) widget. The Combo box widget can be [downloaded from the Mendix Marketplace](https://marketplace.mendix.com/link/component/219304).

To replace a Reference selector widget, follow these steps:

1. Add a Combo box widget next to the original widget.
1. Set the Attribute, Caption and Label properties to match the original widget.
1. Set any other properties to match the original widget.

To replace a Reference Set Selector widget, follow these steps:

1. Add a Combo box widget next to the original widget.
1. Set the Attribute to the association used as Data source in the original widget.
1. Set the Caption to the attribute used in the column of the original widget or use an expression to reflect multiple columns.
1. Set the Label to a meaningful label for the attribute.

This will replace the table from the Reference set selector with a more commonly used dropdown widget supporting multiple selection.

To replace an Input reference set selector, follow these steps:

1. Add a Combo box widget next to the original widget.
1. Set the Attribute to the association used as Data source on the select page used by the original widget.
1. Set the Caption to the attribute used on the select page or use an expression to reflect multiple columns.
1. Set the Label and any other properties to match the original widget.
1. Remove the select page.

This will replace the popup showing a table for selection with a more commonly used dropdown widget supporting multiple selection (see above).

It is also recommended to replace the Drop-down widget with the Combo box widget for a better user experience. This change is not required.

{{% alert color="info" %}}
We are working on an automatic conversion for reference selector widgets that lets you convert a reference selector automatically to a combo box. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10).
{{% /alert %}}

### 3.4 Data grid

The Data grid widget is not supported in the react client. It should be replaced with the [Data grid 2](/appstore/modules/data-grid-2) widget. The Data grid 2 widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To automatically convert a Data grid right click on the widget or the error message and select Convert to Data grid 2.

{{% alert color="info" %}}
We are working on a batch conversion for data grid widgets that lets you convert all data grids in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10).
{{% /alert %}}

### 3.5 Template grid

The Template grid widget is not supported in the react client. It should be replaced with the [Gallery widget](/appstore/modules/gallery). The Gallery widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To replace a Template grid widget, follow these steps:

1. Add a Gallery widget next to the original Template grid widget.
1. Set up the data source to match the original widget.
1. Configure the columns and any other properties to match the original widget.
1. Add any actions that items from your original widget as icon buttons to the content area.
1. Add any actions that do not affect rows as buttons to the header of the Gallery.

### 3.6 Custom widget

Dojo widgets are no longer supported in the react client. They should be replaced with a pluggable widget based on react. Converting a dojo widget to a react widget requires JavaScript programming. Follow the guide [/howto/extensibility/create-a-pluggable-widget-one](Build a Pluggable Web Widget: Part 1) to get started.

Pluggable widgets must be built with pluggable-widget-tools version 9.4.1 or later. Follow these steps to update pluggable-widget-tools and rebuild your widget:

1. Open your widget folder in your favorite text editor
1. Edit `package.json`
1. Find the line containing `"@mendix/pluggable-widgets-tools": "~[version]",`
2. Replace `[version]` with a newer version, for example `9.24.0`
3. Save the file
4. Install the new dependencies by running `npm install`
5. Build the widget by running `npm run release`

### 3.7 Styling

The react client introduces some minor changes to the DOM structure of the Mendix application. These changes can have an impact on your styles defined in SCSS. To avoid any issues, test your custom styles before deploying the updated application.

If your application's navigation bar does not fill the entire screen, you are likely using an outdated version of the [Atlas Core](https://marketplace.mendix.com/link/component/117187) module. Please update it to the latest version. Also make sure to not set the SCSS variable `$use-modern-client` anywhere in your custom styles.

### 3.8 JavaScript action

JavaScript actions should be mostly unaffected. Problems arise only if you use outdated actions or make extensive use of our client API.
Problems in JavaScript actions are not captured by the consistency checker. To validate that the JavaScript actions works with the react client it should be executed with the react client active. Any errors reported by the Browser Console (Press F12 to access it) will help identify the problem.

If you encounter problems with platform-supported JavaScript actions (for example from Nanoflow Commons) make sure to update the module containing the action from the marketplace. In most cases, this will resolve the issue. If it is not resolved, reach out to the maintainer of the module and let the know of the issue.
