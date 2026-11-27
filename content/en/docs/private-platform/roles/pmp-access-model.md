---
title: "Access Model and Role Reference for Private Mendix Platform"
url: /private-mendix-platform/access-model/
weight: 10
description: "Describes the access model of Private Mendix Platform, including platform roles, Resource Roles, group hierarchy and inheritance, resource ownership, and how permissions combine."
---

## Introduction

Access in Private Mendix Platform is governed by two role systems that operate independently of one another, applied to users who are organized into a hierarchy of groups, which in turn own or are associated with the resources those roles act upon.

This page describes that model. It is the reference to consult before you design a group hierarchy or define a custom role, and the place to look when the access someone has does not match the access you expected them to have. For the procedures that configure the model, see [Administering Users, Groups, and Roles in Private Mendix Platform](/private-mendix-platform/access-administration/).

Administrators configure all of it at runtime, from the **Manage** section of the [Admin menu](/private-mendix-platform/reference-guide/admin/). No part of the model requires a code change to the platform or to your apps.

## Resource and Platform Roles

Private Mendix Platform separates platform-wide privilege from privilege over an individual resource. Role Management presents the two as separate tabs, and they share no permissions.

### Resource Roles

A Resource role answers the question *what can this person do to this app, or this namespace?* Their scope involves only the resources the relevant group owns or is associated with. Multiple resource roles are only combined where two roles apply to the same resource.

Private Mendix Platform includes the following default resource roles:

