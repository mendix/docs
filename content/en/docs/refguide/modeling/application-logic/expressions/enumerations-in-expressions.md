---
title: "Enumerations in Expressions"
url: /refguide/enumerations-in-expressions/
weight: 170
tags: ["studio pro", "expression", "enumeration", "expressions"]
---

## 1 Introduction

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

## 2 getCaption

The `getCaption` function takes an enumeration value and returns the caption of this value. The *caption* is a translatable string and the result of this function depends on the current language.

### 2.1 Input Parameters

As an input parameter you can use an enumeration value of any enumeration.

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The caption of the enumeration value in the current language. | String |

### 2.3 Example

If you use the following input:

```java
getCaption($Customer/Grade)
```

The output can be:

```java
Gouden
```

## 3 getKey

The `getKey` function takes an enumeration value and returns the key (called *Name* in Studio Pro) of this value. The key is the technical name for the enumeration value and is language independent. For more information, see [Enumerations](/refguide/enumerations/).

### 3.1 Input Parameters

As an input parameter you can use an enumeration value of any enumeration.

### 3.2 Output

The output is described in the table below:

| Value                                                        | Type   |
| ------------------------------------------------------------ | ------ |
| The key (name) of the enumeration value in the current language. | String |

### 3.3 Example

If you use the following input:

```java
getKey($Customer/Grade)
```

The output can be:

```java
Golden
```

## 4 Read More

* [Enumerations](/refguide/enumerations/)
