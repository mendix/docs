---
title: "SI-04 (16) Information System Monitoring - Correlating Monitoring Information"
linktitle: "SI-04 (16)"
url: /private-mendix-platform/nist-controls/si-0416/
description: "Documents the Private Mendix Platform's compliance with the SI-04 (16) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-04 (16) control.

| Control ID | SI-04 (16) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization correlates information from monitoring tools employed throughout the information system.

### Supplemental Guidance

Correlating information from different monitoring tools can provide a more comprehensive view of information system activity. Correlating monitoring information is especially important during the transition from older to newer technologies (for example, during the transition from IPv4 to IPv6 network protocols). Correlation of monitoring information can assist in uncovering attack strategies that might not be apparent when only single monitoring tools are utilized.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility. It is the customer's responsibility to ensure monitoring tool data is correlated throughout the system.

## Guidance

### Customer Responsibility

The customer is responsible for correlating monitoring information across multiple sources to enable effective detection and analysis of security‑relevant events. This includes logs and metrics from Mendix Operator components, the Private Mendix Platform, Mendix Runtime applications, Kubernetes cluster monitoring (such as pod metrics, events, and resource utilization), infrastructure monitoring systems, and security monitoring tools including IDS/IPS, firewall logs, and endpoint detection solutions.

Correlation of monitoring data is implemented through centralized logging and analysis capabilities, such as SIEM solutions or log aggregation platforms, to aggregate and analyze data from disparate sources. Correlation rules and dashboards are configured to identify attack patterns and provide consolidated visibility across monitoring domains, supporting timely detection, investigation, and response to potential security incidents.