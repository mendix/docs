---
title: "Managing Stations"
linktitle: "Stations"
url: /mendix-workstation/management-stations/
description: "Describes the administration of stations in Mendix Workstation Management."
weight: 50
---

## Introduction

The **Stations** page displays a comprehensive overview of all your configured stations. This page provides quick insights into the status of each station and offers various actions for creation, management, and bulk operations.

{{< figure src="/attachments/workstation/wks-stations1.png" class="no-border" >}}

## Station Status Indicators

The overview page displays the current status of each station, helping you quickly identify any issues or pending actions:

* **No computer registered** - The station has been created in Workstation Management, but no physical computer running the Workstation Client has been linked to it yet.
* **Computer registered** - A Workstation Client on a physical computer is successfully registered and actively linked to this station.
* **Client's config is out of sync** - The configuration defined in Workstation Management for this station has changed, but the Workstation Client on the registered computer has not yet received or applied these updates. This can happen if auto-refresh is disabled or if there's a temporary connectivity issue.
* **Unknown computer** - The Workstation Client on the registered computer is reporting an unrecognized identifier, or there's an issue with its registration.
Error while registering: An error occurred during the attempt to register a Workstation Client to this station. Further investigation (for example, checking client logs) may be required.

## Creating a New Station

To create a new station, choose one of the following options, depending on your deployment scenario.

### Creating a Station from Scratch

To create a station from scratch, perform the following steps:

1. Click **Create Station**.
2. Provide a unique **Station Name**. 

    The name is a mandatory identifier for your station.

3. Optional: Add a station group to organize your stations (for example, by location, department, or function).
4. Optional: Specify an **Auto-Accepted Computer Name**. 

    If provided, during a bulk registration process, any Workstation Client reporting this computer name are automatically mapped and registered to this specific station, streamlining large-scale deployments.

### Creating a Station from Clipboard

If you have previously copied the configuration of an existing station (for example, from another workspace or for duplication purposes), you can use the **Create Station from Clipboard** option to paste and create a new station based on that data.

### Create Station from File

This option allows you to import a station's configuration from a previously exported file. This is particularly useful for migrating or replicating single station configurations.

## Exporting and Importing Stations

Workstation Management provides robust features for managing stations in bulk, facilitating migration, backup, and replication tasks.

* **Export Stations** - Export all stations in the current workspace, or select specific stations from the overview list to export only those you need.
* **Import Stations** - When importing stations from a file, you have fine-grained control over how duplicates are handled:

    * **Ignore** - If a station with the same identifier already exists, the imported station will be skipped.
    * **Duplicate** - A new station will be created, even if one with the same identifier already exists, resulting in a duplicate entry.
    * **Replace** - The existing station with the matching identifier will be completely overwritten by the imported station's data.
    * **Merge** - The imported station's data will be intelligently merged with the existing station's configuration, updating fields where there are differences.

The import process allows you to specify what information to include:

* **Include Apps** - Specify whether to include the associated Mendix applications configured for the imported stations.
* **Include Devices** - Specify whether to include the device configurations linked to the imported stations.

## Bulk Registration Tokens

For large-scale deployments, administrators can generate bulk registration tokens to simplify the process of linking multiple Workstation Clients to stations without manual intervention for each client.

### Generating a Token

Specify a valid time period for the token, after which it will automatically expire.
Upon generation, the system provides the registration command for the terminal, which can be used to register Workstation Clients.

### Managing Tokens

You can revoke an active bulk registration token at any time, immediately invalidating it and preventing further registrations using that token.

## Station Detail Page

Once a station is created, clicking on the arrow in the **Stations Overview** page will take you to the **Station Detail** page. This page is your central hub for viewing and configuring all specific settings and associated devices for that individual station.

From here, you can perform the following tasks:

* Change the station name.
* Manually refresh configuration to the client, forcing the Workstation Client on the registered computer to immediately pull the latest settings from Workstation Management.
* Configure advanced settings like **Detect Card Readers** and **Station Developer Mode**.
* Manage and configure all devices associated with this station.

## Advanced Station Settings

### Detect Card Readers

Card readers are handled uniquely within Workstation Management. They are not configured as separate devices in the Devices overview of a Station page. Instead, the Workstation Client automatically detects connected card readers.

Auto detecting card readers is enabled by default. You can toggle the **Detect Card Readers** setting on the **Station Detail Page** to **Off** if you do not want the Workstation Client to automatically detect smart card readers for this specific station.

### Developer Mode {#developer-mode}

Developer mode can be configured on the **Station** page by toggling **Enable Developer Mode**. 

When Developer Mode is enabled, users of the Workstation Client have access to:

* Quit the program from the start menu.
* Unlink the Workstation Client, allowing it to be registered to another station.
* Debug level live logs displayed in the Logs pane of the Workstation Client, even if the workspace's log level is set to a different level.
* Developer tools (accessible by pressing *Ctrl + Shift + I*).

{{% alert color="info" %}}
For production environments, it is strongly recommended to disable Developer Mode. This prevents Workstation operators from accidentally quitting or unlinking the Workstation Client and restricts access to debugging tools that are not needed in a live operational setting.
{{% /alert %}}