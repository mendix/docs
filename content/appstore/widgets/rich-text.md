---
title: "Rich Text"
category: "Widgets"
description: "Describes the configuration and usage of the Rich Text widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "rich text", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Rich Text](https://marketplace.mendix.com/link/component/74889/) widget enables rich inline and toolbar text editing.

### 1.1 Features

* Format selected text
* Output formatted text in HTML
* Show editor options either on a toolbar or as a bubble
* Use the **Toolbars** tab to select which editor preset you want to show
  * **Basic** – a package that contains plugins suitable for quick input fields
  * **Standard** – a package that contains plugins that can be used for creating standards-compliant content
  * **Full** – a heavier package that contains plenty of plugins suitable for various different needs
  * **Custom** – the simplest way to configure the toolbar as you want
* Input and display text is sanitized
* Use the **Enter** mode and the **Shift+Enter** mode to configure how you want to wrap your content:
	* Paragraph (`<p>`)
	* Break lines (`<br>`)
	* Blocks (`<div>`)
* Use highlight code feature to insert rich code fragments and have a live preview with highlighted syntax
* Use advanced filter content to enable or disable elements in your rich text or use auto configuration

## 2 Configuration

Place the Rich Text widget in a Data View, a List View, or a Template Grid with a data source that has a string attribute. Then, select the **Value attribute** that contains the editable text. You can change other settings on these tabs:

* **General** tab
* **Toolbars** tab
* **Dimensions** tab
* **Event** tab
* **Advanced** tab

### 2.1 General Tab

* **Editor style** – determines whether the formatting options are shown in a toolbar or inline
	
	*  **Toolbar** (default)
	  ![Example of toolbar](attachments/ckeditor/basic_toolbar.png)
	
	* **Inline**
	  ![Example of toolbar](attachments/ckeditor/inline_toolbar.png)
	
* **Value attribute** – the attribute that has a string value, which is used as the rich-text content

* **Sanitize content** – determines whether your content from untrusted strings is removed or not
	
	* **Yes** (default)
	* **No**
	
* **Read-only style** – defines how your editor looks when the value is disabled (This works when *editablity* set to *never* or *condition* returns false)
	
	* **Rich text** – if selected, only text will be visible
	* **Bordered** –  if selected, text is visible within a frame
	* **Bordered toolbar** – if selected, editor is visible as normal, but editing actions and content are disabled
	
* **Editable**
	
	* **Default**
	* **Never**
	* **Conditionaity**
	
* **Show label**:

  * **Yes**
  * **No**

* **Visible**:

### 2.2 Toolbar Tab

* **Presets** – defines which editor preset you want to show
	* **Basic** – contains plugins suitable for quick input fields
	![Example of toolbar](attachments/ckeditor/basic_toolbar.png)
	* **Standard** – contains plugins that can be used for creating standards-compliant content
	  ![Example of toolbar](attachments/ckeditor/standard_toolbar.png)
	* **Full** – contains plenty of plugins suitable for various different needs
	  ![Example of toolbar](attachments/ckeditor/full_toolbar.png)
	* **Custom** - allows you to make customized settings you can choose between *basic* and *advanced* configurations
		* **Basic** (default) – allows you to decide which of the following groups are used:
		  * **Toolbar group**
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
		* **Advanced** – allows you to use groups that you configure item by item
		  * **New** – opens the **Edit Advanced Groups** Item dialog box that has the following settings:
		    * **Button** – the type of the button
		    * **Toolbar ID** – identifies the ID of the toolbar where this button is included (items with the same **Toolbar ID** are grouped)
		  * **Delete** – deletes the selected button
		  * **Edit** – opens the **Edit Advanced Groups** Item dialog box where you can make changes to the selected button 

### 2.3 Dimensions Tab

* **Width unit**
  * **Percentage**
  * **Pixels**
* **Width**
* **Heigh unit**
  * **Percentage of width**
  * **Pixels**
  * **Percentage of parent**
* **Height**

### 2.5 Events Tab

* **On key press**
* **On change**

### 2.4 Advanced Tab

* **Enter mode** – defines which of the following is wrapped when you press the <kbd>Enter<kbd> key:
	* **Paragraph** (`<p>`)
	* **Break lines** (`<br>`)
	* **Blocks** (`<div>`)
* **Shift enter mode** – defines which of the following is wrapped when you press the <kbd>Shift<kbd> + <kbd>Enter<kbd>:
  * **Paragraph** (`<p>`)
  * **Break lines** (`<br>`)
  * **Blocks** (`<div>`)


* **Spellchecker** – enables the inline spelling and grammar checker
* **Enable code highlight** – allows you to configure your code in the text
* **Advanced content filtering** – defines how the content is sanitized
  * **Auto** (default) – editor will take care of that
  * **Custom** – the following items become available which allow you to customize your filter:
  	* **Allowed content** – enter tags that are allowed
  	* **Disallowed content** – enter tags that should be removed

## 3 Usage

The following keyboard shortcuts can be used when editing:

* <kbd>Ctrl</kbd> + <kbd>B</kbd> – bold
* <kbd>Ctrl</kbd> + <kbd>I</kbd>– italicize
* <kbd>Ctrl</kbd> + <kbd>U</kbd> – underline
* <kbd>Ctrl</kbd> + <kbd>Z</kbd> – undo
* <kbd>Ctrl</kbd> + <kbd>Y</kbd> – redo
* <kbd>Ctrl</kbd> + <kbd>C</kbd> – copy
* <kbd>Ctrl</kbd> + <kbd>V</kbd> – paste
* <kbd>-</kbd> + <kbd>space</kbd> – start list
* <kbd>tab</kbd> – indent the content when <kbd>tab</kbd> is configured to indent from the widget XML; otherwise, move the focus to the next element

## 4 Widgets Below Version 2.0.0

### 4.1 Features

* Format selected text
* HTML output of formatted text
* Show editor options either on a toolbar or as a bubble
* Use the custom option to select which editing options you want to show
* Input and display text is sanitized

### 4.2 Configuration

Place the widget in a data view, list view, or template grid with a data source that has a string attribute. Then, select the **Value attribute** that contains the editable text.

The input and output is sanitized. All unsupported HTML tags and JavaScript is removed for security reasons. The following are supported:

* Tags: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `p`, `br`, `a`, `ul`, `li`, `ol`, `s`, `u`, `em`, `pre`, `strong`, `blockquote`, `span`
* Attributes:
	* For all tags: `class`, `style`
	* `a` tag: `href`, `name`, `target`
* Schemes: `http`, `https`, `ftp`, `mailto`

{{% alert type="info" %}}
To be fully secure, all user HTML input should be sanitized on the server side too. This could be done with the XSSSanitize action found in the [Community Commons](/appstore/modules/community-commons-function-library). When the option 'Sanitize content' is set to 'false' server side sanitating is required before showing any HTML content.
{{% /alert %}}
