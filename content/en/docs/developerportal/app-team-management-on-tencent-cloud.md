---
title: "App & Team Management"
url: /app-team-management/
description: "Describes App & Team Management on Tencent Cloud, which is used by Chinese users."
tags: ["mendix", "app & team management", "Tencent cloud"]
weight: 40
no_list: false
description_list: true
cascade:
    - space: "Developer Portal Guide"
    - mendix_version: ""
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#This document is mapped to the landing page, update the link there if renaming or moving the doc file.
---

## 1 What Is the APP & Team Management

The [App & Team Management](https://apps.mendix.tencent-cloud.com/) on Tencent Cloud is a component specifically launched for Chinese users. In App & Team Management, users can collaborate, deploy, and manage their apps, and manage their company and users. 

{{% todo %}}Check if ATM has APIs, too.{{% /todo %}}

## 2 Navigation {#navigation}

To create a new app click **创建应用**, which will open a page where you can choose a starting pointing for your new app.

On the right side of the top bar, you can access and edit your profile.

{{% todo %}}Check if this profile is synchronized with [Mendix Profile](/developerportal/community-tools/mendix-profile/).{{% /todo %}}

{{% todo %}}Check if this warning applies to ATM, too: A notification in the form of a red dot next to **Get Started with Mendix** will remain there for 30 days after your signup.{{% /todo %}}

On the left side of the top bar, you open an access menu by clicking the **切换到** menu:

{{< figure src="/attachments/developerportal/atm-switch-to.png"   width="300"  >}}

You can then access the following parts of the Mendix Platform:

* [Studio ](/studio/){{% todo %}}Check if the link to the existing Studio doc makes sense.{{% /todo %}}
* **下载 Studio Pro** – opens the Studio Pro China Edition download page
* **我的应用** – opens the page with [a summary of your apps](#my-apps)
* **集群管理** – opens the page for [cluster management](https://deploy.mendix.tencent-cloud.com/index.html) {{% todo %}}Check if some extra info can be added with a link to Tencent Deployment Docs.{{% /todo %}}
* **应用市场** – opens the [Marketplace China Edition](https://marketplace.mendix.tencent-cloud.com/index.html), where you can download all kinds of Marketplace components that can be used in Studio Pro China Edition
* **文档** – opens [Mendix Docs](https://docs.mendix.com/)
* **论坛** – opens [Community China edition](https://forum.mendix.tencent-cloud.com/)

## 3 我的应用 {#my-apps}

This page shows you a summary of your apps:

**激活** displays all the apps for which you are a [Team](/developerportal/collaborate/team/) member. Any apps you pin with the pin icon will appear in the **固定** tab. 

Click an app tile to see more details about the app.

By clicking the ellipsis (**…**) in the app tile, you can quickly perform a number of actions:

* Open the app in Studio
* Open in app in Studio Pro
* Archive the app – This allows you to archive the app, provided you are the only team member (you will be warned of the consequences and asked for confirmation before the app is deleted). Any apps you pin with the pin icon will appear in the **归档** tab. 
* Delete the app – This allows you to delete your app, provided you are the only team member (you will be warned of the consequences and asked for confirmation before the app is deleted)

{{% todo %}}Check if this applies: To go to the [licensed environments](/developerportal/deploy/environments/) of your deployed app, click the cloud icon in the lower-right corner of the app tile.{{% /todo %}}

## 4 Guide Categories

The *Developer Portal Guide* is divided into the following categories: