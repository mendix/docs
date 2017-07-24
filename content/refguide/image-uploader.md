---
title: "Image uploader"
space: "Mendix 7 Reference Guide"
parent: "file-widgets"
---


An image uploader is used to upload images to the server. It also generates a thumbnail of the uploaded image. The uploaded image or its thumbnail can be shown by use of the image viewer.

<div class="alert alert-info">{% markdown %}

![](attachments/16713874/16843989.png)
The image uploader is placed in a nested data view here. The Profile entity is a specialization of System.Image.

{% endmarkdown %}</div>

An image uploader must be placed in a data view connected to entity System.Image or a specialization thereof.

## General properties

### Maximum file size (MB)

With this property you can specify the maximum file size (in megabytes) of images that can be uploaded.

_Default value:_ 5

### Allowed extensions

You can specify the file extensions that are allowed to be uploaded. If no extensions are specified all file extensions are allowed. Separate multiple extensions by a semi-colon, e.g. `png;jpg`

If a file with an extension that is not allowed is selected, a system text (File manager > Incorrect file extension) will be shown underneath the file manager.

### Thumbnail width

This property determines the width of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

### Thumbnail height

This property determines the height of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

{% snippet Label+Property.md %}

## Editability properties

{% snippet Editable+Property.md %}

{% snippet Condition+Property.md %}

## Visibility properties

{% snippet Visibility+Property.md %}

{% snippet Visibility+Property+With+Module+Roles+Simple.md %}

## Common properties

{% snippet Name+Property.md %}

{% snippet Class+Property.md %}

{% snippet Style+Property.md %}

{% snippet Tab+index+Property.md %}

## Related articles

*   [Data view](data-view)
*   [Entities](entities)
*   [Associations](associations)
