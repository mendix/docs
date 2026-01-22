---
title: "Configuring the Connection to Teamcenter with Teamcenter Connector 2512.0.0 and Above"
linktitle: "Connecting with Teamcenter Connector 2512.0.0 and Above"
url: /appstore/modules/siemens-plm/configuring-connection-2512/
weight: 1
description: "Describes the steps to configure the connection to your Teamcenter instance using Teamcenter Connector 2512.0.0 and above."
---

{{% alert color="info" %}} The following page describes the steps needed to configure the connection between your Mendix app and your Teamcenter instance using Teamcenter Connector 2512.0.0 and above. For information applying to Teamcenter Connector 2506.0.0 and below, refer to [Configuring the Connection to Teamcenter 2506.0.0 and Below](/appstore/modules/siemens-plm/configuring-connection-2506/). {{% /alert %}}

## Connecting your Mendix App to Teamcenter

Follow the steps in these section to connect your Mendix app to Teamcenter.

### Configuring your Mendix App

Follow these steps to configure your Mendix app before setting up the connection to Teamcenter:

1. Make sure all dependencies are installed.
2. Download the Teamcenter Connector from the Mendix Marketplace.
3. Assign the **Administrator** role on the TcConnector Module to the user role that will configure the connection to the Teamcenter instance.
4. Assign the **User** role on the TcConnector Module to the user role that will authenticate to Teamcenter.
5. Add **NAV_AdminHomePage** to the navigation so that the admin can configure the Teamcenter connection.

