---
title: "AC-17 (01) Remote Access (Automated Monitoring and Control)"
linktitle: "AC-17 (01)"
url: /private-mendix-platform/nist-controls/ac-1701/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (01) control.

| Control ID | AC-17 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The information system monitors and controls remote access methods.

### Supplemental Guidance

Automated monitoring and control of remote access sessions allows organizations to detect cyber attacks and also ensure ongoing compliance with remote access policies by auditing connection activities of remote users on a variety of information system components (for example, servers, workstations, notebook computers, smart phones, and tablets). 

The following controls are related to this control:

* AU-2
* AU-12

## Responsibility

### Customer Responsibility

The monitoring of emote usage and usage restrictions must be defined by the customer and their infrastructure implementer. The infrastructure operator performs and maintains this monitoring. 

## Guidance

Monitoring and control of remote access is handled by the customer's organizational and infrastructure teams:

* Customers and their infrastructure implementers must define what remote access methods are allowed, and how these sessions will be monitored and restricted.
* The infrastructure operator is responsible for operating, maintaining, and reporting on monitoring activities, including collection and review of relevant audit logs.
* Customers should ensure compliance with organizational remote access policies by regularly reviewing audit trails and access reports, and by implementing necessary technical and procedural controls.
* Where applicable, customers may integrate audit logs and remote access monitoring with broader organizational security systems (such as SIEM/SOAR tools) for automated alerting and analysis.

Mendix does not provide native monitoring or control of remote access within Private Mendix Platform, nor is Mendix responsible for implementing or operating these monitoring controls.

## Proof and Remarks

For more information about configuring monitoring tools, see [Monitoring Environments in Mendix on Kubernetes](/developerportal/deploy/private-cloud-monitor/).