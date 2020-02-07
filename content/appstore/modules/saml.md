---
title: "SAML"
category: "Modules"
description: "Describes the configuration and usage of the SAML module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "saml", "idp", "identity provider", "platform support"]
draft: true
---

## 1 Introduction

The [SAML](https://appstore.home.mendix.com/link/app/1174/) module can be used as a replacement or extension of your supported authentication methods. The module allows you to authenticate your user using SAML 2.0 or the Shibboleth protocol.

By configuring the information about all identity providers in this module, you will allow the users to sign in using the correct identity provider (IdP). There is no limit on the number of different identity providers you can configure.

### 1.1 Typical Usage Scenarios

With this module, you can authenticate against your Microsoft Active Directory server in a secure manner. The SAML protocol allows for the encryption of all the information transferred between the two servers, so VPN connections, LDAP, or Kerberos authentication are no longer needed.

### 1.2 Features

* Configure all the options allowed in the SAML 2.0 specification. 

### 1.3 Limitations

* There is no support (yet) for the SOAP binding
* SAML1.0 is not supported.

### 1.4 Dependencies

* [MxModelReflection](https://appstore.home.mendix.com/link/app/69/)

## 2 Installation

1. Configure the **Startup** microflow to run as the startup microflow. This microflow will initialize the custom request handler `/SSO/`, validate all IdP configurations, and prepare any the configuration entities required during the configuration.
2. Add the **OpenConfiguration** microflow to the navigation, and then allow the administrator to access this page.
3. Review and configure all the constants:
	* **DefaultLoginPage** – You can specify another login page here (for example, configuring the *index.html* page to redirect to `/SSO/`). This constant is only used when the login process fails. When the end-user cannot be authenticated in Mendix, they are presented with a page. If this constant is specified, a button will appear, and by clicking this button, you will be redirected to the default login page (for example, *index.html* or *login.html*).
	* **DefaultLogoutPage** – Removing the sign-out button is recommended, but if you choose to keep it, the end-user will be redirected to a page. You can choose where the end-user is redirected to (for example, back to `/SSO/` or your *login.html* page). Every user signed in via SAML is redirected to this location when they are logged out.
	* **SSOLandingPage** – You can specify a different landing page here (for example, redirecting each user accessing the application URL to the SAML login). This requires you to change the *index.html* page by adding `<meta http-equiv="refresh" content="0;URL=/SSO/" />` (so the end-user does not end up on *index.html* again after a login attempt).  By changing this constant to `/index3.html`, the end-user will land on *index3.html* instead of *index.html*.  In this case, you will of course need to add an *index3.html* page to your theme (and you can copy the original *index.html* into *index3.html*).
4. Sign in to the application and configure the SAML module.

## 3 Configuration

Before any IdP can be configured, you need to configure the service provider (SP), which is your current application. The SP configuration allows you to configure some basic information for the SP metadata file. This information will be be available in the IdP for the reference of the IdP administrator.

You can choose what you want to enter for the entity ID, organization, and contact person. There are no limitations here. This should be in line with the policies of the IdP, since all this information is for their reference. 

* **Allow IdP Discovery** – When using multiple IdPs, this determines whether you allow users to get a list of all available IdPs if they have not specified a specific IdP in the login request. When going to `/SSO/`, if you have only one active IdP, the module will use the active IdP by default. If you have multiple IdPs, it is required to include the IdP in the URL. This can be done by using th URL */SSO/login/[IdP Alias]*  or */SSO/login?_idp_id=[IdP_Alias]*.
* **Keep Log Files** – All login attempts are tracked in the **SAMLRequest** and **SSOLog** entities. This attribute configures how long those records are kept before removing them. A scheduled event runs daily to remove all the files outside that date range. This value is mandatory. When keeping it 0, all records will be removed daily.
* **Use Encryption** (key length: **No Encryption**, **1024bit Encryption**, **2048bit Encryption**; encryption method: **SHA1 / SHA256**) – This allows the encryption of any messages being sent from the SP to the IdP. If encryption is chosen, all the messages going out to the IdP will be encrypted, and a self-signed certificate will be generated and stored in the keystore. Changing the encryption requires all IdPs to re-import the new metadata file.
* **KeyStore** – All the certificates required for encryption are stored in the keystore. Resetting the keystore or uploading another keystore will require all the IdPs to import the new metadata file. If you use a custom keystore, make sure the alias of the keystore is the same as the SP entity ID. In addition, make sure the new keystore password is set in the `KeystorePassword` constant.

Accessing the metadata can be done by downloading the XML file or by opening `http://www.app.com/SSO/metadata`.

### 3.1 Creating a New IdP Configuration

When creating a new IdP configuration, you are guided through a workflow to help you configure everything required for the IdP configuration. Each option in the workflow is explained below.

Upon completing these steps, you only need to send the metadata file to the IdP and have them configure the authentication on their end. 

### 3.2 Configuring the IdP-Specific Settings

Each IdP (entity descriptor) should have its own configuration set. Every IdP can be configured and enabled separately. All changes made in the configuration are immediately applied when you save the configuration. 

#### 3.2.1 General

* **Alias** – The alias will be used in the URL of the application to indicate the IdP configuration that should be used during login. There are no validations on this field (besides that it is required). But you should make sure that this alias is compatible with usage in an URL (meaning, no `/`, `&`, `?`, or special character that could get lost in the communication).
* **Log SAML Requests** – Determines whether all requests and login attempts should be logged and stored in an entity.

#### 3.2.2 Identity Provider Metadata

* **IdP Metadata Location** – The module is capable of re-importing all IdP metadata files on a daily basis. You can also choose to import the metadata from a file.
	* **Metadata Overview** – This overview shows all the information that has been found in the IdP metadata information. It is usually not necessary to do anything here, but it can be useful in order to review the possible IdP and SP configuration options.

#### 3.2.3 User Provisioning 

* **Uses InCommon Federation Standard** – IdPs that use the InCommon standard often do not specify the assertion attributes. When following the InCommon standard, a fixed set of assertion attributes will be available to choose from later.
* **Identifying Assertion** (aka "Principal Key") – Specifies which of the assertion attributes identifies the user name.
	{{% alert type="info" %}}In Mendix version 7,  all user names passing through the SAML module are converted to lower-case before login and creation. We strongly advise you to convert all existing and new user names to lower-case as well.
	{{% /alert %}}
* **User Entity** – The Mendix entity in which you will store and look up the user account. Most often something like `Administration.Account`.
* **Attribute On** – Determines the attribute on which you want to do the lookup. This attribute will be compared against the passed **Identifying Assertion** (see above).
* **User Action** – The module will always search for the user, based on the **Identifying Assertion**. You can allow the module to create users with a predefined user role. If you allow the module to create users, it will automatically create a new user account if the user cannot be found.  If the module is not allowed to create users, it will present a message to the user stating that the login action was successful but no user has been configured. 
* **Default User Role** – This role will be assigned to newly created users.
* **Use Custom Logic in User Provisioning** – If you want to add your own logic to the user provisioning, enable this function and use [CustomUserProvisioning](#customuserprovisioning) to point to your custom logic. This microflow will be executed after the user has been created, or it will be updated through the default user provisioning provided by the module (using the settings above).
* **Just in Time Provisioning** – During the login process, all fields from the assertions can be copied into the user account entity. All the **Claim** fields from the assertion will be copied into the selected **Mx User Attribute**. 
	* **Claim**
	* **Mx User attribute**

#### 3.2.4 Authentication Context

* **Preferred Entity Descriptor** – The IdP metadata can contain references to many different IdPs or SPs. This option allows you to select which of the IdPs ought to be used when a user tries to login using this IdP configuration.
* **IdP Authentication Properties** – When sending out requests, this option has to be configured according to the specification of the IdP server: **Authentication context comparison**.
* **Disable Name ID Policy** – Check this box to disable the use of a name ID policy. This means you will use another attribute or claim to identify users.
* **Preferred Name ID** – If using a name ID policy, it is mandatory to specify the name ID method. Every IdP is supposed to support transient, but that does not have to guarantee a fixed user name. It is up to the IdP and your user provisioning implementation what the best solution is here. 
* **Authentication Context Classes** – This passes the allowed authentication methods. This has to be whatever the IdP requests, as there are no requirements within this module and all options are available. For the SAML protocol, the SP is required to pass in the authentication context. However, passing all options is not recommended, since that leads to significantly bigger (and slower) message exchange.
* **Allow Idp Initiated Authentication** – By default, the module does not allow for unsolicited request. That means that every login has to be initiated from the Mendix application, and all the messages have to be exchanged using the same RequestID and RelayState. Some IdPs do not allow for the RelayState to be passed, or the authentication could be initiated by the IdP instead of at the SP. For all situations where the RelayState is not being generated or passed from the original login action at Mendix, this option should be enabled. By default, it does not allow for unsolicited requests, because that would be considered less secure.

## 4 Advanced Configuration

The resource folder contains a file called *SAMLConfig.properties*. In this file, you can optionally override advanced settings from the SAML module. Usage of this file is optional. When the file does not exist or you do not specify a setting, the module will use its default behavior.

This file contains the documented properties, and example lines show the default values of these options.

With these settings, you can configure the behavior of this module and improve multi-tentant behavior of your application. For plain SAML authentication, it is best to leave this file unchanged. 

## 5 Debugging the Configuration

When testing and debugging the configuration, an option is to view the messages in the log files. A detailed cause of the failure will be printed in case something goes wrong.

When enabling the log node SSO to show trace messages, you can find detailed information from every step in the process. This allows for an easy analysis of where potential configuration errors recite. Enabling trace messages for the SSO log node will also allow for detailed response messages to the user trying to sign in. By default, every failed login attempt always results in this message: "Unable to validate the SAML message!" After enabling trace logging, you can see the exact cause of the failure in the browser. In case of exceptions, you can even see the stack trace.  Obviously, you should not have this enabled in production, but it does allow for easier and faster testing of the configuration.

### 5.1 Error Messages

* **"The application hasn't been properly configured to support Single Sign On."** – This message indicates an incomplete IdP configuration. In more detailed error messages (via the log file), you are able to see which property in the IdP configuration has not been configured.
* **"Unable to complete the request"** – A message has been received that does not have a RelayState/RequestID that matches any of the previously generated IDs (or the message has been answered already). If you get this message, you should validate the message communication and confirm that you are not using unsolicited requests. Or, you can enable that check the box to allow for IdP initiated authentication. 
* **"The authentication was successful, but there is no account available in this application."** – There is no account that matches the identifying assertion, by downloading the SAMLResponse message, you can see the assertion attributes in the XML file to validate which user name has been sent.
* **"Your account hasn't been configured to access this application."** – There is a user account available in the application that matches the identifying assertion, but the user does not have user roles or the user is not active. 
* **"An unexpected error occured while creating a session"** – An uncaught exception occurred, which could be a configuration error or situation that has not been supported by the module. More information should be available in the stack trace.
* **"The response from the identity provider isn't valid."** – The response from the IdP does not contain any assertion attributes.
* **"No valid SSO Configuration could be found for entity Id: [IdP Alias]"** – Either the specified IdP configuration has not been activated, or an error occurred when reloading the configuration. The error message when reloading the configuration should give more information about the exact problem. The configuration is loaded on startup, when (de-)activating the configuration or when saving an active configuration. 
* **"Unsupported action: [action], only ....."** – The URL is incorrect. Validate that the URL is correctly structured as *action: login, assertion, metadata, discovery*.
* **“MSIS7046: The SAML protocol parameter ‘RelayState’ was not found or not valid.”** – This error can be shown on the ADFS server, most likely when you are using Mac OSX and a Safari browser. Setting the `BindingURI_Redirect` constant to true might help resolve the issue. By default, Mendix favors the `Post` binding, as the maximum size exceeds that of a `Redirect` binding due to its use of cookies and post information instead of URL parameters. The size can be a factor when using encryption.
* **"Unable to validate Response, see SAMLRequest overview for detailed response. Error: An error occured while commiting user: p:'johndoe@company.com'/u:'JoHnDoE@CoMpAnY.CoM'"** – All user names passing through the SAML module are converted to lower-case, so make sure all the existing user names and new user names are also converted to lower-case. This is because certain systems are not case-sensitive (for example, Active Directory), and also because it is a good idea to create two unique users (for example, "JoHnDoE@CoMpAnY.CoM" and "johndoe@company.com").

## 6 URLs

* **/SSO/metadata** – This provides a point for the IdP to automatically download the metadata from this SP.
* **/SSO/discovery** – If there are multiple active IdP configurations and discovery is enabled, this page can give a list of all the IdP configuration. It also allows the user to click the correct URL to sign in.
* **/SSO/login/[IdP Alias]  /SSO/login?_idp_id=[IdP_Alias]** – For logging using a specific IdP, you have to open either of these two URLs and pass the IdP alias as a parameter in the URL.
* **/SSO/login/SSO/** – If you have only one active IdP, opening these URLs will automatically try to log you in using the active IdP. In the case of multiple active IdPs and discovery enabled, the user will be redirected to the discovery page.  If discovery is not allowed, the user will receive an error message.

## 7 Custom Behavior

### 7.1 evaluateMultipleUserMatches

The module tries to look up the user that matches the provided user name. When multiple `System.User` records are found, this microflow is always executed.

It is possible to customize this microflow to determine the correct user. Whichever user instance is returned will be signed in to the application (and passed on to any other microflow).

### 7.2 CustomUserProvioning {#customuserprovisioning}

When selecting in the SSO configuration to run the `customUserProvisioning` action (previously known as `CustomLoginLogic`), you can update the new or retrieved user with additional information from the assertion. All the assertions are passed into the microflow, and these can be transformed and stored in the user record. Also, additional roles can be granted to the users based on the assertion attributes.

### 7.3 CustomAfterSigninLogic

After a new session is created for the user, this microflow can be called to copy any data from the previous session to the new session. This microflow behaves similarly to the platform after the sign-in microflow. By using this microflow, it is possible to copy records from the anonymous user to the newly signed-in user.

## 8 Custom Settings

The resources folder contains the *SAMLConfig.properties* file, and through this file, advanced settings can be configured for the module. This file contains the settings along with documentation on the settings. Through this file, it is possible to alter the URLs used as well as how the application behaves in a multi-tenant environment. The file also specifies all the default values and behavior in more detail.

## 9 Read More

* [SSO Using SAML](https://gettingstarted.mendixcloud.com/link/module/115/lecture/938)