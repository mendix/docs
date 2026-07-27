---
title: "MP-05 - Media Transport"
linktitle: "MP-05"
url: /private-mendix-platform/nist-controls/mp-05/
description: "Documents the Private Mendix Platform's compliance with the MP-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MP-05 control.

| Control ID | MP-05 |
| --- | --- |
| Control category | MP - Media Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Protects and controls organization-defined types of information system media during transport outside of controlled areas using organization-defined security safeguards.
* Maintains accountability for information system media during transport outside of controlled areas.
* Documents activities associated with the transport of information system media.
* Restricts the activities associated with the transport of information system media to authorized personnel.

### Supplemental Guidance

Information system media includes both digital and non-digital media. Digital media includes, for example, diskettes, magnetic tapes, external/removable hard disk drives, flash drives, compact disks, and digital video disks. Non-digital media includes, for example, paper and microfilm. 

This control also applies to mobile devices with information storage capability (for example, smart phones, tablets, E-readers), that are transported outside of controlled areas. Controlled areas are areas or spaces for which organizations provide sufficient physical and/or procedural safeguards to meet the requirements established for protecting information and/or information systems.

Physical and technical safeguards for media are commensurate with the security category or classification of the information residing on the media. Safeguards to protect media during transport include, for example, locked containers and cryptography. 

Cryptographic mechanisms can provide confidentiality and integrity protections depending upon the mechanisms used. Activities associated with transport include the actual transport as well as those activities such as releasing media for transport and ensuring that media enters the appropriate transport processes. 

For the actual transport, authorized transport and courier personnel may include individuals from outside the organization (for example, U.S. Postal Service or a commercial transport or delivery service). Maintaining accountability of media during transport includes, for example, restricting transport activities to authorized personnel, and tracking and/or obtaining explicit records of transport activities as the media moves through the transportation system to prevent and detect loss, destruction, or tampering. 

Organizations establish documentation requirements for activities associated with the transport of information system media in accordance with organizational assessments of risk to include the flexibility to define different record-keeping methods for the different types of media transport as part of an overall system of transport-related records.

The following controls are related to this control:

* AC-19
* CP-9
* MP-3
* MP-4
* RA-3
* SC-8
* SC-13
* SC-28

For more information, refer to the FIPS Publication 199 and NIST Special Publication 800-60.

## Responsibility

### Customer Responsibility

The responsibility for ensuring proper media controls and sanitization of data before and while it is transported rests solely with the customer, along with their App and Infra Implementers and Operators. It is incumbent upon the customer to apply appropriate tracking, anonymization, redaction, encryption, and/or other techniques to protect sensitive or proprietary information while in transit, ensuring that only necessary and appropriately secured data is moved.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer, Infra Implementer, App Implementer, Infra Operator, and App Operator to ensure proper media controls and scrubbing of data before transporting that data to Mendix for the purposes of providing product support.
