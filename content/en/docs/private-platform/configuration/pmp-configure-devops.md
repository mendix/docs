---
title: "Configure the DevOps Settings for Private Mendix Platform"
linktitle: "Configure the DevOps Settings"
url: /private-mendix-platform-configuration/devops/
description: "Documents the DevOps configuration for the Private Mendix Platform."
weight: 60
tags: ["private mendix platform",  "private platform", "authentication"]
---

## 1 Introduction

In this section, you can configure settings related to managing your app projects and CI/CD capabilities.

## 2 Version Control System

To create applications and collaborate, configure the connection to your version control repository. GitHub, Gitlab and Bitbucket are supported as version control systems. For more information, see [Configuring the Version Control System for Private Mendix Platform](/private-mendix-platform-version-control/).

## 3 CI/CD

Configure CI/CD capabilities for your app. If you enable this option, you must also specify your CI system, configure the necessary settings, and register a Kubernetes cluster. Tekton, Jenkins, and [Kubernetes](/private-mendix-platform-configure-k8s/) are supported. You can also configure a custom template for your CI/CD capabilities.

{{< figure src="/attachments/private-platform/pmp-wizard5.png" >}}

### 3.1 Configuring CI/CD Pipelines with Manual Approval

If your production and development environments must be fully air-gapped and separated from each other, and you want to limit the ability to deploy packages to either selected users or an automated pipeline with manual approval, you can configure your cluster type to be **Upload MDA**.

{{< figure src="/attachments/private-platform/pmp-wizard7.png" >}}

Selecting this option allows you to specify an S3 bucket. This bucket is then used as the destination where the deployment package is uploaded at the end of the pipeline, instead of being deployed to the production environment. Designated approvers can then retrieve the package from the S3 bucket and manually deploy it to the target environment.
