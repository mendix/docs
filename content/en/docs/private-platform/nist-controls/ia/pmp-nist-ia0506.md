---
title: "IA-05 (06) Protection Of Authenticators"
linktitle: "IA-05 (06)"
url: /private-mendix-platform/nist-controls/ia-0506/
description: "Documents the Private Mendix Platform's compliance with the IA-05 (06) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 (06) control.

| Control ID | IA-05 (06) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Operator, Customer - Infra |

## Control {#control}

The organization protects authenticators commensurate with the security category of the information to which use of the authenticator permits access.

### Supplemental Guidance

For information systems containing multiple security categories of information without reliable physical or logical separation between categories, authenticators used to grant access to the systems are protected commensurate with the highest security category of information on the systems.

## Responsibility

### Customer Responsibility

The customer should ensure that all authenticators are protected at a level commensurate with the highest sensitivity of the data they can access, especially in systems without clear separation.

## Guidance

### Customer Responsibility

It is the responsibility of the customer to determine the solution's security category (SC) and to protect authenticators at the appropriate level.

It is the responsibility of the Infra Implementer to ensure the infrastructure environments and instances of Private Mendix Platform are protected at the appropriate level, including authenticator protections, to handle the SC of the solutions they contain in compliance with the customer's directives.

It is the responsibility of the App Implementer to ensure the Mendix App protects its information and authenticators at the appropriate level to handle the SC of the solution and to comply with the customer's directives.

It is the responsibility of the Infra Operator and the App Operator to ensure ongoing compliance as the SC of the solution changes or customer directives change.