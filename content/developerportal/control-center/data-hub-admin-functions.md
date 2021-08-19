---
title: "Data Hub Administration"
category: "Control Center"
description: "Describes the Mendix Admin functions for Mendix Admin and curators."
tags: ["data hub", "Mendix Admin", "curator", "custom owner", "administration"]
---

## 1 Introduction

In the **Data Hub** section of the **Control Center**, the following operations can be performed:

  * [Assign and manage Data Hub Curators](#curator)
  * [Manage the list of custom owners](#custom-owners) who have been added as **Business Owner** or **Technical Owner**
  * [Invite external users](#external-users)

## 2 Managing Curators {#curator}

A Data Hub Curator can perform day-to-day management functions on all registered assets in the Data Hub Catalog and also enrich the Catalog information on registered assets that is displayed. Curators can see and curate all registered assets in the Data Hub Catalog. Mendix users who own registered assets can curate their own items, but not those that they do not own.

A Mendix Admin can add or remove the Data Hub Curator role by following these steps:

1. In the left pane menu, click the **Data Hub** tab:

	![Data Hub](attachments/data-hub-admin/datahub_menu.png)

2. A Mendix Admin sees the **Curators** option displaying the list of Data Hub Curators for the organization. To assign a Curator role to a Mendix user, click **Add Curator**.

    {{% alert type="info" %}}A user with Curator rights can access all assets registered in the Data Hub Catalog. This also includes those that are set to **Non-discoverable** (for more information on discoverability, see the [Discoverability](/data-hub/data-hub-catalog/search#discoverability-metadata) section in *How to Search in the Data Hub Catalog*). Curators can also change the metadata for assets that are owned by other users.{{% /alert %}}
   
3. If you want to remove the curator rights for a user, check the box against the name and confirm this by clicking **Remove Curator**.

	![Remove Curator](attachments/data-hub-admin/datahub_remove_curator.png)
   
    {{% alert type="info" %}}This only removes the Curator rights of the user, it does not remove the user as a Mendix Platform user.{{% /alert %}}

To search from the list of Mendix users in your organization, start typing in the search box and check the user(s) you want to assign the Curator role to.

{{% alert type="info" %}}This list shows all Mendix users for your organizations. It does not include non-Mendix users that are added as [custom owners](#custom-owners).{{% /alert %}}

## 3 Managing Custom Owners {#custom-owners}

Custom owners are owners that have been added as contacts for a registered app. They may be added during the app [curation](/data-hub/data-hub-catalog/curate#custom-owner) or may have been specified during app registration.

Custom owners are only the contact people for registered assets. Adding a custom owner does not give them access rights to the Data Hub Catalog, as they are not able to log in to the Mendix Platform or curate registered assets in the Catalog. Custom owners appear in the Catalog with their name and initials, or with their personalized avatar if they are a Mendix user.

Data Hub Curators and Mendix Admins can manage the custom owner list under the **Owners** option.

![Owners](attachments/data-hub-admin/datahub_owners.png)

{{% alert type="info" %}}
Curators will only see **Owners** tab.
{{% /alert %}}

From the **Owners** tab, you can do the following:

*  **Add Owner** – add new owners by filling in their name and email; new owners will be listed as the **Business Owner** or **Technical Owner** for registered assets

	![Add Owner](attachments/data-hub-admin/datahub_add_owner.png)

* **Edit** – edit the details of listed owners (hover over the row to see the actions)
* **Delete** – delete names from the list

	{{% alert type="info" %}}If a custom owner is removed from the list, they will also be removed from any registered assets where they were set as the owner. This means that the asset will not have a contact.{{% /alert %}}

New custom owners can also be added when assets are being curated. For details, see the [Adding a Custom Owner](/data-hub/data-hub-catalog/curate#custom-owner) section of *How to Curate Registered Assets*.

## 4 Managing External Users {#external-users}

This functionality allows Mendix Admins to invite external user members from outside of their organization. External users can search for published data sources or use them in apps. External users cannot register or curate content unless they are an owner of the data source.

![External Access](attachments/data-hub-admin/datahub_external_users.png)

A Mendix Admin can manage the external user list on the **External Users** tab.  

To invite a new user, on the Data Hub screen, click **Invite External Users**. In the dialog box, enter the email addresses of the users you would like to invite as external users and click **Send Invitation**.

![External Access](attachments/data-hub-admin/datahub_invite_x_users.png)
	
{{% alert type="info" %}}
You can only invite users with a Mendix account. The invitation email will not be sent to email addresses that are not associated with any Mendix account.
{{% /alert %}}

Once the external user receives the invitation, they log into the Data Hub Catalog with their Mendix credentials and accept. An external user can only access resources from one organization at a time; therefore, they need to select the company that sent the invitation in the **Company** drop-down list in the Data Hub [Home]](/data-hub/data-hub-catalog/#data-hub-home) page:

![company selector](attachments/data-hub-admin/company_selector.png)  
