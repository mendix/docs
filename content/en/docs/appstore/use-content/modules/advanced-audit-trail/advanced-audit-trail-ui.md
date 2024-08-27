---
title: "Advanced Audit Trail UI"
url: /appstore/modules/advanced-audit-trail-ui/
description: "Describes the configuration and usage of the Advanced Audit Trail UI module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Advanced Audit Trail UI](https://marketplace.mendix.com/link/component/120943) module contains pre-configured snippets, pages, and layout, which help you create search queries and display query results from your Elasticsearch environment inside your own Mendix application. An extensive search interface allows you to create a search query flexibly: inside a time frame (start date time, end date time), by object (code, GUID, entity), by object action (creation, deletion), by user (username, user role), and by snapshot context (additional info, transaction ID, execution ID, stack trace). Additionally, various pre-configured pages display the results of a single object query or a multi-object query.

### Dependencies

* You should use this module with the [Advanced Audit Trail](/appstore/modules/advanced-audit-trail/) solution.

## Installation

To install the component, first click the **Contact Us** button on the [Advanced Audit Trail](https://marketplace.mendix.com/link/component/120943) Marketplace page. 

Then follow the instructions in the [Importing Content from the App Explorer](/appstore/use-content/#import) section in *Using Marketplace Content* to import the Advanced Audit Trail Core module and the Advanced Audit Trail UI module into your project.

{{% alert color="info" %}}If you update the Advanced Audit Trail Core module, make sure that you update the Advanced Audit Trail UI module to the same version.{{% /alert %}}

## Configuration

### User Roles

* **DisplayOnly**: This role is typically used for users that may only view certain audit trails.
* **Administrator**: This role additionally has access to the search interface.

### Pages

#### Search

* **ACT_SnapshotQuery_CreateAndShowSearch**: pre-creates the search query object and shows the search interface
* **ACT_SnapshotQuery_ExecuteAndViewResult**: pushes the configured query to Elasticsearch and displays the query results if at least one snapshot was returned
* **Search**: the search interface, only accessible to the Administrator role

#### Search Results

* **General**
    * **ACT_Snapshot_SeeSnapshotsForObject**: pushes a search query for a specific object, which will then display the object-specific audit trail
    * **ACT_Snapshot_SeeSnapshotsInTransaction**: pushes a search query for a specific transaction ID, which will then display snapshots created within the same transaction context
    * **ACT_SnapshotQuery_LoadMore**: loads an additional batch of snapshots from Elasticsearch
* **Snapshot_View**: displays the selected snapshot in a pop-up window
* **SnapshotQuery_SearchResults**: displays the query results in the left column

    {{% alert color="info" %}}Selecting a snapshot will display its information in the right column.{{% /alert %}}

* **SnapshotQuery_SearchResults_Popup**: displays the query results in a pop-up window
* **SnapshotQuery_SearchResults_SingleObject**: displays the results for an object-specific query
* **SnapshotQuery_SearchResults_SingleObject_Popup**: displays the results for an object-specific query in a pop-up window
