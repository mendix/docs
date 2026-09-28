---
title: "Configuring the Connector for Single Sign-On"
url: /appstore/industry/siemens/designcenter/sso/
weight: 50
description: "How to configure OAuth single sign-on (SSO) for the Designcenter X Cloud Services Connector in a Mendix app."
---

## Introduction

This page explains how to configure OAuth single sign-on (SSO) so your Mendix app can access Designcenter X Cloud Services without requiring users to sign in separately. After importing the Designcenter X Cloud Services Connector into your app, follow the steps in this document to complete the SSO configuration.

## Creating a Server User

To create a server user and obtain client credentials, follow these steps:

1. Sign in to the [Siemens Admin Console](https://cloud.sws.siemens.com/admin/) and navigate to **Designcenter X** under **Products**.
2. Open **Server Users** and click **Create server user**.
3. Fill in the **Name**, **Tier**, and **Role** fields. Enter *Application Owner* as the **Role** and click **Create**.
4. Click **Download Credentials** and save the file securely. The file contains the **Client ID** and **Client Secret**.

## Configuring the Mendix Application

### Configuring Security

1. Open **Security** from the **App Explorer**.
2. Set the **Security level** to **Production**.
3. In the **User roles** tab, edit the **Administrator** role and assign the OIDC, UserCommons, and Designcenter X Cloud Services Connector **Administrator** module roles.
4. Edit the **User** role and assign the OIDC and Designcenter X Cloud Services Connector **User** module roles.

{{< figure src="/attachments/partners/siemens/designcenter/app-security-roles.png" alt="app security configuration" >}}

### Configuring Navigation

1. In **Navigation**, add a **New Menu Item** named *Designcenter Admin* and set the **On-click** action to **Show a page**.
2. Search for and select the `ServerUserConfiguration` page under **Designcenter_Connector** > **USE_ME** > **OIDC**.
3. Set the **Atlas ‘cog’** icon for the menu item.
4. Add a **Sign out** menu item for the sign-out action, set the **Atlas ‘logout’** icon, and click **OK**.

### Configuring Constants

1. Open **Settings** from the **App Explorer** and click **Edit** on the default configuration.
2. Go to the **Constants** tab and set the `OIDC.EncryptionKey` constant to a 32-character encryption key. For more information, see [Setting the Encryption Key](/appstore/modules/oidc/#setting-encryption-key).

{{% alert color="info" %}}
Keep the encryption key private and store it securely in your environment settings.                         
{{% /alert %}}

## Configuring OIDC SSO

1. Run the app locally and sign in as an administrator. For more information, see [Administrator](/refguide/administrator/).
2. Navigate to the **Designcenter Admin** page and create a new server configuration using the following values:

    * Client ID – the application identifier downloaded from the Siemens Admin Console.
    * Client Secret – the authentication key generated from the Siemens Admin Console. For more information, see the [Creating a Server User](#creating-a-server-user) section above.
    * ECA ID – your Enterprise Cloud Account identifier.
    * Region – the region where your Designcenter X product was provisioned in the Siemens Admin Console.

    {{< figure src="/attachments/partners/siemens/designcenter/configure-sso.png" alt="SSO configuration" >}}

3. Save the configuration. The primary and secondary fields are now populated. Sign out of the app.

## Validating the Configuration

1. Run the app locally or open `http://localhost:8080/oauth/v2/login` in a browser. The sign-in page appears. Alternatively, if you want to login directly when opening the `login.html` page, follow the [Configuring Login Redirection](/appstore/modules/oidc/#configuring-login-redirection) section of the *OIDC SSO*.
2. Sign in via SSO to verify that the app loads successfully and connector operations can establish a Teamcenter session.

## Rotating the Credentials

Rotate credentials every six months for better security. During initial setup, the server user is provisioned with two client credentials: Primary and Secondary. By default, the Primary credential is active. To rotate credentials, follow these steps:

1. Sign in as the Mendix administrator.
2. Navigate to the **Designcenter Admin** page. The page displays the Primary and Secondary client credentials.
3. Click **Rotate Credentials** and enter the server user details from the Siemens Admin Console.
4. Click **Rotate**. The Secondary credential becomes active and a new Primary credential is generated.
5. To rotate the Secondary credential, repeat the same steps.

## Troubleshooting

If you encounter issues with the Designcenter X Cloud Services Connector, the following sections describe common errors and how to resolve them.

### Application Runtime Errors

#### Widgets or Grid Errors

If Studio Pro reports widget or grid errors after importing the connector, do the following:

1. Right-click the error and update all widgets.
2. Convert the grid to Data Grid 2 to eliminate grid errors.

#### Invalid Client Error During SSO

If you receive an "Invalid client" error during SSO, the cause is one of the following:

* The client ID and secret pair is invalid.
* The server user has been deleted in the Admin Console.

To resolve this, recreate the server user and update the server configuration in your Mendix app.

#### No Roles from Token

The browser may be caching a session from another Enterprise Cloud Application (ECA). To resolve this, sign in using incognito mode or clear your browser cache and try again.

#### Authentication Failed

If you see "Authentication failed! Please check with your System Administrator," the authentication credentials are not properly configured.

To resolve this, go to the **Designcenter Admin** page, click **Delete Client Credentials** to remove the existing credentials, then reconfigure the server user to generate new credentials.

### Mendix Studio Console Errors

#### Server User Is Already Configured

This error occurs when the same server user is already configured by another user in the same app. To resolve this, go to the **Designcenter Admin** page, click **Delete Client Credentials** to remove the existing credentials, then reconfigure the server user.

## Read More

* [Designcenter X Cloud Services Connector](/appstore/industry/siemens/designcenter/)
* [Using Designcenter X Cloud Services Connector](/appstore/industry/siemens/designcenter/using-designcenter/)