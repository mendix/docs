---
title: "Accordion"
category: "Widgets"
description: "Describes the configuration and usage of the Accordion widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "accordion", "group box", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Accordion]() widget enables to group and collapse content within your Mendix web application.

The widget:

* displays groups consisting of a header and content;
* allows collapsing and expanding the content when interacting with the header via mouse or keyboard;
* allows for additional styling customizations through Atlas UI.

## 2 Usage

Configuring the accordion widget is really straightforward. Drag the widget onto a page and use the configuration properties described in the following sections.

### 2.1 General Tab

* **Groups** (required) – the groups that are part of the accordion.
  * **Header** (Text by default) – determines whether the content of the header consists of text or widgets.
  * **Text** (configurable when the header content consists of text) – the text value to be displayed in the header.
  * **Custom header content** (configurable when the header content consists of widgets) – the widgets to be displayed in the header.
  * **Visible** (true by default) – A Boolean expression indicating whether the group should be visible.
  * **Dynamic class** (required) – A String expression to apply dynamic classes (separated by a space) to the group.
* **Collapsible** (enabled by default) – determines whether the content of groups is collapsible.
* **Expanded groups** (Single by default) – determines whether one or more groups can be expanded at once.
* **Animate** (enabled by default) – determines whether the collapsing and expanding of content is animated.


### 2.2 Advanced Tab

* **Advanced options** (disabled by default) – determines whether the advanced configuration properties become visible. The advanced properties are:

  | Tab           | Property      |
  |---------------|---------------|
  | General       | Animate       |
  | Visualization | Show icon     |
  | Visualization | Icon          |
  | Visualization | Expand icon   |
  | Visualization | Collapse icon |
  | Visualization | Animate icon  |

### 2.3 Visualization Tab

* **Show icon** (Right by default) – determines whether to show the icon on the left or right side of the header content or not at all.
* **Icon** (configurable when animating the icon) – the icon to be displayed and to be animated in the header.
* **Expand icon** (configurable when not animating the icon) – the icon to be displayed in the header to indicate that the content can be expanded.
* **Collapse icon** (configurable when not animating the icon) – the icon to be displayed in the header to indicate that the content can be collapsed.
* **Animate icon** (enabled by default) – determines whether the icon is animated during collapsing and expanding of the content.

## 4 Styling

The accordion widget is shipped with default styles and works out of the box without the need for Atlas UI. However, including Atlas UI in the app brings improved styling and customizations, like design properties, helper classes and custom variables.

The design properties shipped with Atlas UI for accordion are:

| Name    | Options               | Description                                                                                   |
|---------|-----------------------|-----------------------------------------------------------------------------------------------|
| Borders | All, Horizontal, None | Change the border appearance. By default, only horizontal borders between groups are applied. |
| Compact | Yes, No (default)     | Make groups in the accordion more compact.                                                    |
| Striped | Yes, No (default)     | Add alternating background colors to groups in the accordion.                                 |

Besides that, the following brand styles are shipped in the form of helper classes:

| Brand style | Class name                       |
|-------------|----------------------------------|
| Primary     | widget-accordion-brand-primary   |
| Secondary   | widget-accordion-brand-secondary |
| Success     | widget-accordion-brand-success   |
| Warning     | widget-accordion-brand-warning   |
| Danger      | widget-accordion-brand-danger    |

These helper classes should be applied to individual groups via the widget's **Dynamic class** property.
