---
title: "Advanced Audit Trail"
url: /appstore/app-services/advanced-audit-trail/
category: "App Services"
description: "Describes the configuration and usage of the Advanced Audit Trail app service, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "app service", "audit trail"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## I Introduction

Advanced Audit Trail allows you to trace changes, use infinitely-scalable and fully-indexed data search. Once configured, the system automatically creates audit snapshots of objects to store an audit trail. This audit trail is centralized and sent to a long-term data storage, and therefore supports complex search queries and keeps the operational database small and performant.

We have built a software stack on top of [Kafka](https://kafka.apache.org/documentation/) and [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/index.html) to leverage their utility for audit trail in Mendix. See the integration diagram below:

{{< figure src="/attachments/appstore/app-services/advanced-audit-trail/integration-diagram.png >}}

### 1.1 Typical Use Cases

* Prove who changed what at which moment
* Debug why an object is in a specific stage

### 1.2 Features

*  Supports scheduled events that will regularly send the stored snapshots to an external system
*  Supports decoupling: when the external system cannot be reached, the snapshots will be stored in the local database, thus ensuring that the main system will keep on working without a dependency on the external database
*  Offers admin interface to search through the external database (across entities)
*  Allows users to search the data on specific properties of the tracked objects using [Kibana](https://www.elastic.co/guide/en/kibana/index.html)
*  Offers microflows and pages that open a generalized view to show users a trail of a specific object


### 1.3 Prerequisites

* You need to use Advanced Audit Trail with Studio Pro 9 versions starting with [9.12](https://docs.mendix.com/releasenotes/studio-pro/9.12/).
* You need to have an external data storage

## 2 Installation

### 2.1 Starting a Subscription

Advanced Audit Trail is a premium Mendix product that is subject to a purchase and subscription fee. You can deploy Advanced Audit Trail locally or in a Mendix Free App for free. However, to deploy Advanced Audit Trial on the cloud, you need to start a subscription to get a license token and configure it later. To start a subscription, contact your Customer Success Manager (CSM) or the Mendix Sales organization.

### 2.2 Installing the Component in Your app

Followed the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro* to import the **AdvancedAuditSnapshots** and **AdvancedAuditSnapshotsUI** modules into your project.

{{% alert color="info" %}}If you update the **AdvancedAuditSnapshots** module, make sure that you update the **AdvancedAuditSnapshotsUI** module to the same version.{{% /alert %}}

## 3 Configuration

1. Set up your application roles to include the right [module roles](#module-rules).

2. Configure the right [constant values](#constants) for the right snapshots.

3. Implement the **Before Commit** (**BCo**) and **Before Delete** **(Bde)** events (see the examples). Use the events on the domain model settings (**BCo** / **BDe**).

   You can create **CommitList** microflows that commit a list of objects without events, but use the **Create Snapshot (List)** action. This will ensure that the snapshots are committed in a list as well, and therefore minimizing performance impact of the module.

4. Add search to the navigation, or implement the Query Snapshots for object action.

5. Make sure that the [scheduled events](#scheduled-events) are enabled in the cloud portal.

   {{% alert color="info" %}}Due to protected modules, we don not show scheduled events in Studio Pro.{{% /alert %}}

#### 3.1 Module Roles {#module-roles}

*  **Admin**: The admin can query the entire database for the current application and can access the debug pages

*  **_AddOn_CanChangeEnvironmentInQuery**: This is an additional role for the Admin, which allows the Admin to change the environment in search queries, so that they can also search in other applications

*  **DisplayOnly**: The display-only user can view queries that are prepared in microflows, but cannot change any of them. This can restrict the user to seeing information they are allowed to see. The role is tested against cross site scripting (XSS).

    {{% alert color="warning" %}}Access from and to the long-term data storage is based on service accounts. This means that once a user can access the **Snippet_Settings**, they can access all data in the long-term storage, even if it belongs to other applications in the same environment. Any user-based authentication needs to be implemented in the runtime, for example, by using the **DisplayOnly** module role and the **ACT_Object_OpenAuditTrailPrettyView** setup.{{% /alert %}}

#### 3.2 Constants {#constants}

* Retention settings for the local cached data

    *  **LogRetentionDays**: the days that the records be kept in the database

    *  **OnlyDeleteProcessedItems**: whether items should be deleted only if they are sent to the external data storage

        {{% alert color="warning" %}}Setting this to **false** will lead to a gap in the audit trail in the external data storage. This is only used in combination with the **NAV_CachedSnapshot_Overview**.{{% /alert %}}

*  Snapshots
  
    *  **IncludeHashedStrings**: whether to include attributes of type Hashed String (e.g. password fields) in the snapshots

        * **True**: Hashed Strings will be included (storing bcrypt/or other hashed value)
        * **False**: Hashed Strings will be excluded and therefore not audited
    
        {{% alert color="info" %}}Manually encrypted (e.g. using the [Encryption](/appstore/modules/encryption/) module) Strings are not of type Hashed String and will not be affected by this setting.{{% /alert %}}
  
* Integration

    *  Environment Name: the name of the environment, which should be unique in your audit data storage, for example, *myApp-prod*

        {{% alert color="warning" %}}If two applications use the same name, the audit trail will not be able to distinguish between the two, effectively breaking the audit trail for both applications irreversibly.{{% /alert %}}
        
    *  Environment URL (optional): the URL used to identify the environment; If left empty, the Application Runtime URL is used instead. 
    *  Kafka Endpoint / Username and Password: the credentials for the kafka environment for sending the data into the long term storage
    *  Kibana Endpoint / Username and Password: the credentials for the Kibana environment for receiving the data from the long term storage
       
#### 3.3 Scheduled Events {#scheduled-events}

- **SE_SendAuditSnapshots**: sends the cached data to the external data storage

- **SE_CleanupSnapshotCache**: cleans up the cached data based on the retention settings – **OnlyDeleteProcessedItems** and **LogRetentionDays**

- **SE_PeriodicVacuum**: runs a periodic VACUUM on PostgreSQL databases when these is no user logged in

  {{% alert color="info" %}}Enable the scheduled event **SE_PeriodicVacuum** in the cloud portal for PostgreSQL databases. PostgreSQL databases require a regular VACUUM when the application creates and deletes a lot of objects in order to stay quick and not to grow out of disk space. The default Mendix Cloud settings will not always perform the VACUUM when needed. The scheduled event **SE_PeriodicVacuum** performs the VACUUM regularly. This scheduled event is for PostgreSQL only. For more info, see PostgreSQL documentation on [VACUUM]( https://www.postgresql.org/docs/9.6/sql-vacuum.html ) and [ANALYZE](https://www.postgresql.org/docs/9.6/sql-analyze.html).{{% /alert %}}

#### 3.4 Advanced Features (Optional)

  - Link **NAV_AdvancedSettings** for accessing debug settings. Typically not needed, the features in here are subject to change.
  - Link **NAV_CachedSnapshot_Overview** to access the local cache of snapshot data.
  - Check the default values of the **NPE Settings** object in the domain model, since they will be used for configuring the app
  - Enable **SE_CleanupAuditSnapshots** if you want to use the retention settings and delete objects

  #### 3.5 Implementing Custom User Logging (Optional)

Use the **Override User for Snapshots in this Context** action to override the logged user for a request. For example, the request is a published REST service that runs in a system context, while the user is known.

  #### 3.6 Implementing User Name Scrambling (Optional)

Use Configure Username mapping to store a username differently in the long-term data storage. This can be used for anonymizing data (e.g. due to GDPR).

  #### 3.7 Implementing Display Formatters (Optional)

Use the **Formatter** microflows to change how the String value will be calculated for Decimals, Dates, and Mendix Object Identifiers. See the example app for more details.

  #### 3.8 Getting Microflow Stack Trace (Optional)

Use this action to create custom logging/entities and identify in what microflow the action was triggered.

  #### 3.9 Changing the Module Layout (Optional)

Update the **AuditSnapshots_ResponsiveLayout** to update the layouts without changing the pages.
