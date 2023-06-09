---
title: "Advanced Audit Trail"
url: /appstore/modules/advanced-audit-trail/
description: "Describes the configuration and usage of the Advanced Audit Trail solution, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "audit trail"]
aliases:
    - /appstore/app-services/advanced-audit-trail/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## I Introduction

[Advanced Audit Trail](https://marketplace.mendix.com/link/component/120943) allows you to trace changes and use infinitely-scalable and fully-indexed data search. Once configured, the system automatically creates audit snapshots of objects to store in the audit trail. The audit trail is centralized and sent to a long-term data storage, and therefore supports complex search queries and keeps the operational database small and performant.

Advanced Audit Trail employs a software stack on top of Kafka, Elasticsearch, and Kibana to leverage their utility. Kafka is used for long-term immutable data storage for audit data, and Elasticserach and Kibana are used to index audit data. You can find an integration diagram below:

{{< figure src="/attachments/appstore/modules/advanced-audit-trail/integration-diagram.png" >}}

{{% alert color="info" %}}
The Advanced Audit Trail solution is different from the [Audit Trail](/appstore/modules/audit-trail/) module, because it needs less work to implement, and delivers a better search experience and better performance.
{{% /alert %}}

### 1.1 Typical Use Cases

* Tracks changes to data (who made what changes at what time in what context) to make your operation GxP and FDA CFR 21 Part 11 compliant, which is required for medical interaction platforms as well as for processes such as credit transaction and internal IT audit for user access
* Allows the developer to easily configure tracking changes per entity, with no changes to domain models required
* Helps the developer debug why an object is in a specific stage

### 1.2 Features

* Records the timestamp, the old value and the changed value, the microflow that triggered the change, and whether the object was created, modified, or deleted, and the user who made the change and their user role
* Supports viewing all changes that happened in the same microflow, which helps the auditor understand the context better
* Captures the checksum, file size, and name of files which can be used for validation
* Supports scheduled events that regularly sends the stored snapshots to an external system
* Allows the developer to configure an input field where additional information can be supplied about the snapshot to be created—once added, this category will be automatically added to all snapshots
* Offers microflows and pages that open a generalized view to show users the trail of a specific object
* Supports decoupling: when the external system cannot be reached, the snapshots will be stored in the local database, thus ensuring that the main system will keep on working without a dependency on the external database
* Offers auditor interface to search through the external database (across entities)
* Supports full-text search on data and search on changed data, and export of data to the CSV format using Kibana
* Support configuring different permissions for audit data for different users

### 1.3 Limitations 

* Advanced Audit Trail contains an [add-on module](/refguide/consume-add-on-modules-and-solutions/). 
* On Mendix Cloud XS [resource packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack), your app may run out of memory due to too many objects of the `ScheduledEventInformation` type being created.

### 1.4 Prerequisites

* You need to use Advanced Audit Trail with Studio Pro versions starting with [9.12](https://docs.mendix.com/releasenotes/studio-pro/9.12/).
* You need to have a [subscription](#obtain-license-key) to the Advanced Audit Trail solution to store your data in an external data storage that runs in the Mendix Cloud

### 1.5 Dependencies

* You need to install [Atlas Core](https://marketplace.mendix.com/link/component/117187) and [Atlas Web Content](https://marketplace.mendix.com/link/component/117183) in your application.

## 2 Installation

### 2.1 Starting a Subscription {#obtain-license-key}

Advanced Audit Trail is a premium Mendix product that is subject to a purchase and subscription fee. You can deploy Advanced Audit Trail locally or in a Mendix Free App for free. However, to deploy Advanced Audit Trail on the cloud, you need to start a subscription to get a license token and [configure](#configure-license-key) it later. To start a subscription, contact your Customer Success Manager (CSM) or the Mendix Sales organization.

### 2.2 Installing the Components in Your app

To install the component, click the **Contact Us** button on the [Advanced Audit Trail](https://marketplace.mendix.com/link/component/120943) Marketplace page. Then follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro* to import the Advanced Audit Trail Core module and the Advanced Audit Trail UI module into your app.

{{% alert color="info" %}}If you update the Advanced Audit Trail Core module, make sure that you update the Advanced Audit Trail UI module to the same version.{{% /alert %}}

## 3 Configuration

1. Set up your application roles to include the right [module roles](#module-roles).
2. Configure the right [constant values](#constants) for the right snapshots.
3. Implement the **Before Commit** (**BCo**) and **Before Delete** (**Bde**) events. Use the events on the domain model settings (**BCo** / **BDe**). For example, the configuration in the image below is for the **Before Commit** handler, whereas for the **Before Delete** handler, the value of **Is delete** should be set to *true*.

    {{< figure src="/attachments/appstore/modules/advanced-audit-trail/example.png" >}}

    In case you need to follow a compliance that requires you to never delete an object, implement this outside the context of the audit trail module. 

    You can create **CommitList** microflows that commit a list of objects without events, but use **Create Snapshot (List)** from the **Toolbox** (the **JA_Object_CreateSnapshot_List** action). This ensures that the snapshots are committed in a list as well, and therefore minimizing performance impact of the module. When an object is committed without events, this change is not audited unless you explicitly add **Create Snapshot** (the **JA_Object_CreateSnapshot** action) or **Create Snapshot (List)** (the **JA_Object_CreateSnapshot_List** action) before the commit.

    {{% alert color="info" %}}When your Mendix application includes entities with inheritance, we recommend you to only apply the event handler on the generalization of this entity. There are cases where it makes sense to apply the event handler on the specialization instead, but applying the event handler to both the generalization and specialization will lead to duplicate snapshots of the same action.</br></br>When there are multiple **Before Commit** (**BCo**) or **Before Delete** **(Bde)** events that may change the object, the order is not guaranteed. see [Event Handlers](/refguide/event-handlers/). This means that some changes could theoretically fall outside the context of an audit.{{% /alert %}}

4. Add the open search page microflow **AdvancedAuditTrailUI.ACT_SnapshotQuery_CreateAndShowSearch** to the navigation.
5. Make sure that the [scheduled events](#scheduled-events) are enabled in the cloud portal.

    {{% alert color="info" %}}Due to protected modules, we do not show scheduled events in Studio Pro.{{% /alert %}}

### 3.1 Configuring Module Roles {#module-roles}

* **Admin**: The admin can query the entire database for the current application and can access the debug pages.
* **_AddOn_CanChangeEnvironmentInQuery**: This is an additional role for the Admin, which allows the Admin to change the environment in search queries, so that they can also search in other applications.
* **DisplayOnly**: The display-only user can view queries that are prepared in microflows, but cannot change any of them. This can restrict the user to seeing information they are allowed to see. The role is tested against cross site scripting (XSS).

    {{% alert color="info" %}}Access from and to the long-term data storage is based on service accounts. This means that once a user can access the **Snippet_Settings**, they can access all data in the long-term storage, even if it belongs to other applications in the same environment. Any user-based authentication needs to be implemented in the runtime, for example, by using the **DisplayOnly** module role and the **Query Snapshots for object** setup.{{% /alert %}}

### 3.2 Configuring Constants {#constants}

* Retention settings for the local cached data
    * **SnapshotRetentionDays**: This is the days that the records be kept in the local snapshot cache.
    * **OnlyDeleteProcessedItems**: This indicates whether items should be deleted only if they are sent to the external data storage.
        * If **OnlyDeleteProcessedItems** is set to **True**, the **SnapshotRetentionDays** is only applicable to processed snapshots.

* Snapshots
    * **IncludeHashedStrings**: This indicates whether to include attributes of type Hashed String (e.g., password fields) in the snapshots.

        * **True**: Hashed Strings will be included (storing bcrypt/or other hashed value).
        * **False**: Hashed Strings will be excluded and therefore not audited.

        {{% alert color="info" %}}Manually-encrypted (e.g., using the [Encryption](/appstore/modules/encryption/) module) Strings are not the type of Hashed String and will not be affected by this setting.{{% /alert %}}

* Integration
    * **EnvironmentName**: This is the name of the environment within Kibana, which should be unique in your audit data storage, for example, *myApp-prod*. Do not use any whitespace or tilde (~) for the environment name.

        {{% alert color="info" %}}If two applications use the same name, the audit trail will not be able to distinguish between the two, effectively breaking the audit trail for both applications irreversibly.{{% /alert %}}

    * **EnvironmentURL** (optional): This is the URL used to identify the environment. If left empty, the Application Runtime URL is used instead. 
    * **Kafka_Endpoint** / **Kafka_Username** and **Kafka_Password**: These are the credentials for the Kafka environment for sending the data into the long-term storage.
    * **Kibana_Endpoint** / **Kibana_Username** and **Kibana_Password**: These are the credentials for the Kibana environment for receiving the data from the long-term storage.

### 3.3 Configuring Scheduled Events {#scheduled-events}

* **SE_SendAuditSnapshots**: This sends the cached data to the external data storage. This occurs each minute.
* **SE_CleanupSnapshotCache**: This cleans up the cached data based on the retention settings – **OnlyDeleteProcessedItems** and **SnapshotRetentionDays**. This occurs daily at 3:00 AM UTC.
* **SE_PeriodicVacuum**: This runs a periodic vacuum on a PostgreSQL database. This is not needed on Microsoft SQL. Other database types are not supported. This occurs every 2 hours.

    {{% alert color="info" %}}Enable the scheduled event **SE_PeriodicVacuum** in the cloud portal for PostgreSQL databases. PostgreSQL databases require a regular VACUUM when the application creates and deletes a lot of objects in order to stay quick and not to grow out of disk space. The default Mendix Cloud settings will not always perform the VACUUM when needed. The scheduled event **SE_PeriodicVacuum** performs the VACUUM regularly. This scheduled event is for PostgreSQL only. For more information, see PostgreSQL documentation on [VACUUM]( https://www.postgresql.org/docs/9.6/sql-vacuum.html ) and [ANALYZE](https://www.postgresql.org/docs/9.6/sql-analyze.html).{{% /alert %}}

### 3.4 Configuring Advanced Features (Optional)

* Link **NAV_AdvancedSettings** for accessing debug settings. Typically not needed, the features in here are subject to change.
* Link **NAV_CachedSnapshot_Overview** to access the local cache of snapshot data.
* Check the default values of the **NPE Settings** object in the domain model, since they will be used for configuring the app.
* Enable **SE_CleanupAuditSnapshots** if you want to use the retention settings and delete objects.

### 3.5 Adding Additional Information to a Snapshot (Optional)

It is possible to submit additional information for a snapshot (e.g., in order to provide a rationale on why the said action has taken place on the object in question). Developers can configure this feature for certain actions (creation, deletion, updating). To use this feature, the developer must use **Set additional info for snapshots** from the **Toolbox** (the **JA_SetAdditionalInfo** action) to set additional information for snapshots.

### 3.6 Implementing Custom User Logging (Optional)

Use **Override User for Snapshots in this Context** from the **Toolbox** (the **JA_SetUserForSnapshotsaction** action) to override the logged user for a request. For example, the request is a published REST service that runs in a system context, while the user is known.

### 3.7 Implementing User Name Scrambling (Optional)

Use **Configure Username mapping** from the **Toolbox** (the **JA_ConfigureUsernameMapping** action) to store a username differently in the long-term data storage. This can be used for anonymizing data (e.g. due to GDPR).

### 3.8 Implementing Display Formatters (Optional)

Use the formatter microflows to change how externally stored values will be displayed inside your Mendix application.

| Microflow | Formater | Description |
| --------- | -------- |---|
| **GetAttributes_ConvertDate** | Date formatter |Date formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, the date follows the US format (month/day/year).|
| **GetAttributes_ConvertDecimal** | Decimal formatter |Decimal formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, the decimal formatting follows the US format (period – ".") to separate an integer from its partial fractional part.|
| **GetAttributes_ConvertMxIdentifier** | Mendix object identifier formatter |Mendix object formatting is determined inside JA_ConfigureFormatters in the after start-up flow. By default, what is displayed in a reference is `[ModuleName].[EntityName] (ObjectGUID)`. One may prefer to display (a combination of) an attribute of the said object as a reference.|

### 3.9 Getting Microflow Stack Trace (Optional)

Use **Get microflow stack trace** from the **Toolbox** (the **JA_GetMicroflowTrace** action) to create custom logging/entities and identify in what microflow the action was triggered.

### 3.10 Changing the Module Layout (Optional)

Update the **AuditSnapshots_ResponsiveLayout** to update the layouts without changing the pages.

### 3.11 Configuring the License Key {#configure-license-key}

You can deploy Advanced Audit Trail locally or in a Mendix Free App for free. However, to deploy Advanced Audit Trail in the Mendix Cloud, you need to start a subscription to [obtain a license key](#obtain-license-key), and then configure it.

Before you deploy your app, configure the app **Constants** in the deployment package in the [Developer Portal](https://docs.mendix.com/developerportal/deploy/environments-details/).

If you have already deployed your app, change the existing **Licensekey** constant value on the **Model Options** tab and restart the app.

## 4 Read More

* [Consuming Add-on Modules and Solutions](/refguide/consume-add-on-modules-and-solutions/)
