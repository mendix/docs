---
title: "Troubleshooting Mendix Workstation"
url: /mendix-workstation/troubleshooting/
description: "Describes how to solve potential issues with Mendix Workstation."
weight: 40
---

## Introduction

If you encounter any issues with your Mendix Workstation Management, Connector, or Client, use the following troubleshooting tips to help you solve them.

## Workstation Management

### Station Status of Unlinked Workstation Client Is Still "Computer Registered"

This issue might occur if your Workstation Client could not establish a connection to the Workstation Management, for example, because the computer was not connected to a network. 

#### Solution

Manually unregister the station in Workstation Management.

### Workspace Owner Account Deactivated 

The Workspace's owner account has been deactivated and the owner did not transfer the ownership to another Workspace member.

#### Solution

Raise a ticket to support to transfer Workspace ownership.

## Workstation Client

The Client retains logs for the last eight days. You can access the logs by clicking the **Logs** button on the Client UI, and then optionally selecting the level of logs that you want to see. Opening the client's console through the browser developer tools (**Ctrl + Shift + I**) can also provide additional information about encountered errors in the UI of the Client.

You can also find log files by day in the Client's app data folder. To do so on Windows, press **Win + R**. If you installed the Client using the installer for all users, enter `%ProgramData%\Mendix Workstation\logs`. If you are using the portable version, enter `%AppData%\Mendix Workstation\logs`. On Linux the Mendix *Workstation/logs* folder is either located at `$XDG_CONFIG_HOME` or `~/.config`.

Alternatively, you can start the Mendix Workstation Client from Powershell to view logs: `start "C:\Program Files\Mendix Workstation\Mendix Workstation.exe" -ArgumentList "--log-level=debug" -wait`.

### Registration Token Could Not Be Parsed

The Client shows an error like the following: *Registration token could not be parsed. Please enter another token!*

#### Cause 

You entered a registration token with an invalid format. 

#### Solution

Ensure that you copied and pasted the token as displayed by the management and that you did not enter additional characters by accident. Create a new registration token if the issue persists. 

### Registration Token Denied by Workstation Management

The Client shows an error like the following: *Register token denied by Workstation Management. Please use another token*. 

#### Cause 

The registration token is no longer valid because it has either expired after one hour, the token was recreated in the Management application (using the **Refresh** button or reopening the registration window) or the token has already been used by another Workstation Client.

#### Solution

If the status of the Station displayed in the Management is still *No computer registered*, regenerate the token and try again. Otherwise, check if the correct computer and Client is registered to that station and unregister it if not.  

### Access Denied by Workstation Management

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': Error: Access denied by Workstation Management. Please deregister your computer and restart the registration process!*. 

#### Cause

This error occurs if the credentials provided by the Workstation Client are no longer valid, for example, if it got deregistered in the Management or if the APIKey is expired.

#### Solution

You can continue using the Workstation Client with the current configuration, but it will no longer receive updates. To fix this, press **Unlink** in the Workstation Client and then re-register the workstation.

## Workstation Connector

Logs for the Connector can be found in Studio Pro's console during local development or within the environment logs of your running environment. Since the Connector performs most operations client-sided in nanoflows, you can also inspect the local logs that can be found in the browser console.

### Workstation Client Did Not Respond Within 3 Seconds. Connection Failed.

If the **StationConnector.GetStation** nanoflow fails to connect to your Workstation Client, this error log message is visible in the browser console and in the Studio Pro's Console on the **Client_Nanoflow** log node.  

#### Cause

The connection between the Client and the Connector cannot be established either because the Workstation Client cannot be found on the local computer or the current application is not allowed to establish a connection. 

#### Solution

* Verify that the Mendix Workstation Client is running and registered on the same computer as the browser that is trying to establish a connection via the StationConnector.
* Verify that the Client is registered in the correct Workspace by comparing the Workspace name and ID displayed in the Client UI with the Workspace in the Management. 
* Verify that the application that is attempting a connection is properly configured as an allowed app in the Workspace and on the Station. To do so check that your application, for example, running on `http://localhost:8080`, is added in the **Apps** section of your Workspace. If the app is added, check that the public key of the configured workspace app is up to date with the public key displayed in your app that is using the connector. If not, update the public key value of the workspace app with the latest value displayed in the app. Next, check that the app is also enabled as an allowed app in the Station configuration by going to the respective Station detail page in that workspace. Always press the **Refresh** button in the Workstation Client after applying any changes in the Management.  

### The Client Requested a Session for a Time That Is Ahead of the Server

This is a warning log for the Mendix runtime on the **StationConnector - GetWebsocketSession** log node. 

#### Cause 

For security reasons, the Connector only allows the time of the computer running the Workstation Client to be 24 hours behind the Mendix runtime server that hosts the app before establishing a session. 

#### Solution

Change the time of the computer running the Workstation Client to be within 24 hours of the Mendix runtime server. If that is not an option, you can customize this yourself in the **StationConnector.GetWebsocketsSession** microflow, but must maintain this setting after updating the module to a newer version.

### Context Entity Is Not Updated After Sending a Message

The Context Entity on your page is not getting updated after sending a message. More specifically, modifying a context entity shortly after sending a message for the first time does not always work.

#### Cause

Sending a message for the first time sets the Connected state to true and triggers a commit on the device. This in turn refreshes the device and all data sources that are nested within a device data source. Some of these data sources may create a new blank entity instead of showing the updated entity. 

#### Solution

Make sure that all data sources nested within a device data source follow a Singleton (also: GetCreate) pattern, where an entity is created if it does not exist and retrieved if it does.
