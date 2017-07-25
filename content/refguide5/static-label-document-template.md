---
title: "Static Label (document template)"
parent: "document-templates"
---


A static label shows a line of static text. You can use it to place custom text inside a data view, template grid or table.

{{% alert type="info" %}}

[![](attachments/819203/918130.png)](static-label-document-template)
A label with text 'Customer name'.

{{% /alert %}}

If you want to insert the current page number or the total page count in your document, you can use a token inside a static label (and only in a static label).
Before version 2.5.4, spaces were automatically inserted on either side of the token. This is no longer the case.

{{% alert type="info" %}}

Static label content: Page [%pageNumber%] of [%totalPageCount%]
Will print: Page 2 of 4

{{% /alert %}}

## Common Properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/selenium-support).

## Appearance Properties

### Caption

This is the value that will be displayed in the document.

### Style

See [Style](style)
