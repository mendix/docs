---
title: "Deploying a Mendix App to HP Helion"
category: "Cloud Foundry"
space: "Mendix 5 How-to's"
---

![](attachments/18448646/18580542.png)

This how-to will focus on deploying to the HP Helion Development Platform. Note that the outline is the same for all Cloud Foundry distributions.

To follow this guide you will need to have access to an [HP Helion Development Platform](http://www8.hp.com/us/en/cloud/helion-devplatform-overview.html) instance with MySQL or PostgreSQL. You should also have a user account with the rights to create new applications and services. Furthermore you should have an S3 or S3 compatible object store with user credentials, a bucket and rights to create and delete objects. To scale your app to more than one instance you will need to enable sticky sessions on the Cloud Foundry router.

## 1. Preparation

*   Download the [latest version of the Mendix Business Modeler](https://appstore.home.mendix.com/link/modelers) from the Mendix App Store.
*   If you don't have an HP Helion Development Platform set up, you can follow this guide on [installing the Dev Platform on the HP Cloud](http://docs.hpcloud.com/helion/devplatform/ALS-developer-trial-quick-start/).

## 2\. Configure the Helion endpoint in the Modeler

To push a Mendix app to Cloud Foundry you will have to configure the settings in the [Business Modeler](https://appstore.home.mendix.com/link/modelers).

1.  Open the **Mendix Business Modeler**.
2.  Go to **Run > Edit Cloud Foundry Settings**:
    ![](attachments/18448647/18580551.png)
3.  Enter the following details in the settings window:

    <table><thead><tr><th class="blueheader confluenceTh">Cloud Foundry Credentials</th><th class="blueheader confluenceTh">Value</th></tr></thead><tbody><tr><td class="confluenceTd">Url</td><td class="confluenceTd"><span class="nolink">https://api.helion.mendix.com/</span></td></tr><tr><td class="confluenceTd">User name</td><td class="confluenceTd">Your HP Helion user name</td></tr><tr><td colspan="1" class="confluenceTd">Password</td><td colspan="1" class="confluenceTd">Your&nbsp;HP Helion password</td></tr></tbody></table>

    ![](attachments/18448646/18580541.png)

4.  Click **Next**. You will be logged into your Dev Platform instance.

5.  Enter the following details:

    <table><thead><tr><th class="blueheader confluenceTh" colspan="1">App</th><th class="blueheader confluenceTh" colspan="1">Value</th></tr></thead><tbody><tr><td class="confluenceTd">Organization</td><td class="confluenceTd">Select the organization you want to use (i.e. <strong>Mendix).</strong></td></tr><tr><td colspan="1" class="confluenceTd">Space</td><td colspan="1" class="confluenceTd">Select the space you want to deploy your app to (i.e. <strong>MxSpace</strong>).</td></tr><tr><td colspan="1" class="confluenceTd">App</td><td colspan="1" class="confluenceTd">Select <strong>Create new app</strong>.</td></tr><tr><td colspan="1" class="confluenceTd">Domain</td><td colspan="1" class="confluenceTd">Select the domain you want to deploy to (i.e. <strong>helion.mendix.com </strong>).</td></tr><tr><td colspan="1" class="confluenceTd">App name</td><td colspan="1" class="confluenceTd">Enter a name for your new app (i.e. CompanyExpenses).</td></tr></tbody></table>

    ![](attachments/18448646/18580540.png)

6.  Click **Next**. The App will be created in the Helion Dev Platform.
    ![](attachments/18448647/18580548.png)

    Do NOT click Finish until you have completed the following configuration steps.



## 3\. Configure the HP Helion Development Environment

1. Go to your Development Platform web interface (in our case [https://api.helion.mendix.com/](https://api.helion.mendix.com/)) and log in with your **HP Helion credentials**.

    This link is different per Helion instance. This how-to will use the Mendix url.

After logging in you will see the Dev Platform home screen:

![](attachments/18448647/18580580.png)

*   You can see that you are logged in at the top right of the screen.
*   With the menu at the top you can manage your environment
*   In the center of the screen you can perform various tasks, like configuring Organizations, users, and Services.



## 4\. Add a Service using the Application Lifecycle Service Client

Apps make use of services. Think of Databases, File Stores, and caching services. In this step you will add a Database service that your app will use to store data. For some database services that do not add a DATABASE_URL environment variable you will need to set that manually.

1.  Click on **Download the Client** on the Dev Platform home screen:
    ![](attachments/18448647/18580579.png)
2.  Download the version applicable to your environment. This how-to will use the **Windows** version.
    ![](attachments/18448647/18580578.png)
3.  Click on the **OS** applicable to your situation.
    This will download the Application Lifecycle Service (ALS) client needed to manage the Helion Development Platform Apps.
4.  **Unzip** the downloaded package.
5.  Open the **Client**.
6. Enter the following command:

    ```java
    helion > create-service postgresql NAMEOFTHESERVICE NAMEOFYOURAPP
    ```

    For this how-to we used the following code:

    ```java
    helion > create-service postgresql CompanyExpensesDataStore CompanyExpenses
    ```

7. Select a plan and hit **Enter**.
    ![](attachments/18448647/18580577.png)

    The service will be created and bound to your app.
    ![](attachments/18448647/18580576.png)



## 5\. Add a FileStore Service to you App

To enable persistent file storage you need to configure the S3 object store which was introduced in Mendix 5.15\. Mendix support S3 and object stores that enable the S3 API. To make sure the FileDocuments in your application persist you need to set up the following Environment Variables.

<table><thead><tr><th class="blueheader confluenceTh" colspan="1">Variable</th><th class="blueheader confluenceTh" colspan="1">Value</th><th class="blueheader confluenceTh" colspan="1">Required</th></tr></thead><tbody><tr><td class="confluenceTd">S3_ACCESS_KEY_ID</td><td class="confluenceTd"><p>Access Key of your IAM credentials</p><p>Example: AKIAILYXS5VM4DQ7CTWQ</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_SECRET_ACCESS_KEY</td><td colspan="1" class="confluenceTd"><p>Secret Key of your IAM credentials</p><p>Example: XfSrHqbLG3D8VIPhn1vT7jN9H8w4ak3GAap/xcR1</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_BUCKET_NAME</td><td colspan="1" class="confluenceTd"><p>The bucket name which can be accessed using the IAM credentials above</p><p>Example: my-s3-bucket</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_ENDPOINT</td><td colspan="1" class="confluenceTd"><p>Not needed if you are using Amazon S3\. If you are using an S3 compatible Object Store such as Riak CS, Ceph etc. you can use the domain name of the Object Store.</p><p>Example: <a href="http://s3.amazonaws.com/" class="external-link" rel="nofollow">s3.amazonaws.com</a></p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_KEY_SUFFIX</td><td colspan="1" class="confluenceTd"><p>For multi-tenant buckets you can add a suffix to each object name. Access to suffixed objects can be restricted using IAM policies.</p><p>Example: -my-key-suffix</p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_PERFORM_DELETES</td><td colspan="1" class="confluenceTd"><p>Set to 'false' when using the Object Store in append-only mode. In this mode backups can be created and restored via just the database.</p><p>Example: false</p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_USE_V2_AUTH</td><td colspan="1" class="confluenceTd"><p>Set to 'true' to force the S3 connector to use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html" class="external-link" rel="nofollow">V2 of the AWS authentication protocol</a>. This is required for S3 compatible file stores that do not support <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html" class="external-link" rel="nofollow">V4 of the authentication protocol</a>, such as Riak CS, Ceph, OpenStack Swift etc.</p><p>Example: true</p></td><td colspan="1" class="confluenceTd">No</td></tr></tbody></table>

1.  Go to the **Helion Dev Platform** environment.
2.  Go to **Applications** from the top menu:
    ![](attachments/18448647/18580575.png)
3.  Click on the App you just created:
    ![](attachments/18448647/18580574.png)
4.  In the sidebar on the left click Environment Variables.
    ![](attachments/18448647/18580573.png)
5.  Add the following required variables:

    <table><thead><tr><th class="blueheader confluenceTh" colspan="1">Variable</th></tr></thead><tbody><tr><td class="confluenceTd">S3_ACCESS_KEY_ID</td></tr><tr><td colspan="1" class="confluenceTd">S3_SECRET_ACCESS_KEY</td></tr><tr><td colspan="1" class="confluenceTd">S3_BUCKET_NAME</td></tr></tbody></table>

    ![](attachments/18448647/18580572.png)

6.  Optionally you can add more variables mentioned above.
7.  Click **Save** when you are done.
8. When you are done setting the variables you need to **restart** you App for the changes to take effect.
    ![](attachments/18448647/18580570.png)

    After deploying an App from the Mendix Business Modeler two variables will automatically be added: DEVELOPEMENT_MODE and ADMIN_PASSWORD. The development mode is _true_ by befault. Change this to _false_ to run the app in production. The admin password is the password of the default admin of your Mendix app.

## 6\. Deploy your App to Cloud Foundry

1.  Open the **Business Modeler**.
2.  Open the **App** you want to deploy to Cloud Foundry.
3.  Click the arrow for the Run options and select **Run on Cloud Foundry**.
    ![](attachments/18448647/18580550.png)

    The Mendix App will now be deployed to the configured Helion App.



## 7\. Troubleshooting

If you encounter any problems you should consult the application logs.

1.  Go to the **Helion Dev Platform** environment.
2.  Go to **Applications** from the top menu:
    ![](attachments/18448647/18580575.png)
3.  Click on the App you are having issues with:
    ![](attachments/18448647/18580574.png)
4.  In the sidebar on the left click **Log Stream** to inspect log lines in real time.

    ![](attachments/18448646/18580539.png)



## 8\. Read More

*   [Deploying a Mendix App to Pivotal](Deploying+a+Mendix+App+to+Pivotal)
*   [Deploying a Mendix App to HP Helion](Deploying+a+Mendix+App+to+HP+Helion)
*   [Deploying a Mendix App to Cloud Foundry](Deploying+a+Mendix+App+to+Cloud+Foundry)
*   [HP Helion Development Platform ALS Documentation](http://docs.hpcloud.com/als/v1/)
*   [HP Helion Development Platform Documentation](http://docs.hpcloud.com/helion/devplatform/1.1/)
