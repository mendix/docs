---
title: "About Mendix Cloud"
url: /developerportal/deploy/mxcloudv4/
weight: 1
description: "Frequently asked questions about Mendix Cloud"
tags: ["Cloud", "Mendix Cloud", "FAQ", "AWS", "Amazon Web Services", "Max file size"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 What Is Mendix Cloud?

Mendix Cloud is where licensed Mendix apps are deployed to a scalable, enterprise-grade cloud platform.

Apps deployed to Mendix Cloud run in Cloud Foundry clusters that are deployed on highly available Amazon Web Services (AWS) regions. They can be deployed from Studio Pro and the Mendix Developer Portal or via [Mendix APIs](/apidocs-mxsdk/apidocs/deploy-api/). Apps can run in many regions of the world.

## 2 Where Is Data Hosted?{#cloud-data-regions}

The primary hosting locations are as follows:

* Mendix Cloud Africa: AWS Cape Town
* Mendix Cloud Asia Pacific: AWS Mumbai
* Mendix Cloud Asia Pacific: AWS Singapore
* Mendix Cloud Asia Pacific: AWS Sydney
* Mendix Cloud Asia Pacific: AWS Tokyo
* Mendix Cloud Canada: AWS Canada
* Mendix Cloud EU: AWS Dublin
* Mendix Cloud EU: AWS Frankfurt
* Mendix Cloud Middle East: AWS Bahrain
* Mendix Cloud Middle East: AWS UAE
* Mendix Cloud UK: AWS London
* Mendix Cloud US: AWS North Virginia
* Mendix Cloud US: AWS Oregon
* Mendix Cloud SA: AWS São Paulo

Backups are always stored in at least one secondary location, separate from the primary hosting location. Each individual backup is immutable; in other words, once it has been written to Mendix's storage location, it can no longer be modified or overwritten.

For some regions, data is always stored in the same political region. This applies to the following regions:

* Data in the EU, including backups, stays within the EU
    * Data in the EU is not currently backed up in the UK
    * Data in the UK is backed up in the EU
* Data in the US, including backups, stays within the US
* Data in Japan is backed up in Japan

## 3 Does Mendix Expose the Underlying Cloud Foundry API?

No, it does not. The Cloud Foundry API does not map one-to-one to Mendix's deployment options, authorization model, or cloud resource usage. However, deployment to Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).

## 4 How Do You Access the Underlying AWS Resources? How Can You Deploy in Your AWS Account?

Mendix Cloud runs in Mendix's own AWS account; you cannot interact with the AWS APIs directly via Mendix credentials. Mendix does not offer [VPC peering](http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via Mendix APIs, such as the [Database API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) and [FileDocument API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#storeFileDocumentContent(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.io.InputStream)) in Runtime and the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) for cloud resources.

However, you can launch services on your own AWS account, in the same region to minimize latency. Then, you can access those services via connectors in your app.

## 5 If There Is No Deployment in Your Desired AWS Region, When Will Mendix Launch There?

Mendix adds regions based on customer demand. If you would like a different region, contact your Mendix Customer Success Manager to see what Mendix can offer. Note that any request will need to take into account the costs of launching a complete Cloud Foundry cluster, with backup services, monitoring, etc. 

You can also consider running your Mendix app using your own AWS account, with control over your runtime environment. Mendix provides a streamlined way to deploy your apps in your own AWS account by using [Mendix for Amazon EKS](https://aws.amazon.com/solutions/partners/terraform-modules/mendix-eks/). If you do this, however, you will be responsible for the security and management of the AWS resources.

## 6 Behavior of Your App in Mendix Cloud{#other-considerations}

There are certain limits and behaviors that apply to your app when running in Mendix Cloud. Keep the following considerations in mind:

* The Amazon RDS maintenance window is not aligned with the Mendix Developer Portal maintenance window for an application.
* It is not possible to deploy a model (MDA file) that is larger than 1 GB when uncompressed or that contains more than about 64,000 files.
* You cannot upload files bigger than 1 GB to your app.
* You cannot download files bigger than 1 GB from your app.
* To use the debugger, you need to scale down to one instance.
* Metrics for multi-instance nodes are not reported correctly. The information reported on the app's **Metrics** and **Alerts** pages represents only one instance of a multi-instance node.
* Due to the behavior of one of the Cloud Foundry routing components, HTTP headers sent to Mendix Cloud do not always preserve their case. For example, `X-SharedSecret` may be transformed to `X-Sharedsecret`. This has no practical effect because HTTP headers are defined as case insensitive.
* In some circumstances, your app can run out of file connections. This is indicated by the following entry in the logfile:

    ```
    com.amazonaws.http.AmazonHttpClient executeHelper Unable to execute HTTP request: Timeout waiting for connection from pool
    ```

    To resolve this, do the following:
    * Update all Marketplace modules to the latest version. Older versions may not close file connections correctly.
    * Increase the number of available file connections (the default is 50) by adding the **com.mendix.storage.s3.MaxConnections** setting in the environment's Custom Runtime Settings. You can access this by going to the **Runtime** tab on the [Environment Details](/developerportal/deploy/environments-details/) page. For more information, see the [S3 Storage Service Settings](/refguide/custom-settings/#amazon-s3-storage-service-settings) section of the *Runtime Customization* page.
* **Call REST** connections are eventually closed by the cloud infrastructure if left idle. This is because Mendix Cloud uses AWS NAT gateways for outgoing traffic, and these gateways drop connections that are idle for more than 350 seconds.
    * Mendix recommends [setting the timeout](/refguide/call-rest-action/#timeout) for calls to consumed REST or web services to less than 350. Set the timeout to a higher value only if you are sure that traffic will go back and forth at least every 350 seconds.
    * If you have a REST or web service call that will be idle (waiting) for 350 seconds or more, try to minimize the wait time. For example, you could make multiple requests for smaller amounts of data instead of a single request for a large amount of data, or you could make the call asynchronously.

* The platform automatically restarts application instances during routine platform updates, which can occur several times a week. If your application logs indicate a series of instance restarts for no apparent reason, the restarts are probably due to platform updates. This is normal and OK! The platform usually starts a new instance of your application before stopping the old one, thus ensuring that there is no downtime. You can verify this in your application logs.
* The Mendix Cloud web server replaces any custom `ReasonPhrase` on an HTTP response (returned by, for example, a published REST service) with a standard reason phrase. For example, for status code `200`, any custom `ReasonPhrase` that you set will be replaced by `OK`.
