---
title: "Publish and Consume Images and Files with REST"
url: /refguide/send-receive-files-rest/
linktitle: "Publish and Consume Images and Files with REST"
weight: 79
tags: ["rest", "binary", "send files", "receive files", "OData", "expose", "published REST service", "consume"]
---

## 1 Introduction

Follow this guide to learn how to publish images and files as REST services for use in other apps. 

### 1.1 Prerequisites 

To publish or consume files and images with REST, do the following:

* Install Studio Pro 

While not required, we recommend reading the following for more background:

* [Publishing](/howto/integration/publish-rest-service/) and [consuming](/howto/integration/consume-a-rest-service/) REST services
* [Working with images and files](/howto/data-models/working-with-images-and-files/) in Studio Pro

## 2 Using Images and Files in Your App

To publish and consume images or files with REST, you need to be using them in your app. Images and files you use in your app are stored in **System.Image** and **System.FileDocument** entities.

Follow [Work with Images and Files](/howto/data-models/working-with-images-and-files/) for step-by-step instructions on setting up these entities and overview pages and using them in your app.

## 3 Publish Images and Files as REST 

We can use this entity as a reference:



To publish the **System.Image** or **System.Filedocument** entities as a [REST service](/refguide/published-rest-service/), do the following:

1.  Generate the overview pages if you have not yet done so.
    Right click on the **System.Image** or **System.FileDocument** entity that you want to publish, and click **Generate overview pages**.

2.  Expose the entity as a REST resource.
    Right-click on the **System.Image** or **System.FileDocument** entity that contains the file(s) that you want to publish, and click **Expose as a REST resource**.

3.  Click **Select** next to the **Service** field, then click on the folder where you want to create the service and click **New**. Enter a name for the REST service and click **OK**.
   
4.  Back in the **Generate resource and operations** window, select the **Key attribute** and required **Operations**, then click **OK**.
    The **Key attribute** should be **FileID**.
    See the [Operations](/refguide/generate-rest-resource/#operations) section of *Generating a Published REST Resource* for a description of each operation.

5.  The **Published REST service** document has been created and is now open on your screen. By default, the **Get by** key should return a binary response because it will return a FileDocument. 



6.  A binary object without an export mapping will return binary content (Export mapping: none)
7.  [Microflow example, returning a file document]

## 4 Consuming Images and Files with REST

Now, you need to implement an API client that will retrieve binary files and store the result in a FileDocument.
 - RetrievedFile (System.Image)

Can use an image, let's say a PNG file. 
OpenAPI documentation is generated
Get all returns the binary content as a string (if included in the export mapping)
You can also test in VSC with Accept: application/json; same result as above
You can ask for a response in XML (application/xml)
If you ask for a specific FileDocument object, the binary content will be returned. But the correct mimetype is missing (Mendix doesn't know the mediatype of a FileDocument)
   - So you can add a mime-type in the microflow returning the file document object
   - Response now, viewed in OpenAPI spec and VSC, is actually an image!

## 5 Try It Out

Test page: 
* Button to retrieve image in a MF
* Image widget to directly view the image without a MF REST call
* List view to show all retrieved images
* Image widget links to resource endpoint provided by the REST service
Call rest service: GetImage MF; Call REST (GET)[GetResponseFile] Retrieved File -> Change 'GetResponseFile'. REST Call activity also uses the same API endpoint
In the Response: stores the retrieved binary image in the entity provided (GetResponseFile), and refreshes the object in the client so the listview will display the additional retrieved image. The images then show up in your test app

Benefit of not using base64 encoded binaries: API endpoint works everywhere as expected, so you can open the image in the browser
For PDF, all is the same; just change the mime type (application/pdf) in the Create Object part of your microflow
You can upload an example PDF, different location, so no need to update the URL
Image viewer doesn't work for PDFs -> needs to be replaced by a different widget to view PDF resources. But opens fine in a browser
Easiest way to display a PDF: use an HTML snippet widget to add an embed tag to your page

