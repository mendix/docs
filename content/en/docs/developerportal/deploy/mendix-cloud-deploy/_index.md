---
title: "Mendix Cloud"
url: /developerportal/deploy/mendix-cloud-deploy/
category: "Deployment"
weight: 20
description: "Describes how to deploy to the Mendix Cloud."
tags: ["Deploy","Mendix Cloud","Developer Portal", "Free App", "licensed", "limitations", "Mendix Cloud Dedicated"]
aliases:
    - /developerportal/howto/deploying-to-the-cloud.html
    - /mendixcloud/deploying-to-the-cloud.html
    - /developerportal/howto/deploying-to-the-cloud
    - /mendixcloud/deploying-to-the-cloud
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor #plans, below, is mapped from the Control Center within the Developer Portal.
---

## 1 Introduction

The Mendix Cloud is a public cloud service for Mendix applications; this is the default deployment option for Mendix applications. You can deploy either a limited Free App or an app running on a licensed cloud node.

Organizations can also have their own Mendix Cloud, named [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc). Mendix Cloud Dedicated works in exactly the same way as the Mendix Cloud, but runs on your own virtual private cloud and only hosts your company's apps.

### 1.1 Free App{#free-app}

If you are new to the Mendix community and would like to deploy and share your own app, you can do so for free on our public cloud offering. The Free App environment allows any Mendix developer to create and share their applications with their users. Note that a Free App does not support complex or large applications.

A Free App has a number of limitations compared to a licensed app. The main limitations are summarized in the table below:

