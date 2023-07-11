---
title: "App Roles"
url: /developerportal/general/app-roles/
description: "Describes the app team and App/Technical Contact roles and permissions within the Mendix Platform."
tags: ["team", "technical contact", "developer portal", "role", "permissions"]
aliases:
    - /developerportal/settings/technical-contact.html
    - /developerportal/general/technical-contact.html
    - /developerportal/company-app-roles.html
    - /developerportal/company-app-roles/technical-contact.html
    - /developerportal/app-roles/index.html
    - /developerportal/settings/technical-contact
    - /developerportal/general/technical-contact
    - /developerportal/company-app-roles
    - /developerportal/company-app-roles/technical-contact
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

The roles defined in Developer Portal for an [app](/developerportal/#my-apps) and [team](/developerportal/general/team/) are described below.

## 2 Team Member

If you want to join a team, you have to ask a current team member (with the **Invite** permission) to send an invitation. Since team members are not visible to users outside that team, you can ask the [Technical Contact](#technical-contact) to send the invite. This means it is important that the Technical Contact has the correct permissions to manage the app (for example, the **Scrum Master** role).

## 3 Team Roles {#team-roles}

Within a team, there are predefined roles that can be provisioned to team members. Each team role has access to permission areas based on the following factors:

* Who can edit the backlog and current [Sprint](/developerportal/project-management/stories/)
* Who can edit the app model
* Who has the correct [node permissions](/developerportal/deploy/node-permissions/) for access to the node information
    * Note that node permissions must be provisioned by the [Technical Contact](#technical-contact)
* Who can change the app's [general settings](/developerportal/settings/general-settings/)

Scrum Masters can edit and create new team roles on the [Team](/developerportal/general/team/) page, and Mendix Admins can edit and create new team roles within the company in [Control Center](/developerportal/control-center/).

## 4 Technical Contact {#technical-contact}

Every deployed app has a Technical Contact. When you view the [General Settings](/developerportal/collaborate/general-settings/#general) for a deployed app, you will see the **Technical Contact** of the app. This is the user you can contact with questions related to the app. 

{{< figure src="/attachments/developerportal/general/team/app-roles/technical-contact.png" >}}

{{% alert color="info" %}}
You should provide Technical Contact with the Scrum Master role. Since the Technical Contact will be the contact for regular users, they thus should be able to perform app operations on behalf of all Scrum Masters.
{{% /alert %}}

The Technical Contact manages the technical deployment settings of the app. The Technical Contact can be responsible for [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) or various [deployment](/developerportal/deploy/) platforms. A Mendix application will always be set up and delivered with a Technical Contact assigned to it. The Technical Contact for a free App is assigned when the app is deployed for the first time. The Technical Contact needs an MxID before Mendix can activate a license for an application.

The responsibilities of a Technical Contact depend on whether you are hosting your app in the Mendix Cloud or on premises.

### 4.1 Mendix Cloud Responsibilities

For apps in the Mendix Cloud, the Technical Contact is the first point of contact for the app. In this scenario, the Technical Contact does the following:

* Receives notifications for upcoming maintenance operations on the application
* Can configure the alert settings in the **Monitoring** tab of the cloud node
* Can receive alerts from the Mendix app when problems arise (for example, CPU load is high, running out of disk space)
* Make adjustments to environments (for example, resize and add new environments) 

As a Technical Contact, you can perform all the regular operations on the Mendix Cloud node in the Developer Portal. Additionally, you can manage the access rights of your team members so that they can deploy, stop and start the app, and perform other actions. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

The Technical Contact is also responsible for managing licenses (as in, renewals, activations, and upgrades) and is the first point of contact for the Mendix Support department. Please note that Mendix is responsible for Mendix Cloud app renewals, and you can contact your Customer Success Manager (CSM) if you want to expand the license.

### 4.2 On-Premises Responsibilities

When a Mendix app is on premises, it is running on the customer's own infrastructure. For managing licenses in this scenario, Mendix sends license renewal notifications to the Technical Contact via email. As a Technical Contact, if you want to expand the license (for example, for more users), you need to contact your Account Executive.

### 4.3 Changing the Technical Contact {#change-technical-contact}

{{% alert color="info" %}}
It is currently not possible to have more than one Technical Contact for an app. 
{{% /alert %}}

If you are the current Technical Contact for an app, you can give away your Technical Contact role to another team member as follows:

1. Navigate to **Deploy** > **Environments**.
2. Select the [Permissions](/developerportal/deploy/environments/#permissions) tab.
3. Click **Change to Technical Contact** for the team member who should be the new Technical Contact. You may have to authenticate first to perform this action. If so, click **Change to Technical Contact** again after successful authentication to finish this action.

The Technical Contact will be changed for all environments.

{{% alert color="info" %}}
Mendix Admins can also give the Technical Contact role to another team member using the Deploy API Version 3. For more information, see [Deploy API – Version 3](/apidocs-mxsdk/apidocs/deploy-api-3/).
{{% /alert %}}
