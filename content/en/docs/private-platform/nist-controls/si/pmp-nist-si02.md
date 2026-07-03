---
title: "SI-02 Flaw Remediation"
linktitle: "SI-02"
url: /private-mendix-platform/nist-controls/si-02/
description: "Documents the Private Mendix Platform's compliance with the SI-02 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-02 control.

| Control ID | SI-02 |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization: 

* Identifies, reports, and corrects information system flaws.
* Tests software and firmware updates related to flaw remediation for effectiveness and potential side effects before installation.
* Installs security-relevant software and firmware updates within an organization-defined time period of the release of the updates.
* Incorporates flaw remediation into the organizational configuration management process.

### Supplemental Guidance

Organizations identify information systems affected by announced software flaws including potential vulnerabilities resulting from those flaws, and report this information to designated organizational personnel with information security responsibilities. Security-relevant software updates include patches, service packs, hot fixes, and anti-virus signatures. Organizations also address flaws discovered during security assessments, continuous monitoring, incident response activities, and system error handling. 

Organizations take advantage of available resources such as the Common Weakness Enumeration (CWE) or Common Vulnerabilities and Exposures (CVE) databases in remediating flaws discovered in organizational information systems. By incorporating flaw remediation into ongoing configuration management processes, required/anticipated remediation actions can be tracked and verified. Flaw remediation actions that can be tracked and verified include, for example, determining whether organizations follow US-CERT guidance and Information Assurance Vulnerability Alerts.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility beyond the previously documented Mendix update and release cycle, which addresses flaws in the Mendix products.

## Guidance

### Customer Responsibility

The customer is responsible for establishing and implementing a flaw remediation process for their custom implementation of Private Mendix Platform as well as applications built using Mendix, including:

* Identifying and tracking security flaws in infrastructure components, custom code, and third-party dependencies
* Testing software and firmware updates for effectiveness and potential side effects before deployment
* Defining time periods for installing security-relevant updates (for example, critical patches within 30 days)
* Incorporating flaw remediation into the configuration management process
* Monitoring vulnerability databases (CVE, CWE, US-CERT) for relevant security advisories

#### Implementer and Operator Responsibilities

* Infra Implementer - Establish vulnerability scanning and patch management processes for infrastructure.
* App Implementer - Implement vulnerability scanning for custom application code and dependencies.
* Infra Operator - Apply infrastructure patches and updates in accordance with customer timelines.
* App Operator - Apply application updates and remediate identified vulnerabilities in accordance with customer policies.

#### Mendix Product Updates

Mendix maintains a documented update and release cycle for its products (Runtime, Operator, Private Mendix Platform, Studio Pro). Security flaws in Mendix products are addressed through regular updates and security patches. Customers should monitor Mendix release notes and security advisories to stay informed of available updates.

## Proof and Remarks

* [Mendix Security Advisory](/releasenotes/security-advisories/)
* [Mendix Release Policy](/releasenotes/studio-pro/lts-mts/)
* Releases with new features, bug fixes, improvements, known issues, deprecations:

    * [Studio Pro](/releasenotes/studio-pro/)
    * [Private Mendix Platform](/releasenotes/private-platform/)
    * [Mendix Operator and Mendix on Kubernetes](/releasenotes/developer-portal/mendix-for-private-cloud/)