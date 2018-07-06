---
title: "Administration"
parent: "rg-version-2"
---

As a tenant administrator in the ATS, you have access to additional functionality:

*   Manage Apps system wide
*   Create new user accounts

When you are logged in as a tenant administrator you can access the tenant administration page from your profile menu:

![Tenant administration page](attachments/administration/tenant_admin_accounts.png)

Each ATS instance comes with a single tenant administration account with the following credentials: 

* Username: "tenantadmin" 
* Password: "1"

We advise you to change the password for the tenant administrator account as soon as you log in for the first time.

## Manage Accounts

On the _Accounts_ tab you can manage the accounts for this ATS instance. 

## Creating Accounts

![Create new account dialog](attachments/administration/create_account.png)

Field | Description
--- | ---
Full Name | The full name of the user as displayed in ATS.
Name | The name the user logs in with, which must be unique.
Password | The initial password of the user (which should be changed by the user when logging in).
Confirm Password | Must match the _Password_.


{{% alert type="info" %}}

When a new account is created his role for all _Apps_ will be set according to the specified _Default app role_ for each app.

{{% /alert %}}

## Editing Accounts

![Edit account dialog](attachments/administration/edit_account.png)

As a tenant administrator can change the full name of an account and change the password. It is not possible to change the username of an account.

When editing accounts you can set accounts to inactive or block them, which will both deactivate the account. 

{{% alert type="info" %}}

When a user attempts to log in with an incorrect password for a certain number of times in a certain amount of time, according to mendix regulations, that corresponding account will be marked as blocked by the system. As a tenant administrator you can unblock accounts by toggling the _Blocked_ checkbox.

{{% /alert %}}

## Manage Apps

On the _Apps_ tab you can see all the apps that exist on this ATS instance. Here you can create new Apps and edit existing ones. When you click on _New_/_Edit_ the following page will open:

![App Create/Edit](attachments/administration/app_new_edit.png)

You can enter/edit the name and the Mendix app ID. The name is used in the _My apps_ page. The Mendix app ID is used to retrieve information from Mendix Sprintr, e.g. user stories, which are needed for certain ATS features. You can leave the Mendix app ID empty if you do not plan to use these features.

{{% alert type="info" %}}

When creating a new app, you will be assigned as an administrator for this app. All other users will have no access to the app. Go to the newly created app's _App settings_ to manage access to it.

{{% /alert %}}

