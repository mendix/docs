---
title: "File Manager"
parent: "web-forms"
---
A file manager is used to upload and/or download files.

![](attachments/819203/917529.png)

It must be placed into a table cell within a data view. This data view must be connected to the entity System.FileDocument or a specialization thereof.

## Behavior Properties

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
