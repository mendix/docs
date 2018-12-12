---
title: "4"
parent: "model-sdk"
#For next release, do not include Impact.
---

These are the release notes for the Model SDK version 4.

## 4.17.0

**Release date: November 30th, 2018**

| Story | Impact | Description |
|---|---|---|
| MS-1195 | None | Added new working copy lock type `update`. |
| MS-1205 | None | Added support for Mendix 7.21.0. |
| MS-1183 | None | Added new working copy lock type `commit`. |
| MS-1173 | None | Fixed THE duplicate processing of events. |
| MS-1184 | None | Upgraded to Node.JS version 10. |

## 4.16.0

**Release date: October 31st, 2018**

| Story | Impact | Description |
|---|---|---|
| MS-1144 | None | Upgraded to TypeScript 3.1. |
| MS-1156 | None | Added `onEventProcessed` hook to AbstractModel. |
| MS-1157 | None | Added optional param to `deepCopy()` so the client can map from the original ID. |
| MS-1162 | None | Removed the `utils.serializeToJs(unit)` method, which has been replaced by `JavaScriptSerializer.serializeToJs(unit)`. |
| MS-1172 | None | Added support for Mendix 7.20.0. |

## 4.15.0

**Release date: October 3rd, 2018**

| Story | Impact | Description |
|---|---|---|
| MS-1105 | None | Added support for Mendix 7.19.0. |
| MS-1091 | None | Enabled creating a working copy directly from Team Server. |
| MS-1083 | None | Added a method to create an element from JSON. |
| WMC-1409 | None | Added an `Edit-Lock-Id` header to `importModuleMpk`. |
| MS-891 | None | Added retries. |

## 4.14.0

| Story | Impact | Description |
|---|---|---|
| MS-1046 | None | Added support for Mendix 7.18.0. |
| MS-1032 | None | Bumped Typescript version to 3.0. |
| MS-946 | None | Ensure that the local model is updated correctly when importing a module package. |
| MS-1040 | None | Fixed an issue where units did not load when stopping receiving changes. |
| MS-947 | None | Process unit creation and deletion when receiving changes. |

## 4.13.0

| Story | Impact | Description |
|---|---|---|
| MS-1018 | None | We added support for Mendix 7.17. |

## 4.12.0

| Story | Impact | Description |
|---|---|---|
| WMC-1246 | None | Upgraded MobX dependency to v5.0.0. |
| MS-918   | None | Added ability to process incoming events from the Model Server. |
| MS-937   | None | Upgraded TypeScript dependency to v2.9.1. |
| MS-972   | None | Added support for Mendix 7.16.0. |

## 4.11.0

| Story | Impact | Description |
|---|---|---|
| MS-788   | None | Added delete-structural-unit functionality. |
| MS-822   | None | Improved the Model SDK performance. |
| MS-886   | None | Removed the Lodash dependency from Model SDK. |
| MS-911 | None | Added support for Desktop Modeler version 7.15.0. |

## 4.10.0

| Story | Impact | Description |
|---|---|---|
| MS-786   | None | Added Import Module feature. |
| MS-846   | None | Upgrade to Typescript 2.8.1. |
| MS-870   | Low  | The Model SDK now requires an ES6 environment to run. |
| MS-872   | None | Fixed delta reverser for primitive list property. |
| MS-893   | None | Added support for Modeler version 7.14.0. |
| WMC-955  | None | Parse MxBuild errors in the Model SDK. |
| WMC-1165 | None | Expose `lockId` and `duration` for edit locks. |
| WMC-1105 | None | Upgrade to MobX 4. |

## 4.9.0

| Story | Impact | Description |
|---|---|---|
| MS-819 | None | Added support for Modeler version 7.13.0. |
| MS-814 | None | Exported `ILockWorkingCopyResponse` in the Model SDK. |
| MS-802 | None | Added a force option to allow users to set an edit lock with one API call. |

## 4.8.0

