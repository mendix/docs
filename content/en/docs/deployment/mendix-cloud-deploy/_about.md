---
title: "About Mendix Cloud"
url: /developerportal/deploy/mxcloudv4/
weight: 90
description: "Frequently asked questions about Mendix Cloud"
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## What Is Mendix Cloud?

Mendix Cloud is where licensed Mendix applications are deployed to a scalable, enterprise-grade cloud platform.

Apps deployed to Mendix Cloud run in Kubernetes clusters that are hosted on highly available Amazon Web Services (AWS) regions. You can deploy apps from Mendix Studio Pro, Mendix Portal, or via [Mendix APIs](/apidocs-mxsdk/apidocs/deploy-api/), and run them across many regions of the world.

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

## Does Mendix Expose the Underlying Container Platform API?

No, it does not. The container platform APIs do not map one-to-one to Mendix's deployment options, authorization model, or cloud resource usage. However, deployment to Mendix Cloud can be automated using the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/).

## How Do You Access the Underlying AWS Resources?

Mendix Cloud runs in Mendix's own AWS account; you cannot interact with the AWS APIs directly via Mendix credentials. Mendix Cloud does not offer [VPC peering](https://docs.aws.amazon.com/AmazonVPC/latest/PeeringGuide/Welcome.html) or VPC connections. All access to Mendix-hosted AWS resources (such as EC2, RDS, and S3) is done via Mendix APIs, such as the [Database API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#createXPathQuery(java.lang.String)) and [FileDocument API](https://apidocs.rnd.mendix.com/10/runtime/com/mendix/core/Core.html#storeFileDocumentContent(com.mendix.systemwideinterfaces.core.IContext,com.mendix.systemwideinterfaces.core.IMendixObject,java.io.InputStream)) in Runtime and the [Deploy API](/apidocs-mxsdk/apidocs/deploy-api/) for cloud resources.

If you need access to the underlying AWS services, you can choose to deploy your Mendix app to your own AWS account.

## How Can You Deploy to Your AWS Account?

Mendix provides an efficient way for deploying apps directly to your own AWS account by using [Mendix for Amazon EKS](https://aws.amazon.com/solutions/partners/terraform-modules/mendix-eks/). Running your Mendix application within your AWS environment grants you full control over the runtime environment and reduces latency when you deploy to the same region as your users. It also allows you to access AWS services directly through connectors in your app.

Keep in mind that when you deploy to your own AWS account, you are responsible for securing and managing the associated AWS resources.

## If There Is No Deployment in Your Desired AWS Region, When Will Mendix Launch There?

Mendix adds regions based on customer demand. If you would like a different region, contact your Mendix Customer Success Manager to see what Mendix can offer. All request will need to take into account the costs of launching a complete Mendix Cloud cluster, with backup services, monitoring, etc. 
