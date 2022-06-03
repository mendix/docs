---
title: "General Purpose OCR"
url: /appstore/app-services/general-purpose-ocr/
category: "App Services"
description: "This document describes the configuration and usage of the General Purpose OCR app service， which can help you extract text, tables, and barcodes from images or PDF documents, and get output in XML formats in bulk."
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [General Purpose Optical Character Recognition](https://marketplace.mendix.com/link/component/118392) App Service can help you extract text, tables, and barcodes from images or PDF documents and get output in XML formats in bulk.


### 1.1 Features

* Extract data(text,table and barcode) in XML format from images and pdf documents in bulk and map data to an entity.
* Support [Mendix SSO](/appstore/modules/mendix-sso/)

### 1.2 Limitation

* Currently only supports images(in JPG, JPEG, PNG, BMP, TIFF formats) and PDF documents. 
* Total documents size cannot exceed 20 MB.
* The image size should not be larger than 32512*32512 pixels.

### 1.3 Prerequisites

* This App Service works best with Studio Pro 8 versions starting with [8.18.15](/releasenotes/studio-pro/8.18/#81815) and 9 versions starting with [9.0](/releasenotes/studio-pro/9.0/).

### 1.4 How the data stored in prepackaged domain model

Sample document:

![image](https://user-images.githubusercontent.com/105198284/171408053-acedb229-3cf1-48de-87d7-8c3ea41f53ff.png)


Document model for GPO Extraction Result:

![image](https://user-images.githubusercontent.com/105198284/171616037-8a6e9aa9-6db4-4b94-9dd9-eba68c8f416a.png)



The ExtractionResponse(Entity) will be created automatically for storing the response from the backend API call. The ExtractionResponse entity contains Status(String) and Output(Entity).

The ExtractionResponse entity contains the Response Status(string); the Status can be  IN_PROGRESS, COMPLETED, or FAILED. 

The Output Entity is further divided into two domains Aborted and Extracted.

The documents which are not successfully extracted in the backend API call due to some error/exception will be stored inside the AbortedDocument entity. The AbortedDocument(Entity) stores the DocumentId(String) and DocumentName(String) of the corresponding aborted documents.

The documents which are successfully extracted in the backend API call will be stored inside the ExtractedDocument entity. The ExtractedDocument entity contains DocumentId(String), DocumentName(String) and  Content(Entity).

The Content is basically in XML format. 

Firstly, the document is divided into multiple pages. So we have the Page(Entity), where each page can contain multiple Blocks. Therefore we have Block(Entity), which contains BlockType(String). A Block can be of three types Text, Table and Barcode. Based on the Block type, the document will be further divided.

If the Block is Text and Barcode, it will go to Text(Entity) and then goto Paragraph(Entity). A paragraph can have multiple lines. So, Paragraph(Entity) have LineContent(String).

Otherwise, in the case of the Block is of Table type. It will be divided into multiple rows. So, it will go to Row(Entity). Each row can have multiple cells and text. So, we have CellText(Entity). Each cell will contain multiple paragraphs, so we have CellParagraph_CellText(Entity). A paragraph can have multiple lines. Therefore, CellParagraph_CellText(Entity) have LineContent(String). This Linecontent will contain the actual data.

## 2 Installation

### 2.1 Obtaining the Binding Keys {#obtain-keys}

The General Purpose OCR is a premium Mendix product subject to a purchase and subscription fee. To successfully use this App Service in your app, first you need to start a subscription or a trial to get the binding keys.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company access to the App Service. To start a trial, perform the following steps:

1. Go to the [General Purpose OCR](need to edit: https://marketplace.mendix.com/link/component/118388) page in the Marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the App Service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the App Service is ready to be used. 
6. Click the link in the email to go to the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) page and log in there. This page shows all the products that you have trials for.
7. Click **General Purpose OCR** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

#### 2.1.2 Starting a Subscription

1. Go to the [General Purpose OCR](need to edit: https://marketplace.mendix.com/link/component/118388) page in the Marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Owner will receive an email that says the App Service is ready to be used.
6. Click the link in the email to go to the [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **General Purpose OCR** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

### 2.2 Installing the Component in Your App

To download and install the General Purpose OCR App Service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the App Service is installed, you can see it in the **App Explorer** and also in the **Document Data Capture Service** category in the **Toolbox**.

## 3 Configuring the Binding Keys {#configure-keys}

Before you deploy an app, you should configure the binding keys in your app as follows:

1.  In the **App Explorer** or the **Project Explorer**, go to **GeneralPurposeOCR** > **Configurations**. **Access_Key** and **Secret_Key** are defined as constants.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/configurations-keys.png" alt="Keys under Configurations in a tree view" >}}

2. Double-click the constant for each constant, enter the key you saved and click **OK** to save the changes.    

## 4 Usage

To use the General Purpose OCR, first create an [import mapping](#mapping-file) that defines how to map extracted data from documents to an entity, and then include the [General Purpose OCR activity](#extraction-activity) in a microflow. This microflow should be set up to accept your input documents, extract data from the documents in bulk and then map the data to an entity using the import mapping that you created.

### 4.1 Extracting the Data {#extraction-activity}

1.  In the **Toolbox**, drag **General Purpose OCR** activity from the **Document Data Capture Service** category into your microflow.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/intelligent-document-microflow.png" alt="intelligent-document-microflow" >}}

2.  Create a list of documents that inherits from `System.FileDocument`. Documents from where data are extracted should be passed as a list, as shown in the microflow above.
3.  Double-click the **General Purpose OCR** activity to open the dialog box.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/intelligent-document-service-dialog-box.png" alt="Intelligent Document Service dialog box" >}}


There are two separate Java actions(Activities) in a single GPO module for sync and async behaviour, i.e., **General Purpose OCR** and **General Purpose OCR  In Background**. 
Create 2 separate Java actions(Activities) 

**General Purpose OCR** component will have a Sync Behaviour, which will directly get the data-extraction result in the response.
**General Purpose OCR  In Background** component will have an Async Behaviour, which will provide an input Microflow which will further take the response of the data-extraction result in the parameter and will use that further.


### 4.1.1 General Purpose OCR(Sync Behaviour)

![image](https://user-images.githubusercontent.com/105198284/171335877-1b347949-7061-4d58-b5ef-1bf609a983fd.png)


**Input Section:**

There are only one Input Fields users must select, i.e., Document List.

1.  For **Document List**, click **Edit** to select the **Document List** which inherits from `System.FileDocument`.
   List of FileDocument type object for data extraction.


**Output Section:**

There are three Output Fields users will have, i.e., Return type, Use return value and Object name. 

1.  The **Return type** field is already selected as **GPO.ExtractionResponse**.
2.  For **Use return value**, the user can select any one option from **Yes** and **No** based on whether the user wants to use the response result or not.
**Note:** Boolean value true/false, to indicated that we have accepted/declined the request for data extraction. 
3.  For **Object name**, the user can type the response object of **ExtractionResponse** entity. 
    **Note:** Maker need to check status attribute of this entity and based on that need to retrieve extraction result from associated entities.
     Possible values for status are as follows,
     - IN_PROGRESS
     - COMPLETED
     - FAILED

### 4.1.2 General Purpose OCR In Background(Async Behaviour)

![image](https://user-images.githubusercontent.com/105198284/171335932-64636576-2203-4bdb-b8d2-ee6e995dd7d0.png)


**Input Section:**

There are three Input Fields users must select, i.e., Document List, Extraction Result Microflow, and Microflow Input Parameter.

1.  For **Document List**, click **Edit** to select the **Document List** which inherits from `System.FileDocument`.
2.  For **Extraction Result Microflow**, click **Select** to select the **Microflow** created by the user.
**Note:** We will call this microflow internally from our java action once we receive extraction result from backend and pass this extraction result as parameter to this selected microflow.  
3.  For **Microflow Input Parameter**, click **Edit** and type a string for Microflow perameter name.
**Note:** This should be name of the parameter of object type "GPO.ExtractionResponse" present in "Extraction Result Microflow".

**Output Section:**

There are three Output Fields users will have, i.e., Return type, Use return value and Variable name. 

1. The **Return type** field is already selected as **Boolean**.
Note: Boolean value true/false, to indicated that we have accepted/declined the request for data extraction. 
2. For **Use return value**, the user can select any option from **Yes** and **No** based on whether the user wants to use the response result or not.
3. For **Variable name**, the user can type the response object name as **ReturnValueName**.
   

### 4.2 Checking Statistics on the Usage Dashboard

The **Usage** dashboard shows real-time statistics about the usage of an App Service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:

    * If you have a trial, click [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) on the left navigation menu. This page shows all the products that you have trials for.
    * If you have a subscription, click [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **General Purpose OCR** in the list.
4. Click **Usage Dashboard** to show the usage details.


## 5 Technical Provider{#technical-provider}

The AI and OCR technologies used by General Purpose OCR are powered by [ABBYY&reg;](https://www.abbyy.com). The application includes ABBYY® FineReader Engine® 12 SDK © 2019 ABBYY Production LLC. Also, ABBYY and FINEREADER ENGINE are either registered trademarks or trademarks of ABBYY Software Ltd. and cannot be used without the prior written consent of ABBYY Software Ltd.

{{< figure src="/attachments/appstore/app-services/general-purpose-ocr/logo-powered-by-abbyy.png" alt="Technical Provider ABBYY" >}}