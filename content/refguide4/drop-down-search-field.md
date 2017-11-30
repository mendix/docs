---
title: "Drop-Down Search Field"
parent: "search-bar"
---
## Common Properties

### Caption

See [Search Field Properties](search-field-properties).

### Type

See [Search Field Properties](search-field-properties).

### Default value

See [Search Field Properties](search-field-properties).

### Comparison

See [Search Field Properties](search-field-properties).

## Data Source properties

### XPath Constraint

If the 'drop-down' search field is connected to an attribute of an associated entity (as opposed to the grid entity itself) the XPath constraint can be used to limit  objects shown in the drop-down.

Let us say you have a grid showing bicycles. In the domain model the bicycle has an association to the shops where you can buy those bicycles. You can add a search field to the grid allowing the end user to select a shop by name. The XPath can then be used to limit the shops to those that are in a given country.

`[MyWebshop.Bicycle_Shop/MyWebshop.Shop/Country='Netherlands']`

### Sort order

The sort order specifies the order in which the items in the drop-down search field are shown. You can sort on multiple attributes in both directions (ascending and descending). If no sort order is specified, the drop-down search field sorts on the displayed attribute.

_Default value:_ No sort order

### Attribute (path)

The 'drop-down' search field can be connected to an attribute of the grid entity, or to an attribute of an associated entity.

See [Search Field Properties](search-field-properties).
