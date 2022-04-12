---
title: "Advanced Audit Trail"
url: /appstore/app-services/advanced-audit-trail/
category: "App Services"
description: "Describes the configuration and usage of the Advanced Audit Trail app service, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "app service", "audit trail"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## I Introduction

Advanced Audit Trail allows you to trace changes, gain detailed insight in reading and writing data, use infinitely-scalable and fully-indexed data search, and have dashboards, alerting and connectivity to customer data warehouses.

With this app service, you can create audit snapshots of objects to store an Audit Trail. This Audit Trail is centralized and sent to a long-term data storage, and therefore supports complex search queries and keeps the operational database small and performant.

Advanced Audit Trail uses Kafka and Elasticsearch, shown in the intergration diagram below:

![integration-diagram](integration-diagram.png)

### 1.1 Typical Use Cases

* Prove who changed what at which moment
* Debug why an object is in a specific stage
* Create, store, and display a trail of open actions
* Trace a list of events, instead of persistent data, by logging a non-persistent entity (use the Object Code for making the trail recognizable)

### 1.2 Features

*  Scheduled event that will regularly send the stored snapshots to an external system
*  Decoupling: when the external system is down, the snapshots will be stored in the local database, thus ensuring that the main system will keep on working without a dependency on the external database
*  Admin interface to search through the external database (across entities)
*  Microflows and pages to open a generalized view that can be shown to users for a trail of a specific object

### 1.3 Limitations

*  Due to an issue with IP protected modules, it is not possible to build the project in the cloud, or create a local versioned deployment (the workaround is to create an unversioned deployment package using Studio Pro 9.10.1, 9.11, or 9.11.1)


### 1.4 Prerequisites

Advanced Audit Trail can only be used with Studio Pro 9 versions starting with [9.11.1](https://docs.mendix.com/releasenotes/studio-pro/9.11/).

## 2 Installation

Followed the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro* to import the **AdvancedAuditSnapshots** and **AdvancedAuditSnapshotsUI** modules into your project

## 3 Configuration

1. Set up your application roles to include the [module roles](#module-rules) correctly.

2. Configure the right [constant values](#constants) for the right snapshots.

3. Implement the **Before Commit** (**BCo**) and **Before Delete** **(Bde)** events correctly (see the examples). Use the events on the domain model settings (**BCo** / **BDe**).

   You can create **CommitList** microflows flows that commit a list of objects without events, but use the **Create Snapshot (List)** action. This will ensure that the snapshots are committed in a list as well, and therefore minimizing performance impact of the module.
   
4.   Add search to the navigation, or implement the Query Snapshots for object action.
   
5. Make sure that the scheduled events are enabled in the deployment environments.

#### 3.1 Module Roles {#module-roles}

*  **Admin** : The admin can query the entire for the current application and can access the debug pages

*  **_AddOn_CanChangeEnvironmentInQuery**: An additional role for the Admin, which allows the Admin to change the environment in search queries, so that they can also search in other applications

*  **DisplayOnly**: The display-only user can view queries that are prepared in microflows, but cannot change any of them. This can restrict the user to seeing information they are allowed to see. The role is tested against cross site scripting (XSS).

    {{% alert color="warning" %}}Access from and to the long-term data storage is based on service accounts. This means that once a user can access the **Snippet_Settings**, they can access all data in the long-term storage, even if it belongs to other applications in the same environment. Any user-based authentication needs to be implemented in the runtime, for example, by using the **DisplayUser** module role and the **ACT_Object_OpenAuditTrailPrettyView** setup.{{% /alert %}}

#### 3.2 Constants {#constants}

* Retention settings for the local cached data

  * **LogRetentionDays**: the days that the records be kept in the database

  * **OnlyDeleteProcessedItems**: whether items are deleted only if they are sent to the external data storage

    {{% alert color="warning" %}}Setting this to **false** will lead to a gap in the audit trail in the external data storage. This is only to be used in combination with the **NAV_CachedSnapshot_Overview**.{{% /alert %}}

* **Snapshots**
  
  * **IncludeHashedStrings**: whether to include attributes of type Hashed String (e.g. password fields) in the snapshots

     {{% alert color="info" %}}Manually encrypted (e.g. using the Encryption module) Strings are not of type Hashed String and will not be affected by this setting. If set to **true**, Hashed Strings will be included (storing bcrypt / or other hashed value). If set to **false**, Hashed Strings will be excluded and therefore not audited.{{% /alert %}}
  
* **Integration**

  * Environment Name: the name of the environment, which sould be unique in your audit data storage, for example, *myApp-prod*

  * Environment URL (optional): the URL used to identify the environment; If left empty, the Application Runtime URL is used instead.

  * Kafka Endpoint / Username and Password: the credentials for the kafka environment for sending the data into the long term storage

  * Kibana Endpoint / Username and Password: the credentials for the Kibana environment for receiving the data from the long term storage

#### 3.3 Schedule Event 

- **SE_SendAuditSnapshots**: sends the cached data to the external data storage
- **SE_CleanupSnapshotCache**: cleans up the cached data based on the retention settings – **OnlyDeleteProcessedItems** and **LogRetentionDays**
- **SE_PeriodicVacuum**: runs a periodic vacuum on Postgres databases (see below)

#### 3.4 Optional Advanced Features

  - Link **NAV_AdvancedSettings** for accessing debug settings. Typically not needed, the features in here are subject to change.
  - Link **NAV_CachedSnapshot_Overview** to access the local cache of snapshot data. 
  - Check the default values of the **NPE Settings** object in the domain model, since they will be used for configuring the app. 
  - Enable **SE_CleanupAuditSnapshots** if you want to use the retention settings and delete objects.

  #### 3.5 Implementing Custom User Logging (Optional)

It is possible to override the logged user for a request (e.g. the request is a published REST service that runs in a System Context, while the user is known). Use the **Override User for Snapshots in this Context** action for this.

  #### 3.6 Implementing User Name Scrambling (Optional)

Use Configure Username mapping to store a username differently in the long term data storage. This can be used for anonymizing data (e.g. due to GDPR).

  #### 3.7 Implementing Display Formatters (Optional)

Use the Formatter microflows to change how the String value will be calculated for Decimals, Dates, and Mendix Object Identifiers. See the example app for more details.

  #### 3.8 Getting Microflow Stack Trace (Optional)

Use this action to create custom logging / entities and identify in what microflow the action was triggered.

  #### 3.9 Changing the Module Layout (Optional)

Update the **AuditSnapshots_ResponsiveLayout** to update the layouts without changing the pages.