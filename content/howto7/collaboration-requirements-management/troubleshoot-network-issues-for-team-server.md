---
title: "Troubleshoot Network Issues for Connecting to Team Server"
category: "Collaboration & Requirements Management"
menu_order: 14
description: "Describes troubleshooting connection issues as well as the permissions and settings required to connect to Team Server."
tags: ["Team Server", "network", "troubleshoot", "firewall"]
---

## 1 Introduction

The Mendix Modeler needs to connect to Team Server, which is where all your projects are stored.

**This how-to will teach you how to do the following:**

*   How to troubleshoot network issues when downloading projects from and uploading projects to Team Server
*   Which permissions and settings are required to connect to Team Server

## 2 Troubleshooting Downloading a Team Server Project

Being unable to download the Team Server project would indicate that the security configuration of your company network is blocking access to `https://sprintr.home.mendix.com` and `https://teamserver.sprintr.com/`. If this solution does not work, please submit a request with Mendix Support at [support.mendix.com](https://support.mendix.com/).

## 3 Enabling Firewall Access to Team Server

Team Server is implemented using Subversion and the Mendix Modeler uses the HTTPS (TCP) protocol to communicate with that server. To access Team Server from within the Modeler the network at your location needs the following settings:

*   The HTTPS port (TCP 443) needs to be open
*   The HTTP port (TCP 80) needs to be open
*   WebDAV - verbs within the HTTP protocol - needs to be enabled on the proxy server (if any)

You can look up the IP address of [https://teamserver.sprintr.com/](http://teamserver.sprintr.com/), however, Mendix reserves the right to, at any time and without notification to the customer, change the IP address. This could happen if we move to a different infrastructure for example.

If needed, inform your IT department that the Mendix Modeler connects to [https://teamserver.sprintr.com/](https://teamserver.sprintr.com/). This will enable them to determine the correct firewall/proxy settings.

The Mendix Modeler connects with the domains stated below over HTTPS on port 443. These domains should be added to the firewall white list:

![](attachments/troubleshoot-team-server/networkaccessmendixplatform.jpg)

* [home.mendix.com](http://mendix.com/) – enables logging in to use the Mendix Modeler
* [cloud.home.mendix.com](http://cloud.home.mendix.com/) – enables deploying your app to the Mendix Cloud

