---
title: "Administering Users, Groups, and Roles in Private Mendix Platform"
url: /private-mendix-platform/access-administration/
weight: 20
description: "Documents the administrator tasks for managing user accounts, defining roles, building the group hierarchy, and associating resources with groups in Private Mendix Platform."
---

## Introduction

This document describes the tasks that configure access in Private Mendix Platform: 

* Creating and maintaining user accounts
* Defining what roles exist and what they grant
* Building the group hierarchy
* Associating apps and deployment namespaces with the groups that need them.

### Prerequisites

To perform the above tasks, you must have the **CompanyAdmin** platform role. Configuring the identity provider that federated users authenticate against is a separate concern requiring **SystemAdmin**, and is documented in [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/).

Before making structural changes, read [Access Model and Role Reference for Private Mendix Platform](/private-mendix-platform/access-model/). Two rules in particular have consequences that are not visible from the screens described below: group membership inherits downward without limit, and deployment namespace associations do not inherit at all.

## Accessing the Access Management Pages

To open the **Access Management** page, perform the following steps:

1. Click your profile picture in the top right corner of the screen and select **Switch to Admin Mode**.
2. In the left navigation menu, open the **Manage** section.

From this section, you can manage user accounts, groups, and roles.

## Managing User Accounts

On the **User Management** page you can create and maintain the accounts that use your platform, whether they belong to people or to services.

What an account can do comes from the platform roles assigned to it, not from any account type, so the same page and the same procedure serve a developer, an administrator, and an integration.

### Creating Accounts

To create an account, click **New** and provide the user's name and email address, then assign the Platform Roles the account requires. An account with no Platform Role cannot use the platform, so at minimum assign **User**.

### More Actions

By clicking **More Actions** by an existing account, you can perform the following tasks:

* Edit the user's name and email address.
* Assign or remove Platform Roles.
* Block the user, preventing sign-in without deleting the account or its history.
* Change the user's password.
* Configure the user's language and time zone.
* Log the user out of all current sessions.
* Delete the account.

The **Actions** tab additionally lets you log out every user currently signed in to the platform.

Some of these actions depend on how the account authenticates rather than on what kind of account it is. Setting a password, for instance, applies to accounts that sign in with platform credentials and not to accounts that authenticate through your identity provider.

{{% alert color="info" %}}
Assigning a Platform Role gives a user platform-wide capability to perform specific tasks. However, it does not give them access to any app, namespace, or Marketplace item. Access to resources comes from group membership or an app team invitation, as described in the following sections.
{{% /alert %}}

### Accounts Used by Services

A service that calls the platform API signs in as an ordinary account, and what it can do is determined by that account's platform role. A role such as *API User*, carrying only the permissions one integration needs, is an example of a platform role defined for this purpose.

Give each integration its own account and its own narrowly scoped role rather than reusing an administrator account. Accounts used by services behave the same as all other accounts. That is, they can be blocked, their roles can be changed, and their actions appear in the activity log.

### Sign-in and Lockout Behavior

