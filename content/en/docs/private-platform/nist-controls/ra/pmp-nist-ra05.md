---
title: "RA-05 Vulnerability Scanning"
linktitle: "RA-05"
url: /private-mendix-platform/nist-controls/ra-05/
description: "Documents the Private Mendix Platform's compliance with the RA-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the RA-05 control.

| Control ID | RA-05 |
| --- | --- |
| Control category | RA - Risk Assessment |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Org |

## Control

The organization:

* Scans for vulnerabilities in the information system and hosted applications at an organization-defined frequency, and/or randomly in accordance with organization-defined process and when new vulnerabilities potentially affecting the system/applications are identified and reported.
* Employs vulnerability scanning tools and techniques that facilitate interoperability among tools and automate parts of the vulnerability management process by using standards for:

    * Enumerating platforms, software flaws, and improper configurations.
    * Formatting checklists and test procedures.
    * Measuring vulnerability impact.

* Analyzes vulnerability scan reports and results from security control assessments.
* Remediates legitimate vulnerabilities at organization-defined response times, in accordance with an organizational assessment of risk.
* Shares information obtained from the vulnerability scanning process and security control assessments with organization-defined personnel or roles to help eliminate similar vulnerabilities in other information systems (i.e., systemic weaknesses or deficiencies).

### Supplemental Guidance

Security categorization of information systems guides the frequency and comprehensiveness of vulnerability scans. Organizations determine the required vulnerability scanning for all information system components, ensuring that potential sources of vulnerabilities such as networked printers, scanners, and copiers are not overlooked. Vulnerability analyses for custom software applications may require additional approaches such as static analysis, dynamic analysis, binary analysis, or a hybrid of the three approaches. Organizations can employ these analysis approaches in a variety of tools (e.g., web-based application scanners, static analysis tools, binary analyzers) and in source code reviews. 

Vulnerability scanning includes, for example:

* Scanning for patch levels.
* Scanning for functions, ports, protocols, and services that should not be accessible to users or devices
* Scanning for improperly configured or incorrectly operating information flow control mechanisms.

Organizations consider using tools that express vulnerabilities in the Common Vulnerabilities and Exposures (CVE) naming convention and that use the Open Vulnerability Assessment Language (OVAL) to determine/test for the presence of vulnerabilities. Suggested sources for vulnerability information include the Common Weakness Enumeration (CWE) listing and the National Vulnerability Database (NVD). In addition, security control assessments such as red team exercises provide other sources of potential vulnerabilities for which to scan. Organizations also consider using tools that express vulnerability impact by the Common Vulnerability Scoring System (CVSS).

The following controls are related to this control:

* CA-2 
* CA-7
* CM-4
* CM-6
* RA-2
* RA-3
* SA-11
* SI-2

