---
title: "AU-09 (02) Protection of Audit Information - Audit Backup on Separate Physical Systems or Components"
linktitle: "AU-09 (02)"
url: /private-mendix-platform/nist-controls/au-0902/
description: "Documents the Private Mendix Platform's compliance with the AU-09 (02) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AU-09 (02) control.

| Control ID | AU-09 (02) |
| --- | --- |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org, Customer - Infra |

## Control

The information system backs up audit records at an organization-defined frequency onto a physically different system or system component than the system or component being audited. 

### Supplemental Guidance

This control enhancement helps to ensure that a compromise of the information system being audited does not also result in a compromise of the audit records.

The following controls are related to this control:

* [AU-04](/private-mendix-platform/nist-controls/au-04/)
* [AU-05](/private-mendix-platform/nist-controls/au-05/)
* AU-1

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes establishing audit record backup policies and procedures that ensure logs are regularly replicated to a physically separate system to comply with federal requirements. The customer must ensure that backup destinations, frequencies, and retention periods for audit records are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-92, which establish requirements for the protection and backup of audit information for federal information systems. Customers operating within a FedRAMP or DoD SRG environment must ensure their audit record backup mechanisms meet the baseline requirements for physical separation and data integrity.

To meet these requirements, the customer must carry out the following actions:

1. Define audit record backup destinations and frequency.

    Establish and document where audit records and logs should be backed up to, ensuring the backup target is on a physically different system or system component than the one being audited. The customer must dictate backup frequency, retention periods, and acceptable storage locations in accordance with NIST SP 800-92 guidelines for log management.

2. Ensure infrastructure-level backup configuration.

    Direct the Infra Implementer to ensure that audit record backups are properly created, configured, and populated on the designated physically separate system. This includes verifying that backup processes are automated, monitored for failures, and aligned with the organization's contingency planning requirements per NIST SP 800-34.

3. Ensure application-level audit log backup.

    Direct the App Implementer to ensure that the Mendix App's custom audit logs are properly directed to the backup system as dictated by the Customer. This includes configuring log forwarding mechanisms within the application to target the designated backup infrastructure and validating that all auditable events are captured in the backup trail.
