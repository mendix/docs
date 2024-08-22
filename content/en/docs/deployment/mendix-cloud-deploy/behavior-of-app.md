---
title: "Behavior of Your App in Mendix Cloud"
linktitle: "Behavior of Your App"
url: /developerportal/deploy/behavior-of-app
weight: 90
description: "Describes the behaviors and limitations that apply to your app when running in Mendix Cloud."
---

## Introduction

Apps running in Mendix Cloud are subject to certain limitations. These behaviors are described in this document; keep the following considerations in mind.

## MDA Size Limits

* It is not possible to deploy a model (MDA file) that is larger than 1 GB when uncompressed or that contains more than about 64,000 files.
* You cannot upload files bigger than 1 GB to your app.
* You cannot download files bigger than 1 GB from your app.

## Considerations for Multi-Instance Nodes

* To use the debugger, you need to scale down to one instance.
* Metrics for multi-instance nodes are not reported correctly. The information reported on the app's **Metrics** and **Alerts** pages represents only one instance of a multi-instance node.

## File Connections Limitations

* In some circumstances, your app can run out of file connections. This is indicated by the following entry in the logfile:

    ```
    com.amazonaws.http.AmazonHttpClient executeHelper Unable to execute HTTP request: Timeout waiting for connection from pool
    ```

    To resolve this, do the following:
    * Update all Marketplace modules to the latest version. Older versions may not close file connections correctly.
    * Increase the number of available file connections (the default is 50) by adding the **com.mendix.storage.s3.MaxConnections** setting in the environment's Custom Runtime Settings. You can access this by going to the **Runtime** tab on the [Environment Details](/developerportal/deploy/environments-details/) page. For more information, see the [S3 Storage Service Settings](/refguide/custom-settings/#amazon-s3-storage-service-settings) section of the *Runtime Customization* page.

## HTTP Headers, Responses, and REST Connections

* Due to the behavior of one of the Cloud Foundry routing components, HTTP headers sent to Mendix Cloud do not always preserve their case. For example, `X-SharedSecret` may be transformed to `X-Sharedsecret`. This has no practical effect because HTTP headers are defined as case insensitive.
* **Call REST** connections are eventually closed by the cloud infrastructure if left idle. This is because Mendix Cloud uses AWS NAT gateways for outgoing traffic, and these gateways drop connections that are idle for more than 350 seconds.
    * Mendix recommends [setting the timeout](/refguide/call-rest-action/#timeout) for calls to consumed REST or web services to less than 350. Set the timeout to a higher value only if you are sure that traffic will go back and forth at least every 350 seconds.
    * If you have a REST or web service call that will be idle (waiting) for 350 seconds or more, try to minimize the wait time. For example, you could make multiple requests for smaller amounts of data instead of a single request for a large amount of data, or you could make the call asynchronously.

* The Mendix Cloud web server replaces any custom `ReasonPhrase` on an HTTP response (returned by, for example, a published REST service) with a standard reason phrase. For example, for status code `200`, any custom `ReasonPhrase` that you set will be replaced by `OK`.

## Instance Restarts

* The platform automatically restarts application instances during routine platform updates, which can occur several times a week. If your application logs indicate a series of instance restarts for no apparent reason, the restarts are probably due to platform updates. This is normal and OK! The platform usually starts a new instance of your application before stopping the old one, thus ensuring that there is no downtime. You can verify this in your application logs.
