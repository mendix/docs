---
title: "Private Mendix Platform Prerequisites"
url: /private-mendix-platform/prerequisites/
description: "Documents the requirements for the Private Mendix Platform."
weight: 10
aliases:
    - /private-mendix-platform-prerequisites/
---

## Introduction

This document presents the system requirements for the various parts of the Private Mendix Platform.

## Hardware Requirements

For performance reasons, Mendix recommends at least the following minimum hardware requirements.

### Kubernetes Hardware Requirements for Private Mendix Platform

| Type | Min. Spec. |
| --- | --- |
| CPU | 2 cores |
| Memory | 4 GB |
| Database HA | CPU: 1 core; Memory: 2x2 GB |

### Kubernetes Hardware Requirements for an App Running on Private Mendix Platform

| Type | Min. Spec. |
| --- | --- |
| CPU | 1 core |
| Memory | 2 GB |
| Database HA | CPU: 1 core; Memory: 2x2 GB |

### Additional Recommendations

[Additional services](/developerportal/deploy/private-cloud-monitor/) (Prometheus, Grafana, Loki) for observability are recommended. The following versions are currently validated for Private Mendix Platform:

| Tool | Version |
| --- | --- |
| Grafana | 12.2.1 |
| Prometheus | 2.41.0 |

{{% alert color="info" %}}
Currently, Private Mendix Platform only supports Grafana configurations with a single Loki and a single Prometheus data source. Configurations using a central Grafana instance with multiple Loki or Prometheus datasources are not supported.
{{% /alert %}}

#### Grafana Endpoints

Private Mendix Platform uses the following Grafana endpoints:

* [GET /api/health](https://grafana.com/docs/grafana/latest/developers/http_api/other/#returns-health-information-about-grafana) - This endpoint is used to check the health and status of the Grafana instance itself. It allows Private Mendix Platform to get the Grafana version and verify that Grafana is running before saving the logging and monitoring configuration.
* [GET /api/datasources](https://grafana.com/docs/grafana/latest/developers/http_api/data_source/) - This endpoint is used to fetch the unique identifiers (IDs) of datasources, like Loki (logs) and Prometheus (metrics). These IDs are required for subsequent queries.
* `GET /api/datasources/proxy/uid/:uid/*` - This endpoint acts as a proxy for calls to the data source identified by the specified UID. Private Mendix Platform uses this to call Loki and Prometheus APIs to query logs and labels.
* [GET /loki/api/v1/query_range](https://grafana.com/docs/enterprise-logs/latest/reference/loki-http-api/#query-logs-within-a-range-of-time) - This is the primary endpoint for fetching log data. Private Mendix Platform uses this Loki API to query application logs over a specific time range. The results of this query are used for real-time monitoring, and displayed within the Private Mendix Platform interface.
* [GET /api/v1/labels](https://prometheus.io/docs/prometheus/latest/querying/api/#getting-label-names) (Prometheus API via Grafana) - This endpoint queries the available labels from Prometheus. Private Mendix Platform uses this to check if a specific label (for ezample, a namespace) exists in Prometheus.
* [GET /api/v1/label/pod/values](https://prometheus.io/docs/prometheus/latest/querying/api/#querying-label-values) (Prometheus API via Grafana) - This endpoint retrieves the list of all unique pod names for a target environment. This is used to populate the filter dropdown in the Private Mendix Platform interface.
* [POST /api/ds/query?ds_type=prometheus](https://grafana.com/docs/grafana/latest/developers/http_api/data_source/#query-a-data-source) - This is a universal Grafana API endpoint for executing queries on a specific data source. Private Mendix Platform uses it to send PromQL queries to the Prometheus data source to fetch metric data for the Metrics dashboard.

## General Requirements

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
* For Mendix Marketplace, a file server must be accessible over HTTP (or HTTPS) on either internal network or through a connection to a Mendix repository
* Private Mendix Platform should be able to access the Kubernetes API directly

## Software Resource Requirements

Your Mendix app will be deployed with and run by the Mendix on Kubernetes Operator on top of Kubernetes. The following resources are required to facilitate this:

### Platform Portal

| Type | Tool | Version | Notes |
| --- | --- | --- | --- |
| OS | Linux distribution | Any capable of supporting Kubernetes | |
| Container orchestration | Kubernetes | See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) | |
| Container registry | Any supported registry | See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) | |
| Database | PostgreSQL | See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) | |
| Object storage | S3-type Bucket | S3 API compatible | |
| Application management | Mendix on Kubernetes Operator | 2.12 or above | Will be installed by Private Mendix Platform installer |
| Runtime | Mendix | 9.18.3.58938 | Will be installed by Private Mendix Platform installer |
| License | Private Cloud License Manager (PCLM) | Latest | Will be installed by Private Mendix Platform installer<br />Requires PostgreSQL 12 or MS SQL Server 19 or 22, see [Private Cloud License Manager](/developerportal/deploy/private-cloud/private-cloud-license-manager/#prerequisites) for more information |
| TLS | TLS certificate | | Optional, needs to be provided by you |

### Customer Landscape Integrations

Private Mendix Platform must connect to services within your premises. Mandatory services are required for the basic functionality of the portal, and optional services improve the low-code platform experience when integrated into the portal.

| Type | Tools | Version | Remarks |
| --- | --- | --- | --- |
| Version control | GitLab | Latest | Required for projects and collaboration |
| Version control | GitHub Enterprise Server | 3.6 or higher | Required for projects and collaboration |
| Version control | Bitbucket | Latest | Required for projects and collaboration |
| Version control | Azure DevOps | Latest | Required for projects and collaboration |
| CI/CD | Kubernetes | See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) | Default for CI/CD |
| CI/CD | Jenkins | 2.346.1 or newer, with support for the Docker agent | Required for CI/CD |
| CI/CD | Azure DevOps | Latest | Required for CI/CD |
| Logging & Metrics | Prometheus | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |
| Logging & Metrics | Grafana | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |
| Logging & Metrics | Loki | See [Supported Services](/developerportal/deploy/private-cloud-monitor/) | Required for Logging & Metrics |

### Customer Apps

| Type | Tool | Version |
| --- | --- | --- |
| Container orchestration | Kubernetes | See [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/) |
| Database | PostgreSQL | 12 |
| Object storage | S3-type Bucket | S3 API compatible |
| Application management | Mendix on Kubernetes Operator | 2.12+ |
| Runtime | Mendix | 9.24+ |

## Infrastructure Requirements

For information about the infrastructure requirements, see [Supported Providers](/developerportal/deploy/private-cloud-supported-environments/).

## LLM Providers for Maia

Starting in Private Mendix Platform 2.6, instead of usign the default Large Language Model, you can connect [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/) to several different models of your choice. Currently this includes the following LLMs:

* Anthropic
  * Small text model - Claude Haiku 4.5
  * Large text model - Claude Opus 4.6
* [AWS Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/models-regions.html)
  * Small text model - Claude Haiku 4.5
  * Large text model - Claude Sonnet 4.5
  * Fallback model - Claude Sonnet 4
* [Azure](https://learn.microsoft.com/en-us/azure/ai-foundry/foundry-models/concepts/models-sold-directly-by-azure)
  * o3-mini
* OpenAI
  * GPT-5-Mini

  For more information, see [Maia in Private Mendix Platform](/private-mendix-platform/maia/).