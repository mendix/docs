---
title: "Mendix Cloud v4"
url: /developerportal/deploy/mxcloudv4/
weight: 50
description: "Frequently asked questions about Mendix Cloud v4"
tags: ["Cloud", "Mendix Cloud", "v4", "Version 4", "FAQ", "v3", "AWS", "Amazon Web Services", "Max file size"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 What Is Mendix Cloud v4?

Mendix Cloud v4 is the current version of the Mendix Cloud: where licensed Mendix apps are deployed to a scalable, enterprise-grade cloud platform.

Apps deployed to v4 run in Cloud Foundry clusters that are deployed on highly available Amazon Web Services (AWS) regions. They can be deployed from Studio Pro and the Mendix Developer Portal or via our [APIs](/apidocs-mxsdk/apidocs/deploy-api/). Apps can run in the EU, US, Japan, or the UK.

Mendix Cloud v4 is a mature product, launched in Q1 2017, and has a number of improvements over previous versions of Mendix Cloud:

* It is more secure as you can use [HTTP Headers](/developerportal/deploy/environments-details/#http-headers) and [client certificates](/developerportal/deploy/certificates/), and have [TLS v1.2 or higher enforced](/releasenotes/developer-portal/mendix-cloud/#tls)
* It runs on faster hardware
* It is still being actively developed and improved, with new features regularly being introduced (for example [flexible environments](/developerportal/deploy/mendix-cloud-deploy/#flexible-environments))
* It uses industry-standard techniques for scalability and maintainability
* It supports all current versions of Mendix, including Mendix version 8
* It has improved monitoring features, including using external monitoring tools

## 2 Can I Upgrade All My Apps?

If you are currently using the deprecated Mendix Cloud v3, you can to move your app(s) from v3 to v4 using the the instructions in [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4/).

The most important thing is that your app needs to be on a supported version of Mendix, that is **Mendix version 7.0 or above**.

For other considerations, refer to [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4/).

## 3 Where Will My Data Be Hosted?

The primary hosting locations are as follows:

*   Mendix Cloud Asia Pacific: AWS Singapore
*   Mendix Cloud Asia Pacific: AWS Sydney
*   Mendix Cloud Asia Pacific: AWS Tokyo
*   Mendix Cloud Canada: AWS Canada
*   Mendix Cloud EU: AWS Dublin
*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud UK: AWS London
*   Mendix Cloud US: AWS North Virginia
*   Mendix Cloud US: AWS Oregon

Backups will always be stored in at least one secondary location, separate from the primary hosting location. Each individual backup is immutable, i.e. once it has been written to our storage location, it can no longer be modified or overwritten.

Data will always be stored in the same political region for the following regions:

*   Data in the EU, including backups, will stay within the EU
    * Data in the EU is not currently backed up in the UK
    * Data in the UK is backed up in the EU
*   Data in the US, including backups, will stay within the US

Data in Japan is currently backed up in Japan.

## 4 Does Mendix Expose the Underlying Cloud Foundry API?

No, we do not. The Cloud Foundry API does not map one-to-one to our deployment options, our authorization model, or our cloud resource usage. However, deployment to the Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).

## 5 How Do I Access the Underlying AWS Resources & How Can I Deploy in My AWS account?

Mendix Cloud v4 runs in Mendix's own AWS account and you cannot interact with the AWS APIs directly via our credentials. We do not offer [VPC peering](http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via our APIs, such as the [Database API](https://apidocs.rnd.mendix.com/7/runtime/com/mendix/core/Core.html#retrieveXPathQuery-com.mendix.systemwideinterfaces.core.IContext-java.lang.String-) and [FileDocument API](https://apidocs.rnd.mendix.com/7/runtime/com/mendix/core/Core.html#storeFileDocumentContent-com.mendix.systemwideinterfaces.core.IContext-com.mendix.systemwideinterfaces.core.IMendixObject-java.io.InputStream-) in Runtime, and the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) for cloud resources.

You can, however, launch services on your own AWS account, in the same region to minimize latency, and you can access those services via connectors in your app. The [AWS IoT](/appstore/connectors/aws-iot/) connector from the Mendix Marketplace is a good example.

## 6 There Is No Deployment in My Desired AWS Region, When Will Mendix Launch There?

We add regions based on customer demand. If you would like a different region, contact your Mendix Customer Success Manager to see what we can offer. Note that we any request will need to take into account the costs of launching a complete Cloud Foundry cluster, with backup services, monitoring, etc. 

You can also consider running your Mendix app using your own AWS account in a different AWS region. You can do this using Docker, and there is information on how to do this in the [Docker](/developerportal/deploy/docker-deploy/) documentation. If you do this, however, you will not receive all the benefits of running in the Mendix Cloud.

## 7 Behavior of My App in Mendix Cloud v4?{#other-considerations}

There are certain limits and behaviors which apply to your app when running in Mendix Cloud v4. Here are a few considerations to bear in mind:

* The Amazon RDS maintenance window is not aligned with the Mendix Developer Portal maintenance window for an application
* It is not possible to deploy a model (*.mda*) larger than 4GB when uncompressed or a model that contains approximately 64,000 or more files
* You can't upload files bigger than 1GB to your app
* You can't download files bigger than 1GB from your app
* To use the debugger, you need to scale down to one instance
* Metrics for multi-instance nodes are not reported correctly – the information reported on the app's **Metrics** and **Alerts** pages only represents one instance of a multi-instance node
* HTTP headers sent to the Mendix cloud do not always preserve their case (for example `X-SharedSecret` can be transformed to `X-Sharedsecret`) due to the behavior of one of the Cloud Foundry routing components – this has no practical effect as HTTP headers are defined as case insensitive
* In some circumstances your app can run out of file connections as indicated by the following entry in the logfile: *com.amazonaws.http.AmazonHttpClient executeHelper Unable to execute HTTP request: Timeout waiting for connection from pool* — to resolve this:
    * Update all Marketplace modules to the latest version – older versions may not close file connections correctly
    * If using Mendix 7, upgrade to version 7.16 or above
    * Increase the number of available file connections (default is 50) by adding the *com.mendix.storage.s3.MaxConnections* setting on the **Environments > Runtime > Custom Runtime Settings** in the Developer Portal – see [Customization – Amazon S3 Storage Service Settings](/refguide/custom-settings/#amazon-s3-storage-service-settings) for more information
* **Call REST** connections will be closed by the cloud infrastructure after a time if they are idle.
    * Mendix Cloud uses AWS NAT gateways for outgoing traffic. These gateways will drop connections that are idle for more than 350 seconds. This can result in your outgoing REST or web service connection getting dropped if there is no traffic for 350 seconds.
    
        It is therefore recommend to [set the timeout for calls to consumed REST or web services](/refguide/call-rest-action/#timeout) to less than 350. You should only set it to a higher value if you are sure that traffic will go back and forth at least every 350 seconds.
        
        If you have a REST or web service call that will be idle (waiting) for 350 seconds or more, you should try to minimize the wait time, for example by making multiple requests for smaller amounts of data instead of a single request for a large amount of data, or to make the call asynchronously.
* The platform automatically restarts application instances due to routine platform updates, which can be up to several times a week. If you review logs for an app that is functioning normally and you see recent messages about a series of instance restarts for no apparent reason, platform updates are probably the reason. This is normal and ok!

    In the majority of cases, the platform will start a new instance of your application, before gracefully stopping the old one. This ensures that there is no downtime. You can verify this in the logs of your application.
    
    If you want a second layer of assurance that you will not have downtime in this situation, we advise you to use Mendix 7, or above, and to scale your application to multiple instances.

## 8 Read More

* [Migrate to Mendix Cloud v4](/developerportal/deploy/migrating-to-v4/)
