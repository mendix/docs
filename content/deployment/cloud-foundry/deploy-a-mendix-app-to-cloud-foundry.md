---
title: "Deploy a Mendix App to Cloud Foundry"
category: "Cloud Foundry"
tags: ["Cloud Foundry"]
#If moving location for documentation purposes, plan with the Modeler Team, as this doc is mapped to the product.
---

## 1 Introduction

Cloud Foundry is an open source platform-as-a-service that can run all kinds of web applications. These are its technical highlights:

* Horizontal scaling
* Applications run inside stateless containers
* Applications are only reachable over HTTP, HTTPS, or WebSockets
* Binding services to applications for persistence, monitoring, e-mail, etc.
* Source code as input, running application as output
* Extending to more software architectures via custom buildpacks
* Automatic health monitoring and recovery

Mendix integrates with the Cloud Foundry ecosystem in multiple ways. There is support for external FileStores to store FileDocuments, the session cookie name is configurable to support horizontal scaling, and Cloud Foundry is supported in the Mendix Modeler. For more information, see the [Mendix Cloud Foundry BuildPack](https://github.com/mendix/cf-mendix-buildpack).

Traditionally, these are the four platforms for running Mendix apps:

* Mendix Cloud
* Mendix Cloud Community Edition Sandboxes
* On-premises – Linux
* On-premises – Windows

With support for Cloud Foundry, these deployment options are available:

* Pivotal Web Services
* On Premises – Cloud Foundry

## 2 Prerequisites

None.

## 3 Compatibility

Mendix is compatible with all known versions of Cloud Foundry as long as there are compatible database services (PostgreSQL or MySQL) and custom buildpacks can be used. External file store support can be set up with Amazon S3 or compatible systems. 

## 4 Selecting a Cloud Foundry Guide

The how-to's below describe deploying Mendix apps to specific Cloud Foundry-powered platforms: 

* [How to Deploy a Mendix App to Pivotal](deploy-a-mendix-app-to-pivotal)
* [How to Deploy a Mendix App to IBM Bluemix](deploy-a-mendix-app-to-ibm-bluemix)

These how-to's focus on graphical interfaces. For command line instructions, see the [GitHub page of our BuildPack](https://github.com/mendix/cf-mendix-buildpack).
