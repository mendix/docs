---
title: "Model SDK 3.0.0"
category: "releasenotes"
space: "Release Notes"
---
| Impact | Description |
| --- | --- |
| High | **Breaking change!** The method `moduleName` has been removed from the `(I)ModelUnit` types - use `qualifiedName` (from `(I)AbstractElement`) instead. |
| Low | Fixed several problems with moving an element around between containers. |
| Low | Fixed a problem with not being able to fix unresolvable by-name references. |
| Low | All NPM dependencies now have a caret version range, so that they can play along as peer dependencies of downstreams. |
| None | Add support for Modeler version 7.0.0 (including betas). |
| None | Added a `move(from, to)` method to properties containing multiple structures (such a `pages.VerticalFlow.widgets`). |
| None | Added possibility of deleting model units (such as Pages). |
| None | Fixed a problem with extraneous traffic to the Model API. |
| None | Internal improvement w.r.t. success/error handling in raw deployment. |
| None | Added checks for WM release. |

Note: impact = low means "some code might work now".

Ad "deleting model units": You do this by using `splice` on the container of a model unit; e.g.:

```
const deleteIndex = page.container.documents.indexOf(page);
page.container.documents.splice(deleteIndex, 1);
```