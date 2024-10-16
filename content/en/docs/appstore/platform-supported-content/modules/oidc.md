---
title: "OIDC SSO"
url: /appstore/modules/oidc/
description: "Describes the configuration and usage of the OIDC SSO module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/120371
---

## Introduction

The [OpenID Connect (OIDC) SSO](https://marketplace.mendix.com/link/component/120371) module allows end-users of your Mendix app to login via Single Sign-on (SSO) using the OIDC protocol.  Besides delegating end-user authentication (OIDC), your app can also delegate authorization (OAuth).

OIDC is an extension of OAuth2 that propagates the end-user's identity to your application.

{{% alert color="warning" %}}
This OIDC SSO module works with Mendix 9.0 and above. If you are using a previous version of Mendix, you can use the community-supported module [OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529).

If you are using Mendix 9.20 and above, ensure you are using version 2.0.0 or above of the OIDC SSO module. For Mendix 10.0 and above, you need to use version 2.2.0 or above of the OIDC SSO module.
{{% /alert %}}

{{% alert color="warning" %}}
If you are migrating to OIDC module version 3.0.0 and above, you need to include the [UserCommons](https://marketplace.mendix.com/link/component/223053) module as a dependency and configure your app to run the startup microflow (OIDC.Startup) in the OIDC module as part of the after-startup microflow. For the module version 3.1.0 and above, replace the OIDC.Startup with OIDC.ASU_OIDC_Startup as part of after-startup microflow. For more information, see the [Upgrading the OIDC SSO Module](#upgrade) section below.
{{% /alert %}}

{{% alert color="info" %}}
The OIDC SSO module works with both web/responsive applications and progressive web apps (PWA).
{{% /alert %}}

Alternatives to using OIDC SSO for managing single sign-on are:

* [SAML](https://marketplace.mendix.com/link/component/1174) – if your IdP supports the SAML protocol but not the OIDC protocol
* [Mendix SSO](https://marketplace.mendix.com/link/component/111349) – if your app is targeted at end-users that have signed up to the Mendix platform

### Typical Usage Scenarios

* **B2C apps:** Your app is aimed at consumers who have an identity at a 'social IdP' which uses OIDC, such as Google. In this case your app will only delegate the authentication to the IdP, no further user information is available to the app.
* **B2E app:** Your app is aimed at your company's employees and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IdP) that supports the OIDC protocol. In this case your app may have its own logic to assign user roles or you may use authorization information from your IdP as provided to your app using an access token.
* **API consumption:** If your app makes calls to APIs of other services on behalf of your end-user, you can use the access token obtained via the OIDC SSO module. This scenario is not supported when using SAML SSO. This makes the OIDC SSO module suitable for Mendix customers using Mendix Catalog.
* **Authorizing access to a Mendix back-end app:**  If you want to secure APIs in Mendix back-end apps using an access token, your API can use an access token passed by the calling app in the authorization header. If the access token is a JWT, your app can use the user and/or the user’s authorizations to assign user roles based on the claims in the access token JWT.
* **Xcelerator apps:** Your Siemens Xcelerator app is designed to be integrated with Siemens' SAM IdP.  The Siemens SAM IdP supports the OIDC protocol and allows your app to delegate both authentication (login) and authorization (roles).
* **Works with Responsive web app and PWA:** OIDC SSO module supports both responsive web app and progressive web app (PWA). If you are building a native mobile app, you need to use [Mobile SSO](https://marketplace.mendix.com/link/component/223516) module for your app. For more information, see [Building a Responsive Web App](/quickstarts/responsive-web-app/), [Progressive Web App](/refguide/mobile/introduction-to-mobile-technologies/progressive-web-app/), and [Native Mobile](/refguide/mobile/introduction-to-mobile-technologies/native-mobile/).
* **API security:** If your app exposes APIs, such as an OData API, it is best security practice to use OAuth Access Tokens (also known as bearer tokens or JWT tokens) instead of Basic Authentication or API keys. You can use the OIDC SSO module to validate these Access Tokens and check if they have right authorization (i.e., the right OAuth scopes) for accessing your API endpoint. For example, you may want to allow a specific user or client to perform a GET (read) request but not a POST or PATCH (write) request. The OIDC module supports processing Access Tokens obtained via both SSO and the OAuth client credential grant.

### Features and Limitations

#### Features

The OIDC SSO module supports the following features:

1. IdP Integration Capabilities:

    * Supports SSO and API-security.
    * Can be used with OIDC/OAuth-compatible IdPs, such as AWS Cognito, Google, Salesforce, Apple, Okta, Ping, Microsoft's Entra ID (formerly known as Azure AD), and SAP Cloud Identity Services. Moreover, the module also works with the [OIDC Provider](https://marketplace.mendix.com/link/component/214681) module.
    * Comes with helper microflows (DELETE, GET, PATCH, POST, and PUT) which call an API with a valid token (and automate the token refresh process).
    * Easy configuration, by leveraging the so-called well-known discovery endpoint at your IdP.
        * For example, PKCE will be used automatically if it is detected.
    * Configuration can be controlled through constants set during your deployment (version 2.3.0 and above).
    * Supports multiple OIDC IdPs by allowing configuration of user provisioning and access token parsing microflows per IdP.
    * Supports Authentication Context Class Reference (ACR) to allow your app to suggest the desired method or level of authentication for user login to the Identity Provider (IdP) (version 2.3.0 and above).
    * Supports responsive web applications, also known as browser based applications.
    * Works with the Mendix DeepLink module.
    * Supports user provisioning to custom user entities; you can map claims onto attributes of an entity which is a specialization of the `System.User` entity.

2. Configuration Experience Features:

    * Easy configuration, by leveraging the so-called well-known discovery endpoint at your IdP. The IdP's well-known endpoint also indicates which user claims the IdP may provide during single sign-on. The module reads this information, so the developer does not need to configure it. The available claims can be used in custom provisioning microflow, as described in the section [Custom User Provisioning Using a Microflow.](#custom-provisioning-mf)
        * For example, PKCE will be used automatically if it is detected.
    * Configuration can be controlled through constants set during your deployment (version 2.3.0 and above).
    * Comes with default user provisioning microflow that works with Entra ID; there you may need to build a custom user provisioning flow.
    * User provisioning microflows can be used from any other modules in your app. They do not need to be exclusively a part of the OIDC module.

3. Developer Experience Features:

    * Built primarily in standard Mendix components (minimal Java) to allow for easy customization and ongoing development.

#### OIDC Protocol Adherence

For readers with more knowledge of the OAuth and OIDC protocol:

* Helps you build an OAuth client that initiates the Authorization Code grant flow to sign the end-user in via the browser
* Uses the `nonce` parameter to defend against replay attacks
* Validates ID-token signatures
* Uses the Proof Key for Code Exchange (PKCE – pronounced “pixie") security enhancement as per RFC 7636. If your IdP’s well-known endpoint indicates “S256” as value for “code_challenge_methods_supported”, the OIDC Module will automatically apply the PKCE feature. PKCE can be seen as a security add-on to the original OAuth protocol. It is generally recommended to use this feature to be better protected against hackers who try to get access to your app.
* When authenticating APIs, it validates access tokens in one of two ways:

    * If the IdP supports token introspection, exposing the `/introspect` endpoint of the IdP, the OIDC module will introspect the access token to see if it is valid.
    * If the IdP does not support token introspection, the OIDC module will assume the access token is a JWT and will validate its signature using the IdP's public key that is published on the `/jwks` endpoint of the IdP.

    For signing into the app, the OIDC SSO module will not use token introspection and will always validate against the published `jwks` endpoint.

* Stores an access token for each end-user that can be used to make API calls on their behalf
* Can be configured to use either client_secret_post or client_secret_basic as the client authentication method. Both make use of the client-id and client-secret as configured at the IdP
* Supports ACR in authorization requests. The ACR in OIDC protocol is used to indicate the desired level of assurance or strength of authentication during the authentication process. It allows the relying party (your application) to request a specific level of authentication assurance from the identity provider (IdP) (version 2.3.0 and above)
* Supports response_mode=query and response_mode=form_post
* Helps you implement an OAuth Resource Server that receives an Access Token which is obtained by a client via either Authorization Code grant or Client Credential grant.
* When the OIDC SSO module secures an API with the Client Credential grant, the `sub` as claim (which contains either user-id or client-id) should always be available in the access token as per [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068#name-data-structure).  If it is not included, the module will look for `client_id`. To be compliant with Microsoft's Entra ID and Okta, it will use `app_id` or `cid` as alternatives to `client_id`. Any of these client identifiers are used to create a user in the Mendix application, allowing the Mendix security model to apply not only to users (human identities) but also to clients (machine identities).

#### Limitations

The OIDC SSO module does not yet support the following:

* Requesting claims via the 'claims' query parameter, as per OIDC specs
* Other client authentication methods such as using asymmetric keys (“private_key_jwt”)
* Delegating authorization using OAuth-scopes; this currently requires a custom microflow for parsing of Access Tokens
* Mobile apps
* Controlling the configuration using constants requires an app restart

The OIDC SSO module also has the following limitations:

* If an end-user accesses your app via a deeplink, the end-user is not already signed in, and you have configured multiple IdPs, only one IdP can be used to sign the end-user in.
* If you use both the [SAML](/appstore/modules/saml/) module and the OIDC SSO module in the same app, each end-user can only authenticate using one IdP.
* If OIDC SSO is used for API security, it does not validate the value of the "aud" claim, as suggested by [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068#section-4). Customers should prevent cross-JWT confusion by using unique scope values.
* The Admin screens have separate tabs for configuring clients that use the Client Credential grant for API security and for situations where your app is used for both SSO and API security. If the first version of your app uses only OIDC SSO for API security and you want to introduce SSO in a later version, the IdP configuration needs to be re-entered on the other tab.

## Dependencies

The OIDC module requires your app to be using Mendix 9.0 or above.

It requires the following Marketplace modules to be included in your app:

* [Encryption](https://marketplace.mendix.com/link/component/1011) – see [Encryption](/appstore/modules/encryption/) documentation
* [Community Commons](https://marketplace.mendix.com/link/component/170) – see [Community Commons](/appstore/modules/community-commons-function-library/) documentation
* [Nanoflow Commons](https://marketplace.mendix.com/link/component/109515) – see [Nanoflow Commons](/appstore/modules/nanoflow-commons/) documentation
* [Mx Model reflection](https://marketplace.mendix.com/link/component/69) – see [Mx Model Reflection](/appstore/modules/model-reflection/) documentation
* [User Commons](https://marketplace.mendix.com/link/component/223053) (for version 3.0.0 and above)

Versions below 2.3.0 also require [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513) – see [Native Mobile Resources](/appstore/modules/native-mobile-resources/) documentation

## Installation

If you are migrating from the community edition of the module ([OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529)), please refer to the [migration documentation](#migration) below.

1. [Add the OIDC SSO module into your app](/appstore/use-content/).
2. Add the necessary dependencies (as listed in the previous section) from the Marketplace, if they are not already included in your app.
3. Add the snippet **Snip_Configuration** in the **USE_ME** > **1. Configuration** folder of the OIDC SSO module to a page that is accessible to admin end-users of your app.
4. Replace all the layouts that end in `_REPLACEME` used in pages in this module with layouts from your own project. The layouts are in the **Implementation** > **Layouts** folder of the module. Use the [Find Usages](/refguide/find-and-find-advanced/#find-usages) command to find where they are used.
5. Follow the instructions in [Design-time App configuration](#app-configuration) to set up your app.

### Installing Mx Model Reflection{#mxmodelreflection}

Once the Mx Model Reflection module has been imported into your app, you need to configure it.

1. In the **App Explorer**, add the page **MxObjects_Overview** from the **MxModelReflection** folder to the Navigation menu.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/add-model-reflection.png" class="no-border" >}}

2. Run the app and click the newly-added navigation link to use Mx Model Reflection.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/model-reflection-button.png" class="no-border" >}}

3. Select the modules **MxModelReflection** and **OIDC**  and click **Click to refresh** for both the modules and the entities. Starting from version 3.0.0 of the OIDC SSO module, additionally select and refresh the **Administration** and **System** modules in the **MxModelReflection.MxObjects_Overview** page to configure User Provisioning.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/select_modules.png" class="no-border" >}}

### Migrating from Community Edition to Platform Edition{#migration}

If you already have the [OpenIDConnect Single Sign-on (OIDC, OAuth2, SSO)](https://marketplace.mendix.com/link/component/117529) (community edition) in your module, you can migrate to this, platform supported, version by following the instruction below.

#### Upgrading from Mendix 8 to Mendix 9

To migrate from Mendix 8.18.x to Mendix 9.8.1 or above, follow the steps below:

1. Open your app in the latest patch version of Mendix 8.18 and allow it to be upgraded.
2. Save the upgraded version of the app.
3. Review the guidance in [Moving from Mendix Studio Pro 8 to 9](/refguide9/moving-from-8-to-9/).
4. Open your app in Mendix 9.8.1 or above and allow it to be upgraded.
5. Import the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) Platform Edition module from the Marketplace.
6. Import the [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module from the Marketplace.
7. In the dialog **Security** > **User roles**, select *Administrator* and click **Edit**.
8. Enable `MxModelReflection.ModelAdministrator` and close the dialog boxes with the **OK** button.
9. You can see some errors in the **Errors** tab. To resolve these errors, import the [Atlas Core](https://marketplace.mendix.com/link/component/117187) module from the Marketplace.
10. If you still have errors, review the information in [Migrate From Atlas 2 To Atlas 3](/refguide9/moving-from-atlas-2-to-3/) and use it to resolve the issues.
11. Delete the Atlas_UI_Resources module from your app. Your app is now using themes from the Atlas Core Module.
12. Update the [Administration module](https://marketplace.mendix.com/link/component/23513) and [MendixSSO](https://marketplace.mendix.com/link/component/111349) modules to the latest version by importing them from the Marketplace.

#### Replacing Community Edition with Platform Edition on Mendix 9

If your app is already developed using Mendix 9 or above, but uses the community edition of the OIDC SSO module, you can just do the following:

1. Import the OIDC platform edition module from the Marketplace.
2. Import the [Mx Model Reflection](https://marketplace.mendix.com/link/component/69) module from the Marketplace.

### Upgrading the OIDC SSO Module{#upgrade}

This section provides an overview of updates for the OIDC SSO module across different versions. It includes new dependencies, snippet replacements, and microflow renaming to ensure a smooth transition while migrating to higher module versions.

| Mendix Version | OIDC SSO Module Version | Important Migration Changes | Additional Information|
| --- | --- | --- | --- |
| 9.24.2 and above | 3.0.0 (migrating to 3.0.0 and above) | -Include [UserCommons](https://marketplace.mendix.com/link/component/223053) module as a dependency <br> -Set `OIDC.Startup` microflow as part of the after-startup microflow | -New UserCommons module <br> -Assign UserProvisioning for existing IdP configurations |
| 9.24.2 and above | 3.0.1 | Use `Snip_Login_Button` snippet instead of `Snip_Login_Automatic` | `Snip_Login_Automatic` snippet removed from module |
| 9.24.2 and above | 3.1.0 | Set `OIDC.ASU_OIDC_Startup` microflow as part of the after-startup microflow | `OIDC.Startup` microflow renamed to `OIDC.ASU_OIDC_Startup` |

## Design-time App Configuration{#app-configuration}

This section shows you how to configure your app to use OIDC for SSO.

{{% alert color="warning" %}}
If you are using OIDC module version 3.1.0 and above, you need to configure your app to run the startup microflow (`OIDC.ASU_OIDC_Startup`) in the OIDC module as part of the after-startup microflow.
{{% /alert %}}

### Configuring Roles

Ensure that you have allocated the following user roles to the OIDC module and UserCommons (in version 2.4.0 and above) roles:

| User Role | OIDC Module Role |
| --- | --- |
| Administrator | OIDC.Administrator, UserCommons.Administrator |
| Anonymous | OIDC.Anonymous |
| User | OIDC.User |

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/user-roles.png" class="no-border" >}}

{{% alert color="info" %}}
You may have to add the *Anonymous* user role if it does not exist already.
{{% /alert %}}

### Allowing Anonymous Users (Optional)

The OIDC module supports multiple OIDC/OAuth-compatible IdPs. Optionally, if you allow your end-users to choose from multiple IdPs, or to have the option to log back into the app after they have logged out, you will need to give them access to the app before they have signed in to the app. Therefore, you need to give anonymous users access to your app.

In the **Anonymous** tab of the app security settings, do the following:

1. Set **Allow anonymous users** to **Yes**
2. Select *Anonymous* as the **Anonymous user role**

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/anonymous-user.png" class="no-border" >}}

{{% alert color="info" %}}
If a single Identity Provider (IdP) is configured in the OIDC SSO module, end-users can be authenticated via the URL `https://<your-app-url>/oauth/v2/login`.
{{% /alert %}}

### Configuring Navigation{#configure-nav}

The OIDC SSO module works without a specified sign-in page. Therefore, in the navigation section of your app, set **Sign-in page** (in the **Authentication** section) to *none*.

If you are configuring navigation for web/responsive apps and want to allow your end-users to choose from a number of different IdPs, or to have the option to sign in back into the app after they have signed out, set a **Role-based home page** for role **Anonymous** to **OIDC.Login_Web_Button**. When you configure navigation for PWA apps, set a **Role-based home page** for role **Anonymous** to **OIDC.Login_PWA_Button**. See [Role-Based Home Pages](/refguide/navigation/#role-based) in *Navigation* for more information.

In addition, administrators will need to have access to configure OIDC and also manage end-users. You can do this by including the pages `Administration.Account_Overview` and `OIDC.OIDC_Client_Overview` into the app navigation, or a separate administration page.

### Setting Encryption Key

Follow the instructions to [set an encryption key in the Encryption module](/appstore/modules/encryption/#configuration). The constant to set is called `Encryption.EncryptionKey` and should be a random value 32 characters long. This key will be used to encrypt and decrypt values.

## IdP Configuration {#idpconfiguration}

To connect your App with your IdP, you need to configure both your IdP (as described in the [Configure your App at your IdP](#configure_app_idp) section below) and your Mendix application. For the Mendix application setup, you can choose between two methods:

* [Deploytime configuration of your IdP at your App](#deploytime-idp-configuration)
* [Runtime configuration of your IdP at your App](#runtime-idp-app)

### Configure Your App at Your IdP {#configure_app_idp}

#### General OIDC Providers {#general-providers}

1. In your IdP, provision a new OpenID client application. You will receive a ClientID and Client Secret.
2. You will also need the OIDC configuration endpoint (for example: [https://accounts.google.com/.well-known/openid-configuration](https://accounts.google.com/.well-known/openid-configuration))
3. Register the following callback URLs:
    * `https://<your-app-url>/oauth/v2/callback`
    * `makeitnative://<your-app-url>/oauth/callback`

#### Microsoft Entra ID Provider Configuration for APIs{#azure-portal}

This section gives some guidance for doing the necessary configurations at your entra ID provider to obtain access tokens containing the right authorization claims to secure your APIs.

If you do not set the access token up correctly, you will get access tokens containing default `aud` (audience) claims. The default audience is the Microsoft Graph API and so these access tokens cannot be validated by your API.

To get the Microsoft Identity Platform to issue access tokens you can pass to your API, you need to set up a custom scope in the App Registration’s **Expose an API** tab, and request that scope when you acquire the tokens. To do this, follow the steps below:

1. Open the **Expose an API** tab in the **App Registration** page of the Azure Portal.
1. In the **Expose an API** tab, set up a custom scope.
    The scope will be prefixed with your `Application ID URI`.
1. In the **API permissions** tab, assign the created scope to the application.
1. In the **App roles** tab, add the user roles you want to authorize using either the user role name, or the user role UUID. This adds the configured user roles to the roles claim in the access token.

By adding a custom claim to the App Registration’s Expose an API tab and requesting that scope when we acquire tokens, the Microsoft Identity Platform will now generate access tokens that can be validated using the `/jwks` URI.

#### Amazon Cognito Provider Configuration

For information about configuring Amazon Cognito for the OIDC SSO module, see [Amazon Cognito: Configuring Amazon Cognito](/appstore/modules/aws/amazon-cognito/#cognito-provider).

### Runtime Configuration of Your IdP at Your App {#runtime-idp-app}

This section describes how you can configure your IdP in your Mendix app using the Admin UIs provided by the OIDC SSO module. These screens offer two tabs:

* **IdPs for SSO and API security**: Use this more extensive configuration screen if you are implementing SSO and optionally API security.
* **IdPs for API security only**: Use this simpler configuration screen if you are configuring an IdP that is only used for API security (i.e., Client Credential grant). For more information, see the [API Security Configuration for Client Credential Grant](#client-credential-grant) section below.

You can configure your OIDC client using the app pages – see [General OIDC Clients](#general-oidc), [Microsoft Entra ID Client Configuration for APIs](#azure), and [Amazon Cognito](/appstore/modules/aws/amazon-cognito/). In version 2.3.0 and above, you can also use constants to configure your app at deployment time – see [Automated Deploy-time SSO Configuration](#deploy-time), below.

#### General OIDC Clients {#general-oidc}

In this case, the OIDC client is the app you are making.

1. Start your app, log in as an administrator, for example *demo_administrator*, and access the **IdPs for SSO and API security** setup page.
2. Add a new client configuration and give it an **Alias** so you can identify it if you have more than one client configuration.
3. Add the **Client ID**.

   **Client assertion** is automatically set to *Client ID and Secret*.

4. Choose the **Client authentication method** — make sure that you select a method that is supported by your IdP. You can normally check this via the `token_endpoint_auth_methods_supported` setting on the IdP’s well-known endpoint. Also ensure that the correct client authentication method is configured at the IdP when you register the client.

    The options are:
    * `client_secret_basic`: Your app will use the HTTP Basic Authentication scheme to authenticate itself at your IdP. (Default – for security reasons this should be your preferred choice)
    * `client_secret_post`: Your app will authenticate itself by including its `client_id` and `client_secret` in the payload of token requests. (Older versions of the OIDC SSO module used this method).

5. Add the **Client Secret**.
6. If you have the **Automatic Configuration URL** (also known as the *well-known endpoint*), enter it and click **Import Configuration** to automatically fill the other endpoints.

    {{% alert color="info" %}}If the endpoint URL does not already end with `/.well-known/openid-configuration`, include it at the end. According to the specifications, the URL you need to enter typically ends with `/.well-known/openid-configuration`.{{% /alert %}}

    * If you do not have an automatic configuration URL, you can fill in the other endpoints manually.
7. Click **Save**
    {{% alert color="info" %}}Your client configuration is not yet complete, but you have to save at this point to allow you to set up the rest of the information.{{% /alert %}}
8. Select your client configuration and click **Edit**.
9. Select the scopes expected by your OIDC IdP. The standard scopes are `openid`, `profile`, and `email`, but some IdPs may use different ones.
    * If you need refresh tokens for your end-users, you also need the `offline_access` scope.
    * Add other scopes as needed.
10. Select your user parsing. By default, this module will use standard OpenID claims to provision end-users in your app. Also included is a flow that uses the standard UserInfo endpoint in OIDC, which is useful in the case that your IdP uses thin tokens. You can set up user provisioning by setting the following standard flows:

    | Default Microflow | Use |
    | --- | --- |
    | OIDC_CustomUserParsing_Standard | It implements some standard OpenID claims to find/provision a user. |
    | OIDC_CustomUserParsing_UserInfo | It is similar as standard OIDC user parsing flow, except it works with identity providers that use `opaque` tokens. |
    | OIDC_CustomUserParsing_Salesforce | It offers an `id` endpoint that retrieves information about user. You can use OpenID token (`id_token`) to map user attributes. |

    In version below 3.0.0 of the OIDC SSO module, you can configure the timezone and language using the `OIDC_CustomUserParsing_Standard` and `OIDC_CustomUserParsing_UserInfo` microflow. However, in version 3.0.0 and above of the OIDC SSO module, you can set the timezone and language using any standard microflow.

    You can also use your own custom user entity to manage users of the app. See the section on [Custom User Provisioning](#custom-provisioning) for more information on what you can do to implement provisioning logic which fits your business needs. The module includes a Salesforce-specific example.

11. Optionally, you can select the `CustomAccessTokenParsing` microflow if you want to use additional information from the OIDC IdP. This can be used, for example, to assign end-user roles based on information from the IdP – see [Access Token Parsing](#access-token-parsing) for more information.

Once you have completed these steps, the SSO-configuration is ready for testing. For more information, see the [Testing and troubleshooting](#testing) section.

See the section [Optional Features](#optional) information on additional optional features you may want to implement.

#### API Security Configuration for Client Credential Grant {#client-credential-grant}

1. Start your app, log in as an administrator, for example *demo_administrator*, and access the Client Credential setup page.
2. If you have the **Automatic Configuration URL** (also known as the *well-known endpoint*), enter it and click **Import Configuration** to automatically fill the other endpoints.

    {{% alert color="info" %}}If the endpoint URL does not already end with `/.well-known/openid-configuration`, include it at the end. According to the specifications, the URL you need to enter typically ends with `/.well-known/openid-configuration`.{{% /alert %}}

    * If you do not have an automatic configuration URL, you can fill in the other endpoints manually.
3. Optionally, you can select the `CustomAccessTokenParsing` microflow if you want to use additional information from the OIDC IdP. This can be used, for example, to assign end-user roles based on information from the IdP – see [Access Token Parsing](#access-token-parsing) for more information.
4. Click Save. Once you have completed these steps, the Client Credential Configuration is ready for testing.

#### Microsoft Entra ID Client Configuration for APIs {#azure}

For Entra ID access to APIs through an access token, in addition to the configuration described above, we can request the scope [configured in Azure portal](#azure-portal), described above, from the OIDC SSO UI configuration.

1. Start your app, log in as an administrator, for example *demo_administrator*, and access the **IdPs for API security only** Setup page.
1. Add the custom scope which you [configured in Azure](#azure-portal) in **Available scopes**.
1. Save the configuration.
1. Edit the Entra ID configuration and add the custom scope to **Selected scopes**.

Now, you can acquire tokens which can be validated using JWKS URI.

#### Amazon Cognito Client Configuration

For more information about configuring your app for OIDC with Amazon Cognito, see [Amazon Cognito: Configuring the Required Settings in Your Mendix App](/appstore/modules/aws/amazon-cognito/#cognito).

### Deploytime Configuration of Your IdP at Your App{#deploytime-idp-configuration}

#### Automated Deploy-time SSO Configuration{#deploy-time}

In version 2.3.0 and above, you can configure the OIDC SSO module using app [constants](/refguide/constants/) rather than using the app administration pages. As the developer of an app using OIDC SSO, you can set default values. These values can be overridden using the app constants.

To enable the use of app constants to configure the OIDC SSO module, configure your app to run the Startup microflow in the OIDC module (OIDC.ASU_OIDC_Startup) as (part of) the [after startup](/refguide/app-settings/#after-startup) microflow.

Use the following security best-practices when setting up your constants:

* Set the [Export level](/refguide/configure-add-on-and-solution-modules/#export-level) for these constants to `Hidden` for security reasons.
* Mask your client_secret so the value is not visible in the Mendix Portal – [constants](/developerportal/deploy/environments-details/#constants) in the *Environment Details* documentation for more information.

The configuration you set through constants will mirror the configuration described in [General OIDC Clients](#general-oidc), above.

{{% alert color="info" %}}
SSO configurations created using constants will be shown as read only on the **IdPs for SSO and API security** and **IdPs for API security only** Setup page in the app.

The following error messages will be displayed when you try to edit/delete.

* error at edit: You cannot modify as it is created from deployment.
* error at delete: You cannot delete as it is created from deployment.
{{% /alert %}}

##### Customizing Default Deploy-time Configuration

By default, the `Custom_CreateIDPConfiguration` microflow in the **MOVE_ME** folder of the OIDC module uses the `Default_CreateIDPConfiguration` microflow. Review the microflow `Custom_CreateIDPConfiguration` in the **MOVE_ME** folder. This is where you can change the default IdP configuration at Deploytime Configuration.

In this configuration, you have several options to customize the Identity Provider (IdP) settings. Firstly, you can configure the IdP using constants. Additionally, the OIDC module supports further customization of the IdP configuration through the implementation of a custom microflow called `Custom_CreateIdPConfiguration`. This microflow returns a list of configured IdPs, which the OIDC module then uses to generate the necessary SSO configurations for multiple IdPs.

In this non-default configuration method, users have the flexibility to introduce your own constants by creating custom IdP configurations.

##### Deploy-time IdPs for SSO and API Security Configuration

{{% alert color="info" %}}
**IdPs for SSO and API security** configuration supports both Authorization code and Client Credential grant type.
{{% /alert %}}

The following constants are mandatory when creating an OIDC SSO IdP configuration:

* **ClientID** – the client id
* **ClientAlias** – the client alias
* **ClientSecret** – the client secret (see security best-practice, above)
* **AutomaticConfigurationURL** – the URL of the well-known endpoint (ending with `/.well-known/openid-configuration`)

For more information on creating user provisioning with constants, see the [Deploy-time User Provisioning Configuration](#custom-provisioning-dep) section below.

The following constants are optional:

* **ClientAuthenticationMethod** (*default: client_secret_basic*) – the client authentication method — the caption of OIDC.ENU_ClientAuthenticationMethod

    Examples: `client_secret_post` or `client_secret_basic`

* **CallbackResponseMode** (*default: Query*) – : the callback response mode — the caption of OIDC.ENU_ResponseMode

    Example: `Query`

* **CustomATP**: a custom access token processing microflow — the value of `CompleteName` in the mxmodelreflection$microflows table

    Example: `OIDC.Default_SAM_TokenProcessing_CustomATP`

* **CustomCallbackURL** – the custom callback URL

* **SelectedClaim** – selected claim values — multiple values can be separated by a space

    Example: `auth_time created_at`

* **SelectedScope** – selected scopes — multiple values can be separated by a space

    Example: `openid profile email`

* **UserParsing** (*default: OIDC_CustomUserParsing_Standard*) – the custom user provisioning

    Example: `OIDC_CustomUserParsing_Standard`

* **SessionEndPoint** – the end session endpoint

* **ACRValues** – selected ACRvalues — the selected Acr with multiple values separated by a space  

    Example: `acr1 acr2`

##### Deploy-time IdPs for API Security Only Configuration

{{% alert color="info" %}}
**IdPs for API security only** configuration supports Client Credential grant type only.
{{% /alert %}}

The following constants are mandatory when creating an OIDC SSO Client Credentials configuration:

* **ClientAlias** – the client alias
* **AutomaticConfigurationURL** – the URL of the well-known endpoint (ending with `/.well-known/openid-configuration`)
* **CustomATP** – a custom access token processing microflow — the value of `CompleteName` in the `mxmodelreflection$microflows` table
Example: `OIDC.Default_SAM_TokenProcessing_CustomATP`
* **IsClientGrantOnly** (*default: false*) – allow to create Client Credential Configuration in the application

{{% alert color="warning" %}}
When the `IsClientGrantOnly` constant is set to *true*, the OIDC SSO module considers the configuration as Client Credential grant configuration.
{{% /alert %}}

## User Provisioning

Initially your app will not have any end-users. The OIDC module provides so-called Just-In-Time (JIT) user provisioning. This means that an end-user will be created in your app when they log in for the first time. If you do not want JIT user provisioning, it is possible to disable it as described in the section [Custom User Provisioning at Runtime](#custom-provisioning-rt).

By default, end-users are provisioned using the `Account` object in the Administration module. If you need to use a custom user entity you can do this via [Custom User Provisioning Using a Microflow](#custom-provisioning-mf) or (in version 2.4.0 and above) [Deploy-time User Provisioning Configuration](#custom-provisioning-dep) or [Custom User Provisioning at Runtime](#custom-provisioning-rt).

### Default User Provisioning

By default, the `CUSTOM_UserProvisioning` microflow in the **USE_ME** > **1. Configuration** folder of the OIDC module uses the `OIDC_CustomUserParsing_Standard` microflow. This applies the following mapping:

| ID-token Provided by your IdP | Attribute of `Administration.Account` Object |
| ----------------------------- | ----------------------------- |
| sub                           | Name                          |
| name                          | Fullname                      |
| email                         | Email                         |

{{% alert color="warning" %}}
Do not change the `OIDC_CustomUserParsing_Standard` microflow. This may give problems if you upgrade to a newer version of the OIDC SSO module. Apply customizations to the `CUSTOM_UserProvisioning` microflow only.
{{% /alert %}}

### Custom User Provisioning{#custom-provisioning}

If you create custom user entities as specializations of the `System.User` entity, you can store user information that is more extensive than is possible with the `System.User` or `Administration.Account` entities. You can use these specializations as target entities for end-user provisioning using one of the methods described below.

If you connect multiple IdPs to your Mendix app, you can use separate custom user entities for each IdP, each with its own attribute mapping.

#### Custom User Provisioning Using a Microflow{#custom-provisioning-mf}

{{% alert color="warning" %}}
This feature is deprecated from the version 3.0.0 of the module.
{{% /alert %}}

Review the microflow `CUSTOM_UserProvisioning` in the **USE_ME** > **1. Configuration** folder of the OIDC module. This is where you can change the way that end-users are provisioned in your app. The OpenID token is passed to the microflow as a parameter. Use this object to find an existing, or create a new, `System.User` object for the end-user. This is set as the return value of the microflow. You can find examples included in the **USE_ME** > **1. Configuration** > **User Provisioning Examples** folder.

Make a single call from `CUSTOM_UserProvisioning` to your own module where you implement the provisioning flow you need. This way, it will be easy to install new versions of the OIDC SSO module over time without overwriting your custom provisioning.

The OIDC SSO module supports multiple IdPs. Since each provider can provide user data in a different format, you may want to use multiple provisioning flows. The microflow should contain the prefix `OIDC_CustomUserParsing`. See the microflow `UserProvisioning_Sample` for an example and details on how to do this.

#### Deploy-time User Provisioning Configuration{#custom-provisioning-dep}

{{% alert color="info" %}}
This feature is available in version 2.4.0 and above
{{% /alert %}}

You can set up custom user provisioning by setting constants when you deploy your app. This has the following limitations compared to setting up provisioning using a microflow or changing the settings at runtime:

* You need to restart your app to apply changes to the constants
* You cannot set custom mapping of IdP claims to attributes of your custom user entity

You can set up custom user provisioning by setting the following constants. You can set default values when you build your app, but can override these in the app's environment.

| Constant | Use | Notes | Example |
| --- | --- | --- | --- |
| CustomUserEntity | a custom user entity | in the form `modulename.entityname` – a specialization of `System.User` | `Administration.Account` |
| PrincipalEntityAttribute | the attribute holding the unique identifier of an authenticated user | | `Name` |
| PrincipalIdPAttribute | the IdP claim which is the unique identifier of an authenticated user | | `sub` |
| AllowcreateUsers | allow to create users in the application | *optional* | `True` |
| Userrole | the role which will be assigned to newly created users | *optional* - Default Userrole is assigned only at user creation <br> - User updates do not change the default role <br> - No bulk update for existing users when the default userrole changes | `User` |
| UserType | assign usertype to the created users | *optional* | `Internal` |
| CustomUserProvisioning | a custom microflow to use for user provisioning | *optional* – in the form `modulename.microflowname` – the microflow name must begin with the string `UC_CustomProvisioning` | `Mymodule.UC_CustomProvisioning` |

#### Custom User Provisioning at Runtime{#custom-provisioning-rt}

{{% alert color="info" %}}
This feature is available in version 2.4.0 and above
{{% /alert %}}

You can set up custom user provisioning once your app is running using the `OIDC.OIDC_Client_Overview` page that you set up for the administrator for the app in [Configuring Navigation](#configure-nav). You can set up custom user provisioning as follows:

1. Sign in to the running app with an administrator account.
2. Navigate to the `OIDC.OIDC_Client_Overview` page set up in the app navigation.
3. Select the **Provisioning** tab.
4. Set up the following information:

    * **Custom user Entity (extension of System.User)** – the Mendix entity in which you will store and look up the user account. If you are using the [Administration module](https://marketplace.mendix.com/link/component/23513), this would be `Administration.Account`.
    * **The attribute where the user principal is stored** – unique identifier associated with an authenticated user.
    * **Allow the module to create users** – this enables the module to create users based on user provisioning and attribute mapping configurations. When disabled, it will still update existing users. However, for new users, it will display an exception message stating that the login action was successful but no user has been configured.
        * By default, the value is set to ***Yes***.
    * **User role** – the role which will be assigned to newly created users. You can select one default user role. If you need additional user roles, use Access Token Parsing microflow to assign multiple roles.
    * **User Type** – this allows you to configure end-users of your application as internal or external.
        * By default, the value is set to ***Internal***.

5. Under **Attribute Mapping**, for each piece of information you want to add to your custom user entity, select an **IdP Attribute** (claim) and specify the **Configured Entity Attribute** where you want to store the information.

    Note the following:

    * You cannot use the IdP claim which is the primary attribute identifying the user and you cannot use the attribute you set in **The attribute where the user principal is stored**.
    * You can map multiple **IdP Attribute** (claims) to a **Configured Entity Attribute** but you cannot map a new **IdP Attribute** to a **Configured Entity Attribute** if it is already mapped.
    * The **IdP Attribute** is one of the fixed claims supported by the OIDC SSO module.
    * IdP Attributes(Claims) cannot be of type enum, autonumber, or an association.
    * The image below shows you the default attribute mapping for the configuration.

        {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/default_mapping.png" max-width=80% >}}

6. Optionally, you can use the custom logic in the **User Provisioning**. In the **Custom UserProvisioning** field, select a microflow you want to run for custom user provisioning. The custom microflow name must begin with the string `UC_CustomProvisioning` and requires the following parameters:

    1. **UserInfoParameter(UserCommons.UserInfoParam)**: A Mendix object containing user claims information through its associated objects. You can use this  parameter to retrieve user provisioning configuration information.
    2. **User(System.User)**: A Mendix object representing the user to be provisioned. Ensure that the selected microflow matches this parameter signature.

    The microflow must return a **System.User** object to ensure proper user provisioning and updates. It will be executed after user creation or update of user. If you have added a new microflow, you will need to refresh the module containing your microflow as described in the [Installing Mx Model Reflection](#mxmodelreflection). This selection can be blank if you do not want to add custom logic.

7. Click **Save** to save the configuration.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/user commons.png" max-width=80% >}}

### Evaluating Multiple User Matches

Review the custom microflow `evaluateMultipleUserMatches` in the **USE_ME** folder. The module tries to find the user corresponding to the given username. This microflow is triggered when multiple matching `System.User` records are found.

You can customize this microflow to determine the correct user. The resulted user instance will be signed in to the application and passed on to any other microflow. However, Mendix recommends using provided unique entity attribute only. For example, `System.User.Name`.

### User Identifiers in the OIDC and SCIM Protocols

This section provides an overview and general guidance on User Identifiers, essential for understanding how they function in the OIDC and SCIM protocols. It is particularly relevant for Entra ID customers to ensure proper implementation and alignment of User Identifiers.

#### Overview of User Identifier

When using OIDC SSO with Entra ID, user identifiers need to be configured correctly to ensure forward compatibility, especially if you plan to introduce the SCIM module in your application. If you are using OIDC SSO with Entra ID, you can refer to the [Microsoft documentation on attribute mapping](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/customize-application-attributes).

Entra ID uses two immutable identifiers for a user:

* The user’s object ID: The user's object ID uniquely identifies a user, making it ideal for crosslinking users across different applications. For example, B2E application used across the company can use the object ID as a unique identifier.
* The user’s pairwise unique identifier: It is also known as a locally unique identifier and is derived from the combination of the user's object ID and the application's identifier. This means it cannot be used to crosslink a user across different applications. For example, applications that need additional privacy can use locally unique identifiers to avoid cross linking of users.

Role of user identifiers in OIDC and SCIM protocols:

* OIDC protocol can use both types of identifiers based on use case:

    * The ID token contains a `sub` claim, which includes the pairwise unique identifier (locally unique identifier).
    * The ID-token also contains an `oid` claim, which includes the user’s object ID.

* SCIM:

    * In the SCIM protocol, you typically want to use the object ID to identify a user. It is used as the value for the `externalID` claim in SCIM payloads by default.

#### Guidance on User Identifier{#guidance-user-identifier}

The default behavior for the OIDC SSO module is to persist the value of the `sub` claim in the system.user.name attribute. This is not forward compatible with the introduction of SCIM. Therefore, for B2E applications connected with Entra ID for SSO, Mendix recommends the following:

* For any new application, use the `oid` claim as user identifier by modifying the user provisioning flow. This will allow you to introduce SCIM.
* For existing applications that do not persist user-specific application data (other than system.user or administration.account), modify the user provisioning flow to use the `oid` claim instead of the `sub` claim. Delete all system.user and administration.account records to remove old user data. This will re-provision the users, allowing you to introduce SCIM.
* For existing applications that do not need to use SCIM, you can continue to use default `sub` claim value or any other claim such as `preferred_username`.
* For existing applications where you want to introduce SCIM, you will need to define a migration strategy for the identifiers.

#### Configuring `oid` Claim in the OIDC SSO

By default, the `WellKnownendpoint` (Automatic configuration URL) does not include the `oid` claim in its metadata. You will need to manually configure the `oid` claim in the **UserProvisioning** tab of the OIDC SSO configuration using the steps below:

1. Go to **Attribute Mapping** and click **New**.
2. Select **Search**  and click **New**.
3. Create `oid` claim and map it to the Entity Attribute.

## API Authentication {#api-authentication}

You can create your own APIs within your Mendix app and secure the end point over OIDC using a custom authentication microflow. To do this:

1. Create a REST API endpoint which needs to be secured.
2. Use **Custom** as the [authentication method](/refguide/published-rest-service/#authentication) to secure the endpoint with an access token.
3. Select the `OIDC.APIAuthentication` microflow which has `HTTPRequest` as the input and returns `System.User` as the output.

### Using `APIAuthentication` for Client Credentials Grant

The client credentials grant type is used when applications request an access token to access their own resources, rather than on behalf of a user. To do this:

1. Request an Access Token using `/token` endpoint.
2. Access the Secured API Endpoint
3. `APIAuthentication` will validate the token and extract the claims.
4. The OIDC SSO module checks if the `sub` claim (which contains the `client-id`) is present in the access token. If it is not, the module will verify the `client_id`, `appid`, or `cid` parameters. If none of these are found, it will throw an exception message.
5. Create a new user using the client ID from the token if one does not already exist.

{{% alert color="info" %}}

By default, the OIDC SSO module uses the **IdPs for API security only** configuration. If it is not available, it will use the **IdPs for SSO and API security** configuration.

{{% /alert %}}

## Optional Features{#optional}

### Performing API Calls on Behalf of an Authenticated User

You might want to make API calls to other apps/services on behalf of the end-user. As you have used the OIDC module to authenticate the end-user to your app, your app also has an access token for this end-user.

If the API supports OAuth and/or OIDC, you can use this access token to propagate the end-user's identity to the API so the API does not need to have a user identifier in the payload. To do this, the API needs to:

* accept OAuth bearer tokens in the HTTP `Authorization` request header field, as per [section 7 of RFC 6749](https://datatracker.ietf.org/doc/html/rfc6749#section-7)
* accept Access Tokens from the same IdP where your user was authenticated
* parse the Access Token as JWT (as suggested by [RFC 9068](https://datatracker.ietf.org/doc/html/rfc9068) – although your Access Tokens do not necessarily have to be fully compliant with that RFC) or be able to invoke the UserInfo endpoint (as suggested by the [OIDC specs](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo))

Access tokens have a short lifespan for security reasons, so you need to ensure that it has not expired. If the access token has expired, you can retrieve a new one using the refresh token that was acquired together with the access token.

The OIDC SSO module contains microflows that do this for you. These microflows all make use of the `OIDC.Token` object that contains both the Access Token (from OAuth protocol) and the ID-token (from the OIDC specs).

You can find the following microflows in the **USE_ME** > **3. Make Authorized API Calls** folder of the OIDC module.

#### DELETE

Takes as input:

* **Location** – a string containing the URL you want to do the DELETE on
* **Request** – a string containing the content of the DELETE request (most likely a formatted JSON)
* **Token** – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### GET

Takes as input:

* **Request** – a string containing the URL you want to GET data from
* **Token** – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### PATCH

Takes as input:

* **Location** – a string containing the URL you want to do the PATCH on
* **Request** – a string containing the content of the PATCH request (most likely a formatted JSON)
* **Token** – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### POST

Takes as input:

* **Location** – a string containing the URL you want to do the POST on
* **Request** – a string containing the content of the POST request (most likely a formatted JSON)
* **Token** – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

#### PUT

Takes as input:

* **Location** – a string containing the URL you want to do the PUT on
* **Request** – a string containing the content of the PUT request (most likely a formatted JSON)
* **Token** – the `OIDC.Token` object that should be used for authentication, typically retrieved via the `Token_Account` association (to find the token of the current user/session)

The microflow returns an object of type `System.HttpResponse`. This could indicate an error.

### Access Token Parsing{#access-token-parsing}

With the OAuth/OIDC protocol, access tokens can be opaque or can be a JSON Web Token (JWT).
If you are just delegating authentication for your app to the IdP you will not need to know the contents of the access token.

If you want to use the information in an access token which is a JWT, you need to parse the access token in a microflow. For example, you may want to assign user roles in your app based on the contents of the access token JWT.

* The OIDC module provides you with default microflows for parsing access tokens from the following IdPs:
    * Siemens SAM – in this case the `sws.samauth.role.name` claim is interpreted — for example:

        ```json
        "sws.samauth.role.name": [
        "c1c31b36-2779-4ddd-a6e7-eaff22ad382c"
        ]
        ```

    * Microsoft Entra ID – in this case the `roles` claim is interpreted, using the roles claim in the access token — for example:

        ```json
        "roles": [
        "c1c31b36-2779-4ddd-a6e7-eaff22ad382c"
        ]
        ```

* If you are using another IdP or want to use a different claim, you can create a custom microflow to parse the access token.

To parse access tokens, you need to do the following:

1. Create a secure REST API endpoint following the instructions in [API Authentication](#api-authentication), above.
1. Run your app and sign in as an administrator, for example `Demo_administrator`.
1. Configure the client information in the OIDC Client configuration screen.
1. Check **Enable Access Token Parsing** to parse access tokens when performing [Runtime Configuration of Your IdP at Your App](#runtime-idp-app).
1. Select the appropriate microflow to parse the access token as described in the relevant section below. If you have added a new microflow, you will need to refresh the module containing your microflow as described in [Installing Mx Model Reflection](#mxmodelreflection).

{{% alert color="info" %}}
In version 2.0.0 and above of the OIDC SSO module you will also find a microflow for parsing PIB tokens. This feature will be released publicly in the future and documented at that time.
{{% /alert %}}

#### Parsing SAM Access Tokens

{{% alert color="info" %}}
This section is only relevant if you are a Mendix partner and you want to integrate your app with the Siemens SAM IdP.
{{% /alert %}}

To parse of SAM access tokens you need to do the following when performing [Runtime Configuration of Your IdP at Your App](#runtime-idp-app):

1. Select *OIDC.Default_SAM_TokenProcessing_CustomATP* as the **custom AccessToken processing microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/enable-sam.png" >}}

2. Add the scopes `sam_account`, `samauth.role`, `samauth.tier`, and `samauth.ten` to the **Selected Scopes** in the OIDC Client Configuration.
3. Configure the user roles in your app to match the roles returned by SAM. End-users will be given the matching role when they sign into the app. If the role in the SAM token is not found in the Mendix app the end-user will be given the role `User`.
4. Save the configuration.

#### Parsing Microsoft Entra ID Access Tokens

The OIDC SSO module provides a default access token parsing microflow for Entra ID. To use it, select the appropriate access token parsing microflow:

* For Entra ID, the default access token parsing microflow is `OIDC.Default_Azure_TokenProcessing_CustomATP`.

To confirm that the authorization is working, get an access token from your Entra ID IdP and pass it to the API Endpoint using the authorization header.

#### Parsing OIDC Provider Access Tokens

The OIDC SSO module version 2.3.0 and above provides a default access token parsing microflow to use when you are authenticating using the OIDC Provider module as your IdP.

To parse the OIDC Provider access tokens you need to do the following when performing OIDC Client Configuration:

1. Select `OIDC.Default_OIDCProvider_TokenProcessing_CustomATP` as the **custom AccessToken processing microflow**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/oidc-provider-parsing.png" >}}

2. Add the scopes `openid` and the ModelGUID or Name to the **Selected Scopes** in the OIDC Client Configuration. The ModelGUID will look something like `53f5d6fa-6da9-4a71-b011-454ec052cce8`.

    If any one of the selected scopes of OIDC SSO matches with OIDC Provider Scopes then the user role is created. If you specify extra scopes those scopes are ignored.

3. Make sure that the app acting as OIDC Provider returns the right user roles for the end-users of your app. End-users will be given the matching role when they sign into the app. If the role in the OIDC Provider token is not found in the Mendix app the end-user will be given the user role `User`, but will not be given access to application.

4. Save the configuration.

To confirm that the authorization is working, get an access token from your OIDC Provider IdP and pass it to the API Endpoint using the authorization header.

#### Parsing Access Tokens Using a Custom Microflow{#custom-parsing}

If you choose to implement your own microflow to parse an access token, the microflow name must contain `CustomATP`, for example `CustomATP_MyTokenParser`. This is how you can parse access tokens issued by IdPs such as Microsoft Entra ID.

{{% alert color="info" %}}
If you are using Microsoft Entra ID, ensure you have followed the instructions for getting valid tokens in [IdP Configuration](#idpconfiguration), above.
{{% /alert %}}

You can find a sample microflow for parsing access tokens, `OIDC.ACT_Token_CustomATPRetrieveRoles` in the OIDC module.

Your custom microflow should use the access token to create a list of user roles. Your token will contain one of the following:

* the UUIDs of the user roles in your app which map to the `System.UserRole/ModelGUID` attribute
* the name of the user role in the app, which can be used to find the `System.UserRole` within the app itself using the `Name` attribute

For version 2.0.0 and above of the OIDC SSO module, your custom microflow takes the access token as the parameter. Use this access token to determine the roles the user has within your app when signed in using the OIDC module. These should be returned as a list of objects of type `OIDC.Role`.

For versions of the OIDC SSO module below 2.0.0, the process is a bit more complicated. The custom microflow has an `Administration.Account` object as the parameter and must do the following:

1. Retrieve the access token of the account.
1. Use the access token to determine the roles the user has within your app when signed in using the OIDC module.
1. Convert these roles to a list of objects containing the user role.
1. Return a list of objects of type `System.UserRole`.
1. Invoke the `SUB_Update_OIDCUserRole` in the **SAM** folder of the OIDC module to associate the current user with the correct user roles in your app.

For all versions of the OIDC SSO module, once you have created the microflow (for example `CustomATP_xxx`), you must do the following:

1. Refresh the module containing your microflow as described in [Installing Mx Model Reflection](#mxmodelreflection).
1. Select your microflow (for example, *CustomATP_xxx*) as the **custom AccessToken processing microflow**.

{{% alert color="info" %}}
If your microflow is not correctly implemented you will be told that **Authentication failed!** and will see errors in the log under the OIDC log node.
{{% /alert %}}

### Using Deep Links

If end-users who use the deeplink do not yet have a session in your app, the deeplink can trigger the SSO process. If successful, the end-user will be automatically redirected back to the deeplink.

For more information on using Deep Link module (with Mendix 8 and 9), see the [Using Deep Link Module](#using-deep-link) section below.

#### Using Page and Microflow URLs with OIDC SSO{#page-microflow-url}

Page URLs and Microflow URLs are supported with OIDC SSO for Mendix version 10.6 and above. To do this, follow the steps below:

1. In the **Runtime** tab of the **App Settings**, configure the page **URL prefix** to **link** instead of the default **P** to maintain compatibility with existing URLs, and ensure to remove the Deep Link module from your app to start the app successfully.
1. Configure **OIDC.Login_Web_Button** as the **Sign-in page** in the **Authentication** section of the app **Navigation**.
1. The user is redirected to the OIDC login page for authentication.
1. After successful log in, the user is directed to the desired page using page URLs and microflow URLs within the application.

If you are building a new app using the OIDC SSO module (Mendix version 10.6 and above) and you are using Page URLs and Microflow URLs, follow the same steps as above.

To allow the end users to navigate to the desired page:

* If single IdP configured, URL will be the base URL of your application followed by `oauth/v2/login?cont={page/Microflowurl}`

    For example, `http://localhost:8080/oauth/v2/login?cont=link/pagepath`

* If multiple IdPs configured, you can specify which IdP should be used by adding the alias (MyIdPAlias)
`oauth/v2/login?idp={MyIdPAlias}&cont={page/Microflowurl}`

    For example, `http://localhost:8080/oauth/v2/login?idp=Okta&cont=link/pagepath`

The Page and Microflow URLs fully support multiple IdPs, allowing users to trigger the login and choose the IdP on the OIDC login page.
For more information, see the [Migrating to Page and Microflow URLs](/appstore/modules/deep-link/#migrate-page-micro) section of the *Deep Link*.

Starting from Studio Pro 10.9.0, you can use the primitive parameters as **Query string** parameters in microflows. Check the checkbox in the parameter table to configure a microflow parameter to use as a **Query string** parameter.
For more information, see the [URL](/refguide/microflow/#url) section of the *Microflow Properties*.

#### Using Deep Link Module{#using-deep-link}

{{% alert color="warning" %}}
The Deep Link module has been deprecated from Studio Pro 10.6 and replaced by [page URLs](/refguide/page-properties/#url) and [microflow URLs](/refguide/microflow/#url).
For instructions on migrating to page and microflow URLs, see the [Using Page and Microflow URLs with OIDC SSO](#page-microflow-url) section above.
{{% /alert %}}

To use OIDC SSO module in conjunction with the Deep Link module (for Mendix 8 and 9), you can choose between the following methods of selecting an IdP:

* You need to set the `LoginLocation` constant of the Deep Link module to the `/oauth/v2/login?cont=`.
* You can also specify which IdP should be used by adding the alias (`MyIdPAlias`) to the `LoginLocation`: `/oauth/v2/login?idp={MyIdpAlias}&cont=`. For example, `/oauth/v2/login?idp=Google&cont=`. This setting will apply to all deeplinks in your app.

The Deep Link module does not have full support for multiple IdPs, so it can only trigger logins at one IdP. If you do not specify which IdP you want the Deep Link module to use, it will use the default IdP.

### Logging Out

A standard logout action will end an end-user's Mendix session, but will not end their SSO session. To perform an SSO logout, also known as Single Log Out (SLO), use the nanoflow `ACT_Logout`, which will redirect your user to the IdP's “end session endpoint” if configured.

To do this, add a menu item or button for your end-users that calls the nanoflow `ACT_Logout`.

### Using ACR to Request Authentication Method

By default, the OIDC SSO module does not care how users are signed in at your IdP, that is left to the discretion of the IdP. In some cases your IdP may support different methods for end-users to be authenticated and your app may want to indicate a preference.

The following sections describe the steps needed to make use of the ACR mechanism.

ACR is available in version 2.3.0 and above of the OIDC SSO module.

#### Configuring Authentication Methods That Can Be Requested at Your IdP

To configure the ACR value (or values) in the OIDC SSO module, follow these steps:

1. Navigate to the screen where the OIDC configuration is managed.
2. Select your client configuration and click **Edit**.
3. Add the ACR values that are supported by your IdP to the OIDC Client Configuration.

    For example, supported ACR Values for Okta IdP are: `urn:okta:loa:1fa:any` and `urn:okta:loa:2fa:any`.

4. Save the configuration changes.

#### Selecting the ACR Value During Sign In

When you have configured multiple ACR values for your IdP, the OIDC module shows the ACR values as additional ways to sign in on the default login page.

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/login-acr-options.png" class="no-border" >}}

#### Customizing the Login Page

If you want to customize this login page for your end-users, perform the following steps:

1. Create a new [page](/refguide/page/).
1. Open the App Navigation and set the newly created login page as the [Default home page](/refguide/setting-up-the-navigation-structure/#home).
1. Create [Role-based home pages](/refguide/setting-up-the-navigation-structure/#role-based-home-page) for the user roles. Set the newly created login page as the target home page.
1. In the **Authentication** section, set the new login page as the **Sign-in page**.

Depending on how your login-page works and/or which login-option is selected by the end-user, the OIDC SSO module will select the corresponding ACR value in the `acr_values` request parameter.

#### ID-token Processing

Your IdP may have different ways of handling requests to use a specific authentication method. The OpenID Connect protocol allows for different kinds of logic at your IdP. A few options are:

* Your IdP may always ensure users are authenticated as requested
* Your IdP may honor what is requested on a ‘best effort’ basis and indicate the actual authentication method used in the ID-token that is sent to your app.
* Your IdP may send an error response to your app if the requested authentication method was not possible for the user that was asked to login, for whatever reason.

When a user successfully signs in at your IdP, your IdP may or may not return an ACR claim in the ID-token. If your IdP returns the actual authentication method that was used in the ACR claim in the ID-token (and/or Access Token), you can create a [custom User Provisioning microflow](#custom-provisioning) (or [custom access token parsing microflow](#custom-parsing)) to grant or restrict access to specific resources or functionalities based on the level of authentication assurance.

## Testing and Troubleshooting{#testing}

Once you have your app deployed, you can test the SSO set-up by trying to login. If you have multiple IdPs set up, you will be able to choose which IdP to use for authentication. If you have only one IdP provider configured, then you will be taken directly to that IdP's sign in page.

The OIDC SSO module uses two endpoints at your IdP to achieve the SSO. You may get errors from either of these endpoints.

When testing, you can use Postman (or any client application) to check the responses from the various endpoints.

### /authorize

The `/authorize` endpoint logs the end-user in through the browser.

The `/authorize` endpoint may reply with an error-response, for example when the end-user enters a wrong password but also other situations may occur.  The `Error` level response can be retrieved from the OIDC log node.

```log
handleAuthorization: Authorization code missing
StatusCode = 200
error = access_denied
error_description = user is not assigned to the client application.
```

Section 4.1.2.1 of [RFC6749](https://datatracker.ietf.org/doc/html/rfc6749) and section 3.1.2.6 of [OIDC specifications](https://openid.net/specs/openid-connect-core-1_0.html#AuthError), indicate all error codes that may be returned.

### /token

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

### Custom Microflow Implementation Should Be Required to Process Access_Token Roles

If you get the error message “Custom microflow implementation should be required to process Access_token roles” in the Mendix Studio Pro console logs, this indicates you have not completely implemented your custom microflow for parsing access tokens (`CustomATP_…`). See the section on [Access Token Parsing](#access-token-parsing).

### End-Users of App Deployed On Premises Do Not Return to the App After Sign In

If you have deployed your app on premises but did not configure a return URL for your app properly, the end-users of your app are redirected to your IdP for login, but will not be redirected back to your app.

To resolve this, open the Mendix Service Console and ensure that the **Port number** for the **Public application root URL**, **Runtime server port**, and **Admin server port** match.

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/service-console-ports.png" class="no-border" >}}

### `CommunityCommons.RandomStrongPassword` Microflow Does Not Match the Expected Parameters

When you are using OIDC SSO module with Community Commons (version 10.0.3 and above), you may get the following error message in the Mendix Studio Pro console logs:
“The arguments that are passed to Java action CommunityCommons.RandomStrongPassword do not match the expected parameters and need to be refreshed”.
This error indicates that new parameters must be synced with the microflow.

To resolve this issue, either open the microflow used for the OIDC SSO module or refresh it before deploying your Mendix app again.

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/Community Commons error.png" class="no-border" >}}

### Endless Redirect Loop and Runtime Error (Mendix 10.9 to 10.12.2)

When using the OIDC SSO module with Mendix version 10.9 to 10.12.2, you may encounter an endless redirect loop to the login page or you can see a "Runtime operation failed" error message in the UI. This issue is related to the session cookie handling in these versions. To resolve these redirect loop and runtime error, Mendix recommends upgrading to Mendix version 10.12.3 or above.

{{< figure src="/attachments/appstore/platform-supported-content/modules/oidc/runtime-failed.png" class="no-border" >}}

If a user logs in on one tab and then attempts to log in on another tab, a `401` error may initially appear. However, after the browser reloads, the error will be resolved as the session is validated and synchronized.
