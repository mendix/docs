---
title: "Find Things in the Model"
url: /apidocs-mxsdk/mxsdk/finding-things-in-the-model/
tags: ["marketplace", "app store module", "module"]
---

## 1 Introduction

The `model` object you get back from `workingCopy.model()` can be used to find and even manipulate units and elements. It provides three different means with which you can find units and elements.

## 2 The model.root Property

The `root` object refers to the `root` project node in the **App Explorer** in Studio Pro. From there, you can walk through the app tree and into specific documents.

For example, this snippet finds the name of the first attribute of the `Customer` entity in the first module of your app:

```js
const model = workingCopy.model();
const domainModel = model.root.modules[0].domainModel;
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## 3 The model.allXXX() Functions

These functions return the complete collection of a specific type of units. Some unit types are abstract (for example, `allMicroflowBases` returns all microflows and all rules).

So, the example snippet above could also be expressed this way:

```js
const domainModel = model.allDomainModels()[0];
const customerEntity = domainModel.entities.filter(entity => entity.name === "Customer")[0]

const attributeName = customerEntity.attributes[0].name;
```

## 4 The model.findXXXByQualifiedName() Functions

For all the referable concepts in a model (both units, such as a page, as well as elements, such as an entity), a `find` function is exposed through the `model` object. Given a fully-qualified name (for example, `"Customers.Customer.Name"`), it finds the element with that name, or it returns `null` if it doesn't exist.

```js
const customerEntity = model.findEntityByQualifiedName("Customers.Customer");
const attributeName = customerEntity.attributes[0].name;
```

For more information, see [How to Load Units and Elements](/apidocs-mxsdk/mxsdk/loading-units-and-elements/).

## 5 The model.allModules Function

Implement this snippet to fetch information on all the Marketplace modules used in your app:

```js
const model = workingCopy.model();
model.allModules()
	.filter(module => module.fromAppStore === true)
	.forEach(module =>
		console.log({
			name: module.name,
			appStoreVersion: module.appStoreVersion,
			appStoreGuid: module.appStoreGuid,
			appStoreVersionGuid: module.appStoreVersionGuid
		})
	);
```