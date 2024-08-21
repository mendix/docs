---
title: "Use the Siemens Insights Hub Monitor Example "
linktitle: "Insights Hub Monitor Example"
url: /partners/siemens/mindsphere-example-app/
weight: 110
---

## Introduction

You can write Mendix apps which analyze data held in Insights Hub, the open, cloud-based, IoT operating system from Siemens. To help you build your app, the [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) app is available in the Mendix Marketplace and can be used as the starting point for a new Mendix app.

This documentation provides more explanation of the Insights Hub example app. Please note that this app is not production-ready. It is designed as an example of how you might begin to build a Mendix/Insights Hub app.

You can get more detailed information on how to deploy your app to the Insights Hub Platform in [Siemens Insights Hub – deployment](/developerportal/deploy/deploying-to-mindsphere/). If your are interested in how to develop an Insights Hub app with Mendix, visit the [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/path/80/Build-a-MindSphere-app-with-Mendix) learning path.

## Prerequisites

To run your app on Insights Hub, you need to complete the prerequisites described below.

### Roles

You need an Insights Hub user account on a tenant including a Developer Cockpit - for example, a [Start for free](https://siemens.mindsphere.io/en/start) tenant. This account needs the following core roles:

* mdsp:core:Developer
* mdsp:core:StandardUser
* mdsp:core:TenantUser

## Opening the App in Studio Pro

Open Studio Pro without opening an app and follow these steps:

1. Open the *Switch to* menu in the top bar of Studio Pro and click the Marketplace icon to open the Mendix Marketplace in the browser:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-icon.png" >}}

2. Enter *Insights Hub Monitor* in the search box and select **Siemens Insights Hub Monitor Example** from the search results:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-search.png" >}}

3. Click **Download**, and store the **SiemensInsightsHubMonitorExample_V2_0_0.mpk** on your local machine.

4. Go back to your Studio Pro and select **Import App Package…** from the **File** menu to import the downloaded app package.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-import-app-package.png" >}}

5. Confirm the **App name**, and the **App directory**, then click **OK**:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-download-project.png" >}}

## Deploy and Run the Example App

A Mendix-based application for Insights Hub can be deployed to Mendix or to Insights Hub. Deploying to Mendix is quite easy and is the preferred option as you can then use the Auto Registration process.
For more information about the deployment options see [Deploying to Insights Hub](/developerportal/deploy/deploying-to-mindsphere/#deploying-your-app).

To start the Auto Registration process just click the **Publish** button.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-publish.png" >}}

Once your app is deployed to Mendix, click **View App**.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-view-app.png" >}}

Your default Browser will open and when your app starts, it will trigger the registration process.

### Auto Registration

All apps running within Insights Hub need to be registered. When you open your app for the first time, it will recognize that is currently unregistered and ask you to perform the registration. You can do this manually in the Developer Cockpit, but the easier way is the Auto Registration process we follow here.

1. Click **Start Auto Registration**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-choose-app-registration.png" alt="Choose app registration" >}}

    The process now tries to figure out on which tenant your app should be registered. Therefore you have to sign in.

2. Enter your credentials and click **Sign In**.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-web-key.png" alt="Choose app registration" >}}

    {{% alert color="info" %}}If you have more then one tenant with a Developer Cockpit option, Insights Hub will present you with a list of those tenants. Choose the tenant in which you want to register your app.<br/><br/>If you have only one tenant on Insights Hub, the process will automatically select this tenant for you.{{% /alert %}}

3. Give a **Display Name**, **Internal Name**, and, optionally, a **Description** in order to register your app.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-name-description.png" alt="Choose app registration" >}}

    On a **Start for Free** tenant the **admin** role will be assigned automatically to your account. For all other tenants, you have to select at least one application user role which will be assigned to your account automatically.

4. Click **Register** to start the registration process on your tenant.

    After a few seconds, a summary page is shown.

    {{% alert color="warning" %}}Do **not** launch your application directly.{{% /alert %}}

    The Siemens Insights Hub Monitor Example app uses quite a lot of Insights Hub APIs. When you register an application you also have to grant access to each API you want to use in your application. Therefore, you have to do this for the Operations Insight application.

5. Click **Developer Cockpit** to take you to grant access to the APIs.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-registration-completed.png" alt="Choose app registration" >}}

    A new tab opens showing the registration detail of your app.

6. Click **Configure** to add the required Insights Hub roles.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-details.png" alt="Choose app registration" >}}

7. Add the following Insights Hub API Roles to your app and assign them to correct application roles **admin** and **user**, as shown in the table below:

    | **Insights Hub application role** | **Admin** | **User** |
    | ------------------------------- | --------- | -------- |
    | mdsp:core:assetmanagement.standarduser | X |  X |
    | mdsp:core:em.eventcreator | X |   |
    | mdsp:core:em.eventmanager | X |   |
    | mdsp:core:em.eventviewer | X |  X |
    | mdsp:core:iot.filAdmin | X |   |
    | mdsp:core:iot.filUser | X |  X |
    | mdsp:core:.iot.tsaUser | X |  X |
    | mdsp:core:.iot.timUser | X |  X |
    | mdsp:core:mindconnect.fullaccess | X |   |
    | mdsp:core:mindconnect.readonly | X |  X |
    | mdsp:core:tm.tenantUser | X |  X |
    | mdsp:core:tsm.full-access | X |   |
    | mdsp:core:tsm.read-only | X |  X |

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-mdsp-api-roles.png" alt="Choose app registration" >}}

    The app configuration is finished now.

8. Switch back to the **Registration completed!** browser tab and click **Launch your application**, which will start the app.  

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/oi-home.png" alt="Choose app registration" >}}

### Scopes and Roles{#scopesroles}

The auto registration process has created two Insights Hub application Roles *admin* and *user*:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-roles.png" alt="Developer Cockpit application roles" >}}

You can assign these application roles to users in the *Settings* app found on the launchpad.

In addition, the auto registration process has created two Insights Hub application Scopes *admin* and *user* and assigned these to the roles as follows:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-scopes.png" alt="Developer Cockpit application roles" >}}

The example app has two Mendix user roles, *Admin* and *User*. These are mapped to the two application scopes *admin* and *user*.

This means that an Insights Hub user who is given the **Admin Role** for the app will be given the *admin* scope and will therefore have the Mendix user roles *admin*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/roles-and-scopes.png" alt="Relationship of Insights Hub App user roles with Mendix App user roles" >}}

For more information see the Insights Hub documentation [Roles and Scopes for Applications](https://developer.mindsphere.io/concepts/concept-roles-scopes.html#available-roles-of-mindsphere-apis).

## Run the app locally

To run and test your app locally follow the steps described in [Local Testing](/partners/siemens/mindsphere-development-considerations/#localtesting).

## Read More

* [Insights Hub Development Considerations](/partners/siemens/mindsphere-development-considerations/)
* [Insights Hub Module Details](/partners/siemens/mindsphere-module-details/)
