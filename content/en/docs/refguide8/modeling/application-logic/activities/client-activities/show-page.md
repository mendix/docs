---
title: "Show Page"
url: /refguide8/show-page/
weight: 50
aliases:
    - /refguide8/Show+Page.html
    - /refguide8/Show+Page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline native or hybrid app. For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## Introduction

With this activity, you can show a selected page to an end-user.

You can directly drag a page from the **Project Explorer** into your microflow:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/show-page/show-page-from-project-explorer.png" class="no-border" >}}

## Properties

There are two sets of properties for this activity, those in the dialog box on the left, and those in the properties pane on the right:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/show-page/show-page-properties.png" class="no-border" >}}

The **Show page** properties pane consists of the following sections:

* [Action](#action)
* [Common](#common)

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

You can open a dialog box to configure this action by clicking the ellipsis (**…**) next to the action.

You can also open the dialog box by double-clicking the activity in the microflow or right-clicking the activity and selecting **Properties**.

### Object to Pass {#object-to-pass}

An object that will be passed to the page that is opened. This object will be used by [data views](/refguide8/data-view/) with a page parameter data source.

### Page

The [page](/refguide8/page/) that is displayed to an end-user. If the [Object to pass](#object-to-pass) property is specified, the page must contain a data view connected to the same entity as the passed object (or its generalization).

To create a new page that **Show page** activity will show, click the **Select** button > **New**. If you have selected an **Object to pass**, Studio Pro will automatically create a data view to edit that object.

### Page Title

By default the title of the page is determined by the page title property of the page. You can replace this title with a custom title if necessary.

This feature allows you to re-use the same page for the **New** and **Edit** buttons of a [data grid](/refguide8/data-grid/). By simply setting the titles to, for example, *New Customer* and *Edit Customer*, you can save yourself the trouble of duplicating pages.

### Close Pages

{{% alert color="info" %}}
This option is only available for native mobile and was introduced with Mendix Studio Pro 8.14.
{{% /alert %}}

Often you need to have control of page history, for example to show the correct page when a user presses the hardware back button on Android. These types of actions generally will only close a single page in the current stack. **Close Pages** provides more control over this behavior. We define relevant terms as follows:

* **source page**: The page you are navigating *from*
* **target page**: The page you are navigating *to*

| Value | Description |
| --- | --- |
| None | Do not remove any pages from history. This is the default behavior.|
| Single | After navigating to the **target page**, remove the **source page** from history. |
| Multiple | After navigating to the **target page**, remove the **source page** and one or more pages before it from history. Configure the total number of pages removed using an expression. |
| Clear history | Prevent the user from navigating back altogether. This is especially useful when navigating away from a login or tutorial flow. |

## Common Section{#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## Read More

* [Activities](/refguide8/activities/)
* [Native Navigation](/refguide8/native-navigation/)
