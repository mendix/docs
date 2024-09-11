---
title: "Cloud Foundry"
url: /developerportal/deploy/cloud-foundry-deploy/
weight: 50
description: "Describes how to deploy to a Cloud Foundry environment which does not have Mendix support in the Mendix Portal."
aliases:
    - /deployment/cloud-foundry/index.html
    - /howto/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide8/deploying-a-mendix-app-to-cloud-foundry.html
    - /refguide9/deploying-a-mendix-app-to-cloud-foundry.html
    - /deployment/cloud-foundry/
    - /howto/deploying-a-mendix-app-to-cloud-foundry
    - /refguide/deploying-a-mendix-app-to-cloud-foundry
    - /refguide8/deploying-a-mendix-app-to-cloud-foundry 
    - /refguide9/deploying-a-mendix-app-to-cloud-foundry
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

Mendix apps can be deployed to a variety of different environments, for example Mendix Cloud, on-premises, or Kubernetes.

Mendix apps can also be deployed to any cloud platform which supports a version of Cloud Foundry, database, and cloud storage at or above the minimum required version which supports Mendix. For specific version numbers see [Mendix System Requirements](/refguide/system-requirements/). 

The advantages of Cloud Foundry are:

* Open source
* Horizontal scaling
* Applications run inside stateless containers
* Applications are only reachable over HTTP, HTTPS, or WebSockets
* Binding services to applications for persistence, monitoring, email, etc.
* Source code as input, running application as output
* Extending to more software architectures via custom buildpacks
* Automatic health monitoring and recovery

