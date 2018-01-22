---
title: "Deployment"
notoc: true
---

## 1 Introduction

A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing, you can deploy to the Mendix cloud, Cloud Foundry-based platforms, Azure, AWS, SAP Cloud, or a server you configured yourself.

## 2 Locally

You can click **Run Locally** in the toolbar to run your app locally. Use the **Open browser** button to directly jump to your app running at localhost. If you plan to deploy to the Mendix Cloud later on and your project contains Java actions, you should enable the **Emulate Cloud Security** setting. For more information, see [Java in the Cloud](/deployment/mendixcloud/java-in-the-cloud).

## 3 Mendix Cloud

The Mendix Cloud is the default deployment option when you get started with the Mendix Platform. As an integrated solution, the Mendix Cloud includes backups, monitoring, high availability, and more.

From within the Modeler, you can view the cloud nodes you have available in the Mendix Cloud. You can create a deployment package (MDA) in the Developer Portal, and from there, you can transport it and start running your application. For more information, see [Mendix Cloud](/deployment/mendixcloud/).

## 4 Cloud Foundry

From within the Modeler, you can deploy directly to Cloud Foundry-based platforms such as [IBM Bluemix](/deployment/cloud-foundry/deploy-a-mendix-app-to-ibm-bluemix) or [Pivotal Web Services, Pivotal Cloud Foundry](/deployment/cloud-foundry/deploy-a-mendix-app-to-pivotal). To get started, see [cf-mendix-buildpack](https://github.com/mendix/cf-mendix-buildpack) and [How to Deploy a Mendix App to Cloud Foundry](/deployment/cloud-foundry/deploy-a-mendix-app-to-cloud-foundry).

## 5 Azure

Deploying to a Azure is possible from the [Azure Marketplace](https://azure.microsoft.com/en-us/marketplace/partners/mendix/mendix-pro/). For details on how to deploy, see [How to Deploy a Mendix App on Azure](/deployment/mendixcloud/how-to-deploy-a-mendix-app-on-azure).

## 6 On-Premises

To learn how to deploy your Mendix application on-premises, see [How to Deploy Mendix on Microsoft Windows](/deployment/on-premises/deploy-mendix-on-microsoft-windows), [How to Install Mendix on Debian GNU Linux](/deployment/on-premises/installing-mendix-on-debian-gnu-linux), and [How to Install Mendix on RedHat and CentOS](/deployment/on-premises/installing-mendix-on-redhat-and-centos).

## 7 SAP Cloud Platform

For details on deploying to the SAP Cloud Platform, see [How to Deploy a Mendix App on SAP Cloud Platform](/deployment/sap-cloud-platform/deploy-a-mendix-app-to-sap-cloud-platform).

## 8 Document Categories

{{% space_block %}}
