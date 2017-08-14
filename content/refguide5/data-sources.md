---
title: "Data Sources"
parent: "page-concepts"
---


Widgets that display information stored in entities require you to assign a method by which to attain the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data widgets](data-widgets) and [input widgets](input-widgets).

Most simple input widgets derive their content from their context. A text box will, for instance, only allow input for attributes of the target entity. The exceptions are those widgets that require an entire object or a list of objects to function. The contents for these widgets can be supplied by four distinct methods:

*   [Directly from the database](database-source)
*   [By association to an object already in the context](association-source)
*   [By microflow](microflow-source)
*   [By an object chosen from a grid or list view displayed in the same page](listen-to-grid-source)

Which methods are available depend on the widget being used. An overview of relevant widgets and potentials data sources is shown below.

Widget                                                       | Database | Association* | Microflow | Listen to list widget
------------------------------------------------------------ | -------- | ------------ | --------- | ---------------------
[Data grid](data-grid)                                       | x        | x            | x         |
[Template grid](template-grid)                               | x        | x            | x         |
[List view](list-view)                                       | x        | x            | x         |
[Data view](data-view)                                       | x        | x            | x         | x
[Reference selector](reference-selector)                     |          | x            | x         |
[Reference set selector](reference-set-selector)             |          | x            | x         |
[Input reference set selector](input-reference-set-selector) |          | x            | x         |


The association data source is by definition only available when a widget is nested in an existing context, such as a data view.

The data source can also determine which features of the widget are enabled. For instance; only widgets with a database data source may contain a search bar, as the search bar relies on a database call to function.
