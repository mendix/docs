---
title: "AC-19 (05) Access Control For Mobile Devices - Full Device or Container-Based Encryption"
linktitle: "AC-19 (05)"
url: /private-mendix-platform/nist-controls/ac-1905/
description: "Documents the Private Mendix Platform's compliance with the AC-19 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-19 (05) control.

| Control ID | AC-19 (05) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization employs full-device encryption and/or container encryption to protect the confidentiality and integrity of information on organization-defined mobile devices.

### Supplemental Guidance

Container-based encryption provides a more fine-grained approach to the encryption of data or information on mobile devices, including for example, encrypting selected data structures such as files, records, or fields.

The following controls are related to this control:

* MP-5
* SC-13
* SC-28

For more information, refer to the OMB Memorandum 06-16 and NIST Special Publications 800-114, 800-124, and 800-164.

## Responsibility

### Customer Responsibility

The customer is responsible for selecting and managing full-device and container encryption on mobile devices according to customer policy.

The app implementer is responsible for enabling the appropriate encryption for the app in compliance with the customer encryption requirements.

## Guidance

Customers must define policies and procedures for mobile device usage, including allowable device types, required encryption configurations, and conditions for connecting devices to information systems.

Mobile device connected to organizational systems should be explicitly enabled full-device and container encryption, ensuring that only organization-defined and approved mobile devices with compliant encryption configurations are allowed access.

Mobile device management practices may include periodic scanning all organization-used mobile devices to protect the confidentiality and integrity of information.

Infrastructure implementers and operators are responsible for managing mobile device encryption capabilities in accordance with customer-defined requirements and policies.

The customer is solely responsible for compliance with mobile device encryption controls.

Mendix recommends enterprise customers to leverage the appropriate device management measures to meet this control.

## Proof and Remarks

Mendix does not select or manage mobile devices for customers.
