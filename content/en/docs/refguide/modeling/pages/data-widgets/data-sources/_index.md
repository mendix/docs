---
title: "Data Sources"
url: /refguide/data-sources/
weight: 40
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Widgets that display information stored in entities require you to assign a method by which to retrieve the relevant data. Such methods are collectively known as data sources. Widgets that require a data source include all [data containers](/refguide/data-widgets/) and [input elements](/refguide/input-widgets/). [Pluggable widgets](/apidocs-mxsdk/apidocs/pluggable-widgets/) can also use data sources.

This document describes data sources of data containers. 

## Data View

A data view supports the following data sources:

* [Context](/refguide/context-source/) – the data view gets its object from the context: either from a page parameter or a surrounding data container.
* [Microflow](/refguide/microflow-source/) – the data view object is determined by the result of calling the selected microflow. The microflow can take objects in the context as parameter and needs to return a single object.
* [Nanoflow](/refguide/nanoflow-source/) – objects retrieved are determined by the result of calling the selected nanoflow. The nanoflow can take objects in the context as a parameter and needs to return a single object. 
* [Listen to widget](/refguide/listen-to-grid-source/) – the data view object depends on the selection in a list widget (a data grid, template grid, or list view).

{{% alert color="info" %}}
The **Microflow** source is not supported in offline applications because it implies a call to the server.
{{% /alert %}}

## List Widgets {#list-widgets}

### Introduction

Data grids, template grids, and list views are list widgets. Also, some [pluggable widgets](/apidocs-mxsdk/apidocs/pluggable-widgets/) may behave as list widgets and use data sources. Supported data sources are listed below:

* [Database](/refguide/database-source/) – objects are retrieved from the database; database constraints can be used to limit which objects are shown. 
* [XPath](/refguide/xpath-source/) – objects are retrieved from the database; an XPath constraint can be used to constrain which objects are shown.
{{% alert color="info" %}}
From Mendix version 10.5, most widgets do not have a separate XPath source, you can apply XPath constraints to the **Database** source.
{{% /alert %}}
* [Microflow](/refguide/microflow-source/) – objects retrieved are determined by the result of calling the selected microflow. The microflow can take objects in the context as parameter and needs to return a list of objects.
* [Nanoflow](/refguide/nanoflow-source/) – objects retrieved are determined by the result of calling the selected nanoflow. The nanoflow can take objects in the context as a parameter and needs to return a list of objects. Nanoflow data source is only available for data views and list views. 
* [Association](/refguide/association-source/) – the objects are retrieved from memory by following an association from the object in the context. Thus, this data source is only available when a widget is nested in another data container. 

The data source also determines which features of the widget are enabled. For example, only widgets with a database or XPath data source can contain a [search bar](/refguide/search-bar/).

{{% alert color="info" %}}
Database and nanoflow data sources are the only data sources supported offline. If a list widget has a database data source in an offline application, the data will come from the database that is situated on the device. This database can be synced with a [button](/refguide/button-properties/) widget for creating a new object.
{{% /alert %}}

### Network Optimization Mode {#optimization-mode}

{{% alert color="info" %}}
The **Advanced** tab and **Optimization mode** properties are available in Mendix version 10.8.0 and above.
{{% /alert %}}

At runtime, the client will retrieve the data which is configured in Studio Pro. The data can be retrieved in two possible modes depending on how the page is modeled: [optimize for network round trips](#optimize-for-network-round-trips) or [optimize for network load](#optimize-for-network-load).

You can see which of the modes is used in the **Advanced** tab of the data source properties.

If **Network load** is the default, you can change this to **Network round trips**. If **Optimize for** defaults to **Network round trips** then this is required by the client and cannot be changed.

The optimization mode cannot be changed for [data grid](/refguide/data-grid/), [template grid](/refguide/template-grid/), and [list view](/refguide/list-view/) widgets. 

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/data-sources/data-source-advanced.png" alt="data source advanced tabpage" class="no-border" >}}

#### Optimize for Network Round Trips {#optimize-for-network-round-trips}

In this mode, all the attributes of the data source entity are returned to the Mendix Client, even if not all these attributes are shown by the widget.

The advantage of this mode is that when a [client action](/refguide/on-click-event/#actions) is triggered, an additional request to the Runtime Server can be prevented. 

#### Optimize for Network Load {#optimize-for-network-load}

In this mode, only the attributes shown by the list widget are returned to the Mendix Client. This reduces the amount of data transferred over the network.

This means that when a [client action](/refguide/on-click-event/#actions) is triggered, an additional request to the Mendix Runtime might be necessary.

## Read More

* [Data Containers](/refguide/data-widgets/)
* [Data Sources Retrieval](/refguide/datasource-runtime/) 
