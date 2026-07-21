---
title: "Configuring Settings"
linktitle: "Settings"
url: /mendix-workstation/management-settings/
description: "Describes the settings available in Mendix Workstation Management."
weight: 80
---

## Introduction

Navigate to the **Settings** page in a workspace to configure settings that are applied to all stations in that workspace.

## Log Settings

The Workstation Client always stores logs to the file system it is installed on (for more information, see [Troubleshooting the Workstation Client](/mendix-workstation/troubleshooting-workstation-client/)). No logs are send to the Workstation Management. However, you can configure the log level and retention policy of all the Workstation Clients that are registered to stations in the workspace.

### Log Level

Configure the log level of the logs stored by the Workstation Clients.

* **Info** - This is the default log level. Logs normal operations and key application events. For example, the time when the Client was launched or terminated.
* **Warn** - Logs potential issues, suboptimal conditions, and other situations that require attention, for example, if a request to refresh the Client's configuration timed out.
* **Error** - Logs visible problems where something is not working as expected, for example, device failures.
* **Debug** - Logs detailed internal states for developer diagnostics, for example, requests made to the Workstation Management, or communication with devices.

By default, unregistered Workstation Clients are set to the **Debug** log level. After a Client is registered, the log level as configured in the Workspace settings is applied.

## Retention Policy

Verbosity and thus log file size increases with each log level. To constrain this, the logs are limited to 10 MB in size and stored for 7 days by default. 

Modify these settings to the needs of your logging policy, especially if you require to keep debug level logs in production for retrospective troubleshooting.

## Client's Auto-Refresh {#auto-refresh}

By default, the Workstation Client operates in auto-refresh mode. That is, any changes made to the configuration in Workstation Management are immediately reflected in the Client. 

To change this behavior, change the **Auto-Refresh Mode** setting to **Off**. You can then force the configuration to refresh by clicking **Refresh on Computer** in Workstation Management, or by clicking **Refresh** in the Workstation Client.

The **Check Interval** setting is only available when the auto-refresh mode is enabled. It specifies how often a Workstation Client that is disconnected due to a web socket failure should automatically refresh its configuration by polling Workstation Management. By default, this happens every 60 minutes.

## Local Device Testing

When enabled, this allows local device communication between the Workstation Client and Workstation Management App to use the **Test Your Station** feature of Studio Pro. You can use this option to test your devices.

## Delete Workspace

The option to delete a workspace is available only to the workspace [Owner](/mendix-workstation/management-team/#user-roles).

{{% alert color="warning" %}}
Deleting a workspace cannot be reverted. The entire repository and all associated cloud environments are deleted permanently. Selecting this option makes the project inaccessible to all team members, including the workspace Owner.
{{% /alert %}}