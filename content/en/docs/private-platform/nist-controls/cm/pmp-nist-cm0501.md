---
title: "CM-05 (01) Access Restrictions for Change - Automated Access Enforcement and Auditing"
linktitle: "CM-05 (01)"
url: /private-mendix-platform/nist-controls/cm-0501/
description: "Documents the Private Mendix Platform's compliance with the CM-05 (01) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the CM-05 (01) control.

| Control ID | CM-05 (01) |
| --- | --- |
| Control category | CM - Configuration Management |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Mendix - Operator, Mendix - Studio Pro/Runtime, Customer - Infra, Customer - Org |

## Control

The information system enforces access restrictions and supports auditing of the enforcement actions.

### Supplemental Guidance

The following controls are related to this control:

* [AU-02](/private-mendix-platform/nist-controls/au-02/)
* AU-06
* [AU-12](/private-mendix-platform/nist-controls/au-12/)
* CM-03
* [CM-06](/private-mendix-platform/nist-controls/cm-06/)

## Responsibility

### Mendix Responsibility

Mendix is responsible for implementing and maintaining this control at the platform level.

### Customer Responsibility

#### Infra Implementer

The Infra Implementer is responsible for ensuring infrastructure access restrictions are in place and audited.

#### App Implementer

The App Implementer is responsible for ensuring the Mendix app has appropriate access restriction policies in place and provides appropriate auditing on those access restrictions.

#### Infra Operator

The Infra Operator is responsible for ensuring infrastructure access restrictions and auditing remain current through infrastructure changes.

#### App Operator

The App Operator is responsible for ensuring Mendix app access restrictions and auditing remain current through system changes.

## Guidance

### Mendix Responsibility

Mendix supports robust access restrictions and auditing of user actions through Private Mendix Platform. Access restrictions at the platform level are enforced through integration with the customer's Identity Provider (IdP), supporting industry-standard protocols for single sign-on and role-based access control. The Mendix platform provides [role-based access controls](/refguide/security/) that can be configured to restrict who can deploy, modify, and manage applications and platform settings. Auditing of access enforcement actions is supported through platform logging capabilities.

Meeting these requirements requires the following actions:

1. Configure IdP-based access restrictions.

    Integrate the Private Mendix Platform with the organization's Identity Provider to enforce access restrictions at the platform level. Configure role mappings to ensure that only authorized users can perform change operations such as deployments and configuration modifications.

2. Enable access enforcement auditing.

    Configure the platform to log all access enforcement actions, including role assignments, and privilege escalations. Ensure that these audit records are exported to the organization's centralized logging infrastructure.

3. Implement application-level access controls.

    Use Mendix's [role-based security model](/refguide/security/) and Private Mendix Platform's dynamic role management to define and enforce access restrictions within applications.

### Infra Implementer

The Infra Implementer is responsible for ensuring that infrastructure-level access restrictions are in place and that enforcement actions are audited. This includes configuring access controls on operating systems, network devices, cloud services, and container platforms that support the Mendix deployment.

The Infra Implementer must perform the following tasks:

1. Implement infrastructure access controls.

    Configure role-based access controls on all infrastructure components, ensuring that only authorized personnel can make changes to the infrastructure that supports the Mendix platform.

2. Enable access enforcement audit logging.

    Configure infrastructure components to log all access enforcement actions, including authentication attempts, authorization decisions, and privilege changes.

3. Integrate with centralized audit system.

    Forward infrastructure access enforcement logs to the organization's centralized logging and monitoring system for correlation and analysis.

### App Implementer

The App Implementer is responsible for ensuring that the Mendix application has appropriate access restriction policies in place and provides appropriate auditing on those access restrictions. This includes implementing role-based access controls within the application and configuring audit logging for enforcement actions.

The App Implementer must perform the following tasks:

1. Implement application access restriction policies.

    Configure the Mendix application's security model with appropriate user roles, module roles, and entity access rules to enforce access restrictions on application data and functionality.

2. Enable application audit logging.

    Implement the Mendix Audit Trail module and custom logging to capture all access enforcement actions within the application, including access grants, denials, and role changes.

3. Validate access control effectiveness.

    Test application access controls to verify that restrictions are properly enforced and that all enforcement actions are accurately captured in audit logs.

### Infra Operator

The Infra Operator is responsible for ensuring that infrastructure access restrictions and associated auditing remain current and effective as the infrastructure evolves through changes and updates.

The Infra Operator must perform the following tasks:

1. Maintain infrastructure access controls.

    Review and update infrastructure access restrictions as infrastructure components are added, modified, or removed, ensuring continuous enforcement of access policies.

2. Monitor access enforcement auditing.

    Regularly verify that infrastructure access enforcement audit logging is functioning correctly and that all enforcement actions are being captured.

3. Review access enforcement logs.

    Periodically review infrastructure access enforcement logs to identify unauthorized access attempts or policy violations and report findings to the organization.

### App Operator

The App Operator is responsible for ensuring that Mendix application access restrictions and associated auditing remain current and effective as the application evolves through system changes.

The App Operator must perform the following tasks:

1. Maintain application access controls.

    Review and update application access restrictions as the Mendix application is modified, ensuring that security roles and access rules remain aligned with organizational policies.

2. Monitor application audit logging.

    Regularly verify that application-level access enforcement audit logging is functioning correctly and that all enforcement actions are being captured accurately.

3. Review application access enforcement logs.

    Periodically review application access enforcement logs to identify unauthorized access attempts or policy violations and report findings to the organization.

## Proof and Remarks

Private Mendix Platform has combined Mendix's role based security control, and also its own dynamic role management.

IdP integration allows the admin to apply IdP based restrictions to the system:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0501-1.png" class="no-border" >}}

When creating a user, the admin can assign the user roles:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0501-2.png" class="no-border" >}}

The admin can also manage more roles in the Role Management dashboard for more flexible role management:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0501-3.png" class="no-border" >}}

If a user tries to access pages or feature that they do no have access to, they either see an error page, or the navigation item, button or link leading to the page or feature is not displayed:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0501-4.png" class="no-border" >}}

Activities like deployments or using the admin tools are logged:

{{< figure src="/attachments/private-platform/nist-cm/nist-cm-0501-5.png" class="no-border" >}}
