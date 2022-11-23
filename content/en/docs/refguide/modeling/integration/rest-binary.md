---
title: "Publish and Consume Images and Files with REST"
url: /refguide/send-receive-files-rest/
linktitle: "Images and Files with REST"
weight: 79
tags: ["rest", "binary", "send files", "receive files", "OData", "expose", "published REST service", "consume"]
---

## 1 Introduction

This guide will cover how to publish images and files as REST services in Studio Pro. The REST service exposes the binary data of the images and files, and can be retrieved to display images and files like PDFs directly in the app or your browser. 

You will learn about the following:

* [Creating a REST service](#create-service)
* [Trying out, or testing,](#test-service) the service
* [Setting the MIME type](#set-mime-type) for a specific file
* [Creating a client to retrieve files](#retrieve-files) with REST

### 1.1 Prerequisites 

To publish or consume files and images with REST, do the following:

* Install Studio Pro 

We recommend reading the following for some more background:

* [Publishing](/howto/integration/publish-rest-service/) and [consuming](/howto/integration/consume-a-rest-service/) REST services
* [Working with images and files](/howto/data-models/working-with-images-and-files/) in Studio Pro

## 2 Using Images and Files in Your App

To publish images or files with REST, you need to be using them in your app. Images and files you use in your app are stored in **System.Image** and **System.FileDocument** entities.

Follow [Work with Images and Files](/howto/data-models/working-with-images-and-files/) for step-by-step instructions on setting up these entities and overview pages and using them in your app.

## 3 Publish Images and Files as REST {#create-service}

Imagine that your app is functioning as a content management system (CMS), and you want to be able to send and receive images and files. You have an entity that stores the files, which we will use as a starting point:

{{< figure src="/attachments/refguide/modeling/integration/rest-binary/starting-entity.png" >}}

### 3.1 Publishing the Service {#publish-service}

To publish the **System.Image** or **System.Filedocument** entities as a [REST service](/refguide/published-rest-service/), do the following:

1.  Add a new module (or use **MyFirstModule**) and name it **CMS**.
   
2.  Generate the overview pages if you have not yet done so, and link them to the home page and navigation.
    * Right click on the **System.Image** or **System.FileDocument** entity that you want to publish, and click **Generate overview pages**. 
    * Add a button to the home page that links to the Overview page you created.

3.  Expose the entity as a REST resource.
    * Right-click on the **System.Image** or **System.FileDocument** entity that contains the file(s) that you want to publish, and click **Expose as a REST resource**.

4.  Click **Select** next to the **Service** field, then click on the folder where you want to create the service and click **New**. Enter a name for the REST service and click **OK**.
   
5.  Back in the **Generate resource and operations** window, select **MyFileID** as the **Key attribute** and check the boxes for the following **Operations***:
    * **Get all**
    * **Get by key**
    * **Post (Create)**
    * **Delete**

    See the [Operations](/refguide/generate-rest-resource/#operations) section of *Generating a Published REST Resource* for a description of each operation.

6.  Click **OK**. 

The **Published REST service** document for the exposed image or file entity has been created and is now open on your screen. After you run your app, click the URL in the **Location** field to open the OpenAPI specs.

### 3.2 Understanding the Service Details {#service-details}

Open your published REST service, then double-click the **Get by** key, or single-click and click **Edit**, to open the **Get by** property details. By default, the **Get by** key will return a binary response. The **Export mapping** is blank because a binary object without an export mapping returns binary content.

{{< figure src="/attachments/refguide/modeling/integration/rest-binary/no-export-mapping.png" >}}

Click **Show** next to the **Microflow** field to view the **MyFirstModule.MyFiles_Get_ByKey** microflow. The generated **Get by** key returns a file document.

### 3.3 Setting the MIME Type (For Calling a Specific File) {#set-mime-type}

A `GET` request to the REST endpoint you created (for example, `http://localhost:8080/rest/restservicename/v1/entityname/`) will return the binary for the uploaded file. But if you are trying to call a specific file, Mendix needs to be told what media type it should expect so that it returns the file in the expected way (for example, displaying an image).

In the **GET_ByKey** microflow, specify the media type (or MIME type) in the content headers. To learn more about content headers, see the **Return a file document** entry in the [Microflow](/refguide/published-rest-operation/#microflow) section of *Published REST Operation*. Detailed steps are explained below.

#### 3.3.1 MIME Type for Images {#mime-images}

In the **GET_ByKey** microflow, do the following: 

1.  Drag a **Create Object** action into your microflow just before the **End Event**. 
2.  In the **Entity** field, select **System.HTTPHeader**.
3.  Under the **Refresh in client** field, click **New**.
4.  Set the three drop-down options to the following:
     * **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
     * **Value (String (Unlimited))** – set the **Value** to `image/png` 
     * **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

[Add image here]

#### 3.3.2 MIME Type for PDFs

Follow the steps in the [MIME Type for Images](#mime-images) section, then set the three drop-down options to the following:

     * **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
     * **Value (String (Unlimited))** – set the **Value** to `application/pdf` 
     * **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

[Add image here]

Are there other image types or file types we can add? Is there a list of ones that are supported?

### 3.4 Testing the Service {#test-service}

Test the service to ensure that it works!

1.  Run your app and upload a PNG file.
    You can upload the files on the overview pages you created in the previous step, so make sure you have a link to the file overview page on your home page.

2.  Back in Studio Pro, open the service document, and click the link to the service to display the OpenAPI doucment (for example, `http://localhost:8080/rest-doc/rest/restfileservice/v1`).

3.  Try it out by clicking **Get/myfiles** > **Try it out** > **Execute**. The contents will display the binary.
    You can also test the call in Visual Studio Code using a REST extension doing a `GET http://localhost:8080/rest/tryagain/restfileservice/` call (`Accept: application/json`.


4.  Clicking **Get/myfiles/{myfileid}** will return the content, but the media type is missing. See [Setting the MIME Type (For Calling a Specific File)](#set-mime-type).

If you uploaded a PNG, you should actually see the image displayed!

## 5 Retrieve Images and Files with REST {#retrieve-files}

Now that you have a published REST service for your image or file entity, implement an API client that will retrieve binary files and store the result in a `FileDocument`.

1.  Right-click on the **File Explorer** and select **Add module**, then rename it as **CMSClient**.

2.  Add an entity to handle the retrieved files.
    * In the **Domain Model**, right click to add an entity called **RetrievedFile**. 
    * Double-click on the entity to open the **Properties** and select the **Generalization**. To test with the PNG file, we can use **System.Image**.

3.  Create a page that will display the published image.
    * Right-click on the **CMSClient** module and click **Add page**. 
    * 



* Button to retrieve image in a MF
* Image widget to directly view the image without a MF REST call
* List view to show all retrieved images
* Image widget links to resource endpoint provided by the REST service
Call rest service: GetImage MF; Call REST (GET)[GetResponseFile] Retrieved File -> Change 'GetResponseFile'. REST Call activity also uses the same API endpoint
In the Response: stores the retrieved binary image in the entity provided (GetResponseFile), and refreshes the object in the client so the listview will display the additional retrieved image. The images then show up in your test app

Other points to address:
You can upload an example PDF, different location, so no need to update the URL
Image viewer doesn't work for PDFs -> needs to be replaced by a different widget to view PDF resources. But opens fine in a browser
Easiest way to display a PDF: use an HTML snippet widget to add an embed tag to your page

