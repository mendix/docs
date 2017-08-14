---
title: "Create Variable"
parent: "variable-activities"
---
With the create-variable action you can create a variable of type Boolean, DateTime, Enumeration, Float/Currency, Integer/Long or String.

{{% alert type="info" %}}

See [Microflow Element Common Properties](microflow-element-common-properties) for properties that all activities share (e.g. caption). This page only describes the properties specific to the action.

{{% /alert %}}

## Action Properties

### Data type

The data type defines what kind of data can be stored in the variable.

| Option | Description |
| --- | --- |
| Boolean | True or False |
| Enumeration | One out of a set values that you've predefined in your model, or empty |
| Float/Currency | A positive or negative number, eventually with decimal places, or zero |
| Integer/Long | A whole number that can be positive (maximum 2<sup>63</sup>-1), negative (minimum -2<sup>63</sup>), or zero |
| String | A set of characters. It can among others contain letters, spaces and/or numbers |

### Initial value

Initial value defines the value where the primitive variable will start with. The value needs to be entered using [microflow expressions](microflow-expressions). The microflow expression should result in the type of data that corresponds with the one of the property data type.

## Output Properties

### Variable name

Variable name defines the name of the resulting primitive variable. It can be used by all activities that follow-up this activity.
