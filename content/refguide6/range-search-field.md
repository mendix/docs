---
title: "Range Search Field"
parent: "search-bar"
---


Given an entity that contains a range, this search field is used to find all entities whose range overlaps with the specified value.

Example: given an entity 'Festival' that has a 'Start' and an 'End' date, which Festivals take place at day X?

Datatypes supported by this search field are: Integer, Currency, Decimal, DateTime, Float, AutoNumber, Long.

You can specify whether the range boundaries are inclusive or exclusive using the Lower- and Upper bound operator.

## Common Properties

{{% snippet file="refguide6/Search+Field+Caption+Property.md" %}}

{{% snippet file="refguide6/Search+Field+Type+Property.md" %}}

{{% snippet file="refguide6/Search+Field+Default+Value+Property.md" %}}

## General Properties

### Lower Bound

This attribute (path) determines the lower bound of the range.

### Lower Bound Operator

The lower bound operator determines whether the comparison with the lower bound is inclusive (>=) or not (>). It can be either 'Greater' or 'Greater or equal'.

_Default value_: Greater.

### Upper Bound

This attribute (path) determines the upper bound of the range.

### Upper Bound Operator

The upper bound operator determines whether the comparison with the upper bound is inclusive (<=) or not (<). It can be either 'Smaller' or 'Smaller or equal'.

_Default value_: Smaller
