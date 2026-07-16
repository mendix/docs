---
title: "AC-14 Permitted Actions Without Identification Or Authentication"
linktitle: "AC-14"
url: /private-mendix-platform/nist-controls/ac-14/
description: "Documents the Private Mendix Platform's compliance with the AC-14 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-14 control.

| Control ID | AC-14 |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Studio Pro/Runtime, Customer - Org |

## Control

The organization:

* Identifies organization-defined user actions that can be performed on the information system without identification or authentication consistent with organizational missions and business functions.
* Documents and provides supporting rationale in the security plan for the information system, user actions not requiring identification or authentication.

### Supplemental Guidance

This control addresses situations in which organizations determine that no identification or authentication is required in organizational information systems. Organizations may allow a limited number of user actions without identification or authentication including, for example, when individuals access public websites or other publicly accessible federal information systems, when individuals use mobile phones to receive calls, or when facsimiles are received. 

Organizations also identify actions that normally require identification or authentication but may under certain circumstances (for example, emergencies), allow identification or authentication mechanisms to be bypassed. Such bypasses may occur, for example, via a software-readable physical switch that commands bypass of the logon functionality and is protected from accidental or unmonitored use. 

This control does not apply to situations where identification and authentication have already occurred and are not repeated, but rather to situations where identification and authentication have not yet occurred. Organizations may decide that there are no user actions that can be performed on organizational information systems without identification and authentication and thus, the values for assignment statements can be none.

The following controls are related to this control:

* CP-2
* IA-2

## Responsibility

### Mendix Responsibility

Mendix supports both anonymous and credentialed access to systems.  It is up to the customer and App Implementer to document what actions are allowed.

## Guidance

For more information, see the following documents:

* [Set Up Anonymous User Security](/howto/security/set-up-anonymous-user-security/)
* [Create a Secure App](/howto/security/create-a-secure-app/)

## Proof and Remarks

For more information, see the following documents:

* [Set Up Anonymous User Security](/howto/security/set-up-anonymous-user-security/)
* [Create a Secure App](/howto/security/create-a-secure-app/)
