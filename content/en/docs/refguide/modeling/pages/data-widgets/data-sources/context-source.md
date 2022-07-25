---
title: "Context Source"
url: /refguide/context-source/
tags: ["studio pro", "context", "data source"]
weight: 30
---

## 1 Introduction

The **Context** source is a data source of a data view. Data views with this data source get their object from the context, which can be one of two things:

* A surrounding data container such as a data view or list view – in this case, the **Entity (path)** property should follow an association 
* The page parameter – the page parameter will contain the object that is passed to the page when opening it (either another page passing the parameter or a microflow passing an object)

## 2 Properties

### 2.1 Entity (Path)

The **Entity (path)** property specifies the entity that will be shown in the data view. If you have a top-level data view, **Entity (path)** is an entity and the page will expect the object or objects of this entity to be passed to it when opened. 

If you have a nested data view, you can select an entity that has associations with the entity of a surrounding data container, and the entity of the surrounding data container should be a parent of this association. For more information on associations, see [Associations](/refguide/associations/). 

{{< figure src="/attachments/refguide/modeling/pages/data-widgets/data-sources/context-source/context-source-example.png" alt="Context Source"   width="400"  >}}

## 3 Read More

* [Data Containers](/refguide/data-widgets/)
* [Associations](/refguide/associations/)