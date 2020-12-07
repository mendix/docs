---
title: "Data Hub Administration"
category: "General Info"
menu_order: 20
description: "This guide describes how to assign the Mendix Data Hub Roles as a Data Hub Admin."
tags: ["data hub", "Data Hub Admin", "curator", "custom owner", "administration"]
---

## 1 Introduction

Every organization has one Mendix Data Hub Administrator. The Data Hub Admin can assign any number of curators who can manage the day to day administration and perform curate functions on the the registered assets in the Data Hub Catalog. 

In the **Administration** tab of **Data Hub**, the operations that can be performed by these two types of users are as follows:  

* **Data Hub Admin**: 
  * Assign curators 
  * Manage the list of custom owners that have been added as **Business** or **Technical Owners** when a service has been [Curated](../data-hub-catalog/curate#customowner).
* **Curators**: 
  Manage the list of custom owners that have been added as **Business** or **Technical Owners** when a service has been [Curated](../data-hub-catalog/curate#customowner). 

{{% alert type="info" %}}
In the current release of Data Hub, the Data Hub Admin for the organization is assigned by [Mendix Support](https://support.mendix.com/hc/en-us): please contact your support representative.
{{% /alert %}}

This how-to describes the following:

- How the Mendix Data Hub Admin can assign the curator role to users
- How curators and the Data Hub Admin can manage the list of custom owners and their contact details 

## 2 Managing Curators {#curator}

The Data Hub Curator can perform day to day management functions on all registered assets in the Data Hub Catalog and to enrich the information on registered assets. 

Curators can see and curate all registered assets in the Data Hub Catalog. Mendix users who own registered assets can curate their own items, but not those that they do not own. 

The Data Hub Admin can add or remove the curator role by following these steps:

1. From **Data Hub** screen, click the **Administration** tab:

   ![Administration](attachments/data-hub-admin/administration.png)

2. The Data Hub Admin will see the **Curator Management** tab displaying  the list of Data Hub curators for the organization.

3. To assign a curator role to a Mendix user, click **Add Curator**.

   {{% alert type="info" %}}
   A user with curator rights will be able to see all assets registered in the Catalog, including those that are set to **Non-discoverable** by asset owners. Curators will also be able to change the information that is registered for the assets they are owned by other users. 
   {{% /alert %}}

4. To search from the list of Mendix users in your organization, start typing in the search box and check the user(s) you want to assign the curator role to.

   {{% alert type="info" %}}
   This list will show all Mendix users for your organizations. It will not include non-Mendix users that are  added as *Custom Owners* as described in [Managing Custom Owners](#customowners).
   {{% /alert %}}

5. If you want to remove the curator rights for a user, check the box against the name and confirm this by clicking **Remove Curator**.

   {{% alert type="info" %}}
   This will only remove the curator rights of the user, it will not remove the user as a Mendix platform user.
   {{% /alert %}}

## 3 Managing Custom Owners {#customowners} 

Custom owners are those that can be listed as the contact for a registered asset or application. They may be the contacts for regitered assets and not Mendix users. Custom owners are indicated in lists by an avatar that only displays their intitial (Mendix users have their peronalized avatar displayed).   

Curators and the Data Hub Admin can manage the custom owner list under the **Owner Management** tab.  

{{% alert type="info" %}}
Curators will only see  **Owner Management ** under the **Administration** tab.
{{% /alert %}} 

![owner admin](attachments/data-hub-admin/owner-management.png)

From this screen, the following functions can be carried out:

* **Add Owners**—click and enter the name and email of the contact and click **OK**. This will be listed for **Business** or **Technical Owners** when registered assets are curated and a link to the name and email that is specified here added to the asset.

   {{% alert type="info" %}}
  Custom owners in this list are not Mendix platform users but serve as contact for the registered assets.  They will not be able to login to the Mendix Platform or curate registered assets in the Catalog. 
  {{% /alert %}} 

* Edit the details of the listed owners from this screen by clicking the edit pencil icon.

* Delete names from the list, click the **x** and confirm the removal of the name from the list. 

   {{% alert type="info" %}}
   If a custom owner is removed from the list, they will also be removed from any registered assets where they were set as the owner. This means that the asset will not have a contact.
   {{% /alert %}} 

New custom owners can also be added when assets are being curated as described in [Changing the Technical and Business Owners of an App](/data-hub-catalog/curate.md#customowner).