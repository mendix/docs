---
title: "IA-05 (04) Automated Support for Password Strength Determination"
linktitle: "IA-05 (04)"
url: /private-mendix-platform/nist-controls/ia-0504/
description: "Documents the Private Mendix Platform's compliance with the IA-05 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-05 (04) control.

| Control ID | IA-05 (04) |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Operator, Customer - Infra |

## Control {#control}

The organization employs automated tools to determine if password authenticators are sufficiently strong to satisfy organization-defined requirements.

### Supplemental Guidance

This control enhancement focuses on the creation of strong passwords and the characteristics of such passwords (for example, complexity) prior to use, the enforcement of which is carried out by organizational information systems in IA-5 (1).

The following controls are related to this control:

* CA-2
* CA-7
* RA-5

## Responsibility

### Customer Responsibility

Customer is responsible for providing corresponding tools to check whether any app's password is strong enough prior to use. Typically through their Identity Provider (IdP) of choice.

## Guidance

### Customer Responsibility

It is the responsibility of the customer to define strong password requirements, and ensure that tools and systems are in place to ensure strong passwords.

It is the responsibility of the Infra Implementer to ensure infrastructure integration with the customer's identity provider (IdP) and strong password tooling.

It is the responsibility of the App Implementer to ensure the Mendix App integrates with the customer's IdP and strong password tooling.

It is the responsibility of the Infra Operator and App Operator to ensure ongoing integration with the customers IdP and strong password tooling throughout the lifecycle of the system.