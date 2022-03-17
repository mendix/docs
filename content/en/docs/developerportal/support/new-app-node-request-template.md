---
title: "App Node Requests"
url: /developerportal/support/new-app-node-request-template/
category: "Mendix Support"
weight: 3
tags: ["Support", "app node", "node", "license", "subscription secret"]
aliases:
    - /developerportal/support/new-app-request-template.html
    - /developerportal/support/new-app-request-template
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

There are a number of functions related to licensed app nodes which you need to request outside the Developer Portal.

These functions, listed below, are described in this document.

* [Requesting a New Licensed App Node](#new-node)
* [Resizing an Existing Environment](#resize)
* [Offboarding an Environment](#offboard)

## 2 Requesting a New Licensed App Node{#new-node}

If you want to deploy your app to a new licensed node in the Mendix Cloud or on-premises/virtual private cloud, you can request one from Mendix Support.

Fill in all the required details for this new licensed app node in the [Request New App Node](https://newnode.mendix.com/) app.

Mendix Support will contact the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) for the app via a ticket in the [Mendix Support Portal](https://support.mendix.com), and provide the app details. Mendix Support will also check if your request matches your entitlement to resources (number of apps, cloud resources).

If you have an app deployed to **SAP** and need a *Subscription Secret*, you need to choose the **Hosting type** *Virtual Private Cloud* and then, on the subsequent screen choose **Hosting type** *Cloud Foundry* and **Virtual Private Cloud Name** *SAP Cloud Platform*.  

{{% alert color="info" %}}
Apps in the IBM Cloud Portal are licensed in a different way – see [IBM Cloud](/developerportal/deploy/ibm-cloud/) for more information.
{{% /alert %}}

## 3 Resizing an Existing Environment{#resize}

If your environment is not the right size, for example it has too little database storage, you can request a resize from Mendix Support.

Fill in all the required details in the [Resize Environment](https://resize.mendix.com/index.html) app.

Mendix Support will contact the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) for the app via a ticket in the [Mendix Support Portal](https://support.mendix.com) to discuss priority and timing.

{{% alert color="warning" %}}
Resizing operations will require your app to be restarted and it will be offline for a time while it is being resized.
{{% /alert %}}

## 4 Offboarding an Environment{#offboard}

If you no longer need an environment, you can request Mendix Support to offboard it. Alternatively, you can reuse it for another app — see [Linking Your App to a Licensed Node](/developerportal/deploy/licensing-apps/#licensed-node) in *Licensing Mendix Cloud Apps* for more information.

You can offboard a single environment or an entire node (all three of the test, acceptance, and production environments for example) by filling in all the required details in the [Offboard Environment](https://offboard.mendix.com/index.html) app. If you cannot use the app for any reason, please raise a ticket with [Mendix Support](https://support.mendix.com).

Mendix Support will contact the [Technical Contact](/developerportal/collaborate/app-roles/#technical-contact) for the app via a ticket in the [Mendix Support Portal](https://support.mendix.com) to confirm the details and timing.

Offboarding will remove access to everything related to the node. If you want to access any data or other information, then you will need to ensure this is backed up outside the Mendix Developer Portal. The following will be removed:

* Environments
* Cloud Containers
* Database
* FileDocument Storage
* Backups
* Alerts
* Logs

When your app is offboarded you will still have access to the app information which is in the **COLLABORATE** and **DEPLOY** sections. This consists of the following:

* Buzz
* Stories
* Planning
* Team
* Feedback
* Documents
* Team Server (containing all committed versions of your app model)

## 5 Read More

* [Deployment Options](/developerportal/deploy/)
* [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/)
