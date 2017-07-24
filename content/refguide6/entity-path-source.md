---
title: "Entity Path Source"
parent: "data-sources"
---
The entity (path) source is one of the data sources of a data view. The object either comes from the caller of the page or the surrounding context. In the case of an entity, the data view gets its object from the microflow or page that is "calling" the page. The caller needs to supply this object when opening the page. If the data view is nested inside another data widget, you can specify an entity path that starts in the context object and follows one or more associations.

## Properties

### Entity (Path)

The entity (path) property specifies the entity that will be shown in the data view. For a top-level data view it is simply an entity. In this case the caller of the page supplies the object that will be shown. A nested data view has an entity _path _that follows associations from the enclosing data view.