Session limits, automatic disabling of unused accounts, failed sign-in lockout, and lockout duration are platform-wide settings rather than per-account ones, and are configured by a system administrator. For more information, see [Preferences](/private-mendix-platform/reference-guide/admin/system/#preferences-1).

## Managing Roles

On the **Role Management > Platform Roles** and **Role Management > Resource Roles** pages, you can create roles and configure their permissions. For more information about what each default role grants, see [Understanding the Two Role Systems](/private-mendix-platform/access-management/#role-systems).

In both systems:

* You can change the permissions of a default role.
* You cannot delete a default role.
* You can create new roles with any combination of permissions.

{{% alert color="warning" %}}
Editing a role immediately changes the effective access of everyone who holds it. Before editing, check how many users hold the role and what resources they reach through it. Where a change applies to some users and not others, create a new role instead of editing an existing one.
{{% /alert %}}

### Editing a Platform Role

Select the role and adjust its permissions. These cover generic platform access such as signing in and creating an app, capabilities in the **Manage** area such as app, user, group, and Marketplace administration, and capabilities in the **Settings** area such as identity configuration, licensing, and webhooks.

Because CompanyAdmin and SystemAdmin are parallel rather than nested, a custom role that needs capabilities from both areas must be given permissions from both.

### Editing a Resource Role

Select the role and adjust its permissions, which are grouped into four categories:

* **Project** - the app lifecycle, its team, version control, and viewing environments.
* **Build** - packaging, the build pipeline, and the software bill of materials.
* **Deployment** - deploying to and managing environments.
* **Monitoring** - logs and metrics.

**Owner** is a special case. It is assigned automatically to whoever creates an app and cannot be granted to anyone manually. To change who holds it, transfer ownership of the app.

### Scoping Deployment Permissions per Environment

Permissions in the **Deployment** category, and only in that category, can be limited to specific environments. For each such permission, select the combination of Development, Test, Acceptance, and Production it should apply to.

Use this rather than maintaining several near-identical roles. A single role in which deployment is permitted for Development and Test and withheld for Production expresses a common compliance requirement in one place, and stays correct as teams change.

### Creating a Custom Role

Click **New** in the relevant tab, name the role, and select its permissions. Choose which system you are creating in deliberately: a role that should let someone administer part of the platform belongs in Platform Roles, and a role that should let someone act on apps and namespaces belongs in Resource Roles.

Name custom roles for the responsibility they represent rather than for the seniority of the people who will hold them, and avoid names that echo the default roles of the other system.

## Managing Groups

On the **Group Management** page you build and maintain the group hierarchy. Groups typically reflect your organization's structure, and they are what deliver Resource Roles to users at scale.

The root group is created by Private Mendix Platform automatically and is the foundation of the hierarchy. You can edit its details to match your organization, and every other group descends from it.

### Creating a Group

To create a group, click **New** and specify the following information:

* **Parent Group** - where the group sits in the hierarchy. Choose this carefully: every member of the parent, and of everything above it, becomes an inherited member of the new group with the role they already hold.
* **Group Admins** - one or more users who will manage this group's membership. Naming someone here is what allows them to add and remove members, and it requires no administrator role. See [Group Admin](/private-mendix-platform/access-model/#group-admin).
* **Description** - what the group is for. This is what other administrators will use to decide whether a resource belongs here.

The hierarchy has no depth limit. Add a level when it corresponds to a real boundary of accountability, since each level adds inherited membership to reason about.

### Adding Members and Assigning Their Roles

Roles are assigned to the members of a group, not to the group itself. Add a user to the group and assign the Resource Role they should hold there. Different members of the same group can hold different roles, and usually should.

Members of parent groups appear in the group as inherited members, holding the same role they hold above. You cannot change an inherited member's role from the child group; change it where the membership originates, or add the user directly with a different role.

{{% alert color="info" %}}
Because membership cascades downward, a role assigned in a group near the root of the hierarchy reaches every group beneath it. Assign broad roles such as Administrator and Maintainer as close as possible to the groups that need them, rather than high in the tree.
{{% /alert %}}

### Associating Resources with a Group

A group needs resources for its members' roles to act upon.

#### Apps

An app is owned by exactly one group. Assign or move ownership from the App Management page. Apps created through Mendix Studio Pro are owned by the Mendix root group on creation, so transfer ownership after creation if a different group should own them. See [Assigning the App to a New Owner](/private-mendix-platform/reference-guide/admin/company/#ownership).

#### Deployment Namespaces

A namespace can be associated with several groups at once, so operational responsibility can be shared. The namespace's purpose is configured on the namespace itself, in Cluster Manager, rather than on the association. See [Cluster Manager](/private-mendix-platform/reference-guide/admin/company/#cluster-manager).

{{% alert color="warning" %}}
Unlike membership, namespace associations are not inherited. That is, a namespace association does not extend to a parent group, or to child groups. A group that owns an app and needs to deploy it must be associated with the target namespace itself.

If a team reports that they can build an app but not deploy it, verify that the group owning the app is directly associated with the namespace, not merely descended from a group that is.
{{% /alert %}}

#### Marketplace Contents

Components published to the private Marketplace are owned by the user who published them rather than by a group, and are shared with groups by their publisher. See [Sharing Content with Groups](/private-mendix-platform/user-guide/#sharing-content-with-groups). Administering Marketplace content is a platform role capability, and is documented in [Marketplace](/private-mendix-platform/reference-guide/admin/company/#marketplace).

### Automating Group Assignment {#automating-group-assignment}

**Automation Settings** on the Group Management page let group membership follow the identity provider information mapped onto users' profiles, rather than being assigned by hand.

Once configured for a profile attribute, membership is derived from that attribute's value when a user arrives:

* If the value corresponds to an existing group, the user is added to that group.
* If the value does not correspond to any existing group, a group is created for it and the user is made a member.

This keeps group structure aligned with the organizational data your identity provider already holds, at the cost of allowing the hierarchy to grow on its own. Review the groups it creates periodically, give them proper descriptions and group admins, and place them deliberately in the tree.

This is a separate mechanism from the **Parse Roles** setting on your identity provider configuration, which maps role and group claims from the token itself. The two can be used together. For how both fit into first-login behavior, see [Federated Users](/private-mendix-platform/access-model/#federated-users).

### Monitoring the Hierarchy

The Group Management page reports live figures for the number of groups, the number of resources owned, the number of namespaces associated with groups, and the average number of members per group. They are useful as a quick check that the hierarchy still matches expectations, particularly where group creation is automated.

## Auditing Access Changes

Changes to user accounts are recorded in the platform activity log, along with app creation and deletion, package creation, and platform setting changes. Retention and logging level are configurable, and expired entries can be downloaded from the archive for audit purposes. See [Activity Logs](/private-mendix-platform/reference-guide/admin/company/#activity-logs).
