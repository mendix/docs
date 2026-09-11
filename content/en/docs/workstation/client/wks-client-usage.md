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

## Command-Line Options {#command-line-options}

You can start the Workstation Client from a terminal or a rollout script to register it, inspect it, or change where it stores its data. This is how the Client is registered during a bulk rollout. For more information, see [Registering Workstation Clients](/mendix-workstation/register/).

How you invoke the Client depends on the operating system:

* On Windows, call the executable by the path where the Workstation Client is installed, for example `& {path where the Workstation Client is installed} --version`.
* On Linux, call `mendix-workstation --version`.

The following options are available:

| Option | Environment variable | Description |
| --- | --- | --- |
| `--help` | | Print the available options and exit. |
| `--version` | | Print the version of the Workstation Client and exit. |
| `--registration-token` | `REGISTRATION_TOKEN` | Register the computer with the given registration token. Accepts both single and bulk registration tokens. For more information, see [Registering Workstation Clients](/mendix-workstation/register/). |
| `--diagnostics` | | Run diagnostics and print the result to the standard output as JSON. Pass `all` to run every diagnostic, or a comma-separated list of the diagnostics to run. |
| `--log-level` | `LOG_LEVEL` | The level of detail that the Client logs. Use one of `error`, `warn`, `info`, `debug`, or `trace`. Use `silent` to disable logging. The default value is `debug`. |
| `--user-data-dir` | `USER_DATA_DIR` | The directory in which the Client stores its configuration, logs, session data, and crash dumps. |
| `--background` | | Start the Client without showing its window. The Client uses this option when it starts automatically after system startup. For more information, see [Autostart Configuration for the Workstation Client](/mendix-workstation/autostart-configuration/). |

Options that accept an environment variable can be set either way. A value passed on the command line takes precedence over the environment variable.

### Running Diagnostics {#diagnostics-option}

The `--diagnostics` option accepts the following values, either individually, as a comma-separated list, or through the value `all`:

* `clientId` - The identifier that this Client reports to Workstation Management.
* `credentials.json` - The credentials with which the Client authenticates against Workstation Management. The API key is redacted.
* `log` - The active log level and the number of messages logged per level.
* `management` - Whether the Client is connected to Workstation Management, for how long it has been connected, and any connection errors.
* `station.json` - The station configuration that the Client last received.
* `system` - Version, host, platform, locale, proxy configuration, and resource usage of the computer running the Client.

The result is printed as a JSON object keyed by diagnostic name:

```json
{
  "log": {
    "level": "debug",
    "counts": { "error": 0, "warn": 0, "info": 0, "debug": 0, "trace": 2 }
  }
}
```

The same information is available in the Client through the **Diagnostics** option, which requires Developer Mode.

### Log Level and the Workspace Setting

The `--log-level` option applies from the moment the Client starts. As soon as the Client has retrieved its configuration from Workstation Management, the workspace **Log Level** setting determines what is written to the log files instead. For more information, see [Configuring Settings](/mendix-workstation/management-settings/).

Unless Developer Mode is enabled for the station, the workspace setting also caps the level that the Client prints to the terminal. When the requested level is overruled, the Client logs a warning stating which level it fell back to.

### Running Commands Against a Running Client

Only one instance of the Workstation Client runs at a time. If you pass `--registration-token` or `--diagnostics` while the Client is already running, the command is handed to the running instance, and its result and log messages are printed in the terminal where you issued the command. The Client exits with a non-zero status when the command fails, so you can act on the result in a rollout script.
