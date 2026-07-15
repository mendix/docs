---
title: "Extensibility: Web API Release Notes"
linktitle: "Extensibility: Web API"
url: /releasenotes/studio-pro/web-extensibility-api/
weight: 45
numberless_headings: true
---

These release notes cover changes to the [Extensibility API for Web Developers](/apidocs-mxsdk/apidocs/extensibility-api/).

## Version 11.12.0

* We removed the elements helper methods (`add*()`, `get*()`, `getContainer()`, and `delete()`) from the Model API types.
* We added a `permissionsChanged` event to the [Permissions API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/) that notifies you when the user changes the permissions of your extension.
* We added the `documentsChanged` event, which notifies you when a document that your extension depends on is modified in Studio Pro.
* The Studio Pro version is now available through the [Preferences API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/).

## Version 11.11.0

* We added a **New** button to the [Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/), which allows users to add new documents and entities from the element selector.
* We added a fast reload capability for [Custom Blob documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/). When a **Custom Blob** document is saved or updated you can see your changes in your locally running app immediately, without having to stop and restart the app. 
* We allow [Custom Blob documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/) to have a basic properties form with the title and documentation of the **Custom Blob** document.

## Version 11.10.0

* We added a **Show** button to the [Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/), which allows users to navigate to the selected element in the editor.
* We added visual highlighting to the Element Selector API. You can now pass a `selectedElementId` to highlight a previously-selected element in the selector dialog, making it easier for users to identify their last selection when reopening it.
* We introduced a change for the Model API that makes it easier to create Import Mappings and Export Mappings based on JSON structure documents. You can now use `addJsonStructure` to create a JSON structure from JSON content, and `getElements` to see the elements inside a JSON structure document. To build mappings, the API now includes `addImportMapping` and `addExportMapping`, which create mapping documents based on a JSON structure. You can then refine or adjust those mappings using `setElementMapping` and `clearElementMapping`.

## Version 11.9.0

* We introduced a new Runtime Configuration API under `studioPro.runtime.configuration`, which allows you to retrieve runtime constants from the active configuration. For more information, see [Access Runtime Constants Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-configuration-api/).
* We introduced a new Runtime Controller API under `studioPro.runtime.controller`, which allows you to listen for runtime connection state changes to detect when your app starts or stops running. For more information, see [Listen for Connection Changes](/apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-controller-api/).
* We introduced a permission system for web extensions. Extensions can now request access to sensitive APIs and users can grant or revoke permissions through the Extensions Overview pane. For more information, see [Extension Permissions](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/).

## Version 11.8.0

* We introduced a change in the [Progress Dialog API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/), so when the progress dialog only has one step, only the progress bar is shown.

## Version 11.7.0

* We added functionality to select a **Custom Blob** document by using its registered name in our [Element Selector](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/) API.
* We fixed an issue where using the **New** button in the selector dialog shown when using the Element Selector API would throw an error. The button has now been removed.

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
