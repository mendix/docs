---
title: "AU-03 (01) Content Of Audit Records - Additional Audit Information"
linktitle: "AU-03 (01)"
url: /private-mendix-platform/nist-controls/au-0301/
description: "Documents the Private Mendix Platform's compliance with the AU-03 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-03 (01) control.

| Control ID | AU-03 (01) |
| --- | --- |
| Control category | AU - Audit and Accountability |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra |

## Control

The information system generates audit records containing additional, more detailed organization-defined information.

### Supplemental Guidance

Detailed information that organizations may consider in audit records includes, for example, full text recording of privileged commands or the individual identities of group account users. Organizations consider limiting the additional audit information to only information explicitly needed for specific audit requirements. This facilitates the use of audit trails and audit logs by not including information that could potentially be misleading, or could make it more difficult to locate information of interest.

## Responsibility

### Customer Responsibility

The customer is responsible for deciding what additional audit information is required. 

The infrastructure implementer is responsible for ensuring that any additional infrastructure audit information is produced.

The app implementer is responsible for ensuring that any additional audit information is added to the Mendix app as dictated by the customer.

## Guidance

### Customer Responsibility

The customer should define additional, more detailed information for audit trail and logs. This may include full text recording of privileged commands, or the individual identities of group account users. 

The customer should limit the additional audit information to only the information that is explicitly needed to fulfill specific audit requirements, and avoid including information that is not needed to fulfill the requirements.

## Proof and Remarks

Mendix is not responsible for this task. The customer must decide what additional audit information is required.
