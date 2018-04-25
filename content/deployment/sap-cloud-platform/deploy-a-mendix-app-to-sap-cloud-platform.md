---
title: "Deploy a Mendix App on SAP Cloud Platform"
category: "SAP Cloud Platform"
description: "Presents reference information on the SAP Deployment."
tags: ["SAP", "SAP Cloud Platform", "on-premises", "Cloud Connector"]
---

## 1 Introduction

This document describes how a Mendix application is deployed on the SAP Cloud Platform. It also describes how Cloud Foundry can be set up on SAP from within the Desktop Modeler.

It is recommended that you use the SAP deployment tools in the Developer Portal and follow the instructions in the documentation for deploying to [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform) unless you have specific requirements which that method does not support.

## 2 SAP Cloud Platform Cloud Foundry

To run a Mendix application on the SAP Cloud Platform, you need a subscription to the SAP Cloud Platform Cloud Foundry. This can be a trial account or a commercial account.

A Mendix application requires the following services on the SAP Cloud Platform:

* PostgreSQL database
* Route

In addition to these required services, the following services are optional:

* XSUAA Service
* Connectivity Service
* ObjectStore (S3)

It is recommended that you use the instructions for deploying through the [Mendix Developer Portal](/developerportal/deploy/sap-cloud-platform). If you do this, these services will be automatically instantiated and bound to the application.

### 2.1 Trial Account

An SAP Cloud Platform Cloud Foundry trial account comes with a large enough quota to run a single application. The database plan available on the trial account is v9.4-dev.

The S3 ObjectStore Service is not available on a trial account. This will result in the loss of documents or files within your application when you redeploy it.

### 2.2 Commercial Account

To run Mendix within a commercial SAP Cloud Platform Cloud Foundry account, the quota should include the following:

* ObjectStore (s3)
* Route
* PostgreSQL v9.4-xsmall
* XSUAA Service
* Connectivity Service

A set of these services will be initiated for each application.

## 3 Deployment of an Application

To deploy an application on SAP Cloud Platform Cloud Foundry, the [Mendix Developer Portal](/developerportal/deploy/sap-cloud-platform) is recommended.

### 3.1 Command-Line Deployment

When you want to make your deployment part of a CI/CD pipeline, it is also possible to use the Cloud Foundry command line.

For the command-line instructions, see [Mendix Cloud Foudry Buildpack](https://github.com/mendix/cf-mendix-buildpack).

### 3.2 Deployment with Desktop Modeler Native Cloud Foundry Integration

If you do not want to use the Mendix Developer Portal for managing your application on the SAP Cloud Platform, you can use the Desktop Modeler Cloud Foundry integration.

Perform these steps to deploy your app on Cloud Foundry using the Desktop Modeler:

1. [Set up Cloud Foundry in the Desktop Modeler.](#321)
2. [Bind your services in SAP Cloud Platform Cloud Foundry.](#322)
3. [Deploy your app to Cloud Foundry.](#323)

#### 3.2.1 Setting Up Cloud Foundry in the Desktop Modeler<a name="321"></a>

To set up Cloud Foundry in the Desktop Modeler, follow these steps:

1.  Go to **Menu > Run > Edit Cloud Foundry Settings**:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/01-sap-edit-cf-settings.png)

2.  Enter the **API endpoint** of your SAP Cloud Platform Cloud Foundry Region and provide your account credentials, then click **Next**:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/02-sap-dm-cloudfounry-settings.png)

3.  Provide to following information:

    * **Organization**
    * **Space**
    * **App**
    * **App Name**
    * **Buildpack** (use **Default**)

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/03-sap-create-app-dm-cf.png)

  The Desktop Modeler is now ready to use SAP Cloud Platform Cloud Foundry. Next, you need to set up your Cloud Foundry Services within SAP Cloud Platform Cloud Foundry.

  ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/04-sap-cf-dm-setup-finished.png)

#### 3.2.2 Binding Your Services in SAP Cloud Platform Cloud Foundry<a name="322"></a>

To bind your services to SAP Cloud Platform Cloud Foundry, follow these steps:

1. Open your [SAP Cloud Platform Cockpit](https://account.hana.ondemand.com/#/home/welcome).
2. Log in and navigate to the **Cloud Foundry Region** you selected in the Desktop Modeler.
3.  Select the **Space** and the app you created using the Desktop Modeler wizard:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/05-setup-cf-services-dm.png)

4.  Open the **Binding Services** menu and click **Bind Service**:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/06-sap-cf-dm-bindservice1.png)

5.  Click **Next** to select a service:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/07-sap-cf-dm-bindservice2.png)

6.  Select **PostgreSQL** as the database for your application:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/08-sap-cf-dm-bindservice3.png)

7.  Select the **v9.4-dev** plan for a trial account or **v9.4-xssmall** for a commercial account:

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/09-sap-cf-dm-bindservice4.png)

8. Enter an **Instance Name** and click **Finish**.

Your application is now set up with the minimum configuration needed to run your application. Follow a similar process to set up other services. For information about configuring these services, consult the links in section [4 Related Content](#RC).

#### 3.2.3 Deploying Your App to Cloud Foundry<a name="323"></a>

To deploy your application using the Desktop Modeler-native Cloud Foundry integration, follow these steps:

1.  Open the Desktop Modeler.

2.  Click the drop-down menu for the **Run** option in the toolbar.

3.  Click **Run on Cloud Foundry**. Your app will now be deployed to Cloud Foundry.

    ![](attachments/how-to-deploy-a-mendix-app-to-sap-cloud-platform/10-sap-run-in-cf.png)

## 4 Related Content<a name="RC"></a>

* [How to Use the SAP XSUAA Connector](/howto/sap/use-sap-xsuaa-connector)
* [SAP Cloud Platform](/developerportal/deploy/sap-cloud-platform)
