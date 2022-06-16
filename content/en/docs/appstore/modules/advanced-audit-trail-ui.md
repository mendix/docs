---
title: "Advanced Audit Trail UI"
url: /appstore/modules/advanced-audit-trail-ui/
category: "App Services"
description: "Describes the configuration and usage of the Advanced Audit Trail UI module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "Advanced Audit Trail", "UI"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Advanced Audit Trail UI](https://marketplace.mendix.com/link/component/120204) module contains pre-configured snippets, pages, and layout, which help you create search queries and display query results from your Elasticsearch environment inside your own Mendix application. An extensive search interface allows you to create a search query flexibly: inside a time frame (start date time, end date time), by object (code, GUID, entity), by object action (creation, deletion), by user (username, user role), and by snapshot context (additional info, transaction ID, execution ID, stack trace). Additionally, various pre-configured pages display the results of a single object query or a multi-object query.

### 1.1 Dependencies

You should use this module with the [Advanced Audit Trail](https://marketplace.mendix.com/link/component/120237) module.

## 2 Installation

To download and install the Advanced Audit Trail UI module in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can find it in the **App Explorer**.

## 3 Configuration

### 3.1 User Roles

* **DisplayOnly**: DisplayOnly is typically used for users that may only view certain audit trails.
* **Administrator**: The Administrator additionally has access to the search interface.

### 3.2 Pages

#### 3.2.1 Search

* **ACT_SnapshotQuery_CreateAndShowSearch**: pre-creates the search query object and shows the search interface
* **ACT_SnapshotQuery_ExecuteAndViewResult**: pushes the configured query to Elasticsearch and displays the query results if at least one snapshot was returned
* **Search**: the search interface, only accessible to the Administrator

#### 3.2.2 Search Results

* **General**
  * **ACT_Snapshot_SeeSnapshotsForObject**: pushes a search query for a specific object, which will then display the object-specific audit trail
  * **ACT_Snapshot_SeeSnapshotsInTransaction**: pushes a search query for a specific transaction ID, which will then display snapshots created within the same transaction context
  * **ACT_SnapshotQuery_LoadMore**: loads an additional batch of snapshots from Elasticsearch
* **Snapshot_View**: displays the selected snapshot in a pop-up window
*  **SnapshotQuery_SearchResults**: displays the query results in the left column

    {{% alert color="info" %}}Selecting a snapshot will display its information in the right column.{{% /alert %}}

* **SnapshotQuery_SearchResults_Popup**: displays the query results in a pop-up window
* **SnapshotQuery_SearchResults_SingleObject**: displays the results for an object-specific query
* **SnapshotQuery_SearchResults_SingleObject_Popup**: displays the results for an object-specific query in a pop-up window
