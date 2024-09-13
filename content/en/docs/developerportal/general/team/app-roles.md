---
title: "App Roles"
url: /developerportal/general/app-roles/
description: "Describes the app team and App/Technical Contact roles and permissions within the Mendix Platform."
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

## Introduction

The roles defined in **Apps** for an [app](/developerportal/#my-apps) and [team](/developerportal/general/team/) are described below.

## Team Member

If a user wants to join a team, they need an invitation from a current team member who has the **Invite Members** permission.

{{% alert color="info" %}}
Since users outside a team cannot see current team members, and can only see who the [Technical Contact](#technical-contact) of the team is, it would be easy for them if they could ask the Technical Contact for an invitation. Therefore, it is a good practice to give Technical Contact the correct permissions to manage the app (for example, the **Scrum Master** role).
{{% /alert %}}

## Team Roles {#team-roles}

Within a team, there are predefined roles that can be provisioned to team members. Each team role has access to permission areas based on the following factors:

* Who can edit the backlog and current [Sprint](/developerportal/project-management/epics/planning/)
* Who can edit the app model
* Who has the [node permissions](/developerportal/deploy/node-permissions/) for access to the node information
* Who can change the app's [Settings](/developerportal/collaborate/general-settings/)

Scrum Masters can edit and create new team roles on the [Team](/developerportal/general/team/) page, and Mendix Admins can edit and create new team roles within the company in [Control Center](/control-center/).

## Technical Contact {#technical-contact}

Every deployed app has a Technical Contact. When you view the [Settings](/developerportal/collaborate/general-settings/#general) for a deployed app, you can see the app's Technical Contact. The Technical Contact is the user you can contact with questions related to the app. 

{{< figure src="/attachments/developerportal/general/team/app-roles/technical-contact.png" alt="" class="no-border" >}}

{{% alert color="info" %}}
Provide the Technical Contact with the Scrum Master role. Because the Technical Contact is the contact for regular users, they need to be able to perform app operations on behalf of all Scrum Masters.
{{% /alert %}}

The Technical Contact manages the technical deployment settings of the app. The Technical Contact can be responsible for [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) or various [deployment](/deployment/) platforms. A Mendix application is always set up and delivered with a Technical Contact assigned to it. The Technical Contact for a Free App is assigned when the app is deployed for the first time. The Technical Contact needs an MxID before Mendix can activate a license for an application.

The responsibilities of a Technical Contact depend on whether you are hosting your app in Mendix Cloud or on premises.

### Mendix Cloud Responsibilities

For apps in Mendix Cloud, the Technical Contact is the first point of contact for the app and can do the following:

* Receive notifications for upcoming maintenance operations on the application
* Configure the alert settings in the **Monitoring** tab of the cloud node
* Receive alerts from the Mendix app when problems arise (for example, CPU load is high, running out of disk space)
* Adjust environments (for example, resize and add new environments) 

As the Technical Contact, you can perform all the regular operations on the Mendix Cloud node in the Mendix Portal. Additionally, you can manage the access rights of your team members so that they can deploy, stop and start the app, and perform other actions. For more information, see [Node Permissions](/developerportal/deploy/node-permissions/).

The Technical Contact is also responsible for managing licenses (as in, renewals, activations, and upgrades) and is the first point of contact for the Mendix Support department. Note that Mendix is responsible for Mendix Cloud app renewals, and you can contact your Customer Success Manager (CSM) if you want to expand your license.

### On-Premises Responsibilities

When a Mendix app is on premises, it is running on the customer's own infrastructure. For managing licenses in this scenario, Mendix sends license renewal notifications to the Technical Contact via email. As a Technical Contact, if you want to expand the license (for example, for more users), you need to contact your Account Executive.

### Changing the Technical Contact {#change-technical-contact}

{{% alert color="info" %}}
It is not possible to have more than one Technical Contact for an app.

You can only change the Technical Contact for licensed Mendix apps. You cannot change the Technical Contact for Free Apps or apps running outside the Mendix Cloud.
{{% /alert %}}

If you are the current Technical Contact for an app, you can transfer your Technical Contact role to another team member as follows:

1. Go to your app's [Environments](/developerportal/deploy/environments/) page.
2. Switch to the [Permissions](/developerportal/deploy/environments/#permissions) tab.
3. Click **Change to Technical Contact** for the team member who should be the new Technical Contact. You may have to authenticate first to perform this action. If so, click **Change to Technical Contact** again after successful authentication to finish this action.

This action changes the Technical Contact for all environments.

{{% alert color="info" %}}
Mendix Admins can also give the Technical Contact role to another team member using the Deploy API Version 4. For more information, see [Deploy API – Version 4](/apidocs-mxsdk/apidocs/deploy-api-4/).
{{% /alert %}}
