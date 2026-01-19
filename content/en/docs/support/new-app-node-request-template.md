---
title: "App Node Requests"
url: /support/new-app-node-request-template/
description: "Describes how to resize environments, offboard an environment, and request a new licensed node in Mendix Cloud or on-premises/virtual Mendix on Kubernetes."
weight: 30
aliases:
    - /developerportal/support/new-app-request-template.html
    - /developerportal/support/new-app-request-template/
    - /developerportal/support/new-app-node-request-template/
    - /community-tools/support/new-app-node-request-template/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

This document describes some changes to licensed app nodes that you can request outside the Mendix Portal. These changes are listed below.

* [Requesting a New Licensed App Node](#new-node)
* [Resizing an Existing Environment](#resize)
* [Offboarding an Environment](#offboard)

## Requesting a New Licensed App Node{#new-node}

To deploy your app to a new licensed node, you will need to request a node from Mendix Support. When submitting your request, you must specify the hosting type for your application. The available options are:

* **Mendix Cloud** – Select this option for apps deployed to public Mendix Cloud.
* **Mendix Cloud Dedicated** – Select this option for apps deployed to Mendix Cloud Dedicated.
* **Mendix for Private Cloud** – Select this option for apps deployed to Kubernetes using the Mendix Operator. Refer to [Mendix on Kubernetes](/developerportal/deploy/private-cloud/) for more information.
* **Server-based (Windows Server)** – Select this option for apps deployed to Windows. You are required to enter the **Server ID**, which you can retrieve by following the steps in the [Windows Server](/developerportal/deploy/licensing-apps-outside-mxcloud/#windows-server) section of *Licensing Apps*.
* **Container-based (Docker, Cloud Foundry, Kubernetes)** – Select this option for apps deployed to Docker, Cloud Foundry, or Kubernetes, without Mendix Operator.
* **SAP** – Select this option for apps deployed to SAP.

To request your node from Mendix Support, complete the following steps:

1. **Submit the request** – On the [Request New App Node](https://newnode.mendix.com/) page, fill in the required details, including your desired hosting type.
2. **Automatic node creation** – If your request matches your entitlements, your Mendix Cloud node will be created automatically.
3. **Follow-up** – Mendix Support will contact you via a ticket in the [Mendix Support Portal](https://support.mendix.com/) if additional information is needed or to provide keys for apps deployed on-premises or using a virtual Mendix on Kubernetes.

{{% alert color="info" %}}
By default, all developers in your organization can create node requests. To restrict this ability to Mendix Admins only, contact your Customer Success Manager or submit a support ticket.
{{% /alert %}}

## Resizing an Existing Environment{#resize}

If your environment needs resizing, for example, due to insufficient database storage, you can do so using one of the following methods:

* **Self-service** – If your application's tenant is self-service enabled and you are the [Technical Contact](/developerportal/general/app-roles/#technical-contact), you can resize the environment by changing its plan. For details, refer to [Changing Your Plan in Mendix Cloud](/developerportal/deploy/change-plan/).

* **Request from Mendix Support** – Fill in the required details on the [Resize Environment](https://resize.mendix.com/index.html) page. Afterwards, Mendix Support will contact the application's [Technical Contact](/developerportal/general/app-roles/#technical-contact) through a ticket in the [Mendix Support Portal](https://support.mendix.com) to discuss the request's priority and timing.

{{% alert color="warning" %}}
Resizing operations requires your app to be restarted and it will be offline for some time while it is being resized. The downtime usually lasts for approximately 30-120 minutes.
{{% /alert %}}

## Offboarding an Environment{#offboard}

If you no longer need an environment, you can offboard it. Alternatively, you can reuse it for another app. See [Linking Your App to a Licensed Node](/developerportal/deploy/licensing-apps/#licensed-node) in *Licensing Mendix Cloud Apps* for more information.

You can offboard a single environment or an entire node (all three of the test, acceptance, and production environments for example) by filling in the required details on the [Offboard Environment](https://offboard.mendix.com/index.html) page. Only the Technical Contact of the application can request (and confirm) the offboarding. Once the offboarding is confirmed, the process will take place automatically. If you cannot use the Offboard Environment page for any reason, please raise a ticket with [Mendix Support](https://support.mendix.com).

Offboarding will remove access to everything related to the node. If you want to access any data or other information, you will need to ensure this is backed up outside the Mendix Portal.

The following will be removed:

* Environments
* Cloud Containers
* Database
* FileDocument Storage
* Backups
* Alerts
* Logs

When your app is offboarded, only the deployed app and its data is removed. You still retain all access to the data associated with the development of the app, such as Epics, App Insights, and the repository on the Team Server.

## Read More

* [Deploying Apps](/deployment/)
* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
