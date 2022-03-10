---
title: "Receipt Processing"
url: /appstore/app-services/receipt-processing/
category: "App Services"
description: "Describes the configuration and usage of the Receipt Processing app service, which is available in the Mendix Marketplace."
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
---

## 1 Introduction

Powered by AI and OCR technologies, the [Receipt Processing](https://marketplace.mendix.com/link/component/118390) app service has a pre-built, ready-to-implement trained document model. It extracts the information from the important fields, without need for any additional training. You can automate the processing of receipts in bulk using this app service. For more information, see the [Technical Provider](#technical-provider) section.

### 1.1 Features

* Pre-built, ready-to-implement receipt document models
* Extract data from images of receipts in bulk and map data to an entity
* Support [Mendix SSO](/appstore/modules/mendix-sso/)

### 1.2 Limitation

* Currently only supports images in JPG and JPEG formats

### 1.3 Prerequisites

This app service works best with Studio Pro 8 versions starting with [8.18.15](/releasenotes/studio-pro/8.18/#81815) and 9 versions starting with [9.0](/releasenotes/studio-pro/9.0/).

## 2 Installation

1. Go to the [Receipt Processing](https://marketplace.mendix.com/link/component/118390) component page in the Marketplace and download the *.mpk* file.
2.  To add the Receipt Processing app service to your app in Mendix Studio Pro, follow these steps:
    1.  In the **App Explorer** (in Studio Pro 9) or **Project Explorer** (in Studio Pro 8), right-click the app.
    2.  Click **Import module package** and then select *ReceiptProcessing.mpk*.

        ![pop-up-menu-in-app-explorer](/attachments/appstore/app-services/receipt-processing/import-module-in-app-explorer.png)

        In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app.

        {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

3. In the **Import Module** dialog box, click **Import**.
4. Wait until a pop-up box states that the module was successfully imported. Click **OK**.
5. Open the **App Explorer** or **Project Explorer** to view the **ReceiptProcessing** module. You can also find the app service in the **Document Data Capture Service** category in the **Toolbox**.

## 3 Configuration

The Receipt Processing app service is a premium Mendix product that is subject to a purchase and subscription fee. To successfully deploy an app that uses the Receipt Processing app service, you need to get a valid combination of certain keys and configure them as constants in the module.

### 3.1  Subscribing to Get Keys

1.  On the [Receipt Processing](https://marketplace.mendix.com/link/component/118390) component page in the Marketplace, click **Subscribe** to order a subscription or click **Try for Free** to start a trial.

    {{% alert type="info" %}}For the trial, only one user per company is allowed.{{% /alert %}}
    
2.  Fill in the **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, and other required information, and then place the order. The Technical Owner receives an order confirmation email.

    For the trial, you do not need to fill in this information.
    
3. Click the link in the order confirmation email to go to the [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) page and log in with your Mendix account. This page gives an overview of all the subscriptions of your organization.
4. Click **Receipt Processing** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
5. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys.

### 3.2 Configuring Keys for Application Deployment

1.  In the **App Explorer** or the **Project Explorer**, go to **ReceiptProcessing** > **Configurations**. **Access_Key**, **Secret_Key**, and **Encryption_Key** are defined as constants.

    ![Keys under Configurations in a tree view](/attachments/appstore/app-services/receipt-processing/configurations-keys.png)

2. For each constant, double-click the constant, enter the key that you saved, and click **OK** to save the changes.

## 4. Usage

To use the Receipt Processing app service, firstly create an [import mapping](#mapping-file), and then include the receipt processing service activity in your microflow. This microflow should be set up to accept trained model and images, extract data from the images in bulk and then map the data to an entity using the import mapping that you created.

### 4.1 Creating an Import Mapping{#mapping-file}

You need to use an [import mapping](/refguide/mapping-documents/#import-mappings) to populate the extracted data into entity. If necessary, you can further process the entity with [event handlers](/refguide/event-handlers/).

1.  To create an import mapping, you need a JSON structure. Perform the following steps to generate the JSON structure:
    1. Log into the Marketplace with your Mendix account.
    2. Go to **My Marketplace** and Click [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) on the left navigation menu. The **Compmany Subscriptions** page gives an overview of all the subscriptions of your organization.    
    3. Click **Receipt Processing** to open the service management dashboard.
    4.  Click **Manage Instance** to open the **Document Model Training** application.
      
        ![Document model training app login page](/attachments/appstore/app-services/receipt-processing/document-model-training-app.png)
      
    5. Log into the [Document Model Training](https://datacapture-appservices.mendixcloud.com/login.html) application using your Mendix account. 
    6. Click **Environment** to show the **Existing Models** list.   
    7.  Select pre-trained model. Make sure that the **Status** of the model is **Published**.

        ![pre trained model published](/attachments/appstore/app-services/receipt-processing/pre-trained-receipt-model-pub.png)
       
    8. Click **Download JSON Structure**. The **Generate JSON Structure** dialog box opens. 
    9.  Drag a sample receipt into the box where it says **Drag image files here**. You can also click **Browser** and select the file. The sample receipt should represent the receipts from which data will be extracted. You can also click the box and select the file.
      
        ![Sample Extraction dialog box](/attachments/appstore/app-services/receipt-processing/sample-extraction-dialog-box.png)
      
    10. Click **Download** to get the JSON structure.
   
    {{% alert type="info" %}}Since the document model is pre-trained, the system does not generate a `confidence level` during the receipt processing; instead, it generates a `not applicable` string.{{% /alert %}}
   
2.  To add the JSON structure to your app, perform the following steps:
    1.  In the **App Explorer** or **Project Explorer**, right-click the module or the folder where you want to add the JSON structure.
    2.  From the pop-up menu, select **Add other** > [JSON structure](/refguide/json-structures/).

        ![json-structure](/attachments/appstore/app-services/receipt-processing/json-structure.png)

    3. In the **Add JSON Structure** dialog box, enter a **Name** for the JSON Structure and click **OK**. The **JSON Structure** dialog box opens.
    4. In the **JSON Snippet** box, add the content of the JSON structure that you have generated. The system converts the JSON snippet into a schema structure automatically. You will need this schema structure to create the import mapping.
    5. Click **OK** to save the changes and close the dialog box. 
3.  To create the import mapping, perform the following steps:
    1. In the **App Explorer** or **Project Explorer**, right-click the module or the folder where you want to add the import mapping.
    2. From the pop-up menu, select **Add other** > **Import mapping**.
    3. In the **Add Import Mapping** dialog box, enter a **Name** for the import mapping and click **OK**. The **Select schema elements for import mapping** dialog box opens.
    4.  For **Schema source**, select **JSON structure** and **Select** the JSON structure that you created.

        ![schema-source-json-structure](/attachments/appstore/app-services/receipt-processing/schema-source-json-structure.png)

    5. Click **OK** to save the changes and close the dialog box.

### 4.2 Extracting the Data with the Trained Document Model {#extraction-activity}

1.  In the **Toolbox**, drag **Receipt Processing** activity from the **Document Data Capture Service** category into your microflow.

    ![receipt-processing-microflow](/attachments/appstore/app-services/receipt-processing/receipt-processing-microflow.png)

2. Create a list of image that inherits from `System.Image`. Images from where data are extracted should be passed as a list, as shown in the microflow above.
3.  Double-click the **Receipt Processing** activity to open the **Receipt Processing** dialog box.

    ![Receipt Processing](/attachments/appstore/app-services/receipt-processing/receipt-processing-dialog-box.png)

4. For **Image List**, click **Edit** to select the **Image List** which inherits from `System.Image`.
5. For **Mapping**, **Select** the import mapping that you created to define how extracted data should be mapped into an entity.
6. Click **OK** to save the changes and close the dialog box.

{{% alert type="info" %}}Since the document model is pre-trained, the system does not generate a `confidence level` during the receipt processing; instead, it generates a `not applicable` string.{{% /alert %}}

{{% alert type="info" %}}Optionally for further automation, add [event handlers](/refguide/event-handlers/) on the entity where you populate the extracted data. You can call your own microflow to process the extracted data when inserted into the entity. For example, you can modify, validate, and pass the data to next steps. By doing this, you can achieve full end-to-end automation.{{% /alert %}}

### 4.3 Checking Statistics on the Usage Dashboard

The **Usage** dashboard shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and Click [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Click **Receipt Processing** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard). On the **Overview** tab, the **Usage** dashboard shows the real-time statistics.

## 5 Technical Provider{#technical-provider}

The AI and OCR technologies used by Receipt Processing Service are powered by [ABBYY&reg;](https://www.abbyy.com). Application includes ABBYY® FlexiCapture® 12 SDK © 2019 ABBYY Production LLC., and also that ABBYY and FLEXICAPTURE are either registered trademarks or trademarks of ABBYY Software Ltd. and cannot be used without prior written consent of ABBYY Software Ltd.

![Technical Provider ABBYY](/attachments/appstore/app-services/receipt-processing/logo-powered-by-abbyy.png)
