---
title: "SA-04 (08) Continuous Monitoring Plan"
linktitle: "SA-04 (08)"
url: /private-mendix-platform/nist-controls/sa-0408/
description: "Documents the Private Mendix Platform's compliance with the SA-04 (08) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-04 (08) control.

| Control ID | SA-04 (08) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to produce a plan for the continuous monitoring of security control effectiveness that contains an organization-defined level of detail.

## Responsibility

### Mendix Responsibility

* Mendix provides documented continuous security monitoring and vulnerability testing protocols for core Mendix products (Mendix Operator, Runtime, and Private Mendix Platform).
* Mendix ensures that the Platform is engineered to support integration with organizational continuous monitoring strategies.
* The Mendix CVE response strategy aligns with international best practices and is in compliance with the strictest US Federal laws & regulations around vulnerability response.

### Customer Responsibility

* The Infra Implementer is responsible for providing plans for the continuous security effectiveness monitoring of the underlying infrastructure and the Private Mendix Platform instance.
* The App Implementer is responsible for producing a continuous monitoring plan for the Mendix app (custom logic and extensions) at the level of detail required by the organization.
* The Infra and App Operators are responsible for the ongoing upkeep and execution of these security effectiveness plans.

## Guidance

### Mendix Responsibility

* The Mendix Platform components are designed to facilitate ongoing security assessments. It offers standard containers, standard logs, standard permission models and standard scanning interfaces. It is precisely these standardized designs that enable the customer to integrate Private Mendix Platform into his company's Continuous Security Monitoring process.
* Mendix provides documentation around its internal security monitoring and vulnerability testing to assist customers in their SOC2 or FedRAMP compliance efforts.

### Customer Responsibility

* It is the responsibility of the customer to determine the acceptable level of detail for continuous monitoring plans.
* The customer must ensure that the set of planned and deployed security controls (both at the infrastructure and application level) continue to be effective over time despite system changes.

## Proof and Remarks

### Continuous Security Monitoring Strategy

* Vulnerability management - Mendix provides transparency into platform-level vulnerability testing through our certifications available in Conveyor (see below). Customers can reference official Mendix security documentation as a baseline for their continuous monitoring plan.
* Infrastructure monitoring - The Infra Implementer should utilize cloud-native monitoring tools (for example, Azure Monitor, AWS CloudWatch, or Prometheus) to track the security health of the AKS/EKS clusters and container hosts.
* Application-level monitoring - The App Implementer should define specific health checks and security logging (audit trails) within the Mendix app to monitor control effectiveness in real-time.

### Verification Artifacts

* Continuous monitoring plan document - A detailed plan outlining the frequency and methods for security control testing (see the Mendix SOC2/ISO 27001 documentation in Conveyor).
* Security audit logs - Evidence of automated vulnerability scans and security monitoring alerts configured for the Private Mendix Platform environment are below.
* Mendix CVE vulnerability discovery - Mendix utilizes analysis tools (for example, Sigrid or Snyk) to identify CVE vulnerabilities

    Mendix Sigrid dashboard:

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-1.png" class="no-border" >}}

    Mendix Snyk dashboard:

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-2.png" class="no-border" >}}

* CVE vulnerability remediation tracking - Identified flaws are managed and resolved through the Mendix Vulnerability Management process, ensuring that remediation timelines align with the risk severity. High and Critical vulnerabilities found during the *as-built* evaluation are tracked until resolution. A follow-up scan or report is used to confirm that the identified threats have been successfully mitigated before final sign-off.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-3.png" class="no-border" >}}

    For an example release note showing compliant vulnerability fixes, see [Private Mendix Platform 2.0: Fixes](/releasenotes/private-platform/2-0/#fixes).

### Governance and External Assurance

Mendix maintains several comprehensive reports and audits, including a SOC2 Type II report, that independently validate the continuous effectiveness of our security controls over time. These audits and certifications ensure that the monitoring plans described above are executed consistently and meet industry standards.

{{% alert color="info" %}}
Customers and prospects can request access to our latest audits and certifications using [Conveyor](https://app.conveyor.com/profile/mendix).
{{% /alert %}}
