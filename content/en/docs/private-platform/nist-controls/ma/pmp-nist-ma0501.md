---
title: "MA-05 (01) Individuals Without Appropriate Access"
linktitle: "MA-05 (01)"
url: /private-mendix-platform/nist-controls/ma-0501/
description: "Documents the Private Mendix Platform's compliance with the MA-05 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MA-05 (01) control.

| Control ID | MA-05 (01) |
| --- | --- |
| Control category | MA - Maintenance |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The organization:

* Implements procedures for the use of maintenance personnel that lack appropriate security clearances or are not U.S. citizens, that include the following requirements:

    * Maintenance personnel who do not have needed access authorizations, clearances, or formal access approvals are escorted and supervised during the performance of maintenance and diagnostic activities on the information system by approved organizational personnel who are fully cleared, have appropriate access authorizations, and are technically qualified.
    * Prior to initiating maintenance or diagnostic activities by personnel who do not have needed access authorizations, clearances or formal access approvals, all volatile information storage components within the information system are sanitized and all nonvolatile storage media are removed or physically disconnected from the system and secured.

* Develops and implements alternate security safeguards in the event an information system component cannot be sanitized, removed, or disconnected from the system.

### Supplemental Guidance

This control enhancement denies individuals who lack appropriate security clearances (for example, individuals who do not possess security clearances or possess security clearances at a lower level than required) or who are not U.S. citizens, visual and electronic access to any classified information, Controlled Unclassified Information (CUI), or any other sensitive information contained on organizational information systems. Procedures for the use of maintenance personnel can be documented in security plans for the information systems.

The following controls are related to this control:

* MP-6
* PL-2.

## Responsibility

### Customer Responsibility

It is the customer's responsibility to setup appropriate access and clearance controls for personnel maintaining the Private Mendix Platform and any Mendix apps built through the Mendix solution. 

Through Mendix's dynamic role management on both Private Mendix Platform and through Mendix applications themselves, customers can precisely control user access for maintenance purposes.

Additionally, it is the responsibility of the Infra Implementer and Operator, as well as the App Implementer and Operator to implement and enforce these controls as determined by the customer.

## Guidance

### Customer Responsibility

It is the responsibility of the customer to implement policies and procedures for allowing the ability to perform maintenance on the Mendix solution to individuals who either lack appropriate security clearances or are not U.S. citizens/persons.

It is also the customer's responsibility to ensure that system data is sanitized, and/or implement other security safeguards, prior to maintenance occurring. 

It is the responsibility of the Infra Implementer, App Implementer, Infra Operator, and App Operator to comply with the the customer's third-party personnel and data safety policies and procedures when doing work on the Mendix solution. 

This is not a Mendix responsibility, except in cases where direct product support is required, in which case Mendix will comply with the customer's policies and procedures as required by law.

## Proof and Remarks

For more information, see [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/).