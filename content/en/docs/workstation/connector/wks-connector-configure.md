---
title: "Integrating with Mendix Studio Pro"
url: /mendix-workstation/configure-connector/
description: "Describes how to configure a Mendix app for Workstation Connector."
weight: 202
---

## Introduction

After importing the Workstation Connector into your app, you must configure your app as allowed.

## Configuring the App

1. In your app go to [App Security](/refguide/app-security/#user-roles) and assign the module role **StationConnector.Administrator** to the Administrator user role.
2. In your app add the page **StationConnector_Security** to your navigation or link to it from an **Open page** button. Alternatively, place the snippet **SNIPPET_StationAdminPage** on a page available to the Adminstrator user role.
3. Run the app.
4. Log in as an Administrator, navigate to the page you added in step 2 and copy the shown public key.
5. Go back to the [Workstation Management](https://workstation.home.mendix.com/) and navigate to your workspace.
6. Go to the **Apps** page in your workspace and click **Create App**.
7. Enter your app's URL (for example, `http://localhost:8080`, which is the default when running an app locally) and paste the copied public key into the **Public Key** field.
8. Perform one of the following actions:
    * To enable the app for all stations, select **Enable in all stations**
    * To enable it for a specific station, go to **Stations** and navigate to your station. You will find the created app under the **Apps** section. Here you can enable the application just for this station by pressing the toggle.
9. Refresh the Workstation Client.
10. Optional: To recreate the key pair, additionally assign the module role **StationConnector.SecurityAdministrator** to your Administrator role. 
    
    This adds a **Regenerate KeyPair** button to the **StationConnector_Security** page. Use caution when using this button in a production scenario to avoid the need to reconfigure the app in the Management, and refresh all Workstation Clients.  

## Managing Apps

The app that you created in the previous section is available on the **Apps** page that you can access through the left navigation menu. To enable or disable the app for all your stations or groups of stations, click the icon in the right column of the app list, and then click **Manage App**.

## Managing Users {#invite-users}

{{% alert color="info" %}}
This feature is only available to licensed Mendix Workstation users. For more information about obtaining a Workstation license, see [Mendix Workstation](/mendix-workstation/).
{{% /alert %}}

You can invite other Workstation Management users to your workspace to share configurations and collaborate. This feature requires a Workstation license.

To invite a user, click **Team** in the left navigation menu, then click **Invite Team Member**. Enter the user's email address and select a role. For more information about the available roles, see [Managing the Team](/mendix-workstation/management-team/).

To change a user's role or remove them from the workspace, click the **three dot** icon in the right column of the user list. This action requires the Owner or Workspace Admin role.
