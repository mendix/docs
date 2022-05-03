---
title: "Advanced Audit Trail UI"
url: /appstore/modules/advanced-audit-trail-ui/
category: "App Services"
description: "Describes the configuration and usage of the Advanced Audit Trail UI module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "Advanced Audit Trail", "UI"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Advanced Audit Trail UI]() module contains pre-configured snippets, pages, and layout, which help you create search queries and display query results from your Elasticsearch environment inside your own Mendix application. An extensive search interface allows you to create a search query flexibly: inside a time frame (start date time, end date time), by object (code, GUID, entity), by object action (creation, deletion), by user (username, user role), and by snapshot context (additional info, transaction ID, execution ID, stack trace). Additionally, various pre-configured pages display the results of a single object query or a multi-object query.

### 1.1 Dependencies

You should use this module with the [Advanced Audit Trail module]().

### 1.2 Demo App

For a demo app, see Advanced [Audit Trail solution package]().

{{% todo %}}Add links to the module pages in 1, 1.1, 1.2{{% / todo %}}

## 2 Installation

To download and install the Advanced Audit Trail UI module in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can find it in the **App Explorer**.

## 3 Configuration

### 3.1 Pages

#### 3.1.1 Search

* ACT_SnapshotQuery_CreateAndShowSearch
* ACT_SnapshotQuery_ExecuteAndViewResult
* Search
* Snippet_SnapshotQuery

#### 3.1.2 Search Results

* General
  * Snapshot Cards
    * Snippet_PropertyMutation_CurrentAndPrevious
    * Snippet_PropertyMutation_CurrentOnly
    * Snippet_Snapshot_Context
    * Snippet_Snapshot_ObjectIdentification
    * Snippet_Snapshot_User
  * ACT_Snapshot_SeeSnapshotsForObject
  * ACT_Snapshot_SeeSnapshotsInTransaction
  * ACT_SnapshotQuery_LoadMore
  * DS_Snapshot_GetPropertyMutations
  * DS_SnapshotQuery_GetPropertyMutations
  * DS_SnapshotQuery_GetResults
  * Snippet_Snapshot_Details
  * Snippet_Snapshot_Details_Sidebar
* Snapshot_View
* SnapshotQuery_SearchResults
* SnapshotQuery_SearchResults_Popup
* SnapshotQuery_SearchResults_SingleObject
* SnapshotQuery_SearchResults_SingleObject_Popup
* Snippet_SnapshotQuery_SearchResults
* Snippet_SnapshotQuery_SearchResults_SingleObject

### 3.2 Resources

* AuditSnapshots_ResponsiveLayout

## 4 Usage

{Optional: Provide more info for general use cases here if desired. You should provide this info in a reference guide page or how-to for more specific or advanced use cases.}

