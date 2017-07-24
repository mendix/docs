---
title: "Image Uploader"
parent: "common-widgets"
---
{{% alert type="info" %}}

The possibility to add the image uploader to mobile forms was added in 4.3.0\. Before that it could only be placed on web forms.

{{% /alert %}}

An image uploader is used to upload images to the server. It also generates a thumbnail of the uploaded image. The uploaded image or its thumbnail can be shown by use of the image viewer.

![](attachments/819203/917886.png)

The image uploader is placed in a nested data view here. The Profile entity is a specialization of System.Image.

An image uploader must be placed in a table cell within a data view. This data view must be connected to entity System.Image or a specialization thereof.

## Appearance Properties

### Thumbnail size

This property determines the size of the generated thumbnail in pixels. However, the aspect ratio of the image will remain the same during thumbnail generation.

## Behavior Properties

### Max file size (MB)

With this property you can specify the maximum file size (in megabytes) of images that can be uploaded.

_Default value:_ 5

### Allowed extensions

You can specify the file extensions that are allowed to be uploaded. If no extensions are specified all file extensions are allowed. Separate multiple extensions by a semi-colon, e.g. `png;jpg`

If a file with an extension that is not allowed is selected, a system text (File manager > Incorrect file extension) will be shown underneath the file manager.

## Common Properties

### Tab index

See [Widget Properties](widget-properties).

### Name

See [Widget Properties](widget-properties).

### Class

See [Widget Properties](widget-properties).

### Style

See [Widget Properties](widget-properties).

## Related Articles

*   [Data View](data-view)
*   [Entities](entities)
*   [Associations](associations)
