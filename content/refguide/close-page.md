---
title: "Close Page"
parent: "client-activities"
menu_order: 10
tags: ["studio pro", "close page", "client activity"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert type="warning" %}}
This activity can be used in both **Microflows** and **Nanoflows**.
{{% /alert %}}

{{% alert type="warning" %}}
This action is ignored and does not work when a microflow is called from an offline, native, or hybrid app. For more information, see the [Microflows](offline-first#microflows) section of the *Offline-First Reference Guide*.
{{% /alert %}}

## 1 Introduction

The **Close page** activity closes the currently open page. For example, it can be used to close a pop-up page:

{{% image_container width="200" %}}
![](attachments/client-activities/close-page.png)
{{% /image_container %}}

## 2 Properties

The **Close page** activity properties consists of the following sections:

* [Action](#action) 

* [Common](#common)  

    {{% image_container width="300" %}}
![Close Page Properties](attachments/client-activities/close-page-properties.png)
{{% /image_container %}}

## 3 Action Section {#action}

The **Action** section of the properties pane shows the action associated with this activity.

### 3.1 Number of Pages

{{% alert type="info" %}}
This option is only available for native mobile and was introduced with Mendix Studio Pro v8.14.
{{% /alert %}}

This property allows you to control how many pages should be closed.

| Value | Description |
| --- | --- |
| Single | Close one page (default behavior). |
| Multiple | Close multiple pages at once, showing only a single animation. This number can be configured using an expression.  |

## 4 Common Section {#common}

{{% snippet file="refguide/microflow-common-section-link.md" %}}

## 5 Read More

* [Show Page](show-page)
