---
title: "CM-06(01) - Configuration Settings (Automated Central Management, Application, Verification)"
linktitle: "CM-06 (01)"
url: /private-mendix-platform/nist-controls/cm-0601/
description: "Documents the Private Mendix Platform's compliance with the CM-06 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-06 (01) control.

| Control ID | CM-06 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization employs automated mechanisms to centrally manage, apply, and verify configuration settings for organization-defined information system components.

### Supplemental Guidance

The following controls are related to this control:

* CA-7
* CM-4

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing configuration management policies and procedures to ensure compliance with federal requirements. The customer must ensure that relevant documentation is maintained, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

The Private Mendix Platform runs on customer-managed infrastructure, and configuration management automation is the responsibility of the customer's infrastructure team.

* Customer - Determines which automated mechanisms are appropriate for security hardening configuration management. Defines the scope of information system components subject to centralized configuration management. Establishes policies, standards, and procedures governing configuration settings.
* Infra Implementer - Implements and configures the selected automated mechanisms to manage infrastructure components. Ensures that configuration settings are applied consistently across all in-scope components. Integrates automated mechanisms with the target environment (for example, Private Mendix Platform infrastructure, underlying operating systems, databases, and network devices).
* Infra Operator - Operates and maintains automated configuration management mechanisms on an ongoing basis. Monitors compliance with established configuration baselines. Addresses configuration drift and remediates non-compliant settings. Verifies that configuration settings remain applied and effective through continuous monitoring or periodic assessments.
