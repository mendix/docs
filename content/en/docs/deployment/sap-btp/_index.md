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

If you do not choose a **Custom database**, you can still choose from a range of different databases, such as PostgreSQL, Hyperscaler Option, and SAP HANA. Ensure that the database you choose is supported by your quota plan for this region and organization. See [Databases in SAP BTP](#databases) for important information on selecting the correct database for your app.

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

8. Select the database you would like to use. Be aware that even if a specific database is part of the Marketplace, it could still be unavailable because of limitations imposed by the quota of your organization. See [Databases in SAP BTP](#databases) below for information on selecting the correct database for your app.

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

3. In the **Scheduled Events** section, select the scheduled event you want to *Enable* or *Disable* and click **Next**. For more information, refer to [Scheduled Events](#schedules-events).

### Unbinding and Deleting Service Instances    

1. In the **Services** tab, select any additional services you need for your app. For more information, see the [Services tab](#binding-services).

{{% alert color="warning" %}}In your initial deployment, do not remove any of the services with the status **Bound Services**. For a new app, these services are required for the correct deployment of the app.{{% /alert %}}

1. If you want to remove a service instance from your environment, click the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) menu for the service and select **Unbind Service** or **Delete Service**.

    The options do the following:

    * **Unbind Service** – unbinds the service instance and moves it to the **Services To Be Bound** section. The service is bound next time your app is restarted.
    * **Delete Service** – unbinds the service instance from the application and deletes it from your environment.

{{% alert color="info" %}}Once the service is deleted, it is deleted from the app environment and returned to the list of **Available Services**. If the service is unbound but not deleted, it is returned to the list of **Services To Be Bound** and is rebound next time the app is restarted.{{% /alert %}}

### Runtime Settings and Environment Variables

Click **Next** to continue to the **Runtime** tab. Here, you can **Add**, edit ({{% icon name="pencil" %}}), or delete ({{% icon name="trash-can-filled" %}}) custom runtime settings and environment variables. For more information, refer to [Runtime](#runtime-tab). Click **Next**.

### Starting the Application

1. On the **Start Application** tab, you can see the application details. Click **Start application** to start the application on SAP BTP.

{{% alert color="info" %}}This binds any services which are in the status **Services To Be Bound**.{{% /alert %}}

1. When the application has been started, you are taken to the **Environment Details** page for the selected environment. See [Environment Details](#EnvironmentDetails).

## Environment Details {#EnvironmentDetails}

The environment details page contains the following tabs:

* [General](#general-tab) – how the application is deployed on SAP BTP
* [Model Options](#model-options-tab) – application constants and scheduled events
* [Services](#binding-services) – Cloud Foundry service management
* [Runtime](#runtime-tab) – custom environment variables which define **User-Provided Variables** in the SAP Cloud Foundry environment — pre-defined variables can be used to control the behavior of the Mendix Runtime

Open the environment details by clicking the details ({{% icon name="pencil-write-paper" %}}) icon on the **Environments** page of the Development Portal. You will also be taken to this page when you successfully deploy or transport your app.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/env-details.png" alt="" >}}

{{% alert color="info" %}}If you make changes to your app which you want to be applied next time the app is deployed, you must make them in the **Environment Details**.

Changes made to the app in the SAP BTP cockpit are only temporary and can be overwritten by the values in the Mendix Portal next time the app is deployed.{{% /alert %}}

### General Tab {#general-tab}

This tab contains information on how the application is deployed on SAP BTP. Most of this page shows information about the app, but there are several options which allow you to change the app.

#### Start and Stop Application

If the application is running, click **Stop Application** and confirm when asked to stop the application.

The button will change to **Start Application** which you can click to start or restart the application.

{{% alert color="info" %}}
You may need to use this option to stop and start your app after changing one of the settings on this page.
{{% /alert %}}

If you receive an error trying to start the app, refer to the [App Does Not Start](#appnotstart) section below.

#### Change Admin Password

Find the three-dots ({{% icon name="three-dots-menu-horizontal" %}}) icon and click **Change Admin Password** to change the password for the administrator account (by default, MxAdmin) in your Mendix app.

{{% alert color="warning" %}}
The new password will not come into effect until you stop and start your environment.
{{% /alert %}}

#### View Recent Log

Click three-dots ({{% icon name="three-dots-menu-horizontal" %}}) icon and select **View Recent Log** to see recent events written to the log.

#### Delete Environment

**Delete Environment** enables you to delete the environment and, optionally, all its resources, including the app.

You are asked to confirm that this environment should be removed. You are also asked to confirm that the resources associated with the environment should also be removed. Note that the default is not to remove the resources.

{{% alert color="info" %}}
If you do not select **Remove resources** in the dialog, the resources are left in SAP BTP. This is useful if you want to remove the environment but a resource cannot be removed. In this case, the resources can only be removed individually from within the SAP BTP cockpit.
{{% /alert %}}

#### Change Development Mode

Click **Change** to change the **Development Mode**. Set it to *Yes* if you want the application to run with only prototype security, or completely without security. This is not recommended for acceptance or production environments.

#### Change App URL

Click **Change** to change the **App URL** for this environment.

#### Change Redirect URLs

Click **Change** to change the **Redirect URLs**. Redirect URLs are custom URLs (for example, `appname.subdomain.domain.com`) where the user will be redirected after signing on using XSUAA, instead of being redirected to the generated URL (for example, `appname.cfapps.eu10.hana.ondemand.com`) of the app.

#### Scaling

If the app is started or stopped (that is, the environment has been created successfully and the app has been deployed without errors), options to scale the app are available.

Use the **Instances** slider to change the number of instances of the app which can run. This allows you to scale the app horizontally to support large numbers of users, or to improve the app's resilience by allowing it to continue to run if there are any issues with one of the instances.

Use the **Memory per instance** slider to change the amount of memory allocated to each instance of the app.

Click **Scale Now** to apply the new settings. If the application is running, it is stopped and restarted to apply the settings. If it is stopped, it is not started automatically. The new settings are used the next time the application is started.

Click **Cancel** to return the values to what they were before the sliders were moved.

{{% alert color="info" %}}
You can also make use of the **Application Autoscaler** service on SAP BTP. Mendix provides assistance in setting up the parameters needed to configure the application autoscaler. For more information, see [Application Autoscaler for SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/sap-autoscaler/).
{{% /alert %}}

#### Change License Subscription ID

Click **Change** to change the **Subscription Secret** which is the code which registers your production Mendix license to this environment.

### Model Options Tab {#model-options-tab}

This tab displays the application constants and allows you to edit them. It also lets you enable or disable scheduled events.

{{% alert color="info" %}}
You need to restart your app if you change any of these options.
{{% /alert %}}

#### Scheduled Events {#schedules-events}

You can see the status of each scheduled event. **Currently Enabled** shows the status in the running app. **Enabled** shows the status that is applied the next time the app is restarted.

To change the state of a scheduled event, select it and click **Enable** or **Disable** from **Actions** to change the **Enabled** flag.

#### Constants

You can see the value of all the constants used by the app. **Current Value** is the value in the running app. **New Value** is the value which is used the next time the app is restarted.

To change a value, select the constant you want to change and click the edit ({{% icon name="pencil" %}}) icon.

### Services Tab {#binding-services}

This tab displays Cloud Foundry services which are bound to the app, waiting to be bound to the app, or available to be bound to the app. These are the services which are available to you in SAP BTP and are the same services that you can see in the SAP BTP marketplace.

{{% alert color="warning" %}}
There are a number of services which your Mendix app requires. If you unbind any of these services, your app probably stops working:

* Destination
* Xsuaa
* Database (PostgreSQL, Hyperscaler Option, or SAP HANA schema)
* Connectivity

Select, bind, and unbind services through the **Services** page. Changes made in the SAP BTP cockpit are not reflected in the Mendix Portal.
{{% /alert %}}

{{% alert color="info" %}}
Changes to **Bound Services** do not take place immediately. Stop and start your application to activate the changes.

Services which are bound when the application is stopped and restarted are listed in the category **Services To Be Bound**. You also see an information message in this case. The button **Review Services** lists the services which are not currently bound.
{{% /alert %}}

#### Connecting Services

To connect a service in the **Available Services** section, do the following steps:

1. Select one or more services (you can search for them by name).
2. Select a **Plan** for each service. This must be a plan which is part of your quota for this space.
3. Select a JSON file to upload if you need to add extra configuration.
4. Click **Connect Selected Services**. You can also **Review Services** before restarting your app. 

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/connect-service.png" alt="" >}}

    The services you have selected will be added as **Services To Be Bound**. Now, you can upload a JSON file with a configuration that will be applied to the service binding.

{{% alert color="info" %}}
If you use the **PostgreSQL, Hyperscaler Option** service on SAP BTP, Mendix can create a JSON file for you. See [Running Mendix on PostgreSQL, Hyperscaler Option](#sap-hyperscaler). 
{{% /alert %}}

{{% alert color="info" %}}
If you use the **Application Autoscaler** service on SAP BTP, Mendix can create a JSON file for you. See [Application Autoscaler for SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/sap-autoscaler/) for more information.
{{% /alert %}}

To upload the JSON **File** for service binding, follow these steps:

1. Select the service in the **Service To Be Bound** section.
2. Click the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) icon next to the service for which you want to upload the file.
3. Select **Add Binding Configuration**.
4. Select the JSON **File** to upload and click **Save**.

The service bindings are created with the provided configurations when you restart the application. 

{{% alert color="info" %}}
If you receive an error and the service fails to bind, check all aspects of your SAP account. The error message may not provide full information about, for example, which plans you are allowed to choose for a particular service.
{{% /alert %}}

If you receive an error trying to restart the app, refer to the [App Does Not Start](#appnotstart) section below. 

#### Unbinding and Removing Services

If you no longer require a service, you can unbind it or remove it from your app.

##### Unbinding a Service

1. Click the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) icon next to the service you want to unbind in the **Bound Services** section.
1. Select one of the following:
    * **Unbind Service** – unbinds the service instance and moves it to the **Services To Be Bound** section. The service is bound again next time your app is restarted.
    * **Delete Service** – unbinds the service instance from the application and deletes the service instance from your environment.

1. If you want to **Delete Service**, confirm by clicking the appropriate button:

    * **Delete & Restart App** – confirms the delete action and restarts the app
    * **Delete** – if you want to unbind more services or do not want the change to happen immediately, you can choose **Delete**. However, this may leave the app in an unstable state as the service is deleted from the environment.
    * **Cancel** – does not delete or unbind this service

    Once the service is deleted, it is deleted from the app environment and returned to the list of **Available Services**. If the service is unbound but not deleted, it is returned to the list of **Services To Be Bound** and is rebound next time the app is restarted.

##### Removing an Unbound Service {#unbound-services}

1. Click the three-dots ({{% icon name="three-dots-menu-horizontal" %}}) icon next to the service you want to remove in the **Services To Be Bound** section.
1. Select **Remove Service** and confirm by clicking **Remove**.

    The service is deleted from the app environment and returned to the list of **Available Services**.

#### Adding Binding Configuration

When a service is in the **Services To Be Bound** section, you can add a new binding configuration if this is supported by the service and the Mendix Portal.

If you want to change the configuration of a service which is already bound, unbind the service first, as described in the [Removing an Unbound Service](#unbound-services) section.

1. Click the three-dot ({{% icon name="three-dots-menu-horizontal" %}}) icon next to the service you want to (re)configure in the **Services To Be Bound** section.

2. Select **Add Binding Configuration**.

3. You can either use the Configurator to create your configuration by clicking **Open Editor**, or click **Browse** to upload an existing file as the configuration.

    {{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/add-binding-config.png" alt="" >}}

    See the documentation for the service you are configuring for more information.

#### Service Names

The services which are created by the Mendix Portal are named automatically. You can see these names in the SAP BTP cockpit. Normally, the name of the service is **App name** + **_** + **Environment Name** + **_** + **a random six-character suffix**. All spaces are removed from the app and environment names. For example, `MyApp_Development_c7sd9q`.

However, the maximum length for the service name is 50 characters. If this limit would be exceeded by the name created above, an alternative service name is used. The format of this is **Environment Name** + **_** + **a random six-character suffix**. If the Environment name is longer than 43 characters, only the first 43 characters are used.

### Runtime Tab {#runtime-tab}

In the **Runtime** tab, you can **Add**, edit ({{% icon name="pencil" %}}), or delete custom runtime settings and environment variables.

{{% alert color="info" %}}
New values are only applied when you restart your app. The value which is currently applied is shown under **Current Value**.
{{% /alert %}}

#### Custom Runtime Settings

You can add custom server settings which configure Mendix Runtime beyond the standard SAP deployment. See [Runtime Customization](/refguide/custom-settings/) and the [Mendix Cloud Foundry Buildpack GitHub repository](https://github.com/mendix/cf-mendix-buildpack#mendix-runtime-configuration) for information about the settings which are available.

#### Custom Environment Variables

##### Supported Environment Variables

You can add supported variables by selecting them from a dropdown list.

* **DT_PAAS_TOKEN** – the token for integrating your Dynatrace environment with Cloud Foundry
* **DT_SAAS_URL** – the monitoring endpoint URL of the Dynatrace service
* **DT_TENANT** – the unique identifier of your Dynatrace environment
* **DT_IS_MANAGED** – a variable to enable metrics integration for DT Managed
* **DT_CLUSTER_ID** – tag your cluster, process group, or deployment group
* **DT_CUSTOM_PROP** – provide metadata for your process group
* **NON_MENDIX_PUBLIC_CLOUD** – must be set to **true** when using Datadog, Dynatrace, or other similar tools

The variables beginning with **DT_** set up Dynatrace. Setting these variables means that the Dynatrace OneAgent is loaded into your environment. You receive all Java-related metrics from your app. See [Dynatrace OneAgent](https://www.dynatrace.com/support/help/setup-and-configuration/dynatrace-oneagent/) for more information.

##### Unsupported Environment Variables

You can also enter other environment variables which can be used to support Mendix features which are in beta. In this case, click **No** for **Supported?**, and enter the **Name** of the variable and **New Value**.

{{% alert color="info" %}}
Only use unsupported environment variables if you know exactly what you are doing. Incorrect values can prevent the Mendix Runtime from starting.
{{% /alert %}}

## Databases in SAP BTP {#databases}

Mendix needs access to a relational database back end and can run using different types of database. For deployment to SAP BTP, you have the choice of PostgreSQL, Hyperscaler Option, or SAP HANA.

### Running Mendix on PostgreSQL, Hyperscaler Option {#sap-hyperscaler}

{{% alert color="info" %}}
SAP has removed some of the PostgreSQL databases available in their marketplace. If you need a PostgreSQL database, you will have to use PostgreSQL, Hyperscaler Option as your database. This requires some extra configuration which is described below. Alternatively, you can use [SAP HANA](#sap-hana).
{{% /alert %}}

Select the **postgresql-db** (PostgreSQL, Hyperscaler Option) database service from the **Available Services**.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/postgresql-service.png" alt="" >}}

Upload a file which contains the configuration for this database. Click **Browse** to select your configuration file. You can use the [SAP Hyperscaler PostgreSQL Configurator](#postgresql-configurator) to help you create the configuration file. For more information, refer to the [Parameters](https://help.sap.com/viewer/b3fe3621fa4a4ed28d7bbe3d6d88f036/Cloud/en-US/0630e03aa45d479eaf806c564dc2447a.html) section of *PostgreSQL on SAP Business Technology Platform, Hyperscaler Option*.

During the creation of the environment, the selected PostgreSQL, Hyperscaler Option service is added to your space. When you deploy your app, the app is bound to it.

This database service should not be unbound from your environment. For more information on required services, see the [Services Tab](#binding-services) above.

#### SAP Hyperscaler PostgreSQL Configurator {#postgresql-configurator}

To get help to create the configuration file, click **Configurator**.

You can set the required values for your **SAP Hyperscaler PostgreSQL** database. Tooltips describe the values which you need to provide. 

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/postgresql-configurator.png" alt="" >}}

{{% alert color="warning" %}}
There is no validation on the value of the **Source Instance ID** or **Restore Time** you enter for Standard or Premium plans. If you have issues, check that you entered the correct value here.
{{% /alert %}}

Click **Upload Configuration To Service** to automatically apply the generated configuration to the PostgreSQL, Hyperscaler Option database service. Alternatively, click **Download Configuration File** to create the file which you can then use on the **Services** tab to configure your PostgreSQL, Hyperscaler Option database.

### Running Mendix on SAP HANA {#sap-hana}

{{% alert color="info" %}}
You can only use SAP HANA as the Mendix database for Mendix V7.23.3 and above.

There are also some differences in the way that Mendix can be used with SAP HANA compared to a PostgreSQL, Hyperscaler Option database. For more information, see [SAP HANA – Known Issues](/refguide/saphana/).
{{% /alert %}}

#### SAP HANA Configuration for Full Accounts

To run a Mendix application on SAP BTP using SAP HANA as the database, there are two options. Both options need to be set up in the SAP BTP cockpit. You can choose one of the following options:

* Provision the SAP HANA DB Service and make it available in your application space.
* Provision SAP HANA Cloud and make this service available to your application space.

Once one of these services is available, you can use the SAP Cloud deployment functions of the Mendix Portal to deploy your app and use the **HANA_SCHEMA** service to bind your application to the provisioned service. The HANA_SCHEMA creates a separate schema on the SAP HANA Database which isolates your application's data from other applications. In this way, the SAP HANA DB/Cloud Service is shared across applications.

{{% alert color="warning" %}}

* Do not attempt to add the SAP HANA *service* to your app. It is the SAP HANA *schema* which needs to be bound to your app.

* Do not use the **Services** tab or the SAP BTP Marketplace to add both a PostgreSQL, Hyperscaler Option database and an SAP HANA schema to your app. If you do this, it is not possible to predict which database your Mendix app will choose to bind.
{{% /alert %}}

If you have issues with your app running on SAP HANA, use the SAP BTP cockpit to investigate. The Mendix Portal does not have information on the status or configuration of the SAP HANA service.

#### SAP HANA Configuration for Trial Accounts

For new trial accounts, you can bind your Mendix app to a trial SAP HANA database. Choose **hanatrial-securestore** from the drop-down of supported databases.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/hanatrial.png" alt="" >}}

Some older trial accounts do not include `hanatrial-securestore`. In this case, you can get an error when you try to deploy your Mendix app saying that *provisioning has failed because service hanatrial with plan securestore is not found*.

#### SAP HANA Performance Tuning

If your SAP HANA database has performance issues, you can improve it by performing the following tuning:

1. Obtain the following service binding credentials from the **Environment Variables** of SAP BTP cockpit, or via the CLI:

    * Host
    * Url
    * Schema
    * Password
    * User

1. Go to the [Runtime tab](#runtime-tab) of your app environment.
1. Enter the following unsupported environment variables with the associated values, using the values taken from the service binding credentials:

    | Variable | Value |
    | --- | --- |
    | MXRUNTIME_DatabaseHost | {host} |
    | MXRUNTIME_DatabaseJdbcUrl | {url} + `&nonBlockingIO=false&timeZonePerObject=false&packetSize=130000&closeHandlesByCleaner=false&transactionalLobs=false&maxLazyDroppedStatements=100&statementCacheSize=500&deferredPrepared=true` |
    | MXRUNTIME_DatabaseName | {schema} |
    | MXRUNTIME_DatabasePassword | {password} |
    | MXRUNTIME_DatabaseUserName | {user} |
    | MXRUNTIME_DatabaseType | `SAPHANA` |

1. Go to the [General tab](#general-tab) and restart your app to apply the changes.

The additional parameters that you added to the URL in the `MXRUNTIME_DatabaseJdbcUrl` set the following tuning parameters:

| Parameter | Value |
| --- | --- |
| closeHandlesByCleaner | false |
| deferredPrepare | true |
| maxLazyDroppedStatements | 100 |
| nonBlockingIO | false |
| packetSize | 130000 |
| statementCacheSize | 500 |
| timeZonePerObject | false |
| transactionalLobs | false |

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
1. Retain the **application-logs** service until its log retention period ends to ensure access to existing log entries. Then, delete it following the instructions provided in the [Unbinding and Removing Services](#unbinding-and-removing-services) section. After this, only the new SAP Cloud Logging service remains active.
1. When using the **cloud-logging** service, upgrade **SapApplicationLogs** to the latest version. If you are using an older version, update the **Default Value** of the **ApplicationLoggingService** constant to *cloud-logging* in the [SAP Logging Connector](https://marketplace.mendix.com/link/component/110219). For more information, refer to the [Using the Connector](/appstore/modules/sap/sap-logger/#using-the-connector) section of *SAP Logging Connector*.
1. You can view the logs of an environment using SAP Cloud Logging in your application's logs. For more details, see the [Viewing the Logs](/developerportal/deploy/sap-cloud-platform/sap-monitoring/#viewing-the-logs) section of *Monitoring Environments in Mendix Apps on SAP BTP*.

## Troubleshooting

If you encounter any issues with your apps on SAP BTP, use the following troubleshooting tips to help you solve them.

### Environment is not Created

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

The deployment fails because the marketplace services have not been bound.

#### Solution

If you use the Mendix Portal to look at the details of the environment to which you are deploying, you see that the services are still waiting to be bound.

{{< figure src="/attachments/deployment/sap-btp/sap-cloud-platform/not-bound-error.png" alt="" >}}

Start the app from the Mendix Portal to bind the services. Once they are bound, you can deploy your app from Studio Pro as usual.

### Error: Unable to Initialize Metrics Client: Unsupported Metric Type

The app cannot be started with Datadog, Dynatrace, or other similar tools configured. The following error is displayed: `Caused by: com.mendix.metrics.MonitoringConfigurationError: Unable to initialize Metrics client: unsupported metric type: statsd`

#### Cause

Starting from Mendix 9.7, support for `statsd` is removed.

#### Solution

1. In the [Runtime tab](/developerportal/deploy/sap-cloud-platform/#runtime-tab), in the **Custom Environment Variables** section, add a new variable with the following settings:

    * **Supported** – select **Yes**
    * **Name** – select **NON_MENDIX_PUBLIC_CLOUD**
    * **Value** – select **true**

1. Redeploy your application and restart it. Just restarting the app is not sufficient because additional dependencies need to be included.

## Status of SAP BTP Deployment

The Mendix status page ([https://status.mendix.com/](https://status.mendix.com/)) shows the current status of Mendix services. If you have issues with deploying to SAP BTP via the Mendix Portal, check the Mendix status page to see if SAP BTP deployment is operational (under **Mendix Services**) or if there are other Mendix issues which may be affecting your deployment.

## Read More

* [SAP Single Sign-On](/developerportal/deploy/sap-cloud-platform/sap-single-sign-on/)
