---
title: "Extensibility: Web API Release Notes"
linktitle: "Extensibility: Web API"
url: /releasenotes/studio-pro/web-extensibility-api/
weight: 45
numberless_headings: true
---

These release notes cover changes to the [Extensibility API for Web Developers](/apidocs-mxsdk/apidocs/extensibility-api/).

## Version 11.15.0

### New Features

* We added a feature flag API under `studioPro.featureFlags.isCommandLineFlagProvided("flag-name")` so developers can check if a specified feature flag exists in the command-line arguments when running Studio Pro from the terminal.
* We added a Register Tool API under `studioPro.ai.tools.registerTool(toolDefinition)` where users can register their own tools and develop agentic logic with Maia.
* We added `javaActionQualifiedName` to the `CustomBlobDocumentRegistrationOptions`, which allows the Studio Pro user to link a blob document type to an existing Java Action, allowing the user to drag a `CustomBlobDocument` straight into a microflow from the **App Explorer**, creating a new `JavaActionActivity` for the `CustomBlobDocument` type.
* We added a `projectClosing` event in the `studioPro.app.projectManager` API to allow the developer to perform any cleanup functions that were dependent on the current project. Both events contain the current open project as their payload.

### Improvements

* We added readable names and descriptions for each permission that an extension requires in the Extensions Overview.
* We now ensure that two different extensions cannot use the same prefixes for their consistency error codes.

### Fixes

* We fixed an issue where creating or searching for `CustomBlobDocuments` gives unexpected results when called before the project was initialized. We added `projectOpened` and `projectClosing` events through the `studioPro.app.projectManager` API. We also added the method `getProjectMetadata`, allowing developers to know when the project is available in order to be able to create or query `CustomBlobDocuments`.
* We fixed the issue that `CustomBlobDocumentApi` returned null when calling `getDocumentsOfType` when the project was not yet initialized. It now throws an error instead of returning null. Using `studioPro.app.projectManager.getProjectMetadata` will allow a developer to know when it is safe to call it.
* We fixed a bug where `CustomBlobDocument` type names were not displayed as their registered type in the `Commit` pane in version controlled apps.

## Version 11.14.0

### Improvements

* A module ID can now be passed to the element selector for the `selectedElementId` property, and the corresponding module will be preselected and expanded. This will allow the user to directly create a new document of the desired type in that module.
* We improved the Extensions Overview UI to be more modern and consistent with the rest of Studio Pro.
* We added support for direct assignment to model element array properties (for example, `element.property = [value1, value2]`).

## Version 11.13.0

### Improvements

* We updated the progress dialog cancellation behavior: the process now waits for the cancelled step to finish before resolving, rather than immediately returning a snapshot of the progress at the time of cancellation. A new `resolveImmediatelyOnCancel` parameter restores the previous behavior.

### Fixes 

* We fixed an issue where reloading an extension with open tabs caused an Oops crash.

## Version 11.12.3

### Improvements

* We added support for preselecting modules in the [Document Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/).
* We improved the [Permissions API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/).

## Version 11.12.2

### Fixes

* We fixed a bug where the Extensions Overview page did not open if the user was not signed in.
* We fixed a bug where reloading a Dev extension crashed if extension tabs were still open.
* We fixed an issue where progress dialogs did not behave like their C# counterpart. Canceling a step now waits for it to finish and return its result. To exit the step and return its result immediately on cancel, pass `resolveImmediatelyOnCancel` to `IDialogApi.showProgressDialog`.

## Version 11.12.1

### Improvements

* We removed timeouts for Custom Blob Document consistency checks instead of showing a generic error in the **Errors** pane. We also added analytics to identify extensions that exceed the previous timeout.

### Fixes

* We fixed a bug where the icon next to a tab title did not appear.
* We fixed a bug where the Module Settings form incorrectly showed modules other than Add-on when packaging an extension into a module.

## Version 11.12.0

### New Features

* We added a `permissionsChanged` event to the [Permissions API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/) that notifies you when the user changes the permissions of your extension.
* We added the `documentsChanged` event, which notifies you when a document that your extension depends on is modified in Studio Pro.

### Improvements

* The Studio Pro version is now available through the [Preferences API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/).

### Deprecations

* We removed the elements helper methods (`add*()`, `get*()`, `getContainer()`, and `delete()`) from the Model API types.

## Version 11.11.0

### New Features

* We added a **New** button to the [Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/), which allows users to add new documents and entities from the element selector.

### Improvements

* We allow [Custom Blob documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/) to have a basic properties form with the title and documentation of the **Custom Blob** document.
* We added a fast reload capability for [Custom Blob documents](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/). When a **Custom Blob** document is saved or updated you can see your changes in your locally running app immediately, without having to stop and restart the app. 

## Version 11.10.0

### New Features

* We added a **Show** button to the [Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/), which allows users to navigate to the selected element in the editor.

### Improvements

* We added visual highlighting to the Element Selector API. You can now pass a `selectedElementId` to highlight a previously-selected element in the selector dialog, making it easier for users to identify their last selection when reopening it.
* We introduced a change for the Model API that makes it easier to create Import Mappings and Export Mappings based on JSON structure documents. You can now use `addJsonStructure` to create a JSON structure from JSON content, and `getElements` to see the elements inside a JSON structure document. To build mappings, the API now includes `addImportMapping` and `addExportMapping`, which create mapping documents based on a JSON structure. You can then refine or adjust those mappings using `setElementMapping` and `clearElementMapping`.

