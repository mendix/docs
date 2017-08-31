---
title: "Deploy a Mendix App to IBM Bluemix"
category: "Cloud Foundry"
tags: []
---

## 1 Introduction

This how-to will focus on deploying to the IBM Bluemix platform.

**This how-to will teach you how to do the following:**

* Configure Cloud Foundry in the Modeler and the IBM Bluemix environment
* Add services to the app
* Deploy your app to Cloud Foundry
* Troubleshoot

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest version of the Mendix Modeler from the [Mendix App Store](https://appstore.home.mendix.com/link/modelers)
* Have access to an [IBM Bluemix](https://console.ng.bluemix.net/) account with the rights to create new applications and services (if you’re not a current IBM Bluemix customer, you can sign up for a [free 30-day trial](https://console.ng.bluemix.net/registration/))
* Set up a strong administrator password within your model

## 3 <a name="3"></a>Configure Cloud Foundry in the Modeler

To push a Mendix app to Cloud Foundry, you have to configure the settings in the Modeler.

To configure Cloud Foundry in the Modeler, follow these steps:

1. Open the Modeler, click **Run**, and select **Edit Cloud Foundry Settings**:

    ![](attachments/19202595/19398871.png)

2. In the credentials section of the **Edit Cloud Foundry Settings** configuration window, do the following:
    * Enter an **API endpoint** depending on your location:
        * US South – [https://api.ng.bluemix.net/](https://api.ng.bluemix.net/)
        * UK – [https://api.eu-gb.bluemix.net](https://api.eu-gb.bluemix.net)
        * Sydney – [https://api.au-syd.bluemix.net](https://api.au-syd.bluemix.net)
    * Enter your IBM Bluemix username for the **User name**
    * Enter your IBM Bluemix password for **Password**

    ![](attachments/19202595/19398872.png)

3. Click **Next**. You will be logged into the IBM Bluemix Cloud Foundry installation.
4. In the app selection section of the **Edit Cloud Foundry Settings** configuration window, do the following:
    * Select the organization you want to use (for example, **Mendix**) for **Organization**
    * Select the space you want to deploy your app to (for example, **staging**) for **Space**
    * Select **Create new app**
    * Enter a name for your new app (for example, *company-expenses*) for **App name**

    ![](attachments/19202595/19398873.png)

5. Click **Next**. The app will be created in the IBM Bluemix environment.

6. In the final section of the **Edit Cloud Foundry Settings** configuration window, do NOT click **Finish** until you have completed the configuration steps in the following sections:
    * [4 Configure the IBM Bluemix Environment](#4)
    * [5 Add a Database Service to Your App](#5)
    * [6 Add a FileStore Service to Your App](#6)

    ![](attachments/19202595/19398874.png)

## 4 <a name="4"></a>Configure the IBM Bluemix Environment

To configure the IBM Bluemix environment, go to [IBM Bluemix](https://console.ng.bluemix.net/) and log in with your IBM Bluemix credentials:

![](attachments/19202595/bmsignin.png)

After logging in, you will see the Bluemix home screen. The following details on this screen are important:

* This view is per region, and you can select a different region in the personal menu in the top-right corner of the screen
* You can see that you are logged in at the top-right corner of the screen
* You can see the organization you have access to and the spaces within that organization at the top-right side of the screen

![](attachments/19202595/bmappoverview.png)

## 5 <a name="5"></a>Add a Database Service to Your App

Apps make use of services (for example, databases, load balancers, and memory tools). In this step, you will add a database service that your app will use to store data. A Database is mandatory for a mendix app to run.

1. Click **Create Service**:

    ![](attachments/19202595/bmselectcreateservice.png)

2. Mendix has support for DB2, DashDB, Compose For PostgreSQL, ClearDB MySQL, and ElephantSQL on Bluemix. Select  **ElephantSQL** for this setup:

    ![](attachments/19202595/selectdataabase.png)


3. Select the plan that fits your needs. This example will use the **Free** option:

    ![](attachments/19202595/bmselectappbinding.png)

4. In the **Add Service** section of the screen, do the following:
    * Select the app to which you want to bind the database instance (for example, **company-expenses**) for **App**
    * Enter the name of the ElephantSQL Database (for example, *ElephantSQL_7k*) for **Service name**

5. Click **Create** to finish the service configuration for ElephantSQL.

## 6 <a name="6"></a>Add a FileStore Service to Your App

To enable persistent file storage, you need to configure the IBM Swift Object Storage service (which was introduced in Mendix 6.8). To make sure the FileDocuments in your application persist, you need to attach this service to your application.

1. Go to the Bluemix environment.

2. Open your app from the list on the home screen:

    ![](attachments/19202595/selectappsingle.png)

3. Go to the **Connections** menu item and click **Connect new**:

    ![](attachments/19202595/BluemixConnectNewService.png)

4. Select the **Object Storage** service from the catalog:

    ![](attachments/19202595/IBM_Swift_Object_Storage.png)

5. Create the service:

    ![](attachments/19202595/bmselectcreateservice.png)
    
    This can take a few seconds. After the service is created, you can check if it is connected.
    
    After deploying an app from the Modeler, two variables will be added automatically: `DEVELOPEMENT_MODE` and `ADMIN_PASSWORD`. The development mode is true by default; change this to false to run the app in production. The admin password is the password of the default admin of your Mendix app.

6. You can now go back and click **Finish** in the final section of the the **Edit Cloud Foundry Settings** configuration window (see step #6 of [3 Configure Cloud Foundry in the Modeler](#3)).

## 7 Deploy Your App to Cloud Foundry

1. Open the Modeler.
2. Open the app you want to deploy to Cloud Foundry.
3. Click the arrow for the **Run** options and select **Run on Cloud Foundry**:

    ![](attachments/19202595/19398884.png)

    The Mendix app will now be deployed to the configured Cloud Foundry installation and started automatically.

## 8 Troubleshooting

If you encounter any problems, you should consult the application logs:

1. Go to the IBM Bluemix environment.
2. Open your app from the top menu:

    ![](attachments/19202595/selectappsingle.png)

3. Go to the **Logs** menu item and view the most recent log lines in real time:

    ![](attachments/19202595/bmlogging.png)

## 9 Related Content

* [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)
* [How to Deploy a Mendix App to Pivotal](deploy-a-mendix-app-to-pivotal)
* [How to Deploy a Mendix App to Cloud Foundry](deploy-a-mendix-app-to-cloud-foundry)
* [IBM Bluemix documentation](https://www.eu-gb.bluemix.net/docs)
