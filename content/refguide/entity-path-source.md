---
title: "Context Source"
parent: "data-sources"
---

The context source is one of the data sources of a data view. Data views with this data source get their object from the context, which can be one of two things:

* A surrounding data container such as a data view or list view — in this case, the entity (path) property should be an entity path following the associations from the entity of the container
* The object that is passed to the page when opening it (for example, another page passing the selection of a grid or a microflow passing an object from the show page action)

## Properties

### Entity (Path)

The entity (path) property specifies the entity that will be shown in the data view. For a top-level data view it is simply an entity. In this case, the opener of the page supplies the object that will be shown. A nested data view has an entity _path_ that follows associations from the enclosing data container.
