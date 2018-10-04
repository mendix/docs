---
title: "SAP Leonardo Machine Learning Foundation Connector"
category: "SAP"
menu_order: 50
description: "Reference Guide to using the SAP Leonardo Machine Learning Foundation Connector with images and text."
tags: ["SAP", "Leonardo", "Machine Learning", "AI"]
---

## 1 Introduction

SAP Leonardo is a toolbox of intelligent technologies, services, and industry expertise. It helps companies rapidly transform into Intelligent Enterprises.

The SAP Leonardo Machine Learning Foundation Connector allows you to use a number of the models which are available in the SAP Leonardo Machine Learning foundation. The connector provides access to pre-trained and customizable models.

The models which are supported by the SAP Leonardo Machine Learning Foundation Connector are:

* Classify Image
* Classify Product from Image
* Detect Face
* Detect Topic
* Extract Image Features
* Recognize Optical Character (OCR)
* Score Similarity
* Translate

## 2 Prerequisites {#prerequisites}

To use the SAP Leonardo Machine Learning Foundation Connector, you need the following prerequisites:

* The SAP Leonardo Machine Learning Foundation Connector downloaded into your app from the Mendix App Store here: https://appstore.home.mendix.com/link/app/107221/Mendix/SAP-Leonardo-Machine-Learning-Foundation-Connector
* An API key obtained from the SAP API Business Hub

    1. Go to the SAP Leonardo Machine Learning Foundation - Functional Services page here: https://api.sap.com/package/SAPLeonardoMLFunctionalServices

    2. Select one of the models shown on the page:

        ![An SAP Leonardo Functional Services Model](attachments/sap-leonardo-connector/leonardo-model.png)

    3. Click Show API Key

    4. Click Copy Key and Close

        ![Copy the API key](attachments/sap-leonardo-connector/copy-api-key.png)

    5. Use the API key in your app, as described in section [LINK](#api-key)

## 3 Setting up the API Key {#api-key}

The SAP Leonardo Machine Learning Foundation Connector actions are available in your microflows, once you have imported the SAP Leonardo Machine Learning Foundation Connector module from the Mendix App Store.

Every call to SAP Leonardo Machine Learning Foundation needs to be authenticated by a valid **API key**. Instructions for obtaining this are in the [Prerequisites](#prerequisites) section above.

The API key needs to be pasted as the value of the constant, **APIKey** which is found in *Project '...' > App Store modules > LeonardoMachineLearning > Constants*.

![Paste the API key](attachments/sap-leonardo-connector/paste-api-key.png)

## 4 Microflow Actions

Each action from the SAP Leonardo Machine Learning Foundation Connector is described below.

### 4.1 


## 5 Binding SAP Leonardo Machine Learning Foundation Services to Your App

You can use the SAP Leonardo Machine Learning (ML) Foundation Connector to access the services on *SAP API Business Hub*. This is a *sandbox* where you can explore the services in an *"as-simple-as-possible deployment"*. However, to use the full abilities of the services, you need to bind a ML Foundation Service to your app running in SAP Cloud Platform. More information on the distinction is available in the SAP blog post [Production-ready integration of SAP Leonardo Machine Learning Foundation services with an SAP S/4HANA side-by-side extension built with the SAP S/4HANA Cloud SDK](https://blogs.sap.com/2018/07/29/production-ready-integration-of-sap-leonardo-machine-learning-foundation-services-with-an-sap-s4hana-side-by-side-extension-built-with-the-sap-s4hana-cloud-sdk/).

The following sections describe how to bind a ML Foundation Service to your app.

### 5.1 Adding ML Foundation Trial Entitlement

The ML Foundation Trial is not added automatically to your quota. Therefore, you need to add it manually.

1. Go to the SAP Cloud Platform Cockpit for your account.

2. Choose the **Entitlements** and choose the *ML Foundation Trial* entitlement.

3. Click the **Subaccount** where you want to use the ML Foundation Trial services (this will usually be the *trial* subaccount).

    ![Add ML foundation trial entitlement](attachments/sap-leonardo-connector/ml-entitlement.png)

4. You will see your subaccount overview, and can see that ML Foundation Trial has been added.

### 5.2 Binding an Instance of a ML Foundation Service to Your App

1. Go to the **Space** where your app is deployed on SAP Cloud Platform.

2. Select **ml-foundation-trial-beta** from the **Service Marketplace**

    ![choose the machine learning service from the marketplace](attachments/sap-leonardo-connector/choose-ml-service.png)

3. Go to **Instances** and click on **New Instance** to add an instance of the service.

4. Choose the desired **Service Plan** and click **Next**.

5. Add parameters, if required, and click **Next**. In most cases additional parameters are not required.

6. Choose your app from the dropdown list of **Application**s. In most cases you will not need to add any parameters.

7. Click **Next**.

8. Type an **Instance Name** for the instance and click **Finish**.

    ![Confirm instance creation](attachments/sap-leonardo-connector/create-instance.png)

## 4 Related Content

{Do not enter anything here, this will be generated by Mendix.}
