---
title: "Understanding the Mendix Metamodel"
url: /apidocs-mxsdk/mxsdk/understanding-the-metamodel/
weight: 1
---

## 1 Units

If you are familiar with Studio Pro you know that a Mendix model is just a collection of documents (microflows, domain models, pages, layouts, modules, folders, etc.) organised in a tree and accessible through the App Explorer. In the SDK we refer to documents with the generic name `units`. Basically, any item in the App Explorer of Studio Pro is a `unit`.

Units come in two flavors:

* **Structural units** – These are the _nodes_ in the project tree and can be (only): the entire project (root), modules and folders. A structural unit mainly provides structure and contains very little information itself.
* **Model units** – These are the _leafs_ in the project tree: microflows, pages, etc. These can be edited in an editor of Studio Pro. Internally, a model unit is a collection of model objects which we call: _elements_.

## 2 Elements

Each model unit consists of a tree of elements. Examples of elements are: entities in a domain model, attributes of an entity, activities and arrows in a microflow, widgets in a page, etc.

Each element has an ID that's only internally used and a _type_, such as `Entity` or `Attribute`, etc. It's important to note that, in general, there is not always a 1-to-1 correspondence between things you see in Studio Pro and elements. We often need to use more elements than you'd see at first glance in Studio Pro, usually to be able to capture the variety of constructs which Mendix supports, and sometimes because it's technically more convenient.

As an example: an entity can have a generalization. If it has none, you see "(none)" in Studio Pro but in the Entity element this is expressed using an element of type `NoGeneralization`. If the entity has a generalization, then this is expressed through an element of type `Generalization` which holds a reference to the generalization entity. The images that ship with the reference documentation should guide you through these constructions.

### 2.1 Abstract Element Types

A lot of elements (or: element types) share features. For example: microflows and rules share a lot of features which are expressed on a common abstract type `MicroflowBase`. All abstract types are suffixed with `Base` and should never be created directly. However, they are useful (to know about) for analysis: for example, you can process micro flows and rules in mostly the same way.

## 3 Properties

Almost all elements have one or more properties, or rather: their values. The properties are determined by the element's type and the type of the values of a property are determined by the property. These typically show up as a editable values in the Properties pane/view. As before with elements, some properties will be rather technical in nature and (seemingly) do not map 1-to-1/clearly with anything shown in Studio Pro. For example the `Location` property of an entity denotes the position where the entity is drawn in Studio Pro.

### 3.1 References

References are a particular type of property. References can either be **by id** or **by name**. By-id references are used to point to elements in the _same_ model unit. By-name references are used to point to elements in _any_ model unit, by fully-qualified name.

## 4 Interfaces

When you open a model using the Model SDK, not the entire model is downloaded: models can be very large, and in general it's not necessary to "know" the entire model to be able to work with it - even analysis can typically be done on a unit-per-unit basis. So, to save on bandwidth and memory consumption, we initially only send back the _interfaces_ of all units. The interface of a unit consists of the part of the unit which we define to be _public_ and this is typically very small in comparison to the full unit contents. All pieces of information which can be referred to by _other_ model units will be public, such as names.

As an example, for a domain model the following things are public and therefore part of the unit interface:

* All entities, (cross-)associations
* The name, generalization and attributes of each entity
* The name and type information of each attribute
* The name of each (cross-)associations

All other details, such as documentation, validation rules, etc., are not available in the unit interface because these are of no interest to other model units. Using this information you can, for example, refer to an entity from a microflow activity in another unit with only the interface of the domain model unit in memory.

All element types have both an interface and a full form. In the JavaScriptDoc you can see easily the difference in information that is available in for example [the Entity interface](https://apidocs.rnd.mendix.com/modelsdk/latest/interfaces/domainmodels.ientity.html) and the [full Entity class](https://apidocs.rnd.mendix.com/modelsdk/latest/classes/domainmodels.entity.html). The unit interfaces exclusively contain the interface forms of public elements.

After the server has sent all unit interfaces, the Model SDK client reconstructs the project tree from the available information. However, before you can manipulate an (existing) unit/element or access information on it that's not available in its interface, you have to obtain the full unit/element. 
