---
title: "Prepare Your App for Support"
url: /support/prepare-your-app/
weight: 10
description: "Describes how to configure app authorization to select the affected app (or apps) in the Mendix Support Portal."
aliases:
    - /developerportal/support/change-affected-apps.html
    - /developerportal/support/change-affected-apps
    - /developerportal/support/prepare-your-project/
    - /developerportal/support/prepare-your-app/
    - /community-tools/support/prepare-your-app/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

In the [Mendix Support Portal](https://support.mendix.com/), users can select an affected app for a submitted request. The apps that can be selected are based on the app authorization of the user (regardless of their organization). Users that have an **Edit** permission for **Deploy** or **Capture** are able to submit and view tickets for that app.

Mendix Support needs to know the app identification for on-premises apps so it can show the correct apps. Therefore, Mendix asks that on-premises users provide the **App ID** of their apps. Please invite all the [Team](/developerportal/general/team/) members who should be able to submit tickets and provide them with the specified role, then contact Mendix Support with the app information.

The steps in this how-to should be done for every new app that is created if you want to be able to submit ticket requests in the Mendix Support Portal. Setting this up as a standard process when creating a new Mendix application is recommended.

## Giving Team Members Access to Submit Tickets

There are two ways to give team members access to submit tickets: by assigning the correct role to a user when adding them as a team member, or by changing the role of existing team members.

### Giving a New Team Member Access

To add users to an app's team and give them access to submit tickets for a specific app, follow these steps:

1. Open your app in [Apps](https://sprintr.home.mendix.com/).
2. Go to the [Team](/developerportal/general/team/) page. 
3. Click **Invite Member** to invite the users who should be able to submit/view Support tickets concerning this app.
4. Assign one of the following roles to users you want to give access to creating tickets for the app:
    * **Business Engineer**
    * **Product Owner**
    * **Scrum Master**

    These roles have an **Edit** permission set for **Deploy** or **Capture**, thus they can submit/view Support tickets for the app. For more details on setting permissions, see the [Managing the Team](/developerportal/general/team/#managing) section of **Team**.

5. To finalize the setup, email [support@mendix.com](https://support.mendix.com/) with the **App name** and **App ID** (both of which can be found on the [General](/developerportal/settings/general-settings/) page for the app).

### Giving Existing Team Members Access

To give existing app members access to submit tickets, follow these steps:

1. Open your app in [Apps](https://sprintr.home.mendix.com/).
2. Go to the **Security** page.
3. Change the **ROLE** for the user who needs access to one of the following:
    * **Business Engineer**
    * **Product Owner**
    * **Scrum Master**

    You can also click **Role settings** to create your own roles and customize the permissions for existing roles. For more information, see the [Team Roles](/developerportal/general/app-roles/#team-roles) section of **App Roles**.

4. To finalize the setup, email [support@mendix.com](mailto:support@mendix.com) with the **App name** and **App ID**.

## Read More

* [On-Premises](/developerportal/deploy/on-premises-design/)
