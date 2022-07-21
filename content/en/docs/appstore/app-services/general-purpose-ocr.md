---
title: "General Purpose OCR"
url: /appstore/app-services/general-purpose-ocr/
category: "App Services"
description: "This document describes the configuration and usage of the General Purpose OCR app service，which can help you extract text, tables, and barcodes from images or PDF documents, and get output in XML formats in bulk."
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

* This app service works best with Studio Pro 8 versions starting with [8.18.18](/releasenotes/studio-pro/8.18/#81818) and 9 versions starting with [9.0](/releasenotes/studio-pro/9.0/).

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

This section describes how extracted data is stored in the pre-configured domain model that is included in the app service.

Below is a sample document:

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/sample-document.png" >}}

Below is the pre-configured domain model, which can be used for storing extracted data:

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/domain-model.png" >}}

The **ExtractionResponse** entity will be created automatically for storing the extraction response from the back-end API call. The **ExtractionResponse** entity has the **Status** attribute, which indicates the status of the extraction. The value of the **Status** can be **IN_PROGRESS**, **COMPLETED**, or **FAILED**. The **ExtractionResponse** entity is associated with the **Output** entity.

The **Output** entity is further associated with **Aborted** and **Extracted** entities.

Documents which are not successfully extracted in the back-end API call due to errors or exceptions are stored inside the **AbortedDocument** entity. The **AbortedDocument** entity stores the **DocumentId** attribute and the **Name** attribute of the corresponding aborted documents.

Documents which are successfully extracted in the back-end API call are stored inside the **ExtractedDocument** entity. The **ExtractedDocument** entity contains the **DocumentId** attribute and the **Name** attribute of the corresponding documents, and is associated with the **Content** entity.

The **Content** entity is in the XML format. 

A document can have multiple pages, so the **Content** entity has an association with **Page** entity. A page can be associated with multiple blocks, so the **Page** entity is associated with the **Block** entity, which has a **BlockType** attribute. The **BlockType** attribute can be **Text**, **Table**, or **Barcode**  and determines where the extracted data ends up.

If the block is text or a barcode, then the **Block** entity is associated with the **Text** entity, which is associated with the **Paragraph** entity. A paragraph can have multiple lines, so the **Paragraph** entity has the **LineContent** attribute and the **Confidence** attribute. The **LineContent** attribute contains the actual extracted data, while the **Confidence** attribute contains the confidence level of the extracted **LineContent**.

If the block is a table, then the **Block** entity is associated with the **Row** entity. A table can have multiple rows and a row can have multiple cells, so the **Row** entity is associated with **Cell** and further the **Cell** is associated with **CellText** entity. A cell can contain actual data and this data can span multiple lines, so the **CellParagraph** entity has the **LineContent** attribute and the **Confidence** attribute. The **LineContent** attribute contains the actual data, while **Confidence** attribute indicates the confidence level of extracted cell **LineContent**.

### 3.2 Configuring the Binding Keys {#configure-keys}

Before you deploy an app, you should configure the binding keys in your app as follows:

1.  In the **App Explorer** or the **Project Explorer**, go to **GeneralPurposeOCR** > **Configurations**. **Access_Key** and **Secret_Key** are defined as constants.

2. Double-click the constant for each constant, enter the key you saved and click **OK** to save the changes.

## 4 Usage

The General Purpose OCR activity is provided in two variants: **General Purpose OCR** and **General Purpose OCR in Background**. The **General Purpose OCR** activity calls the back-end API in a synchronous mode and returns the extraction response after the back-end extraction is completed; while the **General Purpose OCR in Background** activity, as the name suggests, calls the back-end API in an asynchronous mode and returns the extraction response by populating the **ExtractionResponse** hierarchy which can be further processed by another custom microflow. 

No matter which variant you use, you should set up a microflow to accept your input documents. Along with the input document list, you can specify a Boolean attribute called **Enable confidence**. The default value of this Boolean attribute is false. By setting this attribute to true, you can retrieve the confidence level of the extracted data. As the **LineContent** leaf node actually contains the data, the confidence is for the extracted **LineContent** data, and not on per character or per word level.

### 4.1 Extracting Data

#### 4.1.1 Adding One of the Variants to Your Microflow

1. In the **Toolbox**, drag one of the variants—**General Purpose OCR** activity or the **General Purpose OCR in Background activity**—from the **Document Data Capture Service** category into your microflow. 

   Which variant you use here depends on your needs:

   * The **General Purpose OCR** activity has a synchronous behaviour, which directly returns the extraction response after the back-end extraction is completed.

       {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/microflow-gpo.png" >}}

   *  The **General Purpose OCR In Background** activity has an asynchronous behaviour. You need to provide a microflow, with an input parameter for the microflow, to further process the extraction response.

       {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/microflow-gpo-in-background.png" >}}

2. Configure the settings of the variant using one of the following procedures:

   * [Configure the General Purpose OCR activity](#general-purpose-ocr-activity)
   * [Configure the General Purpose OCR in Background activity](#general-purpose-ocr-in-background-activity)


#### 4.1.2 Configuring the General Purpose OCR Activity (Synchronous Behavior) {#general-purpose-ocr-activity}

1. Create a list of documents that inherits from `System.FileDocument`. This will be passed as the input argument **Document list** to the **General Purpose OCR** activity.

2. Double-click the **General Purpose OCR** activity to open the following dialog box:

   {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/general-purpose-ocr-sync.png" >}}

3. For **Document List**, click **Edit** and select the list of document list that you created.

4. Set the value for **Enable confidence**. If you set this value to *true*, you enable the back-end API to return the confidence level of the extracted **LineContent** data. The default value is *false*.

5. For **Use return value**, select **Yes** or **No**. The return value of the activity is an instance of the **ExtractionResponse** entity. If you want to use this object as the return value, select **Yes**; otherwise, select **No**.

6. If you select **Yes**, enter the **Object name** for the output. 

   {{% alert color="info" %}}When you make use of this object, you will need to check the **Status** attribute of this object, and then based on its value, retrieve the extraction response from the associated entities. The possible value of **Status** can be **IN_PROGRESS**, **COMPLETED**, or **FAILED**.{{% /alert %}}

7. Click **OK** to save the changes.

#### 4.1.3 Configuring the General Purpose OCR In Background Activity (Asynchronous Behavior){#general-purpose-ocr-in-background-activity}

1. Create a list of documents that inherits from `System.FileDocument`. This will be passed as the input argument **Document list** to the **General Purpose OCR in Background** activity.

2. Create a microflow to process the extraction response. This microflow should take the extraction response as an input parameter. 

3. Double-click the **General Purpose OCR in Background** activity to open the following dialog box:

   {{< figure src="/attachments/appstore/app-services/general-purpose-ocr/general-purpose-ocr-in-background.png" >}}

4. For **Document List**, click **Edit** and select the list of document list that you created.

5. For **Extraction Result Microflow**, click **Select** and select the microflow that you created to process the extraction response. 

6. For **Microflow Input Parameter**, enter the name of the input parameter of the microflow that you created.

   Once the extraction response is received from the back-end, the microflow you created will be called and take the extraction response as an input parameter.

7. Set the value for **Enable confidence**. If you set this value to *true*, you enable the back-end API to return the confidence level of the extracted **LineContent** data. The default value is *false*.

8. For **Use return value**, select **Yes** or **No**. Since the **General Purpose OCR in Background** activity calls the back-end APIs in an asynchronous manner, the return value of the activity is a Boolean, which indicates whether the request was accepted or rejected. If you want to use this Boolean as the return value, select **Yes**; otherwise, select **No**.

9. If you select **Yes**, enter a **Variable name** for the output.

10. Click **OK** to save the changes.

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
