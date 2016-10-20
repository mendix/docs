---
title: "Comparison Search Field"
parent: "Search+Bar"
space: "Reference Guide 5"
---


## Common Properties

### Caption

The caption is the text that is shown in front of the actual search field. This is a translatable text. See [Translatable Texts](Translatable+Texts).

### Type

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Normal</td><td class="confluenceTd">The search field is visible and editable by the end user.</td></tr><tr><td class="confluenceTd">Hidden</td><td class="confluenceTd">The search field is hidden and is only there to selectively display objects in the grid.</td></tr><tr><td class="confluenceTd">Read-only</td><td class="confluenceTd">The search field is visible but not editable by the end user.</td></tr></tbody></table><div class="alert alert-success">{% markdown %}

A hidden search field is an easy way to selectively display the contents of a grid. For example, a grid showing cars and their colors can be limited to only showing red cars by adding a hidden search field on color with default value 'red'.

{% endmarkdown %}</div>

### Default value

The default value is the initial value for the search field. In the case of a normal search field, this value can then be edited by the end user. In the case of a hidden or read-only search field the value is fixed.

## General Properties

### Attribute (path)

The text that is entered into the search field is searched for in the given attribute. For each object in the grid, the attribute is inspected to see whether it matches the value that is being searched.

The attribute can be an attribute of the entity in the data grid but also an attribute of an associated entity (an attribute path). The path can follow any number of associations of type reference and optionally a reference set at the end. If you use a reference set all references will be checked for possible matches.

The table below shows the types of the attributes that are allowed in search fields.

<table><thead><tr><th class="confluenceTh">Search field</th><th class="confluenceTh">Allowed direct attributes</th><th class="confluenceTh">Allowed associated attributes</th></tr></thead><tbody><tr><td class="confluenceTd">Comparison</td><td class="confluenceTd">AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String</td><td class="confluenceTd">AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String</td></tr><tr><td class="confluenceTd">Drop-down</td><td class="confluenceTd">Boolean, Enumeration</td><td class="confluenceTd">AutoNumber, Boolean (added in 5.5.0), Currency, Decimal, Enumeration, Float, Integer, Long, String</td></tr></tbody></table>

### Comparison

The value entered by the end user (or the default value in the case of hidden and read-only search fields) is compared to the value of the attribute of each of the objects in the grid. If the match succeeds, the object will be part of the search result. There are different ways in which the attribute value and the entered value can be compared. In the third column below you see the type of search field for which the comparison operator is allowed.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th><th class="confluenceTh">Search field types</th></tr></thead><tbody><tr><td class="confluenceTd">Contains</td><td class="confluenceTd">Does the attribute value contain the entered value?</td><td class="confluenceTd">Text (attribute must be of type String)</td></tr><tr><td class="confluenceTd">Starts with</td><td class="confluenceTd">Does the attribute value start with the entered value?</td><td class="confluenceTd">Text (attribute must be of type String)</td></tr><tr><td class="confluenceTd">Greater</td><td class="confluenceTd">Is the attribute value greater than the entered value?</td><td class="confluenceTd">Text, Date</td></tr><tr><td class="confluenceTd">Greater or equal</td><td class="confluenceTd">Is the attribute value greater than or equal to the entered value?</td><td class="confluenceTd">Text, Date</td></tr><tr><td class="confluenceTd">Equal</td><td class="confluenceTd">Is the attribute value the same as the entered value?</td><td class="confluenceTd">Text, Date, Drop-down</td></tr><tr><td class="confluenceTd">Not equal</td><td class="confluenceTd">Is the attribute value not the same as the entered value?</td><td class="confluenceTd">Text, Date, Drop-down</td></tr><tr><td class="confluenceTd">Smaller or equal</td><td class="confluenceTd">Is the attribute value smaller than or equal to the entered value?</td><td class="confluenceTd">Text, Date</td></tr><tr><td class="confluenceTd">Smaller</td><td class="confluenceTd">Is the attribute value smaller than the entered value?</td><td class="confluenceTd">Text, Date</td></tr></tbody></table>

_Default value:_ Equal

### Date comparisons and the influence of the default value

It is possible to search on date attributes using equality. What happens with the time component belonging to the date is dependent on the default value of the comparison search field.

<table><thead><tr><th class="confluenceTh">Default value</th><th class="confluenceTh">Search query</th><th colspan="1" class="confluenceTh">&nbsp;</th><th class="confluenceTh">Result example (input: August 4, 2100)</th></tr></thead><tbody><tr><td class="confluenceTd">None</td><td class="confluenceTd">Search field is empty. Represents a 24 hour date range starting at midnight of the specified date.</td><td colspan="1" class="confluenceTd">&nbsp;</td><td class="confluenceTd">Search between August 4, 0:00 - August 5, 0:00</td></tr><tr><td class="confluenceTd">[%CurrentDateTime%]</td><td class="confluenceTd">Search field shows the current date. Represents a 24 hour date range starting at the <em>current time</em>.</td><td colspan="1" class="confluenceTd">&nbsp;</td><td class="confluenceTd">Search between August 4, &lt;current time&gt; and August 5, &lt;current time&gt;</td></tr><tr><td class="confluenceTd">[%BeginOfCurrentDay%]</td><td class="confluenceTd">Search field shows the current date. Represents a 24 hour date range starting at midnight of the specified date.</td><td colspan="1" class="confluenceTd">&nbsp;</td><td class="confluenceTd">Search between August 4, 0:00 - August 5, 0:00</td></tr></tbody></table>
