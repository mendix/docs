---
title: "Rich Text"
url: /appstore/widgets/rich-text/
category: "Widgets"
description: "Describes the configuration and usage of the Rich Text widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "rich text", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Rich Text](https://marketplace.mendix.com/link/component/74889/) widget provides the user with an WYSIWYG editor, where the user can enter and edit rich-text content. The widget automatically converts the rich-text content into a string in HTML format, which can be stored in an attribute of an entity.

{{< figure src="/attachments/appstore/widgets/rich-text/example.jpg" alt="Example" >}}

### 1.1 Features

* Allow the user to enter and format text in a WYSIWYG editor
* Configure which buttons are available on the toolbar of the editor
* Automatically output the formatted text in a string in HTML format
* Sanitize the user's input automatically or with advanced, customized filters, and display the text
* Enable the user to wrap text elements using the keyboard shortcut <kbd>Enter</kbd> or <kbd>Shift</kbd> + <kbd>Enter</kbd>
* Support spelling and grammar checker in the editor
* Support code highlight, which enables the user to insert code fragments and have a live preview with highlighted syntax
* Support the following keyboard shortcuts in the editor:
  * <kbd>Ctrl</kbd> + <kbd>B</kbd> – bold
  * <kbd>Ctrl</kbd> + <kbd>I</kbd>– italicize
  * <kbd>Ctrl</kbd> + <kbd>U</kbd> – underline
  * <kbd>Ctrl</kbd> + <kbd>Z</kbd> – undo
  * <kbd>Ctrl</kbd> + <kbd>Y</kbd> – redo
  * <kbd>Ctrl</kbd> + <kbd>C</kbd> – copy
  * <kbd>Ctrl</kbd> + <kbd>V</kbd> – paste
  * <kbd>-</kbd> + <kbd>space</kbd> – starts a list
  * <kbd>tab</kbd> – indents the content when <kbd>tab</kbd> is configured to indent from the widget XML; otherwise, move the focus to the next element

## 2 Configuration

To configure this widget, follow these steps:

1. Place the Rich Text widget in a Data View, a List View, or a Template Grid with a data source that has a String attribute to store the rich-text content.
2. Double-click the Rich Text  widget to open the **Edit Rich Text** dialog box.
3. Configure the widget using the properties described in the sections below.

### 2.1 General Tab

* **Editor style**
    * **Toolbar** (default) – if selected, the toolbar is always displayed

        {{< figure src="/attachments/appstore/widgets/rich-text/basic-toolbar.png" alt="Example of toolbar" >}}
	
	  * **Inline** – if selected, the toolbar pops up only when the user starts typing in the editor
        {{< figure src="/attachments/appstore/widgets/rich-text/inline-toolbar.png" alt="Example of toolbar" >}}
	
* **Value attribute** (required) – sets a String attribute to store the rich-text content
* **Sanitize content**	
    * **Yes** (default) – if selected, untrusted strings in user's content gets removed
    * **No** – if selected, untrusted strings in user's content is not removed	
*  **Read-only style** – defines how the editor looks when the editor becomes read-only
	
    {{% alert color="info" %}}The editor becomes read-only when the **Editable** property is set to **Never** or **Condition** returns `false`.{{% /alert %}}
	
	 * **Rich text** – if selected, only text is shown
	 * **Bordered** –  if selected, text is shown in a frame
	 * **Bordered toolbar** – if selected, text is shown in a frame and the toolbar is also visible, but the user cannot make any changes
