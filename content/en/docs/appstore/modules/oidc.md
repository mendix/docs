---
title: "OIDC SSO"
url: /appstore/modules/oidc/
category: "Modules"
description: "Describes the configuration and usage of the OIDC SSO module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "oidc", "idp", "identity provider", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## Description

OpenID Connect (OIDC) SSO module. Allows end-users of your app to login via Single Sign-on (SSO) using the OIDC protocol.  Besides delegating user authentication (OIDC), your app can also delegate authorisation (OAuth). It works with web/responsive applications. 

Alternatives for using the ‘OIDC SSO’ module are:

- “SAML SSO” module; if your IDP supports the SAML protocol but not the OIDC protocol
- “Mendix SSO” module, if your app is targeted at end-users that have signed-up to the Mendix platform.

OpenID Connect is an extension of OAuth2 that propagates the enduser’s identity to your application.


## Typical usage scenarios
- **B2C-apps:** Your app is aimed at consumers who have an identity at a ‘social IDP’ which uses OIDC, such as Google. In this case your app will only delegate the authentication to the IDP.
- **B2E-app:** Your app is aimed at your company’s employees and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IDP) that supports the OIDC protocol. In this case your app may have its own logic to assign userroles or you may use authorisation information from your IDP as can be provided to your app using an access token.
- **Xcelerator-apps.** Your (Siemens Xcelerator) app is designed to be integrated with Siemens’ SAM IDP.  The Siemens SAM IDP supports the OIDC protocol and allows your app to delegate both authentication (login) and authorisation (roles). See section below.
- **API-consumption.** If your app makes calls to ‘downstream’ APIs on behalf of your user, you can use the access token obtained via the “OIDC SSO” module. This scenario is not supported when using SAML SSO. This makes the OIDC SSO module suitable for Mendix customers using Mendix Data Hub.


## Features and limitations
- Supports SSO login with one or multiple OIDC/OAuth-compatible identity providers.
- Easy configuration, by leveraging the so-called well-known discovery endpoint at your IDP.
- It uses the Authorization Code Grant flow to sign the user in via the browser.
- Stores an access token for each user that can be used to make API calls on their behalf. Includes helper microflows (GET, POST, PUT, PATCH, DELETE) to easily do an API call with a valid token (and automate the token refresh process).
- Configuration of user provisioning microflow and access token processing microflow can be done per OIDC identity provider.
- Supports responsive web applications, a.k.a. browser based applications.
- Works with the Mendix DeepLink module
- Client authentication makes use of form-encoded body parameters (i.e. client_id and client_secret)
- Built primarily in standard Mendix components (minimal Java) to allow for easy customization and ongoing development.

The OIDC SSO module does not yet support

- ‘Nonce’ parameter, as per OIDC specs
- Requesting claims via the ‘claims’ query parameter, as per OIDC specs
- Other client authentication methods such as basic authentication (“Client_secret_basic”) or using asymmetric keys (“private_key_jwt”)
- Delegating authorisation using OAuth-scopes; this currently requires a custom microflow for parsing of Access Tokens.
- mobile apps


## Known Issues

None

## Dependencies

The OIDC module requires your app to be using Mendix 8.18+ or later. (Mendix 9 compatible).

It requires the following modules to be included in your app:

- Encryption
- CommunityCommons
- NanoflowCommons
- NativeMobileResources
- MxModelReflection
        
## Installation
1. Add the “OIDC SSO” module into your app
2. Ensure you have added the necessary dependencies (as listed in the previous section) from the Marketplace as well.
3. Assign your Admin user role the Administrator module role.
4. Enable anonymous users if you haven't already. Assign your Anonymous user role the Anonymous module role.
5. Assign your regular user role(s) to the Users module role.
6. Add Snip_Configuration (OpenID Setup) to a page in your responsive navigation profile. Add the snippet **Snip_Configuration** in the Open ID > Setup folder of the OICD SSO module to a page that  is accessible to admin users of your app.
7. Be sure to set an encryption key in the Encryption module. The constant to set is called EncryptionKey and should be a random value 16 characters long.
8. Do a batch layout-replace for all the layouts used in pages in this module that end in "REPLACEME" to replace those usages with layouts from your own project.

