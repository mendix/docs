---
title: "Deployment"
url: /developerportal/deploy/
weight: 10
description: "Deployment section of the Developer Portal Guide: How to deploy Mendix apps to different environments and how to manage those deployments."
weight: 5
no_list: false 
description_list: true
tags: ["Deploy","Manage", "Mendix Cloud", "IBM", "SAP", "Cloud Foundry", "Kubernetes", "On-premises", "Environment", "Mendix Cloud Dedicated"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/deploy.pdf).
{{% /alert %}}

## 1 Introduction

A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing. You can deploy to the Mendix cloud, which is the default location for both free and licensed apps. You can also deploy to IBM Cloud, SAP Business Technology (SAP BTP) Platform, Cloud Foundry-based platforms, Docker containers, Azure, or to a server you configured yourself.

{{% alert color="warning" %}}
* Each app can only be deployed to one type of target platform (for example Mendix Cloud nodes) in addition to local testing
* Some features which rely on the target platform can work differently depending on what is supported (for example in Cloud Foundry, Kubernetes, or Windows server)
    * If you want to use a particular feature, check that it is supported by your chosen target platform
{{% /alert %}}

This section of the *Developer Portal Guide* contains step-by-step instructions, and additional reference material, to help you to deploy and manage your Mendix apps in the cloud or on premises. It is split into a number of sections:

* [General](/developerportal/deploy/general/) – contains information which applies to deployments in many different environments
* Environment-specific sections – these contain instructions for the deployment and maintenance of apps in specific environments, for example, [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) and [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [Mobile App](/developerportal/deploy/mobileapp/) – contains instructions for publishing your mobile app: to the Apple or Google stores, for example
* [App Services](/developerportal/deploy/app-services/) – describes what can be published to the Mendix Marketplace, and how to do this

## 2 Run Locally or Preview

### 2.1 Studio Pro

In *Studio Pro*, you can click the play button (▶) in the toolbar to run your app locally. Use the **View** button to directly jump to see your app running in your browser at *localhost*.

### 2.2 Studio

In *Studio*, you can click **Preview** in the upper-right corner of Studio to see a preview of your app in the browser. 

For more information see [Previewing & Publishing Your App](/studio/publishing-app/).

## 3 Mendix Cloud

The Mendix Cloud is the default deployment option when you get started with the Mendix Platform. As an integrated solution, a licensed node on the Mendix Cloud includes multiple environments, backups, monitoring, high availability, and more.

From within Mendix Studio Pro, you can view the cloud nodes you have available in the Mendix Cloud. You can create a deployment package (MDA) in the Developer Portal and, from there, you can transport it and start running your application. 

For more information, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/).

### 3.1 Mendix Cloud Dedicated

Organizations can also have their own Mendix Cloud, named [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc). This works in exactly the same way as the Mendix Cloud, but runs on your own virtual private cloud and will only host your company's apps.

## 4 IBM Cloud

If you create your app from an IBM app template, or an IBM Starter Kit on IBM Cloud, then the Developer Portal will lead you through the creation of an environment on IBM Cloud. You can then deploy your app to your IBM environment directly from within Studio Pro.

For more information, see [IBM Cloud](/developerportal/deploy/ibm-cloud/).

## 5 SAP Business Technology Platform (SAP BTP)

If you create your app from an SAP app template, the Developer Portal will lead you through the creation of an environment on SAP BTP. You can then deploy your app to your SAP BTP environment directly from within Studio Pro.

For more information, see [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/).

## 6 Siemens MindSphere

You can deploy your app to MindSphere, the cloud-based, open IoT operating system from Siemens. Here you can leverage the information held within MindSphere and share your app with selected MindSphere tenants.

To find out how to do this, read [Siemens MindSphere](/developerportal/deploy/deploying-to-mindsphere/).

## 7 Private Cloud

Mendix for Private Cloud allows you to deploy and manage your Mendix apps in a Kubernetes private cloud cluster.

The instructions for doing this are in [Private Cloud](/developerportal/deploy/private-cloud/).

## 8 Cloud Foundry

From within Studio Pro, you can deploy directly to Cloud Foundry-based platforms. To get started, see [Cloud Foundry](/developerportal/deploy/cloud-foundry-deploy/) and the [Cloud Foundry Mendix Buildpack](https://github.com/mendix/cf-mendix-buildpack).

## 9 Docker & Kubernetes

Mendix can be deployed in a Docker container to provide highly scalable solutions and automated delivery pipelines (CI/CD).

Instructions for using the buildpack are described in [How to Build a Docker Image from a Mendix app](/developerportal/deploy/docker-deploy/). 

The Docker buildpack is available at [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack).

## 10 Azure

Deploying to Azure is possible from the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mendix.mendix-pro). 

## 11 On-Premises

To learn how to deploy your Mendix application on premises, see [How to Deploy Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) and [Unix-Like Deployment](/developerportal/deploy/unix-like/).

## 12 Mendix Applications on Industrial Edge

You can bring your Mendix app to Industrial Edge, the SIEMENS platform to host applications from different vendors on a computing platform close to the shop floor. Thus enables the extensions of automation, deployment of demanding streamprocessing and learning algorithms as well as the hosting from integration code to site automation.

To find out how to do this, read [Mendix Applications on Industrial Edge](/developerportal/deploy/mendix-app-on-industrial-edge/).

## 13 Documents in This Category
