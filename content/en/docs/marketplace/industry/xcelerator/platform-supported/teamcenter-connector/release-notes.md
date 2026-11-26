---
title: "Teamcenter Connector Release Notes"
linktitle: "Release Notes"
url: /appstore/industry/teamcenter-connector/release-notes/
weight: 10
description: "Provides the release notes for the Teamcenter Connector, grouped by major version, with details on new features, improvements, fixes, and breaking changes."
numberless_headings: true
---

## Introduction

This page contains the release notes for the [Teamcenter Connector](https://marketplace.mendix.com/link/component/111627) module. The releases are grouped by major version, and the newest release is at the top of each group.

For the Teamcenter, Teamcenter X, and Mendix versions that each release supports, see [Compatibility Matrix](/appstore/industry/teamcenter-connector/compatibility-matrix/).

## 2606

### 2606.1.1

**Release Date:** November 26, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 11.12.4 or higher

**Security Issues Fixed:** [CVE-2026-110879](https://www.cve.org/CVERecord?id=CVE-2026-110879)

#### Fixes

##### Connector

* We updated `jackson-core` and `jackson-databind` from 2.22.3 to 2.22.4 to resolve a vulnerability.

### 2606.1.0

**Release Date:** November 19, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 11.12.4 or higher

**Security Issues Fixed:** [CVE-2026-89425](https://www.cve.org/CVERecord?id=CVE-2026-89425), [CVE-2026-89407](https://www.cve.org/CVERecord?id=CVE-2026-89407), [CVE-2026-91777](https://www.cve.org/CVERecord?id=CVE-2026-91777), [CVE-2026-91776](https://www.cve.org/CVERecord?id=CVE-2026-91776)

#### New Features

##### Connector

* **Teamcenter Context for Maia** – The Teamcenter Connector now has Mendix AI Assistance (Maia) skills that help you create Teamcenter integrations in Mendix. The skills provide general information on Mendix Teamcenter integrations, as well as information on Teamcenter domain knowledge, the Teamcenter Connector and Service document and the concept of business object mappings. In addition, we added a dedicated skill to help developers set up their Teamcenter instances in connector and Service document.
* **Teamcenter Workflow** – The Teamcenter Connector now has implementation microflows that make it a lot easier to integrate with Teamcenter workflow. For this, there is a new category in the toolbox called **Teamcenter Connector - Implementations - Workflow**. With these microflows, you can retrieve workflow templates, submit item revisions to a workflow and retrieve the tasks for a user's inbox. We also added microflows that can act on workflow tasks, for example to complete, suspend, resume, reassign, abort and attach a reference or target. For the attach reference we have introduced the `root_reference_attachments` relation. In addition, you can manage reviewers and signoffs: you can assign, add or replace reviewers, claim signoffs assigned to a resource pool, and approve or reject signoffs. This means your Mendix app can act as an orchestration layer with Teamcenter workflows as one part of a business process that spans multiple systems.

##### Service document

* **Update Workspace Object** – The Teamcenter Service document now supports the generation of domain model and artifacts for updating the properties of Workspace Objects in Teamcenter.

#### Improvements

##### Connector

* We improved the error message when saving a Teamcenter configuration fails: it now shows the cause instead of the generic Mendix error.
* We changed the upload and download actions so they throw an error when something goes wrong, such as an FMS connection error, invalid input or incomplete data from Teamcenter, instead of failing silently.
* There were three 'create BOM window' microflows exposed in the toolbox. We removed one and gave the other two distinct exposed names.

##### Service document

* We made the active module preselected when configuring constants for secrets.
* We added a new consistency error for the scenario where Teamcenter Service documents were referencing domain models that no longer exist.
* We added a scrollbar to the integrations menu.

#### Fixes

##### Connector

* We fixed an issue that made it impossible to upload files to Teamcenter with `UploadFiles` and `UploadTemporaryFiles` when using Teamcenter X authentication.
* We fixed an issue that made it impossible to download a file or image from Teamcenter when using Teamcenter X authentication.
* We now store the Teamcenter X access token encrypted.
* We updated `jackson-core` and `jackson-databind` from 2.22.2 to 2.22.3 to resolve a vulnerability.

##### Service document

* We fixed a race condition when editing and generating integration microflows.
* We fixed a bug in the display order of the attributes of selected Teamcenter properties.
* We fixed the issue that it was possible to select Teamcenter properties whose name is a Mendix reserved word.
* We fixed an issue where the name of new associations could conflict with existing associations on specializations of the parent entity.
* We fixed the issue where cast actions were added to generated microflows where the cast action was redundant.
* We updated Zod to version 4.6.7 to fix a performance bug.
* We fixed an issue with the height of the property mapping dialog when the dialog does not include a list of properties/relations/references.

#### Breaking Changes

##### Connector

* We upgraded the Teamcenter Connector to Studio Pro 11.12.4, so it now requires Studio Pro 11.12.4 or later.
* We changed `ExpandPSOneLevel2` so that it no longer creates FileDocuments when `DownloadFiles` is false.
* We removed support for comma-separated lists of FMS URLs.
* We have deprecated the `TcConnector.task` association and this is replaced by the `TcConnector.actionableObject` association (`PerformAction3`). For the upgrade, check all usages of the `TcConnector.task` association and replace them with `TcConnector.actionableObject`.

### 2606.0.1

**Release Date:** September 23, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 11.12.1 or higher

**Security Issues Fixed:** [CVE-2026-83557](https://www.cve.org/CVERecord?id=CVE-2026-83557), [CVE-2026-68497](https://www.cve.org/CVERecord?id=CVE-2026-68497), [CVE-2026-19032](https://www.cve.org/CVERecord?id=CVE-2026-19032)

#### Improvements

##### Connector

* We added support for custom session cookie names.

##### Service document

* We improved the logic to calculate the position of entities in the domain model when creating entities for an integration and the anchor points for associations in the generated domain model.
* We added consistency errors for excluded microflows and constants.
* We made the **Configure relation...** button always visible in the import mapping toolbar for relate workspace object integration.
* We improved the validation of URLs on the settings page.
* We added a maximum length to input fields.
* We improved the UI of the object mapping information in the property mapping dialog.
* We upgraded to the latest version of the Studio Pro Design System to further align the UI with Studio Pro and improve accessibility (in particular keyboard navigation).
* We added a breadcrumb to the object mapping dialog as a UI improvement.

#### Fixes

##### Connector

* We fixed an issue where the BOM component could not retrieve Teamcenter information because the session cookie was looked up incorrectly when hosting on Mendix Cloud.
* We fixed a regression where an Operation Mapping could no longer be supplied as a JSON document.
* We updated Java dependencies to resolve vulnerabilities.

##### Service document

* We fixed the bug where the integrations tree and import mapping trees did not show tooltips on hover.
* We fixed the horizontal alignment of large import mapping trees in the import mapping page.
* We fixed the positioning of the alert on the settings page so it no longer overlaps with the tab buttons.
* We fixed a bug where it was not possible to edit and (re)generate an integration which linked to a microflow that is excluded.
* We fixed a bug where consistency errors were not shown when something was wrong with create or revise input entities.

#### Breaking Changes

##### Connector

* The `ConfigurationName` parameter of `RULE_TeamcenterConfiguration_IsLoggedIn` is required again. It was optional in 2606.0.0.

### 2606.0.0

**Release Date:** July 31, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 11.12.1 or higher

#### What Is New in 2606?

Version 2606 of the Teamcenter Connector significantly consolidates and modernizes Teamcenter integrations. The Teamcenter Connector now includes a new Studio Pro extension for configuring your integrations, a complete rebuild with many quality of life improvements. We consolidated everything into one place. Previously, you had to download the Teamcenter Connector module and the Teamcenter Extension (which contained Teamcenter Toolkit and the Extension as part of an add-on module) separately. Now it is one single download, one import, and one version to track. The Teamcenter Toolkit has been integrated into the TcConnector module, with all of its microflows, entities, and Java actions.

Version 2606 requires Mendix Studio Pro 11.12.1 or higher.

#### New Features

##### Teamcenter Service document

We introduced the Teamcenter Service document, a new design-time approach that changes how you build Teamcenter integrations. The Service document is your starting point and central hub for managing all integrations within a module. It replaces the previous menu-based Extension that stored configuration files on disk. The document contains two main sections:

* **Settings** tab where you configure your Teamcenter connection and authentication (with automatic credential clearing when connection details change for security).
* **Integrations** tab that provides an overview of all configured integrations, showing generated entities and microflows. From the **Integrations** tab, you can view, edit, duplicate, or delete integrations. You can create multiple Service documents within your application, each in a separate module. This enables you to organize integrations by concern (for example, separate documents for parts, workflows, and documents).

To create a Service document, right-click a module in the **App Explorer** and select **Add other** > **Teamcenter service**. Once configured, the Extension generates everything you need: entities, associations, create/revise input entities, and microflows. This keeps your integration artifacts organized and version-controlled alongside your other Mendix documents.

##### Mendix in AWC

We made some changes to the Teamcenter Connector that are required for embedding Mendix applications in Teamcenter Active Workspace Client. For more information, see [Mendix Inside Teamcenter](/refguide/mendix-client/mendix-inside-teamcenter/). These changes also give you more control over session management and authentication when building Mendix applications that integrate with Teamcenter:

* We added an optional session discriminator on `Login` and `LoginSSO`. `Credentials` now has a new discriminator field; empty means unchanged behavior. This allows an embedded Mendix component to maintain separate sessions when needed.
* We added a session discriminator on the `/tcsso/login` service, so an embedded Mendix component can now reuse the active AWC Teamcenter session.
* We introduced a new anonymous REST endpoint to check whether the current session is logged in to Teamcenter without requiring authentication.

#### Improvements

##### TcConnector

* We hardened security by removing Create and Delete rights from all entities to align with security best practices. The Administrator role no longer has direct entity-level access (except for Teamcenter Configuration). For all Teamcenter integrations, you should now use the User role.
* We improved SSO configuration error logging. Messages now name the fields that may be wrong and match the Teamcenter Extension.
* We added a consistent Teamcenter icon on all published actions. Actions marked with a Teamcenter icon in Studio Pro are published and intended for your use. Actions without the icon are internal implementation details and should not be called directly from your microflows.
* We upgraded to Mendix 11.12.1.
* We established clearer public and private boundaries in the structure of the TcConnector module. The Teamcenter Connector now has a well-defined public API.

##### Teamcenter Extension

* We rebuilt the Teamcenter Extension using the Mendix Web Extensibility Framework (TypeScript). Previously, it used the C# Extensibility Framework, which Mendix is discontinuing. This ensures continued compatibility with future Mendix releases.
* We redesigned the Teamcenter Extension to follow the Studio Pro Design System. As a result, the extension looks and feels like a native part of Studio Pro even more so than the C# extension. The experience is more consistent with the rest of your development environment.
* We introduced the Teamcenter Service document. This document stores your integrations in the Mendix model. You can create multiple Service documents per app/module. This enables you to organize your Teamcenter integrations by functional area (for example, a Parts module and a Workflows module can each have their own Service document) or by Teamcenter environment. An added benefit of the Teamcenter Service document is that integrations and Teamcenter instance settings are now stored as a document within your module, just like microflows and pages. The Teamcenter Service document is the new entry point for your Teamcenter integrations and replaces the previous menu-based extension that stored configuration files on disk.
* We introduced Teamcenter Service document consistency checks. The extension validates your integrations and shows consistency checks when your integration gets corrupted. The extension listens to model changes to make sure the consistency checks remain in sync. The consistency checks are displayed as warnings in the Error List. This also allowed us to clean up the UI of the integrations overview. Instead of showing warning in the extension, we now refer to the Error List, if there are consistency errors.
* We removed the sidebar from the import mapping page. Instead, the extension uses dialogs for selecting properties and configuring integration specific properties. This is more in line with Mendix Studio Pro.
* We added a button to the toolbar of the import mapping page to launch the property mapping dialog for the selected business object / entity.
* We introduced constants to store the secrets used in the Teamcenter X SSO configuration for the Teamcenter Extension. This way, you can choose to keep them secret and prevent committing them to version control.
* We added the option to clear the object mapping for a business object / entity by selecting either and pressing <kbd>Delete</kbd>.
* We added a new annotation to the Get structure integration that displays the integration specific properties: which revision rule to use, if variant rules are used and if BOM window properties are configured at design time.

#### Fixes

* We improved the error message when the provided configuration name does not exist.
* We fixed a blocking (locked) state when calling multiple Teamcenter Java actions within one transaction. This issue could cause one locked user to prevent other users from executing Teamcenter operations.
* We fixed an error when a Teamcenter response contained an array mixing empty strings and valid Model Object UIDs. (Ticket 269666)
* We updated attributes on `BOMLine`, `ReviseItemRevision`, `User` and `WorkspaceObject` entities to match Teamcenter defaults, reducing the chance of data truncation:
    * `BOMLine` `bl_rev_object_name` (128)
    * `BOMLine` `bl_quantity` (24)
    * `BOMLine` `bl_plmxml_abs_xform` (240)
    * `ReviseItemRevision.item_revision_id` (32)
    * `User.userid` (32)
    * `WorkspaceObject.checked_out` (32)
* `WhereUsed2` now correctly maps `clientId` and `level` in its response.
* We fixed a misleading error "Entity does not exist: ListOfValues" from `GetAttachedLOV` and `GetAttachedPropDescs2`.
* We renamed FileType/File Type to NamedReference/Named Reference for consistency with Teamcenter naming conventions.

#### Deprecations

We deprecated the following elements from the Teamcenter Connector. Deprecated elements are excluded and will be removed in a future release but continue to ship until then. Replacing them is recommended.

##### Deprecated Microflows with a Replacement

* `DownloadFile` – use the `DownloadFile`/`DownloadImage` Java actions instead
* `ExecuteLogin` – use the `Login` microflow instead
* `ExecuteLogout` – use the `Logout` microflow instead

##### Deprecated Microflows without a Direct Replacement

See the annotation on each microflow for guidance:

* `AreMultipleTcConfigActive`
* `CloseBOMWindow`
* `HandleActiveConfigErrors`
* `HandleServiceErrors`
* `RetrieveConfigNameFromSingleActiveConfiguration`
* `RetrieveHttpHeaderList`
* `RetrieveTcSessionBasedOnConfigName`
* `RetrieveTeamcenterConfigurationByName`
* `RetrieveTeamcenterConfigurationFromTcSession`
* `ShowPartialErrors`
* `UpdateSession`

##### Deprecated Java Actions

See each action's documentation for its successor:

* `CreateBOMWindows`
* `CreateBOMWindows2`
* `ExpandPSOneLevel`
* `GetItemFromId`
* `GetTcSessionInfo`
* `GetWorkflowTemplates`
* `PerformAction`
* `RetrieveCookie`
* `WhereUsed`

##### Deprecated Entities

The following entities have been deprecated. To indicate this, the entities have been renamed with an underscore prefix:

* `CreateBomWindowInput`
* `CreateBomWindowInput_CreateBomWindowResponse`
* `CreateBomWindowResponse`
* `ExpandPSOneLevelResponse`
* `GetItemFromIdInput`
* `GetItemFromIdResponse`
* `GetWorkflowTemplatesInput`
* `ItemRevisionOutput`
* `RevisionIDs`
* `SessionUser`
* `TcServerInfo`
* `WhereUsedInput`
* `WhereUsedResponseInfo`

##### Moved to Private

No longer published in the toolbox. Use the wrapper microflow of the same name instead:

* `Login` Java action – use the `Login` microflow
* `Logout` Java action – use the `Logout` microflow
* `LoginSSO` Java action – set up the SSO login flow as described in the documentation

#### Breaking Changes

##### Resources Folder

* We changed the structure of the resources folder. All resources for the connector are now in the **Resources/TcConnector** folder.
* When upgrading, move all custom Operation Mapping JSONs to **Resources/TcConnector/OperationMapping** and remove the old Operation Mapping folder (**Resources/OperationMapping**).
* The folder **Resources/TeamcenterCommon** may be removed.
* The folder **Resources/TeamcenterConnector** may be removed.

##### Teamcenter Toolkit Integration

* We integrated the Teamcenter Toolkit content into the Teamcenter Connector. Its microflows, folders and entities are now in the Connector under the same names; `BOMLine` entities were merged and the search-criteria entities moved. Regenerate your integration with the Teamcenter Extension to resolve references to the microflows and entities.

##### Removed Actions

We removed the following microflow and Java actions. If they are still used in your project, retain the old `TeamcenterToolkit` module until you have migrated away from these actions:

* `ModelObject_AddToExistingOrNewList`
* `JA_CopyModelObjectToNewCreateInput`
* `JA_CreateDatasetSpecialization`
* The pre-configured `CreateBOMWindow` variants (`CreateBOMWindow_Default`, `CreateBOMWindow_RevisionRule`, `CreateBOMWindow_VariantRule` and their combinations) – use `CreateBOMWindow` or `CreateBOMWindow_ByConfigurationContext` instead. We updated the `CreateBOMWindow` microflow: its parameters are now optional, and we have split off a separate `ByConfigurationContext` variant for cases where you need that level of control.

##### Security Model

* We removed Create and Delete rights on all entities. The Administrator role now only has access to Teamcenter Configuration. Use the User module role for Teamcenter integrations.

##### Error Handling

* We changed the error handling behavior. The Connector no longer shows in-app error messages automatically. Instead, all error conditions throw exceptions, giving your microflows full control over how to handle and present errors to users.

##### Configuration Requirements

* We fixed a bug where provision of a `ConfigurationName` to Java actions changes the behavior. The `ModelObject` Java class now consistently requires `ConfigurationName` to be set in all cases. Previously, the behavior varied depending on whether you passed a configuration name or not.

##### Entity Changes

* We removed the `LastError` attribute from the `Credentials` entity. Use exception handling instead.
* We introduced a new naming convention for `CreateInput` and `CompoundCreateInput` specializations generated by the Teamcenter Service document. If you have existing integrations, you will need to regenerate them by creating a new Teamcenter Service document, configure your integration, and generate the artifacts. Note that regeneration will not delete your previous input entities, so these need to be removed manually.

## 2512

### 2512.1.3

**Release Date:** October 14, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2026-89425](https://www.cve.org/CVERecord?id=CVE-2026-89425), [CVE-2026-89407](https://www.cve.org/CVERecord?id=CVE-2026-89407), [CVE-2026-91777](https://www.cve.org/CVERecord?id=CVE-2026-91777), [CVE-2026-91776](https://www.cve.org/CVERecord?id=CVE-2026-91776)

#### Fixes

* Fixed an issue that made it impossible to upload files to Teamcenter with `UploadFiles` and `UploadTemporaryFiles` when using Teamcenter X authentication.
* Fixed an issue that made it impossible to download a file or image from Teamcenter when using Teamcenter X authentication.
* The Teamcenter X access token is now stored encrypted.
* The upload and download actions now throw an error when something goes wrong, such as an FMS connection error, invalid input or incomplete data from Teamcenter, instead of failing silently.
* Updated `jackson-core` and `jackson-databind` from 2.22.2 to 2.22.3 to resolve a vulnerability.
* Updated the FMS client library (*fscjavaclientproxy.jar*) from the Teamcenter 2506 build to the 2512 build.

#### Breaking Changes

* `ExpandPSOneLevel2`: when `DownloadFiles` is false, FileDocuments are no longer created.
* Comma-separated lists of FMS URLs are no longer supported.

### 2512.1.2

**Release Date:** September 11, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2026-19032](https://www.cve.org/CVERecord?id=CVE-2026-19032), [CVE-2026-49844](https://www.cve.org/CVERecord?id=CVE-2026-49844), [CVE-2026-54512](https://www.cve.org/CVERecord?id=CVE-2026-54512), [CVE-2026-54513](https://www.cve.org/CVERecord?id=CVE-2026-54513), [CVE-2026-54514](https://www.cve.org/CVERecord?id=CVE-2026-54514), [CVE-2026-54515](https://www.cve.org/CVERecord?id=CVE-2026-54515), [CVE-2026-54516](https://www.cve.org/CVERecord?id=CVE-2026-54516), [CVE-2026-54517](https://www.cve.org/CVERecord?id=CVE-2026-54517), [CVE-2026-54518](https://www.cve.org/CVERecord?id=CVE-2026-54518), [CVE-2026-59888](https://www.cve.org/CVERecord?id=CVE-2026-59888), [CVE-2026-59889](https://www.cve.org/CVERecord?id=CVE-2026-59889), [CVE-2026-68494](https://www.cve.org/CVERecord?id=CVE-2026-68494), [CVE-2026-68497](https://www.cve.org/CVERecord?id=CVE-2026-68497), [CVE-2026-77310](https://www.cve.org/CVERecord?id=CVE-2026-77310), [CVE-2026-83557](https://www.cve.org/CVERecord?id=CVE-2026-83557)

#### Improvements

* Added support for custom session cookie names.

#### Fixes

* Fixed a bug where the session cookie could not be found when hosting on Mendix Cloud.
* Fixed an issue where `GetWorkflowTemplates2` did not work on a deployed application due to an incorrect folder name.
* Updated Java dependencies to remove vulnerabilities.

### 2512.1.1

**Release Date:** May 22, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CWE-770](https://cwe.mitre.org/data/definitions/770.html)

#### Fixes

* Updated `com.fasterxml.jackson.core:jackson-databind` `com.fasterxml.jackson.core:jackson-core` to 2.21.2 to resolve vulnerabilities

### 2512.1.0

**Release Date:** March 30, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2025-68161](https://www.cve.org/CVERecord?id=CVE-2025-68161), [CVE-2026-18401](https://www.cve.org/CVERecord?id=CVE-2026-18401), [CVE-2026-34477](https://www.cve.org/CVERecord?id=CVE-2026-34477), [CVE-2026-34478](https://www.cve.org/CVERecord?id=CVE-2026-34478), [CVE-2026-34479](https://www.cve.org/CVERecord?id=CVE-2026-34479), [CVE-2026-34480](https://www.cve.org/CVERecord?id=CVE-2026-34480)

#### Fixes

* Added Teamcenter SSO compatibility with Teamcenter 2406 and Teamcenter 2312
* Updated Java dependencies to remove vulnerabilities in the dependencies
* Improved `Core-2012-02-DataManagement/whereUsed` – `clientId` from the request is returned correctly in the response. Level is correctly mapped in the response.

#### Breaking Changes

* User provisioning for Teamcenter SSO has changed as a result of the fix. `TcSSOUserInformation` now only contains `User` and `Locale`. To get the Teamcenter username in user provisioning, use `User` instead of `sub`.

### 2512.0.1

**Release Date:** February 23, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

#### Fixes

* Fixed an error due to Teamcenter responses containing arrays with a mix of empty strings and Model Object UIDs (Ticket 269666)
* Allow for Teamcenter URLs without top-level domains (for example, not ending in `.com`)
* Made the FMS URL configuration field optional
* Throw a clear error when a Teamcenter URL that does not end with a slash is called

### 2512.0.0

**Release Date:** February 16, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

(original publication December 11, 2025, republished to include OSS license information)

#### New Features

* `GetWorkflowTemplates2` Java action to support the newer `2013-05/Workflow/getWorkflowTemplates` SOA endpoint
* `PerformAction3` Java action to support the newer `2014-06/Workflow/performAction3` SOA endpoint
* `WhereUsed2` Java action to support the newer `2012-02/DataManagement/whereUsed` SOA endpoint
* `StartUp` microflow to register request handlers for AWC widgets (TcBOM widget)

#### Improvements

* Reimplemented Teamcenter X SSO to remove the OIDC module dependency
* Reimplemented Teamcenter SSO to be consistent with Teamcenter X SSO
* Improved the overall SSO setup experience to remove the need for startup microflow and custom home pages
* Teamcenter SSO now supports user provisioning and anonymous user authentication from the login page
* Aligned and simplified the authentication process – Credentials, Teamcenter SSO, and Teamcenter X SSO are now consistent
* Updated styling of the Teamcenter login page
* Support for Mendix 11
* Support for the React client

#### Changes

* Updated *fmsutils.jar* to Tc2512 compatible version

#### Fixes

* Fixed an issue with a synchronization statement in the Java code where a single locked user could also lock out other users

#### Breaking Changes

* Removed `UserLogin` microflow, use `NAV_UserLogin` navigation microflow instead
* Removed `ShowLoginPage` microflow, use `NAV_UserLogin` navigation microflow instead
* Removed `LoginToMultipleTeamcenters` microflow, use `NAV_UserLoginMultipleActive` navigation microflow instead
* Removed `AdminLogin` microflow, use User module role instead
* Removed `AdminHomePage` page, use `NAV_AdminHomePage` navigation microflow instead
* Removed `SSO_RegisterRequestHandlers` after startup microflow, no longer required
* Removed `TeamcenterConfiguration` event handlers, if you have custom logic for `TeamcenterConfiguration` objects, confirm it has the correct validations
* Deleted `HomePage` entity, no longer required
* Multiple microflows and pages deleted from the Private folder
* Multiple microflows and pages moved from Public to Private folder, check these are no longer directly referenced

## 2506

### 2506.0.1

**Release Date:** May 22, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2025-68161](https://www.cve.org/CVERecord?id=CVE-2025-68161), [CVE-2026-18401](https://www.cve.org/CVERecord?id=CVE-2026-18401), [CVE-2026-34477](https://www.cve.org/CVERecord?id=CVE-2026-34477), [CVE-2026-34478](https://www.cve.org/CVERecord?id=CVE-2026-34478), [CVE-2026-34479](https://www.cve.org/CVERecord?id=CVE-2026-34479), [CVE-2026-34480](https://www.cve.org/CVERecord?id=CVE-2026-34480), [CWE-770](https://cwe.mitre.org/data/definitions/770.html)

#### Improvements

* Support for Mendix 11
* Support for the React client

#### Fixes

* Upgraded to Mendix 10.24.8
* Updated Java dependencies to resolve vulnerabilities
* Ensured compatibility with OIDC 4.3.0 and OIDC 4.4.0

### 2506.0.0

**Release Date:** August 21, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.20.0 or higher

Teamcenter versions supported: 2506

#### Improvements

* Cleaned up unused JARs.
* Upgraded FMS/TcSS JARs to 2506 version.
* Added support for using authenticated FSC for Teamcenter X
* Updated string property length of TcConnector domain model entities to align with corresponding Teamcenter property length.
* Fixed error handling for `RetrieveConfigNameFromSingleActiveConfiguration` microflow. On error, exception is thrown. It is consumers' responsibility to deal with exceptions as per requirement.
* Introduced `HandleActiveConfigErrors` to show configuration errors.
* Handled partial errors for `ReviseObjects` Java action. Partial errors can be read using `ShowPartialErrors` microflow.
* Stack trace handling for Java actions:
    * Added `Logger.trace` to print stack trace when exception occurs
    * Fixed `UploadFiles` Java action to return `FALSE` on exceptions.

#### Configured Managed Dependencies for

* *jackson-annotations-2.19.0.jar*
* *jackson-core-2.19.0.jar*
* *jackson-databind-2.19.0.jar*
* *log4j-api-2.24.3.jar*
* *log4j-core-2.24.3.jar*
* `org.apache.httpcomponents-httpmime-4.5.13`
* `org.apache.httpcomponents-httpcore-4.4.13`
* `org.apache.httpcomponents-httpclient-4.5.13`

#### Userlib Exclusions

* *TcLogging.jar*
* *fmsutil.jar*
* *fscjavaclientproxy.jar*
* *teamcenter_sso_applib.jar*
* *teamcenter_sso_common.jar*

#### Known Issues

* When you set up Teamcenter X, the following error can occur: "Name has an issue: This field is required! FriendlyName has an issue: This field is required!" This means that an empty claim is imported in the `CreateClaimwithFriendlyName` microflow. As a workaround, add an empty check.

## 2412

### 2412.3.0

**Release Date:** May 22, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2020-13956](https://www.cve.org/CVERecord?id=CVE-2020-13956), [CVE-2021-29425](https://www.cve.org/CVERecord?id=CVE-2021-29425), [CVE-2022-42003](https://www.cve.org/CVERecord?id=CVE-2022-42003), [CVE-2022-42004](https://www.cve.org/CVERecord?id=CVE-2022-42004), [CVE-2024-47554](https://www.cve.org/CVERecord?id=CVE-2024-47554), [CVE-2025-48924](https://www.cve.org/CVERecord?id=CVE-2025-48924), [CVE-2025-52999](https://www.cve.org/CVERecord?id=CVE-2025-52999), [CVE-2025-68161](https://www.cve.org/CVERecord?id=CVE-2025-68161), [CVE-2026-34477](https://www.cve.org/CVERecord?id=CVE-2026-34477), [CVE-2026-34478](https://www.cve.org/CVERecord?id=CVE-2026-34478), [CVE-2026-34479](https://www.cve.org/CVERecord?id=CVE-2026-34479), [CVE-2026-34480](https://www.cve.org/CVERecord?id=CVE-2026-34480), [CVE-2026-50193](https://www.cve.org/CVERecord?id=CVE-2026-50193), [CWE-770](https://cwe.mitre.org/data/definitions/770.html)

#### Fixes

* Upgraded to Mendix 10.24.8
* Updated Java dependencies to remove unused JAR files and to resolve vulnerabilities
* Ensured compatibility with OIDC 4.3.0 and OIDC 4.4.0

### 2412.225.0

**Release Date:** May 13, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.4.0 or higher

Release Notes (Teamcenter Connector version 2412.0225.0)

Following is the list of improvements/bug fixes in Teamcenter Connector version Tc2412.0225.0

Note: This version of TcConnector is supported on Mendix 10.4.0 onwards.

Supported with Teamcenter version: 2412

#### Improvements

* Cleaned up some unused JARs.
* Fixed Mendix-Teamcenter SSO connection issue. The issue is fixed by upgrading TCSS JARs to TCSS2412.

    Refer to the documentation for configuring Teamcenter with single sign-on.

* Updated `log4j` from 2.17.1 to 2.23.1 for managing conflicts with Excel Export module.

#### Known Issues

* When you set up Teamcenter X, the following error can occur: "Name has an issue: This field is required! FriendlyName has an issue: This field is required!" This means that an empty claim is imported in the `CreateClaimwithFriendlyName` microflow. As a workaround, add an empty check.

### 2412.0.0

**Release Date:** February 11, 2025

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.4.0 or higher

Release Notes (Teamcenter Connector version 2412.0.0)

Following is the list of improvements/bug fixes in Teamcenter Connector version Tc2412.0.0

Note: This version of TcConnector is supported on Mendix 10.4.0 onwards

#### Improvements

~~1. Provided support for connection to TcX using SAM Auth~~

~~Note: Refer Document snippet for more detailed steps on how to set up Mendix application to communicate with TcX using SAM Authentication.~~

1. Due to limitations with SAMAuth registration in 2412, TcConnector is not supported with Teamcenter X version 2412 and lower (updated - April 2026)
2. Cleaned up some unused JARs

#### Known Issues

* When you set up Teamcenter X, the following error can occur: "Name has an issue: This field is required! FriendlyName has an issue: This field is required!" This means that an empty claim is imported in the `CreateClaimwithFriendlyName` microflow. As a workaround, add an empty check.

## 2406

### 2406.3.1

**Release Date:** May 22, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.24.8 or higher

**Security Issues Fixed:** [CVE-2020-13956](https://www.cve.org/CVERecord?id=CVE-2020-13956), [CVE-2021-29425](https://www.cve.org/CVERecord?id=CVE-2021-29425), [CVE-2022-42003](https://www.cve.org/CVERecord?id=CVE-2022-42003), [CVE-2022-42004](https://www.cve.org/CVERecord?id=CVE-2022-42004), [CVE-2024-47554](https://www.cve.org/CVERecord?id=CVE-2024-47554), [CVE-2025-48924](https://www.cve.org/CVERecord?id=CVE-2025-48924), [CVE-2025-52999](https://www.cve.org/CVERecord?id=CVE-2025-52999), [CVE-2025-68161](https://www.cve.org/CVERecord?id=CVE-2025-68161), [CVE-2026-34477](https://www.cve.org/CVERecord?id=CVE-2026-34477), [CVE-2026-34479](https://www.cve.org/CVERecord?id=CVE-2026-34479), [CVE-2026-34480](https://www.cve.org/CVERecord?id=CVE-2026-34480), [CVE-2026-50193](https://www.cve.org/CVERecord?id=CVE-2026-50193), [CWE-770](https://cwe.mitre.org/data/definitions/770.html)

#### Fixes

* Upgraded to Mendix 10.24.8
* Updated Java dependencies to remove unused JAR files and to resolve vulnerabilities
* Dependencies now implemented using managed dependencies (**vendorlib**)

#### Breaking Changes

* Before updating this module, make sure to remove all old *.jar* files of the previous version of the Teamcenter Connector from the **userlib** folder

### 2406.3.0

**Release Date:** September 13, 2024

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 10.0.0 or higher

Following is the list of improvements/bug fixes in Teamcenter Connector version Tc2406.0003.0

#### Bug Fixes

* Upgraded TcSS JARs and modified `SSORedirectRequestHandler.processCallback` to allow create SSO app session using JSON type. XML type is no more supported.
* Added access rules for `TcConnector.Image` and `TcConnector.ImanFile` entity.
* Mendix Teamcenter Connector now can upload Dataset named references defined with `*`
* Changed length of `POM_application_object.object_string` and `BOMLine.object_string` to 4000 to match with Teamcenter data model
* Cleaned up the **userlib** folder by removing unrequired JARs.
* Setting up timeout for `SendService` microflow to 300s.

## 3.7

### 3.7.0

**Release Date:** April 28, 2026

{{% button color="info" href="https://marketplace.mendix.com/link/component/111627" text="Go to Marketplace" title="Download the Teamcenter Connector from the Marketplace" %}}

**Requirements:** Studio Pro 9.24.41 or higher

**Security Issues Fixed:** [CVE-2016-5002](https://www.cve.org/CVERecord?id=CVE-2016-5002), [CVE-2016-5003](https://www.cve.org/CVERecord?id=CVE-2016-5003), [CVE-2016-5004](https://www.cve.org/CVERecord?id=CVE-2016-5004), [CVE-2019-17570](https://www.cve.org/CVERecord?id=CVE-2019-17570), [CVE-2020-9488](https://www.cve.org/CVERecord?id=CVE-2020-9488), [CVE-2020-13956](https://www.cve.org/CVERecord?id=CVE-2020-13956), [CVE-2020-36518](https://www.cve.org/CVERecord?id=CVE-2020-36518), [CVE-2021-29425](https://www.cve.org/CVERecord?id=CVE-2021-29425), [CVE-2021-44228](https://www.cve.org/CVERecord?id=CVE-2021-44228), [CVE-2021-44832](https://www.cve.org/CVERecord?id=CVE-2021-44832), [CVE-2021-45046](https://www.cve.org/CVERecord?id=CVE-2021-45046), [CVE-2021-45105](https://www.cve.org/CVERecord?id=CVE-2021-45105), [CVE-2021-46877](https://www.cve.org/CVERecord?id=CVE-2021-46877), [CVE-2022-42003](https://www.cve.org/CVERecord?id=CVE-2022-42003), [CVE-2022-42004](https://www.cve.org/CVERecord?id=CVE-2022-42004), [CVE-2024-47554](https://www.cve.org/CVERecord?id=CVE-2024-47554), [CVE-2025-48924](https://www.cve.org/CVERecord?id=CVE-2025-48924), [CVE-2025-49128](https://www.cve.org/CVERecord?id=CVE-2025-49128), [CVE-2025-68161](https://www.cve.org/CVERecord?id=CVE-2025-68161), [CVE-2026-34477](https://www.cve.org/CVERecord?id=CVE-2026-34477), [CVE-2026-34479](https://www.cve.org/CVERecord?id=CVE-2026-34479), [CVE-2026-34480](https://www.cve.org/CVERecord?id=CVE-2026-34480)

#### Fixes

* Upgraded to 9.24.41
* Updated Java dependencies to remove unused JAR files and remove vulnerabilities in the dependencies
