---
title: "User Roles"
url: /refguide7/user-roles/
---
A user role aggregates a number of access rights on data, forms and microflows. An end-user of the application is assigned one or more user roles by an administrator, and gets all access rights that these user roles represent.

Every user role has one or more [module roles](/refguide7/module-role/), which means that users with that user role have all the access rights that are defined for those module roles. A typical user role has module role System.User and at least one other module role.

The purpose of the distinction between user roles and module roles is to make a module self-contained (independent from the project in which it is defined or used), so that it can be reused in different projects and/or published to the Marketplace.

End-users of your application only see the user roles and not the module roles.

## General Properties

### Name

The name property defines the name of the user role. This name is shown to end-users who can create or edit user accounts in the application.

### Documentation

In this property you can document additional information about the user role. This information is shown to end-users who can create or edit user accounts in the application.

### Module roles

A list of module roles of which the access rights are accumulated in the user role. An end-user that is assigned a user role gets all access rights of the module roles of that user role.

### Check security

This specifies whether the consistency of security settings is checked for this user role. You can choose to not check security for a user role. For example, user roles that are used only for web service users do not need to be checked because they never sign in to the client. See [Project Security](/refguide7/project-security/) for more information on the security check.

## User Management Properties

### Users with this user role can manage users with at most the following user roles

A user role can be allowed to manage users with a number of other user roles (including itself), called manageable roles. This means that end-users who have this user role, can create, view, edit and delete users with at most the manageable user roles.

| Value | Description |
| --- | --- |
| All | End-users with this user role can manage all users and grant all user roles. Usually this option should only be configured for an administrator. |
| Selected | End-users with this user role can manage users that have at most the selected user roles, and can grant only the selected user roles. If no user roles are selected, end-users with this user role cannot manage users at all. |
