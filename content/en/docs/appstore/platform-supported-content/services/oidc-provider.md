---
title: "OIDC Provider"
url: /appstore/services/oidc-provider/
description: "Describes the configuration and usage of the OIDC Provider service, which is available in the Mendix Marketplace."
aliases:
    - /appstore/modules/oidc-provider/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/214681
---

## Introduction

 The [OIDC Provider](https://marketplace.mendix.com/link/component/214681) module enables developers to build Mendix applications that issue security tokens to other applications. In IAM (Identity and Access Management) terminology, this module acts as an OpenID Provider and an OAuth Authorization Server. Therefore, let us refer to such an application as an access provider application.

An access provider application can offer a Single Sign-On (SSO) experience for end-users of connected applications Additionally, it can issue Access Tokens for API consumption when APIs are secured with OAuth bearer tokens.
The service supports responsive browser-based applications and has been tested with applications that use the OIDC SSO module.

### Typical Usage Scenarios

The following are usage scenarios that would be achievable with the OIDC Provider module.

* SSO brokering
* SSO within multi-app Mendix solution
* Non-user specific API consumption
* Platform Extensions

For more information on how SSO brokering and SSO are implemented within a multi-app Mendix solution, see the [End-User Account Creation in the OIDC Provider](#end-user-account) section below.

#### SSO Brokering for Rapid Innovation{#brokering}

{{< figure src="/attachments/appstore/platform-supported-content/services/oidc-provider/brokering.png" class="no-border" >}}

The Mendix marketplace offers Single Sign-On (SSO) module, enabling your Mendix application to delegate end-user login to your Identity Providers (IdPs) such as Entra ID and Okta. However, for some organizations, implementing SSO for each Mendix application can cost more or slow down innovation. In such cases, an SSO broker between your IdP and your expanding portfolio of Mendix applications can offer an effective solution.

You can build a Mendix application that acts as a SSO Broker by using the OIDC SSO and the OIDC Provider modules. The OIDC SSO module authenticates end-users at your central IdP, while the OIDC Provider module enables your new app to act as an IdP (OpenID Provider) for your other Mendix applications. This means it is working as an SSO broker, catering for authentication and, optionally, for authorization. 

For more information on the concepts behind authorization, see the [About Authorization](#about-authorization) section below.

Your deployment pipeline (deployment agent) would be responsible for registering additional Mendix apps with the SSO broker. This process can be automated using client registration API provided by the OIDC Provider module.

#### SSO Within Multi-app Mendix Solution

Mendix Solution Vendors (MSVs) may build a multi-app solution that acts as a single application from the end-user perspective. This solution may have initially been a big monolith and is gradually refactored into multiple Mendix applications.

{{< figure src="/attachments/appstore/platform-supported-content/services/oidc-provider/SSO_within_multiapp.png" class="no-border" >}}

As an MSV, you probably want to hide the internal multi-application structure from your end-users. They prefer logging in once to your overall solution rather than separately to individual apps. The OIDC Provider module allows you to build a ‘Central Portal App' where your end-users login once and subsequently get a SSO experience when navigating to the various applications in the solution. This approach does not need an external third-party IdP to create such a SSO experience, as your Central Portal App acts as a lightweight solution for Customer Identity & Access Management (CIAM).

Instead of using local credentials in the Central Portal App, you may want to integrate your solution with an IdP. As an MSV, you probably also want to hide the internal multi-application structure from this IdP and have a single integration point. The Central Portal App can then act as an SSO broker, similar to the usage scenario described in the [SSO Brokering for rapid innovation](#brokering) section above.

#### Non-user Specific API Consumption 

{{< figure src="/attachments/appstore/platform-supported-content/services/oidc-provider/API_consumption.png" class="no-border" >}}

For API security, it is a best practice to use OAuth-tokens rather than API-keys. OAuth tokens are also known as bearer tokens, access tokens or simply JWTs. You have below two options for using OAuth tokens:

* Use human identities: An end-user logs in via SSO, allowing the client application to consume the API on behalf of your end-user, using the OAuth access token which is received from the SSO process. 

* Use a machine identity: Machine identities are also known as service accounts or application accounts. In this case, access tokens are used by the client application to consume the API on behalf of itself. In this scenario, the end-user is not relevant.

The OIDC Provider supports the so-called Client Credential grant. This means that, a client application can obtain a client access token by authenticating at the OIDC Provider and present that access token to the API it consumes. The OIDC SSO module (version 3.1.0 and above) helps you to implement security in your API. It validates the token either through token introspection at the OIDC Provider or by verifying its signature. Moreover, it creates a user that represents the client that is consuming the API.

#### Platform Extensions

Since its 10.12 release, Mendix Studio Pro is an [extensible IDE](https://www.mendix.com/blog/extensions-the-natural-evolution-of-the-developer-experience/) that allows you to build extensions to connect with other external tools. These external tools, or Extension Applications, offer services for platform extensions to consume, often as web applications with user interfaces and a set of “extension services” that provide web applications and APIs. With your extension, Studio Pro acts as a client that consumes these extension services. In this architecture, implementing a security mechanism for accessing the Extension Application is essential. Using OAuth/OpenID Connect (OIDC) SSO and OAuth Access Tokens is the current best practice for securing this access.

In this setup, developers need both a Mendix platform account and an account for your Extension Application. Your IDE extension will prompt the developer to log in to the Extension Web Application and use the tokens to access the Extension Web APIs.

{{< figure src="/attachments/appstore/platform-supported-content/services/oidc-provider/platform_extensions.png" class="no-border" >}}

If you are building your Extension Application as a Mendix app, you can use the [OIDC Provider](https://marketplace.mendix.com/link/component/214681) module to allow platform users to log in to your Extension Application, get OAuth Access Tokens, and use these tokens to access web APIs provided by your Mendix Extension Services. The [OIDC SSO](/appstore/modules/oidc/) module then helps your web API validate the received token. Since the OIDC protocol requires a static URI for your IDE extension, you can set this URI using the Static URI API (available from Mendix 10.16 onward).

### Features and Limitations

The OIDC Provider has the following features and limitations:

#### Features

* It allows for registration of Mendix apps via the client registration endpoint.
* It works/integrates with the platform-supported [OIDC SSO](/appstore/modules/oidc/) module.
* It provides a standard mechanism to communicate which user roles are assigned for the end-user in connected Mendix apps.
* It supports responsive web applications, using the common OAuth Authorization Code grant.
* Your apps can be registered as an OIDC client with the OIDC Provider using the client registration API or client configuration screen. The client registration API allows you to register your client automatically when using a CI/CD deployment pipeline.
* It publishes a well-known endpoint to communicate endpoints and other IdP characteristics to client applications. Mendix apps using the OIDC SSO module will consume this endpoint to perform actions like retrieving the keys needed to validate ID-tokens that they receive.
* It supports the OIDC ‘nonce’ parameter, PKCE, and multiple client authentication methods ( client_secret_post, client_secret_basic) as security features.

#### Limitations

* The hybrid resource owner password credential is not supported, although the OIDC Provider may contain some (rudimentary) implementation to support it.
* The OIDC Provider service ignores "email", "phone" and "profile" scope values (as specified by OIDC specs) when the client includes these in an authentication request. Instead, the OIDC Provider service will include user claims in an ID-token based on a custom microflow, regardless of the scopes in the request.
* Front channel and back-channel logout are implemented as alpha features.
* The module does not support `CustomRedirectLogicMicroflow` constant.

### Dependencies

The following modules need to be imported into your app:

* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation

### Protocol Adherence

This section provides clarity on the extent to which the OIDC Provider module supports the OIDC protocol. It is targeted at readers who are familiar with the OAuth and the OIDC protocol.

1. The OIDC Provider module supports the following Grant Types:

    * supports [Authorization grant type](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3) to represent the resource owner's authorization
    * supports [Client credentials grant type](https://datatracker.ietf.org/doc/html/rfc6749#section-4.4) to request an access token
    * supports the refresh grant as defined in [RFC 6749: The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749) and provides a refresh token only when requested with the `offline_access` scope, as recommended by [OpenID Connect Core](https://openid.net/specs/openid-connect-core-1_0.html#OfflineAccess)

2. The OIDC Provider module supports the following Endpoints:

    * [`userInfo_endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)
    * [`introspection_endpoint`](https://datatracker.ietf.org/doc/html/rfc7662)
    * [`authorization_endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitAuthorizationEndpoint)
    * [`token_endpoint`](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitAuthorizationEndpoint)
    * [`issuer`](https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier)
    * [`jwks_uri`](https://openid.net/specs/openid-connect-core-1_0.html#RotateSigKeys)
    * `/register` endpoint, based on [RFC 7591: OAuth 2.0 Dynamic Client Registration Protocol](https://datatracker.ietf.org/doc/html/rfc7591) and [Final: OpenID Connect Dynamic Client Registration](https://openid.net/specs/openid-connect-registration-1_0.html). Only the specified client attributes are supported. The `/register` endpoint is secured with a registration access token using a mechanism that deviates from specifications. For more details, see the [Automatic Client Registration](#automatic-client-registration) section below.

## Installation

To install the OIDC Provider service in your IAM broker app, you need to import the following into your app:

* [OIDC Provider](https://marketplace.mendix.com/link/component/214681)
* [Community Commons](https://marketplace.mendix.com/link/component/170)
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69)
* [Administration](https://marketplace.mendix.com/link/component/23513)

{{% alert color="info" %}}
To develop your IAM broker app more quickly, consider using the [Access Provider Template](https://marketplace.mendix.com/link/component/229790). This template facilitates the setup and integration of OIDC Provider and OIDC SSO modules, including all necessary dependencies. For more information, refer to the documentation tab of the Access Provider Template Marketplace module.
{{% /alert %}}

{{% alert color="info" %}}
Starting from version 3.0.0, the length of the `client_id` and `client_secret` attributes has been reduced from unlimited to 255 characters. Before upgrading the module, make sure to migrate your data.
{{% /alert %}}

The service then needs to be configured as described below.

## Configuring IAM Broker

The steps in this section set up the app which is running as an IAM Broker using the OIDC Provider service.

### Configure Security

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

### Configure App Modules

Every end-user that is known in Admin module also needs to be known in the OIDC Provider service. Access has to be given to allow an OIDCProvider.AccountDetail record to be created for every Administration.Account record when the end-user signs in. This can be achieved by the following steps:

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

### Configure OIDC Provider

The rest of the configuration can be performed through the app.

1. Deploy and run the app.
1. Login as an administrator.
1. Use the **Accounts** navigation item.
1. Click **New** and create the user account (or accounts) you need in your IAM Broker — for example, a new active account with the **User role** set to **User**.
1. Use the **OpenID Connect** navigation item.
1. Open the **Server Keys** tab.
1. Click **New Key**.
1. Open the **Scopes** tab.
1. For the authorization code grant, create **New** scopes, enter `openid` as the **Name**, and set the **Scope type** to **Standard**. You need to use your own value in the **Name** field for the client credential grant type.

    This page sets up a single list of all the scopes that are known to the OIDC Provider service. For each client, you can then choose the scopes used by that specific client. See [Configuring Centralized Authorization](#configuring-authorization) for more information on what scopes you should set.

1. Open the **Clients** tab.
1. Click **New Client Registration**.

    You can register a new client (an app using the OIDC SSO module for sign in which identifies this app as its IdP) in one of two ways. Follow one of the sets of instructions below:

#### Automatic Client Registration{#automatic-client-registration}

The provider offers a `/register` endpoint for registering clients through an API call. This endpoint is secured with a registration access token, which can be obtained by an Admin user via the Administration UI in the OIDC Provider module. The token is valid for ten minutes and can be used only once.

To check that this works, you will need a tool for testing APIs (such as [Postman](https://www.postman.com/)) which allows you to execute HTTP commands to the Registration URI of your IdP.

1. Select **Automatic Registration**.
1. Take a copy of the **Bearer Registration Access token** and the **Registration URI**.
1. In your API testing tool, set up the following:
    * a **POST** command to the **Registration URI** with the endpoint `/oidc/register`, for example, for a locally-deployed app, `http://localhost:8080/oidc/register`
    * an HTTP header with **Key** = "Authorization" and **Value** = **Bearer Registration Access token**
    * an HTTP request body with the following format (for a Client `ClientID` which is running on host and port `localhost:8081`):
1. For the `grant_types`: `authorization_code` and `refresh token`

    ```json
    {
        "client_id" : "ClientID",
        "client_name" : "ClientName",
        "client_secret" : "ClientSecret",
        "redirect_uris" : [ "http://localhost:8081/oauth/v2/callback" ],
        "post_logout_redirect_uris" : ["http://localhost:8081/logout"],
        "grant_types": [ "authorization_code" , "refresh_token"],
        "scope": "openid offline_access" 
    }
    ```

    Send the command. If it is working, you should get a response which has a body which resembles the example below:

    ```json
    {
        "post_logout_redirect_uris": [ "http://localhost:8081/logout" ],
        "grant_types": [ "authorization_code" , "refresh_token" ],
        "client_secret_expires_at": 0,
        "scope": "User",
        "client_secret": "ClientSecret",
        "redirect_uris": [ "http://localhost:8081/oauth/v2/callback" ],
        "client_id_issued_at": 1675940602,
        "client_name": "ClientName",
        "client_id": "ClientID"
    }
    ```

1. For the `grant_types`: `client_credentials`

    ```json
    {
        "client_id" : "DemoClient",
        "client_name" : "DemoClient",
        "client_secret" : "c46591bd-8fae-4f90-9efb-b5973bea04df",
        "grant_types": [ "client_credentials" ],
        "scope": "openid" 
    }
    ```

    Send the command. If it is working, you should get a response which has a body which resembles the example below:

    ```json
    {
        "grant_types": [ "client_credentials" ],
        "client_secret_expires_at": 0,
        "scope": "openid",
        "client_secret": "c46591bd-8fae-4f90-9efb-b5973bea04df",
        "client_id_issued_at": 1716198475,
        "client_name": "DemoClient",
        "client_id": "DemoClient"
    }
    ```

#### Manual Client Registration

If you cannot use automatic registration, you can register the client manually.

1. Select **Manual Registration**. There are below two options **To support different types of grant-type**.

    * Allow Client-Credentials grant type
    * Allow Authorization-Code grant type

2. Select any option and add the following information:

    * **Client Name** – a name for this client so that it is easy to identify
    * **Client ID** – a unique string which identifies this client
    * **Alias** – usually the same as *Client Name* but can be different
    * **Client Secret** – the client password to allow the client to authenticate to the OIDC Provider service

    Additionally, you need to add below information if you select **Allow Authorization-Code grant type**

    * **Post Logout redirect URI** – the fully qualified logout url, `<appurl>/logout` — for example, for testing a local OIDC SSO app on port `8081`, `http://localhost:8081/logout`
    * **Redirect URI** – Redirects support both URIs with and without a port. For example, `http://localhost/oauth/v2/callback` and `http://localhost:8081/oauth/v2/callback` for testing a local OIDC SSO app on port `8081`.
    * **Back channel logout session support**
    * **Front channel Logout URI**

3. Select the **Allow Token Refresh grant type** option to enable refresh token generation. This option is visible only when the **Allow Authorization-Code grant type** is selected. When you want your provider app to generate refresh tokens to your client Mendix app, ensure the following:

    1. Both **Allow Token Refresh grant type** and **Allow Authorization-Code grant type** options are selected.
    2. The `offline_access` scope is selected.

#### Configuring Centralized Authorization{#configuring-authorization}

This section applies only when your client is using the authorization code grant. There are two alternatives for [centralized authorization](#centralized-auth). You can use scopes, or a custom user claim.

Choose one of the two options, below.

Whichever option you choose, you will need to use [Custom User Provisioning](/appstore/modules/oidc/#custom-provisioning) in the OIDC SSO module of your client app to assign the correct user roles to the end-user.

##### Configuration of the OIDC Provider for Centralized Authorization with Scopes{#configure-scopes}

 When you follow the recommended approach for [centralized authorization](#centralized-auth) using OAuth scopes, the OIDC Provider needs to know which user roles have been implemented in your Mendix apps, so the client can assign those user roles.

The scope values (user roles) that you assign to the authenticated user in the OIDC Provider are sent to your app in both the ID-token and Access Token. Communicating authorization via Access Token is the standard approach when using OAuth. If your client app consumes APIs, it can forward the Access Token as a bearer token in the http authorization header in such API calls.

To return requested scopes to your client app, you need to perform the following steps to configure the OIDC Provider:

1. Open the **Scopes** tab for the client you want to configure
1. Create a new scope for every user role which is implemented in your client apps. You can identify the user role in one of two ways:

    1. Use the **Name** as the user role in your client app.
    1. From version 1.1.0 you can also use the UUID of the user role in your client app.

        The benefit of this second approach is that it avoids ‘scope collision’. In other words, you avoid having confusion between user roles with the same name but in different apps.

    If your client app consumes APIs and wants to get access using the Access Token from the OIDC Provider, you may want to configure additional scope values, as required by those APIs.
{{% alert color="warning" %}}
Do not create scopes with the same name as standard scopes (as defined in the [OIDC specs](https://openid.net/specs/openid-connect-core-1_0.html#ScopeClaims)), for example:

* openid - apps will use this scope value to request identity propagation from the OIDC Provider by means of an ID-token.
* email
* profile
* phone
{{% /alert %}}
{{% alert color="info" %}}
The scopes you configure are not added automatically to the "scopes_supported" attribute on the OIDC Provider’s well-known endpoint. You must manually configure the scope value in your client app to be able to request it.
{{% /alert %}}

1. Add logic to the OIDC Provider to assign user roles (custom scope values) based on your preferred business logic.

    Modify the `OpenIDConnectProvider.SUB_CustomScope` microflow to assign the scope value (user role) based on your authorization business logic. You would typically use the following inputs to decide whether to return a requested scope:

    * `RegisteredClient` – this identifies the client app that sends the login request and associated user role/scope request
    * `Account` – defines the user who tries login
    * `AllowedScopeList` – the scopes associated with the client in the OIDC Provider
    * `scopesListFromRequest` – the scopes/user roles which the client requests

    The Microflow returns the scope (or scopes) as a String containing space-separated values. If any of the requested scopes are not associated with the client then the microflow returns an empty value as output.

    {{% alert color="info" %}}The default implementation of `OpenIDConnectProvider.SUB_CustomScope` grants any requested scope provided it is associated with client (your Mendix app). It does not do any validation of the end user.{{% /alert %}}

1. In the connected apps, select the following microflows in the [OIDC SSO](/appstore/modules/oidc/) module to let you app apply the assigned user roles to the end-users:

    * `UserProvisioning_StandardOIDC` as the user provisioning microflow

        This is available in version 2.3.0 and above of the OIDC SSO module. For versions below this, you will need to write a custom user provisioning microflow.

    * `OIDC.Default_OIDCProvider_TokenProcessing_CustomATP` as the **custom AccessToken processing microflow** for access token parsing

##### Configuration of the OIDC Provider to Propagate the End-User’s Identity with Custom Claims{#propagate-custom-claims}

Typically you want to propagate the end-user’s identity from the OIDC Provider to your Mendix app. Although the basic user attributes like ‘email address’ and ‘user name’ may be sufficient, your app may need more information about the end-user. User attributes like ‘department’ or ‘job-title’ may be used for business logic, including decentralized authorization.

To pass this additional information, you need to create custom claims. You can do this as follows:

1. Create a microflow which returns a value to the claim.

    From version 1.1.0, you can also pass an object from the Domain Model as the custom claim in an ID-token. To do this, your microflow should return the object.

    The ID-token will be a nested JSON structure with the name of the object as the key and a list of attribute names of your object as the keys and the attribute values as the values.

    ```json
    "MyObjectName": {
        "MyObjectAttribute1Name" : "MyObjectAttribute1Value",
        "MyObjectAttribute2Name" : "MyObjectAttribute2Value"
    }
    ```

    "MyObjectName" will be used as the claim name. See note about how to name custom claims in the [Propagate Custom Claims](#propagate-custom-claims) section, above.

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

### Configure Authentication with Login Location Constant

This section applies only when your client is using the authorization code grant.

Consider a scenario, where you build an app using the [OIDC Provider](https://marketplace.mendix.com/link/component/214681) service. You can call this app an OIDC Provider app or Provider app. Other apps using the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module redirect end-users to your Provider app for authentication. You can choose how your Provider app handles the authentication process.
The **LoginLocation** is a constant in the OIDC Provider service that controls where end-users are authenticated. The default value is a local sign in using a username and password as shown below:

{{< figure src="/attachments/appstore/platform-supported-content/services/oidc-provider/Basic_Username_Password.png" class="no-border" >}}

However, if you want the Provider app to act as an IAM broker, you need to redirect the authorization request within your Provider app to the endpoint of the local SSO module you choose to use. To do so, perform the steps below:

1. Set the **LoginLocation** to the login URL of the SSO module.
1. Include the return parameter name.
For example, `SSO/Login?cont=` is the login URL and `cont` is the return parameter name.

## Configuring an OIDC Client

You need to configure the OIDC SSO module in your app which is using the IAM broker. Perform the following steps to configure the OIDC SSO module in your client app, and test that it is correctly communicating with the IAM broker.

1. Create an app containing the OIDC SSO module as described in [OIDC SSO](/appstore/modules/oidc/).

    {{% alert color="info" %}}If you are testing locally, you will need to run your OIDC client in a separate copy of Studio Pro and on a different port from the IAM broker.
    In the [Server](/refguide/configuration/#server) tab of the active configuration of your client app, change the **Runtime port** and **Admin port** to be different from those of your IAM broker app. For example, if your IAM broker is running using `8080` and `8090`, you could use `8081` and `8091` respectively.
    {{% /alert %}}

    1. When you get to [IdP Configuration](/appstore/modules/oidc/#idpconfiguration), you already have the values from the previous section.

    1. In the [Runtime Configuration of Your IdP at Your App](/appstore/modules/oidc/#runtime-idp-app) section, add a client configuration and use the following values:

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

## Token Formats for Non-custom Claims

### Non-custom Claims in Access Token

The format of non-custom claims in the access token is as follows:

```json
{
    "aud": "d99a49b9-95d7-410e-b79a",
    "sub": "T6hOS9jBEBMqk3Dk",
    "nbf": 1681969726,
    "scope": "",
    "iss": "http://localhost:8080/",
    "name": "test",
    "exp": 1682056126,
    "iat": 1681969726,
    "client_id": "d99a49b9-95d7-410e-b79a"
}
```

In the version 3.0.0 and above of the OIDC Provider module, a new `client_id` attribute has been added.

### Non-custom Claims in ID-token

The format of non-custom claims in the ID-token is as follows:

```json
{
    "com.mendix.user.language": "en_US",
    "sub": "T6hOS9jBEBMqk3Dk",
    "iss": "http://localhost:8080/",
    "com.mendix.user.entity": "Administration.Account",
    "nonce": "k5CDLkTE7Q61Q0cUTSgy",
    "com.mendix.user.attributes": {
        "Email": "janedoe@example.com",
        "FullName": "Jane Doe",
        "IsLocalUser": "true"
    },
    "aud": "d99a49b9-95d7-410e-b79a",
    "scope": "",
    "name": "Jane Doe",
    "exp": 1681970318,
    "email":"janedoe@example.com",
    "com.mendix.user.timezone": "",
    "iat": 1681969718,
    "com.mendix.user.roles": [
        "User"
    ]
    "username": "Jane Doe"
}
```

In versions of OIDC Provider below 1.1.0, the following values are not included in the ID-token claim:

* "email"
* "name"
* "username"

In versions of the OIDC Provider above 2.0.0, the sub value was changed from an Autonumber to a UUID.

## Deleting Expired Access Tokens

The `CleanupOldCodes` deletes expired access tokens from the database. The scheduler interval is set to one hour, and you can adjust it in the **USE_ME** folder of the **OpenIDConnectProvider** module according to your requirements. For more information, see [Scheduled Events](/refguide/scheduled-events/).

## Troubleshooting

### Infinite Loop of Redirects

The OIDC Provider service sets a cookie as a means to persist the session in the user’s browser. If the cookie is not properly set, this may lead to problems. For example, when the OIDC Provider service is used to build an IAM Broker, no session is established and the broker may initiate a new session at the upstream IdP, which results in an ‘infinite loop’ of redirects via the user’s browser.
To ensure the cookie is properly set, the runtime setting com.mendix.core.SameSiteCookies must have value None. See [Environment Details](/developerportal/deploy/environments-details/#samesite) for more information how to set the correct value for SameSite runtime setting. Note that the default value for this setting changed in [Mendix 8.11](/releasenotes/studio-pro/8.11/).

## About Authorization{#about-authorization}

When you are building Mendix apps you need to make two architectural decisions in the area of end-user access:

* Which component in the application landscape will authenticate end-users
* Which component in the application landscape will authorize end-users to use a the user roles of your app

When you use the OIDC Provider service, you have already taken the decision that your app will delegate user authentication to the app you build with the OIDC Provider service.
With respect to authorization that leaves you, again, with two options:

* Fully decentralized authorization
* Centralized authorization

These two options are described below.

### Fully Decentralized Authorization

With fully decentralized authorization, you will typically want to propagate the identity of the end-user to your app and the app can subsequently make an authorization decision using some logic in your app. The authorization business logic in your app may need information about the authenticated end-user. In a business application this could be end-user attributes like ‘department’ and/or ‘job title’.

The OIDC Provider service allows you to pass user attributes in the ID-tokens that are sent from the OIDC Provider to your app. You can define ‘custom’ claims, so the user attributes that can be communicated are not restricted to a pre-defined set.

### Centralized Authorization {#centralized-auth}

With centralized authorization your app delegates authorization decisions to a central component which then communicates that decision to your app. Your app then enforces the authorization decision by applying one or more user roles to the end-user, but does not need any business logic to decide which user roles to apply.

The OIDC Provider service is one such central component and you can communicate the authorization decision made by the OIDC Provider service in 2 ways:

* using the concept of OAuth scopes (recommended)
* using a custom user claim

Using OAuth scopes is the recommended approach since it is the standard OAuth solution. With Mendix, we advise you to think of an app’s user roles as being the same as OAuth scope values.  By adhering to this logic, you can develop apps with any user roles without having to decide and agree on custom attributes. You can customize the OIDC SSO module with microflows which parse the tokens from the OIDC Provider service and apply user roles to enforce the authorization indicated in the token.

### End-User Account Creation in the OIDC Provider{#end-user-account}

Since the OIDC Provider issues access tokens for end-users that are logged in, it needs to record end-users as objects in the app which contains the OIDC Provider service.

The OIDC Provider service adds the `AccountDetail` entity into your Provider app. It uses the `MendixUserID` attribute of `AccountDetail` to populate the "sub" claim in the access token. For any other user claims you want to include in your access token, you need to create a microflow as described in [Configuration of the OIDC Provider to Propagate the End-User’s Identity with Custom Claims](#propagate-custom-claims), above.

There are two ways in OIDC Provider to get create accounts:

#### When Using IAM Brokering

In this case, accounts which can be used by OIDC provider are synced from your IdP directly into the IAM broker application. In this case, an `AccountDetail` object is created for every account object when the end-user tries to login. This is automatically handled by code without any configuration.

This means that the access token will contain a "sub" claim which gets value from the `MendixUserID` attribute of the `AccountDetail` entity.

#### Using the AccountDetail Page of the OIDC Provider service

This is the case where the OIDC Provider service can be used separately as an IDP without building an IAM structure.

Where there is no IAM brokering functionality, the administrator can create end-users (Accounts) using the AccountDetail page in the OIDC Provider service. This page creates `AccountDetail` objects which automatically create `Account` objects in the app to represent the AccountDetails as accounts.

### Structure of ID and Access Tokens

For situations where the Centralized Authorization concept is used (see [Centralized Authorization](#centralized-auth), above), the OIDC Provider service uses the ‘scope’ claim in both the ID and Access token to communicate assigned user roles to connected Mendix apps. The scope parameter one of the following the formats:

* `mx:app:userrole:{user-role-UUID}`, where `{user-role-UUID}` is the UUID of the role in the connected app (version 1.1.0 and above)
* `{user-role}`, where `{user-role}` is the name of the user role

These are set up in [Configuration of the OIDC Provider for Centralized Authorization with Scopes](#configure-scopes). Multiple scopes will be separated by spaces.

For example: `mx:app:userrole:53f5d6fa-6da9-4a71-b011-454ec052cce8 mx:app:userrole:6c5ea333-799c-4438-96fc-2528ced788e4`

