---
title: "OIDC Provider"
url: /appstore/modules/oidc-provider/
category: "Modules"
description: "Describes the configuration and usage of the OIDC Provider module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "OIDC", "IdP", "identity provider", "platform support", "Provider"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/210202
---

## 1 Introduction

The [OIDC Provider](https://marketplace.mendix.com/link/component/210202) can be used to build a Mendix app that acts as an OpenID provider for other apps, providing a Single Sign-On (SSO) experience for the end-users of those applications. This app could also delegate authentication of end-users to another Identity provider (IdP), causing it to act as an IAM broker.

The module supports responsive browser-based applications and has been tested with applications that use the OIDC SSO module. This module can be used in Mendix version 9.22.0 and above.

The idea is that you set up a single Mendix app which uses the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module to authenticate end-users with your central IdP. The same app also acts as an OIDC provider for your other apps to use as the IdP for OIDC SSO. This means it is working as an IAM (Identity and Access Management) broker for authentication and, optionally, authorization. You can easily add or remove apps from the IAM Broker app within the Mendix ecosystem using an API without each app and relevant user roles having to be added to your central IdP. However, you retain all the benefits of your central IdP in controlling on- and offboarding of users.

For more information on the concepts behind authorization, see [About Authorization](#about-authorization), below.

{{< figure src="/attachments/appstore/modules/oidc-provider/typical-usage.png" >}}

You can also set up your users manually in your app, using the Mendix Administration module, rather than linking to your central IdP.

### 1.1 Typical Usage Scenarios

The following are usage scenarios that would be achievable with the OIDC Broker.

* Mendix customers that want to build an IAM Broker solution that would hide the complexity of a multitude of Mendix apps from their corporate IdP.  By having those apps delegate authentication to the broker and have the broker delegate authentication to their IdP, only one OAuth client needs to be configured at their IdP.  A deployment pipeline (deployment agent) can register additional Mendix apps with the IAM Broker in an automated fashion via an API. 
* Mendix Solution Vendors (MSVs) may want to hide the microservice architecture of their solution from the customer. By building an IAM Broker they can offer their customers a single SSO integration point.

See [End-User Account Creation in OIDC Provider](#end-user-account), below for more information on how these two use cases are implemented.

### 1.2 Features and Limitations

The OIDC Provider has the following features and limitations:

**Features**

* allows for registration of Mendix apps via the client registration endpoint
* works/integrates with the platform-supported [OIDC SSO](/appstore/modules/oidc/) module
* It supports responsive web applications, using the common OAuth Authorization Code grant.
* Your apps can be registered as an OIDC client with the OIDC Provider using the client registration API or client configuration screen. The client registration API allows you to register your client automatically when using a CI/CD deployment pipeline.
* It publishes a well-known endpoint to communicate endpoints and other IdP characteristics to client applications. Mendix apps using the OIDC SSO module will consume this endpoint to perform actions like retrieving the keys needed to validate ID-tokens that they receive.
* It supports the OIDC ‘nonce’ parameter, PKCE, and multiple client authentication methods ( client_secret_post, client_secret_basic) as security features.
    
**Limitations**

* The hybrid resource owner password credentials, and client credential grants are not supported, although the OIDC Provider may contain some (rudimentary) implementation to support them.
* The OIDC Provider module ignores "email", "phone" and "profile" scope values (as specified by OIDC specs) when the client includes these in an authentication request . Instead, the OIDC Provider module will include user claims in an ID-token based on a custom microflow, regardless of the scopes in the request.
* Front channel and back-channel logout are implemented as alpha features.

### 1.3 Dependencies

This module requires your app to be using Mendix 9.22.0 or higher
The following modules need to be imported into your app

* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation

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

Every end-user that is known in Admin module also needs to be known in the OIDC Provider module. Access has to be given to allow an OIDCProvier.AccountDetail record to be created for every Administration.Account record when the end-user signs in. This can be achieved by the following steps:

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
    | Mx Objects | Open page 'MxModelReflection.MxObjects_Overview' | Administrator |

### 3.3 Configure OIDC Provider

The rest of the configuration can be performed through the app.

1. Deploy and run the app.
1. Login as an administrator.
1. Use the **Accounts** navigation item.
1. Click **New** and create the user account(s) you need in your IAM Broker — for example, a new active account with the **User role** set to **User**.
1. Use the **OpenID Connect** navigation item.
1. Open the **Server Keys** tab.
1. Click **New Key**.
1. Open the **Scopes** tab.
1. Create **New** scopes with the **Scope type** set to **Standard**.

    This page sets up a single list of all the scopes that are known to the OIDC Provider module. For each client, you can then choose the scopes used by that specific client. See [Configuring Centralized Authorization](#configuring-authorization) for more information on what scopes you should set.

1. Open the **Clients** tab.
1. Click **New Client Registration**.

    You can register a new client (an app using the OIDC SSO module for sign in which identifies this app as its IdP) in one of two ways. Follow one of the sets of instructions below:

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
            "grant_types": [ "authorization_code" ],
            "scope": "User"
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
    ],
    "client_secret_expires_at": 0,
    "scope": "User",
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
    * **Client Name** – a name for this client so that it is easy to identify
    * **Client ID** – a unique string which identifies this client
    * **Alias** – usually the same as *Client Name* but can be different
    * **Client Secret** – the client password to allow the client to authenticate to the OIDC Provider module
    * **Post Logout redirect URI** – the fully qualified logout url, `<appurl>/logout` — for example, for testing a local OIDC SSO app on port `8081`, `http://localhost:8081/logout`
    * **Redirect URI** – for example, for testing a local OIDC SSO app on port `8081`, `http://localhost:8081/oauth/v2/callback`
    * **Back channel logout session support**
    * **Front channel Logout URI**

#### 3.3.3 Configuring Centralized Authorization{#configuring-authorization}

There are two alternatives for [centralized authorization](#centralized-auth). You can use scopes, or a custom user claim.

Choose one of the two options, below. 

Whichever option you choose, you will need to use [Custom User Provisioning](/appstore/modules/oidc/#custom-provisioning) in the OIDC SSO module of your client app to assign the correct user roles to the end-user.

##### 3.3.3.1 Configuration of the OIDC Provider for Centralized Authorization with Scopes

 When you follow the recommended approach for [centralized authorization](#centralized-auth) using OAuth scopes, the OIDC Provider needs to know which user roles have been implemented in your Mendix apps, so the client can assign those user roles.

The scope values (user roles) that you assign to the authenticated user in the OIDC Provider are sent to your app in both the ID-token and Access Token. Communicating authorization via Access Token is the standard approach when using OAuth. If your client app consumes APIs, it can forward the Access Token as a bearer token in the http authorization header in such API calls.
 
To return requested scopes to your client app, you need to perform the following steps to configure the OIDC Provider:

1. Open the **Scopes** tab for the client you want to configure
1. Create a new scope for every user role which is implemented in your client apps. This scope has the same **Name** as the user role in your client app.

    If your client app consumes APIs and wants to get access using the Access Token from the OIDC Provider, you may want to configure additional scope values, as required by those APIs.

    {{% alert color="warning" %}}
Do not to create scopes with the same name as standard scopes (as defined in the [OIDC specs](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims)), for example:

* openid - apps will use this scope value to request identity propagation from the OIDC Provider by means of an ID-token.
* email
* profile
* phone
{{% /alert %}}

    {{% alert color="info" %}}    
The scopes you configure are not added automatically to the “scopes_supported” attribute on the OIDC Provider’s well-known endpoint. You must manually configure the scope value in your client app to be able to request it.
{{% /alert %}}

1. Add logic to the OIDC Provider to assign user roles (custom scope values) based on your preferred business logic. 

    Modify the `OpenIDConnectProvider.SUB_CustomScope` microflow to assign the scope value (user role) based on your authorization business logic. You would typically use the following inputs to decide whether to return a requested scope:

    * `RegisteredClient` – this identifies the client app that sends the login request and associated user role/scope request 
    * `Account` – defines the user who tries login
    * `AllowedScopeList` – the scopes associated with the client in the OIDC Provider
    * `scopesListFromRequest` – the scopes/user roles which the client requests
     
    The Microflow returns the scope(s) as a String containing space-separated values. If any of the requested scopes are not associated with the client then the microflow returns an empty value as output.
    
    {{% alert color="info" %}}The default implementation of `OpenIDConnectProvider.SUB_CustomScope` grants any requested scope provided it is associated with client (your Mendix app). It does not do any validation of the end user.{{% /alert %}}

##### 3.3.3.2 Configuration of the OIDC Provider to Propagate the End-User’s Identity with Custom Claims{#propagate-custom-claims}

Typically you want to propagate the end-user’s identity from the OIDC Provider to your Mendix app. Although the basic user attributes like ‘email address’ and ‘user name’ may be sufficient, your app may need more information about the end-user. User attributes like ‘department’ or ‘job-title’ may be used for business logic, including decentralized authorization.

To pass this additional information, you need to create custom claims. You can do this as follows:

1. Create a microflow which returns a value to the claim.
1. Run (publish) your app.
1. Sign in to your app as an Administrator.
1. Open the **Mx Objects** overview page and synchronize the required modules to see the new microflow.
1. Follow the navigation item OpenID Connect to open the page `OpenIDConnectDashboard`.
1. Switch to the Custom claims tab of your registered client.
1. Create a new claim.
    * Provide a name for claim
    * Select the microflow which returns the value to the claim
1. Save the claim.

    When an authentication request is made to the OIDC Provider, the created custom claim will be added to the ID-token.

{{% alert color="info" %}}
Do not to create custom claims with the same names as standard claims or existing Mendix custom claims.

Some examples of existing claims are:

* scope

    If the claim with ‘scope’ is created, the scope value in access token and id-token gets overwritten with the claim value

* aud
* sub
* iss
* name
* exp
* iat
* nonce
* com.mendix.user.language¹
* com.mendix.user.entity¹
* com.mendix.user.attributes¹
* com.mendix.user.timezone¹
* com.mendix.user.roles¹

*¹ The claims starting com.mendix.user are an alpha feature and may be deprecated in a future release in favor of standard claims specified by OIDC protocol. The OIDC SSO (client) module does not process these claims.*
{{% /alert %}}

## 4 Configuring an OIDC Client

You need to configure the OIDC SSO module in your app which is using the IAM broker. Perform the following steps to configure the OIDC SSO module in your client app, and test that it is correctly communicating with the IAM broker.

1. Create an app containing the OIDC SSO module as described in [OIDC SSO](/appstore/modules/oidc/).

    {{% alert color="info" %}}If you are testing locally, you will need to run your OIDC client in a separate copy of Studio Pro and on a different port from the IAM broker.<p />In the [Server](/refguide/configuration/#server) tab of the active configuration of your client app, change the **Runtime port** and **Admin port** to be different from those of your IAM broker app. For example, if your IAM broker is running using `8080` and `8090`, you could use `8081` and `8091` respectively.
    {{% /alert %}}
    
    1. When you get to [Configuration of OIDC Provider](/appstore/modules/oidc/#oidc-configuration), you already have the values from the previous section.

    1. In the [OIDC Client Configuration](/appstore/modules/oidc/#oidc-configuration) section, add a client configuration and use the following values:

        * **Client ID** – the **Client ID** of the IAM Broker
        * **Client Authentication Method** – *Client ID and Secret*
        * **Client Secret** – the **Client Secret** of the IAM Broker
    
    1. Enter the **Automatic Configuration URL** using the URL of your IAM Broker app with the well-known (`/oidc/.well-known/openid-configuration`) endpoint and click **Import Configuration**. For example, when running locally, `http://localhost:8080/oidc/.well-known/openid-configuration`

    1. Continue editing the configuration and add the following scopes:

        * email
        * profile
        * OpenID

        {{% alert color="info" %}}If you are passing user roles to your client using either scopes or custom user claims, you will need to add these user roles to your app as well, and create a custom user provisioning microflow to assign user roles to end-users.{{% /alert %}}

1. Sign out as Administrator from your OIDC Client app.
1. Sign back in to the app using the OIDC SSO client alias you have just configured.
1. Login by entering credentials of the user which you have created earlier on OIDC provider Accounts section.
    You should be able to login successfully and get into the index.html page

## 5 Token Formats for Non-custom Claims

### 5.1 Non-custom Claims in Access Token

The format of non-custom claims in the access token is as follows:

```json {linenos=false}
{
    "aud": "DemoClient",
    "sub": "3",
    "nbf": 1681969726,
    "scope": "",
    "iss": "http://localhost:8080/",
    "name": "test",
    "exp": 1682056126,
    "iat": 1681969726
}
```

### 5.2 Non-custom Claims in ID-token

The format of non-custom claims in the ID-token is as follows:

```json {linenos=false}
{
    "com.mendix.user.language": "en_US",
    "sub": "test",
    "iss": "http://localhost:8080/",
    "com.mendix.user.entity": "Administration.Account",
    "nonce": "k5CDLkTE7Q61Q0cUTSgy",
    "com.mendix.user.attributes": {
        "Email": "",
        "FullName": "test",
        "IsLocalUser": "true"
    },
    "aud": "DemoClient",
    "scope": "",
    "exp": 1681970318,
    "com.mendix.user.timezone": "",
    "iat": 1681969718,
    "com.mendix.user.roles": [
        "User"
    ]
}
```

## 6 Troubleshooting

### 6.1 Infinite Loop of Redirects

The OIDC provider module sets a cookie as a means to persist the session in the user’s browser. If the cookie is not properly set, this may lead to problems. For example, when the OIDC Provider module is used to build an IAM Broker, no session is established and the broker may initiate a new session at the upstream IdP, which results in an ‘infinite loop’ of redirects via the user’s browser.
To ensure the cookie is properly set, the runtime setting com.mendix.core.SameSiteCookies must have value None. See [Environment Details](https://docs.mendix.com/developerportal/deploy/environments-details/#4222-applying-a-different-samesite-setting) for more information how to set the correct value for SameSite runtime setting. Note that the default value for this setting has changed, see [Release Notes](https://docs.mendix.com/releasenotes/studio-pro/8.11/).

## 7 About Authorization{#about-authorization}

When you are building Mendix apps you need to make two architectural decisions in the area of end-user access:

* Which component in the application landscape will authenticate end-users
* Which component in the application landscape will authorize end-users to use a the user roles of your app

When you use the OIDC Provider module, you have already taken the decision that your app will delegate user authentication to the app you build with the OIDC Provider module.
With respect to authorization that leaves you, again, with two options:

* Fully decentralized authorization
* Centralized authorization

These two options are described below.

### 7.1 Fully Decentralized Authorization

With fully decentralized authorization, you will typically want to propagate the identity of the end-user to your app and the app can subsequently make an authorization decision using some logic in your app. The authorization business logic in your app may need information about the authenticated end-user. In a business application this could be end-user attributes like ‘department’ and/or ‘job title’.

The OIDC Provider module allows you to pass user attributes in the ID-tokens that are sent from the OIDC Provider to your app. You can define ‘custom’ claims, so the user attributes that can be communicated are not restricted to a pre-defined set.

### 7.2 Centralized Authorization {#centralized-auth}

With centralized authorization your app delegates authorization decisions to a central component which then communicates that decision to your app. Your app then enforces the authorization decision by applying one or more user roles to the end-user, but does not need any business logic to decide which user roles to apply.

The OIDC Provider module is one such central component and you can communicate the authorization decision made by the OIDC Provider module in 2 ways:

* using the concept of OAuth scopes (recommended)
* using a custom user claim

Using OAuth scopes is the recommended approach since it is the standard OAuth solution. With Mendix, we advise you to think of an app’s user roles as being the same as OAuth scope values.  By adhering to this logic, you can develop apps with any user roles without having to decide and agree on custom attributes. You can customize the OIDC SSO module with microflows which parse the tokens from the OIDC Provider module and apply user roles to enforce the authorization indicated in the token.

### 7.3 End-User Account Creation in OIDC Provider{#end-user-account}

Since the OIDC Provider issues access tokens for end-users that are logged in, it needs to record end-users as objects in the app which contains the OIDC Provider module.

The OIDC Provider module adds the `AccountDetail` entity into your Provider app. It uses the `MendixUserID` attribute of `AccountDetail` to populate the “sub” claim in the access token. For any other user claims you want to include in your access token, you need to create a microflow as described in [Configuration of the OIDC Provider to Propagate the End-User’s Identity with Custom Claims](#propagate-custom-claims), above.

There are two ways in OIDC Provider to get create accounts:

#### 7.3.1 When Using IAM Brokering

In this case, accounts which can be used by OIDC provider are synced from your IdP directly into the IAM broker application. In this case, an `AccountDetail` object is created for every account object when the end-user tries to login. This is automatically handled by code without any configuration.
    
This means that the access token will contain a "sub" claim which gets value from the `MendixUserID` attribute of the `AccountDetail` entity.
    
#### 7.3.2 Using the AccountDetail Page of the  OIDC Provider Module

This is the case where the OIDC Provider module can be used separately as an IDP without building an IAM structure.

Where there is no IAM brokering functionality, the administrator can create end-users (Accounts) using the AccountDetail page in the OIDC Provider module. This page creates `AccountDetail` objects which automatically create `Account` objects in the app to represent the AccountDetails as accounts.
