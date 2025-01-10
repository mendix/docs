---
title: "Deploying Apps"
linktitle: "Deployment"
url: /deployment/
description: "Describes how to deploy Mendix apps to different environments and how to manage those deployments."
weight: 32
no_list: false 
description_list: true
cascade:
  - content_type: "Deployment"
  - mendix_version: 10
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

There are multiple ways to deploy a Mendix application. You can deploy to your local machine for development and testing. You can deploy to Mendix Cloud, which is the default location for both free and licensed apps. You can also deploy to SAP Business Technology (SAP BTP) Platform, Cloud Foundry-based platforms, Docker containers, Azure, or to a server you configured yourself.

{{% alert color="warning" %}}
Each app can only be deployed to one type of target platform (such as Mendix Cloud nodes) in addition to local testing.
{{% /alert %}}

{{% alert color="warning" %}}
Some features that rely on the target platform can work differently depending on what is supported (for example, in Cloud Foundry, Kubernetes, or Windows server). If you want to use a particular feature, confirm that it is supported by your chosen target platform.
{{% /alert %}}

This documentation category contains step-by-step instructions and additional reference material to help you deploy and manage your Mendix apps in the cloud or on premises. It is split into sections:

* [General](/developerportal/deploy/general/) – contains information which applies to deployments in many different environments
* Environment-specific sections – these contain instructions for the deployment and maintenance of apps in specific environments, such as [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) and [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/)
* [Mobile App](/developerportal/deploy/mobileapp/) – contains instructions for publishing your mobile app (to the Apple or Google stores, for example)

## Run Locally or Preview

In Studio Pro, you can click **Run Locally** ({{% icon name="controls-play-filled" %}}) in the toolbar to run your app locally. Use the **View App** button to directly jump to see your app running in your browser at *localhost*.

To speed up the development process, most changes you make within Studio Pro use "Instant Update" and are reflected immediately in the locally running app. However, some changes (such as changes to the domain model) are not reflected until the whole app is restarted.

## Mendix Cloud {#mendix-cloud}

Mendix Cloud is the default deployment option when you get started with the Mendix Platform. As an integrated solution, a licensed node on Mendix Cloud includes multiple environments, backups, monitoring, and high availability.

From within Mendix Studio Pro, you can view the cloud nodes you have available in Mendix Cloud. You can create a deployment package (MDA) in the Mendix Portal; from there, you can transport it and start running your application. 

For more information, see [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) and [Deploying an App to Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/deploying-an-app/).

### Mendix Cloud Dedicated {#mendix-cloud-dedicated}

Organizations can also have their own Mendix Cloud, named [Mendix Cloud Dedicated](https://www.mendix.com/evaluation-guide/app-lifecycle/mendix-cloud-overview/#mendix-cloud-vpc). This functions just like Mendix Cloud—the difference is that the cluster on which the apps run is not shared with any other customers. Only your own organization's apps run on this cluster. You can also have direct access to your other system over your network.

## SAP Business Technology Platform (SAP BTP)

If you create your app from an SAP app template, the Mendix Portal will lead you through the creation of an environment on SAP BTP. You can then deploy your app to your SAP BTP environment directly from within Studio Pro.

For more information, see [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/).

## Siemens Insights Hub

You can deploy your app to Insights Hub, the cloud-based, open IoT operating system from Siemens. Here, you can leverage the information held within Insights Hub and share your app with selected Insights Hub tenants.

To find out how to do this, read [Siemens Insights Hub](/developerportal/deploy/deploying-to-mindsphere/).

## Private Cloud

Mendix for Private Cloud allows you to deploy and manage your Mendix apps in a Kubernetes private cloud cluster.

The instructions for doing this are in [Private Cloud](/developerportal/deploy/private-cloud/).

## Cloud Foundry

From within Studio Pro, you can deploy directly to Cloud Foundry-based platforms. To get started, see [Cloud Foundry](/developerportal/deploy/cloud-foundry-deploy/) and the [Cloud Foundry Mendix Buildpack](https://github.com/mendix/cf-mendix-buildpack).

## Docker and Kubernetes

Mendix can be deployed in a Docker container to provide highly scalable solutions and automated delivery pipelines (CI/CD).

Instructions for using the buildpack are in [How to Build a Docker Image from a Mendix App](/developerportal/deploy/docker-deploy/). 

The Docker buildpack is available at [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack).

## Azure

Deploying to Azure is possible from the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mendix.mendix-pro).

## On-Premises

To learn how to deploy your Mendix application on premises, see [How to Deploy Mendix on Microsoft Windows](/developerportal/deploy/deploy-mendix-on-microsoft-windows/) and [Unix-Like Deployment](/developerportal/deploy/unix-like/).

## Mendix Applications on Industrial Edge

You can bring your Mendix app to Industrial Edge, which is the Siemens platform to host applications from different vendors on a computing platform close to the shop floor. This enables the extensions of automation, deployment of demanding stream processing and learning algorithms, as well as the hosting from integration code to site automation.

For information about how to do this, see [Mendix Applications on Industrial Edge](/developerportal/deploy/mendix-app-on-industrial-edge/).

## Documents in This Category
