---
title: "Find Things in the Model"
parent: "manipulating-existing-models"
---

## 1 Introduction

The `model` object we got back from `workingCopy.model()` can be used to find and even manipulate units and elements. It provides three different means with which we can find units and elements.

## 2 The model.root Property

The `root` object refers to the `root` project node in the Project Explorer in the Mendix Modeler, and from here on you can walk through the project tree and into specific documents. The following line for examples finds the name of the first attribute of the `Customer` entity in the first module of your project.

```js
const model = workingCopy.model();
const domainModel = model.root.modules[0].domainModel;
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## 3 The model.allXXX() Functions

These functions return the complete collection of a specific type of units. Some unit types are abstract, for example `allMicroflowBases` returns all microflows and all rules. So the snippet above could also be expressed as:

```js
const domainModel = model.allDomainModels()[0];
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## 4 The model.findXXXByQualifiedName() Functions

For all referable concepts in a model (both units, such as a page, as well as elements, such as an entity) a `find` function is exposed through the `model` object. Given a _fully-qualified name_ (for example `"Customers.Customer.Name"`) it finds the element with that name, or it returns `null` if it doesn't exist.

```js
const customerEntity = model.findEntityByQualifiedName("Customers.Customer");
const attributeName = customerEntity.attributes[0].name;
```

Continue with [How to Load Units and Elements](loading-units-and-elements).
