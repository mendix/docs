---
title: "CA-01 - Security Assessment and Authorization Policy and Procedures"
linktitle: "CA-01"
url: /private-mendix-platform/nist-controls/ca-05/
description: "Documents the Private Mendix Platform's compliance with the CA-01 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CA-01 control.

| Control ID | CA-01 |
| --- | --- |
| Control category | CA - Security Assessment and Authorization |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The organization:

* Develops, documents, and disseminates the following to organization-defined personnel or roles:

    * A security assessment and authorization policy that addresses purpose, scope, roles, responsibilities, management commitment, coordination among organizational entities, and compliance.
    * Procedures to facilitate the implementation of the security assessment and authorization policy and associated security assessment and authorization controls.

* Reviews and updates the following:

    * Current security assessment and authorization policy  organization-defined frequency
    * Current security assessment and authorization procedures organization-defined frequency.

### Supplemental Guidance

This control addresses the establishment of policy and procedures for the effective implementation of selected security controls and control enhancements in the CA family. Policy and procedures reflect applicable federal laws, Executive Orders, directives, regulations, policies, standards, and guidance. Security program policies and procedures at the organization level may make the need for system-specific policies and procedures unnecessary. 

The policy can be included as part of the general information security policy for organizations or conversely, can be represented by multiple policies reflecting the complex nature of certain organizations. The procedures can be established for the security program in general and for particular information systems, if needed. The organizational risk management strategy is a key factor in establishing policy and procedures.

The following controls are related to this control:

* PM-09

For more information, refer to the NIST Special Publications 800-12, 800-37, 800-53A, and 800-100.

## Responsibility

### Mendix Responsibility

Mendix currently scans the Platform releases using tools such as Snyk, AWS Inspector, or Sysdig. As a rule, Mendix does not release a new version with Critical or High CVEs, and would aim to resolve them before they even make it to release.

It a Mendix policy to adhere to all relevant and applicable laws, Executive Orders, directives, regulations, policies, standards, and guidance within the jurisdictions where Mendix operates.

General Mendix security certifications and policies are available on Conveyor. We adhere to vulnerability regulations as required.  Specifically, we aim to remediate vulnerabilities with the following timelines:

* Within 7 days for Criticals
* Within 30 days for Highs
* Within 90 days for Mediums
* Within 180 days for Lows

## Proof and Remarks

### Overview

This document outlines the process for managing Common Vulnerabilities and Exposures (CVEs) for Private Mendix Platform. We utilize multiple scanning tools integrated into our GitLab CI/CD pipeline to detect, assess, and remediate vulnerabilities in all Private Mendix Platform container images and their components.  

### Tools and Integrations

Mendix currently uses the following tools for comprehensive vulnerability scanning:  

| Tool | Purpose | Scan Frequency |
| --- | --- | --- |
| AWS Inspector | Scans OS and application-level vulnerabilities in all Private Mendix Platform images and components. | Weekly (or on image rebuild) |
| Snyk | Scans dependencies (libraries, packages) in all Private Mendix Platform components. | Weekly (or on dependency updates) |
| Sysdig | Runtime security and vulnerability scanning for all deployed images. | Continuously (in production) |

All tools are integrated into GitLab CI/CD pipelines and trigger automated scans.

{{< figure src="/attachments/private-platform/nist-ca/nist-ca-01-1.png" class="no-border" >}}

### Scanning Process for Private Mendix Platform Container Images and Components

All images (Private Mendix Platform base images, Operator, svix-server, and so on) are scanned by AWS Inspector, Snyk, and Sysdig.  

Scans run at the following frequencies:  

* On every build (CI pipeline)
* Weekly (scheduled scans for all components)

If a new CVE is detected, the pipeline generates a report and enforces security gates.

### Alerting & Remediation

#### Email Alerts

If a High or Critical CVE is detected, an automated email is sent to the appropriate team within Mendix.

{{< figure src="/attachments/private-platform/nist-ca/nist-ca-01-2.png" class="no-border" >}}

#### Remediation Steps

The following remediation steps are performed:

1. Triage:  

    * Review the CVE details (severity, exploitability, affected component).
    * Check if a patch or upgrade is available.  

2. Patch or update:  

    * If a fix exists, update the dependency or base image.  
    * If no fix is available, evaluate mitigations (for example, configuration changes, network policies).  

3. Rescan:  

    * After remediation, rerun scans to confirm the CVE is resolved.  

4. Document:  

    * Log the CVE and resolution in the Release Notes.
