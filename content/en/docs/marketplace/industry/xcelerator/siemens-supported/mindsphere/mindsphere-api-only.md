---
title: "Insights Hub API Calls Only"
url: /appstore/industry/mindsphere/mindsphere-api-only/
weight: 300
description: "Describes how to authenticate Insights Hub API calls from a standalone Mendix app by using a technical user and the Siemens Insights Hub API Authenticator."
aliases:
    - /partners/siemens/mindsphere-api-only/
---

## Introduction

{{% alert color="warning" %}}
This information is for standalone Mendix apps that are not fully integrated into Insights Hub but need to incorporate IIoT data from Insights Hub.
{{% /alert %}}

If you have your own user management or SSO solution but want to gather insights via the Insights Hub APIs, this page explains how to do so. It describes how to authenticate Insights Hub API REST calls with a **Technical User** and the **Siemens Insights Hub API Authenticator**.

This approach is not a full integration with Insights Hub and has the following limitations:

* You cannot make your app multitenant. For more information, see [Multi-tenancy](/appstore/industry/mindsphere/mindsphere-development-considerations/#multitenancy) in *Insights Hub Development Considerations*.
* You cannot add your app to the Insights Hub Developer Cockpit.
* End-users cannot use Insights Hub credentials to sign in to your app, so Insights Hub does not know anything about individual app end-users. You must design your app to handle any required security for each end-user.
* You cannot use fine-grained access control on asset level via SDS.

If you prefer a full Insights Hub app, see [Insights Hub Development Considerations](/appstore/industry/mindsphere/mindsphere-development-considerations/) and [Insights Hub Module Details](/appstore/industry/mindsphere/mindsphere-module-details/), or follow these learning paths:

* [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/paths/80/Build-an-Insights-Hub-App-with-Mendix) – teaches you how to develop an app for Insights Hub with Mendix
* [Build an Insights Hub App - Continued](https://academy.mendix.com/link/paths/93/Build-an-Insights-Hub-App---Continued) – helps you dive more deeply into building an Insights Hub app with the Mendix Platform

## Technical User

If your app is not fully integrated with Insights Hub and uses its own user management, signed-in users have no rights to call Insights Hub APIs. In this scenario, Insights Hub provides **Technical Users**. An Insights Hub tenant administrator can create a technical user in the **Insights Hub Settings** app.

To create a **Technical User**, follow the steps in [Technical Users](https://documentation.mindsphere.io/MindSphere/apps/settings/technical-users.html) in the Insights Hub documentation. Make sure the Technical User has the role assignment needed to call the Insights Hub APIs you want to use.

## Authenticating Calls to Insights Hub APIs{#authenticating}

To extract data from Insights Hub, you must authenticate your calls to the Insights Hub APIs. You do this with the [Siemens Insights Hub API Authenticator](https://marketplace.mendix.com/link/component/226260).

Download the **Siemens Insights Hub API Authenticator** by following the instructions in [Downloading Content from the Marketplace](/appstore/use-content/#downloading) in *Using Marketplace Content*.

You make calls to Insights Hub through REST calls, using the standard Mendix [Call REST Service](/refguide/call-rest-action/) functionality. For a full walkthrough, see [How To Consume a REST Service](/howto/integration/consume-a-rest-service/). Calls to Insights Hub must be authenticated.

To authenticate a call, add an **Access token** action before each **Call REST** action in your microflows. You can find the **Access token** action in the toolbox on the right side.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessTokenToolbox.png" alt="Authentication" >}}

The **Access token** action returns a string that contains an access token, which you can use in the **Call REST** action. In the following example, the token string is named *Token*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessToken.png" alt="Authentication" >}}

In the REST call, add an HTTP header called *Authorization* and set its value to the access token.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/CallRest.png" alt="Authentication" >}}

Authentication succeeds only if you provide the correct credentials to the **Access token** action. To do this, set the following in the **_Use me** folder of the *InsightsHubIIotAuthenticator* module:

* **ClientID** – the *clientID* from the **Technical User** you generated
* **ClientSecret** – the *clientSecret* from the **Technical User** you generated
* **GatewayURL** – the gateway URL for your platform:
    * For **Xcelerator**, use `https://api.eu1.siemens.app`
    * For **Insights Hub**, use `https://gateway.eu1.mindsphere.io`
* **TokenURL** – the *TokenURL* from which to fetch the Insights Hub token, in the following format:
    * For **Xcelerator**, use `https://{{tenantId}}.{region}.sws.siemens.com/oauth/token?grant_type=client_credentials`

        Replace `tenantId` and `region` with the values for your destination tenant. For example, `https://1224319040.eu1.sws.siemens.com/oauth/token?grant_type=client_credentials`.

    * For **Insights Hub**, use `https://{tenantName}.piam.{region}.{mindsphere-domain}/oauth/token?grant_type=client_credentials`

        Replace `tenantName`, `region`, and `mindsphere-domain` with the values for your destination tenant. For example, `https://demo.piam.eu1.mindsphere.io/oauth/token?grant_type=client_credentials`.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleConfiguration.png" alt="Authentication" >}}

Add the **Siemens Insights Hub API Authenticator** module role **User** to all your app's user roles. This ensures that the localized session expired message and title can be loaded during app startup.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleRole.png" alt="Authentication" >}}

## Authentication Considerations

### Authenticating During Development

When you develop your app, you can set the **ClientID** and **ClientSecret** constants within the app. You can also override them by using different [Configurations](/refguide/configuration/) within your app settings.

{{% alert color="info" %}}
**Tip:** Use the autofill feature based on a local environment variable for the client secret.

Storing the client secret inside the app is not a good idea from a security perspective. A better approach is to use a local environment variable. Create a user-specific environment variable with **Variable name** equal to your **Client ID** value and **Variable value** equal to your **Client Secret** value.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png" alt="" width="50%" >}}

Restart Studio Pro after you change or add the environment variable.
{{% /alert %}}

For security, do not include the **ClientSecret** value when you deploy or commit the app.

### Authenticating for Deployment

For security reasons, remove the values of **ClientID** and **ClientSecret** from the app model before you deploy your app. Then set the correct values as constants during deployment.

For Mendix Cloud, you can set the values of the constants on the [Model Options](/developerportal/deploy/environments-details/#model-options) tab of the **Environment Details**. For information on how to set these values on other deployment platforms, see [Constants](/refguide/constants/).

## Insights Hub Widgets

If you want to use the [Siemens Insights Hub Widgets](https://marketplace.mendix.com/link/component/110119) in your app, the widgets must use the *Insights Hub API Reverse Proxy*.

To enable the reverse proxy, follow these steps:

1. Set the constant **EnableMindSphereApiReverseProxy** to *true*.
2. Add the microflow **RegisterApiReverseProxy** to the [After Startup](/refguide/runtime-tab/#after-startup) microflow (or microflows) that run when the app starts.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AfterStartup.png" alt="AfterStartup" >}}
