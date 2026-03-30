---
title: "Troubleshooting Mendix Workstation"
linktitle: "Troubleshooting"
url: /mendix-workstation/troubleshooting/
description: "Describes how to solve potential issues with Mendix Workstation."
weight: 40
---

## Introduction

If you encounter any issues with your Workstation Management, Connector, or Client, use the following troubleshooting tips to help you solve them.

## Workstation Management

### Station Status of Unlinked Workstation Client Is Still "Computer Registered"

This issue might occur if your Workstation Client could not establish a connection to the Workstation Management, for example, because the computer was not connected to a network. 

#### Solution

Manually unregister the station in Workstation Management.

### Workspace Owner Account Deactivated 

The Workspace's owner account has been deactivated, and the owner did not transfer the ownership to another Workspace member.

Contact Mendix Support to transfer workspace ownership.

## Workstation Client

By default, the Client retains logs of up to 10 MB for the past seven days locally on your computer. Access logs by clicking the **Logs** button on the Client UI, then optionally selecting the level of logs you want to see. Opening the Client's console through the browser developer tools (**Ctrl + Shift + I**) can also provide additional information about encountered errors in the UI of the Client.

Log files are also available by day in the Client's app data folder. On Windows, press **Win + R** and enter:

* If you installed the Client using the installer for all users: `%ProgramData%\Mendix Workstation\logs`
* If you are using the portable version: `%AppData%\Mendix Workstation\logs`

On Linux, the *Mendix Workstation/logs* folder is located at either `$XDG_CONFIG_HOME` or `~/.config`.

**Live logs** are available in two ways:

* Start the Workstation Client. Click the three-dot icon in the top tight, then click **Logs**. Debug level logs are only available in *Developer Mode*
* Start the Workstation Client from PowerShell: `start "C:\Program Files\Mendix Workstation\Mendix Workstation.exe" -ArgumentList "--log-level=debug" -wait`.

### Registration Token Could Not Be Parsed

The Client shows an error like the following: *Registration token could not be parsed. Please enter another token!*

#### Cause 

You entered a registration token with an invalid format. 

#### Solution

Ensure you copied and pasted the token exactly as displayed in Workstation Management without any additional characters. Create a new registration token if the issue persists.

### Registration Token Denied by Workstation Management

The Client shows an error like the following: *Registration token denied by Workstation Management. Please use another token*. 

#### Cause 

The registration token is no longer valid. This can occur if:

* The token expired after one hour
* The token was recreated in Workstation Management (using the **Refresh** button or reopening the registration window)
* The token has already been used by another Workstation Client

#### Solution

If the station status in Workstation Management is still *No computer registered*, regenerate the token and try again. Otherwise, verify the correct computer and Client are registered to that station and unregister if not. 

### HTTPError: Request failed with status code 503 Service Temporarily Unavailable

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': HTTPError: Request failed with status code 503 Service Temporarily Unavailable: GET.*

#### Cause

Workstation Management is temporarily offline, most likely due to maintenance. 

#### Solution 

Check out the [Mendix Status Page](https://status.mendix.com/) to see if there is a scheduled maintenance for the Workstation Management. If there is no maintenance message and the issue persists after a few minutes, report an incident via the status page.

### TimeoutError: Request timed out

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': TimeoutError: Request timed out: GET [yourStationURL]*

#### Cause

The Client request to Workstation Management is not forwarded to the Workstation Management server and times out. This issue may occur if your network traffic is routed through a proxy server, as is common in protected corporate IT environments, and the proxy server is offline.  

#### Solution 

Verify whether your computer's network traffic is routed through a proxy server and configure your proxy settings accordingly. See [Network Configuration](/mendix-workstation/prerequisites/#network-configuration).

### Workstation Management URL cannot be resolved

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': Error: Workstation Management URL cannot be resolved. This might be an DNS issue or the host is offline.*

#### Cause

The Client cannot resolve the URL to Workstation Management. This can have several causes, most commonly when the machine running the Workstation Client has no internet connection. 

#### Solution 

First, verify you have a working internet connection. Then verify you can access [Workstation Management](https://workstation.home.mendix.com/) from your browser. If your browser cannot resolve that address, there may be an issue with your DNS server or configuration. On Windows, verify your DNS settings for your Ethernet or wireless LAN adapter using the command prompt and entering `ipconfig`. The command `nslookup www.mendix.com` provides further information about the IP address your DNS server resolved for the Mendix domain. 

## Workstation Connector

Connector logs are available in Studio Pro's console during local development or in the environment logs of your running environment. Since the Connector performs most operations client-side in nanoflows, you can also inspect local logs in the browser console.

### Workstation Client Did Not Respond Within 3 Seconds. Connection Failed.

If the **StationConnector.GetStation** nanoflow fails to connect to the Workstation Client, this error appears in the browser console and in Studio Pro's Console on the **Client_Nanoflow** log node.  

#### Cause

The connection between the Client and Connector cannot be established. This occurs either because the Workstation Client cannot be found on the local computer, or because the current application is not allowed to establish a connection. 

#### Solution

* Verify the Workstation Client is running and registered on the same computer as the browser attempting to connect via the StationConnector.
* Verify the Client is registered in the correct workspace by comparing the workspace name and ID displayed in the Client UI with the workspace in Workstation Management.
* Verify the application attempting to connect is properly configured as an allowed app in the workspace and on the station. To do so, check that your application (such as `http://localhost:8080`) is added in the **Apps** section of your workspace. If the app is added, verify the public key of the configured workspace app matches the public key displayed in your app using the Connector. If not, update the public key value of the workspace app with the latest value displayed in the app. Next, verify the app is also enabled as an allowed app in the station configuration by navigating to the respective station detail page in that workspace. Always click the **Refresh** button in the Workstation Client after applying any changes in Workstation Management.  

### The Client Requested a Session for a Time That Is Ahead of the Server

This is a warning log for the Mendix runtime on the **StationConnector - GetWebsocketSession** log node. 

#### Cause 

For security reasons, the Connector only allows establishing a session when the computer running the Workstation Client has a time within 24 hours of the Mendix runtime server hosting the app. 

#### Solution

Set the time on the computer running the Workstation Client to within 24 hours of the Mendix runtime server. If this is not possible, you can customize this behavior in the **StationConnector.GetWebsocketsSession** microflow, but you must maintain this customization when updating the module to a newer version.

### Context Entity Is Not Updated After Sending a Message

The context entity on your page is not updated after sending a message. Specifically, modifying a context entity shortly after sending a message for the first time does not always work.

#### Cause

Sending a message for the first time sets the **Connected** state to **true** and triggers a commit on the device. This refreshes the device and all data sources nested within a device data source. Some of these data sources may create a new blank entity instead of displaying the updated entity. 

#### Solution

Ensure all data sources nested within a device data source follow a Singleton (also known as GetCreate) pattern, where an entity is created if it does not exist or retrieved if it does.
