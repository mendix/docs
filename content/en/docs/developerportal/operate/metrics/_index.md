---
title: "Metrics"
url: /developerportal/operate/metrics/
category: "Operations"
weight: 10
description: "Describes how to monitor the performance and health of your app."
tags: ["Operate","App","Trends","Running now","Cache","Metrics","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

On the **Metrics** page you can monitor the performance and health of your app. The Metrics page is divided into three tabs, each of which is described below.

## 2 Trends

In this tab you can view graphs which display the following information about the app:

* Application Statistics 
* Database Statistics
* Application Node Statistics
* Database Node Statistics

The following document describes the different trends information available:

* [Trends in the Mendix Cloud](/developerportal/operate/trends-v4/)

## 3 Running Now

Running requests are all requests that are currently in progress for this environment.

This tab displays the following information about running requests:

| Column | Description |
| --- | --- |
| User | The user that started running the request. |
| Action | The name of the request. |
| Type | Microflow or Java action. |
| Duration | For how long the request has been running. |

You can click the following buttons to execute actions:

* **Refresh** refreshes the list of running requests

* **Kill request** stops the selected request
    {{% alert color="warning" %}}If you stop a request, it will not complete and the end-user may receive an error.{{% /alert %}}

* **Details** shows you the **Action Stack** for the selected request. An Action Stack displays all the actions currently on the call stack. The bottom action is the one which is currently being performed. It was triggered by the action above it and so forth. The details shown for an Action Stack are:
    * Name
    * Type
    * Details

## 4 Read More

* [Environment Details](/developerportal/deploy/environments-details/)
