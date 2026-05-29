---
title: "SA-11 (02) - Threat and Vulnerability Analysis"
linktitle: "SA-11 (02)"
url: /private-mendix-platform/nist-controls/sa-1102/
description: "Documents the Private Mendix Platform's compliance with the SA-11 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-11 (02) control.

| Control ID | SA-11 (02) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to perform threat and vulnerability analyses and subsequent testing and evaluation of the as-built system, component, or service. This ensures that security flaws introduced during the design or implementation phases are identified and mitigated prior to deployment.

## Responsibility

### Mendix Responsibility

* Mendix performs ongoing threat and vulnerability testing for the Mendix Runtime, Mendix Operator, Private Mendix Platform, and Studio Pro as part of its secure development lifecycle.
* Mendix is responsible for evaluating the as-built Platform components before release to ensure foundational security.

### Customer Responsibility

* The customer is responsible for ensuring that threat and vulnerability analysis is integrated into their Mendix application release process.
* The Infra Implementer is responsible for performing threat analysis on the infrastructure environment (for example, Private Mendix Platform configuration) during setup.
* The App Implementer is responsible for conducting vulnerability analysis on the finalized Mendix App logic and custom components prior to delivery.
* The Infra and App Operators are responsible for evaluating the security posture of the system after any significant changes or updates to the environment.

## Guidance

### Mendix Responsibility

* Internal Platform testing - Conduct periodic vulnerability assessments on Private Mendix Platform source code and binaries.
* Release evaluation - Use internal tools (for example, Sigrid) to verify that Private Mendix Platform meets predefined security targets before customer delivery.

### Customer Responsibility

* As-built model analysis - Use tools like Sigrid to perform a final security evaluation of the customer-developed Mendix app model (including custom microflows and security rules) to identify logic-level threats.
* Customer app image and supply chain evaluation - Use tools such as Snyk to analyze the finalized Customer Mendix App Image and its specific dependencies (for example, custom Java Actions) for vulnerabilities introduced during the application build phase.
* As-built infrastructure configuration analysis - Use tools like Checkov to analyze the customer-managed Terraform and Kubernetes manifests to ensure no misconfigurations or threats are present in the as-built environment.
* Pre-deployment sign-off - Maintain records of the vulnerability analysis results for all customer-managed apps and verify that all `High` or `Critical` findings are mitigated before production deployment.

## Proof and Remarks

### Threat and Vulnerability Evaluation Strategy for As-Built Systems

#### Private Mendix Platform Core Evaluation (Mendix Responsibility)

* Developer assessment - Mendix performs comprehensive threat and vulnerability testing on the core Private Mendix Platform components (Runtime, Operator, and Private Mendix Platform).
* As-built analysis evidence - As shown in the Sigrid dashboard below, the as-built Private Mendix Platform is evaluated for security and open source health prior to being made available for installation.

#### Application-Level Evaluation (Customer Responsibility)

* As-built app analysis - Before any customer-developed Mendix app is deployed to production, the App Implementer performs a vulnerability analysis on the finalized model. This identifies if any business logic changes have introduced new security risks (for example, unauthorized access in microflows).
* Vulnerability acanning rools:

    * App logic - Using tools like Sigrid to evaluate the security posture of the as-built application model.
    * Infrastructure and images - The App Operator and Infra Operator use tools such as Snyk to analyze the finalized container images and Kubernetes manifests for vulnerabilities or misconfigurations introduced during the build phase.

#### Analysis Frequency and Triggers

* Pre-deployment testing (trigger-based) - Threat and vulnerability analysis is a mandatory step in the pre-deployment checklist for every major release or significant system change. This ensures that the specific as-built version being promoted to production is secure.
* Periodic assessment - In addition to release-based testing, the organization performs periodic security reviews (for example, monthly) to account for newly discovered threats (zero-day vulnerabilities) against the existing environment.

#### Documentation of Results

* Exported analysis reports: Evidence of evaluation is maintained through exported PDF and Excel reports from the analysis tools (Sigrid or Snyk). These reports document the identified vulnerabilities, their severity, and the date of evaluation.

    Mendix Sigrid dashboard:

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-1.png" class="no-border" >}}

    Mendix Snyk dashboard:

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-2.png" class="no-border" >}}

* Flaw remediation tracking - Identified flaws are managed and resolved through the Mendix Vulnerability Management Process, ensuring that remediation timelines align with the risk severity. High and Critical vulnerabilities found during the "as-built" evaluation are tracked until resolution. A follow-up scan or report is used to confirm that the identified threats have been successfully mitigated before final sign-off.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-3.png" class="no-border" >}}

    For an example release note showing compliant vulnerability fixes, see [Private Mendix Platform 2.0: Fixes](/releasenotes/private-platform/2-0/#fixes).