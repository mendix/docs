---
title: "OIDC SSO"
url: /appstore/modules/oidc/
category: "Modules"
description: "Describes the configuration and usage of the OIDC SSO module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "oidc", "idp", "identity provider", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## 1 Introduction

The [OpenID Connect (OIDC) SSO module](https://marketplace.mendix.com/link/component/120371) allows end-users of your Mendix app to login via Single Sign-on (SSO) using the OIDC protocol.  Besides delegating user authentication (OIDC), your app can also delegate authorization (OAuth).

OIDC is an extension of OAuth2 that propagates the end-user`s identity to your application.

{{% alert color="warning" %}}
This OIDC SSO module works with Mendix version 9.0 and above. If you are using a previous version of Mendix, you can use the *community-supported* module [OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529).
{{% /alert %}}

{{% alert color="info" %}}
The OIDC SSO module works with web/responsive applications only.
{{% /alert %}}

Alternatives to using OIDC SSO for managing single sign on are:

* [SAML](https://marketplace.mendix.com/link/component/1174) – if your IDP supports the SAML protocol but not the OIDC protocol
* [MendixSSO](https://marketplace.mendix.com/link/component/111349) – if your app is targeted at end-users that have signed up to the Mendix platform

### 1.1 Typical Usage Scenarios

* **B2C-apps:** Your app is aimed at consumers who have an identity at a `social IDP` which uses OIDC, such as Google. In this case your app will only delegate the authentication to the IDP.
* **B2E-app:** Your app is aimed at your company`s employees and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IDP) that supports the OIDC protocol. In this case your app may have its own logic to assign user roles or you may use authorization information from your IDP as can be provided to your app using an access token.
* **Xcelerator-apps.** Your (Siemens Xcelerator) app is designed to be integrated with Siemens` SAM IDP.  The Siemens SAM IDP supports the OIDC protocol and allows your app to delegate both authentication (login) and authorization (roles). See section below.
* **API-consumption.** If your app makes calls to `downstream` APIs on behalf of your user, you can use the access token obtained via the “OIDC SSO” module. This scenario is not supported when using SAML SSO. This makes the OIDC SSO module suitable for Mendix customers using Mendix Data Hub.

### 1.2 Features and Limitations

#### 1.2.1 Features

* Supports SSO login with one or multiple OIDC/OAuth-compatible identity providers.
* Easy configuration, by leveraging the so-called well-known discovery endpoint at your IDP.
* It uses the Authorization Code Grant flow to sign the user in via the browser.
* Stores an access token for each user that can be used to make API calls on their behalf. Includes helper microflows (GET, POST, PUT, PATCH, DELETE) to easily do an API call with a valid token (and automate the token refresh process).
* Configuration of user provisioning microflow and access token processing microflow can be done per OIDC identity provider.
* Supports responsive web applications, a.k.a. browser based applications.
* Works with the Mendix DeepLink module
* Client authentication makes use of form-encoded body parameters (i.e. client_id and client_secret)
* Built primarily in standard Mendix components (minimal Java) to allow for easy customization and ongoing development.

#### 1.2.2 Limitations

The OIDC SSO module does not yet support

* `Nonce` parameter, as per OIDC specs
* Requesting claims via the `claims` query parameter, as per OIDC specs
* Other client authentication methods such as basic authentication (“Client_secret_basic”) or using asymmetric keys (“private_key_jwt”)
* Delegating authorization using OAuth-scopes; this currently requires a custom microflow for parsing of Access Tokens.
* mobile apps

## 2 Dependencies

The OIDC module requires your app to be using Mendix 8.18+ or later. (Mendix 9 compatible).

It requires the following Marketplace modules to be included in your app:

* [Encryption](https://marketplace.mendix.com/link/component/1011) – see [Encryption](/appstore/modules/encryption/) documentation
* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515) – see [Nanoflow Commons](/appstore/modules/nanoflow-commons/) documentation
* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) – see [Native Mobile Resources](/appstore/modules/native-mobile-resources/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation

## 3 Installation

If you are migrating from the community edition of the module ([OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529)), please refer to the [migration documentation](#migration) below.

1. [Add the “OIDC SSO” module into your app](/appstore/general/app-store-content/).
2. Add the necessary dependencies (as listed in the previous section) from the Marketplace as well, if they are not already included in your app.
3. Add the snippet **Snip_Configuration** in the **USE_ME** > **1. Configuration** folder of the OICD SSO module to a page that  is accessible to admin users of your app.
4. Replace all the layouts that end in `_REPLACEME` used in pages in this module with layouts from your own project. The layouts are in the **Implementation** > **Layouts** folder of the module. Use the [Find Usages](/refguide/find-and-find-advanced/#find-usages) command to find where they are used.
5. Follow the instructions in [OIDC App Configuration](#app-configuration) to set up your app.

### 3.1 Installing MxModelReflection

Once the MxModelReflection has been imported into your app, you need to configure it.

1. Add the page `MxObjects_Overview` from the `MxModelReflection` module to the Navigation menu

    {{< figure src="/attachments/appstore/modules/oidc/add-model-reflection.png" >}}

2. Run the app and click the newly-added navigation link to use MxModelReflection

    {{< figure src="/attachments/appstore/modules/oidc/model-reflection-button.png" >}}

3. Select the modules `MxModelReflection` and `OIDC`  and click **Click to refresh** for both the modules and the entities.

    {{< figure src="/attachments/appstore/modules/oidc/refresh-model.png" >}}

### 3.2 Migrating from Community Edition to Platform Edition{#migration}

If you already have the [OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529) (community edition) in your module, you can migrate to this, platform supported, version by following the instruction below.

#### 3.2.1 Upgrading from Mendix Version 8 to Mendix Version 9

To migrate from Mendix 8.18.x to Mendix 9.8.1 or above, follow the steps below:

1. Open your app in the latest patch version of Mendix 8.18 and allow it to be upgraded.
2. Save the upgraded version of the app.
3. Review the guidance in [Moving from Mendix Studio Pro 8 to 9](/refguide/moving-from-8-to-9/).
4. Open your app in Mendix 9.8.1 or above and allow it to be upgraded.
5. Import the “OIDC SSO” Platform Edition module from the Marketplace.
6. Import the “Mx Model Reflection” module from Marketplace
7. In the dialog **Security** > **User roles**, select *Administrator* and click **Edit**.
8. Enable `MxModelReflection.ModelAdministrator` and close the dialog boxes with the **OK** button.
9. You can see some errors in the Errors tab, to resolve these errors, import the “Atlas Core” module from the Marketplace.
10. If you still have errors, review the information in [Migrate From Atlas 2 To Atlas 3](/refguide/moving-from-atlas-2-to-3/) and use it to resolve the issues.
11. Delete the “Atlas_UI_Resources” module from your app. Your app is now using themes from the Atlas Core Module
12. Update the “Administration”, “MendixSSO”, and “Native Mobile Resources” modules to the latest version by importing them from the Marketplace

#### 3.2.2 Replacing Community Edition with Platform Edition on Mendix Version 9

If your app is already developed using Mendix version 9, but uses the community edition of the OIDC SSO module, you can just do the following.

1. Import the "OIDC" platform edition module from the Marketplace.
2. Import the "Mx Model Reflection" Module from the Marketplace.

## 4 OIDC App Configuration{#app-configuration}

This section shows you how to configure your app to use OIDC for SSO.

### 4.1 Configuring Roles

Ensure that you have allocated the following user roles to the OIDC module roles

| User Role | OIDC Module Role |
| --- | --- |
| Administrator | OIDC.Administrator |
| Anonymous | OIDC.Anonymous |
| User | OIDC.User |

{{< figure src="/attachments/appstore/modules/oidc/user-roles.png" >}}

{{% alert color="info" %}}
You may have to add the *Anonymous* user role if it does not exist already.
{{% /alert %}}

### 4.2 Allowing Anonymous Users

In the **Anonymous** tab of the app security settings, do the following:

1. Set **Allow anonymous users** to **Yes**
2. Select *Anonymous* as the **Anonymous user role**

{{< figure src="/attachments/appstore/modules/oidc/anonymous-user.png" >}}

### 4.3 Configuring Navigation

The OIDC SSO module works without a specified sign-in page. Therefore, in the navigation section of your app, set **Sign-in page** (in the **Authentication** section) to *(none)*.

In addition, administrators will need to have access to configure OIDC and also manage users. You can do this by including the pages `Administration.Account_Overview` and `OIDC.OIDC_Client_Overview` into the app navigation, or a separate administration page.

### 4.4 Setting Encryption Key

Follow the instructions to [set an encryption key in the Encryption module](/appstore/modules/encryption/#configuration). The constant to set is called `Encryption.EncryptionKey` and should be a random value 32 characters long. This key will be used to encrypt and decrypt values.

## 5 Configuration of OIDC Provider

### 5.1 OIDC Provider Configuration

1. In your identity provider, provision a new OpenID client application. You will receive a ClientID and Client Secret.
2. You will also need the OIDC configuration endpoint (for example: [https://accounts.google.com/.well-known/openid-configuration](https://accounts.google.com/.well-known/openid-configuration))
3. Register the following callback URLs:
    * `http://<your-app-url>/oauth/v2/callback`
    * `makeitnative://<your-app-url>/oauth/callback`

