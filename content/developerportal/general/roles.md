---
title: "Roles Within the Company and Apps"
category: "General"
description: "Describes the roles and permissions within the Mendix platform."
tags: ["Company","Admin","MxID","Developer Portal","Role","Permissions"]
---

## 1 Introduction

In order to use Mendix, you must sign up to create an account. With this signup you create a **MxID** and this ID will be linked to a company. If the company already exists, you will join the company. If it is a new company, a new company will be created and you will automatically join it.

Within a company and the company's apps there are roles defined that are described below.

## 2 Company Roles

Everyone with the same email domain will be automatically placed in the same company. For example all users that will signup with an email address with the `@bouncetravel.com` emaildomain, will automatically join the company named **Bounce Travel**.

Within the company there are three roles, which are described below.

### 2.1 Company Admin

The Company Admin is a Regular User with additional privilegs. A Company Admin role is a super role that is allowed to manage all settings of the company including the settings of apps, nodes and users. A company can have multiple Company Admins, but Regular Users cannot see who has the the Company Admin role.

The permissions of a Company Admin are the following:

* Can manage company (profile, admins, groups and settings)
* Can manage users, invitations and security group memberships
* Can manage apps and app roles
* Can manage nodes

 ![](attachments/company-admin.png)

For more details, see [Company Admin](/developerportal/companyadmin) and [Add Extra Company Admins](/developerportal/howto/add-company-admin).

### 2.2 Company Contact

Because a company can have multiple Company Admins and Regular Users cannot see who has the the Company Admin role, it is recommended to make one of the Company Admins the Company Contact. The Company Contact is visible to Regular Users and with the Company Admin role, the Company Contact will be able to perform company operations on behalf of all Company Admins.

To view the Company Contact follow these steps:

1. Go to the [Developer Portal](http://home.mendix.com).
2. In the right top corner click on your avatar.

 ![](attachments/showprofile.jpg)

3. Click **Show Profile**.
4. Below your name, click your on the name of your company.

 ![](attachments/my-profile.jpg)
 
5. Below **Contact** you will see the Company Contact

 ![](attachments/company-contact.png)

For more information, see [Change the Company Contact](/developerportal/howto/change-company-contact)

### 2.3 Regular Users

Regular Users are all company members. Regular users can join the company,start building apps and view other apps made within the company. Under **My Company's Apps** in the [Developer Portal](http://home.mendix.com) the Regular Users can view the apps made within the company by clicking.

![](attachments/myapps.png)

The Regular Users cannot join the apps by themselves. If they want to join an app that they are not a member of, they have to ask any Team Member (with an 'invite' permission) of the app to send an invitation. Because it is not visible who the Team Members are, it is recommended to contact the the App Contact to send the invitation. Therefore it is important that the App Contact has the correct permissions to manage the app, for example the SCRUM Master role.

 ![](attachments/company-app.png)

## 3 App Roles

As a Regular User you can view apps made within the company by clicking **My Company's Apps** in the [Developer Portal](http://home.mendix.com). If you select a specific app, you will see two responsible roles for the app. You can contact them with questions related to the app.

 ![](attachments/company-app.png)

 If you are a Team Member of an app, you can view the App Roles in **General** under the **Settings** category.

 ![](attachments/app-roles.png)

{{% alert type="info" %}}
If the app is not a licensed app, it will not have a Technical Contact
{{% /alert %}}

The App Roles are described below:

### 3.1 App Contact

The App Contact is visible to Regular Users and is the go-to person for questions related to the app. If you build your own app, you will automatically become the App Contact and you will have a **SCRUM Master** role within the **App Team** roles.

If the App Contact changes, it is recommended to provide the new App Contact the App Team SCRUM Master role. The App Contact will be the contact person for Regular Users and will be able to perform app operations on behalf of all SCRUM Masters.

For more information, see [Change the App Contact](/developerportal/howto/change-app-contact).

### 3.2 Technical Contact

The Technical Contact manages the technical deployment settings of the app. The Technical Contact can be responsible for different deployment platforms: Mendix Cloud node, on-premises, other plaforms such as MxBlue, Azure etc. 

With an App hosted in the Mendix Cloud, the Technical Contact is the first contact for App Team members regarding the **Node Permissions** and node operations. 

Only the Technical Contact is allowed to do the following:

* Manage the users with node permissions
* Make adjustments to the environments (resize/new environments etc.)
* Manage licenses (renewals/activation/upgrades)
* Configure the alert settings

For more information, see [Technical Contact](/developerportal/settings/technical-contact) and [Change the Technical Contact](/developerportal/howto/change-technical-contact).

## 4 Team Member Roles

Within an App Team, there are six predefined roles that can be provisioned to App Team Members. Company Admins can also create new team roles within the company.

The App Team Roles have access to different permission areas based on the following:

* Who can edit the backlog and current sprint
* Who can edit the app model
* Who has access to node information
* Who can change the app settings

{{% alert type="info" %}}

Note that the **Node Permissions** must be provisioned by the **Technical Contact**.

{{% /alert %}}

The predefined roles can be changed in two places:

*	As a Company Admin you can change them, and changes will have effect on every app created after the change

 ![](attachments/admin-roles.png)

*	As a Scrum Master you can change them for the specific app of which you are the Scrum Master

 ![](attachments/app-team.png)

The predefined App Team roles are described below:

Role | Explanation
------------ | -------------
Application Operator | a member who does not actively develop the app, but is responsible for operations on the app's cloud node
Business Engineer | a member of the app team who contributes to the development of the app
End-user | a user of the app who should have insight into the backlog but doesn't actively participate in development (for example a stakeholder)
Product Owner | the product owner of the Scrum team who is responsible for managing the app's backlog
Scrum Master | the Scrum master of the agile app team; in addition to contributing to development, the Scrum Master manages all the settings within the app; if you create a new app, you will automatically become the Scrum Master

For more information, see [Settings](/developerportal/settings) and [Security - Node Permissions](/developerportal/settings/node-permissions).
