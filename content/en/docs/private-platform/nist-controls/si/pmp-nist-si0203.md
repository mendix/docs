---
title: "SI-02 (03) Flaw Remediation - Time to Remediate Flaws and Benchmarks for Corrective Actions"
linktitle: "SI-02 (03)"
url: /private-mendix-platform/nist-controls/si-0203/
description: "Documents the Private Mendix Platform's compliance with the SI-02 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-02 (03) control.

| Control ID | SI-02 (03) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Measures the time between flaw identification and flaw remediation.
* Establishes organization-defined benchmarks for taking corrective actions.

### Supplemental Guidance

This control enhancement requires organizations to determine the current time it takes on the average to correct information system flaws after such flaws have been identified, and subsequently establish organizational benchmarks (for example, time frames) for taking corrective actions. Benchmarks can be established by type of flaw and/or severity of the potential vulnerability if the flaw can be exploited.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix (for Mendix product flaws) and the customer (for infrastructure and custom application flaws).

## Guidance

### Shared Responsibility

#### Mendix - Private Mendix Platform

Vulnerability findings are handled based on priority. The priority of a finding is based on the vulnerability severity ratings CVSS v3.1 (Common Vulnerability Scoring System). For the remediation time, Mendix follows FedRAMP/NIST SP 800-53 guidelines.

| Base Score Range | Severity | Remediation time |
| --- | --- | --- |
| 9.0 – 10.0 | Critical Fix released as soon as possible but no later than 7 days |
| 7.0 - 8.9 | High | Fix released within 30 days |
| 4.0 - 6.9 | Medium | Fix released within 60 days |
| 0.1 - 3.9 | Low | Fix released within 180 days |
| 0.0 | None | None |

#### Customer - Infrastructure and Organization

The customer is responsible for:

* Establishing organizational benchmarks for flaw remediation (for example, critical: 30 days, high: 90 days).
* Measuring the time between flaw identification and remediation for infrastructure and custom applications.
* Tracking remediation metrics and reporting on compliance with established benchmarks.
* Defining corrective action timelines based on flaw severity and potential impact.

##### Implementer and Operator Responsibilities

* App Implementer - Implement vulnerability tracking and measurement for the Mendix application.
* Infra Operator - Measure and track infrastructure flaw remediation times.
* App Operator - Ensure custom application flaws are remediated within customer-defined benchmarks.

## Proof and Remarks

### Mendix SOC 3 Compliance Report 

A report detailing vulnerability management with time to remediate flaws and benchmarks for corrective actions is available in [Conveyor (page 52-54)](https://app.conveyor.com/profile/mendix/d/mendix-isae-3000-soc-3/H68STe).

### Security Advisories: CVE Tracking with CVSS Scores

Mendix publishes a public Security Advisories index maintained by Siemens ProductCERT, listing all disclosed CVEs with CVSS v3.1 base scores and severity ratings. Each entry links to the corresponding Siemens Security Advisory (SSA) which includes remediation details. This demonstrates that Mendix tracks identified flaws against a public, time-stamped record - the
precondition for measuring flaw identification-to-remediation time. For more information, see [Security Advisories](/releasenotes/security-advisories/).

### Operator Release Notes: CVE Remediation Entries with Dates

The Mendix on Kubernetes (Operator) release notes contain dated entries that record when specific CVEs were addressed, providing auditable evidence of the time-to-remediate. Multiple entries demonstrate this pattern:

* **March 10, 2025 - License Manager CLI v0.10.1:** *We have updated this component to use the latest dependency versions in order to improve security score ratings for container images. This update will allow us to address CVE-2024-45337 and CVE-2024-45338.*
* **February 10, 2022 - Mendix Operator v2.4.0:** *Updated libraries to address CVE-2020-8565, CVE-2020-26160, and CVE-2020-29652*.
* **Multiple 2024–2026 entries:** Routine component updates to improve security score ratings on container images

Each entry is date-stamped, making it possible to calculate the elapsed time from CVE publication (visible in NVD) to Mendix's fix release. For more information, see [Mendix on Kubernetes](/releasenotes/developer-portal/mendix-for-private-cloud/).

### Private Mendix Platform Release Notes: Security Fix Tracking per Version

The Private Mendix Platform release notes record security improvements per release version with dates, organized under structured sub-sections (*New Features*, *Improvements*, *Updates*, *Fixes*, and *Known Issues*). This provides the dated fix record needed to establish remediation benchmarks.

#### Example

**Version 2.6.1 (May 4, 2026)**

Fixes: *We have increased the security around entity access rules and user management privileges.*

Updates: *Masked app constants - Masked values are hidden in logs, and can optionally be hidden in CI/CD settings*.

For more information, see [Private Mendix Platform](/releasenotes/private-platform/).

### Release Policy (LTS and MTS): Security Patch Commitment per Version

The Mendix Release Policy defines which versions receive security patches and for how long, establishing the benchmark framework for corrective action timelines. LTS and MTS versions both explicitly receive patch releases for bug and security fixes during their support window - this
is the public, documented commitment that security flaws will be remediated within the version's supported lifetime.

Long-Term Support (LTS) versions receive patch releases for bug and security fixes only. Support ends when a third consecutive major version releases. For more information, see [Long-Term Support Version (LTS)](/releasenotes/studio-pro/lts-mts/#lts).

Medium-Term Support (MTS) versions receive patch releases for bug and security fixes. Support ends three months after the next major version releases. For more information, see [Medium-Term Support Version (MTS)](/releasenotes/studio-pro/lts-mts/#mts).

For information about the current supported versions and dates, refer to the [version support table](/releasenotes/studio-pro/lts-mts/#types-of-support).