## Version 11.9.0

### New Features

* We introduced a new Runtime Configuration API under `studioPro.runtime.configuration`, which allows you to retrieve runtime constants from the active configuration. For more information, see [Access Runtime Constants Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-configuration-api/).
* We introduced a new Runtime Controller API under `studioPro.runtime.controller`, which allows you to listen for runtime connection state changes to detect when your app starts or stops running. For more information, see [Listen for Connection Changes](/apidocs-mxsdk/apidocs/web-extensibility-api-11/runtime-controller-api/).
* We introduced a permission system for web extensions. Extensions can now request access to sensitive APIs and users can grant or revoke permissions through the Extensions Overview pane. For more information, see [Extension Permissions](/apidocs-mxsdk/apidocs/web-extensibility-api-11/extension-permissions/).

## Version 11.8.0

### Improvements

* We introduced a change in the [Progress Dialog API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/), so when the progress dialog only has one step, only the progress bar is shown.

## Version 11.7.0

### Improvements

* We added functionality to select a **Custom Blob** document by using its registered name in our [Element Selector](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/) API.

### Fixes

* We fixed an issue where using the **New** button in the selector dialog shown when using the Element Selector API threw an error. The button has now been removed.

## Version 11.6.0

### Improvements

* We have added the possibility for registered Custom Blob documents to be passed as parameters to Java Actions. For more information, see [Register New Document Types With a Corresponding Editor](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/).

### Breaking Changes

* We introduced a breaking change in the Web Extensibility API. Menus will no longer support commands and will instead allow users to define their own actions. This change will affect extension developers upgrading from Studio Pro 11.5 to 11.6. Review the [Migration Guide](/apidocs-mxsdk/apidocs/web-extensibility-api-11/migration-guide/) to learn how to safely convert your code for the latest version.

## Version 11.5.0

### New Features

* We introduced a new Document Selector API under `studioPro.ui.elementSelectors` that allows the user to choose a document or an entity from the project's structure. For more information, see [Using the Element Selector API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/element-selector-api/).

### Improvements

* You can now see all the extensions of your application by clicking **View** > **Extensions**.

## Version 11.4.0

### New Features

* We introduced a new Progress Dialog API under `studioPro.ui.dialogs.showProgressDialog(<title>, <steps>)`, which opens a modal containing a series of steps that perform actions in sequence. For more information, see the [Showing a Progress Dialog](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/#process-dialog) section of *Open a Modal Dialog Using Web API*.
* We introduced a new Custom Document Model API under `studioPro.app.model.customBlobDocuments`. This allows extensions to register new document types in Studio Pro, which can store arbitrary data and appear in the App Explorer, New Document dialog, and other UI elements. For more information, see [Register New Document Types With a Corresponding Editor](/apidocs-mxsdk/apidocs/web-extensibility-api-11/custom-blob-document-api/).

## Version 11.3.0

### New Features

* We introduced a new Version Control API under `studioPro.ui.versionControl`, which allows you to display version control information about the current version control system, branch, and last commit in Studio Pro. For more information, see [Show Version Control Information Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/version-control-api/).
* We introduced an option in the [Preferences](/refguide/preferences-dialog/#extension-development) menu to enable extension development without using the `--enable-extension-development` feature flag. This requires a restart of Studio Pro.
* We introduced a new Message Passing API under `studioPro.ui.messagePassing` to pass information between different active contexts within an extension. This API supports two communication patterns: request-reply and message broadcasting. For more information, see [Exchange Information Between Active Views Using Web API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/message-passing-api/).

## Version 11.2.0

### New Features

* We introduced a new command registration API.

### Breaking Changes

* We included a new method for initializing the Studio Pro API. For more information, see [Getting Started with the Web Extensibility API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/getting-started/).

## Version 11.1.0

### New Features

* We introduced a new Editors API under `studioPro.ui.editors`, which allows you to get the active document and open the default editor for a document. For more information, see [Editor API](/apidocs-mxsdk/apidocs/web-extensibility-api-11/editor-api/).

## Version 11.0.0

### New Features

* We introduced a new API for showing modal dialogs from web extensions. It is available under `studioPro.ui.dialogs` in the web extensibility API. For more details and practical examples, see [Open a Modal Dialog](/apidocs-mxsdk/apidocs/web-extensibility-api-11/dialog-api/).
* We introduced a new API for accessing user preferences from web extensions, which retrieves the user’s selected theme preference (light or dark) and language settings (for exampl, `en-US`). It is available under `studioPro.ui.preferences` in the web extensibility API. For more details and practical examples, see [Show User's Preferences](/apidocs-mxsdk/apidocs/web-extensibility-api-11/preference-api/).
* We introduced a new API for showing notification popups from web extensions. It is available under `studioPro.ui.notifications` in the web extensibility API. For more details and practical examples, see [Show a Pop-up Notification](/apidocs-mxsdk/apidocs/web-extensibility-api-11/notification-api/).

## Version 10.21.0

### New Features

* We introduced the first [beta](/releasenotes/release-status/) release of the Web Extensibility API.
