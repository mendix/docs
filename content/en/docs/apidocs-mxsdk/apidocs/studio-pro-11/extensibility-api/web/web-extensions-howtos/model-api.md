---
title: "Access a Mendix Model Using Web API"
linktitle: "Mendix Model"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/
description: "Describes how to use the Model Access API to access and modify the Mendix model through web extensions."
---

## Introduction

This document describes how to use the Model Access API to access the Mendix model.

## Using the Model Access API {#using-api}

The model is split into several components exposed through the `studioPro.app.model` object. Currently supported components are:

* buildingBlocks
* domainModels
* enumerations
* pages
* snippets

You can include these components using the syntax shown below, which includes pages and domain models.

In the following example, the `studioPro` object is obtained by calling the factory function `getStudioProApi`.

```ts
const studioPro = getStudioProApi(componentContext);
const { pages, domainModels } = studioPro.app.model;
```

## Reading the Units Info and Loading Units {#units-info-load}

A unit is a Mendix document (for example, a page or a domain model) that contains elements. Each element resides within a container element and can itself contain other elements. Together, these elements form the logic of a Mendix model. For more information, see [Mendix Metamodel](/apidocs-mxsdk/mxsdk/mendix-metamodel/).

Each component (for example, pages at `studioPro.app.model.pages`) exposes the units it manages. You can only access all the content of a unit after you load the unit info for that unit.

The unit info, described by the `UnitInfo` interface, contains the following fields:

| Name | Description | Example Value |
| --- | --- | --- |
| `$ID` | The unique ID of the unit | `077d1338-a548-49a9-baee-c291e93d19af` |
| `$Type` | The type of the unit | `Pages$Page` |
| `moduleName` | (Optional) The name of the module that contains the unit | `MyFirstModule` | 
| `name` | (Optional) The name of the unit | `ExamplePage` |

For example, you can retrieve all the units managed by the `domainModels` component with the following code:

```ts
const unitsInfo: Primitives.UnitInfo[] = await domainModels.getUnitsInfo()
```

You can load a unit by supplying a function (`fn`) to `component.loadAll(fn)`. The function `fn` should return `true` to load a specified unit.

{{% alert color="warning" %}}
Loading units is a resource intensive process. Only load units when you need them.
{{% /alert %}}

### Examples

The following code loads the `domainModel` for the module named `MyFirstModule`:

```ts
const [domainModel] = await domainModels.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule');
```

This snippet loads the page `Home_Web` in the module `MyFirstModule`:

```ts
const [page] = await pages.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule' && info.name === 'Home_Web')
```

## Reading the Unit Content {#read}

You can access elements within units using the `get<ElementName>` helper methods.

For example, this snippet gets the entity named `MyEntity` from the previously loaded `DomainModels` unit:

```ts
const entity: DomainModels.Entity = domainModel.getEntity("MyEntity");
```

## Modifying the Unit Content {#modify}

You can modify a Mendix model using the `add<ElementName>` helper methods.

{{% alert color="warning" %}}
Always call the `component.save(unit)` method after making changes to your unit. You must call this method for each modified unit, so you need to save changes to multiple units separately.
{{% /alert %}}

This snippet creates a new entity inside the previously loaded `DomainModels` unit:

```ts
const newEntity: DomainModels.Entity = await domainModel.addEntity({ name: "NewEntity", attributes: [{ name: "MyAttribute", type: "AutoNumber" }]});

newEntity.documentation = "New documentation";

await domainModels.save(domainModel);
```

## Extensibility Feedback

If you would like to provide additional feedback, you can complete a small [survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback).

Any feedback is much appreciated.
