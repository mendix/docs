---
title: "Advanced Audit Trail"
url: /appstore/modules/advanced-audit-trail/
description: "Describes the configuration and usage of the Advanced Audit Trail solution, which is available in the Mendix Marketplace."
aliases:
    - /appstore/app-services/advanced-audit-trail/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

[Advanced Audit Trail](https://marketplace.mendix.com/link/component/120943) allows you to trace changes and conduct infinitely scalable, fully indexed, historical searches through your Mendix app data. Once configured, the solution automatically creates audit snapshots of selected entities. These snapshots are sent to centralized long-term data storage, supporting complex search queries without impacting regular app performance.

Advanced Audit Trail uses a managed software stack built on Kafka and OpenSearch. Kafka provides long-term immutable storage for audit data, and OpenSearch indexes that data.

{{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/aat_integration_diagram.png" class="no-border" alt="Integration diagram showing the Advanced Audit Trail data flow between the Mendix app, Kafka, and OpenSearch" >}}

{{% alert color="info" %}}
The Advanced Audit Trail solution distinguishes itself from the [Audit Trail](/appstore/modules/audit-trail/) module by requiring less implementation effort, while delivering improved search experience and better performance. For a more comprehensive overview of the differences between the regular and the Advanced Audit Trail module, see the [Advanced Audit Trail vs. Audit Trail](#comparison) section below.
{{% /alert %}}

### Typical Use Cases

* Track changes to data—who made what changes, at what time, and in what context—to build apps compliant with GxP and FDA CFR 21 Part 11. This compliance is required for medical interaction platforms and processes such as credit transactions and internal IT audits for user access.
* Configure change tracking per entity with minimal effort.
* Debug why an object is in a specific state.

### Features

* Records the timestamp, old and new values, the triggering microflow, the type of change (created, modified, or deleted), the user, and their role.
* Groups all changes from the same microflow so auditors can understand context.
* Captures the checksum, file size, and filename for file validation.
* Uses scheduled events to send stored snapshots to an external system.
* Lets developers configure an additional information field on snapshots—once set, the field is automatically included in all subsequent snapshots.
* Provides microflows and pages for a generalized trail view of a specific object.
* Stores snapshots locally when the external system is unreachable, so the main app continues operating independently.
* Includes an auditor interface for cross-entity searches of the external database.
* Supports full-text search on data and targeted search on changed values.
* Supports role-based permissions for audit data access.
* Provides advanced filtering in search criteria.

### Limitations

* Snapshot creation uses event handlers. Because the Mendix Runtime does not run event handlers on autocommit, autocommitted changes to tracked entities are not captured. Snapshots are created only for objects that are explicitly committed by the user or through application logic.
* On Mendix Cloud XS [resource packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack), the app may run out of memory if too many `ScheduledEventInformation` objects are created.

### Prerequisites

* Studio Pro [9.24.18](/releasenotes/studio-pro/9.24/#92418) or above.
* A [subscription](#obtain-license-key) to Advanced Audit Trail to store data in external storage running in Mendix Cloud.

### Dependencies

Install [Atlas Core](https://marketplace.mendix.com/link/component/117187) and [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) in your app.

## Installation

### Starting a Subscription {#obtain-license-key}

Advanced Audit Trail is a premium product with a subscription fee. You can download the modules for free from the [Mendix Marketplace](https://marketplace.mendix.com/link/component/120943), but a paid subscription is required to use the service. To subscribe, contact your Customer Success Manager (CSM) or complete the contact form on the [Marketplace page](https://marketplace.mendix.com/link/component/120943).

### Installing the Components in Your App

To install the component, follow the instructions in the [Importing Content from Studio Pro’s App Explorer](/appstore/use-content/#import) section of *Using Marketplace Content* to import the [Advanced Audit Trail - Core](https://marketplace.mendix.com/link/component/120237) module and the [Advanced Audit Trail UI](https://marketplace.mendix.com/link/component/120204) module into your app.

{{% alert color="info" %}}If you update the Advanced Audit Trail - Core module, make sure that you update the Advanced Audit Trail UI module to the same version.{{% /alert %}}

## Understanding Protected Module Behavior

Advanced Audit Trail is delivered as a protected Marketplace module, so some implementation details described in this documentation may not be visible in Studio Pro. This is expected and does not indicate an incorrect installation or configuration.

The module contains internal microflows, scheduled events, configuration logic, and integration logic that are intentionally hidden. For example, references in this documentation to startup microflows, snapshot synchronization events, or cache maintenance processes may not be accessible in your app model.

Do not manually inspect, modify, or configure the AAT module's internal implementation. Mendix manages the AAT backend services, Kafka infrastructure, OpenSearch infrastructure, and all internal synchronization and protected implementation logic.

If you cannot find a scheduled event, internal microflow, or other implementation detail referenced here, it is part of the protected module and no additional action is required unless explicitly stated elsewhere in this documentation.

## Configuration

1. Configure the **Startup** microflow in the Advanced Audit Trail module (`ASU_AuditTrail`) to run as (part of) the [After Startup](/refguide/runtime-tab/#after-startup) microflow. For more information, see the [Configuring After Startup Microflow](#after-startup-microflow) section below.
2. Set up your application roles to include the right module roles. For more information, see the [Configuring Module Roles](#module-roles) section below.
3. Configure the right constant values for the right snapshots. For more information, see the [Configuring Constants](#constants) section below.
4. Implement the **Before Commit** (**BCo**) and **Before Delete** (**Bde**) events. Use the events on the domain model settings (**BCo** / **BDe**). For example, the configuration in the image below is for the **Before Commit** handler, whereas for the **Before Delete** handler, the value of **Is delete** should be set to *true*.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/example.png" class="no-border" alt="Example configuration of the Before Commit event handler" >}}

    If compliance requirements prohibit deleting objects, implement that constraint outside the audit trail module.

    To commit a list of objects without events, create **CommitList** microflows and use **Create Snapshot (List)** from the **Toolbox** (the **JA_Object_CreateSnapshot_List** action). This commits snapshots in a list, minimizing the module's performance impact. When an object is committed without events, the change is not audited unless you explicitly add **Create Snapshot** (the **JA_Object_CreateSnapshot** action) or **Create Snapshot (List)** (the **JA_Object_CreateSnapshot_List** action) before the commit.

    {{% alert color="info" %}}When your Mendix application includes entities with inheritance, Mendix recommends only applying the event handler on the generalization of this entity. There are cases where it makes sense to apply the event handler on the specialization instead, but applying the event handler to both the generalization and specialization will lead to duplicate snapshots of the same action.</br></br>When there are multiple **Before Commit** (**BCo**) or **Before Delete** **(Bde)** events that may change the object, the order is not guaranteed. For more information, see the [Event Handlers](/refguide/event-handlers/). This means that some changes could theoretically fall outside the context of an audit.{{% /alert %}}

5. Add the open search page microflow **AdvancedAuditTrailUI.ACT_SnapshotQuery_CreateAndShowSearch** to the navigation.
6. Make sure that the scheduled events are enabled in the cloud portal. For more information, see the [Configuring Scheduled Events](#scheduled-events) section below.

    {{% alert color="info" %}}Due to protected modules, Mendix does not show scheduled events in Studio Pro.{{% /alert %}}

### Configuring After Startup Microflow {#after-startup-microflow}

To initiate Advanced Audit Trail when the app starts, add the `ASU_AuditTrail` microflow to your app's After Startup flow. This microflow handles the full startup configuration, including calling the internal `AdvancedAuditTrail.ConfigureAuditTrail` microflow. Do not add `AdvancedAuditTrail.ConfigureAuditTrail` directly to your startup sequence.

Advanced Audit Trail is a platform-protected module, so you may not be able to inspect the internal implementation of these microflows. This is expected behavior and does not affect the required configuration. The app needs to run the startup configuration only once during startup.

### Configuring Module Roles {#module-roles}

* **Admin** – Can query the entire database for the current app, access the debug pages, and manage OAuth authentication.
* **_AddOn_CanChangeEnvironmentInQuery** – An additional role for **Admin** users that allows them to change the environment in search queries and set visibility constraints. Backend settings manage the scope of accessible data and features, providing secure app access without sharing direct credentials.
* **DisplayOnly** – Can view queries prepared in microflows but cannot change them. This ensures users see only the information they are permitted to see. The role is tested against cross-site scripting (XSS).

{{% alert color="info" %}}Access from and to the long-term data storage is based on service accounts. This means that once a user can access the **Snippet_Settings**, they can access all data in the long-term storage, even if it belongs to other applications in the same environment. Any user-based authentication needs to be implemented in the runtime, for example, by using the **DisplayOnly** module role and the **Query Snapshots for object** setup.{{% /alert %}}

### Configuring Constants {#constants}

The module includes several constants to control the integration with the AAT backend service and the behavior of the local snapshot cache. As the module is platform-protected, you cannot modify the default constants directly. Instead, applications should provide environment-specific values through the Mendix application configuration.

Values defined in the application configuration override the default values provided by the AAT module. You can configure AAT constants in Studio Pro as follows: 

1. Open **App Settings** and navigate to **Configurations** tab. 
2. Select the configuration that you want to modify, for example, **Default**.
3. Click **Edit** ({{% icon name="pencil" %}}) and open the **Constants** tab. 
4. Add or update the AAT constants and provide the appropriate value for each constant.

{{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/constants.png" alt="" >}}

{{% alert color="info" %}}
The values shown in the protected AAT module are default constant values. Configure your own values through **App Settings** rather than attempting to modify values inside the module itself. 
{{% /alert %}}

The following constants are typically configured through **App Settings**: 

* Retention settings for the local cached data
    * **SnapshotRetentionDays** – The number of days records are kept in the local snapshot cache.
    * **OnlyDeleteProcessedItems** – Whether items are deleted only after they have been sent to external data storage.
        * If set to **True**, **SnapshotRetentionDays** applies only to processed snapshots.

* Snapshots
    * **IncludeHashedStrings** – Whether to include hashed string attributes (for example, password fields) in snapshots.

        * **True** – Hashed strings (storing bcrypt or other hashed values) are included.
        * **False** – Hashed strings are excluded and not audited.

        {{% alert color="info" %}}Manually encrypted strings (for example, using the [Encryption](/appstore/modules/encryption/) module) are not hashed strings and are not affected by this setting.{{% /alert %}}

* Integration
    * **EnvironmentName** – The name of the environment. Must be unique in your audit data storage, for example, *myApp-prod*. Do not use whitespace or a tilde (~) in the environment name.

        {{% alert color="info" %}}If two apps use the same name, the audit trail cannot distinguish between them, which irreversibly breaks the audit trail for both apps.{{% /alert %}}

    * **EnvironmentURL** (optional) – The URL used to identify the environment. If left empty, the app runtime URL is used.

    * **Kafka_Endpoint**/**Kafka_Username** and **Kafka_Password** – Credentials for the Kafka environment used to send data to long-term storage.

    * **Opensearch_Endpoint**/**Opensearch_Username** and **Opensearch_Password** – Credentials for the OpenSearch environment used to retrieve data from long-term storage.

### Configuring Scheduled Events {#scheduled-events}

AAT uses scheduled events to process cached audit snapshots and maintain local cache data. Because the module is platform-protected, these events may not be visible in Studio Pro. This is expected. Do not manually inspect or modify them.

Make sure scheduled events are enabled for the app environment in the Cloud Portal. AAT then processes cached snapshots and cleans up the local cache according to the configured retention settings. For more information, see the [Scheduled Events](/developerportal/deploy/environments-details/#scheduled-events) section of *Environment Details*.

The following scheduled events are available:

* **SE_SendAuditSnapshots** – Sends cached data to external data storage. Runs every minute.
* **SE_CleanupSnapshotCache** – Cleans up cached data based on the retention settings **OnlyDeleteProcessedItems** and **SnapshotRetentionDays**. Runs daily at 3:00 AM UTC.
* **SE_PeriodicVacuum** – Runs a periodic VACUUM on a PostgreSQL database. Not needed for Microsoft SQL. Other database types are not supported. Runs every two hours.

    {{% alert color="info" %}}Enable **SE_PeriodicVacuum** in the Cloud Portal for PostgreSQL databases. PostgreSQL requires a regular VACUUM when an app creates and deletes many objects, to maintain performance and prevent disk growth. The default Mendix Cloud settings do not always run VACUUM when needed. This scheduled event is for PostgreSQL only. For more information, see the PostgreSQL documentation on [VACUUM](https://www.postgresql.org/docs/9.6/sql-vacuum.html) and [ANALYZE](https://www.postgresql.org/docs/9.6/sql-analyze.html).{{% /alert %}}

### Configuring Advanced Features (Optional)

* Link **NAV_AdvancedSettings** for accessing debug settings. Typically not needed, the features here are subject to change.
* Link **NAV_CachedSnapshot_Overview** to access the local cache of snapshot data.
* Check the default values of the **NPE Settings** object in the domain model, since they will be used to configure the app.

### Adding Additional Information to a Snapshot (Optional)

You can submit additional information for a snapshot—for example, to provide a rationale for why a change occurred. This feature is configurable per action type (creation, deletion, or update). To use it, call **Set additional info for snapshots** from the **Toolbox** (the **JA_SetAdditionalInfo** action) before the commit.

### Implementing Custom User Logging (Optional)

Use **Override User for Snapshots in this Context** from the **Toolbox** (the **JA_SetUserForSnapshots** action) to override the logged user for a request. For example, the request is a published REST service that runs in a system context, while the user is known.

### Implementing User Name Scrambling (Optional)

Use **Configure Username mapping** from the **Toolbox** (the **JA_ConfigureUsernameMapping** action) to store usernames in a different form in long-term data storage—for example, to anonymize data for GDPR compliance.

### Implementing Display Formatters (Optional)

Use the formatter microflows to control how externally stored values are displayed in your app.

| Microflow | Formatter | Description |
| --------- | -------- | --- |
| **GetAttributes_ConvertDate** | Date formatter | Date formatting is determined inside JA_ConfigureFormatters in the after startup flow. By default, the date follows the US format (month/day/year). |
| **GetAttributes_ConvertDecimal** | Decimal formatter | Decimal formatting is determined inside JA_ConfigureFormatters in the after startup flow. By default, the decimal formatting follows the US format (period—".") to separate an integer from its partial fractional part. |
| **GetAttributes_ConvertMxIdentifier** | Mendix object identifier formatter | Mendix object formatting is determined inside JA_ConfigureFormatters in the after startup flow. By default, a reference displays as `[ModuleName].[EntityName] (ObjectGUID)`. You can configure it to display an attribute (or combination of attributes) of the referenced object instead. |

### Getting Microflow Stack Trace (Optional)

Use **Get microflow stack trace** from the **Toolbox** (the **JA_GetMicroflowTrace** action) to create custom logging/entities and identify in what microflow the action was triggered.

## Authentication

Advanced Audit Trail supports two authentication modes for the AAT backend service: basic authentication and OAuth-based authentication.

### Basic Authentication

With basic authentication, the app authenticates directly to the AAT backend using a username and password provided by Mendix. Enter these credentials on the AAT settings page.

### OAuth Authentication

With OAuth authentication, the app connects to an external identity provider (typically controlled by your organization) to retrieve an access token for the AAT backend. To configure it, enter the identity provider details on the AAT settings page: client ID, client secret, client scope, and token endpoint URL.

{{< figure src="/attachments/appstore/platform-supported-content/modules/advanced-audit-trail/OAuth.png" class="no-border" >}}

## Advanced Audit Trail vs. Audit Trail {#comparison}

The table below provides a detailed comparison between the Advanced Audit Trail and the standard Audit Trail modules.

| Feature | Advanced Audit Trail | Audit Trail |
| --- | --- | --- |
| Storage of audit trail events | Separate Backend | Mendix Database |
| Implementation in app model | Event Handler | Inheritance |
| Data storage efficiency | High (1 serialized JSON per change) | Low (1 log object per changed attribute) |
| List commit handling | Optimized | Not optimized |
| Saving action stack upon change (for example, showing related changes and triggering microflow) | Yes | No |
| Standard overview screen searchable per entity | Yes | No |
| Ability to show custom attribute value when viewing associations in an audit trail snapshot | Yes | No |
| Developer can delete audit trail data unnoticed | No | Yes |
| Guaranteed completeness of audit trail in case of disaster | Yes | No |
| Additional custom data can be added to an audit trail snapshot (for example, "on behalf of" in case of REST service) | Yes | No |
| Built-in features for username and hash (for example, password) scrambling | Yes | No |

## Search Criteria and Advanced Filtering

The search functionality supports both exact matches and flexible filtering based on field type:

* Exact match fields:

    * **Execution-ID**, **Transaction-ID**, **By code**, and **By GUID** – Use exact values for precise results.
    * **Environment to search in** and **Limit** – Specify the target environment and set the maximum number of results.
    * **Time window** – Define a **Start** and **End** time with an option to sort by timestamp (*Ascending* or *Descending*).
    * **Object is created** and **Object is deleted** – Filter records by created or deleted state using Boolean fields.

* Flexible match fields:

    * **By entity**, **Username**, and **Role** – Search using partial matches for entity types, usernames, and user roles.
    * **Additional information** and **Stack trace** – Include supplementary data to refine your search.

## Read More

* [Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)
* [Audit Trail](/appstore/modules/audit-trail/)
* [Scheduled Events](/refguide/scheduled-events/)