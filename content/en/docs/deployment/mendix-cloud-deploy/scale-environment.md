---
title: "Scaling Your Environment in Mendix Cloud"
linktitle: "Scaling in Mendix Cloud"
url: /developerportal/deploy/scale-environment/
weight: 80
description: "Describes how to scale your environments in Mendix Cloud."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

This document explains how to scale an environment in Mendix Cloud. This can take the form of vertical or horizontal scaling:

* Vertical scaling – You can add memory to the application container.
* Horizontal scaling – You can configure apps built using supported versions of Mendix to be run in multiple runtime containers (instances) simultaneously. Incoming traffic for your app is distributed over the running instances.

{{% alert color="info" %}}
For versions below Mendix 9.12.0, [scheduled events](/refguide/scheduled-events/) are always run on the first instance if there are multiple instances.
{{% /alert %}}

## Prerequisites

Before following the steps outlined on this page, make sure you meet the following prerequisites:

* Have a licensed app hosted in Mendix Cloud.
* Have a standard or premium plan with a cloud resource pack that provides more than 1 GiB of memory. You can find this information on the [Environment Details](/developerportal/deploy/environments-details/) page. For details on the cloud resource packs that Mendix offers, see [Cloud Resource Packs](/developerportal/deploy/mendix-cloud-deploy/#resource-pack).
* Have Transport Rights for the environment you want to scale. For details on configuring permissions, see [Node Permissions](/developerportal/deploy/node-permissions/).

## Scaling Your Environment

To scale your licensed app in Mendix Cloud, follow these steps:

1. From [Apps](https://sprintr.home.mendix.com), go to the **Environments** page of your licensed app.
1. Click **Details** ({{% icon name="notes-paper-edit" %}}) on the environment you want to scale.
1. On the **General** tab, scroll down to the **Instances** row. Click **Change scaling**.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/scale-environment/change-scaling.png" alt="" >}}

1. To set the **Memory per instance** that you want to use, drag the **Memory per instance** indicator bar.
1. To set the number of **Instances** you want to use, drag the **Instances** indicator bar.
1. Click **Apply**. This restarts your environment to apply the changes.

    {{< figure src="/attachments/deployment/mendix-cloud-deploy/scale-environment/scale.png" alt="Scaling dashboard" max-width=75% >}}

### Scaling Notes

* Restarting your environment to apply horizontal or vertical scaling changes causes brief downtime.
* The number of available instances depends on the total memory provided by your cloud resource pack and the memory per instance that you have set. It is not possible to set scaling values that exceed the memory provided by your [cloud resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack).
* It is not possible for a single instance to use more than 32 GiB of RAM. Some very large cloud resource packs, such as XXXL21 or XXXXL21, provide more than this 32 GiB maximum; to use the full RAM in this case, you need more than one instance. For example, to use 64 GiB of RAM, you must spread the RAM between two or more instances.
* Consider the functionality that runs inside task queues; think about whether the scope of these task queues should be configured to run in all instances or once per cluster. It is possible to set the [scope of the threads](/refguide/task-queue/#create-queue) per task queue.

## Examples

The following examples assume that you have 8 GiB memory available in your cloud resource pack.

### Scaling Example 1

You can spread the 8 GiB RAM across 4 instances. For example, you can create 4 instances, each with 2 GiB memory (4 x 2 GiB = 8 GiB).

### Scaling Example 2

You do not need to allocate all the available memory at once. You can just allocate part of it and then use the rest of the memory later by allocating more memory per instance or creating more instances.

For example, you can use one instance with 2 GiB RAM. The remaining 6 GiB in your cloud resource pack will be unused.

{{< figure src="/attachments/deployment/mendix-cloud-deploy/scale-environment/scaling-example.png" alt="Scaling dashboard with 2 out of 8 GB of total allocated memory used" max-width=75% >}}

## Read More

* [Deploying Apps](/deployment/)
* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [About Mendix Cloud](/developerportal/deploy/mxcloudv4/)
