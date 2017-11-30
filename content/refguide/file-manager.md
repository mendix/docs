---
title: "File manager"
parent: "file-widgets"
---


A file manager is used to upload and/or download files.

{{% alert type="info" %}}

![](attachments/16713872/16843985.png)

{{% /alert %}}

It must be placed inside a data view connected to the entity System.FileDocument or a specialization thereof.

## General properties

### Type

This property indicates how the end user can interact with the file manager.

| Value | Description |
| --- | --- |
| Upload | The file manager can only be used to upload a file. |
| Download | The file manager can only be used to download a file. |
| Both | The file manager can be used to upload, and to download a file. |

_Default value:_ Both

### Max file size (MB)

This property determines the maximum size of files (in megabytes) that can be uploaded.

_Default value:_ 5

### Allowed extensions

You can specify the file extensions that are allowed to be uploaded. If no extensions are specified all file extensions are allowed. Separate multiple extensions by a semi-colon, e.g. `txt;doc`

If a file with an extension that is not allowed is selected, a system text (File manager > Incorrect file extension) will be shown underneath the file manager.

### Show file in browser

This property indicates whether the file will be shown in the browser, instead of being downloaded.

_Default value:_ False

{{% snippet file="refguide/Label+Property.md" %}}

## Editability properties

{{% snippet file="refguide/Editable+Property.md" %}}

{{% snippet file="refguide/Condition+Property.md" %}}

## Visibility properties

{{% snippet file="refguide/Visibility+Property.md" %}}

{{% snippet file="refguide/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Common properties

{{% snippet file="refguide/Name+Property.md" %}}

{{% snippet file="refguide/Class+Property.md" %}}

{{% snippet file="refguide/Style+Property.md" %}}

{{% snippet file="refguide/Tab+index+Property.md" %}}

## Related articles

*   [Data view](data-view)
*   [Entities](entities)
*   [Associations](associations)
