---
title: "Advanced Audit Trail"
url: /appstore/modules/advanced-audit-trail/
description: "Describes the configuration and usage of the Advanced Audit Trail solution, which is available in the Mendix Marketplace."
aliases:
    - /appstore/app-services/advanced-audit-trail/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

[Advanced Audit Trail](https://marketplace.mendix.com/link/component/120943) allows you to trace changes and conduct infinitely scalable, fully indexed historical searches through your Mendix app data. Once configured, the solution automatically creates audit snapshots of selected entities. These snapshots are sent to centralized long-term data storage, supporting complex search queries without impacting regular app performance.

Advanced Audit Trail employs a managed software stack on top of Kafka and OpenSearch to deliver the service. Kafka is used for long-term immutable data storage of audit data, and OpenSearch is used to index audit data. You can find an integration diagram below:

{{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/aat_integration_diagram.png" class="no-border" >}}

{{% alert color="info" %}}
The Advanced Audit Trail solution distinguishes itself from the [Audit Trail](/appstore/modules/audit-trail/) module by requiring less implementation effort, while delivering improved search experience and better performance. For a more comprehensive overview of the differences between the regular and the Advanced Audit trail module, see the [Advanced Audit Trail vs. Audit Trail](#comparison) section below.
{{% /alert %}}

### Typical Use Cases

* Tracks changes to data (who made what changes, at what time, and in what context) to assist you in developing apps complaint with GxP and FDA CFR 21 Part 11. This compliance is required for medical interaction platforms as well as for processes such as credit transactions and internal IT audits for user access
* Allows the developer to easily configure tracking changes per entity
* Helps the developer debug why an object is in a specific stage

### Features

* Records the timestamp, the old value and the new value, the microflow that triggered the change, whether the object was created, modified, or deleted, the user who made the change, and their user role
* Supports viewing all changes that happened in the same microflow, which helps the auditor understand the context better
* Captures the checksum, file size, and name of files that can be used for validation
* Supports scheduled events that regularly send the stored snapshots to an external system
* Allows the developer to configure an input field where additional information can be supplied about the snapshot to be created—once added, this category will be automatically added to all snapshots
* Offers microflows and pages that open a generalized view to show users the trail of a specific object
* Supports decoupling—when the external system cannot be reached, the snapshots will be stored in the local database, thus ensuring that the main system will keep on working without a dependency on the external database
* Offers auditor interface to search through the external database (across entities)
* Supports full-text search on data and search on changed data
* Support configuring different permissions for audit data for different users

### Limitations 

On Mendix Cloud XS [resource packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack), your app may run out of memory due to too many objects of the `ScheduledEventInformation` type being created.

### Prerequisites

* You need to use Advanced Audit Trail with Studio Pro versions starting with [9.24.18](/releasenotes/studio-pro/9.24/#92418).
* You need to have a [subscription](#obtain-license-key) to the Advanced Audit Trail solution to store your data in an external data storage that runs in Mendix Cloud.

### Dependencies

You need to install [Atlas Core](https://marketplace.mendix.com/link/component/117187) and [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) in your application.

## Installation

### Starting a Subscription {#obtain-license-key}

Advanced Audit Trail is a premium Mendix product that comes with a subscription fee. Although you can download the Advanced Audit Trail modules for free from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/120943), you need to purchase a subscription to use the service. To start a subscription, contact your Customer Success Manager (CSM) or fill out the contact form on the [Marketplace](https://marketplace.mendix.com/link/component/120943).

### Installing the Components in Your App

To install the component, follow the instructions in the [Importing Content from Studio Pro’s App Explorer](/appstore/use-content/#import) section of *Using Marketplace Content* to import the [Advanced Audit Trail - Core](https://marketplace.mendix.com/link/component/120237) module and the [Advanced Audit Trail UI](https://marketplace.mendix.com/link/component/120204) module into your app.

{{% alert color="info" %}}If you update the Advanced Audit Trail - Core module, make sure that you update the Advanced Audit Trail UI module to the same version.{{% /alert %}}

## Configuration

1. Configure the **Startup** microflow in the Advanced Audit Trail module (`AdvancedAuditTrail.ConfigureAuditTrail`) to run as (part of) the [After Startup](/refguide/app-settings/#after-startup) microflow.
2. Set up your application roles to include the right module roles. For more information, see the [Configuring Module Roles](#module-roles) section below.
3. Configure the right constant values for the right snapshots. For more information, see the [Configuring Constants](#constants) section below.
4. Implement the **Before Commit** (**BCo**) and **Before Delete** (**Bde**) events. Use the events on the domain model settings (**BCo** / **BDe**). For example, the configuration in the image below is for the **Before Commit** handler, whereas for the **Before Delete** handler, the value of **Is delete** should be set to *true*.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/example.png" class="no-border" >}}

    In case you need to follow a compliance that requires you never to delete an object, implement this outside the context of the audit trail module. 

    You can create **CommitList** microflows that commit a list of objects without events, but use **Create Snapshot (List)** from the **Toolbox** (the **JA_Object_CreateSnapshot_List** action). This ensures that the snapshots are committed in a list as well, therefore minimizing the performance impact of the module. When an object is committed without events, this change is not audited unless you explicitly add **Create Snapshot** (the **JA_Object_CreateSnapshot** action) or **Create Snapshot (List)** (the **JA_Object_CreateSnapshot_List** action) before the commit.

    {{% alert color="info" %}}When your Mendix application includes entities with inheritance, Mendix recommends only applying the event handler on the generalization of this entity. There are cases where it makes sense to apply the event handler on the specialization instead, but applying the event handler to both the generalization and specialization will lead to duplicate snapshots of the same action.</br></br>When there are multiple **Before Commit** (**BCo**) or **Before Delete** **(Bde)** events that may change the object, the order is not guaranteed. For more information, see the [Event Handlers](/refguide/event-handlers/). This means that some changes could theoretically fall outside the context of an audit.{{% /alert %}}

5. Add the open search page microflow **AdvancedAuditTrailUI.ACT_SnapshotQuery_CreateAndShowSearch** to the navigation.
6. Make sure that the scheduled events are enabled in the cloud portal. For more information, see the [Configuring Scheduled Events](#scheduled-events) section below.

    {{% alert color="info" %}}Due to protected modules, Mendix do not show scheduled events in Studio Pro.{{% /alert %}}

### Configuring Module Roles {#module-roles}

* **Admin**: The admin can query the entire database for the current application, access the debug pages, and manage OAuth authentication.
* **_AddOn_CanChangeEnvironmentInQuery**: This is an additional role for the Admin, allowing them to change the environment in search queries and set the visibility constraints. It provides secure application access without sharing direct credentials and backend settings manage the scope of accessible data and features.
* **DisplayOnly**: The display-only user can view queries prepared in microflows but they cannot change any of them. This restriction ensures that users see only the information they are allowed to see. The role is tested against cross site scripting (XSS).

    {{% alert color="info" %}}Access from and to the long-term data storage is based on service accounts. This means that once a user can access the **Snippet_Settings**, they can access all data in the long-term storage, even if it belongs to other applications in the same environment. Any user-based authentication needs to be implemented in the runtime, for example, by using the **DisplayOnly** module role and the **Query Snapshots for object** setup.{{% /alert %}}

### Configuring Constants {#constants}

* Retention settings for the local cached data
    * **SnapshotRetentionDays**: This represents the number of days that records are kept in the local snapshot cache.
    * **OnlyDeleteProcessedItems**: This indicates whether items should only be deleted if they have been sent to the external data storage.
        * If **OnlyDeleteProcessedItems** is set to **True**, **SnapshotRetentionDays** only applies to processed snapshots.

* Snapshots
    * **IncludeHashedStrings**: This indicates whether to include attributes of type hashed string (for example, password fields) in the snapshots.

        * **True**: Hashed strings (storing bcrypt or other hashed value) will be included.
        * **False**: Hashed strings will be excluded and, therefore, not audited.

        {{% alert color="info" %}}Manually-encrypted (for example, using the [Encryption](/appstore/modules/encryption/) module) strings are not the type of hashed string and will not be affected by this setting.{{% /alert %}}

* Integration
    * **EnvironmentName**: This is the name of the environment, which should be unique in your audit data storage, for example, *myApp-prod*. Do not use any whitespace or tilde (~) for the environment name.

        {{% alert color="info" %}}If two applications use the same name, the audit trail will not be able to distinguish between the two, effectively breaking the audit trail for both applications irreversibly.{{% /alert %}}

    * **EnvironmentURL** (optional): This URL is used to identify the environment. If left empty, the application runtime URL is used instead. 
    * **Kafka_Endpoint**/**Kafka_Username** and **Kafka_Password**: These are the credentials for the Kafka environment for sending the data into the long-term storage.
    * **Opensearch_Endpoint**/**Opensearch_Username** and **Opensearch_Password**: These are the credentials for the Opensearch environment for receiving the data from the long-term storage.

### Configuring Scheduled Events {#scheduled-events}

* **SE_SendAuditSnapshots**: This sends the cached data to the external data storage. This occurs each minute.
* **SE_CleanupSnapshotCache**: This cleans up the cached data based on the retention settings—**OnlyDeleteProcessedItems** and **SnapshotRetentionDays**. This occurs daily at 3:00 AM UTC.
* **SE_PeriodicVacuum**: This runs a periodic vacuum on a PostgreSQL database. This is not needed on Microsoft SQL. Other database types are not supported. This occurs every 2 hours.

    {{% alert color="info" %}}Enable the scheduled event **SE_PeriodicVacuum** in the cloud portal for PostgreSQL databases. PostgreSQL databases require a regular VACUUM when the application creates and deletes many objects in order to stay quick and not grow out of disk space. The default Mendix Cloud settings will not always perform the VACUUM when needed. The scheduled event **SE_PeriodicVacuum** performs the VACUUM regularly. This scheduled event is for PostgreSQL only. For more information, see PostgreSQL documentation on [VACUUM](https://www.postgresql.org/docs/9.6/sql-vacuum.html) and [ANALYZE](https://www.postgresql.org/docs/9.6/sql-analyze.html).{{% /alert %}}

### Configuring Advanced Features (Optional)

* Link **NAV_AdvancedSettings** for accessing debug settings. Typically not needed, the features here are subject to change.
* Link **NAV_CachedSnapshot_Overview** to access the local cache of snapshot data.
* Check the default values of the **NPE Settings** object in the domain model, since they will be used to configure the app.
* Enable **SE_CleanupAuditSnapshots** if you want to use the retention settings and delete objects.

### Adding Additional Information to a Snapshot (Optional)

It is possible to submit additional information for a snapshot (for example, in order to provide a rationale on why the said action has taken place on the object in question). Developers can configure this feature for certain actions (creation, deletion, updating). To use this feature, the developer must use **Set additional info for snapshots** from the **Toolbox** (the **JA_SetAdditionalInfo** action) to set additional information for snapshots.

### Implementing Custom User Logging (Optional)

Use **Override User for Snapshots in this Context** from the **Toolbox** (the **JA_SetUserForSnapshotsaction** action) to override the logged user for a request. For example, the request is a published REST service that runs in a system context, while the user is known.

### Implementing User Name Scrambling (Optional)

Use **Configure Username mapping** from the **Toolbox** (the **JA_ConfigureUsernameMapping** action) to store a username differently in the long-term data storage. This can be used for anonymizing data (for example, due to GDPR).

### Implementing Display Formatters (Optional)

Use the formatter microflows to change how externally-stored values will be displayed inside your Mendix application.

| Microflow | Formatter | Description |
| --------- | -------- |---|
| **GetAttributes_ConvertDate** | Date formatter |Date formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, the date follows the US format (month/day/year).|
| **GetAttributes_ConvertDecimal** | Decimal formatter |Decimal formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, the decimal formatting follows the US format (period—".") to separate an integer from its partial fractional part.|
| **GetAttributes_ConvertMxIdentifier** | Mendix object identifier formatter |Mendix object formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, what is displayed in a reference is `[ModuleName].[EntityName] (ObjectGUID)`. One may prefer to display (a combination of) an attribute of the said object as a reference.|

### Getting Microflow Stack Trace (Optional)

Use **Get microflow stack trace** from the **Toolbox** (the **JA_GetMicroflowTrace** action) to create custom logging/entities and identify in what microflow the action was triggered.

### Changing the Module Layout (Optional)

Update the **AuditSnapshots_ResponsiveLayout** to update the layouts without changing the pages.

## Authentication

Advanced Audit Trail supports two authentication modes for the AAT backend service: basic authentication and OAuth-based authentication. Basic authentication uses a simple username/password credential set provided by Mendix. OAuth-based authentication, on the other hand, can be enabled on the AAT settings page by setting a flag. 

### Basic Authentication

When using basic authentication, a simple username/password credential set is used to directly authenticate to the AAT backend service. Mendix provides this credential set, which must be entered on the AAT settings page.

### OAuth Authentication

When using OAuth authentication, the app connects to an external identity provider (typically controlled by your organization) to retrieve an access token for authenticating to the AAT backend. To configure OAuth authentication, provide the identity provider's configuration information on the AAT settings page, including the client ID, client secret, client scope, and token endpoint URL.

{{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/OAuth.png" class="no-border" >}}

## Advanced Audit Trail vs. Audit Trail {#comparison}

The table below provides a detailed comparison between the Advanced Audit Trail and the standard Audit Trail modules.

| Feature | Advanced Audit Trail | Audit Trail |
| --- | --- | --- |
| Storage of audit trail events | Separate Backend | Mendix Database |
| Implementation in app model | Event Handler | Inheritance |
| Data storage efficiency | High (1 serialized JSON per change) | Low (1 log object per changed attribute) |
| List commit handling | Optimized | Not optimized |
| Saving action stack upon change (e.g. showing related changes and triggering microflow)| Yes | No |
| Standard overview screen searchable per entity | Yes | No |
| Ability to show custom attribute value when viewing associations in an audit trail snapshot| Yes | No |
| Developer can delete audit trail data unnoticed | No | Yes |
| Guaranteed completeness of audit trail in case of disaster| Yes | No |
| Additional custom data can be added to an audit trail snapshot (e.g. "on behalf of" in case of REST service)| Yes | No |
| Built-in features for username and hash (e.g. password) scrambling| Yes | No |

## Read More

[Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)
