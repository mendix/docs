---
title: "SI-10 Information Input Validation"
linktitle: "SI-10"
url: /private-mendix-platform/nist-controls/si-10/
description: "Documents the Private Mendix Platform's compliance with the SI-10 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-10 control.

| Control ID | SI-10 |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system checks the validity of organization-defined information inputs.

### Supplemental Guidance

Checking the valid syntax and semantics of information system inputs (for example, character set, length, numerical range, and acceptable values) verifies that inputs match specified definitions for format and content. Software applications typically follow well-defined protocols that use structured messages (that is, commands or queries) to communicate between software modules or system components. Structured messages can contain raw or unstructured data interspersed with metadata or control information. If software applications use attacker-supplied inputs to construct structured messages without properly encoding such messages, then the attacker could insert malicious commands or special characters that can cause the data to be interpreted as control information or metadata. Consequently, the module or component that receives the tainted output will perform the wrong operations or otherwise interpret the data incorrectly. Prescreening inputs prior to passing to interpreters prevents the content from being unintentionally interpreted as commands. Input validation helps to ensure accurate and correct inputs and prevent attacks such as cross-site scripting and a variety of injection attacks.

The following controls are related to this control:

* AC-2
* AC-3
* AC-4
* AC-5
* AC-6.

## Responsibility

### Mendix Responsibility

Mendix provides rich input validation capabilities through Studio Pro.

### Customer Responsibility

The customer and App Implementer are responsible for defining and implementing appropriate input validations.

## Guidance

### Mendix Responsibility

Mendix provides built‑in input validation capabilities through Studio Pro and enforces them at runtime to ensure predictable and secure handling of invalid inputs. Validation mechanisms support data type, format, length, range, pattern, required‑field, and custom logic validations, and are applied at both the domain model and page levels to ensure defense in depth. The Mendix Runtime enforces these validations consistently, preventing invalid inputs from being processed and ensuring that applications transition to known, safe states without exposing sensitive system information or bypassing security controls.

### Customer Responsibility

The customer is responsible for defining input validation requirements based on data sensitivity and security needs, including acceptable values, character sets, and protections against injection attacks. The App Implementer must configure and maintain appropriate validation rules within the Mendix application using Studio Pro, including custom validation logic where necessary, and ensure predictable error handling for invalid inputs. The App Operator ensures that input validations remain current by reviewing, testing, and updating validation rules as the application evolves and by monitoring for anomalous input behavior.

## Proof and Remarks

Entity-level validation rules are editable in the domain model in Studio Pro.

{{< figure src="/attachments/private-platform/nist-si/nist-si-10-1.png" class="no-border" >}}

For more information, see [Setting Up Data Validation: Data Validation on Entity Level](/refguide/setting-up-data-validation/#data-validation-on-entity-level).