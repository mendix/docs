---
title: "Using the Siemens Insights Hub Monitor Example "
linktitle: "Insights Hub Monitor Example"
url: /appstore/industry/mindsphere/mindsphere-example-app/
weight: 110
aliases:
    - /partners/siemens/mindsphere-example-app/
---

## Introduction

You can write Mendix apps which analyze data held in Insights Hub, the open, cloud-based, IoT operating system from Siemens. To help you build your app, the [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) app is available in the Mendix Marketplace and can be used as the starting point for a new Mendix app.

This documentation provides more explanation of the Insights Hub example app. Please note that this app is not production-ready. It is designed as an example of how you might begin to build a Mendix/Insights Hub app.

You can get more detailed information on how to deploy your app to the Insights Hub Platform in [Siemens Insights Hub – deployment](/developerportal/deploy/deploying-to-mindsphere/). If your are interested in how to develop an Insights Hub app with Mendix, visit the [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/paths/80/Build-an-Insights-Hub-App-with-Mendix) learning path.

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

Your default Browser will open and when your app starts, it will show an error page indicating that the app needs to be registered in the Developer Cockpit first.

### App Registration

Create a new application in [Developer Cockpit](/developerportal/deploy/deploying-to-mindsphere#deploying-your-app)

Add the following Insights Hub API Roles to your app and assign them to correct application roles **admin** and **user**, as shown in the table below:

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


### Scopes and Roles{#scopesroles}

During the app registration process two Insights Hub application Roles *admin* and *user* has been created:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-roles.png" alt="Developer Cockpit application roles" >}}

You can assign these application roles to users in the *Settings* app found on the launchpad.

Create two Insights Hub application Scopes *admin* and *user* and assigned these to the roles as follows:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-scopes.png" alt="Developer Cockpit application roles" >}}

The example app has two Mendix user roles, *Admin* and *User*. These are mapped to the two application scopes *admin* and *user*.

This means that an Insights Hub user who is given the **Admin Role** for the app will be given the *admin* scope and will therefore have the Mendix user roles *admin*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/roles-and-scopes.png" alt="Relationship of Insights Hub App user roles with Mendix App user roles" >}}

For more information see the Insights Hub documentation [Roles and Scopes for Applications](https://developer.mindsphere.io/concepts/concept-roles-scopes.html#available-roles-of-mindsphere-apis).

## Run the app locally

To run and test your app locally follow the steps described in [Local Testing](/appstore/industry/mindsphere/mindsphere-development-considerations/#localtesting).

## Read More

* [Insights Hub Development Considerations](/appstore/industry/mindsphere/mindsphere-development-considerations/)
* [Insights Hub Module Details](/appstore/industry/mindsphere/mindsphere-module-details/)
