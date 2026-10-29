---
title: "Working with Groups and App Teams in Private Mendix Platform"
url: /private-mendix-platform/groups-and-app-teams/
weight: 30
description: "Documents how users manage the membership of groups they administer, and how app owners manage the team and sharing of their apps in Private Mendix Platform."
---

## Introduction

The following access management tasks in Private Mendix Platform are performed by end users and do not require switching to admin mode:

* Managing group memberships
* Managing app teams

## Understanding Platform and Resource Roles for End Users

Your platform role determines what you can do on the platform in general, such as signing in and creating an app. It is set on your account by an administrator.

Your resource roles determine what you can do to individual apps and namespaces. You hold these as a member of a group, or by direct invitation onto an app's team. A powerful platform role does not give you access to any app, and a powerful role on an app does not give you any platform-wide privilege.

If you cannot reach an app you expect to reach, check your group memberships. You have access to an app if you are a member of the group that owns it, or of a group above that one in the hierarchy, or if the app's owner invited you directly.

You can review your own profile, password, personal access tokens, and service credentials from your account page. See [Configuring Your User Profile and Settings](/private-mendix-platform/user-guide/#configuring-your-user-profile-and-settings). The **My Groups** section of the Private Mendix Platform home page shows a list of all the groups to which you belong.

## Managing Your Group Memberships

If you have been named a group admin on a group, you can manage that group's membership from the **Manage My Group** page. The left navigation menu lists every group you administer.

For each group you can:

* View its current members.
* Search the platform's users by name or email address and add them to the group.
* Remove members from the group.

Being a group admin lets you change who is in the group. It does not let you create groups, change the hierarchy, change which resources the group owns, or edit roles. Those require an administrator. See [Administering Users, Groups, and Roles in Private Mendix Platform](/private-mendix-platform/access-administration/).

{{% alert color="warning" %}}
Adding a member to your group gives them access to everything your group owns, and to everything owned by every group beneath yours in the hierarchy, with the role they hold in your group. Before adding someone, review the ownership held by all these groups.
{{% /alert %}}

Members shown as inherited come from groups above yours. You cannot remove them from your group, because their membership does not originate there. If an inherited member should not have access, raise it with the administrator of the group they come from.

## Managing Your App's Team

The **Teams** page of an app shows everyone who has access to it and the role each of them holds.

### Owner

The user who created the app becomes its owner automatically, and ownership cannot be assigned as a role. The owner has full control of the app, including inviting members, assigning their roles, and transferring ownership. Apps created through Mendix Studio Pro are owned by the Mendix root group on creation, so ask an administrator to transfer ownership if it should sit elsewhere.

### Direct and Inherited Members

The **Teams** page shows the followings member types:

* **Direct members** were invited onto this app specifically, and their roles were assigned by the owner. Their access applies only to this app.
* **Inherited members** reach the app through the group hierarchy rather than through an invitation. Members of the group that owns the app are inherited into it, as are members of the groups above it, each carrying the role they hold in their own group. Their roles are determined by group configuration, not by the app owner, and cannot be changed from the Teams page. To change an inherited member's role, the change has to be made in the group it comes from.

In this way, direct membership handles the individual exceptions, and inherited membership handles the standing arrangement. Team composition stays consistent with organizational governance without being maintained app by app.

### Inviting a Member

As the app's owner, you can invite users to the team and assign roles such as the following:

* **Developer** - To change the app's source and deploy it.
* **Contributor** - To change the app's source but should not deploy it.
* **Operator** - To deploy the app but should not change its source.

For more information about the roles, see [Resource Roles](/private-mendix-platform/access-model/#resource-roles).

The user must already have an account on the platform before you can invite them. If they do not, ask an administrator to create one.

{{% alert color="warning" %}}
An invitation grants access to this app only. It is the right mechanism for a genuine exception, such as a specialist joining for one project. Where a whole team needs standing access, group membership is the mechanism to use instead, because it does not have to be maintained app by app.
{{% /alert %}}

### Sharing Your App with Other Groups

You can share your app with groups that do not own it. Sharing makes the app visible to those groups, so that people who would otherwise not know it exists can find it. It grants no access of any kind.

Members of a group the app has been shared with can request access from you. You decide whether to grant it, and with which role.

Share an app when you want it discoverable across the organization, for example a reference implementation or an internal service other teams may want to build against. Do not use sharing to grant access; use a team invitation or group membership for that.

### Deploying to a Namespace

In addition to holding a role that permits deployment, the group that owns the app must also be associated with the namespace you are deploying to. That association is made by an administrator, and it does not follow the group hierarchy, so a parent group's association does not help.

If you cannot deploy an app despite having a Developer or Operator role, the likely cause is a missing namespace association rather than a role problem. Ask an administrator to confirm that the group owning the app is directly associated with the target namespace. For more information, see [Associating Resources with a Group](/private-mendix-platform/access-administration/#associating-resources-with-a-group).

## Finding Your Group's Apps and Content

Apps owned by groups you belong to are listed on the **My Group Apps** page. See [My Group Apps](/private-mendix-platform/reference-guide/common/group-apps/).

Marketplace content shared with your groups is listed on the **Group Content** page. See [Group Content](/private-mendix-platform/reference-guide/common/group-content/).

Content which you have published yourself is listed on **My Content**, and you can share it with groups from there. See [Sharing Content with Groups](/private-mendix-platform/user-guide/#sharing-content-with-groups).
