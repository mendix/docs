---
title: "Enumerations in Expressions"
url: /refguide7/enumerations-in-expressions/
---


Enumerations are referenced by <modulename>.<enumerationname>.<enumerationvalue>

Assume a module "OrderProcessing", in which an enumeration "Status" is defined with two possible values: "started" and "completed". To set the value of an attribute in a change action to "completed", use the following code:

```java
OrderProcessing.Status.completed
```

Conditional statements are also possible:

```java
if 4>3 then
  OrderProcessing.Status.completed
else
  OrderProcessing.Status.started
```

## getCaption

Takes an enumeration value and returns the caption of this value. The caption is a translatable string and the result of this function depends on the current language.

### Input parameters

*   an enumeration value
    Type: any enumeration

### Output

The caption of the enumeration value in the current language.
Type: String

```java
getCaption($NewEntity/TestEnum)
```

## getKey

Takes an enumeration value and returns the key (called Name in the Modeler) of this value. The key is the technical name for the enumeration value and is language independent. See also [Enumeration Values](/refguide7/enumeration-values/).

### Input parameters

*   an enumeration value
    Type: any enumeration

### Output

The key/name of the enumeration value
Type: String

```java
getKey($NewEntity/TestEnum)
```