| Feature | Free App | Licensed App |
| --- | --- | --- |
| Number of users | Unlimited users for regular Free Apps; six concurrent users for unlicensed app running on another cloud platform, for example SAP BTP. | Depends on your [pricing plan](#plans). For more information about the capabilities of different license options, see [Mendix Platform Pricing](http://www.mendix.com/pricing). |
| Sleep Mode | Goes into Sleep Mode after an hour or so of inactivity and automatically resumes when a user accesses it. All your data is retained while the app is in Sleep Mode. | Does not have a Sleep Mode. |
| Disk storage | 0.5 GB Database and 1 GB Files. | Depends on your [pricing plan](#plans). For more information about the capabilities of different license options, see [Mendix Platform Pricing](http://www.mendix.com/pricing). |
| App vCPUs | 0.5 | Depends on your [pricing plan](#plans). For more information about the capabilities of different license options, see [Mendix Platform Pricing](http://www.mendix.com/pricing). |
| Scheduled events | Are not run. | Are run and can be configured from the Developer Portal. |
| Environments | Single environment in the Mendix Cloud. | A node in the cloud which has one or more environments, for example, production, acceptance, and test. |
| Deployment | Can only be deployed to the cloud from Mendix Studio or Studio Pro. | Can be deployed from the Studios, or from the Developer Portal. |
| Custom domains | Not available. | Can be configured from the Developer Portal. |
| Access restriction profiles | Not available. | Can be configured from the Developer Portal. |
| Client certificates | Not available. | Can be configured from the Developer Portal. |
| Starting and stopping your app manually | Not available. | Available in the Developer Portal. |
| Constants | Defined in Studio Pro. | Configurable through environment variables in the Developer Portal. |
| Runtime settings | Not available. | Configurable through runtime and settings in the Developer Portal. |
| Scalability | Only one instance and a fixed amount (1 GB) of memory. | Configurable in the Developer Portal. |
| Metrics, alerts, and log levels | Not available. | Available. |
| Historic archived logs | Not available, only live logs are available. | Available. |
| Backups | Performed daily, cannot be triggered manually. Stored up to two weeks. |Performed daily, can also be created manually. Kept for up to one year, depending on your plan. |
| Support | No support. | Depending on license option. |

{{% alert color="info" %}}
Free Apps are part of our Free Edition.

If you are not currently a customer but would prefer to use a licensed cloud node you can find more information on our pricing page: [Mendix Platform Pricing](http://www.mendix.com/pricing).

If you are an existing customer, you should deploy into your licensed cloud node.
{{% /alert %}}

#### 1.1.1 Sleep Mode

As noted in the table above, a Free App goes into Sleep Mode after an hour or so of inactivity. If you access it while it is inactive, the app displays the following message: 
{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/appresumed.png" >}}

If, after a couple of minutes, your app does not wake up, please contact our support team at [support.mendix.com](http://support.mendix.com).

You can upgrade a Free App to a licensed node with a node in the Mendix Cloud. For more information, see [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/).

#### 1.1.2 Free Apps Archival{#free-apps-archival}

If a Free App has been in Sleep Mode for three months or longer, it may be archived. For Free Apps which are going to be archived, the [Technical Contact](/developerportal/collaborate/team/app-roles/#technical-contact) is informed two weeks beforehand. Upon archival, the project and model are retained, but the running app, database, and files for the Free App are deleted.

There are two ways to prevent your Free App from being archived:

1. Visit the Free App.
2. Deploy a new version of your app to your Free App environment.

### 1.2 Licensed App

A licensed app runs on a node which has a minimum of two environments: production and acceptance. If required, you can also add a test environment, or use [Flexible Environments](#flexible-environments). Your licensed app is linked to a node and can be deployed to any of these environments. You can specify different [resource packs](#resource-pack) for each of these environments, but we recommend that you make your production and acceptance environments the same size.

{{% alert color="info" %}}
Each environment can only run a single version of an app. Additionally, all the environments of a node should be used to run versions of the same app that is linked to the node.
{{% /alert %}}

By default, apps are deployed to the [Mendix Cloud v4](/developerportal/deploy/mxcloudv4/). Deployment documentation covers v4 features by default. If your app is still running on the deprecated Mendix Cloud v3, refer to the v3 documentation where the features differ from v4. For more information on the differences between Mendix Cloud v3 and v4, as well as migrating your app to the latest Cloud version, see [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4/).

### 1.3 Flexible Environments{#flexible-environments}

If the standard environments that you get with a licensed app are not sufficient for your requirements, you can request a Mendix Cloud v4 node with *Flexible Environments*. With Flexible Environments you can specify how many environments you want in your node and you can decide what they should be called.

### 1.4 Database

Apps deployed to the Mendix Cloud are configured to use a PostgreSQL database. It is not possible to configure your app to use an alternative database if it is deployed to the Mendix Cloud.

If you need to use a different database, consider deploying your app to a different platform. For more information, see [Deployment](/developerportal/deploy/).

### 1.5 URLs and Ports

Apps that run on the Mendix Cloud are automatically given their own URLs. The format of the URL depends on the license and environment type, and can be one of the following:

| License type | Environment | URL format | Example URL |
| --- | --- | --- | --- |
| Licensed app | production | `{name of your app}.mendixcloud.com` | `myappname.mendixcloud.com` |
| Licensed app | test, acceptance, flexible environments | `{name of your app}-{environment type}.mendixcloud.com` | `myappname-acceptance.mendixcloud.com` |
| Free App | N/A | `{name of your app}.mxapps.io` | `myfreeappname.mxapps.io` |

You can also customize a URL by adding [custom domains](/developerportal/deploy/custom-domains/).

Mendix apps cannot use custom ports. They communicate on the standard HTTP and HTTPS ports (80 and 443) with connections to HTTP (80) being redirected to HTTPS (443).

## 2 Deploying an App to the Mendix Cloud

It has never been easier to deploy a Mendix application to the cloud. This how-to explains the options that a developer has to deploy applications to a connected Mendix Cloud node.

This how-to will teach you how to do the following:

* Deploy a licensed app to the Mendix Cloud
* Deploy via Mendix Studio Pro
* Deploy the app to an environment
* Deploy a Free App to the Mendix Cloud

### 2.1 Prerequisites

Before starting this how-to, make sure you have completed the prerequisites described below.

#### 2.1.1 Prerequisites for a Licensed App

* Your app must be linked to a licensed cloud node
* You must have deployment permissions
* Your Google Authenticator must be enabled
* The deployment package for your app must be no bigger than 1 GB

#### 2.1.2 Prerequisites for a Free App

* You must have created an app
* The deployment package for your app must be no bigger than 1 GB

### 2.2 Deploying a Licensed App to the Mendix Cloud

There are two methods for deploying your app to the Mendix Cloud. The first option is directly via Studio Pro, and the second is through the Developer Portal.

##### 2.2.1 Deploying via Studio Pro

To deploy your app directly from Studio Pro, follow these steps:

1. Open [Studio Pro](http://appstore.home.mendix.com/link/modeler/).
2. Open the licensed app.
3. In the top menu bar, click **App** > **Deploy to Licensed Cloud Node**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/deploy-to-cloud-node.png" >}}

4. In the **Deploy to Mendix Cloud** dialog box, click **Deploy**.
5. The deployment is now in progress. To see the uploaded package, click **Show online**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/deployment-started.png" >}}

##### 2.2.2 Creating a Package from the Team Server in the Developer Portal{#package-from-team-server}

You can also deploy an app without using Studio Pro. To do this, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com).
2. Click **Apps** in the top navigation panel.
3. Select your app.
4. Go to **Environments**.
5. Click **Create package from team server**.
6. Select the preferred branch and revision and click **Next**.
7. Give the build a version number and click **Build this revision**.

The package is deployed to the cloud.

### 2.3 Deploying the App to an Environment {#deploy-the-app-to-an-environment}

The previous steps explained how to deploy a deployment package to the Mendix Cloud, but the actual app is not running yet. To deploy a deployment package to a node environment, follow these steps:

1. Open the [Developer Portal](http://sprintr.home.mendix.com).
2. Open your app.
3. Go to **Environments**.
4. In the **Deployment Package Repository**, choose the preferred deployment package and click **Deploy**.
5. Click the environment to which you want to deploy the package.
6. Click **Transport**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/transport-to-flex.png" >}}

7. If asked to do so, clean the environment.
8. Configure the [constants](/refguide/constants/) (if necessary) by clicking **Constants** and **Edit constants value**. This can also be done in a later stage in the settings.
9. Configure the [scheduled events](/refguide/scheduled-events/) (if necessary) by clicking **Scheduled Events**.
10. Click **Continue**.
11. Click **Start application**. 
12. If asked to do so, click **Synchronize database**.

The app is now deployed. You can configure the administrative account.

### 2.4 Deploying a Free App to the Mendix Cloud

With a Free App, you can deploy your app to the Mendix Cloud from Studio or Studio Pro by using one of the following methods:

#### 2.4.1 From Studio Pro

In the top bar of Studio Pro, click **Run** > **Publish**. This automatically deploys your app to a Free App environment.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/runapp2.png" >}}

Alternatively, in the top bar of Studio Pro, click **Run** or **Publish**, as shown in the following image:

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/runapp.png" >}}

#### 2.4.2 From Studio

Click the **Publish** button in Studio. For more information,                                                       see the [Publishing Your App](/studio/publishing-app/#publishing-your-app) section of *Previewing & Publishing Your App*.

## 3 Status of Deployment

The Mendix status page ([https://status.mendix.com/](https://status.mendix.com/)) shows the current status of Mendix services. If you have issues with deployment, you can check the Mendix status page to see if deployment is operational (under **Mendix Services**) or if there are other Mendix issues which may be affecting your deployment.

## 4 Mendix Pricing Plans{#plans}

Mendix licenses are sold as part of plans. Plans consist of the following items:

* A subscription to a plan
* A cloud resource pack, which specifies the resources available to your app environment
* Additional resources, such as fallback environments

### 4.1 Plans

There following plans are available for Mendix:

* Free
* Basic
* Standard
* Premium

For information, see the [Pricing](https://www.mendix.com/pricing/) page of the Mendix website.

### 4.2 Cloud Resource Packs{#resource-pack}

Mendix environments are sized by reference to cloud resource packs. The table below shows the current cloud resource packs for standard and premium plans. Resources for the Basic package are fixed as described in [Mendix Basic Package](/developerportal/deploy/basic-package/).

The Standard resource packs can be used with both Standard and Premium plans, but Premium resource packs can only be purchased with a Premium plan.

| Pack | App RAM | App vCPU | DB RAM | DB vCPU | DB Storage | File Storage |
| --- | --- | --- | --- | --- | --- | --- |
|Standard|||||||
| XS21 | 1 GB | 0.25 | 1 GB | 2 | 5 GB | 10 GB |
| S21 | 2 GB | 0.5 | 2 GB | 2 | 10 GB | 20 GB |
| M21 | 4 GB | 1 | 4 GB | 2 | 20 GB | 40 GB |
| L21 | 8 GB | 2 | 8 GB | 2 | 40 GB | 80 GB |
| XL21 | 16 GB | 4 | 16 GB | 4 | 80 GB | 160 GB |
| XXL21 | 32 GB | 8 | 32 GB | 4 | 160 GB | 320 GB |
| XXXL21 | 64 GB | 16 | 32 GB | 8 | 320 GB | 640 GB |
|Premium|||||||
| S21 | 2 GB | 0.5 | 2 GB | 2 | 10 GB | 20 GB |
| M21 | 4 GB | 1 | 4 GB | 2 | 20 GB | 40 GB |
| L21 | 8 GB | 2 | 8 GB | 2 | 40 GB | 80 GB |
| XL21 | 16 GB | 4 | 16 GB | 4 | 80 GB | 160 GB |
| XXL21 | 32 GB | 8 | 32 GB | 4 | 160 GB | 320 GB |
| XXXL21 | 64 GB | 16 | 32 GB | 8 | 320 GB | 640 GB |

The legacy cloud resource packs listed below are still being used but are not available to new customers.

| Legacy Pack | App RAM | App vCPU | DB RAM | DB vCPU | DB Storage | File Storage |
| --- | --- | --- | --- | --- | --- | --- |
| S20 | 2 GB | 0.5 | 2 GB | 1  | 10 GB | 20 GB |
| M20 | 4 GB | 1 | 4 GB | 1  | 20 GB | 40 GB |
| L20 | 8 GB | 2 | 8 GB | 1  | 40 GB | 80 GB |
| XL20 | 16 GB | 4 | 16 GB | 2  | 80 GB | 160 GB |
| XXL20 | 32 GB | 8 | 32 GB | 2  | 160 GB | 320 GB |
||||||||
| Strato | 2 GB | 0.5 | 1 GB | 0.5  | 5 GB | 20 GB |
| Meso | 2 GB | 0.5 | 8 GB | 2  | 20 GB | 20 GB |
| Iono | 8 GB | 2 | 8 GB | 2  | 20 GB | 80 GB |
| Magneto | 16 GB | 4  | 16 GB | 4  | 80 GB | 320 GB |
| S | 1 GB | 0.5  | 1 GB | 0.5  | 5 GB | 5 GB |
| M | 2 GB | 0.5  | 2 GB | 1  | 10 GB | 10 GB |
| L | 4 GB | 1  | 4 GB | 2  | 20 GB | 20 GB |
| XL | 8 GB | 2  | 8 GB | 2  | 40 GB | 40 GB |
| XXL | 16 GB | 4  | 16 GB | 4  | 80 GB | 80 GB |

{{% alert color="info" %}}
You can have a pack using a fraction of a vCPU as several environments can run, completely isolated from each other, on a single virtual machine.
{{% /alert %}}

### 4.3 Additional Resources

For Premium customers using a Premium resource pack, there are additional features available for apps deployed to the Mendix Cloud, and additional ways to deploy your Mendix App.

#### 4.3.1 High Availability

The High Availability option ensures that if there is a problem with the current availability zone, new copies of your app are started in the new availability zone (AZ). All FileDocument entities are replicated in this new zone, but the data still resides in a single database. This means that you may need to restore a backup of your database if it is no longer available to your app.

#### 4.3.2 Fallback{#fallback}

The Fallback option ensures that the data in your database is automatically copied to a database in a second AZ. This, together with the high availability option, ensures that all your data is still available to your app if there is an issue with current availability zone and app instances have to be started in the second AZ.

#### 4.3.3 On-premises and Private Cloud

If you want to deploy your Mendix apps to other environments, you can add these to your Mendix plan. For example, you can choose to deploy to [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform/), or to your own cloud using [Mendix for Private Cloud](/developerportal/deploy/private-cloud/).

## 5 Read More

* [Custom Domains](/developerportal/deploy/custom-domains/)
* [Licensing Mendix Cloud Apps](/developerportal/deploy/licensing-apps/)
* [App Roles](/developerportal/collaborate/app-roles/)
