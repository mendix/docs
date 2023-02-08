---
title: "OIDC Provider"
url: /appstore/modules/oidc-provider/
category: "Modules"
description: "Describes the configuration and usage of the OIDC Provider module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "OIDC", "IdP", "identity provider", "platform support", "Provider"]
banner: "The OIDC Provider is currently a beta release."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/+++++++
---

## 1 Introduction

{{% todo %}}Add link to module in Marketplace{{% /todo %}}

The [OIDC Provider](https://example.com) can be used to build a Mendix app that acts as an Identity provider(IdP) for other apps, hence providing a Single Sign-On (SSO) experience for the end-users of those applications.

The module supports responsive browser-based applications and has been tested with applications that use the OIDC SSO module. This module can be used in Mendix version 9.12.5 and above.

The idea is that you set up a single Mendix app which uses the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module to authenticate end-users with your central IdP. The same app also acts as an OIDC client for your other apps to use as the IdP for OIDC SSO. THis means it is working as an IAM (Identity and Access Management) broker. You can easily add or remove apps from the IAM Broker app within the Mendix ecosystem using an API without each app and relevant user roles having to be added to your central IdP. However, you retain all the benefits of your central IdP in controlling on- and offboarding of users.

{{< figure src="/attachments/appstore/modules/oidc-provider/typical-usage.png" >}}

### 1.1 Typical Usage Scenarios

The following are usage scenarios that would be achievable with the OIDC Broker.

* Mendix customers that want to build an IAM Broker solution that would hide the complexity of a multitude of Mendix apps from their corporate IdP.  By having those apps delegate authentication to the broker and have the broker delegate authentication to their IdP, only one OAuth client needs to be configured at their IdP.  A deployment pipeline can register additional Mendix apps with the IAM Broker in an automated fashion via an API. 
* Mendix Solution Vendors (MSVs) who want to simplify the microservice architecture of their solution from the customer by using the IAM Broker as a single IAM integration point for their customers.

### 1.2 Features and Limitations

The OIDC Provider has the following features and limitations:

**Features**

* It supports responsive web applications, using the common OAuth Authorization Code grant.
* Your apps can be registered as an OIDC client with the OIDC Provider using the client registration API or client configuration screen.
* It publishes a well-known endpoint to communicate endpoints and other IdP characteristics to client applications. This can be used by clients to retrieve the keys needed to validate ID-tokens that they receive.
* It supports the OIDC ‘nonce’ parameter, PKCE, and multiple client authentication methods ( client_secret_post, client_secret_basic) as security features.
* It supports front channel and back-channel logout as public beta features.
    
**Limitations**

* The hybrid and client credential grants are not supported, although the OIDC Provider may contain some (rudimentary) implementation to support them.
* The current implementation is an early [beta release](/releasenotes/beta-features/).

### 1.3 Dependencies

This module requires your app to be using Mendix 9.12.5+ or higher
The following modules need to be imported into your app

* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation
* [Administration](https://marketplace.mendix.com/link/component/23513) – see [Administration](/appstore/modules/administration/) documentation

## 2 Installation

To install the OIDC Provider module you need to import the following into your app:

* [OIDC Provider](https://example.com)
* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69)
* [Administration](https://marketplace.mendix.com/link/component/23513)

The module then needs to be configured as described below.

## 3 Configuration

### 3.1 Configure Security

To configure the app security, do the following:

1. Open the [User Roles](/refguide/user-roles/) in the app and **Edit** the **Administrator** user role.
1. **Edit** the **Module roles**
1. Assign the following module roles to the Administrator:
    1.  MxModelReflection
        * ModelAdministrator
        * Readonly
        * TokenUser
    1. OpenIDConnectProvider
        * Admin

### 3.2 Configure App

You now need to configure the app.

1. Open the **Domain model** of the **Administration** module.
1. Edit the **Account** entity.
    1. Add a new attribute as follows:
        * **Name** – MendixUserID
        * **Type** – **AutoNumber**
    1. Switch to the **Access Rules** tab.
    1. **Edit** the **Administrator** module role.
    1. Give **Read** **Access rights** to the **MendixUserID** attribute.
1. Open the **Runtime** tab of the app **Settings**.
1. Add the **OpenIDConnectProvider.ASU_Start_All** microflow as an [After Startup](/refguide/app-settings/#after-startup) microflow.
1. Finally, ensure that your app has the following Administration navigation items:

    | Caption | Action | User Roles |
    | --- | --- | --- |
    | Accounts | Open page 'Administration.Account_Overview' | Administrator, UserManager |
    | Active Sessions | Open page 'Administration.ActiveSessions' | Administrator, UserManager |
    | Scheduled Events | Open page 'Administration.ScheduledEvents' | Administrator, UserManager |
    | Runtime Instances | Open page 'Administration.RunteimInstances' | Administrator, UserManager |
    | My Account | Call microflow 'Administration.ManageMyAccount' | User |
    | OpenID Connect | Open page 'OpenIDConnectProvider.OpenIDConnect_Dashboard' | Administrator |

### 3.3 Configure OIDC Provider (This App)

The rest of the configuration can be performed through the app.

1. Deploy and run the app.
1. Login as an administrator.
1. Use the **Accounts** navigation item.
1. Click **New local user** and create a new active account with the **User role** set to **User**.
1. Use the **OpenID Connect** navigation item.
1. Open the **Server Keys** tab.
1. Click **New Key**.
1. Open the **Scopes** tab.
1. Create a **New** scope with the **Scope type** set to **Standard**.
1. Open the **Clients** tab.
1. Click **New Client Registration**.

    You can register a new client in one of two ways. Follow one of the sets of instructions below:

#### 3.3.1 Automatic Registration

To check that this works, you will need a tool for testing APIs (such as [Postman](https://www.postman.com/)) which allows you to execute HTTP commands to the Registration URI of you IdP.

1. Select **Automatic Registration**.
1. Store the **Registration Access token** and the **Registration URI**.
1. In your API testing tool, set up the following:
    * a **POST** command to the **Registration URI**
    * an HTTP header with **Key** = "AUthorization" and **Value** = **Registration Access token**
1. Send the command. If it is working, you should get a response which resembles the example below:

    ```json {linenos=false}
    {
        "client_id" : "DemoClient1",
        "client_name" : "DemoClient1",
        "client_secret" : "DemoCLient1",
        "redirect_uris" : [ http://localhost:8081/oath/v2/callback ],
        "backchannel_logout_uri" : http://localhost:8081/logout,
        "post_logout_redirect_uris" : [ http://localhost:8081/logout],
        "grant_types" : [ "hybrid", "client_credentials", "password" ],
        "scope" : "openid"
    }
    ```

#### 3.3.2 Manual Registration
    
* **manual registration** **via Configuration screen**  
        It is used when you want to test the app with OIDC client 
        Clients -> New Client Registration 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660493638697_file.png)

        Add ClientID, Client Secret, redirect URL 
        You can enable PKCE in OIDC client and server to use PKCE feature
        
        Details which can be configured on the provider end -  
        **Client secret**- c46591bd-8fae-4f90-9efb-b5973bea04df 
        **Client ID**- DemoClient 
        **post redirect URL**- [http://localhost:8081/logout](http://localhost:8081/logout) 
        During development and testing, you can use the local host port number according to your case. Example: If your OIDC client app port is 8080 then use http://localhost:8080/logout and if your OIDC client port is 8081 then use http://localhost:8081/logout. It is 8081 in my case. 
        **redirect URL**- [http://localhost:8081/oauth/v2/callback](http://localhost:8081/oauth/v2/callback) 
        During development and testing, you can use the local host port number according to your case. Example: If your OIDC client app port is 8080 then use http://localhost:8080/oauth/v2/callback and if your OIDC client port is 8081 then use [http://localhost:8081/oauth/v2/callback](http://localhost:8081/oauth/v2/callback). It is 8081 in my case. 

### 3.4 Configure OIDC Client

This section describes configuration steps a low-code developer needs to do to run and test the interaction between his ‘IdP-app’ and his ‘client app’ using OIDC SSO module.

* Open OIDC Client in Mendix Studio pro. Change the local host port number as OpenIDConnectProvider runs on 8080. 
![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287240_file.png)

* Run the app locally. Login as demo administrator. Add the OIDC provider configurations on OIDC Client end 
    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287247_file.png)

    * Client secret- c46591bd-8fae-4f90-9efb-b5973bea04df 

    * Client ID- DemoClient 

    * Welknown-openid configuration URL: [http://localhost:8080/oidc/configuration](http://localhost:8080/oidc/configuration) 

    * Add scopes: email, profile, OpenID 

        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287255_file.png)

    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287263_file.png)

* Now sign-out from OIDC Client and login with DemoClient. 
    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287268_file.png)

* Login by entering credentials of the user which you have created earlier on OIDC provider Accounts section 
    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287274_file.png)

* You should be able to login successfully and get into the index.html page 
    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494287278_file.png)

## 4 Testing OIDC Provider with Postman 

Stop the OIDC Client project if it is running in studio pro 

* Import OIDC server.json file into postman [OIDC Server.postman_collection.json](https://comakeitsoftware-my.sharepoint.com/:u:/g/personal/sharishma_p_comakeit_com/EZvKp-2Rg0tJvC2bNVMKTZoBTLEGu9fOV0KcCaGZg-DN2Q?e=Nrag76) 
![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559719_file.png)

* OIDCServer.json endpoints 
![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559730_file.png)

    * Register endpoint: It is used to register a client in OIDC_Provider  
    * Authorize endpoint: It is used to get login screen of OIDC Provider 
    * GrantTypePassword endpoint: It is used to get Access Token. Generally, it is a token endpoint 
    * GetConfiguration endpoint: It is a well-known-configuration endpoint 
    * Get JWKS: It consists of a public key (denoted as ‘n’) 

* Register endpoint 
    * Copy **Registration Access token** from Automatic registration on OIDC Server UI 
        !s[](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559738_file.png)

    * Paste the copied token in the value of Authorization key of ‘**Headers**’ section of register         endpoint and click on the send button 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559747_file.png)

    * You can change ClientID in the body as per your wish 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559756_file.png)

    * You will get status code 201 and check it in OIDC Provider UI also. DemoClient1 will be          created 
       ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559766_file.png)

        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559773_file.png)

