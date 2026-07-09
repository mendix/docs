---
title: "MA-04 (03) Comparable Security and Sanitization"
linktitle: "MA-04 (03)"
url: /private-mendix-platform/nist-controls/ma-0403/
description: "Documents the Private Mendix Platform's compliance with the MA-04 (03) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the MA-04 (03) control.

| Control ID | MA-04 (03) |
| --- | --- |
| Control category | MA - Maintenance |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization:

* Requires that nonlocal maintenance and diagnostic services be performed from an information system that implements a security capability comparable to the capability implemented on the system being serviced.
* Alternatively, removes the component to be serviced from the information system prior to nonlocal maintenance or diagnostic services, sanitizes the component (with regard to organizational information) before removal from organizational facilities, and after the service is performed, inspects and sanitizes the component (with regard to potentially malicious software) before reconnecting the component to the information system.

### Supplemental Guidance

Comparable security capability on information systems, diagnostic tools, and equipment providing maintenance services implies that the implemented security controls on those systems, tools, and equipment are at least as comprehensive as the controls on the information system being serviced.

The following controls are related to this control:

* MA-3
* SA-12
* SI-3
* SI-7.

## Responsibility

### Customer Responsibility

The responsibility for defining required external maintenance capabilities, ensuring non-local maintenance systems are compliant, and dictating component removal policies lies with the Customer. 

Additionally, the customer's Infra and App Operators must ensure adherence with the customer's external maintenance policiees and align with their governance, security, and operational standards.

## Guidance

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to defined the required external maintenance capabilities, as well as ensuring that non-local maintenance systems are compliant. 

It is the responsibility of the Infra Operator and App Operator to respect the customer's requirements and only use approved tools and systems when completing non-local maintenance, and complying with customer dictated component removal policies and procedures before, during, and after any non-local service.