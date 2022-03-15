---
title: "Mendix Cloud"
url: /developerportal/deploy/mendix-cloud-deploy/
category: "Deployment"
menu_order: 20
description: "Describes how to deploy to the Mendix Cloud."
tags: ["Deploy","Mendix Cloud","Developer Portal", "Free App", "licensed", "limitations"]
aliases:
    - /developerportal/howto/deploying-to-the-cloud.html
    - /mendixcloud/deploying-to-the-cloud.html
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #plans, below, is mapped from the Control Center within the Developer Portal.
---

## 1 Introduction

The Mendix Cloud is a public cloud service for Mendix applications; this is the default deployment option for Mendix applications. You can deploy either a limited **Free App** or an app running on a licensed cloud node.

### 1.1 Free App{#free-app}

If you are new to the Mendix community and would like to deploy and share your own app, you can do so for free on our public cloud offering. The Free App environment allows any Mendix developer to create and share their applications with their users. Note that a Free App does not support complex or large applications.

A Free App has a number of limitations compared to a licensed app. The main limitations are summarized in the table below:

| Feature | Free App | Licensed App |
| --- | --- | --- |
| **Number of Users** | Unlimited users.¹ | Depends on your pricing plan.² |
| **Sleep Mode** | Goes into Sleep Mode after an hour or so of inactivity and automatically resumes when a user accesses it. All your data is retained while the app is in Sleep Mode. | Does not have a Sleep Mode. |
| **Disk Storage** | 0.5Gb Database and 1Gb Files. | Depends on your pricing plan.² |
| **App vCPU**s | 0.5 | Depends on your pricing plan.² |
| **Scheduled Events** | Are not run. | Are run and can be configured from the Developer Portal. |
| **Environments** | Single environment in the Mendix Cloud. | A node in the cloud which has one or more environments, for example, production, acceptance, and test. |
| **Deployment** | Can only be deployed to the cloud from Mendix Studio or Studio Pro. | Can be deployed from the Studios, or from the Developer Portal. |
| **Custom Domains** | Not available. | Can be configured from the Developer Portal. |
| **Access Restriction Profiles** | Not available. | Can be configured from the Developer Portal. |
| **Client Certificates** | Not available. | Can be configured from the Developer Portal. |
| **Starting and stopping your app manually** | Not available. | Available in the Developer Portal. |
| **Constants** | Defined in Studio Pro | Configurable through environment variables in the Developer Portal. |
| **Runtime Settings** | Not available | Configurable through runtime and settings in the Developer Portal. |
| **Scalability** | Only one instance and a fixed amount (1Gb) of memory. | Configurable in the Developer Portal. |
| **Metrics, Alerts, and Log Levels** | Not available. | Available. |
| **Historic Archived Logs** | Not available, only live logs are available. | Available. |
| **Backups** | Performed daily, cannot be triggered manually. Stored up to two weeks. |Performed daily, can also be created manually. Kept for up to one year, depending on your plan. |
| **Support** | No Support. | Depending on license option. |

¹ Unlicensed apps running on a different cloud platform (for example SAP BTP) have similar restrictions to Free Apps. They have additional restrictions, including only allowing six concurrent users.

