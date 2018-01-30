---
title: "Mendix Cloud V4 - FAQ"
category: "Mendix Cloud"
---

## 1 What Is Mendix Cloud v4?

Mendix Cloud v4 is the latest and greatest edition of the Mendix Cloud, our low-code, enterprise-grade cloud platform. V4 was launched in Q1 2017. As in v3, applications are deployed via the Mendix Developer Portal or our [APIs](/apidocs-mxsdk/apidocs/deploy-api). Unlike v3, the applications run on Cloud Foundry clusters that are deployed highly available on AWS regions. Apps can run in either the EU, US, or Japan. We offer Mendix Cloud v4 resources at a low margin, as we want our customers to focus on building apps and adding business value while not having to worry about cloud costs.

## 2 What Does the v4 Rollout Look Like, and What Is the Status of v3?

New apps will be launched on Mendix Cloud v4 by default. Customers that need to stay on v3 because they use a VPN can still get new apps on v3 for the foreseeable future. Mendix Cloud v3 will be supported for several more years; no end-of-support or end-of-life dates have been set yet. Customers that want to move their app(s) from v3 to v4 can request a migration via a support ticket (see [Mendix Support](https://support.mendix.com)).

## 3 Can I Upgrade All My Apps?

Your app needs to be on **Mendix 6.0 or higher**.

We also recommend that your apps are built as [12-factor apps](https://12factor.net/).

The main change will be for apps that use long-running scheduled events. Our recommendation is to split these into smaller chunks and use a queueing system like the Amazon SQS connector to spread the work out over multiple instances. 

## 4 Where Will My Data Be Hosted?

The primary hosting locations are as follows:

*   Mendix Cloud EU: AWS Frankfurt
*   Mendix Cloud US: AWS North Virginia
*   Mendix Cloud Asia Pacific: AWS Tokyo

Backups will always be stored in at least one external data center, separate from the primary hosting location.

Data will always be stored in the same political region for the following regions:

*   Data in the EU, including backups, will stay within the EU
*   Data in the US, including backups, will stay within the US


## 5 Does Mendix Expose the Underlying Cloud Foundry API?

No, we do not. The Cloud Foundry API does not map one-to-one to our deployment options, our authorization model, or our cloud resource usage. However, deployment on the Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api).

## 6 How Do I Access the Underlying AWS Resources, and How Can You Deploy in My AWS account?

Mendix Cloud v4 runs in Mendix's own AWS account, and you can not interact with the AWS APIs directly via our credentials. We do not offer [VPC peering](http://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via our APIs, such as the [Database API](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#retrieveXPathQuery-com.mendix.systemwideinterfaces.core.IContext-java.lang.String-) and [FileDocument API](https://apidocs.mendix.com/7/runtime/com/mendix/core/Core.html#storeFileDocumentContent-com.mendix.systemwideinterfaces.core.IContext-com.mendix.systemwideinterfaces.core.IMendixObject-java.io.InputStream-) in Runtime, and the cloud resources via the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api).

However, you can launch services on your own AWS account in the same region to minimize latency, and you can access those services from connectors in your app. The [AWS IoT Connector](https://appstore.home.mendix.com/link/app/2868/Mendix/AWS-IoT-Connector) from the Mendix App Store is a good example.

## 7 There Is No Deployment in My Desired AWS Region, When Will Mendix Launch There?

We add regions based on customer demand. There is a substantial base cost, as we launch a complete Cloud Foundry cluster, backup services, monitoring, etc. If you would like a different region, contact your Mendix Customer Success Manager to see what we can offer.

If you want to run a Mendix app in a different AWS region, you can consider using our [AMIs from the AWS Marketplace](https://aws.amazon.com/marketplace/search/results?x=0&y=0&searchTerms=mendix&page=1&ref_=nav_search_box). You can also use our [Docker deployment](https://github.com/mendix/docker-mendix-buildpack) to run your app anywhere. These deployments run in your own AWS account, and they are not part of the Mendix Cloud.

## 8 What Are the Limitations?

There is no mail server included in Mendix Cloud v4. You can use a third-party email provider instead. For more information, see [Sending Email](/deployment/mendixcloud/sending-email).

A VPN (which is already deprecated in favor of client certificates) will not be possible in Mendix Cloud v4. For alternatives, see [Securing Outgoing Connections from Your Application](/deployment/mendixcloud/securing-outgoing-connections-from-your-application).

## 9 Differences Between Mendix Cloud Versions

These are the differences between Mendix Cloud v3 and Mendix Cloud v4:

* The order of the download archive buttons differs between v3 and v4
* Upload buttons in v3/v4 are called **Upload Data**/**Upload Archive**
* In Cloud v4, the debugger is always active, and the button shows the credentials to connect the Desktop Modeler to it
* The Java security manager is no longer in place
    * The Java security manager is used in v3 to enforce standardization and to act as an additional security layer
    * In Cloud Foundry, short-lived containers already ensure standardization, and apps are completely isolated from the management network; therefore, the Java security manager will not be enabled on the new environment
* The number of permitted database connections is no longer static, but tied to the RAM of the database environment. The limit is roughly 100 connections per GB of database RAM. You can use the Mendix Runtime settings **ConnectionPoolingMaxActive** and **ConnectionPoolingMaxIdle** to tweak the number of database connections that the Mendix Runtime will set up. The defaults are perfectly fine for most situations. Keep in mind that the setting is applied per runtime instance, so the configured number is multiplied by the number of instances.

## 10 Missing in Mendix Cloud v4

There are some features missing in v4. Mendix will implement the following features in the near future:

* Using client certificates for access restriction profiles is not available; for outgoing connections, client certificates are available
* File storage usage only shows the number of files, not the amount of used storage
* Application CPU alerts are not sent
* Archived logs can only be downloaded, not viewed in the browser
* The database status is not visible on the node details screen

## 11 Known Issues in Mendix Cloud v4

* Upload archive only supports archives of a maximum of 4 GB
* The Amazon RDS maintenance window is not aligned with the CP maintenance window for an application
* To use the debugger, you need to scale down to one instance
* In Mendix Cloud v4, instances of your application are spread out over multiple availability zones (AZs), while your database is only active in one AZ at a time (but it can fail over to another AZ)
    * The result of this is that your instance and the database are not always in the same AZ, which can cause performance differences that are especially noticable in microflows that have lots of small database queries/updates (as such actions are latency sensitive)
    * You can notice varying response times when you are scaling to more than one Runtime instance and your app is restarted, as it can then end up in a different AZ
    * Our recommendation is to optimize the application logic to use fewer but larger queries

## 12 Related Content

* [How to Migrate to Mendix Cloud v4](/deployment/mendixcloud/migrating-to-v4)