**Installation of MxModelReflection**
Download “MxModelReflection”  Market place module from Marketplace.

- Add button for “MxModelReflection” overview in Navigation menu
![](https://paper-attachments.dropbox.com/s_1A218423B8CD2AAECB3BB8E70BAFA69B4CC02DC239B460FA28AD9CBE55177692_1652255459891_image.png)

- Click on + sign in navigation to use MxModelReflection
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149645156_image.png)

- Select the modules ‘MxModelReflection’ and ‘OIDC’  and click **C****lick to refresh** for both the modules and the entities.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149659440_image.png)



## Migrating from Community Edition to Platform Edition

**Upgrading from Mendix Version 8 to Mendix Version 9**
To convert from Mendix 8.18.x to Mendix 9.8.1 or above, follow the steps below from within Studio Pro:

1. Open your app in Mendix 9.8.1 or above and allow it to be upgraded
2. Import the “OIDC SSO” Platform Edition module from the Marketplace
3. Import the “Mx Model Reflection” module from Marketplace to the project then In the Project go to Security →  User roles →  Administrator → Edit → Enable MxModelReflection.ModelAdministrator 
4. You can see some errors in the Errors tab, to resolve these errors Import “Atlas Core” module from Marketplace
5. Delete “Atlas_UI_Resources” module. We can now use themes from Atlas Core Module in Mx9
6. Update “Administration”, “MendixSSO” and “Native Mobile Resources” modules to the latest version by importing from the Marketplace
7. Then you might see the below errors in the Errors tab. You need to change the Layout property of pages of MyFirstModule which uses “Atlas_UI_Resources” layout to Atlas_Default (Atlas_Core) layouts manually as shown below
![](https://paper-attachments.dropbox.com/s_FD83238C6F34F08A50399FBD285B00B59EF6F2D1C8B67A1DD392D7938560745B_1652173205030_image.png)

![](https://paper-attachments.dropbox.com/s_FD83238C6F34F08A50399FBD285B00B59EF6F2D1C8B67A1DD392D7938560745B_1652173307544_image.png)

        
    The above steps should resolve all the errors.

******Replacing Community Edition with Platform Edition on latest Mendix version (9.x):**

If your app is already developed using Mendix version 9, but uses the community edition of the OIDC SSO module, you can just do the following.

1. Import the OIDC platform edition module from the Marketplace
2. Import the Mx Model Reflection Module from the Marketplace
## Configuration overview

**OIDC Provider Configuration**

1. In your identity provider, provision a new OpenID client application. You will receive a ClientID and Client Secret.
2. You will also need the OIDC configuration endpoint (for example: [https://accounts.google.com/.well-known/openid-configuration](https://accounts.google.com/.well-known/openid-configuration))
3. Register the callback urls:
    1. [http://oauth/v2/callback](http://%3Cyour-app-url%3E/oauth/v2/callback)
    2. makeitnative://oauth/callback

Note: if your IDP does not support a custom URL scheme as a callback URL, that’s ok. Simply change the setting *Provider supports custom URL schemes* to false.

**OIDC Client (this app) configuration**

1. Start your app, log in as an admin, and access the OpenID Setup page.
2. Add a new client configuration with the ClientID, ClientSecret, and endpoints provided by your OpenIDConnect provider. If you have the automatic configuration url, enter it and click "Import Configuration" to automatically fill the other endpoints.
3. Select scopes expected by your OIDC identity provider. The standard set are "openid, profile, email". If you need refresh tokens for your users, you'll also want the "offline" scope. Add other scopes as needed.
4. Select your user provisioning flow. By default, this module will use a standard OpenID claims to provision users in your app. Also included is a flow that uses the standard UserInfo endpoint in OIDC, which is useful in the case that your identity provider uses "thin tokens". Also included is a salesforce-specific example. You may need to make changes in order to implement provisioning logic fits your business needs. To do so, read the section on Custom User Provisioning.
5. Optionally, enable access token processing assignment of user roles based on information from the OIDC identity provider


## OIDC client configuration for SSO connectivity

**Role configuration**
Role configuration: In Project explorer select ‘Security’ and configure as below roles.


![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148420694_image.png)


**Select ‘Anonymous user’ tab and configure as below: Allow Anonymous user -> Yes and Anonymous user role-> Anonymous**

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148521314_image.png)


**In Navigation section ‘Responsive tab section’** **configure below as Authentication sign-in page: none**
Menu section: Configure Users page and OIDC config page.
 
 

![](https://paper-attachments.dropbox.com/s_1A218423B8CD2AAECB3BB8E70BAFA69B4CC02DC239B460FA28AD9CBE55177692_1652255610688_image.png)


**Configure ‘Encryption.EncryptionKey’ Constant:**

    - This key will be used to encrypt and decrypt values.
    - The length of this key must be 32 characters.

 
In the project explorer go to settings -> Configuration-> Constants click on new and choose EncryptionKey from Encryption Module as shown below

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148689938_image.png)


  Provide the any string value for      “Encryption.EncryptionKey” constant
  

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148736501_image.png)


 
**Login as ‘demo_administrator’**

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148749721_image.png)


                   
**Client configuration (these same details already registered at server in this example):**
 

- Select OIDC-Config and click on new to configure OIDC Client details          which are already registered at OIDC Server.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148897351_image.png)


 

- Configure ‘Alias’, ‘ClientID’ and ‘Client Secret’ as below
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148952918_image.png)



