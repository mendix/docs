---
title: "CM-04 (01) Security Impact Analysis - Separate Test Environments"
linktitle: "CM-04 (01)"
url: /private-mendix-platform/nist-controls/cm-0401/
description: "Documents the Private Mendix Platform's compliance with the CM-04 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-04 (01) control.

| Control ID | CM-04 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer |

## Control

The organization analyzes changes to the information system in a separate test environment before implementation in an operational environment, looking for security impacts due to flaws, weaknesses, incompatibility, or intentional malice.

### Supplemental Guidance

Separate test environment in this context means an environment that is physically or logically isolated and distinct from the operational environment. The separation is sufficient to ensure that activities in the test environment do not impact activities in the operational environment, and information in the operational environment is not inadvertently transmitted to the test environment. Separate environments can be achieved by physical or logical means. If physically separate test environments are not used, organizations determine the strength of mechanism required when implementing logical separation (for example, separation achieved through virtual machines).

The following controls are related to this control:

* SA-11 
* SC-3
* SC-7

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing change control and security analysis processes that require all system changes to be tested in a separate environment before production deployment to ensure compliance with federal requirements. The customer must ensure that test environments are physically or logically isolated from operational environments and that security impact analysis procedures are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-128, which establish requirements for analyzing security impacts of information system changes in isolated test environments prior to operational deployment. Customers operating within a FedRAMP or DoD SRG environment must ensure that separate test environments exist and that all changes are vetted for security flaws, weaknesses, and incompatibilities before implementation.

To meet these requirements, the customer must carry out the following actions:

1. Establish change control and security analysis processes.

    The customer must put in place change control and security analysis processes, policies, and tools that require all changes to be analyzed in a separate test environment before operational deployment. Private Mendix Platform allows for multiple deployment environments as well as parallel installations, which the customer must leverage to create physically or logically isolated test environments per NIST SP 800-128 guidelines.

2. Ensure infrastructure test environment readiness. 

    The infrastructure implementer must ensure the infrastructure has in place the environments, processes, automations, and tools dictated by the customer. The infrastructure operator must maintain these environments throughout the system lifecycle. This includes ensuring sufficient separation between test and production environments as required by NIST SP 800-53 SC-3 and SC-7.

3. Vet all changes before production implementation.

    The infrastructure operator and app operator must ensure all new versions and system changes are vetted as dictated by the customer before implementation in the operational environment. This includes conducting security impact assessments for flaws, weaknesses, incompatibility, and intentional malice, and documenting the results before promoting changes to production.
