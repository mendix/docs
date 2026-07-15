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

Log settings are available in Workstation Management at **Settings > Log Settings**.

The Workstation Client always stores logs to the file system it is installed on (for more information, see [Troubleshooting the Workstation Client](/mendix-workstation/troubleshooting-workstation-client/)). No logs are send to the Workstation Management. However, you can configure the log level and retention policy of all the Workstation Clients that are registered to stations in the workspace.

{{< figure src="/attachments/workstation/wks-settings1.png" class="no-border" >}}

### Log Level

Configure the log level of the logs stored by the Workstation Client(s).

* Info (default) - Logs normal operation and key application events. For example, the time when the Client was launched or terminated.
* Warn - Info logs and potential issues or suboptimal conditions. For example, if a request to refresh the Client's configuration timed out.
* Error - Warning logs and visible problem, something is not working as expected. For example, if a port to connect to a device is already in use.
* Debug - Error logs and detailed internal state for developer diagnostics. For example, requests to the Workstation Management, communication with devices.

By default, the unregistered Workstation Client is set to the **Debug** log level. After the client is registered, the log level as configured in the Workspace settings is applied.

## Retention Policy

Verbosity and thus log file size increases with each log level. To constrain this, the logs are limited to 10 MB in size and stored for 7 days by default. 

Modify these settings to the needs of your logging policy, especially if you require to keep debug level logs in production for retrospective troubleshooting.

## Client's Auto-Refresh {#auto-refresh}

Auto-refresh settings are available in Workstation Management at **Settings > Client's Auto-Refresh**.

{{< figure src="/attachments/workstation/wks-settings2.png" class="no-border" >}}

By default, the Workstation Client operates in auto-refresh mode. That is, any changes made to the configuration in Workstation Management are immediately reflected in the Client. 

To change this behavior, change the **Auto-Refresh Mode** setting to **Off**. You can then force the configuration to refresh by clicking **Refresh on Computer** in Workstation Management, or by clicking **Refresh** in the Workstation Client.

The **Check Interval** setting is only available when the auto-refresh mode is enabled. It specifies how often a Workstation Client that is disconnected due to a web socket failure should automatically refresh its configuration by polling Workstation Management. By default, this happens every 60 minutes.

## Local Device Testing

Local device testing settings are available in Workstation Management at **Settings > Local Device Testing**.

{{< figure src="/attachments/workstation/wks-settings3.png" class="no-border" >}}

By default, the Workstation Management is pre-configured as an allowed app to connect to the Workstation Client on the **Test your Station** page in a workspace. To disable this setting, toggle it off.