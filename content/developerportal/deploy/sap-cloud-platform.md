---
title: "SAP Cloud Platform"
category: "Deployment"
menu_order: 40
description: "Reference documentation on SAP Cloud deployment portal"
tags: ["SAP", "SAP Cloud Platform", "Deployment", "Environment"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

As an SAP developer, you want to deploy your Mendix app on the SAP Cloud Platform. This document explains how you can create environments, deploy to the SAP Cloud Platform, and manage these deployments using the Mendix Developer Portal.

This document describes two ways of managing the SAP Cloud Platform:

* Initial setup of the environment when creating a new app: see the section [Set Up SAP Cloud Platform for the First Time](#FirstTime)
* Create a new environment for an existing app: see the section [Create a New Environment](#NewEnvironment)

## 2 Set Up SAP Cloud Platform for the First Time{#FirstTime}

Before you can manage your SAP Cloud Platform using the Developer Portal, you will need to set it up. There are two circumstances under which you will have to set up the SAP Cloud Platform for the first time.

1. You have an existing app which has never been deployed on the SAP Cloud Platform and you want to change the cloud settings. See [Change Cloud Settings](#ChangeCloudSettings).

2. You are creating a new app from an SAP app template. See [New SAP App](#NewSAPApp).

### 2.1 Change Cloud Settings{#ChangeCloudSettings}

In this scenario, you have an existing app which is running in another environment: for instance, on the Mendix Cloud. To change this, go to the Cloud Settings tab of the General Settings in the Development Portal.

![](attachments/sap-cloud-platform/cloud-settings.png)

Click **Set up SAP Cloud** and you will be taken to the SAP Cloud Platform welcome page.

![](attachments/sap-cloud-platform/cloud-settings-landing-page.png)

Click **Getting Started** and then continue with [Set Up Region](#SetUpRegion).

### 2.2 New SAP App{#NewSAPApp}

In this scenario, you choose a Mendix app template for SAP **SAP Apps** tab and give it a name.

Once the app has been created you can continue with [Set Up Region](#SetUpRegion).

### 2.3 Set Up Region{#SetUpRegion}

You are now prompted with an SAP Cloud Platform login screen. Select the region where your SAP Cloud Platform is located.

Make sure that you have enough quota in this region for your organization to run a Mendix app. You will need enough quota to create the following:

* Database
* Route
* Binding to XSUAA

![](attachments/sap-cloud-platform/01-sap-select-region.png)

If you have already logged on to SAP and your SAP session has not expired, you will only have to choose the region. If you do not have a current SAP session you will be asked for your SAP credentials as well. Providing your credentials will grant the Deployment Portal access to manage your SAP Cloud Platform account.

You may be asked to provide your credentials in one of two ways:

* You will be taken to the SAP authentication page to enter your credentials – in this case, your SAP user name (email address) must be the same as your Mendix user name
* The Developer Portal will ask for your credentials, which it will then use to obtain an access token from SAP – the Developer Portal will then use the access token, but it will not store your credentials (please note this method is being deprecated)

{{% alert type="info" %}}
If you have issues using SAP authentication, please refer to the reference [SAP Single Sign On](/partners/sap/sap-single-sign-on).
{{% /alert %}}

You will now be asked to provide the final details for the SAP Cloud Platform development environment.

![](attachments/sap-cloud-platform/create-development.png)

You will be able to choose a Domain, Organization, and Space which is configured for you in this region.

If you do not choose a Custom database, you will still be able to choose from a range of different databases, PostgreSQL and SAP HANA for example. Please ensure that the database you choose is supported by your quota plan for this region and organization. See [Databases in SAP Cloud Platform](#databases), below, for important information on selecting the correct database for your app.

If you select **Yes** for **Custom database?**, you will be asked for the Name and the Plan.

After the environment has been created successfully, you will see the following page:

![](attachments/sap-cloud-platform/02-sap-configured-for-use.png)

Your development environment is now configured and you can now develop your app.

## 3 Create a New Environment{#NewEnvironment}

You can create several environments for your app. For example, you may have created a development environment, but you may want environments for test, acceptance, production, and so forth. Additionally, when you switch from another cloud you need to create at least one environment for your Mendix application.

This is done from the **Environments** page of the Developer Portal.

![](attachments/sap-cloud-platform/environments-page.png)

Your Environments page will show you the following:

* a list of **deployment packages** for this app
* a list of **environments** for this app
* all the deployment **activities** which have been performed on this app

To create a new environment, perform the following steps:

1. Click **Add Environment** to start the wizard.

    ![](attachments/sap-cloud-platform/add-environment.png)

2.  Select the region where you want your app to be deployed.

    ![](attachments/sap-cloud-platform/sap-env-0.png)

    If no session is active for that region, or the current session does not have access to that region, you will be asked for your SAP credentials for that region.

3.  Select the **Domain**, **Organization**, and **Space** of your app. The URL of the domain will form part of the application's URL. The URL of the application will be this:

    ```
    {appname}-{environment name}.{domain}
    ```
  
    This is an example URL:

    ```http
    https://myapp-development.cfapps.eu10.ondemand.com
    ```

    ![](attachments/sap-cloud-platform/07-sap-env-1.png)

4.  Click **Next**.

5.  Enter the name of the environment. This can be anything you choose: for example Test, Acceptance, or Production.

    ![](attachments/sap-cloud-platform/08-sap-env-2.png)

6.  Set the size of the memory that the app needs in order to run. This can also be changed later.

7.  Set **Development Mode** to Yes if you want the application to run with the Mendix security level of Prototype/demo, or Off (no security). This is not recommended for acceptance or production environments.

8.  Select the database you would like to use. Be aware that even if a specific database is part of the Marketplace it could still be unavailable because of limitations imposed by the quota of your Organization. See [Databases in SAP Cloud Platform](#databases), below, for for important information on selecting the correct database for your app.

    If you choose **Custom database** you will need to enter a name for the database and the plan.

    ![](attachments/sap-cloud-platform/custom-database.png)

9.  Select **File Store Enabled** if your application makes use of FileDocument or Image objects. Other sorts of object do not need File Store to be enabled.

10. Set a **Subscription Secret** (required). This secret is associated with your Mendix production license. By entering the subscription secret, your application will run in this environment as production. If the subscription secret is invalid, your app will still run, but will restart every 1-2 hours and have a limitation of six named users.

    {{% alert type="info" %}}If you do not have a subscription secret, create a support ticket with Mendix Support and they will send you one.{{% /alert %}}

11. If you want the user to be redirected to a custom URL after they have logged in using XSUAA then, optionally, add **Redirect URLs**. 

12. Click **Next** to create the environment and finish the setup.

    ![](attachments/sap-cloud-platform/09-sap-env-3.png)

An environment is created; with more than one environment it is possible to transport your application between environments (see [Transport App Between Environments](#TransportApp), below).

![](attachments/sap-cloud-platform/10-sap-env-tap.png)

## 4 Create Package from Team Server

At any time, you can create a new deployment package from a committed version of the project. If you are working with Mendix Studio Pro, you will first have to commit the project.

{{% alert type="info" %}}
You can also deploy your app (the steps in sections 4 and 5.1 of this How-To) automatically from Studio Pro. However, you will then have less control over the deployment.

If you click **Run** in Studio Pro, this will automatically do the following:

1. Commit the project.
2. Generate a deployment package.
3. Deploy the deployment package to the first available environment (this will replace any app which is currently running in this environment).
{{% /alert %}}

{{% alert type="warning" %}}
You will still have to deploy your app in the Developer Portal the very first time to ensure that all the services are bound correctly.
{{% /alert %}}

1. Go to the **Environments** page of the Developer Portal.

    ![](attachments/sap-cloud-platform/environments-page.png)

2. Click **Create package from Team Server** to start the wizard.

3.  Select the branch on the Team server which you want to use.

    ![](attachments/sap-cloud-platform/03-sap-select-branch.png)

4.  Select the revision of the branch you want to build.

    ![](attachments/sap-cloud-platform/04-sap-select-revision.png)

5.  Add a version number and Tag description as required. The revision number will be added to the version number automatically.

    ![](attachments/sap-cloud-platform/05-sap-define-tag.png)

6.  Click **Build this revision** to build the package.

    ![](attachments/sap-cloud-platform/06-sap-build-revision.png)

When the package is ready to be deployed, a green tick will be shown next to the deployment package. To deploy your package, follow the instructions in the [Deploy Package](#DeployPackage) section, below.

## 5 Deploy Package{#DeployPackage}

### 5.1 Deploy to an Environment

1.  A green tick indicates that the build has finished. Click **Deploy** to deploy the package to SAP Cloud Platform.

    ![](attachments/sap-cloud-platform/sap-revision-built.png)

2.  Change the deployment environment if required.

    ![](attachments/sap-cloud-platform/sap-transport.png)

3.  Click **Transport** to deploy the package to the SAP environment. This will replace any current app deployed to this environment. If the app is already running, you will be asked to stop it so that your new app can be deployed.

### 5.2 Configure the Application{#ConfigureTheApplication}

1. You will see confirmation of the package which has been transported.

    ![](attachments/sap-cloud-platform/transport-deploy.png)

2. Change any constants in the Constants tab: select the constant you want to edit and then click **Edit**.

    ![](attachments/sap-cloud-platform/transport-constants.png)

3. Toggle any scheduled events in the Scheduled Events tab: select the scheduled event you want to enable or disable and click **Toggle**.

    ![](attachments/sap-cloud-platform/transport-events.png)

4. Select any additional services you need for your app. For more information see [Binding Services](#binding-services), below.

    {{% image_container width="75%" %}}![](attachments/sap-cloud-platform/transport-services.png){{% /image_container %}}

    {{% alert type="warning" %}}In your initial deployment, do not remove any of the services with the status **Services To Be Bound**. For a new app, these services are all required for the correct deployment of the app.{{% /alert %}}

5. Click **Continue** to continue to the Start Application confirmation page.

6. Click **Start Application** to start the application on SAP Cloud Platform.

    ![](attachments/sap-cloud-platform/start-application.png)

    {{% alert type="info" %}}This will bind any services which are in the status **Services To Be Bound**.{{% /alert %}}
 
7. When the application has been started you will receive a confirmation message. Click **OK** and you will be taken to the Environment Details page for the selected environment. See [Environment Details](#EnvironmentDetails), below.

    ![](attachments/sap-cloud-platform/application-started.png)

## 6 Transport App Between Environments{#TransportApp}

1. Click **Transport** on the source environment you want to transport to another environment. Environments without deployed apps will have the transport button grayed out and cannot be transported.

    ![](attachments/sap-cloud-platform/transport-environments.png)

2.  Change the deployment environment if required by clicking **Change environment**.

    ![](attachments/sap-cloud-platform/transport-from-to.png)

3.  Click **Transport** to deploy the package to the SAP environment. This will replace any current app deployed to this environment. If the app is already running, you will be asked to stop it so that your new app can be deployed.

When the app has been transported you will be on the page **Configure the Application**. This has the same options as the **Deploy** pages which are described above in the [Configure the Application](#ConfigureTheApplication) section.

## 7 Environment Details{#EnvironmentDetails}

The environment details page contains three tabs: General, Model Options, and Services. Open the environment details by clicking **Details** on an environment on the Environments page of the Development Portal. You will also be taken to this page when you successfully deploy or transport your app.

![](attachments/sap-cloud-platform/environment-details.png)

{{% alert type="info" %}}If you make changes to your app which you want be applied next time the app is deployed you must make them here.

Changes made to the app in the SAP Cloud Platform cockpit are only temporary and can be overwritten by the values in the Mendix Developer Portal next time the app is deployed.{{% /alert %}}

### 7.1 General Tab

This tab contains information on how the application is deployed on SAP Cloud Platform.

![](attachments/sap-cloud-platform/11-sap-env-details.png)

Most of this page shows information about the app, but there are several options which allow you to change the app.

#### 7.1.1 Start/Stop Application

If the application is running, click **Stop Application** and confirm when asked to stop the application.

The button will change to **Start Application** which you can click to (re)start the application.

{{% alert type="info" %}}
You may need to use this option to stop and start your app after changing one of the settings on this page.
{{% /alert %}}

If you receive an error trying to start the app, please refer to the [App Will Not Start](#willnotstart) section under *Issues*, below.

#### 7.1.2 Change Admin Password

Click **Change Admin Password** to change the password for the administrator account (by default, MxAdmin) in your Mendix app.

#### 7.1.3 View Recent Log

Click **View Recent Log** to see recent events written to the log.

#### 7.1.4 Delete Environment

**Delete Environment** enables you to delete the environment and, optionally, all its resources: including the app.

You will be asked to confirm that this environment should be removed. You will also be asked to confirm that the resources associated with the environment should also be removed. Note that the default is NOT to remove the resources.

![](attachments/sap-cloud-platform/delete-environment.png)

{{% alert type="info" %}}
If you do not select **Remove resources** in this dialog, the resources will be left in SAP Cloud Platform. This could be useful if you want to remove the environment but, for some reason, a resource cannot be removed. In this case, the resources can only be removed individually from within the SAP Cloud Platform cockpit.
{{% /alert %}}

#### 7.1.5 Change Development Mode

Click **Change** to change the Development Mode toggle. Set it to Yes if you want the application to run with only prototype security, or completely without security. This is not recommended for acceptance or production environments.

#### 7.1.6 Scaling

If the app is started or stopped (that is, the environment has been created successfully and the app has been deployed without errors) then options to scale the app are available.

Use the **Instances** slider to change the number of instances of the app which can run. This allows you to scale the app horizontally to support a large numbers of users, or to improve the app's resilience by allowing it to continue to run if there are any issues with one of the instances.

Use the **Memory per instance** slider to change the amount of memory allocated to each instance of the app ("user's current memory").

Click **Scale Now** to apply the new settings. If the application is running, it will be stopped and restarted to apply the settings. If it is stopped it will not be started automatically; the new settings will be used the next time the application is started.

Click **Reset** to return the values to what they were before the sliders were moved.

#### 7.1.7 Change License Subscription ID

Click **Change** to change the subscription secret which is the code which registers your production Mendix license to this environment.

### 7.2 Model Options Tab

This tab displays the application constants and allows you to edit them. It also lets you enable or disable scheduled events.

![](attachments/sap-cloud-platform/12-sap-model-options.png)

{{% alert type="info" %}}
You need to restart your app if you change any of these options.
{{% /alert %}}

#### 7.2.1 Scheduled Events

You can see the status of each scheduled event. CURRENTLY ENABLED shows the status in the running app. ENABLED shows that status that will be applied the next time the app is restarted.

To change the state of a scheduled event, select it, then click **Toggle** to change the ENABLED flag.

#### 7.2.2 Constants

You can see the value of all the constants used by the app. CURRENT VALUE is the value in the running app. NEW VALUE is the value which will be used the next time the app is restarted.

To change a value, select the constant you want to change and click **Edit**.

### 7.3 Services Tab{#binding-services}

This tab displays Cloud Foundry services which are bound to the app, waiting to be bound to the app, or available to be bound to the app. These are the services which are available to you in SAP Cloud Platform and are the same services that you can see in the SAP Cloud Platform marketplace.

{{% image_container width="50%" %}}
![](attachments/sap-cloud-platform/service-tab.png)
{{% /image_container %}}

{{% alert type="warning" %}}
There are a number of services which your Mendix app requires. **If you unbind any of these services, your app will probably stop working**:

* destination
* xsuaa
* database (PostgreSQL or SAP HANA schema)
* connectivity

Services should be selected, bound, and unbound through this **Services** page. Changes made in the SAP Cloud Platform Cockpit will *not* be reflected in the Mendix Developer Portal.
{{% /alert %}}

{{% alert type="info" %}}
Changes to bound services will not take place immediately. You will have to stop and start your application to activate the changes.

Services which will be bound when the application is stopped and restarted are listed in the category **Services To Be Bound**. You will also see an information message in this case: the button **Review Services** will list the services which are not currently bound.
{{% /alert %}}

#### 7.3.1 Connecting Services

To connect a service in the section **Available Services**

1. Select one or more services (you can search for them by name).
2. Select a **Plan** for each service. This must be a plan which is part of your quota for this space.
3. Select a JSON **File** to upload if you need to add extra configuration.
4. Click **Connect Services**.

    ![](attachments/sap-cloud-platform/service-connect.png)

    The services you have selected will be added as **Services To Be Bound**. Now, you can upload JSON **File** with a configuration that will be applied to the service binding. 

To upload the JSON **File** for service binding, follow these steps:

1. Select the service in the **Service To Be Bound** section.
2. Click the ellipsis (**...**) next to the service for which you want to upload the file.
3. Select **Add Binding Configuration**.
4. Select the JSON **File** to upload.
5. Click **Save**.

The service bindings will be created with the provided configurations when you restart the application. 

{{% alert type="info" %}}
If you receive an error, and the service fails to bind please check all aspects of your SAP account. The error message may not provide full information about, for example, which plans you are allowed to choose for a particular service.
{{% /alert %}}

If you receive an error trying to restart the app, please refer to the [App Will Not Start](#willnotstart) section under *Issues*, below.

#### 7.3.2 Unbinding and Removing Services

If you no longer require a service you can unbind it or remove it from your app.

**Unbinding a Service**

1. Click the ellipsis (**...**) next to the service you want to unbind in the **Bound Services** section.
2. Select **Unbind Service**.

    ![](attachments/sap-cloud-platform/service-unbind.png)

3. Confirm by clicking **Unbind & Restart App** – if you want to unbind more services or do not want the change to happen immediately, then you can choose *Unbind*. However, this may leave the app in an unstable state.

    ![](attachments/sap-cloud-platform/service-unbind-warning.png)

    Once the service is unbound, it is deleted from the app environment and returned to the list of **Available Services**.

**Removing an Unbound Service**

1. Click the ellipsis next to the service you want to remove in the **Services To Be Bound** section.

2. Select **Remove Service**.

3. Confirm by clicking **Remove**

    The service is deleted from the app environment and returned to the list of **Available Services**.

#### 7.3.3 Service Names

The services which are created by the Mendix Developer Portal will be named automatically. You will see these names in the SAP Cloud Platform cockpit. The name of the service will normally be **App name** + **_** + **Environment Name** + **_** + **a random 6-character suffix**. All spaces will be removed from the app and environment names. For example, `MyApp_Development_c7sd9q`.

However, the maximum length for the service name is 50 characters. If this limit would be exceeded by the name created above, an alternative service name will be used. The format of this is **Environment Name** + **_** + **a random 6-character suffix**. If the Environment name is longer than 43 characters, only the first 43 characters are used.

## 8 Databases in SAP Cloud Platform{#databases}

Mendix needs access to a relational database backend and can run using different types of database. For deployment to SAP Cloud Platform, you have the choice of PostgreSQL or SAP HANA.

### 8.1 Running Mendix on PostgreSQL

{{% alert type="warning" %}}
SAP have deprecated the use of PostgreSQL databases bound via the marketplace. This means that SAP accounts created recently will not be able to directly bind PostgreSQL databases and you will have to use [SAP HANA](#sap-hana) or [AWS RDS PostgreSQL](#aws-rds) databases.
{{% /alert %}}

When you create your environment on SAP Cloud Platform, you can select a PostgreSQL database. During the creation of the environment, a PostgreSQL service will be added to your space and, when you deploy your app, it will be bound to the PostgreSQL service.

This database service should not be unbound from your environment: see [Services Tab](#binding-services), above, for more information on required services.

### 8.2 Running Mendix on SAP HANA{#sap-hana}

{{% alert type="info" %}}
You can only use SAP HANA as the Mendix database for Mendix version 7.23.3 and above.

There are also some differences in the way that Mendix can be used with SAP HANA compared to PostgreSQL databases – see [SAP HANA – Known Issues](/refguide/saphana).
{{% /alert %}}

#### 8.2.1 SAP HANA Configuration for Full Accounts

SAP HANA works in a different way to PostgreSQL.

If you select an SAP HANA database, an SAP HANA *schema* service will be added to your space and when you deploy your app it will be bound to the SAP HANA schema service. This schema service defines access to a separate SAP Cloud Platform, SAP HANA service, which also needs to be running in the same space as your app.

{{% alert type="warning" %}}
Please bear the following in mind when using SAP HANA as your Mendix database:

* You must create and configure the SAP HANA *service* yourself in the SAP Cloud Platform cockpit. It is *not* created for you by the Mendix Developer Portal. The configuration of this service is not possible through the Mendix Developer Portal.

* Do *not* attempt to add the SAP HANA *service* to your app. It is the SAP HANA *schema* which needs to be bound to your app.

* Do *not* use the *Services* tab or the *SAP Cloud Platform Marketplace* to add **both a PostgreSQL database and an SAP HANA schema** to your app. If you do this it is not possible to predict which database your Mendix app will choose to bind.

* Do *not* unbind the SAP HANA schema service from your environment: see [Services Tab](#binding-services), above, for more information on required services.

{{% /alert %}}

If you have issues with your app running on SAP HANA, you will need to use the SAP Cloud Platform cockpit to investigate. The Mendix Developer Portal does not have information on the status or configuration of the SAP HANA service.

#### 8.2.2 SAP HANA Configuration for Trial Accounts

{{% alert type="info" %}}
If you are using a trial account created before November 2019, the SAP HANA Schema may not be available.

If you do not have the three **SAP HANA Schemas & HDI Containers (Trial)** services in your subaccount entitlements, you can add the services in the SAP Cloud Platform cockpit. Select **Entitlements** > **Configure Entitlements** > **Add Service Plans**, and choose the three **SAP HANA Schemas & HDI Containers (Trial)** services.
{{% /alert %}}

For trial accounts which have the **SAP HANA Schemas & HDI Containers (Trial)** services, you can bind your Mendix app to a trial SAP HANA database. Just choose **hanatrial-schema** from the drop-down of supported databases.

![](attachments/sap-cloud-platform/hanatrial-schema.png)

If your trial account does not include the hanatrial schema, you will get an error when you try to deploy your Mendix app saying that *provisioning has failed because service hanatrial with plan schema is not found*.

### 8.3 Running Mendix on AWS RDS PostgreSQL{#aws-rds}

If you do not have any PostgreSQL databases available to bind in your marketplace, you can still use a PostgreSQL database as your Mendix database.

To do this, you will need to set up a PostgreSQL database on Amazon Web Services (AWS). Instructions for doing this to support an app deployed to SAP Cloud Platform are available on the SAP Help Portal here: [PostgreSQL on Amazon](https://help.sap.com/viewer/b392039670364098a722cad3071c7af9/Cloud/en-US).

To use this database for your Mendix app, you will need to choose **AWS RDS PostgreSQL** when specifying your environment on SAP Cloud Platform.

![](attachments/sap-cloud-platform/aws-rds.png)

You will also have to provide **Configuration JSON** to enable your app to find the database. The configuration file will be similar to the example shown below:

```json
{
   "adminPassword": "AdminPassword",
   "adminUsername": "AdminUsername",
   "backupRetentionPeriod": 14,
   "dbEngineMajorVersion": "9.6",
   "dbInstanceType": "db.t2.micro",
   "dbName": "mynewdb",
   "multiAz": true,
   "resourceTechnicalName": "aws_account_name",
   "storageEncrypted": false,
   "storageGb": 20
}
```

## 9 Issues

### 9.1 Environment is not Created

If you add an environment and it fails to be created it will be shown with a red symbol next to it on the Environments page:

![](attachments/sap-cloud-platform/failed-environment.png)

This could be caused by exceeding your organization quota limit for a service which you are trying to create, or for some other reason. To find the exact cause, do the following:

1. Click **Details** next to the failed environment.

    ![](attachments/sap-cloud-platform/failed-details.png)

2. Click **Details** on the error message at the top of the page.

    ![](attachments/sap-cloud-platform/failed-more-details.png)

A more detailed description of the reason why the environment creation failed will be displayed.

![](attachments/sap-cloud-platform/failed-description.png)

### 9.2 Deleting an App

Note that if you are the last person to leave a Mendix app you can delete the app. However, this will not delete the app or resources on SAP Cloud Platform. You can leave the app by going to the **General** page of the Developer Portal and clicking **Leave app**.

![](attachments/sap-cloud-platform/leave-app.png)

If you are the last member of the app development team, you will be asked if you want to delete the app.

![](attachments/sap-cloud-platform/delete-app.png)

{{% alert type="info" %}}
This will not stop the app and delete the deployment of the app in SAP Cloud Platform.

If you want to delete your app and all its resources, delete the environment and resources first before you leave the app via the Mendix Developer Portal.
{{% /alert %}}

You can still delete the app and its resources from the SAP Cloud Platform cockpit, but you will then have to remove all the resources individually.

### 9.3 App Will Not Start{#willnotstart}

Under some circumstances an app with a service in the **Services To Be Bound** status will not restart. You will get an error with *Could not bind service...* in the details.

![](attachments/sap-cloud-platform/service-bind-error.png)

This indicates that SAP Cloud Portal is not able to bind the service, even though it has been instantiated correctly. If you remove the service from the app, then the app should restart successfully.

If you are trying to bind more than one new service, it is not possible to identify within the Developer Portal which service is causing the issue. If the culprit is not obvious, you will have to remove all the services or go to SAP Cloud Portal where you can use the service name in the error message to find which service is causing the error.

### 9.4 An Error Occurs While Deploying App From Studio Pro

If an app is deployed to SAP using the Studio Pro **Run** button before it has been started from the Developer Portal, the deployment will fail. This is because the marketplace services have not been bound.

{{% image_container width="50%" %}}
![](attachments/sap-cloud-platform/error-desktop-modeler.png)
{{% /image_container %}}

If you use the Developer Portal to look at the details of the environment to which you are deploying, you will see that the services are still waiting to be bound.

![](attachments/sap-cloud-platform/error-not-bound.png)

Start the app from the Developer Portal to bind the services. Once they are bound, you can deploy your app from Studio Pro, as usual.

## 10 Status of SAP Cloud Platform Deployment

The Mendix status page ([https://status.mendix.com/](https://status.mendix.com/)) shows the current status of Mendix services. If you have issues with deploying to SAP Cloud Platform via the Developer Portal, you can check the Mendix status page to see if SAP Cloud Platform deployment is operational (under **Mendix Services**) or if there are other Mendix issues which may be affecting your deployment.

## 11 Read More

* [SAP Single Sign On](/partners/sap/sap-single-sign-on)