| Story | Impact | Description |
|---|---|---|
| MS-669 | None | Added new working copy lock type **edit**. |
| MS-726 | None | Added support for Desktop Modeler version 7.12.0. |
| MS-708 | None | Upgraded to TypeScript version 2.7.1. |

## 4.7.0

| Story | Impact | Description |
|---|---|---|
| MS-678 | None | Upgraded npm dependencies to latest versions. |
| MS-674 | Low | Added support for Modeler version 7.11.0. |
| MS-464 | Medium | For models created in Mendix 7.11.0 and above, all the properties that used to refer to entities and attributes using a `string` value have been replaced by properties that use the newly introduced types `domainmodels.EntityRef` and `domainmodels.AttributeRef`. An example is property `pages.MemberWidget.attributePath`, which has been replaced by the new property `attributeRef` from 7.11.0 onwards. |

## 4.6.0

| Story | Impact | Description |
|---|---|---|
| MS-628 | None | Added support for Modeler version 7.10.0. |
| MS-621 | None | Fixed the error message from `element.containerAs*` when the container type is not correct. |
| MS-628 | None | Introduced a new document type called `Nanoflow` and a new base class called `ServerSideMicroflow`, from which `Microflow` and `Rule` now both inherit. |

## 4.5.1

| Story | Impact | Description |
|---|---|---|
| MS-461 | None | Made the `EntityType.entity` and `EnumerationType.enumeration` properties in the new DataType metamodel public, so that they can be read without loading the model unit that contains the DataType instance. |

## 4.5.0

| Story | Impact | Description |
|------|-----|---|
| MS-461 | Medium | Defined the new metamodel for DataType. From Mendix [7.9.0](../desktop-modeler/7) onwards, the new properties of the DataType type should be used instead of the old properties of the String type. |
| MS-328 | None | Defined the new metamodel for microflow expressions (experimental). |

## 4.4.0

| Story | Impact | Description |
|------|-----|---|
| MS-508 | None | Allow detaching elements contained by a required part property. An error is thrown if the required property is still empty after the current (synchronous) action. |
| MS-433 | None | Added the `exportModuleMpk` method to allow users to export an MPK file for a specific module in the working copy. |
| MS-477 | None | Experimental classes and properties are now marked as such in the TypeScript documentation. |
| MS-519 | None | Added support for Modeler version 7.8.0. |

## 4.3.0

| Story | Impact | Description |
|------|-----|---|
| MS-471 | None | Added support for Modeler version 7.7.0. |

## 4.2.0

| Story | Impact | Description |
|------|-----|---|
| MS-317 | Medium | Removed `projectId` from `IWorkingCopy`, as it was never set. Use `IWorkingCopy.metaData.projectId` instead. |
| MS-377 | Medium | Added optional `locktype` parameter to the lockWorkingCopy method. |
| MS-359 | None | Added support for Modeler version 7.6.0. |
| MS-352 | Low | Fixed the initialization of default values. |

The code snippet below is an example of what was broken in **MS-352**. The default value of `layoutCall` should be `null`, but it used to be (incorrectly) set to a new instance of `LayoutCall`. This is no longer the case, and it can be fixed by initializing `layout.layoutCall` to a new `LayoutCall` instance before assigning the `layout` property.

```
const layout = pages.Layout.createIn(this.module);
...
layout.layoutCall.layout = this.masterLayout;
```

## 4.1.0

| Story | Impact | Description |
|---|---|---|
| MS-287 | Low | From now on, we disallow deleting detached elements. Either delete the element directly, or re-attach it before deleting it. |
| 1196423 | None | We added a `filterUnitsByCustomWidgetId` API to enable trusted backends to find units containing a specific custom widget type. |
| 1197518 | None | It is now possible to specify the `workingCopyId` instead of getting a randomly generated one when creating a new working copy. This feature can only be used by trusted backends. |
| MS-216 | None | We removed the `getEditorData` internal API. |
| MS-296 | None | We added support for Modeler versions 7.4.0 and 7.5.0. |

## 4.0.0

