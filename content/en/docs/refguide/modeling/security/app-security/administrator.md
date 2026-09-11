---
title: "Administrator"
url: /refguide/administrator/
weight: 20
---

## Introduction

In the **Administrator** tab of **App Security**, you can change the default credentials and a user role for the Administrator user:

{{< figure src="/attachments/refguide/modeling/security/app-security/administrator/app-security-administrator.png" class="no-border" >}}

## Administrator Properties {#administrator-properties}

In the **Administrator** tab the following properties are available:

* [User name](#user-name)
* [Password](#password)
* [User role](#user-role)

### User Name {#user-name}

The user name is used to sign into the application as the Administrator.

Default: *MxAdmin* 

{{% alert color="info" %}}
Since this is general knowledge, it is safer to change this to a custom user name.
{{% /alert %}}

### Password {#password}

The password is used to sign into the application as the Administrator. Click **Show password** to see the password. 

Default: *1*

{{% alert color="info" %}}
Since the value of the password is general knowledge, it is safer to change this to a custom password.

This password is only used when Mendix is running locally. Changing the password in your model will not update the password in your Cloud environments. You can change the password for your other licensed [environments](/developerportal/deploy/environments-details/) in the Mendix Portal.
{{% /alert %}}

#### Free Apps

The MxAdmin user is not created automatically when you deploy your app as a Free App. For licensed environments the MxAdmin user is created when you change the password for the first time, for example through the [Environment Details](/developerportal/deploy/environments-details/) for Mendix Cloud.

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

### User Role {#user-role}

The user role assigned to the Administrator. For more information, see [User Roles](/refguide/user-roles/). 

Default: *Administrator*

{{% alert color="info" %}}
The Administrator user role is always created and has the System.Administrator module role by default. The Administrator user role can also manage users of your application as it has all [manageable roles](/refguide/user-roles/#user-management). 

For Free Apps, the user that created the application automatically also defaults to having the Administrator role so they can use it to manage the users in that environment.

This role may be helpful if you exceed your user license restriction, as you can sign in as any end-user that has this Administrator user role to manage your end-users.
{{% /alert %}}

{{% alert color="warning" %}}
When your app is not deployed locally, for example, if it is deployed to Mendix Cloud, changes to the user role of the Administrator account will not be applied until the Administrator password is changed. See the [actions](/developerportal/deploy/environments-details/#actions) section of *Environment Detail* for instructions on changing the admin password.
{{% /alert %}}

## Read More

* [App Security](/refguide/app-security/)
* [User Roles](/refguide/user-roles/)
* [Demo Users](/refguide/demo-users/)
* [Anonymous Users](/refguide/anonymous-users/)
* [Password Policy](/refguide/password-policy/)
