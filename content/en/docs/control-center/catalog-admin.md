---
title: "Catalog Administration"
linktitle: "Catalog"
url: /control-center/catalog-admin/
weight: 60
description: "Describes the catalog administration in the Mendix Control Center."
aliases:
    - /control-center/data-hub-admin/
    - /developerportal/control-center/catalog-admin/
---

## Introduction

An organization's Catalog requires governance of the data-sharing policy down to the practical details of curating registered assets. A Mendix Admin can oversee these functions and also assign curators that can perform governance tasks for their apps.

In the [Catalog](/control-center/catalog-admin/) page of Control Center, you can perform the following operations:

* Assign and manage [Curators](#curator)
* Invite and manage custom [Owners](#custom-owners) (who have already been added as business or technical owners in the Catalog)
* Invite and manage [External Users](#external-users)
* Control the default discoverability settings of your company's data source [Settings](#settings)

## Curators {#curator}

A Mendix Admin sees the **Curators** tab displaying the list of Curators for the organization:

{{< figure src="/attachments/control-center/data-hub-admin/curators.png" alt="Curators" class="no-border" >}}

The Curator role can see and edit metadata for all registered assets in the Catalog. Business and Technical Owners can edit metadata on the items they own, but not those that they do not own.

To assign a Curator role to a Mendix user, click **Add Curator**. To search the list of Mendix users in your organization, start typing in the search box and check the users you want to assign the Curator role to.

{{% alert color="info" %}}
A user with Curator rights can access all assets registered in the Catalog. This also includes those that are set to **Non-discoverable** (for more information on discoverability, see the [Discoverability](/catalog/manage/search/#discoverability-metadata) section in *How to Search in the Catalog*). Curators can also change the metadata for assets that are owned by other users.
{{% /alert %}}

If you want to remove the curator rights for a user, check the box next to the user and click **Remove Curator**.

{{% alert color="info" %}}
This only removes the Curator rights of the user, it does not remove the user as a Mendix Platform user.
{{% /alert %}}

## Owners {#custom-owners}

Custom owners are owners that have been added as contacts for a registered app. They may be added during the app [curation](/catalog/manage/search/#discoverability-metadata), or they may have been specified during app registration. For more information, see the [Adding a Custom Owner](/catalog/manage/search/#discoverability-metadata) section of *How to Curate Registered Assets*.

Custom owners are only the contact people for registered assets. Adding a custom owner does not give them access rights to the Catalog, as they are not able to log in to the Mendix Platform and curate registered assets in the Catalog. Custom owners appear in the Catalog with their name and initials, or with their personalized avatar if they are a Mendix user.

Mendix Admins and Curators can manage the custom owner list on the **Owners** tab:

{{< figure src="/attachments/control-center/data-hub-admin/owners.png" alt="Owners" class="no-border" >}}

{{% alert color="info" %}}
Curators will see *only* the **Owners** tab available in the **Catalog** page.
{{% /alert %}}

On this tab, you can do the following:

* **Add Owner** – add new owners by filling in their name and email address; new owners will be listed as the business or technical owner for registered assets
* **Edit** – edit the details of listed owners (hover over the row to see the actions)
* **Delete** – delete names from the list
    * Note that if a custom owner is removed from the list, they will also be removed from any registered assets where they were set as the owner, which means that the asset will not have a contact

## External Users {#external-users}

Mendix Admins can invite external users on the **External Users** tab. An external user is a user from outside of your organization who can search for published data sources and use them in apps. External users cannot register or curate content unless they are an owner of the data source.

{{< figure src="/attachments/control-center/data-hub-admin/external_users.png" alt="External users" class="no-border" >}}

To invite a new user, on the Catalog screen, click **Invite External Users**. In the dialog box, enter the email addresses of the users you would like to invite as external users and click **Send Invitation**.

{{% alert color="info" %}}
You can only invite users with a Mendix account. The invitation email will not be sent to email addresses that are not associated with any Mendix account.
{{% /alert %}}

Once the external user receives the invitation, they log into the Catalog with their Mendix credentials and accept. An external user can only access resources from one organization at a time; therefore, they need to select the company that sent the invitation in the **Company** drop-down list in the Catalog [Home](/catalog/#catalog-home) page:

{{< figure src="/attachments/control-center/data-hub-admin/company_selector.png" alt="Company selector" class="no-border" >}}

Mendix Admins can also **Remove** rights of users who no longer need access, and can add another user in their place.

## Settings {#settings}

### Discoverability Status

Mendix Admins can change the default discoverability status of the published data sources of the company. When OData resources are published, the discoverable status defaults to the value set here. 

The default value of this setting is **On**.

{{% alert color="info" %}}
This setting does not work in retrospect, it will only apply to the OData resources published after changing the setting.
{{% /alert %}}

{{% alert color="info" %}}
When the discoverable value is explicitly declared on the registration form or in the API field, it will take precedence over this company **Settings** value.
{{% /alert %}}

### Sample Data Sources

Mendix Admins can enable or disable the option to hide sample data sources in the Catalog.