For more information on running Mendix apps on Cloud Foundry, see the [Mendix Cloud Foundry BuildPack](https://github.com/mendix/cf-mendix-buildpack). This Git also explains how Mendix apps can also be deployed to Cloud Foundry environments using command line instructions.

{{% alert color="info" %}}
Specific Mendix versions require specific versions of the buildpack. For more information, see [Supported Mendix Versions](https://github.com/mendix/cf-mendix-buildpack#supported-mendix-versions).
{{% /alert %}}

In this how-to you will learn how to do the following using Studio Pro and browser-based configuration options:

* Configure Cloud Foundry in Studio Pro and the service providing it
* Add services to the app
* Deploy your app to Cloud Foundry
* Troubleshoot

### Cloud Foundry on SAP

Cloud Foundry providers like SAP are made available within the Mendix Portal. It is recommended that you use the Mendix Portal for deploying your application to these clouds. See the detailed documentation for [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/).

Only use the instructions in this document if you have specific requirements which the recommended method does not support.

## Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest version of Studio Pro from the [Mendix Marketplace](https://marketplace.mendix.com/link/studiopro/)
* Have access to a service account with the rights to create new applications and services.

## Configuring Cloud Foundry in Studio Pro {#configuring-cloud-foundry-in-studio-pro}

To deploy a Mendix app to Cloud Foundry, you have to configure the settings in Studio Pro.

1. Open Studio Pro, choose the menu option **Run > Edit Cloud Foundry Settings**:

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings.png" class="no-border" >}}

2. Enter the following in the credentials of the **Edit Cloud Foundry Settings** window:

    * **API endpoint** is the endpoint of the platform which you will be able to get from the platform documentation. For example:
          * `https://api.cf.eu10.hana.ondemand.com` for SAP Frankfurt
    * **User name** is the name of your account on the platform
    * **Password** is the password which authenticates your account

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings-window.png" class="no-border" >}}

3. Click **Next**. You will be logged onto the platform.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-settings-details.png" class="no-border" >}}

4. Enter the following details, which will be constrained by the platform account you are using:

    * **Organization**
    * **Space**
    * **App** – *Create new app*
    * **Domain** – depending on the platform there may be a choice of domain name
    * **App name** – the name of your app. The windows indicates what the full URL will be by appending the domain name.
    * **Buildpack** – depending on the platform, you may be able to customize the buildpack.

5. Click **Next**. The Cloud Foundry *App* will be created on the platform. Note that this is currently just the environment for the app and will not contain the Mendix app until you have deployed it.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/edit-cf-configure-app.png" class="no-border" >}}

{{% alert color="warning" %}}
Your Cloud Foundry environment needs to be configured with the resources needed by the Mendix app. You cannot run your app until it has the resources it needs. 
{{% /alert %}}

Apps make use of services (for example, databases, load balancers, and memory tools). A Mendix application requires the following services on the platform:

* Database
* Route (*This may be configured automatically, or may have to be added as a service*)

In addition to these required services, the following services are optional:

* File Store
* XSUAA Service (*SAP Business Technology Platform (SAP BTP) only*)
* Connectivity Service (*SAP BTP only*)

This how-to will describe adding the database and file store only. Additional services can be added in the same way. There is usually a limit to how many resources you can add to a trial account so you may only be able to deploy a single app into a trial account without running out of resources.

## Add a Database Service to Your App

To configure the Cloud Foundry environment, you will need to go to the console for your platform. You must logon with the same credentials which you used when creating a Cloud Foundry environment from Studio Pro.

All these consoles have similar features which allow you to select services, bind them to your app, and view details of the environment and the app. For example:

* [SAP](https://account.hanatrial.ondemand.com/cockpit#/home/trialhome)

{{% alert color="info" %}}
The images in this document are mainly taken from a previous hosting option, the Pivotal Web Services console, which is no longer available.
{{% /alert %}}

To add a database service to your app, follow these steps:

1. Navigate to the space where you created your app. The environment for the app you created is there, but it isn't running yet. This is because it doesn't have any services attached to it.
2. Find the list of services which you can add. This may be in a **Service Marketplace** or you may need to **Add Service** to get a list of services you can add. Note that services are provided to spaces, not to individual apps.
3. Select a database which is supported by Mendix. Supported databases include PostgreSQL, DashDB, Compose For PostgreSQL, ClearDB MySQL, and ElephantSQL (PostgreSQL as a service)

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/marketplaces.png" class="no-border" >}}

4. Select the plan that fits your needs. Each database will have different plans with, for example, different memory, space, and clustering. These will each have different costs associated with them, but there will usually be a development version which you can use for free. 

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/db-service-plans.png" class="no-border" >}}

5. Configure the database by setting the following:

    * **Name** – the name which you want to give the database. It is recommended that this includes the name of the app to which you are going to bind it. Then you can easily select the correct database if you have deployed several in the same space.
    * **Space** – the space to which you want to add the instance
    * **App** – this is the app to which you want to bind this database. That is, the app which is going to store its data in this database.

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/db-configure.png" class="no-border" >}}

    {{% alert color="info" %}}Different consoles may use slightly different names for these configuration items.{{% /alert %}}

Once you have configured the database, you can deploy your app, provided there are no other requirements for the platform you have selected (you may, for example, need to bind a route to your app if it is not created automatically).

## Add a File Store Service to your App

FileDocuments in your application (for example, binary objects such as images) are not stored in the database. If you use them in your app, and want them to persist between sessions, they need to be stored in persistent file storage.

This is a service which you need to attach to your application in the same way as the database, above. For supported cloud file storage services see the [Mendix System Requirements](/refguide/system-requirements/).

{{% alert color="info" %}}
Some trial accounts may not include object storage. 

You may need to configure your file store by using environment variables. See the [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack) for more information.
{{% /alert %}}

## ⚠ Deploy Your App to Cloud Foundry (Deprecated)

1. Open Studio Pro
2. Open the app you want to deploy to Cloud Foundry.
3. Choose the menu option **Run > Run on Cloud Foundry**:

    {{< figure src="/attachments/deployment/cloud-foundry-deploy/run-on-cf.png" class="no-border" >}} 

The Mendix app will now be deployed to the configured Cloud Foundry app and started automatically

{{% alert color="warning" %}}Deploying directly to Cloud Foundry from Studio Pro is deprecated. This functionality will be removed in Mendix 11.{{% /alert %}}

## Cloud Foundry Environment Variables

After deploying an app from Studio Pro, two variables will be added automatically to the application environment.

* **ADMIN_PASSWORD** – the password of the default admin of your Mendix app. Note that if you haven't changed it in Studio Pro, you will be unable to deploy your app until you change it to something more secure
* **DEVELOPMENT_MODE** – *true* by default; this allows the app to be run in the cloud without security being turned on: change it to false to run the app in production 

{{< figure src="/attachments/deployment/cloud-foundry-deploy/app-variables.png" class="no-border" >}}

## Troubleshooting

If you encounter any problems, you should consult the application logs. These are available from the console of your chosen platform.

1. Navigate to your app in the platform console.
2. Open the **Logs**.

{{< figure src="/attachments/deployment/cloud-foundry-deploy/cf-log.png" class="no-border" >}}

### Cannot Push Project Folder

When using the buildpack to push a Mendix project folder to a Cloud Foundry cluster, the push fails with the following error message: *Cannot open assembly 'MendixBuilder/modeler/mxbuild.exe': no such file or directory.*

#### Cause

Pushing the project folder to a Cloud Foundry cluster is not currently supported.

#### Solution

To resolve the issue, implement one of the following workarounds:

* If the app model is stored on the Mendix Teamserver, use the Build API to [build a deployment package](/apidocs-mxsdk/apidocs/build-api/#start-building-deployment-package), and push that package with the CF buildpack.
* [Build a deployment package from Studio Pro](/refguide/app-menu/#create-package), and push that package with the CF buildpack.
* Run [MxBuild](/refguide/mxbuild/) from your CI/CD pipeline to build a deployment package, and push that package with the CF buildpack.

This issue will be solved in an upcoming version of the buildpack.

## Read More

* [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)
