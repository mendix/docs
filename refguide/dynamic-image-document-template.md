---
title: "Dynamic Image (document template)"
space: "Mendix 7 Reference Guide"
parent: "document-templates"
---


A dynamic image can be used to show a System.Image. If the image is not available (for example: the image was never saved) it will show the preset default image. It can be put inside a data view or templategrid.

<div class="alert alert-info">{% markdown %}

![](attachments/819203/918132.png)
A dynamic image inside a table cell, showing the preset default image.

{% endmarkdown %}</div>

## Appearance Properties

### Default image

The default image is the image that will appear in the document when the dynamic image could not be found (when the entity that specializes the System.Image entity does not contain an actual image.)

### Use thumbnail

Here you can select whether to use the thumbnail in the document or the full image.

### Width

The width defines the width of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

### Height

The height defines the height of the image in the document. This is set in pixels and using the PPI in the document template this will be recalculated to actual printing size. Either width or height can be set; to prevent distortion of the image it is not possible to set both.

## Common Properties

{% snippet Name+Property.md %}
