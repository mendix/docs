---
title: "RA-05 (03) Vulnerability Scanning - Breadth And Depth Of Coverage"
linktitle: "RA-05 (03)"
url: /private-mendix-platform/nist-controls/ra-0503/
description: "Documents the Private Mendix Platform's compliance with the RA-05 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the RA-05 (03) control.

| Control ID | RA-05 (03) |
| --- | --- |
| Control category | RA - Risk Assessment |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization employs vulnerability scanning procedures that can identify the breadth and depth of coverage (that is, information system components scanned and vulnerabilities checked).

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes ensuring vulnerability scanning procedures provide appropriate breadth and depth of coverage for all components of the Mendix solution to ensure compliance with federal requirements. The customer must ensure that vulnerability scanning tools comprehensively identify information system components scanned and vulnerabilities checked, documented, and validated within their environment.

## Guidance

### Customer Responsibility

This control enhancement is governed by NIST SP 800-53 Rev 5, NIST SP 800-40, and NIST SP 800-115, which require organizations to employ vulnerability scanning procedures that can identify and report on the breadth and depth of coverage to ensure comprehensive vulnerability detection across all information system components. Customers operating within a FedRAMP or DoD SRG environment must implement vulnerability scanning tools and procedures that provide visibility into which components are scanned and which vulnerability checks are performed, ensuring no critical system components or vulnerability types are overlooked.

To meet these requirements, the customer must carry out the following actions:

* Define and validate scanning coverage requirements.

    The Customer must define comprehensive breadth and depth of coverage requirements for vulnerability scanning of the Mendix solution, specifying which information system components must be scanned (infrastructure, platform, application, network, databases, etc.) and which vulnerability categories must be checked (CVE entries, misconfigurations, patch levels, exposed services, etc.) in accordance with NIST SP 800-115 guidance and the system's security categorization.

* Employ tools that report coverage metrics.

    Ensure vulnerability scanning tools can identify and report on the breadth and depth of coverage, providing visibility into which components were successfully scanned, which components were not reachable or accessible, which vulnerability checks were performed, and any limitations or gaps in coverage. The Customer must collaborate with Infra Implementer, App Implementer, Infra Operator, and App Operator to validate that scanning coverage meets the defined requirements.

* Maintain comprehensive coverage throughout the lifecycle.

    Direct Infra Implementer, App Implementer, Infra Operator, and App Operator to ensure appropriate breadth and depth of coverage is maintained throughout the lifecycle of the Mendix solution. The Customer must regularly review coverage reports, identify and remediate coverage gaps, update scanning procedures when new components are added or system architecture changes, and ensure all critical system components remain within the scope of vulnerability scanning activities.