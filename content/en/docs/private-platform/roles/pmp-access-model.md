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

A Resource Role answers the question *what can this person do to this app, or this namespace?* It is held by an individual, and it applies only to the resources that the individual reaches it through: the resources owned by the group in which they hold the role, or the single app whose team they were invited to.

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

Deployment is the only permission category that can be limited by environment. Each permission in it can be restricted to any combination of Development, Test, Acceptance, and Production. No other category offers this.

This is what makes it possible to express a role such as *may deploy freely to Development and Test, and may not deploy to Production at all* without creating separate roles per environment, and it is the mechanism to reach for when a compliance requirement separates production deployment from everyday development.

### Platform Roles

A platform role answers the question *what can this person do on the platform in general?* It is assigned to a user account when the account is created, and can be changed at any time afterward. Platform roles are stackable. That is, a user can hold several, and the effective set of permissions is everything those roles grant, added together.

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

Settings permissions involve the capabilities available in the **Settings** section of the Admin menu, such as identity and access configuration, licensing, cluster manager configuration, and webhooks:

#### Managing API User Accounts

There is only one kind of account. Accounts used by services rather than people are not a separate account type. A service that calls the platform API authenticates as an ordinary account, and what it can do is determined by that account's platform role, in the same way as for a person. A role such as **API User**, holding only the permissions a particular integration needs, is an example of a platform role defined for that purpose.

### Editing Roles and Creating Custom Roles

Administrators can edit both types of roles, change their permissions, and create new roles. Changing a role changes the effective access of everyone who holds it, so review who holds a role before editing it.

Unlike custom roles, default roles cannot be deleted.

### Group Admin

Group Admin exists outside both role systems. It is not a platform role, not a resource role, and not governable. That is, you cannot view or edit this role, and its permissions cannot be changed or extended.

It is automatically assigned to users assigned in the **Group Admins** field of a group. It is not visible in the list of user roles.

This role lets group admins manage a group's membership, that is, add and remove members. It does not grant any other rights, and it applies only to the groups for which its holder was designated.

Consequently, delegating group membership management does not require giving anyone an administrator role. Naming a person as a group admin on their own group is sufficient. For more information, see [Working with Groups and App Teams in Private Mendix Platform](/private-mendix-platform/groups-and-app-teams/).

## Groups

Groups organize users and deliver resource roles at scale. They typically mirror your organization and can represent, for example, a division, a department, a portfolio, or a team.

### Structure

Groups form a hierarchical tree. Private Mendix Platform creates the root group automatically, and it is the foundation of everything beneath it. You can edit the root group's details to match your organization.

Every group other than the root must have the following properties:

* **Parent Group** - The group's place in the hierarchy. There is no such thing as a group outside the tree.
* **Group Admins** - One or more users who manage the group's membership.
* **Description** - A clear statement of the group's purpose.

The depth of the hierarchy is not limited.

### A Group Does Not Hold a Role

This is the point at which the model is most often misread. A group is not granted a role, and a group has no permissions of its own. A group holds *members*, and each member individually holds a Resource Role. The group's function is to own resources, so that the roles its members hold have something to apply to.

Two members of the same group can legitimately hold different Resource Roles, and often should. A team group might contain several Developers, a few Contributors, and one Operator, all with access to the same app, doing different things to it.

It follows that a statement such as *this group grants Administrator, so its members are administrators* has the relationship backwards. Members hold roles; the group supplies the scope.

### Membership Inherits Downward

Members of a group automatically become members of every group beneath it in the hierarchy, carrying forward the same Resource Role they hold in the higher group. These are shown as inherited members, as distinct from members added directly.

Inheritance goes to any depth. A member two levels up appears in a grandchild group with the same role they hold two levels up. It does not travel upward: membership of a child group confers nothing in the parent.

