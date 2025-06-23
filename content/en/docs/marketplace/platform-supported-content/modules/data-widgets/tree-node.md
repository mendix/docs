---
title: "Tree Node"
url: /appstore/modules/tree-node/
description: "Describes the purpose, features, and configurations of the Tree Node widget which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Tree Node](https://marketplace.mendix.com/link/component/116540) widget displays a level of tree nodes.

Mendix recommends using multiple Tree Node widgets in a nested matter. In this way, you can map out your entire domain model in the form of a tree view. If you only need one tree node, then the [Accordion](/appstore/widgets/accordion/) widget is a better alternative.

## Features

* Displays a level of tree nodes consisting of a header and content based on data from your domain model
* Allows you to collapse and expand the content when interacting with the header using a mouse or keyboard
* Allows you to nest tree nodes to map out your entire domain model into a tree view
* Delivers out-of-the-box performance and network optimizations through lazy loading and caching of tree nodes
* Offers additional styling customizations through Atlas UI

### Lazy Loading

As your tree view grows bigger, every tree node has to retrieve more data for its subtree. This can negatively impact the performance of the tree view and slow down any user interaction. To address this, each Tree Node widget loads only the data that is necessary for viewing the current tree view. Any subsequent data is deferred until user interaction.

### Caching

As users interact with the tree view, the same tree nodes can be expanded and collapsed multiple times. Instead of loading the necessary data every time a tree node is expanded, the widget caches its result when the data is loaded the first time. The next time, instead of retrieving everything from scratch, the widget uses the cache. Therefore, if you visit the same tree nodes again, the delivery is fast and the network requests are smaller.

### Loading State

When a Tree Node widget is nested inside another one, the parent tree node automatically shows a loading state when you expand it for the first time. The loading state is changed after the children tree node has finished loading its data. This only applies to the first visit.

### Automatic Detection of End Nodes

You configure how many levels your tree view has. However, not every branch can have data at each level. For example, your tree view could go six levels deep according to your configuration, but in reality, not every branch has data for all six levels. To address this, when you try to expand a tree node in a branch, the widget automatically checks whether this tree node still has a subtree or it is the last node in this branch, namely, an end node. If it is an end node, this tree node is not clickable anymore and removes its icons from the header.

### Accessibility

Out of the box, the Tree Node widget is fully accessible through keyboard controls and screen readers, even when nested into a larger tree view.

## Configuration

Drag the Tree Node widget onto the page and use the configuration properties described in the following sections.

### General Tab {#general}

* **Data source** – the data source of the widget, which can also be optionally used as the data source for the header and content of the widget
    * Required
* **Header type** – defines the type of the header
    * Default: **Text**
    * When set to **Text**, you can configure the **Header caption** property
    * When set to **Custom**, a new region becomes available where you can configure the header through other widgets

    {{% alert color="info" %}}The **Data source** of the widget can also be used as a data source for the header and the content, regardless of the **Header type**.{{% /alert %}}

* **Header caption** – you can enter the header caption in the field or click **Edit** to configure a text template in the **Edit Caption** dialog box
    * Configurable when **Header type** is set to **Text**
* **Has children** – indicates if the current level of tree nodes has children tree nodes
    * Default: **Yes**
    * When set to **Yes**, a new region becomes available at the bottom of the widget where you can add another widget as child nodes
* **Start expanded** – determines whether the content of the current level of tree nodes starts expanded or collapsed
    * Configurable when **Has children** is set to **Yes**; default: **No**
* **Animate** – defines whether the content is animated when a tree node expands and collapses
    * Default: **Yes**

### Visualization Tab {#visualization}

The **Visualization** tab includes the following properties:

* **Show icon** – defines the location of the icon relative to the header
    * Default: **Left**
    * When set to **Left**, the icon is placed to the left to the header
    * When set to **Right**, the icon is placed to the right to the header
    * When set to **No**, the header has no icon
* **Expanded icon** – defines the custom icon used to indicate that the tree node is expanded
    * Configurable when **Show icon** is set to either **Left** or **Right**
* **Collapsed icon** – defines the custom icon used to indicate that the tree node is collapsed
    * Configurable when **Show icon** is set to either **Left** or **Right**
* **Animate icon**– defines whether the icon is animated when you expand or collapse a tree node
    * Default: **Yes**

### Styling

The Tree Node widget has default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Borders** – changes the border appearance
    * **Horizontal**, **Both**, **None** (default)
* **Hover** – highlights an item when hovering over it
    * **Yes**, **No** (default)