{{% alert color="info" %}}
If your IDP does not support a custom URL scheme as a callback URL, that`s ok. Simply change the setting *Provider supports custom URL schemes* to false.
{{% /alert %}}

### 5.2 OIDC Client Configuration{#client-configuration}

In this case, the OIDC client is the app you are making.

1. Start your app, log in as an administrator, for example *demo_administrator* and access the OpenID Setup page.
2. Add a new client configuration and give it an **Alias** so you can identify it if you have more than one client configuration.
3. Add the **Client ID**, set **Client assertion** to *Client ID and Secret*, and add the **Client Secret**.
4. If you have the **Automatic Configuration URL** (also known as the *well-known endpint*), enter it and click **Import Configuration** to automatically fill the other endpoints.
    * If you don't have an automatic configuration URL, you can fill in the other endpoints manually.
5. Click **Save**

    {{% alert color="info" %}}
Your client configuration is not yet complete, but you have to save at this point to allow you to set up the rest of the information.
    {{% /alert %}}
6. Select your client configuration and click **Edit**.
7. Select the scopes expected by your OIDC identity provider. The standard scopes are `openid`, `profile`, and `email`, but some IdPs may use different ones.
    * If you need refresh tokens for your users, you also need the `offline` scope.
    * Add other scopes as needed.
4. Select your user provisioning flow. By default, this module will use a standard OpenID claims to provision users in your app. Also included is a flow that uses the standard UserInfo endpoint in OIDC, which is useful in the case that your identity provider uses "thin tokens". Also included is a salesforce-specific example. You may need to make changes in order to implement provisioning logic fits your business needs. To do so, read the section on [Custom User Provisioning](#custom-provisioning).
5. Optionally, check **Enable Access Token Processing** if you want to use additional information from the OIDC identity provider. This can be used, for example, to assign end user roles based on information from the IdP – see [Access Token Processing](#access-token-processing) for more information.

Once you have completed these steps, the SSO-configuration is ready for testing. See the section on [Testing and troubleshooting](#testing) for more information.

See the section [Optional Features](#optional) information on additional optional features you may want to implement.

## 6 User Provisioning

Initially your app will not have any end users. The OIDC module provides so-called Just-In-Time (JIT) user provisioning. This means that an end user will be created in your app (as an `Account` object in the Administration module) when they log in for the first time.
The user provisioning works by default but you can customize it if needed.

### 6.1 Default User Provisioning

By default, the `CUSTOM_UserProvisioning` microflow in the **USE_ME** > **1. Configuration** folder of the OIDC module uses the `UserProvisioning_StandardOIDC` microflow. By default the following mapping is applied:

| ID-token Provided by your IDP | Attribute of `Administration.Account` Object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

{{% alert color="warning" %}}
Do not change the `UserProvisioning_StandardOIDC` microflow. This may give problems if you upgrade to a newer version of the OIDC SSO module. Apply customizations to the `CUSTOM_UserProvisioning` microflow only.
{{% /alert %}}

### 6.2 Custom User Provisioning{#custom-provisioning}
Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > **1. Configuration** folder of the OIDC module. This is where you can change the way that users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `Administration.Account` object for the user. This is set as the return value of the microflow.

You can find examples included in the "User Provisioning Examples" folder. Make a single call from this microflow to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of this module over time without overwriting your custom provisioning.

This module support multiple identity providers. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. See the microflow `UserProvisioning_Sample` for a sample and details on how to do this.

## 7 Optional Features{#optional}

### 7.1 Performing API Calls on Behalf of an Authenticated User

You might want to make API calls to other apps/services on behalf of the end user. As you have used the OIDC module to authenticate the end user to your app, your app also has an access token for this end user. You can use this access token to propagate the user`s identity to the API so the API does not need to have a user identifier in the payload.

