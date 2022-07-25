---
title: "File manager"
url: /refguide7/file-manager/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A file manager is used to upload and/or download files.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/pages/file-widgets/file-manager/file-manager.png" >}}

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

You can specify the file extensions that are allowed to be uploaded. If no extensions are specified all file extensions are allowed. Separate multiple extensions by a semi-colon, for example, `txt;doc`

If a file with an extension that is not allowed is selected, a system text (File manager > Incorrect file extension) will be shown underneath the file manager.

{{% alert color="warning" %}}
The feature to allow extensions is not meant as a security feature, as the file manager widget does not check the contents of a file to see if they match the provided extension.
{{% /alert %}}

### Show file in browser

This property indicates whether the file will be shown in the browser, instead of being downloaded.

_Default value:_ False

{{% snippet file="/static/_includes/refguide7/Label+Property.md" %}}

## Editability properties

{{% snippet file="/static/_includes/refguide7/Editable+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Condition+Property.md" %}}

## Visibility properties

{{% snippet file="/static/_includes/refguide7/Visibility+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Visibility+Property+With+Module+Roles+Simple.md" %}}

## Common properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Class+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Style+Property.md" %}}

{{% snippet file="/static/_includes/refguide7/Tab+index+Property.md" %}}

## Related articles

*   [Data view](/refguide7/data-view/)
*   [Entities](/refguide7/entities/)
*   [Associations](/refguide7/associations/)
