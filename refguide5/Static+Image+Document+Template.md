---
title: "Static Image (document template)"
category: "refguide5"
space: "Reference Guide 5"
---


A static image shows a predefined image. It can be put either in- or outside a data view or templategrid.

<div class="alert alert-info">{% markdown %}

[![](attachments/819203/918133.png)](Static+Image+Document+Template)
A static image inside a table cell.

{% endmarkdown %}</div>

## Appearance Properties

### Image

This property defines the image that will appear in the document.

### Width

The width defines the width of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

### Height

The height defines the height of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

## Common Properties

### Name

The internal name of the widget. You can use this to give sensible names to widgets. The name property also appears in the generated HTML: the widget DOM element automatically includes the class '`mx-name-{NAME}`', which can be useful for [Selenium testing](/howto50/Selenium+Support).