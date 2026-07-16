---
title: "SI-03 (07) Malicious Code Protection - Nonsignature-Based Detection"
linktitle: "SI-03 (07)"
url: /private-mendix-platform/nist-controls/si-0307/
description: "Documents the Private Mendix Platform's compliance with the SI-03 (07) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-03 (07) control.

| Control ID | SI-03 (07) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra |

## Control

The information system implements nonsignature-based malicious code detection mechanisms.

### Supplemental Guidance

Nonsignature-based detection mechanisms include, for example, the use of heuristics to detect, analyze, and describe the characteristics or behavior of malicious code and to provide safeguards against malicious code for which signatures do not yet exist or for which existing signatures may not be effective. This includes polymorphic malicious code (that is, code that changes signatures when it replicates). This control enhancement does not preclude the use of signature-based detection mechanisms.

## Responsibility

### Shared Responsibility

This is a shared responsibility between Mendix (for Private Mendix Platform infrastructure) and the customer (for their environment).

## Guidance

### Shared Responsibility

#### Mendix - Private Mendix Platform

Mendix deploys a layered runtime security stack across the PMP infrastructure to provide nonsignature-based malicious code detection through behavioral analysis, anomaly detection, and heuristic monitoring:

* CrowdStrike provides endpoint detection and response (EDR) with machine-learning-based behavioral analysis, detecting polymorphic and zero-day malware based on process behavior rather than signatures.
* Wiz provides cloud security posture management (CSPM) with cloud and runtime workload scanning, including threat detection through heuristic and anomaly-based analysis of cloud-native workloads.
* Upwind provides runtime security using eBPF-based behavioral monitoring, detecting anomalous process behavior, unexpected network connections, and suspicious syscall patterns at runtime.

These tools collectively detect malicious code based on behavior patterns, heuristics, and runtime context rather than static signatures alone. Machine learning models identify polymorphic threats and zero-day malware for which signatures do not yet exist.

{{% alert color="info" %}}
Lacework was previously used for cloud-native anomaly detection and is being offboarded. Wiz and Upwind now cover the equivalent runtime threat detection capabilities.
{{% /alert %}}

#### Customer - Infrastructure and Organization

It is the responsibility of the Infra Implementer and Infra Operator to implement nonsignature-based detection mechanisms within the customer's own environment.

Customer responsibilities include:

* Selecting and deploying nonsignature-based malicious code detection tools appropriate to their Kubernetes environment (for example, EDR with behavioral analysis, CSPM with runtime threat detection, eBPF-based runtime security).
* Configuring heuristic and behavioral detection mechanisms.
* Monitoring alerts from nonsignature-based detection systems.
* Responding to detected threats and anomalies.
* Integrating detection tools with incident response processes.

## Proof and Remarks

### Mendix SOC 3 Compliance Report 

A report detailing nonsignature-based detection with process and tools used is available in [Conveyor (page 45-46)](https://app.conveyor.com/profile/mendix/d/mendix-isae-3000-soc-3/H68STe).

### Nonsignature-based Malicious Code Detection at the Runtime Layer

Mendix implements nonsignature-based malicious code detection at the runtime layer through the following active tooling:

{{< figure src="/attachments/private-platform/nist-si/nist-si-0307-1.png" class="no-border" >}}

### Private Mendix Platform Container Security Hardening

The following public documentation proves that PMP container images are hardened by default to constrain the execution domain, making behavioral anomalies inherently detectable by the above runtime tools. These controls directly support nonsignature detection by eliminating expected-normal execution paths, so anything outside them is suspicious by definition.

#### Non-root Execution, No Privilege Escalation, Locked-down Filesystem

Mendix app container images are locked down by default - they run as a non-root user, cannot request elevated permissions, and file ownership and permissions prevent modification of system and critical paths.

This means any process attempting to execute with elevated privileges or modify protected paths is immediately anomalous - a behavioral signal detectable without signatures.

For more information, see [Containerized Mendix App Architecture](/developerportal/deploy/private-cloud-cluster/#containerized-architecture).

### Read-Only Root Filesystem

From Mendix Operator v2.21.0+, all system containers use `readOnlyRootFilesystem: true` by default:

*Kubernetes allows you to lock down containers even further, by mounting the container filesystem as read-only if the container's security context specifies `readOnlyRootFilesystem: true`. All system containers and pods use readOnlyRootFilesystem by default.*

Any write attempt to the container root filesystem is blocked at the kernel level. This forces malicious code that relies on filesystem persistence or self-modification to produce detectable behavioral signals (blocked syscalls, unexpected emptyDir writes) that nonsignature tools can
observe.

App containers also support this through `runtimeReadOnlyRootFilesystem` in the operator CR.

For more information, see [Read-only RootFS](/developerportal/deploy/private-cloud-cluster/#readonlyrootfs).

### Service Account Token Automounting Disabled by Default

The Private Mendix Platform operator sets `automountServiceAccountToken: false` on Mendix app pods by default:


* *`runtimeAutomountServiceAccountToken` - Specify if Mendix app pods should get a Kubernetes Service Account token; defaults to false*

Disabling token automounting prevents a compromised container from using the Kubernetes API to perform lateral movement - a common behavior-based attack vector. Any API calls from a Private Mendix Platform app pod are therefore anomalous and detectable without needing a signature for the specific malware.

For more information, see [Mendix App Deployment Settings](/developerportal/deploy/private-cloud-cluster/#advanced-deployment-settings).

### Private Mendix Platform Release Notes - CVE Remediation as Evidence of Active Scanning

The following Private Mendix Platform release note entries are direct public evidence that Mendix performs ongoing container image security scanning (a form of nonsignature vulnerability assessment) and remediates findings proactively across Private Mendix Platform releases.

#### Private Mendix Platform 1.24.1: Six CVEs Patched (September–October 2025)

From [Private Mendix Platform release notes 1.24.1](/releasenotes/private-platform/1-24/#1241):

* *We have fixed vulnerabilities related to the following: CVE-2025-8885, CVE-2025-8916, CVE-2024-25710, CVE-2022-23437, CVE-2020-14338, CVE-2019-12415.*

The span of CVE years (2019–2025) in a single patch release demonstrates continuous retrospective scanning - not just signature-matching against new CVEs but detection of older low-severity issues through behavioral or heuristic scoring tools (consistent with Wiz and Sysdig security score ratin methodology seen in Operator release notes).

### Operator Release Notes: Systematic Security Score Rating Improvements Across All Container Images

The Mendix Operator release notes show a consistent pattern of proactive container image security scanning that explicitly targets security score ratings - the output of heuristic or behavioral scoring tools (Wiz, Sysdig, AWS Inspector) rather than signature matching alone:

From the Operator release notes 2.26.1 (April 9, 2026):

* *Updated components to use the latest dependency versions in order to improve security score ratings for container images.*

### Cross-reference: SA-11(08) - Dynamic Code Analysis and Penetration Testing

Mendix conducts periodic third-party penetration testing against the live Private Mendix Platform environment. This is dynamic, behavioral runtime analysis - identifying execution-time vulnerabilities and logic flaws
that signature databases cannot detect.

Findings are tracked and remediated via the Mendix Vulnerability Management Process. Redacted pen-test reports are available on request in [Conveyor](https://app.conveyor.com/profile/mendix).
