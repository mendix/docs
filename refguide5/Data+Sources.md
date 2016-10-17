---
title: "Data Sources"
category: "refguide5"
space: "Reference Guide 5"
---


Widgets that display information stored in entities require you to assign a method by which to attain the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data widgets](Data+Widgets) and [input widgets](Input+Widgets).

Most simple input widgets derive their content from their context. A text box will, for instance, only allow input for attributes of the target entity. The exceptions are those widgets that require an entire object or a list of objects to function. The contents for these widgets can be supplied by four distinct methods:

*   [Directly from the database](Database+Source)
*   [By association to an object already in the context](Association+Source)
*   [By microflow](Microflow+Source)
*   [By an object chosen from a grid or list view displayed in the same page](Listen+To+Grid+Source)

Which methods are available depend on the widget being used. An overview of relevant widgets and potentials data sources is shown below.

<table><thead><tr><th class="confluenceTh">Widget</th><th class="confluenceTh">Database</th><th class="confluenceTh">Association*</th><th class="confluenceTh">Microflow</th><th class="confluenceTh">Listen to list widget</th></tr></thead><tbody><tr><td class="confluenceTd"><a href="Data+grid">Data grid</a></td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><a href="Template+grid">Template grid</a></td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><a href="List+view">List view</a></td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><a href="Data+view">Data view</a></td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td></tr><tr><td class="confluenceTd"><a href="Reference+selector">Reference selector</a></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><a href="Reference+set+selector">Reference set selector</a></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr><tr><td class="confluenceTd"><a href="Input+reference+set+selector">Input reference set selector</a></td><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">x</td><td class="confluenceTd">x</td><td class="confluenceTd">&nbsp;</td></tr></tbody></table>

*The association data source is by definition only available when a widget is nested in an existing context, such as a data view.

The data source can also determine which features of the widget are enabled. For instance; only widgets with a database data source may contain a search bar, as the search bar relies on a database call to function.