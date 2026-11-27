---
title: "Teamcenter Extension Release Notes"
linktitle: "Release Notes"
url: /appstore/industry/teamcenter-extension/release-notes/
weight: 10
description: "Provides the release notes for Teamcenter Extension, grouped by major version, with details on new features, improvements, fixes, and breaking changes."
numberless_headings: true
---

## Introduction

This page contains the release notes for [Teamcenter Extension](https://marketplace.mendix.com/link/component/225544). The releases are grouped by major version. The newest major version and the newest release within each group are at the top.

## Version 4

### 4.2.1

**Release Date:** September 30, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

#### Fixes

* We fixed an issue where critical errors were logged when shutting down the application due to stale copied file documents.

#### Known Issues

* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 4.2.0

**Release Date:** February 16, 2026 (originally published October 2, 2025, and republished to include OSS license information)

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

#### New Features

##### Get Properties

* We added the feature to generate a microflow to get the properties for a Workspace object or specializations thereof and the corresponding domain model. The resulting microflow implements the Get Properties action from the TcConnector.

#### Improvements

* We added the item revision ID as a query parameter for the Search Item Revisions journey.

#### Changes

* We upgraded the Teamcenter Extension to Mendix 10.24.8.

#### Fixes

* We fixed a bug where it was not possible to attach a dataset to an Item Revision.
* We updated the version checker to allow using the extension with Mendix 11.
* We added support for special characters in Teamcenter passwords.
* We corrected the link to the Teamcenter Extension Mendix documentation.

#### Known Issues

* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 4.1.1

**Release Date:** July 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.0 or higher

#### Changes

* We upgraded the Teamcenter Extension to Mendix 10.24.0.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 4.1.0

**Release Date:** July 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Teamcenter X SSO Support

We added Teamcenter X SSO support to the Teamcenter Extension. With this new feature, you can use the Teamcenter Extension with Teamcenter X instances.

#### Improvements

* We updated the icon set used in the extension.
* We improved error handling in the Java actions of the Teamcenter Extension toolkit.

#### Fixes

* We fixed a bug where no entities were created when performing an import mapping, clicking **Generate**, canceling the generation, and then clicking **Generate** and confirming.
* We fixed a bug where the domain model preview on the history tab would still show changes when you clicked **Edit** to edit an integration, made changes, and pressed back to cancel the changes.
* We fixed a bug where the user was redirected to the main tab instead of the history tab after deleting an integration.
* We fixed a bug where tooltips for the checkboxes in the import mapping sidebar were no longer visible.
* We fixed a bug where the indeterminate state of a select-all checkbox was no longer displayed correctly.
* We fixed a React key-related issue in the frontend (history details).
* We fixed a bug where pressing <kbd>Enter</kbd> while logging out resulted in an incorrect connection status (connected instead of disconnected).
* We fixed an issue where many Studio Pro log messages were created when checking the connection status when not connected.
* We fixed a bug where the structure settings sidebar was not opened by default when starting a Get Structures integration.
* We fixed an issue where canceling a background job would sometimes show a message to the user.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 4.0.1

**Release Date:** April 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.21.0 or higher

#### Changes

* We upgraded the Teamcenter Extension to Mendix 10.21.0.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 4.0.0

**Release Date:** April 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### SSO Support

We added SSO support to the Teamcenter Extension. With this new feature, you can use the Teamcenter Extension with Teamcenter instances that use SSO sign-in instead of credentials-based sign-in.

#### Improvements

* We changed the sign-in flow for credentials-based sign-in. Instead of storing the credentials on the Teamcenter configuration, a sign-in dialog now prompts the user to sign in when necessary. This aligns credentials-based sign-in with SSO sign-in and prevents sharing credentials among developers through versioning.
* We improved the way the communication between the React frontend and the C# backend was handled.
* We improved how cookies are handled by the Teamcenter Extension.
* We improved the error message when trying to navigate to a microflow that does not exist from the history tab.

#### Fixes

* We fixed a bug where it was not possible to create an integration to revise a specialization of ItemRevision.
* We fixed an update issue with the dropdown to select the target module on the settings page.
* We fixed an issue where the Teamcenter configuration was sometimes restored when manually deleting the configuration from disk.
* We fixed an issue where canceling the retrieval of file types for Dataset types allowed creation of integrations where an incorrect combination of file type and dataset type was used (attach dataset to item revision integration).
* We fixed a UI bug where the Teamcenter object tree in the object mapping dialog was cut off in case of long object names.
* We fixed an issue where the left-most part of the object row in the Teamcenter object tree in the object mapping dialog was not clickable.
* We fixed the sorting of the default relations in the configuration sidebar for the get dataset for item revision integration.
* We fixed the validation message for missing entities so that it shows entities only once when used multiple times in an import mapping.
* We fixed an issue with the error boundary in the UI.
* We aligned the naming of the integrations on the import mapping page with the tiles in the menu.
* We fixed an issue where canceling the generation of microflows and domain model and then still generating them resulted in duplication of the integration on the history page.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

## Version 3

### 3.3.0

**Release Date:** March 6, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Relate Workspace Objects

We added the feature to generate a microflow to relate two WorkspaceObjects or specializations thereof and the corresponding domain model. The resulting microflow implements the Create Relation action from the TcConnector.

#### Improvements

* We improved the error handling in the extension to better guide the user when something goes wrong.
* We improved the user experience for the Get Datasets for Item Revision and Attach Dataset to Item Revision integrations by including a background job.
* We included minor UI improvements.
* We added the possibility to filter on type in the properties/relations/references side panel.

#### Fixes

* We fixed an issue where canceling the start of an integration prevented you from starting the same integration a second time without first performing another action in the extension.
* We fixed an issue where canceling a validation of an integration was not correctly displayed in the UI.
* We fixed an issue where you could edit or duplicate an integration when no target module was configured.
* We fixed an issue where annotations were not sorted correctly.
* We fixed an issue where self-associations were not correctly generated with complex compound structures where entities were reused.
* We fixed an update issue in the React frontend.
* We fixed an issue where a scrollbar would appear when quickly scrolling up and down in the extension.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 3.2.1

**Release Date:** January 7, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### Fixes

* We fixed the duplication of integrations when multiple developers are working with the extension simultaneously.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 3.2.0

**Release Date:** December 12, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Dark Mode

The Teamcenter Extension now supports dark mode. It displays the same mode as Studio Pro. To see the new mode, change your Studio Pro settings (**Edit** > **Preferences** > **Work Environment**) to **Dark**.

##### Table Sorting

Tables in the Teamcenter Extension now support sorting. For example, when configuring an import mapping, the columns in the sidebar displaying the details of Teamcenter properties are now sortable. Click the column headers to sort the columns ascending and descending alphabetically, respectively.

#### Improvements

* We changed the label **Name** to **Internal Name** in the property sidebar for added clarity.

#### Fixes

* We fixed an issue where, after canceling the deletion of an integration, the integration was no longer visible until reloading the Teamcenter Extension.
* We fixed an issue with the Attach Dataset integration. The default property `TC_manifestation` was misspelled.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.
* When multiple developers are working with the extension simultaneously and commit their changes, duplication of integrations may occur.

### 3.1.0

**Release Date:** December 4, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Attach Datasets to ItemRevision

We added the feature to generate a microflow to create and attach a dataset or specializations thereof with file document to an ItemRevision in Teamcenter and the corresponding domain model. The resulting microflow implements the Upload file, Create Relation and Get Properties actions from the TcConnector.

In addition, the extension generates (depending on configuration) microflows to:

* Get available Dataset types
* Get file types for a Dataset type

#### Improvements

* We improved the validation of integrations where validations pass when deleting and then restoring microflows or entities.
* We added a dropdown with autocomplete functionality.
* We renamed the empty parameter entity for clarity.
* Dataset types are always fetched anew from Teamcenter, also when editing or duplicating an integration.
* We introduced support for table properties from Teamcenter.

#### Fixes

* We fixed an issue with the positioning of the entities in the import mapping preview in the history tab.
* We fixed an issue when using the back button on the mouse.
* We fixed an issue where sometimes when editing or duplicating an integration to get Datasets for ItemRevisions, the dataset type was preselected when it should not have been.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. Such properties cannot be used.

### 3.0.0

**Release Date:** October 24, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Search Datasets

We added the feature to generate a microflow to search for Datasets or specializations thereof in Teamcenter and the corresponding domain model. The resulting microflow implements the Saved Query Search action (Dataset...) from the TcConnector.

In addition, the extension generates microflows to:

* Get ImanFiles for a Dataset
* Retrieve files or images for a Dataset
* Get available Dataset types
* Get file types for a Dataset type

##### Get Datasets for ItemRevision

We added the feature to generate a microflow to get Datasets for an ItemRevision and the corresponding domain model. The resulting microflow implements the Expand GRM Relations for Primary action from the TcConnector.

In addition, the extension generates a microflow to retrieve files or images for a Dataset.

##### Navigation to Artifacts

We added the feature where you can navigate from the history tab to the (generated) entities and to the generated microflows.

#### Breaking Changes

Teamcenter Extension 3.0.0 has been upgraded to work with:

* Studio Pro 10.12.6 (minimum version)
* TcConnector 2406.3.0 (minimum version)

For steps on how to upgrade from 2.0.0 to 3.0.0, see [Upgrading Teamcenter Extension](/appstore/industry/teamcenter-extension/upgrading-teamcenter-extension/).

In addition, there is a change to the way Teamcenter Extension integrations are stored on disk (the configurations of the integrations, not the generated microflows). We added upgrade logic, so existing integrations should still work.

#### Improvements

* We improved the way the extension checks if editing or duplication of integrations is allowed.
* We added validations to the history tab to check for conflicts in association names and multiplicities.
* You can now leave the Teamcenter configuration name (`ConfigName` input parameter) empty. In that case, for the integrations, the active Teamcenter configuration is retrieved from the database. If multiple active Teamcenter configurations exist, an exception is thrown.
* We reorganized the menu of the extension and created more intuitive icons for the supported integrations.
* We improved the checks for the compatibility of the extension with the Studio Pro version and the TcConnector version. Also, the extension now works with minimum versions of its dependencies instead of exact versions.
* We improved the consistency of how exceptions are logged and communicated to the user.
* We added support for macOS. As macOS support for Studio Pro is still in beta, the same is true for the Teamcenter Extension.
* We added the path to the root Teamcenter object type in the object mapping dialog.
* We improved the text in the get structures configuration sidebar.

#### Fixes

* We mitigated maximum path length issues for Mendix projects with long path lengths.
* We fixed an issue with the scrollbar for the list of integrations on the History tab.
* We fixed an issue where relations and references were not preselected when editing or duplicating an integration.
* We increased the consistency of the way error handling was modeled in the Toolkit microflows.
* We fixed an issue where an entity that was reused in the import mapping turned up multiple times in the generated BO mapping.
* We fixed a redundant warning when changing the object mapping without associated child mappings.
* We fixed an issue where the user could still interact with the extension tab after editing or duplicating an integration.
* We fixed an issue where it was not possible to change the object mapping in some of the Teamcenter integrations.

#### Known Issues

* The Teamcenter Extension is not compatible with Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* In the object mapping dialog, entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, are not visible and cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. This results in errors in the generated or updated domain model.

## Version 2

### 2.0.0

**Release Date:** July 19, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.1 or higher

#### New Features

Teamcenter Extension 2.0.0 allows you to manage integrations. We added a new tab to the landing page of the extension where the integrations are listed. When you click an integration, details of the integration are shown, including validation feedback showing the health of the integration. You can click **Edit** to change an integration and **Duplicate** to create a new integration using an existing integration as a starting point (the original integration remains unchanged). You can also delete integrations. In that case, the actual microflows and entities are not removed from the Mendix model.

#### Breaking Changes

Teamcenter Extension 2.0.0 has been upgraded to work with:

* Studio Pro 10.12.1 (minimum version)
* TcConnector 2406.0.0 (minimum version)

For steps on how to upgrade from 1.0.0 to 2.0.0, see [Upgrading Teamcenter Extension](/appstore/industry/teamcenter-extension/upgrading-teamcenter-extension/).

#### Improvements

* We now display the integration title on the import mapping page for reference.
* We added a link to the Mendix documentation in the object mapping dialog and the **Teamcenter Settings** > **Edit** dialog.
* We enriched the documentation for the generated entities in the domain model.
* We removed the FMS URL from the Teamcenter settings as the extension did not actively use it.
* We removed the spell checker from the input fields.
* We improved the sorting behavior of the object mapping dialog.
* We improved the performance of the object mapping dialog.
* We removed the dependence on the Community Commons module.

#### Fixes

* We fixed an issue where the maximum length of string attributes created by the extension did not match the maximum lengths configured in Teamcenter.
* We fixed an issue where the extension did not create a custom ReviseItemRevision input object when creating the entities and microflow to revise an ItemRevision.
* We fixed an issue where you could select Teamcenter properties, relations, and references with spaces in the name when configuring an integration. The current version of the TcConnector does not support properties, relations, or references with spaces in the name.
* We fixed an issue where a microflow generated by the extension had a conflicting object name.
* We fixed the minimum height of an entity in the import mapping page.
* We fixed an issue where merge conflicts were created for the Teamcenter cookie.

#### Known Issues

* In the object mapping dialog, entities from add-on modules, or entities where at least one of their generalizations is from an add-on module, are not visible and cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name, but Mendix attributes cannot. This results in errors in the generated or updated domain model.

## Version 1

### 1.0.0

**Release Date:** April 22, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.6.5 or higher

Initial release.
