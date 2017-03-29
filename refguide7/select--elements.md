---
title: "Select Elements"
space: "Mendix 7 Reference Guide"
parent: "mapping-documents"
---


For both [import](import-mappings)and [export mappings](export-mappings) you need to specify the elements structure you want to map. You do this in the **Select elements** window. An example of this screen is shown below.

![](attachments/16713729/19399143.png)

Perform the following steps in the **Select elements** window:

1.  Depending on whether you want to make a mapping for an [XML schema](xml-schemas), a [Consumed web service](consumed-web-services), a [JSON structure](json-structures), or an entity, you need to select an **XML schema**, a **Web service operation**, a **JSON structure**, or an **Entity** as the source.
2.  If the source is an XML schema then select the root element of the mapping. This is done by selecting the **Start at** element for the XML schema or the **request part** for the web service operation. **Start at** lists the root elements in an XML schema. You can select one root element to base your mapping on. If source is a web service operation, **Request part** lists the header and body element of the request part of an operation. If an operation has multiple parameters, they are listed in the Request part as well. **Request part** is only applicable to export mappings.
3.  Finally, select specific elements in the tree explorer below. Typically, you do not need to map an entire source, since it can be quite large.

<div class="alert alert-success">{% markdown %}

When the contents of the source change, the mapping document may no longer matche the schema, and a consistency error is shown. This consistency error is easily fixed by right-clicking the consistency error itself and selecting 'Resolve by updating from source'.

Source contents can change by importing a changed XML schema, WSDL or by changing the JSON structure or entity.

{% endmarkdown %}</div>

## Rules and Restrictions

Keep in mind the following rules and restrictions for element selection:

*   Unsupported elements cannot be checked.
*   A value cannot be checked without a parent element.
*   The top level element cannot be unchecked (export mapping only).
*   An attribute cannot be checked without checking its parent element (export mapping only).
*   An element with minimum occurrence 1 cannot be unchecked (export mapping only).
*   If a choice or inheritance element is checked, at least one of its children needs to be checked.

For ease of use, some elements will be checked or unchecked automatically:

*   If you check elements with mandatory children the required children will be checked automatically. 
*   Similarly, when unchecking an element in the export mapping, the children of the element will be unchecked. 

When working on an import mapping you are allowed to skip elements in the hierarchy but still select the children. You can do this when you're not interested in the information stored in the intermediary elements.

<div class="alert alert-success">{% markdown %}

You may encounter element selection checkboxes that are greyed out. Hover over the checkbox to see which rule or restriction prevents you from changing the checkbox value. For example, you may need to select a parent node first before you can select a child node.

{% endmarkdown %}</div>

## Convenience functions

<div class="alert alert-info">{% markdown %}

| Function | Description |
| --- | --- |
| Filter | Expand and filter the tree nodes based on whether the name contains the filter text. Because the filtering behavior relies on the 'Expand All' behavior, in very big sources it is not guaranteed that all elements matching the filter are found. |
| Expand all | Expands the entire tree, unless a node is a duplicate of one of its ancestors, or the number of expanded nodes is too large. The maximum of nodes per expand operation is currently 1,000. |
| Collapse all | Collapses the entire tree, so that only the root node remains visible |
| Check all | Checks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |
| Uncheck all | Unchecks the box next to every expanded node and visible leaf node. Collapsed nodes and their children are not affected. |

{% endmarkdown %}</div>
