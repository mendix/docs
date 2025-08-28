---
title: "Access a Mendix Model Using Web API"
linktitle: "Mendix Model"
url: /apidocs-mxsdk/apidocs/web-extensibility-api-11/model-api/
---

## Introduction 

The Model Access API allow access to the Mendix model. This how-to provides guidance on using the Model Access API. It is split into the following sections:

* [Using the Model Access API](#using-api)
* [Reading the Units Info and Loading Units](#units-info-load)
* [Reading the Unit Content](#read)
* [Modifying the Unit Content](#modify)

## Using the Model Access API {#using-api}

The model is split in several components exposed via `studioPro.app.model` object. Currently supported components are:

* buildingBlocks
* domainModels
* enumerations
* pages
* snippets

You can include these components using syntax as shown below, which includes pages and domain models.

```ts
const { pages, domainModels } = studioPro.app.model;
```

## Reading the Units Info and Loading Units {#units-info-load}

A unit is a Mendix document (for example, a page or a domain model) containing elements. Each element is within a container element and may contain other elements. An element is part of a Mendix model and all elements together form the logic of the model. For more information see [Mendix Metamodel](/apidocs-mxsdk/mxsdk/mendix-metamodel/).

Each component, for example pages (`studioPro.app.model.pages`) exposes the units it is responsible for. You can only access all the content of a unit once you have loaded the unit info for that unit.

The unit info, described by the `UnitInfo` interface, contains the the following fields:

| Name | Description | Example value |
| --- | --- | --- |
| `$ID` | The unique id of the unit | `077d1338-a548-49a9-baee-c291e93d19af` |
| `$Type` | The type of the unit | `Pages$Page` |
| `moduleName` | (Optional) The name of the module containing the unit | `MyFirstModule` | 
| `name` | (Optional) The name of the unit | `ExamplePage` |

For example, you can retrieve all the units managed by the `domainModels` component using the following code:

```ts
const unitsInfo: Primitives.UnitInfo[] = await domainModels.getUnitsInfo()
```

A unit can be loaded by supplying a function, `fn` to `component.loadAll(fn)`. The function `fn` should return `true`  to load a specified unit.

{{% alert color="warning" %}}
Loading units is a resource intensive process. Only load units when you need them.
{{% /alert %}}

For example, the following snippet loads the `domainModel` for the module named `MyFirstModule`:

```ts
const [domainModel] = await domainModels.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule');
```

And this example snippet loads the page named `Home_Web` in the module named `MyFirstModule`:

```ts
const [page] = await pages.loadAll((info: Primitives.UnitInfo) => info.moduleName === 'MyFirstModule' && info.name === 'Home_Web')
```

## Reading the Unit Content {#read}

Elements within units can be accessed using the `get<ElementName>` helper methods.

For example, the following snippet will get the entity named `MyEntity` from the previously loaded `DomainModels` unit:

```ts
const entity: DomainModels.Entity = domainModel.getEntity("MyEntity");
```

## Modifying the Unit Content {#modify}

You can modify a Mendix model by leveraging the `add<ElementName>` helper methods.

{{% alert color="warning" %}}
Always invoke the `component.save(unit)` method after making changes to your unit. This method must be invoked for each modified unit, so changes to multiple units need to be saved separately.
{{% /alert %}}

The following snippet creates a new entity inside the previously loaded `DomainModels` unit:

```ts
const newEntity: DomainModels.Entity = await domainModel.addEntity({ name: "NewEntity", attributes: [{ name: "MyAttribute", type: "AutoNumber" }]});

newEntity.documentation = "New documentation";

await domainModels.save(domainModel);
```

## Conclusion

You now know how to interact with units and elements in the Mendix model.

## Extensibility Feedback

If you would like to provide us with some additional feedback you can complete a small [Survey](https://survey.alchemer.eu/s3/90801191/Extensibility-Feedback)

Any feedback is much appreciated.
