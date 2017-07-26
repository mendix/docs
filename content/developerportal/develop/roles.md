---
title: "Roles Within the Company and Apps"
category: "General"
description: "Describes the roles and permissions within the Mendix platform."
tags: ["Company","MxID","Developer Portal","Role","Permissions"]
---

## 1 Introduction

In order to use Mendix, you must sign up to create an account. With this signup you create a **MxID** and this ID will be linked to a company. If the company already exists, you will join the company. If it is a new company, a new company will be created and you will automatically join it.

Within a company and the company's apps there are roles defined that are described below.

## 2 Company Roles

Everyone with the same email domain will be automatically placed in the same company. For example all users that will signup with an email address with the `@bouncetravel.com` emaildomain, will automatically join the company named **Bounce Travel**.

Within the company there are two roles, which are described below.

### 2.1 Company Admin

The Company Admin is a super role that is allowed to manage all settings of the company including the settings of apps, nodes and users. The permissions of a Company Admin are the following:

* Can manage company (profile, admins, groups and settings)
* Can manage users, invitations and security group memberships
* Can manage apps and app roles
* Can manage nodes

 ![](attachments/company-admin.png)

For more details, see [Company Admin](/developerportal/companyadmin).

### 2.2 Regular Users

Regular users can join the company and start building apps. Regular users can also view other apps made within the company.

![](attachments/myapps.png)

## 3 App Roles

If you click **My Company's Apps** in the [Developer Portal](http://home.mendix.com), you can view the apps. If you select a specific app, you will see two responsible roles for the app. You can contact them with questions related to the app. When then the app is not a licensed app, it will not have a Technical Contact.

The roles are described below.

![](attachments/company-app.png)

### 3.1 App Contact

The App Contact is the go-to person for questions related to the app. If you build an app, you will automatically become the App Contact.

### 3.2 Technical Contact

The Technical Contact manages the settings of the the technical deployment aspect of the app. The Technical Contact is also the first contact point of Mendix Support for the app.  The Technical Contact can be responsible for different deployment platforms: Mendix Cloud node, on-premises, other plaforms such as MxBlue, Azure etc.

Only the Technical Contact is allowed to do the following:

* Manage the users with node permissions
* Make adjustments to the environments (resize/new environments etc.)
* Manage licenses (renewals/activation/upgrades)
* Configure the alert settings

For more information, see [Technical Contact](/developerportal/settings/technical-contact) and [Security - Node Permissions](/developerportal/settings/node-permissions).

## 4 Team Member Roles

Within an App Team, there are six predefined roles that can be provisioned to Team Members. You can also create new team roles within your company.

The Team Member Roles have access to different permission areas based on the following:

* Who can edit the backlog and current sprint
* Who can edit the app model
* Who has access to node information
* Who can change the app settings

{{% alert type="info" %}}

Note that the **Node Permissions** must be provisioned by the **Technical Contact**.

{{% /alert %}}

The predefined roles can be changed in two places:

*	As a Company Admin you can change them, and changes will have effect on every app created after the change
*	As a Scrum Master you can change them for the specific app of which you are the Scrum Master

The predefined team member roles are described below:

* Application Operator – a member who does not actively develop on the application, but is responsible for operations on the application's cloud node
* Business Engineer – a member of the app team who contributes to the development of the application
* End-user – a user of the application who should have insight into the backlog but doesn't actively participate in development (for example a stakeholder)
* Product Owner – the product owner of the Scrum team who is responsible for managing the application's backlog
* Scrum Master – the Scrum master of the agile app team; in addition to contributing to development, the Scrum Master manages all the settings within the app; if you create a new app, you will automatically become the Scrum Master

For more information, see [Settings](/developerportal/settings).
