---
title: "Using the Siemens Insights Hub Monitor Example"
linktitle: "Insights Hub Monitor Example"
url: /appstore/industry/mindsphere/mindsphere-example-app/
description: "Describes how to use the Siemens Insights Hub Monitor Example app from the Mendix Marketplace as a starting point for an Insights Hub app."
weight: 110
aliases:
    - /partners/siemens/mindsphere-example-app/
---

## Introduction

You can build Mendix apps that analyze data held in Insights Hub, the open, cloud-based IoT operating system from Siemens. To help you get started, the [Siemens Insights Hub Monitor Example](https://marketplace.mendix.com/link/component/117954) app is available in the Mendix Marketplace. You can use it as the starting point for a new Mendix app.

This document explains the Insights Hub example app in more detail. The app is not production-ready. It is an example of how to begin building a Mendix and Insights Hub app.

For more detailed information on deploying your app to the Insights Hub Platform, see [Siemens Insights Hub – deployment](/developerportal/deploy/deploying-to-mindsphere/). To learn how to develop an Insights Hub app with Mendix, follow the [Build an Insights Hub app with Mendix](https://academy.mendix.com/link/paths/80/Build-an-Insights-Hub-App-with-Mendix/) learning path.

## Prerequisites

To run your app on Insights Hub, complete the prerequisites in this section.

### Roles

You need an Insights Hub user account on a tenant that includes a Developer Cockpit. This account needs the following core roles:

* mdsp:core:Developer
* mdsp:core:StandardUser
* mdsp:core:TenantUser

## Opening the App in Studio Pro

Open Mendix Studio Pro without opening an app, then follow these steps:

1. Open the **Switch to** menu in the top bar of Studio Pro, and click **Marketplace** to open the Mendix Marketplace in your browser:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-icon.png" alt="Marketplace item highlighted in the Studio Pro apps menu" >}}

2. Enter *Insights Hub Monitor* in the search box and select **Siemens Insights Hub Monitor Example** from the search results:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-search.png" alt="Marketplace search results for Insights Hub Monitor Example showing Siemens Insights Hub Monitor Example" >}}

3. Click **Download**, and save *SiemensInsightsHubMonitorExample_V2_0_0.mpk* on your local machine.

4. Go back to Studio Pro, and select **Import App Package…** from the **File** menu to import the downloaded app package.

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-import-app-package.png" alt="Import App Package option in the File menu" >}}

5. Confirm the **App name** and the **App directory**, then click **OK**:

    {{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/app-store-download-project.png" alt="Import App Package dialog with App name and App directory fields" >}}

## Deploying and Running the Example App

You can deploy a Mendix-based app for Insights Hub directly to Mendix, which is the preferred option.

For more information about the deployment options, see [Deploying to Insights Hub](/developerportal/deploy/deploying-to-mindsphere/#deploying-your-app).

To start the deployment process, click **Publish**.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-publish.png" alt="Publish button" >}}

After your app is deployed to Mendix, click **View App**.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/autoreg-view-app.png" alt="View App button" >}}

Your default browser opens. When your app starts, it shows an error page indicating that you must first register the app in the Developer Cockpit.

### App Registration

Create a new app in [Developer Cockpit](/developerportal/deploy/deploying-to-mindsphere/#deploying-your-app).

Add the following Insights Hub API roles to your app and assign them to the correct application roles, **admin** and **user**, as shown in the following table:

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

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-mdsp-api-roles.png" alt="API Roles list in Developer Cockpit with admin and user role assignments selected" >}}

### Scopes and Roles {#scopesroles}

During app registration, Insights Hub creates two application roles: *admin* and *user*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-roles.png" alt="Developer Cockpit Roles tab listing the monitor.admin and monitor.user application roles" >}}

You can assign these application roles to users in the **Settings** app on the launchpad.

Create two Insights Hub application scopes, *admin* and *user*, and assign them to the roles as follows:

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/devcockpit-app-scopes.png" alt="Developer Cockpit Application Scopes with monitor.admin and monitor.user scopes assigned to the admin and user roles" >}}

The example app has two Mendix user roles, *Admin* and *User*. These roles map to the two application scopes *admin* and *user*.

This means that when you give an Insights Hub user the **Admin Role** for the app, that user receives the *admin* scope and therefore has the Mendix user role *admin*.

{{< figure src="/attachments/partners/siemens/mindsphere/mindsphere-example-app/roles-and-scopes.png" alt="Relationship of Insights Hub App user roles with Mendix App user roles" >}}

For more information, see [Roles and Scopes for Applications](https://developer.mindsphere.io/concepts/concept-roles-scopes.html#available-roles-of-mindsphere-apis) in the Insights Hub documentation.

## Running the App Locally

To run and test your app locally, follow the steps in [Local Testing](/appstore/industry/mindsphere/mindsphere-development-considerations/#localtesting).

## Read More

* [Insights Hub Development Considerations](/appstore/industry/mindsphere/mindsphere-development-considerations/)
* [Insights Hub Module Details](/appstore/industry/mindsphere/mindsphere-module-details/)
