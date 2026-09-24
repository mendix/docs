---
title: "Using the Workstation Client"
url: /mendix-workstation/use-client/
description: "Describes how to use the Mendix Workstation Client."
weight: 30
---

## Introduction

This reference guide provides information about the menus and functionalities of the Workstation Client.

## Overview

The Workstation Client is an application installed on computers which you want to register as stations in Mendix Workstation.

{{< figure src="/attachments/workstation/wks-client-use1.png" class="no-border" >}}

## Basic Information

The top section of the Workstation Client shows the following information:

* The name and ID of the workspace where the Client is registered
* The ID of the computer where the Client is installed
* The ID of the station created for this computer in Workstation Management
* The date and time of the last update of this Workstation Client's configuration (for example, the list of devices associated with the Client)
* The currently installed version of the Client

## Devices

The **Devices** section shows a list of all devices currently associated with the station through this Workstation Client. For each device, the section shows the following information:

* Availability - When a device shows as **Available**, it is likely connectable. The specifics depend on the device type:

    * Bluetooth - Bluetooth devices are scanned continuously. They are considered available if seen, and unavailable if not seen for 30 seconds.
    * Printer - The Client polls the system printer list. The scan only checks that the device exists, not its status, configuration, or connectivity.
    * Serial device - The Client polls the system port list. The scan only checks that the device exists, not its connectivity.
    * TCP/IP client - The Client only checks that the host is defined and the port is valid. It cannot verify remote connectivity without actually connecting.

* Connection status - When the device shows as **Connected**, it means that the device connection has been successfully established and not yet closed. The device is available and is not throwing any errors.
* Error status - Shows any error captured for this device. Error status is reset on config change or reconnect.

You can also expand each device to see more information about its connection parameters (for example, the host or port of a TCP/IP server).

## Additional Actions

Click the **three dots** menu in the top right corner of the Workstation Client to perform any of the following actions:

* **Refresh** - By default, the Workstation Client operates in auto-refresh mode. That is, any changes made to the configuration in Workstation Management are immediately reflected in the Client. If you [disabled the Client's auto-refresh in Workstation Management](/mendix-workstation/management-settings/#auto-refresh), you can use the **Refresh** option to manually refresh the Client's configuration.
* **Deregister** - When [Developer Mode](/mendix-workstation/management-stations/#developer-mode) is enabled, you can select this option to deregister the Client from Workstation Management.
* **Management** - Selecting this option opens the **Workstation Management** portal in your browser.
* **Logs** - This option shows the Workstation Client logs, which you can use to help you troubleshoot any issues. For more information, see [Troubleshooting the Workstation Client](/mendix-workstation/troubleshooting-workstation-client/).
* **Diagnostics** - When [Developer Mode](/mendix-workstation/management-stations/#developer-mode) is enabled, you can select this option to view information about the available devices, credentials, station configuration, system info, and log levels, which you can use to help you troubleshoot any issues. For more information, see [Troubleshooting the Workstation Client](/mendix-workstation/troubleshooting-workstation-client/).
