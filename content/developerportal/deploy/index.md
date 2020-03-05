---
title: "Deployment"
description: "Deployment section of the Developer Portal Guide: How to deploy Mendix apps to different environments and how to manage those deployments."
tags: ["Deploy","Manage", "Mendix Cloud", "IBM", "SAP", "Cloud Foundry", "Kubernetes", "On-premises", "Environment"]
---

## 1 Introduction

A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing. You can deploy to the Mendix cloud, which is the default location for both free and licensed apps. You can also deploy to IBM Cloud, SAP Cloud Platform, Cloud Foundry-based platforms, Docker containers, Azure, or to a server you configured yourself.

This section of the *Developer Portal Guide* contains step-by-step instructions, and additional reference material, to help you to deploy and manage your Mendix apps in the cloud or on premises. It is split into a number of sections:

* [General](general) – contains information which applies to deployments in many different environments
* Environment-specific sections – these contain instructions for the deployment and maintenance of apps in specific environments, for example, [Mendix Cloud](mendix-cloud-deploy) and [SAP Cloud Platform](sap-cloud-platform)
* [Mobile App](mobileapp) – contains instructions for publishing your mobile app: to the Apple or Google stores, for example
* [App Services](app-services) – describes what can be published to the Mendix App Store, and how to do this

## 2 Run Locally or Preview

### 2.1 Studio Pro

In *Studio Pro*, you can click **Run Locally** in the toolbar to run your app locally. Use the **View** button to directly jump to see your app running in your browser at *localhost*.

If you plan to deploy to version 3 (v3) of the Mendix Cloud later on, *and* your project contains Java actions, you should enable the **Emulate Cloud Security** setting. 

For more information, see [V3: Java in Mendix Cloud](java-in-the-cloud).

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

## 5 SAP Cloud Platform

If you create your app from an SAP app template, the Developer Portal will lead you through the creation of an environment on SAP Cloud Platform. You can then deploy your app to your SAP Cloud Platform environment directly from within Studio Pro.

For more information, see [SAP Cloud Platform](sap-cloud-platform).

## 6 Cloud Foundry

From within Studio Pro, you can deploy directly to Cloud Foundry-based platforms. To get started, see [Cloud Foundry](cloud-foundry-deploy) and the [Cloud Foundry Mendix Buildpack](https://github.com/mendix/cf-mendix-buildpack).

## 7 Docker & Kubernetes

Mendix can be deployed in a Docker container to provide highly scalable solutions and automated delivery pipelines (CI/CD).

Instructions for using the buildpack are described in [How to Build a Docker Image from a Mendix App Project](/developerportal/deploy/docker-deploy). 

The Docker buildpack is available at [Mendix Docker Buildpack](https://github.com/mendix/docker-mendix-buildpack).

## 8 Azure

Deploying to Azure is possible from the [Azure Marketplace](https://azure.microsoft.com/en-us/marketplace/partners/mendix/mendix-pro/). 

For details on how to deploy, see [Azure](azure-deploy).

## 9 On-Premises

To learn how to deploy your Mendix application on premises, see [How to Deploy Mendix on Microsoft Windows](deploy-mendix-on-microsoft-windows) and [Unix Deployment](unix-like).
