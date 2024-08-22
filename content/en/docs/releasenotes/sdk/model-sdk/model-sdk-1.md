---
title: "1"
url: /releasenotes/sdk/model-sdk-1/
weight: 100
---

## 1.2.0

| Story # | Impact | Description |
| --- | --- | --- |
| 619692 | Low | Added/triggered TypeDoc for `create` and `createIn` methods. Also fixed incorrect behavior for `create` method of `DatabaseConstraint` from 6.1.0 onwards. |
| 623947 | Low | Added support for mendix 6.2.0. |

## 1.1.1

| Story # | Impact | Description |
| --- | --- | --- |
| 615031, 610152 | Low | Fixed issue where the SDK would have very high CPU usage and throw timeouts for a reasonable amount of requests. |
| 617263 | Low | The File API calls are accessible for working-copy members now. |
| 610152 | Low | Improved parsing of model elements in the SDK for better performance. |
| 614997 | None | Fixed internal-only test meta model, used for unit tests. |

## 1.1.0

| Story # | Impact | Description |
| --- | --- | --- |
| 600896 | Low | Various meta model updates for Mendix 6.1.0 - see below. |

The following changes are made per 600896 and pertain exclusively to models made with Mendix 6.1.0 and above:

* Introduced a new modeling construct `SelectorDatabaseSource` for pages.
* `DatabaseConstraint` cannot be created directly in a `DatabaseSourceBase` instance anymore. Instead, use the `create` method of `DatabaseConstraint` and assign the instance explicitly to a suitable container, as in, `databaseConstraints` of either an instance of (a sub type of) `DatabaseSourceBase` or `SelectorDatabaseSource`.
* These properties have been deleted, so should not be accessed on models with Mendix 6.1.0 and above:
    * `systemEntityType` of both `MsdMicroflow` and `MsdMicroflowParameter`,
    * `parameterTypeName` of `ExportMapping`, and
    * `allowSimpleMappingInheritance` of `OperationInfo`.

## 1.0.2

This release replaces all previous SDK versions as our API endpoints have been changed and finalized.
Please run `npm update mendixmodelsdk --save`.

| Story # | Impact | Description |
| --- | --- | --- |
| 585226 | High | All Model API infrastructure has been moved to Europe and the default endpoint of the API is updated. |
| 602450 | Low | SDK now throttles requests to avoid spamming our servers. This might degrade performance a little. |
| 606647 | None | SDK now handles EPIPE errors coming from AWS correctly. |

## 1.0.0

| Story # | Impact | Description |
| --- | --- | --- |
| 561960 | High | All constructors to create new model elements are removed, instead factory methods should be used. The migration is straightforward: `var entity = new domainmodels.Entity()` becomes: `var entity = domainmodels.Entity.create(model)`. See the next paragraph for more details. |
| 562069 | Medium | Versioning has been added explicitly, so usage of elements and properties is checked against the product (and hence meta model) version. As part of this, `new ModelSdkClient(..)` is no longer valid and has to be replaced with `Model.createSdkClient(..)` everywhere. |
| 569299 | Low | Introduction / deprecation / deletion messages for structures / elements / properties are shown in the typescript documentation. |
| 581572 | Low | Improved error-message when trying to use an unloaded element or property. |
| 580561 | Low | An error-message will be returned, when using an out-dated Mendix Model SDK. Only Mendix Model SDK 1.0.0-rc.0 and up are supported now. |
| 588942 | Low | Stability improvements when creating new project |
| 561960 | Low | It is no longer possible to push `null` or items twice onto a properties that contain a list of elements. |
| 561960 | Low | It is no longer possible to instantiate objects that are derived, such as `LayoutParameter`. |
| 561960 | Low | All model elements expose a `.model` property that returns the model they belong to. |
| 561960 | Low | Convenience methods to create elements and add them to a parent directly are introduced for all elements that are stored at a unique place (this holds for most elements except for utilities like `texts.Text`). See the next paragraph for more details. |
| 553639 | Low | The Model API and SDK observe the same rules for setting properties to `null` as the Modeler does: (1) list properties cannot receive `null` at all, (2) non-list properties can only be set to `null` if they are object-typed (as in, not primitive or enum) and not required (see documentation). |
| 561972 | Low | It is no longer possible to move a model element from one model to another. In other words: model elements can only exist within the model they were created in. |
| 562069, 561977, 568908 | None | The SDK is now versioned in the sense that structures and properties can have lifecycles, moving from `not yet introduced` to `introduced` to `deprecated` to `deleted` depending on which version of the Mendix Modeler was used to create (the *.mpk* for) the working copy. The SDK provides suitable warnings or errors (once per structure/property per connection) on the console whenever a structure or property is used that is either not yet introduced, deprecated or deleted. |
| 463511* | Low | Finding images by qualified name now works, so for example, `pages.StaticImageViewer.image` isn't always `null`. |
| 585563 | Low | Stability improvements when uploading large files. |
| 583025 | Low | `Structure#traverse` now checks whether the structure has been loaded and fails if not. You have to pre-load traversed structures first if not done already. |
| 585492 | Low | Updated the Model SDK for latest (RC-)version of the Modeler, as in, |
| 590510 | None | Extended the Model SDK with file operations. |
| 591741 | None | Improved build process. |
| 564149 | None | The Model SDK now ships with a separate "mini-SDK" that is exclusively used for unit testing the SDK itself. |
| 463511* | None | `IStructure`, `IList`, `IAbstractUnit` and `IEnum` are now (by request) exposed again on top-level. |
| 463511* | None | `Structure` has a new method called `traverse` to (synchronously) traverse this structure and all contained (not referenced) structures - see its TypeDoc for more information. |

('*' means: fixed during this story, but not intrinsically related to this story)

### Introducing structure factories

In this release we moved from argument less constructors to factory methods. This has a few advantages: 1\. We can perform more consistency checks upfront, such as whether the type you are creating is available in the Mendix version of your project. 2\. Factories can be overloaded in many more ways than constructors, this allows us to introduce even more convenience factories in the future.

So if you had:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = new domainmodels.Entity();
	domainModel.entities.push(entity);
	entity.name = name;

	return entity;
}</code>
```

This will become:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = domainmodels.Entity.create(domainModel.model); // all factories need to know about the owning model
	domainModel.entities.push(entity);
	entity.name = name;

	return entity;
}</code>
```

This seems to make it less convenient to make new structures. However, we introduced convenience factory methods that automatically create new elements *and* registers them on their parent. So from this release onward you can just write:

```text
<code>function newEntity(domainModel: domainmodels.DomainModel, name: string) {
	var entity = domainmodels.Entity.createIn(domainModel); // pass the domainModel instead of a model
	entity.name = name;

	return entity;
}</code>
```

You will notice that this significantly reduces the amount of boilerplate code in application generators.
