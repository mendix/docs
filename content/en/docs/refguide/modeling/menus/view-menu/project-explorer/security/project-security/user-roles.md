---
title: "User Roles"
url: /refguide/user-roles/
parent: "project-security"
weight: 10
tags: ["studio pro", "user role", "app security", "security"]
aliases:
    - /refguide/user-role.html
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

A user role aggregates a number of access rights on data, forms, and microflows. An end-user of the application is assigned one or more user roles by an administrator, and gets all access rights that these user roles represent.

Every user role has one or more [module roles](/refguide/module-security/#module-role), which means that users with that user role have all the access rights that are defined for those module roles. A typical user role has the **System.User** module role and at least one other module role.

The purpose of the distinction between user roles and module roles is to make a module self-contained (independent from the app in which it is defined or used), so that it can be reused in different apps and/or published to the Marketplace.

End-users of your application only see the user roles and not the module roles.

To access user roles, open **App Security** > **User roles** tab:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/project-explorer/security/project-security/user-roles/user-roles-example.png" >}}

## 2 User Role Properties

Double-click the user role to open its properties. 

The user role has the following properties:

*  [General properties](#general)
*  [User management properties](#user-management)

{{< figure src="/attachments/refguide/modeling/menus/view-menu/project-explorer/security/project-security/user-roles/user-role-properties.png" >}}

### 2.1 General Properties {#general}

General properties of user roles are described in the table below:

| Property       | Description                                                  |
| -------------- | ------------------------------------------------------------ |
| Name           | The name property defines the name of the user role. This name is shown to end-users who can create or edit user accounts in the application. |
| Documentation  | In this property you can document additional information about the user role. This information is shown to end-users who can create or edit user accounts in the application. |
| Module roles   | A list of module roles of which the access rights are accumulated in the user role. An end-user that is assigned a user role gets all access rights of the module roles of that user role. |
| Check security | This specifies whether the consistency of security settings is checked for this user role. You can choose to not check security for a user role. For example, user roles that are used only for web service users do not need to be checked because they never sign in to the client. For more information on the security check, see [App Security](/refguide/project-security/). |

### 2.2 User Management Properties {#user-management}

A user role can be allowed to manage users with a number of other user roles (including itself), called manageable roles. This means that end-users who have this user role, can create, view, edit and delete users with at most the manageable user roles.

| Value | Description |
| --- | --- |
| All | End-users with this user role can manage all users and grant all user roles. Usually this option should only be configured for an administrator. |
| Selected | End-users with this user role can manage users that have at most the selected user roles, and can grant only the selected user roles. Select **(No user roles)** to only manage users without a user role (for example, newly created users). If nothing is selected, end-users with this user role cannot manage users at all.  |

Internally, user manangement properties are translated into entity access rules for **System.User**. This means that they are not applied in microflows that do not check entity access.

## 3 Read More

* [App Security](/refguide/project-security/)
* [Administrator](/refguide/administrator/)
* [Demo Users](/refguide/demo-users/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Password Policy](/refguide/password-policy/)
