---
title: "Environments"
space: "Developer Portal"
category: "Deploy"
description: "This page describes the deploy options of your App."
tags: ["Deploy","App","Developer Portal"]
---

## 1 Introduction

In the **Environments** section of the **Deploy** category, there is an overview of two pages:

* **Deploy**
    * Deployment Package Repository
    * Environments 
    * Activities
* **Custom Domain**
    * Certificates
    * Linked Custom Domains

## 3 Deployment Package Repository

In the **Deployment Package Repository**, there is an overview of the following:

*   Deployment Package
*   Version
*   Creation date
*   Uploaded by
*   Expire date

There are also four actions you can perform:

*   Create a package from Team Server
*   Upload a deployment package
*   View the details of the deployment package
*   Deploy a deployment package

### 3.1 Create a Package from Team Server

In this section, you can select a branch containing the revision you would like to build.

Only branches where the latest revision is Mendix 5 and higher will be displayed here. If you need to build other revisions, please do so manually from the Mendix Modeler.

### 3.2 Uploading

When you click **Upload**, you can upload an *.mda* file from your local device.

### 3.3 Viewing the Details of the Deployment Package

Next to the already mentioned deployment package info, the following items exist:

* Size of the package
* Description of the package
* A build output
* An overview of the environments that are currently running on this deployment package

There are also two action you can perform:

* Download the package
* Delete the package

### 3.4 Deploying a Deployment Package

If you click **Deploy**, the package from the team server will be transported to the environment that you select to upload.

## 4 Environments

Here you have the an overview of all the available environments with the following details:

* Name of the deployment package
* The version of the deployment package
* Runtime (the Modeler version)
* The URL of the app
* The alert status of the environment

There are three types of environment statuses:

*   Green – there are no alerts
*   Orange – there is a warning alert
*   Red – there is a critical alert

To see the details of the alerts, click **Alerts** under the **Operate** category.

There are two actions you can take :

* Transport the environment to the acceptance/production environment
* View the details of the environment

After clicking the **Details** of the environment, you can see the following tabs:

* General
* Model Options
* Network
* Loglevels
* Runtime
* Maintenance

## 5 Activities

This section shows the following activity types:

* Backup Created
* Backup Expired
* Backup Restore Started
* Backup Restored
* Clean
* Custom Domain
* Database Backup Downloaded
* Deployment
* Error
* Files Backup Downloaded
* Maintenance
* MDA Uploaded
* Started Manually
* Stopped Manually
* Technical Contact Changed
* Toggled Legacy Complex Webserver Config
* Toggled Request Handler
* Transportation

## 6 Custom Domain

On this page, you can manage your custom domain certificates.

When your Mendix App needs to be accessible via your own URL (for example, `https://myapp.mycompany.com/`), you have to provide a custom domain certificate (an SSL/TLS certificate) so that we can keep serving your Mendix app via a secure connection.

There is also a section with an overview of linked custom domains.
