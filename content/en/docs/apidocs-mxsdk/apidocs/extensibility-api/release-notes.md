---
title: "Release Notes"
url: /apidocs-mxsdk/apidocs/extensibility-api/release-notes/
weight: 6
numberless_headings: true
---

These release notes cover changes to the Extensibility API.

## Version 10.14.0

* We added the event `ActiveDocumentChanged`, which allows an extension to be notified when the active document changes in Studio Pro. If the document is not yet supported by the Extensibility API, only its name and type will be returned.
* We added support for several microflow activities for lists and objects.
* We introduced `IMicroflowActivitiesService`, which includes several functions to facilitate the creation of these new activities.
  
## Version 10.13.0

* We fixed a bug where error handling for an activity was lost after you deployed an app.
* We fixed a bug where extensions got reloaded during the creation of a deployment package.

## Version 10.12.0

* We added a new menu public API that is simpler to use than the previous API. The previous API has now been moved to the internal API to only be used by internal Mendix employees.
* We added a new method in the project to allow retrieval of all the documents in it by type and/or module.
* We added `StudioProImage` that has now removed the need to use `Eto` images from the Extensibility API.
* We added the capability to add modules to a project through the Extensibility API.
* We added the `IStudioProNotificationService` that enables showing the balloon notifications in Studio Pro from the Extensibility API.

## Version 10.10.0

* It is now possible to export an add-on module with an extension inside it, only with the `--enable-extension-development` feature flag enabled.

## Version 10.8.0

* We added the new Extensions Overview page where users can view the current app-level extensions loaded by Studio Pro. The new page can be accessed via the following menu: **View** > **Extensions**.

## Version 10.7.0

* We renamed the `MicroflowService UpdateActionAfterRename` method to `RenameVariable`.
* We enable error dialogs for extensions when using the `--enable-extension-development` feature flag.

## Version 10.6.0

* The Extensibility API is released for beta usage. 
* We fixed a bug when dealing with model elements detached from a container.
