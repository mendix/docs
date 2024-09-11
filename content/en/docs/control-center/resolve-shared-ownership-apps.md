---
title: "Resolve Shared Ownership of Apps"
url: /control-center/resolve-shared-ownership-of-apps
description: "Describe how to address the issue that you own an app together with another company."
weight: 90
no_list: true
---

## Introduction

To stimulate collaboration, Mendix allowed different companies to share the ownership of an app. Sometimes an app was created by one company, but the node where the app is deployed was provisioned by a different company. However, shared ownership can cause confusion about who is responsible for the app. Therefore, it is not a good practice.

{{% alert color="info" %}}
Mendix will stop allowing you to link a node that is owned by a different company. Apps that are already in shared ownership will not be affected by this change.
{{% /alert %}}

## Preventing Shared Ownership

If you intend to collaborate with an implementation partner on your app development, you can create the initial app and invite the implementation partner to the app. This way, the app will be owned by you and will show up in your Control Center.

## Resolving Shared Ownership

### You Own the App, but Not the Node

If another company is the environment owner of your app in [Apps](/control-center/apps/), this means that you own the app, but this company owns the node where your app is deployed.

To resolve this issue, do one of the following:

* Self service: You can request a new node or reuse an existing node, and link this node to your app. For more information, see [How to Migrate to a Different Cloud Node](/developerportal/deploy/migrating-on-public-cloud/).
* Through support: If you want to take over ownership of the node that is currently in use, you can contact support, and they will facilitate the transfer of the ownership between you and the current owning company. 

### You Own the Node, but Not the App

If an app does not appear in **Apps**, but appears in [Deployed Apps](/control-center/deployed-apps/), or [Cloud](/control-center/cloud/#paid-environments) if you cannot access **Deployed Apps**, this means that you own the node but not the app.

To resolve this issue, do one of the following:

* Self service: You can create a new app and import the *.mpk* file of your node, and then link the new app to your node. For more information, see [How to Migrate to a Different Cloud Node](/developerportal/deploy/migrating-on-public-cloud/).
* Through support: If you want to transfer the entire app, which includes, for example, the repository history and all the other information, you must first contact the current owner of the app and get their agreement, and then ask Mendix support to help you to transfer the ownership.
