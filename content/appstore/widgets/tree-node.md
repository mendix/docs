---
title: "Tree node"
category: "Widgets"
description: "Describes the purpose, features, and configurations of the Tree node widget which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "tree node", "bootstrap", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

<!-- TODO: Include marketplace link after the widget has been released -->
The [Tree node]() widget displays a level of tree nodes.

The widget does the following:

* Displays a level of tree nodes consisting of a header and content based on data from your domain modal.
* Allows you to collapse and expand the content when interacting with the header using a mouse or keyboard.
* Allows you to nest tree nodes to map out your entire domain modal into a tree view.
* Delivers out-of-the-box performance and network optimizations through lazy-loading and caching of tree nodes.
* Offers additional styling customizations through Atlas UI.

## 2 Features

On its own, a single Tree node widget is not too powerful and doesn't bring more to the able compared to an [Accordion](https://docs.mendix.com/appstore/widgets/accordion) widget. However, this widget shines the most when used in composition with multiple instances of itself. By combining multiple Tree node widgets in a nested manner, you're able to map out your entire domain modal in the form of a tree view.

To help with this, the Tree node widget contains several built-in features.

### 2.1 Lazy Loading

As your tree view grows bigger, every tree node has to retrieve more data for its subtree. This will negatively impact the performance of the tree view and slow down any user interaction. To address this, every Tree node widget will only load the data that is necessary to view the current state of the tree view. Any subsequent data is defered until user interaction.

### 2.2 Caching

As users interact with the tree view, the same tree nodes can be expanded and collapsed multiple times. Instead of loading the necessary data every time a tree node is expanded, a Tree node widget will cache its result when they're loaded the first time. The next time, instead of retrieving everything from scratch, the cache will be used. This results in faster delivery and less network requests on subsequent visits of the same tree nodes.

### 2.3 Loading State

When a Tree node widget is nested inside another one, the outer tree nodes will automatically show a loading state when they're expanded for the first time. When the appropriate inner tree node has finished loading its data, the outer tree node will automatically update its state accordingly. This only applies to the first visit.

### 2.4 Automatic Detection Of End Nodes

The Tree node widget is great for mapping out your entire domain model, but not every tree branch has the same depth. While your tree view can be e.g. 6 levels deep, it doesn't mean that every branch will have data for all those 6 levels. This also makes it difficult to configure the [**Has children**](#general) widget property as that is dependent per branch, but you're configuring it per tree nodes level. To address this, after expanding a tree node, the Tree node widget will automatically detect whether it contains more tree nodes or that it's the last node in the branch (an end node). If it's an end node, the tree node will not be clickable anymore and remove its icons from the header.

### 2.5 Accessibility

Out of the box, the Tree node widget is fully accessible through keyboard controls and screen readers, even when nested into a larger tree view.

## 3 Configuration

The following sections will describe the different available widget properties and how to configure the Tree node widget using them.  

### 3.1 General Tab {#general}

After dragging and dropping the Tree node widget onto the page, the only mandatory widget property to configure is the **Data source**.

* **Data source** - The data source for the current level of tree nodes. This will also serve as an optional data source for the header and content of the current Tree node widget.

The following widget properties are related to configuring the Tree node widget in the context of a larger tree view.

* **Has children** (default: **No**) - Indicates whether the current level of tree nodes has children or are end nodes. When set to yes, a composable region becomes avaliable to define the child nodes.
* **Start expanded** (configurable when **Has children** is set to **true**; default: **No**) - Determines whether the content of the current level of tree nodes starts expanded or collapsed.

The following widget properties are related to configuring the header section of the Tree node widget.

* **Header type** (default: **Text**) - Determines the type of the header. When set to **Text**, the **Header caption** widget property becomes available to configure the header as a caption. When set to **Custom**, a composable region becomes available to configure the header through other widgets. In both properties, the data source of the current Tree node widget is also available as a data source.
* **Header caption** (configurable when **Header type** is set to **Text**) - A text template to configure the header of the current level of tree nodes as a caption. 

The following widget properties are related to configuring the behaviour of the tree node content section.

* **Animate** (configurable when [**Advanced options**](#advanced) is set to **Yes**; default: **Yes**) - Indicates whether the content will be animated when toggling between the expanded and collapsed state.

### 3.2 Advanced Tab {#advanced}

The **Advanced options** property (default: **No**) determines whether advanced configuration properties for the Tree node widget become available. All of the properties can be found in the [Visualization](#visualization) and the [General](#general) tab, and it includes the following options:

- Custom icon visualization in the header.
- Enabling animations for the tree node headers and content.

### 3.3 Visualization Tab {#visualization}

The **Visualization** tab is only visible when the [Advanced options](#advanced) is set to **Yes** and introduces the following properties:

* **Show icon** (default: **Left**) - The placement of the icon relative to the rest of the content in the header. This can either be **Left** or **Right**. When set to **No**, the header will have no icon.
* **Expanded icon** and **Collapsed icon** (configurable when **Show icon** is set to to either **Left** or **Right**) - Allows custom configuration of the icons shown in respectively the expanded and collapsed state. It is required to configure both of them together for custom icons to show up.
* **Animate icon** (default: **Yes**) - Indicates whether the icon will be animated when toggling between the expanded and collapsed state

### 4 Styling

The Tree node widget is shipped with default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Borders** (**Horizontal**, **Both**, **None** (default)) - Change the border appearance.
* **Hover** (**Yes**, **No** (default)) - Highlight an item when hovering over it.
