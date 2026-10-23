---
title: "Context Source"
url: /refguide/context-source/
weight: 30
---

## Introduction

The **Context** source is a data source of a data view. Data views with this data source get their object from the context, which can be one of two things:

* A surrounding data container such as a data view or list view – in this case, the **Entity (path)** property should follow an association 
* A page parameter – a page parameter contains an object that is passed to the page when opening it (either another page passing that parameter or a microflow passing an object)

## Properties

### Entity (Path)

The **Entity (path)** property specifies the entity that is shown in the data view. If you have a top-level data view, **Entity (path)** must be an entity and the page expects an object of this entity to be passed to it as a parameter when opened. 

If you have a nested data view, you can select one of the following:

* An entity that has an association with the entity of the surrounding data container, which should be a parent of this association.
* An entity of a page parameter.
* An entity that has an association with the entity of a page parameter, which should be a parent of this association. 

For more information on associations, see [Associations](/refguide/associations/). 

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/data-sources/context-source/context-source-example.png" alt="Context Source"   width="400"  class="no-border" >}}

## Read More

* [Data Containers](/refguide/data-widgets/)
* [Associations](/refguide/associations/)
