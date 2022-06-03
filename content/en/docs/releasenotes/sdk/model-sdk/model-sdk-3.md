---
title: "3"
url: /releasenotes/sdk/model-sdk-3/
parent: "model-sdk"
---

## 3.3.0

**Release date: April 13th, 2017**

* Added support for Modeler version 7.2.0.

## 3.2.0

**Release date: March 17th, 2017**

* Property `pageSettings` of element `pages.NewButton` is no longer optional.
* Added support for Modeler version 7.1.0.

## 3.1.1

* Fixed support for Modeler version 7.0.2

## 3.1.0

* Added support for Modeler version 6.10.4
* Added support for Modeler version 7.0.2

## 3.0.3

Fixed an issue with internal properties being accidentally included in the typings.

## 3.0.2

Added support for Modeler version 7.0.1 Beta 2.

## 3.0.1

| Impact | Description |
| --- | --- |
| Low | Idempotent splices in listy part properties are recognized and do nothing (instead of potentially breaking the model). |
| None | Unresolved by-name references are now reported as part of running checks on a unit. |
| Low | The `deploy` operation has been deprecated and is replaced by `startAppUpdate` and `getAppUpdateStatus`. Similarly, `getDeploymentStatus` has been superseded by `getAppEnvironmentStatus` (Low impact, as deployment cannot be used for SDK created projects) |

Note: impact = low means "some code might work now".

## 3.0.0

| Impact | Description |
| --- | --- |
| High | **Breaking change!** The method `moduleName` has been removed from the `(I)ModelUnit` types - use `qualifiedName` (from `(I)AbstractElement`) instead. |
| Low | Fixed several problems with moving an element around between containers. |
| Low | Fixed a problem with not being able to fix unresolvable by-name references. |
| Low | All NPM dependencies now have a caret version range, so that they can play along as peer dependencies of downstreams. |
| None | Add support for Modeler version 7.0.0. |
| None | Added a `move(from, to)` method to properties containing multiple structures (such a `pages.VerticalFlow.widgets`). |
| None | Added possibility of deleting model units (such as Pages). |
| None | Fixed a problem with extraneous traffic to the Model API. |
| None | Internal improvement w.r.t. success/error handling in raw deployment. |
| None | Added checks for WM release. |

Note: impact = low means "some code might work now".

Add "deleting model units": You do this by using `splice` on the container of a model unit; for example,:

```
const deleteIndex = page.container.documents.indexOf(page);
page.container.documents.splice(deleteIndex, 1);
```
