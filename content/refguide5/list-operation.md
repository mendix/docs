---
title: "List Operation"
parent: "list-activities"
---


List operations perform various actions on a list. See below for details on these actions.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Operation Types

A list operation action can execute any of the following types of operations.

### Binary

These binary operations have as an input a list and either another list or an object. The resulting type depends on the type of the operation. All lists and objects must relate to the same entity.

<table><thead><tr><th class="confluenceTh">Operation</th><th class="confluenceTh">Description</th><th class="confluenceTh">Result Type</th></tr></thead><tbody><tr><td class="confluenceTd">Union</td><td class="confluenceTd">The result is a combination of the elements of both parameters avoiding duplicates.</td><td class="confluenceTd">List</td></tr><tr><td class="confluenceTd">Intersect</td><td class="confluenceTd">The result is a list containing elements that appear in both parameters.</td><td class="confluenceTd">List</td></tr><tr><td class="confluenceTd">Subtract</td><td class="confluenceTd">The result is the first parameter with the element(s) of the second parameter removed.</td><td class="confluenceTd">List</td></tr><tr><td class="confluenceTd">Contains</td><td class="confluenceTd">Checks whether all elements of the second parameter are present in the first parameter.</td><td class="confluenceTd">Boolean</td></tr><tr><td class="confluenceTd">Equals</td><td class="confluenceTd">Checks whether the lists contain the same elements.</td><td class="confluenceTd">Boolean</td></tr></tbody></table>

### Sort

<table><thead><tr><th class="confluenceTh">Operation</th><th class="confluenceTh">Description</th><th class="confluenceTh">Result Type</th></tr></thead><tbody><tr><td class="confluenceTd">Sort</td><td class="confluenceTd">Allows you to sort a list based on a number of a attributes. The attributes are ordered to determine their priority while sorting. The input list remains in its original order while the sorted list is stored in the output variable.</td><td class="confluenceTd">List</td></tr></tbody></table>

### Attribute Inspections

These operations take a single list and an attribute as input. The resulting type depends on the type of the operation.

<table><thead><tr><th class="confluenceTh">Operation</th><th class="confluenceTh">Description</th><th class="confluenceTh">Result Type</th></tr></thead><tbody><tr><td class="confluenceTd">Find</td><td class="confluenceTd">Find the first object of which the attribute has the given value.</td><td class="confluenceTd">Object</td></tr><tr><td class="confluenceTd">Filter</td><td class="confluenceTd">Find all objects of which the attribute has the given value.</td><td class="confluenceTd">List</td></tr></tbody></table>

### Unary

These unary operations have a list as input and either an object or another list as a resulting type, depending on the operation.

<table><thead><tr><th class="confluenceTh">Operation</th><th class="confluenceTh">Description</th><th class="confluenceTh">Result Type</th></tr></thead><tbody><tr><td class="confluenceTd">Head</td><td class="confluenceTd">The result is the first element of the list, or empty if the parameter contains zero elements or was initialized as empty.</td><td class="confluenceTd">Object</td></tr><tr><td class="confluenceTd">Tail</td><td class="confluenceTd">The result is a list containing all elements of the parameter except the first, or an empty list if the parameter contains zero elements or was initialized as empty.</td><td class="confluenceTd">List</td></tr></tbody></table>

## Output Properties

### Variable name

The variable name defines the name of the resulting list, object or boolean. It can be used by all activities that follow this activity.
