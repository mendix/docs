---
title: "Mobile SSO"
url: /appstore/modules/mobile-sso/ 
description: "Describes the configuration and usage of the Mobile SSO module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
# Linked from https://marketplace.mendix.com/link/component/223516
---

## Introduction

The [Mobile SSO](https://marketplace.mendix.com/link/component/223516) module allows end-users of your mobile Mendix app to sign in via Single Sign-On (SSO) using the OpenID Connect (OIDC) protocol. As the Mobile SSO module depends on the [OIDC SSO module](https://marketplace.mendix.com/link/component/120371) for authentication, your IdP needs to support this protocol.

The following diagram gives an overview of architecture of the module:

{{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Module architecture.png" max-width=80% >}}

{{% alert color="info" %}} If you are building a Progressive Web Application (PWA), you need to use [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module instead. {{% /alert %}}

There are below versions of the Mobile SSO module, compatible with Mendix and OIDC SSO versions.

| Mobile SSO Version | Mendix Version | OIDC SSO Version |
| --- | --- | --- |
| 2.1.0 | 10.12.3 and above | 3.0.0 and above |
| 2.0.0 | 10.9.0 and above | 2.4.0 and above |
| 1.1.0 | 9.24.2 | 3.0.0 and above |
| 1.0.1 | 9.24.2 | 2.4.0 and above |

### Typical Usage Scenarios

* **B2E app:** Your app is aimed at your company’s employees, and you want these employees to sign in to your app using corporate credentials hosted by your identity provider (IdP) that supports the OIDC protocol. In this case, your app may have its own logic to assign user roles, or you may use authorization information from your IdP as provided to your app using an access token.
* **B2C app:** Your app is aimed at your customers, which could be consumers or employees of the other companies. Consumers may have an identity at a social IdP which uses OIDC, such as Google.

### Features and Limitations

#### Features

The Mobile SSO module has the following features:

* Supports [native mobile apps](/refguide/mobile/introduction-to-mobile-technologies/native-mobile/)
* User role assignment from your IdP

#### Limitations

This module has the following limitations:

* Mendix sessions in the mobile app do not time out.
* Mobile SSO module does not support any other protocol except OIDC.
* IdPs that lack support for Custom callback URLs, such as Facebook, are not supported.
* Private use URI Schemes as per [RFC8252, section 7.1](https://datatracker.ietf.org/doc/html/rfc8252#section-7.1) are not used.

#### Adherence to OAuth/OpenID Connect Protocol Specifications

This section clarifies to what extent a Mobile Mendix app using Mobile SSO module adheres to best practices for mobile SSO as per [RFC 8252](https://www.rfc-editor.org/rfc/rfc8252.txt):

* The Mobile SSO module uses an external browser for sign in and does not utilize an embedded browser.
* Native Mendix apps have a back-end counterpart that holds the credentials for client authentication, as shown in the diagram above. This makes the native app a confidential client instead of a public client.

## Dependencies

The [Mobile SSO](https://marketplace.mendix.com/link/component/223516) module requires your app to be using Mendix 9.24 or above.

It requires the following Marketplace modules to be included in your app:

* [OIDC SSO](https://marketplace.mendix.com/link/component/120371)
* [Native Mobile Resources](https://marketplace.mendix.com/link/component/109513)

## Installation

This guide provides the step-by-step process of integrating the Mobile Single Sign-On (SSO) module into your Mendix Studio Pro application.

1. Add the [Mobile SSO](https://marketplace.mendix.com/link/component/223516) module to your app.
2. Add the necessary dependencies listed above from the Marketplace, if they are not already included in your app.
3. Follow the [OIDC SSO](/appstore/modules/oidc/) documentation to configure the app security settings for the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module.

    {{% alert color="info" %}} From an IdP perspective, Mendix mobile apps behave as single page web apps (SPA), so specific instructions for desktop or mobile apps do not apply. {{% /alert %}}

4. Ensure that you have allocated the following user roles to the Mobile SSO module roles:

    | **User Role** | **Mobile SSO Module Role** |
    | --- | --- |
    | Anonymous | MobileSSO.Anonymous |
    | User| MobileSSO.User |

## Configuration

This section shows you how to configure your app to use Mobile SSO.

### Configuration Settings 

Refer to the [OIDC SSO](/appstore/modules/oidc/) documentation for the configuration settings of the [OIDC SSO](https://marketplace.mendix.com/link/component/120371) module and ensure the **OIDC_Client_Overview** page is appropriately set up.

{{% alert color="info" %}} Configure the IdP in the web application (web page of OIDC SSO using **OIDC_Client_Overview** ). {{% /alert %}}

### Configuring Navigation

In the **Native mobile (tablet & phone)** tab, configure the **Role-based home pages**. To do this, add the **Anonymous** role and set the target with the following options:

* Use `MobileSSO.Login_Native` when you do not want to automatically redirect to the Identity Provider (IdP) login page, especially when only one IdP is configured. This option allows end-users to sign in directly without redirection.
* Use `MobileSSO.Login_Native_Automatic` if you want end-users to redirect automatically to the IdP sign in page when only one IdP is configured.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/configuring navigation.png" class="no-border" >}}

### Configuring Custom Login Page

If you want to customize the login page, make sure to add the **App events** widget in the page and call the `MobileSSO.OL_RegisterDeeplink` nanoflow. This step helps to integrate the custom login page with Mobile SSO module.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Custom login.png" class="no-border" >}}

### Configuring Client Information {#client-info}

Follow the [General OIDC Providers](/appstore/modules/oidc/#general-providers) section of the ***OIDC SSO*** documentation for configuring client information.

The following subsections show how to set up IdP for mobile or web and mobile platforms:

#### Configuring IdP for Mobile

{{% alert color="info" %}} Make sure to add a **Custom callback URL** in the client and IdP. This configuration is optional for web apps but mandatory for mobile apps. For Example, *`APP_NAME`*`://oauth/callback`, where *`APP_NAME`* is an application name which is used to create the application using **Build Native Mobile App** {{% /alert %}}

{{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Configure client information.png" class="no-border" >}} 

When testing locally, add the `makeitnative://oauth/callback` URL in the **Custom callback URL** tab. This configuration also supports signing in with acr_values.

#### Configuring single IdP for Web and Mobile

If you are building SSO application, you can use the common IdP configuration for both web and mobile platform, ensuring that this IdP configuration is not specific to any particular device.

To do this, follow the steps below:

1. Replace the `SUB_GetCallbackURL` sub-microflow from the OIDC SSO module with the `SUB_GetMobileCallbackURL` microflow of the Mobile SSO module in the `handleAuthorizationCode` and `GetAuthorizationURL` microflows. To do this, consider the below parameters: 
    1. In the `handleAuthorizationCode` microflow, set the **Argument** value of the **DeviceType** parameter to *$AuthAttempt/DeviceType* for the `MobileSSO.SUB_GetMobileCallbackURL` sub-microflow.
    1. In the `GetAuthorizationURL` microflow, set the **Argument** value to *$DeviceType* for the `MobileSSO.SUB_GetMobileCallbackURL` sub-microflow.
1. In the Mobile SSO module, go to the **Configuration** in the **helpers** folder, and add the *`APP_NAME`* in the `MobileURLScheme` constant.

### Single Log Out

A standard sign out action will end an end-user’s Mendix session, but it will not end their SSO session. To perform a single sign out, also known as Single Logout (SLO), use the nanoflow `ACT_NativeLogout`. This nanoflow redirects end-user to the end session endpoint of the IdP if it is configured. To do this, add a menu item or button to call the nanoflow `ACT_NativeLogout`.

### Building Native Mobile App {#build-native}

When you are building the native mobile app using **Build Native Mobile App** option, make sure to follow the steps below:

1. Turn on **Deep Link**.
1. After turning on the **Deep Link**, add the same *`APP_NAME`* from *`APP_NAME`*`://oauth/callback` to the **App Scheme**. For more information, see the [Configuring Client Information](#client-info) section above.

{{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Deeplink.png" max-width=80% >}}

### Configuring IdP

The following subsections show how to configure your *Entra ID or Okta IdP*:

#### Configuring IdP for Entra ID

1. On the [Microsoft Entra ID](https://portal.azure.com/#home) portal, select **App Registrations**.
2. Click **New registration**, provide required information, and click **Register**.
3. In the **Authentication** tab, select **No** to disable the option to **Allow public client flows** as this module only supports confidential client flows.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Public client flows.png" max-width=80% >}}

4. Add the following JSON representations to the **Manifest** of the application:

    1. For the application that has been deployed using **Build Native Mobile App**.

        1. Update the **Manifest** in the **Microsoft Graph App Manifest (New)** tab.
        Add the following JSON representations to the `web` section of the **Manifest**.

            ```json
            "web": {
            "homePageUrl": null,
            "logoutUrl": null,
            "redirectUris": [
            "APP_NAME://oauth/callback"
            ]
            }
            ```

            {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/microsoft_graph.png" max-width=80% >}}

        2. Update the **Manifest** in the **ADD Graph App Manifest (Deprecating Soon)** tab by updating the following JSON representations. 

            ```json
            "replyUrlsWithType": [
            {
            "url": "APP_NAME://oauth/callback",
            "type": "Web"
            }
            ],
            ```
        
            {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/ADD_graph.png" max-width=80% >}}

        {{% alert color="info" %}} Use the same *`APP_NAME`* which you used in the **Custom callback URL** tab of the configuration and while building the application using **Build Native Mobile App**. For more information, see the [Configuring Client Information](#client-info) and [Building Native Mobile App](#build-native) sections above. {{% /alert %}}

    2. For local testing, use the JSON below in the **Manifest** of the application:
        1. Update the **Manifest** in the **Microsoft Graph App Manifest (New)** tab.

            ```json
            "web": {
            "homePageUrl": null,
            "logoutUrl": null,
            "redirectUris": [
                "makeitnative://oauth/callback",
                "https://IP_address/oauth/v2/callback"
            ]
            },
            ```

        2. Update the **Manifest** in the **ADD Graph App Manifest (Deprecating Soon)** tab, if you are using the deprecated AAD Graph App Manifest.

            ```json
            "replyUrlsWithType": [
            {
            "url": "https://IP_address/oauth/v2/callback",
            "type": "Web"
            },
            {
            "url": "makeitnative://oauth/callback",
            "type": "Web"
            }
            ]
            ```

        {{% alert color="info" %}} Make sure to add `makeitnative://oauth/callback` to the **Custom callback URL** tab of the configuration. For more information, see the [Configuring Client Information](#client-info) section above. {{% /alert %}}

5. Save the **Manifest** file.
6. In Entra ID, click the **Certificates & secrets** tab of the application and create **New client secret**. You can use this **Value** in the **Client Secret** field on the **OIDC_Client_Overview** page of the OIDC SSO module.
7. Click **Overview** tab of the application and copy **Application (client) ID**. Use this copied value in the **Client ID** field on the **OIDC_Client_Overview** page of the OIDC SSO module.
8. Import the configuration in the page and add the required scopes such as, `openid`, `profile`, and `email`.
9. Save the configuration and you can sign in into the application using Azure SSO.

#### Configuring IdP for Okta

1. Go to the [Okta](https://dev-5541262-admin.okta.com/admin/apps/active) portal and click **Create a new app integration**.
1. Select **OIDC-OpenID Connect** option for the **Sign-in method**.
1. Select **Native Application** for the **Application type** and click **Next**.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Okta1.png" max-width=80% >}}

1. In the **Sign-in redirect URIs** of the **LOGIN** field, add the following application URI:

    1. For the application that has been deployed using **Build Native Mobile App**: *`APP_NAME`*`://oauth/callback`

        {{% alert color="info" %}} Use the same *`APP_NAME`* which you used in the **Custom callback URL** tab of the configuration and while building the application using **Build Native Mobile App**. For more information, see the [Configuring Client Information](#client-info) and [Building Native Mobile App](#build-native) App sections above. {{% /alert %}}

        {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Okta deployed.png" max-width=80% >}}

    2. For local testing: `http://<IP_address>/oauth/v2/callback` and `makeitnative://oauth/callback`

        {{% alert color="info" %}} Make sure to add `makeitnative://oauth/callback` to the **Custom callback URL** tab of the configuration. For more information, see the [Configuring Client Information](#client-info) section above.{{% /alert %}}

        {{< figure src="/attachments/appstore/platform-supported-content/modules/mobile-sso/Okta local.png" max-width=80% >}}

1. Save the configuration and use the **Client Secret**, **Client ID**, and **Automatic Configuration URL** to import the configuration in the **OIDC_Client_Overview** page of the OIDC SSO module.
1. Add the required scopes such as, `openid`, `profile`, and `email`.
1. Save the configuration and you can login into the application using Okta SSO.

## Testing and Troubleshooting

### IdP Integration

After adding the IdP details to the web page, the IdP sign in tab is visible on the mobile screen.

### Login and User Landing

Click **IdP login** to redirect to the IdP sign in page. After successful authentication, you will be directed to the user landing page, indicating successful integration of the Mobile SSO module.

### Sign-in Failure Error

When tryin to sign in multiple times, you may receive a sign-in failure error message. To resolve this error, check your network connection and try signing in again.
