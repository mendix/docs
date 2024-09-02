---
title: "Deploying a Mendix App to a Private Cloud Cluster"
linktitle: "Deploy Mendix App"
url: /developerportal/deploy/private-cloud-deploy/
description: "Describes the processes for deploying a Mendix app in the Private Cloud"
weight: 20
---

## Introduction

To deploy apps to your private cloud cluster (for example to Red Hat OpenShift or AWS-EKS), the cluster needs to be registered in the Mendix Portal. This creates a link between the Mendix Portal and the cluster. See [Creating a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for instructions on how to do this.

Once the cluster has been registered, and a namespace created, team members with *Deploy App* rights can create environments and deploy an app.

This document explains how to use the Mendix Portal to deploy your **connected** app.

To deploy to a namespace in a **standalone** cluster, you provide the CRs through the console or command line. This is described in [Using Command Line to Deploy a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-operator/).

Within your namespace you can run one, or several, Mendix apps. You can see the relationship between the Mendix environments and the Kubernetes namespaces in the image below.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/mx4pc-containerized-architecture.png" class="no-border" >}}

Because you can run several Mendix apps in the same namespace, each environment will have an **Internal Name** (UUID) added when the app is deployed to ensure that it is unique in the project. You should not use the same name as the Mendix tools used to deploy the app. See the section [Reserved Names for Mendix Apps](#reserved-names), below.

{{% alert color="info" %}}
You can also create environments and deploy and manage apps using the [Mendix for Private Cloud Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/).
{{% /alert %}}

## Prerequisites for Deploying an App

To deploy an app to your private cloud platform, you need the following:

* A Mendix account with **Deploy App** rights to an existing Cluster – see [Registering a Private Cloud Cluster](/developerportal/deploy/private-cloud-cluster/) for more information on setting up clusters and namespaces and adding members
* Mendix Studio Pro 8.0.0 (build 56467) or above.
* A Mendix app created with the version of Studio Pro you are using.
* Make sure that the security of the app is set to Production. By default, all environments are set to Production mode when created. If you want to change it to Developer mode, the Cluster Manager can do this from the cluster manager page.

## Deploying an App for the First Time

### Selecting Mendix for Private Cloud

When you first create your app, it will be set to deploy to the Mendix Cloud. You need to change the target to be private cloud.

1. Open your app in [Apps](https://sprintr.home.mendix.com/).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image2.png" class="no-border" >}}

2. Open the **Settings** page.
3. Click **Cloud Settings**.
4. In the **Mendix for Private Cloud** section, click **Set up**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-cluster/SetupButton.png" class="no-border" >}}

### Creating a Deployment Package {#create-deployment-package}

Before you can create an environment, you will need to create a deployment package. Ensure that you have committed the version of the app you want to deploy before continuing.

{{% alert color="warning" %}}
Deployment package creation for Mendix versions 7 and below is no longer supported. Upgrade to version 8 or above in order to build and deploy.
{{% /alert %}}

1. Open your app in [Apps](https://sprintr.home.mendix.com/).
2. Go to the **Environments** page and click **Create Deployment Package**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image9.png" class="no-border" >}}

3. Select the branch which contains the commit for which you want to create a deployment package and click **Next**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image10.png" class="no-border" >}}

4. Select the revision/commit for which you want to create a deployment package and click **Next**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image11.png" class="no-border" >}}

5. Enter a **New version** and **Tag description** according to your own deployment procedure.
6. Select an environment in **Autodeploy** if you want to deploy and start your package immediately. You need to make sure that the environment is ready using the techniques described in the [Deploying the Deployment Package](#deploy-package) section below, where you can also see how to deploy a deployment package manually.
7. Click **Build this revision.**

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image12.png" class="no-border" >}}

8. Confirm the information message and you will be returned to the **Environments** page.

9. Once the deployment package is created, an **Unlock** icon is displayed by the **Details** button. This indicates that the created deployment package is not deployed in any environment yet. If you want to save a deployment package for future use, you can lock the deployment package by clicking the **Lock** button. This ensures that the locked deployment packages cannot be deleted until unlocked again.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/lock.png" class="no-border" >}}

{{% alert color="info" %}}
Alternatively, you can upload an existing MDA by clicking **Upload**.
{{% /alert %}}

### Creating an Environment{#create-environment}

When deploying your app for the first time, there will be no environments available. Before creating an environment, make sure that you have created/uploaded deployment package. The **Environments** page for your app in [Apps](https://sprintr.home.mendix.com/) will show you the current status.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image5.png" class="no-border" >}}

{{% alert color="warning" %}}
All environments are defined as production environments, which means that [security in the app must be set to `Production`](/refguide/app-security/). You will not receive an error if security is set off, but the deployment will appear to hang with a spinner being displayed.
{{% /alert %}}

1. Click **Create Environment**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/selectDeploymentpackage.png" class="no-border" >}}

2. Select the deployment package from the list of deployment packages and click **Next**.

3. An **Internal Name** (UUID) will be generated for you. This will be used when creating your environment to ensure that all the environment names in your namespace are unique.

    {{% alert color="info" %}}You can change the internal name if you wish, but do not reuse one which has already been used in this namespace, even if the environment it was used for has been deleted.{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/customizeEnvironmentPage1.png" class="no-border" >}}

    {{% alert color="warning" %}}In the case of the Global Operator, do not use the same internal names for the managed namespaces under the same Global Operator namespace. Using the same internal name may result in unwanted issues.{{% /alert %}}

4. Enter the **Environment Name**, the name for the environment. The environment name can only contain lowercase letters, numbers and dashes and must start and end with an alphanumeric character. You can have several environments for your app, for example test, acceptance, and production, however, all environments will be treated by Mendix as production environments, when you create them.

5. Use the drop-down **Select Namespace** to select an existing namespace. You will see all namespaces of which you are a member.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/customizeEnvironmentNamespaceSelection.png" class="no-border" >}}

6. Enter a **Subscription Secret** if you want your app to run as a licensed app. Without a license, your app will be subjected to restrictions very similar to those listed in the [Free Apps](/developerportal/deploy/mendix-cloud-deploy/#free-app) section of *Mendix Cloud*.

    If you have configured **PCLM** in your namespace, the license from your license bundle will be automatically applied in the environment (with a condition that licenses should be available in the license bundle and not claimed in other environments). For more information, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/).

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/PCLM.png" class="no-border" >}}

7. Click **Next**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/configureEnvResources.png" class="no-border" >}}

8. Select **Core Resources**.

    For core resources, there are two sets of values. The **Request** value is the amount of core resources which are initially requested. The **Limit** value is the maximum amount of resource that the environment can use.

    There are three pre-defined sets of resources, **Small**, **Medium**, and **Large**. Choosing these will set the **CPU** and **Memory** values automatically.

    | **Name** | **CPU cores**: Limit | **Memory (GB)**: Limit |  **Ephemeral Storage (GB)**: Limit | **CPU cores**: Request | **Memory (GB)**: Request | **Ephemeral Storage (GB)**: Request |
    | --- | --- | --- | --- | --- | --- | --- |
    | Small | 1 | 0.5 | 1 | 0.1 |0.5 | 1 |
    | Medium | 2 | 2 | 1 | 1 | 1 | 1 |
    | Large | 4 | 4 | 1 | 2 | 2 | 1 |
    | Custom | own choice | own choice | own choice | own choice | own choice | own choice |

    Alternatively, you can choose **Custom**, and enter your own requirements for **CPU** and **Memory**. Ensure that these values are the same or greater than the values for a *Small* environment, otherwise you may run into problems running your app.

    {{% alert color="info" %}}If the cluster manager has added and enabled customized core resource plan on Cluster manager page, only the configured custom core resource plans will be visible for selection. Once the custom core resources plans are enabled, environments cannot be created using the default plans until all the associated environments using the custom core resource plan are deleted and the custom resource plan is disabled on the **Cluster manager** page.{{% /alert %}}

9. Select a **Database plan** from the list of plans set up in the namespace.

    {{% alert color="info" %}}If the Cluster Manager has configured a secret store for this namespace, this option will be disabled. You can find more information on configuring the secret store in [Integrate Kubernetes with Secret Stores](/developerportal/deploy/secret-store-credentials/).{{% /alert %}}

10. Select a **Storage plan** from the list of plans set up in the namespace.

    {{% alert color="info" %}}If the Cluster Manager has configured a secret store for this namespace, this option will be disabled. You can find more information on configuring the secret store in [Integrate Kubernetes with Secret Stores](/developerportal/deploy/secret-store-credentials/).{{% /alert %}}

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image7.png" class="no-border" >}}

11. Click **Create Environment**.
12. You will see your new environment listed. An *in-progress* icon will be shows next to the resource plans until they have been provisioned.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image8.png" class="no-border" >}}

    See [Deploying the Deployment Package](#deploy-package), below, for instructions on how to check that the environment has been created successfully.

    You can also filter the environment by the namespace name, environment ID, and environment name.

{{% alert color="info" %}}
The word **Licensed** shows that the Operator managing that environment is licensed, otherwise its *Trial*
{{% /alert %}}

### Deploying the Deployment Package{#deploy-package}

You can also deploy an existing deployment package to an environment without having to create a new one. This also allows you to specify constant values and control scheduled events before the app is started.

{{% alert color="info" %}}
Deployment packages which are not deployed to any environment will be removed if they were created from the Teamserver or uploaded over two months ago. You can [recreate the deployment package](#create-deployment-package) if you need to use it again.
{{% /alert %}}

If creation of the environment fails, then contact your cluster manager. If they cannot solve the problem, contact Mendix Support for help.

You can deploy the deployment package of your app by doing the following:

1. Click the **Deploy** button provided in the **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) menu next to the deployment package you wish to deploy.
2. Select the **Destination** environment by clicking on Change environment (you can select a different one here if one is available).
3. Confirm that the **Status** is *Ready*.
4. Click **Transport**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image15.png" class="no-border" >}}

5. Change any constants in the **Constants** tab: select the constant you want to edit and then click **Edit**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/constantTab.png" class="no-border" >}}

6. Toggle any scheduled events in the **Scheduled Events** tab: select the scheduled event you want to enable or disable and click **Toggle**.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/scheduledevent.png" class="no-border" >}}

7. Click **Continue** to continue to the Start Application confirmation page.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image16.png" class="no-border" >}}

8. Click Apply Changes to deploy the application to the selected environment. The app will start automatically once the deployment is successful.

    {{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/ApplyChangesPage.png" class="no-border" >}}

You can find a description of what this deployment means within the Kubernetes cluster in [How the Operator Deploys Your App](#how-operator-deploys), below.

You will be taken to the Environment Details page for the selected environment. You can find information about managing your environment from this page in [Managing Your Environments from the Environment Details Page](#environment-details), below.

## Environments Page

After opening your app in [Apps](https://sprintr.home.mendix.com/), you can find the **Environments** page, which contains three sections:

* Deployment Package Repository
* Environments
* Activity

### Deployment Package Repository

This lists the deployment packages which have been created for this app.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image17.png" class="no-border" >}}

There are five buttons:

* Refresh
* Upload
* Create Package From Teamserver
* Details
* Deploy

These are described in more detail below.

#### Refresh

Sometimes the page will not be automatically refreshed with the latest information. Click this button to see the latest information on the page.

{{% alert color="info" %}}
Using the browser refresh button will take you away from this environments page, so use this button instead.
{{% /alert %}}

#### Upload

This allows you to upload an MDA package you have already created, using Studio Pro for instance. The uploaded package is added to the list of packages for the app and can be deployed in the same way as a package created using **Create Package From Teamserver**.

#### Create Package From Teamserver

This creates a new package as described in [Creating a Deployment Package](#create-deployment-package), above.

#### Details

This displays details of the deployment package.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image18.png" class="no-border" >}}

{{% alert color="info" %}}
Should a deployment package remain unused, inactive, or unlocked for a period exceeding 2 weeks, it will be automatically deleted according to the expiry date. To retain the deployment package for future use, be sure to lock it. This also applies to deployment packages for which the status is **Failed**.
{{% /alert %}}

The information shows here is labeled to help you. The indicators in the environment description are described in the next section, [Environments](#environments), below.

There are three additional actions you can take while looking at the deployment package details:

* **Expand to view build output** – shows the output from the Mendix build.
* **Download Package** – allows you to download the deployment package and save it locally.
* **Delete Package** – deletes the deployment package. You will be asked to confirm this action. If the deployment package is in a locked state, it cannot be deleted.
* **Source** - shows if the deployment package has been created by using the API or the Portal. For more information on how to build deployment packages with the API, see [Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/).

#### Deploy

This deploys the package to an existing environment as described in [Deploying the Deployment Package](#deploy-package), above.

### Environments {#environments}

This section shows all the environments created for this app.

For each environment, you can see a summary of the status of the resources and details of the package which is running in the environment.

You can perform the following actions:

* **Add Environment**
* View **Details**
* Perform **Actions**

These are described in more detail, below.

In addition, there are several indicators describing the status of the environment.

#### Environment Status Indicators{#environment-status}

##### Network

The **Network** indicator has the following values:

* Tick – the network is operational
* Cross – the network is not operational
* Spinner – the network is being provisioned

##### Storage

The **Storage** indicator has the following values:

* Tick – storage is provisioned
* Cross – storage is not provisioned
* Spinner – storage is being provisioned

##### Database

The **Database** indicator has the following values:

* Tick – the database is provisioned
* Cross – the database is not provisioned
* Spinner – the database is being provisioned

##### Development

The word **Development** indicates that this environment is set up for development.

The word changes to **Production** if the environment is set up for production.

See [Creating an Environment](#create-environment), above, for more information.

##### Trial

The word **Trial** indicates that the Operator managing that environment is unlicensed.

When the Operator is running in trial mode, it will stop managing an environment ninety days (thirty days for Mendix Operator versions 1.12.0 and below) after the environment was created and the word changes to **Expired**. In this case you will be unable to stop or start your app, or deploy an app to this environment. The only action you can take is to delete the environment. You can, however, create a new environment if you have not finished your evaluation of Mendix for Private Cloud.

The word **Licensed** shows that the Operator managing that environment is licensed.

{{% alert color="info" %}}
The Operator license is independent from a Mendix Runtime license. The Operator license allows you to manage Mendix apps in your cluster, while the Mendix Runtime license (configured through a [Subscription Secret](#license-mendix)) removes trial restrictions from a Mendix App itself.

You can get an Operator license from [Mendix Support](https://support.mendix.com), together with instructions on how to configure it.
{{% /alert %}}

##### Service Account

The word **Service Account** indicates that this environment is successfully attached to a service account. If no service accounts are created specific to this environment, then this environment will be attached to the default service account.

#### Add Environment

This adds a new environment as described in [Creating an Environment](#create-environment), above.

#### Details

This opens the **Environment Details** page which is described in more detail in [Managing Your Environments from the Environment Details Page](#environment-details), below.

#### Actions

This button contains a list of actions which you can perform quickly on the environment. Most of these actions will be disabled if the app is currently starting or stopping. These actions are:

* **Start Application** (only shown if app is stopped) – allows you to start a stopped application
* **Transport Package** – allows you to deploy the deployment package in the current environment to another environment within the app, or to redeploy it in the current environment
* **Environment Logs** – takes you to the log page defined by the cluster manager when they registered the namespace
* **Model Options** – allows you to change the running of scheduled events and the values of constants for your app by taking you to the **Model Options** tab of the **Environment Details** page
* **Stop Application** (only shown if at least one replica is running) — stops the application by reducing the number of replicas to zero
* **Delete Environment** – this deletes the environment (see [Current Limitations](#limitations), below, for additional details about what is deleted) — you will be asked to confirm this action
* **Set as Studio Pro Deployment target** - this allows you to select the default target environment for Studio Pro deployment.

### Activity

This section shows all the activities, such as creating environments and deploying apps, which have taken place in this environment. You can sort the activities in either descending or ascending date and time order.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image20.png" class="no-border" >}}

## Managing Your Environments from the Environment Details Page{#environment-details}

Each environment you create has an **Environment Details** page which allows you to monitor and manage your environments. You can reach this by clicking the **Details** button next to the environment you want to manage.

If you have any outstanding changes to your environment the page will display a warning message. If you click **Apply Changes**, the environment will be stopped and restarted.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image21.png" class="no-border" >}}

The environment details page consists of seven tabs:

* General
* Model Options
* Network
* Runtime
* Log Levels
* TLS
* Debugger

These tabs are described below.

### General Tab

The general tab shows information about your running app.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image22.png" class="no-border" >}}

Most of the information is self-explanatory, but the status information gives you a quick summary of the status of the environment and the app deployed there. The **Source** field shows how the environment was created - by using the Portal or the [API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/)

#### Loaded Deployment Details > Status

This status shows you the following information – how many replicas are running, whether there was a successful build, and how long since the app was last started.

In order to get more detailed information per replica in the application, you can click on **More Info** button.

You can get the information related to Runtime status, License status and Sources w.r.t to Database, Storage, MxAdmin password, Debugger password, App constants and Custom Runtime settings. Along with this, from Operator version 2.15.0 onwards, you can also specifically collect information w.r.t to pods running in the application. Below is the brief explanation of the fields in the section:

1. **deletionInitiated**: This indicates whether the deletion of the pod has been initiated (pod is stopping). If it's `false`, it means the pod is not currently being deleted.

2. **ready**: This shows whether the pod is ready to serve requests. If it's `false`, it means the pod is not ready to serve requests, possibly due to containers within the pod not being ready or other issues.

3. **restartCount**: This represents the number of times the containers within the pod have been restarted.

4. **started**: This indicates whether the pod has started. If it's `false`, it means the pod has not yet started successfully.

5. **state**: This describes the current state of the pod. In this case, it indicates that the pod is in a waiting state, which means it is not running but waiting for something to happen, such as a container to become ready or other conditions to be met before it can start running.

#### Environment Details > Status

This shows you the status of the environment and is the same as the status shown on the Environments page and described in [Environment Status Indicators](#environment-status), above.

#### Action Buttons

There are also buttons which allow you to perform various actions on your app and environment. These are described in the sections below.

##### Stop/Start Application

If the app is not currently running (**Replicas Running** is set to *None*) you will see **Start** Application. Clicking this will immediately trigger the app to begin running by increasing the number of replicas.

If the app is currently running, clicking **Stop Application** immediately stops the application by reducing the number of replicas to zero.

##### Transport Package

Allows you to deploy the deployment package in the current environment to another environment within the app, or to redeploy it in the current environment. See [Deploying the Deployment Package](#deploy-package), above, for more information.

##### Scale Application

This allows you to scale your app by increasing the number of replicas.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image23.png" class="no-border" >}}

To apply the new value, click **Restart the App and Scale**. Because you restart your app, it will be unavailable for a short time.

If an application is in the Stopped state, the scaling does not come into effect until the application is started. This means that you have to click **Start application** in order for the changes to be sent to the cluster.

##### Clear Admin Password

This allows you to clear the password for the [Mendix administration account](/refguide/administrator/) set in the Private Cloud environment. This means that there will be no password pushed to your environment when your app is deployed - any password currently set in the environment will be retained.

##### Change Admin Password

This allows you to change the password for the [Mendix administration account](/refguide/administrator/) in your app. The password you set here will be pushed to your app environment every time the app is deployed. However, if the Mendix administration account password is configured in both the Mendix Portal (or MendixApp CR) and CSI Secrets Storage, then the secret storage will have a higher priority and will override the value specified elsewhere.

Please make sure that the password set in the portal fulfills the password requirements set in Studio Pro. For security purpose, the password must have at least eight characters, including at least one special character, one capital letter, and one number.

{{% alert color="info" %}}
By default, there will be no admin password set for your environment. This means that the Mendix administration account will be inactive unless you set (change) a password.
{{% /alert %}}

##### Delete Environment

This deletes the environment — you will be asked to confirm this action.

If the cluster is standalone, or the Mendix Gateway Agent is not connected for some other reason, you can still delete the environment information in the Mendix Portal. However, the actual environment will not be deleted and you will have to do this manually.

If the environment cannot be deleted, you will receive a warning, but can go ahead and remove it from the Mendix Portal.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/delete-environment.png" class="no-border" >}}

For a *connected* cluster, the top level MendixApp CRD will be deleted from the namespace – this will cause the following environment resources set up by the Operator to be garbage collected:

* The database will be dropped and the database user will be deleted from the database server — databases and users from other environments will remain untouched.

    {{% alert color="info" %}}If the storage plan is using a JDBC plan (not Postgres or SQL Server), the database and the user will remain untouched).{{% /alert %}}

* Files related to that environment will be deleted from the S3/Minio storage bucket (or prefix if this is using a shared bucket).

    {{% alert color="info" %}}If you are using the S3 [create account with existing policy](/developerportal/deploy/standard-operator/#storage-plan) plan - the files remain untouched.{{% /alert %}}

* S3/Minio users and policies will be deleted (if there is a storage plan specified to create those objects).

* Network resources: ingress, service will be removed. This might also garbage collect other resources (for example Load Balancers and TLS certificates), depending on how your network is set up,

{{% alert color="info" %}}
Images are not deleted from the container registry. You should delete those images manually.
{{% /alert %}}

{{% alert color="warning" %}}
If any of these garbage collection steps fail, you will no longer see the environment in the Mendix Portal, and will have to [delete the storage instances](#delete-storage) manually.
{{% /alert %}}

##### License Mendix{#license-mendix}

If you need to enter or change the subscription secret, then you can do that here.

Subscription secrets are obtained from [Mendix support](https://support.mendix.com/).

We have also released an alternate way of licensing your apps in the Private Cloud by using PCLM. For more information, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/).

For users of the Private Cloud License Manager who wish to set the product type for the Runtime license in a particular environment, it can be done by editing the Product type. This ensures that the associated environment obtains the license from the license bundle with the specified Product type. By default, the value is set to the one defined in the Namespace configuration page.

When the namespace in which the environment is deployed is configured with PCLM and the Operator version is 2.16.0 or higher, the license information related to PCLM is displayed under this section. If the environment is not configured with PCLM, this section will be empty. Below is a brief explanation of the fields under this section:

* **Subscription Secret** - When configured with PCLM, this field shows the message *configured using Private Cloud License Manager*.
* **Runtime License Id** - If the Runtime license is successfully applied in the environment, the license ID is displayed in this section. If the Runtime license is not applied, this field shows the message *unknown*.
* **Product Type for PCLM** - The product type of the Runtime license requested for this environment. This field can also be configured to use another Product type.
* **Runtime Product Type** - The product type currently provisioned for Runtime license.
* **License Provision Error** - If the licenses are not provisioned successfully for Runtime, then the error message would be displayed under this section. Example: When there are not enough Runtime license in the bundle or requested product type is not available in License bundle.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/LicensePCLM.png" class="no-border" >}}

#### Security

Your environment will be created as a Production environment.

{{% alert color="warning" %}}
Your app can only be deployed to a production environment if [security in the app is set on](/refguide/app-security/). You will not receive an error if security is set off, but the deployment will appear to hang with a spinner being displayed.
{{% /alert %}}

### Model Options Tab

The **Model Options** tab allows you to change the configuration of scheduled events and constants in your app.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/image24.png" class="no-border" >}}

To toggle any scheduled events, select the scheduled event you want to enable or disable and click **Toggle**. You can also export the scheduled events to an Excel file by selecting **Export Constants to Excel**.

To change any constants, select the constant you want to edit and then click **Edit**. You also have the option to export the app constants to an Excel file by selecting **Export Scheduled Events to Excel**.

{{% alert color="info" %}}
If the MxApp constants are configured in both the CSI Secrets Storage and another location (such as the Mendix Portal or MendixApp CR), the secret storage configuration has a higher priority and overrides the value specified elsewhere.
{{% /alert %}}

{{% alert color="info" %}}
If you change the data type and value in the .mpr file, the changes are visible in the Portal. Changes that only affect the data value without altering the data type are not visible in the Portal.
{{% /alert %}}

### Network Tab

On the Network tab, you add client certificates (in the PKCS12 format) or certificate authorities (in the PEM format) for outgoing connections. These will be used when your application initiates SSL/TLS connections. This works in the same way as the Network tab for deployments to the Mendix Cloud. For more details on these, see the [Network Tab](/developerportal/deploy/environments-details/#network-tab) section of *Environment Details*.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/network-tab.png" class="no-border" >}}

### Runtime Tab {#runtime-tab}

On the Runtime tab, you can change various runtime settings for your app environment. This works in the same way as the Runtime tab for deployments to the Mendix Cloud. For more details on these, see the [Runtime Tab](/developerportal/deploy/environments-details/#runtime-tab) section of *Environment Details*.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/runtime-tab.png" class="no-border" >}}

{{% alert color="info" %}}
When you use some settings on the Runtime tab for Mendix for Private Cloud they may work differently from how they work in the Mendix Cloud.
{{% /alert %}}

{{% alert color="info" %}}
If the custom runtime settings are configured in both the CSI Secrets Storage and another location (such as the Mendix Portal or MendixApp CR), the secret storage configuration has a higher priority and overrides the value specified elsewhere.
{{% /alert %}}

### Log Levels Tab

On the **Log Levels** tab, you can change the log levels which are used for the log nodes in your app.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/log-levels-tab-1.png" class="no-border" >}}

The **NODE** is a **Log node name** that you specified in your Mendix application. In the example below, the constant `MyFirstModule.LogNode` is used as a log node name. In this case you need put the *value* of the constant (in this case, `Test Service`) as a NODE on the Log Levels tab.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/log-levels-tab-2.png" class="no-border" >}}

You can find your logs in your Mendix application pod inside the Mendix container using the command below:

```
kubectl logs <pod-name> -c mendix
```

This might produce the log below for the example described above.

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/log-levels-tab-3.png" class="no-border" >}}

For more information, see the [Log Levels Tab](/developerportal/deploy/environments-details/#log-levels) section of *Environment Details*.

### TLS

If you are using Mendix Operator version 1.5.0 or above, you can configure TLS for your environment from the Mendix Portal.

In the TLS pane, you can choose whether to **Apply Default Configuration** or a **Custom TLS Configuration**. If you apply the default configuration, then the configuration made when you ran the configuration script for the namespace will be used.

{{% alert color="info" %}}
If you are using a version of Mendix Operator before 1.5.0, the settings in this tab will have no effect and the default configuration will be applied.
{{% /alert %}}

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/tls-configuration.png" class="no-border" >}}

If you choose a custom TLS configuration, you will need to enter the following information:

* Enable TLS – is TLS enabled for this environment?

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/enable-tls.png" class="no-border" >}}

* Use existing TLS secret or add new TLS private key and certificate?

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/choose-secret.png" class="no-border" >}}

* Existing Secret Name – if you choose an existing TLS secret then you will be asked to enter its name

* TLS Private Key File and TLS Certificate File – if you choose to add a new key you will need to upload these two files

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/new-tls-key.png" class="no-border" >}}

Click **Save** to confirm your new configuration.

You will receive a warning that you have made some changes. Click **Apply Changes** to restart the app and apply the changes.

### Debugger

On the Debugger tab you can set up and view the credentials you need to debug your app when it is running in your private cloud. For more information see [Debugging Microflows Remotely](/refguide/debug-microflows-remotely/#private-cloud).

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/debuggerTab.png" class="no-border" >}}

{{% alert color="info" %}}
If the Debugger password is configured in both the CSI Secrets Storage and another location (such as the Mendix Portal or MendixApp CR), the secret storage configuration has a higher priority and overrides the value specified elsewhere.
{{% /alert %}}

## Current Limitations{#limitations}

### Reserved Names for Mendix Apps{#reserved-names}

All names beginning **mendix-** are reserved for use by the Mendix Operator.

All names beginning **openshift-** are reserved for use by OpenShift if you are deploying to an OpenShift cluster.

### Deleting Your App

Delete all environments before you delete an app. If you delete an app which has existing private cloud environments, you will not be able to reach the environments through the Mendix Portal.

### Deployment Package Size

Mendix for Private Cloud has a limit of 1024 MB on the size of a deployment package.

## Troubleshooting

This section covers an issue which can arise where Mendix cannot recover automatically and manual intervention may be required.

### Status Reporting

Under some circumstances changes in the status of the environment and its apps will not be updated automatically. To ensure you are seeing the current status, you may need to click the **Refresh** button on the screen (not the browser page refresh button).

### Deleting the Cluster

If the cluster is running in standalone mode, you need to delete all `MendixApp` CRs.

To confirm that environments and their associated storage have been successfully deleted, run:

For OpenShift:

```shell
oc get mendixapp -n {namespace}
oc get storageinstance -n {namespace}
```

For Kubernetes:

```shell
kubectl get mendixapp -n {namespace}
kubectl get storageinstance -n {namespace}
```

Both commands should return an empty list.

#### Deleting StorageInstance CRs{#delete-storage}

If the Operator fails to deprovision an app's database or file storage, the `*-database` or `*-file` Pod will fail with an Error state:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/deprovision-failed.png" class="no-border" >}}

To force removal of a StorageInstance `{name}`, run:

For OpenShift:

```shell
oc patch -n {namespace} storageinstance {name} --type json -p='[{"op": "remove", "path": "/metadata/finalizers"}]'
```

For Kubernetes:

```shell
kubectl patch -n {namespace} storageinstance {name} --type json -p='[{"op": "remove", "path": "/metadata/finalizers"}]'
```

This will also delete the failed Pod.

After manually removing the StorageInstance, you'll need to manually clean up any resources associated with it, such as the database, S3 bucket or associated AWS IAM account.

### App Security and Production

If you attempt to deploy an app with security not set to production into a production environment you will not get an error, however the deployment will appear to hang with **Replicas running** and **Runtime** showing a spinner.

In Mendix Operator version 2.4.0 and above, you can click **More Info** to view any errors that could explain why the app is failing to start.

### ApplicationRootUrl Needs to Be Set Manually

{{% alert color="info" %}}
This workaround is only required for Mendix Operator versions below 1.10.0. Mendix Operator 1.10.0 and later versions will set `ApplicationRootUrl` automatically.
{{% /alert %}}

In some cases, your Mendix app will need to know its own URL – for example when using SSO or sending emails.

For this to work properly, you need to set the [ApplicationRootUrl](/refguide/custom-settings/#general) **Custom Runtime Setting** in the **Runtime** tab to the app's URL.

To add this setting:

1. Copy the **App URL** value from the **General** tab.
2. Switch to the **Runtime** tab.
3. Add a **Custom Runtime Setting**: use `ApplicationRootUrl` as the **Setting** name and the URL you copied from **App URL** as the **New value**.

{{% alert color="info" %}}
If you change **App URL** in the **General** tab, you should update the `ApplicationRootUrl` value as well.
{{% /alert %}}

### Collecting Diagnostic Data for a Support Ticket

{{% alert color="info" %}}
For security reasons, Mendix for Private Cloud doesn't send any detailed logs from the cluster to the Mendix Portal.
Only generic status or error messages are sent back to the Mendix Portal and these messages don't contain enough details about the environment to understand the root cause of any problems.
{{% /alert %}}

In version 2.10.0 and above of the `mxpc-cli` administration and configuration tool there is a command to collect and save diagnostic logs and a few configuration details to a file.

To use this feature, run the following command, replacing `{namespace}` with the Kubernetes namespace where the Mendix Operator is installed, and `{filename}` with the file where the information should be saved:

```bash
mxpc-cli log-extract -n {namespace} -f {filename}
```

From version 2.15.0 onwards, it will now also be possible to collect Mendix App CR, Operator Configuration, Storage Plans, Storage Instance, endpoints, deployments, services, build, pods and operator version. However, if you would not like to share data such as Mendix App CR, Operator Configuration, Storage Plans, Storage Instance with the Mendix Support, you can use below flags to false.

  -m - Mendix Apps CR(s) (default true)
  -o - OperatorConfig (default true)
  -s - Storage Plan and Storage Instance (default true)

This file can be shared with Mendix Support or the team responsible for maintaining infrastructure.

{{% alert color="warning" %}}
Before sending logs to support, please make sure that there they don't contain any sensitive or restricted information.

To provide enough detail to work on an issue without disclosing sensitive information, you may want to redact some of the information in the log, or only keep messages from a specific time period.
{{% /alert %}}

### Network Errors when Using an Istio Service Mesh

When an Istio service mesh is enabled in a namespace, every pod's traffic is routed through an Istio sidecar (Envoy). This sidecar is added to every app pod, and Envoy needs some time (a few seconds) to fetch its configuration from Istio. Until Envoy configures itself, any outgoing traffic in that pod is blocked (denied) by Envoy. This can cause issues with task pods such as the image builder and database or file provisioners - any attempts to open a network connection will fail until Envoy is fully started.

To fix this issue, enable the `holdApplicationUntilProxyStarts: true` setting in the Istio [proxy config](https://istio.io/latest/docs/reference/config/istio.mesh.v1alpha1/#ProxyConfig). With this option, containers are only started once the Istio sidecar is ready to accept network traffic.

For more information, see https://github.com/istio/istio/pull/24737.

### Out of Memory Killed Error

This error refers to a situation where a running pod is terminated because it has exhausted the available memory resources on the node where it is running. This can occur when a pod consumes more memory than it has been allocated, or when a node runs out of resources (memory). In this case, the node will kill random pods that are using more memory than their requests value. In Kubernetes, this is called overcommitment. For more information, refer to [Red Hat documentation](https://docs.okd.io/4.13/post_installation_configuration/node-tasks.html#nodes-cluster-overcommit-resource-requests_post-install-node-tasks).

To fix this issue, you can raise memory requests to match the memory limit by performing the following steps:

1. Update the default *OperatorConfiguration*, *mendix-agent* and *mendix-operator* deployments. Make sure that the memory request is equal to memory limit in below resources.

    {{% alert color="info" %}}For Global Operator scenarios, if the operator configurations in the managed namespace differ from the configurations in the Global Operator namespace, the configurations from the managed namespace will consistently take precedence.{{% /alert %}}

    1. To update the Mendix Operator configuration, use the following command:

        For Kubernetes:

        ```shell
        kubectl -n {namespace} edit operatorconfiguration
        ```

        For Openshift:

        ```shell
        oc -n {namespace} edit operatorconfiguration
        ```

    2. To update the Mendix Agent, use the following command:

        For Kubernetes:

        ```shell
        kubectl -n {namespace} edit deployment mendix-agent
        ```

        For Openshift:

        ```shell
        oc -n {namespace} edit deployment mendix-agent
        ```

    3. To update the Mendix Operator, use the following command:

        For Kubernetes:

        ```shell
        kubectl -n {namespace} edit deployment mendix-operator
        ```

        For Openshift:

        ```shell
        oc -n {namespace} edit deployment mendix-operator
        ```

    4. Restart the Mendix operator by using the following command:

        For Openshift:

        ```shell
        oc -n {namespace} scale deployment mendix-operator --replicas=0
        oc -n {namespace} scale deployment mendix-operator --replicas=1
        ```

        For Kubernetes:

        ```shell
        kubectl -n {namespace} scale deployment mendix-operator --replicas=0
        kubectl -n {namespace} scale deployment mendix-operator --replicas=1
        ```

2. When running the upgrade procedure in mxpc-cli, check that the memory request values for *OperatorConfiguration*, *mendix-agent* and *mendix-operator* deployments are equal to the memory limit value.
3. In the portal, update the default core environment sizes so that memory requests are at least equal to memory limits.
4. For Mendix apps, edit the environment memory request by running the following command:

    For Openshift:

    ```shell
    oc -n {namespace} edit mendixapp {environmentInternalId}
    ```

    For Kubernetes:

    ```shell
    kubectl -n {namespace} edit mendixapp {environmentInternalId}
    ```

### Unexpected App Restart

If your application keeps restarting unexpectedly, check your application log for hints on what could be causing this. If there are any *CRITICAL* lines in the log, immediately start working on resolving them. 

## How the Operator Deploys Your App {#how-operator-deploys}

The Mendix Operator is another app within your private cloud namespace. It is triggered when you provide a CR file. This can either be through the Mendix Portal, for a connected cluster, or through the command line, for a standalone cluster. The process looks like this:

{{< figure src="/attachments/deployment/private-cloud/private-cloud-deploy/mx4pc-operator-deploy.png" class="no-border" >}}

The Mendix Operator CR is processed by the Mendix Operator into four steps:

1. The Build CR is created – this creates a Docker image from the app deployment package, pushes it into the Image Registry, and provides the correct information to the Runtime CR

2. The StorageInstance CR is created for the database – this causes the Operator to provision the database, according to the plan selected, and pass information about the database to the Runtime CR

3. The StorageInstance CR is created for the file storage – this causes the Operator to provision a file storage bucket for the app and pass information about the storage to the Runtime CR

4. The Ingress CR is created – this sets up a route to the app.

The Runtime CR is now complete, and the Runtime Controller uses the CR to pull the Docker image from the Image Registry and deploy it to an App Container in the OpenShift namespace.
