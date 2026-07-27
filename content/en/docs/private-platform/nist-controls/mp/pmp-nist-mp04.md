---
title: "MP-04 - Media Storage"
linktitle: "MP-04"
url: /private-mendix-platform/nist-controls/mp-04/
description: "Documents the Private Mendix Platform's compliance with the MP-04 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-04 control.

| Control ID | MP-04 |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Physically controls and securely stores organization-defined types of digital and/or non-digital media within organization-defined controlled areas.
* Protects information system media until the media are destroyed or sanitized using approved equipment, techniques, and procedures.

### Supplemental Guidance

Information system media includes both digital and non-digital media. Digital media includes, for example, diskettes, magnetic tapes, external/removable hard disk drives, flash drives, compact disks, and digital video disks. Non-digital media includes, for example, paper and microfilm.

Physically controlling information system media includes, for example, conducting inventories, ensuring procedures are in place to allow individuals to check out and return media to the media library, and maintaining accountability for all stored media. Secure storage includes, for example, a locked drawer, desk, or cabinet, or a controlled media library. The type of media storage is commensurate with the security category and/or classification of the information residing on the media.

Controlled areas are areas for which organizations provide sufficient physical and procedural safeguards to meet the requirements established for protecting information and/or information systems. For media containing information determined by organizations to be in the public domain, to be publicly releasable, or to have limited or no adverse impact on organizations or individuals if accessed by other than authorized personnel, fewer safeguards may be needed. In these situations, physical access controls provide adequate protection.

The following controls are related to this control:

* CP-6
* CP-9
* MP-2
* MP-7
* PE-3

For more information, refer to the FIPS Publication 199 and NIST Special Publications 800-56, 800-57, and 800-111.

## Responsibility

### Customer Responsibility

The determination of appropriate physical controls, storage, retention policies, and sanitization techniques for media within the Mendix solution rests with the Customer. This is because these aspects are deeply intertwined with the Customer's unique operational environment, their specific data classification, regulatory compliance obligations (for example, data residency laws, industry-specific retention mandates), and internal security standards. 

Mendix provides the platform and the technical capabilities to support these policies, but it does not dictate or control the customer's physical infrastructure, their chosen storage solutions, or their legal and business requirements for data retention and secure disposal. Therefore, the customer, as the owner of the data and the entity responsible for its overall governance and compliance, is the only party capable of defining these critical parameters. 

App and Infra Implementers and Operators are responsible for ensuring that both Private Mendix Platform and Mendix applications are configured and managed to rigorously adhere to these customer-defined media security and lifecycle policies.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to determine the appropriate physical controls, secure storage, retention policy, and sanitization techniques for media within the Mendix solution.

It is the responsibility of the Infra Implementer to ensure that the infrastructure's media adheres to the customer's media security and lifecycle policies.

It is the responsibility of the App Implementer to ensure that the media associated with the Mendix app complies with the customer's media security and lifecycle policies. 

It is the responsibility of the Infra Operator and App Operator to ensure that the Mendix solution's media continues to comply with the customer's media security and lifecycle policies through the lifecycle of the Mendix solution.