{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/navigation.png">}}

### Setting Up the Connection

Follow these steps to connect your Mendix app to Teamcenter:

1. Log in to your Mendix app with the **Administrator** user role.
2. Use the **NAV_AdminHomePage** button to navigate to the overview page of all Teamcenter configurations.

{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-new-configuration.png">}}

3. Click **+ New configuration** to create a new configuration.    
    All configurations require the following fields:

    * **Configuration Name** – A unique identifier for the configuration. This can be used in a subsequent microflow to identify which environment to connect to.
    * **Teamcenter Host URL** – This typically ends with `/tc`.
    * **Teamcenter FMS URL** – The URL of your Teamcenter File Management Server.
    * **Authentication Method** – The method of authenticating to the Teamcenter instance. Choose one of these options:

        * **Credentials** – Use this if you log in with a username and a password.
        * **Teamcenter SSO** – Use this if you use SSO on an on-premises environment.
        * **Teamcenter X SSO** – Use this if you have a Teamcenter X environment.
    * **Active** – If set to **True**, this configuration is used to authenticate the user.

    If your Teamcenter instance is using SSO, additional steps are required. Follow the steps in the [Teamcenter SSO](#teamcenter-sso) and [Teamcenter X SSO](#teamcenter-x-sso) sections before continuing.

4. Click **Save**.

### Testing the Connection {#test-the-connection}

Depending on the connection type, you can test your access to Teamcenter from the Mendix app using the following approaches.

#### SSO with User Provisioning for Anonymous Users

If you want to use SSO with user provisioning for anonymous users, click **Teamcenter SSO** on the login page as setup in the user provisioning section.
{{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-sso-button.png">}}

#### SSO with User Provisioning for Logged-In Users

If you want to use SSO with user provisioning for logged-in users, follow these steps:

1. Add **NAV_UserLogin** to the navigation.    
    If you want to connect to multiple instances of Teamcenter at the same time, use **NAV_UserLoginMultipleActive** instead.
2. Log in to the Mendix app as a Mendix User.
3. Click **NAV_userLogin** to log in to Teamcenter.

  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/navigation-login-user.png">}}

#### Credentials-Based Login

If you want to use credentials-based login, follow these steps:

1. Add **NAV_UserLogin** to the navigation.    
    If you want to connect to multiple instances of Teamcenter at the same time, use **NAV_UserLoginMultipleActive** instead.
2. Log in to the Mendix app as a User.
3. Click **NAV_userLogin** to log in to Teamcenter.

  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/navigation-login-user.png">}}

## Authentication-Specific Configuration Steps

### Teamcenter SSO {#teamcenter-sso}

**Teamcenter SSO** is the option where Single Sign On is set up for a Teamcenter instance that is not a Teamcenter X environment.

To set up the connection, your app needs to be registered with the identity provider.

To find out how to register an app or how to find the information needed to configure the settings, refer to [Registering your App for Teamcenter SSO](#register-your-app-for-teamcenter-sso).

The following settings need to be provided for a successful connection:

* **SSO Login Server URL** – The endpoint where your authentication request is sent. This acts as the main entry point for users trying to log in using SSO. This URL is typically associated with the Identity Provider (IdP), and is responsible for handling login requests and for directing users through the authentication process.    
    In this field, enter the Login Service URL, followed by `/weblogin/login_redirect`. Your final URL should look similar to the following example: `https://example.com:123/tcssol/weblogin/login_redirect`.
* **SSO Identity server** – The URL of the Identity Server where the Mendix app should be registered.
* **Teamcenter Application Id** – The existing Teamcenter Application ID obtained from the Teamcenter Security Services Identity Service configuration.
* **Mendix Application Id** – The `APPLICATIONID` of the Mendix app's registration with the Identity Server.

When using SSO, you need to make sure that Mendix accounts match Teamcenter users. You can find information on how to set this up in the [User Provisioning for SSO](#user-provisioning-for-sso) section.

### Teamcenter X SSO {#teamcenter-x-sso}

If you are connecting to a Teamcenter X instance, select **Teamcenter X SSO**. 

To connect to a Teamcenter X instance:

* Your Mendix app needs to be registered to Teamcenter X SSO.
* You must obtain the required fields from your Cloud Application Services (CApS) representative.
* You need to provision users in Mendix.

This section explains all these steps.

Please work with your CApS representative to register your application to Teamcenter X SSO.

The following settings need to be configured for a successful connection:

* **Teamcenter X Client ID** – The Application ID of your Teamcenter X instance
* **Mendix Client ID** – The Application ID of your Mendix app
* **Mendix Client Secret** – The Secret of your Mendix app
* **Token Exchange Client ID** – The Application ID of the Token Exchange server
* **Token Exchange Client Secret** – The Secret of the Token Exchange server
* **Well-known Configuration URL** – This URL should have the following format: `https://your-teamcenter-x.com/.well-known/openid-configuration`

When using SSO, you need to make sure that Mendix accounts match Teamcenter users. You can find information on how to set this up in the [User Provisioning for SSO](#user-provisioning-for-sso) section.

### User Provisioning for SSO {#user-provisioning-for-sso}

When using SSO, it is essential that Mendix accounts are uniquely assigned to Teamcenter users. This section describes the process of assigning a Mendix user to a Teamcenter login. You can either create your own microflow, or use one of the examples provided in the Teamcenter Connector. 
The examples are:

* `EXAMPLE_UserProvisioningAnonymous` – This example microflow can be used with the Teamcenter SSO button on the `login.html` page. For instructions, refer to [Adding an SSO Login Button to Your Login Page](#add-sso-login-button).    
    This microflow assigns a Mendix Account with a username that matches the Teamcenter Login username with the **User** role.     
    This cannot be triggered by a logged-in user.

* `EXAMPLE_UserProvisioningNamed` – This example microflow is meant to be used by a logged-in user, and keeps the same Mendix user logged in. It does not validate whether the  Mendix login matches the Teamcenter Login.    
    This is not allowed from the login page of the app.

To enable either of those or implement your own, go to the `CUSTOM_UserProvisioning` microflow and add your preferred user provisioning microflow.

### Adding an SSO Login Button to Your Login Page {#add-sso-login-button}

To change the login page of your application, refer to the [Customizing index.html (Web)](/howto/front-end/customize-styling-new/#custom-web) section in *Customize Styling*.     
We provide an example that allows you to overwrite the `login.html` file with one that contains the SSO login button. It can be found in your `resources\TeamcenterConnector` folder.     
When you copy over the content, also copy the `xceleratorlogo.png`, as the login button uses this image. The button on this html page redirects to `/rest/tcsso/v1/login`.

### Registering your App for Teamcenter SSO {#register-your-app-for-teamcenter-sso}

To log in to your Mendix app using Teamcenter SSO, you need to register your app with Teamcenter Security Services in the Teamcenter Deployment Center. 

Note that your Teamcenter instance already needs to be configured to use SSO.

This guide provides abbreviated instructions on how to register your Mendix app. Configuring these settings requires assistance from your Teamcenter security expert. Please refer to the configuration steps in the Siemens Support Center for Teamcenter Security Services. 

To register your Mendix app, perform the following steps:

1. Go to the Teamcenter Deployment Center.
2. Select the correct environment.
3. Go to tab **4. Components**.
4. Select **Teamcenter Security Services (TcSS)**.
5. Scroll down to the **SSO Application Ids** section, and note the **Teamcenter SSO Application ID**.
  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-sso-application-id.png">}}

6. Scroll down to the **TcSS Login URL Settings** section, and note the **Login Service URL**.
  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-login-service-url.png">}}

7. Scroll down to the **Teamcenter Application Registry** section, and add a new line for each environment of your application. You generally need at least `localhost` for development and `production` for deployment:
    
    * Localhost example:
        * `APPLICATIONID: localhost`
        * `APPLICATIONROOTURL: http://localhost:8080`
        * `LDAP_USERNAME: uid`
  
    * Production example:
        * `APPLICATIONID: prod`
        * `APPLICATIONROOTURL: http://prod.example.com`
        * `LDAP_USERNAME: uid`
  
    * Teamcenter Extension example:
        * `APPLICATIONID: tce`
        * `APPLICATIONROOTURL: http://localhost:12345`
        * `LDAP_USERNAME: uid`
  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-application-registry.png">}}

8. Scroll down to the **TcSS Identity Service URL Settings** section, and note the **Identity Service URL**.
  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-identity-service-url.png">}}

Now you are ready to set up your configuration in Mendix. If you encounter any issues with the SSO registration of your app, please contact your Teamcenter security expert.

### Registering your App for Teamcenter X SSO {#register-your-app-for-teamcenterx-sso}

Please work with your CApS representative to register your app for Teamcenter X SSO. You need your CApS representative to provide you with all the relevant information to configure your Teamcenter X SSO settings in Mendix.

## Troubleshooting

### Troubleshooting SSO

Setting up SSO can be a complex procedure. Please check the following if you are unable to log in via SSO:

* Ensure all the fields in your Teamcenter configuration are set correctly.
* Set up SSO on your local machine first before working on a deployed version. To do so, you need to register for local development ([Teamcenter SSO](#register-your-app-for-teamcenter-sso) or [Teamcenter X SSO](#register-your-app-for-teamcenterx-sso)).    
    If your setup works locally, but not on your hosted environment, follow the necessary steps again.    
    If that does not solve the issue, refer to [here](#troubleshooting-sso-on-hosted-environments) for specific deployment issues.
* Open the app in an incognito browser window to make sure you are not logged in to a different instance.
* Follow the steps in [Testing the Connection](#test-the-connection).

**Scenario 1**

Question: Can you see the login page of the identity provider?

* Answer 1: Yes.    
    Solution: Continue to login and go to Scenario 2.

* Answer 2: No, I see a `Page not found` message.    
    Solution: Check whether you need a VPN connection, and whether the `SSO Login URL` and `Well-known Configuration URL` are correct.

* Answer 3: No, I see a `Something went wrong` page.    
    Solution: Open the development tools of your browser and see whether there is an error in the console that explains what went wrong.

**Scenario 2**

Question: What does your error or error page look like?

* Answer 1: A blank screen or a `Page not found`.    
    Solution: Check the URL in your browser, and match it against your app's URL. It should match your Application URL + `rest/tcsso/v1/callback`.

* Answer 2: This page:
  {{< figure src="/attachments/appstore/platform-supported-content/modules/siemens/teamcenter-connector/configuration/teamcenter-error-page.png">}}    
    Solution: Check the logs in the Mendix Studio Pro console, and adjust configuration where needed.

* Answer 3: The `Unable to Login to Teamcenter. The User was created but was unable to login to Teamcenter.` message.    
    Solution: Check the logs in the Mendix Studio Pro console, and adjust configuration where needed.

### Troubleshooting SSO on Hosted Environments {#troubleshooting-sso-on-hosted-environments}

Make sure the SSO setup on your local machine works before working on a deployed version. If the local setup works, but it does not work on your hosted environment, the following section provides guidance on what to check when you are unable to log in via SSO.

#### Unable to Reach a Page After Login

The SSO setup of the Teamcenter Connector uses deep links to access the Mendix app. We use the following paths:

* `/rest`
* `/{url_prefix}`, where the default value for `{url_prefix}` is	`/p`.

If the URL prefix is changed from `/p`, make sure `CONST_Deeplink_Url_Prefix` matches this URL prefix.

The hosted environment needs to allow these incoming connections. This is done via reverse proxy rules. To see how this can be set up, refer to the [Reverse Proxy Inbound Rules](/developerportal/deploy/deploy-mendix-on-microsoft-windows/#reverse-proxy-rules) section in *Microsoft Windows*.