² The Mendix pricing plans are listed in [Mendix Pricing Plans](#plans), below. More information on the capabilities of different license options is available on [Mendix Platform Pricing](http://www.mendix.com/pricing).

{{% alert color="info" %}}
Free Apps are part of our Free Edition.

If you are not currently a customer but would prefer to use a licensed cloud node you can find more information on our pricing page: [Mendix Platform Pricing](http://www.mendix.com/pricing).

If you are an existing customer, you should deploy into your licensed cloud node.
{{% /alert %}}

As noted in the table above, a Free App will go to sleep after an hour or so of inactivity. If you access it while it is inactive, you will see the image below. If, after a couple of minutes, your app does not wake up, please contact our support team at [support.mendix.com](http://support.mendix.com).

![](/attachments/developerportal/deploy/mendix-cloud-deploy/appresumed.png)

You can upgrade a Free App to a licensed node with a *node* in the Mendix Cloud. Instructions for doing this are here: [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

#### 1.1.1 Free Apps Archival{#free-apps-archival}

If a Free App has been in Sleep Mode for three months or longer, the Technical Contact will be informed that the Free App will be archived in another two weeks. The project and model will be retained, but the running app, database, and files for the Free App will be deleted.

There are two ways to avoid Free Apps Archival:

1. Visit the Free App.
2. Deploy a new version of your app to your Free App environment.

### 1.2 Licensed App

A licensed app runs on a *node* which has a minimum of two environments: **production** and **acceptance**. A third environment, **test**, can be added, if required, or you can decide to use [Flexible Environments](#flexible-environments). Your licensed app is linked to a node and can be deployed to any of these environments.

By default, apps are deployed to the Mendix Cloud **v4**. Features which are covered in the default documentation are for **v4**. Some customers with special requirements may use Mendix Cloud **v3**, and will have to refer to the **v3** documentation where the features differ from **v4**.

### 1.3 Flexible Environments{#flexible-environments}

In some circumstances, you might find that the two or three standard environments you get with a licensed app are not sufficient. In this case you can request a Mendix Cloud v4 node with *Flexible Environments*. With Flexible Environments you can specify how many environments you want in your node and you can decide what they should be called.

### 1.4 Database

Apps deployed to the Mendix Cloud are configured to use a PostgreSQL database. It is not possible to configure your app to use an alternative database if it is deployed to the Mendix Cloud.

If you need to use a different database, you will need to look at deploying your app to a different platform. See the [Deployment](/developerportal/deploy/) page for more details.

### 1.5 URLs and Ports

When your app is running on the Mendix Cloud it will automatically be given its own URL. For licensed apps this is of the form `(appname){-environment}.mendixcloud.com`. The environment name will be added to the subdomain name for `test`, `acceptance`, and flexible environments. The production URL uses just the app name as the subdomain. Free apps have a URL of the form `{appname}.mxapps.io`.

You can customize a URL by adding [custom domains](/developerportal/deploy/custom-domains/).

Mendix apps cannot use custom ports. They communicate on the standard HTTP and HTTPS ports (80 and 443) with connections to HTTP (80) being redirected to HTTPS (443).

## 2 Deploying an App to the Mendix Cloud

It has never been easier to deploy a Mendix application to the cloud. This how-to will explain the options a developer has to deploy applications to a connected cloud node.

**This how-to will teach you how to do the following:**

* Deploy a licensed app to the Mendix Cloud
* Deploy via Mendix Studio Pro
* Deploy the app to an environment
* Deploy a Free App to the Mendix Cloud

Before starting this how-to, make sure you have completed the prerequisites described below.

### 2.1 Prerequisites for a Licensed App

* Your app must be linked to a licensed cloud node
* You must have deployment permissions
* Your Google Authenticator must be enabled

### 2.2 Prerequisites for a Free App

* You must have created an app

## 3 Deploying a Licensed App to the Mendix Cloud

There are two methods for deploying your app to the Mendix Cloud. The first option is directly via Studio Pro, and the second is through the Developer Portal.

{{% alert color="warning" %}}
The Mendix Cloud has a limit of 1GB on the size of a deployment package.
{{% /alert %}}

### 3.1 Deploying via the Studio Pro

1. Open [Studio Pro](http://appstore.home.mendix.com/link/modeler/).
2. Open the licensed app.
3. Click **App** in the top menu bar and select **Deploy to Licensed Cloud Node**:

    ![](/attachments/developerportal/deploy/mendix-cloud-deploy/deploy-to-cloud-node.png)

4. Click **Deploy**:

    ![](/attachments/developerportal/deploy/mendix-cloud-deploy/select-revision.png)

5. The deployment is now in progress. To see the uploaded package, click **Show online**:

    ![](/attachments/developerportal/deploy/mendix-cloud-deploy/deployment-started.png)

### 3.2 Creating a Package from Team Server in the Developer Portal{#package-from-team-server}

An app can also be deployed without using Studio Pro. To do this, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Click **Apps** in the top navigation panel.
3. Select your app.
4. Go to **Environments**.
5. Click **Create package from team server**.
6. Select the preferred branch and revision and click **Next**.
7. Give the build a version number and click **Build this revision**.

The package will now be deployed to the cloud.

## 4 Deploy the App to an Environment {#deploy-the-app-to-an-environment}

The previous steps explained how to deploy a deployment package to the Mendix Cloud, but the actual app is not running yet! To deploy a deployment package to a node environment, follow these steps:

1. Open the [Developer Portal](http://sprintr.home.mendix.com).
2. Open your app.
3. Go to **Environments**.
4. In the **Deployment Package Repository**, choose the preferred deployment package and click **Deploy**.
5. Click the environment to which you want to deploy the package.
6. Click **Transport**.

    ![](/attachments/developerportal/deploy/mendix-cloud-deploy/transport-to-flex.png)

7. If asked to do so, clean the environment.
8. Configure the constants (if necessary) by clicking **Constants** and **Edit constants value**. This can also be done in a later stage in the settings.
9. Configure the scheduled events (if necessary) by clicking **Scheduled Events**.
10. Click **Continue**.
11. Click **Start application**. If asked, click **Synchronize database**.

The app is now deployed and the administrative account can be configured.

## 5 Deploying a Free App to the Mendix Cloud

With a Free App, it's only possible to deploy your app to the Mendix cloud using Studio or Studio Pro. There are three methods to do that.

### 5.1 From Studio Pro – Method 1

Once you have created and worked on your App, you will want to share it with others in the Free App. You can deploy your Free App to an environment by clicking **Run > Run** at the top of Studio Pro. This will automatically deploy your app to a Free App environment.

![](/attachments/developerportal/deploy/mendix-cloud-deploy/runapp2.png)

### 5.2 From Studio Pro – Method 2

If you want to run your app in a Free App environment in the Mendix cloud, you can deploy to the Free App environment by clicking **Run** or **Publish**:

![](/attachments/developerportal/deploy/mendix-cloud-deploy/runapp.png)

### 5.3 From Studio

Click the **Publish** button in Studio. For more information see the [Publishing Your App](/studio/publishing-app/#publishing-your-app) section of *Previewing & Publishing Your App*.

## 6 Status of Deployment

The Mendix status page ([https://status.mendix.com/](https://status.mendix.com/)) shows the current status of Mendix services. If you have issues with deployment, you can check the Mendix status page to see if deployment is operational (under **Mendix Services**) or if there are other Mendix issues which may be affecting your deployment.

## 7 Mendix Pricing Plans{#plans}

Mendix licenses are sold as part of plans. These consist of a subscription to a plan, a **Cloud Resource Pack** which specifies the resources available to your app environment, plus additional resources such as fallback environments.

### 7.1 Plans

There are four plans available for Mendix:

* Free
* Basic
* Standard
* Premium

More information on these plans is available on the [Pricing](https://www.mendix.com/pricing/) page of the Mendix website.

### 7.2 Cloud Resource Packs{#resource-pack}

Mendix environments are sized by reference to cloud resource packs. The table below shows the current cloud resource packs for standard and premium plans. Resources for the *basic package* are fixed as described in [Mendix Basic Package](/developerportal/deploy/basic-package/).

The *Standard* resource packs can be used with both standard and premium plans, but *premium* resource packs can only be purchased with a *premium* plan.

| Pack | App RAM | App vCPU | DB RAM | DB vCPU | DB Storage | File Storage |
| --- | --- | --- | --- | --- | --- | --- |
|Standard|||||||
| XS21 | 1GB | 0.25 | 1GB | 2 | 5GB | 10GB |
| S21 | 2GB | 0.5 | 2GB | 2 | 10GB | 20GB |
| M21 | 4GB | 1 | 4GB | 2 | 20GB | 40GB |
| L21 | 8GB | 2 | 8GB | 2 | 40GB | 80GB |
| XL21 | 16GB | 4 | 16GB | 4 | 80GB | 160GB |
| XXL21 | 32GB | 8 | 32GB | 4 | 160GB | 320GB |
| XXXL21 | 64GB | 16 | 32GB | 8 | 320GB | 640GB |
|Premium|||||||
| S21 | 2GB | 0.5 | 2GB | 2 | 10GB | 20GB |
| M21 | 4GB | 1 | 4GB | 2 | 20GB | 40GB |
| L21 | 8GB | 2 | 8GB | 2 | 40GB | 80GB |
| XL21 | 16GB | 4 | 16GB | 4 | 80GB | 160GB |
| XXL21 | 32GB | 8 | 32GB | 4 | 160GB | 320GB |
| XXXL21 | 64GB | 16 | 32GB | 8 | 320GB | 640GB |

 The cloud resource packs below are still being used but are not available to new customers.

| Legacy Pack | App RAM | App vCPU | DB RAM | DB vCPU | DB Storage | File Storage |
| --- | --- | --- | --- | --- | --- | --- |
| S20 | 2GB | 0.5 | 2GB | 1  | 10GB | 20GB |
| M20 | 4GB | 1 | 4GB | 1  | 20GB | 40GB |
| L20 | 8GB | 2 | 8GB | 1  | 40GB | 80GB |
| XL20 | 16GB | 4 | 16GB | 2  | 80GB | 160GB |
| XXL20 | 32GB | 8 | 32GB | 2  | 160GB | 320GB |
||||||||
| Strato | 2GB | 0.5 | 1GB | 0.5  | 5GB | 20GB |
| Meso | 2GB | 0.5 | 8GB | 2  | 20GB | 20GB |
| Iono | 8GB | 2 | 8GB | 2  | 20GB | 80GB |
| Magneto | 16GB | 4  | 16GB | 4  | 80GB | 320GB |
| S | 1GB | 0.5  | 1GB | 0.5  | 5GB | 5GB |
| M | 2GB | 0.5  | 2GB | 1  | 10GB | 10GB |
| L | 4GB | 1  | 4GB | 2  | 20GB | 20GB |
| XL | 8GB | 2  | 8GB | 2  | 40GB | 40GB |
| XXL | 16GB | 4  | 16 GB | 4  | 80GB | 80GB |

{{% alert color="info" %}}
You can have a pack using a fraction of a vCPU as several environments can run, completely isolated from each other, on a single virtual machine.
{{% /alert %}}

### 7.3 Additional Resources

For **Premium customers using a  Premium resource pack**, there are additional features available for apps deployed to the Mendix Cloud, and additional ways to deploy your Mendix App.

#### 7.3.1 High Availability

The High Availability option ensures that if there is a problem with the current availability zone, new copies of your app will be started in the new availability zone (AZ). All FileDocuments will be replicated in this new zone, but data will still reside in a single database. This means that you may need to restore a backup of your database if it is no longer available to your app.

#### 7.3.2 Fallback{#fallback}

The Fallback option ensures that the data in your database is automatically copied to a database in a second AZ. This, together with the high availability option, ensures that all your data is still available to your app if there is an issue with current availability zone and app instances have to be started in the second AZ.

#### 7.3.3 On-premises and Private Cloud

If you want to deploy your Mendix apps to other environments, you can add these to your Mendix plan. For example, you can choose to deploy to [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform/), or to your own cloud using [Mendix for Private Cloud](/developerportal/deploy/private-cloud/).

## 8 Read More

* [Custom Domains](/developerportal/deploy/custom-domains/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [App Roles](/developerportal/collaborate/app-roles/)
