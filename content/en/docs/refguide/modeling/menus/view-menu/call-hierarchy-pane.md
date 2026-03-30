---
title: "Call Hierarchy Pane"
url: /refguide/call-hierarchy-pane/
weight: 60
description: "Describes the Call Hierarchy pane in Mendix Studio Pro."
---

## Introduction

In large Mendix applications, understanding how different parts of the application interact is important for maintainability, debugging, and identifying the impact of changes. One of the most important tools for this is the Call Hierarchy tree view, which shows how documents such as Pages, Microflows, Nanoflows, and more are interconnected.

This feature helps you understands dependencies and app connections. For example, what microflows are triggered from this page? Which pages call this nanoflow? If I change this microflow, what will be affected?

The Call Hierarchy pane consists of:

* A switch button to toggle between incoming and outgoing calls
* A collapse-all button
* A tree view that visualizes the call hierarchy for the currently-selected document

The Call Hierarchy tree visualizes the full call path in two directions: **Incoming calls** and **Outgoing calls**. This allows you to see where the selected document is used throughout the app (**Incoming calls**) and which other documents it depends on (**Outgoing calls**).

{{< figure src="/attachments/refguide/modeling/menus/view-menu/call-hierarchy-pane/call-hierarchy.png" alt="Call Hierarchy Pane" width="200" >}}

## Show Call Hierarchy

You can visualize the **Call Hierarchy** by right-clicking a document from the **App Explorer** or from within the document editor, then selecting **Show call hierarchy**.

{{< figure src="/attachments/refguide/modeling/menus/view-menu/call-hierarchy-pane/right-click.png" width=200" >}}

 The data is calculated in the background and displayed in a tree view with the first level of the tree is expanded. Deeper levels are lazy loaded on expansion, which helps maintain performance in large projects.

## Interacting with the Call Hierarchy Pane

Use the switch button in the pane to toggle between **Incoming calls** and **Outgoing calls**.

* **Incoming calls** - shows the full path of where the currently-selected document is called from elsewhere in the app
* **Outgoing calls** - shows the full path of documents that are called by the currently-selected document

## Supported Document Types

When you select **Show call hierarchy**, it is analyzed to receive its interactions with other documents.

* For **Incoming calls**, it shows the call hierarchy for most common identifiable document types, including pages, microflows, nanoflows, JavaScript actions, Java actions, and more
* For **Outgoing calls**, it shows the call hierarchy for pages, microflows, nanoflows, and rules
