---
title: "Mendix React Client"
url: /refguide/mendix-client/react
description: "Describes the React version of the Mendix Client."
weight: 10
---

## Introduction

In Studio Pro versions 10.7.0 and above, there is an alternative version of the Mendix Client written in React. The React version of the client is currently a [beta feature](/releasenotes/beta-features/). You can enable this React client in [App Settings](/refguide/app-settings/#react-client).

The React client replaces [Dojo](https://dojotoolkit.org/) with [React](https://react.dev/) for the view layer. This change allows for improved performance, enables incremental loading, and future-proofs your application. For more information on these three aspects, see the sections below:

* [Improved Performance](#improved-performance)
* [Incremental Page Loading](#incremental-page-loading)
* [Future-Proof](#future-proof)

Beyond those sections, consult the following major sections to leverage the React client to its fullest potential:

* [Prerequisites](#prerequisites) – learn the prerequisites your app must fulfill in order to use the React client.
* [Migration Guide](#migration-guide) – use guides to convert your application so it is ready for the React client.

### Improved Performance{#improved-performance}

Web application performance is a key metric for quality apps. If a website does not open quickly or feels sluggish to use, many external users will abandon it immediately. For internal apps, smooth performance ensures employees can focus more on their work than on their tools. 

[Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk) (built into the Chrome browser) is a commonly used tool that measures app performance. It reports the overall performance of a web application and key indices that lead up to the performance score. 

When comparing a conventional Mendix web application with the same application using the new React Client, we observe the following improvements:

| Metric | Without React Client | With React Client | Improvement |
| --- | --- | --- | --- |
| Performance | 87 | 91 | +5% |
| First Contentful Paint | 1.1s | 0.7s | -36% |
| Largest Contentful Paint | 2.0s | 1.8s | -10% |
| Speed Index | 1.6s | 1.3s | -19% |

Mendix believes the most important metric for most web applications is largest Contentful paint, because it represents when the majority of the application has been loaded successfully. By this metric, the new React client performs 10% faster than the previous client – a significant change that requires no optimization work at all on the application model.

### Incremental Page Loading{#incremental-page-loading}

The second advantage of the React client becomes immediately apparent when your web app contains complex pages with multiple datasources. In the previous Mendix Client, the user just sees a progress indicator until the entire page is loaded. In the new React client, the core structure of your website is shown immediately and content is added as it is loaded. This way, your users can already see some loaded data or orient themselves in your app’s user interface instead of staring at a progress indicator. This psychological difference significantly improves the *perceived* speed of your application.

### Future-Proof{#future-proof}

Finally, the React client allows Mendix to clean up our client and remove many libraries that are no longer needed, such as the Dojo framework. While it was popular when we introduced in Mendix, it has now come out of fashion. By removing such dependencies in favor of modern frameworks, such as React, we can better ensure that your applications run stable and secure in your users’ web browsers.

## Prerequisites{#prerequisites}

Review the prerequisites below that your application must fulfill before it can leverage the React client.

### Mendix Version{#mendix-version}

The React client was introduced in Mendix 10.7.0 as a [beta feature](/releasenotes/beta-features/). It is planned to be released for general availability in Mendix 10.18 as an opt-in feature.

### Widgets{#widgets}

Widgets must fulfill the following requirements to be compatible with apps leveraging the React client:

* The widget must be a pluggable widget
* The widget must be compiled using the `pluggable-widget-tools` version 9.4.1 or above

### JavaScript Actions{#js-actions-prerec}

JavaScript actions must not use any of the following client APIs:

* The global symbol `dojo`
* The global symbol `dijit`
* The setting `mx.modulePath`
* The function `mx.ui.openForm`

These APIs are related to Dojo and are no longer needed. For opening pages, please use the nanoflow [Show Page](/refguide/show-page/) action instead.

Fore more information on React and APIs in Mendix, see our [Mendix 10 React Client API](https://apidocs.rnd.mendix.com/10/client-react/index.html) documentation.

### Enable React Client{#enable-react}

To enable the React client for your Mendix project, make sure it fulfills the prerequisites above. Then, enable the React client in [App Settings](/refguide/app-settings/#react-client).

The migration mode will show deprecation warnings instead of errors for all incompatible widgets found in your project. This can help you explore and test the React client without being blocked by errors. When deploying an app leveraging the React client, we recommend setting **React Client** to **Yes** and resolving all errors before deploying.

## Migration Guide{#migration-guide}

Read further for guides that allow you convert your app so it is ready for the React client.

### Marketplace Components{#marketplace}

Not all Mendix Marketplace components are ready for the React client. Refer to [Marketplace Component React Status](/refguide/mendix-client/marketplace-react-status/) to see which of the most popular marketplace components are React ready. If a module or widget you are using is not on the list, test it for yourself then reach out to the authors to update it if not.

Mendix recommends refreshing all Marketplace components in your app before enabling the React client.

### Dynamic & Static Image{#dynamic-static}

The [Dynamic Image](/refguide/image-viewer/) and [Static Image](/refguide/image/) widgets are not supported in the React client. To use React, replace them with the universal [Image](/appstore/widgets/image/) widget. You can [download the Image widget from the Mendix Marketplace](https://marketplace.mendix.com/link/component/118579).

To automatically convert a dynamic image or a static image, right-click the widget (or the error message) and select **Convert to Image**.

{{% alert color="info" %}}
We are working on a batch conversion for image widgets that lets you convert all images in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### Reference Selector{#reference-selector}

The reference selector widgets ([Reference Selector](/refguide/reference-selector/), [Reference Set Selector](/refguide/reference-set-selector/), and [Input Reference Set Selector](/refguide/input-reference-set-selector/)) are not supported in the React client. To leverage React, replace them with the [Combo Box](/appstore/widgets/combobox/) widget. The combo box widget can be [downloaded from the Mendix Marketplace](https://marketplace.mendix.com/link/component/219304).

To replace a reference selector widget, follow these steps:

1. Add a combo box widget next to the original widget.
1. Set the **Attribute**, **Caption**, and **Label** properties to match the original widget.
1. Set any other properties to match the original widget.

To replace a reference set selector widget, follow these steps:

1. Add a combo box widget next to the original widget.
1. Set the **Attribute** to the association that was used as data source in the original widget.
1. Set the **Caption** to the attribute used in the column of the original widget, or use an expression to reflect multiple columns.
1. Set the **Label** to a meaningful label for the attribute.

This will replace the table from the reference set selector with a more commonly used [drop-down widget](/refguide/drop-down/) supporting multiple selection.

To replace an input reference set selector, follow these steps:

1. Add a combo box widget next to the original widget.
1. Set the **Attribute** to the association used as data source on the select page used by the original widget.
1. Set the **Caption** to the attribute used on the select page, or use an expression to reflect multiple columns.
1. Set the **Label** and any other properties to match the original widget.
1. Remove the select page.

This will replace the pop-up showing a table for selection with a more commonly used dropdown widget supporting multiple selection (see above).

We also recommended you replace drop down widgets with combo box widgets for a better user experience. This change is not required.

{{% alert color="info" %}}
We are working on an automatic conversion for reference selector widgets that lets you convert a reference selector automatically to a combo box. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### Data Grid{#data-grid}

The data grid widget is not supported in the React client. To leverage React, replace it with the [Data Grid 2](/appstore/modules/data-grid-2/) widget. The data grid 2 widget is part of the [Data Widgets Module](https://marketplace.mendix.com/link/component/116540) in the Mendix Marketplace.

To automatically convert a data grid widget to a data grid 2, right-click the widget (or the error message) and select **Convert to Data Grid 2**.

{{% alert color="info" %}}
We are working on a batch conversion for data grid widgets that lets you convert all data grids in your project with a few clicks. We will announce the release in our [Release Notes](/releasenotes/studio-pro/10/).
{{% /alert %}}

### Template Grid{#template-grid}

The template grid widget is not supported in the React client. It should be replaced with the [Gallery widget](/appstore/modules/gallery/). The gallery widget is part of the [Data Widgets Module](https://marketplace.mendix.com/link/component/116540) in the Mendix Marketplace.

To replace a template grid widget, follow these steps:

1. Add a gallery widget next to the original template grid widget.
1. Set up the gallery widget's data source to match the original widget.
1. Configure the columns and any other properties to match the original widget.
1. Add any actions that items from your original widget as icon buttons to the content area.
1. Add any actions that do not affect rows as buttons to the gallery widget's header.

### Custom Widgets{#custom-widgets}

Dojo widgets are no longer supported in the React client. They should be replaced with a pluggable widget based on React. 

Converting a Dojo widget to a React widget requires JavaScript programming. Follow [Build a Pluggable Web Widget: Part 1](/howto/extensibility/create-a-pluggable-widget-one/).

Pluggable widgets must be built with `pluggable-widget-tools` version 9.4.1 or higher. Follow these steps to update `pluggable-widget-tools` and rebuild your widget:

1. Open your widget folder in your text editor of choice.
1. Edit `package.json`.
1. Find the line containing `"@mendix/pluggable-widgets-tools": "~[version]",`.
1. Replace `[version]` with a newer version (for example `9.24.0`).
1. Save the file.
1. Install the new dependencies by running `npm install`.
1. Build the widget by running `npm run release`.

### Styling{#styling}

The React client introduces some minor changes to the DOM structure of Mendix applications. These changes can have an impact on your styles as defined in SCSS. To avoid any issues, test your custom styles before deploying the updated application.

If your application's navigation bar does not fill the entire screen, you are likely using an outdated version of the [Atlas Core](https://marketplace.mendix.com/link/component/117187) module. Please update it to the latest version to fix this.

### JavaScript Actions{#js-actions}

JavaScript actions should be mostly unaffected by React. Problems arise only if you use outdated actions or make extensive use of our [Client API](/apidocs-mxsdk/apidocs/client-api/).

Problems in JavaScript actions are not captured by the consistency checker. To validate that JavaScript actions work with the React client, the checker should be executed with the React client active. Any errors reported by the **Browser Console** (Press <kbd>F12</kbd> to access it) will help identify the problem.

If you encounter problems with platform-supported JavaScript actions (for example from the [Nanoflow Commons](/appstore/modules/nanoflow-commons/) module) make sure to update the module containing the action from the Marketplace. In most cases, this will resolve the issue. If it is not resolved, reach out to the maintainer of the module and let them know of the issue.
