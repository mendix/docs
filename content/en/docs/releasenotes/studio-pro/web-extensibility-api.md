---
title: "Extensibility: Web API Release Notes"
linktitle: "Extensibility: Web API"
url: /releasenotes/studio-pro/web-extensibility-api/
weight: 45
numberless_headings: true
---

These release notes cover changes to the [Extensibility API for Web Developers](/apidocs-mxsdk/apidocs/extensibility-api/).

## Version 11.6.0

* We introduced a breaking change in the Web Extensibility API. Menus will no longer support commands and will instead allow users to define their own actions. This change will affect extension developers upgrading from Studio Pro 11.5 to 11.6. Review the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/) to learn how to safely convert your code for the latest version.
* We have added the possibility for registered Custom Blob documents to be passed as parameters to Java Actions. For more information, see [Register New Document Types With a Corresponding Editor](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/).

## Version 11.5.0

* You can now see all the extensions of your application by clicking **View** > **Extensions**. 
* We introduced a new Document Selector API under `studioPro.ui.elementSelectors` that allows the user to choose a document or an entity from the project's structure. For more information, see [Using the Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/).

## Version 11.4.0

* We introduced a new Progress Dialog API under `studioPro.ui.dialogs.showProgressDialog(<title>, <steps>)`, which opens a modal containing a series of steps that perform actions in sequence. For more information, see the [Showing a Progress Dialog](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/#process-dialog) section of *Open a Modal Dialog Using Web API*. 
* We introduced a new Custom Document Model API under `studioPro.app.model.customBlobDocuments`. This allows extensions to register new document types in Studio Pro, which can store arbitrary data and appear in the App Explorer, New Document dialog, and other UI elements. For more information, see [Register New Document Types With a Corresponding Editor](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/).

## Version 11.3.0

* We introduced a new Version Control API under `studioPro.ui.versionControl`, which allows you to display version control information about the current version control system, branch, and last commit in Studio Pro. For more information, see [Show Version Control Information Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/).
* We introduced an option in the [Preferences](/refguide/preferences-dialog/#extension-development) menu to enable extension development without using the --enable-extension-development feature flag. It requires a restart of Studio Pro.
* We introduced a new Message Passing API under `studioPro.ui.messagePassing`, to pass information between different active contexts within an extension. This API supports two communication patterns: request-reply and message broadcasting. For more information, see [Exchange Information Between Active Views Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/).

## Version 11.2.0

* We included a new method for initializing the studio Pro API. (this is a breaking change) For more information, see [Getting Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/).
* We introduced a new command registration API. 

## Version 11.1.0

* We introduced a new Editors API under `studioPro.ui.editors`, which allows you to get the active document and open the default editor for a document. For more information, see [Editor API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/).

## Version 11.0.0

* We introduced a new API for showing modal dialogs from web extensions. It is available under `studioPro.ui.dialogs` in the web extensibility API. For more details and practical examples, see [Open a Modal Dialog](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/).
* We introduced a new API for accessing user preferences from web extensions, which retrieves the user’s selected theme preference (light or dark) and language settings (for exampl, `en-US`). It is available under `studioPro.ui.preferences` in the web extensibility API. For more details and practical examples, see [Show User's Preferences](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/).
* We introduced a new API for showing notification popups from web extensions. It is available under `studioPro.ui.notifications` in the web extensibility API. For more details and practical examples, see [Show a Pop-up Notification](/apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/).

## Version 10.24.0

* No user facing changes. However, the extension package version must be the same as your Studio Pro version.

## Version 10.23.0

* No user facing changes. However, the extension package version must be the same as your Studio Pro version.

## Version 10.22.0

* No user facing changes. However, the extension package version must be the same as your Studio Pro version.

## Version 10.21.0

* The first [beta](/releasenotes/release-status/) release of the Web Extensibility API.
