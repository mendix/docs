---
title: "XPath"
category: "Modeler"
---


Mendix XPath is one of the Mendix query languages designed to retrieve data. XPath uses path expressions to select data of Mendix objects and their attributes or associations.

XPath queries can be written both in the Modeler, for example when you want to specify a constraint on the data retrieved in a Retrieve microflow activity, and directly in code in the .java files of you Java actions. Note that not all operators are supported by the Modeler, and that the syntax of your query may differ between the Modeler and Java environments.

Examples of XPath queries are:

*   `//Sales.Customer`
    Retrieve all customers.
*   `//Sales.Customer[Name='Jansen']`
    Retrieve all customers with name 'Jansen'.
*   `avg(//Sales.Order[IsPaid = true()]/TotalPrice)`
    Retrieve the average of the total prices of all paid orders.

{{% alert type="warning" %}}

In the Modeler you do not write complete queries but only the constraints. The entity is implicitly determined by the context. So, instead of `//Sales.Customer[Name='Jansen']` you only write `[Name='Jansen']` in the context of a customer. In Java you do write whole queries including the double slashes and the entity name.

{{% /alert %}}

A common Mendix XPath query consists of a several elements.

| A | B | C | D |
| --- | --- | --- | --- |
| Aggregate function (optional) | Entity to retrieve (required) | Constraint (optional) | Attribute to retrieve (optional) |
| avg | //Sales.Order | [IsPaid = true()] | /TotalPrice |

Element B describes the core of each query and consists of a description of the object being retrieved. This segment always starts with two forward slashes '//' and includes the name of the entity you wish to access preceded by the module containing the entity separated by a period. E.g. //Sales.Customer would return all objects of entity 'Customer' in the module 'Sales'.

Element C of a query is optional and contains one or more constraints to restrict the data being retrieved.

Consider the following query:

`//Sales.Customer[Name='Jansen']`

The constraint is clearly visible between brackets and restricts the objects retrieved to those for which the attribute 'Name' equals 'Jansen'. Objects with any other name than Jansen are excluded from the list.
The number of possible constraints on a single query is unlimited. For more information on how to add and manipulate these constraints see [this page](xpath-constraints).

Element D of a query is optional and specifies an attribute of the retrieved entity. This option is rarely used in the modeler itself as all data is stored in objects, making it cumbersome and needlessly complicated to deal with a list of single attribute. However, various Java actions have use of such lists. Also, this functionality can be used in conjunction with Part A to create aggregates of certain variables easily.

Element A of a query is optional and specifies an aggregation. Element A can be one of the following functions: [avg](xpath-avg), [count](xpath-count), [max](xpath-max), [min](xpath-min) and [sum](xpath-sum). With the exception of 'count', each of these functions require that a particular attribute is specified in element D.

The exception to these basic guidelines is the ID query. See [this page](xpath-id) for more information.

## [Tokens](xpath-tokens)

## [Operators](xpath-operators)

## Functions

The following XPath functions are available:

[XPath functions](xpath-query-functions):

*   [avg](xpath-avg)
*   [count](xpath-count)
*   [max](xpath-max)
*   [min](xpath-min)
*   [sum](xpath-sum)

[Constraint functions](xpath-constraint-functions):

*   [contains](xpath-contains)
*   [start-with](xpath-starts-with)
*   [ends-with](xpath-ends-with)
*   [not](xpath-not)
*   [true](xpath-true)
*   [false](xpath-false)
