---
title: "Intelligent Document Service"
url: /appstore/app-services/intelligent-document-service/
category: "App Services"
description: "Describes the configuration and usage of the Intelligent Document Service app service, which is available in the Mendix Marketplace."
tags: ["Document Service", "AI", "ML", "OCR", "Industrial", "Manufacturing"]
---

## 1 Introduction

The [Intelligent Document Service](https://marketplace.mendix.com/link/component/118388) app service uses AI and OCR technologies to extract text and key value pairs from images of documents in bulk. For more information, see the [Technical Provider](#technical-provider) section.


### 1.1 Features

* Extract data from images in bulk and map data to an entity
* Train a model using sample images by marking specific areas in images
* Support [Mendix SSO](/appstore/modules/mendix-sso/)

### 1.2 Limitation

* Currently only supports images in JPG and JPEG formats
* Each image file size cannot exceed 50 MB

### 1.3 Prerequisites

* This app service works best with Studio Pro 8 versions starting with [8.18.15](/releasenotes/studio-pro/8.18/#81815) and 9 versions starting with [9.0](/releasenotes/studio-pro/9.0/).
* For optimal recognition results, make sure that documents with small fonts have high resolutions:
  * If images are made using a scanner, it is recommended to use 300 dpi for texts in font size 10 pt or larger and 400-600 dpi for texts in font size 9 pt or smaller
  * If images are taken using a digital camera, it is recommend to use at least a 5-megapixel sensor with auto focusing and flash disabling features, fit the page entirely within the camera frame, and distribute lighting evenly across the page to avoid any dark areas or shadows on the image

## 2 Installation

### 2.1 Obtaining the Binding Keys {#obtain-keys}

The Intelligent Document Service is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this app service in your app, first you need to start a subscription or a trial to get the binding keys.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company one-month access to the app service. To start a trial, perform the following steps:

1. Go to the [Intelligent Document Service](https://marketplace.mendix.com/link/component/118388) page in the Marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) page and log in there. This page shows all the products that you have trials for.
7. Click **Intelligent Document Service** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

#### 2.1.2 Starting a Subscription

1. Go to the [Intelligent Document Service](https://marketplace.mendix.com/link/component/118388) page in the marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Owner will receive an email that says the app service is ready to be used.
6. Click the link in the email to go to the [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **Intelligent Document Service** to open the [service management dashboard](/appstore/general/app-store-overview/#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create binding keys. Save the binding keys somewhere safe. Later you will need to [configure the binding keys](#configure-keys) in your app.

### 2.2 Installing the Component in Your App

To download and install the Intelligent Document Service app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer** and also in the **Document Data Capture Service** category in the **Toolbox**.

## 3 Configuring the Binding Keys {#configure-keys}

Before you deploy an app, you should configure the binding keys in your app as follows:

1.  In the **App Explorer** or the **Project Explorer**, go to **IntelligentDocService** > **Configurations**. **Access_Key**, **Secret_Key**, and **Encryption_Key** are defined as constants.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/configurations-keys.png" alt="Keys under Configurations in a tree view" >}}

2. For each constant, double-click the constant, enter the key that you saved, and click **OK** to save the changes.

## 4. Usage

To use the Intelligent Document Service, first [train a model](#document-model-training) using sample images, then create an [import mapping](#mapping-file) that defines how to map extracted data from images to an entity, and then include the [intelligent document activity](#extraction-activity) in a microflow. This microflow should be set up to accept your trained model and images, extract data from the images in bulk and then map the data to an entity using the import mapping that you created.

### 4.1 Training a Document Model {#document-model-training}

1.  Perform the following steps to log into the **Document Model Training** application:
    1. Log into the Marketplace with your Mendix account.
    
    2.  Go to **My Marketplace** and then do as follows:

        * If you have a trial, click [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) on the left navigation menu. This page shows all the products that you have trials for.
        * If you have a subscription, click [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
    
    3. Click **Intelligent Document Service** to open the service management dashboard.

    4.  Click **Manage Instance** to open the **Document Model Training** application.

        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/document-model-training-app.png" alt="Document model training app login page" >}}
    
    5. Sign into the [Document Model Training](https://datacapture-appservices.mendixcloud.com/login.html) application using your Mendix account.
2.  Click **Environment** to show the **Existing Models** list.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/existing-models-list.png" alt="Existing models list" >}}

    {{% alert color="info" %}} The model is ready to use only when the **Status** of this model is **Published**. {{% /alert %}}

3.  To train a new model, click **Create New Model** on the page. The **Create New Model** dialog box opens.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/create-new-model-dialog-box.png" alt="Create New Model dialog box" >}}

4.  Enter a unique **Model Name**. select a **Language**, and then click **Create Model**.

    {{% alert color="info" %}} The model name should not exceed 55 characters. You can only use characters (a-z, A-Z), numbers (0-9), and underscore (\_). {{% /alert %}}

5. Wait until the **Import File** page opens.
6.  Drag sample images in JPG or JPEG format into the box where it says **Drag image files here**. You can also click **Browse** and select the files.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/import-file-page.png" alt="Import File page" >}}
    
    {{% alert color="warning" %}}If you upload multiple files, all your images must have a similar structure. Each image file size should not exceed 50 MB.{{% /alert %}}
    
7.  Click **Next**. The **Add Marker and IDs** page opens. The status of the images you imported shows **Not Marked**.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/add-marker-and-ids-image-unmarked.png" alt="Add Marker and IDs page" >}}

8.  To mark an image, perform the following steps:
    1. Click **Add Marker**. The **Mark Document** dialog box opens.
    
    2.  In the **Mark the fields to be extracted** pane, select a field of interest from which some meaningful data needs to be extracted.
    
        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/mark-document-dialog-box.png" alt="Mark Document page" >}}
        
    3.  On the right side, enter a **Marker Id** that is used for the area that you selected. 
    
    4. Select the **Marker Type**. It can be **Text** or **Checkmark**.
    
    5. Click **Add Marker** to add the marker to the list of **Markers**.
    
    6. To delete a marker from the **Markers** list, select the marker and click **Delete**.
    
    7.  When you add all the markers for this image, click **Done** to close the **Mark Document** dialog box. The status of the images becomes **Marked**.
    
        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/add-marker-and-ids-image-status-marked.png" alt="add markers and id status is marked" >}}
    
    8. Repeat the steps above until you mark all the images, and then Click **Publish**. The new model appears in the **Existing Models** list with the status **IN PROGRESS**.
9.  Wait until the **Status** of the model becomes **Published**.
10. Once the model is published, this pop-up window opens:
    
    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/new-model-status-popup.png" alt="new model status included" >}}
    
    Click **OK** to close the pop-up window. The model is ready to use. 
    
    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/new-model-status-completed.png" alt="new model status published" >}}

### 4.2 Creating an Import Mapping{#mapping-file}

You need to use an [import mapping](/refguide/mapping-documents/#import-mappings) to populate extracted data into an entity. If necessary, you can further process the entity with [event handlers](/refguide/event-handlers/).

1.  To create an import mapping, you need a JSON structure. Perform the following steps to generate the JSON structure:
    1.  Log into the [Document Model Training](#document-model-training) application with your Mendix account.
    2.  Click **Environment** to show the **Existing Models** list.
    3.  Select your trained model. Make sure that the **Status** of the model is **Published**. Note down the **Model Id**. You will need it when you [extract data with the trained model ](#extraction-activity).
    4.  Click **Download JSON Structure**. The **Generate JSON Structure** dialog box opens.
    5.  Drag one of the sample images, which you used to train the document model, into the box where it says **Drag image files here**. You can also click **Browse** and select the file.

        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/sample-extraction-dialog-box.png" alt="Sample Extraction dialog box" >}}

    6. Click **Download** to get the JSON structure.

    {{% alert color="info" %}} Generated JSON structure file size cannot exceed 50MB. {{% /alert %}}
    
2.  To add the JSON structure to your app, perform the following steps:
    1.  In the **App Explorer** or **Project Explorer**, right-click the module or the folder where you want to add the generated JSON structure.
    2.  From the pop-up menu, select **Add other** > [JSON structure](/refguide/json-structures/).

        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/json-structure.png" alt="json-structure" >}}

    3. In the **Add JSON Structure** dialog box, enter a **Name** for the JSON structure and click **OK**. The **JSON Structure** dialog box opens.
    4. In the **JSON Snippet** box, add the content of the JSON structure that you have generated. The system converts the JSON snippet into a schema structure automatically. You will need this schema structure to create the import mapping.
    5. Click **OK** to save the changes and close the dialog box.
3.  To create the import mapping, perform the following steps:
    1. In the **App Explorer** or **Project Explorer**, right-click the module or the folder where you want to add the import mapping.     
    2. From the pop-up menu, select **Add other** > **Import mapping**.
    3. In the **Add Import Mapping** dialog box, enter a **Name** for the import mapping and click **OK**. The **Select schema elements for import mapping** dialog box opens.    
    4.  For **Schema source**, select **JSON structure** and **Select** the JSON structure that you created.
    
        {{< figure src="/attachments/appstore/app-services/intelligent-document-service/schema-source-json-structure.png" alt="schema-source-json-structure" >}}
    5. Click **OK** to save the changes and close the dialog box.

### 4.3 Extracting the Data with the Trained Document Model {#extraction-activity}

1.  In the **Toolbox**, drag **Intelligent Document Service** activity from the **Document Data Capture Service** category into your microflow.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/intelligent-document-microflow.png" alt="intelligent-document-microflow" >}}

2. Create a list of image that inherits from `System.Image`. Images from where data are extracted should be passed as a list, as shown in the microflow above.
3.  Double-click the **Intelligent Document Service** activity to open the dialog box.

    {{< figure src="/attachments/appstore/app-services/intelligent-document-service/intelligent-document-service-dialog-box.png" alt="Intelligent Document Service dialog box" >}}

4. For **Model Id**, click **Edit** to enter the **Model Id** of your model.
5. For **Image List**, click **Edit** to select the **Image List** which inherits from `System.Image`.
6. For **Mapping**, **Select** the import mapping that you created to define how extracted data should be mapped into an entity.
7. Click **OK** to save the changes and close the dialog box.

{{% alert color="info" %}} Optionally for further automation, add [event handlers](/refguide/event-handlers/) on the entity where you populate the extracted data. You can call your own microflow to process the extracted data when inserted into the entity. For example, you can modify, validate, and pass the data to next steps. By doing this, you can achieve full end-to-end automation.{{% /alert %}}

### 4.4 Checking Statistics on the Usage Dashboard

The **Usage** dashboard shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:

    * If you have a trial, click [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) on the left navigation menu. This page shows all the products that you have trials for.
    * If you have a subscription, click [Company Subscriptions](/appstore/general/app-store-overview/#company-subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **Intelligent Document Service** in the list.
4. Click **Usage Dashboard** to show the usage details.

## 5 Technical Provider{#technical-provider}

The AI and OCR technologies used by Intelligent Document Service are powered by [ABBYY&reg;](https://www.abbyy.com). Application includes ABBYY® FlexiCapture® 12 SDK © 2019 ABBYY Production LLC., and also that ABBYY and FLEXICAPTURE are either registered trademarks or trademarks of ABBYY Software Ltd. and cannot be used without prior written consent of ABBYY Software Ltd.

{{< figure src="/attachments/appstore/app-services/intelligent-document-service/logo-powered-by-abbyy.png" alt="Technical Provider ABBYY" >}}
