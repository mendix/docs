---
title: "AC-18 (01) Wireless Access (Authentication And Encryption)"
linktitle: "AC-18 (01)"
url: /private-mendix-platform/nist-controls/ac-1801/
description: "Documents the Private Mendix Platform's compliance with the AC-18 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-18 (01) control.

| Control ID | AC-18 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The information system protects wireless access to the system using authentication of users and devices, and encryption.

### Supplemental Guidance

The following controls are related to this control:

* SC-8
* SC-13

## Responsibility

### Customer Responsibility

The customer is responsible for implementing and enforcing wireless access device policies, including requirements for authentication and encryption.

## Guidance

Customers must establish policies requiring wireless access to be protected by user and/or device authentication, and ensure encryption is used to secure all wireless communications (for example, WPA2-Enterprise, EAP/TLS).

Infrastructure implementers and operators should configure wireless networks to comply with customer requirements, such as using approved authentication protocols and robust encryption standards.

Regular reviews and testing should be conducted to confirm enforcement of authentication and encryption measures for wireless access devices.

This control pertains to the physical and network layers (OSI Model Level 1) and is not relevant to application-layer controls. Mendix does not manage wireless access authentication or encryption.

Responsibility for implementing these protections resides entirely with the customer and their infrastructure teams.

## Proof and Remarks

This control is not relevant for applications (level 7).
