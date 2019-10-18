---
title: "Drop-Down Search Field"
parent: "search-bar"
tags: ["studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

To add a drop-down search field to your data grid, right-click within the search bar in your data grid and choose **Add search field > Drop-down**.

## Common Properties

{{% snippet file="refguide/search-field-caption-property.md" %}}

{{% snippet file="refguide/search-field-type-property.md" %}}

{{% snippet file="refguide/search-field-default-value-property.md" %}}

## General properties

{{% snippet file="refguide/search-field-attribute-path-property.md" %}}

{{% snippet file="refguide/search-field-comparison-property.md" %}}

### Allow multi-select

If this property is set to 'Yes', the resulting drop-down allows you to select multiple values instead of just one. When searching all records match for which the corresponding attribute is equal to one of the selected values. For example, you can search for all orders with status 'Submitted' or 'In progress'.

### XPath Constraint

If the 'drop-down' search field is connected to an attribute of an associated entity (as opposed to the grid entity itself) the XPath constraint can be used to limit  objects shown in the drop-down.

{{% alert type="info" %}}

Let us say you have a grid showing bicycles. In the domain model the bicycle has an association to the shops where you can buy those bicycles. You can add a search field to the grid allowing the end-user to select a shop by name. The XPath can then be used to limit the shops to those that are in a given country.
`[MyWebshop.Bicycle_Shop/MyWebshop.Shop/Country='Netherlands']`

{{% /alert %}}

### Sort order

The sort order specifies the order in which the items in the drop-down search field are shown. You can sort on multiple attributes in both directions (ascending and descending). If no sort order is specified, the drop-down search field sorts on the displayed attribute.

_Default value:_ No sort order
