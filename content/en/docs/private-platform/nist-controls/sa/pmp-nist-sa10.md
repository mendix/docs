---
title: "SA-10 - Developer Configuration Management"
linktitle: "SA-10"
url: /private-mendix-platform/nist-controls/sa-10/
description: "Documents the Private Mendix Platform's compliance with the SA-10 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-10 control.

| Control ID | SA-10 |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to: 

* Perform configuration management.
* Document, manage, and control the integrity of changes.
* Implement only organization-approved changes.
* Document approved changes and potential security impacts.
* Track security flaws and flaw resolution.

## Responsibility

### Mendix Responsibility

* Mendix is responsible for providing comprehensive Change Management for the core platform components, including the Private Mendix Platform, Mendix Operator, Mendix Studio Pro, and Mendix Runtime, ensuring the stability and integrity of the underlying infrastructure.
* Mendix is responsible for empowering customers to implement their own Change Management by providing flexible integration capabilities, including:

    * VCS integration - Supporting seamless connection with the customer's Version Control Systems to manage application source code.
    * CI/CD pipeline integration - Providing robust APIs to facilitate automated build, test, and deployment processes within the customer's existing DevOps ecosystem.
    * Lifecycle Management - Offering the Private Mendix Platform UI as a centralized interface for Customers to monitor and manage the status and transitions of their Mendix application landscape.

### Customer Responsibility

* The customer is responsible for identifying and defining the appropriate configuration management, change management, and security vulnerability policies and procedures.
* The Infra and App Implementers are responsible for complying with these policies during the design, implementation, and modification of the Mendix solution, ensuring the integrity of IaC templates and platform manifests.
* The Infra and App Operators are responsible for maintaining configuration control and documenting all changes throughout the system's operational lifecycle.
* Mendix is responsible for providing Change Management capabilities for customer integration within Private Mendix Platform, Mendix Operator, Mendix Studio Pro, and Mendix Runtime.

## Guidance

### Customer Responsibility

* Baseline integrity - Establish and maintain the integrity of configuration items (for example, source code, Helm charts, EKS definitions) using a centralized version control system.
* Controlled implementation - Ensure that only authorized and tested changes are deployed to the environment via structured CI/CD pipelines.
* Security impact analysis - Evaluate and document the potential security implications of configuration changes (for example, upgrading JDK or modifying Security Groups) prior to implementation.

## Proof and Remarks

### Customer-Led Configuration Management and Change Integrity

#### Integrity Control via Infrastructure-as-Code (Infra Implementer)

* Version-controlled master copies - All infrastructure definitions (Terraform) and platform deployment manifests are stored in VCS like GitLab, serving as the "master copies" for the system. This prevents unauthorized modification or destruction of security-relevant materials.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-10-1.png" class="no-border" >}}

    For more information, see [Terraform Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs).

#### Platform Configuration and Flaw Tracking (App Implementer)

* Change documentation - Major system modifications, such as the upgrade to JDK 21, are managed as distinct configuration changes. The testing and validation records for these updates serve as evidence of documenting approved changes and their security impacts.
* Secure implementation - Only organization-approved container images and platform settings are implemented, verified by the automated deployment logs which ensure the running version matches the approved configuration items.

#### Audit Trail and Integrity Maintenance

* Immutable logs - The CI/CD pipeline history and Git commit logs provide a complete, time-stamped record of all changes, satisfying the requirement to track and manage configuration items throughout the system development life cycle.

    For more information, see the following documents:

    * [Git - Reference](https://git-scm.com/docs)
    * [CI/CD job logs | GitLab Docs](https://docs.gitlab.com/ci/jobs/job_logs/)

* Flaw resolution - Evidence of using vulnerability scanning and platform updates to track and resolve security flaws within the system components (for example, patching base images).

    * [Snyk Container | Snyk User Docs](https://docs.snyk.io/scan-with-snyk/snyk-container)
    * [Sigrid documentation](https://docs.sigrid-says.com/)

### Mendix-Led Configuration Management and Change Integrity

#### Platform-Led Verification & Change Governance (Mendix Responsibility)

* Approval gate - The platform utilizes a verification-based change model. Changes are validated through designated testing environments where results are documented within the corresponding Jira tickets.
* Approval authority - The successful completion of defined test cases, evidenced by status transitions in Jira, serves as the formal technical approval gate. This ensures that only verified and authorized modifications are promoted to the PMP release branch.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-10-2.png" class="no-border" >}}

#### Platform Integrity through Independent Audits (Mendix Responsibility)

* Third-party validation - Mendix maintains an independent SOC 2 Type II report, which provides external validation that appropriate change management controls are in place and operating effectively across all Mendix product lifecycles, including Private Mendix Platform, Mendix Runtime, Mendix Operator, and Studio Pro.
* SDLC compliance - This audit confirms that Mendix follows a secure Software Development Life Cycle (SDLC) where every platform update - including security patches and feature enhancements - undergoes formal risk assessment, testing, and approval before being released to customers.

    {{% alert color="info" %}}
    Customers and prospects can request access to the latest SOC2 report using [Conveyor](https://app.conveyor.com/profile/mendix).
    {{% /alert %}}