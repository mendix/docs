---
title: "Release Notes"
url: /apidocs-mxsdk/apidocs/extensibility-api/release-notes/
weight: 6
numberless_headings: true
---

These release notes cover changes to the Extensibility API.

## Version 10.15.0

* We have introduced the Untyped Model Access API. For more details and practical examples, see [How to Use the Untyped Model Access API](/apidocs-mxsdk/apidocs/extensibility-api/extensibility-api-howtos/untyped-model-access-api/).

## Version 10.14.0

* We added the event `ActiveDocumentChanged`, which allows an extension to be notified when the active document changes in Studio Pro. If the document is not yet supported by the Extensibility API, only its name and type will be returned.
* We added support for several microflow activities for lists and objects.
* We introduced `IMicroflowActivitiesService`, which includes several functions to facilitate the creation of these new activities.
  
## Version 10.13.1

* No user facing changes, still please keep the extension package version synced with StudioPro.

## Version 10.13.0

* We fixed a bug where error handling for an activity was lost after you deployed an app.
* We fixed a bug where extensions got reloaded during the creation of a deployment package.

## Version 10.12.5

* No user facing changes, still please keep the extension package version synced with StudioPro. 

## Version 10.12.4

* No user facing changes, still please keep the extension package version synced with StudioPro.

## Version 10.12.3

* No user facing changes, still please keep the extension package version synced with StudioPro.

## Version 10.12.2

* No user facing changes, still please keep the extension package version synced with StudioPro.

## Version 10.12.1

* No user facing changes, still please keep the extension package version synced with StudioPro.

## Version 10.12.0

* Please welcome the first ever ßetta release of Extensibility Api! 