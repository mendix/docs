---
title: "AC-20 (02) Use Of External Information Systems - Portable Storage Devices"
linktitle: "AC-20 (02)"
url: /private-mendix-platform/nist-controls/ac-2002/
description: "Documents the Private Mendix Platform's compliance with the AC-20 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-20 (02) control.

| Control ID | AC-20 (2) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization restricts or prohibits the use of organization-controlled portable storage devices by authorized individuals on external information systems.

### Supplemental Guidance

Limits on the use of organization-controlled portable storage devices in external information systems include, for example, complete prohibition of the use of such devices or restrictions on how the devices may be used and under what conditions the devices may be used.

## Responsibility

### Customer Responsibility

It is the responsibility of the customer to dictate what portable storage device restrictions are imposed.  

It is the responsibility of the infrastructure implementer and operator to appropriately restrict storage device usage from the infrastructure layer as required by the customer.  

It is the responsibility of the Mendix application implementer to restrict the access and use of input and output, including storage devices, within the application.  

## Guidance

Customers should define security policies and procedures for portable storage device usage, including allowable device types, required security configurations (for example, mandatory protective software, firmware updates, disabling or prohibiting unnecessary hardware), and conditions for connecting devices to information systems.

Portable storage devices connected to organizational systems should be explicitly authorized and logged, ensure only approved devices with compliant security configurations are allowed access.

Portable storage device management practices may include periodic scanning for malicious code, mandatory virus protection updates, operating system integrity checks, and device authentication.

Infrastructure implementers and operators are responsible for managing portable storage device capabilities in accordance with customer-defined requirements and security policies.

## Proof and Remarks

Mendix is not responsible for this task.
