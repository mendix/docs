---
title: "Troubleshooting the Workstation Connector"
linktitle: "Workstation Connector"
url: /mendix-workstation/troubleshooting-workstation-connector/
description: "Describes how to solve potential issues with the Workstation Connector."
weight: 50
---

## Introduction

This document provides troubleshooting instructions for some potential issues related to the Workstation Connector.

Connector logs are available in Studio Pro's console during local development or in the environment logs of your running environment. Since the Connector performs most operations client-side in nanoflows, you can also inspect local logs in the browser console.

## Workstation Client Did Not Respond Within 3 Seconds. Connection Failed.

If the **StationConnector.GetStation** nanoflow fails to connect to the Workstation Client, this error appears in the browser console and in Studio Pro's Console on the **Client_Nanoflow** log node.  

### Cause

The connection between the Client and Connector cannot be established. This occurs either because the Workstation Client cannot be found on the local computer, or because the current application is not allowed to establish a connection. 

### Solution

* Verify the Workstation Client is running and registered on the same computer as the browser attempting to connect via the StationConnector.
* Verify the Client is registered in the correct workspace by comparing the workspace name and ID displayed in the Client UI with the workspace in Workstation Management.
* Verify the application attempting to connect is properly configured as an allowed app in the workspace and on the station. To do so, check that your application (such as `http://localhost:8080`) is added in the **Apps** section of your workspace. If the app is added, verify the public key of the configured workspace app matches the public key displayed in your app using the Connector. If not, update the public key value of the workspace app with the latest value displayed in the app. Next, verify the app is also enabled as an allowed app in the station configuration by navigating to the respective station detail page in that workspace. Always click the **Refresh** button in the Workstation Client after applying any changes in Workstation Management.  

## The Client Requested a Session for a Time That Is Ahead of the Server

This is a warning log for the Mendix runtime on the **StationConnector - GetWebsocketSession** log node. 

### Cause 

For security reasons, the Connector only allows establishing a session when the computer running the Workstation Client has a time within 24 hours of the Mendix runtime server hosting the app. 

### Solution

Set the time on the computer running the Workstation Client to within 24 hours of the Mendix runtime server. If this is not possible, you can customize this behavior in the **StationConnector.GetWebsocketsSession** microflow, but you must maintain this customization when updating the module to a newer version.

## Context Entity Is Not Updated After Sending a Message

The context entity on your page is not updated after sending a message. Specifically, modifying a context entity shortly after sending a message for the first time does not always work.

### Cause

Sending a message for the first time sets the **Connected** state to **true** and triggers a commit on the device. This refreshes the device and all data sources nested within a device data source. Some of these data sources may create a new blank entity instead of displaying the updated entity. 

### Solution

Ensure all data sources nested within a device data source follow a Singleton (also known as GetCreate) pattern, where an entity is created if it does not exist or retrieved if it does.