Access tokens have a short lifespan for security reasons, so you need to ensure that it has not expired. If the access token has expired, you can retrieve a new one using the refresh token that was acquired together with the access token.

The OIDC SSO module contains microflows that do this for you. These microflows all make use of the `OIDC.Token` object that contains both the Access Token (from OAuth protocol) and the ID-token (from the OIDC specs).

You can find the following microflows in the **USE_ME** > **3. Make Authorized API Calls** folder of the OIDC module.

#### 7.1.1 DELETE

Takes as input:

* **Location:** – a string containing the URL you want to do the DELETE on
* **Request:**  – a string containing the content of the DELETE request (most likely a formatted JSON)
* **Token:**  – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### 7.1.2 GET

Takes as input:

* **Request:**  – a string containing the URL you want to GET data from
* **Token:**  – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### 7.1.3 PATCH

Takes as input:

* **Location:** – a string containing the URL you want to do the PATCH on
* **Request:**  – a string containing the content of the PATCH request (most likely a formatted JSON)
* **Token:**  – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### 7.1.4 POST

Takes as input:

* **Location:** – a string containing the URL you want to do the POST on
* **Request:**  – a string containing the content of the POST request (most likely a formatted JSON)
* **Token:**  – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### 7.1.5 PUT

Takes as input:

