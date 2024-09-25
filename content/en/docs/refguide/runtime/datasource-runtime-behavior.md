---
title: "Data Sources Retrieval"
url: /refguide/datasource-runtime/
weight: 60
---

## Introduction

When configuring a [list widget](/refguide/data-sources/#list-widgets), all data sources provide the same features. For example, widgets contained in a list widget can use attributes of the entity that is provided by the data source or if the list widget supports sorting and filtering it supports it for all data sources.

Likewise, when implementing a [pluggable widget](/apidocs-mxsdk/apidocs/pluggable-widgets/), you do not have to worry about the data source as all data sources work with the same [API](/apidocs-mxsdk/apidocs/pluggable-widgets-client-apis-list-values/).

Although you do not need to know about the internal mechanics of data sources, there are cases where it is helpful to know some details to be able to make a page more efficient or perform better. It will also help to get a better understanding of the behavior of a list widget. This document describes the different data flows which happen behind the scenes in the Mendix Runtime and what differences these make.

## Paging, Sorting, and Filtering {#paging-sorting-filtering}

All data sources support paging, sorting, and filtering but the way they are handled at runtime depends on the type.

### Database Source

For a [Database source](/refguide/database-source/), these operations are applied by the Runtime Server. This means the Mendix Client sends a request with all the paging, sorting and filtering information and the Runtime Server applies this information so that the requested list of objects (with paging, filter and sort order applied) is returned to the Mendix Client.

As these operations are applied by the Runtime Server, and only the requested objects are returned to the Mendix Client, this improves performance as the amount of data transferred over the network is minimal. When the user interacts with the widget and moves to a different page or changes the filter, Mendix Client issues a new request to the Runtime Server.

{{< figure src="/attachments/refguide/runtime/mendix-client/data-source-server-paged.png" class="no-border" >}}

### Microflow or Nanoflow Source

For a [Microflow](/refguide/microflow-source/) or [Nanoflow](/refguide/nanoflow-source/) source, these operations are applied by the Mendix Client, not the Runtime Server. This means the Microflow or Nanoflow data source returns all the objects, according to the modeled logic, after which paging, sorting, and filtering is applied by the Mendix Client.

This means that, even if a limited set of objects is requested by paging or a filter, the complete set of all objects returned by the Microflow or Nanoflow is transferred to the Mendix Client over the network. As all the data is then available on the Mendix Client, changes in paging, sorting or filtering acts on this list of objects without triggering the Microflow or Nanoflow to retrieve the data.

### Association Source

An [Association source](/refguide/association-source/) works in the same way as a Microflow or Nanoflow source, but now the list of objects contains those which are linked by the specified association.

{{< figure src="/attachments/refguide/runtime/mendix-client/data-source-client-paged.png" class="no-border" >}}

## Network Optimization Modes

As described in previous section, the type of data source impacts when a network request is triggered. The size of the response of this request depends on the number of objects returned but also on the optimization mode.

There are two [optimization modes](/refguide/data-sources/#optimization-mode) and, in Mendix version 10.8.0 and above, the one that applies to the data source can be seen in the data source advanced properties.

To show how these modes impact the performance and behavior of the widget, consider a [Data Grid 2](/appstore/modules/data-grid-2/) widget. The data grid is configured with a database data source of entity `OrderLine`. The data grid shows two columns containing the `Description` and the `Price` attribute, respectively.

### Optimize for Network Round Trips

In the **Network Round Trips** optimization mode, the Runtime Server returns all the attributes of the requested objects of the `OrderLine` entity. If the entity has additional attributes, such as a `Quantity` attribute, this would be included in the network response, although it is not displayed in the data grid. This increases the network load as more information is returned over the network. The higher the number of attributes, the more data is transferred over the network.

In this mode the objects received from the Runtime Server are registered in the [Mendix object cache](/refguide/mendix-client/#object-cache). If the Mendix Client needs an object, for example when running a client action, the object is retrieved from the cache and the Mendix Client does not issue a request to the Runtime Server.

Because the object is cached, data shown in widgets on the page will be updated immediately, without the need to reload that page.

In some scenarios the Mendix Client must have all the attributes of the object available. In this case **Network Round Trips** will be the default mode and cannot be changed.

### Optimize for Network Load {#optimize-for-network-load}

In the **Optimize for Network Load** optimization mode, the Runtime Server returns only the attributes used by the grid for the requested objects of the `OrderLine` entity. This limits the amount of data transferred over the network.

Objects which do not contain all the attributes will not be registered in the [Mendix object cache](/refguide/mendix-client/#object-cache). This means when the object is needed by the Mendix Client (in a client action, for example) an additional request will be issued to the Runtime Server to get the object with all its attributes.

Data shown in widgets on the page will not be updated until the data source is reloaded.
