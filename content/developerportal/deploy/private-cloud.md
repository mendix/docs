---
title: "Private Cloud"
category: "Deployment"
description: "Describes the processes for deploying a Mendix app in the Private Cloud"
menu_order: 45
tags: ["Deployment", "Private Cloud", "Environment"]
---

## 1 Introduction

You can deploy and manage your Mendix apps in a Kubernetes private cloud cluster.

The following platforms are officially supported by Mendix:

* Red Hat OpenShift
* Amazon Web Services Elastic Kubernetes Service (AWS-EKS)
* Azure Kubernetes Service (AKS)

There are two steps required to achieve this, listed below.

### 1.1 Registering Your Cluster

The first step is to register your private cloud cluster in the Developer Portal. For more information see [Creating a Private Cloud Cluster](private-cloud-cluster).

### 1.2 Deploying Your App

To deploy your app, you have two options:

1. You can deploy the app from within the Developer Portal. For more information see [Deploying a Mendix App to a Private Cloud Cluster from Developer Portal](private-cloud-deploy).
2. You can create a CI/CD pipeline and deploy your app from within the cluster. For more information see [Using Command Line to Deploy a Mendix App to a Private Cloud Cluster](private-cloud-operator)
