---
title: "Private Mendix Platform Quick Start Guide"
url: /private-mendix-platform/quickstart/
description: "Documents the installation and upgrade process for the Private Mendix Platform."
weight: 20
no_list: false 
description_list: true 
aliases:
    - /private-mendix-platform-quickstart/
---

## Introduction

This document provides a comprehensive guide for installing Private Mendix Platform, along with its optional components, in your own Kubernetes environment.

Private Mendix Platform supports using secret storage. If required, you can store some configuration in a secret vault (for example, AWS, Azure, or Hashicorp) without setting up a storage plan, database plan, PCLM admin and Mendix admin info in the Private Mendix Platform installer.
 
{{% alert color="info" %}}
Using a secret storage incorrectly may reduce the security of your app. Consult your secrets store provider to ensure that it is set up securely for your production environment.  
{{% /alert %}}

### Overview

Before you start the installation process, review the following considerations:

#### FIPS Compliance

Private Mendix Platform can run with FIPS-compliant encryption across the entire Platform, including Mendix Runtime, Private Mendix Platofrm itself, Mendix Operator, and Studio Pro.

#### Installation Mode

You can perform the installation in one of the following modes:

* [With GUI](/private-mendix-platform/interactive-installation/), where you manually install Private Mendix Platform components
* [With Helmfile](/private-mendix-platform/helmfile-installation/), where you use Helmfile to automatically install Private Mendix Platform components.

#### Installation Order

Start the process by installing the Mendix Operator before you install the components. Components are dependent on the Operator. Because of that, if you try to install a component without installing the Operator, the installation process fails and displays an error message.

#### Installing Components

Only the Private Cloud License Manager (PCLM) component is required. All other components are optional.

The following components must be installed in the same namespace as Private Mendix Platform:

* PCLM
* Svix
* Maia
* LLM Gateway
* Private Cloud components

Other components, such as the Build agent and PDF DocGen module, can be installed in any namespace.

If you add any components after installing Private Mendix Platform, you must re-run the Platform installer. For more information, see [Adding Additional Components After Installing the Private Mendix Platform](/private-mendix-platform/interactive-installation/#adding-components).

### Prerequisites {#prerequisites}

Private Mendix Platform depends on Mendix on Kubernetes for the installation and deployment of Mendix apps.

Before starting the installation process, make sure that you have all the necessary prerequisites:

* A Kubernetes instance where the target namespace has already been created. For more information, see [Supported Providers: Supported Versions](/developerportal/deploy/private-cloud-supported-environments/#supported-versions).
* A database.  For more information, see [Supported Providers: Databases](https://docs.mendix.com/developerportal/deploy/private-cloud-supported-environments/#databases).
* File storage. For more information, see [Supported Providers: File Storage](/developerportal/deploy/private-cloud-supported-environments/#file-storage).
* A registry. For more information, see [Supported Providers: Container Registries](/developerportal/deploy/private-cloud-supported-environments/#container-registries).
* A domain.
* For the PCLM component:

    * Mendix Operator in version 2.21.0 or above
    * A dedicated Postgres or SQLServer database server.

* Optionally, if your Private Mendix Platform app requires its own certificate: a TLS certificate with HTTPS support.
* An environment to run installer tools with the following requirements:

    * A kubeconfig file with administrator privileges for your Kubernetes or OpenShift platform
    * A command line terminal that supports the console API and mouse interactions. In Windows, this can be PowerShell or the Windows Command Prompt.
    * For OpenShift clusters, OpenShift CLI. For more information, see [Getting started with the CLI](https://docs.openshift.com/container-platform/4.1/cli_reference/getting-started-cli.html).
    * Kubectl installed if you are deploying to another Kubernetes platform. For more information, see [Install and Set Up kubectl](https://kubernetes.io/docs/tasks/tools/).

* Optionally, if you plan to install the Svix component:

    * An existing PostgreSQL database instance.
    * An optional Redis server version 6.2.0 or higher, for the task queue and cache. Using Redis is recommended for high availability, where you expect a high volume of webhook calls, or if you have multiple Svix servers. As a best practice, enable persistence in Redis so that tasks are persisted across Redis server restarts and upgrades.

* If you plan to use the AWS Secret Manager, install an AWS provider at your cluster, as described in [Kubernetes Secrets Store CSI Driver](https://secrets-store-csi-driver.sigs.k8s.io/).
* If you plan to use Azure Key Vault, see [Configuring a Secret Store with Azure Key Vault](/developerportal/deploy/secret-store-credentials/#azure-key-vault).

## Read More


