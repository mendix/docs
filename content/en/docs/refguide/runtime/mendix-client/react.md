---
title: "React Client"
url: /refguide/mendix-client/react
category: "Mendix Runtime"
description: "Describes the React Client."
weight: 10
tags: ["runtime", "mendix client", "react client"]
---

## 1 Introduction

In Studio Pro versions 10.7.0 and above, there is an alternative version of the Mendix Client written in React. The React version of the client is currently a [beta feature](/releasenotes/beta-features/). You can enable this React Client in [App Settings](/refguide/app-settings/#react-client).

The React Client replaces [Dojo](https://dojotoolkit.org/) with [React](https://react.dev/) for the view layer. This change allows for improved performance, enables incremental loading, and future-proofs your application. For more information on these three aspects, see the sections below:

* [Improved Performance](#improved-performance)
* [Incremental Page Loading](#incremental-page-loading)
* [Future-Proof](#future-proof)

Beyond those sections, consult the following major sections to leverage the React Client to its fullest potential:

* [Prerequisites](#prerequisites) – learn the prerequisites your app must fulfill in order to use the React Client.
* [Migration Guide](#migration-gude) – use guides to convert your application so it is ready for the React Client.

### 1.1 Improved Performance{#improved-performance}

Web application performance is a key metric for quality apps. If a website does not open quickly or feels sluggish to use, many external users will abandon it immediately. For internal apps, smooth performance ensures employees can focus more on their work than on their tools. 

[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) (built into the Chrome browser) is a commonly used tool that measures app performance. It reports the overall performance of a web application and key indices that lead up to the performance score. 

When comparing a conventional Mendix web application with the same application using the new React Client, we observe the following improvements:

| Metric | Without React Client | With React Client | Improvement |
| --- | --- | --- | --- |
| Peformance | 87 | 91 | +5% |
| First Contentful Paint | 1.1s | 0.7s | -36% |
| Largest Contentful Paint | 2.0s | 1.8s | -10% |
| Speed Index | 1.6s | 1.3s | -19% |

Mendix believes the most important metric for most web applications is largest contentful paint, because it represents when the majority of the application has been loaded successfully. By this metric, the new React Client performs 10% faster than the previous client – a significant change that requires no optimization work at all on the application model.

### 1.2 Incremental Page Loading{#incremental-page-loading}

The second advantage of the React Client becomes immediately apparent when your web app contains complex pages with multiple datasources. In the previous Mendix Client, the user just sees a progress indicator until the entire page is loaded. In the new React Client, the core structure of your website is shown immediately and content is added as it is loaded. This way, your users can already see some loaded data or orient themselves in your app’s user interface instead of staring at a progress indicator. This psychological difference significantly improves the *perceived* speed of your application.

### 1.3 Future-Proof{#future-proof}

Finally, the React Client allows Mendix to clean up our client and remove many libraries that are no longer needed, such as the Dojo framework. While it was popular when we introduced in Mendix, it has now come out of fashion. By removing such dependencies in favor of modern frameworks, such as React, we can better ensure that your applications run stable and secure in your users’ web browsers.

## 2 Prerequisites{#prerequisites}

Review the prerequisites below that your application must fulfill before it can leverage the React Client.

### 2.1 Mendix Version{#mendix-version}

The React Client was introduced in Mendix 10.7.0 as a [beta feature](/releasenotes/beta-features/). It is planned to be released for general availability in Mendix 10.12.0.

### 2.2 Widgets{#widgets}

Widgets must fulfill the following requirements to be compatible with apps leveraging the React Client:

* The widget must be a pluggable widget
* The widget must be compiled using the `pluggable-widget-tools` version 9.4.1 or above

### 2.3 JavaScript Actions{#js-actions-prerec}

JavaScript actions must not use any of the following client APIs:

* The global symbol `dojo`
* The global symbol `dijit`
* The setting `mx.modulePath`
* The function `mx.ui.openForm`

These APIs are related to Dojo and are no longer needed. For opening pages, please use the nanoflow [Show Page](/refguide/show-page) action instead.

Fore more information on React and APIs in Mendix, see our [React Client API Documentation](https://apidocs.rnd.mendix.com/10/client-react/index.html)

### 2.4 Enable React Client{#enable-react}

To enable the React Client for your Mendix project, make sure it fulfills the prerequisites above. Then, enable the React Client in [App Settings](/refguide/app-settings/#react-client).

The migration mode will show warnings instead of errors for all incompatible widgets found in your project. This can help you explore and test the React Client without being blocked by errors. When deploying an app leveraging the React Client, we recommend setting **React Client** to **Yes** and resolving all errors before deploying.

## 3 Migration Guide{#migration}

Read further for guides that allow you convert your app so it is ready for the React Client.

### 3.1 Marketplace Components{#marketplace}

Not all components found on the Mendix marketplace is ready for the React Client. Refer to [Marketplace Content Rect Readiness](/refguide/mendix-client/content-readiness) to see which of the most popular marketplace components are React ready. If a module or widget you are using is not on the list, test it for yourself then reach out to the authors to update it if not.

Mendix recommends refreshing all Marketplace components in your app before enabling the React Client.

### 3.2 Dynamic & Static Image{#dynamic-static}

The [Dynamic Image](/refguide/image-viewer/) and [Static Image](/refguide/image/) widgets are not supported in the React Client. TO use React, replace them with the universal [Image](/appstore/widgets/image) widget. You can [download the Image widget from the Mendix Marketplace](https://marketplace.mendix.com/link/component/118579).

To automatically convert a dynamic image or a static image, right click on the widget (or the error message) and select **Convert to Image**.

{{% alert color="info" %}}
We are working on a batch conversion for image widgets that lets you convert all images in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10).
{{% /alert %}}

### 3.3 Reference Selector{#reference-selector}

The Reference selector widgets (Reference selector, Reference set selector, Input reference set selector) are not supported in the React Client. They should be replaced with the [Combo Box](/appstore/widgets/combobox) widget. The Combo box widget can be [downloaded from the Mendix Marketplace](https://marketplace.mendix.com/link/component/219304).

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

### 3.4 Data Grid{#data-grid}

The Data grid widget is not supported in the React Client. It should be replaced with the [Data grid 2](/appstore/modules/data-grid-2) widget. The Data grid 2 widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To automatically convert a Data grid right click on the widget or the error message and select Convert to Data grid 2.

{{% alert color="info" %}}
We are working on a batch conversion for data grid widgets that lets you convert all data grids in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10).
{{% /alert %}}

### 3.5 Template Grid{#template-grid}

The Template grid widget is not supported in the React Client. It should be replaced with the [Gallery widget](/appstore/modules/gallery). The Gallery widget is part of the [Data Widgets Module on the Mendix Marketplace](https://marketplace.mendix.com/link/component/116540).

To replace a Template grid widget, follow these steps:

1. Add a Gallery widget next to the original Template grid widget.
1. Set up the data source to match the original widget.
1. Configure the columns and any other properties to match the original widget.
1. Add any actions that items from your original widget as icon buttons to the content area.
1. Add any actions that do not affect rows as buttons to the header of the Gallery.

### 3.6 Custom Widgets{#custom-widgets}

Dojo widgets are no longer supported in the React Client. They should be replaced with a pluggable widget based on react. Converting a dojo widget to a react widget requires JavaScript programming. Follow the guide [/howto/extensibility/create-a-pluggable-widget-one](Build a Pluggable Web Widget: Part 1) to get started.

Pluggable widgets must be built with pluggable-widget-tools version 9.4.1 or later. Follow these steps to update pluggable-widget-tools and rebuild your widget:

1. Open your widget folder in your favorite text editor
1. Edit `package.json`
1. Find the line containing `"@mendix/pluggable-widgets-tools": "~[version]",`
2. Replace `[version]` with a newer version, for example `9.24.0`
3. Save the file
4. Install the new dependencies by running `npm install`
5. Build the widget by running `npm run release`

### 3.7 Styling{#styling}

The React Client introduces some minor changes to the DOM structure of the Mendix application. These changes can have an impact on your styles defined in SCSS. To avoid any issues, test your custom styles before deploying the updated application.

If your application's navigation bar does not fill the entire screen, you are likely using an outdated version of the [Atlas Core](https://marketplace.mendix.com/link/component/117187) module. Please update it to the latest version.

### 3.8 JavaScript Actions{#js-actions}

JavaScript actions should be mostly unaffected. Problems arise only if you use outdated actions or make extensive use of our client API.

Problems in JavaScript actions are not captured by the consistency checker. To validate that the JavaScript actions works with the React Client it should be executed with the React Client active. Any errors reported by the Browser Console (Press F12 to access it) will help identify the problem.

If you encounter problems with platform-supported JavaScript actions (for example from Nanoflow Commons) make sure to update the module containing the action from the marketplace. In most cases, this will resolve the issue. If it is not resolved, reach out to the maintainer of the module and let the know of the issue.
