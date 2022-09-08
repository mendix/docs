---
title: "Buttons"
url: /studio8/page-editor-widgets-buttons/
description: "Describes button widgets in Mendix Studio."
weight: 50
tags: ["studio", "page editor", "button", "widgets"]
---

## 1 Introduction 

Button [widgets](/studio8/page-editor-widgets/) allow end-users to perform various actions, for example, saving changes or closing the current page: 

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-buttons/button-example.png"   width="400"  >}}

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

Apart from the default button widgets, you can also [download widgets from the Mendix Marketplace](https://marketplace.mendix.com/) to your app. For more information, see the [Widgets by Origin](/studio8/page-editor-widgets/#widgets-by-origin) section in *Widgets*.

{{% /alert %}}

## 2 Events Section

Properties in the **Events** section are partially preset for buttons listed above. They depend on the action a button performs. For example, if the button is supposed to open a page, the **On Click Action** in the **Events** section will be **Page**. However, you need to specify what page exactly the button will open. 

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section-page-button.png"   width="300"  >}}

For more information, see the [Default Properties in the Events Section](#default-properties) section. 

{{% alert color="info" %}}

You can change preset properties, and make the button perform another action. 

{{% /alert %}}

For more information on the **Events** section and on click actions, see [Events Section](/studio8/page-editor-widgets-events-section/).

### 2.1 Default Properties in the Events Section {#default-properties}

**On Click Action** in the **Events** section determines the action of the button. 

{{< figure src="/attachments/studio8/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section.png"   width="300"  >}}

You can find the list of default actions and properties that need to be configured in the table below. 

| Button         | Default Action | Properties to be Configured                                  |
| -------------- | -------------- | ------------------------------------------------------------ |
| Open Page      | Page           | **Page** (Select page) <br />If you want to create a new object and pass it as a context to the selected page, enable **Create Object** (disabled by default) and select an **Entity**. For more information on see section the [Create Object Option](/studio8/page-editor-widgets-events-section/#create-object-option) section in *Events Section*. <br /> **Close pages** <br />Control the number of pages to close after navigating to the target page. |
| Call Microflow | Microflow      | **Microflow** (Select microflow)                             |
| Create Object  | Create Object  | **Page** (Select page) and **Entity** (Select entity) <br /> **Close pages** <br />Control the number of pages to close after navigating to the new or edit page.       |
| Save Changes   | Save Changes   | None                                                         |
| Delete Object  | Delete Object  | None                                                         |
| Cancel Changes | Cancel Changes | None                                                         |
| Close Page     | Close Page     | **Close pages** Control the number of pages to close.        |
| Sign Out       | Sign Out       | None                                                         |
| Open Link      | Open Link      | For **Open Link** you need to configure the following properties: <ul><li>**Link Type** (Default: *Web*)</li><li>**Source** (Default: *Use literal value*)</li><li>**Url**</li></ul> For more information on these properties, see the [Open Link Action](/studio8/page-editor-widgets-events-section/#open-link-action) section in *Events Section*. |

## 3 General Section

Properties available in the **General** section are described in the table below.

| Property    | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| Caption     | Defines the text that will be shown on the button. Buttons have preset captions depending on the action they perform. |
| Icon        | Determines the icon that will be shown in front of the caption of the button. |
| Render Mode | Defines the way the button will be shown to the end-user. Possible options are the following: <ul><li>Button  *(default)*  – the widget will be rendered as a button</li><li>Link – the widget will be rendered as a hyperlink</li></ul> |
| Style       | Applies a predefined styling to the button. Possible options are the following: <ul><li>Default <em>(default for all buttons except **Save Changes**)</em></li><li>Inverse</li><li>Primary</li><li>Info</li><li>Success <em>(default for the **Save Changes** button)</em></li><li>Warning</li><li>Danger</li></ul>The color for each style depends on your settings in the **Theme Customizer**. For details, see [Theme Customizer](/studio8/theme-customizer/). |

## 4 Conditional Visibility

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

## 5 Design Section

For information on the **Design** section and its properties, see [Design Section](/studio8/page-editor-widgets-design-section/).

## 6 Read More

* [Pages](/studio8/page-editor/) 
* [Widgets](/studio8/page-editor-widgets/)
