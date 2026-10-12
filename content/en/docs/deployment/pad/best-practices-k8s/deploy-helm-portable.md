---
title: "Deploying Mendix Portable Runtime Using Helm Charts"
linktitle: "Helm Chart Deployment"
url: /developerportal/deploy/deploy-helm-portable/
weight: 30
description: "Describes how to deploy Mendix Portable Runtime with Helm charts."
---

## Introduction

Starting with Mendix 12, Mendix on Kubernetes Standalone is deprecated. Customers running applications in private or disconnected Kubernetes environments should migrate to Mendix Portable Runtime as the recommended deployment model. This document provides guidance for migrating a Mendix application deployed using Mendix on Kubernetes Standalone to Mendix Portable Runtime deployed with Helm charts.

Migrating from Mendix on Kubernetes Standalone to Mendix Portable Runtime involves translating operator-managed configuration into Helm-based configuration. You can simplify this process by using an open-source migration utility to generate the initial Portable Runtime configuration, accelerating adoption while retaining existing databases, storage, and application URLs where appropriate.

{{% alert color="info" %}}
This migration approach is based on an open-source migration utility and Helm chart templates provided through the Mendix Labs GitHub repositories. These tools are intended as guidance and reference implementations and are not officially supported Mendix Platform features. Customers should validate the generated configuration before using it in production environments.
{{% /alert %}}

### Differences Between Deployment Models

Mendix on Kubernetes Standalone uses an operator-driven deployment model where application configuration is managed through Kubernetes Custom Resource Definitions (CRDs).

Mendix Portable Runtime uses a packaging-based deployment model. Applications are deployed using Kubernetes manifests and Helm charts, without requiring the Mendix Operator. Configuration, infrastructure resources, and secrets must be provided through the deployment package and Helm values. 

## Prerequisites

Before starting the migration, ensure that you have the following prerequisites:

* Access to the existing Kubernetes cluster
* Permissions to read Kubernetes Deployments, Secrets, ConfigMaps, and related resources
* A generated Mendix Portable Runtime package for the target application
* Go installed if using the migration utility
* Helm installed for deployment 

## Migration Overview

The migration process consists of the following stages:

1. Extracting application configuration from the existing Mendix on Kubernetes Standalone deployment.
2. Mapping configuration to Mendix Portable Runtime settings.
3. Generating a Helm values file.
4. Creating required Kubernetes configuration resources.
5. Deploying the application using the Portable Runtime Helm chart.

### Configuration Discovery

The migration utility analyses the existing Kubernetes Deployment resource and identifies dependent resources.

The utility examines the following resources:

* ConfigMaps
* Secrets
* Persistent Volume Claims (PVCs)
* Service Accounts
* Services
* Ingresses or Routes
* Horizontal Pod Autoscalers (if applicable)
* Pod Disruption Budgets (if applicable) 

### Resource Mapping

The following configuration mappings are commonly used during migration:

* `<appname>-m2ee` secret - M2EE password secret reference
* `<appname>-database` secret - Database secret reference
* `<appname>-file secret` - Storage secret reference
* `runtime-config/custom.json` - Application constants and custom settings
* `runtime-config/runtime.json` - Runtime settings
* Existing route and ingress - Recreated using the same application URL

#### Application Constants

Application constants are extracted from the existing runtime configuration and converted into the Portable Runtime custom configuration format. The migration references the `etc/constants/variables.conf` file, which contains application-specific constants and settings. 

#### Runtime Settings

Runtime settings are mapped using the `etc/variables.conf` file, which contains the runtime property definitions used by Portable Runtime.

#### Database and Storage Credentials

Database and storage credentials are typically sourced from Kubernetes Secrets referenced by the existing deployment.

These credentials be created in one of the following ways:

* Directly through the Helm chart
* Separately, referenced from the generated values file

Portable Runtime should continue to use the same database and storage location whenever possible. 

#### Application URL

To minimize changes for end users, reuse the same ingress or route URL that was used by the previous deployment.

Before activating the new deployment, remove or update the existing ingress or route resource to avoid conflicts. 

### Unsupported Configuration

Some runtime behaviours available through the Mendix Operator are not directly portable, for example:

* Liveness probes provided by the M2EE sidecar
* Readiness probes provided by the M2EE sidecar

Portable Runtime deployments may require alternative probe definitions depending on the deployment environment. 

## Using the Migration Utility

The migration utility is an open-source reference tool distributed through a Mendix Labs GitHub repository. It serves as a migration accelerator and is not part of the Mendix Platform lifecycle or support policy.

To use the utility, perform the following steps:

1. Generate migration artifacts by running the migration utility against the existing deployment:

    ```text
    ./migrate \
      --namespace <namespace> \
      --name <deployment-name> \
      --hocon-runtime-ref <portable-runtime>/etc/variables.conf \
      --hocon-constants-ref <portable-runtime>/etc/constants/variables.conf \
      --output-dir <output-directory>
    ```

    The tool generates the following files with configuration mapped from the Operator-based deployment:

    * *values.yaml*
    * *Configmap-custom-config.yaml*

2. Create the generated configuration map:

    ```text
    kubectl apply -f Configmap-custom-config.yaml
    ```

    This makes the migrated application configuration available to the Portable Runtime deployment. 

3. Clone or download the Portable Runtime Helm chart:

    ```text
    git clone GitHub - mendixlabs/mendix-portable-runtime-helm-charts: Contains helm chart to deploy Mendix portable runtime app on Kubernetes cluster 
    ```

3. Deploy the application using the generated values file:

    ```text
    helm install <release-name> . \
      -f <generated-values>/values.yaml \
      --namespace <namespace>
    ```

The deployment uses the generated configuration and existing application settings extracted from the previous Mendix on Kubernetes Standalone deployment. 

## Known Limitations

The reference migration implementation currently requires validation for some advanced deployment scenarios, including:

* AWS IRSA integrations
* Azure Managed Identity integrations
* External secret providers such as Key Vault or Secret Manager

Support for these scenarios depends on the capabilities provided by the selected Helm chart version and target Kubernetes environment. 