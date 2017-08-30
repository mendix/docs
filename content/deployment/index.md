---
title: "Deployment"
notoc: true
---

A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing, you can deploy to the Mendix cloud, Cloud Foundry based platforms, Azure, AWS and you can deploy to a server you configured yourself.

Local

You can just click "Run" in the toolbar (or use F5) to run your app locally. Use the "Open browser" button to directly jump to your app running at localhost. If you plan to deploy to the Mendix Cloud later on and your project contains Java actions, you should enable the "Emulate Cloud Security" setting. See [Java in the Cloud](/deployment/mendixcloud/java-in-the-cloud) for more information.

Mendix Cloud

From within the Modeler you can view the cloud nodes you have available in the Mendix Cloud. You can upload a deployment package (MDA) to the Developer Portal and from there you can transfer it and start running it. See the documentation on [security constraints](/deployment/mendixcloud/security-constraints-in-the-mendix-cloud) or the section for more information.

Cloud Foundry

From within the Mendix Modeler you can deploy directly to Cloud Foundry based platforms such as [IBM Bluemix](/deployment/cloud-foundry/deploy-a-mendix-app-to-ibm-bluemix) or [Pivotal Web Services, Pivotal Cloud Foundry](/deployment/cloud-foundry/deploy-a-mendix-app-to-pivotal). See the [documentation on the open source buildpack](https://github.com/mendix/cf-mendix-buildpack) and [how-to](/deployment/cloud-foundry/deploy-a-mendix-app-to-cloud-foundry) to get started. 

Azure

Deploying to a Azure is possible from the [Azure Marketplace](https://azure.microsoft.com/en-us/marketplace/partners/mendix/mendix-pro/), see this [how-to](/deployment/mendixcloud/how-to-deploy-a-mendix-app-on-azure) for step by step instructions on deployment.

On-premise

Visit the [Mendix on Windows](/deployment/on-premises/deploy-mendix-on-microsoft-windows), [Mendix on GNU/Linux](/deployment/on-premises/installing-mendix-on-debian-gnu-linux) and [Installing Mendix on RedHat and CentOS](/deployment/on-premises/installing-mendix-on-redhat-and-centos) sections to learn how to deploy your Mendix application to servers running on these platforms.
