---
title: "Configuring CI/CD on Azure"
url: /private-mendix-platform/configure-azure/
description: "Documents the initial configuration for the Private Mendix Platform."
weight: 30
aliases:
    - /private-mendix-platform-configure-azure/
---

## Introduction

This document explains the configuration options available when configuring a Continuous Integration and Delivery (CI/CD) solution for Private Mendix Platform on the Azure DevOps service.

### Prerequisites

To configure the CI/CD pipeline, prepare the following:

* An Azure organization where you want to build your Mendix app.
* An Azure blob or an AWS S3 endpoint where you can store the built MDA files.

## Configuring the CI/CD Pipeline

If you have an Azure organization, you can set Azure as your CI System in **Switch to Admin Mode** > **Settings** > **Build Settings** > **Build Method** > **Build Utility**. You need to first obtain a [Personal Access Token](#pat), and then configure the followings settings:

* [Azure blob settings](#blob)
* [S3 bucket settings](#bucket)

Finally, you must also [register your Kubernetes cluster](/private-mendix-platform/reference-guide/admin/company/#cluster-manager).

{{< figure src="/attachments/private-platform/pmp-cicd4.png" class="no-border" >}}

### Obtaining a Personal Access Token {#pat}

A Personal Access Token (PAT) is used to authenticate in Azure DevOps. For information about obtaining the token, see [Create a PAT](https://learn.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate?view=azure-devops&tabs=Windows#create-a-pat) in the Azure DevOps documentation.

### Configuring Azure Blob Settings {#blob}

The settings in this section configure the Azure blob settings.

* **Azure Blob URL** - For example, `https://{your domain name}.blob.core.windows.net/pmp`.
* **Azure Blob Token** - This secret value is used to access the Azure Blob storage.

### Configuring Build Images Setting {#bucket}

The settings in this section configure the S3 bucket.

* **S3 Endpoint** - For example, `Cloud Object Storage - Amazon S3 - AWS`.
* **S3 Bucket Name** - Your S3 bucket name, for example, `mybucket`.
* **Region** - For example, `ap-southeast-1`.
* **Access Key ID** - This ID value is used to access the S3 bucket.
* **Secret Access Key** - This secret key value is used to access the S3 bucket.

### Building an App with the Azure DevOps Pipeline

To build an app with the Azure DevOps pipeline, perform the following steps:

1. In Admin mode, ensure that you have configured all required settings (Azure DevOps URL, Organization, PAT, Blob or S3 Storage), and then click **Save**.
2. Switch to User mode
3. Select the app where you want to create a package with the Azure DevOps build utility.

#### Troubleshooting the App Package Build

If the app package build fails, you can view the error message on the Pipeline Build page of [Azure DevOps](https://dev.azure.com). If the error message is *No hosted parallelism has been purchased or granted*, you must buy or request a free parallelism grant from the Microsoft Azure DevOps service. After the request is granted, re-run your build.

## Architecture of the CI/CD Pipeline

The diagrams in this section present the architecture and components of the pipeline. The architecture is different depending on whether you enabled the Auto Detect Mx Version build image setting.

### Architecture with the Auto Detect Mx Version Setting Enabled

The following diagram shows the architecture of the pipeline if you enable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](/private-mendix-platform/configure-k8s/#build-images).

{{< figure src="/attachments/private-platform/pmp-cicd2.png" alt="Auto Detect Mx Runtime Version" class="no-border" >}}

### Architecture with the Auto Detect Mx Version Setting Disabled

The following diagram shows the architecture of the pipeline if you disable the **Auto Detect Mx Version** setting. For more information, see [Build Images Setting](/private-mendix-platform/configure-k8s/#build-images).

{{< figure src="/attachments/private-platform/pmp-cicd3.png" alt="User Input Mx Runtime Version" class="no-border" >}}