| Story | Impact | Description |
|---|---|---|
| 1085587 | Breaking | Moving elements now has to be done though the `detach()` function. For a full description of all the states and their meanings, see [Element States](/apidocs-mxsdk/mxsdk/element-states). This does not affect reading models and elements. |
| 1085587 | Breaking | Creating, deleting, and changing elements is restricted by their state. For a full description of all the states and their meanings, see [Element States](/apidocs-mxsdk/mxsdk/element-states). This does not affect reading models and elements. |
| 1031416 | Breaking | The `qualifiedName` property for an element that is not attached to the model now returns `undefined`. |
| 1052744 | Breaking | Elements that have no `name` property (like `DomainModel`) no longer have a `qualifiedName` property. |
| 1031416 | Breaking | When assigning an element to a by-name reference (list) property, the element must have a valid qualified name first. This means that the element itself and any named containers should have a valid name. |
| 1085587 | Breaking | The following methods have been removed from the interface `IList<T>`: `intercept`, `move`, `observe`, `peek`. |
| 1109564 | Breaking | The property `typeName` that exists on every instance of a structure has been renamed to `structureTypeName`. All static `typeName` properties on structure classes are now called `structureTypeName` as well. (Ticket 49499) |
| 1116073 | Breaking | `Model.closeConnection` now no longer calls the (success) callback in addition to the model error handler when an error occurs while sending model changes to the server. Instead, it calls the error callback, or, in case the error callback is not supplied, the model error handler. |
| 1052744 | Breaking | The behavior of `ModelSdkClient.createWorkingCopy` has been changed so that it no longer opens the working copy right away. Instead, the specified callback gets passed an `IWorkingCopy` instance, which can be inspected or used to open the working copy. We have introduced the new method `ModelSdkClient.createAndOpenWorkingCopy` that mimics the old behavior. |
| 1052744 | Breaking | We renamed `Model.metadata` to `Model.workingCopy`, as that name more accurately reflects its value. |
| 1052744 | Breaking | We renamed the overload of `Structure.load()` that does not take a callback to `asLoaded()`. |
| 1052744 | Breaking | All the interfaces for elements that are not part of the interface of their model unit have been removed, as these were not used in the SDK and served no further purpose (for example, `pages.IWidget` and all its derivatives). |
| 1052744 | Breaking | All the properties in interfaces for elements that are part of the interface of their model unit have become `readonly` to reflect the semantics of the model unit interfaces. If you want to change the value of such a property, you have to load the element using `.load(...)`, or you can use `.asLoaded()` to convert it to the class type if you know that the element is already loaded. |
| 1189165 | Breaking | The method `Structure.deepCopyInto` has been removed. A new method `Element.deepCopy` has been added. |
| 1052744 | Breaking | The interface `IDimension` has been removed, as it was never used. |
| 1052744 | Breaking | We renamed the class `IEnum` to `AbstractEnum`. |
| 1052744 | Breaking | We removed setters for properties of the type `IList`. These setters were not really useful, as they required an argument of the type `IList`. |
| 1052744 | Breaking | Specifying an error callback for `Model.getAppEnvironmentStatus`, `Model.getAppUpdateStatus` and `Model.startAppUpdate` is now required. The model error handler will no longer be used. |
| 1186227 | Breaking | The interface `IDelta` is no longer exposed and has been replaced by the type `Delta`, which is a union type of all the possible delta types. |
| 1031525 | Low | We changed the return type of `Model.findModuleByQualifiedName` to `projects.IModule`. |
| 1031525 | Low | `Structure.container` is now a read-only property. |
| 1031525 | None | `Structure.container` is now an observable property. |
| 1052744 | None | We changed the return type of `validateSyntax` to <code>string &#124; null</code>. |
| 1052744 | None | Assigning a false value such as `undefined` to a property now results in the property value actually becoming `null` instead. |
| 1026781 | None | We replaced Restler with Request. |
| 1126173 | None | Added support for Modeler version 7.3.0. |
