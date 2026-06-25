---
title: "SAP Business Technology Platform"
linktitle: "SAP BTP"
url: /developerportal/deploy/sap-cloud-platform/
weight: 10
description: "Describes how to deploy to SAP Business Technology Platform."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

As an SAP developer, you want to deploy your Mendix app on the SAP Business Technology Platform (SAP BTP). This document explains how to create environments, deploy to SAP BTP, and manage these deployments using the Mendix Portal.

This document describes two ways of managing SAP BTP:

* Initial setup of the environment when creating a new app – see the [Set Up SAP BTP for the First Time](#FirstTime) section
* Create a new environment for an existing app – see the [Create a New Environment](#NewEnvironment) section

{{% alert color="info" %}}
You can deploy Mendix applications to Cloud Foundry regions on SAP Business Technology Platform, not to Neo regions.
{{% /alert %}}

## Setting Up SAP BTP for the First Time {#FirstTime}

Before you can manage your SAP BTP using the Mendix Portal, set it up. There are two circumstances under which you need to set up SAP BTP for the first time:

1. You have an existing app that has never been deployed on SAP BTP, and you want to change the cloud settings – see [Change Cloud Settings](#ChangeCloudSettings)
2. You are creating a new app from an SAP app template – see [New SAP App](#NewSAPApp)

### Changing the Cloud Settings {#ChangeCloudSettings}

In this scenario, you have an existing app which is running in another environment, for instance, on Mendix Cloud. To change this, open your app in [Apps](https://sprintr.home.mendix.com/), go to **Settings**, and switch to the **Cloud Settings** tab.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/cloud-settings.png" alt="" >}}

Click **Set up** on **SAP BTP Cloud Deployment** to go to the SAP BTP welcome page.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/cloud-settings-landing-page.png" alt="" >}}

Click **Getting Started**, and continue with [Set Up Region](#SetUpRegion).

### New SAP App {#NewSAPApp}

In this scenario, you choose a Mendix app template for SAP from the **SAP Apps** tab and give it a name.

{{% alert color="warning" %}}
The app name that you provide is passed to SAP BTP as the host name parameter used when creating [routes](https://help.sap.com/docs/btp/sap-business-technology-platform/create-routes). Because of that, the name that you use for your SAP app should only contain characters that are valid when used in a host name (such as ASCII letters from A to Z, digits from 0 to 9, and hyphens). If your app name contains an invalid character, you will receive an error message when trying to create the app.
{{% /alert %}}

Once the app has been created, you can continue with [Set Up Region](#SetUpRegion).

### Setting Up the Region {#SetUpRegion}

An SAP BTP login screen appears. Select the region where your SAP BTP is located.

{{% alert color="info" %}}
Currently supported regions are:

* Australia (Sydney) 
* AWS Japan 
* AWS Singapore 
* Azure Japan 
* Azure Singapore 
* Azure US East (VA) 
* Azure US West (WA)
* Brazil (São Paulo)
* Canada (Montreal) 
* Europe (Frankfurt)
* Europe (Frankfurt) - 004
* Europe (Netherlands)
* Europe (Netherlands) - 001
* US Central (IA) Beta 
* US East (VA)
* US East (VA) - 001

Contact Mendix Support if you have a requirement for an additional region.
{{% /alert %}}

Make sure that you have enough quota in this region for your organization to run a Mendix app. You need enough quota to create the following:

* Database
* Route
* Binding to XSUAA

If you have already signed in to SAP and your SAP session has not expired, you only have to choose the region. If you do not have a current SAP session, you are also asked for your SAP credentials. Providing your credentials grants the Deployment Portal access to manage your SAP BTP account.

You may be asked to provide your credentials in one of two ways:

* You are taken to the SAP authentication page to enter your credentials. In this case, your SAP user name (email address) must be the same as your Mendix user name.
* The Mendix Portal asks for your credentials, which it then uses to obtain an access token from SAP. The Mendix Portal then uses the access token, but does not store your credentials. (Note that this method is being deprecated.)

{{% alert color="info" %}}
If you have issues using SAP authentication, refer to [SAP Single Sign-On](/developerportal/deploy/sap-cloud-platform/sap-single-sign-on/).
{{% /alert %}}

Provide the final details for the SAP BTP development environment.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/creating-development.png" alt="" >}}

Choose a **Domain**, **Organization**, and **Space** which is configured for you in this region.

If you do not choose a **Custom database**, you can still choose from a range of different databases, such as PostgreSQL, Hyperscaler Option, and SAP HANA. Ensure that the database you choose is supported by your quota plan for this region and organization. See [Databases in SAP BTP](/developerportal/deploy/sap-cloud-platform/databases/) for important information on selecting the correct database for your app.

If you select **Yes** for **Custom database**, provide the details for the **Name** and the **Plan**.

After the environment has been created successfully, a confirmation message appears. Your development environment is now configured, and you can develop your app.

## Creating a New Environment {#NewEnvironment}

You can create several environments for your app. For example, you may have created a development environment, but you may want environments for test, acceptance, production, and so forth. Additionally, when you switch from another cloud, you need to create at least one environment for your Mendix application.

You can do this in the **Environments** page after opening your app in [Apps](https://sprintr.home.mendix.com/).

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/finish-environment.png" alt="">}}

The **Environments** page shows the following tabs:

* An **Overview** of environments for this app
* A list of **Deployment Packages** for this app
* An overview of the deployment **Activity** performed on this app

To create a new environment, perform the following steps:

1. Click **Add Environment** to start the wizard.

2. Select the region where you want your app to be deployed. If no session is active for that region, or the current session does not have access to that region, you may need to enter your SAP credentials for that region.

3. Select the **CF Domain**, **Organization**, and **Space** of your app. The URL of the domain forms part of the application's URL. The URL of the application will be:

    ```text
    {appname}-{environment name}.{domain}
    ```

    An example URL is:

    ```http
    https://myapp-development.cfapps.eu20.ondemand.com
    ```

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/add-environment.png" alt="">}}

4. Click **Next**.

5. Enter the name of the environment. This can be anything you choose, for example, Test, Acceptance, or Production.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/new-environment.png" alt="" >}}

6. Set the size of the memory that the app needs in order to run. This can also be changed later.

7. Set **Development Mode** to *Yes* if you want the application to run with the Mendix security level of Prototype/demo, or *No* for no security. This is not recommended for acceptance or production environments.

8. Select the database you would like to use. Be aware that even if a specific database is part of the Marketplace, it could still be unavailable because of limitations imposed by the quota of your organization. See [Databases in SAP BTP](/developerportal/deploy/sap-cloud-platform/databases/) for information on selecting the correct database for your app.

    If you choose **Custom Database**, enter a **Name** for the database and the **Plan**.

9. Enable **ObjectStore** if your application makes use of file document or image objects. Other sorts of objects do not need **ObjectStore** to be enabled.

10. To configure logging, select the **Logging** service from the dropdown.

    {{% alert color="info" %}}**application-logs** has been the default logging service, but will be deprecated soon. See [SAP Application Logging Service](https://help.sap.com/docs/application-logging-service/sap-application-logging-service/what-is-sap-application-logging-service) for more details on the deprecation of **Application Logs**. For older environments still using the **Application Logs** service, see the [Migrating from SAP Application Logging to SAP Cloud Logging](#migrating-cloud-logging) section to ensure continued logging support.{{% /alert %}}

11. Set a **Subscription Secret** (required). This secret is associated with your Mendix production license. By entering the subscription secret, your application runs in this environment as production. If the subscription secret is invalid, your app still runs, but restarts every two to four hours and has a limitation of six concurrent users.

    {{% alert color="info" %}}If you do not have a subscription secret, refer to [Obtaining a Mendix License](/developerportal/deploy/licensing-apps-outside-mxcloud/#get-license) of *Licensing Apps* for details on submitting a request to Mendix Support.{{% /alert %}}

12. Optionally, you can add **Redirect URLs** if you want the user to be redirected to a custom URL after they have logged in using XSUAA.

13. Click **Next** to create the environment and finish the setup.

An environment is created. With more than one environment created, you can transport your application between environments. See [Transporting to an Environment](#transport) for more information.

## Preparing Packages for Deployment

There are two ways to get a package ready to deploy to SAP:

* Creating a package directly from a version of the app model held in Team Server
* Uploading a package which has already been created

### Creating a Package from Team Server

At any time, you can create a new deployment package from a committed version of the project. If you are working with Mendix Studio Pro, you will first have to commit the project.

{{% alert color="info" %}}
You can also deploy your app automatically from Studio Pro. However, you have less control over the deployment.

If you click **Run** or **Publish** in Studio Pro, this automatically does the following:

1. Commits the app
2. Generates a deployment package
3. Deploys the deployment package to the first available environment (this replaces any app which is currently running in this environment)
{{% /alert %}}

{{% alert color="warning" %}}
You still have to deploy your app in [Apps](https://sprintr.home.mendix.com/) the first time to ensure that all the services are bound correctly.
{{% /alert %}}

1. Open the app in [Apps](https://sprintr.home.mendix.com/). In the **Environments** page, select the **Deployment Packages** tab. This tab shows the list of built packages. 

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/deployment-package.png" alt="">}}

2. Click **Create a Package** and select the **Branch** on the Team Server which you want to use. Click **Next**.

3. Select the **Revision** of the branch you want to build and click **Next**.

4. Add a **New version** number and **Tag description** as required. The revision number is added to the version number automatically.

5. Click **Build this revision** to build the package.

### Uploading an MDA

Alternatively, you can upload an MDA which has already been created from the app model, for example, using [Create Deployment Package](/refguide/create-deployment-package-dialog/) from the **App** menu in Studio Pro.

1. Click **Upload a Package** in the **Deployment Packages** tab.

2. Select the package accessible to your local machine.

3. Click **Upload** to upload the MDA.

The package is added to the list of packages in the **Deployment Packages** tab. To deploy your package, follow the instructions in the [Deploy Package](#DeployPackage) section.

{{% alert color="info" %}}
There is a limit of 200 MB on the size of the MDA file you can upload to the Mendix Portal for SAP BTP deployment.
{{% /alert %}}

## Deploying a Package {#DeployPackage}

{{% alert color="warning" %}}
SAP BTP [has a limit of 1.5 GB](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/Cloud/en-US/9c7092c7b7ae4d49bc8ae35fdd0e0b18.html#loio9809fa4f02cb4696baea5c23d6eaac94) on the size of a deployment package.
{{% /alert %}}

A green tick indicates that the build has finished. Click the deploy icon ({{% icon name="deploy" %}}) to deploy the package to SAP BTP.

### Transporting to an Environment {#transport}

1. In the **Transport** tab, change the deployment **Environment** if required.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/transport.png" alt="">}}

2. The **Timeout (seconds)** value indicates how long Cloud Foundry will wait between starting an app and the first healthy response from the app before deciding that the application has failed to start. For some apps, the default (60 seconds) is too short. If your app is failing to start, you can try increasing this value.

3. Click **Transport** to deploy the package to the SAP environment. This replaces any current app deployed to this environment. If the app is already running, stop it so that your new app can be deployed.

Environments without deployed apps do not have the transport option available.

You can also transport to the required environment from the **Overview** tab of the **Environments** page. 

### Configuring an Environment {#ConfigureTheApplication}

1. Once your package is transported, you are redirected to the **Configure Environment** tab.

2. To change any constants from the **Constants** list, select the constant you want to edit and click the edit ({{% icon name="pencil" %}}) icon.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/edit-constants.png" class="no-border" >}}

3. In the **Scheduled Events** section, select the scheduled event you want to *Enable* or *Disable* and click **Next**. For more information, refer to [Scheduled Events](/developerportal/deploy/sap-cloud-platform/environments/#schedules-events).

### Unbinding and Deleting Service Instances    

1. In the **Services** tab, select any additional services you need for your app. For more information, see the [Services tab](/developerportal/deploy/sap-cloud-platform/environments/#binding-services).

    {{% alert color="warning" %}}In your initial deployment, do not remove any of the services with the status **Bound Services**. For a new app, these services are required for the correct deployment of the app.{{% /alert %}}

2. If you want to remove a service instance from your environment, click the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) menu for the service and select **Unbind Service** or **Delete Service**.

    The options do the following:

    * **Unbind Service** – unbinds the service instance and moves it to the **Services To Be Bound** section. The service is bound next time your app is restarted.
    * **Delete Service** – unbinds the service instance from the application and deletes it from your environment.

{{% alert color="info" %}}Once the service is deleted, it is deleted from the app environment and returned to the list of **Available Services**. If the service is unbound but not deleted, it is returned to the list of **Services To Be Bound** and is rebound next time the app is restarted.{{% /alert %}}

### Runtime Settings and Environment Variables

Click **Next** to continue to the **Runtime** tab. Here, you can **Add**, edit ({{% icon name="pencil" %}}), or delete ({{% icon name="trash-can-filled" %}}) custom runtime settings and environment variables. For more information, refer to [Runtime](/developerportal/deploy/sap-cloud-platform/environments/#runtime-tab). Click **Next**.

### Starting the Application

1. On the **Start Application** tab, you can see the application details. Click **Start application** to start the application on SAP BTP.

    {{% alert color="info" %}}This binds any services which are in the status **Services To Be Bound**.{{% /alert %}}

2. When the application has been started, you are taken to the **Environment Details** page for the selected environment. See [Environment Details](/developerportal/deploy/sap-cloud-platform/environments/).

## Deleting an App

If you are the last person to leave a Mendix app, you can delete the app. However, this does not delete the app or resources on SAP BTP. To leave the app, find it on the [My Apps](https://sprintr.home.mendix.com/link/myapps) page in the Mendix Portal and click **Leave app**.

If you are the last member of the app development team, you are asked if you want to delete the app.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/delete-app.png" alt="" >}}

{{% alert color="info" %}}
This action does not stop the app or delete the deployment of the app in SAP BTP.

If you want to delete your app and all its resources, delete the environment and resources first before you leave the app via the Mendix Portal.
{{% /alert %}}

You can still delete the app and its resources from the SAP BTP cockpit, but you will then have to remove all the resources individually.

## Migrating from SAP Application Logging to SAP Cloud Logging {#migrating-cloud-logging}

Since SAP Application Logging will soon be deprecated, migrate your logging service to SAP Cloud Logging for older environments still using SAP Application Logging. To complete the migration, follow these steps:

1. In the **Services** tab of the **Environment Details** page, search for and select **cloud-logging** in the **Available Services** field.

    {{% alert color="info" %}}Your user account must have entitlements for the SAP Cloud Logging service in SAP BTP.{{% /alert %}}

1. Select the appropriate **Plan** and upload a file if required.
1. Click **Connect Selected Services** and restart your application to bind the new SAP Cloud logging service.
1. At this point, both the **application-logs** and **cloud-logging** services are active for your application.
1. Retain the **application-logs** service until its log retention period ends to ensure access to existing log entries. Then, delete it following the instructions provided in the [Unbinding and Removing Services](/developerportal/deploy/sap-cloud-platform/environments/#unbinding-and-removing-services) section. After this, only the new SAP Cloud Logging service remains active.
1. When using the **cloud-logging** service, upgrade **SapApplicationLogs** to the latest version. If you are using an older version, update the **Default Value** of the **ApplicationLoggingService** constant to *cloud-logging* in the [SAP Logging Connector](https://marketplace.mendix.com/link/component/110219). For more information, refer to the [Using the Connector](/appstore/modules/sap/sap-logger/#using-the-connector) section of *SAP Logging Connector*.
1. You can view the logs of an environment using SAP Cloud Logging in your application's logs. For more details, see the [Viewing the Logs](/developerportal/deploy/sap-cloud-platform/sap-monitoring/#viewing-the-logs) section of *Monitoring Environments in Mendix Apps on SAP BTP*.

## Troubleshooting

If you encounter any issues with your apps on SAP BTP, use the following troubleshooting tips to help you solve them.

### Environment Is Not Created

If you add an environment and it fails to be created, it will be shown with a red symbol next to it on the Environments page:

#### Cause

This could be caused by exceeding your organization's quota limit for a service which you are trying to create, or for some other reason. To find the exact cause, do the following:

1. Click **Details** next to the failed environment.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/failed-details.png" alt="" >}}

2. Click **Details** on the error message at the top of the page and you will get a detailed description of the reason why the environment creation failed.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/failed-more-details.png" alt="" >}}

#### Solution

Resolve the issue described in the error message.

### App Does Not Start {#appnotstart}

Under some circumstances, an app with a service in the **Services To Be Bound** status will not restart.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/error-service-bind.png" alt="" >}}

#### Cause

This indicates that SAP BTP cannot bind the service, even though it has been instantiated correctly. 

#### Solution

If you remove the service from the app, the app restarts successfully.

If you are trying to bind more than one new service, you cannot identify within the Mendix Portal which service is causing the issue. You may need to remove all the services or go to SAP BTP cockpit, where you can use the service name in the error message to find which service is causing the error.

### An Error Occurs While Deploying App from Studio Pro

If an app is deployed to SAP using the Studio Pro **Run** or **Publish** button before it has been started from the Mendix Portal, the deployment fails. 

#### Cause

The deployment fails because the Marketplace services have not been bound.

#### Solution

If you use the Mendix Portal to look at the details of the environment to which you are deploying, you see that the services are still waiting to be bound.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/not-bound-error.png" alt="" >}}

Start the app from the Mendix Portal to bind the services. Once they are bound, you can deploy your app from Studio Pro as usual.

### Error: Unable to Initialize Metrics Client: Unsupported Metric Type

The app cannot be started with Datadog, Dynatrace, or other similar tools configured. The following error is displayed: `Caused by: com.mendix.metrics.MonitoringConfigurationError: Unable to initialize Metrics client: unsupported metric type: statsd`

#### Cause

Starting from Mendix 9.7, support for `statsd` is removed.

#### Solution

1. In the [Runtime tab](/developerportal/deploy/sap-cloud-platform/environments/#runtime-tab), in the **Custom Environment Variables** section, add a new variable with the following settings:

    * **Supported** – select **Yes**
    * **Name** – select **NON_MENDIX_PUBLIC_CLOUD**
    * **Value** – select **true**

1. Redeploy your application and restart it. Just restarting the app is not sufficient because additional dependencies need to be included.

## Status of SAP BTP Deployment

The Mendix status page ([https://status.mendix.com/](https://status.mendix.com/)) shows the current status of Mendix services. If you have issues with deploying to SAP BTP via the Mendix Portal, check the Mendix status page to see if SAP BTP deployment is operational (under **Mendix Services**) or if there are other Mendix issues which may be affecting your deployment.

## Read More

* [SAP Single Sign-On](/developerportal/deploy/sap-cloud-platform/sap-single-sign-on/)