- ‘Provide valid "Automatic Configuration URL" ./well-know endpoint url then click on "Import Configuration". Authorization endpoint , Token endpoint, User info endpoint, JWKS uri, Issuer, and scopes will import automatically.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148936105_image.png)


 

- Click on 'Save'.
- Select the previously saved “OpenId provider” then click on “Edit” to select scopes.


![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651148998227_image.png)



- Select the required scopes as below then click on save.

You should select "openid, profile, email" in most scenarios with most IDPs. Your IDP could be an exception.

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149022052_image.png)


Once you have completed these steps, the SSO-configuration is ready for testing. For specific optional features you may want to follow instructions in subsequent sections. You can also first do some testing, see section “Testing and troubleshooting”.


## User Provisioning

Initially your app will not have any users. The OIDC module provides so-called Just-In-Time (JIT) user provisioning. This means that a user will be created in your app (as an Administration.Account object ) when she logs in for the first time. 
The user provisioning works by default and you can customise if needed.

**Default user provisioning**
By default, the CUSTOM_UserProvisioning microflow uses the UserProvisioning_StandardOIDC microflow. By default the following mapping is applied:

| ID-token provided by your IDP | Administration.Account object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

| ⚠️ Do not change the UserProvisioning_StandardOIDC microflow. This may give problems when you want to upgrade to a newer version of the OIDC SSO module. Apply customisations in the CUSTOM_UserProvisioning microflow only. |


**Customisation of user provisioning**
Review the microflow CUSTOM_UserProvisioning. This is where should go to change the way that users are provisioned in your app. Here you receive the ID token. Use that data to find/create and return an Administration.Account object for the user. You can find examples included in the "User Provisioning Examples" folder. Make a single call from this microflow to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of this module over time without overwriting your changes.

This module support multiple identity providers. Since each provider might provide user data in a slightly different way, you may want to use multiple provisioning flows. See the microflow UserProvisioning_Sample for a sample and details on how to do this.


## Do API calls on behalf of the authenticated user

