---
title: "Close Page"
url: /refguide/close-page/
parent: "client-activities"
weight: 10
tags: ["studio pro", "close page", "client activity"]
aliases:
    - /refguide/Close+Form.html
    - /refguide/close-form.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](/refguide/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page.png"   width="200"  >}}

## 2 Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/close-page/close-page-properties.png" alt="Close Page Properties" >}}

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

### 3.1 Number of Pages

{{% alert color="info" %}}
This option is only available for native mobile and was introduced with Mendix Studio Pro v8.14.
{{% /alert %}}

This property allows you to control how many pages should be closed.

| Value | Description |
| --- | --- |
| Single | Close one page (default behavior). |
| Multiple | Close multiple pages in the current stack at once, showing only a single animation. This number can be configured using an expression. |
| All | Close all pages in the current stack at once, except for the first page in the stack, showing only a single animation. |

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Show Page](/refguide/show-page/)
* [Native Navigation](/refguide/native-navigation/)
