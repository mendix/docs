---
title: "Migrating to Teamcenter Connector 2606"
url: /appstore/industry/teamcenter-connector/migrating-to-unified-teamcenter-connector/
weight: 20
description: "Describes how to migrate an existing app from Teamcenter Connector 2512 and Extension v4.x to Teamcenter Connector 2606, including pre-migration steps, breaking changes, deprecated microflows, and Java actions."
---

## Introduction

Teamcenter Connector 2606.0.0 introduces major changes and improvements, some of them breaking. This document provides an overview of these breaking changes and guides you through the upgrade path. 

One of the main changes is that the Teamcenter Connector 2606 combines the Teamcenter Connector and the Teamcenter Extension, which was previously available through a separate Marketplace module. 

The changes fall into three categories:

* Changes to the `TcConnector` module. These include improved security, error handling, and deprecations.
* Merging of the `TeamcenterToolkit` domain model, microflows, and Java actions, which were previously part of the Teamcenter Extension, into the `TcConnector`.
* Introduction of the Teamcenter service document, a new Mendix Studio Pro document which allows you to create, manage, and organize your Teamcenter integrations.

The migration to 2606 involves some breaking changes, but they are outweighed by the benefits:

* Unified module
* Modern extension framework
* Improved security
* Better error handling

## Migration Scenarios

There are three migration scenarios:

