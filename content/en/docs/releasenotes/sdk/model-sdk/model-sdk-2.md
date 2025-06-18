---
title: "2"
url: /releasenotes/sdk/model-sdk-2/
weight: 99
---

## 2.9.1

| Impact | Description                                                  |
| ------ | ------------------------------------------------------------ |
| None.  | Fixed several problems with moving elements around between containers. |

## 2.9.0

| Impact | Description                                                  |
| ------ | ------------------------------------------------------------ |
| None   | Added support for Mendix 6.10.0 (and 6.9.0.1), and updated PageTemplates for MM 6.9.0. |
| None   | Moving an element to a non-listy property of a new parent element (for example, to widget of a DivContainer) has been fixed. |

## 2.8.1

| Impact | Description |
| --- | --- |
| Low | Fixed *metaModelVersion* in *AbstractModel* to actually contain meta model version instead of Mendix product version (which is now stored in *mxVersionForModel*). |
| None | Added checks for Page name validation (syntax + uniqueness); includes fixes to MxCheck. |
| None | Fixed order of meta model versions mentioned in documentation and error messages. |
| None | Updated links to reference the updated documentation site. |

## 2.8.0

| Impact | Description |
| --- | --- |
| None | Added support for Mendix 6.9.0. |
| None/Fix | From this release on but *retro-actively for all Mendix model versions*, the `microflowCall` property of an `MicroflowCallAction` element is required instead of optional |

## 2.7.0

| Impact | Description |
| --- | --- |
| None | Support for Mendix 6.7.1 and 6.8.0. |
| None/Fix | Prevent exceptions being thrown while deep copying model content with empty by-name references (which is a model inconsistency). |

## 2.6.3

Note that Model SDK 2.6.1 and 2.6.2 have been skipped (and unpublished from NPM) because installing through NPM failed.

