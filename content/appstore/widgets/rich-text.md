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
* HTML output of formatted text
* Show editor options either on a toolbar or as a bubble
* Use the toolbar tab to select which editor preset you want to show
	* **Basic** - This package contains plugins suitable for quick input fields.
	* **Standard** - This package contains plugins that can be used for creating standards-compliant content.
	* **Full** - This heavier package contains plenty of plugins suitable for various different needs.
	* **Custom** - The simplest way to configure the toolbar as you want.
* Input and display text is sanitized
* Use **Enter and Shift+Enter** mode to configure how you want to wrap your content
	* Paragraph (`<p>`)
	* Break lines (`<br>`)
	* Blocks (`<div>`)
* Use highlight code feature to insert rich code fragments and see a live preview with highlighted syntax.
* Use advanced filter content to allow or disallow elements in your rich text or use auto configuration.

## 2 Configuration

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
