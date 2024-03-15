---
title: "Private Mendix Platform Quick Start Guide"
url: /private-mendix-platform-quickstart/
description: "Documents the installation and upgrade process for the Private Mendix Platform."
weight: 20
tags: ["private mendix platform",  "private platform", "private marketplace", "installation", "upgrade", "quick start", "configuration wizard"]
---

## 1 Introduction

This document provides a comprehensive guide for installing Private Mendix Platform, along with its optional components, in your own Kubernetes environment.

### 1.1 Prerequisites

Private Mendix Platform depends on Mendix for Private Cloud for the installation and deployment of Mendix apps.

Before starting the installation process, make sure that you have all the necessary prerequisites:

* A Kubernetes instance where the target namespace has already been created. For more information, see [Supported Providers: Supported Versions](/developerportal/deploy/private-cloud-supported-environments/#211-supported-versions).
* A database. For more information, see [Supported Providers: Databases](/developerportal/deploy/private-cloud-supported-environments/#4-databases).
* File storage. For more information, see [Supported Providers: File Storage](/developerportal/deploy/private-cloud-supported-environments/#5-file-storage).
* A registry. For more information, see [Supported Providers: Container Registries](/developerportal/deploy/private-cloud-supported-environments/#3-container-registries).
* A domain.
* For the PCLM component:

    * Mendix Operator in version 2.11.0 or above
    * A dedicated Postgres or SQLServer database server with public accessibility set to **Yes**.

* Optionally, if your Private Mendix Platform app requires its own certificate: a TLS certificate with HTTPS support.
* An environment to run installer tools with the following requirements:

    * A kubeconfig file with administrator privileges for your Kubernetes or OpenShift platform
    * A command line terminal that supports the console API and mouse interactions. In Windows, this can be PowerShell or the Windows Command Prompt.
    * For OpenShit clusters, OpenShift CLI. For more information, see [Getting started with the CLI](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html).
    * Kubectl installed if you are deploying to another Kubernetes platform. For more information, see [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/).

* Optionally, if you plan to install the Svix component:

    * An existing PostgreSQL database instance
    * A Redis instance