---
title: "Private Cloud"
category: "Deployment"
description: "Describes the processes for deploying a Mendix app in the Private Cloud"
menu_order: 75
tags: ["Deployment", "Private Cloud", "Environment"]
---

## 1 Introduction

You can deploy and manage your Mendix apps in a private cloud cluster, for example RedHat OpenShift or Kubernetes.

The first step is to register your private cloud cluster in the Developer Portal. For more information see [Registering a Private Cloud Cluster](private-cloud-cluster).

To deploy your app, you have two options:

1. You can deploy the app from within the Developer Portal. For more information see [Deploying a Mendix App to a Private Cloud Cluster from Developer Portal](private-cloud-deploy).
2. You can create a CI/CD pipeline and deploy your app from within the cluster. For more information see [Deploying a Mendix App to a Private Cloud Cluster Outside Developer Portal](private-cloud-operator)
