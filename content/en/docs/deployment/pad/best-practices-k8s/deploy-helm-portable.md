---
title: "Deploying Mendix Portable Runtime Using Helm Charts"
linktitle: "Helm Chart Deployment"
url: /developerportal/deploy/deploy-helm-portable/
weight: 30
description: "Describes how to deploy Mendix Portable Runtime with Helm charts."
---

## Introduction

Starting with Mendix 12, Mendix on Kubernetes Standalone is deprecated. Customers running applications in private or disconnected Kubernetes environments should migrate to Mendix Portable Runtime as the recommended deployment model. This document provides guidance for migrating a Mendix application deployed using Mendix on Kubernetes Standalone to Mendix Portable Runtime deployed with Helm charts.

Migrating from Mendix on Kubernetes Standalone to Mendix Portable Runtime primarily involves translating operator-managed configuration into Helm-based configuration. You can simplify this process by using an open-source migration utility to generate the initial Portable Runtime configuration, allowing organizations to accelerate adoption while retaining existing databases, storage, and application URLs where appropriate.

{{% alert color="info" %}}
This migration approach is based on an open-source migration utility and Helm chart templates provided through the Mendix Labs GitHub repositories. These tools are intended as guidance and reference implementations and are not officially supported Mendix Platform features. Customers should validate the generated configuration before using it in production environments.
{{% /alert %}}

## Differences Between Deployment Models
Mendix on Kubernetes Standalone
MxOnK8S uses an operator-driven deployment model where application configuration is managed through Kubernetes Custom Resource Definitions (CRDs).

Mendix Portable Runtime
Mendix Portable Runtime uses a packaging-based deployment model. Applications are deployed using Kubernetes manifests and Helm charts, without requiring the Mendix Operator. Configuration, infrastructure resources, and secrets must be provided through the deployment package and Helm values. 

Migration Overview
The migration process consists of:

Extracting application configuration from the existing MxOnK8S deployment.

Mapping configuration to Mendix Portable Runtime settings.

Generating a Helm values file.

Creating required Kubernetes configuration resources.

Deploying the application using the Portable Runtime Helm chart.

The migration utility uses the existing Kubernetes Deployment resource as the source of truth and derives configuration from referenced resources such as ConfigMaps, Secrets, Services, and Ingress definitions. 

Prerequisites
Before starting the migration:

Access to the existing Kubernetes cluster

Permissions to read Kubernetes Deployments, Secrets, ConfigMaps, and related resources

A generated Mendix Portable Runtime package for the target application

Go installed if using the migration utility

Helm installed for deployment 

Configuration Discovery
The migration utility analyses the existing deployment and identifies dependent resources.

The following resource types are typically examined:

ConfigMaps

Secrets

Persistent Volume Claims (PVCs)

Service Accounts

Services

Ingresses or Routes

Horizontal Pod Autoscalers (if applicable)

Pod Disruption Budgets (if applicable) 

Resource Mapping
The following configuration mappings are commonly used during migration.

Existing MxOnK8S Resource

Portable Runtime Configuration

<appname>-m2ee secret

M2EE password secret reference

<appname>-database secret

Database secret reference

<appname>-file secret

Storage secret reference

runtime-config/custom.json

Application constants and custom settings

runtime-config/runtime.json

Runtime settings

Existing Route/Ingress

Recreated using same application URL

Application Constants
Application constants are extracted from the existing runtime configuration and converted into the Portable Runtime custom configuration format. The migration references:

etc/constants/variables.conf

This file contains application-specific constants and settings. 

Runtime Settings
Runtime settings are mapped using:

etc/variables.conf

This file contains the runtime property definitions used by Portable Runtime.

Database and Storage Credentials
Database and storage credentials are typically sourced from Kubernetes Secrets referenced by the existing deployment.

These credentials can either:

Be created directly through the Helm chart

Be created separately and referenced from the generated values file

Portable Runtime should continue to use the same database and storage location whenever possible. 

Application URL
To minimize changes for end users, reuse the same ingress or route URL that was used by the previous deployment.

Before activating the new deployment, remove or update the existing ingress or route resource to avoid conflicts. 

Unsupported Configuration
Some runtime behaviours available through the Mendix Operator are not directly portable.

For example:

Liveness probes provided by the M2EE sidecar

Readiness probes provided by the M2EE sidecar

Portable Runtime deployments may require alternative probe definitions depending on the deployment environment. 

Using the Migration Utility
[!NOTE] The migration utility is an open-source reference tool distributed through a Mendix Labs GitHub repository. It serves as a migration accelerator and is not part of the Mendix Platform lifecycle or support policy. 

Generate Migration Artifacts
Run the migration utility against the existing deployment:



./migrate \
  --namespace <namespace> \
  --name <deployment-name> \
  --hocon-runtime-ref <portable-runtime>/etc/variables.conf \
  --hocon-constants-ref <portable-runtime>/etc/constants/variables.conf \
  --output-dir <output-directory>
The tool generates:

values.yaml

Configmap-custom-config.yaml

These files contain the generated configuration mapped from the operator-based deployment.

Create Configuration Resources
Create the generated configuration map:

kubectl apply -f Configmap-custom-config.yaml

This makes the migrated application configuration available to the Portable Runtime deployment. 

Deploy Using Helm
Clone or download the Portable Runtime Helm chart:

git clone GitHub - mendixlabs/mendix-portable-runtime-helm-charts: Contains helm chart to deploy Mendix portable runtime app on Kubernetes cluster 

Deploy the application using the generated values file:



helm install <release-name> . \
  -f <generated-values>/values.yaml \
  --namespace <namespace>
Show more lines

The deployment uses the generated configuration and existing application settings extracted from the previous MxOnK8S deployment. 

Known Limitations
The reference migration implementation currently requires validation for some advanced deployment scenarios, including:

AWS IRSA integrations

Azure Managed Identity integrations

External secret providers such as Key Vault or Secret Manager

Support for these scenarios depends on the capabilities provided by the selected Helm chart version and target Kubernetes environment. 