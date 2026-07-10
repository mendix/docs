---
title: "Installing the Workstation Connector"
url: /mendix-workstation/install-connector/
description: "Describes how to install the Workstation Connector and build an app to work with Mendix Workstation."
weight: 20
---

## Introduction

After you have [installed the Workstation Client](/mendix-workstation/install-client/), you must either build a Mendix application that will send data or commands to your devices, or extend an existing app accordingly. In order to do that, you must download, install, and configure the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.

### How the Connection Works

The Workstation Connector must authenticate itself to the Workstation Client so that the Client trusts the app using the Connector and establishes a connection. To achieve this, you must generate a key pair in the Workstation Connector, and then configure the public key in the corresponding app in the Workstation Management. Workstation Client configuration must be up-to-date, so that the public key can be verified.

The Workstation Connector establishes connection with the device through the Workstation Client when it is needed. The connection is closed when it is not required anymore.

When a client browser or tab instance tries to connect to a device, previously connected browser or tab instances are disconnected from the device.

The Workstation Connector connects with Workstation Client using a local WebSocket on port 8094. Communication with each configured device uses another WebSocket on port 8095 for the first device, 8096 for the second, and so on, so that the range of ports used is port *8094* to *8094+n*, where *n* is the number of devices you have. Make sure that the Runtime or Admin port of your local development server in Studio Pro (**App Settings** > **Configurations** > **Server**) is not configured on a port greater or equal to 8094.  

## Prerequisites

* Mendix Workstation 3.0.0 or newer
* Mendix Studio Pro 9.24.11 or newer

## Installing and Configuring the Workstation Connector {#install-connector}

To install and configure the Workstation Connector, perform the following steps:

1. Open an existing app to extend with Workstation functionality in Mendix Studio Pro, or create a new app.
2. Import the [Mendix Workstation Connector](https://marketplace.mendix.com/link/component/247460) from the Mendix Marketplace.
3. Register one or more Workstation Clients. For more information, see [Registering Workstation Clients](/mendix-workstation/register/).
4. Configure your app as an allowed app by performing the following steps:

    1. In your app go to [App Security](/refguide/app-security/#user-roles) and assign the module role **StationConnector.Administrator** to the Administrator user role.
    2. In your app add the page **StationConnector_Security** to your navigation or link to it from an **Open page** button. Alternatively, place the snippet **SNIPPET_StationAdminPage** on a page available to the Adminstrator user role.
    3. Run the app.
    4. Log in as an Administrator, navigate to the page you added in step 2 and copy the shown public key.
    5. Go back to the [Workstation Management](https://workstation.home.mendix.com/) and navigate to the workspace you created in step 3.2.
    6. Go to the **Apps** page in your workspace and click **Create App**.
    7. Enter your app's URL (for example, `http://localhost:8080`, which is the default when running an app locally) and paste the copied public key into the **Public Key** field.
    8. Perform one of the following actions:
        * To enable the app for all stations, select **Enable in all stations**
        * To enable it for a specific station, go to **Stations** and navigate to your station. You will find the created app under the **Apps** section. Here you can enable the application just for this station by pressing the toggle.
    9. Refresh the Workstation Client.
    10. Optional: To recreate the key pair, additionally assign the module role **StationConnector.SecurityAdministrator** to your Administrator role. This adds a **Regenerate KeyPair** button to the **StationConnector_Security** page. Use caution when using this button in a production scenario to avoid the need to reconfigure the app in the Management, and refresh all Workstation Clients.  

## Managing Apps

The app that you created in the previous section is available on the **Apps** page that you can access through the left navigation menu. To enable or disable the app for all your stations or groups of stations, click the icon in the right column of the app list, and then click **Manage App**.

## Managing Users {#invite-users}

{{% alert color="info" %}}
This feature is only available to licensed Mendix Workstation users. For more information about obtaining a Workstation license, see [Mendix Workstation](/mendix-workstation/).
{{% /alert %}}

You can invite other Workstation Management users to your workspace to share configurations and collaborate. This feature requires a Workstation license.

To invite a user, click **Team** in the left navigation menu, then click **Invite Team Member**. Enter the user's email address and select a role. For more information about the available roles, see [Managing the Team](/mendix-workstation/management-team/).

To change a user's role or remove them from the workspace, click the three-dot icon in the right column of the user list. This action requires the Owner or Workspace Admin role.