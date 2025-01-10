---
title: "Close Page"
url: /refguide8/close-page/
weight: 10
aliases:
    - /refguide8/Close+Form.html
    - /refguide8/close-form.html
    - /refguide8/Close+Form
    - /refguide8/close-form
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/close-page/close-page.png"   width="200"  class="no-border" >}}

## Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

    {{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/close-page/close-page-properties.png" alt="Close Page Properties"   width="300"  class="no-border" >}}

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

### Number of Pages

{{% alert color="info" %}}
This option is only available for native mobile and was introduced with Mendix Studio Pro 8.14.
{{% /alert %}}

This property allows you to control how many pages should be closed.

| Value | Description |
| --- | --- |
| Single | Close one page (default behavior). |
| Multiple | Close multiple pages at once, showing only a single animation. This number can be configured using an expression.  |

## Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## Read More

* [Show Page](/refguide8/show-page/)
* [Native Navigation](/refguide8/native-navigation/)
