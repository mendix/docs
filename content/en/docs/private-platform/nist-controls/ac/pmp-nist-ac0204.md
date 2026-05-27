---
title: "AC-02 (04) Account Management - Automated Audit Actions"
linktitle: "AC-02 (04)"
url: /private-mendix-platform/nist-controls/ac-0204/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (04) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (04) control.

| Control ID | AC-02 (04) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The information system automatically audits account creation, modification, enabling, disabling, and removal actions, and notifies organization-defined personnel or roles.

The following controls are related to this control:

* AU-2
* AU-12.

## Responsibility

### Customer Responsibility

This control is implemented at the Identity Provider (IdP) level and is the responsibility of the customer's IdP administrator. For Private Mendix Platform integrated with the IdP through Single Sign-On (SSO), no additional implementation is required on the Private Mendix Platform side, as all account lifecycle events — including creation, modification, enabling, disabling, and removal — are managed and audited centrally by the IdP. 

## Guidance

### Customer Responsibility

As an example IdP, Microsoft Entra ID natively captures all account lifecycle events — including creation, modification, enabling, disabling, and removal — through its built-in Audit Logs.  If using Entra ID the control could be fulfilled as follows:

* To meet the automated notification requirement, organizations can export audit logs to Azure Monitor or Microsoft Sentinel and configure alert rules with Action Groups to notify designated personnel or roles in real time. 
* For long-term log retention, audit logs should be forwarded to a Log Analytics Workspace or Azure Storage Account via Diagnostic Settings. 
* Customers may implement alerts using their audit and logging management system of choice, such as Microsoft Sentinel or any third-party SIEM integrated by using Azure Event Hub.

Other IdP systems would offer similar approaches to fulfilling this control.