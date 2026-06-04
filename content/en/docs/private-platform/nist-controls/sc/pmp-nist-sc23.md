---
title: "SC-23 System and Communications Protection - Session Authenticity"
linktitle: "SC-23"
url: /private-mendix-platform/nist-controls/sc-23/
description: "Documents the Private Mendix Platform's compliance with the SC-23 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the SC-23 control.

| Control ID | SC-23 |
| --- | --- |
| Control category | SC - System and Communications Protection |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The information system protects the authenticity of communications sessions.

### Supplemental Guidance

This control addresses communications protection at the session, versus packet level (for example, sessions in service-oriented architectures providing web-based services) and establishes grounds for confidence at both ends of communications sessions in ongoing identities of other parties and in the validity of information transmitted. Authenticity protection includes, for example, protecting against man-in-the-middle attacks or session hijacking and the insertion of false information into sessions.

The following controls are related to this control:

* SC-8
* SC-10
* C-11

For more information, refer to the NIST Special Publication 800-52, 800-77, and 800-95.

## Responsibility

### Customer Responsibility

This task is not a Mendix responsibility. It is the customer's responsibility to work with the Infra Implementer to ensure that TLS is properly implemented.

## Guidance

### Customer Responsibility

The customer and Infra Implementer must ensure that:

* TLS (Transport Layer Security) is properly configured for all communications sessions.
* Session authenticity mechanisms protect against man-in-the-middle attacks and session hijacking.
* Both ends of communications sessions can verify the ongoing identities of the other parties.
* Session-level protections prevent insertion of false information into active sessions.

It is the responsibility of the Infra Operator to ensure ongoing compliance with TLS and session authenticity requirements.
