---
title: "Dynamic Role Management in Private Mendix Platform"
linktitle: "Dynamic Role Management"
url: /private-mendix-platform/dynamic-role-management/
description: "Documents the dynamic role management functionality of the Private Mendix Platform."
weight: 50
---

## Introduction

Starting from version 2.0, Private Mendix Platform offers dynamic role management to strengthen governance, improve flexibility, and streamline access control. This feature ensures that organizations can manage roles and permissions dynamically, aligning with evolving business and compliance requirements.

To access the **Role Management** page, go to the **Admin > Manage** section of the Mendix Private Platform. This page centralizes all role-related governance and permissions.

{{< figure src="/attachments/private-platform/pmp-roles1.png" class="no-border" >}}

Private Mendix Platform 2.0 ships with a set of predefined roles to cover common responsibilities:

* **Developer** - Full access to application development features
* **Contributor** - Limited access, typically for business users or domain experts contributing to projects
* **Operator** - Focused on operational tasks such as deployments, monitoring, and cluster management
* **Administrator** - Highest level of access, with full governance and configuration rights

Admins can create new custom roles tailored to organizational needs.

## Role Editing

Admins can edit any default or custom role to adjust the following permissions dynamically:

* Project permissions
* Cluster permissions
* CI/CD permissions

## Group Management

To access the **Group Management** page, go to the **Admin > Manage** section of the Mendix Private Platform. It provides a hierarchical structure for managing user roles and resource access across applications, clusters, and namespaces.

{{< figure src="/attachments/private-platform/pmp-roles2.png" class="no-border" >}}

Groups are organized in a hierarchical tree. The root group is created by Private Mendix Platform automatically and serves as the foundation for all user-created groups.

Admins can customize root group information to align with organizational needs. The hierarchy depth is theoretically unlimited, supporting complex organizational structures.

Every new group must be assigned a parent group. This ensures proper inheritance of governance and permissions.

{{< figure src="/attachments/private-platform/pmp-roles3.png" class="no-border" >}}

### Group Ownership and Resources

Each group can own or associate resources, and permissions are applied to its members through assigned roles.

The following resources are currently supported:

* Apps - Application-level access control.
* Namespace purposes - Permissions tied to namespaces for deployment or operational segregation.

The following ownership and association rules apply:

* Apps - An app can only be owned by one group. Ownership is exclusive to ensure clear accountability.
* Namespaces - A namespace can be associated with multiple groups non-exclusively, allowing flexible sharing of operational responsibilities across teams.

### Role Assignment Model

Roles are assigned to group members, not to the group itself. If a group has a subgroup, then members of the main group are automatically inherited into the subgroup with the same roles they hold in the main group. This ensures consistency of permissions across hierarchical structures and reduces duplication of role assignments.

{{< figure src="/attachments/private-platform/pmp-roles5.png" class="no-border" >}}

### Group Creation

When creating a new group, admins must provide the following information:

* **Description** - A clear explanation of the group's purpose.
* **Group Admins** - One or more administrators responsible for managing the group.
* **Parent Group** - Defines the group's place in the hierarchy.

### Statistics Dashboard

The Group Management page also provides real-time statistics to help administrators monitor governance:

* **Number of Groups** - Total number of groups created under the hierarchy.
* **Number of Resources Owned** - Count of Apps and namespace purposes associated with groups.
* **Namespaces Assigned to Groups** - Total namespaces linked to groups for operational control.
* **Average Number of Members per Group** - Helps track group size and distribution of users.

{{< figure src="/attachments/private-platform/pmp-roles6.png" class="no-border" >}}

## Permission Synchronization

Permission synchronization ensures that role changes in groups are automatically applied to the resources owned or associated with those groups. This mechanism guarantees consistency between governance configurations and actual user access.

### Role Change Propagation

When a member's role changes in a specific group through admin mode, the update is immediately synchronized across all resources owned by or associated with that group (for example, apps, or namespaces). This synchronization eliminates manual updates and ensures governance policies are enforced consistently.

### Combined Permission Calculation

When multiple roles apply to a member, Private Mendix Platform calculates a combined permission set based on all assigned and inherited roles.

This ensures that the member's effective permissions cover all capabilities granted by any of the roles.

## Roles for Users

When a user logs in, they can create a new app in Private Mendix Platform.

The **Teams** page provides visibility into all members associated with the app, along with their roles.

### Teams Page Overview

The Teams page displays two categories of members:

* Direct members
* Owner

The user who created the app automatically becomes the owner. Owners have full control over the app, including inviting new members and assigning roles.

#### Invited Members

Owners can invite additional users into the App. These members are assigned specific roles such as:

* Operator
* Contributor
* Developer

#### Inherited Members

Inherited memberships are derived from group memberships defined in the **Group Management** page.

The folowing inheritance paths are available:

* Owner's group - Members of the group to which the owner belongs are automatically inherited into the app.
* Parent group - Members of the parent group in the hierarchy are also inherited.

Roles for inherited members are determined by the **Group Management** page and applied automatically.

{{< figure src="/attachments/private-platform/pmp-roles7.png" class="no-border" >}}

### Role Assignment for Users

Direct members receive roles explicitly assigned by the app owner. Inherited members retain the roles defined in their group context.

This approach ensures consistency. Direct roles can be managed with app-specific assignments, while inherited roles can have governance-driven assignments from group hierarchy.