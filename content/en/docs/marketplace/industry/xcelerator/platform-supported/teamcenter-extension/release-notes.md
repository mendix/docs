---
title: "Teamcenter Extension Release Notes"
linktitle: "Release Notes"
url: /appstore/industry/teamcenter-extension/release-notes/
weight: 1
description: "Provides the release notes for Teamcenter Extension, grouped by major version, with details on new features, improvements, fixes, and breaking changes."
numberless_headings: true
---

## Introduction

This page contains the release notes for [Teamcenter Extension](https://marketplace.mendix.com/link/component/225544). The releases are grouped by major version, and the newest release is at the top of each group.

## Version 4

### 4.2.1

**Release Date:** September 30, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

#### Fixes

* We fixed an issue where critical errors were logged when shutting down the application due to stale copied file documents.

#### Known Issues

* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 4.2.0

**Release Date:** February 16, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

(original publication 2 October 2025, republished to include OSS license information)

#### New Features

##### Get Properties

* We added the feature to generate a microflow to get the Properties for a Workspace object or specializations thereof and the corresponding domain model. The resulting microflow implements the Get Properties action from the TcConnector.

#### Improvements

* We have added the item revision id as a query parameter for the Search Item Revisions journey.

#### Changes

* We upgraded the Teamcenter Extension to Mendix 10.24.8.

#### Fixes

* We fixed a bug where it was not possible to attach a dataset to an Item Revision.
* We updated the version checker to allow using the extension with Mendix 11.
* Special characters in Teamcenter passwords are now supported.
* Corrected the link to the Teamcenter Extension Mendix documentation.

#### Known Issues

* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 4.1.1

**Release Date:** July 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.0 or higher

#### Changes

* We upgraded the Teamcenter Extension to Mendix 10.24.0.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 4.1.0

**Release Date:** July 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Teamcenter X SSO Support

We added Teamcenter X SSO support to the Teamcenter Extension. With this new feature, it is possible to use the Teamcenter Extension with Teamcenter X instances.

#### Improvements

* We updated the icon set used in the extension.
* We improved error handling in the Java actions of the Teamcenter Extension toolkit.

#### Fixes

* We fixed a bug where no entities are created when performing an import mapping, clicking Generate, cancel generation and clicking Generate and confirming.
* We fixed a bug where the domain model preview on the history tab would still show changes when you clicked on Edit to edit an integration, made changes and pressed back to cancel the changes.
* We fixed a bug where the user was redirected to the main tab instead of the history tab after deleting an integration.
* We fixed a bug where tooltips for the checkboxes in the import mapping sidebar were no longer visible.
* We fixed a bug where the indeterminate state of a select-all checkbox was no longer displayed correctly.
* We fixed a React key-related issue in the frontend (history details).
* We fixed a bug because of pressing <kbd>Enter</kbd> while logging out, which resulted in an incorrect connection status (connected instead of disconnected).
* We fixed an issue where many Mendix Studio Pro log messages were created when checking the connection status when not connected.
* We fixed a bug where the structure settings sidebar was not opened by default when starting a Get Structures integration.
* We fixed an issue where canceling a background job would sometimes show a message to the user.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 4.0.1

**Release Date:** April 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.21.0 or higher

#### Changes

We upgraded the Teamcenter Extension to Mendix 10.21.0.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 4.0.0

**Release Date:** April 9, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### SSO Support

We added SSO support to the Teamcenter Extension. With this new feature, it is possible to use the Teamcenter Extension with Teamcenter instances that make use of SSO login instead of credentials-based login.

#### Improvements

* We changed the login flow for credentials-based sign in. Instead of storing the credentials on the Teamcenter configuration, the user is now prompted to log in in a login dialog when a login is necessary. This aligns credentials-based sign in with SSO sign in and prevents sharing credentials among developers through versioning.
* We improved the way the communication between the React frontend and the C# backend was handled.
* We improved how cookies are handled by the Teamcenter Extension.
* We improved the error message when trying to navigate to a microflow that does not exist from the history tab.

#### Fixes

* We fixed a bug where it was not possible to create an integration to revise a specialization of ItemRevision.
* We fixed an update issue with the dropdown to select the target module on the settings page.
* We fixed an issue where the Teamcenter configuration was sometimes restored when manually deleting the configuration from disk.
* We fixed an issue where canceling the retrieval of filetypes for Dataset types allowed creation of integrations where an incorrect combination of filetype and dataset type were used (attach dataset to item revision integration).
* We fixed a UI bug where the Teamcenter object tree in the object mapping dialog was cut off in case of long object names.
* We fixed an issue where the left-most part of the object row in the Teamcenter object tree in the object mapping dialog was not clickable.
* We fixed the sorting of the default relations in the configuration sidebar for the get dataset for item revision integration.
* We fixed the validation message for missing entities so that it shows entities only once when used multiple times in an import mapping.
* We fixed an issue with the error boundary in the UI.
* We aligned the naming of the integrations on the import mapping page with the tiles in the menu.
* We fixed an issue where canceling the generation of microflows and domain model and then still generating them, resulted in duplication of the integration on the history page.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

## Version 3

### 3.3.0

**Release Date:** March 6, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Relate Workspace Objects

We added the feature to generate a microflow to relate two WorkspaceObjects or specializations thereof and the corresponding domain model. The resulting microflow implements the Create Relation action from the TcConnector.

#### Improvements

* Improved the error handling in the extension to better guide the user when something goes wrong.
* Improved the UX for the Get Datasets for Item Revision and Attach Dataset to Item Revision integrations by including a background job.
* Included minor UI improvements.
* Added the possibility to filter on type in the properties/relations/references side panel.

#### Fixes

* Fixed an issue where canceling starting an integration prevented you to start the same integration a second time without first performing another action in the extension.
* Fixed an issue where canceling a validation of an integration was not correctly displayed in the UI.
* Fixed an issue where you could edit/duplicate an integration when no target module was configured.
* Fixed an issue where annotations were not sorted correctly.
* Fixed an issue where self-associations were not correctly generated with complex compound structures where entities were reused.
* Fixed an update issue in the React frontend.
* Fixed an issue where a scrollbar would appear when quickly scrolling up and down in the extension.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 3.2.1

**Release Date:** January 7, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### Fixes

* Fixed the duplication of integrations when multiple developers are working with the extension simultaneously.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

### 3.2.0

**Release Date:** December 12, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.6 or higher

#### New Features

##### Dark Mode

The Teamcenter Extension now supports dark mode. It will display the same mode as Studio Pro. Change your Studio Pro settings (**Edit** > **Preferences** > **Work Environment**) to Dark to see the new mode.

##### Table Sorting

Tables in the Teamcenter Extension now support sorting. For example, when configuring an import mapping, the columns in the sidebar displaying the details of Teamcenter properties are now sortable. Click on the column headers to sort the columns ascending and descending alphabetically, respectively.

#### Improvements

* Changed label **Name** to **Internal Name** in property sidebar for added clarity.

#### Fixes

* Fixed an issue that when canceling the deletion of an integration, the integration was no longer visible, until reloading the Teamcenter Extension.
* Fixed an issue with the Attach Dataset integration. The default property `TC_manifestation` was misspelled.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.
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

* Improved the validation of integrations where validations will pass when deleting and then restoring microflows or entities.
* Added a dropdown with autocomplete functionality.
* We renamed the empty parameter entity for clarity.
* Dataset types are always fetched anew from Teamcenter, also when editing/duplicating an integration.
* Introduced support for table properties from Teamcenter.

#### Fixes

* Fixed an issue with the positioning of the entities in the import mapping preview in the history tab.
* Fixed an issue when using the mouse-back button.
* Fixed an issue where sometimes when editing/duplicating an integration to get Datasets for ItemRevisions the dataset type was preselected when it should not have been.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* Entities from add-on modules or entities where at least one of their generalizations is from an add-on module cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. These cannot be used.

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

In addition, the extension generates a microflow to:

* Retrieve files or images for a Dataset.

##### Navigation to Artifacts

We added the feature where the developer can navigate to the (generated) entities and to the generated microflows from the history tab.

#### Breaking Changes

Teamcenter Extension 3.0.0 has been upgraded to work with:

* Mendix Studio Pro 10.12.6 (minimum version)
* TcConnector 2406.3.0 (minimum version)

For steps on how to upgrade from 2.0.0 to 3.0.0, see [Upgrading Teamcenter Extension](/appstore/industry/teamcenter-extension/upgrading-teamcenter-extension/).

In addition, there is a change to the way Teamcenter Extension integrations are stored on disk (the configurations of the integrations, not the generated microflows). We have added upgrade logic, so existing integrations should still work.

#### Improvements

* Improved the way the extension checks if editing or duplication of integrations is allowed.
* Added validations to the history tab to check for conflicts in association names and multiplicities.
* Developers can now leave the Teamcenter configuration name (ConfigName input parameter) empty. In that case, for the integrations the active Teamcenter configuration is retrieved from the database. If multiple active Teamcenter configurations exist, an exception will be thrown.
* Reorganized the menu of the extension and created more intuitive icons for the supported integrations.
* Improved the checks to check the compatibility of the extension with the Mendix Studio Pro version and the TcConnector version. Also, the extension is now working with minimum versions of its dependencies instead of exact versions.
* Improved the consistency of how exceptions are logged and communicated to the user.
* Added support for macOS. Note, as macOS support for Mendix Studio Pro is still in beta, the same is true for the Teamcenter Extension.
* Added path to root Teamcenter object type in the object mapping dialog.
* Improved the text in the get structures configuration sidebar.

#### Fixes

* Mitigated maximum path length issues for Mendix projects with long path lengths.
* Fixed an issue with the scrollbar for the list of integrations on the History tab.
* Fixed an issue where relations and references were not preselected when editing or duplicating an integration.
* Increased the consistency of the way error handling was modeled in the Toolkit microflows.
* Fixed an issue that if an entity was reused in the import mapping, it turns up multiple times in the generated BO mapping.
* Fixed a redundant warning when changing the object mapping without associated child mappings.
* Fixed an issue where the user could still interact with the extension tab after editing or duplicating an integration.
* Fixed an issue where it was not possible to change the object mapping in some of the Teamcenter integrations.

#### Known Issues

* The Teamcenter Extension is not compatible with Mendix Studio Pro 10.13.0, 10.13.1, 10.14.0, and 10.15.0.
* In the object mapping dialog, entities from add-on modules or entities where at least one of their generalizations is from an add-on module will not be visible and cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. This results in errors in the generated/updated domain model.

## Version 2

### 2.0.0

**Release Date:** July 19, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.12.1 or higher

#### New Features

Teamcenter Extension 2.0.0 allows managing of integrations. We have added a new tab to the landing page of the extension where the integrations are listed. When clicking on an integration, details of the integration are shown including validation feedback showing the health of the integration. The developer can click on edit to change an integration and on duplicate to create a new integration using an existing integration as a starting point (the original integration will remain unchanged). Also, integrations can be deleted. Note that, in that case, the actual microflows and entities are not removed from the Mendix model.

#### Breaking Changes

Teamcenter Extension 2.0.0 has been upgraded to work with:

* Mendix Studio Pro 10.12.1 (minimum version)
* TcConnector 2406.0.0 (minimum version)

For steps on how to upgrade from 1.0.0 to 2.0.0, see [Upgrading Teamcenter Extension](/appstore/industry/teamcenter-extension/upgrading-teamcenter-extension/).

#### Improvements

* Display integration title on the import mapping page for reference.
* Added a link to Mendix docs in the object mapping dialog and **Teamcenter Settings** > **Edit** dialog.
* Enriched the documentation for the generated entities in the domain model.
* Removed FMS URL from the Teamcenter settings as this was not actively used by the extension.
* Removed spelling checker from the input fields.
* Improved the sorting behavior of the object mapping dialog.
* Improved the performance of the object mapping dialog.
* Removed dependence on Community Commons module.

#### Fixes

* Maximum length of string attributes created by the extension did not match the maximum lengths as configured in Teamcenter.
* Extension did not create a custom ReviseItemRevision input object when creating the entities and microflow to revise an ItemRevision.
* Teamcenter properties/relations/references with spaces in the name could be selected when configuring an integration. The current version of the TcConnector does not support properties/relations/references with spaces in the name.
* Microflow generated by the extension had a conflicting object name.
* Fixed the minimum height of an entity in the import mapping page.
* Fixed merge conflicts were created for the Teamcenter cookie.

#### Known Issues

* In the object mapping dialog, entities from add-on modules or entities where at least one of their generalizations is from an add-on module will not be visible and cannot be used in the object mapping.
* Teamcenter properties can have spaces in their name; Mendix attributes cannot. This results in errors in the generated/updated domain model.

## Version 1

### 1.0.0

**Release Date:** April 22, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/225544" text="Go to Marketplace" title="Download Teamcenter Extension from the Marketplace" %}}

**Requirements:** Studio Pro 10.6.5 or higher

Initial Release
