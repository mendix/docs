---
title: "Migrate from Mendix on Kubernetes Standalone to Mendix Portable Runtime"
linktitle: "Migrate from Mendix on Kubernetes Standalone"
url: /developerportal/deploy/migrate-portable/
weight: 20
description: "Describes how you can migrate from Standalone Mendix on Kubernetes to Mendix Portable Runtime."
---

## Introduction

The Mendix Portable Runtime Helm Chart provides a reference deployment template for running Mendix Portable Runtime applications on Kubernetes and OpenShift platforms. The Helm Chart simplifies the deployment of Portable Runtime container images by providing pre-configured Kubernetes resources for application runtime, networking, configuration management, secrets, and storage. 

This deployment approach is intended for customers who want to run Mendix Portable Runtime in self-managed Kubernetes environments without using the Mendix Operator. The chart can serve as a starting point for production deployments and can be extended to meet organisation-specific requirements.

Note

The Helm Chart is provided as an open-source Mendix Labs project and should be considered a reference implementation and deployment template. Customers are responsible for validating, maintaining, and adapting the chart to their infrastructure, security, and operational standards. Mendix supports the Mendix Portable Runtime package itself, but not the open-source Helm Chart implementation. 

Prerequisites
Before deploying a Mendix Portable Runtime application using Helm, ensure that you have:

A Mendix Portable Runtime deployment package

A container image containing your Mendix application

Helm 3.x installed

Kubernetes 1.34+ or OpenShift 4.x

Access to a Kubernetes or OpenShift cluster

Database and storage services provisioned for your application requirements

For information on creating Portable Runtime deployment packages, see Mendix Portable Runtime. 

Obtaining the Helm Chart
The reference Helm Chart is available from the Mendix Labs GitHub repository:

Mendix Portable Runtime Helm Charts Repository

The repository contains:

Helm chart templates

Example deployment configurations

Sample configuration files

Kubernetes and OpenShift deployment examples

Documentation and usage guidance 

Helm Chart Structure
The chart follows a standard Helm layout:

 



mendix-portable-runtime/
├── Chart.yaml
├── values.yaml
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── ingress.yaml
│   ├── route.yaml
│   ├── configmap.yaml
│   ├── secret.yaml
│   ├── serviceaccount.yaml
│   ├── namespace.yaml
│   └── storage.yaml
└── examples/
    ├── dev-simple.yaml
    └── custom-config.conf
The templates directory contains Kubernetes resource definitions, while values.yaml provides the deployment configuration used during chart installation. 

How the Helm Chart Works
The Helm Chart deploys a container image containing a Mendix Portable Runtime application. During startup, the application is launched using the standard Portable Runtime startup mechanism:

 



./bin/start <baseConfig> [customConfigFile...]
`
 

Configuration is applied using the Portable Runtime layered configuration model:

 



Base Configuration
   ↓
Environment Variables
   ↓
Custom Configuration Files
`
This model enables common settings to be maintained in a base configuration while environment-specific overrides are supplied through mounted configuration files or environment variables. 

Installing the Chart
Clone or download the Helm Chart repository and navigate to the chart directory.

Install the application using:

 



helm install myapp . \
  -f examples/dev-simple.yaml \
  -n <namespace>
To preview the generated Kubernetes resources before deployment, run:



helm template myapp . \
  -f examples/dev-simple.yaml
To upgrade an existing deployment:



helm upgrade myapp . \
  -f examples/dev-simple.yaml \
  -n <namespace>
To uninstall the deployment:



helm uninstall myapp \
  -n <namespace>
 

Configuring the Deployment
The primary deployment configuration is stored in:

values.yaml

The chart exposes configuration options for ingress / Openshift Route.

Section

Description

image

Container image repository and tag or digest

runtime

Portable Runtime configuration

env

Environment variables

secrets

Secret creation

secretKeyRefs

References to external Kubernetes secrets

configMaps

ConfigMap creation and mounting

ingress

Kubernetes Ingress configuration

route

OpenShift Route configuration

storage

Persistent storage configuration

resources

CPU and memory requests and limits

livenessProbe

Runtime health monitoring

readinessProbe

Traffic readiness validation

Using Custom Configuration Files
Portable Runtime supports layered configuration through external configuration files.

The Helm Chart allows configuration files to be mounted through Kubernetes ConfigMaps:



runtime:
  baseConfig: "etc/Default"
  customConfigFiles:
    - name: custom
      configMapName: my-config
      key: custom-config.conf
      filename: custom-config.conf
      mountPath: /opt/app/etc
Example configuration file:



runtime {
  params {
    "DTAPMode" = "D"
    "SessionTimeout" = 2 minutes
  }
}
Configuration values supplied through environment variables take precedence over configuration file settings. 

Managing Secrets
Database credentials and application secrets can be supplied through Kubernetes Secrets.

Referencing Existing Secrets


secretKeyRefs:
  - envName: RUNTIME_PARAMS_DATABASEJDBCURL
    secretName: my-db-secret
    key: DATABASE_URL
Importing All Secret Values
 



secretEnvFrom:
  - name: my-db-secret
Creating Secrets Through the Chart


secrets:
  - name: db-credentials
    stringData:
      DATABASE_URL: jdbc:postgresql://host:5432/db 
 

For production environments, it is recommended to use externally managed Kubernetes secrets. 

Operations and Monitoring
The following commands can be used to manage the deployment.

List running pods:

kubectl get pods -n <namespace>

View application logs:

 



kubectl logs \
  -l app=myapp-mendix-portable-runtime \
  -n <namespace>
Restart the deployment after updating ConfigMaps or Secrets:



kubectl rollout restart deployment \
  myapp-mendix-portable-runtime \
  -n <namespace>
View configured Ingress resources:

kubectl get ingress -n <namespace>

For OpenShift deployments, view Routes:

kubectl get route -n <namespace>

 

Support Considerations
The Helm Chart provides deployment automation for Kubernetes resources but does not change the Mendix Portable Runtime support model.

Mendix supports the Portable Runtime package and runtime capabilities. Customers remain responsible for:

Kubernetes cluster management

Container image management

Security hardening

Networking and ingress configuration

Storage configuration

Backup and disaster recovery procedures

Operational monitoring and alerting

The Helm Chart should therefore be treated as a deployment accelerator rather than a fully supported deployment product. 

Related Documentation
Mendix Portable Runtime

Best practices for Kubernetes 

Reference Guide for Docker Deployment 

Mendix Portable Runtime Helm Charts Repository

Open Source Disclaimer

The Mendix Portable Runtime Helm Chart is an open-source Mendix Labs project provided for guidance purposes. The repository serves as a deployment template demonstrating one possible approach for running Mendix Portable Runtime applications on Kubernetes and OpenShift environments. Customers should review and adapt the implementation to align with their platform standards and operational requirements.