---
title: "AC-06 (07) Least Privilege - Review Of User Privileges"
linktitle: "AC-06 (07)"
url: /private-mendix-platform/nist-controls/ac-0607/
description: "Documents the Private Mendix Platform's compliance with the AC-06 (07) control of the NIST 800-53 framework."
weight: 20
---

## Introduction

This document describes how Private Mendix Platform fulfills the AC-06 (07) control.

| Control ID | AC-06 (07) |
| --- | --- |
| Control category | AC - Access Control |
| Requirement baseline | FEDRAMP MODERATE |
| Responsibility and ownership | Mendix - Private Mendix Platform, Customer - Org |

## Control

The organization:

* At an organization-defined frequency, reviews the privileges assigned to organization-defined roles or classes of users to validate the need for such privileges
* Reassigns or removes privileges, if necessary, to correctly reflect the organizational mission and business needs.

### Supplemental Guidance

The need for certain assigned user privileges may change over time reflecting changes in organizational missions/business function, environments of operation, technologies, or threat. Periodic review of assigned user privileges is necessary to determine if the rationale for assigning such privileges remains valid. If the need cannot be revalidated, organizations take appropriate corrective actions.

The following controls are related to this control: 

* CA-7

## Responsibility

### Customer Responsibility

Customers are responsible for defining the frequency of privilege reviews and identifying which roles or classes of users must be reviewed. Customers must conduct regular reviews of assigned privileges to validate their continued necessity, and promptly reassign or remove privileges that no longer reflect organizational missions or business needs. Customers must also document these reviews as part of their ongoing compliance activities.

## Guidance

### Mendix Responsibility

Mendix enables organizations to:

* Centrally manage all role and permission assignments through the Private Mendix Platform Admin section.
* Use dynamic role management to create, edit, and revoke roles at any time, ensuring that privilege changes can be implemented immediately when needed.
* Use group management with hierarchical structures, allowing administrators to efficiently manage and review privileges across teams and departments.
* Leverage real-time statistics dashboards to monitor the number of groups, members, and resource ownership, providing clear visibility for review purposes.
* Automatically synchronize permission changes across all associated resources when roles are reassigned or removed.

### Customer Responsibility

Customers should:

* Define and document the frequency of privilege reviews (for example, quarterly, annually) for all defined roles or classes of users.
* Conduct periodic access reviews using PMP's role and group management tools to validate the continued need for assigned privileges.
* Promptly reassign or remove privileges that no longer align with organizational missions, business functions, or security requirements.
* Maintain records of all privilege reviews and corrective actions taken as part of compliance evidence.
* Align privilege reviews with broader continuous monitoring activities as required by CA-7.

## Proof and Remarks

Real-time statistics dashboards provide visibility into group membership, resource ownership, and role distribution:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0607-1.png" alt="Group management overview" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0607-2.png" alt="Group member view" class="no-border" >}}

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0607-3.png" alt="Group resource view" class="no-border" >}}

Permission synchronization ensures that any changes made during a review are immediately and consistently applied across all associated resources. As described in [Dynamic Role Management](/private-mendix-platform/dynamic-role-management/), permission synchronization ensures that role changes in groups are automatically applied to the resources owned or associated with those groups.

Audit logs provide evidence of privilege changes, reassignments, and removals:

{{< figure src="/attachments/private-platform/nist-ac/nist-ac-0607-4.png" alt="Audit activity logs in Private Mendix Platform" class="no-border" >}}

Customers should retain documentation of privilege review activities and corrective actions as compliance evidence.
