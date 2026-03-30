---
title: "Sidebar Toggle"
url: /refguide8/sidebar-toggle-button/
weight: 30
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

{{% alert color="info" %}}Sidebar toggles are not supported on native mobile pages, as scroll container regions are not supported.{{% /alert %}}

A **sidebar toggle** is a button that when pressed will make either a left or a right region of a [scroll container](/refguide8/scroll-container/) appear or disappear. This makes it possible to create a sidebar that is hidden by default and can be shown by clicking the button.

{{% alert color="info" %}}
You can only have one sidebar toggle in a scroll container, and the behavior of the sidebar toggle is configured in the [scroll container region](/refguide8/scroll-container/#region) properties.
{{% /alert %}}

For example, the image below shows for an example layout that uses the sidebar toggle to hide and make visible the **Left** region of the **Scroll Container**. 

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/layout/sidebar-toggle-button/sidebar-toggle-button.png" class="no-border" >}}

## Properties

An example of sidebar toggle properties is represented in the image below:

{{< figure src="/attachments/refguide8/modeling/pages/page-resources/layout/sidebar-toggle-button/sidebar-toggle-properties.png"   width="250"  class="no-border" >}}

Sidebar toggle properties consist of the following sections:

* [Common](#common)
* [Design Properties](#design-properties)
* [General](#general)
* [Visibility](#visibility)

### Common Section{#common}

{{% snippet file="/static/_includes/refguide8/common-section-link.md" %}}

### Design Properties Section{#design-properties}

{{% snippet file="/static/_includes/refguide8/design-section-link.md" %}}

### General Section {#general}

#### Caption {#caption}

The **Caption** property defines a text that will be shown on the sidebar toggle.

#### Tooltip

The **Tooltip** property determines a text end-users will see in the tooltip that appears when they hover over the sidebar toggle. The tooltip text is translatable. For more information on translatable texts, see [Language Menu](/refguide8/translatable-texts/). If the tooltip is not specified, no tooltip will be shown when hovering over the sidebar toggle.

#### Icon {#icon}

The **Icon** property determines the icon that will be shown in front of the caption of the sidebar toggle. Possible options are: 

* no icon
* a glyphicon 
* a (bitmap) image

Glyphicons come from the Bootstrap Halflings collection. The advantages of a glyphicon over a bitmap image are that they are scalable, look sharp on high-resolution screens, and their color can be changed by changing the font color. The advantage of an image icon is that it can have multiple colors.

#### Render Mode

Defines the way the sidebar toggle will be shown to the end-user. Possible options are the following:

* **Button** – the widget will be rendered as a button
* **Link** – the widget will be rendered as a hyperlink

*Default render mode:* Button

#### Button Style

The **Button style** property applies a predefined styling to the sidebar toggle. Possible options are the following:

* Default
* Inverse
* Primary
* Info
* Success
* Warning
* Danger

### Visibility Section{#visibility}

{{% snippet file="/static/_includes/refguide8/visibility-section-link.md" %}}
