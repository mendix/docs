---
title: "AC-06 (10) Least Privilege - Prohibit Non-Privileged Users From Executing Privileged Functions"
linktitle: "AC-06 (10)"
url: /private-mendix-platform/nist-controls/ac-0610/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (10) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (10) control.

| Control ID | AC-06 (10) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system prevents non-privileged users from executing privileged functions to include disabling, circumventing, or altering implemented security safeguards or countermeasures.

### Supplemental Guidance

Privileged functions include, for example, establishing information system accounts, performing system integrity checks, or administering cryptographic key management activities. Non-privileged users are individuals that do not possess appropriate authorizations. Circumventing intrusion detection and prevention mechanisms or malicious code protection mechanisms are examples of privileged functions that require protection from non-privileged users.

## Responsibility

### Customer Responsibility

* The customer is responsible for ensuring that non-privileged users are strictly prevented from executing privileged functions throughout their deployed infrastructure and custom Mendix applications.
* Application implementers must ensure application logic, configurations, and administrative controls do not grant non-privileged users access to privileged actions such as system account management, altering security safeguards, or circumventing protective mechanisms.
* Infrastructure implementers must enforce technical controls (for example, IAM policies, OS permissions, network controls) so only authorized privileged users can perform sensitive operations, like system integrity checks, cryptographic key management, or disabling intrusion detection or protection.
* Both app and infrastructure implementers must regularly review user roles and permissions to ensure that privileged activities are tightly controlled and appropriately logged.

## Guidance

The Mendix Runtime and MX4PC are designed to prevent privilege escalation, ensuring that non-privileged users cannot execute privileged functions within the Mendix platform environment.

Security capabilities are provided by Mendix at the platform level; however, responsibility for proper implementation of role-based access controls, segregation of privileges, and protection of sensitive functions within each custom application lies with the application implementer.

App builders must carefully architect their Mendix applications to ensure non-privileged users are never granted access to functions such as account management, system checks, or the ability to alter security protections.

It is recommended that application implementers regularly review and test privilege boundaries, ensuring all applicable Mendix and infrastructure controls are enforced to meet organizational and regulatory requirements.

## Proof and Remarks

For more information, refer to the following topics:

* [User Roles](/refguide/user-roles/)
* [Create a Secure App](/howto/security/create-a-secure-app/)
* [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/)

As a Mendix application, Private Mendix Platform follows the principle of Least Privilege. In the  Private Mendix Platform project's security settings, all user roles for the *User* and *Anonymous* roles are unchecked, preventing non-privileged users from gaining escalated access.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0610-1.png" class="no-border" >}}