* **Location:** – a string containing the URL you want to do the PUT on
* **Request:**  – a string containing the content of the PUT request (most likely a formatted JSON)
* **Token:**  – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

### 7.2 Access Token Processing{#access-token-processing}

With the OAuth/OIDC protocol, access tokens can be opaque or can be a JSON Web Token (JWT).
If you are just delegating authentication for your app to the IdP you will not need to know the contents of the access token.

If you want to use the information in an access token which is a JWT, you need to parse the access token. For example, you may want to assign user roles in your app based on the contents of the access token JWT.

You can parse an access token in a microflow.

* If you are using Siemens SAM as your IDP, the OIDC SSO module provides you with a default microflow for parsing of SAM access tokens.
* If you are using another IDP, you can create a custom microflow to parse the access token.

To parse access tokens, you need to check **Enable Access Token Parsing”** when performing [OIDC Client Configuration](#client-configuration).

#### 7.2.1 Processing SAM Access Tokens

{{% alert color="info" %}}
This section is only relevant if you are a Mendix partner and you want to integrate your app with the Siemens SAM IDP.
{{% /alert %}}

To parse of SAM access tokens you need to cater for the following:

* When your using the “OIDC SSO” module with SAM, you need to set-up the connectivity between your app and SAM as described in previous sections <include reference>.
*  Make sure you have installed the MxModelReflection
* “Token parsing” is enabled and the “Default SAM Token processing” microflow is selected.
* SAM needs to be configured to send roles via access token for the required Mendix App.  All the needed roles from SAM should be configured in the Mendix App.  In your Mendix app the default role will be created as “User”. Roles that are indicated in the SAM access token but not implemented in your app will be ignored. Roles implemented by your app but not included in the SAM access token will not be assigned to the user.

Instructions:

* Select "Default SAM token processing" microflow to process Access_Token as per SAM configuration
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149705083_image.png)

* Save the configuration.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149719888_image.png)

**Using a Custom microflow for access token processing**
If you choose to implement your own microflow to process access token, the custom microflow name must start with “CustomATP”, for example “CustomATP_xxxxx”. The custom microflow gets the access token as input.

* Login as Demo_administrator OIDC Config - > OpenID Provider Tab -> select saved client and click on `Edit` -> `Enable Access Token Parsing` and select `OIDC.ACT_Token_CustomATPRetrieveRoles`.

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149737527_image.png)

If your microflow is not correctly implemented you will be told that **Authentication failed!** and will see errors in the log under the OIDC log node.

### 7.3 PKCE Configuration

PKCE (pronounced as “pixy”) can be seen as a security `add-on` to the original OAuth protocol. It is generally recommended to use this feature to be better protected against hackers who try to get access to your app. You need to check if your IDP supports PKCE. When it does, it should have “S256” as value for “code_challenge_methods_supported” on its well-known endpoint, see section “OIDC Provider Configuration” .

Login as `demo-administrator' and select the previously saved “OpenId provider” then click on “Edit” and select the `Use PKCE` radio button to enable the `PKCE flow`.

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149234909_image.png)

### 7.4 Deep Links

To use this module in conjunction with the DeepLink module, you'll need to set the LoginLocation constant of the DeepLink module to '/oauth/v2/login?cont='

### 7.5 Logging Out

A standard logout action will end your Mendix session, but will not end your SSO session. To perform an SSO logout - also known as Single Lof Off (SLO), use the nanoflow ACT_Logout, which will redirect your user to the identity provider`s “end session endpoint” if configured.

For this you need to add a menu item or button that calls the nanoflow ACT_Logout.

## 15 Testing and Troubleshooting{#testing}

Once you have your app deployed, you can test the SSO set-up by trying to login.

The OIDC SSO module uses two endpoints at your IDP to achieve the SSO. The first is the /authorize endpoint, which makes the user login in the browser. The second is a back-end call to get an access token.

* The **/authorize** endpoint may reply with an error-response, for example when the user enters a wrong password but also other situations may occur.  The error response can be retrieved from the logs as shown below. Section 4.1.2.1 of [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749) and section 3.1.2.6 of [OIDC specifications](https://openid.net/specs/openid-connect-core-1_0.html#AuthError), indicate all error codes that may be returned.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1652422973263_image.png)

* If you have an error “Unable to get access token”, this indicates that the OAuth **/token** endpoint at your IDP returned an error response. Often this error occurs when your client_id and client_secret are not correct. The error response can be retrieved from the logs as shown below.  [Section 5.2 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2) indicates and clarifies all the possible error codes that may be returned.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1652423007908_image.png)

* if you have the error message “Custom microflow implementation should be required to process Access_token roles” in the `Mendix studio pro` console logs, this indicates you have not completely implemented the “CustomATP_RetrieveRoles` microflow. See the section on Access Token processing.
