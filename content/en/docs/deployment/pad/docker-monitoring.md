---
title: "Monitoring Tools in Docker"
url: /developerportal/deploy/docker-monitoring/
weight: 50
description: "Describes the available monitoring tools for Docker deployments of Mendix."
---

## Introduction

Effective container monitoring is essential for maintaining application performance, detecting issues early, and ensuring overall system health. This guide introduces several widely adopted monitoring tools and explains how to integrate them with your Docker environment.

Each tool offers distinct capabilities tailored to different use cases. For detailed installation and configuration instructions, refer to the official documentation provided for each tool.

## Grafana

Grafana is an open-source platform for monitoring and observability. It allows you to query, visualize, alert on, and understand your metrics no matter where they are stored. When combined with tools like Prometheus or Alloy, Grafana can provide powerful insights into your Docker infrastructure.

### Key Features

Grafana offers the following features:

* Create interactive dashboards.
* Connects to a variety of data sources.
* Set up alerts based on your metrics.

### Installing and Monitoring Docker Containers with Grafana

For information on how to set up Grafana and monitor your Docker containers, see [Monitor Docker containers with Grafana Alloy](https://grafana.com/docs/alloy/latest/monitor/monitor-docker-containers/) in Grafana documentation.

## Datadog

Datadog is a monitoring and security platform for cloud applications. It provides end-to-end visibility across your entire stack, including Docker containers, by collecting metrics, traces, and logs.

### Key Features

Datadog offers the following features:

* Consolidates metrics, traces, and logs.
* Provides real-time insights into your infrastructure.
* Offers intelligent AI-powered alerting capabilities.

### Installing and Monitoring Docker Containers with Datadog

To get started with Datadog for Docker container monitoring, see [Docker Agent for Docker, containerd, and Podman](https://docs.datadoghq.com/containers/docker/?tab=linux) in Datadog documentation.

## AppDynamics and Splunk

While AppDynamics and Splunk are distinct products, they both offer robust solutions for application performance monitoring (APM) and operational intelligence. Splunk can ingest data from various sources, including AppDynamics, to provide a comprehensive view of your environment.

### Key Features

AppDynamics focuses on deep application performance monitoring.

Splunk specializes in collecting, indexing, and analyzing machine-generated data.

### Integrating AppDynamics and Splunk

For information on how to leverage AppDynamics data within Splunk, or to understand how these powerful tools can work together, see [AppDynamics SaaS](https://help.splunk.com/en/appdynamics-saas) in Splunk documentation.

## Dynatrace

Dynatrace provides an all-in-one intelligence platform for enterprise cloud. It offers automatic, intelligent observability across your entire stack, including Docker containers, by continuously discovering, mapping, and monitoring everything.

### Key Features

Dynatrace offers the following features:

* Automatically discovers and maps your environment.
* Pinpoints the root cause of issues quickly.
* Monitors applications, infrastructure, and user experience.

### Installing and Monitoring Docker Containers with Dynatrace

To integrate Dynatrace with your Docker environment for comprehensive monitoring, see [Set up Dynatrace on Docker](https://docs.dynatrace.com/docs/ingest-from/setup-on-container-platforms/docker) in Dynatrace documentation.