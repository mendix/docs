---
title: "SI-04 (22) Information System Monitoring - Unauthorized Network Services"
linktitle: "SI-04 (22)"
url: /private-mendix-platform/nist-controls/si-0422/
description: "Documents the Private Mendix Platform's compliance with the SI-04 (22) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-04 (22) control.

| Control ID | SI-04 (22) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | DOD IMPACT LEVEL 4 |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system detects network services that have not been authorized or approved by organization-defined authorization or approval processes and one or more of the following:

* Audits
* Alerts for organization-defined personnel or roles.

### Supplemental Guidance

Unauthorized or unapproved network services include, for example, services in service-oriented architectures that lack organizational verification or validation and therefore may be unreliable or serve as malicious rogues for valid services.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility.

## Guidance

Organizations implement controls to detect unauthorized network services in alignment with defined security requirements, network architecture, and business objectives.

### Customer Responsibility

The customer establishes network service authorization and approval processes and selects and configures mechanisms to identify unapproved or unauthorized services, including defining whether detection results are audited, alerted on, or both, and ensuring notifications are routed to designated personnel for timely response.

Unauthorized network service detection is supported through mechanisms such as network scanning tools, Kubernetes admission controllers, service mesh policies controlling service‑to‑service communications, SIEM integrations for centralized monitoring and alerting, and periodic audits of deployed services against an approved service catalog.

#### Infrastructure and Application Implementers

Infrastructure and Application Implementers implement detection and authorization controls in accordance with Customer‑defined requirements.

#### Infrastructure and Application Operators

Infrastructure and Application Operators maintain ongoing compliance and respond to identified unauthorized network services in accordance with established procedures. Detection tools, authorization policies, and monitoring configurations are periodically reviewed and updated to ensure continued effectiveness.
