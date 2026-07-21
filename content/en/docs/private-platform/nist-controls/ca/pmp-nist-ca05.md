---
title: "CA-05 Plan of Action and Milestones"
linktitle: "CA-05"
url: /private-mendix-platform/nist-controls/ca-05/
description: "Documents the Private Mendix Platform's compliance with the CA-07 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CA-05 control.

| Control ID | CA-05 |
| --- | --- |
| Control category | CA - Security Assessment and Authorization |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization:

* Develops a plan of action and milestones for the information system to document the organization's planned remedial actions to correct weaknesses or deficiencies noted during the assessment of the security controls and to reduce or eliminate known vulnerabilities in the system.
* Updates existing plan of action and milestones [Assignment: organization-defined frequency] based on the findings from security controls assessments, security impact analyses, and continuous monitoring activities. 

### Supplemental Guidance

Plans of action and milestones are key documents in security authorization packages and are subject to federal reporting requirements established by OMB.

The following controls are related to this control:

* CA-02
* CA-07
* CM-04
* PM-04

For more information, refer to the OMB Memorandum 02-01 and NIST Special Publication 800-37.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes developing and updating plans of action and milestones (POAMs) based on vulnerabilities found in the implemented Mendix App and associated infrastructure to ensure compliance with federal requirements. The customer must ensure that POAM processes, timelines, and remediation tracking are documented, reviewed, and enforced within their environment.

The Infra Implementer is responsible for addressing specific infrastructure vulnerabilities as dictated by the POAM process.

The App Implementer is responsible for addressing specific application vulnerabilities as dictated by the POAM process.

The Infra Operator is responsible for ongoing remediation of infrastructure vulnerabilities identified through the POAM process.

The App Operator is responsible for ongoing remediation of application vulnerabilities identified through the POAM process.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-37 and OMB Memorandum 02-01, which establish requirements for developing and maintaining plans of action and milestones as part of the security authorization process. Customers operating within a FedRAMP or DoD SRG environment must ensure that POAMs are developed for all identified weaknesses and updated based on ongoing security assessments and continuous monitoring activities.

Mendix, as a managed platform provider, maintains its own internal vulnerability remediation processes and responds to vulnerabilities in the Mendix Operator, Private Mendix Platform, Mendix Runtime, and Studio Pro through documented security advisories and timely release cycles. However, the development and maintenance of the customer's system-wide POAM remains a customer responsibility.

To meet these requirements, the customer must carry out the following actions:

1. Develop and maintain POAMs.

    The customer must develop and update plans of action and milestones based on vulnerabilities found in the implemented Mendix App and associated infrastructure. POAMs must document planned remedial actions, responsible parties, and target completion dates in accordance with NIST SP 800-37 and OMB reporting requirements.

2. Assign remediation responsibilities.

    The customer must assign specific vulnerability remediation tasks to the Infra Implementer, App Implementer, Infra Operator, and App Operator, as dictated by the POAM process. Each party must address vulnerabilities in the components they own within the regulation-required timeframes. The customer should also track Mendix security advisories and platform updates as part of the overall POAM process.

3. Update POAMs based on continuous monitoring.

    The customer must update existing POAMs at organization-defined frequencies based on findings from security control assessments, security impact analyses, and continuous monitoring activities per NIST SP 800-37 and CA-07 continuous monitoring requirements.

## Proof and Remarks

### Mendix Platform Vulnerability Response Process

While CA-05 is fundamentally a customer responsibility (developing and maintaining the organization's POAM), the customer must track Mendix's own vulnerability remediation as a component of the broader POAM. Mendix maintains documented vulnerability response and release procedures.

### Mendix Security Advisories and Release Notes

Mendix publishes security advisories and release notes for the Mendix Operator, Private Mendix Platform, Mendix Runtime, and Studio Pro that document:

* Vulnerability identification (CVE IDs, severity levels, affected components)
* Remediation status and timelines (when a fix will be available)
* Required upgrade paths (which versions include the fix)
* Technical details (to support customer impact analysis)

For more information, see:

* [Security Advisories](/releasenotes/security-advisories/)
* [Private Mendix Platform Release Notes](/releasenotes/private-platform/)

### Integration into Customer POAMs

The customer must integrate Mendix security advisory information into their POAM process by:

* Monitoring Mendix security releases and advisories
* Assessing impact to customer-developed Mendix apps and Private Mendi Platform deployments
* Planning remediation (applying updates to Mendix platform components within required timeframes)
* Tracking status (documenting when Mendix platform updates have been deployed and validated)

### Scope Clarification

The customer is responsible for developing, maintaining, and executing the overall POAM for the information system.

Mendix is responsible for publishing timely security advisories and providing patched releases for Mendix platform components.

Infrastructure and Application Implementers and Operators are responsible for implementing specific remedial actions within their respective domains as directed by the customer's POAM.