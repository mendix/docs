---
title: "Registering Workstation Clients"
url: /mendix-workstation/register/
description: "Describes how to register and pre-configurer multiple Workstation Clients."
weight: 30
---

## Introduction

Installed on each local workstation, the Mendix Workstation Client acts as a bridge between the Mendix app and local hardware. The goal of the Workstation Client is to establish a secure and reliable connection between the Mendix Application Client and the hardware, peripherals, or local data sources attached to that workstation. This connection is facilitated by the Workstation Connector and the Workstation Client.

The registration process is a necessary first step when enabling this crucial functionality. It onboards your local Workstation Client installation into your Mendix Workstation Management environment. This onboarding allows for centralized management, configuration deployment, and monitoring of your clients, ensuring they are properly set up to bridge your Mendix applications with the physical world.

Mendix Workstation supports both individual registration of local Workstation clients, and bulk rollouts for large production environments.

## Registering a Single Workstation Client

If you are developing or testing Workstation configurations, you can register a single Workstation Client for your local computer by performing the following steps:

1. Navigate to the **Workspaces** page in [Workstation Management](https://workstation.home.mendix.com/).
2. Click **Create Workspace**, or select an existing workspace from the overview.
3. Click **Create Station**, or select an existing station for which no computer is yet registered.
4. In the top right corner of the banner, click **Register Computer** to register your computer.
5. Click **Download** to navigate to the Workstation Client listing in the Marketplace, download the Client installer for Windows, install it, and launch it. You can find the listing at the following links:

    * [Windows](https://marketplace.mendix.com/link/component/247448)
    * [Windows (portable version)](https://marketplace.mendix.com/link/component/247456)
    * [Linux ARM64](https://marketplace.mendix.com/link/component/247459)
    * [MacOS](https://marketplace.mendix.com/link/component/253905)

6. Copy the registration token and paste it into the [Workstation Client](/mendix-workstation/installation/) registration field.

## Bulk-Registering Workstation Clients

In a production environment, you can register multiple Workstation clients and their host computers in a single rollout. This enables large-scale deployments on production floors (for example, factory shop floors) where dozens to hundreds of machines require setup.

{{% alert color="info" %}}
This feature is only available to licensed Mendix Workstation users. For more information about obtaining a Workstation license, see [Mendix Workstation](/mendix-workstation/).
{{% /alert %}}

To bulk-register Workstation Clients, perform the following steps:

1. Open the [Workspaces](https://workstation.home.mendix.com/) page.
2. Click the workspace where you want to register the clients.
3. On the **Stations** page, click the three-dot menu in the top right corner of the screen, and then click **Bulk Register**.

    The **Create Bulk Registration Token** dialog opens. You can use it to activate a time-limited token which can then be entered into the registration field of multiple Workstation Clients.

4. Specify the timeframe during which the token is valid.
5. Click **Activate Token**. The **Stations** page displays the timeframe during which the bulk registration is scheduled.
6. To distribute the token to client computers during the allowed timeframe, you can use an automated script. 

    For example, on Windows machines, you can use the following script: `& {path where the Workstation Client is installed} --registration-token {bulk registration token}`.

    On Linux machines, you can use the following script: `mendix-workstation --registration-token {bulk registration token}`.

    After the command runs or the token is entered manually, the Workstation Clients display the status **Waiting for station assignment**. This indicates that the clients are registered, but not yet associated with a specific station. 
    
    To view these newly registered clients, refresh the Stations page in Workstation Management. You will find them listed under a separate section as **unassigned computers**.

7. Review the configuration of the unassigned computers and perform one of the following actions:

    * **Accept Computer** - Create an empty station.
    * **Assign Computer** - Assign the computer to an already configured station.
    * **Reject Computer** - Disconnect and deregister the computer.

### Automatically Assigning Computers to Stations

Instead of reassigning computers to stations manually after the bulk import, you can configure stations to automatically accept computers with a specific name.

1. On the **Stations** page, click the three-dot menu by the station where you want to automatically register a computer.
2. Click **Edit Station**.
3. In the **Auto-Accepted Computer Name** field, enter a computer name.

{{% alert color="info" %}}
You can also specify this name during station creation.
{{% /alert %}}


Computers with this name are automatically assigned to the station during the bulk import.