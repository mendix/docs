---
title: "Settings"
---

## 1 Introduction

The **Settings** category focuses on managing your app settings. Here you can see the basic app information and edit it. You can also manage the app team and node permissions and create API keys.

Follow these steps to find the **Settings** category:

1.  Go to the [Developer Portal](http://home.mendix.com).
2.  Click **Apps** in the top navigation panel.
4.  Select the app you want to manage.
5.  Click **Security** in the left navigation panel.

  ![](attachments/settings.png)

## 2 General

The **General** tab displays an overview of the app's information: the name and description of the app, the AppID, the App Contact, and the Technical Contact (if the app has a node).

There are two actions here you can perform:

* Click **Edit settings** to edit the app settings (you can only see this button when you have the **App Settings** permission; for more details, see [Roles Within the Company and Apps](/developerportal/general/roles))
* Click **Leave app** to leave the app (for details, see [Three Ways to Leave Your App](/developerportal/general/leave-app))

For more information, see [General](/developerportal/settings/general-settings).

## 3 Security

In **Security** there are two tabs with app and node permissions described below:

### 3.1 App Team

{{% alert type="info" %}}
Note that to view the **App Team**, you must have the **App Settings** permission or a default **Scrum Master** role.
{{% /alert %}}

The **App Team** tab lets you view and delete the team members that are currently working on the app. Each member has a **Role**. You can change the role of each team member to the following:

* Application Operator
* Business Engineer
* End-User
* Performance Engineer
* Product Owner
* Scrum Master

There are two actions you can take:

*   Change the **Role Settings**
*   View the **Change log**

### 3.2 Node Permissions

{{% alert type="info" %}}

**Node Permissions** are only available for Licensed Apps.

{{% /alert %}}

The **Node Permissions** tab lets you view the team members that have the **App Team** permission to **View Deploy and Monitor** the node. A **Technical Contact** can grant those team members the following permissions:

* Transport rights
* Access to backup
* Receive Alerts
* API rights
* Access to monitoring

For more information, see [Security-Node](/developerportal/settings/node-permissions).

## 4 API Keys
 
The **API Keys** page lists the existing API keys and lets you create new keys by clicking **Create API key**.

For more information, see [API Keys](/developerportal/settings/api-key).

## 5 Related Content

* [Company Admin](/developerportal/companyadmin)
* [How to Change Password Expiration](/developerportal/howto/password-expiration)
* [How to Configure Maintenance Windows](/developerportal/howto/maintenance-windows)
* [How to Deactivate and Activate Users](/developerportal/howto/deactivate-users)
* [How to Delete, Deactivate and Activate Apps](/developerportal/howto/delete-apps)
* [How to Manage Company Roles and App Roles](/developerportal/howto/change-roles)
* [How to Receive Environment Status Alerts](/developerportal/howto/receive-alerts)
* [Mendix Profile](/developerportal/general/mendixprofile)
* [Roles Within the Company and Apps](/developerportal/general/roles)
* [Three Ways to Leave Your App](/developerportal/general/leave-app)
* [Technical Contact](/developerportal/general/technical-contact)
