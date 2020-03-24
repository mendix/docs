### Attribute (path)

The text that is entered into the search field is searched for in the given attribute. For each object in the grid, the attribute is inspected to see whether it matches the value that is being searched.

The attribute can be an attribute of the entity in the data grid but also an attribute of an associated entity (an attribute path). The path can follow any number of associations of type reference and optionally a reference set at the end. If you use a reference set all references will be checked for possible matches.

The table below shows the types of the attributes that are allowed in search fields.

| Search field | Allowed direct attributes | Allowed associated attributes |
| --- | --- | --- |
| Comparison | AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String | AutoNumber, Currency, Date, Decimal, Float, Integer, Long, String |
| Drop-down | Boolean, Enumeration | AutoNumber, Boolean (added in 5.5.0), Currency, Decimal, Enumeration, Float, Integer, Long, String |
