---
title: "Data sources retrieval"
url: /refguide/datasource-runtime
tags: ["studio pro", "data source"]
weight: 60
---

## Introduction
When configuring a [list widget](/refguide/data-sources/#list-widgets) it doesn't matter which data source you select. 
All types of data sources provide the same features when configuring a list widget. For example, widgets contained by the list widget can use attributes of the entity that is provided by the data source. If the list widget supports sorting and filtering it supports it for all types of data sources.

Likewise, when implementing a [pluggable widget](/apidocs-mxsdk/apidocs/pluggable-widgets/), the type of data source configured is not a concern as all types of data sources work with the same [API](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values/).

Although the internal mechanics of data sources are hidden away, and you don't need be aware of them, there are cases
where it is helpful to know some details to be able to make a page more efficient or performant.
It will also help to get a better understanding of the behavior of a list widget. This page describes what happens behind the 
scenes with data flow in the Mendix platform and what the differences are at runtime.

## Paging, sorting and filtering {#paging-sorting-filtering}
All types of data sources support paging, sorting and filtering but the way they are handled at runtime depends on the type. 

For the [Database source](/refguide/database-source/) these operations are applied by the runtime.
This means the client sends a request with all the paging, sorting and filtering information and the
runtime server applies this information so that the requested objects (with paging, filter and sort order applied) are returned to the client.

As these operations are applied by the server and only the requested objects are returned to the client this is a 
performant approach as the amount of data transferred over the network is minimal. When the user interacts with the widget and moves to a different page or changes the filter, that issues a new request to the server.

{{< figure src="/attachments/refguide/runtime/mendix-client/data-source-server-paged.png" alt="server side paging, sorting and filtering">}}

For the [Microflow source](/refguide/microflow-source/) and the [Nanoflow source]() these operations are not applied by the server but by the client.
This means the Microflow or Nanoflow data source returns all the objects, according to the modeled out logic, after which paging, sorting and filtering is applied by the client. 

The consequence of this approach is that even if a limited set of objects is requested by paging or a filter, first the complete set of all objects is determined and transferred over the network.
As all the data is available on the client after the first request, changes in paging, sorting or filtering acts on the same set of objects without triggering the Microflow or Nanoflow.

A similar approach is applied for the [Association source](/refguide/association-source/), but now the full set of objects is based on objects which are linked by the specified association.  

{{< figure src="/attachments/refguide/runtime/mendix-client/data-source-client-paged.png" alt="server side paging, sorting and filtering">}}

## Network optimization modes
As described in previous section the type of data source impacts when a network request is triggered.
The size of the response of this request depends on the number of objects returned but also on the optimization mode. 

There are two [optimization modes](/refguide/data-sources/#optimization-mode) and the one that applies to the data source can be seen in the data source properties.

As an example how this modes impact the performance and behavior of the widget we use a Data grid 2 as an example.
The data grid is configured with a database datasource of entity `OrderLine`. The data grid is configured to have two columns which both show an attribute, the `Description` and the `Price` attribute.

### Optimize for network round trips
In this mode when objects are requested it returns the objects from the server and the objects include all the attributes of the `OrderLine` entity.
So if the entity would also have a `Price` attribute, it would be included in the network response, even though it is not displayed in the data grid.  This increases the network load as more information is returned over the network.
The higher the number of attributes, the more data is transferred over the network.

In this mode the object received from the runtime is registered in the [Mendix object cache](/refguide/mendix-client/#210-object-cache).
When the client needs the object, for example when running a client action, the object is retrieved from cache and won't issue a request to the server. 

When a widget uses objects from cache it is notified on changes made to the attributes on that object without the need to reload the data source.
E.g. when another widget is making changes to the `Price` attribute without committing this is immediately reflected in the grid widget.

In some scenarios it is required for the client to have all attributes of the object available. In that case this will be the default mode and cannot be changed. 

### Optimize for network load
In this mode the server returns the objects but the objects only includes the attributes used by the grid.
This will limit the amount of data transferred over the network.

Objects which don't contain all the attributes will not be registered in the [Mendix object cache](/refguide/mendix-client/#210-object-cache).
This means when the object is needed by the client, e.g. in a client action, an additional request will be issued to the server to get the object with all the attributes. 
Additionally, the data shown will not be updated until the data source is reloaded.
