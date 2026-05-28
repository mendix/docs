---
title: "AC-02 (12) Account Management - Account Monitoring and Atypical Usage"
linktitle: "AC-02 (12)"
url: /private-mendix-platform/nist-controls/ac-0212/
description: "Documents the Private Mendix Platform's compliance with the AC-02 (12) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-02 (12) control.

| Control ID | AC-02 (12) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Monitors information system accounts for organization-defined atypical use.
* Reports atypical usage of information system accounts to organization-defined personnel or roles.

### Supplemental Guidance

Atypical usage includes, for example, accessing information systems at certain times of the day and from locations that are not consistent with the normal usage patterns of individuals working in organizations.

The following controls are related to this control:

* CA-7.

## Responsibility

### Customer Responsibility

The customer is responsible for monitoring accounts for atypical usage. The Private Mendix Platform provides platform-level audit logs to support this monitoring. The App Implementer is responsible for ensuring that Mendix applications generate sufficient application-level audit logs to support atypical usage detection. The App Operator is responsible for configuring the delivery of both platform and application logs to the customer's atypical usage monitoring tool.

## Guidance

### Customer Responsibility

The Private Mendix Platform provides audit logs that capture account activity events, including authentication attempts, user actions, and timestamps.

Additionally, the Mendix App Developer is responsible for ensuring that each Mendix application generates sufficient audit log data to support atypical usage monitoring. This includes:

* Implementing application-level audit logging using custom microflow logic or the Mendix Audit Trail module to capture user activity such as data access, administrative actions, and sensitive operations.
* Ensuring log entries include user identity, action performed, timestamp, and relevant context to enable meaningful atypical usage analysis.
* Designing log output to be compatible with the customer's chosen SIEM or log management tool so that application logs can be ingested alongside platform logs.
* The customer reviews these logs and applies an atypical usage monitoring tool to detect and alert on anomalous account behavior—such as access at unusual times, or with unusual frequency. Examples of tools that can be used for this purpose include:
* Microsoft Sentinel – A cloud-native SIEM with built-in User and Entity Behavior Analytics (UEBA) for detecting atypical sign-in patterns, unusual access locations, and anomalous activity.
* Splunk Enterprise Security – A SIEM platform that leverages correlation searches, statistical baselines, and anomaly detection to identify atypical account usage patterns.

The customer defines what constitutes atypical usage per their organizational policies and establishes the appropriate alerting and response workflows within their chosen tool.

## Proof and Remarks

The Private Mendix Platform provides platform-level audit logs capturing account activity events. 

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0212-1.png" class="no-border" >}}

The Mendix App Developer implements application-level audit logging within each Mendix application to capture user activity relevant to atypical usage detection. The customer ingests both platform and application logs into their monitoring tool of choice (for example, Microsoft Sentinel, Splunk Enterprise Security) and configures detection rules, alerting, and response workflows for atypical account behavior.

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0212-2.png" class="no-border" >}}