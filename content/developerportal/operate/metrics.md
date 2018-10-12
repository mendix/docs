---
title: "Metrics"
category: "Operate"
menu_order: 10
description: "This page describes the Metrics page of the Developer Portal."
tags: ["Operate","App","Trends","Running now","Cache","Metrics","Developer Portal"]
---

## 1 Introduction

In **Metrics** under the **Operate** category, you can monitor the performance and health of your App. This page is divided into three tabs, each of which is described below.

## 2 Trends

In this tab you can view the graphs of the App about:

*   Application Statistics 
*   Database Statistics
*   Application Node Statistics
*   Database Node Statistics

There are two types of **Trends** depending on which **Mendix Cloud version** the App is running on:

*   [Trends in Mendix Cloud v3](/developerportal/operate/trends)
*   [Trends in Mendix Cloud v4](/developerportal/operate/trends-v4)

You can find the Mendix Cloud version of your App in the **environment details**. 
For more information, see [How to View the Mendix Cloud Version and Region](/developerportal/howto/cloud-version-region).

## 3 Running Now

Running requests are all requests that are currently in progress for this environment. Please note that interrupting a request will actually stop it, and the end user may receive an error.

At this section you can view the following information about the running requests:

| Running Requests | Description
---|---
| User | The user that has started running the request. |
| Action | The name of the request. |
| Type | Microflow or Java action. |
| Duration | For how long the request is running. |

You can click the following buttons to execute actions:

*   **Refresh** will refresh the running requests
*   **Kill request** will stop the request
*   **Details** will show you information about the **Action Stack**. An Action Stack displays all actions currently on the call stack. Your action us currently performing the bottom action, which was triggered by the action one above it and so forth. 

The details of an Action Stack are:

*   Name
*   Type
*   Details

## 4 Cache

The Mendix runtime versions 4, 5, and 6 have an object cache for non-persistent objects. In this tab you can see how many objects of each type currently live in memory. You can also see the same information broken down per user session.

{{% alert type="info" %}}

The version 7 runtime is stateless and does not cache Mendix objects on the server. See the [Mendix Desktop Modeler Release Notes 7.0](/releasenotes/desktop-modeler/7.0) for more information.

{{% /alert %}}

*   Entity
*   User sessions with the amount of entities. If you select a user session you can click **Details** to see which entities are used.


## 5 Related Content

* [How to Calculate the Total Amount of Diskspace of a Cloud App Environment](/howtogeneral/support/how-to-calculate-diskspace-of-a-cloud-app-environment)
* [Database Maintenance: Size Reduction](/howtogeneral/support/database-maintenance-size-reduction)
* [Environment details](/developerportal/deploy/environments-details)
