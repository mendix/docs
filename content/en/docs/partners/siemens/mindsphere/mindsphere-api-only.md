---
title: "Insights Hub API calls only"
url: /partners/siemens/mindsphere-api-only/
weight: 300
description: "A description of some extra considerations to be taken into account when developing for deployment to Insights Hub"
---

## Introduction

{{% alert color="warning" %}}
This information is for standalone Mendix application which are not fully integrated into Insights Hub but just want to incorporate IIoT Data coming from Insights Hub.
{{% /alert %}}

If you have your own user management or SSO solution, but want to gather insights via the Insights Hub APIs, this page explains how you can achieve it. It describes how you can authenticate Insights Hub API REST calls with the help of a **Technical User** and the **Siemens Insights Hub API Authenticator**.
Please note that this way is not a full integration with Insights Hub and has the following limitations:

* You cannot make your app multi-tenant – see [Multi-tenancy](/partners/siemens/mindsphere-development-considerations/#multitenancy) in *Insights Hub Development Considerations* for more information on multi-tenancy
* Your app cannot be deployed to the Insights Hub platform and cannot be added to the Insights Hub Developer Cockpit
* End-users cannot use Insights Hub credentials to sign in to your app, so Insights Hub does not know anything about individual app end-users — you must design your app to handle any required security for each end-user
* You cannot use the fine grain access control on asset level via SDS.

If you prefer a full Insights Hub app, please see [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/), [Insights Hub Module Details](/partners/siemens/mindsphere-module-details/) or follow the following learning paths:

* [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) - this learning path will teach you how to develop an app for Insights Hub with Mendix
* [Build an Insights Hub App - Continued](https://academy.mendix.com/link/path/93/Build-a-MindSphere-App---Continued) - this learning path is for everyone who wants to dive more deeply into how to build an Insights Hub App with the Mendix Platform

## Technical User

If your application is not fully integrated with Insights Hub and is using its own user management the signed in users have no rights to call Insights Hub APIs. In this scenario, Insights Hub is providing so called **Technical Users**. An Insights Hub tenant administrator is able to create a technical user in the **Insights Hub Settings** app.

Please follow the steps described in the Insights Hub documentation [Technical Users](https://documentation.mindsphere.io/MindSphere/apps/settings/technical-users.html) to create a **Technical User**. Please make sure the created Technical User has the role assignment needed to call the desired Insights Hub APIs.

## Authenticating Calls to Insights Hub APIs{#authenticating}

To extract data from Insights Hub, your calls to the Insights Hub APIs need to be authenticated. This is done through the [Siemens Insights Hub API Authenticator](https://marketplace.mendix.com/link/component/226260).

Download the **Siemens Insights Hub API Authenticator** by following the instructions [Downloading Content from the Marketplace](/appstore/use-content/#downloading) in *Using Marketplace Content*.

Calls to Insights Hub are made through REST calls which can be made using the standard Mendix [Call REST Service](/refguide/call-rest-action/) functionality. See [How To Consume a REST Service](/howto/integration/consume-a-rest-service/) for a full walkthrough on doing this. For calls to Insights Hub, these calls need to be authenticated.

This is done by adding an **Access token** action before each **Call REST** action in your microflows. The **Access token** can be found within the toolbox on the right side.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessTokenToolbox.png" alt="Authentication" >}}

 The **Access token** action returns a string which contains an access token which can be used in the **Call REST** action. In the example below, the token string is given the name *Token*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AccessToken.png" alt="Authentication" >}}

In the REST call, an HTTP Header is added called *Authorization* and this is given the value of the access token.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/CallRest.png" alt="Authentication" >}}

However, authentication will only be successful if the correct credentials are provided to the **Access token** action. This requires the following to be set in the **_Use me** folder of the *InsightsHubIIotAuthenticator* module:

* **ClientID** – this is the *clientID* from the **Technical User** you generated
* **ClientSecret** – this is the *clientSecret* from the **Technical User** you generated
* **TokenURL** – this is the *TokenURL* where to fetch the Insights Hub token from and is in the format:

    `https://{tenantName}.piam.{region}.{mindsphere-domain}/oauth/token?grant_type=client_credentials`

    You have to replace `tenantName`, `region` and `mindsphere-domain` regarding your destination tenant e.g.

    `https://demo.piam.eu1.mindsphere.io/oauth/token?grant_type=client_credentials`

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleConfiguration.png" alt="Authentication" >}}

Add the **Siemens Insights Hub API Authenticator** module role **User** to all your apps user roles to ensure that the localized session expired message / title can be loaded during app startup.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/ModuleRole.png" alt="Authentication" >}}

## Authentication Considerations

### Authenticating During Development

When you are developing your app, you can set the **ClientID** and **ClientSecret** constants within the app. You can also override these by using different [Configurations](/refguide/configuration/) within your app settings.

{{% alert color="info" %}}
**Tip:** Use the autofill feature based on a local environment variable for the *Client Secret*.

Storing the *Client Secret* inside the app is, from a security perspective, not a good idea. A better approach is to use a local environment variable. Create a user-specific environment variable with *Variable name* equal to your *Client ID* value and the *Variable value* equal to your *Client Secret* value.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-development-considerations/envvariables.png"   width="50%"  >}}

Don't forget to restart Studio Pro after you change / add the environment variable.
{{% /alert %}}

For security, the values of the **ClientSecret** should not be included when you deploy / commit the app.

### Authenticating for Deployment

When you deploy your app, you should remove the values of **ClientID** and **ClientSecret** from the app model for security reasons. You should then set the correct value as a constant (Cloud Foundry / Kubernetes environment variable) during the deployment.

For the Mendix Cloud, this can be done by setting the value of the constants on the [Model Options](/developerportal/deploy/environments-details/#model-options) tab of the **Environment Details**. See [Constants](/refguide/constants/) for information on how to set these values on other deployment platforms.

## Insights Hub Widgets

If you want to use the [Siemens Insights Hub Widgets](https://marketplace.mendix.com/link/component/110119) in your app, these will need to use the *Insights Hub API Reverse Proxy*.

To enable this, you will have to do two things:

1. Ensure that the constant **EnableMindSphereApiReverseProxy** is set to *true* to ensure this can happen.
2. Add the microflow **RegisterApiReverseProxy** to the [After Startup](/refguide/app-settings/#after-startup) microflow (or microflows) which are run when the app is started.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-api-only/AfterStartup.png" alt="AfterStartup" >}}
