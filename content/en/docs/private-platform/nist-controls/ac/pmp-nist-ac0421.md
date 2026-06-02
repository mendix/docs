---
title: "AC-04 (21)  Information Flow Enforcement - Physical / Logical Separation Of Information Flows"
linktitle: "AC-04 (21)"
url: /private-mendix-platform/nist-controls/ac-0421/
description: "Documents the Private Mendix Platform's compliance with the AC-04 (21) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-04 (21) control.

| Control ID | AC-04 (21) |
| --- | --- |
| Control category | AC - Information Flow Enforcement |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system separates information flows logically or physically using organization-defined mechanisms or techniques to accomplish organization-defined required separations by types of information.

### Supplemental Guidance

Enforcing the separation of information flows by type can enhance protection by ensuring that information is not commingled while in transit and by enabling flow control by transmission paths perhaps not otherwise achievable. Types of separable information include, for example, inbound and outbound communications traffic, service requests and responses, and information of differing security categories.

## Responsibility

### Customer Responsibility

The customer (application developer or builder) is responsible for implementing custom microflows within their Mendix application to control and enforce information flow separation at the application logic level.

## Guidance

### Customer Responsibility

The Private Mendix Platform provides the capability for application builders to implement custom microflows that precisely target and control information flows within their applications. Microflows can be designed to:

* Enforce data routing rules — ensuring information is only passed between authorized entities or modules.
* Implement conditional access logic — restricting data flows based on user roles, security contexts, or classification levels.
* Separate information flows by domain — isolating data between different business units, tenants, or sensitivity levels within the same application.
* Log and audit information flows — capturing flow events for monitoring and compliance purposes.

Application builders are responsible for designing microflows that align with the physical and logical separation requirements defined by their organization's security policies.

## Proof and Remarks

For access rule configurations of the Mendix application model, see below:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0412-1.png" class="no-border" >}}

Mendix role-based access control (RBAC) can be combined with microflows to enforce separation of information flows at runtime:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0412-2.png" class="no-border" >}}