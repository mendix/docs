---
title: "SI-11 Error Handling"
linktitle: "SI-11"
url: /private-mendix-platform/nist-controls/si-11/
description: "Documents the Private Mendix Platform's compliance with the SI-11 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-11 control.

| Control ID | SI-11 |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system: 

* Generates error messages that provide information necessary for corrective actions without revealing information that could be exploited by adversaries.
* Reveals error messages only to organization-defined personnel or roles.

### Supplemental Guidance

Organizations carefully consider the structure and content of error messages. The extent to which information systems are able to identify and handle error conditions is guided by organizational policy and operational requirements. Information that could be exploited by adversaries includes, for example, erroneous logon attempts with passwords entered by mistake as the username, mission/business information that can be derived from (if not stated explicitly by) information recorded, and personal information such as account numbers, social security numbers, and credit card numbers. In addition, error messages may provide a covert channel for transmitting information.

The following controls are related to this control:

* AU-2
* AU-3
* SC-31.

## Responsibility

### Mendix Responsibility

The Private Mendix Platform ensures platform‑ and runtime‑level error handling returns sanitized, non‑sensitive messages to users while securely logging detailed error information for authorized administrative access only.

### Customer Responsibility

Customers ensure application error messages do not expose sensitive or internal information and configure production logging to capture necessary diagnostics without enabling debug or verbose output.

## Guidance

### Mendix Responsibility

#### Platform‑level (Private Mendix Platform)

Private Mendix Platform provides platform‑level error handling that ensures error messages returned to users are generally phrased and contain minimal technical detail. Error responses include non‑sensitive error codes that can be used by privileged, organization‑defined infrastructure operators to further investigate issues using protected runtime and event logs. Detailed diagnostic information is retained within platform and runtime logging mechanisms and is not exposed to end users.

#### Responsibility and Configuration

The customer is responsible for determining which users and roles are authorized to view error messages at defined levels of detail for the Mendix solution. Based on these directives, the Infra Implementer configures the infrastructure and Private Mendix Platform to ensure that error messages and error‑related information are exposed only to the users and roles authorized by the customer. The App Implementer ensures that Mendix applications enforce the same role‑based restrictions when presenting application‑level error messages.

#### Operational Measures

The Infra Operator and App Operator are responsible for ensuring ongoing compliance with customer‑defined directives related to error visibility. This includes maintaining appropriate access controls on error logs and verifying that error exposure remains aligned with defined role‑based policies as applications, platform configurations, and infrastructure components evolve.

## Proof and Remarks

Evidence of compliance:

* Private Mendix Platform error messages show generic information to end users with error codes for troubleshooting

    {{< figure src="/attachments/private-platform/nist-si/nist-si-11-1.png" class="no-border" >}}

* Detailed error information is available only in logs accessible to privileged users

    {{< figure src="/attachments/private-platform/nist-si/nist-si-11-2.png" class="no-border" >}}