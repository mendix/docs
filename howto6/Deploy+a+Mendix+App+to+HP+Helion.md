---
title: "Deploy a Mendix App to HP Helion"
space: "Mendix 6 How-to's"
category: "Cloud Foundry"
tags: []
---

## 1 Introduction

This how-to focuses on deploying to the HP Helion Development Platform.

**This how-to will teach you how to do the following:**

* Configure the Helion endpoint and Helion development environment
* Add services to the app
* Deploy your app to Cloud Foundry
* Troubleshoot

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Download the latest version of the Mendix Modeler from the [Mendix App Store](https://appstore.home.mendix.com/link/modelers)
* Have access to an [HP Helion Development Platform](http://www8.hp.com/us/en/cloud/helion-devplatform-overview.html) instance with MySQL or PostgreSQL (for installation details, see the [HPE Helion Development Platform: Quick Start Developer Trial](http://docs.hpcloud.com/helion/devplatform/ALS-developer-trial-quick-start/))
    * Have a user account with the rights to create new applications and services
    * Have an S3 or S3-compatible object store with user credentials, a bucket, and rights to create and delete objects
    * Enable sticky sessions on the Cloud Foundry router (in order to scale your app up to more than one instance)

## <a name="ConfiguretheHelionEndpointintheModeler"></a>3 Configure the Helion Endpoint in the Modeler

To push a Mendix app to Cloud Foundry, you have to configure the settings in the Modeler. 

To configure the Helion endpoint in the Modeler, follow these steps:

1. Open the Modeler, click **Run**, and select **Edit HP Helion Settings**:

    ![](attachments/18448647/18580551.png)

2. In the credentials section of the **Edit HP Helion Settings** configuration window, do the following:
    * Enter `https://api.helion.mendix.com/` for the **API endpoint**
    * Enter your HP Helion username for the **User name**
    * Enter your HP Helion password for the **Password**

    ![](attachments/18448646/18580541.png)

3. Click **Next**. You will be logged into your development platform instance.
4. In the app selection section of the **Edit HP Helion Settings** configuration window, do the following:

    * Select the organization you want to use (for example, **Mendix**) for **Organization**
    * Select the space you want to deploy your app to (for example, **MxSpace**) for **Space**
    * Select **Create new app**
    * Select the domain to which you want to deploy (for example, **helion.mendix.com** ) for **Domain**
    * Enter a name for your new app (for example, *CompanyExpenses*) for **App name**

    ![](attachments/18448646/18580540.png)

5. Click **Next**. The app will be created in the Helion development platform.
6. In the final section of the the **Edit HP Helion Settings** configuration window, do NOT click **Finish** until you have completed the configuration steps in the following sections:
    * [4 Configure the HP Helion Development Environment](#ConfiguretheHPHelionDevelopmentEnvironment)
    * [5 Add a Service Using the Application Lifecycle Service Client](#AddaServiceusingtheApplicationLifecycleServiceClient)
    * [6 Add a FileStore Service to Your App](#AddaFileStoreServicetoYourApp)

    ![](attachments/18448647/18580548.png)

## <a name="ConfiguretheHPHelionDevelopmentEnvironment"></a>4 Configure the HP Helion Development Environment

To configure the HP Helion development environment, go to your development platform web interface (in our case, that is [https://api.helion.mendix.com/](https://api.helion.mendix.com/)) and log in with your HP Helion credentials.

<div class="alert alert-info">

The link above is different per Helion instance. This how-to will use the Mendix URL.

</div>

![](attachments/18448647/18580581.png)

After logging in, you will see the development platform home screen. The following details on this screen are important:

* You can see that you are logged in at the top-right of the screen
* With the menu at the top of the screen, you can manage your environment
* In the center of the screen you can perform various tasks, such as configuring organizations, users, and services

![](attachments/18448647/18580580.png)

## <a name="AddaServiceusingtheApplicationLifecycleServiceClient"></a>5 Add a Service Using the Application Lifecycle Service Client

Apps make use of services (for example, databases, file stores, and caching services). In this step, you will add a database service that your app will use to store data. For some database services that do not add a `DATABASE_URL` environment variable, you will need to set that manually.

To add a service using the application lifecycle service client, follow these steps:

1. Click **Download the Client** on the development platform home screen:
    ![](attachments/18448647/18580579.png)
2. Download the version applicable to your environment (this how-to uses the Windows version):
    ![](attachments/18448647/18580578.png)
3. Click the OS applicable to your situation, which will download the Application Lifecycle Service (ALS) client needed to manage the Helion Development Platform Apps.
4. Unzip the downloaded package.
5. Open the client and enter the following command:

    ```java
    helion > create-service postgresql NAMEOFTHESERVICE NAMEOFYOURAPP
    ```

    For this how-to we used the following code:

    ```java
    helion > create-service postgresql CompanyExpensesDataStore CompanyExpenses
    ```

6. Select a plan and press **Enter**:
    ![](attachments/18448647/18580577.png)

    The service will be created and bound to your app:
    ![](attachments/18448647/18580576.png)

## <a name="AddaFileStoreServicetoYourApp"></a>6 Add a FileStore Service to Your App

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

1. Go to the Helion development platform environment.
2. On the top menu, go to **Applications**:

    ![](attachments/18448647/18580575.png)

3. Click the app that you just created:

    ![](attachments/18448647/18580574.png)

4. Click **Environment Variables** in the sidebar on the left side of the screen:

    ![](attachments/18448647/18580573.png)

5. Add the following required variables:
    * S3_ACCESS_KEY_ID
    * S3_SECRET_ACCESS_KEY
    * S3_BUCKET_NAME

    ![](attachments/18448647/18580572.png)

    Optionally, you can add more variables mentioned above.
6. Click **Save** when you are done.
7. After setting the variables, you need to restart your app for the changes to take effect, as stated in this warning message:
    ![](attachments/18448647/18580570.png)

    After deploying an app from the Modeler, two variables will be added automatically: `DEVELOPEMENT_MODE` and `ADMIN_PASSWORD`. The development mode is true by befault; change this to false to run the app in production. The admin password is the password of the default admin of your Mendix app.

8. You can now go back and click **Finish** in the final section of the the **Edit HP Helion Settings** configuration window (see step #6 of [3 Configure the Helion Endpoint in the Modeler](#ConfiguretheHelionEndpointintheModeler)).

## 7 Deploy Your App to Cloud Foundry

1. Open the Modeler.
2. Open the app that you want to deploy to Cloud Foundry.
3. Click the arrow for the **Run** options and select **Run on HP Helion**:

    ![](attachments/18448647/18580550.png)

    The Mendix app will now be deployed to the configured Helion app.

## 8 Troubleshooting

If you encounter any problems, you should consult the application logs:

1. Go to the Helion development platform environment.
2. On the top menu, go to **Applications**:

    ![](attachments/18448647/18580575.png)

3. Click the app that you just created:

    ![](attachments/18448647/18580574.png)

4. In the sidebar on the left, click **Log Stream** to inspect log lines in real time:

    ![](attachments/18448646/18580539.png)

## 9 Related Content

* [How to Deploy a Mendix App to IBM Bluemix](Deploy+a+Mendix+App+to+IBM+Bluemix)
* [How to Deploy a Mendix App to Pivotal](Deploy+a+Mendix+App+to+Pivotal)
* [How to Deploy a Mendix App to HP Helion](Deploy+a+Mendix+App+to+HP+Helion)
* [How to Deploy a Mendix App to Cloud Foundry](Deploy+a+Mendix+App+to+Cloud+Foundry)
* [HP Helion Development Platform ALS documentation](http://docs.hpcloud.com/als/v1/)
* [HP Helion Development Platform documentation](http://docs.hpcloud.com/helion/devplatform/1.1/)