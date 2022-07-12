---
title: "Administrator"
url: /refguide/administrator/
weight: 20
tags: ["studio pro", "administrator", "app security", "security"]
---

## 1 Introduction

In the **Administrator** tab of **App Security**, you can change the default credentials and a user role for the Administrator user:

{{< figure src="/attachments/refguide/modeling/menus/view-menu/app-explorer/security/app-security/administrator/app-security-administrator.png" >}}

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
Since the value of the password is general knowledge, it is safer to change this to a custom password.

This password is only used when Mendix is running locally. Changing the password in your model will not update the password in your Cloud environments. You can change the password for your other licensed [environments](/developerportal/deploy/environments-details/) in the Developer Portal.
{{% /alert %}}

#### 2.2.1 Free Apps

The MxAdmin user is not created automatically when you deploy your app as a Free App. For licensed environments the MxAdmin user is created when you change the password for the first time, for example through the [Environment Details](/developerportal/deploy/environments-details/) for the Mendix Cloud.

When your Free App *has never been deployed and the database still needs to be created*, any data snapshot you have added to your app will be restored to the database of your Free App. You can use this process to add the MxAdmin user to your Free App by doing the following:

1. In Studio Pro, go to **App > Security**.
2. With **Security level** set to **Production**, open the **Administrator** tab.
3. Change the default password of the administrator user.
4. Run you app locally. This will create a local database that includes the MxAdmin user.
5. Once your app is running locally, stop it again.
6. Open **Version Control > Add Snapshot of Data**.
7. Click **Yes** to confirm committing the new data snapshot.

Your app now contains a data snapshot. If you deploy this app for a Free App for the first time, the snapshot will be restored to the database of the Free App. If there is already a database for your Free App, the snapshot will not be restored.

Alternatively you can log in as an administrator to a Free App deployed to the cloud, by doing the following:

1. In Studio Pro, go to **App > Security**.
2. With **Security level** set to **Production**, open the **Demo users** tab.
3. Set **Enable demo users** to **Yes**.
4. Add a demo_administrator having **User role** *Administrator*.
5. Deploy your Free App to the cloud environment by clicking **Publish**.
6. Log in using the demo-administrator and you can then create some user accounts.

### 2.3 User Role {#user-role}

The user role assigned to the Administrator. For more information, see [User Roles](/refguide/user-roles/). 

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

* [App Security](/refguide/app-security/)
* [User Roles](/refguide/user-roles/)
* [Demo Users](/refguide/demo-users/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Password Policy](/refguide/password-policy/)
