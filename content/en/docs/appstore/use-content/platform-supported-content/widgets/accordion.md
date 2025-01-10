---
title: "Accordion"
url: /appstore/widgets/accordion/
description: "Describes the configuration and usage of the Accordion widget, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Accordion](https://marketplace.mendix.com/link/component/117895) widget enables to group and collapse content within your [progressive web apps](/refguide/progressive-web-app/) and [web apps](https://www.mendix.com/evaluation-guide/app-capabilities/web-apps/).

### Features

* Display groups consisting of a header and content
* Allows you to collapse and expand the content when interacting with the header using a mouse or keyboard
* Allows you to control the collapsed state of a group through expressions or an entity attribute
* Allows for additional styling customizations through Atlas UI

## Configuration

Configuring the accordion widget is simple. Drag the widget onto a page and use the configuration properties described in the following sections.

### General Tab {#general}

#### Groups Section

The **Groups** section (required) is used to configure the groups that are part of the accordion. Click **New** to create a new group. On the **Edit Groups Item** dialog box, configure the tabs and properties described below.

The **General** tab in the **Edit Groups Item** dialog box has the following properties:

* **Header** – determines if the header content consists of text or widgets
    * Default: **Text**
* **Text** – the text value to be displayed in the header
    * Configurable when the header content consists of **Text**
* **Render mode** – the text's heading level
    * Default: **Heading 3**
    * Configurable when the header content consists of **Text**
* **Custom header content** – the widgets to be displayed in the header
    * Configurable when the header content consists of widgets
* **Visible** – a Boolean expression indicating whether the group should be visible
    * Default: **true**
* **Dynamic class** (required) – a string expression to apply dynamic classes (separated by a space) to the group

The **State** tab in the **Edit Groups Item** dialog box is only visible when [Advanced options](#advanced) is set to **Yes**, and it has the following properties:

* **Start as** – determines whether the header content starts expanded or collapsed (optionally, through the help of an expression with the **Dynamic** option)
    * Default: **Collapsed**
* **Start as collapsed** – a Boolean expression indicating whether the group should be expanded or collapsed
    * Default: **true**
    * Configurable when **Starts as** is set to **Dynamic**
* **Collapsed** – a Boolean attribute indicating whether the group should be expanded or collapsed 
    * Note that the **Start as** properties override the attribute value for the initial state
* **On change** – executes an action when the **Collapsed** attribute value changes
    * Note that the **Start as** properties can prevent execution of this action when the initial state changes

#### Behavior Section

Configure the following properties in this section:

* **Collapsible** – determines whether the content of groups is collapsible
    * Enabled by default
* **Expanded groups** – determines whether one or more groups can be expanded at once
    * Default: **Single**
    * When set to **Single**, multiple expanded groups are suppressed
* **Animate** – determines whether the collapsing and expanding of content is animated
    * Default: **Yes**
    * Only visible when [Advanced options](#advanced) is set to **Yes**

### Advanced Tab {#advanced}

The **Enable advanced options** toggle (default: **No**) determines whether advanced configuration properties become visible. 

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

### Visualization Tab {#visualization}

The **Visualization** tab is only visible when [Advanced options](#advanced) is set to **Yes**, and it and has the following properties:

* **Show icon** – determines whether to show the icon on the left or right side of the header content or not at all
    * **Right** by default
* **Icon** – the icon displayed and animated in the header
    * Configurable when **Animate icon** is set to **Yes** 
* **Animate icon** – determines whether the icon is animated when the content is collapsing and expanding
    * Default: **Yes**
    * When set to **No**, the **Expand icon** and **Collapse icon** properties become visible
* **Expand icon** – the icon displayed in the header to indicate that the content can be expanded
    * Configurable when **Animate icon** is set to **No**
* **Collapse icon** – the icon displayed in the header to indicate that the content can be collapsed
    * Configurable when **Animate icon** is set to **No**

## Styling

The accordion widget is shipped with default styles and works out of the box without Atlas UI. However, including Atlas UI in the app brings improved styling and customizations such as design properties, helper classes, and custom variables.

These are the design properties shipped with Atlas UI for this widget:

* **Borders** – changes the border appearance 
    * **All**, **Horizontal**, **None**
    * By default, only horizontal borders between groups are applied
* **Compact** – make groups in the accordion more compact
    * **Yes**, **No** (default)
* **Striped** – add alternating background colors to groups in the accordion
    * **Yes**, **No** (default)

The following brand styles (and their associated class names) are shipped with Atlas UI as helper classes:

* Primary – `widget-accordion-brand-primary`
* Secondary – `widget-accordion-brand-secondary`
* Success – `widget-accordion-brand-success`
* Warning – `widget-accordion-brand-warning`
* Danger – `widget-accordion-brand-danger`

These helper classes should be applied to individual groups using the widget's [Dynamic class](#general) property.
