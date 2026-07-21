---
title: "CM-04 Security Impact Analysis"
linktitle: "CM-04"
url: /private-mendix-platform/nist-controls/cm-04/
description: "Documents the Private Mendix Platform's compliance with the CM-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-04 control.

| Control ID | CM-04 |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization analyzes changes to the information system to determine potential security impacts prior to change implementation.

### Supplemental Guidance

Organizational personnel with information security responsibilities (for example, Information System Administrators, Information System Security Officers, Information System Security Managers, and Information System Security Engineers) conduct security impact analyses. Individuals conducting security impact analyses possess the necessary skills and technical expertise to analyze the changes to information systems and the associated security ramifications.

Security impact analysis may include, for example, reviewing security plans to understand security control requirements and reviewing system design documentation to understand control implementation and how specific changes might affect the controls. Security impact analyses may also include assessments of risk to better understand the impact of the changes and to determine if additional security controls are required. Security impact analyses are scaled in accordance with the security categories of the information systems.

The following controls are related to this control:

* CA-02
* CA-07
* CM-03
* CM-09
* SA-04
* SA-05
* SA-10
* SI-02

For more information, refer to NIST Special Publication 800-128.

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes assessing the overall security impacts of changes to the information system prior to implementation to ensure compliance with federal requirements. The customer must ensure that security impact analysis processes, roles, and documentation requirements are documented, reviewed, and enforced within their environment.

#### Infra Implementer

The Infra Implementer is responsible for detailing the infrastructure architecture and security structure to support security impact analysis.

#### App Implementer

The App Implementer is responsible for detailing the Mendix App architecture and security structure to support security impact analysis.

#### Infra Operator

The Infra Operator is responsible for assessing and reporting on the security impacts of potential infrastructure updates.

#### App Operator

The App Operator is responsible for assessing and reporting on the security impacts of potential Mendix app updates.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-128, which establish requirements for analyzing the security impacts of changes to information systems prior to implementation. Customers operating within a FedRAMP or DoD SRG environment must ensure that all changes to the information system undergo security impact analysis by qualified personnel before they are applied to production environments.

To meet these requirements, the customer must carry out the following actions:

1. Establish security impact analysis processes.

    The customer must establish formal security impact analysis processes that require all changes to the information system to be evaluated for security implications prior to implementation. This includes defining roles and responsibilities for conducting analyses, approval workflows, and documentation requirements in accordance with NIST SP 800-128.

2. Ensure architecture and security documentation

    The Infra Implementer must detail the infrastructure architecture and security structure, and the App Implementer must detail the Mendix app architecture and security structure. This documentation must be maintained current to support effective security impact analysis of proposed changes per NIST SP 800-53 SA-5 requirements.

3. Require security impact reporting for updates.

    The Infra Operator must assess and report on the security impacts of potential infrastructure updates, and the App Operator must assess and report on the security impacts of potential Mendix App updates. All security impact assessments must be reviewed and approved by the Customer before changes are implemented.

#### Infra Implementer

The Infra Implementer is responsible for maintaining detailed documentation of the infrastructure architecture and security structure. This documentation serves as the baseline for security impact analysis when changes are proposed to the infrastructure.

The Infra Implementer must perform the following tasks:

* Create and maintain comprehensive documentation of the infrastructure architecture, including network diagrams, security boundaries, data flows, and security control implementations.
* Maintain security configuration baselines for all infrastructure components, enabling comparison and impact assessment when changes are proposed.
* Provide technical expertise and infrastructure documentation to support the customer's security impact analysis process when infrastructure changes are proposed.

#### App Implementer

The App Implementer is responsible for maintaining detailed documentation of the Mendix application architecture and security structure. This documentation supports security impact analysis when application changes are proposed.

The App Implementer must perform the following tasks:

* Create and maintain comprehensive documentation of the Mendix application architecture, including data models, security roles, access controls, and integration points.
* Maintain documentation of all application-level security controls, including authentication mechanisms, authorization rules, input validation, and encryption configurations.
* Provide technical expertise and application documentation to support the customer's security impact analysis process when application changes are proposed.

#### Infra Operator

The Infra Operator is responsible for assessing and reporting on the security impacts of potential infrastructure updates, including patches, configuration changes, and platform upgrades, before they are implemented.

The Infra Operator must perform the following tasks:

* Before applying infrastructure updates, analyze the potential security impacts by reviewing release notes, security advisories, and change documentation against the current infrastructure security configuration.
* Document the results of security impact assessments and report findings to the customer for review and approval before implementing infrastructure changes.
* Where possible, test infrastructure changes in non-production environments to validate that security controls remain effective after the change is applied.

#### App Operator

The App Operator is responsible for assessing and reporting on the security impacts of potential Mendix app updates, including application changes, dependency updates, and configuration modifications, before they are implemented.

The App Operator must perform the following tasks:

* Before applying Mendix application updates, analyze the potential security impacts by reviewing change documentation, dependency updates, and Mendix release notes against the current application security configuration.
* Document the results of security impact assessments and report findings to the customer for review and approval before implementing application changes.
* Test application changes in separate environments to validate that security controls remain effective and that no new vulnerabilities are introduced before promoting to production.