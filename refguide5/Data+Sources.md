---
title: "Data Sources"
parent: "Page+Concepts"
space: "Reference Guide 5"
---


Widgets that display information stored in entities require you to assign a method by which to attain the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data widgets](Data+Widgets) and [input widgets](Input+Widgets).

Most simple input widgets derive their content from their context. A text box will, for instance, only allow input for attributes of the target entity. The exceptions are those widgets that require an entire object or a list of objects to function. The contents for these widgets can be supplied by four distinct methods:

*   [Directly from the database](Database+Source)
*   [By association to an object already in the context](Association+Source)
*   [By microflow](Microflow+Source)
*   [By an object chosen from a grid or list view displayed in the same page](Listen+To+Grid+Source)

Which methods are available depend on the widget being used. An overview of relevant widgets and potentials data sources is shown below.

Widget                                                       | Database | Association* | Microflow | Listen to list widget
------------------------------------------------------------ | -------- | ------------ | --------- | ---------------------
[Data grid](Data+grid)                                       | x        | x            | x         |
[Template grid](Template+grid)                               | x        | x            | x         |
[List view](List+view)                                       | x        | x            | x         |
[Data view](Data+view)                                       | x        | x            | x         | x
[Reference selector](Reference+selector)                     |          | x            | x         |
[Reference set selector](Reference+set+selector)             |          | x            | x         |
[Input reference set selector](Input+reference+set+selector) |          | x            | x         |


The association data source is by definition only available when a widget is nested in an existing context, such as a data view.

The data source can also determine which features of the widget are enabled. For instance; only widgets with a database data source may contain a search bar, as the search bar relies on a database call to function.
