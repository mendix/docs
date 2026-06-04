---
title: "AC-20 (01) Use Of External Information Systems - Limits On Authorized Use"
linktitle: "AC-20 (01)"
url: /private-mendix-platform/nist-controls/ac-2001/
description: "Documents the Private Mendix Platform's compliance with the AC-20 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-20 (01) control.

| Control ID | AC-20 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization permits authorized individuals to use an external information system to access the information system or to process, store, or transmit organization-controlled information only in the following cases:

* When the organization verifies the implementation of required security controls on the external system as specified in the organization's information security policy and security plan.
* Alternatively, when the organization retains approved information system connection or processing agreements with the organizational entity hosting the external information system.

### Supplemental Guidance

This control enhancement recognizes that there are circumstances where individuals using external information systems (for example, contractors, coalition partners) need to access organizational information systems. In those situations, organizations need confidence that the external information systems contain the necessary security safeguards (that is, security controls), so as not to compromise, damage, or otherwise harm organizational information systems. Verification that the required security controls have been implemented can be achieved, for example, by third-party, independent assessments, attestations, or other means, depending on the confidence level required by organizations.

The following controls are related to this control:

* CA2

## Responsibility

### Customer Responsibility

The customer must implement and maintain external system security controls and appropriate agreements with third parties.  

It is the responsibility of the infrastructure implementer, infrastructure operator, app implementer, and app operator to respect these controls and enforce access restrictions as appropriate. 

## Guidance

The customer should establish terms and conditions with other organizations to use external information systems, allowing authorized individuals limited access to Private Mendix Platform from external information systems, processing or transmitting Private Mendix Platform data and/or Mendix applications data using external information systems.

The customer should ensure that external information systems implement limited use on authorized individuals that organization required.

The customer should verify the external information systems contain the necessary security safeguards that will not compromise, damage, or otherwise harm organizational information systems.

## Proof and Remarks

Mendix is not responsible for this task. The infrastructure implementer and operator, as well as the app implementer and operator must implement these controls and enforce access restrictions for using external information systems according to the customer's policies.
