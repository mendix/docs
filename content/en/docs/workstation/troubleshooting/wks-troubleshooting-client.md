---
title: "Troubleshooting the Workstation Client"
linktitle: "Workstation Client"
url: /mendix-workstation/troubleshooting-workstation-client/
description: "Describes how to solve potential issues with the Workstation Client."
weight: 40
---

## Introduction

This document provides troubleshooting instructions for some potential issues related to the Workstation Client.

### Logs

By default, the Client retains logs of up to 10 MB for the past seven days locally on your computer. Access logs by clicking the **Logs** button on the Client UI, then optionally selecting the level of logs you want to see. Opening the Client's console through the browser developer tools (**Ctrl + Shift + I**) can also provide additional information about encountered errors in the UI of the Client.

Log files are also available by day in the Client's app data folder. On Windows, press **Win + R** and enter:

* If you installed the Client using the installer for all users: `%ProgramData%\Mendix Workstation\logs`
* If you are using the portable version: `%AppData%\Mendix Workstation\logs`

On Linux, the *Mendix Workstation/logs* folder is located at either `$XDG_CONFIG_HOME` or `~/.config`.

**Live logs** are available in two ways:

* Start the Workstation Client. Click the three-dot icon in the top tight, then click **Logs**. Debug level logs are only available in *Developer Mode*
* Start the Workstation Client from PowerShell: `start "C:\Program Files\Mendix Workstation\Mendix Workstation.exe" -ArgumentList "--log-level=debug" -wait`.

### Diagnostics

When [Developer Mode](/mendix-workstation/installation/#developer-mode) is enabled, the Client also shows a **Diagnostics** page. This page displays information about the available devices, credentials, station configuration, system info, and log levels, which you can use to help you troubleshoot any issues.

## Registration Token Could Not Be Parsed

The Client shows an error like the following: *Registration token could not be parsed. Please enter another token!*

### Cause 

You entered a registration token with an invalid format. 

### Solution

Ensure you copied and pasted the token exactly as displayed in Workstation Management without any additional characters. Create a new registration token if the issue persists.

## Registration Token Denied by Workstation Management

The Client shows an error like the following: *Registration token denied by Workstation Management. Please use another token*. 

### Cause 

The registration token is no longer valid. This can occur if:

* The token expired after one hour
* The token was recreated in Workstation Management (using the **Refresh** button or reopening the registration window)
* The token has already been used by another Workstation Client

### Solution

If the station status in Workstation Management is still *No computer registered*, regenerate the token and try again. Otherwise, verify the correct computer and Client are registered to that station and unregister if not. 

## HTTPError: Request failed with status code 503 Service Temporarily Unavailable

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': HTTPError: Request failed with status code 503 Service Temporarily Unavailable: GET.*

### Cause

Workstation Management is temporarily offline, most likely due to maintenance. 

### Solution 

Check out the [Mendix Status Page](https://status.mendix.com/) to see if there is a scheduled maintenance for the Workstation Management. If there is no maintenance message and the issue persists after a few minutes, report an incident via the status page.

## TimeoutError: Request timed out

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': TimeoutError: Request timed out: GET [yourStationURL]*

### Cause

The Client request to Workstation Management is not forwarded to the Workstation Management server and times out. This issue may occur if your network traffic is routed through a proxy server, as is common in protected corporate IT environments, and the proxy server is offline.  

### Solution 

Verify whether your computer's network traffic is routed through a proxy server and configure your proxy settings accordingly. See [Network Configuration](/mendix-workstation/prerequisites/#network-configuration).

## Workstation Management URL cannot be resolved

The Client shows an error like the following: *Station could not be synchronized with Management. Error invoking remote method 'refresh-station-config': Error: Workstation Management URL cannot be resolved. This might be an DNS issue or the host is offline.*

### Cause

The Client cannot resolve the URL to Workstation Management. This can have several causes, most commonly when the machine running the Workstation Client has no internet connection. 

### Solution 

First, verify you have a working internet connection. Then verify you can access [Workstation Management](https://workstation.home.mendix.com/) from your browser. If your browser cannot resolve that address, there may be an issue with your DNS server or configuration. On Windows, verify your DNS settings for your Ethernet or wireless LAN adapter using the command prompt and entering `ipconfig`. The command `nslookup www.mendix.com` provides further information about the IP address your DNS server resolved for the Mendix domain. 