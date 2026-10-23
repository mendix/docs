---
title: "Show Home Page"
url: /refguide/show-home-page/
weight: 30
aliases:
    - /refguide/Show+Home+Page.html
    - /refguide/Show+Home+Page
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
This activity can only be used in microflows.
{{% /alert %}}

{{% alert color="warning" %}}
This action is ignored and does not work when a microflow is called from an offline or native app. For more information, see the [Microflows](/refguide/mobile/building-efficient-mobile-apps/offlinefirst-data/best-practices/#microflows) section of *Offline-First Data*.
{{% /alert %}}

## Introduction

The **Show home page** activity opens the home page for an end-user. For example, you can navigate your user to the home page when they are not logged in. 

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-home-page/show-home-page.png" alt="Show Home Page"   width="200"  class="no-border" >}}

This activity shows the same page that is displayed to the end-user after they log in, meaning it shows the home page defined for the current user role. For more information on role-based home pages, see [Navigation](/refguide/navigation/).

## Properties

The **Show home page** activity properties consists of the following sections:

* [Action](#action)

* [Common](#common)

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/activities/client-activities/show-home-page/show-home-page-properties.png" alt="Show Home Page Properties"   width="300"  class="no-border" >}}

## Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

## Common Section {#common}

{{% snippet file="/static/_includes/refguide/microflow-common-section-link.md" %}}

## Read More

* [Show Page](/refguide/show-page/)
* [Activities](/refguide/activities/)
