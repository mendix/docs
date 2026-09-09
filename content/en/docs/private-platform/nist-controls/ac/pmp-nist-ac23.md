---
title: "AC-23 Data Mining Protection"
linktitle: "AC-23"
url: /private-mendix-platform/nist-controls/ac-23/
description: "Documents the Private Mendix Platform's compliance with the AC-23 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-23 control.

| Control ID | AC-23 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization employs organization-defined data mining prevention and
detection techniques for organization-defined data storage objects to adequately detect and protect against data mining.

### Supplemental Guidance

Data storage objects include, for example, databases, database records, and database fields. Data mining prevention and detection techniques include, for example: 

* Limiting the types of responses provided to database queries;
* Limiting the number or frequency of database queries to increase the work factor needed to determine the contents of such databases
* Notifying organizational personnel when atypical database queries or accesses occur. 

This control focuses on the protection of organizational information from data mining while such information resides in organizational data stores. In contrast, AU-13 focuses on monitoring for organizational information that may have been mined or otherwise obtained from data stores and is now available as open source information residing on external sites, for example, through social networking or social media websites.

## Responsibility

### Customer Responsibility

#### Platform

Mining of persisted data is an infra-level concern. Regarding attacks through the platform portal application, as a Mendix application, Private Mendix Platform is protected against conventional data-mining attacks and vulnerability exploits through conventional Mendix runtime security.

#### Infra-Level

MX4PC protects against it through not having externally accessible interfaces. App metrics, health and status checks are only accessible in-cluster and do not expose sensitive information. The app logs and metrics (Grafana, Loki, Prometheus, and so on) can be disabled. It is the responsibility of the infrastructure implementer and operator to protect automated logs and metrics as they are collected and processed by centralized systems such as Prometheus, Grafana, Loki, and so on.

#### App-level

It is the responsibility of the customer to define data mining prevention and detection techniques. It is the responsibility of the infrastructure implementer to ensure the infrastructure is setup to adhere to those techniques, and the app implementer to ensure the application is built in a compliant manner.

## Guidance

Customers should define data mining prevention and detection techniques for data storage objects including databases, tables and fields to detect and protect against data mining.

Customers should restrict the types of responses provided to database queries, limit the number and frequency of database queries, using tools to notify or alert administrator and management when atypical database queries or accesses occur. It is the responsibility of the infrastructure implementer and operator to protect automated logs and metrics as they are collected and processed by centralized systems such as Prometheus, Grafana, Loki, and so on.

## Proof and Remarks

Private Mendix Platform is protected against data-mining attacks and vulnerability exploits through Mendix Runtime security. For more information on Mendix database security and limiting access based on entity rows and attributes, see [Mendix Entity Data Access](/refguide/security-overview/#entity-access). For more information on Mendix page content security and limiting access based on user roles and module roles, see [Mendix Page Content Access](/refguide/security-overview/#page-access).

Mendix app metrics, health and status via Grafana and Prometheus can be disabled:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-23-1.png" class="no-border" >}}
