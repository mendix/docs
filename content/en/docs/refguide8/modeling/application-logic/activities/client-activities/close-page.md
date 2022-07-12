---
title: "Close Page"
url: /refguide8/close-page/
weight: 10
tags: ["studio pro", "close page", "client activity"]
aliases:
    - /refguide8/Close+Form.html
    - /refguide8/close-form.html
    - /refguide8/Close+Form
    - /refguide8/close-form
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/close-page.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/close-page/close-page.png"   width="200"  >}}

## 2 Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

    {{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/close-page/close-page-properties.png" alt="Close Page Properties"   width="300"  >}}

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
| Multiple | Close multiple pages at once, showing only a single animation. This number can be configured using an expression.  |

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## 5 Read More

* [Show Page](/refguide8/show-page/)
* [Native Navigation](/refguide8/native-navigation/)