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

### 4.1 ClassifyImage

This implements the [**Inference Service for Customizable Image Classification (classification)**](https://api.sap.com/api/image_classification_api/resource) service of SAP Leonardo Machine Learning Foundation. It takes an image and detects the dominant objects present in an image from a set of 1000 categories such as trees, animals, food, vehicles, people, and more.

![ClassifyImage action](attachments/sap-leonardo-connector/classify-image-input.png)

**Input**

There are two inputs to this action.

* File

    This is an image object which is a *System.Image* entity, or an entity which is based on the *System.Image* entity.

* Options

    This is an object of type *LeonardoMachineLearning.ImageClassifierOptions*. This contains two attributes, *ModelName* and *ModelVersion* (corresponding to *modelName* and *version* in the Leonardo API), which identify a specific model to be used in the inference.

    For the default inference model, and on SAP API Business Hub, this value should be *empty*.

*Limitations*

The **ClassifyImage** action does not currently support a list of image objects, or images in an archive (.zip) file.

*Options* are not available on the SAP API Business Hub.

**Output**

The **ClassifyImage** action returns a list of objects of entity type *LeonardoMachineLearning.ImageClassificationResponse*. Note that this list will contain a single object.

![ClassifyImage domain model](attachments/sap-leonardo-connector/classify-image-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**ImageClassificationResponse**||One object for each image (currently only one)|
|ImageName|name|Name of the file provided for classification (this will be *empty*)|
|**Result**|results|One object per classification inferred, sorted by probability|
|Label||Name of a classification inferred from the image|
|Score||Probability of the classification provided by label|

### 4.2 ClassifyProductFromImage

This implements the [**Product Image Classification API (inference_sync)**](https://api.sap.com/api/product_image_classification_api/overview) service of SAP Leonardo Machine Learning Foundation. It takes an image or archive of images and classifies images into a fixed set of categories of products that are common in eCommerce.

![ClassifyProductFromImage action](attachments/sap-leonardo-connector/classify-product-from-image-input.png)

**Input**

The input is an object which is a *System.FileDocument* entity, or an entity which is based on the *System.FileDocument* entity. For example, it could be an object based on *System.Image* which is a single image. It could also be an object containing a *.zip* archive file containing images. 

*Limitations*

The **ClassifyProductFromImage** action does not currently support a list of image objects.

**Output**

The **ClassifyProductFromImage** action returns a list of objects of entity type *LeonardoMachineLearning.ProductClassificationResponse*.

![ClassifyProductFromImage domain model](attachments/sap-leonardo-connector/classify-product-from-image-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**ProductClassificationResponse**||One object for each image|
|ImageName|name|Name of the file provided for classification|
|**Result**||One object per classification inferred, sorted by probability|
|Label||Name of a classification inferred from the image|
|Score||Probability of the classification provided by label|

### 4.3 DetectFace

This implements the [**Inference Service for Face Detection (face-detection)**](https://api.sap.com/api/face_detection_api/resource) service of SAP Leonardo Machine Learning Foundation. It takes an image and detects faces in the images, if any, and returns information declaring boundary box per face, for every image.

![DetectFace action](attachments/sap-leonardo-connector/detect-face-input.png)

**Input**

The input is an image object which is a *System.Image* entity, or an entity which is based on the *System.Image* entity.

*Limitations*

The **DetectFace** action does not currently support a list of image objects, or images in an archive (.zip) file.

**Output**

The **DetectFace** action returns a list of objects of entity type *LeonardoMachineLearning.FaceDetectionResponse*. Note that this list will contain a single object.

![DetectFace domain model](attachments/sap-leonardo-connector/detect-face-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**FaceDetectionResponse**||One object for each image (currently only one)|
|FaceCount|numberOfFaces|Number of faces detected in the image|
|**FaceCoordinates**|faces|One object per face detected in the image|
|Top||topmost pixel y-coordinate|
|Bottom||bottommost pixel y-coordinate|
|Left||leftmost pixel y-coordinate|
|Right||rightmost pixel y-coordinate|

### 4.4 DetectTopic

This implements the [**Inference Service for Topic Detection (topic-detection)**](https://api.sap.com/api/image_classification_api/resource) service of SAP Leonardo Machine Learning Foundation. It detects and ranks the topics from the input documents. At least two documents must be submitted.

![DetectTopic action](attachments/sap-leonardo-connector/detect-topic-input.png)

**Input**

There are two inputs to this action.

* File

    This is an object which is a *System.FileDocument* entity, or an entity which is based on the *System.FileDocument* entity. It must be an archive containing at least two text documents.

* Options

    This is an object of type *LeonardoMachineLearning.TopicDetectionOptions*. This contains the following attributes:

    Attribute|Description
    ---|---
    NumTopics|Total number of topics to be detected
    NumTopicsPerDoc|Number of most relevant topics to be listed per document 
    NumKeywordsPerTopic|Number of keywords to be listed per topic
    NumFeatures|Maximum number of keywords to be extracted from documents (optional)

    All the values for the options can be found in the API documentation on the SAP API Business Hub here: https://api.sap.com/api/topic_detection_api/resource. The parameters in the API have the same names as the attributes in the *TopicDetectionOptions* entity.

**Output**

The **DetectTopic** action returns an object of entity type *LeonardoMachineLearning.TopicDetectionResponse*.

![ClassifyImage domain model](attachments/sap-leonardo-connector/detect-topic-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**TopicDetectionResponse**||The object returned by the action|
|**TopicDetectionResult**||
|ImageName|name|Name of the file provided for classification (this will be *empty*)|
|**Result**|results|One object per classification inferred, sorted by probability|
|Label||Name of a classification inferred from the image|
|Score||Probability of the classification provided by label|


### 4.5 ExtractImageFeature

This implements the [**Inference Service For Customizable Image Feature Extraction (feature-extraction)**](https://api.sap.com/api/img_feature_extraction_api/resource) service of SAP Leonardo Machine Learning Foundation. It takes an image and extracts feature vectors (measurable properties of the image such as edges or objects) for comparison, information retrieval, clustering, or further processing.

![ExtractImageFeature action](attachments/sap-leonardo-connector/extract-image-feature-input.png)

**Input**

An image object which is a *System.Image* entity, or an entity which is based on the *System.Image* entity.

*Limitations*

The **ExtractImageFeature** action does not currently support a list of image objects or images in an archive (.zip) file.

**ExtractImageFeature** only uses the default model for inferring vectors.

**Output**

The **ExtractImageFeature** action returns a list of objects of entity type *LeonardoMachineLearning.ImageFeatureExtratorResponse* [sic]. Note that this list will contain a single object.

![ExtractImageFeature domain model](attachments/sap-leonardo-connector/classify-image-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**ImageFeatureExtratorResponse**||One object for each image (currently only one)|
|ImageName|name|Name of the file provided for classification|
|**Vector**|featureVector|One object per feature vector|
|Value|item|Value assigned to each feature vector|

### 4.6 RecognizeOpticalCharacter (OCR)

This implements the [**Inference Service for Optical Character Recognition (OCR)**](https://api.sap.com/api/ocr_api/resource) service of SAP Leonardo Machine Learning Foundation. It takes a document file with .pdf extension, or image file in the format .jpeg, .jpe, or .png as input and returns the result in text or xml format.

![RecognizeOpticalCharacter (OCR) action](attachments/sap-leonardo-connector/ocr-input.png)

**Input**

There are two inputs to this action.

* Options

    This is an object of type *LeonardoMachineLearning.ocr_options*. This contains the following attributes:

    Attribute|Description
    ---|---
    Lang|The language of the text (currently only a single language can be set)
    OutputType|The output type of the result 
    PageSegMode|The page segmentation mode
    ModelType|The type of the machine learning model for ocr 

    All the values for the options can be found in the API documentation on the SAP API Business Hub here: https://api.sap.com/api/ocr_api/resource?tag=OCR&path=post_ocr&method=post&opId=post_ocr. The parameters in the API have the same names as the attributes in the *ocr_options* entity.
    
* File

    This is an object which is a *System.FileDocument* entity, or an entity which is based on the *System.FileDocument* entity. For example, it could be an object based on *System.Image* which is a single image. It could also be an object containing a *.pdf* portable document format file.

*Limitations*

The **RecognizeOpticalCharacter (OCR)** *Lang* option only accepts a single language for recognition.

The *ocr_options* entity must be passed - the connector does not use the defaults if it is missing.

**Output**

The **RecognizeOpticalCharacter (OCR)** action returns an object of entity type *LeonardoMachineLearning.OCRResponse*.

![RecognizeOpticalCharacter (OCR) domain model](attachments/sap-leonardo-connector/ocr-output.png)

|Entity/Attribute|Leonardo Equivalent|Description|
|---|---|---|
|**OCRResponse**||The response object|
|**PredictionValue**|prediction|one or more objects depending on how the page has been segmented|
|Value||Text which has been recognized in the image, returned in the requested format|

### 4.7 Score Similarity


### 4.8 Translate


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
