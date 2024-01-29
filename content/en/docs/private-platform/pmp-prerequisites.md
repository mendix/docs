---
title: "Private Mendix Platform Prerequisites"
url: /private-mendix-platform-prerequisites/
description: "Documents the requirements for the Private Mendix Platform."
weight: 10
tags: ["private mendix platform",  "private platform", "private marketplace", "prerequisites", "requirements", "hardware requirements", "network requirements", "software resource requirements", "infrastructure requirements"]
---

## 1 Introduction

This document presents the system requirements for the various parts of the Private Mendix Platform.

## 2 Hardware Requirements

For performance reasons, Mendix recommends at least the following minimum hardware requirements.

### 2.1 Kubernetes Hardware Requirements for Private Mendix Platform

| Type | Min. Spec. |
| --- | --- |
| CPU | 2 cores |
| Memory | 4 GB |
| Database HA | CPU: 1 core; Memory: 2x2 GB |

### 2.2 Kubernetes Hardware Requirements for an App Running on Private Mendix Platform

| Type | Min. Spec. |
| --- | --- |
| CPU | 1 core |
| Memory | 24 GB |
| Database HA | CPU: 1 core; Memory: 2x2 GB |

[Additional services](/developerportal/deploy/private-cloud-monitor/) (Prometheus, Grafana, Loki) for observability are recommended.

## 3 General Requirements

* The machine where Private Mendix Platform is installed must have connectivity to the Container Registry and the Kubernetes cluster
* The cluster's internal network policy must allow communication (from ingress) to services on the default port (8080).
* The Mendix Operator must be installed and fully configured:

    * The database plan must be created
    * The database server must be accessible from the Kubernetes cluster
    * The file storage plan must be created
    * The file storage server must be accessible from the Kubernetes cluster

* Mendix Studio Pro must be able to access Private Mendix Platform
* IdP for SSO must be available and configurable during installation process
G* it, Jenkins and other services must be accessible on the same virtual network, or allow external bi-directional communication with Private Mendix Platform
* For Mendix Marketplace, an object storage must be accessible over HTTP (or HTTPS) on either internal network or through a connection to a Mendix repository
* Private Mendix Platform should be able to access the Kubernetes API directly

## 4 Software Resource Requirements

Your Mendix app will be deployed with and run by the Mendix for Private Cloud Operator on top of Kubernetes. The following resources are required to facilitate this:

### 4.1 Platform Portal

| Type | Tool | Version | Notes |
| --- | --- | --- | --- |
| OS | Linux distribution | Any capable of supporting Kubernetes | |
| Container orchestration | Kubernetes | See [Supported Environments](/developerportal/deploy/private-cloud-supported-environments/) | |
| Database | PostgreSQL | Postgres 11 | |
| Object storage | S3-type Bucket | S3 API compatible | |
| Application management | Mendix for Private Cloud Operator | 2.x+ | Will be installed by Private Mendix Platform installer |
| Runtime | Mendix | 9.14.1.46860 | Will be installed by Private Mendix Platform installer |
| License | Mendix Runtime License | | Will be installed by Private Mendix Platform installer |
| TLS | TLS certificate | | Optional, needs to be provided by you |

### 4.2 Customer Landscape Integrations

Private Mendix Platform must connect to services within your premises. Mandatory services are required for the basic functionality of the portal, and optional services improve the low-code platform experience when integrated into the portal.

| Type | Tools | Version | Remarks |
| --- | --- | --- | --- |
| Version control | GitLab | Latest | Required for projects and collaboration |
| Version control | GitHub | Latest | Required for projects and collaboration |
| Version control | Bitbucket | Latest | Required for projects and collaboration |
| Version control | Azure DevOps | Latest | Required for projects and collaboration |
| CI/CD | Kubernetes | See [Supported Environments](/developerportal/deploy/private-cloud-supported-environments/) | Default for CI/CD |
| CI/CD | Jenkins | 2.346.1 or newer, with support for the Docker agent | Required for CI/CD |
| CI/CD | Tekton | Mendix Operator version 1.20 or newer, Kubernetes version 1.19 or newer, latest version of Tekton from Mendix for Private Cloud | Required for CI/CD |
| CI/CD | Azure DevOps | Latest | Required for CI/CD |
| Logging & Metrics | Prometheus | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |
| Logging & Metrics | Grafana | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |
| Logging & Metrics | Loki | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |

### 4.3 Customer Apps

| Type | Tool | Version |
| --- | --- | --- |
| Container orchestration | Kubernetes | See [Supported Environments](/developerportal/deploy/private-cloud-supported-environments/) |
| Database | PostgreSQL | Postgres 11 |
| Object storage | S3-type Bucket | S3 API compatible |
| Application management | Mendix for Private Cloud Operator | 2.x+ |
| Runtime | Mendix | 9.24+ |

## 5 Infrastructure Requirements

A Kubernetes platform version from 1.13 through 1.20, where the target namespace has already been created

* A database instance of one of the following types:

    * PostgreSQL
    * Ephemeral
    * SQL Server
    * Dedicated JDBC

* An object storage of one of the following types:

    * S3
    * Minio
    * Cos

* A registry of one of the following types:

    * ECR
    * GCR
    * Generic

* A domain
* A TLS certificate with HTTPS support