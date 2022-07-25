---
title: "Select Elements"
url: /refguide8/select--elements/
tags: ["studio pro"]
aliases:
    - /refguide8/Select++Elements.html
    - /refguide8/Select++Elements
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/select--elements.pdf).
{{% /alert %}}

## 1 Introduction

For both [import](/refguide8/import-mappings/)and [export mappings](/refguide8/export-mappings/) you need to specify the elements structure you want to map. You do this in the **Select schema elements** window. An example of this screen is shown below.

{{< figure src="/attachments/refguide8/modeling/integration/mapping-documents/select--elements/19399143.png" >}}

Perform the following steps in the **Select schema elements** window:

1.  Depending on whether you want to make a mapping for an [XML schema](/refguide8/xml-schemas/), a [Consumed web service](/refguide8/consumed-web-services/) or a [JSON structure](/refguide8/json-structures/) documents you need to select an **XML schema**, **Web service operation** or **JSON structure** as the source.
2.  If source is XML schema then select the root element of the mapping. This is done by selecting the **Start at** element for the XML schema or the **request part** for the web service operation. **Start at** lists the root elements in an XML schema. You can select one root element to base your mapping on. If source is Web service operation, **Request part** lists the header and body element of the request part of an operation. If an operation has multiple parameters, these are listed in the Request part as well. **Request part** is only applicable to export mappings.
3.  Finally, select specific elements in the tree explorer below. Typically you do not need to map an entire source, since they can be quite large.

{{% alert color="info" %}}

If the contents of the used schema source change, the mapping document does not match with the schema anymore and a consistency error is shown. This consistency error is easily fixed by right-clicking the consistency error itself and selecting 'Resolve by updating from schema'.

Schema contents can change by importing a changed XML schema, WSDL or by changing a JSON structure.

{{% /alert %}}

## 2 Rules and Restrictions

Keep in mind the following rules and restrictions for element selection:

*   Unsupported elements cannot be checked.
*   A value cannot be checked without a parent element.
*   The top level element cannot be unchecked (export mapping only).
*   An attribute cannot be checked without checking its parent element (export mapping only).
*   An element with minimum occurrence 1 cannot be unchecked (export mapping only).
*   If a choice or inheritance element is checked, at least one of its children needs to be checked.

For ease of use, some elements will automatically be checked or unchecked:

*   If you check elements with mandatory children the required children will be automatically checked. 
*   Similarly, when unchecking an element in the export mapping the children of the element will be unchecked. 

When working on an import mapping you are allowed to skip elements in the hierarchy but still select the children. You can do this when you're not interested in the information stored in the intermediary elements.

{{% alert color="info" %}}

You may encounter element selection checkboxes that are greyed out. If you hover the mouse over the checkbox, you see which rule or restriction prevents you from changing the checkbox value. For example, you may need to select a parent node first before you can select a child node.

{{% /alert %}}

## 3 Convenience functions

{{% alert color="info" %}}

| Function | Description |
| --- | --- |
| Filter | Expand and filter the tree nodes based on whether the name contains the filter text. Because the filtering behavior relies on the 'Expand All' behavior, in very big schemas all elements matching the filter are not guaranteed to be found. |
| Expand all | Expands the entire tree, unless a node is a duplicate of one of its ancestors, or the number of expanded nodes is too large. The maximum of nodes per expand operation is currently 1,000. |
| Collapse all | Collapses the entire tree, so that only the root node remains visible |
| Check all | Checks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| Uncheck all | Unchecks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |

{{% /alert %}}
