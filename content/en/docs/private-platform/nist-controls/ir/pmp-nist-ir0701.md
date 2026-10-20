---
title: "IR-07 (01) Automation Support For Availability Of Information or Support"
linktitle: "IR-07 (01)"
url: /private-mendix-platform/nist-controls/ir-0701/
description: "Documents the Private Mendix Platform's compliance with the IR-07 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the IR-07 (01) control.

| Control ID | IR-07 (01) |
| --- | --- |
| Control category | IR - Incident Response |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Operator, Customer - Infra |

## Control

The organization employs automated mechanisms to increase the availability of incident response-related information and support.

### Supplemental Guidance

Automated mechanisms can provide a push and/or pull capability for users to obtain incident response assistance. For example, individuals might have access to a website to query the assistance capability, or conversely, the assistance capability may have the ability to proactively send information to users (general distribution or targeted) as part of increasing understanding of current response capabilities and support.

## Responsibility

### Customer Responsibility

This is not a Mendix responsibility. It is the responsibility of the customer to determine what automated mechanisms are appropriate to increase security incident response information sharing and support.  

It is the responsibility of the Infra Implementer to ensure the infrastructure and Private Mendix Platform are properly integrated with any automated security incident response sharing mechanisms dictated by the customer.  

It is the responsibility of the App Implementer to ensure that the Mendix app is properly integrated with any automated security incident response sharing mechanisms dictated by the Customer.  

It is the responsibility of the Infra Operator and the App Operator to ensure ongoing successful integration with these automated mechanisms, as dictated by the customer.  

## Guidance

### Customer Responsibility

The customer is ultimately responsible for compliance with this control, because they are the owners of their business processes, data, and security posture. They are best positioned to determine what automated security incident response mechanisms are appropriate for their unique operational context. 

The Infra and App Implementers are responsible for ensuring that the customer's chosen automated security incident mechanisms are correctly configured and integrated at the foundational infrastructure level, and for individual Mendix apps.  

The Infra and App Operators are responsible for ensuring ongoing integration with the automated security incident mechanisms, as well as any required updates.
