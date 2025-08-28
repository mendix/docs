---
title: "Marketplace Home Page"
url: /appstore/home-page/
weight: 1
no_list: true
description: "Presents overview information on the Mendix Marketplace."
aliases:
    - /appstore/general/
    - /appstore/general/app-store-overview/
    - /community/app-store/
    - /community/app-store/app-store-overview/
    - /developerportal/app-store/app-store-overview/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

{{% alert color="info" %}}
For more information about content support, see [Marketplace Content Support](/appstore/marketplace-content-support/).
{{% /alert %}}

## Introduction

The [Mendix Marketplace](https://marketplace.mendix.com/) provides access to ready-to-use sample apps, as well as to various components such as connectors, modules, and widgets, that you can use to build your own apps more quickly. The Marketplace also allows you to share the content you have created.

This document describes the different sections of the Marketplace home page, which is your entry point to the various parts of the Mendix Marketplace.

## Explore {#explore}

The search box at the top of the page allows you to explore the Mendix Marketplace. 
You can refine search results using the following filters:

* **Support** – Select between the available support categories. For details, see the [Marketplace Content Support](/appstore/marketplace-content-support/).
* **Visibility** – Choose whether you want to display [public](/appstore/submit-content/#public) or [private](/appstore/submit-content/#private) content.
* **Content Types** – Choose the type of content to display. For details, see the [Types of Marketplace Components](/appstore/#components-type) section in *Marketplace*.
* **Category** – Select specific domains in which components or services share characteristics, functions, or purposes.
* **Industry** – Select specific sectors or business domains in which components or services are used.
* **Compatibility** – Choose between Studio Pro major versions.
* **Rating** – Display components based on their ratings in user [reviews](#my-reviews).

{{% alert color="info" %}}
For details on finding and installing Marketplace content in Studio Pro, see the [Finding and Downloading Content in Studio Pro](/appstore/use-content/#downloading) section of *Using Marketplace Content*.
{{% /alert %}}

## Add Content

Share new Marketplace content you have developed.

For details, see [Upload to the Marketplace](/appstore/submit-content/).

## Get Studio Pro

Download the latest version of [Studio Pro](/releasenotes/studio-pro/).    

## Personal {#personal}

The **Personal** category contains the items described in the following sections.

### My Drafts {#my-drafts}

On this page, you can see and manage the drafts for all the Marketplace content you have started.

You can also find details on how many total drafts you have, which drafts are ready to publish or are awaiting approval, and which drafts have been declined.

{{< figure src="/attachments/appstore/marketplace-home-page/my-drafts.png" class="no-border" >}}

These are the possible **Status** entries for each item:

* **Incomplete draft** – The draft is incomplete and requires additional information before you can submit it.
* **Ready to publish** – The draft is ready to be published to the Mendix Marketplace.
* **Waiting for approval** – The component is [under review by Mendix](/appstore/submit-content/governance-process/). 
* **Declined** – The draft was declined after review by Mendix. You can find specific feedback in the email notification and on the draft edit page.

Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on a component to access the following options:

* **Edit Draft** – Access the component's draft page, where you can continue editing the component details.
* **Submit Draft** – If your component is ready to be submitted and has no errors, submit it for review.
* **Withdraw Draft** – Withdraw content from the review process after you have submitted it for approval. This returns the content to draft state.
* **Delete** – Delete the draft.

### My Content {#my-content}

On this page, you can see the Marketplace content for which you have created at least one version.

Click the name of the component to access its [details page](/appstore/component-details/).

Click the context menu to access options for managing your content:

{{< figure src="/attachments/appstore/marketplace-home-page/my-content.png"  width="400"  class="no-border" >}}

* **Manage Drafts** – Manage the drafts of the component.
    * Only one draft version of a component can exist at a time, so when one draft version is in progress, you cannot initiate another.
    * If there is a draft version in progress, you can edit or delete it.
    * If there is a draft version in progress, and it is assigned to another user, you can reassign it to to yourself. 

    For more information on creating a draft version, see the [Updating Existing Marketplace Content](/appstore/submit-content/#updating) section of *Uploading to the Marketplace*.
* **Edit a Version** – Edit the component. For details on editing, see the [Adding New Marketplace Content](/appstore/submit-content/#adding) section of *Uploading to the Marketplace*.
* **Unpublish a Version** – Remove one or all versions of the component.
    * If the component is [protected](#group-content) within a [content group](#content-groups), a [group member](#members) can unpublish any version.
    * If the component is not protected within a content group, you can only unpublish a version that you have published yourself.
    * Select **Unpublish All My Versions** to remove all your versions of the component.

A **Private** label on a component means the component is your company's private Marketplace content. For details on how this is configured, see the [Adding New Marketplace Content](/appstore/submit-content/#adding) section of *Uploading to the Marketplace*. This content can be shared with [guests](#guests).

A component assigned as [group content](#group-content) will have a label for the [content group](#content-groups) to which it is assigned.

### Shared with Me {#shared-with-me}

This page contains private content shared with you by other companies who have marked you as a [guest](#guests).

### Saved Content {#saved-components}

This page presents the Marketplace content you have [saved](/appstore/component-details/). 

Click the name of the component to access its [details page](/appstore/component-details/).

Click the context menu to access options for managing this component:

{{< figure src="/attachments/appstore/marketplace-home-page/saved.png"  width="400"  class="no-border" >}}

* **Receive/Stop Email Notifications** – Start receiving email notifications, or stop the notifications if they are enabled.
* **Unsave** – Remove the component from your saved content.

### My Reviews {#my-reviews}

This page contains reviews of [My Content](#my-content) by other users, as well as **My reviews** that you have written for other content.

## Company {#company}

The **Company** category contains the items described in the following sections.

### Company Content {#company-content}

On this page, you can see all the content your company has published to the Marketplace as private.

Click the name of the component to access its [details page](/appstore/component-details/).

Click the context menu to access options for managing this content:

{{< figure src="/attachments/appstore/marketplace-home-page/company-content.png"  width="400"  class="no-border" >}}

The options in this menu are the same as those for the [My Content](#my-content) section. However, the **Edit a Version** and **Unpublish a Version** options are only available for your own versions of company content.

### Content Group {#content-groups}

The **Content Group** menu item and page are visible to all users. However, only [Mendix Admins](/control-center/company-settings/) can create and delete content groups. Both [Group Admins](#members) and Mendix Admins can manage content group members. 

You can configure content groups for various levels of access to your company content. The available configuration tabs for each content group page are described in the following sections.

This table breaks down the roles and permissions for content groups:

| Roles                                       | Manage Groups (Create & Delete) | Manage Group Members | Assign Content to Group | Manage Content (Edit, Add New Version & Unpublish) | View & Download Group Content | View Group List |
| ------------------------------------------- | ------------------------------- | -------------------- | ----------------------- | -------------------------------------------------- | ----------------------------- | --------------- |
| Mendix Admin                                | ✔                               | ✔                    | ✔                       | ✔                                                  | ✔                             | ✔               |
| Group Admin                                 | ✘                               | ✔                    | ✔                       | ✔                                                  | ✔                             | ✔               |
| Group Member                                | ✘                               | ✘                    | ✘                       | ✔                                                  | ✔                             | ✔               |
| Organization member (not part of any group) | ✘                               | ✘                    | ✘                       | ✘                                                  | ✔                             | ✔               |
| Guest                                       | ✘                               | ✘                    | ✘                       | ✘                                                  | ✔                             | ✘               |

#### Content Tab {#group-content}

On this tab, you can assign content that can only be managed by members of this group. To assign a component to a content group, click **Assign Content**, and select a Marketplace component from the dialog box:

{{< figure src="/attachments/appstore/marketplace-home-page/group-content.png"  width="400"  class="no-border" >}}

{{% alert color="info" %}}
A component can only be assigned to one content group at a time. If a component is already assigned to another content group, it will not be displayed in this dialog box.
{{% /alert %}}

Click the context menu to access options for managing this content:

{{< figure src="/attachments/appstore/marketplace-home-page/group-content-context.png" width="400" class="no-border" >}}

The options in this menu are the same as those for the [My Content](#my-content) section. The **Unassign from Group** button is only available for [Group Admins](#members), and can be used to remove content from the content group.

#### Members Tab {#members}

On this tab, you can enter the email address of a Mendix Platform user from your company and click **Add Member** to add them as a content group member. Content group members can manage the [content](#group-content) assigned to the group.

Once a member is added, you can select their permission level: **Group Member** or **Group Admin**.

To remove a member, click **Remove** next to their name.

#### Guests Tab {#guests}

A guest is a Mendix Platform user from outside your organization who can download the selected private [content](#group-content) of this group. 

To add a guest, enter their email address in the box and click **Add Guest**. They will receive an email notifying them of access to the private content. 

The guest can then see all the private Marketplace content shared with them on their [Shared with Me](#shared-with-me) page.

{{% alert color="info" %}}
The guest must be a registered Mendix Platform user. Otherwise, they will not be able to access the shared content.
{{% /alert %}}

To remove a guest, click **Remove**.

#### Settings Tab {#settings}

{{% alert color="info" %}}
This tab is only accessible to [Group Admins](#members) and [Mendix Admins](/control-center/company-settings/).
{{% /alert %}}

On this tab, you can enter a **Group Name** and a **Group Description**.

To delete a content group, a Group Admin or Mendix Admin can click **Delete Group**.

## Data {#data}

The **Data** category contains the following items:

* Catalog – Open the [Mendix Catalog](https://catalog.mendix.com/).
