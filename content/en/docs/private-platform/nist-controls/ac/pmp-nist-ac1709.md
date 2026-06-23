---
title: "AC-17 (09) Remote Access (Disconnect / Disable Access)"
linktitle: "AC-17 (09)"
url: /private-mendix-platform/nist-controls/ac-1709/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (09) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (09) control.

| Control ID | AC-17 (09) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization provides the capability to expeditiously disconnect or disable remote access to the information system within an  organization-defined time period.

### Supplemental Guidance

This control enhancement requires organizations to have the capability to rapidly disconnect current users remotely accessing the information system, and/or disable further remote access. The speed of disconnect or disablement varies based on the criticality of missions and business functions and the need to eliminate immediate or future remote access to organizational information systems.

## Responsibility

### Mendix Responsibility

Private Mendix Platform provides the technical capability to disconnect or disable remote access for users, including user management features such as logout, block, and inactive user actions.

### Customer Responsibility

The customer is responsible for establishing and executing appropriate remote access policies and response procedures within their organization, including decision-making, assigning responsibilities, and documenting actions taken.

## Guidance

### Mendix Responsibility

#### Remote Session Termination

Private Mendix Platform administrators are able to force logout for individual users or all users remotely, effectively terminating all current remote sessions with the information system.

#### Account Deactivation and Blocking

Private Mendix Platform provides options to mark users as *inactive* or *block* users, immediately preventing further remote access. Blocked or inactive accounts cannot log in, ensuring rapid restriction of access.

#### Execution and Automation

These actions may be performed manually by authorized administrators through the management interface, or through automated processes using scripts or APIs, enabling batch processing of user accounts when needed.

### Customer Responsibility

* The organization defines clear emergency remote access response procedures, specifying who is responsible for initiating disconnect or disable actions, and how these actions are to be performed using Private Mendix Platform administrative tools.
* Assign values for the organization-defined time period (for example, *remote access must be disabled within 10 minutes of detection of an incident*).
* Regularly test and rehearse remote disconnect and disable processes to ensure the organization can respond quickly when necessary.
* Where relevant, integrate Private Mendix Platform capability with SIEM/SOAR or other automated security systems to enable rapid remote access disablement.

## Proof and Remarks

Users can be logged out and disabled in the **Manage > Users > User Management** page of the administrator menu:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-1709-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-1709-2.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-1709-3.png" class="no-border" >}}
