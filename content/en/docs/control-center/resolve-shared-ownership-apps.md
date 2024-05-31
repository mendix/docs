---
title: "Resolving Shared Ownership of Apps"
url: /control-center/resolve-shared-ownership-of-apps
description: "Describe how to address the issue that you own an app together with another company.."
tags: ["control center", "apps", "ownership"]
weight: 80
no_list: true
---

## 1 Introduction

To stimulate collaboration, Mendix allowed different companies to share the ownership of an app. Sometimes an app was created by one company, but the node where the app is deployed was provisioned by another company and linked by the Technical Contact of that company. However, shared ownership can cause confusion about who is responsible for the app. Therefore, it is not a good practice.

Mendix will stop allowing you to deploy an app on a node that is not owned by your company.

## 2 Preventing Shared Ownership

If you own a node and work with another company that builds your app. You can create the initial app and invite that company to the app. This way, the app will be owned by you and will show up in your Control Center.

## 3 Resolving Shared Ownership

### 3.1 You Own the App, but Not the Node

If you see the name of another company in [Apps](/control-center/apps/), this means that you own the app, but this company owns the node where your app is deployed.

To resolve this issue, do one of the following:

* Self service: You can request a new node or reuse an existing node, and link this node to your app. For more information, see [How to Migrate to a Different Cloud Node](/developerportal/deploy/migrating-on-public-cloud/).
* Through support: If you want to take over ownership of the node that is currently in use, you can contact support.

### 3.2 You Own the Node, but Not the App

If you see the name of another company in [Deployed Apps](/control-center/deployed-apps/), this means that this company owns the app, but you own the node where the app is deployed. 

To resolve this issue, do one of the following:

* Self service: You can request a new app and import the *.mpk* file of your node, and then link the new app to your node. For more information, see [How to Migrate to a Different Cloud Node](/developerportal/deploy/migrating-on-public-cloud/).
* Through support: If you want to transfer the entire app, which includes, for example, the repository history and all the other information, you must first contact the current owner of the app and get their agreement, and then ask Mendix support to help you to transfer the ownership.
