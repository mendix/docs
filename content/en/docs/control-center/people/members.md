---
title: "Members"
url: /control-center/members/
description: "Describes the Members page in the Mendix Control Center."
weight: 10
no_list: true 
---

{{% alert color="warning" %}}
A member in Control Center means a user of the Mendix platform who participates in the development process. It does not mean an end-user of an app built in the Mendix Platform.
{{% /alert %}}

## Introduction 

The **Members** page in Control Center allows you to manage active, deactivated, and external members of your company.

## Active Members

On the **Active Members** tab, you can see an overview of the active members of your company.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member, as well as their **App role** for each app. These are the actions you can take in the profile window:

* Click **Remove** to remove the member from the app. 
* Click an app name to go to its [details page](/control-center/apps-overview/#app-details).

When you select members in the list on this tab, a context menu is displayed, providing the following options:

* Export the selected members' details to an *.xlsx* file.
* Deactivate the selected members. For security reasons, Mendix recommends deactivating an employee that is leaving your company. If the employee returns to your company, they can be reactivated as a member.

{{% alert color="warning" %}}
As a Mendix Admin:    

* You cannot deactivate yourself.
* You can remove Mendix Admins from the [Mendix Admins](/control-center/mendix-admins-page/) page in the Control Center.    
  You cannot remove yourself as a Mendix Admin.
* You can deactivate other users, but you cannot delete them.    
  A user can delete their own account from the [User Settings](/mendix-profile/user-settings/#deleting-an-account) window of their Mendix profile.
{{% /alert %}}

## Deactivated Members

On the **Deactivated Members** tab, you can see an overview of the deactivated members of your company.

When you click a member's name, a pop-up window opens. It displays their profile, along with a button to **Activate** the member.

When you select members in the list on this tab, a context menu is displayed, providing the following options:

* Export the selected members' details to an *.xlsx* file.
* Activate the selected members.

## External Members

On the **External Members** tab, you can see the members outside of your company who have access to at least one of your company apps.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member as well as their **App role** for each app. Click an app name to go to the [details page](/control-center/apps-overview/#app-details) of this app.

When you select members in the lists, a context menu appears with options for exporting member details to an *.xlsx* file.

{{% alert color="info" %}}
You cannot activate/deactivate external members, because they belong to a different company than you.
{{% /alert %}}
