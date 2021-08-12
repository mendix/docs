---
title: "Data Hub Administration"
category: "General Info"
menu_order: 20
description: "Describes the Mendix Admin functions for Data Hub Admin and curators."
tags: ["data hub", "Data Hub Admin", "curator", "custom owner", "administration"]
---

## 1 Introduction

Every organization can have one or several Mendix Data Hub Administrator. The Data Hub Admin can assign any number of curators who can manage the day to day administration and perform curate functions on the the registered assets in the Data Hub Catalog.

In the **Administration** tab of **Data Hub**, the operations that can be performed by these two types of users are as follows:

* **Data Hub Admin**:
  * [Assign curators](#curator)
  * [Manage the list of custom owners](#customowners) who have been added as **Business** or **Technical Owners**
  * [Invite external users](#external-access)
* **Curators**:
  [Manage the list of custom owners](#customowners) who have been added as **Business** or **Technical Owners**

{{% alert type="info" %}}
In the current release of Data Hub, the Data Hub Admin for the organization is assigned by [Mendix Support](https://support.mendix.com/hc/en-us): please contact your support representative.
{{% /alert %}}

## 2 Managing Curators {#curator}

The Data Hub Curator can perform day-to-day management functions on all registered assets in the Data Hub Catalog and also enrich the Catalog information on registered assets that is displayed.

Curators can see and curate all registered assets in the Data Hub Catalog. Mendix users who own registered assets can curate their own items, but not those that they do not own.

The Data Hub Admin can add or remove the curator role by following these steps:

1. In the Data Hub Catalog, click the **Administration** tab:

	![Administration](attachments/data-hub-admin/AdministrationTab.png)

2. The Data Hub Admin will see the **Curator Management** option displaying  the list of Data Hub curators for the organization. To assign a curator role to a Mendix user, click **Add Curator**.

    {{% alert type="info" %}}A user with curator rights can access all assets registered in the Catalog. This also includes those that are set to **Non-discoverable** (for more information on discoverability, see the [Discoverability](/data-hub/data-hub-catalog/search#discoverability-metadata) section in *Search in the Data Hub Catalog*). Curators can also change the metadata for the assets that are owned by other users. {{% /alert %}}
   
3. If you want to remove the curator rights for a user, check the box against the name and confirm this by clicking **Remove Curator**.

	![Remove Curator](attachments/data-hub-admin/remove_curator.PNG)
   
    {{% alert type="info" %}}This only removes the curator rights of the user, it does not remove the user as a Mendix platform user.{{% /alert %}}

To search from the list of Mendix users in your organization, start typing in the search box and check the user(s) you want to assign the curator role to.

{{% alert type="info" %}}This list shows all Mendix users for your organizations. It does not include non-Mendix users that are added as *Custom Owners*. For more information, see [Managing Custom Owners](#customowners).{{% /alert %}}

## 3 Managing Custom Owners {#customowners}

Custom owners are owners that have been added as the contact for a registered application. They may be added during the application [curation](/data-hub/data-hub-catalog/curate#custom-owner) or have been specified during app registration.

Custom owners are only the contact people for registered assets. Adding a custom owner does not give them access rights to the Catalog, they are not able to login to the Mendix Platform or curate registered assets in the Catalog. Custom owners will appear in the Catalog with their name and their initials, or with their personalized avatar if they are a Mendix user.

Curators and the Data Hub Admin can manage the custom owner list under the **Owner Management** option.

![Remove Curator](attachments/data-hub-admin/OwnerManagement.PNG)

{{% alert type="info" %}}
Curators will only see **Owner Management** under the **Administration** tab.
{{% /alert %}}

From the **Owner Management** option, you can do the following:

* Add owners – the **Add Owners** button allows you to add new owners by filling in their name and email. New owners will be listed as the **Business** or **Technical Owners** for registered assets.

* Edit the details of the listed owners by clicking the edit pencil icon.
* Delete names from the list by clicking the **x** icon and confirming your choice.

	{{% alert type="info" %}}If a custom owner is removed from the list, they will also be removed from any registered assets where they were set as the owner. This means that the asset will not have a contact.{{% /alert %}}

New custom owners can also be added when assets are being curated as described in [Changing the Technical and Business Owners of an App](/data-hub/data-hub-catalog/curate#custom-owner).

## 4 Managing External Access {#external-access}

**External Access** allows Data Hub Admins to invite members (external users) from outside the organization. External users can search for published data sources or use them in apps. External users cannot register or curate content unless they are an owner of the data source.

![External Access](attachments/data-hub-admin/ExternalAccessOverview.PNG)

Data Hub Admin can manage the external user list in the **External Access** screen. 

To invite new users, do the following:

1. In the Data Hub Catalog, go to the **Administration** tab > **External Access** screen.

2. Click the **Invite Users** button.

3. In the **Invite External Users** dialog box, enter the email addresses of the users you would like to invite as external users and click **Send Invitation**.     ![External Access](attachments/data-hub-admin/InviteExternalUser.PNG)

    {{% alert type="info" %}} You can invite only users with a Mendix account. Invitation email will not be sent to the emails which are not associated with any Mendix account. {{% /alert %}}

4. Users receive the invitation, log into the Data Hub Catalog with their Mendix credentials, and accept the invitation.

    A user can access resources from one organization at a time, and, therefore, needs to select the company that sent the invitation in the **Company** drop-down list in the Catalog home page.

	![company selector](attachments/data-hub-admin/company_selector.png)

   
