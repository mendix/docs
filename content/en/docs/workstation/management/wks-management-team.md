---
title: "Managing the Team"
linktitle: "Team"
url: /mendix-workstation/management-team/
description: "Describes the team management options available in Mendix Workstation Management."
weight: 90
---

## Introduction

{{% alert color="info" %}}
Collaborating with other users in a workspace requires a Workstation license.
{{% /alert %}}

On the **Team** page, you can invite other Workstation Management users to your workspace to share configurations and collaborate. Only users who have signed into Workstation Management can be invited by email.

{{< figure src="/attachments/workstation/wks-team1.png" class="no-border" >}}

## Inviting Users

To invite a user, perform the following steps:

1. In Workstation Management, in the left navigation menu, click **Team** to open the **Team** page.
2. Click **Invite Team Member**. 
3. Enter the user's email address and select a role. 

For more information about the available roles, see [User Roles](#user-roles).

## Managing Users

To change a user's role or remove them from the workspace, click the three-dot icon in the right column of the user list. This action requires the Owner or Workspace Admin role.

## User Roles {#user-roles}

You can assign the following roles to your users:

* Owner - The owner has full rights to manage the workspace. They can perform the following tasks:

    * Reading and editing configurations
    * Managing the team
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Managing workspace settings
    * Deleting a workspace or transfering ownership to a new owner
    
        By default, the user who created a workspace is assigned the owner role. Contact Mendix Support if a Workspace owner has left the company to transfer the ownership. 
    
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Creating new bulk registration tokens
    * Modifying bulk registration tokens
    * Revoking bulk registration tokens
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps
    * Creating apps during station import.

* Workspace admin - The workspace admin can manage the workspace in the same way as the owner, but they cannot delete the workspace or change its ownership.
* Station admin - Station admins can perform the following tasks:

    * Viewing and editing station configurations
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Creating new bulk registration tokens
    * Modifying bulk registration tokens
    * Revoking bulk registration tokens
    * Exporting and importing stations (single and in bulk)
    * Linking imported stations to existing workspace apps. 

* Computer admin - Computer admins can perform the following tasks:

    * Viewing configurations without editing them
    * Registering and deregistering computers to and from stations
    * Refreshing computer configurations
    * Viewing bulk registration tokens
    * Copying existing bulk registration tokens
    * Exporting stations (single and in bulk).

* View only - This role can perform the following tasks:

    * Viewing configurations without editing them
    * Exporting stations (single and in bulk).

All members except for the workspace owner can leave a workspace.