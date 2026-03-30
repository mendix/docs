---
title: "XPath"
url: /refguide9/xpath/
weight: 90
description: "Describes how the XPath query language is used in Mendix by presenting functions and examples."
---

## Introduction

Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations.

XPath queries can be written both in Studio Pro, for example when you want to specify a [constraint](/refguide9/xpath-constraints/) on the data retrieved in a Retrieve microflow activity, and directly in code in the *.java* files of your Java actions. 

Examples of XPath queries are:

* `//Sales.Customer`
    Retrieve all customers.
* `//Sales.Customer[Name='Jansen']`
    Retrieve all customers with name 'Jansen'.
* `avg(//Sales.Order[IsPaid = true()]/TotalPrice)`
    Retrieve the average of the total prices of all paid orders.

{{% alert color="warning" %}}
Not all [XPath operators](/refguide9/xpath-operators/) are supported by Studio Pro.
{{% /alert %}}

{{% alert color="warning" %}}
The syntax of XPath queries differs between Studio Pro and Java environments. In Studio Pro, you do not write complete queries, only the constraints. The entity is implicitly determined by the context. So, instead of `//Sales.Customer[Name='Jansen']`, you only need to write `[Name='Jansen']` in the context of a customer. In Java, you do need to write whole queries, including the double slashes (`//`) and the entity name.
{{% /alert %}}

## XPath Elements

A common Mendix XPath query consists of several elements.

| A | B | C | D |
| --- | --- | --- | --- |
| Aggregate function (optional) | Entity to retrieve (required) | Constraint (optional) | Attribute to retrieve (optional) |
| `avg` | `//Sales.Order` | `[IsPaid = true()]` | `/TotalPrice` |

Element B describes the core of each query and consists of a description of the object being retrieved. This segment always starts with two forward slashes `//` and includes the name of the entity you wish to access preceded by the module containing the entity separated by a period. For example, `//Sales.Order` would return all objects of entity `Order` in the module `Sales`.

Element C of a query is optional and contains one or more constraints to restrict the data being retrieved.

Consider the following query:

```java
//Sales.Customer[Name='Jansen']
```

The constraint is clearly visible between brackets and restricts the objects retrieved to those for which the attribute `Name` equals `Jansen`. Objects with any other name than Jansen are excluded from the list.
The number of possible constraints on a single query is unlimited. For more information on how to add and manipulate these constraints, see [XPath Constraints](/refguide9/xpath-constraints/).

Element D of a query is optional and specifies an attribute of the retrieved entity. This option is rarely used in Studio Pro itself as all data is stored in objects, making it cumbersome and needlessly complicated to deal with a list of single attribute. However, various Java actions have use of such lists. Also, this functionality can be used in conjunction with Part A to create aggregates of certain attributes easily.

Element A of a query is optional and specifies an aggregation. Element A can be one of the following functions: [avg](/refguide9/xpath-avg/), [count](/refguide9/xpath-count/), [max](/refguide9/xpath-max/), [min](/refguide9/xpath-min/) and [sum](/refguide9/xpath-sum/). With the exception of [count](/refguide9/xpath-count/), each of these functions requires that a particular attribute is specified in element D. Element A is for use in Java code only.

## Tokens

For details, see [XPath Tokens](/refguide9/xpath-tokens/).

## Operators

For details, see [XPath Operators](/refguide9/xpath-operators/).

## Functions

There are two function types - [XPath aggregate functions](/refguide9/xpath-aggregate-functions/) and [XPath constraint functions](/refguide9/xpath-constraint-functions/). XPath aggregate functions are for use in Java code only and must contain full queries as their arguments. XPath constraint functions can be used both in Java code and in Studio Pro. In Studio Pro, you do not write complete queries, only the constraints. 

See below some frequently used XPath functions:

* [XPath aggregate functions](/refguide9/xpath-aggregate-functions/):
    * [avg](/refguide9/xpath-avg/)
    * [count](/refguide9/xpath-count/)
    * [max](/refguide9/xpath-max/)
    * [min](/refguide9/xpath-min/)
    * [sum](/refguide9/xpath-sum/)
* [XPath constraint functions](/refguide9/xpath-constraint-functions/):
    * [contains](/refguide9/xpath-contains/)
    * [starts-with](/refguide9/xpath-starts-with/)
    * [ends-with](/refguide9/xpath-ends-with/)
    * [not](/refguide9/xpath-not/)
    * [true](/refguide9/xpath-true/)
    * [false](/refguide9/xpath-false/)
    
## Example

**How to find the right path to XPath**

{{% alert color="info" %}}
This video was done with [Studio Pro 8](/refguide8/), but the concepts remain applicable.
{{% /alert %}}

{{< youtube sdabUY-w4ZU >}}

## Read More

* [Filtering Data on an Overview Page Using XPath](/refguide9/filtering-data-on-an-overview-page/)
* [Defining Access Rules Using XPath](/refguide9/define-access-rules-using-xpath/)
