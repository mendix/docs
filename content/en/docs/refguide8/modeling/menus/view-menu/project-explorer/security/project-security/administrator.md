---
title: "Administrator"
url: /refguide8/administrator/
weight: 20
tags: ["studio pro", "administrator", "project security", "security"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/administrator.pdf).
{{% /alert %}}

## 1 Introduction

In the **Administrator** tab of the **Project Security**, you can change the default credentials and a user role for the Administrator user:

{{< figure src="/attachments/refguide8/modeling/menus/view-menu/project-explorer/security/project-security/administrator/project-security-administrator.png" >}}

## 2 Administrator Properties {#administrator-properties}

In the **Administrator** tab the following properties are available:

* [User name](#user-name)
* [Password](#password)
* [User role](#user-role)

### 2.1 User Name {#user-name}

The user name is used to sign into the application as the Administrator.

Default: *MxAdmin* 

{{% alert color="info" %}}
Since this is general knowledge, it is safer to change this to a custom user name.
{{% /alert %}}

### 2.2 Password {#password}

The password is used to sign into the application as the Administrator. Click **Show password** to see the password. 

Default: *1*

{{% alert color="info" %}}
This password is only used when Mendix is running locally. You can change the password for your other [environments](/developerportal/deploy/environments-details/) in the Developer Portal.
{{% /alert %}}

{{% alert color="info" %}}
Since this is general knowledge, it is safer to change this to a custom password.
{{% /alert %}}

### 2.3 User Role {#user-role}

The user role assigned to the Administrator. For more information, see [User Roles](/refguide8/user-roles/). 

Default: *Administrator*

{{% alert color="info" %}}
The administrator is always created and has the System.Administrator role by default. The System.Administrator role allows users of your application to be managed. 

For Free Apps, the user that created the application automatically has this role by default as well so you can use it to manage your users in that environment.

This role may be helpful in case you have exceeded your user license restriction in which case you can use any user that has this System.Administrator role to sign in to manage your users.
{{% /alert %}}

{{% alert color="warning" %}}
When your app is not deployed locally, for example to the Mendix Cloud, changes to the user role of the administrator account will not be applied until the administrator password is changed. See the [actions](/developerportal/deploy/environments-details/#actions) section of *Environment Detail* for instructions on changing the admin password.
{{% /alert %}}

## 3 Read More

* [Project Security](/refguide8/project-security/)
* [User Roles](/refguide8/user-roles/)
* [Demo Users](/refguide8/demo-users/)
* [Anonymous Users](/refguide8/anonymous-users/)
* [Password Policy](/refguide8/password-policy/)
