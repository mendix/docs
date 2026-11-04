---
title: "Access Management in Private Mendix Platform"
url: /private-mendix-platform/access-management/
aliases:
    - /private-mendix-platform/dynamic-role-management/
weight: 55
description: "Documents how Private Mendix Platform controls what users can do on the platform and to individual apps, namespaces, and Marketplace content."
---

## Introduction

Private Mendix Platform controls access along the following independent: 

* What a user can do on the platform as a whole
* what a user can do to a specific app, deployment namespace, or Marketplace item. 

Both axes are configured by administrators at runtime through Dynamic Role Management, without a code change and without redeploying the platform.

This document explains the two axes. Other articles in this section describe the model, the administrative tasks that configure it, and the day-to-day tasks that users, group administrators, and app owners perform within it.

## Understanding the Two Role Systems {#role-systems}

Instead of a single ladder of roles, with an administrator at the top who can do everything, Private Mendix Platform has two role systems, that is, [platform roles](#platform-role) and [resource roles](#resource-role). Each role system has its own permission schema, its own assignment mechanism, and its own scope.

The two systems are independent of each other. That is, a platform role does not grant the user any resource roles, and a resource role does not grant the user any platform roles. The resource role named **Administrator** and the platform role named **CompanyAdmin** are unrelated. They share no permissions, and the resource role only has access to the resources owned by its holder's group.

The following sections contain more information about platform and resource roles. For the full model, see [Access Model and Role Reference for Private Mendix Platform](/private-mendix-platform/access-model/).

### Platform Roles {#platform-role}

Platform roles define what a user can do on the platform in general. They are assigned to a user account at creation, and can be edited afterward. Their scope involves the whole plaform. Having multiple platform roles gives a user all the access rights of every role they hold.

### Resource Roles {#resource-role}

Resource roles define what a user can do with specific resources, such as a specific app or namespace. They are assigned to an individual, as a member of a group, or directly on an app team. Their scope involves only the resources the relevant group owns or is associated with. Multiple resource roles are only combined where two roles apply to the same resource.

## Read More

* [Access Model and Role Reference for Private Mendix Platform](/private-mendix-platform/access-model/) - Before configuring the access rights, review this document to understand how the model works, including how groups inherit membership, which resources a group can own, and how permissions combine. It also lists every default role and what it grants.
* [Administering Users, Groups, and Roles in Private Mendix Platform](/private-mendix-platform/access-administration/) - Refer to this document for information about creating user accounts, defining or editing roles, building your group hierarchy, and associating apps and namespaces with groups. Those tasks require the **CompanyAdmin** Platform Role.
* [Working with Groups and App Teams in Private Mendix Platform](/private-mendix-platform/groups-and-app-teams/) - Refer to this document for information about managing the membership of a group you administer, or a team on an app you own. Those tasks require no administrator role.
* [Private Mendix Platform Functionalities - System Administrators](/private-mendix-platform/reference-guide/admin/system/) - Refer to this document for information about identity provider configuration, including connect an identity provider, configuring SCIM provisioning, and adjusting login session preferences.
* [Federated Users](/private-mendix-platform/access-model/#federated-users) - Refer to this document for information about what happens to a federated user on first login, and where they land in the group hierarchy.
