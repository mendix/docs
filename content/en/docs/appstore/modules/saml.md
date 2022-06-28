---
title: "SAML"
url: /appstore/modules/saml/
category: "Modules"
description: "Describes the configuration and usage of the SAML module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "saml", "idp", "identity provider", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [SAML](https://marketplace.mendix.com/link/component/1174/) module can be used to give end-users access to your Mendix application based on their identity in your Identity Provider. A Mendix application that uses the SAML SSO module will delegate user login to your Identity Provider (IdP) using SAML 2.0.

By configuring the information about all identity providers in this module, you will allow the users to sign in using the correct identity provider (IdP). There is no limit on the number of different identity providers you can configure.

### 1.1 Typical Use Cases

With this module, you can authenticate against your Microsoft Active Directory server in a secure manner, utilizing the SAML capabilities of Active Directory Federation Services (ADFS). The SAML protocol allows for the encryption of all the information transferred between the two servers, so VPN connections, LDAP, or Kerberos authentication are no longer needed.

You can also use the SAML module if you want to your Mendix App to have SSO with a Shibboleth identity Provider.

### 1.2 Features

The SAML SSO module supports the following [SAML 2.0](https://docs.oasis-open.org/security/saml/v2.0/saml-core-2.0-os.pdf) profiles for your Mendix app acting as a Service Provider (SP):

* Web browser SSO profile using one of the following bindings
    * HTTP redirect, 
    * HTTP POST bindings
* Single Logout profile

The Mendix SAML SSO supports usage of SAML metadata in the following way:

* Daily synchronization of the IdP metadata, so your Mendix app will always have the latest IdP metadata.
    * For daily synchronization of IdP metadata, configure the SE_SynchronizeIdPMetadata scheduled event. For local development this can be done from Studio Pro. In the Mendix Cloud, you can do this on the [Environments Details](/developerportal/deploy/environments-details/#model-options) page for your app.
* Downloading of the metadata for your Mendix application that acts as an SP in the SAML protocol

For encryption of SAML messages the following options are supported:

* No Encryption
* 1024 or 2048 bit encryption
* SHA1 or  SHA256 algorithms

Logging / audit trail

* The SAML module keeps a log of login attempts. These can be downloaded.

Configurability:

* The solution features a SAML administration screen that allows you to configure one or multiple SAML IdP’s. IdP discovery is supported by an endpoint that returns all configured IdP’s.
* Various options as per  SAML 2.0 specification and as indicated on this page.

### 1.3 Limitations

The Mendix SAML SSO module does not support the following:

* SAML1.0
* Enhanced Client/Proxy SSO profile
* HTTP artifact binding

### 1.4 Dependencies{#dependencies}

{{% alert color="warning" %}}
If you are running your app outside of the Mendix Cloud, make sure you have [external file storage](/refguide/system-requirements/#file-storage) configured. The SAML module writes configuration data to a file document on the file storage to read it later. Without external file storage, this configuration will be lost when you restart your app. The SAML module will not work correctly without reading the configuration data from the file storage.
{{% /alert %}}

* [MxModelReflection](/appstore/modules/model-reflection/)

There are different versions of the module, depending on which version of Mendix you are using. These versions may change, see the versions available in the [SAML module](https://marketplace.mendix.com/link/component/1174/).

* Mendix version 7 – SAML module version 1.16.5
* Mendix version 8 – SAML module version 2.2.1
* Mendix version 9 (upgraded from version 8) – SAML module version 3.2.0
* Mendix version 9 (new app using Atlas version 3.0) – SAML module version 3.2.1

## 2 Installation

1. Configure the **Startup** microflow to run as the startup microflow. This microflow will initialize the custom request handler `/SSO/` (please note the importance of using the final `/` for all instances of `/SSO/`), validate all IdP configurations, and prepare the configuration entities required during the configuration.
    {{% alert color="info" %}}If you have set up path based access restrictions in your cloud (for example [Path-Based Access Restrictions](/developerportal/deploy/environments-details/#path-based-restrictions) in the Mendix Cloud), ensure that access to `/SSO/` is allowed.{{% /alert %}}
2. Add the **OpenConfiguration** microflow to the navigation, and then allow the administrator to access this page.
3.  Review and configure all the constants:
	* **DefaultLoginPage** – You can specify a different login page here for when the login process fails. When the end-user cannot be authenticated in the external Identity Provider, a button will appear, and by clicking this button, they will be redirected to the specified login page. If this is left blank, an unauthenticated user will be redirected to `/login.html`.
	* **DefaultLogoutPage** – Removing the sign-out button is recommended, but if you choose to keep it, the end-user will be redirected to a page. You can choose where the end-user is redirected to (for example, back to `/SSO/` or your `login.html` page). Every user signed in via SAML is redirected to this location when they are logged out.
	* **SSOLandingPage** – Set this if you redirect the `index.html` to log into your app automatically. See [Using SSOLandingPage](#ssolandingpage) for further information about this.
	* **HybridAppLoginTimeOutInMinutes** – If you are using a [hybrid mobile](/refguide/hybrid-mobile/) app and have the **com.mendix.webui.HybridAppLoginTimeOut** [custom runtime setting](/refguide/custom-settings/#web-client-settings) configured to customize the expiration of mobile authentication tokens, you will have to set the value of the **HybridAppLoginTimeOutInMinutes** constant to match the value of the custom runtime setting. When you use the SAML module for SSO in your Mendix app, the authentication token is not created by the Mendix runtime, which uses the custom runtime setting. Instead, the authentication token is created by the Java code in the SAML module. This Java code does not have access to the custom runtime setting value, and thus requires the constant value to be set. Only check this if you are using SAML on a hybrid mobile app. Note that this functionality also requires mobile authentication tokens to be enabled in your [IdP Configuration](#additional-functionality) as well as changes to the hybrid app package as described in [How To Implement SSO on a Hybrid App with Mendix & SAML](/howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/).
		* If you use the default login handler in your hybrid app, you must change the **com.mendix.webui.HybridAppLoginTimeOut** custom runtime setting to change the validity of the authentication token used by the hybrid mobile app.
		* If you use the SAML module in your hybrid app, you must change the **SAML20.HybridAppLoginTimeOutInMinutes** constant to change the validity of the authentication token used by the hybrid mobile app.
		* If you use both the default login handler and the SAML module in your hybrid app, you must change both.

        {{% alert color="warning" %}}Hybrid mobile apps are deprecated in Mendix version 9{{% /alert %}}
4. Sign in to the application and configure the SAML module.

### 2.1 Using SSOLandingPage{#ssolandingpage}

You can use SSO to automatically sign users in to your app by redirecting every user accessing the default page of the Mendix app (`index.html`) to the Mendix `/SSO/` endpoint. You do this by changing the `index.html` page by adding `<meta http-equiv="refresh" content="0;URL=/SSO/" />`. If you do this without any other changes, the app will come back to `index.html` which will be redirected again to single sign on.

**SSOLandingPage** specifies a different landing page so the end-user does not end up on `index.html` again after a login attempt.  We recommend that you change this constant to `/index3.html` and create an `index3.html` page in your `/theme` folder and copy contents of the original `index.html` (without the added redirect) into it. The authenticated end-user will then land on `index3.html` which will then display the content of the app. If the user authentication fails, the user will be directed to the **DefaultLoginPage** instead. 

## 3 Configuration

To configure SAML, start your app and navigate to the **OpenConfiguration** microflow which you added to the navigation.

You can now finish configuring your SAML module in your app by reviewing/updating the Service Provider (SP), and creating/updating the IdP configuration.

### 3.1 Configuring Service Provider

Before any IdP can be configured, you need to configure the SP, which is your current application. The SP configuration allows you to configure some basic information for the SP metadata file. This information will be be available in the IdP for the reference of the IdP administrator.

{{% alert color="info" %}}
The base URL used for the links in your SP metadata is determined by the **Application Root URL** [custom runtime setting](/refguide/custom-settings/#general) of your app. Change the value for this runtime setting to change the base URL of the links in your SP metadata. After changing the **Application Root URL** setting, you have to import the SP metadata into your IdP again.
{{% /alert %}}

You can choose what you want to enter for the entity ID, organization, and contact person. There are no limitations here. This should be in line with the policies of the IdP, since all this information is for their reference. 

* **Allow IdP Discovery** – When using multiple IdPs, this determines whether you allow users to get a list of all available IdPs if they have not specified a specific IdP in the login request. When going to `/SSO/`, if you have only one active IdP, the module will use the active IdP by default. If you have multiple IdPs, it is required to include the IdP in the URL. This can be done by using the URL */SSO/login/[IdP Alias]*  or */SSO/login?_idp_id=[IdP_Alias]*.
* **Keep Log Files** – All login attempts are tracked in the **SAMLRequest** and **SSOLog** entities. This attribute configures how long those records are kept before removing them. A scheduled event runs daily to remove all the files outside that date range. This value is mandatory. When keeping it 0, all records will be removed daily.
* **Use Encryption** (key length: **No Encryption**, **1024bit Encryption**, **2048bit Encryption**; encryption method: **SHA1 / SHA256**) – This allows the encryption of any messages being sent from the SP to the IdP. This is in addition to the encryption provided by using a secure HTTPS connection. If encryption is chosen, all the messages going out to the IdP will be encrypted, and a self-signed certificate will be generated and stored in the key store. Changing the encryption requires all IdPs to re-import the new metadata file.

If encryption is enabled, all the certificates required for encryption are stored in the key store. When you choose **Use encryption** a key store is automatically created using the URL of the application, or the custom entity Id, and shown as the **Key store alias**. See [Managing the Key Store](#keystore), below, for more key store options.

Accessing the metadata for the SP can be done either by clicking **Download SP Metadata** to download the XML file or by opening `http://<Application Root URL>/SSO/metadata` for your app's URL.

#### 3.1.1 Managing the Key Store{#keystore}

You can usually leave the key store settings as the default. However, there may be a requirement to use a specific key store.

{{% alert color="warning" %}}
Resetting the key store or uploading another key store will require all the IdPs to import the new metadata file. 
{{% /alert %}}

Click **Upload** to upload a key store file. Use the **Entity Id** as the the alias of the key store.

You can download the key store file and use it when configuring other SAML SPs by clicking **Download**.

{{% alert color="info" %}}
Remember to set the new key store password in the `KeystorePassword` constant of your app.
{{% /alert %}}

To return the key store settings to their defaults, click **Reset**.

### 3.2 Configuring the IdP-Specific Settings

Each IdP (entity descriptor) should have its own configuration set. Every IdP can be configured and enabled separately. All changes made in the configuration are immediately applied when you save the configuration. 

#### 3.2.1 Creating a New IdP Configuration

{{% alert color="warning" %}}
If you have multiple IdPs, please make sure each IdP has a unique **Entity descriptor**. If you add multiple IdPs with the same entity descriptor, you might experience unexpected behavior where a different SSO configuration is selected than the alias provided.
{{% /alert %}}

When creating a new IdP configuration, you are guided through a workflow to help you configure everything required for the IdP configuration. Each option in the workflow is explained below, and can be changed by editing an existing IdP Configuration.

Upon completing these steps, you only need to send the SP metadata file to the IdP and have them configure the authentication on their end. 

#### 3.2.2 General

* **Alias** – The alias will be used in the URL of the application to indicate the IdP configuration that should be used during login. There are no validations on this field (besides that it is required). But you should make sure that this alias is compatible with usage in an URL (meaning, no `/`, `&`, `?`, or special character that could get lost in the communication).
* **Log SAML Requests** – Determines whether all requests and login attempts should be logged and stored in an entity.

#### 3.2.3 Identity Provider Metadata

* **IdP Metadata Location** – The module is capable of re-importing all IdP metadata files on a daily basis. You can also choose to import the metadata from a file.
	* **Metadata Overview** – This overview shows all the information that has been found in the IdP metadata information. It is usually not necessary to do anything here, but it can be useful in order to review the possible IdP and SP configuration options.

{{% alert color="info" %}}
If you want to automatically synchronize the IdP metadata, make sure the **SE_SynchronizeIdPMetadata** [scheduled event](/refguide/scheduled-events/) is enabled. This is in the **\_USE ME** > **Scheduled Events** folder of the SAML module.
{{% /alert %}}

#### 3.2.4 User Provisioning 

* **Uses InCommon Federation Standard** – IdPs that use the InCommon standard often do not specify the assertion attributes. When following the InCommon standard, a fixed set of assertion attributes will be available to choose from later.
* **Identifying Assertion** (aka "Principal Key") – Specifies which of the assertion attributes identifies the user name.
	{{% alert color="info" %}}In Mendix version 7,  all user names passing through the SAML module are converted to lower-case before login and creation. We strongly advise you to convert all existing and new user names to lower-case as well.
	{{% /alert %}}
* **User Entity** – The Mendix entity in which you will store and look up the user account. Most often something like `Administration.Account`.
* **Attribute On** – Determines the attribute on which you want to do the lookup. This attribute will be compared against the passed **Identifying Assertion** (see above).
* **User Action** – The module will always search for the user, based on the **Identifying Assertion**. You can allow the module to create users with a predefined user role. If you allow the module to create users, it will automatically create a new user account if the user cannot be found.  If the module is not allowed to create users, it will present a message to the user stating that the login action was successful but no user has been configured. 
* **Default User Role** – This role will be assigned to newly created users.
* **Use Custom Logic in User Provisioning** – If you want to add your own logic to the user provisioning, enable this function and use [CustomUserProvisioning](#customuserprovisioning) to point to your custom logic. This microflow will be executed after the user has been created, or it will be updated through the default user provisioning provided by the module (using the settings above).
* **Just in Time Provisioning** – During the login process, all fields from the assertions can be copied into the user account entity. All the **Claim** fields from the assertion will be copied into the selected **Mx User Attribute**. 
	* **Claim**
	* **Mx User attribute**

##### 3.2.3.1 Additional Functionality{#additional-functionality}

{{% alert color="info" %}}
These settings are only available in the following versions of the module (depending on which Mendix version you are using)

* v3.1.8/v3.1.9 and above for Mendix version 9
* v2.2.0 and above for Mendix version 8
* v1.16.4 and above for Mendix version 7
{{% /alert %}}
    
* **Use custom logic for user provisioning** and **Use custom after sign-in logic**

    If you want to add your own logic to the user provisioning, enable one, or both, of these functions.The microflow you select will be executed after the user signs in.

    1. If the **Custom microflow** field is *None* then the default Mendix custom microflows `CustomUserProvisioning` and `CustomAfterSigninLogic`, respectively, is/are executed
    2. You can also implement your own custom microflow and then select that in the Custom microflow field to override the Mendix custom microflows. For this:
        * the custom microflow name must begin with the string “Custom”, (for example, `CustomMyUserProvisioning`)
        * to see the latest custom microflows in the dropdown, refresh the modules in the *Model Reflection* of your application whenever you add/remove any custom microflow — see [Mx Model Reflection](/appstore/modules/model-reflection/) for information on how to do this
* **Enable delegated authentication** *(deprecated)* - See [Multi-tier Delegated Authentication](#delegated-auth), below, for information on when you might set this.
* **Enable mobile authentication Token** - If you are using a [hybrid mobile](/refguide/hybrid-mobile/) app and you enable this, you can log in to your Mendix hybrid mobile app after the app is closed, using an auth token cookie. Only check this if you are using SAML on a hybrid mobile app. Note that this functionality also requires changes to the hybrid app package as described in [How To Implement SSO on a Hybrid App with Mendix & SAML](/howto8/mobile/implement-sso-on-a-hybrid-app-with-mendix-and-saml/).


#### 3.2.4 Authentication Context

* **Preferred Entity Descriptor** – The IdP metadata can contain references to many different IdPs or SPs. This option allows you to select which of the IdPs ought to be used when a user tries to login using this IdP configuration.
* **IdP Authentication Properties** – When sending out requests, this option has to be configured according to the specification of the IdP server: **Authentication context comparison**.
* **Disable Name ID Policy** – Check this box to disable the use of a name ID policy. This means you will use another attribute or claim to identify users.
* **Preferred Name ID** – If using a name ID policy, it is mandatory to specify the name ID method. Every IdP is supposed to support transient, but that does not have to guarantee a fixed user name. It is up to the IdP and your user provisioning implementation what the best solution is here. 
* **Authentication Context Classes** – This passes the allowed authentication methods. This has to be whatever the IdP requests, as there are no requirements within this module and all options are available. For the SAML protocol, the SP is required to pass in the authentication context. However, passing all options is not recommended, since that leads to significantly bigger (and slower) message exchange.
* **Allow Idp Initiated Authentication** – By default, the module does not allow for unsolicited request. That means that every login has to be initiated from the Mendix application, and all the messages have to be exchanged using the same RequestID and RelayState. Some IdPs do not allow for the RelayState to be passed, or the authentication could be initiated by the IdP instead of at the SP. For all situations where the RelayState is not being generated or passed from the original login action at Mendix, this option should be enabled. By default, it does not allow for unsolicited requests, because that would be considered less secure.

## 4 Advanced Configuration

### 4.1 Multi-tenant Behavior

The resource folder contains a file called *SAMLConfig.properties*. In this file, you can optionally override advanced settings from the SAML module. Usage of this file is optional. When the file does not exist or you do not specify a setting, the module will use its default behavior.

This file contains the documented properties, and example lines show the default values of these options.

With these settings, you can configure the behavior of this module and improve multi-tenant behavior of your application. For plain SAML authentication, it is best to leave this file unchanged. 

### 4.2 Multi-tier Delegated Authentication{#delegated-auth}

{{% alert color="warning" %}}
This feature is deprecated. The complexity of the necessary configurations doesn’t correspond with Mendix's ambition to provide an easy ‘low code experience’ and Mendix cannot provide support for it.

Customers are advised to use OAuth bearer tokens instead.
{{% /alert %}}

When you use the SAML SSO module in your app, your app will typically be a front-end app that redirects the user to their IDP via the browser for login.

Using SAML protocols to secure the APIs of your back-end app is more challenging. We advise you to use OAuth access tokens by installing the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module instead of the SAML module. This is a common, and a best, practice.

The SAML module does currently allow you to use multi-tier delegation (which makes use of the SAML ECP profile) if you need it. Your front-end app can request a token during login that has the right characteristics so it can be shared with a back-end app.  This is an advanced scenario which requires in-depth knowledge of the SAML protocol and the configuration of all integrating systems to get it working.

In the SAML module, you can enable this by checking “Enable delegated authentication” on the provisioning tab. By checking this box you are able to access the authorized SAML token, the module will automatically keep the token alive. Only enable this functionality if you are actually using multi-tier delegated authentication.

## 5 Debugging the Configuration

When testing and debugging the configuration, an option is to view the messages in the log files. A detailed cause of the failure will be printed in case something goes wrong.

When enabling the log node SSO to show trace messages, you can find detailed information from every step in the process. This allows for an easy analysis of where potential configuration errors recite. Enabling trace messages for the SSO log node will also allow for detailed response messages to the user trying to sign in. By default, every failed login attempt always results in this message: "Unable to validate the SAML message!" After enabling trace logging, you can see the exact cause of the failure in the browser. In case of exceptions, you can even see the stack trace.  Obviously, you should not have this enabled in production, but it does allow for easier and faster testing of the configuration.

### 5.1 Error Messages

* **"The application hasn't been properly configured to support Single Sign On."** – This message indicates an incomplete IdP configuration. In more detailed error messages (via the log file), you are able to see which property in the IdP configuration has not been configured.
* **"Unable to complete the request"** – A message has been received that does not have a RelayState/RequestID that matches any of the previously generated IDs (or the message has been answered already). If you get this message, you should validate the message communication and confirm that you are not using unsolicited requests. Or, you can enable that check the box to allow for IdP initiated authentication. 
* **"The authentication was successful, but there is no account available in this application."** – There is no account that matches the identifying assertion, by downloading the SAMLResponse message, you can see the assertion attributes in the XML file to validate which user name has been sent.
* **"Your account hasn't been configured to access this application."** – There is a user account available in the application that matches the identifying assertion, but the user does not have user roles or the user is not active. 
* **"An unexpected error occurred while creating a session"** – An uncaught exception occurred, which could be a configuration error or situation that has not been supported by the module. More information should be available in the stack trace.
* **"The response from the identity provider isn't valid."** – The response from the IdP does not contain any assertion attributes.
* **"No valid SSO Configuration could be found for entity Id: [IdP Alias]"** – Either the specified IdP configuration has not been activated, or an error occurred when reloading the configuration. The error message when reloading the configuration should give more information about the exact problem. The configuration is loaded on startup, when (de-)activating the configuration or when saving an active configuration. 
* **"Unsupported action: [action], only ....."** – The URL is incorrect. Validate that the URL is correctly structured as *action: login, assertion, metadata, discovery*.
* **“MSIS7046: The SAML protocol parameter ‘RelayState’ was not found or not valid.”** – This error can be shown on the ADFS server, most likely when you are using Mac OSX and a Safari browser. Setting the `BindingURI_Redirect` constant to true might help resolve the issue. By default, Mendix favors the `Post` binding, as the maximum size exceeds that of a `Redirect` binding due to its use of cookies and post information instead of URL parameters. The size can be a factor when using encryption.
* **"Unable to validate Response, see SAMLRequest overview for detailed response. Error: An error occurred while committing user: p:'johndoe@company.com'/u:'JoHnDoE@CoMpAnY.CoM'"** – All user names passing through the SAML module are converted to lower-case, so make sure all the existing user names and new user names are also converted to lower-case. This is because certain systems are not case-sensitive (for example, Active Directory), and also because it is a good idea to create two unique users (for example, "JoHnDoE@CoMpAnY.CoM" and "johndoe@company.com").
* **“Could not create a session for the provided user principal.”** – This error can be shown if the IdP configuration does not contain any application attributes for the entity where the user (and user principal) is to be found (and stored).

## 6 URLs

* **/SSO/metadata** – This provides a point for the IdP to automatically download the metadata from this SP.
* **/SSO/discovery** – If there are multiple active IdP configurations and discovery is enabled, this page can give a list of all the IdP configuration. It also allows the user to click the correct URL to sign in.
* **/SSO/login/[IdP Alias]  /SSO/login?_idp_id=[IdP_Alias]** – For logging using a specific IdP, you have to open either of these two URLs and pass the IdP alias as a parameter in the URL.
* **/SSO/login/SSO/** – If you have only one active IdP, opening these URLs will automatically try to log you in using the active IdP. In the case of multiple active IdPs and discovery enabled, the user will be redirected to the discovery page.  If discovery is not allowed, the user will receive an error message.

## 7 Custom Behavior

### 7.1 evaluateMultipleUserMatches

The module tries to look up the user that matches the provided user name. When multiple `System.User` records are found, this microflow is always executed.

It is possible to customize this microflow to determine the correct user. Whichever user instance is returned will be signed in to the application (and passed on to any other microflow).

### 7.2 CustomUserProvisioning {#customuserprovisioning}

When selecting in the SSO configuration to run the `customUserProvisioning` action (previously known as `CustomLoginLogic`), you can update the new or retrieved user with additional information from the assertion. All the assertions are passed into the microflow, and these can be transformed and stored in the user record. Also, additional roles can be granted to the users based on the assertion attributes.

### 7.3 CustomAfterSigninLogic

After a new session is created for the user, this microflow can be called to copy any data from the previous session to the new session. This microflow behaves similarly to the platform after the sign-in microflow. By using this microflow, it is possible to copy records from the anonymous user to the newly signed-in user.

## 8 Custom Settings

The resources folder contains the *SAMLConfig.properties* file, and through this file, advanced settings can be configured for the module. This file contains the settings along with documentation on the settings. Through this file, it is possible to alter the URLs used as well as how the application behaves in a multi-tenant environment. The file also specifies all the default values and behavior in more detail.

If you are using a custom URL, see [How Do I Get my SAML Metadata or CommunityCommons.GetApplicationUrl to Use the Custom URL?](/developerportal/deploy/custom-domains/#use-custom-url) in the *Custom Domains* documentation.

## 9 Read More

*  [SSO Using SAML](https://academy.mendix.com/link/module/115/lecture/938)

    {{% alert color="info" %}}You must log into the Mendix Platform to see the lecture above.{{% /alert %}}
    
    {{% alert color="warning" %}}When using the [SAML](/appstore/modules/saml/) module for SSO in Mendix 9 and above, you might get stuck in an endless redirect loop. This is because the default value for SameSite cookies is `"Strict"`, and the session cookies cannot be forwarded. To avoid this issue, make sure your IdP (identity provider) and your app are in the same domain, and thus on the same site. For example, if your app is on `app.domain.com` and you open the deep link `app.domain.com/link/test`, then you are redirected to your IdP to sign in on `idp.domain.com/SSO`. After you sign in successfully, you are sent back to `app.domain.com/SSO/assertion`. Finally, you are forwarded to `app.domain.com/link/test`. Since your requests always stay on the same site, the cookie can be forwarded each time. If it is not an option to have the IdP and the app in the same domain, set the value for the SameSite cookies to `"None"` or`"Lax"` to solve the problem. See also [Runtime Customization](/refguide/custom-settings/).{{% /alert %}}
