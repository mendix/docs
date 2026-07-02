---
title: "Environment Details on SAP BTP"
linktitle: "Environment Details on SAP BTP"
url: /developerportal/deploy/sap-cloud-platform/environments
weight: 10
description: "Describes SAP Business Technology Platform Environment Details."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The **Environment Details** page is the central location for configuring and managing your Mendix app environments on SAP BTP. This page provides access to deployment settings, service bindings, runtime configuration, and operational controls for each environment.

Use the **Environment Details** page to configure how your app runs, manage Cloud Foundry services, set environment variables, and monitor your app's status. Changes made here persist across deployments and override any temporary changes made directly in the SAP BTP cockpit.

{{% alert color="info" %}}
To access the Environment Details page, go to **Environments** in [Apps](https://sprintr.home.mendix.com/) and click the details ({{% icon name="pencil-write-paper" %}}) icon next to your environment. You will also be taken to this page when you successfully deploy or transport your app.
{{% /alert %}}

## Environment Details {#EnvironmentDetails}

The environment details page contains the following tabs:

* [General](#general-tab) – how the application is deployed on SAP BTP
* [Model Options](#model-options-tab) – application constants and scheduled events
* [Services](#binding-services) – Cloud Foundry service management
* [Runtime](#runtime-tab) – custom environment variables which define **User-Provided Variables** in the SAP Cloud Foundry environment — pre-defined variables can be used to control the behavior of the Mendix Runtime

{{< figure src="/attachments/deployment/sap-btp/sap-env-details/env-details.png" alt="" >}}

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

If you receive an error trying to start the app, refer to the [App Does Not Start](/developerportal/deploy/sap-cloud-platform/#appnotstart) section below.

#### Change Admin Password

Find the three-dots ({{% icon name="three-dots-menu-horizontal" %}}) icon and click **Change Admin Password** to change the password for the administrator account (by default, MxAdmin) in your Mendix app.

{{% alert color="warning" %}}
The new password will not come into effect until you stop and start your environment.
{{% /alert %}}

#### View Recent Log

Click the three-dots ({{% icon name="three-dots-menu-horizontal" %}}) icon and select **View Recent Log** to see recent events written to the log.

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

This tab displays Cloud Foundry services which are bound to the app, waiting to be bound to the app, or available to be bound to the app. These are the services which are available to you in SAP BTP and are the same services that you can see in the SAP BTP Marketplace.

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

    {{< figure src="/attachments/deployment/sap-btp/sap-env-details/autoscaler-service.png" alt="" >}}

    The services you have selected will be added as **Services To Be Bound**. Now, you can upload a JSON file with a configuration that will be applied to the service binding.

{{% alert color="info" %}}
If you use the **PostgreSQL, Hyperscaler Option** service on SAP BTP, Mendix can create a JSON file for you. See [Running Mendix on PostgreSQL, Hyperscaler Option](/developerportal/deploy/sap-cloud-platform/databases/#sap-hyperscaler). 
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

If you receive an error trying to restart the app, refer to the [App Does Not Start](/developerportal/deploy/sap-cloud-platform/#appnotstart) section below. 

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

    {{< figure src="/attachments/deployment/sap-btp/sap-env-details/add-binding-config.png" alt="" >}}

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
