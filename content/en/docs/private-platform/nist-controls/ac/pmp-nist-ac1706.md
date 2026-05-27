---
title: "AC-17 (06) Remote Access (Protection Of Information)"
linktitle: "AC-17 (06)"
url: /private-mendix-platform/nist-controls/ac-1706/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (06) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (06) control.

| Control ID | AC-17 (06) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization:

* Authorizes the execution of privileged commands and access to security-relevant information through remote access only for organization-defined needs.
* Documents the rationale for such access in the security plan for the information system.
* Ensures that users protect information about remote access mechanisms from unauthorized use and disclosure.

### Supplemental Guidance

The following controls are related to this control:

* AC-6
* AT-2
* AT-3
* PS-6

## Responsibility

### Customer Responsibility

The customer is responsible for ensuring that users, application and infrastructure implementers, and operators appropriately protect information about remote access mechanisms from unauthorized use and disclosure.

## Guidance

Customers must establish and enforce policies to protect sensitive details related to remote access mechanisms (such as credentials, connection details, and authentication tokens), ensuring these are not shared, disclosed, or used without proper authorization.

All personnel involved - including users, app or infra implementers, and operators - must receive training and guidance on safeguarding remote access information in accordance with organizational policies and relevant regulations.

Access to documentation, credentials, and technical details of remote access should be restricted based on need-to-know and least-privilege principles.

Regular reviews should be performed to verify that information about remote access mechanisms is protected and not improperly disclosed or misused.

Mendix does not manage or oversee the protection of information about customer-specific remote access mechanisms. Responsibility rests entirely with the customer and their designated teams.