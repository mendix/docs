---
title: "Deploy a Mendix App to Pivotal"
category: "Cloud Foundry"
tags: []
---

## 1 Introduction

This how-to will focus on deploying to Pivotal Web Services.

**This how-to will teach you how to do the following:**

* Configure Pivotal and the Pivotal environment
* Add services to the app
* Deploy your app to Cloud Foundry
* Troubleshoot

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest version of the Mendix Modeler from the [Mendix App Store](https://appstore.home.mendix.com/link/modelers)
* Have access to a [Pivotal Web Services](https://run.pivotal.io/) account with the rights to create new applications and services (if you’re not a current Pivotal customer, you can sign up for a [free 60-day trial](https://run.pivotal.io/))
    * Have an S3 or S3-compatible object store with user credentials, a bucket, and rights to create and delete objects

## <a name="3"></a>3 Configure Pivotal in the Modeler

To push a Mendix app to Cloud Foundry, you have to configure the settings in the Modeler.

To configure Pivotal in the Modeler, follow these steps:

1. Open the Modeler, click **Run**, and select **Edit Pivotal Settings**:

    ![](attachments/18448647/18580553.png)

2. In the credentials section of the **Edit Pivotal Settings** configuration window, do the following:
    * Enter *https://api.run.pivotal.io/* for the **API endpoint**
    * Enter your Pivotal WS username for the **User name**
    * Enter your Pivotal WS password for the **Password**

    ![](attachments/18448647/18580556.png)

3. Click **Next**. You will be logged into your Pivotal instance.
4. Enter the following details:

    * Select the organization you want to use (for example, **mendix-rnd.com**) for **Organization**
    * Select the space you want to deploy your app to (for example, **new-buildpack-testing**) for **Space**
    * Select *Create new app*
    * Enter a name for your new app (for example, *CompanyExpenses*) for **App name**

    ![](attachments/18448647/18580555.png)

5. Click **Next**. The app will be created in the Pivotal WS environment.
6. In the final section of the the **Edit Pivotal Settings** configuration window, do NOT click **Finish** until you have completed the configuration steps in the following sections:
    * [4 Configure the Pivotal Environment](#4)
    * [5 Add a Database Service to Your App](#5)
    * [6 Add a FileStore Service to Your App](#6)

    ![](attachments/18448647/18580554.png)

## 4 <a name="4"></a>Configure the Pivotal Environment

To configure the Pivotal environment, go to [http://console.run.pivotal.io](http://console.run.pivotal.io/) and log in with your Pivotal WS credentials:

![](attachments/18448647/18580599.png)

After logging in, you will see the Pivotal home screen. The following details on this screen are important:

* You can see that you are logged in at the top-right of the screen
* In the sidebar on the left side of the screen, you can see the organization you have access to and the spaces within that organization
* In the center of the screen, you can see the spaces, domains, and other users who are a member of this organization.

![](attachments/18448647/18580619.png)

## 5 <a name="5"></a>Add a Database Service to Your App

Apps make use of services (for example, databases, load balancers, and memory tools). In this step, you will add a database service that your app will use to store data.

To add a database service to your app, follow these steps:

1. Click the space where you created your app:

    ![](attachments/18448647/18580617.png)

    The app you created is there, but it isn't running yet. This is because it doesn't have any services attached to it yet.

2. Click **Add Service**:

    ![](attachments/18448647/18580598.png)

3. Select **ElephantSQL**:

    ![](attachments/18448647/18580597.png)

    This is a PostgreSQL database that your app will use. Mendix supports PostgreSQL and MySQL databases on Cloud Foundry. For some database services that do not add a `DATABASE_URL` environment variable, you will need to set that manually.

4. Select the plan that fits your needs. This example will use the **free** option:

    ![](attachments/18448647/18580596.png)

5. In the **CONFIGURE INSTANCE** section of the screen, do the following:
    * Enter the name of the ElephantSQL database (for example, *ComanyExpensesDataStore*) for **Instance Name**
    * Select the space you want to add the instance to for **Add to Space**
    * Select the app you want to bind the database instance to (for example, **CompanyExpenses**) for **Bind to App**

    ![](attachments/18448647/18580594.png)

6. Click **Add** to finish the service configuration for ElephantSQL:

    ![](attachments/18448647/18580592.png) 

    The app you bound the service to will be loaded.

7. Scroll down to see the services bound to the app:

    ![](attachments/18448647/18580591.png)

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

1. Go to the Pivotal Web Services environment.
2. Open your app from the top menu:

    ![](attachments/18448647/18580569.png)

3. Go to the **Environment Variables** tab:

    ![](attachments/18448647/18580568.png)

4. Add the required S3 variables:

    ![](attachments/18448647/18580567.png)

5. Add any optional variables:

    {{% alert type="info" %}}

    When adding environment variables to a running application, you need to restart it for the changes to take effect.

    {{% /alert %}}

    After deploying an app from the Modeler, two variables will be added automatically: `DEVELOPEMENT_MODE` and `ADMIN_PASSWORD`. The development mode is true by befault; change this to false to run the app in production. The admin password is the password of the default admin of your Mendix app.

## 7 Deploy Your App to Cloud Foundry

1. Open the Modeler
2. Open the app you want to deploy to Cloud Foundry.
3. Click the arrow for the **Run** options and select **Run on Pivotal**:

    ![](attachments/18448647/18580549.png) 

    The Mendix app will now be deployed to the configured Pivotal app and started automatically

## 8 Troubleshooting

If you encounter any problems, you should consult the application logs:

1. Go to the Pivotal web services environment.
2. Open your app from the top menu:

    ![](attachments/18448647/18580569.png)

3. Go to the **Logs** tab:

    ![](attachments/18448645/18580538.png)

4. View the most recent log lines:

    ![](attachments/18448645/18580537.png)

5. To view new log lines while they come in, click **Tail Logs** on the right:

    ![](attachments/18448645/18580536.png)

6. You can now see log lines appear in real time:
    ![](attachments/18448645/18580535.png)

## 9 Related Content

* [Mendix BuildPack Documentation](https://github.com/mendix/cf-mendix-buildpack)
* [How to Deploy a Mendix App to IBM Bluemix](deploy-a-mendix-app-to-ibm-bluemix)
* [How to Deploy a Mendix App to Pivotal](deploy-a-mendix-app-to-pivotal)
* [How to Deploy a Mendix App to Cloud Foundry](deploy-a-mendix-app-to-cloud-foundry)
* [Pivotal Web Services Documentation](http://docs.run.pivotal.io/)
* [Pivotal Cloud Foundry Blog](http://blog.pivotal.io/cloud-foundry-pivotal)
