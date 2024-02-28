---
title: "React Client"
url: /refguide/mendix-client/react
category: "Mendix Runtime"
description: "Describes the React Client."
weight: 10
tags: ["runtime", "mendix client", "react client"]
---

## 1 Introduction



## 2 Prerequisites for Enabling the React Client

### 2.1 Mendix version

Mx 10.7+

### 2.2 Only React-based (pluggable) widgets using PWT@9.4.1+



### 2.3 No dojo-based client APIs

[Client APIs](https://apidocs.rnd.mendix.com/10/client/index.html)

* `dojo` will be removed
* `dijit` will be removed
* `mx.modulePath` will be removed
* `mx.ui.openForm` will be removed - use Show Page action in a Nanoflow instead

### 2.4 Enable in runtime settings (Migration mode / fully enabled)

To enable the react client, perform the following steps:
1. Ensure you are using Mendix 9.24.0 or newer.
1. Start Studio Pro with the following command line parameter: --enable-react-web-client-setting.
1. Open the application settings.
1. Open the runtime tab.
1. Set React Client to Yes

How to get #use-modern-client setting to work in an older app?

Migration mode?

Enabling the React client activates consistency checks for supported widgets. All unsupported widgets found in the application project will be highlighted as consistency errors. The migration mode changes this to show deprecation warnings instead. Running the react client will throw runtime exceptions if unsupported widgets or JavaScript Actions are used. Note that unsupported JavaScript actions cannot be detected this way.

### 2.5 Verify react compatibility

To verify that a module is compatible with the react client, perform the following steps:

1. Create a test application in Mendix 9.24.0 or newer.
1. Enable the react client in the test application.
1. Add the module to the test application.
1. Enable the react client in Migration mode.
1. Verify that no deprecation warnings are shown for your module (ignore other modules).
1. Run the application and test all functionality provided by your module.


## 3 Migration Guide

### 3.1 Dynamic & Static image

The Dynamic Image and Static Image widget are not supported in the react client. They should be replaced with the universal [Image](/appstore/widgets/image/) widget. You can [download the Image widget from the Mendix Marketplace](https://marketplace.mendix.com/link/component/118579).

To automatically convert a Dynamic image or a Static image right click on the widget or the error message and select Convert to Image.

{{% alert color="info" %}}
We are working on a batch conversion for image widgets that lets you convert all images in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### 3.2 Reference selector

The Reference selector widgets (Reference selector, Reference set selector, Input reference set selector) are not supported in the react client. They should be replaced with the [Combo box](/appstore/widgets/combobox/) widget. The Combo box widget can be [downloaded from the Mendix Marketplace](https://marketplace.mendix.com/link/component/219304).

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
We are working on an automatic conversion for reference selector widgets that lets you convert a reference selector automatically to a combo box. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### 3.3 Data grid

The Data grid widget is not supported in the react client. It should be replaced with the [Data grid 2](/appstore/modules/data-grid-2/) widget. The Data grid 2 widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To automatically convert a Data grid right click on the widget or the error message and select Convert to Data grid 2.

{{% alert color="info" %}}
We are working on a batch conversion for data grid widgets that lets you convert all data grids in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### 3.4 Template grid

The Template grid widget is not supported in the react client. It should be replaced with the [Gallery widget](/appstore/modules/gallery/). The Gallery widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To replace a Template grid widget, follow these steps:

1. Add a Gallery widget next to the original Template grid widget.
1. Set up the data source to match the original widget.
1. Configure the columns and any other properties to match the original widget.
1. Add any actions that items from your original widget as icon buttons to the content area.
1. Add any actions that do not affect rows as buttons to the header of the Gallery.

### 3.5 Custom widget

Dojo widgets are no longer supported in the react client. They should be replaced with a pluggable widget based on react. Converting a dojo widget to a react widget requires JavaScript programming. Here are some resources to get you started:

* https://docs.mendix.com/howto/extensibility/create-a-pluggable-widget-one/
* https://docs.mendix.com/apidocs-mxsdk/apidocs/pluggable-widgets/
* https://react.dev/learn

Widgets built with pluggable-widget-tools before version 9.4.1 are not supported. Follow these steps to update pluggable-widget-tools and rebuild your widget:

1. Decide which version of the pluggable-widget-tools you want to use.
1. Open your widget folder in your favorite editor (for example VSCode)
1. Edit package.json
1. Find the line containing "@mendix/pluggable-widgets-tools": "~[Version Number]",
1. Replace [Version Number] with the version you selected, for example 9.24.0
1. Save the file
1. Install the new dependencies by running the command npm install
1. Build the widget by running npm run release

### 3.6 Styling

The react client introduces some minor changes to the DOM structure of the Mendix application. These changes can have an impact on your styles defined in SCSS. We do not expect many issues with styles but it is strongly recommended to test the styles of your widget, your UI module, and your application before releasing an update. This can be done by following below guide to verify react compatibility.

### 3.7 JavaScript action

JavaScript actions should be mostly unaffected. Problems arise only if you use outdated actions or make extensive use of our client API.
Problems in JavaScript actions are not captured by the consistency checker. To validate that the JavaScript actions works with the react client it should be executed with the react client active. Any errors reported by the Browser Console (Press F12 to access it) will help identify the problem.
If you encounter problems with platform-supported JavaScript actions (for example from Nanoflow Commons) make sure to update the module containing the action from the marketplace. In most cases, this will resolve the issue. If it is not resolved, reach out to the maintainer of the module and let the know of the issue.

## Mendix Content Readiness

