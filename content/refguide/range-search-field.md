---
title: "Range Search Field"
parent: "search-bar"
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Given an entity that contains a range, this search field is used to find all entities whose range overlaps with the specified value.

Example: given an entity 'Festival' that has a 'Start' and an 'End' date, which Festivals take place at day X?

Data types supported by this search field are: Integer, Decimal, DateTime, AutoNumber, Long.

You can specify whether the range boundaries are inclusive or exclusive using the Lower- and Upper bound operator.

To add a range search field to your data grid, right-click within the search bar in your data grid and choose **Add search field > Range**.

## Common Properties

{{% snippet file="refguide/Search+Field+Caption+Property.md" %}}

{{% snippet file="refguide/Search+Field+Type+Property.md" %}}

{{% snippet file="refguide/Search+Field+Default+Value+Property.md" %}}

{{% snippet file="refguide/Search+Field+Custom+Date+Format+Property.md" %}}

{{% snippet file="refguide/Custom+Date+Format+Tokens.md" %}}

{{% snippet file="refguide/Search+Field+Placeholder+Property.md" %}}

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
