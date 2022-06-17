---
title: "General Purpose OCR"
url: /appstore/app-services/general-purpose-ocr/
category: "App Services"
description: "This document describes the configuration and usage of the General Purpose OCR app service， which can help you extract text, tables, and barcodes from images or PDF documents, and get output in XML formats in bulk."
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [General Purpose Optical Character Recognition (OCR)](https://marketplace.mendix.com/link/component/118392) app service can help you extract text, tables, and barcodes from images or PDF documents in the XML format in bulk, and map the extracted data to an entity.

### 1.1 Features

* Extract data (text, table, and barcode) in the XML format from images and PDF documents in bulk
* Map extracted data to an entity
* Support [Mendix SSO](/appstore/modules/mendix-sso/)

### 1.2 Limitation

* The app service currently supports images (in JPG, JPEG, PNG, BMP, TIFF formats) and PDF documents. 
* Total documents size cannot exceed 20 MB.
* The image size should not be larger than 32512 * 32512 pixels.

### 1.3 Prerequisites

* This app service works best with Studio Pro 8 versions starting with [8.18.15](/releasenotes/studio-pro/8.18/#81815) and 9 versions starting with [9.0](/releasenotes/studio-pro/9.0/).

## 2 Installation

### 2.1 Obtaining the Binding Keys {#obtain-keys}

The General Purpose OCR is a premium Mendix product subject to a purchase and subscription fee. To successfully use this app service in your app, first you need to start a subscription or a trial to get the binding keys.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company access to the app service. To start a trial, perform the following steps:

1. Go to the [General Purpose OCR](https://marketplace.mendix.com/link/component/118388) page in the Marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) page and log in there. This page shows all the products that you have trials for.
7. Click **General Purpose OCR** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

#### 2.1.2 Starting a Subscription

1. Go to the [General Purpose OCR](https://marketplace.mendix.com/link/component/118388) page in the Marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, payments, and other required information and then place the order. A page opens and confirms that your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Owner will receive an email that says the app service is ready to be used.
6. Click the link in the email to go to the [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **General Purpose OCR** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

### 2.2 Installing the Component in Your App

To download and install the General Purpose OCR app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer** and also in the **Document Data Capture Service** category in the **Toolbox**.

## 3 Configuration

### 3.1 Domain Model

This section describes how data are stored in the pre-configured domain model, which is included in this module.

Below is a sample document:

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/sample-document.png" >}}

Below is the pre-configured domain model, which can be used for extracted data:

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/domain-model.png" >}}

The **ExtractionResponse** entity will be created automatically for storing the response from the backend API call. The **ExtractionResponse** entity has the **Status** attribute, which indicates the status of the extraction. The value of the **Status** can be **IN_PROGRESS**, **COMPLETED**, or **FAILED**. The **ExtractionResponse** entity is associated with the **Output** entity.

The **Output** entity is further divided into two domains **Aborted** and **Extracted**.

Documents which are not successfully extracted in the backend API call due to errors or exceptions are stored inside the **AbortedDocument** entity. The **AbortedDocument** entity stores the **DocumentId** attribute and the **Name** attribute of the corresponding aborted documents.

Documents which are successfully extracted in the backend API call are stored inside the **ExtractedDocument** entity. The **ExtractedDocument** entity contains the **DocumentID** attribute and the **Name** attribute of the corresponding documents, and is associated with the **Content** entity.

The **Content** entity is in the XML format. 

A document can have multiple pages, so there is a **Page** entity. A page can contain multiple blocks, so there is a **Block** entity, which has a **BlockType** attribute. The **BlockType** attribute can have one of these three values: **Text**, **Table**, and **Barcode**. The document is further divided based on the value of **BlockType**.

If the block is text or a barcode, it is associated with a **Text** entity, which is associated with a **Paragraph** entity. A paragraph can have multiple lines, so the **Paragraph** entity has a **LineContent** attribute.

If the block is a table,  it is associated with a **Row** entity, as a table can be divided multiple rows. A row can have multiple cells and text, so there is a **CellText** entity. A cell can contain multiple paragraphs, so there is **CellParagraph** entity. A paragraph can have multiple lines, so **CellParagraph** entity has a **LineContent** attribute. The **LineContent** attribute contains the actual data.

### 3.2 Configuring the Binding Keys {#configure-keys}

Before you deploy an app, you should configure the binding keys in your app as follows:

1.  In the **App Explorer** or the **Project Explorer**, go to **GeneralPurposeOCR** > **Configurations**. **Access_Key** and **Secret_Key** are defined as constants.

2. Double-click the constant for each constant, enter the key you saved and click **OK** to save the changes.

## 4 Usage

To use the General Purpose OCR, first create an [import mapping](/refguide/import-mappings/) that defines how to map extracted data from documents to an entity, and then include the General Purpose OCR or the General Purpose OCR in Background activity in a microflow. This microflow should be set up to accept your input documents, extract data from the documents in bulk, and then map the data to an entity using the import mapping that you created.

### 4.1 Extracting Data

To extract the data, perform the following steps:

1. In the **Toolbox**, drag the **General Purpose OCR** activity or the **General Purpose OCR in Background** activity from the **Document Data Capture Service** category into your microflow. Which activity to use here depends on your needs:

   * The **General Purpose OCR** activity has a synchronous behaviour, which directly gets the extraction result in the response

       {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/microflow-gpo.png" >}}

   *  The **General Purpose OCR  In Background** activity has an asynchronous behaviour, which provides a microflow that further takes the response of the data extraction results as a parameter and will use the results further

       {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/microflow-gpo-in-background.png" >}}

2. Create a list of documents that inherits from `System.FileDocument`. Documents from which data are extracted should be passed as a list, as shown in the microflows above.

3. Double-click the **General Purpose OCR** activity or the **General Purpose OCR in Background** activity to open the dialog box.

4.  Follow the corresponding procedure to configure the settings of the activity:

    * [Configure the General Purpose OCR activity](#general-purpose-ocr-activity)
    * [Configure the General Purpose OCR in Background activity](#general-purpose-ocr-in-background-activity)

#### 4.1.1 Configuring the General Purpose OCR Activity (Synchronous Behavior) {#general-purpose-ocr-in-background-activity}

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/general-purpose-ocr-sync.png" >}}

To configure the activity, perform the following steps:

1. For **Document List**, click **Edit** and select the **Document List** which inherits from `System.FileDocument`. 
2. For **Use return value**, if you want to use the response results, select **Yes**; otherwise, select **No**. The Boolean value indicates whether you accept or decline the request for data extraction.
3.  For **Object name**, enter the response object of the **ExtractionResponse** entity. You need to check the **Status** attribute of this entity, and based on its value, retrieve the extraction results from the associated entities. Possible values of **Status** are as follows:
   
    - **IN_PROGRESS**
    - **COMPLETED**
    - **FAILED**

4. Click **OK** to save the changes.

#### 4.1.2 Configuring the General Purpose OCR In Background Activity (Asynchronous Behavior){#general-purpose-ocr-in-background-activity}

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/general-purpose-ocr-in-background.png" >}}

To configure the activity, perform the following steps:

1. For **Document List**, click **Edit** and select the **Document List** which inherits from `System.FileDocument`.
2.  For **Extraction Result Microflow**, click **Select** and select the **Microflow** that you created to takesthe response of the data extraction results.

    {{% alert type="info" %}}This microflow will be called internally from the java action once the extraction result is received from backend, and this extraction result will be passed as a parameter to this selected microflow.{{% /alert %}}

3. For **Microflow Input Parameter**, click **Edit** and enter a string as the name of the input parameter for the microflow. This should be the name of the parameter of the object from **GPO.ExtractionResponse** used in the microflow that you set for **Extraction Result Microflow**.
4. For **Use return value**, if you want to use the response results, select **Yes**; otherwise, select **No**. The Boolean value indicates whether you accept or decline the request for data extraction.
5. For **Variable name**, enter **ReturnValueName**.
6. Click **OK** to save the changes.

### 4.2 Checking Statistics on the Usage Dashboard

The **Usage** dashboard shows real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2.  Go to **My Marketplace** and then do as follows:

    * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
    * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **General Purpose OCR** in the list.
4. Click **Usage Dashboard** to show the usage details.

## 5 Technical Provider{#technical-provider}

The AI and OCR technologies used by General Purpose OCR are powered by [ABBYY&reg;](https://www.abbyy.com). The application includes ABBYY® FineReader Engine® 12 SDK © 2019 ABBYY Production LLC. Also, ABBYY and FINEREADER ENGINE are either registered trademarks or trademarks of ABBYY Software Ltd. and cannot be used without the prior written consent of ABBYY Software Ltd.

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/logo-powered-by-abbyy.png" alt="Technical Provider ABBYY" >}}