---
title: "Static Label (Document Template)"
url: /refguide7/static-label-document-template/
aliases:
    - /refguide7/Static+label+(document+template).html
    - /refguide7/static-label-(document-template).html
    - /refguide7/Static+label+(document+template)
    - /refguide7/static-label-(document-template)
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


A static label shows a line of static text. You can use it to place custom text inside a data view, template grid or table.

{{% alert color="info" %}}

{{< figure src="/attachments/refguide7/desktop-modeler/document-templates/918130.png" >}}]
A label with text 'Customer name'.

{{% /alert %}}

If you want to insert the current page number or the total page count in your document, you can use a token inside a static label (and only in a static label).
Before version 2.5.4, spaces were automatically inserted on either side of the token. This is no longer the case.

{{% alert color="info" %}}

Static label content: Page [%pageNumber%] of [%totalPageCount%]
Will print: Page 2 of 4

{{% /alert %}}

## Common Properties

{{% snippet file="/static/_includes/refguide7/Name+Property.md" %}}

## Appearance Properties

### Caption

This is the value that will be displayed in the document.

### Style

See [Style](/refguide7/style/)
