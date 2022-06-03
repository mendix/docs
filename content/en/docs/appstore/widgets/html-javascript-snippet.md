---
title: "HTML/JavaScript Snippet"
url: /appstore/widgets/html-javascript-snippet/
category: "Widgets"
description: "Describes the configuration and usage of the TML/JavaScript Snippet widget, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "widget", "html", "javascript", "snippet", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [HTML/JavaScript Snippet](https://marketplace.mendix.com/link/component/56/) widget is useful for adding a piece of HTML or JavaScript to a page (for example, to embed a YouTube or Flash object). In addition, it can be used to enhance styling by adding arbitrary HTML elements.

### 1.1 Typical Use Cases

* Display a predefined HTML document
* Load a Java applet
* Manipulate app styling using JavaScript rather than theming

### 1.2 Features

* Embed raw HTML
* Embed raw JavaScript
* Load external HTML/JS files

## 2 Properties

* **Content Type** – select how the snippet should be rendered:
	
	* **HTML**
	* **JavaScript**
	* **JavaScript with jQuery** – this option will make sure your code can leverage jQuery v3.3.1, for example:
	
		```
		//for example, this code snippet will set the color of all your paragraph tags on the page to red.
		$('p').css('color', 'red')
		// or
		jQuery('p').css('color', 'red')
		```
* **Contents** – the HTML or Javascript to embe
* **External File** – the path to the HTML or JavaScript file you want to add
	* The root is the **theme** folder
	* This will override the **Contents** section if used
	* With the newly added `/p/` native deep links, you may want to start your file path with a `/` to prevent any 404s caused by this deep link
* **On click microflow** – the microflow that should be executed on the click action (can be used to, for example, show a page when the snippet is clicked)
* **Refresh on context change** – determines whether the widget should refresh when the context changes
* **Refresh on context update** – determines whether the widget should refresh when the context updates (works only when **Refresh on context change** is set to **Yes**)
* **Enclose HTML with DIV** – determines whether the widget will wrap HTML with a DIV when HTML is added
	* If this is set to false, it will just replace the content of the widge 
	* For compatibility purposes, this is set to **Yes** on default
