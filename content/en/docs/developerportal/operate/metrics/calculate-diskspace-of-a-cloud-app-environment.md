---
title: "Calculate the Total Amount of Disk Space of a v3 Cloud App Environment"
linktitle: "V3 Disk Space Calculation"
url: /developerportal/operate/calculate-diskspace-of-a-cloud-app-environment/
weight: 80
description: "Describes calculating disk space on a Mendix Cloud Version 3 environment."
tags: ["Mendix Cloud", "cloud", "v3", "Disk Space"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="warning" %}}
Our Mendix Cloud V3 is deprecated, currently in a grace period, and will be retired at the beginning of Q3 2021. To continue running your licensed Mendix application on the Mendix Cloud, you need to migrate your app to Mendix Cloud V4. To learn more about Mendix Cloud V4 and how to migrate from Mendix Cloud V3, please visit the following page: [Migrate to Mendix Cloud V4](/developerportal/deploy/migrating-to-v4/). 
{{% /alert %}}

## 1 Introduction

In this how-to you will learn how-to calculate the total amount of disk space in gigabytes (GB) on a Mendix Cloud version 3 environment for both app-node and db-node.

{{% alert color="info" %}}
This how-to is meant for apps running on Mendix Cloud version **3** only.
{{% /alert %}}

Each Mendix environment consists of an application server (app-node) and a database server (db-node). Every server is equipped with memory (RAM) and disk space (File/DB storage).

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/appenvironment.jpg" >}}

All Mendix Cloud environments are running on an **'S'** container by default.
An **'S'** container consists of:

  *   10GB disk space
  *   1 GB Mx RAM
  *   1 GB DB RAM

The disk space is always divided evenly between the app-node and the db-node.

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/Scontainer.jpg" >}}

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* A Mendix Cloud version 3 app environment

## 3 Calculate The Disk Space

In order to calculate the total amount of file storage, you need to look at 2 graphs: **Application node disk usage (in bytes)** and **Application node disk usage in %**.

You can calculate the total amount of disk usage with the this formula: ``(Disk usage in Gigs (/srv) * 100)/(Disk usage in % (/srv))``

### 3.1 Calculation Example

From the graph below you need the amount of disk usage in GB from the **/srv** folder. You should always use the current disk usage amount in order to calculate the total amount. In this graph it is **112.63** GB.

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/appusage.png" >}}

And from the graph below you need the amount of disk usage in percentage from the **/srv** folder. You should always use the current disk usage percentage in order to calculate the total amount. In this graph it is **82.38** %.

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/appusagepercentage.png" >}}

Using the formula above, the total amount of disk space for this app is: ``(112.63 * 100) / 82.38 = 136.7 GB``

## 4 Database Node Disk Space (DB Storage)

In order to calculate the total amount of DB storage you need to look at 2 graphs: **Database node disk usage (in bytes)** and **Database node disk usage in %**.

You can calculate the total amount of disk usage with the formula below: ``(Disk usage in Gigs (/var) * 100)/(Disk usage in % (/var))``

### 4.1 Calculation Example:

From the **Database node disk usage (in bytes)** graph you need the amount of disk usage in GB from the **/var** folder. You should always use the current disk usage amount in order to calculate the total amount. In this graph it is **28.43** GB.

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/DBnodeDiskusage.png" >}}

From the **Database node disk usage in %** graph below you need the amount of disk usage in percentage from the **/var** folder. You should always use the current disk usage percentage in order to calculate the total amount. In this graph it is **37.74** %.

{{< figure src="/attachments/developerportal/operate/metrics/calculate-diskspace-of-a-cloud-app-environment/DBnodeDiskusagePercentage.png" >}}

The total amount of disk space for this app is: ``(28.43 * 100) / 37.74 = 75.3 GB``

## 5 Read More

* [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/)
* [Environments](/developerportal/deploy/environments/)
