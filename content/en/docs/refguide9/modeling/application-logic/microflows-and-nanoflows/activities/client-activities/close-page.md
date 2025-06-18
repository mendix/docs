---
title: "Close Page"
url: /refguide9/close-page/
weight: 10
aliases:
    - /refguide9/Close+Form.html
    - /refguide9/close-form.html
    - /refguide9/Close+Form
    - /refguide9/close-form
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](/refguide9/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline Best Practices*.
{{% /alert %}}

## Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page.png"   width="200"  class="no-border" >}}

## Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

{{< figure src="/attachments/refguide9/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page-properties.png" alt="Close Page Properties" class="no-border" >}}

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

### Number of Pages

This property allows you to control how many pages should be closed.

| Value | Description |
| --- | --- |
| Single | Close one page (default behavior). |
| Multiple | Close multiple pages in the current stack at once, showing only a single animation. This number can be configured using an expression. |
| All | Close all pages in the current stack at once, except for the first page in the stack, showing only a single animation. |

## Common Section {#common}

{{% snippet file="/static/_includes/refguide9/microflow-common-section-link.md" %}}

## Read More

* [Show Page](/refguide9/show-page/)
* [Native Navigation](/refguide9/native-navigation/)
