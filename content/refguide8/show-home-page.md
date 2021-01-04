---
title: "Show Home Page"
parent: "client-activities"
menu_order: 30
tags: ["studio pro", "show home page", "home page", "client activities"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can only be used in **Microflows**.
{{% /alert %}}

{{% alert type="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Show home page** activity opens the home page for an end-user. For example, you can navigate your user to the home page when they are not logged in. 

{{% image_container width="200" %}}
![Show Home Page](attachments/client-activities/show-home-page.png)
{{% /image_container %}}

This activity shows the same page that is displayed to the end-user after they log in, meaning it shows the home page defined for the current user role. For more information on role-based home pages, see [Navigation](navigation).

## 2 Properties

The **Show home page** activity properties consists of the following sections:

* [Action](#action)

* [Common](#common)

    {{% image_container width="300" %}}
![Show Home Page Properties](attachments/client-activities/show-home-page-properties.png)
{{% /image_container %}}

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Show Page](show-page)
* [Activities](activities)

