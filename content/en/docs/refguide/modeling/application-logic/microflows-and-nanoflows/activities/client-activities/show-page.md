---
title: "Show Page"
url: /refguide/show-page/
parent: "client-activities"
menu_order: 50
tags: ["studio pro", "show page", "client activity"]
aliases:
    - /refguide/Show+Page.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline native or hybrid app. For more information, see the [Microflows](/refguide/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

With this activity, you can show a selected page to an end-user. Mendix apps run as a single page application, so the page will always be shown in the same browser tab/window as the app.

You can directly drag a page from the **App Explorer** into your microflow:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-page/show-page-from-project-explorer.png" >}}

## 2 Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-page/show-page-properties.png" >}}

The **Show page** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### 3.1 Object to Pass {#object-to-pass}

An object that will be passed to the page that is opened. This object will be used by [data views](/refguide/data-view/) with a page parameter data source.

### 3.2 Page

The [page](/refguide/page/) that is displayed to an end-user. If the [Object to pass](#object-to-pass) property is specified, the page must contain a data view connected to the same entity as the passed object (or its generalization).

To create a new page that **Show page** activity will show, click the **Select** button > **New**. If you have selected an **Object to pass**, Studio Pro will automatically create a data view to edit that object.

### 3.3 Page Title

By default the title of the page is determined by the page title property of the page. You can replace this title with a custom title if necessary.

This feature allows you to re-use the same page for the **New** and **Edit** buttons of a [data grid](/refguide/data-grid/). By simply setting the titles to, for example, *New Customer* and *Edit Customer*, you can save yourself the trouble of duplicating pages.

### 3.4 Close Pages {#close-pages}

{{% alert color="info" %}}
This option is only available for native mobile.
{{% /alert %}}

Often you need to have control of page history, for example to show the correct page when a user presses the hardware back button on Android. These types of actions generally will only close a single page in the current stack. **Close Pages** provides more control over this behavior. We define relevant terms as follows:

* **source page**: The page you are navigating _from_
* **target page**: The page you are navigating _to_

| Value | Description |
| --- | --- |
| None | Do not remove any pages from history. This is the default behavior.|
| Single | After navigating to the **target page**, remove the **source page** from history. |
| Multiple | After navigating to the **target page**, remove the **source page** and one or more pages before it from history. Configure the total number of pages removed using an expression. |
| All | After navigating to the **target page**, remove the **source page** and all pages before it from history. This option is similar to the **Single** and **Multiple** options, except only pages in the current stack will be closed. |
| Clear history | Prevent the user from navigating back altogether. This is especially useful when navigating away from a login or tutorial flow.<br />{{% alert color="warning" %}}In the page editor and in nanoflows as well as in native apps, this option can only be used in combination with target pages that are included in the bottom bar configuration (if the layout has a bottom bar) and that have a default layout type (meaning, not a pop-up).{{% /alert %}} |

## 4 Common Section{#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Activities](/refguide/activities/)
* [Native Navigation](/refguide/native-navigation/)
