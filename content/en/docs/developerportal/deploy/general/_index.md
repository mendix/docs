---
title: "General"
url: /developerportal/deploy/general/
category: "Deployment"
menu_order: 10
description: "An overview of the DEPLOY section of the Developer Portal"
tags: ["Deploy", "App", "Developer Portal", "Mendix Cloud", "Cloud Foundry", "Azure", "Docker", "IBM", "SAP", "On-premises", "Kubernetes"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert type="info" %}}
<img src="attachments/chinese-translation/china.png" style="display: inline-block; margin: 0" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/developerportal/general.pdf).
{{% /alert %}}

## 1 Introduction

Mendix apps can be deployed to many different platforms. Much of the deployment and management of a Mendix app depends on which platform it is deployed to. You can find information about each platform in the sections of documentation which relate specifically to deployment to that platform.

There are, however, a number of issues which are related to all, or multiple platforms. Rather than duplicate this information, these are covered in this section of the documentation.

The subjects covered in the *General* section of deployment are:

* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
* [Secure Outgoing Connections from your Application](/developerportal/deploy/securing-outgoing-connections-from-your-application/)
* [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/)
* [Version Downgrade Prevented](/developerportal/deploy/version-downgrade-prevention/)
* [Iframes and Running Apps](/developerportal/deploy/running-in-iframe/)

## 2 Building Your Model

To deploy an app to the cloud, you first have to build a project model (MDA). The runtime deployment is described in more detail in [Runtime Deployment](/refguide/runtime-deployment/). This can be done independently or as part of the deploy pipeline.

The time it takes to build your model (.mda) depends on the complexity of the model and the number and size of the files held in the TeamServer repository which is used to build the model.

## 3 Managing Your Deployed Apps

For many of the platforms to which Mendix can be deployed, the following pages in the Developer Portal allow you to deploy and manage your app:

* Environments
* Mobile App
* App Services

### 3.1 Environments

For supported platforms, the **Environments** page allows you to review and configure different aspects of your app. It also allows you to deploy to your chosen platform, configure individual environments, and transport your app between staging environments.

For details of the Environments page for **Mendix Cloud** deployments, see [Environments](/developerportal/deploy/environments/).

For details of the Environments page for **Mendix for Private Cloud** deployments, see [Deploying a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-deploy/#environment-details).

For details of the Environments page for **SAP** deployments, see [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/#EnvironmentDetails).

For details of the Environments page for **IBM** deployments, see [IBM Cloud](/developerportal/deploy/ibm-cloud/#EnvironmentDetails).

Other platforms are not currently supported on the Mendix *Environments* page and you will have to go to the relevant platform portal to monitor and configure your environments.
    
### 3.2 Mobile App

On this page, you can manage and publish your app in mobile app stores.

Mendix supports Android and iOS.

For more details, see [Mobile App](/developerportal/deploy/mobileapp/).  

### 3.3 App Services

The **App Services** page lets you publish your app service, application, or widget to the Mendix Marketplace.

For more details, see [App Services](/developerportal/deploy/app-services/).  
