---
title: "Security, Roles & Permissions"
url: /studio8/settings-security/
category: "Settings"
description: "Describes security and roles and permissions in Mendix Studio."
menu_order: 10
tags: ["studio", "security", "roles and permissions"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
#The anchor <upgrade> below is mapped, so it should not be removed or changed.
---

## 1 Introduction 

Security is a way of controlling access to your app. For example, you can decide who can access your app. 

[Roles and Permissions](#roles-and-permissions) are an important part of security – an instrument which you can use to restrict or grant access to different parts of your app, such as pages and microflows.

## 2 Enabling Security {#enabling-security}

Whether security is enabled for your app by default, depends on app's type and version. You can come across the following cases:

1. If your app has been created in the Developer Portal with Mendix version 7.23.3 or above, you can enable security in Studio and view and edit [roles and permissions](#roles-and-permissions). For more information on versions, see [Studio Ranges & Mendix Versions](/studio8/general-versions/)

2. If your app has been created in the Developer Portal with Mendix version below 7.23.3, or has been labelled as private content, or has been customized by your team specifically for your company, the security state depends on Studio Pro:<br/>
    a.  If security is off in Studio Pro, then you can enable security in Studio. In this case, when you try to [publish the app](/studio8/publishing-app/), you will be prompted to enable security. <br/>

	{{< figure src="/attachments/studio8/settings/settings-security/security-pop-up.png" alt="Secure Your App Pop-up Window"   width="400"  >}}<br/>

    b. If security is set to the **Production** level in Studio Pro and settings are compatible with Studio, you can view and edit **Roles and Permissions** in Studio. (For more information on what security settings are compatible with Studio, see the [Studio Compatibility](/refguide8/studio-security-enabled/#studio-compatible) section in *Model Changes When Security Is Enabled in Studio*.)

    {{< figure src="/attachments/studio8/settings/settings-security/roles-and-permissions-screen.png" >}}

    c. If security is set to the **Prototype/demo** or **Production** level in Studio Pro and settings are not compatible with Studio, you can view (not edit) **Roles and Permissions** in Studio. (For more information on security settings compatible with Studio, see the [Studio Compatibility](/refguide8/studio-security-enabled/#studio-compatible) section in *Model Changes When Security Is Enabled in Studio*.)

    {{< figure src="/attachments/studio8/settings/settings-security/security-read-only.png" >}}


If you need to enable security, do one of the following:

* Click **Enable Security** in the above-mentioned pop-up dialog, and security will be set up automatically for you. After that you can restrict or grant access to your app via [Roles and Permissions](#roles-and-permissions).

*  Open **App Settings** > **Roles and Permissions** and click **Enable Security**. 

	{{< figure src="/attachments/studio8/settings/settings-security/enabling-security.png" alt="The Roles and Permissions Screen" >}}

{{% alert color="info" %}}
When you enable security, it is enabled for the whole app, and there are checks and changes applied to the model that are visible in Studio Pro. For more technical information on these checks and changes, see [Model Changes When Security Is Enabled in Studio](/refguide8/studio-security-enabled/).
{{% /alert %}}

## 3 Roles and Permissions {#roles-and-permissions}

{{% alert color="info" %}}
In Studio Pro, advanced security settings can be applied. In this case, you will not be able to edit roles and permissions in Studio.
{{% /alert %}}

A role is a set of permissions that you can assign to a user. For example, you may want to give the *Administrator* full access to all pages and microflows. While for other users, you may choose to only grant access to certain pages and restrict access for microflows. 

In apps created via the Developer Portal, there are two app roles: 

* Administrator
* User

{{% alert color="warning" %}}
When security is enabled, these two app roles will have full access to your app. We recommend you to review permissions for the User role. 
{{% /alert %}}

For more information on managing app users, see the [Managing App Users](#managing-app-users) section.

The **Roles and Permissions** screen consist of three tabs:

* Roles
* Page Access
* Microflow Access

The **Roles** tab lists all roles and indicates the number of pages and microflows these roles can access. 

The **Page Access** and **Microflow Access** tabs contain a table where all pages/microflows are listed in rows, and all roles are placed in columns. 

You can allow only certain roles to access a page or microflow: select the appropriate box to grant access for a role to a page or microflow. 

To select/deselect all pages or microflows click the ellipsis icon next to the user role.

As a result, you will get a matrix specific for each role. 

{{< figure src="/attachments/studio8/settings/settings-security/page-access-tab.png" alt="The Page Access Tab Example" >}}

### 3.1 Creating a New Role

To create a new app role, do the following:

1. Open **Roles and Permissions** > the **Roles** tab.

2.  Click **Add Role** in the right corner.

    {{< figure src="/attachments/studio8/settings/settings-security/add-role-button.png" >}}

3.  Specify the name of the new role in the **Create Role** dialog box and click **Create**.

    {{< figure src="/attachments/studio8/settings/settings-security/create-role-dialog.png" alt="Create Role Dialog Box" >}}

The new role is created.

### 3.2 Editing Existing Roles

To edit an existing role, do the following:

1.  Open **Roles and Permissions** > the **Roles** tab.

2.  Click the **More Options** icon and select **Edit**.

    {{< figure src="/attachments/studio8/settings/settings-security/edit-role-option.png" >}}

3.  In the **Edit Role** pop-up dialog perform the changes, and click **Save**.

    {{< figure src="/attachments/studio8/settings/settings-security/edit-role-dialog.png" >}}    

The role has been edited.

### 3.3 Deleting Roles

To delete an existing role, do the following:

1.  Open **Roles and Permissions** > the **Roles** tab.

2.  Click the **More Options** icon and select **Delete**.

    {{< figure src="/attachments/studio8/settings/settings-security/delete-role-option.png" >}}

3.  Confirm the deletion in the pop-up dialog.

    {{< figure src="/attachments/studio8/settings/settings-security/delete-role-dialog.png" >}}

The role has been deleted.

{{% alert color="info" %}}

You cannot delete or edit the Administrator role.

{{% /alert %}}

### 3.4 Setting Access to Specific Pages/Microflows

There are two ways to set access for specific pages/microflows in your app:

1.  To set access via **Roles and Permissions**, do the following:<br/>
    1.1  Open **Roles and Permissions** > **Page**/**Microflow Access** tab.<br/>
    1.2 Find the user role in the column and tick the box next to a page/microflow to open access for it, or untick – to restrict access. In the example below, we have restricted page access for the User.<br/>

    {{< figure src="/attachments/studio8/settings/settings-security/page-access-example.png" >}}

2.  To set access for a page/microflow via properties of this page/microflow , do the following: <br/>
	2.1 Open the page/microflow.<br/>
    2.2. Go to **Properties** > the **Permissions** section and tick/untick **Allowed Roles** to grant/restrict access.<br/> 

	{{< figure src="/attachments/studio8/settings/settings-security/permissions-section.png" >}}

## 4 Demo Users {#demo-users}

Demo users are a demonstration of each user role existing in your app. You can use demo users to review how your app looks like for each user role. For more technical information, see [Demo Users](/refguide8/demo-users/). 

### 4.1 Testing Your Roles {#testing-your-roles}

You can test how your app looks like for different roles the following way:

1. [Preview your app](/studio8/publishing-app/).

2. Click a user icon in the right side of the screen:

    {{< figure src="/attachments/studio8/settings/settings-security/user-icon.png" >}}

4. In the displayed menu bar, select a demo user and the app will be viewed from the perspective of the corresponding role.

    {{< figure src="/attachments/studio8/settings/settings-security/select-user.png" >}}

## 5 Managing App Users {#managing-app-users}

You can assign the default or customized user roles for your app to app end-users with Mendix accounts. These are called **App Users** and once authorized, they can access your published app to use it, test it, and provide feedback.

{{% alert color="info" %}}
You can manage App Users only after you publish your app.
{{% /alert %}}

To manage App Users, open **Roles and Permissions** and click **Manage Users** in the top-right of the screen:

{{< figure src="/attachments/studio8/settings/settings-security/manage-users-button.png" >}}

You will be taken to the [App User Management](/developerportal/collaborate/general-settings/#managing-app-users) page in the Developer Portal, where you can invite people to your app and manage their user roles. 

{{% alert color="info" %}}
People invited to join your team in the Developer Portal are not added as App Users automatically, so you will need to invite your team members if necessary.
{{% /alert %}}

{{% alert color="info" %}}
If you have created a new user role on the **Roles and Permissions** page, you need to publish the app first to be able to see and assign this role in the Developer Portal.
{{% /alert %}}

## 6 Auto-Upgrade to the New Service {#upgrade}

When you try to publish your app, you may be notified that upgrade of the service that secures your app is required first:

{{< figure src="/attachments/studio8/settings/settings-security/upgrade.png" alt="Upgrade Required"   width="300"  >}}

A special service makes it possible to manage your app users. The upgrade to the latest version of this service will be done automatically for you when you click **Auto-Upgrade**. 

If the automatic upgrade fails, this means, the service was customized in Studio Pro, and only manual upgrade in Studio Pro is possible in this case. 

If the auto-upgrade detects that the service was customized in Studio Pro by a team member, you will be notified that a manual upgrade in Studio Pro should be performed first. 

## 7 Read More

* [Security](/refguide8/security/)
* [Model Changes When Security Is Enabled in Studio](/refguide8/studio-security-enabled/)
