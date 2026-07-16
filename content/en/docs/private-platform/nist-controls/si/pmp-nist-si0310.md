---
title: "SI-03 (10) Malicious Code Protection - Malicious Code Analysis"
linktitle: "SI-03 (10)"
url: /private-mendix-platform/nist-controls/si-0310/
description: "Documents the Private Mendix Platform's compliance with the SI-03 (10) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-03 (10) control.

| Control ID | SI-03 (10) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org, Customer - Infra |

## Control

The organization:

* Employs organization-defined tools and techniques to analyze the characteristics and behavior of malicious code.
* Incorporates the results from malicious code analysis into organizational incident response and flaw remediation processes.

### Supplemental Guidance

The use of malicious code analysis tools provides organizations with a more in-depth understanding of adversary tradecraft (that is, tactics, techniques, and procedures) and the functionality and purpose of specific instances of malicious code. Understanding the characteristics of malicious code facilitates more effective organizational responses to current and future threats. Organizations can conduct malicious code analyses by employing reverse engineering techniques or monitoring the behavior of executing code.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility. It is the customer's responsibility to choose the right tools and solutions for in-depth analysis of malware.

## Guidance

### Customer Responsibility

The customer is responsible for establishing malicious code analysis capabilities, including:

* Selecting appropriate tools for malware analysis (for example, sandboxed environments, reverse engineering tools).
* Deploying malicious code analysis platforms for behavioral and static analysis.
* Establishing procedures for analyzing suspected malicious code.
* Incorporating analysis results into incident response processes.
* Using insights from malware analysis to improve flaw remediation and threat detection.

#### Example Tools and Techniques

* Anti-virus software with analysis capabilities
* Sandboxed environments for safe malware execution and observation
* Malicious code analysis platforms (for example, Cuckoo Sandbox, Joe Sandbox)
* Reverse engineering tools (for example, IDA Pro, Ghidra, x64dbg)
* Threat intelligence platforms that provide malware analysis reports.

#### Implementer and Operator Responsibilities

* Infra Implementer - Build malware analysis tools into the infrastructure as directed by the customer.
* Infra Operator - Ensure ongoing compliance and support the Customer in using the selected tools.
* Security team - Analyze malware samples and incorporate findings into security processes.