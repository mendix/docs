---
title: "Range Search Field"
parent: "search-bar"
---


Given an entity that contains a range, this search field is used to find all entities whose range overlaps with the specified value.

Example: given an entity 'Festival' that has a 'Start' and an 'End' date, which Festivals take place at day X?

Datatypes supported by this search field are: Integer, Currency, Decimal, DateTime, Float, AutoNumber, Long.

You can specify whether the range boundaries are inclusive or exclusive using the Lower- and Upper bound operator.

## Common Properties

### Caption

The caption is the text that is shown in front of the actual search field. This is a translatable text. See [Translatable Texts](translatable-texts).

### Type

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Normal</td><td class="confluenceTd">The search field is visible and editable by the end user.</td></tr><tr><td class="confluenceTd">Hidden</td><td class="confluenceTd">The search field is hidden and is only there to selectively display objects in the grid.</td></tr><tr><td class="confluenceTd">Read-only</td><td class="confluenceTd">The search field is visible but not editable by the end user.</td></tr></tbody></table>{{% alert type="success" %}}

A hidden search field is an easy way to selectively display the contents of a grid. For example, a grid showing cars and their colors can be limited to only showing red cars by adding a hidden search field on color with default value 'red'.

{{% /alert %}}

### Default value

The default value is the initial value for the search field. In the case of a normal search field, this value can then be edited by the end user. In the case of a hidden or read-only search field the value is fixed.

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
