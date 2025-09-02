---
title: "Document Templates"
url: /refguide/document-templates/
weight: 90
aliases:
    - /refguide/Document+Templates.html
    - /refguide/Document+Templates
    - /refguide/creating-your-own-documents/
    - /refguide/data-view-document-template/
    - /refguide/document-template/
    - /refguide/dynamic-image-document-template/
    - /refguide/dynamic-label-document-template/
    - /refguide/footer-document-template/
    - /refguide/header-document-template/
    - /refguide/line-break-document-template/
    - /refguide/page-break-document-template/
    - /refguide/static-image-document-template/
    - /refguide/static-label-document-template/
    - /refguide/style/
    - /refguide/template-grid-document-template/
    - /refguide/title-document-template/
    - /refguide/data-grid-document-template/
    - /refguide/columns-document-template/
    - /refguide/table-document-template/
    - /refguide/row-document-template/
    - /refguide/cell-document-template/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="warning" %}}
The use of **Document Templates** and the **Generate Document** microflow action is deprecated and will be removed in a future version of Mendix.
{{% /alert %}}

## Introduction

Document Templates, previously used to design templates for exporting documents based on application data in Mendix, along with the **Generate Document** microflow action, are now deprecated and will be removed in a future Mendix release. This guide outlines the recommended alternatives for document generation.

To view the documentation of Document Templates, please refer to the [Mendix 10 documentation](/refguide10/document-templates/) instead.

## Alternatives

Document Templates in Mendix allowed the generation of various document types. This section explains the appropriate replacement options for each previously supported document type.

### PDF

To generate PDF documents, use the [PDF Document Generation](/appstore/modules/document-generation/) capability, which allows you to define PDFs based on standard Mendix pages. This approach offers significantly greater flexibility and control over the layout and design of your PDF documents compared to the deprecated Document Templates.

### HTML

To generate HTML documents, create the HTML manually and use the token replacement capabilities of the [Mx Model Reflection](/appstore/modules/model-reflection/#token-configuration) module to insert application data. Open source tools such as [MJML](https://mjml.io/) can assist in designing visually appealing HTML, especially for email templates.

### Microsoft Word

Generating Microsoft Word documents is no longer supported by Mendix. However, there are several alternative solutions available — both free and paid — maintained by Mendix partners and the community that support Word document generation. These can be found in the [Mendix Marketplace](https://marketplace.mendix.com/link/search/word).

### Other Formats

Other formats, including Rich Text Format (.rtf) and OpenDocument Text (.odt), are no longer supported by Mendix and do not have official alternatives. We understand this may impact certain use cases, and we recommend exploring whether supported formats like PDF or HTML can meet your current needs.
