---
title: "IA-06 Authenticator Feedback"
linktitle: "IA-06"
url: /private-mendix-platform/nist-controls/ia-06/
description: "Documents the Private Mendix Platform's compliance with the IA-06 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IA-06 control.

| Control ID | IA-06 |
| --- | --- |
| Control category | IA -  Identification and Authentication |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Customer - Infra |

## Control

The information system obscures feedback of authentication information during the authentication process to protect the information from possible exploitation/use by unauthorized individuals.

### Supplemental Guidance

The feedback from information systems does not provide information that would allow unauthorized individuals to compromise authentication mechanisms. For some types of information systems or system components, for example, desktops or notebooks with relatively large monitors, the threat (often referred to as shoulder surfing) may be significant. For other types of systems or components, for example, mobile devices with 2-4 inch screens, this threat may be less significant, and may need to be balanced against the increased likelihood of typographic input errors due to the small keyboards. Therefore, the means for obscuring the authenticator feedback is selected accordingly. Obscuring the feedback of authentication information includes, for example, displaying asterisks when users type passwords into input devices, or displaying feedback for a very limited time before fully obscuring it.

The following controls are related to this control:

* PE-18

## Responsibility

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform protect login data by obfuscating and encrypting it to reduce the risk of authentication abuse.

### Customer Responsibility

The customer is responsible for ensuring that their SSO provider and identity provider (IdP) do not expose any exploitable authentication information and remain securely configured to prevent leakage across both the PMP and deployed Mendix app.

## Guidance

### Mendix Responsibility

The Mendix Runtime and Private Mendix Platform obscure and encrypt login information in order to prevent authentication exploitation.

### Customer Responsibility

If single sign on (SSO) is being used with the customer's identity provider (IdP), it is the responsibility of the customer to ensure their SSO provider does not leak any exploitable authentication information.

It is the responsibility of the App Implementer to ensure the Mendix app does not leak any exploitable authentication information during login.

It is the responsibility of the App Operator to ensure that changes to the Mendix App do not cause exploitable authentication information to leak.

## Proof and Remarks

Below is a description of the approach mechanism:

1. When a new user account is created, its password is encrypted by Bcrypt algorithm (a one-way hashing process to store password safely). In a one-way process, an encrypted hashing password can never be calculated reversely to its prior string before encryption.
2. During login, the password which the user enters is hashed by the same algorithm. After that, the hashed input string is compared to the encrypted password to proceed with authentication.