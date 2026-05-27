---
title: "AC-18 (03) Wireless Access (Disable Wireless Networking)"
linktitle: "AC-18 (03)"
url: /private-mendix-platform/nist-controls/ac-1803/
description: "Documents the Private Mendix Platform's compliance with the AC-18 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-18 (03) control.

| Control ID | AC-18 (03) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization disables, when not intended for use, wireless networking capabilities internally embedded within information system components prior to issuance and deployment.

### Supplemental Guidance

The following controls are related to this control:

* AC-19

## Responsibility

### Customer Responsibility

The customer is responsible for managing and disabling device wireless networking capabilities according to their organizational policy before system components are issued and deployed.

## Guidance

The customer must ensure wireless networking features embedded in devices (for example, Wi-Fi, Bluetooth) are disabled if not explicitly intended for use before deployment into the information system environment.

Infrastructure implementers and operators should follow organizational policy to verify and document the status of wireless networking capabilities prior to deployment.

Regular reviews should be performed to ensure unauthorized wireless networking features remain disabled on all applicable system components.

This control pertains to OSI Model Level 1 (hardware/network level) and does not apply to application-level controls or to the Mendix application platform itself.

Responsibility for managing, disabling, and auditing wireless networking capabilities resides with the customer and their infrastructure teams.

## Proof and Remarks

This control is not relevant for applications (level 7).