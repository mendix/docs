---
title: "Comparison Search Field"
parent: "search-bar"
---


## Common Properties

{{% snippet file="refguide/Search+Field+Caption+Property.md" %}}

{{% snippet file="refguide/Search+Field+Type+Property.md" %}}

{{% snippet file="refguide/Search+Field+Default+Value+Property.md" %}}

## General Properties

{{% snippet file="refguide/Search+Field+Attribute+Path+Property.md" %}}

{{% snippet file="refguide/Search+Field+Comparison+Property.md" %}}

### Date comparisons and the influence of the default value

It is possible to search on date attributes using equality. What happens with the time component belonging to the date is dependent on the default value of the comparison search field.

| Default value | Search query |   | Result example (input: August 4, 2100) |
| --- | --- | --- | --- |
| None | Search field is empty. Represents a 24 hour date range starting at midnight of the specified date. |   | Search between August 4, 0:00 - August 5, 0:00 |
| [%CurrentDateTime%] | Search field shows the current date. Represents a 24 hour date range starting at the _current time_. |   | Search between August 4, <current time> and August 5, <current time> |
| [%BeginOfCurrentDay%] | Search field shows the current date. Represents a 24 hour date range starting at midnight of the specified date. |   | Search between August 4, 0:00 - August 5, 0:00 |