In your app, that is utilizing this OIDC module, you might want to do API calls to other apps/services on behalf of the user. As your user is already authenticated within your app, your app also has an access token for this user. This allows you to propagate the user’s identity to the API via the access token and the API doesn’t need to have a user identifier in the payload.

In using this access token you need to be careful that it has not expired yet (typically access tokens have a short lifespan for security reasons). If an access token has expired, you can retrieve a new one using the refresh token that was acquired together with the access token. 

Instead of you having to build this logic into a microflow yourself, we offer some microflows that already do this for you. These microflows all make use of the OIDC.Token object that reflect both the Access Token (from OAuth protocol) and the ID-token (from the OIDC specs).


![](https://paper-attachments.dropbox.com/s_7E7F4C5598FAE3D407C0161AAF8F6A9D593D1F3E51E3D0BE6D428FEFD8E249E5_1652169683486_image.png)


**GET**
Takes as input:

- **Request:** the URL you actually want to GET data from
- **Token:** the *OIDC.Token* object that should be used, typically retrieved via the *Token_Account* association (to find the token of the current user/session)

The microflow returns an HTTP response object (which could be an error!).

**PATCH**
Takes as input:

- **Location:** the URL you want to do the PATCH on
- **Request:** the content of the PATCH request (most likely a formatted JSON)
- **Token:** the *OIDC.Token* object that should be used, typically retrieved via the *Token_Account* association (to find the token of the current user/session)

The microflow returns an HTTP response object (which could be an error!).

**POST**
Takes as input:

- **Location:** the URL you want to do the POST on
- **Request:** the content of the POST request (most likely a formatted JSON)
- **Token:** the *OIDC.Token* object that should be used, typically retrieved via the *Token_Account* association (to find the token of the current user/session)

The microflow returns an HTTP response object (which could be an error!).

**PUT**
Takes as input:

- **Location:** the URL you want to do the PUT on
- **Request:** the content of the PUT request (most likely a formatted JSON)
- **Token:** the *OIDC.Token* object that should be used, typically retrieved via the *Token_Account* association (to find the token of the current user/session)

The microflow returns an HTTP response object (which could be an error!).

**DELETE**
Takes as input:

- **Location:** the URL you want to do the DELETE on
- **Request:** the content of the DELETE request (most likely a formatted JSON)
- **Token:** the *OIDC.Token* object that should be used, typically retrieved via the *Token_Account* association (to find the token of the current user/session)

The microflow returns an HTTP response object (which could be an error!).


## Access Token processing

With the OAuth/OIDC protocol, access tokens can be opaque or can be a Json Web Token (JWT).
In case you just want to delegate only authentication to the IDP you typically only need to cater for the User Provisioning and you don’t need to process the access token.

In case the access token is a JWT and you want to use the information in the JWT for your app’s logic, you need to parse the access token A typical example is to assign user roles in your app based on the contents of the access token JWT.

For parsing of access tokens you need a microflow and you have two options:

- If you are using Siemens SAM as IDP, the OIDC SSO module provides you with a default microflow for parsing of SAM access Tokens.
- If you are using another IDP, you can create a custom microflow to parse the access token.

For parsing of access tokens you need to mark the “Enable Access Token parsing” checkbox.

![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149691958_image.png)



**Process SAM access tokens**

> This section is only relevant if you are a Mendix partner and you want to integrate your app with the Siemens SAM IDP.

For processing of SAM access tokens you need to cater for the following:

- When your using the “OIDC SSO” module with SAM, you need to set-up the connectivity between your app and SAM as described in previous sections <include reference>.
-  Make sure you have installed the MxModelReflection
- “Token parsing” is enabled and the “Default SAM Token processing” microflow is selected.
- SAM needs to be configured to send roles via access token for the required Mendix App.  All the needed roles from SAM should be configured in the Mendix App.  In your Mendix app the default role will be created as “User”. Roles that are indicated in the SAM access token but not implemented in your app will be ignored. Roles implemented by your app but not included in the SAM access token will not be assigned to the user.
    

Instructions:

- Select "Default SAM token processing" microflow to process Access_Token as per SAM configuration
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149705083_image.png)



