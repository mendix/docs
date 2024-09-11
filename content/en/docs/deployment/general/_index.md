---
title: "General"
url: /developerportal/deploy/general/
weight: 5
description: "Presents an overview of deployment topics that are relevant to more than one platform."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Mendix apps can be deployed to many different platforms. Much of the deployment and management of a Mendix app depends on which platform it is deployed to. You can find information about each platform in the documentation sections focusing on deployment to that platform.

However, several topics relate to multiple platforms. These topics are covered in this section of the documentation instead of in the platform-specific sections.

The subjects covered in this documentation section are as follows:

* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
* [Secure Outgoing Connections from your Application](/developerportal/deploy/securing-outgoing-connections-from-your-application/)
* [Two-Factor Authentication](/developerportal/deploy/two-factor-authentication/)
* [Version Downgrade Protection](/developerportal/deploy/version-downgrade-prevention/)
* [Iframes and Running Apps](/developerportal/deploy/running-in-iframe/)
* [Deployment Location](/developerportal/deploy/deployment-location/)
* [Webhooks](/developerportal/deploy/webhooks/)

## Building Your Model

To deploy an app to the cloud, you first have to build a project model (MDA). The runtime deployment is described in more detail in [Runtime Deployment](/refguide/runtime-deployment/). This can be done independently or as part of the deployment pipeline.

The time it takes to build your model depends on the complexity of the model and the number and size of the files held in the Team Server repository that is used to build the model.

{{% alert color="info" %}}
Starting September 1, 2024, your app will need to run Mendix version 8 or above to build a deployment package on the Mendix platform. This applies to all cloud deployment models, including Mendix Cloud, Mendix Cloud Dedicated, Private Cloud, and SAP Cloud. If your app runs on version 7 or below, you will still be able to build a local deployment package from Studio Pro.
{{% /alert %}}
