---
title: "Button Widgets"
url: /studio7/page-editor-widgets-buttons/
description: "Describes button widgets in Mendix Studio."
weight: 50
tags: ["studio", "page editor", "button", "widgets"]
---

## 1 Introduction 

Button [widgets](/studio7/page-editor-widgets/) allow the user to perform various actions, for example, opening a page or executing a microflow. 

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-buttons/button-widgets.png"   width="300"  >}}

The following **Buttons** are available in Mendix Studio as default widgets:

* Open Page
* Call Microflow
* Create Object
* Save Changes
* Delete Object
* Cancel Changes
* Close Page
* Sign Out
* Open Link

{{% alert color="info" %}}

Apart from the default button widgets, you can also [download widgets from the Mendix Marketplace](https://marketplace.mendix.com/) to your app. For more information, see section [4 Widgets by Origin](/studio7/page-editor-widgets/#widgets-by-origin) in *Widgets*.

{{% /alert %}}

## 2 Events Section

Properties in the **Events** section are partially preset for buttons listed above. They depend on the action a button performs. For example, if the button is supposed to open a page, the **On Click Action** in the **Events** section will be **Page**. However, you need to specify what page exactly the button will open. 

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section-page-button.png"   width="300"  >}}

For more information, see section [2.1 Default Properties in the Events Section](#default-properties). 

{{% alert color="info" %}}

You can change preset properties, and make the button perform another action. 

{{% /alert %}}

For more information on the **Events** section and on click actions, see [Events Section in Widgets](/studio7/page-editor-widgets-events-section/).

### 2.1 Default Properties in the Events Section {#default-properties}

**On Click Action** in the **Events** section determines the action of the button. 

{{< figure src="/attachments/studio7/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section.png"   width="300"  >}}

You can find the list of default actions and properties that need to be configured in the table below. 

| Button         | Default Action | Properties to be Configured                                  |
| -------------- | -------------- | ------------------------------------------------------------ |
| Open Page      | Page           | **Page** (Select page) <br />If you want to create a new object and pass it as a context to the selected page, enable **Create Object** (disabled by default) and select an **Entity**. For more information on see section [2.1 Create Object Option](/studio7/page-editor-widgets-events-section/#create-object-option) in *Events Section in Widgets*. |
| Call Microflow | Microflow      | **Microflow** (Select microflow)                             |
| Create Object  | Create Object  | **Page** (Select page) and **Entity** (Select entity)        |
| Save Changes   | Save Changes   | None                                                         |
| Delete Object  | Delete Object  | None                                                         |
| Cancel Changes | Cancel Changes | None                                                         |
| Close Page     | Close Page     | None                                                         |
| Sign Out       | Sign Out       | None                                                         |
| Open Link      | Open Link      | For **Open Link** you need to configure the following properties: <ul><li>**Link Type** (*Default value*: Web)</li><li>**Source** (*Default value*: Use literal value)</li><li>**Url**</li></ul> For more information on these properties, see section [2.2 Open Link Action](/studio7/page-editor-widgets-events-section/#open-link-action) in *Events Section in Widgets*. |

## 3 General Section

Properties available in the **General** section are described in the table below.

| Property    | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Caption     | Defines the text that will be shown on the button. Buttons have preset captions depending on the action they perform. For more information, see section [3.1 Default Caption](#default-caption). |
| Icon        | Determines the icon that will be shown in front of the caption of the button. |
| Render Mode | Defines the way the button will be shown to the end-user. Possible options are the following: <ul><li>**Button** – the widget will be rendered as a button</li><li>**Link** – the widget will be rendered as a hyperlink</li></ul>Default render mode: Button |
| Style       | Applies a predefined styling to the button. Possible options are the following: <ul><li>Default</li><li>Inverse</li><li>Primary</li><li>Info</li><li>Success</li><li>Warning</li><li>Danger</li></ul>Default value for all buttons except the **Save Changes** button: Default<br />Default value for the **Save Changes** button: Success<br />The color for each style depends on your settings in the **Theme Customizer**. For details, see [Theme Customizer](/studio7/theme-customizer/). |

### 3.1 Default Caption {#default-caption}

**Caption** in the **General** section is set depending on the action of the button. The default caption for each button type is shown in the table below. 

| Button         | Default Caption |
| -------------- | --------------- |
| Open Page      | Page            |
| Call Microflow | Microflow       |
| Create Object  | New             |
| Save Changes   | Save            |
| Delete Object  | Delete          |
| Cancel Changes | Cancel          |
| Close Page     | Close           |
| Sign Out       | Sign Out        |
| Open Link      | Button          |

## 4 Design Section

For information on the **Design** section and its properties, see [Design Section in Widgets](/studio7/page-editor-widgets-design-section/).

## 5 Read More

* [Pages](/studio7/page-editor/) 
* [Widgets](/studio7/page-editor-widgets/)
