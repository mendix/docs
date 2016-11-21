---
title: "Deployment"
space: "Reference Guide 6"
---


A Mendix application can be deployed in different ways. You can deploy to your local machine for development and testing, you can deploy to the Mendix cloud, Cloud Foundry based platforms, Azure, AWS and you can deploy to a server you configured yourself.

## Local

You can just click "Run" in the toolbar (or use F5) to run your app locally. Use the "Open browser" button to directly jump to your app running at localhost.

If you plan to deploy to the Mendix Cloud later on and your project contains Java actions, you should enable the "Emulate Cloud Security" setting. See [Java in the Cloud](/mendixcloud/Java+in+the+Cloud) for more information.

## Mendix Cloud

From within the Mendix Modeler you can view the cloud slots you have available in the Mendix Cloud. You can upload a deployment package (MDA) to the [Cloud Portal](https://cloud.mendix.com) and from there you can transfer it and start running it. See the documentation on [security constraints](/mendixcloud/Security+constraints+in+the+Mendix+Cloud) or the  section for more information.

## Cloud Foundry

From within the Mendix Modeler you can deploy directly to Cloud Foundry based platforms such as [IBM Bluemix](/howto6/Deploy+a+Mendix+App+to+IBM+Bluemix), [Pivotal Web Services, Pivotal Cloud Foundry](/howto6/Deploy+a+Mendix+App+to+Pivotal), [HPE Helion Development Platform/Stackato](/howto6/Deploy+a+Mendix+App+to+HP+Helion). See the [documentation on the open source buildpack](https://github.com/mendix/cf-mendix-buildpack) and [how-to](/howto6/Deploying+a+Mendix+App+to+Cloud+Foundry) to get started.

## Azure

Deploying to a Azure is possible from the [Azure Marketplace](https://azure.microsoft.com/en-us/marketplace/partners/mendix/mendix-pro/), see this [how-to](/mendixcloud/How+to+deploy+a+Mendix+app+on+Azure) for step by step instructions on deployment.

## On-premise

Visit the [Mendix on Windows](/howto6/Deploy+Mendix+on+Microsoft+Windows), [Mendix on GNU/Linux](/howto6/Installing+Mendix+on+Debian+GNU+Linux) and [Installing Mendix on RedHat and CentOS](/howto6/Installing+Mendix+on+RedHat+and+CentOS) sections to learn how to deploy your Mendix application to servers running on these platforms.
