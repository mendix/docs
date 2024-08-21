---
title: "Team"
url: /developerportal/general/team/
weight: 3
description: "Describes the Team page of Apps navigation pane."
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

Your team can include all of your colleagues working on an app. As well as developing, team members might have other roles such as ideating or reviewing. The **Team** page in the [navigation pane](/developerportal/#navigation-pane) of **Apps** enables developers from both IT and business with mixed experience levels to collaborate.

To view and manage your team members, follow these steps:

1. In [Apps](https://sprintr.home.mendix.com), select the app you want to manage.
2. In the navigation pane, click **Team**.

## Managing the Team {#managing}

Team members with the [Scrum Master](/developerportal/general/app-roles/#team-roles) role or [Mendix Administrators](/control-center/company-settings/#mendix-admins) can manage the app team.

{{< figure src="/attachments/developerportal/general/team/team.png" class="no-border" >}}

On the **Overview** tab, you can do the following:

* Select a new **Role** for a team member (for details on available roles, see [App Roles](/developerportal/general/app-roles/))
* Click **Remove** to remove a user from the team
* Click **Invite New Member** to invite a new user to the team (for more information, see the [Inviting Team Members](#inviting) section below)

Navigate to the **Role Settings** tab to view and edit permissions for the team roles as well as to **Add New Role**:

{{< figure src="/attachments/developerportal/general/team/role-settings.png"   width="400"  class="no-border" >}}

Navigate to the **Pending Invites** tab for an overview of all sent and unaccepted invitations. You can retract pending invitations from there.

## Inviting Team Members {#inviting}

Anyone with invitation permissions in their app role can invite new team members. When you invite a new team member, you can select a role with the same or less permissions as your own. The notable exception is when [Mendix Administrators](/control-center/company-settings/#mendix-admins) invite new team members. They can appoint any role to any team member.

To invite new team members, follow these steps:

1. Click **Invite Member** on the **Team** page or **Invite someone to your team** ({{% icon name="add-circle" %}}) next to the team in the [app Buzz](/developerportal/general/buzz/).
2. Enter the email address for the Mendix user (or users) you want to invite to the team.
3. Select an **Access Role** for the new member and click **Add**.
4. Send the invitation.

{{% alert color="info" %}}If you invite a Mendix user from your company to an app owned by your company, the invited user is added directly to the app's team.{{% /alert %}}

## Read More

* [App Roles](/developerportal/general/app-roles/)
* [Settings](/developerportal/settings/)
* [Epics](/developerportal/project-management/epics/)
