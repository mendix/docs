---
title: "Search Field Properties"
parent: "search-bar"
space: "Reference Guide 4"
---
## Common Properties

### Caption

The caption is the text that is shown in front of the actual search field. This is a translatable text. See [Translatable Texts](translatable-texts).

### Type

| Value | Description |
| --- | --- |
| Normal | The search field is visible and editable by the end user. |
| Hidden | The search field is hidden and is only there to selectively display objects in the grid. |
| Read-only | The search field is visible but not editable by the end user. |

<div class="alert alert-success">{% markdown %}

A hidden search field is an easy way to selectively display the contents of a grid. For example, a grid showing cars and their colors can be limited to only showing red cars by adding a hidden search field on color with default value 'red'.

{% endmarkdown %}</div>

### Default value

The default value is the initial value for the search field. In the case of a normal search field, this value can then be edited by the end user. In the case of a hidden or read-only search field the value is fixed.

### Comparison

The value entered by the end user (or the default value in the case of hidden and read-only search fields) is compared to the value of the attribute of each of the objects in the grid. If the match succeeds, the object will be part of the search result. There are different ways in which the attribute value and the entered value can be compared. In the third column below you see the type of search field for which the comparison operator is allowed.

| Value | Description | Search field types |
| --- | --- | --- |
| Contains | Does the attribute value contain the entered value? | Text (attribute must be of type String) |
| Starts with | Does the attribute value start with the entered value? | Text (attribute must be of type String) |
| Greater | Is the attribute value greater than the entered value? | Text, Date |
| Greater or equal | Is the attribute value greater than or equal to the entered value? | Text, Date |
| Equal | Is the attribute value the same as the entered value? | Text, Date, Drop-down |
| Not equal | Is the attribute value not the same as the entered value? | Text, Date, Drop-down |
| Smaller or equal | Is the attribute value smaller than or equal to the entered value? | Text, Date |
| Smaller | Is the attribute value smaller than the entered value? | Text, Date |

_Default value:_ Equal

## Data Source Properties

### Attribute (path)

The text that is entered into the search field is searched for in the given attribute. For each object in the grid, the attribute is inspected to see whether it matches the value that is being searched.

The attribute can be an attribute of the entity in the data grid but also an attribute of an associated entity (an attribute path). The path can follow any number of associations of type reference and optionally a reference set at the end. If you use a reference set all references will be checked for possible matches.

The table below shows the types of the attributes that are allowed in search fields.

| Search field | Allowed direct attributes | Allowed associated attributes |
| --- | --- | --- |
| Comparison | AutoNumber, Currency, Date, Float, Integer, Long, String | AutoNumber, Currency, Date, Float, Integer, Long, String |
| Drop-down | Boolean, Enumeration | AutoNumber, Boolean (added in 4.9.0), Currency, Enumeration, Float, Integer, Long, String |
