---
title: "Publish and Retrieve Images and Files with REST"
url: /refguide/send-receive-files-rest/
linktitle: "Images and Files with REST"
weight: 79
tags: ["rest", "binary", "send files", "receive files", "OData", "expose", "published REST service", "consume"]
---

## 1 Introduction

This guide will cover how to publish and consume (or send and retrieve) files, including images, in REST services in Studio Pro. The REST service exposes the binary data of the files, and you can use it to display images and files like PDFs directly in your app or browser.

You will learn about the following:

* [Creating a REST service](#create-service) with a **System.Image** or **System.FileDocument** entity
     * [Trying out, or testing,](#test-service) the service
     * [Setting the MIME type](#set-mime-type) for a specific file
* [Consuming files](#retrieve-files) with REST

### 1.1 Prerequisites 

To publish or consume files with REST, do the following:

* Install Studio Pro 

We recommend reading the following for some more background:

* [Publishing](/howto/integration/publish-rest-service/) and [consuming](/howto/integration/consume-a-rest-service/) REST services
* [Working with images and files](/howto/data-models/working-with-images-and-files/) in Studio Pro

## 2 Publish Files with REST {#create-service}

Imagine that your app is functioning as a content management system (CMS), and you want to be able to send and receive images and files. You have an entity that stores the files, which we will use as a starting point:

{{< figure src="/attachments/refguide/modeling/integration/rest-binary/starting-entity.png" >}}

### 2.1 Publishing the Service {#publish-service}

To publish the **System.Image** or **System.Filedocument** entities as a [REST service](/refguide/published-rest-service/), do the following:

1. Add a new module (or use **MyFirstModule**) and name it **CMS**.

2. Go to the domain model, generate the overview pages for the file or image entity if you have not yet done so, then link them to the home page and navigation.
     * Right click on the **System.Image** or **System.FileDocument** entity that you want to publish, and click **Generate overview pages**. 
     * Add a button to the home page that links to the **Overview** page you created.

3. Expose the entity as a REST resource.
     * Right-click on the **System.Image** or **System.FileDocument** entity that contains the file(s) that you want to publish, and click **Expose as a REST resource**.
     * Click **Select** next to the **Service** field, then click on the folder where you want to create the service and click **New**. Enter a name for the REST service and click **OK**.

4. Back in the **Generate resource and operations** window, select **MyFileID** as the **Key attribute** and check the boxes for the following **Operations***:
     * **Get all**
     * **Get by key**
     * **Post (Create)**
     * **Delete**

     See the [Operations](/refguide/generate-rest-resource/#operations) section of *Generating a Published REST Resource* for a description of each operation.

5. Click **OK**. 

The **Published REST service** document for the exposed image or file entity has been created and is now open on your screen. After you run your app, click the URL in the **Location** field to open the OpenAPI specs.

### 2.1.1 Understanding the Service Details {#service-details}

Open your published REST service, then double-click the **Get by** key, or single-click and click **Edit**, to open the **Get by** property details. By default, the **Get by** key will return a binary response. The **Export mapping** is blank because a binary object without an export mapping returns binary content.

{{< figure src="/attachments/refguide/modeling/integration/rest-binary/no-export-mapping.png" >}}

Click **Show** next to the **Microflow** field to view the **MyFirstModule.MyFile_Get_ByKey** microflow. The generated **Get by** key returns a file document.

### 2.2 Setting the MIME Type in a GET Microflow {#set-mime-type}

A `GET` request to the REST endpoint you created (in this example, `http://localhost:8080/rest/cmsapi/v1/myfile/1`) will return the binary for the first uploaded file. We need to specify the expected media type so that it returns the file in the expected way (for example, displaying an image).

In the **GET_ByKey** microflow, specify the media type (or MIME type) in the content headers. To learn more about content headers in microflows, see the **Return a file document** entry in the [Microflow](/refguide/published-rest-operation/#microflow) section of *Published REST Operation*. Detailed steps are explained below.

See [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a generic, external list of common content header types.

#### 2.3.1 MIME Type for Images {#mime-images}

In the **GET_ByKey** microflow, do the following: 

1.  Drag a **Create Object** action into your microflow just before the **End Event**. 
2.  In the **Entity** field, select **System.HTTPHeader**.
3.  Under the **Refresh in client** field, click **New**.
4.  Set the three drop-down options to the following:
     * **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
     * **Value (String (Unlimited))** – set the **Value** to `'image/png'`, or the image type that will be returned
     * **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

#### 2.3.2 MIME Type for PDFs

Follow the steps in the [MIME Type for Images](#mime-images) section, then set the three drop-down options to the following:

     * **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
     * **Value (String (Unlimited))** – set the **Value** to `'application/pdf'` 
     * **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

[Add image here]

### 2.4 Testing the Service {#test-service}

Test the service to ensure that it works!

1. Run your app and upload a PNG file.
     You can upload the files on the overview pages you created in the previous step, so make sure you have a link to the file overview page on your home page.

2. Back in Studio Pro, open the service document, and click the link to the service to display the OpenAPI document (for example, `http://localhost:8080/rest-doc/rest/cmsapi/v1`).

3. Try it out by clicking **Get/myfile/{myfileid}** > **Try it out** > **Execute**. The contents will display the binary.
     You can also test the call in Visual Studio Code using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension by making the following call:

     ```
     GET http://localhost:8080/rest/cmsapi/v1/myfile/1
     Accept: image/png`
     ```

4. Click **Get/myfile/{myfileid}** to return the content, and you should see the PNG displayed. If you only see the binary, make sure that you have [set the MIME Type](#set-mime-type).

## 3 Retrieve Files with REST {#retrieve-files}

You can implement a client in your app that will retrieve binary files from any published REST service, from a Mendix app or anywhere else, and store them in a `FileDocument` entity.

1. Right-click on the **File Explorer** and select **Add module**, then rename it as **CMSClient**.

2. Add an entity to handle the retrieved files.
    * In the **Domain Model**, right click to add an entity called **RetrievedFile**.
    * Double-click on the entity to open the **Properties** and select the **Generalization**. To test with the PNG file, we can use **System.Image**.

Then, you can use the image or PDF with the [Image] widget, an [HTML snippet] widget for PDFs, or a microflow.

### 3.1 Retrieving Images with the Image Widget

Retrieve images with the URL of the published REST service by using the [Image](/appstore/widgets/image/) widget available on the Mendix Marketplace.



### 3.2 Retrieving PDFs with the HTML/Javascript Snippet Widget

Retrieve PDFs with the URL of the published REST service by using the [HTML/Javascript Snippet](/appstore/widgets/html-javascript-snippet/) widget available on the Mendix Marketplace.

### 3.3 Retrieving Files in a Microflow

1. Create a **GetImage** (or **GetFile**) microflow.
    * Right click in the **CMSClient** module and select **Add microflow**.

2. Drag a **Call REST service** action into the microflow, and set the following properties:
    * In the **General** tab: 
         * **Location** – the URL to your rest service and the specific file (for example, `http://localhost:8080/rest/cmsapi/v1/myfile/1`)
    * In the **Response** tab:
         * **Response handling** – select **Store in a file document**
         * **Store in variable** – select **Yes**
         * **Type** – select the **RetrievedFile** entity
         * **Variable Name** – enter `GetResponseFile`
  
5. Drag a **Change object** action into the microflow after the **Call REST service** action, so that the list view will display the retrieved image.
    * Double click the newly created action to open the properties.
    * In the **Object** field, select the **GetResponseFile** variable for the **RetrievedFile** entity.
  



Other points to address:
Call rest service: GetImage MF; Call REST (GET)[GetResponseFile] Retrieved File -> Change 'GetResponseFile'. REST Call activity also uses the same API endpoint
Use Image widget example - Image widget to directly view the image without a MF REST call; Image widget links to resource endpoint provided by the REST service
You can upload an example PDF, different location, so no need to update the URL
Image viewer doesn't work for PDFs -> needs to be replaced by a different widget to view PDF resources. But opens fine in a browser
Easiest way to display a PDF: use an HTML snippet widget to add an embed tag to your page


 With developer you mean the developer of the API? This developer can check the content-type header to check if the mime-type of the payload is supported. So the client will tell the service: i'm sending you an image/jpg, and the API can process this or reject it. If the API doesn't support jpg it can return a 415 status code (https://stackoverflow.com/questions/11461037/appropriate-http-status-code-for-request-specifying-invalid-content-encoding-hea)

 What confused me in the docs is that it seemed to suggest that the binary would automatically be converted into the requested mime-type. If the mendix file document contains a jpg, but the client requests a png, simply specifying png as the content type in the api microflow will not result in a png. The microflow will need to explicitly convert the jpg to a png.

 