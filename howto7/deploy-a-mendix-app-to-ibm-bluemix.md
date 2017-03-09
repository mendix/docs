---
title: "Deploying a Mendix App to IBM Bluemix"
space: "Mendix 7 How-To's"
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
    * Have an S3 or S3-compatible object store with user credentials, a bucket, and rights to create and delete objects

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

![](attachments/19202595/19398875.png)

After logging in, you will see the Bluemix home screen. The following details on this screen are important:

* This view is per region, and you can select a different region in the personal menu in the top-right corner of the screen
* You can see that you are logged in at the top-right corner of the screen
* In the sidebar on the left side of the screen, you can see the organization you have access to and the spaces within that organization

![](attachments/19202595/19398876.png)

## 5 <a name="5"></a>Add a Database Service to Your App

Apps make use of services (for example, databases, load balancers, and memory tools). In this step, you will add a database service that your app will use to store data.

1. Click **Use Services or APIs**:

    ![](attachments/19202595/19398877.png)

2. Select **ElephantSQL**:

    ![](attachments/19202595/19398878.png) 

    This is a PostgreSQL database that your app will use. Mendix supports PostgreSQL and MySQL databases on Cloud Foundry. For some database services that do not add a `DATABASE_URL` environment variable, you will need to set that manually.

3. Select the plan that fits your needs. This example will use the **Free** option:

    ![](attachments/19202595/19398880.png)

4. In the **Add Service** section of the screen, do the following:
    * Select the space to which you want to add the instance for **Space**
    * Select the app to which you want to bind the database instance (for example, **company-expenses**) for **App**
    * Enter the name of the ElephantSQL Database (for example, *ComanyExpensesDataStore* for **Service name**

5. Click **Create** to finish the service configuration for ElephantSQL.

## 6 <a name="6"></a>Add a FileStore Service to Your App

To enable persistent file storage, you need to configure the S3 object store (which was introduced in Mendix 5.15). Mendix supports S3 and the object stores that enable the S3 API. To make sure the FileDocuments in your application persist, you need to set up the following environment variables:

| Variable | Value | Example | Required |
| --- | --- | --- | --- |
| S3_ACCESS_KEY_ID | The access key of your IAM credentials. | AKIAILYXS5VM4DQ7CTWQ | Yes |
| S3_SECRET_ACCESS_KEY | The secret key of your IAM credentials. | XfSrHqbLG3D8VIPhn1vT7jN9H8w4ak3GAap/xcR1 | Yes |
| S3_BUCKET_NAME | The bucket name that can be accessed using the IAM credentials above. | my-s3-bucket | Yes |
| S3_ENDPOINT | Not needed if you are using Amazon S3. If you are using an S3-compatible object store (such as Riak CS and Ceph), you can use the domain name of the object store. | [s3.amazonaws.com](http://s3.amazonaws.com/) | No |
| S3_KEY_SUFFIX | For multi-tenant buckets, you can add a suffix to each object name. Access to suffixed objects can be restricted using IAM policies. | -my-key-suffix | No |
| S3_PERFORM_DELETES | Set to false when using the object store in append-only mode. In this mode, the backups can be created and restored via just the database. | false | No |
| S3_USE_V2_AUTH | Set to true to force the S3 connector to use [V2 of the AWS authentication protocol](http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html). This is required for S3-compatible file stores that do not support [V4 of the authentication protocol](http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html) (such as Riak CS, Ceph, and OpenStack Swift). | true | No |

1. Go to the Bluemix environment.
2. Open your app from the list on the home screen:

    ![](attachments/19202595/19398881.png)

3. Go to the **Environment Variables** menu item:

    ![](attachments/19202595/19398882.png)

4. Add the required S3 variables:

    ![](attachments/19202595/19398883.png)

5. Add any optional variables.

    <div class="alert alert-info">

    When adding environment variables to a running application, you need to restart it for the changes to take effect.

    </div>

    After deploying an app from the Modeler, two variables will be added automatically: `DEVELOPEMENT_MODE` and `ADMIN_PASSWORD`. The development mode is true by befault; change this to false to run the app in production. The admin password is the password of the default admin of your Mendix app.

6. You can now go back and click **Finish** in the final section of the the **Edit Cloud Foundry Settings** configuration window (see step #6 of [3 Configure Cloud Foundry in the Modeler](#3)).

## 7 Deploy your App to Cloud Foundry

1. Open the Modeler.
2. Open the app you want to deploy to Cloud Foundry.
3. Click the arrow for the **Run** options and select **Run on Cloud Foundry**:
    ![](attachments/19202595/19398884.png) 

    The Mendix app will now be deployed to the configured Cloud Foundry installation and started automatically.

## 8 Troubleshooting

If you encounter any problems, you should consult the application logs:

1. Go to the IBM Bluemix environment.
2. Open your app from the top menu:

    ![](attachments/19202595/19398881.png)

3. Go to the **Logs** menu item and view the most recent log lines in real time:

    ![](attachments/19202595/19398885.png)

## 9 Related Content

* [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)
* [How to Deploy a Mendix App to IBM Bluemix](deploy-a-mendix-app-to-ibm-bluemix)
* [How to Deploy a Mendix App to Pivotal](deploy-a-mendix-app-to-pivotal)
* [How to Deploy a Mendix App to HP Helion](deploy-a-mendix-app-to-hp-helion)
* [How to Deploy a Mendix App to Cloud Foundry](deploy-a-mendix-app-to-cloud-foundry)
* [IBM Bluemix documentation](https://www.eu-gb.bluemix.net/docs)
