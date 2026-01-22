---
title: "PDF Document Generation"
url: /appstore/modules/document-generation/
description: "Describes the configuration and usage of the PDF Document Generation module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [PDF Document Generation](https://marketplace.mendix.com/link/component/211553) module allows you to generate pixel-perfect PDF documents based on regular pages in your app. 

## Features

* Generate pixel-perfect PDF documents based on regular pages in your app.
* Make use of the full capabilities of the page editor, including the use of snippets, text templates, conditional visibility based on expressions, dynamic classes, etc.
* Support adding any existing web widget to your document, or creating your own widgets and using them in your documents.
* Use “Instant Update” during local development, which allows you to see changes to your documents immediately without having to do a full restart of your app.
* Generate documents using a synchronous or asynchronous approach. In the asynchronous action, the result object is available instantly, the content is added at a later stage.

## Limitations {#limitations}

* PDF is the only supported document export format.
* For deployment, we support: 

    * [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
    * [Mendix Cloud Dedicated](/developerportal/deploy/mendix-cloud-deploy/)
    * [Mendix on Kubernetes Connected](/developerportal/deploy/private-cloud/)
    * [Private PDF Document Generation Service](/appstore/modules/document-generation/installation-configuration/#run-private-service)
    * [On-Premises](/developerportal/deploy/on-premises-design/)

    {{% alert color="info" %}}We only support apps that allow bi-directional communication with the PDF Service in Mendix Cloud for all deployment types except for on-premises, and for the [Private PDF Document Generation Service](/appstore/services/private-document-generation-service/).{{% /alert %}}
* The maximum file size is 25 MB per document. If your document exceeds this limit, the action will result in an exception. We recommend compressing high-resolution images to reduce their file size.
* If your app is configured to [restrict access for incoming requests](/developerportal/deploy/access-restrictions/) using client certificates, our cloud service will not be able to reach your app, and the module will not work properly.
* If your app uses a custom domain, you must configure a custom SSL/TLS domain certificate signed by a trusted public authority, including all intermediate certificates if applicable. Self-signed certificates will cause the service to fail. For more information, see [Obtaining a new signed certificate](/developerportal/deploy/custom-domains/#obtaining-a-new-signed-certificate).
* We use a fixed 30 second timeout for the page to finish loading and rendering. A timeout exception is thrown if the page content did not finish loading within 30 seconds.
* Widgets or add-ons for your `index.html` file that perform long polling network requests are not supported. The document generation service waits until there are no more pending network requests.
* Some widgets, such as [Charts](/appstore/widgets/charts/), might be rendered inconsistently in the generated PDF due to factors like animation.
* Complex documents (for example, large tables) may run into memory limitations, separate from the file size limitation. Try to reduce the number of widgets inside repeatable widgets as much as possible.
* We currently do not enforce strict rate limits. However, take into account the following guidelines:
    * Only set the `Wait for result` parameter to *true* for direct user actions. Do not set it to *true* for batch processing. Under heavy load, requests that wait for the result may fail due to strict timeout limitations.
    * Do not exceed 250 documents per day.
    * Do not exceed 5 documents per minute for actions that have the `Wait for result` parameter set to *true*. If your app requires more requests, consider setting the `Wait for result` parameter to *false*.
    * Contact support if these guidelines do not fit your specific use case.
* The `Generate PDF from page` microflow action does not support multiple page parameters.
* Objects that are created in microflows that contain the `Generate PDF from page` action are not available to use in your PDF document. This is also applicable for changes made to existing objects. The reason is that those changes are not persisted to the database until the whole microflow has finished. The document generation service will access your document in its own context, and therefore have no access to the non-persisted changes.
* Setting the microflow property **Apply entity access** to *Yes* does not have any effect on the `Generate PDF from page` action. Regardless of the **Apply entity access** setting, the action does not require *Create* or *Write* access rights for the `FileDocument` object that gets created.
* The `System.Owner` association is currently not set to the user which has run the microflow. Instead, the user that is configured for the `Generate as user` property of the `Generate PDF from page` action is used to set the association.
* For local development, we use the Chrome or Chromium executable that is available on the development machine. Even though we have not observed these yet, there might be minor differences in PDF output locally versus when using the cloud service.
* The access and refresh tokens used to secure requests to the cloud service are stored unencrypted in the app database. No user roles have read access to these tokens, and all communication with the cloud service is encrypted by requiring HTTPS. However, do consider this when sharing a backup of the database with other developers. We will introduce encryption at a later stage.
* If you have the [Application Performance Monitor (APM)](/appstore/partner-solutions/apd/) or [Application Performance Diagnostics (APD)](/appstore/partner-solutions/apd/) add-on enabled in your app, or the log level of the **Services** log node set to *Trace*, the PDF Document Generation module will not be able to generate documents when used in Mendix Cloud. This limitation is only applicable for apps built in Mendix 9.24.5 and below and Mendix 10.0.0.

## Architecture

### Overview

The Document Generation module uses the PDF document generation service running in the Mendix Public Platform to convert any regular web page in your app into a PDF document. The result is similar to what you would get when using the "Save as PDF" feature in the print dialog box of your browser.

When using **Run locally** in Studio Pro, a local service is used to run the headless browser next to your app. The service and browser run only at the moment of generating a document, and are terminated when the document is finished.

When running on Mendix Cloud, the PDF document generation service on Mendix Public Platform (EU instance) is used, which is developed and maintained by Mendix. The cloud service opens the page in a headless browser and sends the resulting PDF back to the module. The following diagram illustrates this process.

{{< figure src="/attachments/appstore/platform-supported-content/modules/document-generation/request-flow.png"  alt="architecture-overview-diagram" >}}

### Security

When deployed to Mendix Cloud, the cloud service uses the user which was provided in the `Generate as user` parameter to access the requested page. A short-lived security token is used to authenticate each request. The lifetime of this token can be configured using the constant `TokenLifetimeInSeconds`.

The architecture is set up to process every request in a fully isolated context. The cloud service creates a request-specific worker instance for every PDF that is generated and sends the result back to the runtime when finished. After this, the worker instance is destroyed.

The PDF document generation service does not store pages or documents at any time in the process.

### Dependencies

* [Combo Box](https://marketplace.mendix.com/link/component/219304) widget