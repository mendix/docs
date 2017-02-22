---
title: "Drop-Down Search Field"
space: "Mendix 7 Reference Guide"
parent: "search-bar"
---


## Common Properties

{% snippet Search+Field+Caption+Property.md %}

{% snippet Search+Field+Type+Property.md %}

{% snippet Search+Field+Default+Value+Property.md %}

## General properties

{% snippet Search+Field+Attribute+Path+Property.md %}

{% snippet Search+Field+Comparison+Property.md %}

### Allow multi-select

If this property is set to 'Yes', the resulting drop-down allows you to select multiple values instead of just one. When searching all records match for which the corresponding attribute is equal to one of the selected values. For example, you can search for all orders with status 'Submitted' or 'In progress'.

### XPath Constraint

If the 'drop-down' search field is connected to an attribute of an associated entity (as opposed to the grid entity itself) the XPath constraint can be used to limit  objects shown in the drop-down.

<div class="alert alert-info">{% markdown %}

Let us say you have a grid showing bicycles. In the domain model the bicycle has an association to the shops where you can buy those bicycles. You can add a search field to the grid allowing the end user to select a shop by name. The XPath can then be used to limit the shops to those that are in a given country.
`[MyWebshop.Bicycle_Shop/MyWebshop.Shop/Country='Netherlands']`

{% endmarkdown %}</div>

### Sort order

The sort order specifies the order in which the items in the drop-down search field are shown. You can sort on multiple attributes in both directions (ascending and descending). If no sort order is specified, the drop-down search field sorts on the displayed attribute.

_Default value:_ No sort order
