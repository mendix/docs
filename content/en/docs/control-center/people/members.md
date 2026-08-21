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

These are the fields on the **Active Members** tab:

* **Name** – The member's name.
* **Email** – The member's email address.
* **Signup Date** – The date when the member joined the Mendix Platform.
* **Certification** – The member's certification level. This is updated daily.
* **Apps** – The number of apps that the member is part of.
* **Member ID** – The member's unique ID.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member, as well as their **App role** for each app. These are the actions you can take in the profile window:

* Click **Deactivate Member** to deactivate that specific member.
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
  A user can delete their own account from the [User Settings](/portal/user-settings/#deleting-an-account) window of their Mendix profile.
{{% /alert %}}

## Deactivated Members

On the **Deactivated Members** tab, you can see an overview of the deactivated members of your company.

These are the fields on the **Deactivated Members** tab:

* **Name** – The member's name.
* **Email** – The member's email address.
* **Signup Date** – The date when the member joined the Mendix Platform.
* **Certification** – The member's certification level. This is updated daily.
* **Apps** – The number of apps that the member is part of.
* **Member ID** – The member's unique ID.

When you click a member's name, a pop-up window opens. It displays their profile, along with a button to **Activate** the member.

When you select members in the list on this tab, a context menu is displayed, providing the following options:

* Export the selected members' details to an *.xlsx* file.
* Activate the selected members.

## External Members

On the **External Members** tab, you can see the members outside of your company who have access to at least one of your company apps.

These are the fields on the **External Members** tab:

* **Name** – The external member's name.
* **Email** – The external member's email address.
* **Status** – Shows whether the external member is active or deactivated.
* **Company** – The company to which the external member belongs.
* **Certification** – The external member's certification level. This is updated daily.
* **Apps** – The number of apps that the external member is part of.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member, as well as their **App role** for each app. These are the actions you can take in the profile window:

* Click **Remove** to remove the member from the app. 
* Click an app name to go to its [details page](/control-center/apps-overview/#app-details).

When you select members in the lists, a context menu appears with options for exporting member details to an *.xlsx* file.

{{% alert color="info" %}}
You cannot activate/deactivate external members, because they belong to a different company than you.
{{% /alert %}}
