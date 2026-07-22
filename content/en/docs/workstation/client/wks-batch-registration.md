---
title: "Registering Workstation Clients"
url: /mendix-workstation/register/
description: "Describes how to register and pre-configure multiple Workstation Clients."
weight: 40
---

## Introduction

After [installing the Workstation Client](/mendix-workstation/install-client/), you must register it in Workstation Management. Registering the client onboards your local Workstation Client installation into your Mendix Workstation Management environment. This onboarding allows for centralized management, configuration deployment, and monitoring of your clients, ensuring that they are properly set up to bridge your Mendix applications with the physical world.

Mendix Workstation supports both individual registration of local Workstation clients, and bulk rollouts for large production environments.

{{% alert color="info" %}}
After a Workstation Client is registered, any changes that you make in Workstation Management (such as adding new devices, or disabling the **Detect Card Readers** option) will be immediately synchronized with the Client. To change this behavior, see [Client's Auto-Refresh](/mendix-workstation/management-settings/#auto-refresh).
{{% /alert %}}

## Registering a Single Workstation Client

If you are developing or testing Workstation configurations, you can register a single Workstation Client for your local computer by performing the following steps:

1. Open the [Workspaces](https://workstation.home.mendix.com/) page.
2. Click the workspace where you want to register the Clients.
3. On the **Stations** page, edit or create a station representing the computer where you installed the Workstation Client.
4. Click the **Register Computer** button in the top right corner of the screen.
5. Click **Copy** to copy the registration token to your clipboard.

    {{< figure src="/attachments/workstation/wks-install7.png" class="no-border" >}}

6. Open the Workstation Client and paste the copied registration token into the **Enter your registration token** field.
7. Click **Register computer**.

    {{< figure src="/attachments/workstation/wks-install8.png" class="no-border" >}}

8. In Workstation Management, in the **Computer Registration** dialog, click **Done**.

    {{< figure src="/attachments/workstation/wks-install9.png" class="no-border" >}}

The **Stations** page now shows your station's status as **Computer Registered**.

    {{< figure src="/attachments/workstation/wks-install10.png" class="no-border" >}}

## Bulk-Registering Workstation Clients

In a production environment, you can register multiple Workstation clients and their host computers in a single rollout. This enables large-scale deployments on production floors (for example, factory shop floors) where dozens to hundreds of machines require setup.

{{% alert color="info" %}}
This feature is only available to licensed Mendix Workstation users. For more information about obtaining a Workstation license, see [Mendix Workstation](/mendix-workstation/).
{{% /alert %}}

To bulk-register Workstation Clients, perform the following steps:

1. Open the [Workspaces](https://workstation.home.mendix.com/) page.
2. Click the workspace where you want to register the Clients.
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
