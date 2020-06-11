---
title: "Button Properties"
parent: "button-widgets"
tags: ["studio pro", "button", "action button", "drop-down button", "button widget", "image property"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A button can perform various actions such as calling a microflow or nanoflow or opening a page. 

## 2 Properties

An example of button properties is represented in the image below:

{{% image_container width="250" %}}![Button Properties](attachments/button-widgets/button-properties.png)
{{% /image_container %}}

Button properties consist of the following sections:

* [Common](#common) 
* [Design Properties](#design)
* [Events](#events)
* [General](#general)
* [Items](#items) (only for a drop-down button)
* [Visibility](#visibility)

### 2.1 Common Section {#common}

{{% snippet file="refguide/common-section-link.md" %}}

### 2.2 Design Properties Section {#design}

{{% snippet file="refguide/design-section-link.md" %}} 

### 2.3 Events Section {#events}

{{% snippet file="refguide/events-section-link.md" %}}

### 2.4 General Section {#general}

#### 2.4.1 Caption {#caption}

The **Caption** property defines a text that will be shown on the button. The caption can contain parameters that are written between braces, e.g. {1}.  

For more information on using parameters, see the [Parameters]() section below. 

#### 2.4.2 Parameters {#parameters}

Parameters are attributes the value of which will be displayed. To view **Parameters**, do one of the following:

* Double-click the **Caption** setting in properties

* Double-click the button on the page and click **Edit** in the **General** section > **Caption**:

	![Opening Parameters](attachments/button-widgets/opening-parameters.png) 

Parameters have the following settings:

* **Index** – an identification number of a parameter 

* **Attribute (path)** – an attribute a value of which will be displayed 

* **Format** – a format in which an attribute value will be displayed

    ![Parameter Settings](attachments/button-widgets/button-parameter-settings.png)

##### 2.4.2.1 Adding New Parameters

To add parameters, do the following:

1. Place the **Button** widget in the context of an entity, as in, inside a [data widget](data-widgets).

2. Double-click the **Caption** setting in the button widget properties.

3.  In the **Edit Caption** dialog box > **Parameters** section click **New**:

    ![Adding New Parameter](attachments/button-widgets/new-parameter.png)

4. In the **Edit Template Parameter** dialog box, click **Select**, choose an attribute and confirm your choice.

5. In the **Caption** setting, write the text you would like to display and type **Index** of the parameter you would like to include. In the example below, to include a name of your customer , you need to use indexes {1} for the *Name* attribute:  

    ![Parameter Example](attachments/button-widgets/button-parameter-example.png)

##### 2.4.2.2 Performing Other Actions on Parameters

In addition to adding new parameters, you can perform the following actions on parameters:

* **Delete** – to delete a parameter click Delete or press <kbd>Delete</kbd> on your keyboard

* **Edit** – double-click a parameter to edit it or click Edit

* **Move up** – to move a parameter up in the list of parameters and also to change its index, click **Move up**

* **Move down** – to move a parameter down in the list of parameters and also to change its index, click **Move down**

    ![Parameter Actions](attachments/button-widgets/button-parameter-actions.png)

#### 2.4.3 Tooltip

The **Tooltip** property determines a text end-users will see in the tooltip that appears when they hover over the button. The tooltip text is translatable. For more information on translatable texts, see [Language Menu](translatable-texts). If the tooltip is not specified, no tooltip will be shown when hovering over the button.

#### 2.4.4 Icon {#icon}

The **Icon** property determines the icon that will be shown in front of the caption of the button. Possible options are: 

* no icon
* a glyphicon 
* a (bitmap) image

Glyphicons come from the Bootstrap Halflings collection. The advantages of a glyphicon over a bitmap image are that they are scalable, look sharp on high-resolution screens, and their color can be changed by changing the font color. The advantage of an image icon is that it can have multiple colors.

#### 2.4.5 Render Mode

Defines the way the button will be shown to the end-user. Possible options are the following:

* **Button** – the widget will be rendered as a button
* **Link** – the widget will be rendered as a hyperlink

*Default render mode:* Button

#### 2.4.6 Button Style

The **Button style** property applies a predefined styling to the button. Possible options are the following:

* Default
* Inverse
* Primary
* Info
* Success
* Warning
* Danger

#### 2.4.7 Disable During Action

This property is only shown when **Call a microflow** is selected as an on click event. For more information on click events, see [On Click Event & Events Section](on-click-event). The **Disable during action** disables the button until the action is completed or failed.

Default: *true*

### 2.5 Items Section {#items}

{{% alert type="info" %}}

The **Items** section is only shown for drop-down buttons. 

{{% /alert %}}

When an end-user clicks a drop-down button, a pop-up window with a list of items opens. Each item performs an event when an end-user clicks this item. Different items can perform different events. For more information on events that can be assigned, see [On Click Event & Events Section](on-click-event).

{{% alert type="info" %}}

* Items with the **Create object** event are only shown when you have sufficient permissions on. For more information, see [Security](security). 

* Items with the **Sign out** event are not shown for anonymous users. For more information on different security levels and anonymous users, see [Project Security](project-security) and [Anonymous Users](anonymous-users). 


{{% /alert %}}

Each item has the following properties:

* **Caption** – defines a caption of the item

*  **Action** – defines an on-click event performed when the item is clicked (for more information on-click events, see [On Click Event & Events Section](on-click-event))

    ![Properties of Items](attachments/button-widgets/items-properties.png)


#### 2.5.1 Adding New Items

To add items to a drop-down buttons, do the following:

1. Double-click the **Items** setting in the button widget properties.

2.  In the **Edit Items** dialog box, click **New**:

    ![Adding New Item](attachments/button-widgets/adding-new-item.png)

3. In the **Edit Drop-down Button** Item dialog box, do the following:
   1. Specify the caption for the item.
   2. Select an image (icon) to be displayed for this item.
   3. Select an on-click event to be performed when the end-user clicks this item.
   4. Click **OK**.
4. In the **Edit Items** dialog box, click **OK** to save your changes and add new item. 
  


### 2.6 Visibility Section {#visibility}

{{% snippet file="refguide/visibility-section-link.md" %}}

## 3 Read More

* [Page](page)
* [Button Widgets](button-widgets)
* [Properties Common in the Page Editor](common-widget-properties)
* [On Click Event & Events Section](on-click-event)


