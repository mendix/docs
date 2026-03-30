---
title: "Managing and Sharing Workspace and Station Data"
linktitle: "Managing and Sharing Data"
url: /mendix-workstation/import-export/
description: "Describes how to import and export workspace and station data across workspaces and environments."
weight: 30
---

## Introduction

You can manage and share station and workspace data across various workspaces and environments by exporting and importing the configuration of a single station, or of multiple stations at the same time. In this way, you can easily manage different stages and versions of your station configurations by keeping them in separate workspaces.

### Workspace Roles and Permissions

Different user roles are granted various levels of access to import and export tasks. For more information, see [Workspace Team and Collaboration](/mendix-workstation/installation/#collaboration).

## Importing and Exporting Stations in Bulk

{{% alert color="info" %}}
The import option is only available to licensed users. For more information about obtaining a Workstation license, see [Mendix Workstation](/mendix-workstation/).
{{% /alert %}}

To transfer multiple station configurations, along with their associated applications and devices, between workspaces, perform the following steps:

1. Open the [Workspaces](https://workstation.home.mendix.com/) page.
2. Click the workspace whose stations you want to export.
3. On the **Stations** page, click the three-dot menu in the top right corner of the screen, and then click **Export Stations**.

    {{< figure src="/attachments/workstation/wks-import1.png" class="no-border" >}}

    The **Dowload Stations** dialog opens. You can either download all the stations created for the workspace, or select individual stations from the list.

4. Click **Download**.

    The export is saved to your computer in JSON format.

5. Go to the workspace where you want to import the stations.

    This can be the workspace from which you exported the stations, or a different one.

6. On the **Stations** page, click the three-dot menu in the top right corner of the screen, and then click **Import Stations**.
7. Optionally, specify if the import should include the apps and devices:

    * **Include Apps** - If you select this option, the import creates any apps that are linked to the exported stations but do not yet exist in the workspace with the same URL and public key.
    * **Include Devices** - If you select this option, the import includes any exported device configurations.

8. Select how you want to handle duplicate stations and devices (that is, stations and devices with same name as an existing station or device). The following options are available:

    * **Ignore** - The item is skipped.
    * **Duplicate** - A new item is created with a number appended to the name, for example, *My Station (1)*.
    * **Replace** - The existing item is replaced by the new one.
    * **Merge** - This option is only available for stations. The new station along with its apps and devices is merged with the existing station with the same name.

    {{< figure src="/attachments/workstation/wks-import4.png" class="no-border" >}}

After the import finishes, your target workspace has the same applications and station configurations as the source workspace, but the stations are not yet registered to computers.

## Importing and Exporting a Single Station

To transfer the contents of a single station, perform the following steps:

1. On the **Stations** page, click the three-dot menu by the station which you want to copy, and then click **Copy Station to Clipboard**.

    {{< figure src="/attachments/workstation/wks-import2.png" class="no-border" >}}

    Alternatively, you can click **Download Station File** to download the configuration to your computer in JSON format for later use or for sharing it with others.

2. Click **Create Station**, and then select **Create station from clipboard**.

    Alternatively, if you downloaded a file in step 1, click **Create station from file**.

3. Paste the configuration into the **Paste Station Configuration** field.

    {{< figure src="/attachments/workstation/wks-import3.png" class="no-border" >}}

4. Click **Continue**.
5. On the **Summary** screen, review the information and optionally select a group to categorize it, such as *Assembly*.
6. Click **Create Station**.

{{% alert color="info" %}}
By default, the single station import operates in duplicate mode. That is, when you import a station with same name as an existing station, a new station is created with a number appended to the name. For example, copying and pasting a station called *My Station* creates a station called *My Station (1)*.
{{% /alert %}}