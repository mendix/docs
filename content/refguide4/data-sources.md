---
title: "Data Sources"
parent: "form-concepts"
---
Widgets operating on entities can retrieve their data in different ways, for example from the database or by executing a microflow. The data source determines where the data comes from. The following are examples of widgets that have a data source: data view, data grid, template grid, list view, reference set selector, and image viewer.

Different widgets have different allowed data sources. For example, a data grid can be filled from the database, by a microflow or by following an association of the enclosing object (for non-persistent entities). See the documentation pages of the widgets to see the data source the widget supports.

The data source also determines which features of the widget are enabled. Having a sort bar or a search bar is only possible for the database data source option, because those features rely on XPath (and thus SQL in the end).
