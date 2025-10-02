---
title: "Behavior of Your App in Mendix Cloud"
linktitle: "Behavior of Your App"
url: /developerportal/deploy/behavior-of-app
weight: 90
description: "Describes the behaviors and limitations that apply to your app when running in Mendix Cloud."
---

## Introduction

Apps running in Mendix Cloud are subject to certain limitations. These behaviors are described in this document; keep the following considerations in mind.

## MDA Size Limit

* It is not possible to deploy a model (MDA file) that is larger than 1 GB when uncompressed.

## Other File Size Limits

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

* **Call REST** connections are eventually closed by the cloud infrastructure if left idle. This is because Mendix Cloud uses AWS NAT gateways for outgoing traffic, and these gateways drop connections that are idle for more than 350 seconds.
    * Mendix recommends [setting the timeout](/refguide/call-rest-action/#timeout) for calls to consumed REST or web services to less than 350. Set the timeout to a higher value only if you are sure that traffic will go back and forth at least every 350 seconds.
    * If you have a REST or web service call that will be idle (waiting) for 350 seconds or more, try to minimize the wait time. For example, you could make multiple requests for smaller amounts of data instead of a single request for a large amount of data, or you could make the call asynchronously.

* The Mendix Cloud web server replaces any custom `ReasonPhrase` on an HTTP response (returned by, for example, a published REST service) with a standard reason phrase. For example, for status code `200`, any custom `ReasonPhrase` that you set will be replaced by `OK`.

## Instance Restarts

* The platform automatically restarts application instances during routine platform updates, which can occur several times a week. If your application logs indicate a series of instance restarts for no apparent reason, the restarts are probably due to platform updates. This is normal and OK! The platform usually starts a new instance of your application before stopping the old one, thus ensuring that there is no downtime. You can verify this in your application logs.

## Instance Shutdown

* Mendix Cloud (running on Cloud Foundry or Kubernetes) enforces a strict shutdown timeout. When an application instance receives a stop or restart command, the container is shut down after approximately 10-12 seconds. If your `Before-Shutdown` microflow is configured for a longer duration, for example, 60 seconds, this platform timeout overrides that setting. Mendix recommends designing your `Before-Shutdown` microflows to complete their tasks well within this 10-12 second limit.

## WebSocket Connections

* Mendix Cloud supports long-running WebSocket connections. However, multiple network components are involved in the WebSocket connections between your Mendix Cloud application and the client. These components can time out or the networks can fail, causing connections to drop.
Therefore, do not assume that an established WebSocket connection will remain open indefinitely. To ensure connection stability and prevent unexpected disconnections:
    * Enable periodic keepalive checks (for example, every 25–30 seconds). This ensures the connection remains active and prevents Network Address Translators (NATs) and firewalls from dropping long-idle tunnels.
    * Implement robust reconnection logic to gracefully handle connectivity loss and automatically reestablish dropped connections.