- Save the configuration.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149719888_image.png)


**Using a** ******Custom microflow for access token processing**
If you choose to implement your own microflow to process access token, the custom microflow name must start with “CustomATP”, for example “CustomATP_xxxxx”. The custom microflow gets the access token as input.

    
- Login as Demo_administrator OIDC Config - > OpenID Provider Tab -> select saved client and click on ‘Edit’ -> ‘Enable Access Token Parsing’ and select ‘OIDC.ACT_Token_CustomATPRetrieveRoles’.


![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149737527_image.png)


If your microflow is not correctly implemented you will be told that **Authentication failed!** and will see errors in the log under the OIDC log node.

## PKCE configuration

PKCE (pronounced as “pixy”) can be seen as a security ‘add-on’ to the original OAuth protocol. It is generally recommended to use this feature to be better protected against hackers who try to get access to your app. You need to check if your IDP supports PKCE. When it does, it should have “S256” as value for “code_challenge_methods_supported” on its well-known endpoint, see section “OIDC Provider Configuration” .

Login as ‘demo-administrator' and select the previously saved “OpenId provider” then click on “Edit” and select the ‘Use PKCE’ radio button to enable the ‘PKCE flow’.


![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1651149234909_image.png)





## Deep Links

To use this module in conjunction with the DeepLink module, you'll need to set the LoginLocation constant of the DeepLink module to '/oauth/v2/login?cont='


## Logging Out 

A standard logout action will end your Mendix session, but will not end your SSO session. To perform an SSO logout - also known as Single Lof Off (SLO), use the nanoflow ACT_Logout, which will redirect your user to the identity provider’s “end session endpoint” if configured.

For this you need to add a menu item or button that calls the nanoflow ACT_Logout.


## Testing and troubleshooting

Once you have your app deployed, you can test the SSO set-up by trying to login.

The OIDC SSO module uses two endpoints at your IDP to achieve the SSO. The first is the /authorize endpoint, which makes the user login in the browser. The second is a back-end call to get an access token.


- The **/authorize** endpoint may reply with an error-response, for example when the user enters a wrong password buit also other situations may occur.  The error response can be retrieved from the logs as shown below. Section 4.1.2.1 of [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749) and section 3.1.2.6 of [OIDC specifications](https://openid.net/specs/openid-connect-core-1_0.html#AuthError), indicate all error codes that may be returned.  
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1652422973263_image.png)


 

- If you have an error “Unable to get access token”, this indicates that the OAuth **/token** endpoint at your IDP returned an error response. Often this error occurs when your client_id and client_secret are not correct. The error response can be retrieved from the logs as shown below.  [Section 5.2 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-5.2) indicates and clarifies all the possible error codes that may be returned.
![](https://paper-attachments.dropbox.com/s_DF03B05E92BB549ED0E0F9A0BA29FAD1C2D4BACE81754CD517E8B981F034D3BB_1652423007908_image.png)



- if you have the error message “Custom microflow implementation should be required to process Access_token roles” in the ‘Mendix studio pro’ console logs, this indicates you have not completely implemented the “CustomATP_RetrieveRoles’ microflow. See the section on Access Token processing.
    
# Release Notes

This is the initial version of the “OIDC SSO” module having platform support.
It can be seen as a successor to the [“OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)”](https://marketplace.mendix.com/link/component/117529) module that is also provided via the Mendix Marketplace, which has community support only.

In comparison to the community supported version we have the following differences:

- “OIDC SSO” is supported for Mendix 9 onwards,  no version is available for Mendix 8 or Mendix 7
- software dependencies have been updated and simplified
- PKCE support has been added
- Microflow is included for processing of Access Tokens issued by the Siemens SAM IDP
- Usage with native mobile apps is not yet supported.

The documentation provides guidance on how to migrate your app from using “OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)” to using “OIDC SSO”.


