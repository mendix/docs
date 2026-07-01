---
title: "SI-06 Security Function Verification"
linktitle: "SI-06"
url: /private-mendix-platform/nist-controls/si-06/
description: "Documents the Private Mendix Platform's compliance with the SI-06 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-06 control.

| Control ID | SI-06 |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system:

* Verifies the correct operation of organization-defined security functions.
* Performs this verification through one or more of the following: 

    * Through organization-defined system transitional states
    * Upon command by user with appropriate privilege
    * At anrganization-defined frequency.

* Notifies organization-defined personnel or roles about failed security verification tests.
* Performs one or more of the following actions when anomalies are discovered:

    * Shuts the information system down
    * Restarts the information system
    * Organization-defined alternative actions .

### Supplemental Guidance

Security function verification includes the integrity of security mechanisms, the mechanisms providing access restriction and intrusion detection and prevention. Transitional states include system startup, restart, shutdown, and abort. 

The following controls are related to this control:

* CA-7
* SI-7. 

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to indicate what constitutes correct operation of the Mendix solution's security functions.

## Guidance

### Customer Responsibility

The customer is responsible for defining and maintaining procedures to verify the integrity and correct operation of security functions within the Mendix solution, ensuring that verification is performed at system startup, during security‑relevant events, and at defined periodic intervals in accordance with SI‑07 and SI‑07 (01). These procedures establish which security functions (such as authentication, authorization, encryption, logging, and intrusion detection) are subject to verification, who is authorized to perform verification activities, and how verification results are monitored. 

The customer also defines notification and response actions for failed integrity or security function checks, including alerting, restart, or shutdown as appropriate, while Infrastructure and Application Implementers and Operators enable, execute, and respond to verification activities within their respective infrastructure and application responsibilities.