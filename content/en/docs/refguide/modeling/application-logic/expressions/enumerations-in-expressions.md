---
title: "Enumerations in Expressions"
url: /refguide/enumerations-in-expressions/
weight: 170
---

## Introduction

Enumerations are referenced by `<modulename>.<enumerationname>.<enumerationvalue>`.

For example, you have a module called *OrderProcessing*, in which an enumeration *Status* is defined with two possible values: *started* and *completed*. 

To set the value of an attribute in a change list, object, or variable activity to *completed*, use the following input:

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

You can also use conditional statements to check whether two enumeration values are the same:

```java
if $Order/Status = OrderProcessing.Status.completed then 
  true 
else 
  false
```

## getCaption {#getCaption}

The `getCaption` function takes an enumeration value and returns the caption of this value. The *caption* is a translatable string and the result of this function depends on the current language.

### Input Parameters

As an input parameter you can use an enumeration value of any enumeration.

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The caption of the enumeration value in the current language. | String |

### Example

If you use the following input:

```java
getCaption($Customer/Grade)
```

The output can be:

```java
Gouden
```

## getKey {#getKey}

The `getKey` function takes an enumeration value and returns the key (called *Name* in Studio Pro) of this value. The key is the technical name for the enumeration value and is language independent. For more information, see [Enumerations](/refguide/enumerations/).

### Input Parameters

As an input parameter you can use an enumeration value of any enumeration.

### Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The key (name) of the enumeration value in the current language. | String |

### Example

If you use the following input:

```java
getKey($Customer/Grade)
```

The output can be:

```java
Golden
```

## Read More

* [Enumerations](/refguide/enumerations/)
