---
title: "Close Page"
url: /refguide10/close-page/
weight: 10
aliases:
    - /refguide10/Close+Form.html
    - /refguide10/close-form.html
    - /refguide10/Close+Form
    - /refguide10/close-form
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can be used in both microflows and nanoflows.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline or native app. For more information, see the [Microflows](/refguide10/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline Best Practices*.
{{% /alert %}}

## Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page.png"   width="200"  class="no-border" >}}

## Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

{{< figure src="/attachments/refguide10/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page-properties.png" alt="Close Page Properties" width="650px" class="no-border" >}}

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

{{% snippet file="/static/_includes/refguide10/microflow-common-section-link.md" %}}

## Read More

* [Show Page](/refguide10/show-page/)
* [Native Navigation](/refguide10/native-navigation/)
