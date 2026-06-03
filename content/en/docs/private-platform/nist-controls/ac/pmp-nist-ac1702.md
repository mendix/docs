---
title: "AC-17 (02) Remote Access (Protection Of Confidentiality and Integrity Using Encryption)"
linktitle: "AC-17 (02)"
url: /private-mendix-platform/nist-controls/ac-1702/
description: "Documents the Private Mendix Platform's compliance with the AC-17 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-17 (02) control.

| Control ID | AC-17 (02) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The information system implements cryptographic mechanisms to protect the confidentiality and integrity of remote access sessions.

### Supplemental Guidance

The encryption strength of mechanism is selected based on the security categorization of the information.

The following controls are related to this control:

* SC-8
* SC-12
* SC-13

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control (policies and procedures) within their organization. Customers must select, configure, and maintain cryptographic mechanisms (such as certificates and encryption) for protecting the confidentiality and integrity of remote access sessions.

## Guidance

* The customer must configure the necessary certificates and encryption mechanisms for remote access, including but not limited to setting up secure channels (for example, TLS/SSL), VPNs, and encryption-at-rest as appropriate.
* Customers must select encryption strength and protocols based on their information security categorization, in accordance with organizational policy and compliance requirements.
* The infrastructure operator is responsible for implementing, maintaining, and periodically validating the effectiveness of cryptographic protection for remote access connections.
* Customers should that ensure certificates are properly managed, rotated, and revoked if compromised, and verify that encryption mechanisms for remote access are active and correctly configured.

Mendix does not implement or manage cryptographic protection for remote access sessions in Private Mendix Platform. All encryption controls must be configured at the infrastructure level by the customer.

## Proof and Remarks

For more information about setting up Kubernetes Ingress with TLS, see [Network Ingress Settings in Mendix on Kubernetes](/developerportal/deploy/private-cloud-cluster/private-cloud-ingress-settings/).
