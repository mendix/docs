---
title: "Scaling Your Environment in Mendix Cloud"
linktitle: "Scaling in Mendix Cloud"
url: /developerportal/deploy/scale-environment/
weight: 25
description: "Describes how to scale your environments in Mendix Cloud."
tags: ["Scale","Environments","Mendix Cloud","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

There are various ways to scale licensed apps in Mendix Cloud.

Memory can be added to the application container. This is called vertical scaling.

Apps built using supported versions of Mendix can be run in multiple runtime containers (instances) simultaneously. Incoming traffic for your app is distributed over the running instances. This is called horizontal scaling.

{{% alert color="info" %}}
Before Mendix 9.12.0, [scheduled events](/refguide/scheduled-events/) are always run on the first instance if there are multiple instances.
{{% /alert %}}

This how-to demonstrates how to do the following:

* Scale your environment in Mendix Cloud

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a licensed app hosted in Mendix Cloud
* Have a plan that provides more than 1 GiB of memory

{{% alert color="info" %}}
Details of your plan are displayed on the Environment Details page.
{{% /alert %}}

## 3 Scaling Your Environment

If you want to scale your licensed app in Mendix Cloud, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and select your licensed app.

2. Click **Environments** to go to the Environments page.

3. Click the **Details** icon on your desired environment.

4. On the **General** tab, scroll down to the **Instances** row. Click **Change scaling**.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/scale-environment/change-scaling.png" alt="" >}}

5. Set the number of **Instances** by dragging the indicator bar.

6. Set the **Memory per instance** that you want to use.

    {{% alert color="warning" %}}You cannot exceed the total memory provided by your plan. This is shown as the lower number in **Total Allocated Memory**.<br><br/>If you try to use scaling values that exceed the memory provided by your plan, you will get the following message "You do not have sufficient resources to configure this allocation."{{% /alert %}}    

7. Click **Apply**. This restarts your environment to apply the changes.

    {{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/scale-environment/scale.png" alt="Scaling dashboard" width=75% >}}

## 4 Examples

The following examples assume that you have 16 GiB memory available in your plan.

### 4.1 Scaling Example 1

You can spread the 16 GiB RAM across four instances. For example, you can create four instances, each with 4 GiB memory (4 x 4 GiB = 16 GiB).

### 4.2 Scaling Example 2

You do not need to allocate all the plan memory at once. You can just allocate part of it and then use the rest of the memory later by allocating more memory per instance or creating more instances.

For example, you can use one instance with 4 GiB RAM. The remaining 12 GiB in your plan will be unused.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/scale-environment/scaling.png" alt="Scaling dashboard with 4 out of 16 GB of total allocated memory used" >}}

## 5 Read More

* [Metrics](/developerportal/operate/metrics/)
* [Deployment](/developerportal/deploy/)
* [Environment Details](/developerportal/deploy/environments-details/)
* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [About Mendix Cloud](/developerportal/deploy/mxcloudv4/)
* [App Roles](/developerportal/general/app-roles/)
* [Node Permissions](/developerportal/deploy/node-permissions/)
