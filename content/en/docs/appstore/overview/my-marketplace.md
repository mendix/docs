---
title: "My Marketplace"
url: /appstore/overview/my-marketplace/
weight: 1
description: "Presents a reference for using the My Marketplace features of the Mendix Marketplace."
tags: ["marketplace",  "my marketplace", "widget", "connector", "module", "partner"]
---

## 1 Introduction

At the top of your Marketplace page, you can choose a category to [share new Marketplace content](/appstore/sharing-content/#adding), such as **Widgets** or **Solutions**.

The pages for the sidebar menu items are described below.

## 2 My Drafts {#my-drafts}

On this page, you can see and manage the drafts for all the Marketplace content you have started.

This page presents details on how many total drafts you have, which drafts are ready to publish or are awaiting approval, and which drafts have been declined.

{{< figure src="/attachments/appstore/overview/my-marketplace/my-drafts.png" >}}

These are the possible **Status** entries for each item:

* **Incomplete draft** – the draft is incomplete and requires additional information before you can submit it
* **Ready to publish**  – the draft of the new version of the component is ready to be published to the Mendix Marketplace
* **Waiting for approval** – the component is being [reviewed by Mendix](/appstore/sharing-content/governance-process/) 
* **Declined** – the draft was declined after review by Mendix; you can find specific feedback in the email notification and on the draft edit page

On this page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on a component to access the following options:

* **Edit Draft** – click this to go to the component's draft page, where you can continue editing the component details
* **Submit Draft** – if your component is ready to be submitted and has no errors, you can proceed with the submission for review
* **Withdraw Draft** – click this to withdraw content from the review process after you have submitted it for approval, which will return the content to the draft state
* **Delete** – click this to delete the draft

## 3 My Content {#my-content}

On this page, you can see the Marketplace content for which you have created at least one version. 

Click the name of the component to go its [component details page](/appstore/overview/#details).

Click the context menu to access various options for managing your content:

{{< figure src="/attachments/appstore/overview/my-marketplace/my-content.png"  width="400"  >}}

* **Manage Drafts** – click this to manage the drafts of the component
    * Only one draft version of a component can exist at a time, so when one draft version is in progress, another draft cannot be initiated
    * If there is a draft version in progress, you will see options to **Edit Draft** or **Delete Draft**
    * If there is a draft version in progress assigned to another user, you will see an option to **Reassign Draft** to yourself 
    * For more information on creating a draft version, see the [Updating Existing Marketplace Content](/appstore/sharing-content/#updating) section of *How to Share Marketplace Content*
* **Edit a Version** – click this to edit the component (for details on editing, see the [Adding New Marketplace Content](/appstore/sharing-content/#adding) section of *How to Share Marketplace Content*)
* **Unpublish a Version** – click this to remove one version or all versions of the component
    * If the component is [protected content](#group-content) from a [content group](#content-groups), a [group member](#members) can unpublish any version
    * If the component is not the protected content of a content group, you can only unpublish a version that you have published yourself
    * Select **Unpublish All My Versions** to remove all your versions of the component

You may see the **Private** label on a component, which means it is your company's private Marketplace content (for details on how this is configured, see the [Adding New Marketplace Content](/appstore/sharing-content/#private) section of *How to Share Marketplace Content*). This content can be shared with [guests](#guests).

In addition, you may see a label on a component name for the [content group](#content-groups) to which the component is assigned as group [group content](#group-content).

## 4 My Subscriptions {#my-subscriptions}

You can see all the Marketplace app services you have trials for on this page:

{{< figure src="/attachments/appstore/overview/my-marketplace/my-subscriptions.jpg" >}}

The table presents the **Names** of products you have trials for. Clicking a product name takes you to the [service management dashboard](#service-management-dashboard) for the component. 

The table also presents the **Plan** and its **Status**, and the **Expires On** date for the subscription. 

## 5 Shared with Me {#shared-with-me}

This page contains private content shared with you by other companies who have marked you as a [guest](#guests).

## 6 Saved Content {#saved-components}

This page presents the Marketplace content you have [saved](/appstore/overview/#saved). 

Click the name of the component to go its [component details page](/appstore/overview/#details).

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/overview/my-marketplace/saved.png"  width="400"  >}}

* **Receive/Stop Email Notifications** – click this to start receiving email notifications or to stop the notifications if you already have them enabled
* **Unsave** – click this to remove the component from your saved content

## 7 My Reviews {#my-reviews}

This page contains reviews of [My Content](#my-content) by other users as well as **My reviews** that you have written of other content.

## 8 Company Content {#company-content}

On this page, you can see all the content your company has published as a private Marketplace.

Click the name of the component to go its [component details page](/appstore/overview/#details).

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/overview/my-marketplace/company-content.png"  width="400"  >}}

The options in this menu are the same as described for the context menu for the [My Content](#my-content) section above. However, the **Edit a Version** and **Unpublish a Version** options are only available for your own versions of company content.

## 9 Company Subscriptions {#company-subscriptions}

You can see all the Marketplace app services your company has subscribed to on this page:

{{< figure src="/attachments/appstore/overview/my-marketplace/company-subscriptions.png" >}}

The table presents the **Names** of the products your company has subscribed to. Clicking a product name takes you to the [service management dashboard](#service-management-dashboard) for the component. 

The table also presents the **Technical Owner** of the company subscription. When subscribing for a paid component, you can assign the **Technical Owner** role to a user in your company. The Technical Owner can create binding keys on the [service management dashboard](#service-management-dashboard) and do other tasks.

Finally, the table presents the plan's **Status**, the subscription **Plan**, and the **Expires On** date for the plan.

### 9.1 Service Management Dashboard {#service-management-dashboard}

This dashboard presents an overview of your service instances and binding keys. A service instance is what Mendix creates when you subscribe to an app service. After the service instance has been created, you need binding keys to use the app service in your app.

{{% alert color="info" %}}
Only a Technical Owner for the subscription can create binding keys. When a user from your company wants to request a free trial (and there is already a Technical Owner), they will not have separate unique binding keys. The Technical Owner has to provide the binding keys to the user.
{{% /alert %}}

{{% alert color="info" %}}
Only a Technical Owner for the subscription can edit the instance name and manage the instance’s settings on external platforms. 
{{% /alert %}}

This page presents the **Binding Key Names** that have been created as well as details on the user who created the binding keys (**Created By**) and when the binding keys were created (**Created At**). Click **Delete** to delete that group of binding keys.

{{< figure src="/attachments/appstore/overview/my-marketplace/binding-keys.jpg" >}}

You can also select a group of binding keys and click **Manage Instance** to go to the component provider's configuration page, where you can do further configuration.

{{% alert color="info" %}}
This additional management option is only available for specific app services where necessary.
{{% /alert %}}

#### 9.1.1 Creating Binding Keys {#creating-binding-keys}

To create binding keys for a specific [subscription](#company-subscriptions), click **Create Binding Keys**. In the dialog box, enter a name for the keys that includes the name of the app where you intend to use the component you have subscribed to (so that it is clear to other users where the keys are used).

After you click **Create Keys**, a page appears with your binding keys. Click **Copy** for each key and manually save the keys somewhere safe.

{{% alert color="warning" %}}
Once you close this page, you will not be able to retrieve the keys again.
{{% /alert %}}

For more information, see the [Using the Binding Keys](#using) section below.

Click **Return to the overview** to go to the main page of the dashboard. 

#### 9.1.2 Using the Binding Keys {#using}

When you are developing your app, set the app service's binding keys as [constants](/refguide/configuration/#constants) in the [App Settings](/refguide/app-settings/).

Refer to the documentation on specific app services for how to use the binding keys (for example, see the [Authenticating Insights Hub REST Calls](/partners/siemens/mindsphere-app-service/#authenticating) section of *Insights Hub IIoT for Makers*).

## 10 Company Reviews {#company-reviews}

This page contains reviews of **Your company's content** as well as **Your company's reviews** that users from your company have written of other content.

## 11 Content Groups {#content-groups}

The **Content Groups** menu item and page are visible to all users. However, only [Mendix Admins](/control-center/company-settings/) can create and delete content groups. Both [Group Admins](#members) and Mendix Admins can manage content group members. 

You can configure content groups for various levels of access to your company content. The available configuration tabs for each content group page are described in the sections below.

This table breaks down the roles and permissions for content groups:

| Roles | Manage Groups (Create & Delete) | Manage Group Members | Assign Content to Group | Manage Content (Edit, Add New Version & Unpublish) | View & Download Group Content | View Group List |
| --- | --- | --- | --- | --- | --- | --- |
| Mendix Admin | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Group Admin | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Group Member | ✘ | ✘ | ✘ | ✔ | ✔ | ✔ |
| Organization member (not part of any group) | ✘ | ✘ | ✘ | ✘ | ✔ | ✔ |
| Guest | ✘ | ✘ | ✘ | ✘ | ✔ | ✘ |

### 11.1 Content Tab {#group-content}

On this tab, you can assign content to this content group that can only be managed by members of this group. To assign a component to a content group, click **Assign Content** and select a company Marketplace component from the dialog box:

{{< figure src="/attachments/appstore/overview/my-marketplace/group-content.png"  width="400"  >}}

{{% alert color="info" %}}
A component can only be assigned to one content group at a time. If a component is already assigned to another content group, it will not appear in this dialog box.
{{% /alert %}}

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/overview/my-marketplace/group-content-context.png" width="400" >}}

The options in this menu are the same as described for the context menu for the [My Content](#my-content) section above. The **Unassign from Group** button is only available for [Group Admins](#members) and can be used to remove content from the content group.

### 11.2 Members Tab {#members}

On this tab, you can enter the email address of a Mendix Platform user from your company and click **Add Member** to add them as a content group member. Content group members can manage the [content](#group-content) assigned to the group.

Once a member is added, you can select their permission level: **Group Member** or **Group Admin**.

To remove a member, click **Remove** next to their name.

### 11.3 Guests Tab {#guests}

A guest is a Mendix Platform user from outside your organization who can download the selected private [Content](#group-content) of this group. To add a guest, enter their email address in the box and click **Add Guest**:

The guest will receive an email notifying them of access to the private content. They can then see all the private Marketplace content shared with them in their [Shared with Me](#shared-with-me) page.

{{% alert color="info" %}}
The guest must be a registered Mendix Platform user; otherwise, they will not be able to access the shared content.
{{% /alert %}}

To remove a guest, click **Remove**.

### 11.4 Settings Tab {#settings}

{{% alert color="info" %}}
This tab is only accessible to [Group Admins](#members) and [Mendix Admins](/control-center/company-settings/).
{{% /alert %}}

On this tab, you can enter a **Group Name** and a **Group Description**.

To delete a content group, a Group Admin or Mendix Admin can click **Delete Group**.
