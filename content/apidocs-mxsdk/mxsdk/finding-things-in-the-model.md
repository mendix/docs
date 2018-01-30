---
title: "Finding Things in the Model"
parent: "manipulating-existing-models"
---
The `model` object we got back from `workingCopy.model()` can be used to find and even manipulate units and elements. It provides three different means with which we can find units and elements.

## The model.root property

The `root` object refers to the `root` project node in the Project Explorer in the Mendix Modeler, and from here on you can walk through the project tree and into specific documents. The following line for examples finds the name of the first attribute of the `Customer` entity in the first module of your project.

```js
var attrName = model.root
	.modules[0]
	.domainModel
	.entities.filter(entity => entity.name === "Customer")[0]
	.attributes[0].name;
```

## The model.allXXX() functions

These functions return the complete collection of a specific type of units. Some unit types are abstract, for example `allMicroflowBases` returns all microflows and all rules. So the snippet above could also be expressed as:

```js
var attrName = model.allDomainModels()[0]
	.entities.filter(entity => entity.name === "Customer")[0]
	.attributes[0].name;
```

## The model.findXXXByQualifiedName() functions

For all referable concepts in a model (both units, such as a page, as well as elements, such as an entity) a `find` function is exposed through the `model` object. Given a _fully-qualified name_ (for example `"Customers.Customer.Name"`) it finds the element with that name, or it returns `null` if it doesn't exist.

```js
var attrName = model
	.findEntityByQualifiedName("Customers.Customer")
	.attributes[0].name;
```

Continue the learning path with [Loading units and elements](loading-units-and-elements).