* Upgrade the Teamcenter Connector from 2512 to 2606 – read the [pre-migration checklist](#pre-migration-checklist) and follow the steps in the [Teamcenter Connector Migration Process](#teamcenter-connector-migration-process) section.
* Upgrade the Teamcenter Connector from 2512 to 2606 and keep the original integrations (Teamcenter Extension) – read the [pre-migration checklist](#pre-migration-checklist) and follow the steps in the [Teamcenter Connector Migration Process](#teamcenter-connector-migration-process) and [Teamcenter Toolkit Migration Process](#teamcenter-toolkit-migration-process) sections.
* Upgrade the Teamcenter Connector from 2512 to 2606 and migrate the original integrations to the new Teamcenter service document – read the [pre-migration checklist](#pre-migration-checklist) and follow the steps in the [Teamcenter Connector Migration Process](#teamcenter-connector-migration-process) and [Migrating to a Teamcenter Service Document](#migrate-to-teamcenter-service-document) sections.

### Pre-Migration Checklist {#pre-migration-checklist}

Follow these steps carefully to avoid issues:

1. Upgrade to Studio Pro 11.12.1 or above. If you are using Studio Pro 10, you must upgrade before importing Teamcenter 2606.
2. Have only one developer perform the migration. If multiple developers migrate simultaneously, there will be duplicate artifacts. Coordinate with your team and designate one person to handle the migration, then have others pull the updated code from version control.
3. Migrate from Teamcenter Connector 2512. If the project still contains an older version of the Teamcenter Connector, such as 2506 or older, first follow the steps for [Upgrading Teamcenter Connector 2506.x to 2512.x](/appstore/industry/teamcenter-connector/upgrade-teamcenter-connector-2506-to-2512/).
4. Make a backup. Before starting, either create a full backup of your app or commit all current changes to version control. This gives you a safety net in case you need to roll back.

### Teamcenter Connector Migration Process {#teamcenter-connector-migration-process}

Follow these steps in this exact order to ensure a proper migration:

1. Prepare your environment.

    1. Open your app in Studio Pro 11.12.1 or above.
    1. Make sure all changes are committed, if using version control, or backed up.

2. Remove the resource files.    
    In your *Resources* folder, remove the *OperationMapping*, *TeamcenterCommon*, *TeamcenterConnector* folders. The contents of these folders are now in the *TcConnector* folder.
   
3. Import Teamcenter Connector 2606.    
    Download the Teamcenter Connector 2606 from Mendix Marketplace. This now also contains the new version of the extension.
    {{% alert color="info" %}} The Teamcenter Extension is no longer found under the **Extensions** menu at the top. Instead, it is available as a new service document, similar to a microflow. You can find it by right-clicking a module in your project, selecting **Add other**, then selecting **Teamcenter service**. {{% /alert %}}

4. Resolve breaking changes.

    * For a list of deprecated microflows and Java actions, refer to [Deprecated Microflows and Their Replacements](#deprecated-microflows-and-their-replacements) and [Deprecated Java Actions and Their Replacements](#deprecated-java-actions-and-their-replacements).
    * Deprecated microflows and Java actions are available in the **internal > deprecated** folder in the **TcConnector** module. These microflows are no longer used by the connector, but you can include them and move them to your own module if required.
    * Change all `FileType` references to `NamedReference`.
    * The **Login** microflow no longer returns a Boolean value. **Login** now throws an exception whenever it is unsuccessful.
    * Microflows that use the `TcSession` entity are deprecated. Do not use the `TcSession` entity in your code. If you want to know if someone is logged in, use `RULE_TeamcenterConfiguration_IsLoggedIn` instead.
    * For more information, refer to the [Breaking Changes](#breaking-changes) section.

5. Update security.

    1. Click **Update Security** in the domain model of the implementing module. This synchronizes the changes coming from `TcConnector`. 
    1. Make sure that all attributes on persistent entities have read rights. The **Administrator** role now only has access to Teamcenter Configuration, so assign the **User** role to module roles that need entity access.

6. Enable the React client.

    1. In your App Settings, go to the **Runtime** tab.
    1. Select **Yes** next to **Use React client**.
  
### Teamcenter Toolkit Migration Process {#teamcenter-toolkit-migration-process}

You can keep the original integrations using both the `TeamcenterToolkit` module and the Teamcenter Connector 2606 module. Since the `TeamcenterToolkit` module and the `TcConnector` module are merged, there are some minor errors that need to be solved in the model. These mainly involve the `BOMLine` entity. Follow these steps:

1. In the `TeamcenterToolkit` module, remove the `BOMLine` entity and start using the `BOMLine` entity in the `TcConnector` module.    
    An easy way to migrate a large number of references is to follow this process:
    
    1. Rename the `BOMLine` item in `TeamcenterToolkit` to `BOMLine2`.
    2. Move `BOMLine2` to the `TcConnector` module.
    3. Remove `BOMLine2`.
    4. Rename the `BOMLine` item in the `TcConnector` module to `BOMLine2`, then back to `BOMLine`. 
    5. Repeat the process for associations.
2. Map the old `TeamcenterToolkit.BOMLine` BO mappings to `TcConnector.BOMLine`. Follow these steps to do that:

    1. Use **Ctrl+F** to search for `TeamcenterToolkit.BOMLine`. This allows you to see if there are any BO mappings left that reference the `TeamcenterToolkit`.
    2. Replace any remaining references with `TcConnector.BOMLine`.
3. Verify that everything still works correctly. 

### Migrating to a Teamcenter Service Document {#migrate-to-teamcenter-service-document}

1. Create a Teamcenter service document.

    1. In the module where your Teamcenter integrations are stored, right-click and select **Add others**, then select **Teamcenter service**.
    1. Give it a name.

2. Reconfigure your connection.

    1. Open the Teamcenter service document and go to the **Settings** tab.
    1. Enter your Teamcenter URL and authentication settings.
    1. Click **Sign In** and sign in to Teamcenter.

3. Recreate your integrations.

    Your existing domain model entities and microflows are still in your app. However, you need to regenerate them using the new Teamcenter service document to take advantage of the improvements and ensure compatibility with the new connector. To do that, follow these steps:
                
    1. In the Teamcenter service, click **+Add integration** and select a journey that matches each of your existing integrations.
    2. Configure the integration the same way as before. The journey types and options are the same.
    3. Click **Generate** to save and generate the integration. 
    4. Replace the old microflows with the newly generated microflows.
    5. You can use the **Duplicate** feature on the **Integrations** tab to create variations of an integration without reconfiguring them from scratch.

4. Remove the `TeamcenterToolkit` module from your project.

    1. Before removing the `TeamcenterToolkit` module, commit your work.
    1. Make sure that the `TeamcenterToolkit` is not used anymore by right-clicking on the `TeamcenterToolkit` module and selecting **Find usages of this module**.
    1. Remove the `TeamcenterToolkit` module.
        {{% alert color="info" %}} If there are still many resources pointing to the `TeamcenterToolkit`, you can rename the `TeamcenterToolkit` to `TcConnector2`, remove the `TcConnector2`, rename the `TcConnector` to `TcConnector2` and back to `TcConnector`. This trick connects the old resources in the `TeamcenterToolkit` to the new ones in the `TcConnector`. {{% /alert %}}
    1. Since the `TeamcenterToolkit` module is merged with the `TcConnector` module, all references to the `TeamcenterToolkit` should point to the `TcConnector`. Use **Ctrl+F** to search for *"TeamcenterToolkit."*, and identify any remaining BO mappings that reference the `TeamcenterToolkit`. If there are any, replace them with `TcConnector`.
    1. Once all the journeys are migrated, you can remove the *TeamcenterExtension* folder from your project's resources folder on the disk.
    1. Remove the `TeamcenterExtension` module under **Add-ons**. This is the older Teamcenter Extension which is no longer needed since you are using the Teamcenter service document.

5. Test thoroughly.

    1. Run each generated microflow against your Teamcenter instance.
    2. Verify that search, create, update, and retrieval operations work as expected.
    3. Test error handling by triggering error conditions (for example, invalid search criteria).
    4. If you have automated tests, run them to ensure integration behavior is correct.

## Breaking Changes {#breaking-changes}

The following table lists the breaking changes and the action required for each one:

| Area | Change | Action required |
| --- | --- | --- | 
| `TeamcenterToolkit` Module | The module was merged into `TcConnector`. The module no longer exists. | Update all references from `TeamcenterToolkit.*` to `TcConnector.*`. |
| Entity security | The `Create` and `Delete` rights were removed from all entities. | Remove any UI or microflow logic that relied on client-side `Create`/`Delete`. Use microflows instead. |
| Input parameter `ConfigName` renamed to `ConfigurationName` | In generated microflows, the input parameter is now called `ConfigurationName` and is optional. | Set the `ConfigurationName` or leave it empty. |
| Admin role | The **Administrator** no longer has entity access. | Assign the **User** role where needed. |
| `FileType` / `File Type` | This was renamed to `NamedReference` / `Named Reference`. | Update all references in microflows and mappings. |
| `CreateBOMWindow_Generic` | This was moved to `TcConnector`, and was updated to use `CreateOrReconfigureBOMWindows`. Pre-configured variants were removed. | Regenerate BOM microflows via the Extension or update manually to use `TcConnector.CreateBOMWindow_Generic`. |
| `Login` Java action | No longer returns Boolean. Throws exception on failure. | Remove Boolean result handling and wrap in error handler. |
| `Logout` Java action | Now returns Boolean. | Update callers if return value was previously ignored. |
| Error messages | Connector no longer shows in-app messages. It throws exceptions instead. | Ensure calling microflows have error handlers. |

## Deprecated Microflows and Their Replacements {#deprecated-microflows-and-their-replacements}

These microflows still exist in the deprecated folder, but should no longer be used. Replace them with the recommended alternatives:

| Deprecated | Replacement |
| --- | --- |
| `AreMultipleTcConfigActive` | No replacement |
| `CloseBOMWindow`| `BOMWindow_Close` |
| `DownloadFile` | `DownloadFile` / `DownloadImage` Java action |
| `ExecuteLogin` | `Login` microflow |
| `ExecuteLogout` | `Logout` microflow |
| `HandleActiveConfigErrors` | No replacement |
| `HandleServiceErrors` | No replacement |
| `RetrieveConfigNameFromSingleActiveConfiguration` | Use `empty` for the `configurationName` parameter in Java actions. Java actions now handle active configuration in the Java code. |
| `RetrieveHttpHeaderList` | No replacement |
| `RetrieveTcSessionBasedOnConfigName` | No replacement. `TcSession` should not be manually consumed. It is automatically handled by the `TcConnector` module. |
| `RetrieveTeamcenterConifgurationByName` | Use `empty` for the `configurationName` parameter in Java actions. Java actions now handle active configuration in the Java code. |
| `RetrieveTeamcenterConifgurationFromTcSession` | No replacement. `TcSession` should not be manually consumed. It is automatically handled by the `TcConnector` module. |
| `ShowPartialErrors` | No replacement |
| `UpdateSession` | No replacement |

## Deprecated Java Actions and Their Replacements {#deprecated-java-actions-and-their-replacements}

These Java actions still exist in the deprecated folder, but should no longer be used. Replace them with the recommended alternatives:

| Java Action | Replacement |
| --- | --- |
| `PerformAction` | `PerformAction3` |
| `GetWorkflowTemplates` | `GetWorkflowTemplates2` |
| `CreateBOMWindows` | `CreateOrReConfigureBOMWindows` |
| `CreateBOMWindows2` | `CreateOrReConfigureBOMWindows`	|
| `WhereUsed` | `WhereUsed2` |
| `ExpandPSOneLevel` | `ExpandPSOneLevel2`	|
| `GetTcSessionInfo` | `GetTcSessionInformation`	|
| `GetItemFromId` | `GetItemAndRelatedObjects` |
| `RetrieveCookie` | No replacement |

## Deprecated Entities

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

## Automatically Migrated Items

The following items are automatically migrated and do not need to be rebuilt:

* Domain model – Entities and associations generated by the previous Extension remain in your module. They are part of your app, so they do not disappear during the migration.
* Microflows – Generated microflows remain in your app. Only those affected by specific breaking changes, such as input entity naming or Toolkit module references, need to be regenerated or updated.
