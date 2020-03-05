---
title: "Data Sources"
parent: "data-widgets"
tags: ["studio pro", "data source"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Widgets that display information stored in entities require you to assign a method by which to retrieve the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data widgets](data-widgets) and [input widgets](input-widgets). [Pluggable widgets](/apidocs-mxsdk/apidocs/pluggable-widgets) can also use data sources.

In this document, we describe data sources of data widgets. 

## 2 Data View

A data view supports the following data sources:

*   [Context](context-source) – the data view gets its object from the context:  either from a page parameter or a surrounding data container
*   [Microflow](microflow-source) – the data view object is determined by the result of calling the selected microflow. The microflow can take objects in the context as parameter and needs to return a single object.
*   [Nanoflow](nanoflow-source) – objects retrieved are determined by the result of calling the selected nanoflow. The nanoflow can take objects in the context as a parameter and needs to return a single object. 
*   [Listen to widget](listen-to-grid-source) – the data view object depends on the selection in a list widget (a data grid, template grid, or list view)

{{% alert type="info" %}}

The **Microflow** source is not supported in offline applications because it implies a call to the server.

{{% /alert %}}

## 3 List Widgets {#list-widgets}

A data grid, template grid, and list view are list widgets. Also some [pluggable widgets](/apidocs-mxsdk/apidocs/pluggable-widgets) may behave as list widgets and use data sources. Supported data sources are listed below:

*   [Database](database-source) – objects are retrieved from the database; database constraints can be used to limit which objects are shown. 
*   [XPath](xpath-source) – objects are retrieved from the database; an XPath constraint can be used to constrain which objects are shown.
*   [Microflow](microflow-source) – objects retrieved are determined by the result of calling the selected microflow. The microflow can take objects in the context as parameter and needs to return a list of objects.
*   [Nanoflow](nanoflow-source) – objects retrieved are determined by the result of calling the selected nanoflow. The nanoflow can take objects in the context as a parameter and needs to return a list of objects. Nanoflow data source is only available for data views and list views. 
*   [Association](association-source) – the objects are retrieved from memory by following an association from the object in the context. So, this data source is only available when a widget is nested in another data container. 

 The data source also determines which features of the widget are enabled. For example, only widgets with a database or XPath data source can contain a [search bar](search-bar).

{{% alert type="info" %}}

Database and nanoflow data sources are the only data sources supported offline. If a list widget has a database data source in an offline application, the data will come from the database that is situated on the device. This database can be synced with a [button](button-properties) widget for creating a new object.

{{% /alert %}}

## 4 Read More

* [Data Widgets](data-widgets)
