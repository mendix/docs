---
title: "Send and Receive Files with REST"
url: /refguide/send-receive-files-rest/
linktitle: "Send and Receive Files with REST"
weight: 79
tags: ["rest", "binary", "send files", "receive files", "OData", "expose", "consume"]
---

## 1 Introduction

Learn how to send and receive files by exposing and consuming binary from a REST service.

## 2 Exposing Files

(Separate between images and PDFs)

1. System.File Document - Entity containing the files you want to publish in a REST API
2. Generate overview pages
3. Expose as REST resource
4. Select the required operations (Get all, get by key, post, delete). Default generated service, the Get by key should return a binary response because it will return a file document).
5. A binary object without an export mapping will return binary content (Export mapping: none)
6. [Microflow example, returning a file document]

## 3 Consuming Files

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

## Try It Out

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

