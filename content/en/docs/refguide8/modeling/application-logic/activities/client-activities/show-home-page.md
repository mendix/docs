---
title: "Show Home Page"
url: /refguide8/show-home-page/
weight: 30
tags: ["studio pro", "show home page", "home page", "client activities"]
aliases:
    - /refguide8/Show+Home+Page.html
    - /refguide8/Show+Home+Page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/show-home-page.pdf).
{{% /alert %}}

{{% alert color="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](/refguide8/offline-first/#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Show home page** activity opens the home page for an end-user. For example, you can navigate your user to the home page when they are not logged in. 

{{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/show-home-page/show-home-page.png" alt="Show Home Page"   width="200"  >}}

This activity shows the same page that is displayed to the end-user after they log in, meaning it shows the home page defined for the current user role. For more information on role-based home pages, see [Navigation](/refguide8/navigation/).

## 2 Properties

The **Show home page** activity properties consists of the following sections:

* [Action](#action)

* [Common](#common)

    {{< figure src="/attachments/refguide8/modeling/application-logic/activities/client-activities/show-home-page/show-home-page-properties.png" alt="Show Home Page Properties"   width="300"  >}}

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

## 4 Common Section {#common}

{{% snippet file="/static/_includes/refguide8/microflow-common-section-link.md" %}}

## 5 Read More

* [Show Page](/refguide8/show-page/)
* [Activities](/refguide8/activities/)

