---
title: "Mendix Cloud V4 - FAQ"
category: "Mendix Cloud"
tags: ["Cloud", "Mendix Cloud", "V4", "Version 4", "FAQ", "V3"]
---

## 1 What Is Mendix Cloud v4?

Mendix Cloud v4 is the latest version of the Mendix Cloud, where licensed Mendix apps are deployed to a scalable, enterprise-grade cloud platform.

V4 was launched in Q1 2017. As in v3, applications are deployed via the Mendix Developer Portal or our [APIs](/apidocs-mxsdk/apidocs/deploy-api). Unlike v3, the applications run on Cloud Foundry clusters that are deployed on highly available Amazon Web Services (AWS) regions. Apps can run in the EU, US, Japan, or the UK.

## 2 What Does the v4 Rollout Look Like, and What Is the Status of v3?

New apps will be launched on Mendix Cloud v4 by default. Customers that need to stay on v3 because they use a VPN can still get new apps on v3 for the foreseeable future. Mendix Cloud v3 will be supported for several more years; no end-of-support or end-of-life dates have been set yet.

If you want to move your app(s) from v3 to v4, you can find the instructions here: [Migrate to Mendix Cloud v4](migrating-to-v4).

## 3 Can I Upgrade All My Apps?

Your app needs to be on **Mendix 6.0 or higher**.

We also recommend that your apps are built as [12-factor apps](https://12factor.net/).

The main change will be for apps that use long-running scheduled events. Our recommendation is to split these into smaller chunks and use a queueing system like the Amazon SQS connector to spread the work out over multiple instances. 

## 4 Where Will My Data Be Hosted?

The primary hosting locations are as follows:

*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud US: AWS North Virginia
*   Mendix Cloud Asia Pacific: AWS Tokyo
*   Mendix Cloud UK: AWS London

Backups will always be stored in at least one external data center, separate from the primary hosting location.

Data will always be stored in the same political region for the following regions:

*   Data in the EU, including backups, will stay within the EU
*   Data in the US, including backups, will stay within the US

## 5 Does Mendix Expose the Underlying Cloud Foundry API?

No, we do not. The Cloud Foundry API does not map one-to-one to our deployment options, our authorization model, or our cloud resource usage. However, deployment to the Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api).

## 6 How Do I Access the Underlying AWS Resources, and How Can You Deploy in My AWS account?

Mendix Cloud v4 runs in Mendix's own AWS account, and you can not interact with the AWS APIs directly via our credentials. We do not offer [VPC peering](http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via our APIs, such as the [Database API](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#retrieveXPathQuery-com.mendix.systemwideinterfaces.core.IContext-java.lang.String-) and [FileDocument API](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#storeFileDocumentContent-com.mendix.systemwideinterfaces.core.IContext-com.mendix.systemwideinterfaces.core.IMendixObject-java.io.InputStream-) in Runtime, and the cloud resources via the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api).

However, you can launch services on your own AWS account in the same region to minimize latency, and you can access those services from connectors in your app. The [AWS IoT Connector](https://appstore.home.mendix.com/link/app/2868/Mendix/AWS-IoT-Connector) from the Mendix App Store is a good example.

## 7 There Is No Deployment in My Desired AWS Region, When Will Mendix Launch There?

We add regions based on customer demand. If you would like a different region, contact your Mendix Customer Success Manager to see what we can offer. Note that we any request will need to take into account the costs of launching a complete Cloud Foundry cluster, with backup services, monitoring, etc. 

You can also consider running your Mendix app using your own AWS account in a different AWS region. You can do this using Docker, and there are some documents on how to do this here: [Docker](/deployment/docker). If you co this, however, you will not receive all the benefits of running in the Mendix Cloud.

## 8 What Are the Limitations?

There is no mail server included in Mendix Cloud v4. You can use a third-party email provider instead. For more information, see [Sending Email](sending-email).

A VPN (which is already deprecated in favor of client certificates) will not be possible in Mendix Cloud v4. For alternatives, see [Securing Outgoing Connections from Your Application](securing-outgoing-connections-from-your-application).

## 9 Differences Between Mendix Cloud Versions

These are the differences between Mendix Cloud v3 and Mendix Cloud v4:

* In Cloud v4, the debugger is always active, and the button shows the credentials to connect the Desktop Modeler to it
* The Java security manager is no longer in place
    * The Java security manager is used in v3 to enforce standardization and to act as an additional security layer
    * In Cloud Foundry, short-lived containers already ensure standardization, and apps are completely isolated from the management network; therefore, the Java security manager will not be enabled on the new environment
* The number of permitted database connections is no longer static, but tied to the RAM of the database environment. The limit is roughly 100 connections per GB of database RAM. You can use the Mendix Runtime settings **ConnectionPoolingMaxActive** and **ConnectionPoolingMaxIdle** to tweak the number of database connections that the Mendix Runtime will set up. The defaults are perfectly fine for most situations. Keep in mind that the setting is applied per runtime instance, so the configured number is multiplied by the number of instances.

## 10 Missing in Mendix Cloud v4

There are some features missing in v4. Mendix will implement the following features in the future:

* File storage usage is not visible
* Application CPU alerts are not sent
* Archived logs can only be downloaded, not viewed in the browser
* The database status is not visible on the node details screen

## 11 Known Issues in Mendix Cloud v4

* The Amazon RDS maintenance window is not aligned with the CP maintenance window for an application
* To use the debugger, you need to scale down to one instance
* Custom error pages for 404 and 403 are not functional
* Metrics for multi-instance nodes are not reported correctly. The information reported on the app's **Metrics** and **Alerts** pages only represents once instance of a multi-instance node.

## 12 Related Content

* [How to Migrate to Mendix Cloud v4](/deployment/mendixcloud/migrating-to-v4)
