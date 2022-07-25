---
title: "Data Sources"
url: /refguide7/data-sources/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---


Widgets that display information stored in entities require you to assign a method by which to attain the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data widgets](/refguide7/data-widgets/) and [input widgets](/refguide7/input-widgets/).

Most simple input widgets derive their content from their context. A text box will, for instance, only allow input for attributes of the target entity. The exceptions are those widgets that require an entire object or a list of objects to function. Below the available data sources are described per widget type.

## Data View

The data view supports the following data sources:

*   [Context](/refguide7/entity-path-source/): in the case of an entity, the data view gets its object from the microflow or page that is opening the page. The context needs to supply this object when opening the page. If the data view is nested inside another data widget, you can specify an entity path that starts in the context object and follows one or more associations.
*   [Microflow](/refguide7/microflow-source/): the data view object is determined by the result of calling the specified microflow. The microflow can take objects in the context as parameter and needs to return a single object.
*   [Listen to widget](/refguide7/listen-to-grid-source/): the data view object depends on the selection in a list widget. Each time the selection changes, the data view will show that selected object.

{{% alert color="info" %}}

The microflow source is not supported in offline applications because it implies a call to the server.

{{% /alert %}}

## List Widgets (data grid, template grid, list view)

List widgets support the data sources listed below. The data source also determines which features of the widget are enabled. For instance, only widgets with a database or XPath data source may contain a search bar, as the search bar relies on a database call to function.

*   [Database](/refguide7/database-source/): the objects in the list are retrieved from the database. Constraints can be used to limit which objects are shown. 
*   [XPath](/refguide7/xpath-source/): the objects in the list are retrieved from the database and XPath can be used to constrain which objects are shown.
*   [Microflow](/refguide7/microflow-source/): the objects in the list are determined by the result of calling the specified microflow. The microflow can take objects in the context as parameter and needs to return a list of objects.
*   [Association](/refguide7/association-source/): the objects are retrieved by following an association from the object in the context. As such this data source is only available when the when a widget is nested in an existing context, such as a data view. 

{{% alert color="info" %}}

The database source is the only data source that is also supported offline. If a list widget has a database data source in an offline application, the data will come from the database that is situated on the device. This database can be synced with the [create button](/refguide7/new-button/).

{{% /alert %}}
