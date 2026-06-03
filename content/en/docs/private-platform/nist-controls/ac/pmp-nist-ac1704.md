---
title: "AC-17 (04) Remote Access (Privileged Commands and Access)"
linktitle: "AC-17 (04)"
url: /private-mendix-platform/nist-controls/ac-1704/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (04) control.

| Control ID | AC-17 (04) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Authorizes the execution of privileged commands and access to security-relevant information through remote access only for organization-defined needs.
* Documents the rationale for such access in the security plan for the information system.

### Supplemental Guidance

The following controls are related to this control:

* AC-6

## Responsibility

### Customer Responsibility

The customer is responsible for defining and documenting which privileged commands may be executed and which security-relevant information may be accessed remotely (for example, through API calls). The customer must authorize such actions based on organizational needs and document the rationale in the security plan. The App Implementer must build the Mendix application to honor these restrictions.

## Guidance

Customers must establish policies specifying which privileged commands and security-relevant data can be accessed remotely, ensuring these actions are limited to organization-defined needs.

The rationale for allowing privileged remote access must be documented in the information system's security plan.

The App Implementer is responsible for configuring the Mendix application so that only authorized users or remote systems can execute privileged commands or access sensitive information, as defined by the customer.

For example, access to critical API endpoints or administrative functions should be protected by appropriate access control mechanisms and permissions in line with organizational requirements.

Mendix does not determine or enforce privileged remote access policies. It is the customer's responsibility to define, document, and implement these controls.
