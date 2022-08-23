---
title: "OIDC SSO"
url: /appstore/modules/oidc/
category: "Modules"
description: "Describes the configuration and usage of the OIDC SSO module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "OIDC", "IdP", "identity provider", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## 1 Introduction

The [OpenID Connect (OIDC) SSO module](https://marketplace.mendix.com/link/component/120371) allows end-users of your Mendix app to login via Single Sign-on (SSO) using the OIDC protocol.  Besides delegating end-user authentication (OIDC), your app can also delegate authorization (OAuth).

OIDC is an extension of OAuth2 that propagates the end-user's identity to your application.

{{% alert color="warning" %}}
This OIDC SSO module works with Mendix version 9.0 and above. If you are using a previous version of Mendix, you can use the *community-supported* module [OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529).
{{% /alert %}}

{{% alert color="info" %}}
The OIDC SSO module works with web/responsive applications only.
{{% /alert %}}

Alternatives to using OIDC SSO for managing single sign on are:

* [SAML](https://marketplace.mendix.com/link/component/1174) – if your IdP supports the SAML protocol but not the OIDC protocol
* [MendixSSO](https://marketplace.mendix.com/link/component/111349) – if your app is targeted at end-users that have signed up to the Mendix platform

### 1.1 Typical Usage Scenarios

* **B2C-apps:** Your app is aimed at consumers who have an identity at a 'social IdP' which uses OIDC, such as Google. In this case your app will only delegate the authentication to the IdP, no further user information is available to the app.
* **B2E-app:** Your app is aimed at your company's employees and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IdP) that supports the OIDC protocol. In this case your app may have its own logic to assign user roles or you may use authorization information from your IdP as provided to your app using an access token.
* **API-consumption.** If your app makes calls to APIs of other services on behalf of your end-user, you can use the access token obtained via the “OIDC SSO” module. This scenario is not supported when using SAML SSO. This makes the OIDC SSO module suitable for Mendix customers using Mendix Data Hub.
* **Xcelerator-apps.** Your Siemens Xcelerator app is designed to be integrated with Siemens' SAM IdP.  The Siemens SAM IdP supports the OIDC protocol and allows your app to delegate both authentication (login) and authorization (roles).

### 1.2 Features and Limitations

#### 1.2.1 Features

* Supports SSO login with one or multiple OIDC/OAuth-compatible IdPs.
* Easy configuration, by leveraging the so-called well-known discovery endpoint at your IdP.
    * For example, PKCE will be used automatically if it is detected.
* Helper microflows (DELETE, GET, PATCH, POST, and PUT) which call an API with a valid token (and automate the token refresh process).
* Support for multiple OIDC IdPs, by allowing configuration of user provisioning and access token parsing microflows per IdP.
* Supports responsive web applications, a.k.a. browser based applications.
* Works with the Mendix DeepLink module

For more complex use cases, which require more knowledge of how OAuth and OIDC work.

* Uses the Authorization Code Grant flow to sign the end-user in via the browser.
* Uses the 'nonce' parameter to defend against replay attacks.
* Only validates ID-token signatures, not access tokens.
* Stores an access token for each end-user that can be used to make API calls on their behalf.
* Can be configured to use either client_secret_post or client_secret_basic as the client authentication method. Both make use of the client-id and client-secret as configured at the IdP.
* Built primarily in standard Mendix components (minimal Java) to allow for easy customization and ongoing development.

#### 1.2.2 Limitations

The OIDC SSO module does not yet support

* Requesting claims via the 'claims' query parameter, as per OIDC specs.
* Other client authentication methods such as using asymmetric keys (“private_key_jwt”).
* Delegating authorization using OAuth-scopes; this currently requires a custom microflow for parsing of Access Tokens.
* Mobile apps.

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
2. Add the necessary dependencies (as listed in the previous section) from the Marketplace, if they are not already included in your app.
3. Add the snippet **Snip_Configuration** in the **USE_ME** > **1. Configuration** folder of the OICD SSO module to a page that  is accessible to admin end-users of your app.
4. Replace all the layouts that end in `_REPLACEME` used in pages in this module with layouts from your own project. The layouts are in the **Implementation** > **Layouts** folder of the module. Use the [Find Usages](/refguide/find-and-find-advanced/#find-usages) command to find where they are used.
5. Follow the instructions in [OIDC App Configuration](#app-configuration) to set up your app.

### 3.1 Installing MxModelReflection{#mxmodelreflection}

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
6. Import the “Mx Model Reflection” module from Marketplace.
7. In the dialog **Security** > **User roles**, select *Administrator* and click **Edit**.
8. Enable `MxModelReflection.ModelAdministrator` and close the dialog boxes with the **OK** button.
9. You can see some errors in the Errors tab. To resolve these errors, import the “Atlas Core” module from the Marketplace.
10. If you still have errors, review the information in [Migrate From Atlas 2 To Atlas 3](/refguide/moving-from-atlas-2-to-3/) and use it to resolve the issues.
11. Delete the “Atlas_UI_Resources” module from your app. Your app is now using themes from the Atlas Core Module.
12. Update the “Administration”, “MendixSSO”, and “Native Mobile Resources” modules to the latest version by importing them from the Marketplace.

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

In addition, administrators will need to have access to configure OIDC and also manage end-users. You can do this by including the pages `Administration.Account_Overview` and `OIDC.OIDC_Client_Overview` into the app navigation, or a separate administration page.

### 4.4 Setting Encryption Key

Follow the instructions to [set an encryption key in the Encryption module](/appstore/modules/encryption/#configuration). The constant to set is called `Encryption.EncryptionKey` and should be a random value 32 characters long. This key will be used to encrypt and decrypt values.

## 5 Configuration of OIDC Provider{#oidc-configuration}

### 5.1 OIDC Provider Configuration

1. In your IdP, provision a new OpenID client application. You will receive a ClientID and Client Secret.
2. You will also need the OIDC configuration endpoint (for example: [https://accounts.google.com/.well-known/openid-configuration](https://accounts.google.com/.well-known/openid-configuration))
3. Register the following callback URLs:
    * `https://<your-app-url>/oauth/v2/callback`
    * `makeitnative://<your-app-url>/oauth/callback`

### 5.2 OIDC Client Configuration{#client-configuration}

In this case, the OIDC client is the app you are making.

1. Start your app, log in as an administrator, for example *demo_administrator*, and access the OpenID Setup page.
1. Add a new client configuration and give it an **Alias** so you can identify it if you have more than one client configuration.
1. Add the **Client ID**, set **Client assertion** to *Client ID and Secret*, and add the **Client Secret**.
1. Choose the **Client authentication method** — make sure that you select a method that is supported by your IdP. You can normally check this via the `token_endpoint_auth_methods_supported` setting on the IdP’s well-known endpoint. Also ensure that the correct client authentication method is configured at the IdP when you register the client.

    The options are:
    * client_secret_basic: Your app will use the HTTP Basic Authentication scheme to authenticate itself at your IdP. (Default – for security reasons this should be your preferred choice)
    * client_secret_post: Your app will authenticate itself by including its client_id and client_secret in the payload of token requests. (Older versions of the OIDC SSO module used this method).
1. If you have the **Automatic Configuration URL** (also known as the *well-known endpoint*), enter it and click **Import Configuration** to automatically fill the other endpoints.
    * If you don't have an automatic configuration URL, you can fill in the other endpoints manually.
1. Click **Save**
    {{% alert color="info" %}}
Your client configuration is not yet complete, but you have to save at this point to allow you to set up the rest of the information.
    {{% /alert %}}
1. Select your client configuration and click **Edit**.
1. Select the scopes expected by your OIDC IdP. The standard scopes are `openid`, `profile`, and `email`, but some IdPs may use different ones.
    * If you need refresh tokens for your end-users, you also need the `offline` scope.
    * Add other scopes as needed.
1. Select your user provisioning flow. By default, this module will use standard OpenID claims to provision end-users in your app. Also included is a flow that uses the standard UserInfo endpoint in OIDC, which is useful in the case that your IdP uses "thin tokens". Also included is a salesforce-specific example. You may need to make changes in order to implement provisioning logic which fits your business needs. To do so, read the section on [Custom User Provisioning](#custom-provisioning).
1. Optionally, check **Enable Access Token Parsing** if you want to use additional information from the OIDC IdP. This can be used, for example, to assign end-user roles based on information from the IdP – see [Access Token Parsing](#access-token-parsing) for more information.

Once you have completed these steps, the SSO-configuration is ready for testing. See the section on [Testing and troubleshooting](#testing) for more information.

See the section [Optional Features](#optional) information on additional optional features you may want to implement.

## 6 User Provisioning

Initially your app will not have any end-users. The OIDC module provides so-called Just-In-Time (JIT) user provisioning. This means that an end-user will be created in your app (as an `Account` object in the Administration module) when they log in for the first time.
The user provisioning works by default but you can customize it if needed.

### 6.1 Default User Provisioning

By default, the `CUSTOM_UserProvisioning` microflow in the **USE_ME** > **1. Configuration** folder of the OIDC module uses the `UserProvisioning_StandardOIDC` microflow. This applies the following mapping:

| ID-token Provided by your IdP | Attribute of `Administration.Account` Object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

{{% alert color="warning" %}}
Do not change the `UserProvisioning_StandardOIDC` microflow. This may give problems if you upgrade to a newer version of the OIDC SSO module. Apply customizations to the `CUSTOM_UserProvisioning` microflow only.
{{% /alert %}}

### 6.2 Custom User Provisioning{#custom-provisioning}

Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > **1. Configuration** folder of the OIDC module. This is where you can change the way that end-users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `Administration.Account` object for the end-user. This is set as the return value of the microflow. You can find examples included in the **USE_ME** > **1. Configuration** > **User Provisioning Examples** folder.

Make a single call from `CUSTOM_UserProvisioning` to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of the OIDC SSO module over time without overwriting your custom provisioning.

The OIDC SSO module supports multiple IdPs. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. See the microflow `UserProvisioning_Sample` for an example and details on how to do this.

## 7 Optional Features{#optional}

### 7.1 Performing API Calls on Behalf of an Authenticated User

You might want to make API calls to other apps/services on behalf of the end-user. As you have used the OIDC module to authenticate the end-user to your app, your app also has an access token for this end-user. 

If the API supports OAuth and/or OIDC, you can use this access token to propagate the end-user's identity to the API so the API does not need to have a user identifier in the payload. To do this, the API needs to:

* accept OAuth bearer tokens in the HTTP `Authorization` request header field, as per [section 7 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-7)
* accept Access Tokens from the same IdP where your user was authenticated
* parse the Access Token as JWT (as suggested by [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068) – although your Access Tokens do not necessarily have to be fully compliant with that RFC) or be able to invoke the UserInfo endpoint (as suggested by the [OIDC specs](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo))

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

### 7.3 Access Token Parsing{#access-token-parsing}

With the OAuth/OIDC protocol, access tokens can be opaque or can be a JSON Web Token (JWT).
If you are just delegating authentication for your app to the IdP you will not need to know the contents of the access token.

If you want to use the information in an access token which is a JWT, you need to parse the access token. For example, you may want to assign user roles in your app based on the contents of the access token JWT.

You can parse an access token in a microflow.

* If you are using Siemens SAM as your IdP, the OIDC SSO module provides you with a default microflow for parsing of SAM access tokens.
* If you are using another IdP, you can create a custom microflow to parse the access token.

To parse access tokens, you need to check **Enable Access Token Parsing** when performing [OIDC Client Configuration](#client-configuration).

#### 7.3.1 Parsing SAM Access Tokens

{{% alert color="info" %}}
This section is only relevant if you are a Mendix partner and you want to integrate your app with the Siemens SAM IdP.
{{% /alert %}}

To parse of SAM access tokens you need to have done the following:

1. Set-up the connectivity between your app and SAM as described [above](#oidc-configuration).
2. Install the **MxModelReflection** module.
3. Check **Enable Access Token Parsing** and select *Default SAM Token processing* as the **custom AccessToken processing microflow**.
    {{< figure src="/attachments/appstore/modules/oidc/enable-sam-parsing.png" >}}
4. Add the scopes `sam_account`, `samauth.role`, `samauth.tier`, and `samauth.ten` to the **Selected Scopes** in the [Client Configuration](#client-configuration).
5. Configure the user roles in your app to match the roles returned by SAM. End-users will be given the matching role when they sign into the app. If the role in the SAM token is not found in the Mendix app the end-user will be given the role `User`.
6. Save the configuration.

#### 7.3.2 Parsing Access Tokens Using a Custom Microflow

If you choose to implement your own microflow to parse an access token, the microflow name must start with `CustomATP`, for example `CustomATP_MyTokenParser`. The custom microflow has the access token as the parameter.

Once you have created the microflow (for example `CustomATP_xxx`), you must do the following:

1. Refresh the module containing your microflow as described in [Installing MxModelReflection](#mxmodelreflection).
2. Check **Enable Access Token Parsing** and select your microflow (for example, *CustomATP_xxx*) as the **custom AccessToken processing microflow**.

{{% alert color="info" %}}
If your microflow is not correctly implemented you will be told that **Authentication failed!** and will see errors in the log under the OIDC log node.
{{% /alert %}}

### 7.4 Deep Links

To use this module in conjunction with the DeepLink module, you'll need to set the `LoginLocation` constant of the DeepLink module to '/oauth/v2/login?cont='

### 7.5 Logging Out

A standard logout action will end an end-user's Mendix session, but will not end their SSO session. To perform an SSO logout, also known as Single Log Out (SLO), use the nanoflow `ACT_Logout`, which will redirect your user to the IdP's “end session endpoint” if configured.

To do this, add a menu item or button for your end-users that calls the nanoflow `ACT_Logout`.

## 8 Testing and Troubleshooting{#testing}

Once you have your app deployed, you can test the SSO set-up by trying to login.

The OIDC SSO module uses two endpoints at your IdP to achieve the SSO. You may get errors from either of these endpoints.

### 8.1 /authorize

The `/authorize` endpoint logs the end-user in through the browser.

The `/authorize` endpoint may reply with an error-response, for example when the end-user enters a wrong password but also other situations may occur.  The `Error` level response can be retrieved from the OIDC log node.

```log
handleAuthorization: Authorization code missing 
StatusCode = 200 
error = access_denied 
error_description = user is not assigned to the client application. 
```

Section 4.1.2.1 of [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749) and section 3.1.2.6 of [OIDC specifications](https://openid.net/specs/openid-connect-core-1_0.html#AuthError), indicate all error codes that may be returned.

### 8.2 /token

The `/token` endpoint is a back-end call to get an access token.

The error “Unable to get access token” indicates that the OAuth **/token** endpoint at your IdP has returned an error response. Often this error occurs when your client_id and client_secret are not correct. The `Error` level response can be retrieved from the OIDC log node.

```log 
401: Unauthorized 
    at OIDC.handleAuthorizationCode (CallRest : 'Call REST (POST)') 
    at OIDC.webCallback (SubMicroflow : 'handleAuthorizationCode') 
Advanced stacktrace: 
    at com.mendix.integration.actions.microflow.RestCaIIAction.execute(RestCaIIAction.scala : 79)

latestHttpResponse: 
StatusCode - 401 
ReasonPhrase - Unauthorized 
Content - {"error":"invalid_client","error_description":"client authentication failed"} 
```

[Section 5.2 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2) indicates and clarifies all the possible error codes that may be returned.

### 8.3 Custom Microflow Implementation Should Be Required to Process Access_Token Roles

If you get the error message “Custom microflow implementation should be required to process Access_token roles” in the Mendix Studio Pro console logs, this indicates you have not completely implemented your custom microflow for parsing access tokens (`CustomATP_…`). See the section on [Access Token Parsing](#access-token-parsing).
