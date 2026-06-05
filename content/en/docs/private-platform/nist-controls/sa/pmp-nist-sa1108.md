---
title: "SA-11 (08) - Dynamic Code Analysis"
linktitle: "SA-11 (08)"
url: /private-mendix-platform/nist-controls/sa-1108/
description: "Documents the Private Mendix Platform's compliance with the SA-11 (08) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-11 (08) control.

| Control ID | SA-11 (08) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | DOD IMPACT LEVEL 4 |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to employ dynamic code analysis tools to identify common flaws and document the results of the analysis. Dynamic analysis provides run-time verification of software programs, focusing on issues such as user privilege escalation and security functional performance.

## Responsibility

### Mendix Responsibility

* Mendix ensures the foundational security of core platform services (for example, Private Mendix Platform) by conducting periodic, comprehensive third-party Penetration Testing. This manual dynamic assessment identifies complex execution-time vulnerabilities and logic flaws within the Private Mendix Platform environment.

### Customer Responsibility

* The customer is responsible for the overall dynamic security assessment of the deployed Mendix solution.
* The App Implementer and App Operator are responsible for performing run-time verification, including penetration testing, to identify vulnerabilities in the customer-developed Mendix app and the Private Mendix Platform environment.
* The Infrastructure Implementer and Operator are responsible for the dynamic analysis of the software runtime environment, specifically focusing on identifying and mitigating risks related to privilege escalation and infrastructure-level security misconfigurations.

## Guidance

### Mendix Responsibility

* Independent dynamic assessment - Mendix engages independent security experts to perform regular penetration tests on Private Mendix Platform and all related tools. These assessments simulate real-world attack scenarios to validate the security of the software during runtime and identify flaws that cannot be detected by static analysis alone.

### Customer Responsibility

* Penetration Ttesting (advanced dynamic analysis) - Conduct periodic penetration tests (Pen Tests) on the running Private Mendix Platform and associated Mendix apps. This goes beyond automated scanning by simulating real-world attacks to identify complex logic and privilege flaws.
* Automated dynamic and runtime analysis - Utilize automated Dynamic Application Security Testing (DAST) tools and runtime security monitoring (such as Falco or container security scanners) to continuously analyze the software environment for active threats and unauthorized process behaviors.
* Remediation management - Establish a clear process for reviewing Pen Test findings. `High` and `Critical` vulnerabilities must be remediated promptly, followed by verification testing.
* Security rule testing - Use run-time evaluation to ensure that Mendix security roles and data access rules are strictly enforced within the private cloud environment.
* Vulnerability management - The organization follows the customer's Vulnerability Management process to categorize, prioritize, and remediate findings identified during scanning and testing.

## Proof and Remarks

* The Private Mendix Platform team has conducted a comprehensive penetration test on the Private Mendix Platform environment. This test specifically targeted the Platform's run-time security and identified potential flaws that are only detectable while the system is operational. This third-party assessment serves as the primary dynamic analysis for the infrastructure layer.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-1108-1.png" alt="Snapshot of the" class="no-border" >}}

    {{% alert color="info" %}}
    Redacted Pen-Test reports and compliance are available by request through [Conveyor](https://app.conveyor.com/profile/mendix).
    {{% /alert %}}

* Vulnerability remediation action and records - Based on the findings listed in the Pen Test reports, the Private Mendix Platform team implementes fixes for the identified issues. These remediation actions demonstrate proactive dynamic security management. All progress is documented and tracked to resolution.
* Process compliance - Remediation of findings from Pen Tests and dynamic scans are executed in strict accordance with the Mendix Vulnerability Management process.

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-0408-3.png" alt="Snapshot of the" class="no-border" >}}

    For an example release note showing compliant vulnerability fixes, see [Private Mendix Platform 2.0: Fixes](/releasenotes/private-platform/2-0/#fixes).
