---
title: "OIDC Provider"
url: /appstore/modules/oidc-provider/
category: "Modules"
description: "Describes the configuration and usage of the OIDC Provider module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "OIDC", "IdP", "identity provider", "platform support", "Provider"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/+++++++
---

## 1 Introduction

{{% todo %}}Add link to module in Marketplace{{% /todo %}}

The [OIDC Provider](https://example.com) can be used to build a Mendix app that acts as an Identity provider(IdP) for other apps. This app then acts as an IAM broker, providing a Single Sign-On (SSO) experience for the end-users of those applications.

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
    
**Limitations**

* The hybrid and client credential grants are not supported, although the OIDC Provider may contain some (rudimentary) implementation to support them.

### 1.3 Dependencies

This module requires your app to be using Mendix 9.12.5+ or higher
The following modules need to be imported into your app

* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation
* [Administration](https://marketplace.mendix.com/link/component/23513) – see [Administration](/appstore/modules/administration/) documentation

## 2 Installation

To install the OIDC Provider module in your IAM broker app, you need to import the following into your app:

* [OIDC Provider](https://example.com)
* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69)
* [Administration](https://marketplace.mendix.com/link/component/23513)

The module then needs to be configured as described below.

## 3 Configuring IAM Broker

The steps in this section set up the app which is running as an IAM Broker using the OIDC Provider module.

### 3.1 Configure Security

To configure the app security, do the following:

1. Open the [User Roles](/refguide/user-roles/) in the app and **Edit** the **Administrator** user role.
1. **Edit** the **Module roles**
1. Assign the following module roles to the Administrator:
    1. MxModelReflection
        * ModelAdministrator
        * Readonly
        * TokenUser
    1. OpenIDConnectProvider
        * Admin

### 3.2 Configure App Modules

You now need to configure the OIDC Provider and Administration modules in the IAM Broker app.

1. Open the **Domain model** of the **Administration** module.
1. Edit the **Account** entity.
    1. Switch to the **Access Rules** tab.
    1. **Edit** the **Administrator** module role.
    1. Give **Read** **Access rights** to the **AccountDetail_Account** association.
1. Open the **Runtime** tab of the app **Settings**.
1. Add the **OpenIDConnectProvider.ASU_Start_All** microflow as an [After Startup](/refguide/app-settings/#after-startup) microflow.
1. Finally, ensure that your app has the following Administration navigation items:

    | Caption | Action | User Roles |
    | --- | --- | --- |
    | Accounts | Open page 'OpenIDConnectProvider.AccountDetail_Overview' | Administrator |
    | Active Sessions | Open page 'Administration.ActiveSessions' | Administrator |
    | Scheduled Events | Open page 'Administration.ScheduledEvents' | Administrator |
    | Runtime Instances | Open page 'Administration.RunteimInstances' | Administrator |
    | My Account | Call microflow 'Administration.ManageMyAccount' | User |
    | OpenID Connect | Open page 'OpenIDConnectProvider.OpenIDConnect_Dashboard' | Administrator |

### 3.3 Configure OIDC Provider

The rest of the configuration can be performed through the app.

1. Deploy and run the app.
1. Login as an administrator.
1. Use the **Accounts** navigation item.
1. Click **New local user** and create the user account(s) you need in your IAM Broker — for example, a new active account with the **User role** set to **User**.
1. Use the **OpenID Connect** navigation item.
1. Open the **Server Keys** tab.
1. Click **New Key**.
1. Open the **Scopes** tab.
1. Create a **New** scope with the **Scope type** set to **Standard**.
1. Open the **Clients** tab.
1. Click **New Client Registration**.

    You can register a new client in one of two ways. Follow one of the sets of instructions below:

#### 3.3.1 Automatic Client Registration

To check that this works, you will need a tool for testing APIs (such as [Postman](https://www.postman.com/)) which allows you to execute HTTP commands to the Registration URI of you IdP.

1. Select **Automatic Registration**.
1. Take a copy of the **Bearer Registration Access token** and the **Registration URI**.
1. In your API testing tool, set up the following:
    * a **POST** command to the **Registration URI** with the endpoint `/oidc/register`, for example, for a locally-deployed app, `http://localhost:8080/oidc/register`
    * an HTTP header with **Key** = "Authorization" and **Value** = **Bearer Registration Access token**
    * an HTTP request body with the following format (for a Client `ClientID` which is running on host and port `localhost:8081`):

        ```json {linenos=false}
        {
            "client_id" : "ClientID",
            "client_name" : "ClientName",
            "client_secret" : "ClientSecret",
            "redirect_uris" : [ http://localhost:8081/oauth/v2/callback ],
            "backchannel_logout_uri" : http://localhost:8081/logout,
            "post_logout_redirect_uris" : [http://localhost:8081/logout],
            "grant_types": [ "authorization_code","password" ],
            "scope": "openid"
        }
        ```

1. Send the command. If it is working, you should get a response which has a body which resembles the example below:

    ```json {linenos=false}
    {
    "post_logout_redirect_uris": [
    "http://localhost:8081/logout"
    ],
    "grant_types": [
    "authorization_code",
    "password"
    ],
    "client_secret_expires_at": 0,
    "scope": "openid",
    "client_secret": "ClientSecret",
    "redirect_uris": [
    "http://localhost:8081/oauth/v2/callback"
    ],
    "client_id_issued_at": 1675940602,
    "backchannel_logout_uri": "http://localhost:8081/logout",
    "client_name": "ClientName",
    "client_id": "ClientID"
    }
    ```

#### 3.3.2 Manual Client Registration
    
If you cannot use automatic registration, you can register the client manually.

1. Select **Manual Registration**.
1. Add the following information:
    * **Client Name**
    * **Client ID**
    * **Alias**
    * **Client Secret** 
    * **Post Logout redirect URI** – for example, for testing a local OIDC Provider app on port `8081`, `http://localhost:8081/logout` 
    * **Redirect URI** – for example, for testing a local OIDC Provider app on port `8081`, `http://localhost:8081/oauth/v2/callback`
    * **Back channel logout session support**
    * **Front channel Logout URI**
    * **Requires PKCE** – this needs to be enabled in both the client and the server to use PKCE

## 4 Configuring an OIDC Client

You need to configure the OIDC SSO module in your app which is using the IAM broker. Perform the following steps to configure the OIDC SSO module in your client app, and test that it is correctly communicating with the IAM broker.

1. Create an app containing the OIDC SSO module as described in [OIDC SSO](/appstore/modules/oidc/).

    {{% alert color="info" %}}
If you are testing locally, you will need to run your OIDC client on a different port from the IAM broker.

In the [Server](/refguide/configuration/#server) tab of your active configuration, change the **Runtime port** and **Admin port** to be different from those of your IAM broker app. For example, if your IAM broker is running using `8080` and `8090`, then use `8081` and `8091` respectively.
    {{% /alert %}}
    
    1. When you get to [Configuration of OIDC Provider](/appstore/modules/oidc/#oidc-configuration), you already have the values from the previous section.

    1. In the [OIDC Client Configuration](/appstore/modules/oidc/#oidc-configuration) section, add a client configuration and use the following values:

        * **Client ID** – the **Client ID** of the IAM Broker
        * **Client Authentication Method** – *Client ID and Secret*
        * **Client Secret** – the **Client Secret** of the IAM Broker
    
    1. Enter the **Automatic Configuration URL** using the URL of your IAM Broker app with the well-known (`/oidc/configuration`) endpoint and click **Import Configuration**. For example, when running locally, `http://localhost:8080/oidc/configuration`

    1. Continue editing the configuration and add the following scopes:

        * email
        * profile
        * OpenID

1. Sign out as Administrator from your OIDC Client app.
1. Sign back in to the app using the OIDC SSO client alias you have just configured.
1. Login by entering credentials of the user which you have created earlier on OIDC provider Accounts section.
    You should be able to login successfully and get into the index.html page 

## 5 Troubleshooting

### 5.1 Infinite Loop of Redirects

The OIDC provider module sets a cookie as a means to persist the session in the user’s browser. If the cookie is not properly set, this may lead to problems. For example, when the OIDC Provider module is used to build an IAM Broker, no session is established and the broker may initiate a new session at the upstream IdP, which results in an ‘infinite loop’ of redirects via the user’s browser.
To ensure the cookie is properly set, the runtime setting com.mendix.core.SameSiteCookies must have value None. See [Environment Details](https://docs.mendix.com/developerportal/deploy/environments-details/#4222-applying-a-different-samesite-setting) for more information how to set the correct value for SameSite runtime setting. Note that the default value for this setting has changed, see [Release Notes](https://docs.mendix.com/releasenotes/studio-pro/8.11/).

### 5.2 Custom Claims Are Not Returned Properly

This is a known issue and will be corrected in a future release.
