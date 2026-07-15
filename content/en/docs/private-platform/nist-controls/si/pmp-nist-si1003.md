---
title: "SI-10 (03) Information Input Validation - Predictable Behavior"
linktitle: "SI-10 (03)"
url: /private-mendix-platform/nist-controls/si-1003/
description: "Documents the Private Mendix Platform's compliance with the SI-10 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SI-10 (03) control.

| Control ID | SI-10 (03) |
| --- | --- |
| Control category | SI - System and Information Integrity |
| Requirement baseline | DOD IMPACT LEVEL 4 |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system behaves in a predictable and documented manner that reflects organizational and system objectives when invalid inputs are received.

### Supplemental Guidance

A common vulnerability in organizational information systems is unpredictable behavior when invalid inputs are received. This control enhancement ensures that there is predictable behavior in the face of invalid inputs by specifying information system responses that facilitate transitioning the system to known states without adverse, unintended side effects.

The following controls are related to this control:

* AC-3.

## Responsibility

### Mendix Responsibility

The Private Mendix Platform provides Platform‑ and Runtime‑level protections to ensure predictable system behavior when invalid inputs are received. The Mendix Runtime and Private Mendix Platform enforce structured input handling and validation to prevent unintended execution paths and ensure the system transitions to known, safe states.

### Customer Responsibility

The customer, through the App Implementer and App Operator roles, ensures that Mendix applications apply appropriate input validation on all fields and maintain predictable behavior as applications evolve by keeping validation rules up to date.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform implement Platform‑level protections to ensure predictable behavior when invalid inputs are received. Input validation is enforced across multiple layers, ensuring invalid inputs are rejected before processing and the system transitions to known, safe states. The runtime returns well‑defined error responses for invalid inputs while suppressing stack traces and sensitive technical details, preventing application crashes, unintended data modification, privilege escalation, bypass of security controls, or exposure of sensitive information.

### Customer Responsibility

The App Implementer ensures that Mendix applications apply appropriate input validation on all fields and define predictable, documented behavior when invalid inputs are received, including error handling and default responses. Input validations must be tested and kept up to date as the application evolves. The App Operator supports ongoing compliance by monitoring application behavior and logs for anomalous input patterns and updating input validation rules as new attack techniques or usage patterns emerge.

## Proof and Remarks

{{< figure src="/attachments/private-platform/nist-si/nist-si-1003-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-si/nist-si-1003-2.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-si/nist-si-1003-3.png" class="no-border" >}}

For more information, see [Setting Up Data Validation](/refguide/setting-up-data-validation/).

Example entity‑level input validation configured in Mendix Studio Pro, where validation rules are enforced before data is committed to ensure predictable handling of invalid inputs:

{{< figure src="/attachments/private-platform/nist-si/nist-si-1003-4.png" class="no-border" >}}

UI input validation on pages in Mendix Studio Pro using required fields and validation messages:

{{< figure src="/attachments/private-platform/nist-si/nist-si-1003-5.png" class="no-border" >}}