* **Owner** - Has full control of an app, including transferring ownership, inviting team members, and assigning their roles. 

    This role is automatically granted to the user that created the app. It cannot be granted manually, except by transfering ownership of the app to a new owner. For more information, see [Assigning the App to a New Owner](/private-mendix-platform/reference-guide/admin/company/#ownership).

* **Developer** - Has the complete development and operations set; can change the app's source and deploy it.
* **Contributor** - Development only; can change the app's source but cannot deploy it.
* **Operator** - Operations only; can deploy the app, but cannot change its source.
* **Maintainer** - Can manage logs, events, and metrics, as well as applications and apps.
* **Administrator** - Can oversee the deployment settings of the apps in scope.

    The Administrator resource role is not the same as a platform administrator.It does not grant access to admin mode and has no privilege over the platform. It reaches only the resources owned by the relevant group. The platform-wide equivalents are the **CompanyAdmin** and **SystemAdmin** platform roles.

Permissions in a Resource Role have the following categories:

* **Project** - The app lifecycle, its team, version control, and viewing its environments
* **Build** - Packaging, the build pipeline, and the software bill of materials.
* **Deployment** - Deploying and managing the app's environments; this is the largest category, and the only one that can be scoped per environment
* **Monitoring** - Logs and metrics

Every permission in a resource role is expressed as an action on an app, which is why the schema reads as a set of app permissions even for roles concerned mainly with deployment settings.

#### Per-Environment Scoping

Deployment permissions can be restricted by combining an environment's deployment purpose, and the target namespace's permitted deployment purpose. For example, to create a new environment in namespace A with the purpose TEST and deploy an app to it, or to deploy a new package to an environment in A with the purpose TEST, a user must be a member of *Group X* with the *Namespace (resource) A* associated with the *TEST* deployment purpose.

### Platform Roles

A platform role answers the question *what can this person do on the platform in general?* It is assigned to a user account when the account is created, and can be changed at any time afterward. Platform roles are stackable. That is, if a user has more than one platform role, they get all the access rights of every role they hold.

Private Mendix Platform includes the following default platform roles:

* **User** - Baseline access to the platform web interface. Every human user needs this role at minimum.
* **CompanyAdmin** - Company admins have access to everything under the **Manage** section of the Admin menu, including the following capabilities:

    * App management
    * User and group management
    * Marketplace content
    * Deployment clusters
    * Activity logs
    * Platform statistics
    
    This role is intended for users who own day-to-day platform operations.

* **SystemAdmin** - Company admins have access to everything under the **Settings** section of the Admin menu, including the following capabilities:

    * Identity provider and SSO configuration, version control and CI/CD integrations, licensing, branding, and platform capabilities. Intended for the people who own the infrastructure the platform depends on.

{{% alert color="info" %}}
CompanyAdmin and SystemAdmin address different audiences and grant access to different capabilities of Admin mode. Granting CompanyAdmin does not give someone access to identity or licensing settings, and granting SystemAdmin does not give someone the ability to manage users and groups. A user who needs both must be given both.
{{% /alert %}}

#### Platform Role Permissions

Permissions in a platform role fall into the following broad categories.

##### Generic Permissions

Generic permissions grant basic platform access:

* **Web** - Can reach the web interface.
* **App** - Can create an app.

##### Management Permissions

{{% alert color="info" %}}
Assigning the permissions listed in this section will automatically provide the user with access to the Private Mendix Platform administrator menu.
{{% /alert %}}

Management permissions involve the capabilities available in the **Manage** section of the Admin menu, such as app management, user and group management, Marketplace administration, and activity logs:

* **Apps** - Includes the following permissions:
    
    * **Access App management pane**
    * **Access software composition pane**
    * **Access import apps pane**

* **Marketplace** - Includes the following permissions:

    * **Manage content in content management pane**
    * **Approve content in content management pane**
    * **Delete content in content management pane**
    * **Access import content in content management pane**
    * **Access taxonomy management pane**

* **Deployment** - Includes the following permissions:

    * **Access cluster manager pane**
    * **Access environment overview pane**

* **Users** - Includes the following permissions:

    * **Access role management pane**
    * **Edit user management pane**
    * **View user management pane**
    * **Edit group management pane**
    * **View group management pane**

* **Platform** - Includes the following permissions:

    * **Access platform statistics pane**
    * **Access activity logs pane**
    * **Access webhooks pane**
    * **Access licensing pane**
    * **Access Maia pane**

##### Settings Permissions

{{% alert color="info" %}}
Assigning the permissions listed in this section will automatically provide the user with access to the Private Mendix Platform administrator menu.
{{% /alert %}}

Settings permissions involve the capabilities available in the **Settings** section of the Admin menu, such as identity and access configuration, licensing, cluster manager configuration, and webhooks:

* **Preferences** - Includes the following permissions:

    * **Access notification setting pane**
    * **Access general setting pane**
    * **Access Marketplace setting pane**
    * **Access version support setting pane**

* **Integrations** - Includes the following permissions:

    * **Access identity & access setting pane**
    * **Access project management setting pane**
    * **Access version control setting pane**
    * **Access build setting pane**
    * **Access deployment setting pane**

* **Advanced** - Includes the following permissions:

    * **Access capability setting pane**
    * **Access operational setting pane**

#### Managing API User Accounts

There is only one type  of account. Accounts used by services rather than people are not a separate account type. A service that calls the platform API authenticates as an ordinary account, and what it can do is determined by that account's platform role, in the same way as for a person. A role such as **API User**, holding only the permissions a particular integration needs, is an example of a platform role which you can define for that purpose.

### Editing Roles and Creating Custom Roles

Administrators can edit both types of roles, change their permissions, and create new roles. Changing a role changes the effective access of everyone who holds it, so review who holds a role before editing it.

Unlike custom roles, default roles cannot be deleted.

### Group Admin

The Group Admin role exists outside both role systems. That is, it is not a platform or resource role. You cannot view or edit this role, and its permissions cannot be changed or extended.

It is automatically assigned to users assigned in the **Group Admins** field of a group. It is not visible in the list of user roles.

This role lets group admins manage a group's membership, that is, add and remove members. It does not grant any other rights, and it applies only to the groups for which its holder was designated.

Consequently, delegating group membership management does not require giving anyone an administrator role. Naming a person as a group admin on their own group is sufficient. For more information, see [Working with Groups and App Teams in Private Mendix Platform](/private-mendix-platform/groups-and-app-teams/).

## Groups

Groups organize users and deliver resource roles at scale. They typically mirror your organization and can represent, for example, a division, a department, a portfolio, or a team.

### Structure

Groups form a hierarchical tree. Private Mendix Platform creates the root group automatically, and it is the foundation of everything beneath it. You can edit the root group's details to match your organization.

Every group other than the root has the following properties:

* **Parent Group** - The group's place in the hierarchy. There is no such thing as a group outside the tree.
* **Description** - A clear statement of the group's purpose.
* **Group Admins** - Optional. One or more users who manage the group's membership.

The depth of the hierarchy is not limited.

### Groups vs Roles

A group is not granted a role, and a group has no permissions of its own. A group holds *members*, and each member individually holds a resource role. The group owns resources, to which its members' roles apply.

Two members of the same group can have different resource roles. For example, a team group can contain several Developers, a few Contributors, and one Operator. All of these roles have access to the same app, but can do different things in the app.

When a member's role in a group changes, the change is applied at once to every resource that group owns or is associated with.

### Membership Inheritance

Members of a group automatically become members of every group beneath it in the hierarchy, carrying forward the same resource role they hold in the higher group. Granting a broad resource role at or near the root group extends that role across the entire platform. See [Designing Your Access Model](#designing-your-access-model). These are shown as inherited members, as distinct from members added directly.

Membership of a child group does not give any roles in the groups higher in the hierarchy.

### Resource Ownership for Groups

A group can own or be associated with the following kinds of resource, with different ownership rules and behavior depending on the resource type:

* **App Projects** - An app can be shared to make it visible for other users and groups, but it is owned by exactly one group. In this way, accountability is unambiguous.
* **Deployment Namespaces** - A namespace can be associated with several groups at once, allowing operational responsibility to be shared between teams.
* **Marketplace Components** - Components are owned by the individual user who published the component.

#### App Projects

An app is owned by one group and one user within it. Members of the owning group reach the app through the Resource Role they hold in that group, whether they hold it directly or by inheritance from a group further up.

{{% alert color="info" %}}
Apps created through Mendix Studio Pro are owned by the Mendix root group. Ownership is assigned to the root group on creation rather than to the group the creating developer belongs to. An app left in this state is reachable by everyone holding a resource role in the root group, and by nobody further down the hierarchy.

Because of that, you should transfer ownership to the group that should hold it as a routine step after creating an app from Studio Pro. See [Assigning the App to a New Owner](/private-mendix-platform/reference-guide/admin/company/#ownership).
{{% /alert %}}

#### Deployment Namespaces

A deployment namespace is a resource associated with a group. The *deployment purpose* is a scoping tied to that resource, describing what the namespace is for.

Because deployment purpose is configured on the namespace level, it applies to every group associated with the namespace. For how deployment purpose relates to environments, see [Deployment Purpose and DTAP Mode](/private-mendix-platform/user-guide/#deployment-purpose-and-dtap-mode).

Unlike group membership, a namespace association is not inherited by grops lower in the hierarchy. For a group to deploy to a namespace, the group must be directly associated with the namespace. Because of that, an app project and the namespace to which it deploys should be associated at the same level of the hierarchy.

This rule is specific to deployment namespaces. App projects are already exclusive to a single group, and Marketplace components follow their own ownership model.

#### Marketplace Components

Marketplace component ownership does not follow the group hierarchy. A component published to the PMP Marketplace is owned by the user who published it, rather than by a group. 

Access to the Marketplace administration area, where content is approved, categorized, and imported, is a platform role permission and not a resource role. Administering Marketplace content does not require any resource roles.

Marketplace content can additionally be shared with groups by its publisher. For more information, see [Sharing Content with Groups](/private-mendix-platform/user-guide/#sharing-content-with-groups).

## Granting Users Access to an App

Users can get access to an app in the following ways.

### Owning Group

The user is a member, directly or by inheritance, of the group that owns the app, and holds a Resource Role there. This is the primary path and the one that scales.

### Invitation to App Team

The app's owner invites an individual onto the team and assigns them a role such as Developer, Contributor, or Operator. This bypasses groups entirely and applies only to the specific app. Before a user can be invited, their account must exist. For more information, see [Editing App Details](/private-mendix-platform/reference-guide/admin/company/#app-details).


### App Sharing

An app can be shared with groups that do not own it. Sharing makes the app visible to those groups but grants no access. Members can then request access from the app's owner, who decides whether to grant it and with which role. For more infomration, see [Sharing the App with Selected User Groups](/private-mendix-platform/reference-guide/admin/company/#share).

## Managing Federated Users {#federated-users}

When users sign in through your identity provider rather than with a local account, they still need a place in the group hierarchy and a resource role in order to do anything. The following settings determine what happens on first arrival.

### Default Group and Role

Every incoming user with no other placement is put into a configured group with a configured role. Pointing these at a deliberately low-privilege landing group gives new arrivals somewhere to be that has no access to real projects, until they are assigned to their actual team.

### Role Parsing

When enabled, Private Mendix Platform reads group and role claims from the incoming token and maps them onto platform roles and groups automatically. When disabled, no such mapping occurs and every federated user lands on the defaults above, to be assigned afterward manually, through SCIM, or through the platform API.

### Automation Settings

For users whose identity provider information is mapped onto their platform profile, group membership can be derived from the values of those profile attributes. When a user arrives with a value that already corresponds to a group, they are added to that group. When a user arrives with a value that does not, a group is created for it and the user is made a member. This is configured on the Group Management page and is separate from Parse Roles. See [Automating Group Assignment](/private-mendix-platform/access-administration/#automating-group-assignment).

Users can also be provisioned before their first login, using SCIM, so that their accounts and group placement exist in advance.

For information about configuring the identity provider connection, including OIDC and SAML setup, attribute mapping, and SCIM tokens, see [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

## Best Practices for Designing Your Access Model {#designing-your-access-model}

When designing your access hierarchy, keep in mind the following recommendations.

* Keep broad roles rare and high-level. 

    Because membership cascades downward, a resource role granted near the root reaches everything beneath it. Roles such as Administrator and Maintainer should be granted sparingly, and as close as possible to the groups that actually need them. Developer, Contributor, and Operator are the roles intended to carry everyday work further down the tree.

* Associate an app and the namespace it deploys to at the same level.

    Since namespace associations are not inherited, a group that owns an app but is not associated with the namespace cannot deploy that app. Place both at the same level to avoid this issue.

* Give federated users a landing group.

    A low-privilege group configured as the Default Group means an unrecognized user who signs in successfully has limited access rights until an administrator places them in the appropriate group.

* Use per-environment scoping instead of parallel roles.

    If a team should be allowed to deploy to some environments and not others, scope the Deployment permissions of one role rather than maintaining two similar roles.

* Only create as many hierarchy levels as you need.

    Each hierarchy level potentially increases complexity by adding more inherited membership levels to consider.

### Example Hierarchy

The following figure shows a sample group hierarchy.

{{< figure src="/attachments/private-platform/pmp-roles2.png" class="no-border" >}}

A user who is a member of *Company Division X* with the Developer role is also, by inheritance, a Developer in *Project A Group*, and can develop and deploy the apps that group owns. That same user is not a member of *Preboarding*, which is not beneath their group, and has no access to anything Preboarding owns.

A user who is a member of *PMP Root* with the Administrator role holds it in *Company Division X* and *Preboarding* as well, because both are beneath Platform Admin. Adding a new group under Company Division X extends that user's Administrator role into it automatically. This is the reason to grant Administrator low rather than high.

If *Project A Group* owns an app that must deploy to a namespace, Project A Group must be associated with that namespace itself. Associating the namespace with *Company Division X*, or with *PMP Root*, does not enable the deployment.

*Preboarding* is a good choice for the Default Group in an SSO configuration. Users who arrive without a recognized placement land there, hold whatever low-privilege Default Role is configured, and cannot reach anything owned elsewhere in the tree.