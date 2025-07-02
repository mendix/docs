---
title: "App Node Requests"
url: /support/new-app-node-request-template/
description: "Describes how to deploy a new licensed node in Mendix Cloud or on-premises/virtual private cloud."
weight: 30
aliases:
    - /developerportal/support/new-app-request-template.html
    - /developerportal/support/new-app-request-template/
    - /developerportal/support/new-app-node-request-template/
    - /community-tools/support/new-app-node-request-template/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

There are a number of changes to licensed app nodes which you need to request outside the Mendix Portal.

These changes, listed below, are described in this document.

* [Requesting a New Licensed App Node](#new-node)
* [Resizing an Existing Environment](#resize)
* [Offboarding an Environment](#offboard)

## Requesting a New Licensed App Node{#new-node}

If you want to deploy your app to a new licensed node in Mendix Cloud, Mendix Cloud Dedicated, or on-premises/virtual private cloud, you can request one from Mendix Support.

Fill in the required details for the new licensed app node on the [Request New App Node](https://newnode.mendix.com/) page. If your request matches your entitlements, your Mendix Cloud node is created automatically. Mendix Support will contact you via a ticket in the [Mendix Support Portal](https://support.mendix.com/) if more information is needed or to send you keys for apps deployed on-premises or to a virtual private cloud.

By default, all developers in your organization can create node requests. You can limit this to Mendix Admins only by contacting your Customer Success Manager or requesting it via a support ticket.

These are the hosting types that you can make requests for:

* **Mendix Cloud** — Select this option for apps deployed to public Mendix Cloud.
* **Mendix Cloud Dedicated** — Select this option for apps deployed to Mendix Cloud Dedicated.
* **Mendix for Private Cloud** — Select this option for apps deployed to Kubernetes using the Mendix Operator. Refer to [Private Cloud](/developerportal/deploy/private-cloud/) for more information.
* **Server-based (Windows Server)** — Select this option for apps deployed to Windows. You are required to enter the Server ID, which you can retrieve by following the steps in the [Windows Server](/developerportal/deploy/licensing-apps-outside-mxcloud/#windows-server) section of *Licensing Apps*.
* **Container-based (Docker, Cloud Foundry, Kubernetes)** — Select this option for apps deployed to Docker, Cloud Foundry, or Kubernetes, without Mendix Operator).
* **SAP** — Select this option for apps deployed to SAP.

## Resizing an Existing Environment{#resize}

If your environment is not the right size, for example it has too little database storage, you can request a resize from Mendix Support.

Fill in the required details on the [Resize Environment](https://resize.mendix.com/index.html) page.

Mendix Support will contact the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for the app via a ticket in the [Mendix Support Portal](https://support.mendix.com) to discuss priority and timing.

{{% alert color="warning" %}}
Resizing operations will require your app to be restarted and it will be offline for a time while it is being resized. The downtime usually lasts for approximately 30-120 minutes.
{{% /alert %}}

## Offboarding an Environment{#offboard}

If you no longer need an environment, you can offboard it. Alternatively, you can reuse it for another app — see [Linking Your App to a Licensed Node](/developerportal/deploy/licensing-apps/#licensed-node) in *Licensing Mendix Cloud Apps* for more information.

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
