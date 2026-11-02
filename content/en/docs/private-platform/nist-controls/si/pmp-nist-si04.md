---
title: "SI-04 Information System Monitoring"
linktitle: "SI-04"
url: /private-mendix-platform/nist-controls/si-04/
description: "Documents the Private Mendix Platform's compliance with the SI-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-04 control.

| Control ID | SI-04 |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization: 

* Monitors the information system to detect: 

    * Attacks and indicators of potential attacks in accordance with organization-defined monitoring objectives 
    * Unauthorized local, network, and remote connections.

* Identifies unauthorized use of the information system through organization-defined techniques and methods.
* Deploys monitoring devices: 

    * Strategically within the information system to collect organization-determined essential information
    * At ad hoc locations within the system to track specific types of transactions.

* Protects information obtained from intrusion-monitoring tools from unauthorized access, modification, and deletion.
* Heightens the level of information system monitoring activity whenever there is an indication of increased risk;.
* Obtains legal opinion with regard to information system monitoring activities in accordance with applicable federal laws.
* Provides organization-defined information system monitoring information to organization-defined personnel or roles.

### Supplemental Guidance

Information system monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the information system boundary. Internal monitoring includes the observation of events occurring within the information system. Organizations can monitor information systems by deploying monitoring devices and agents at selected locations and employing technologies such as intrusion detection systems, intrusion prevention systems, malicious code protection software, scanning tools, audit record monitoring software, network monitoring software, and network forensics tools.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility. It is the customer's responsibility to decide on appropriate monitoring of the Mendix solution.

## Guidance

### Customer Responsibility

The customer is responsible for establishing and maintaining information system monitoring for the Mendix solution. This includes defining monitoring objectives, selecting and deploying appropriate monitoring tools, positioning monitoring capabilities within the infrastructure, collecting logs and metrics from the Private Mendix Platform, Kubernetes, applications, and infrastructure, protecting monitoring data from unauthorized access or modification, increasing monitoring during periods of elevated risk, and distributing monitoring information to designated personnel.

#### Infrastructure and Application Implementers

Infrastructure and Application Implementers integrate infrastructure components, the Private Mendix Platform, and Mendix applications with the customer's monitoring solution, including the export of logs and metrics as required.

#### Infrastructure and Application Operators

Infrastructure and Application Operators ensure the continued, effective integration and operation of monitoring capabilities to support ongoing visibility, analysis, and response to security‑relevant events.
