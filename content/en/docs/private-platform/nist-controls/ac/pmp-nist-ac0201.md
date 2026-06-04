---
title: "AC-02 (01) Account Management - Automated System Account Management"
linktitle: "AC-02 (01)"
url: /private-mendix-platform/nist-controls/ac-0201/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (01) control.

| Control ID | AC-02 (01) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization employs automated mechanisms to support the management of information system accounts.

### Supplemental Guidance

The use of automated mechanisms can include, for example: 

* Using email or text messaging to automatically notify account managers when users are terminated or transferred
* Using the information system to monitor account usage
* Using telephonic notifications to report atypical system account usage.

## Responsibility

### Customer Responsibility

Management mechanisms towards customer accounts are set and controlled at the customer IdP-level. Customers have the flexibility to implement any alerts they require by utilizing their preferred audit and logging management system. This approach allows organizations to integrate alerting mechanisms that best fit their operational needs and compliance requirements, ensuring seamless monitoring and timely notifications within their existing infrastructure.

## Guidance

### Customer Responsibility

The platform provides the necessary audit logs and event data that customers can ingest into their preferred monitoring solution to satisfy this control requirement.

For example, organizations using Azure Entra ID (Azure AD), alerts can be configured through Azure AD’s built-in monitoring and security features. Specifically, customers can leverage Azure AD Identity Protection to set up risk-based alerts, use Azure Monitor and Log Analytics to create custom queries and alert rules based on sign-in and audit logs, and integrate with Microsoft Sentinel for advanced security incident detection and automated response. 

Examples of customer-implemented alerts may include, but are not limited to:

* Alerts on account creation or deletion events
* Notifications for privilege escalation or role changes
* Alerts for dormant or inactive accounts
* Notifications for failed login attempts or account lockouts

## Proof and Remarks

Private Mendix Platform offers integrations to customer IdP over industry-standard protocols - OIDC and SAML:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-1.png" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-01-2.png" class="no-border" >}}
