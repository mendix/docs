---
title: "Aggregate List"
category: "refguide5"
space: "Reference Guide 5"
---


Aggregate List can be used to calculate aggregated values such as the maximum, minimum, sum, average and total amount of objects over a list of objects.

<div class="alert alert-info">{% markdown %}

See [Microflow Element Common Properties](Microflow+Element+Common+Properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{% endmarkdown %}</div>

## Input Properties

### List

The list to compute an aggregate over.

## Action Properties

### Function

Aggregate function defines which type of aggregation is applied.

<table><thead><tr><th class="confluenceTh">Value</th><th class="confluenceTh">Description</th></tr></thead><tbody><tr><td class="confluenceTd">Sum</td><td class="confluenceTd">The sum of all values of an attribute from the list of objects.</td></tr><tr><td class="confluenceTd">Average</td><td class="confluenceTd">The average of all values of an attribute from the list of objects.</td></tr><tr><td class="confluenceTd">Count</td><td class="confluenceTd">The total amount of objects in the list.</td></tr><tr><td class="confluenceTd">Minimum</td><td class="confluenceTd">The minimum of all values of an attribute from the list of objects.</td></tr><tr><td class="confluenceTd">Maximum</td><td class="confluenceTd">The maximum of all values of an attribute from the list of objects.</td></tr></tbody></table>

### Attribute

Attribute defines which attribute of the objects in the list is used to aggregate over. This must be a numeric attribute (Long, Integer, Float, Currency or Decimal).

## Output

### Variable name

The name of the (numeric) variable in which the result of the aggregation is stored.