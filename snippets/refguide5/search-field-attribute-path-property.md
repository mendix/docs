### Attribute (path)

The text that is entered into the search field is searched for in the given attribute. For each object in the grid, the attribute is inspected to see whether it matches the value that is being searched.

The attribute can be an attribute of the entity in the data grid but also an attribute of an associated entity (an attribute path). The path can follow any number of associations of type reference and optionally a reference set at the end. If you use a reference set all references will be checked for possible matches.

The table below shows the types of the attributes that are allowed in search fields.

<table><thead><tr><th class="confluenceTh">Search field</th><th class="confluenceTh">Allowed direct attributes</th><th class="confluenceTh">Allowed associated attributes</th></tr></thead><tbody><tr><td class="confluenceTd">Comparison</td><td class="confluenceTd">AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String</td><td class="confluenceTd">AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String</td></tr><tr><td class="confluenceTd">Drop-down</td><td class="confluenceTd">Boolean, Enumeration</td><td class="confluenceTd">AutoNumber, Boolean (added in 5.5.0), Currency, Decimal, Enumeration, Float, Integer, Long, String</td></tr></tbody></table>
