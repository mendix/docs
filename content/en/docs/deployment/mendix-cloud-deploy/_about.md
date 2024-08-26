---
title: "About Mendix Cloud"
url: /developerportal/deploy/mxcloudv4/
weight: 90
description: "Frequently asked questions about Mendix Cloud"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## What Is Mendix Cloud?

Mendix Cloud is where licensed Mendix apps are deployed to a scalable, enterprise-grade cloud platform.

Apps deployed to Mendix Cloud run in Cloud Foundry clusters that are deployed on highly available Amazon Web Services (AWS) regions. They can be deployed from Studio Pro and the Mendix Portal or via [Mendix APIs](/apidocs-mxsdk/apidocs/deploy-api/). Apps can run in many regions of the world.

## Where Is Data Hosted?{#cloud-data-regions}

The primary hosting locations are as follows:

* Mendix Cloud Africa: Cape Town
* Mendix Cloud Australia: Sydney
* Mendix Cloud Asia Pacific: Mumbai
* Mendix Cloud Asia Pacific: Singapore
* Mendix Cloud Asia Pacific: Tokyo
* Mendix Cloud Asia Pacific: Osaka
* Mendix Cloud Asia Pacific: Seoul
* Mendix Cloud Asia Pacific: Jakarta
* Mendix Cloud Canada: Central
* Mendix Cloud Europe: Ireland
* Mendix Cloud Europe: Frankfurt
* Mendix Cloud Middle East: Bahrain
* Mendix Cloud Middle East: UAE
* Mendix Cloud UK: London
* Mendix Cloud US East: North Virginia
* Mendix Cloud US West: Oregon
* Mendix Cloud South America: São Paulo

## Does Mendix Expose the Underlying Cloud Foundry API?

No, it does not. The Cloud Foundry API does not map one-to-one to Mendix's deployment options, authorization model, or cloud resource usage. However, deployment to Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).

## How Do You Access the Underlying AWS Resources? How Can You Deploy in Your AWS Account?

Mendix Cloud runs in Mendix's own AWS account; you cannot interact with the AWS APIs directly via Mendix credentials. Mendix does not offer [VPC peering](https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via Mendix APIs, such as the [Database API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) and [FileDocument API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#storeFileDocumentContent(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.io.InputStream)) in Runtime and the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) for cloud resources.

However, you can launch services on your own AWS account, in the same region to minimize latency. Then, you can access those services via connectors in your app.

## If There Is No Deployment in Your Desired AWS Region, When Will Mendix Launch There?

Mendix adds regions based on customer demand. If you would like a different region, contact your Mendix Customer Success Manager to see what Mendix can offer. Note that any request will need to take into account the costs of launching a complete Cloud Foundry cluster, with backup services, monitoring, etc. 

You can also consider running your Mendix app using your own AWS account, with control over your runtime environment. Mendix provides a streamlined way to deploy your apps in your own AWS account by using [Mendix for Amazon EKS](https://aws.amazon.com/solutions/partners/terraform-modules/mendix-eks/). If you do this, however, you will be responsible for the security and management of the AWS resources.
