---
title: "Scaling Your Environment in Mendix Cloud"
linktitle: "Scaling in the Mendix Cloud"
url: /developerportal/deploy/scale-environment/
weight: 25
description: "Describes how to scale your environments in the Mendix Cloud."
tags: ["Scale","Environments","Mendix Cloud","Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Licensed apps in the Mendix Cloud can be scaled in various ways.

Memory can be added to the application container. This is called *vertical scaling*.

Apps built using supported versions of Mendix can be run in multiple runtime containers (instances) simultaneously. Incoming traffic for your app is distributed over the running instances. This is called *horizontal scaling*.

{{% alert color="info" %}}
Before Mendix version 9.12.0, [Scheduled events](/refguide/scheduled-events/) are always run on the first instance if there are multiple instances.
{{% /alert %}}

This how-to will teach you how to do the following:

* Scale your environment in the Mendix Cloud

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Have a licensed app hosted in the Mendix Cloud
* Have a plan which provides more than 1GiB of memory

{{% alert color="info" %}}
Details of your plan are displayed on the environment details page.
{{% /alert %}}

## 3 Scaling Your Environment

If you want to scale your licensed app in the Mendix Cloud, follow these steps:

1. Go to the [Developer Portal](http://sprintr.home.mendix.com) and select your licensed app.

2. Click **Environments** to go to the environments page.

3. Click **Details** for a selected environment.

4. Click **Change scaling** next to the current description of *Instances*.

5. Set the number of **Instances** by dragging the indicator bar.

6. Set the **Memory per instance** that you want to use.

    {{% alert color="warning" %}}You cannot exceed the total memory provided by your plan. This is shown as the lower number in **Total Allocated Memory**.<br/>If you try to use scaling values which exceed the memory provided by your plan you will get the message `You do not have sufficient resources to configure this allocation`.{{% /alert %}}    

7. Click **Apply**. This will restart your environment to apply the changes.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/scale-environment/scale.png" >}}

## 4 Examples

The following examples assume that you have 16GiB memory available to you in your plan.

### 4.1 Scaling Example 1

You can spread the 16GiB RAM across 4 instances. Create 4 instances, each with 4GiB memory (4 x 4GiB = 16GiB).

### 4.2 Scaling Example 2

You don't need to allocate all the plan memory at once. You can just allocate part of it and then use the rest of the memory later by allocating more memory per instance, or creating more instances.

For example, you can use one instance with 4GiB RAM. The remaining 12GiB in your plan will be unused.

{{< figure src="/attachments/developerportal/deploy/mendix-cloud-deploy/scale-environment/scaling.png" >}}

## 5 Read More

* [Trends in the Mendix Cloud](/developerportal/operate/trends-v4/)
* [Deployment](/developerportal/deploy/)
* [Environment Details](/developerportal/deploy/environments-details/)
* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [About the Mendix Cloud](/developerportal/deploy/mxcloudv4/)
* [App Roles](/developerportal/general/app-roles/)
* [Node Permissions](/developerportal/deploy/node-permissions/)
