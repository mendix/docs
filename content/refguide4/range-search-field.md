---
title: "Range Search Field"
parent: "search-bar"
---
Given an entity that contains a range, this search field is used to find all entities whose range overlaps with the specified value.

Example: given an entity 'Festival' that has a 'Start' and an 'End' date, which Festivals take place at day X?

Datatypes supported by this search field are: Integer, Currency, DateTime, Float, AutoNumber, Long.

You can specify whether the range boundaries are inclusive or exclusive using the Lower- and Upper bound operator.

## Common Properties

### Caption

See [Search Field Properties](search-field-properties).

### Type

See [Search Field Properties](search-field-properties).

### Default value

See [Search Field Properties](search-field-properties).

## General Properties

### Lower Bound

This attribute (path) determines the lower bound of the range.

### Lower Bound Operator

Can be either 'Greater' or 'Greater or equal'

### Upper Bound

This attribute (path) determines the upper bound of the range.

### Upper Bound Operator

Can be either 'Smaller' or 'Smaller or equal'
