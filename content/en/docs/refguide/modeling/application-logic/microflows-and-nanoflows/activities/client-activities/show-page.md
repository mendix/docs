---
title: "Show Page"
url: /refguide/show-page/
weight: 50
aliases:
    - /refguide/Show+Page.html
    - /refguide/Show+Page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline or native app. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline-First Data*.
{{% /alert %}}

## Introduction

With this activity, you can show a selected page to an end-user. Mendix apps run as a single page application, so the page will always be shown in the same browser tab/window as the app.

You can directly drag a page from the **App Explorer** into your microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-page/show-page-from-app-explorer.png" class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-page/show-page-properties.png" width="650px" class="no-border" >}}

The **Show page** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity, or right-clicking the activity and selecting **Properties**.

### Page

The [page](/refguide/page/) that is displayed to an end-user. If the page has parameters, the [Parameters](#parameters) section allows you to specify the which objects should be passed to the page.

To create a new page that **Show page** activity will show, click the **Select** button > **New**. Studio Pro will ask you whether you want to pass a variable as an argument to the new page. If you select a variable to pass, Studio Pro will automatically create a page parameter of that type and a data view to edit that object.

### Page Title

By default the title of the page is determined by the page title property of the page. You can replace this title with a custom title if necessary.

This feature allows you to re-use the same page for the **New** and **Edit** buttons of a [data grid](/refguide/data-grid/). By simply setting the titles to, for example, *New Customer* and *Edit Customer*, you can save yourself the trouble of duplicating pages.

### Close Pages {#close-pages}

Often you need to have control of page history, for example to show the correct page when a user presses the hardware back button on Android. These types of actions generally will only close a single page in the current stack. **Close Pages** provides more control over this behavior. We define relevant terms as follows:

* **source page**: The page you are navigating *from*
* **target page**: The page you are navigating *to*

| Value | Description |
| --- | --- |
| None | Do not remove any pages from history. This is the default behavior.|
| Single | After navigating to the **target page**, remove the **source page** from history. |
| Multiple | After navigating to the **target page**, remove the **source page** and one or more pages before it from history. Configure the total number of pages removed using an expression. |
| All | After navigating to the **target page**, remove the **source page** and all pages before it from history. This option is similar to the **Single** and **Multiple** options, except only pages in the current stack will be closed. <br />{{% alert color="info" %}}There is a slight difference between how this option works in native mobile and in web. In native mobile, this option closes all the pages in the stack. However, in web, the first page in the stack will not be closed.{{% /alert %}} |
| Clear history (native mobile only)| Prevent the user from navigating back altogether. This is especially useful when navigating away from a login or tutorial flow.<br />{{% alert color="warning" %}}In the page editor and in nanoflows as well as in native apps, this option can only be used in combination with target pages that are included in the bottom bar configuration (if the layout has a bottom bar) and that have a default layout type (meaning, not a pop-up).{{% /alert %}} |

### Parameters Section {#parameters}

Depending on the selected page, you will see a list of its parameters. For each parameter, you can configure a variable or expression to specify which object should be passed to it. These objects are used by [data views](/refguide/data-view/) with a page parameter data source. If only one variable of the expected type for a certain parameter is available, that variable is automatically filled in.

## Common Section{#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide/activities/)
* [Native Navigation](/refguide/native-navigation/)
