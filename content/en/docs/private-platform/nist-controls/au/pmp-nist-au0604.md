---
title: "AU 06 (04) Audit Review, Analysis, And Reporting - Process Integration"
linktitle: "AU-06 (04)"
url: /private-mendix-platform/nist-controls/au-0604/
description: "Documents the Private Mendix Platform's compliance with the AU-06 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-06 (04) control.

| Control ID | AU-06 (04) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system provides the capability to centrally review and analyze audit records from multiple components within the system.

### Supplemental Guidance

Automated mechanisms for centralized reviews and analyses include, for example, Security Information Management products.

The following controls are related to this control:

* AU-2
* AU-12

## Responsibility

### Customer Responsibility

The customer is responsible for indicating which components must be audited, and where the audit logs for those components should go.

The infrastructure implementer is responsible for targeting those audit logs, as dictated by the customer.

The infrastructure operator is responsible for ensuring that it is possible to conduct ongoing central review and analysis of audit logs or records.

The app implementer is responsible for creating custom audit logs or records as in the Mendix app, as dictated by the customer.

## Guidance

### Customer Responsibility

The customer should define which components must be audited, and where the audit logs for those components should be saved centrally. 

The customer should set up automation mechanisms for centralized reviews and analyses of audit records.

## Proof and Remarks

Private Mendix Platform provides the **Settings > Activity Logs > Log Settings** page where customers can configure an external database to which logs must be written for centralized review and analysis:

{{< figure src="/attachments/private-platform/nist-au/nist-au-0604-1.png" class="no-border" >}}
