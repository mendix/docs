---
title: "CM-05 (05) Access Restrictions for Change - Limit Production or Operational Changes"
linktitle: "CM-05 (05)"
url: /private-mendix-platform/nist-controls/cm-0505/
description: "Documents the Private Mendix Platform's compliance with the CM-05 (05) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-05 (05) control.

| Control ID | CM-05 (05) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Infra, Customer - Org |

## Control

The organization: 
* Limits privileges to change information system components and system-related information within a production or operational environment.
* Reviews and reevaluates privileges at an organization-defined frequency. 

### Supplemental Guidance

In many organizations, information systems support multiple core missions or business functions. Limiting privileges to change information system components with respect to operational systems is necessary because changes to a particular information system component may have far-reaching effects on mission or business processes supported by the system where the component resides. The complex, many-to-many relationships between systems and mission or business processes are in some cases, unknown to developers.

The following controls are related to this control:

* AC-02

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

The customer is responsible for implementing this control in an appropriate manner in their organization. This includes deciding what users and roles are allowed to change components within the system in production or operational environments, and performing timely reevaluations to ensure compliance with federal requirements. The customer must ensure that production change privileges, access reviews, and reevaluation schedules are documented, reviewed, and enforced within their environment.

The Infra Implementer is responsible for ensuring that infrastructure changes to production and operational environments are properly restricted.

The Infra Operator is responsible for ensuring that production and operational environment change controls remain current throughout the lifecycle of the system.

## Guidance

### Mendix Responsibility

Private Mendix Platform allows the restriction of production environment deployments to specific users and/or roles. The platform's role-based access control system enables organizations to define which users can deploy to production environments, modify system configurations, and manage platform settings. Access restrictions are enforced through integration with the customer's Identity Provider supporting dynamic role mapping that honors the customer's access control policies.

To configure this control, perform the following steps:

1. Configure production deployment restrictions. 

    Configure the Private Mendix Platform to restrict production environment deployments to specific authorized users and roles, ensuring that only approved personnel can deploy changes to operational environments.

2. Implement role-based production access.

    Use the platform's role-based security model to define and enforce granular privileges for production environment operations, including deployment, configuration changes, and data management activities.

3. Enable production access auditing. 

    Configure audit logging for all production environment access and change activities, enabling the customer to review and reevaluate privileges at the required frequency.

### Customer Responsibility

This control is governed by NIST SP 800-53 Rev 4 and NIST SP 800-128, which establish requirements for limiting and reviewing privileges to change information system components in production environments. Customers operating within a FedRAMP or DoD SRG environment must ensure that production change privileges are limited to authorized personnel and regularly reevaluated.

To meet these requirements, the customer must carry out the following actions:

1. Define production change privilege policies.

    The customer must decide what users and roles are allowed to change components within the system in production or operational environments. This includes defining separation of duties between development and production access, and establishing approval workflows for production changes in accordance with NIST SP 800-53 AC-2 and AC-6 least privilege principles.

2. Ensure infrastructure production access restrictions.

    The Infra Implementer must ensure that infrastructure changes to production and operational environments are properly restricted based on the customer's policies. The Infra Operator must ensure that production and operational environment change controls remain current throughout the lifecycle of the system, including when infrastructure components are added or modified.

3. Perform regular privilege reevaluations.

    The customer must review and reevaluate production change privileges at organization-defined frequencies to ensure that only currently authorized personnel retain the ability to make production changes. This includes removing privileges for personnel who have changed roles or left the organization, per NIST SP 800-53 AC-2 account management requirements.

#### Infra Implementer

The Infra Implementer is responsible for ensuring that infrastructure changes to production and operational environments are properly restricted. This includes configuring access controls on infrastructure management tools, deployment pipelines, and cloud service consoles to limit who can make production changes.

The Infra Implementer must perform the following tasks:

1. Implement infrastructure production access controls.

    Configure access controls on all infrastructure management interfaces (cloud consoles, CLI tools, deployment pipelines) to restrict production environment changes to authorized users and roles only.

2. Enforce separation of duties. 

    Implement separation of duties between infrastructure development, testing and production operations, ensuring that infrastructure changes must go through formal approval before being applied to production.

3. Configure infrastructure access auditing.

    Enable comprehensive logging of all infrastructure access and change activities in production environments to support privilege reevaluation and compliance auditing.

#### Infra Operator

The Infra Operator is responsible for ensuring that production and operational environment change controls remain current and effective throughout the lifecycle of the system, including as infrastructure evolves and personnel changes occur.

The Infra Operator must perform the following tasks:

1. Maintain production access controls. 

    Continuously review and update infrastructure production access controls as the system evolves, ensuring that access restrictions remain aligned with the customer's policies.

2. Support privilege reevaluations. 

    Provide regular reports on infrastructure production access privileges to the customer to support scheduled privilege reevaluations.

3. Respond to access control changes. 

    Promptly implement changes to production access privileges as directed by the customer, including revoking access for personnel who no longer require production access.

## Proof and Remarks

In Private Mendix Platform, different roles have different access rights. Only some roles can access resources such as making changes to related information within a production or operational environment.

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0505-1.png" class="no-border" >}}

For example, users with the Build Approval role can approve pipelines, and start or stop apps. However, they cannot create packages or change constant variables.

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0505-2.png" class="no-border" >}}

Users with the Contributor role can only contribute to the app, but they cannot access the deployment.

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0505-3.png" class="no-border" >}}

For more information, see [Dynamic Role Management in Private Mendix Platform](/private-mendix-platform/dynamic-role-management/).