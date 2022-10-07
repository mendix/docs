---
title: "Use Velero to Back Up Private Cloud Namespaces"
linktitle: "Use Velero to Back Up Namespaces"
url: /developerportal/deploy/private-cloud-velero/
description: "Describes the process for using Velero to create and restore backups of your Mendix app namespaces in private cloud"
weight: 20
tags: ["Deploy", "Private Cloud", "Backup", "Velero", "Kubernetes"]
---

## 1 Introduction

[text]

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

* Ensure that the [Mendix Operator](/developerportal/deploy/private-cloud-technical-appendix-01/) for your private cloud cluster is in version 2.7.0 or above.
* Install the Velero client and server in version 1.9 or above. For more information, see [Velero documentation](https://velero.io/docs/).
* Create a recovery cluster.
    {{% alert color="info" %}}The process of creating a recovery cluster may vary depending on the platform that you use to host your private cloud. For more information, refer to the documentation supplied by your cloud provider.{{% /alert %}}

## 3 Creating a Velero Backup

[text]

1. Stop the operator and agent by scaling them to 0.
2. Use the `velero create backup` command. Optionally, specify the namespace.
3. Verify that the backup is complete by using the `velero describe` command.
4. Restart the operator and agent.

## 4 Restoring a Velero Backup

[text]

1. [text]

## 6 Read More

* [text]