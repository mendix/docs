---
title: "Data Hub Administration"
category: "Control Center"
description: "Describes the Mendix Admin functions for Mendix Admin and curators."
tags: ["data hub", "Mendix Admin", "curator", "custom owner", "administration"]
---

## 1 Introduction

In the [Data Hub](/developerportal/control-center#data-hub) page of Control Center, you can perform the following operations:

* Assign and manage Data Hub [Curators](#curator)
* Invite and manage custom [Owners](#custom-owners) (who have already been added as business or technical owners in the Data Hub Catalog)
* Invite and manage [External Users](#external-users)

## 2 Curators {#curator}

A Mendix Admin sees the **Curators** tab displaying the list of Data Hub Curators for the organization:

![Data Hub Curators](attachments/data-hub-admin/curators.png)

The Data Hub Curator role can see and edit metadata for all registered assets in the Data Hub Catalog. Business and Technical Owners can edit metadata on the items they own, but not those that they do not own.

To assign a Curator role to a Mendix user, click **Add Curator**. To search the list of Mendix users in your organization, start typing in the search box and check the user(s) you want to assign the Curator role to.

{{% alert type="info" %}}
A user with Curator rights can access all assets registered in the Data Hub Catalog. This also includes those that are set to **Non-discoverable** (for more information on discoverability, see the [Discoverability](/data-hub/data-hub-catalog/search#discoverability-metadata) section in *How to Search in the Data Hub Catalog*). Curators can also change the metadata for assets that are owned by other users.
{{% /alert %}}

If you want to remove the curator rights for a user, check the box next to the user and click **Remove Curator**.

{{% alert type="info" %}}
This only removes the Curator rights of the user, it does not remove the user as a Mendix Platform user.
{{% /alert %}}

## 3 Owners {#custom-owners}

Custom owners are owners that have been added as contacts for a registered app. They may be added during the app [curation](/data-hub/data-hub-catalog/curate#custom-owner), or they may have been specified during app registration. For more information, see the [Adding a Custom Owner](/data-hub/data-hub-catalog/curate#custom-owner) section of *How to Curate Registered Assets*.

Custom owners are only the contact people for registered assets. Adding a custom owner does not give them access rights to the Data Hub Catalog, as they are not able to log in to the Mendix Platform and curate registered assets in the Catalog. Custom owners appear in the Catalog with their name and initials, or with their personalized avatar if they are a Mendix user.

Mendix Admins and Data Hub Curators can manage the custom owner list on the **Owners** tab:

![Owners](attachments/data-hub-admin/owners.png)

{{% alert type="info" %}}
Data Hub Curators will see *only* the **Owners** tab available in the **Data Hub** page.
{{% /alert %}}

On this tab, you can do the following:

* **Add Owner** – add new owners by filling in their name and email address; new owners will be listed as the business or technical owner for registered assets
* **Edit** – edit the details of listed owners (hover over the row to see the actions)
* **Delete** – delete names from the list
	* Note that if a custom owner is removed from the list, they will also be removed from any registered assets where they were set as the owner, which means that the asset will not have a contact

## 4 External Users {#external-users}

Mendix Admins can invite and manage external users on the **External Users** tab. An external user is a user from outside of your organization who can search for published data sources and use them in apps. External users cannot register or curate content unless they are an owner of the data source.

![External users](attachments/data-hub-admin/external_users.png)

To invite a new user, on the Data Hub screen, click **Invite External Users**. In the dialog box, enter the email addresses of the users you would like to invite as external users and click **Send Invitation**.

{{% alert type="info" %}}
You can only invite users with a Mendix account. The invitation email will not be sent to email addresses that are not associated with any Mendix account.
{{% /alert %}}

Once the external user receives the invitation, they log into the Data Hub Catalog with their Mendix credentials and accept. An external user can only access resources from one organization at a time; therefore, they need to select the company that sent the invitation in the **Company** drop-down list in the Data Hub [Home](/data-hub/data-hub-catalog/#data-hub-home) page:

![Company selector](attachments/data-hub-admin/company_selector.png)
