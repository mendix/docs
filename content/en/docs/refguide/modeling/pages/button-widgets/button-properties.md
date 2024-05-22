---
title: "Button Properties"
url: /refguide/button-properties/
tags: ["studio pro", "button", "action button", "drop-down button", "button widget", "image property"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A button can perform various actions such as calling a microflow or nanoflow or opening a page. 

## 2 Properties

An example of button properties is represented in the image below:

{{< figure src="/attachments/refguide/modeling/pages/button-widgets/button-properties/button-properties.png" alt="Button Properties"   width="250"  class="no-border" >}}

Button properties consist of the following sections:

* [Accessibility](#accessibility) (only for web buttons when [Render Mode](#RenderMode) is Link)
* [Common](#common) 
* [Design Properties](#design)
* [Events](#events)
* [General](#general)
* [Items](#items) (only for a drop-down button)
* [Visibility](#visibility)

### 2.1 Accessibility Section {#accessibility}

{{% alert color="info" %}}
The **Accessibility** section is only shown for web buttons when [Render Mode](#RenderMode) is Link.
{{% /alert %}}

#### 2.1.1 Role Type {#RoleType}

The **Role type** property determines the `aria-role` attribute value that will be rendered with the button's HTML. `Aria-role` attributes can be used to improve accessibility, because devices such as screen readers interpret them and present the semantics of the role to end-users. Possible options are the following: 

* Button (default)
* Checkbox
* Link
* Menu item
* Menu item checkbox
* Menu item radio
* Option
* Radio
* Switch
* Tab

### 2.2 Common Section {#common}

{{% snippet file="/static/_includes/refguide/common-section-link.md" %}}

### 2.3 Design Properties Section {#design}

{{% snippet file="/static/_includes/refguide/design-section-link.md" %}} 

### 2.4 Events Section {#events}

{{% snippet file="/static/_includes/refguide/events-section-link.md" %}}

### 2.5 General Section {#general}

#### 2.5.1 Caption {#caption}

The **Caption** property defines a text that will be shown on the button using a Text template.

{{% snippet file="/static/_includes/refguide/text-template-link.md" %}}

#### 2.5.3 Tooltip

The **Tooltip** property determines a text end-users will see in the tooltip that appears when they hover over the button. The tooltip text is translatable. For more information on translatable texts, see [Language Menu](/refguide/translatable-texts/). If the tooltip is not specified, no tooltip will be shown when hovering over the button.

#### 2.5.4 Icon {#icon}

The **Icon** property determines the icon that will be shown in front of the caption of the button. Possible options are: 

* no icon
* a glyphicon 
* a (bitmap) image

Glyphicons come from the Bootstrap Halflings collection. The advantages of a glyphicon over a bitmap image are that they are scalable, look sharp on high-resolution screens, and their color can be changed by changing the font color. The advantage of an image icon is that it can have multiple colors.

#### 2.5.5 Render Mode {#RenderMode}

Defines the way the button will be shown to the end-user. Possible options are the following:

* **Button** – the widget will be rendered as a button
* **Link** – the widget will be rendered as a hyperlink

*Default render mode:* Button

#### 2.5.6 Button Style

The **Button style** property applies a predefined styling to the button. Possible options are the following:

* Default
* Inverse
* Primary
* Info
* Success
* Warning
* Danger

#### 2.5.7 Disabled During Action

This property is only shown when **Call a microflow** or **Call a nanoflow** is selected as the [on-click event](/refguide/on-click-event/). Selecting **Disabled during action** disables the button until the action is completed or failed.

Default: *true*

### 2.6 Items Section {#items}

{{% alert color="info" %}}
The **Items** section is only shown for drop-down buttons. 
{{% /alert %}}

When an end-user clicks a drop-down button, a pop-up window with a list of items opens. Each item performs an event when an end-user clicks this item. Different items can perform different events. For more information on events that can be assigned, see [On Click Event and Events Section](/refguide/on-click-event/).

{{% alert color="info" %}}

* Items with the **Create object** event are only shown when you have sufficient permissions on. For more information, see [Security](/refguide/security/). 
* Items with the **Sign out** event are not shown for anonymous users. For more information on different security levels and anonymous users, see [App Security](/refguide/app-security/) and [Anonymous Users](/refguide/anonymous-users/). 
{{% /alert %}}

Each item has the following properties:

* **Caption** – defines a caption of the item
* **Action** – defines an on-click event performed when the item is clicked (for more information on-click events, see [On Click Event and Events Section](/refguide/on-click-event/))

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/button-properties/items-properties.png" alt="Properties of Items" class="no-border" >}}

#### 2.6.1 Adding New Items

To add items to a drop-down buttons, do the following:

1. Double-click the **Items** setting in the button widget properties.
2. In the **Edit Items** dialog box, click **New**:

    {{< figure src="/attachments/refguide/modeling/pages/button-widgets/button-properties/adding-new-item.png" alt="Adding New Item" class="no-border" >}}

3. In the **Edit Drop-down Button** Item dialog box, do the following:
    1. Specify the caption for the item.
    2. Select an image (icon) to be displayed for this item.
    3. Select an on-click event to be performed when the end-user clicks this item.
    4. Click **OK**.
4. In the **Edit Items** dialog box, click **OK** to save your changes and add new item. 

### 2.7 Visibility Section {#visibility}

{{% snippet file="/static/_includes/refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](/refguide/page/)
* [Buttons](/refguide/button-widgets/)
* [Properties Common in the Page Editor](/refguide/common-widget-properties/)
* [On Click Event and Events Section](/refguide/on-click-event/)