* Authorize endpoint 
    * First copy URL of authorize copy file from postman. Paste it in browser to get code from URL 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559783_file.png)

        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559790_file.png)

    * Copy the code from authorize URL and paste it in Grant Type Password PKCE in postman.    Click on the send button to see the response. You will get 200 status code, access token and ID token 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559811_file.png)

* Generate code challenge from code verifier which is in grantTypePasswordPKCE using PKCE generator tool link. 
    PKCE-generator tool - [https://tonyxu-io.github.io/pkce-generator/](https://tonyxu-io.github.io/pkce-generator/) 
    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559840_file.png)

    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559855_file.png)

    ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559879_file.png)

    * copy the code challenge from generator and paste it in code challenge of ‘Params’ tab of       authorize-copy request in postman. You will get status code 200. 
        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559910_file.png)

        ![](https://paper-attachments.dropbox.com/s_A27DA9F06997C3D919A20D2E1F62DBDD4D4A86848C0F5AA1A9B4E4528436EC3B_1660494559934_file.png)

## 5 Troubleshooting

### 5.1 Infinite Loop of Redirects

The OIDC provider module sets a cookie as a means to persist the session in the user’s browser. If the cookie is not properly set, this may lead to problems. For example, when the OIDC Provider module is used to build an IAM Broker, no session is established and the broker may initiate a new session at the upstream IdP, which results in an ‘infinite loop’ of redirects via the user’s browser.
To ensure the cookie is properly set, the runtime setting com.mendix.core.SameSiteCookies must have value None. See [Environment Details](https://docs.mendix.com/developerportal/deploy/environments-details/#4222-applying-a-different-samesite-setting) for more information how to set the correct value for SameSite runtime setting. Note that the default value for this setting has changed, see [Release Notes](https://docs.mendix.com/releasenotes/studio-pro/8.11/).

### 5.2 Custom Claims Are Not Returned Properly

This is a known issue and will be corrected in a future release.
