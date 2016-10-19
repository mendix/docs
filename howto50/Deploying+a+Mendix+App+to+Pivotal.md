---
title: "Deploying a Mendix App to Pivotal"
category: "Cloud Foundry"
space: "Mendix 5 How-to's"
---
# Deploying a Mendix App to Pivotal

<table><thead><tr><th class="confluenceTh">Mendix Version</th><th class="confluenceTh">Create Date</th><th colspan="1" class="confluenceTh">Modified Date</th></tr></thead><tbody><tr><td class="confluenceTd">6.0</td><td class="confluenceTd">Nov 19, 2015 08:32</td><td colspan="1" class="confluenceTd">Mar 08, 2016 15:10</td></tr></tbody></table>

![](attachments/18448647/18580547.png)



This how-to will focus on deploying to Pivotal Web Services. Note that the outline is the same for all Cloud Foundry distributions.

To follow this guide you will need to have access to a[ Pivotal Web Services](https://run.pivotal.io/) account with the rights to create new applications and services. You should also have an S3 or S3 compatible object store with user credentials, a bucket and rights to create and delete objects.



## 1. Preparation

*   Download the [latest version of the Mendix Business Modeler](https://appstore.home.mendix.com/link/modelers) from the Mendix App Store.
*   If you’re not a current Pivotal customer, you can sign up for a [60-day free trial](https://run.pivotal.io/) of Pivotal Web Services.

## 2. Configure Cloud Foundry in the Modeler

To push a Mendix app to Cloud Foundry you will have to configure the settings in the [Business Modeler](https://appstore.home.mendix.com/link/modelers).

1.  Open the **Mendix Business Modeler**.
2.  Go to **Run > Edit Pivotal Settings**:
    ![](attachments/18448647/18580553.png)
3.  Enter the following details in the settings window:

    <table><thead><tr><th class="blueheader confluenceTh">Cloud Foundry Credentials</th><th class="blueheader confluenceTh">Value</th></tr></thead><tbody><tr><td class="confluenceTd">Url</td><td class="confluenceTd"><span class="nolink"><a href="https://api.run.pivotal.io/" class="external-link" rel="nofollow">https://api.run.pivotal.io</a></span></td></tr><tr><td class="confluenceTd">User name</td><td class="confluenceTd">Your Pivotal WS user name</td></tr><tr><td colspan="1" class="confluenceTd">Password</td><td colspan="1" class="confluenceTd">Your Pivotal WS password</td></tr></tbody></table>

    ![](attachments/18448647/18580556.png)

4.  Click **Next**. You will be logged into your Pivotal Instance.

5.  Enter the following details:

    <table><thead><tr><th class="blueheader confluenceTh" colspan="1">App</th><th class="blueheader confluenceTh" colspan="1">Value</th></tr></thead><tbody><tr><td class="confluenceTd">Organization</td><td class="confluenceTd">Select the organization you want to use (i.e. mendix.com).</td></tr><tr><td colspan="1" class="confluenceTd">Space</td><td colspan="1" class="confluenceTd">Select the space you want to deploy your app to (i.e. staging).</td></tr><tr><td colspan="1" class="confluenceTd">App</td><td colspan="1" class="confluenceTd">Select <strong>Create new app</strong></td></tr><tr><td colspan="1" class="confluenceTd">App name</td><td colspan="1" class="confluenceTd">Enter a name for your new app (i.e. CompanyExpenses).</td></tr></tbody></table>

    ![](attachments/18448647/18580555.png)

6.  Click **Next**. The App will be created in the Pivotal WS environment.
    ![](attachments/18448647/18580554.png)

    Do not click Finish until you have completed the configuration steps for the Database and FileStore services below.



## 3\. Configure the Pivotal Environment

1.  Go to [http://console.run.pivotal.io](http://console.run.pivotal.io/) and log in with your **Pivotal WS credentials**.
    ![](attachments/18448647/18580599.png)

After logging in you will see the Pivotal home screen:
![](attachments/18448647/18580619.png)

*   You can see that you are logged in at the top right of the screen.
*   In the sidebar on the left you can see the Organization you have access to and the Spaces within that Organization.
*   In the center of the screen you can see the Spaces, Domains, and other users who are a member of this Organization.



## 4\. Add a Database Service to an App

Apps make use of services. Think of Databases, Load Balancers, and Memory tools. In this step you will add a Database service that your app will use to store data.

1.  Click on the **Space** where you created your App:
    ![](attachments/18448647/18580617.png)
    The app you created is there but isn't running yet, because it doesn't have any services attached to it yet.

2.  Click on **Add Service**.
    ![](attachments/18448647/18580598.png)
3.  Select **ElephantSQL**:
    ![](attachments/18448647/18580597.png)
    This is a **PostgreSQL** database that your App will use. Mendix supports PostgreSQL and MySQL databases on Cloud Foundry. For some database services that do not add a DATABASE_URL environment variable you will need to set that manually.

4.  Select a plan that fits your needs. This example will use the **free** option.
    ![](attachments/18448647/18580596.png)
5.  Enter  the following details:

    <table><thead><tr><th class="blueheader confluenceTh" colspan="1">App</th><th class="blueheader confluenceTh" colspan="1">Value</th></tr></thead><tbody><tr><td class="confluenceTd">Instance Name</td><td class="confluenceTd">Enter the name of the ElephantSQL Database, i.e. <em>ComanyExpensesDataStore</em>.</td></tr><tr><td colspan="1" class="confluenceTd">Add to Space</td><td colspan="1" class="confluenceTd">Select the space you want to add the instance to.</td></tr><tr><td colspan="1" class="confluenceTd">Bind to App</td><td colspan="1" class="confluenceTd">Select the App you want to bind the database Instance to, i.e. <em>CompanyExpenses</em>.</td></tr></tbody></table>

    ![](attachments/18448647/18580594.png)

6.  Click **Add** to finish the service configuration for ElephantSQL.
    ![](attachments/18448647/18580592.png) 
    The App you bound the Service to will be loaded.

7.  Scroll down to see the Services bound to the App.
    ![](attachments/18448647/18580591.png)



## 5\. Add a FileStore Service to you App

To enable persistent file storage you need to configure the S3 object store which was introduced in Mendix 5.15\. Mendix support S3 and object stores that enable the S3 API. To make sure the FileDocuments in your application persist you need to set up the following Environment Variables.

<table><thead><tr><th class="blueheader confluenceTh" colspan="1">Variable</th><th class="blueheader confluenceTh" colspan="1">Value</th><th class="blueheader confluenceTh" colspan="1">Required</th></tr></thead><tbody><tr><td class="confluenceTd">S3_ACCESS_KEY_ID</td><td class="confluenceTd"><p>Access Key of your IAM credentials</p><p>Example: AKIAILYXS5VM4DQ7CTWQ</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_SECRET_ACCESS_KEY</td><td colspan="1" class="confluenceTd"><p>Secret Key of your IAM credentials</p><p>Example: XfSrHqbLG3D8VIPhn1vT7jN9H8w4ak3GAap/xcR1</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_BUCKET_NAME</td><td colspan="1" class="confluenceTd"><p>The bucket name which can be accessed using the IAM credentials above</p><p>Example: my-s3-bucket</p></td><td colspan="1" class="confluenceTd">Yes</td></tr><tr><td colspan="1" class="confluenceTd">S3_ENDPOINT</td><td colspan="1" class="confluenceTd"><p>Not needed if you are using Amazon S3\. If you are using an S3 compatible Object Store such as Riak CS, Ceph etc. you can use the domain name of the Object Store.</p><p>Example: <a href="http://s3.amazonaws.com/" class="external-link" rel="nofollow">s3.amazonaws.com</a></p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_KEY_SUFFIX</td><td colspan="1" class="confluenceTd"><p>For multi-tenant buckets you can add a suffix to each object name. Access to suffixed objects can be restricted using IAM policies.</p><p>Example: -my-key-suffix</p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_PERFORM_DELETES</td><td colspan="1" class="confluenceTd"><p>Set to 'false' when using the Object Store in append-only mode. In this mode backups can be created and restored via just the database.</p><p>Example: false</p></td><td colspan="1" class="confluenceTd">No</td></tr><tr><td colspan="1" class="confluenceTd">S3_USE_V2_AUTH</td><td colspan="1" class="confluenceTd"><p>Set to 'true' to force the S3 connector to use <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-2.html" class="external-link" rel="nofollow">V2 of the AWS authentication protocol</a>. This is required for S3 compatible file stores that do not support <a href="http://docs.aws.amazon.com/general/latest/gr/signature-version-4.html" class="external-link" rel="nofollow">V4 of the authentication protocol</a>, such as Riak CS, Ceph, OpenStack Swift etc.</p><p>Example: true</p></td><td colspan="1" class="confluenceTd">No</td></tr></tbody></table>

1.  Go to the **Pivotal Web Services** environment.
2.  Open your App from the top menu:
    ![](attachments/18448647/18580569.png)
3.  Go to the **Environment Variables** tab.
    ![](attachments/18448647/18580568.png)
4.  Add the required **S3 variables**:
    ![](attachments/18448647/18580567.png)
5.  Add any optional variables.

    <div class="alert alert-info">{% markdown %}

    When adding Environment Variables to a running application you need to restart it for the changes to take effect.

    {% endmarkdown %}</div><div class="alert alert-info">{% markdown %}

    After deploying an App from the Mendix Business Modeler two variables will automatically be added: DEVELOPEMENT_MODE and ADMIN_PASSWORD. The development mode is _true_ by befault. Change this to _false_ to run the app in production. The admin password is the password of the default admin of your Mendix app.

    {% endmarkdown %}</div>

## 6\. Deploy your App to Cloud Foundry

1.  Open the **Business Modeler**.
2.  Open the **App** you want to deploy to Cloud Foundry.
3.  Click the arrow for the Run options and select **Run on Cloud Foundry**.
    ![](attachments/18448647/18580549.png) 

    The Mendix App will now be deployed to the configured Pivotal App and started automatically



## 7\. Troubleshooting

If you encounter any problems you should consult the application logs.

1.  Go to the **Pivotal Web Services** environment.
2.  Open your App from the top menu:
    ![](attachments/18448647/18580569.png)
3.  Go to the **Logs** tab.
    ![](attachments/18448645/18580538.png)
4.  View to the most recent log lines:
    ![](attachments/18448645/18580537.png)
5.  To view new log lines while they come in, use the **Tail Logs** button on the right:
    ![](attachments/18448645/18580536.png)
6.  You can now see log lines appear in real time:
    ![](attachments/18448645/18580535.png)



## 8\. Related content

*   [Deploying a Mendix App to Pivotal](Deploying+a+Mendix+App+to+Pivotal)
*   [Deploying a Mendix App to HP Helion](Deploying+a+Mendix+App+to+HP+Helion)
*   [Deploying a Mendix App to Cloud Foundry](Deploying+a+Mendix+App+to+Cloud+Foundry)
*   [Deploying a Mendix App to IBM Bluemix](/howto6/Deploy+a+Mendix+App+to+IBM+Bluemix)
*   [Pivotal Web Services Documentation](http://docs.run.pivotal.io/)
*   [Pivotal Cloud Foundry Blog](http://blog.pivotal.io/cloud-foundry-pivotal)
