---
title: "Invoice Processing Service"
category: "App Services"
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
---

## 1 Introduction

With the [Invoice Processing](https://marketplace.mendix.com/link/component/118389) app service, you can automate the processing of invoices in bulk almost immediately, without training any documents. This app service powered by **ABBYY&reg;**, supports invoices in the European Union and the United States.

### 1.2 Features

* Extract data from images of invoices in bulk and map data to entities
* Supports United States and European Union region
* The app service works with [Mendix SSO](/appstore/modules/mendix-sso)

### 1.2 Limitation

* Only supports images in JPG and JPEG formats

### 1.3 Prerequisites

This app service best works with Studio Pro 8 starting with [8.18.5](/releasenotes/studio-pro/8.18#8185) and 9 versions
starting with [9.2](/releasenotes/studio-pro/9.2).

## 2 Installation

* Go to [Marketplace](https://marketplace.mendix.com/link/component/118389) and download _mpk_ file for **Invoice Processing**

* To add the Invoice Processing Service to your app in Mendix Studio Pro, follow these steps:

   * In the **App Explorer / Project Explorer**, right-click the app, click **Import module package**, and then select
     *InvoiceProcessing.mpk*

     ![pop-up-menu-in-app-explorer](attachments/invoice-processing/import-module-in-app-explorer.png)

     In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app.

     {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

   * In the **Import Module** dialog box, click **Import**.

   * Wait until a pop-up window states that the module was successfully imported. Click **OK**.

   * Open the **App Explorer / Project Explorer** to view the **InvoiceProcessing** module.

Once imported, the app service is visible in the **App Explorer / Project Explorer** and in the **Document Data Capture Service** category in the **Toolbox**.

## 3 Configuration

Invoice Processing Service is a premium Mendix product that is subject to a purchase and subscription fee. To successfully deploy an app that uses Invoice Processing Service, you need to get a valid combination of certain keys and configure them as constants in the module.

### 3.1  Subscribing to Get Keys

* On the [Invoice Processing Service](https://marketplace.mendix.com/link/component/118389) page, click **Subscribe** to order a subscription.

* Fill in the [Technical Contact](/developerportal/collaborate/app-roles#technical-contact) information (**First Name**, **Last Name**, **Email Address**), billing account information, and other required information, and then place the order. The Technical Contact receives an order confirmation email.

* Click the link in the order confirmation email to go to the Marketplace [Subscriptions](/appstore/general/app-store-overview#subscriptions) page and log in there. The **Subscriptions** page gives an overview of all the subscriptions of your organization.

* Click **Invoice Processing Service** to open the subscription details page.

* Click **Create Binding Keys**.

* Enter a meaningful name for the binding keys. Make sure that the name includes the name of the app which uses Invoice Processing Service.

* Click **Create Keys** to generate the **Access_Key**, **Secret_Key** and **Encryption_Key**.

The system generates **Access_Key**, **Secret_Key** and **Encryption_Key**.

![accesskey-secretkey-encryptionkey-generated](attachments/invoice-processing/binding-key-generation.png)

{{% alert type="warning" %}}Once you close this page, you will not be able to retrieve the keys again.{{% /alert %}}

* **Copy** the **Access_Key**, **Secret_Key** and **Encryption_Key**. You will use them later for app deployment.

### 3.2 Configuring Keys for Application Deployment

* In the **App Explorer / Project Explorer**, go to **InvoiceProcessing** > **Configurations**. You can see **Access_Key**, **Secret_Key** and **Encryption_Key** are defined as constants.

  ![Keys under Configurations in a tree view](attachments/invoice-processing/configurations-keys.png)

* Double-click on each constant and and enter the respective keys.

* Click **OK** to save the settings.


## 4 USAGE

To use **Invoice Processing Service**, firstly [Create Model](#document-model-creating) with Vendor Information and Business Unit Information from Sample Invoice. Using same invoice, get [JSON mapping file and create Import Mapping](#mapping-file).
Next include the [Invoice Processing Service](#extraction-activity) activity in your microflow, which will accept invoices to extract and Import Mapping.

### 4.1 Creating a Document Model {#document-model-creating}

* Open the **Document Model Training** application. Get the URL from the [Service Dashboard](https://marketplace.mendix.com/link/component/118388) page.

* Login in to the app using your **Mendix Account**.

* Click **Environment** to show the **Existing Models** list.

  ![Existing Invoice models list](attachments/invoice-processing/existing-invoice-models.png)

  {{% alert type="info" %}} Model status should be **COMPLETED** to use its **Model Id**. {{% /alert %}}

* To create and train a new model, click **Create New Model** on the page.
  The **Create New Model** dialog window opens.

  ![Create Invoice Model dialog window](attachments/invoice-processing/create-invoice-model-dialog-window.png)

* Enter a unique **Model Name**, select a **Region**, and then click **Create Model**.

  Wait until **Invoice Model** page opens.

  ![Create Invoice Model page](attachments/invoice-processing/create-invoice-model-page.png)

* Fill in **Vendor Information** and **Business Unit Information** from Sample Invoice. Providing more inputs improves accuracy.

* Click **Create Model**. The new model appears in the **Existing Models** list with the status **IN PROGRESS**.

Once the **Status** of the model becomes **COMPLETED**, the model is ready to use.

### 4.2 Getting a JSON Mapping File {#mapping-file}

* Open the **Document Model Training** app.

* Login in to the app using your **Mendix Account**.

* Click **Environment** to show the **Invoice Models** list.

* Click **JSON Mapping File**. The **Generate JSON Mapping File** dialog window opens.

![Sample Extraction dialog window](attachments/invoice-processing/sample-extraction-dialog-window.png)

* Drag Sample Invoice (referred while creating a model) into the box where it says **Drag & Drop Image Here**.

* Click **Download** to get the JSON file.

* Use this JSON file to create [JSON Mapping](/refguide8/mapping-documents) which will be used in the [Invoice Processing Activity](#extraction-activity).

   * From **App Explorer / Project Explorer**, Create **[JSON structure](/refguide8/json-structures)**. Use JSON file and convert schema structure to be used by Import Mapping.
     ![json-structure](attachments/receipt-processing/json-structure.png)

   * From **App Explorer / Project Explorer**, Create [Import Mapping](/refguide8/mapping-documents#2-import-mappings). Map created above with JSON structure with entity.
     ![import-mapping](attachments/receipt-processing/import-mapping.png)

* Copy the **Model Id** and use it in the [Invoice Processing Activity](#extraction-activity).

### 4.3 Extracting the data using Created Document Model (#extraction-activity)

* Drag and drop **Invoice Processing Service** activity to your microflow from the **Document Data Capture Service** category in the **Toolbox**.

  ![intelligent-document-microflow](attachments/invoice-processing/invoice-processing-microflow.png)

* Images to be extracted should be passed as a list. As shown in above image, create list of image inherits from `System.Image`.

* Double-click the **Invoice Processing Service** activity to open the dialog window.

  ![Intelligent Document Service dialog window](attachments/invoice-processing/invoice-processing-dialog-window.png)

* Click **Edit** to enter the **Model Id** of your model.

  {{% alert type="info" %}} After the training of a model is **COMPLETED** in the Document Model Training app, you can use its **Model Id**. For more information, see the section [Creating a Document Model](#document-model-creating). {{% /alert %}}

* Click **Edit** to Select an **Image List** which is list of images inherits from `System.Image`.

* In the **Mapping** field, **Select** a **[JSON Mapping](/refguide8/mapping-documents)** file to define how extracted data is mapped.

  {{% alert type="info" %}} For details on how to get the JSON mapping file and create Imoprt Mapping, see [Getting a JSON Mapping File](#mapping-file). {{% /alert %}}

* Click **OK** to save the changes and close the dialog window.

### 4.4 Checking Statistics Using the Service Dashboard

The **Usage** dashboard shows the real-time statistics about the usage of an app service.
Log into the Marketplace. Go to **My Marketplace** to find Service Dashboard. More info at  [Subscriptions](/appstore/general/app-store-overview#subscriptions)