| Impact | Description |
| --- | --- |
| Fix | Fixed Model SDK for published `mendixmodelsdk` NPM package missing `dist/` and failing on `npm install`. |
| None | Add support -that's only accessible for trusted back end clients!- for providing a project-to-working copy mapping, locking/unlocking working copies and extra meta data regarding merge requests. |
| None | Widened a parameter type in internal interfaces and classes to fix a problem with using the Model SDK in a Safari browser. |
| None | Refactored MxCheck expression AST hierarchy. |
| None | The Deploy API now returns an additional field `startedFullDeployment` which is `false` if the app was fast-deployed (and completed now), or `true` if a full deployment was needed and further status of the app can be polled through `deployStatus` calls. |
| None | Exposed `mergeState` in the working copy meta data. Added `loadWorkingCopyMetaData` to SDK client to obtain it's meta info without opening it. Exposed `Version` utility class. |
| None | Fixed/extended SDK documentation for the `sortIndex` attribute of `Module`. (Ticket #466184) |
| None | Replaced use of Grunt build system with `npm`. |

## 2.6.0

| Impact | Description |
| --- | --- |
| None | Support for Mx6.7.0. |

## 2.5.0

| Impact | Description |
| --- | --- |
| Low |  `getFilePaths` has been deprecated and renamed to `getFiles`. |
| Low | Improved the typings of some (internal) APIs. |
| None | Added support for Mendix 6.6.0. |
| None | `getFilePaths` accepts an option objects which can define `format` (either `zip` or `json`), `filter` (glob pattern) and `path` (output filename if format is `zip`). |
| None | Output filename is no longer mandatory for `getFile` / `getFiles` / `exportMpk`. If not provided, raw response is provided in the callback instead. |
| None | Support for forcing full deployment. Deploying a working copy is functionality that's not accessible to regular Model SDK users (as in, non-trusted back ends), so no impact. |
| None | Fixed a bug with delete deltas not being sent while they should - this for example, caused 2 translations to be created for the title text of a new page, with the translations having the same language code. |
| None | More (complete) support for running model checks from the SDK: corrected implementation of check level groups, renamed `hasPrefix` standard library method for expressions (checks and queries) to `startsWith`. |

## 2.4.0

| Impact | Description |
| --- | --- |
| None | Support for Mendix 6.5.1. |
| None | Exposed facilities for running consistency checks on models. |

## 2.3.0

| Impact | Description |
| --- | --- |
| Low | Added support for Mendix 6.5.0. |

## 2.2.2

| Impact | Description |
| --- | --- |
| Medium | Upgraded to TypeScript 1.8.x because of using new language features which are incompatible with TS 1.6.y, so you'll have to upgrade to TS 1.8.x (which is backward compatible) as well. |
| Low | Added support for Mendix 6.4.1. |
| Low | It is now possible to deep clone elements by using `element.deepCopy()`. |
| Low | `serializeToJs` no longer crashes when it encounters deleted attributes. |
| Low | Added `publicReadOnly` property for working copies. |
| Low | Added support for retrieving overviews of all the working copies that user is member of. |

SDK version 2.2.0 and 2.2.1 were unpublished because they were published in a broken state.

## 2.1.0

| Impact | Description |
| --- | --- |
| Minor | Added support for Mendix 6.4.0 |
| Low | Working copies that are connected to projects can now be deployed and their runtime status can be requested |
| Low | Unit-loading now has an extra optional forceRefresh option. If set, it will then bypass the Mendix MOdel SDK cache, and get the fresh unit straight from the source/server. |
| Minor | All classes that could be useful for reflection on the model are now exposed through `mendixmodelsdk`, so imports from `mendixmodelsdk/dist/sdk/internal/...` should no longer be needed. |
| Minor | Private members (starting with an underscore `_`) were not available in the docs but were available in the public typings and therefore in the IDEs. This has been fixed. It should never be necessary to access these members. However, if you did access them you now need to access the object to `any` before the typechecker allows you to access these members. The method `allProperties()` is now available on all structures for reflection purposes. |

## 2.0.0

This release introduces a number of breaking changes in the SDK's API, so because of semantic versioning we need to up the major version.

| story# | impact | description |
| --- | --- | --- |
| 612773 | High | The mechanics of model elements being contained has been reworked: see below for more details. |
| 634662 | Low | The `toPlainJson` method on elements and units has been renamed to `toJSON`, because for example, the Chrome Developer Tools understand this to produce nice, human-readable representations of such objects. Rename all usages of `toPlainJson` to `toJSON` to fix your code. |
| 639825 | Low | Broken by-name references are automatically fixed when a target is added to the model again. |
| 637545 | None | Minor internal modifications for upcoming Mendix 6.3.0. |
| 633932 | None | Added support for long-lived working copies (that are not deleted after 24 hours) to SDK. Note that this is currently **not** available to non-trusted back ends! |
| 620108 | None | Removed exported interface `IObservable` from an internal namespace and replaced its use by the one from the `MObservable` library. |
| 631960 | None | Added support for checking deployment status. |
| 623906 | None | Added support for deploying from the SDK. Note that this is currently **not** supported on non-trusted back ends! |

The following **breaking** changes are made per 612773 and as a result of new insights on interference between containment and versioning/history of the Mendix modeling language.
This interference leads to elements having different kinds of containment throughout their history.
In turn, this necessitated us to make some fundamental changes to avoid having to have breaking changes in the future.

* The `container` property is not strictly typed anymore; for example, `domainmodels.Attribute.container` is not of type `Entity` anymore but of a general `Container` type.
* Instead, `containerAs<T>` properties of type `T` are introduced on all elements. This property returns the instance of `T` which contains the element or throws if it's not contained by an instance of `T`. To avoid those exceptions, use `container` together with `instanceof`-guards.
* In case an element is contained by *multiple* properties (as in, more than 1), `createIn<T>Under<P>` methods are generated which creates a new element in a given instance of `T` under property `P`. Several previously-existing `createIn` methods have been replaced by a `createIn<T>Under<P>` method, where these `createIn` methods considered only 1 containing property.
* Elements that are contained by one property in at least one version will have a `createIn` method that works as expected for those versions and throws for other versions.
* Elements that are always (as in, in all versions) contained by properties that are derived, will not have any `createIn...` methods.

Dependent code can be easily fixed by using the `containerAs<T>` property instead of the `container` property, and (in a few specific cases) by using a `createIn<T>Under<P>` method instead of the `createIn` method.
