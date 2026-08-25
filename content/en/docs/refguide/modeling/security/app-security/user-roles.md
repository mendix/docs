---
title: "User Roles"
url: /refguide/user-roles/
weight: 10
aliases:
    - /refguide/user-role.html
    - /refguide/user-role
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

A user role aggregates a number of access rights to app documents such as data, pages, and microflows. Each end-user of the application is assigned one or more user roles by an end-user with user management rights, and gets all the access rights that these user roles represent.

Every user role is made up of one or more [module roles](/refguide/module-security/#module-role). End-users assigned that user role receive all the access rights defined for those module roles. A typical user role includes the **System.User** module role and at least one other module role.

Separating user roles and module roles keeps each module self-contained and independent of the app it is used in, so modules can be reused across different apps or published to the Marketplace.

End-users of your application only see the user roles and not the underlying module roles.

{{% alert color="warning" %}}
The effects of changes to user roles are not immediately applied to end-users who are signed in to the app. This means that your app can show the wrong pages or data. Although the user roles are reapplied when their session is revalidated, Mendix advises that end-users sign out and sign in again to pick up their new user roles. This ensures that they have the correct user roles. For more information, refer to the documentation on [persistent sessions](/refguide/clustered-mendix-runtime/#sessions-are-always-persistent).

Mendix recommends that you do not use user role changes to create a dynamic UI as these changes do not take effect immediately. 
{{% /alert %}}

## Managing User Roles

To access user roles, do the following:

1. In the App Explorer, go to **App** > **Security**.
1. In the **App Security** dialog, select the **User roles** tab.

    {{< figure src="/attachments/refguide/modeling/security/app-security/user-roles/user-roles-example.png" class="no-border" alt="App Security dialog with User roles tab selected, showing Administrator and User roles and their module roles" >}}

1. Double-click a user role to open its properties. 

The user role properties are split into two sections:

* [General Properties](#general)
* [User Management Properties](#user-management)

{{< figure src="/attachments/refguide/modeling/security/app-security/user-roles/user-role-properties.png" class="no-border" alt="User Role 'Administrator' properties dialog showing General and User management sections" >}}

### General Properties {#general}

General properties of user roles are described in the table below:

| Property | Description |
| --- | --- |
| Name | The name of the user role. This name is shown to end-users who can create or edit user accounts in the application. Blank apps usually start with the **User** and **Administrator** user roles. |
| Documentation | Additional information about the user role. This information helps you to assign the correct module roles to each user role. |
| Module roles | A list of module roles whose access rights are added to this user role. An end-user that is assigned this user role gets all access rights of the module roles of that user role. |
| Check security | Specifies whether Studio Pro checks during development that security settings for this user role are consistent.<br/>You can choose to not check security for a user role. For example, user roles that are used only for web service end-users do not need to be checked because they never sign in to the client. For more information on the security check, see the [Check Security](/refguide/app-security/#check-security) section of *App Security*. |

### User Management Properties {#user-management}

A user role can be configured to manage end-users with specific user roles. These specific user roles are called manageable roles (or grantable roles).

End-users who have this user role can create, view, edit, and delete end-users with the selected manageable roles, provided they do not also have a user role which is not selected.

Take for example an app with three defined user roles: `User`, `Administrator`, and `SubAdministrator`. Assume that you are configuring the `SubAdministrator` user role. The `SubAdministrator` user role has only the `User` user role as a manageable role.

{{< figure src="/attachments/refguide/modeling/security/app-security/user-roles/manageable-roles.png" alt="User management section with only the User role selected as a manageable role" >}}

The following table shows which end-users the `SubAdministrator` user role can manage:

| End-User Name | Has User Roles | SubAdministrator can manage |
| --- | --- | --- |
| User1 | `User` | Yes¹ |
| User2 | `SubAdministrator` | No |
| User3 | `User` and `SubAdministrator` | No² |

¹ The SubAdministrator can only grant or remove the `User` user role.
² Although `User` is a manageable role, User3 also has the `SubAdministrator` user role which is not a manageable role for a SubAdministrator.

The **(No user roles)** option is a manageable role that allows this user role to manage end-users who have no user role at all (for example, newly created end-users).

The **Select / deselect all** checkbox lets you select all the roles as manageable roles, or deselect them all.

{{% alert color="warning" %}}
If the **Select / deselect all** box is checked (that is, all roles are manageable by this user role) then adding a new user role to the app will mean that it is automatically selected as a manageable role. If any of the roles are not selected, then added user roles will not be automatically selected as manageable roles.
{{% /alert %}}

{{% alert color="info" %}}
Internally, user management properties are translated into implicit entity access rules for **System.User**. This means that they are not applied in microflows that do not check entity access.
{{% /alert %}}

### What Can User Roles Manage?

Users who can manage an end-user can make the following changes:

* UserRoles – Grant or remove the selected user roles, but only those user roles which are selected under **User management**
* Name
* User_TimeZone
* Blocked
* Active
* User_Language

## Read More

* [App Security](/refguide/app-security/)   
* [Administrator](/refguide/administrator/)
* [Demo Users](/refguide/demo-users/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Password Policy](/refguide/password-policy/)
