---
title: "Runtime Deployment"
url: /refguide/runtime-deployment/
description: "Describes how the Mendix Runtime is deployed."
weight: 30
---

## Introduction

To convert your Mendix model into an app running in the cloud, it needs to be deployed. This document describes the concepts behind the deployment of your app, and the processes it goes through to begin running in the cloud. For technical details on how to deploy your app, see [Deploying Apps](/deployment/).

This description of deployment is based on an app running in the cloud. You can also run Mendix locally for testing, but this is conceptually the same.

## Mendix Runtime Deployment

When you have created a Mendix app with no structural errors, you need run it by deploying it.

Below is a chart showing the processes involved in deploying your app. Each of the processes and components is described below the chart.

{{< figure src="/attachments/refguide/runtime/runtime-deployment/runtime-deployment.png" alt="How Mendix Runtime is deployed" class="no-border" >}}

### Deployer

This is initiated by Mendix Cloud portal to manage the deployment of an app.

### Docker Environment

This is the docker environment specification which specifies the docker environment in a Cloud-Foundry-like way for the Buildpack to process

### Project MPK

This is the app model as created by Studio Pro. It cannot be directly interpreted by the Mendix Runtime.

### MX Build

This converts an app in the *.mpk* format to the mda format which can be interpreted by the Mendix Runtime.

### Cloud Foundry

This is the command line interpreter which allows Cloud Foundry environments to be created, and code to be pushed into the environments to be executed.

### Buildpack

The buildpack is the Mendix script which controls the deployment of Mendix models to a cloud environment. It performs the following tasks:

* Identifies the target environment and bound services such as database and file storage
* If it receives an app in *.mpk* format, it initiates Mxbuild to convert it into *.mda* format
* It identifies the correct version of the Java Runtime Environment and pushes it to the environment
* It identifies the correct version of the Mendix Runtime and uses m2ee to push the Runtime Server to the environment, with a link to the app *.mda* which defines the app

### Project MDA

This is the Mendix app in mda format, which defines the app in a way which can be interpreted by the Mendix Runtime.

### CDN

This data repository stores components of the deployment process such as versions of the Mendix Runtime and MxBuild.

### Java RE

This is the Java Runtime Environment (JRE) used to run the Runtime Server. The version of the JRE depends on the version of the Runtime Server. For example, Mendix 10 runs on JRE version 11.

### M2ee

M2ee is a collection of helper tools written in Python which is used to deploy Mendix apps. It comes in two forms: m2ee-tools and m2ee-sidecar depending on the target platform.
It starts the Runtime Server by starting a Java RE and pointing it at the relevant version of the Runtime Server binary (jar) files. Once it has started, m2ee connects to the Runtime Server to tell it which Mendix application model to load.

### Runtime Server

This is the interpreter which runs the app. For more information see [Runtime Server](/refguide/runtime-server/).
