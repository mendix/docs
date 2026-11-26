---
title: "Mendix on Kubernetes Standalone Deprecation FAQ"
linktitle: "Standalone Deprecation FAQ"
url: /developerportal/deploy/private-cloud/standalone-deprecation-faq/
description: "Answers frequently asked questions about the deprecation of Mendix on Kubernetes Standalone and the supported alternatives."
weight: 95
---

## Introduction

With the release of [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/), Mendix is transitioning toward a container-native approach for packaging and running Mendix applications. As part of this shift, the Docker Buildpack, the M2EE Toolkit, and Mendix on Kubernetes Standalone will begin their deprecation journey. These tools will not support Mendix 12 and future Runtime versions.

This page answers common questions about what this means for Mendix on Kubernetes Standalone, and which alternatives are available. For background, see [Mendix Portable Runtime: Deployment, Simplified](https://www.mendix.com/blog/mendix-portable-runtime/).

## What Is Mendix on Kubernetes Standalone? {#what-is-standalone}

Mendix on Kubernetes Standalone means that you use the Mendix Operator in your cluster without connecting it to Mendix Portal or to Private Mendix Platform. In a Standalone setup, you typically deploy apps by applying `MendixApp` custom resources (CRs) yourself, as described in [Using Command Line to Deploy a Mendix App to a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-operator/).

The following deployment options are not affected by this deprecation:

* **Mendix on Kubernetes Connected** – The Mendix Operator and the Mendix Gateway Agent are connected to Mendix Portal
* **Private Mendix Platform** – Including Private Mendix Platform installations that run in Standalone mode
* **Mendix on Azure**

## What Is Changing? {#what-is-changing}

Mendix on Kubernetes Standalone will not support Mendix 12 and later versions. Apps built with Mendix 12 or later must use one of the [alternatives](#alternatives) described below to receive support.

## My Apps Run on Mendix 9, 10, or 11 in a Standalone Setup. Are They Still Supported? {#existing-apps}

Yes. Apps built with Mendix 9, 10, or 11 remain supported on Mendix on Kubernetes Standalone until that Mendix version reaches its end of support. For the support period of each version, see [LTS, MTS, and Monthly Releases](/releasenotes/studio-pro/lts-mts/).

Mendix recommends that you plan your move to one of the [alternatives](#alternatives) before you upgrade your apps to Mendix 12.

## Will the Mendix Operator Block Standalone Deployments? {#operator-block}

No. There are no plans to technically block Standalone deployments, and the Mendix Operator continues to be released. Mendix on Kubernetes Connected and Private Mendix Platform both use the Mendix Operator.

However, Mendix does not support or test Mendix 12 and later versions in a Standalone setup. If you run into issues with a Mendix 12 app in a Standalone setup, Mendix Support cannot help you resolve them.

## Do I Still Need a Subscription or License? {#licensing}

Yes. A valid Mendix on Kubernetes subscription and support contract are still required, and each environment needs a Runtime license. Starting from Mendix Operator version 2.23.0, a separate Operator license key is no longer needed. For more information, see [Licensing Mendix on Kubernetes](/developerportal/deploy/private-cloud/#licensing).

## Which Alternative Should I Choose? {#alternatives}

The table below summarizes the supported alternatives to Mendix on Kubernetes Standalone.

| Alternative | Best Suited For | Uses the Mendix Operator | Requires a Connection to Mendix Portal |
| --- | --- | --- | --- |
| [Mendix on Kubernetes Connected](/developerportal/deploy/private-cloud/) | Teams that want to keep using the Mendix Operator and manage environments through Mendix Portal or its APIs | Yes | Yes (outbound only) |
| [Private Mendix Platform](/private-mendix-platform/) | Organizations that need a fully self-hosted platform, including air-gapped environments | Yes | No |
| [Mendix Portable Runtime](/developerportal/deploy/portable-app-distribution-deploy/) | Teams that want full control over their own container images and Kubernetes resources | No | No |

## I Have Built a CI/CD Pipeline That Applies MendixApp CRs. What Happens to It? {#cicd}

Your pipeline keeps working for apps built with Mendix 9, 10, or 11. For Mendix 12 and later, adapt the pipeline to one of the alternatives:

* **Mendix on Kubernetes Connected** – Use the [Mendix on Kubernetes Build API](/apidocs-mxsdk/apidocs/private-cloud-build-api/) and the [Mendix on Kubernetes Deploy API](/apidocs-mxsdk/apidocs/private-cloud-deploy-api/) to build and deploy apps from your pipeline.
* **Private Mendix Platform** – Use the [Private Mendix Platform Build API](/apidocs-mxsdk/apidocs/private-platform-build-api/) and the [Private Mendix Platform Deploy API](/apidocs-mxsdk/apidocs/private-platform-deploy-api/).
* **Mendix Portable Runtime** – Build a container image that contains your Portable Runtime package, and deploy it with your own Kubernetes resources or with the reference Helm chart. For more information, see [Best Practices for Kubernetes](/developerportal/deploy/docker-deploy-k8s/) and [Deploying Mendix Portable Runtime Using Helm Charts](/developerportal/deploy/deploy-helm-portable/).

## My Cluster Has No Internet Access. What Are My Options? {#air-gapped}

Mendix on Kubernetes Connected requires an outbound connection from your cluster to Mendix Portal. If your cluster cannot connect to the internet, you can choose one of these options:

* **Private Mendix Platform** – Runs entirely within your own infrastructure. For more information, see [Private Mendix Platform](/private-mendix-platform/).
* **Mendix Portable Runtime** – Runs without the Mendix Operator and without a connection to Mendix services. For more information, see [Best Practices for Kubernetes](/developerportal/deploy/docker-deploy-k8s/).

## How Do I Move from Standalone to Mendix on Kubernetes Connected? {#move-to-connected}

You must perform the following steps:

1. Make sure your cluster meets the [Connected Environment Prerequisites](/developerportal/deploy/private-cloud-cluster/#prerequisites-connected).
2. Register your cluster and add a namespace in Mendix Portal, as described in [Creating a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-cluster/).
3. Install the Mendix Operator and the Mendix Gateway Agent in connected mode, as described in [Running the Mendix Operator in Standard Mode](/developerportal/deploy/standard-operator/) or [Running the Mendix Operator in Global Mode](/developerportal/deploy/global-operator/).
4. Create environments for your apps in Mendix Portal and deploy your apps to them, as described in [Deploying a Mendix App to a Mendix on Kubernetes Cluster](/developerportal/deploy/private-cloud-deploy/).
5. Move your app data to the new environments. For more information, see [Migrating Data in Mendix on Kubernetes Environments](/developerportal/deploy/private-cloud-data-transfer/).

## Does This Deprecation Affect Mendix on Azure? {#mendix-on-azure}

No. Mendix on Azure environments are managed through Mendix Portal and are not affected by this deprecation.

## Who Can I Contact with Questions? {#contact}

If you have questions about your situation, [submit a support request](/support/submit-support-request/) or contact your Mendix account team.
