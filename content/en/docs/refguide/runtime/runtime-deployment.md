---
title: "Runtime Deployment"
url: /refguide/runtime-deployment/
category: "Mendix Runtime"
description: "A description of how the Mendix Runtime is deployed"
weight: 30
tags: ["runtime", "deploy", "mxbuild", "runtime server", "m2ee"]
---

## 1 Introduction

To convert your Mendix model into an app running in the cloud, it needs to be deployed. This document describes the concepts behind the deployment of your app, and the processes it goes through to begin running in the cloud. For technical details on how to deploy your app, see the [Deployment](/developerportal/deploy/) section of the Developer Portal documentation.

This description of deployment is based on an app running in the cloud. You can also run Mendix locally for testing, but this is conceptually the same.

## 2 Mendix Runtime Deployment

When you have created a Mendix app with no structural errors, you need run it by deploying it.

Below is a chart showing the processes involved in deploying your app. Each of the processes and components is described below the chart.

{{< figure src="/attachments/refguide/runtime/runtime-deployment/runtime-deployment.png" alt="How Mendix Runtime is deployed" >}}

### 2.1 Deployer

This is initiated by the Mendix Cloud Portal to manage the deployment of an app.

### 2.2 Docker Environment

This is the docker environment specification which specifies the docker environment in a Cloud-Foundry-like way for the Buildpack to process

### 2.3 Project MPK

This is the app model as created by Studio Pro or Studio. It cannot be directly interpreted by the Mendix Runtime.

### 2.4 MX Build

This converts an app in mpk format to the mda format which can be interpreted by the Mendix Runtime.

### 2.5 Cloud Foundry

This is the command line interpreter which allows Cloud Foundry environments to be created, and code to be pushed into the environments to be executed.

### 2.6 Buildpack

The buildpack is the Mendix script which controls the deployment of Mendix models to a cloud environment. it performs the following tasks:

* identifies the target environment and bound services such as database and file storage
* if it receives an app in mpk format it initiates Mxbuild to convert it into mda format
* it identifies the correct version of the Java Runtime Environment and pushes it to the environment
* it identifies the correct version of the Mendix Runtime and uses m2ee to push the Runtime Server to the environment, with a link to the app *.mda* which defines the app

### 2.7 Project MDA

This is the Mendix app in mda format, which defines the app in a way which can be interpreted by the Mendix Runtime.

### 2.8 CDN

This data repository stores components of the deployment process such as versions of the Mendix Runtime and Mx Build.

### 2.9 Java RE

This is the Java Runtime Environment (JRE) used to run the Runtime Server. The version of the JRE depends on the version of the Runtime Server. For example, Mendix 7 runs on JRE version 8, and Mendix 8 runs on JRE version 11.

### 2.10 M2ee

M2ee is a collection of helper tools written in python which is used to deploy Mendix apps. It comes in two forms: m2ee-tools and m2ee-sidecar depending on the target platform.
It starts the Runtime Server by starting a Java RE and pointing it at the relevant version of the Runtime Server binary (jar) files. Once it has started, m2ee connects to the Runtime Server to tell it which Mendix application model to load.

### 2.11 Runtime Server

This is the interpreter which runs the app. For more information see [Runtime Server](/refguide/runtime-server/).

