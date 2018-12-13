---
title: "Mendix Cloud"
category: "Deployment"
menu_order: 20
description: "Describes how to deploy to the Mendix Cloud."
tags: ["Deploy","Mendix Cloud","Developer Portal", "Free app", "licensed", "limitations"]
frontpage_featured: true
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The Mendix Cloud is a public cloud service for Mendix applications; this is the default deployment option for Mendix applications. You can deploy either a limited **Free App** or an app running on a licensed cloud node.

### 1.1 Free App{#free-app}

If you are new to the Mendix community and would like to deploy and share your own app, you can do so for free on our public cloud offering. The Free App environment (sometimes referred to as the Sandbox) allows any Mendix developer to create and share their applications with their users. Note that a Free App does not support complex or large applications.

A Free App has a number of limitations compared to a licensed app. The main limitations are summarized in the table below:

|                                             | Free App                                                     | Licensed App                                                 |
| ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **Number of Users**                         | Maximum ten users.                                           | Depends on your pricing plan.                                |
| **Sleep Mode**                              | Goes into Sleep Mode after an hour or so of inactivity and automatically resumes when a user accesses it. All your data is retained while the app is in Sleep Mode. | Does not have a Sleep Mode.                                  |
| **Storage**                                 | 100MB of data and 100MB of file storage space.               | Depends on your pricing plan.                                |
| **Environments**                            | Single environment in the Mendix Cloud.                      | A node in the cloud which has one or more environments, for example, production, acceptance, and test. |
| **Deployment**                              | Can only be deployed to the cloud from the Desktop or Web Modeler. | Can be deployed from a modeler, or from the Developer Portal. |
| **Starting and stopping your app manually** | Not available.                                               | Available.                                                   |
| **Constants**                               | Defined in modeler.                                          | Configurable through environment variables.                  |
| **Scalability**                             | Only one instance and a fixed amount of memory.              | Configurable in the Developer Portal                         |
| **Metrics and alerts**                      | Not available.                                               | Available.                                                   |
| **Historic archived logs**                  | Not available.                                               | Available.                                                   |
| **Backups**                                 | Stored up to two weeks, can be done once a day.              | Maximum one year, depending on your plan.                    |

{{% alert type="info" %}}
Free apps are part of our community edition and require Mendix version 6 or higher.

If you are not currently a customer but would prefer to use a licensed cloud node you can find more information on our pricing page: [Mendix Platform Pricing](http://www.mendix.com/pricing).

If you are an existing customer, you should deploy into your licensed cloud node.
{{% /alert %}}

As noted in the table above, a Free App will go to sleep after an hour or so of inactivity. If you access it while it is inactive, you will see the image below. If, after a couple of minutes, your app does not wake up, please contact our support team at [support.mendix.com](http://support.mendix.com).

![](attachments/mendix-cloud-deploy/appresumed.png)

You can upgrade a Free App to a licensed node with a *node* in the Mendix Cloud. Instructions for doing this are here: [Licensing Apps](licensing-apps).

### 1.2 Licensed App

A licensed app runs on a *node* which has a minimum of two environments: **production** and **acceptance**. A third environment, **test**, can be added, if required. Your licensed app is linked to a node and can be deployed to any of these environments.

By default, apps are deployed to the Mendix Cloud **v4**. Features which are covered in the default documentation are for **v4**. Some customers with special requirements may use Mendix Cloud **v3**, and will have to refer to the **v3** documentation where the features differ from **v4**.

## 2 Deploying an App to the Mendix Cloud

It has never been easier to deploy a Mendix application to the cloud. This how-to will explain the options a developer has to deploy applications to a connected cloud node.

**This how-to will teach you how to do the following:**

* Deploy a licensed app to the Mendix Cloud
* Deploy via the Mendix Modeler
* Deploy the app to an environment
* Deploy a Free App to the Mendix Cloud

Before starting this how-to, make sure you have completed the prerequisites described below.

### 2.1 Prerequisites for a Licensed App

* Your app must be linked to a licensed cloud node
* You must have deployment permissions
* Your Google Authenticator must be enabled

### 2.1 Prerequisites for a Free App

* You must have created an app

## 3 Deploying a Licensed App to the Mendix Cloud

There are two methods for deploying your app to the Mendix Cloud. The first option is directly via the Mendix Modeler, and the second is through the Developer Portal.

### 3.1 Deploying via the Modeler

1. Open the [Modeler](http://appstore.home.mendix.com/link/modeler/).
2. Open the licensed app.
3. Click **Project** in the top menu bar and select **Deploy to licensed cloud node**:

    ![](attachments/mendix-cloud-deploy/deploy-to-cloud-node.png)

4. Click **Deploy**:

    ![](attachments/mendix-cloud-deploy/select-revision.png)

5. The deployment is now in progress. To see the uploaded package, click **Show online**:

    ![](attachments/mendix-cloud-deploy/deployment-started.png)

### 3.2 Creating a Package from Team Server in the Developer Portal

An app can also be deployed without using the Modeler. To do this, follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. Click **Apps** in the top navigation panel.
3. Select your app.
4. Go to **Environments**.
5. Click **Create package from team server**.
6. Select the preferred branch and revision and click **Next**.
7. Give the build a version number and click **Build this revision**.

The package will now be deployed to the cloud.

## 4 Deploy the App to an Environment

The previous steps explained how to deploy a deployment package to the Mendix Cloud, but the actual app is not running yet! To deploy a deployment package to a node environment, follow these steps:

1. Open the [Developer Portal](http://home.mendix.com).
2. Open your app.
2. Go to **Environments**.
3. In the **Deployment Package Repository**, choose the preferred deployment package and click **Deploy**.
4. Select the preferred environment, and then click **Continue**.
5. Click **Transport**. If asked to do so, clean the environment.
6. Configure the constants (if necessary) by clicking **Constants** and **Edit constants value**. This can also be done in a later stage in the settings.
7. Click **Continue**.
8. Click **Start application**. If asked, click **Synchronize database**.

The app is now deployed and the administrative account can be configured.

## 5 Deploying a Free App to the Mendix Cloud

With a Free App, it's only possible to deploy your app to a Sandbox environment using a Mendix Modeler. There are two methods to do that.

### 5.1 Method 1

Once you have created and worked on your App, you will want to share it with others in the Free App. You can deploy your Free App to a Sandbox environment by clicking **Run** at the top of your Mendix Modeler. This will automatically deploy your app to a Sandbox.

![](attachments/mendix-cloud-deploy/runapp2.jpg)

### 5.2 Method 2

If you want to choose whether you want to run your app locally or in the Sandbox, you can enable the Sandbox option by clicking **Run**:

![](attachments/mendix-cloud-deploy/runapp.jpg)

## 6 Related Content

* [AppCloudServices](https://appstore.home.mendix.com/link/app/934/); the **AppCloudServices** module allows your app to integrate with services on the Mendix Cloud
* [How to Configure Custom Domains](custom-domains)
* [Licensing Apps](licensing-apps)
* [How to Manage Company & App Roles](/developerportal/company-app-roles/manage-roles)
* [Company & App Roles](/developerportal/company-app-roles/index)
* [How to Set Up Two-Factor Authentication With Google Authenticator](../support/how-to-set-up-two-factor-authentication-with-google-authenticator)
