---
title: "SA-11 (01) - Static Code Analysis"
linktitle: "SA-11 (01)"
url: /private-mendix-platform/nist-controls/sa-1101/
description: "Documents the Private Mendix Platform's compliance with the SA-11 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SA-11 (01) control.

| Control ID | SA-11 (01) |
| --- | --- |
| Control category | SA - System and Services Acquisition |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator,  Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization requires the developer of the information system, system component, or information system service to employ static code analysis tools to identify common flaws and document the results of the analysis.

## Responsibility

### Mendix Responsibility

* Mendix applies static code analysis and resolution to the Mendix Runtime, Mendix Operator, Private Mendix Platform, and Studio Pro in alignment with its internal static code analysis policy.

### Customer Responsibility

* The customer is responsible for requiring the use of static code analysis tools by those implementing and operating the Mendix solution.
* The App Implementer is responsible for leveraging static code analysis tools during the implementation of the Mendix App, including remediating findings as directed by the Customer.
* The App Operator is responsible for leveraging static code analysis while implementing any changes to the Mendix App.

## Guidance

### Mendix Responsibility

* Core component scanning - Perform automated static code analysis on all platform-level components (Operator, Private Mendix Platform) during the internal development lifecycle.
* Vulnerability remediation - Identify common flaws and vulnerabilities in the product source code and resolve them in accordance with the vendor's security policy before public release.

### Customer Responsibility

* Application-level analysis - Use tools like Sigrid to identify flaws within Mendix application models and Microflows.
* Container and dependency scanning - Use tools like Snyk or ECR scan to scan for vulnerabilities in third-party libraries and container images used within the customer's environment.
* Documentation - Maintain records of scan results and remediation actions for all customer-managed components.

## Proof and Remarks

### Tiered Static Analysis Strategy: Platform Core and Customer-Developed Applications

#### Private Mendix Platform Core Security (Mendix Responsibility)

* Internal static analysis evidence - As evidenced by the Sigrid System Overview, Mendix performs continuous and rigorous static code analysis on the core platform components (for example, the `PMP`).

    {{< figure src="/attachments/private-platform/nist-sa/nist-sa-1101-1.png" class="no-border" >}}

* Platform-level remediation (Mendix process):

    * Identified flaws within the PMP infrastructure and platform core are managed and resolved according to the Mendix Vulnerability Management Process.
    * This ensures that any vulnerabilities in Mendix-provided components are prioritized and remediated based on the vendor’s established risk severity timelines.

* Regardless of the component, a follow-up scan (with Sigrid or Snyk) is mandatory after remediation to verify the resolution, ensuring the requirement to document the results is met.
* Independent assurance (SOC 2 Type II Report) - Mendix provides a SOC 2 Type II audit report as independent evidence that its internal SDLC includes formal static code analysis controls. The report verifies that Mendix's development processes consistently include automated security scanning and flaw remediation, ensuring the integrity of the Private Mendix Platform before it reaches the customer.

{{% alert color="info" %}}
Customers and prospects can request access to the latest SOC2 report using [Conveyor](https://app.conveyor.com/profile/mendix).
{{% /alert %}}

#### Customer-developed Application & Infrastructure Scanning and Remediation

* Customer's Mendix app analysis - The App Implementer can use static analysis tools like Sigrid to scan the business logic (Microflows and security rules) of the apps they build. This finds security flaws in the specific Apps developed by the customer.
* Container image and dependency scanning - The Infra Operator uses security tools such as Snyk to conduct static analysis on:

    * Container images - Scanning the cutomer's Mendix app images for OS-level and firmware vulnerabilities.
    * Software dependencies - Identifying flaws in user-defined Java actions or third-party integration libraries incorporated into the Mendix application.

* Infrastructure-as-Code (IaC) scanning - Utilizing tools like Snyk or Checkov to scan Terraform scripts and Kubernetes manifests for potential security misconfigurations.
* Remediation (customer process):

    * For vulnerabilities identified within customer-developed Mendix apps, the Customer or App Operator is responsible for defining and executing their own internal remediation workflow.

        This ensures that business-specific application flaws (for example, custom Microflows or Java actions) are handled according to the Customer’s internal IT security policies and SLAs.

    * The App or Infra Operator coordinates the fix with the development team, and a follow-up scan is conducted to verify the resolution, satisfying the requirement to document the results of the analysis.

#### Result Documentation and Enforcement

* Analysis execution and reporting:

    * Private Mendix Platform - Mendix performs internal scans on the Private Mendix Platform. The analysis results are captured in the Sigrid dashboard , providing a continuous view of the system’s security and architecture health.
    * Customer (app and infra) - The App Operator and Infra Operator use tools like Sigrid and Snyk to generate periodic security and quality reports. These reports identify common flaws in the customer's Mendix Apps, container images, and IaC files.

* Review and remediation process - There is a defined process to review these scan reports on a regular basis. High-severity vulnerabilities or critical weaknesses identified by Snyk or Sigrid are prioritized for remediation. 
* Evidence records - Historical scan reports and snapshots from the Sigrid and Snyk dashboards are maintained as audit evidence. These records prove that the organization proactively identifies flaws and tracks their resolution over time.
