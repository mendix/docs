---
title: "Release Notes for Other Deployment Options"
linktitle: "Other Deployment Options"
url: /releasenotes/developer-portal/on-premises/
weight: 40
description: "Release notes for On-premises deployments based on Virtual Machine (Windows and Linux) and Buildpacks (Cloud Foundry and Docker)"
---

These release notes cover changes to On-premises deployments based on Virtual Machine (Windows and Linux), deployment to IBM Cloud Portal, and important customer-facing changes to the buildpacks. For full release notes for the buildpacks see the [Cloud Foundry](https://github.com/mendix/cf-mendix-buildpack/releases) and [Docker](https://github.com/mendix/docker-mendix-buildpack/releases) buildpack release notes on GitHub. There are separate release notes for other deployment targets, see [Deployment](/releasenotes/developer-portal/deployment/) release notes page for further information.

For information on the current status of Mendix deployment see [Mendix Status](https://status.mendix.com/).

## 2023

### September 15, 2023

* We have updated our product documentation to include a list of supported buildpack versions for each version of Mendix. For more information, see [Supported Mendix Versions](https://github.com/mendix/cf-mendix-buildpack#supported-mendix-versions).

## 2022

### December 12, 2022

#### IBM Cloud Portal Deployment

* Deployment on IBM Cloud Portal is no longer officially supported by Mendix. We have updated our product documentation accordingly.

## 2020

### October 26, 2020

#### Buildpack

* We resolved an issue where HTTP headers were only returned for a successful request. You will have to redeploy your app to apply this fix. (Tickets 94915 and 107140). See [Mendix Buildpack Releases](https://github.com/mendix/cf-mendix-buildpack/releases) on *GitHub* for more information.

## 2019

### November 26, 2019

#### IBM Cloud Portal Deployment

* We have updated the process for deploying to IBM Cloud Portal.
* We have also added the ability to manage IBM Cloud Portal Cloud Foundry services from within the Mendix Developer Portal.

## 2018

### October 29, 2018

#### IBM Cloud Portal Deployment

* Deploying to IBM Cloud is available from within Mendix. If you start with an app template, you will be taken through the process of creating a deployment environment on IBM Cloud. You can then deploy your app to IBM Cloud from within the Desktop Modeler or Mendix Developer Portal.
