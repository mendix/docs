---
title: "App Roles"
description: "Describes the App Team, App Contact, and Technical Contact roles and permissions within the Mendix Platform."
tags: ["app team", "app contact", "technical contact", developer portal", "role", "permissions"]
---

## 1 Introduction

The roles defined in Developer Portal for an app project and App Team are described below.

## 2 App Team Member

If you want to join an App Team, you have to ask a current App Team member (with the **Invite** permission) to send an invitation. Because App Team members are not visible to users outside that App Team, you can ask the App Contact to send the invite:

![](attachments/company-app.png)

{{% alert type="info" %}}
It is thus important that the App Contact has the correct permissions to manage the app (for example, the Scrum Master role).
{{% /alert %}}

For more information on roles and permissions, see [App Team Roles](#app-team-roles) below. 

### 2.1 Editing App Team Roles {#edit-app-team-roles}

It is possible to change or add new App Team roles for a specific app or at the company level for all company apps. This depends on your role:

* 	As a Scrum Master, you can edit roles for the specific app of which you are the Scrum Master by selecting **Team** > **Manage Team** (which will take you to the **App Team** tab of the **Settings** > **Security** page), clicking **Role settings,** then making your edits or clicking **New role** to create a custom new App Team role for that app

	![](attachments/app-roles-edit.png)

*  As a [Company Admin](companyadmin-settings), you can edit roles at the company level by clicking **Role settings** on the [Roles Tab](apps#roles-tab) of your Company Admin's [Apps](apps) page to edit the roles (the changes will affect every app created in the company after the change)

	![](attachments/apps-roles.png)

## 3 App Team Roles {#app-team-roles}

Within an App Team, there are six predefined roles that can be provisioned to App Team members. [Company Admins](apps) can also edit and create new team roles within the company.

Each App Team role has access to permission areas based on the following factors:

* Who can edit the backlog and current [Sprint](../collaborate/stories)
* Who can edit the app [model](../develop/modeling-environments)
* Who has the correct [Node Permissions](../deploy/node-permissions) for access to the node information (please note that node permissions must be provisioned by the [Technical Contact](#technical-contact))
* Who can change the app's [general settings](../settings/general-settings)

These are the predefined App Team roles:

Role | Explanation
------------ | -------------
Application Operator | An App Team member who does not actively develop the app, but is responsible for operations on the app's cloud node. 
Business Engineer | An App Team member who contributes to the development of the app. 
Guest | A user of the app who should have insight into the backlog but does not actively participate in development (for example, a stakeholder). 
Product Owner | The product owner of the Scrum team who is responsible for managing the app's backlog.
Scrum Master | The Scrum Master of the Agile App Team. In addition to contributing to development, the Scrum Master manages all the settings within the app. If you create a new app, you will automatically become the Scrum Master.

For details on how to manage App Team roles, see the [Editing App Team Roles](manage-roles#edit-app-team-roles) section of *How to Manage Company & App Roles*.

## 4 App Contact {#app-contact}

When you view the details for a specific app, you will see the two roles responsible for the app: **App contact** and **Technical contact**. These are users you can contact with questions related to the app.

![](attachments/app-roles.png)

These app roles are described below.

The App Contact is visible to regular users and is the go-to person for questions related to the app. If you build your own app, you will automatically become the App Contact and you will have the Scrum Master role as an [App Team role](#app-team-roles). 

If you change the App Contact (for details on how to do this, see the [Changing the App Contact](manage-roles#change-app-contact) section of *How to Manage Company & App Roles*), you should provide the new App Contact with the App Team [Scrum Master](#app-team-roles) role. Because the App Contact will be the contact for regular users, they will thus be able to perform app operations on behalf of all Scrum Masters.

### 4.1 Changing the App Contact {#change-app-contact}

* To change the App Contact, you need to have a **Scrum Master** role or possess the App Team **Settings** permission 

An app intended for other company users always has a contact person to address questions regarding the app.

You can change the App Contact by following these steps:

1. Go to the [Developer Portal](http://home.mendix.com), click **Apps** in the top navigation panel, and select the app for which you want to change the App Contact.
2. Click **General** under the **Settings** category.
3. Click **Edit App Info** in the top-right corner.

    {{% image_container width="500" %}}![](attachments/change-appcontact.png)
    {{% /image_container %}}

4. Below **App Contact**, select a new App Contact from the drop-down menu.
5. Click **Save**.   

## 5 Technical Contact {#technical-contact}

The Technical Contact manages the technical deployment settings of the app. The Technical Contact can be responsible for different deployment platforms (for example, a Mendix Cloud node, on-premises, other platforms such as SAP). For details on cloud deployment, see [Deploy and Manage](../deploy).

With an app hosted in the Mendix Cloud, the Technical Contact is the first contact for App Team members regarding node permissions and operations. 

Only the Technical Contact is allowed to do the following:

* Manage users with node permissions
* Make adjustments to environments (for example, resize and add new environments) 
* Manage licenses (for example, manage renewals, activations, and upgrades) 
* Configure alert settings

### 5.1 Intro

The Technical Contact is responsible for license renewal and is the first point of contact for the Mendix Support department. A Mendix application will always be set up and delivered with a Technical Contact assigned to it. The Technical Contact needs an MxID before Mendix can activate a license for an application.

{{% alert type="info" %}}
It is currently not possible to select more than one Technical Contact in the Mendix Cloud. However, for on-premises installations, it is possible to select more than one Technical Contact. Contact [Mendix Support](https://support.mendix.com) with your request.
{{% /alert %}}

### 5.2 Technical Contact Responsibilities

The responsibilities depend on whether you are hosting your app in the Mendix Cloud or on premises.

#### 5.2.1 Mendix Cloud

For apps in the Mendix Cloud, the Technical Contact is the first point of contact for the app. In this scenario, the Technical Contact does the following:

* Receives notifications for upcoming maintenance operations on the application
* Can receive alerts from the Mendix app when problems arise (for example, CPU load is high, running out of disk space)
* Can configure the alert settings in the **Monitoring** tab of the cloud node

As a Technical Contact, you can perform all the regular operations on the Mendix Cloud node in the [Developer Portal](http://home.mendix.com). Additionally, you can manage the access rights of your team members so that they can deploy, stop and start the app, and perform other actions. For more information, see [Node Permissions](/developerportal/deploy/node-permissions).

These are some details about managing licenses (renewals, activation, and upgrades):

* Mendix is responsible for Mendix Cloud app renewals
* Contact your Customer Success Manager (CSM) if you want to expand the license

You can submit requests in the [Mendix Support Portal](https://support.mendix.com) for questions, changes, and incidents.

#### 5.2.2 On-Premises

When a Mendix app is on premises, it is running on the customer's own infrastructure.

These are some details about managing licenses (renewals, activation, and upgrades):

* Mendix sends license renewal notifications to the Technical Contact via email
* As a Technical Contact, if you want to expand the license (for example, for more users), you need to contact your Account Executive

You can submit requests in the [Mendix Support Portal](https://support.mendix.com) for questions, changes, and incidents.

### 5.3 Changing the Technical Contact {#change-technical-contact}

* To change the Technical Contact, you need to be a **Technical Contact**

An app can have only one Technical Contact to manage the app's environments, deployment repositories, backups, and alerts.

If you are the current Technical Contact for an app, you can make another team member the Technical Contact by following these steps:

1. Go to the [Developer Portal](http://home.mendix.com), click **Apps** in the top navigation panel, and select the app for which you want to change the Technical Contact.
2. Click **Security** under the **Settings** category.
3. Select the **Node Permissions** tab.
4.  Below the name of the new Technical Contact, click **Change to Technical Contact**. The Technical Contact will be changed for all environments, and the change will be automatically saved.

	![](attachments/change-technicalcontact.png)
