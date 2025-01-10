---
title: "Publish and Retrieve Images and Files with REST"
url: /refguide/send-receive-files-rest/
linktitle: "Images and Files with REST"
weight: 79
---

## Introduction

This guide covers how to use REST to send and retrieve files, including images, in Studio Pro.

You will learn about the following:

* [Creating a REST service](#create-service) from a **System.Image** or **System.FileDocument** entity
    * [Trying out or testing](#test-service) the service
    * [Setting the MIME type](#set-mime-type) for supported files
* [Retrieving files](#retrieve-files) with REST

If you are only interested in consuming files, you can skip down to the [Retrieve Images and Files with REST](#retrieve-files) section.

### Prerequisites

It is recommended to read the following for some more background information:

* [Publishing](/howto/integration/publish-rest-service/) and [consuming](/howto/integration/consume-a-rest-service/) REST services
* Working with [Images, Videos, and Files](/refguide/image-and-file-widgets/) in Studio Pro

## Send Files with REST {#create-service}

Imagine your app is functioning as a content management system (CMS) and you want to be able to send and receive images and files. You can publish the generalized entities as a REST service, which exposes the binary data of files stored in the entity.

### Publishing the Service {#publish-service}

To publish the **System.Image** or **System.Filedocument** entities as a [REST service](/refguide/published-rest-service/), do the following:

1. Add a new module (or use **MyFirstModule**) and name it **CMS**.

2. Go to the domain model and create a new entity called *MyFile*.

3. Add a **System.Image** or **System.FileDocument** [generalization](/refguide/entities/#generalization) to the *MyFile* entity

     {{< figure src="/attachments/refguide/modeling/integration/rest-binary/starting-entity.png" class="no-border" >}}

4. Generate the overview pages for the file or image entity, then link them to the home page and navigation.
     * Right-click on the **System.Image** or **System.FileDocument** entity that you want to publish and click **Generate overview pages**. 
     * Add a button to the home page that links to the **Overview** page you created.

5. Expose the entity as a REST resource.
     * Right-click on the **System.Image** or **System.FileDocument** entity that contains the file (or files) that you want to publish and click **Expose as a REST resource**.
     * Click **Select** next to the **Service** field, then click on the folder where you want to create the service and click **New**. Enter a name for the REST service and click **OK**.

6. Back in the **Generate resource and operations** window, select **MyFileID** as the **Key attribute** and check the boxes for the following **Operations***:
     * **Get all**
     * **Get by key**
     * **Post (Create)**
     * **Delete**

     See the [Operations](/refguide/generate-rest-resource/#operations) section of *Generating a Published REST Resource* for a description of each operation.

7. Click **OK**. 

The **Published REST service** document for the exposed image or file entity has been created and is now open. 

After you run your app, click the URL in the **Location** field to view the OpenAPI specs.

#### Understanding the Service Details {#service-details}

Open your published REST service, then double-click the **Get by** key, or single-click and click **Edit** to open the **Get by** property details. By default, the **Get by** key will return a binary response. The **Export mapping** is blank because a binary object without an export mapping returns binary content.

{{< figure src="/attachments/refguide/modeling/integration/rest-binary/no-export-mapping.png" class="no-border" >}}

Click **Show** next to the **Microflow** field to view the **MyFirstModule.MyFile_Get_ByKey** microflow. The generated **Get by** key returns a file document.

### Adding the MIME Type to a GET Microflow {#set-mime-type}

A `GET` request to the REST endpoint you created (in this example, `http://localhost:8080/rest/cmsapi/v1/myfile/1`) will return the binary for the first uploaded file. We need to specify the expected media type so it returns the file in the expected way (for example, displaying an image).

In the **GET_ByKey** microflow, specify the media type (or MIME type) in the content headers. To learn more about content headers in microflows, see the **Return a file document** entry in the [Microflow](/refguide/published-rest-operation/#microflow) section of *Published REST Operation*. 

See [Common MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for a generic, external list of common content header types.

#### MIME Type for Images {#mime-images}

In the **GET_ByKey** microflow, do the following: 

1. Drag a **Create Object** action into your microflow just before the **End Event**. 
2. In the **Entity** field, select **System.HTTPHeader**.
3. Under the **Refresh in client** field, click **New**.
4. Set the three drop-down options to the following:
     * **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
     * **Value (String (Unlimited))** – set the **Value** to `'image/png'`, or the image type that will be returned
     * **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

#### MIME Type for PDFs

Follow the steps in the [MIME Type for Images](#mime-images) section, then set the three drop-down options to the following:

* **Key (String (Unlimited))** – set the **Value** to `'Content-Type'`
* **Value (String (Unlimited))** – set the **Value** to `'application/pdf'` 
* **System.HttpHeaders (System.HttpMessage)** - set the **Value** to `$httpResponse`

### Testing the Service {#test-service}

Test the service to ensure that it works.

1. Run your app and upload a PNG file.
     You can upload the files on the overview pages you created in the previous step, so make sure you have a link to the file overview page on your home page.

2. Back in Studio Pro, open the service document and click the link to the service to display the OpenAPI document (for example, `http://localhost:8080/rest-doc/rest/cmsapi/v1`).

3. Try it out by clicking **Get/myfile/{myfileid}** > **Try it out** > **Execute**. The contents will display the binary.
     You can also test the call in Visual Studio Code using the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension by making the following call:

     ```
     GET http://localhost:8080/rest/cmsapi/v1/myfile/1
     Accept: image/png`
     ```

4. Click **Get/myfile/{myfileid}** to return the content, and you should see the PNG displayed. If you only see the binary, make sure that you have [set the MIME Type](#set-mime-type).

## Retrieve Images or Files from a Published REST Service {#retrieve-files}

You can implement a client in your app that will retrieve binary files from any published REST service, from a Mendix app or anywhere else, and store them in a `FileDocument` entity.

1. Right-click on the **File Explorer** and select **Add module**, then rename to **CMSClient**.

2. Add an entity to handle the retrieved files.
    * In the **Domain model**, right-click to add an entity called **RetrievedFile**.
    * Double-click on the entity to open the **Properties** and select the **Generalization**. To test with the PNG file, you can use **System.Image** or **System.FileDocument** if you want to work with a PDF file.

Then, you can retrieve the image with the [Image widget](#image-widget), retrieve a PDF with the [HTML/JavaScript snippet widget](#html-snippet), or [retrieve images or PDFs with a microflow](#retrieve-microflow).

### Retrieving Images Using the Image Widget {#image-widget}

Retrieve images with the URL of the published REST service by using the [Image](/appstore/widgets/image/) widget available on the Mendix Marketplace.

To do so, do the following:

1. Complete the steps in the [Retrieve Files with REST](#retrieve-files) section.
2. Download the [Image](/appstore/widgets/image/) widget from the Marketplace and import it into your app.
3. In the [Toolbox](/refguide/view-menu/#toolbox), click **Widgets** and search for "Image".
4. Drag the **Image** widget onto a page.
5. Double-click the widget you dragged onto your page to open the **Properties**.
6. In the **Data source** field, select the **Image URL** for **Image type**.
7. Paste the location of the file in the REST service (for example, `http://localhost:8080/rest/cmsapi/v1/myfile/1`).

### Retrieving PDFs Using the HTML/JavaScript Snippet Widget {#html-snippet}

Retrieve PDFs with the URL of the published REST service by using the [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/) widget available in the Marketplace.

To do so, do the following:

1. Complete the steps in the [Retrieve Files with REST](#retrieve-files) section.
2. Download the [HTML/JavaScript Snippet](/appstore/widgets/html-javascript-snippet/) widget from the Marketplace and import it into your app.
3. In the [Toolbox](/refguide/view-menu/#toolbox), click **Widgets** and search for "HTMLSnippet".
4. Drag the **HTMLSnippet** widget onto a page.
5. Double-click the widget to open the **Properties**.
6. In the **Content Type** field, ensure **HTML** is selected.
7. In the **Contents** field, paste the HTML that includes the REST endpoint. For example:

```html
<embed src="http://localhost:8080/rest/cmsapi/v1/myfile/1" width="400px" height="400px">
```

### Retrieving Files Using a Microflow {#retrieve-microflow}

You can call a REST service in a microflow, then store the binary response in an entity.

Retrieving files in a microflow uses the [Call REST service](/refguide/call-rest-action/) action. For step-by-step instructions for calling a REST service in a microflow, see [Consume a REST Service](/howto/integration/consume-a-rest-service/).

To retrieve files using a microflow, do the following:

1. Complete the two steps in the [Retrieve Files with REST](#retrieve-files) section.
2. Create a **GetImage** (or **GetFile**) microflow.
    * Right-click in the **CMSClient** module and select **Add microflow**.

3. Drag a **Call REST service** action into the microflow and set the following properties:
    * In the **General** tab: 
         * **Location** – the URL to your REST service and the specific file (for example, `http://localhost:8080/rest/cmsapi/v1/myfile/1`)
    * In the **Response** tab:
         * **Response handling** – select **Store in a file document**
         * **Store in variable** – select **Yes**
         * **Type** – select the **RetrievedFile** entity
         * **Variable Name** – enter `GetResponseFile`
  
4. For images: 
   Drag a **Change object** action into the microflow after the **Call REST service** action so the image viewer will display the retrieved image
    * Double-click the newly-created action to open the properties
    * In the **Object** field, select the **GetResponseFile** variable for the **RetrievedFile** entity
    * In the **Refresh in client** field, select **Yes**
