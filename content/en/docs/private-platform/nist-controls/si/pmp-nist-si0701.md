---
title: "SI-07 (01) Software, Firmware, and Information Integrity - Integrity Checks"
linktitle: "SI-07 (01)"
url: /private-mendix-platform/nist-controls/si-0701/
description: "Documents the Private Mendix Platform's compliance with the SI-07 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-07 (01) control.

| Control ID | SI-07 (01) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system performs an integrity check of organization-defined software, firmware, and information at one or more of the following: 

* At startup
* At organization-defined transitional states or security-relevant events
* At an organization-defined frequency.

### Supplemental Guidance

Security-relevant events include the identification of a new threat to which organizational information systems are susceptible, and the installation of new hardware, software, or firmware. Transitional states include system startup, restart, shutdown, and abort.

The following controls are related to this control:

* AC-4. 

## Responsibility

### Customer Responsibility

The customer is responsible for defining the scope, frequency, and mechanisms for integrity verification checks and ensuring their implementation and ongoing operation within the environment.

## Guidance

### Customer Responsibility

The customer is responsible for defining the scope and execution of integrity verification activities in accordance with organizational security policies and risk management objectives. This includes identifying the software, firmware, and information subject to integrity checks; determining when such checks are performed (for example, at system startup, on demand, or at defined intervals); selecting appropriate integrity verification mechanisms such as cryptographic checksums or digital signatures; and establishing procedures for investigation, notification, and remediation when integrity violations are detected.

Infra Implementers and Operators support the customer-defined requirements by executing and maintaining the integrity verification mechanisms within the environment. The Infrastructure Implementer is responsible for implementing integrity checks for infrastructure components and container images, while the Application Implementer applies integrity controls to application code and dependencies as required. The Infrastructure Operator and Application Operator are responsible for monitoring integrity check results, responding to detected failures, and ensuring continued operation of integrity monitoring in alignment with customer-defined procedures.