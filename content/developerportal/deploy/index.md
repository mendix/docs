---
title: "Deployment"
description: "Deployment section of the Developer Portal Guide: How to deploy Mendix apps to different environments and how to manage those deployments."
tags: ["Deploy","Manage", "Mendix Cloud", "IBM", "SAP", "Cloud Foundry", "Kubernetes", "On-premises", "Environment"]
---

## 1 Introduction

A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing. You can deploy to the Mendix cloud, which is the default location for both free and licensed apps. You can also deploy to IBM Cloud, SAP Business Technology (SAP BTP) Platform, Cloud Foundry-based platforms, Docker containers, Azure, or to a server you configured yourself.

This section of the *Developer Portal Guide* contains step-by-step instructions, and additional reference material, to help you to deploy and manage your Mendix apps in the cloud or on premises. It is split into a number of sections:

* [General](general) – contains information which applies to deployments in many different environments
* Environment-specific sections – these contain instructions for the deployment and maintenance of apps in specific environments, for example, [Mendix Cloud](mendix-cloud-deploy) and [SAP Business Technology Platform](sap-cloud-platform)
* [Mobile App](mobileapp) – contains instructions for publishing your mobile app: to the Apple or Google stores, for example
* [App Services](app-services) – describes what can be published to the Mendix Marketplace, and how to do this

## 2 Run Locally or Preview

### 2.1 Studio Pro

In *Studio Pro*, you can click **Run Locally** in the toolbar to run your app locally. Use the **View** button to directly jump to see your app running in your browser at *localhost*.

### 2.2 Studio

In *Studio*, you can click **Preview** in the top-right corner of Studio to see a preview of your app in the browser. 

For more information see [Previewing & Publishing Your App](/studio/publishing-app).

## 3 Mendix Cloud

The Mendix Cloud is the default deployment option when you get started with the Mendix Platform. As an integrated solution, a licensed node on the Mendix Cloud includes multiple environments, backups, monitoring, high availability, and more.

From within Mendix Studio Pro, you can view the cloud nodes you have available in the Mendix Cloud. You can create a deployment package (MDA) in the Developer Portal and, from there, you can transport it and start running your application. 

For more information, see [Mendix Cloud](mendix-cloud-deploy).

## 4 IBM Cloud

If you create your app from an IBM app template, or an IBM Starter Kit on IBM Cloud, then the Developer Portal will lead you through the creation of an environment on IBM Cloud. You can then deploy your app to your IBM environment directly from within Studio Pro.

For more information, see [IBM Cloud](ibm-cloud).

## 5 SAP Business Technology Platform (SAP BTP)

If you create your app from an SAP app template, the Developer Portal will lead you through the creation of an environment on SAP BTP. You can then deploy your app to your SAP BTP environment directly from within Studio Pro.

For more information, see [SAP Business Technology Platform](sap-cloud-platform).

## 6 Siemens MindSphere

You can deploy your app to MindSphere, the cloud-based, open IoT operating system from Siemens. Here you can leverage the information held within MindSphere and share your app with selected MindSphere tenants.

To find out how to do this, read [Siemens MindSphere](deploying-to-mindsphere).

## 7 Private Cloud

Mendix for Private Cloud allows you to deploy and manage your Mendix apps in a Kubernetes private cloud cluster.

The instructions for doing this are in [Private Cloud](private-cloud).

## 8 Cloud Foundry

From within Studio Pro, you can deploy directly to Cloud Foundry-based platforms. To get started, see [Cloud Foundry](cloud-foundry-deploy) and the [Cloud Foundry Mendix Buildpack](https://github.com/mendix/cf-mendix-buildpack).

## 9 Docker & Kubernetes

Mendix can be deployed in a Docker container to provide highly scalable solutions and automated delivery pipelines (CI/CD).

Instructions for using the buildpack are described in [How to Build a Docker Image from a Mendix App Project](/developerportal/deploy/docker-deploy). 

The Docker buildpack is available at [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack).

## 10 Azure

Deploying to Azure is possible from the [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/mendix.mendix-pro). 

## 11 On-Premises

To learn how to deploy your Mendix application on premises, see [How to Deploy Mendix on Microsoft Windows](deploy-mendix-on-microsoft-windows) and [Unix Deployment](unix-like).

## 12 Operations Pages

The four operations pages are described below.

### 12.1 Metrics

On this page you can monitor the performance and health of your app in all environments where it is deployed.

For details of the information available for licensed apps running in the Mendix cloud, see [Metrics](metrics).

If your app is deployed to SAP Business Technology Platform (SAP BTP) or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find similar information about the performance and health of your app.

You can also use a third-party service, such as Datadog, to assist you in monitoring your app. For more information, see [Datadog for v4 Mendix Cloud](datadog-metrics).

### 12.2 Alerts

On this page you can see the health of your app in all environments where it is deployed. You can also manage which environments will send you alerts.

For details of the information available for licensed apps running in the Mendix cloud, see [Alerts](monitoring-application-health).

If your app is deployed to SAP BTP or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find similar information about the health of your app.

### 12.3 Logs

On this page you can see and manage your app logs in all environments where the app is deployed.

For details of the logs for licensed apps running in the Mendix Cloud, see [Logs](logs).

If your app is deployed to SAP BTP or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to find your app's logs.

### 12.4 Backups

On this page you can see and manage your backups in all environments where your app is deployed.

For details of managing your backups in the Mendix Cloud, see [Backups](backups).

If your app is deployed to SAP BTP or IBM Cloud, this page will give you the option to go to the platform where your app is deployed. Here you will be able to manage your app's backups.

## 13 Main Documents in This Category

* [General](general) – information which applies to deployments in many different environments
* [Mendix Cloud](mendix-cloud-deploy) – how to deploy to, and configure, the Mendix Cloud
* [IBM Cloud](ibm-cloud) – how to deploy to the IBM Cloud
* [SAP Business Technology Platform](sap-cloud-platform) – how to deploy to SAP BTP
* [Siemens MindSphere](deploying-to-mindsphere) – how to deploy to Siemens MindSphere
* [Private Cloud](private-cloud) – how to deploy to a supported private cloud through the Developer Portal
* [Cloud Foundry](cloud-foundry-deploy) – how to deploy to a Cloud Foundry-based platform
* [Docker](docker-deploy) – how to deploy directly in a Docker container
* [On-Premises](on-premises-design) – how to deploy on premises using Microsoft Windows or Un*x
* [Mobile App](mobileapp) – how to publish your mobile app
* [App Services](app-services) – how to publish to the Mendix Marketplace
* [Metrics](metrics)
* [Alerts](monitoring-application-health)
* [Logs](logs)
* [Backups](backups)