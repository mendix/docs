---
title: "Accordion"
category: "Widgets"
description: "Describes the configuration and usage of the Accordion widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "accordion", "group box", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Accordion](https://marketplace.mendix.com/link/component/117895) widget enables to group and collapse content within your [progressive web apps](/refguide/progressive-web-app) and [web apps](https://www.mendix.com/evaluation-guide/app-capabilities/web-apps/).

### 1.1 Features

* Display groups consisting of a header and content.
* Allow you to collapse and expand the content when interacting with the header using a mouse or keyboard.
* Allow you to control the collapsed state of a group through expressions or an entity attribute.
* Allow for additional styling customizations through Atlas UI.

## 2 Configuration

Configuring the accordion widget is simple. Drag and drop the widget onto a page and use the configuration properties described in the following sections.

### 2.1 General Tab {#general}

#### 2.1.1 Groups Section

The **Groups** section (required) is used to configure the groups that are part of the accordion. Click **New** to create a new group. On the **Edit Groups Item** dialog box, configure the tabs and properties described below.

The **General** tab in the **Edit Groups Item** dialog box has the following properties:

* **Header** (default: **Text** ) – Determines if the header content consists of text or widgets.
* **Text** (configurable when the header content consists of **Text**) – The text value to be displayed in the header.
* **Render mode** (configurable when the header content consists of **Text**; default: **Heading 3**) – The text's heading level.
* **Custom header content** (configurable when the header content consists of widgets) – The widgets to be displayed in the header.
* **Visible** (default: **true**) – A Boolean expression indicating whether the group should be visible.
* **Dynamic class** (required) – A string expression to apply dynamic classes (separated by a space) to the group.

The **State** tab in the **Edit Groups Item** dialog box is only visible when [Advanced options](#advanced) is set to **Yes**, and it has the following properties:

* **Start as** (default: **Collapsed**) – Determines whether the header content starts expanded or collapsed (optionally, through the help of an expression with the **Dynamic** option). 
* **Start as collapsed** (configurable when **Starts as** is set to **Dynamic**; default: **true**) – A Boolean expression indicating whether the group should be expanded or collapsed.
* **Collapsed** (not required) – A Boolean attribute indicating whether the group should be expanded or collapsed. Please note the **Start as** properties override the attribute value for the initial state.
* **On change** (not required) – Executes an action when the **Collapsed** attribute value changes. Please note the **Start as** properties can prevent execution of this action when the initial state changes.

#### 2.1.2 Behavior Section

Configure the following properties in this section:

* **Collapsible** (enabled by default) – Determines whether the content of groups is collapsible.
* **Expanded groups** (default: **Single**) – Determines whether one or more groups can be expanded at once. When set to **Single**, multiple expanded groups are suppressed.
* **Animate** (only visible when [Advanced options](#advanced) is set to **Yes**; default: **Yes**) – Determines whether the collapsing and expanding of content is animated.

### 2.2 Advanced Tab {#advanced}

The **Advanced options** button (default: **No**) determines whether advanced configuration properties become visible. 

When set to **Yes**, the following tabs and properties become visible:

* [General](#general) tab 
	* **Groups** section:
		* **General** tab
			* **Render mode**
		* **State** tab 
			* **Start as**
			* **Start as collapsed**
			* **Collapsed**
			* **On change**
	* **Behavior** section
		* **Animate**
* [Visualization](#visualization) tab
	* **Show icon**
	* **Icon** 
	* **Animate icon**
	* **Expand icon**
	* **Collapse icon**

### 2.3 Visualization Tab {#visualization}

The **Visualization** tab is only visible when [Advanced options](#advanced) is set to **Yes**, and it and has the following properties:

* **Show icon** (right by default) – Determines whether to show the icon on the left or right side of the header content or not at all.
* **Icon** (configurable when **Animate icon** is set to **Yes**) – The icon displayed and animated in the header.
* **Animate icon** (default: **Yes**) – Determines whether the icon is animated when the content is collapsing and expanding. When set to **No**, the **Expand icon** and **Collapse icon** properties become visible
* **Expand icon** (configurable when **Animate icon** is set to **No**) – The icon displayed in the header to indicate that the content can be expanded.
* **Collapse icon** (configurable when **Animate icon** is set to **No**) – The icon displayed in the header to indicate that the content can be collapsed.

## 3 Styling

The accordion widget is shipped with default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Borders** (**All**, **Horizontal**, **None**) – Change the border appearance. By default, only horizontal borders between groups are applied.
* **Compact** (**Yes**, **No** (default)) – Make groups in the accordion more compact.
* **Striped** (**Yes**, **No** (default)) – Add alternating background colors to groups in the accordion.

The following brand styles (and their associated class names) are shipped with Atlas UI as helper classes:

* Primary –`widget-accordion-brand-primary`
* Secondary – `widget-accordion-brand-secondary`
* Success – `widget-accordion-brand-success`
* Warning – `widget-accordion-brand-warning`
* Danger –`widget-accordion-brand-danger`

These helper classes should be applied to individual groups using the widget's [Dynamic class](#general) property.
