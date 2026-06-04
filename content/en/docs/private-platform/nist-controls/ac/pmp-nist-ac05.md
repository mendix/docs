---
title: "AC-05 Separation Of Duties"
linktitle: "AC-05"
url: /private-mendix-platform/nist-controls/ac-05/
description: "Documents the Private Mendix Platform's compliance with the AC-05 control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-05 control.

| Control ID | AC-05 |
| --- | --- |
| Control category | AC - Separation Of Duties |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Customer - Org |

## Control

The organization:

* Separates organization-defined duties of individuals.
* Documents separation of duties of individuals.
* Defines information system access authorizations to support separation of duties.

### Supplemental Guidance

Separation of duties addresses the potential for abuse of authorized privileges and helps to reduce the risk of malevolent activity without collusion. Separation of duties includes, for example: 

* Dividing mission functions and information system support functions among different individuals or roles
* Conducting information system support functions with different individuals (for example, system management, programming, configuration management, quality assurance and testing, and network security)
* Ensuring security personnel administering access control functions do not also administer audit functions.  

The following controls are related to this control:

* AC-3
* AC-6
* PE-3
* PE-4
* PS-2

## Responsibility

### Customer Responsibility

Private Mendix Platform provides robust tools and features—such as dynamic role management, group hierarchies, and granular app security—to enable separation of duties.  Additionally the Mendix Platform allows complete customization of roles and access management for Mendix solutions.  The customer is responsible to design, configure, and maintain these roles and permissions, with the help of the infrastructure implementer and operator as well as the app implementer and operator, according to their organizational policies and compliance requirements.

## Guidance

### Customer Responsibility

Private Mendix Platform allows organizations to define, edit, and assign custom roles and permissions dynamically. Roles can be tailored to specific responsibilities (for example, Developer, Operator, Administrator), and new roles can be created as needed. Groups and subgroups can be created with exclusive ownership of resources (like apps), and roles are assigned to individual group members. This ensures that no single user or group has unchecked access to all functions.

Permission synchronization ensures that changes to roles are automatically propagated across all associated resources, maintaining consistent enforcement of governance policies. Within Mendix apps, user roles and module roles are defined separately. Access to forms, data, and microflows is explicitly granted, and by default, no access is allowed until permissions are set. This means sensitive actions can be restricted to specific roles.

The Platform provides dashboards and overviews for administrators to monitor group membership, resource ownership, and effective permissions, supporting oversight and compliance. Customers should regularly review dashboards, role assignments, and audit logs to verify that duties remain properly separated.

## Proof and Remarks

For more information about role and group management features, see [Dynamic Role Management](/private-mendix-platform/dynamic-role-management/).

For more information about application-level security and role assignment, see [Security Reference Guide](/refguide/security/).