For more information,  NIST Special Publications 800-40, 800-70, 800-115; [CWE](http://cwe.mitre.org), [National Vulnerability Database](http://nvd.nist.gov).

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level. This responsibility encompasses the entire platform ecosystem, including the Mendix Runtime, Studio Pro, and other associated platform components( Mendix Operator, PCLM,ect) and services (Private Mendix Platform).

Mendix performs comprehensive vulnerability scanning on these platform releases using a variety of industry-standard tools, such as Snyk, AWS Inspector, and Sysdig.

#### Pre-Release Remediation

As a critical part of the development lifecycle, Mendix identifies and remediates all critical vulnerabilities within the Mendix Runtime, Studio Pro, and  other associated platform components prior to each release. This ensures that the foundational components provided to customers are scanned and secured in accordance with organizational risk assessments before they are deployed.

### Customer Responsibility

Customer is responsible for implementing this control in an appropriate manner in their organization. This includes determining vulnerability scanning tools, frequencies, and processes for their Private Mendix Platform implementation, and analyzing, triaging, and reporting on vulnerability scan results to ensure compliance with federal requirements. The customer must ensure that vulnerability scanning procedures are documented, executed at organization-defined frequencies, and that legitimate vulnerabilities are remediated in accordance with organization-defined response times within their environment.

## Guidance

### Mendix Responsibility

Mendix implements a comprehensive Security Vulnerability Policy and procedures that govern how the organization receives and responds to security vulnerabilities reported in Mendix products. When security vulnerabilities are identified through scanning or other means and reported to Mendix, the company responds in compliance with applicable laws and regulations. The Mendix platform's security response process includes vulnerability assessment, risk evaluation, prioritization based on severity and impact, and timely remediation for vulnerabilities inherent to the Mendix products themselves.

Mendix's vulnerability management applies to the core Mendix platform components, and Runtime environment.

* Collaborate on application vulnerability analysis.

    Work with the Customer to analyze vulnerability scan results related to the Mendix Private Platform, providing technical expertise on application-level vulnerabilities including custom code flaws, insecure configurations, improper input validation, authentication/authorization weaknesses, and potential attack vectors specific to the Mendix application.

* Remediate application vulnerabilities during development.

    Address and remediate legitimate vulnerabilities identified in the Mendix Private Platform during initial implementation within the Customer defined response times, employing secure coding practices, static and dynamic analysis, code reviews, security testing, and following NIST SP 800-115 guidance for web application security assessments.

* Implement secure application configuration.

    Ensure the Private Mendix Platform is configured with appropriate role-based access controls, input validation, output encoding, secure session management, and security hardening as defined in the Mendix Security Guide

### Customer Responsibility

The Customer is responsible for implementing this control appropriately within their organization for their Mendix solution. This encompasses the following, with specific roles (Infra Implementer, Infra Operator, App Operator,App Implementer) often falling under the broader Customer responsibility:

* Establishing and executing comprehensive vulnerability scanning.

    * Tooling, frequency, and process definition: The Customer is solely responsible for determining the appropriate vulnerability scanning tools, the frequency of scans, and the overall scanning processes for their Mendix solution. This determination must align with the organization's risk assessment and federal compliance requirements.
    * Documentation: The Customer shall maintain thorough documentation of their vulnerability scanning procedures, including details on tools utilized, scanning schedules, scope definitions, and the process for handling scan results

* Vulnerability remediation and risk management for solution implementation.

    * Remediation ownership: The Customer is responsible for developing and executing a robust vulnerability remediation plan. This includes ensuring that legitimate vulnerabilities identified in the Mendix solution (resulting from solution implementation, custom code, or configuration, rather than core Mendix products) are addressed within organization-defined response times.

#### Role-Specific Remediation

* Infra Implementer: Collaborates with the Customer in analyzing security vulnerability results and remediates vulnerabilities found in the initial implementation of the infrastructure and Private Mendix Platform.
* Infra Operator: Provides ongoing remediation of vulnerabilities found in the infrastructure and Private Mendix Platform implementation over the lifecycle of the Mendix solution.
* App Implementer: Responsible for scanning and remediating vulnerabilities within the Mendix Application during the development and deployment phases. This includes performing static analysis (SAST) on custom Java actions, reviewing Mendix Marketplace modules, and ensuring that the application logic and security model (e.g., XPath constraints, page access) do not introduce weaknesses.
* App Operator: Responsible for the ongoing security monitoring and remediation of the Mendix applications in production. This includes performing regular dynamic scans (DAST), monitoring for new vulnerabilities in application-level dependencies, and ensuring the application is updated or patched when vulnerabilities are identified in the custom-built solution.

## Proof and Remarks

For more information about CVE, refer to the following documents:

* [Private Mendix Platform Release Notes](/releasenotes/private-platform/)
* [Mendix on Kubernetes Release Notes](/releasenotes/developer-portal/mendix-for-private-cloud/)

The following screenshots shows an example of a Private Mendix Platform FIPS scan CI:

{{< figure src="/attachments/private-platform/nist-ra/nist-ra-05-1.png" class="no-border" >}}

The following screenshots shows an example of a Runtime scan:

{{< figure src="/attachments/private-platform/nist-ra/nist-ra-05-2.png" class="no-border" >}}

The following screenshots shows an example of a Studio Pro scan:

{{< figure src="/attachments/private-platform/nist-ra/nist-ra-05-3.png" class="no-border" >}}