*  **Editable** – determines when user can edit content in the editor and when it is read-only

    {{% alert color="info" %}}For more information, see [Editability Section](https://docs.mendix.com/refguide/common-widget-properties#editability) in the *Studio Pro 9 Guide*.{{% /alert %}}

* **Show label** 
    * **Yes** – if selected, you can define the label caption
     	 * **Label caption** – defines the label caption of the widget that is displayed on the page
    * **No** (default) – if selected, there is no label for this widget on the page
* **Visible** – determines if the widget is visible on the page

    {{% alert color="info" %}}For more information, see [Visibility Section](https://docs.mendix.com/refguide/common-widget-properties#visibility-properties) in the *Studio Pro 9 Guide*.{{% /alert %}}

### 2.2 Toolbar Tab

* **Presets** – defines which pre-set buttons are included in the editor
    * **Basic** – if selected, the editor contains buttons suitable for quick input fields

        {{< figure src="/attachments/appstore/widgets/rich-text/basic-toolbar.png" alt="Example of toolbar" >}}
	
	  * **Standard** – if selected, the editor contains buttons used for creating standards-compliant content
	  
        {{< figure src="/attachments/appstore/widgets/rich-text/standard-toolbar.png" alt="Example of toolbar" >}}
	  
	  * **Full** – if selected, the editor contains plenty of buttons suitable for various different needs

        {{< figure src="/attachments/appstore/widgets/rich-text/full-toolbar.png" alt="Example of toolbar" >}}
	  
    * **Custom** – allows you to make your toolbar with customized options	
        * **Toolbar group** 
            * **Basic** (default) – if selected, you can select which of the following toolbar groups are available in the toolbar
                * **Document Group**
                * **Clipboard Group**
                * **Editing Group**
                * **Forms group**
                * **Separator group**
                * **Basic style group**
                * **Paragraph group**
                * **Links group**
                * **Separator 2 group**
                * **Styles group**
                * **Colors group**
                * **Tools group**
                * **Others group**
            * **Advanced** – if selected, you can configure buttons for different toolbar groups
		
                {{% alert color="info" %}}All the toolbar groups that you configure will be available in the toolbar. The buttons that have the same **Toolbar ID** will be grouped together, with vertical bars ("|") separating different toolbar groups.{{% /alert %}}
		
                * **New** – opens the **Edit Advanced Groups Item** dialog box where you can add a new button to a toolbar group
                    * **Button** – specifies the button to be included in the toolbar group
                    * **Toolbar ID** – specifies the ID of the toolbar group in which this button should be included
                * **Delete** – deletes the selected button
                * **Edit** – opens the **Edit Advanced Groups Item** dialog box where you can make changes to the selected button 

### 2.3 Dimensions Tab

* **Width unit** – the width of the widget
    * **Percentage** – specifies the width in relation to the rest of the elements on the page
    * **Pixels** – specifies the width in pixels
* **Width** – used as an appropriate CSS value
* **Height unit** – the height of the widget
    * **Percentage of width** – specifies the height in relation to the width
    * **Pixels** – specifies the height in pixels
    * **Percentage of parent** – specifies the width in relation to the rest of the elements on the page
* **Height** – used as an appropriate CSS value

### 2.4 Events Tab

* **On key press** – specifies an action to execute when the user presses any keyboard key or a combination of keyboard keys
* **On change** – specifies an action to execute when the user changes any content in the editor

### 2.5 Advanced Tab

* **Enter mode** – defines which of the following elements is wrapped when the user presses the <kbd>Enter</kbd> key:
    * **Paragraph** (`<p>`)
    * **Break lines** (`<br>`)
    * **Blocks** (`<div>`)
* **Shift enter mode** – defines which of the following elements is wrapped when the user presses the <kbd>Shift</kbd> + <kbd>Enter</kbd> keys:
    * **Paragraph** (`<p>`)
    * **Break lines** (`<br>`)
    * **Blocks** (`<div>`)
* **Spellchecker**
    * **Yes** (default) – if selected, the inline spelling and grammar checker is enabled
    * **No** – if selected, the inline spelling and grammar checker is disabled 
* **Enable code highlight**
    * **Yes** – if selected, the **Insert Code Snippet** button below becomes available in the toolbar, which enables the user to insert a code snippet that is displayed with highlighted syntax in the editor 
    
        {{< figure src="/attachments/appstore/widgets/rich-text/insert-code-snippet.png" alt="insert-code-snippet" >}}
    
    * **No** (default) – if selected, the **Insert Code Snippet** button is unavailable in the toolbar
* **Advanced content filtering**  
    * **Auto** (default) – if selected, the content is sanitized automatically
    * **Custom** – if selected, you can customize how content is sanitized with the following items:
        * **Allowed content** – specifies tags that are allowed, for example, `h1 h2 h3 p blockquote strong em del ins table tr th td caption`
        * **Disallowed content** – specifies tags that get removed
    
          {{% alert color="info" %}}For more information about how to use tags for content filtering, see the [Custom ACF Mode](https://ckeditor.com/docs/ckeditor4/latest/examples/acfcustom.html) section in *Advanced Content Filter – Custom Mode*{{% /alert %}}

### 2.6 Common Tab

For more information, see [Common Section](https://docs.mendix.com/refguide/common-widget-properties#common-properties) in *Properties Common in the Page Editor*.

## 3 Widgets Below Version 2.0.0

Features:

* Format selected text
* HTML output of formatted text
* Show editor options either on a toolbar or as a bubble
* Use the custom option to select which editing options you want to show
* Input and display text is sanitized – all unsupported HTML tags and JavaScript is removed for security reasons. The following are supported:

    * Tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `br`, `a`, `ul`, `li`, `ol`, `s`, `u`, `em`, `pre`, `strong`, `blockquote`, `span`
        * Attributes:
            * For all tags: `class`, `style`
            * `a` tag: `href`, `name`, `target`
    * Schemes: `http`, `https`, `ftp`, `mailto`

    {{% alert color="info" %}}To be fully secure, all user HTML input should be sanitized on the server side too. This could be done with the XSSSanitize action found in the [Community Commons](/appstore/modules/community-commons-function-library/). When the option 'Sanitize content' is set to 'false' server side sanitating is required before showing any HTML content.{{% /alert %}}

