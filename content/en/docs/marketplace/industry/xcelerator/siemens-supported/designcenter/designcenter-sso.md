---
title: "Configuring the connector for single sign-on"
url: /appstore/industry/siemens/designcenter/
weight: 50
description: "This document describes how to configure OAuth SSO for the Designcenter X Cloud Services Connector in a Mendix app."
---

## Introduction

This document explains how an administrator can configure a secure login (OAuth SSO) so a Mendix app can access Designcenter X Cloud Services using the Connector without requiring users to log in separately. After importing the Designcenter X Cloud Services Connector into your app, you must configure it to set up a single sign-on (SSO).

## Creating a Server User

To create a server user and obtain the client credentials, do the following:

1. Log in to the Siemens Admin Console and navigate to **Designcenter X** of the **Products**. 
2. Open **Server Users** and click **Create server user**.
3. Provide the **Name**, **Tier**, and **Role** field details. Enter *Application Owner* as the **Role** and click **Create**.
4. Click **Download Credentials**. Save the file securely. It has the **Client ID** and **Client Secret**. 

## Configuring the Mendix Application

### Configuring Security

1. Open **Security** from the **App Explorer**.
2. Set the **Security level** to **Production**.
3. In the **User roles** tab, edit the **Administrator** role and set it to the OIDC, UserCommons, and Designcenter X Cloud Services Connector **Administrator** Role. 
4. Edit **User** role and set it to the OIDC and Designcenter X Cloud Services Connector **User** role.

### Configuring Navigation

1. In **Navigation**, add a **New Menu Item** *Designcenter Admin* and  set the **On-click** action to **Show a page**.
2. Search and select the `ServerUserConfiguration` page located under **Designcenter_Connector** > **USE_ME** > **OIDC**.
3. Set the **Atlas ‘cog’** Icon for the configuration page.
4. Add **Sign out** menu item for the sign-out action. Set the Atlas ‘logout’ Icon for the page and click **OK**.

### Configuring Constants

1. Open **Settings** from the **App Explorer** and **Edit** the default configuration.
2. Go to the **Constants** tab and set the `OIDC.EncryptionKey` constant.  The constant has A 32-character encryption key that the connector can use. For more information, see Setting [Encryption Key](/appstore/modules/oidc/#setting-encryption-key).

{{% alert color="info" %}}
Keep the encryption key private and store it securely in your environment settings.                         
{{% /alert %}}

## Configuring OIDC SSO

1. Run the app locally and log in as Mendix Admin user. For more information, refer to [Mendix Admin User Document](/refguide/administrator/).
2. Navigate to the **Designcenter Admin** page and create the new server configuration with the details below: 

    * Client ID – Application identifier downloaded from Siemens Admin Console. 
    * Client Secret – Authentication key generated from Siemens Admin Console. For more information, see Creating a Server User section above.
    * ECA ID – your Enterprise Cloud Account identifier.
    * Region - the region that corresponds to where your Designcenter X product was provisioned in the Siemens Admin Console.

3. Save the configuration. The primary and secondary fields should now appear populated. Log out of the application.

## Validating the Configuration

1. Run the app locally or open the URL `http://localhost:8080/oauth/v2/login` in a browser again. You can see the login page. 
2. Sign in via SSO to verify that the application loads successfully and connector operations can establish a Teamcenter session.

## Rotating the Credentials

It is recommended to rotate credentials every six months for better security. During initial setup, the server user is provisioned with two client credentials: Primary and Secondary. By default, the Primary credential is active. To rotate the credentials every six months, follow the steps below:

1. Log in with the Mendix admin user.
2. Navigate to the **Designcenter Admin** page. The page displays the Primary and Secondary client credentials.
3. Click **Rotate Credentials** and enter the server user details from the Siemens Admin Console.
4. Click **Rotate**. The Secondary credential becomes active, and a new Primary credential is generated.
5. To rotate the Secondary credential, follow the same steps above. 

## Troubleshooting

If you encounter any issues with the Designcenter X Cloud Services Connector, use the following troubleshooting tips to resolve them.

### Application Runtime Errors

#### Widgets or Grid Errors

If Studio Pro reports widget or grid errors after importing the connector, do the following,

1. Right-click the error and update all widgets
2. Convert the grid to Data Grid 2 to eliminate Grid errors.

#### Invalid Client Error During SSO

If you receive an "Invalid client" error during SSO, it could be for one of the following reasons:

* The client ID and secret pair might be invalid, or 
* The server user has been deleted in the Admin Console.

To resolve this, recreate the server user and update the Mendix server configuration.

#### No Roles from Token

The browser might be caching an old session from another Enterprise Cloud Application (ECA). To resolve this, use incognito mode to log in or clear your browser cache and try again.

#### Authentication Failed

If you see "Authentication failed! Please check with your System Administrator," the authentication credentials are not properly configured.

To resolve this, delete the existing client credentials and create new client credentials by configuring the server user in the admin page. Click **Delete Client Credentials** to delete existing client credentials on the **Designcenter Admin** page.

### Mendix Studio Console Errors

#### Server User Is Already Configured

This might happen if the same server user is being used by another user for the same project. To resolve this, delete the existing client credentials and create new client credentials by configuring the server user on the admin page.
