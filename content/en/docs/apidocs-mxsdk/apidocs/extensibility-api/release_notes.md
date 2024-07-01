---
title: "Release Notes"
url: /extensions-api/release_notes/
weight: 1
---

# Extensions API Internal Release Notes

This document is intended for the internal mendix developer audience. Within this document we track the latest release notes for the Extensibility API


## Version 10.6.0

- First public release of Extensions API

- Fixed a bug when dealing with model elements detached from a container.

## Version 10.7.0

- Renamed MicroflowService UpdateActionAfterRename method to RenameVariable

- Enable Error Dialogs for extensions when using `--enable-extension-development` feature flag

## Version 10.8.0

- Added the new Extensions Overview page where users can view the current app level extensions loaded by Studio Pro. The new page can be accessed via the following menu: View -> Extensions

## Version 10.10.0

- It is now possible to export an add-on module with an extension inside it. Only with the `--enable-extension-development` feature flag enabled.

## Version 10.12.0

- We added a new menu public API which is simpler to use than the previous API. The previous API has now been moved to the internal API to only be used by internal Mendix employees.
- We added a new method in the project to allow retrieval of all the documents in it by type and/or module.
- We added `StudioProImage` which has now removed the need to use `Eto` images from the Extensibility API.
- We added the ability to add modules to a project through the Extensibility API.
- We added the `IStudioProNotificationService` which will allow showing the balloon notifications in Studio Pro from the Extensibility API.