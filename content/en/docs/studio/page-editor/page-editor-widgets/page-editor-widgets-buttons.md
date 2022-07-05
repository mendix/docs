---
title: "Buttons"
url: /studio/page-editor-widgets-buttons/
description: "Describes button widgets in Mendix Studio."
weight: 50
tags: ["studio", "page editor", "button", "widgets"]
---

## 1 Introduction 

Button [widgets](/studio/page-editor-widgets/) allow end-users to perform various actions, for example, saving changes or closing the current page: 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-buttons/button-example.png"   width="400"  >}}

The following categories and buttons are available in Mendix Studio as default widgets:

* **Buttons** – buttons with general actions, such as opening or closing a page, calling a microflow, signing users out, opening a link:
  * Open Page
  * Call Microflow
  * Close Page
  * Sign Out
  * Open Link
* **Data Buttons** – buttons that manipulate data and are used to create or delete an object, save or cancel changes:
  * Create Object
  * Save Changes
  * Delete Object
  * Cancel Changes
* **Workflow Buttons** – buttons that are related to [workflows](/studio/workflows/) and are used to call  a workflow, complete or show a [user task](/studio/workflows-user-task/), show a workflow page:
  * Call Workflow
  * Complete Task
  * Show User Task
  * Show Workflow

{{% alert color="info" %}}

Apart from the default button widgets, you can also [download widgets from the Mendix Marketplace](https://marketplace.mendix.com/) to your app. For more information, see the [Widgets by Origin](/studio/page-editor-widgets/#widgets-by-origin) section in *Widgets*.

{{% /alert %}}

## 2 Events Section

Properties in the **Events** section are partially preset for buttons listed above. They depend on the action a button performs. For example, if the button is supposed to open a page, the **On Click Action** in the **Events** section will be **Page**. However, you need to specify what page exactly the button will open. 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section-page-button.png"   width="300"  >}}

For more information, see the [Default Properties in the Events Section](#default-properties) section. 

{{% alert color="info" %}}

You can change preset properties, and make the button perform another action. 

{{% /alert %}}

For more information on the **Events** section and on click actions, see [Events Section](/studio/page-editor-widgets-events-section/).

### 2.1 Default Properties in the Events Section {#default-properties}

**On Click Action** in the **Events** section determines the action of the button. 

{{< figure src="/attachments/studio/page-editor/page-editor-widgets/page-editor-widgets-buttons/events-section.png"   width="300"  >}}

You can find the list of default actions and properties that need to be configured in the table below:

| Button         | Default Action     | Properties to be Configured                                  |
| -------------- | ------------------ | ------------------------------------------------------------ |
| Open Page      | Page               | For **Open Page** you can configure the following properties:<ul><li>**Page**</li><li>**Create Object** and **Entity** – if you want to create a new object and pass it as a context to the selected page, enable **Create Object** (disabled by default) and select an **Entity**.</li></ul> For more information on these properties, see section the [Create Object Option](/studio/page-editor-widgets-events-section/#create-object-option) section in *Events Section*. |
| Call Microflow | Microflow          | **Microflow**                                                |
| Close Page     | Close Page         | None                                                         |
| Sign Out       | Sign Out           | None                                                         |
| Open Link      | Open Link          | For **Open Link** you need to configure the following properties: <ul><li>**Link Type** (Default: *Web*)</li><li>**Source** (Default: *Use literal value*)</li><li>**Url**</li></ul> For more information on these properties, see the [Open Link Action](/studio/page-editor-widgets-events-section/#open-link-action) section in *Events Section*. |
| Create Object  | Create Object      | **Page** and **Entity**                                      |
| Save Changes   | Save Changes       | None                                                         |
| Delete Object  | Delete Object      | None                                                         |
| Cancel Changes | Cancel Changes     | None                                                         |
| Call Workflow  | Call Workflow      | **Workflow**                                                 |
| Complete Task  | Complete Task      | **Task**                                                     |
| Show User Task | Show Task Page     | None                                                         |
| Show Workflow  | Show Workflow Page | **Admin Page**                                               |

## 3 General Section {#general}

Properties available in the **General** section are described in the table below.

| Property     | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Caption      | Defines the text that will be shown on the button. Buttons have preset captions depending on the action they perform. |
| Translations | Only available if multiple languages are set up in your app in Mendix Studio Pro. This option allows you to add translations of the button caption to other languages. For more information on how to add translations, see [Translating Your App to Multiple Languages](/studio/language-support/). |
| Icon         | Determines the icon that will be shown in front of the caption of the button. |
| Render Mode  | Defines the way the button will be shown to the end-user. Possible options are the following: <ul><li>Button  *(default)*  – the widget will be rendered as a button</li><li>Link – the widget will be rendered as a hyperlink</li></ul> |
| Style        | Applies a predefined styling to the button. Possible options are the following: <ul><li>Default <em>(default for all buttons except **Save Changes**)</em></li><li>Inverse</li><li>Primary</li><li>Info</li><li>Success <em>(default for the **Save Changes** button)</em></li><li>Warning</li><li>Danger</li></ul>The color for each style depends on your settings in the **Theme Customizer**. For details, see [Theme Customizer](/studio/theme-customizer/). |

## 4 Conditional Visibility

{{% snippet file="/static/_includes/studio/visibility-section-link.md" %}}

## 5 Design Section

For information on the **Design** section and its properties, see [Design Section](/studio/page-editor-widgets-design-section/).

## 6 Read More

* [Pages](/studio/page-editor/) 
* [Widgets](/studio/page-editor-widgets/)