{{% alert color="warning" %}}
Because membership cascades downward without limit, a role granted high in the hierarchy reaches every group below it. Granting a broad Resource Role at or near the root group extends that role across the entire platform. See [Designing Your Access Model](#designing-your-access-model).
{{% /alert %}}

## Resources Owned by Groups

A group can own or be associated with three kinds of resource. The ownership rules differ for each, and so does the behavior of that ownership with respect to the hierarchy.

| Resource | Ownership model |
| --- | --- |
| **App Projects** | Exclusive. An app is owned by exactly one group, so accountability is unambiguous. |
| **Deployment Namespaces** | Shareable. A namespace can be associated with several groups at once, allowing operational responsibility to be shared between teams. |
| **Marketplace Components** | Owned by the individual user who published the component. |

### App Projects

An app is owned by one group and one user within it. Members of the owning group reach the app through the Resource Role they hold in that group, whether they hold it directly or by inheritance from a group further up.

{{% alert color="warning" %}}
**Apps created through Mendix Studio Pro are owned by the Mendix root group.** Ownership is assigned to the root group on creation rather than to the group the creating developer belongs to. An app left in this state is reachable by everyone holding a Resource Role in the root group, and by nobody further down the hierarchy, since membership inherits downward and resource access does not travel upward. Neither is usually what was intended.

Transfer ownership to the group that should hold it as a routine step after creating an app from Studio Pro. See [Assigning the App to a New Owner](/private-mendix-platform/reference-guide/admin/company/#ownership).
{{% /alert %}}

### Deployment Namespaces

Two concepts are involved here and both are meaningful. A **deployment namespace** is the resource. A **namespace purpose** is a scoping tied to that resource, describing what the namespace is for.

They form a chain: a namespace is associated with a group, and the namespace's purpose is tied to the namespace in turn. So the group is associated with the namespace, and the purpose comes with it as a property of the namespace rather than as something set on the association. Purpose is therefore configured once, on the namespace, and holds for every group associated with it. For how purpose relates to environments, see [Deployment Purpose and DTAP Mode](/private-mendix-platform/user-guide/#deployment-purpose-and-dtap-mode).

{{% alert color="warning" %}}
**A namespace association does not inherit, in either direction.** Group membership and the Resource Roles that come with it cascade down the hierarchy. A deployment namespace association does not: it extends neither to a group's parents nor to its children.

For a group to deploy to a namespace, **that group must itself be directly associated with the namespace**, regardless of where either sits in the tree. In practice this means keeping an app project and the namespace it deploys to associated at the same level of the hierarchy.

This rule is specific to deployment namespaces. App projects are already exclusive to a single group, and Marketplace components follow their own ownership model, so neither is affected by it.
{{% /alert %}}

### Marketplace Components

A component published to the private Marketplace is owned by the user who published it, rather than by a group. Ownership therefore does not follow the group hierarchy.

Access to the Marketplace administration area, where content is approved, categorized, and imported, is a platform role permission and not a Resource Role. A user who administers Marketplace content does not need any Resource Role to do so.

Marketplace content can additionally be shared with groups by its publisher. See [Sharing Content with Groups](/private-mendix-platform/user-guide/#sharing-content-with-groups).

## How a User Gets Access to an App

There are three distinct paths, and it is worth keeping them separate when diagnosing why someone can or cannot reach an app.

1. **Through the owning group.** The user is a member, directly or by inheritance, of the group that owns the app, and holds a Resource Role there. This is the primary path and the one that scales.
2. **Through a direct invitation to the app team.** The app's owner invites an individual onto the team and assigns them a role such as Developer, Contributor, or Operator. This bypasses groups entirely and applies to that one app. Before a user can be invited, their account must exist. See [Editing App Details](/private-mendix-platform/reference-guide/admin/company/#app-details).
3. **Through app sharing, followed by a request.** An app can be shared with groups that do not own it. Sharing makes the app *visible* to those groups; it grants no access. Members who can see a shared app can request access from the app's owner, who decides whether to grant it and with which role. See [Sharing the App with Selected User Groups](/private-mendix-platform/reference-guide/admin/company/#share).

{{% alert color="info" %}}
**Reviewer note:** confirm the mechanics of the request flow in path 3 - how the request reaches the owner, whether it is notified, and whether granting it creates a direct team membership.
{{% /alert %}}

## How Permissions Combine

The two role systems combine differently, and conflating them is the source of most incorrect expectations about effective access.

### Platform Roles Combine as a Union

Platform roles are not scoped to a resource, so there is nothing to reconcile. A user's effective platform permissions are every permission granted by every platform role they hold, added together.

### Resource Roles Combine Only on a Shared Resource

Resource Roles do not blanket-combine across every group a user belongs to. Two groups that are not in a parent-and-child relationship share no resources, so a user's roles in them never interact: the role held in one group applies to that group's resources and nowhere else.

Combination happens only when two roles land on the *same* resource. The common case is a user who has been invited directly onto an app's team in one role, and who also inherits a different role on that same app through the group hierarchy. There, and only there, the two are reconciled into a single effective set of permissions on that app.

### Changes Take Effect Immediately

When a member's role in a group changes, the change is applied at once to every resource that group owns or is associated with. There is no separate synchronization step to run, and no need to reapply access to individual apps or namespaces after a role change.

## Federated Users {#federated-users}

When users sign in through your identity provider rather than with a local account, they still need a place in the group hierarchy and a Resource Role in order to do anything. Three settings determine what happens on first arrival.

* **Default Group and Default Role.** Every incoming user with no other placement is put into a configured group with a configured role. Pointing these at a deliberately low-privilege landing group gives new arrivals somewhere to be that has no access to real projects, until they are assigned to their actual team.
* **Parse Roles.** When enabled, Private Mendix Platform reads group and role claims from the incoming token and maps them onto platform roles and groups automatically. When disabled, no such mapping occurs and every federated user lands on the defaults above, to be assigned afterwards manually, through SCIM, or through the platform API.
* **Automation Settings.** For users whose identity provider information is mapped onto their platform profile, group membership can be driven from the values of those profile attributes. When a user arrives with a value that already corresponds to a group, they are added to that group. When a user arrives with a value that does not, a group is created for it and the user is made a member. This is configured on the Group Management page and is separate from Parse Roles. See [Automating Group Assignment](/private-mendix-platform/access-administration/#automating-group-assignment).

Users can also be provisioned before their first login, using SCIM, so that their accounts and group placement exist in advance.

Configuring the identity provider connection itself, including OIDC and SAML setup, attribute mapping, and SCIM tokens, is documented in [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/#identity--access).

{{% alert color="info" %}}
**Reviewer note:** supply the exact field labels and locations for Default Group, Default Role, and Parse Roles so this section can point readers at the right screen.
{{% /alert %}}

## Designing Your Access Model {#designing-your-access-model}

The rules above have direct consequences for how a hierarchy should be laid out.

**Keep broad roles rare and high, and let narrow roles do the work low down.** Because membership cascades downward, a Resource Role granted near the root reaches everything beneath it. Roles such as Administrator and Maintainer should be granted sparingly, and as close as possible to the groups that actually need them. Developer, Contributor, and Operator are the roles intended to carry everyday work further down the tree.

**Associate an app and the namespace it deploys to at the same level.** Since namespace associations do not inherit, a group that owns an app but is not itself associated with a namespace cannot deploy that app, no matter what its parent is associated with. Placing both at the same level avoids the problem entirely.

**Give federated arrivals a landing group.** A low-privilege group configured as the Default Group means an unrecognized user who signs in successfully still reaches nothing of consequence until an administrator places them.

**Use per-environment scoping instead of parallel roles.** Where the requirement is that a team may deploy to some environments and not others, scope the Deployment permissions of one role rather than maintaining two similar roles.

**Mirror your organization, but only as deeply as you need.** Depth is unlimited, and each additional level adds inherited membership to reason about. Add a level when it corresponds to a real boundary of accountability.

### Worked Example

Consider the following hierarchy.

```text
Mendix (root)
├── Platform Admin
│   └── App Portfolios
│       └── App Portfolio 1
└── Preboarding
```

A user who is a member of **App Portfolios** with the Developer role is also, by inheritance, a Developer in **App Portfolio 1**, and can develop and deploy the apps that group owns. That same user is not a member of **Preboarding**, which is not beneath their group, and has no access to anything Preboarding owns.

A user who is a member of **Platform Admin** with the Administrator role holds it in **App Portfolios** and **App Portfolio 1** as well, because both are beneath Platform Admin. Adding a new portfolio group under App Portfolios extends that user's Administrator role into it automatically. This is the reason to grant Administrator low rather than high.

If **App Portfolio 1** owns an app that must deploy to a namespace, App Portfolio 1 must be associated with that namespace itself. Associating the namespace with **App Portfolios**, or with **Mendix**, does not enable the deployment.

**Preboarding** is a natural candidate for the Default Group in an SSO configuration: users who arrive without a recognized placement land there, hold whatever low-privilege Default Role is configured, and reach nothing owned elsewhere in the tree.

{{% alert color="info" %}}
**Reviewer note:** a diagram of this hierarchy showing groups, members, roles, owned apps, and namespace associations exists in the supporting document set and should be attached here in place of the code block above.
{{% /alert %}}
