---
title: "CM-05 - Access Restrictions for Change"
linktitle: "CM-05"
url: /private-mendix-platform/nist-controls/cm-05/
description: "Documents the Private Mendix Platform's compliance with the CM-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-05 control.

| Control ID | CM-05 |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Infra, Customer - Org |

## Control

The organization defines, documents, approves, and enforces physical and logical access restrictions associated with changes to the information system. 

### Supplemental Guidance

Any changes to the hardware, software, or firmware components of information systems can potentially have significant effects on the overall security of the systems. Therefore, organizations permit only qualified and authorized individuals to access information systems for purposes of initiating changes, including upgrades and modifications. 

Organizations maintain records of access to ensure that configuration change control is implemented and to support after-the-fact actions should organizations discover any unauthorized changes. Access restrictions for change also include software libraries. 

Examples of access restrictions include the following:
* Physical and logical access controls (for example, AC-03 and PE-03)
* Workflow automation
* Media libraries
* Abstract layers (for example, changes implemented into third-party interfaces rather than directly into information systems)
* Change windows (for example, changes occur only during specified times, making unauthorized changes easy to discover). 

The following controls are related to this control:

* AC-03
* AC-06
* PE-03

## Responsibility

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes defining, documenting, and enforcing physical and logical access restrictions for all changes to the information system to ensure compliance with federal requirements. The customer must ensure that change control access restrictions, including approval workflows and access records, are documented, reviewed, and enforced within their environment.

## Guidance

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-128, which establish requirements for restricting access to information system change processes and maintaining configuration change control. Customers operating within a FedRAMP or DoD SRG environment must ensure that only qualified and authorized individuals can initiate changes to the information system, and that all access for change purposes is documented.

To meet these requirements, the customer must carry out the following actions:

1. Define and document change control access restrictions.

    The customer must define, document, approve, and enforce change control access restrictions for the information system. This includes establishing which personnel or roles are authorized to make changes, defining change windows, and implementing approval workflows in accordance with NIST SP 800-53 Rev 4 AC-3 and AC-6 least privilege principles.

2. Implement physical and logical access controls.

    The customer must ensure that both physical and logical access controls are in place for change management, including workflow automation, role-based access to deployment pipelines, and media library restrictions. The Infra Implementer, App Implementer, Infra Operator, and App Operator must respect the customer's change control restrictions throughout the system lifecycle per NIST SP 800-128.

3. Maintain change access records and audit trails.

    The customer must maintain records of all access granted for change purposes and periodically review these records to detect unauthorized changes. This includes implementing audit logging for all configuration change activities, conducting regular reviews of change access permissions, and enforcing separation of duties as required by PE-03 physical protection requirements.