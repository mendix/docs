---
title: "General"
url: /developerportal/deploy/general/
category: "Deployment"
weight: 10
description: "Presents an overview of the Deployment section of the Developer Portal, focusing on topics that are relevant to more than one platform."
tags: ["Deploy", "App", "Developer Portal", "Mendix Cloud", "Cloud Foundry", "Azure", "Docker", "SAP", "On-premises", "Kubernetes"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Mendix apps can be deployed to many different platforms. Much of the deployment and management of a Mendix app depends on which platform it is deployed to. You can find information about each platform in the documentation sections focusing on deployment to that platform.

However, several topics relate to multiple platforms. These topics are covered in this section of the documentation instead of in the platform-specific sections.

The subjects covered in the *General* section are as follows:

* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
* [Secure Outgoing Connections from your Application](/developerportal/deploy/securing-outgoing-connections-from-your-application/)
* [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/)
* [Version Downgrade Protection](/developerportal/deploy/version-downgrade-prevention/)
* [Iframes and Running Apps](/developerportal/deploy/running-in-iframe/)
* [Deployment Location](/developerportal/deploy/deployment-location/)
* [Webhooks](/developerportal/deploy/webhooks/)

## 2 Building Your Model

To deploy an app to the cloud, you first have to build a project model (MDA). The runtime deployment is described in more detail in [Runtime Deployment](/refguide/runtime-deployment/). This can be done independently or as part of the deployment pipeline.

The time it takes to build your model depends on the complexity of the model and the number and size of the files held in the Team Server repository that is used to build the model.

## 3 Managing Your Deployed Apps

For many of the platforms to which a Mendix app can be deployed, the following pages in the Developer Portal let you deploy and manage your app:

* Environments
* Mobile App

You can access both of these pages via the Developer Portal’s [navigation pane](/developerportal/#navigation-pane).

### 3.1 Environments

For supported platforms, the **Environments** page allows you to review and configure different aspects of your app. It also allows you to deploy to your chosen platform, configure individual environments, and transport your app between staging environments.

For details on the **Environments** pages for Mendix Cloud, Mendix for Private Cloud, and SAP deployments, see the following pages:

* Mendix Cloud deployments – [Environments](/developerportal/deploy/environments/)
* Mendix for Private Cloud deployments – [Deploying a Mendix App to a Private Cloud Cluster](/developerportal/deploy/private-cloud-deploy/#environment-details)
* SAP deployments – [SAP Business Technology Platform](/developerportal/deploy/sap-cloud-platform/#EnvironmentDetails)

Other platforms are not currently supported on the Mendix **Environments** page; instead, you must go to the relevant platform portal to monitor and configure your environments.

### 3.2 Mobile App

On the **Mobile App** page, you can manage and publish your app in mobile app stores.

Mendix supports Android and iOS.

For more details, see [Mobile App](/developerportal/deploy/mobileapp/).
