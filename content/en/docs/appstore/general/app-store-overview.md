---
title: "Marketplace Overview"
url: /appstore/general/app-store-overview/
category: "General Info"
weight: 1
description: "Presents an overview of how to find and use content from the Mendix Marketplace."
tags: ["marketplace",  "widget", "connector", "module", "partner"]
aliases:
    - /community/app-store/app-store-overview.html
    - /developerportal/app-store/app-store-overview.html
    - /community/app-store/app-store-overview
    - /developerportal/app-store/app-store-overview
---

## 1 Introduction

The [Mendix Marketplace](https://marketplace.mendix.com/) is a vibrant marketplace containing complete sample apps that can be used right away as well as various components (connectors, widgets, and modules) that can be used to build custom apps more quickly. In the Mendix Marketplace, you can browse all the content, get what you need, and share the content you have created.

This document describes the different sections of the Mendix Marketplace.

## 2 Marketplace Home Page {#home}

The home page is your entry point to the various parts of the Mendix Marketplace. Here you can perform actions such as the following:

* Click **My Marketplace** to go to pages presenting your [Marketplace activity](#my-marketplace) as well as your company's [private content](#company-content)
* Click **Get Studio Pro** to get the latest version of [Studio Pro](/releasenotes/studio-pro/)
* Click **Add Content** to [share new Marketplace content](/appstore/general/share-app-store-content/) you have developed
* Explore various [industry solutions](#industry) and [content types](#types).

{{< figure src="/attachments/appstore/general/app-store-overview/home-page.png" >}}

<a id="types"></a>The Marketplace offers the following **Content Types**:

| Type | Description |
| --- | --- |
| [Module](/appstore/modules/) | Software functionality which can include a data model, logic, and UI with a portable security model. |
| [Widget](/appstore/widgets/) | Single user-interface elements like containers, drop-down menus, and buttons. Select a widget, configure it, and add it to pages and snippets in your app. |
| **Theme** | Ready-to-use layouts—themes of a personalized style which can be shared and used by Makers to enrich the app with a specific design. |
| **Service** | Software functionality that can be re-used for different use cases. Services usually include APIs that users can interact with by configuring a connection in the app’s module. |
| <a id="industry"></a>**Solution** | Out-of-the-box solutions which are aimed at industry and domain problems, delivering instant value. These solutions are usually at least 80% ready for use and need minimal adaptation to make them work for the customer-specific use case. |
| **Starter Template** | Sample projects which have certain capabilities in place to provide a basis for the Maker to start developing their app. The Maker does not create an app from a blank template but from a template which already has some features configured.|
| **Industry Template** | Accelerators for implementing industry-specific processes. Industry Templates increase speed-to-value and time-to-market. They are a great starting point for common use cases within the relevant Industry. Contrary to solutions, Industry Templates are starter templates which are intended to provide inspiration for utilizing Mendix to create apps for industry-specific processes. They will usually cover around 20% of the process.  |

The following filter options are also available:

* **Category**
* **Industry**
* **Support**
* **Rating**
* **Visibility**
* **Compatibility**

## 3 Component Details Page {#details}

Clicking the tile of a Marketplace component will bring you to its details page with the sections described below.

{{< figure src="/attachments/appstore/general/app-store-overview/component-details.png" >}}

### 3.1 Header and Usage

The header for a component presents the following details:

* The name and category of the component
* The review average (in stars) and the number of reviews
* The number of times the component has been downloaded
* <a id="saved"></a>The **Save and get notified** button which, when clicked, will add the component to the list on the [My Marketplace](#my-marketplace)
* The **Share** button, which allows you to copy the URL of the component and share it to your networks
* **Download** – click this to download the component
    * This is only available for components that have a file attached (meaning, all shared Studio Pro components, but not promotions)
    * The best practice is to download a component from the Marketplace functionality built into Studio Pro, because it then downloads directly into Studio Pro (for details on importing downloaded Marketplace content into Studio Pro, see the [Installing Marketplace Content](/appstore/general/app-store-content/#install) section in *Use Marketplace Content in Studio Pro*))
* The partner icon is applied to components that are supported by a partner:

    {{< figure src="/attachments/appstore/general/app-store-overview/partner.png"  width="25"  >}}

    * These components have a **Contact Us** button for setting up your subscription with the partner
    * If you already have an active subscription or trial, click **View status** to go to the [Company Subscriptions](#company-subscriptions) page

<a id="usage"></a>The **Usage** section presents  the following information (depending on the type of component):

* The latest **Version** number of the component
* The Studio Pro version that the component **Requires** to work
* The type of [license](/appstore/general/share-app-store-content/#license) for the component

The **Publisher** section presents the name of the company who created the component as well as the **Date** when the component was first published.

The **Developers** section presents the names of the developers who most recently updated the component, with links to their [Mendix Profile](/developerportal/mendix-profile/).

The **Support** section presents the category of support Mendix offers for the component (for more details, see [Marketplace Content Support](/appstore/general/app-store-content-support/)).

A **GitHub** link will take you to the GitHub source files of the component.

### 3.2 Tabs {#tabs}

The details page for a component presents the following item information tabs:

* **Overview** – contains the following sections:
    * **Description** – a description of the component
    * **Screenshots** – screenshots of the component
    * **User Reviews** – user reviews of the component; to leave a review for the component, click **Add Review**, which will open a section where you can add text, rate the component, and submit the review (your reviews will be listed on your [Reviews](#my-reviews) page); if you are a developer of the component, you can **Reply** to a review
* **Documentation** – can include details on typical use cases, features and limitations, dependencies, installation and configuration, and frequently asked questions
    * [Platform-supported](/appstore/general/app-store-content-support/#category) components are documented in the various categories of this *Marketplace Guide*
    * Click **Edit documentation** to open a text editor where you can edit the Marketplace component's documentation
* **Releases** – lists all the versions of the component (any of which can be downloaded by clicking **Download**) along with details like the **Framework version** and the **UUID** (which can be used in the [CreateNewApp operation](/apidocs-mxsdk/apidocs/projects-api/#createnewapp) in the *Projects API*): 

## 4 My Marketplace {#my-marketplace}

At the top of your Marketplace page, you can choose a category to [share new Marketplace content](/appstore/general/share-app-store-content/#adding), such as **Widgets** or **Solutions**.

Click an item in the sidebar to go to the page for that content:

* [My Drafts](#my-drafts)
* [My Content](#my-content)
* [My Subscriptions](#my-subscriptions)
* [Shared with Me](#shared-with-me)
* [Saved Content](#saved-components)
* [My Reviews](#my-reviews)
* [Company Content](#company-content)
* [Company Subscriptions](#company-subscriptions)
* [Company Reviews](#company-reviews)
* [Content Groups](#content-groups)

### 4.1 My Drafts {#my-drafts}

On this page, you can see and manage the drafts for all the Marketplace content you have started.

This page presents details on how many total drafts you have, which drafts are ready to publish or are awaiting approval, and which drafts have been declined.

{{< figure src="/attachments/appstore/general/app-store-overview/my-drafts.png" >}}

These are the possible **Status** entries for each item:

* **Incomplete draft** – the draft is incomplete and requires additional information before you can submit it
* **Submit for approval** – the draft for the first version of the component is ready to be submitted for review by Mendix 
* **Ready to publish**  – the draft of the new version of the component is ready to be published to the Mendix Marketplace
* **Waiting for approval** – the component is being [reviewed by Mendix](/appstore/general/share-app-store-content/#approval) 
* **Declined** – the draft was declined after review by Mendix; you can find specific feedback in the email notification and on the draft edit page

On this page, click the ellipsis (**...**) button  for a component to access the following options:

* **Edit Draft** – click this to go to the component's draft page, where you can continue editing the component details
* **Submit Draft** – if your component is ready to be submitted and has no errors, you can proceed with the submission for review
* **Withdraw Draft** – click this to withdraw content from the review process after you have submitted it for approval, which will return the content to the draft state
* **Delete** – click this to delete the draft

### 4.2 My Content {#my-content}

On this page, you can see the Marketplace content for which you have created at least one version. 

Click the name of the component to go its [component details page](#details).

Click the context menu to access various options for managing your content:

{{< figure src="/attachments/appstore/general/app-store-overview/my-content.png"  width="400"  >}}

* **Manage Drafts** – click this to manage the drafts of the component
    * Only one draft version of a component can exist at a time, so when one draft version is in progress, another draft cannot be initiated
    * If there is a draft version in progress, you will see options to **Edit Draft** or **Delete Draft**
    * If there is a draft version in progress assigned to another user, you will see an option to **Reassign Draft** to yourself 
    * For more information on creating a draft version, see the [Updating Existing Marketplace Content](/appstore/general/share-app-store-content/#updating) section of *How to Share Marketplace Content*
* **Edit a Version** – click this to edit the component (for details on editing, see the [Adding New Marketplace Content](/appstore/general/share-app-store-content/#adding) section of *How to Share Marketplace Content*)
* **Unpublish a Version** – click this to remove one version or all versions of the component
    * If the component is [protected content](#group-content) from a [content group](#content-groups), a [group member](#members) can unpublish any version
    * If the component is not the protected content of a content group, you can only unpublish a version that you have published yourself
    * Select **Unpublish All My Versions** to remove all your versions of the component

You may see the **Private** label on a component, which means it is your company's private Marketplace content (for details on how this is configured, see the [Adding New Marketplace Content](/appstore/general/share-app-store-content/#private-app-store) section of *How to Share Marketplace Content*). This content can be shared with [guests](#guests).

In addition, you may see a label on a component name for the [content group](#content-groups) to which the component is assigned as group [group content](#group-content).

### 4.3 My Subscriptions {#my-subscriptions}

You can see all the Marketplace app services you have trials for on this page:

{{< figure src="/attachments/appstore/general/app-store-overview/my-subscriptions.jpg" >}}

The table presents the **Names** of products you have trials for. Clicking a product name takes you to the [service management dashboard](#service-management-dashboard) for the component. 

The table also presents the **Plan** and its **Status**, and the **Expires On** date for the subscription. 

### 4.4 Shared with Me {#shared-with-me}

This page contains private content shared with you by other companies who have marked you as a [guest](#guests).

### 4.5 Saved Content {#saved-components}

This page presents the Marketplace content you have [saved](#saved). 

Click the name of the component to go its [component details page](#details).

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/general/app-store-overview/saved.png"  width="400"  >}}

* **Receive/Stop Email Notifications** – click this to start receiving email notifications or to stop the notifications if you already have them enabled
* **Unsave** – click this to remove the component from your saved content

### 4.6 My Reviews {#my-reviews}

This page contains reviews of [My Content](#my-content) by other users as well as **My reviews** that you have written of other content.

### 4.7 Company Content {#company-content}

On this page, you can see all the content your company has published. 

Click the name of the component to go its [component details page](#details).

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/general/app-store-overview/company-content.png"  width="400"  >}}

The options in this menu are the same as described for the context menu for the [My Content](#my-content) section above. However, the **Edit a Version** and **Unpublish a Version** options are only available for your own versions of company content.

### 4.8 Company Subscriptions {#company-subscriptions}

You can see all the Marketplace app services your company has subscribed to on this page:

{{< figure src="/attachments/appstore/general/app-store-overview/company-subscriptions.png" >}}

The table presents the **Names** of the products your company has subscribed to. Clicking a product name takes you to the [service management dashboard](#service-management-dashboard) for the component. 

The table also presents the **Technical Owner** of the company subscription. When subscribing for a paid component, you can assign the **Technical Owner** role to a user in your company. The Technical Owner can create binding keys on the [service management dashboard](#service-management-dashboard) and do other tasks.

Finally, the table presents the plan's **Status**, the subscription **Plan**, and the **Expires On** date for the plan.

#### 4.8.1 Service Management Dashboard {#service-management-dashboard}

This dashboard presents an overview of your service instances and binding keys. A service instance is what Mendix creates when you subscribe to an app service. After the service instance has been created, you need binding keys to use the app service in your app.

{{% alert color="info" %}}
Only a Technical Owner for the subscription can create binding keys. When a user from your company wants to request a free trial (and there is already a Technical Owner), they will not have separate unique binding keys. The Technical Owner has to provide the binding keys to the user.
{{% /alert %}}

{{% alert color="info" %}}
Only a Technical Owner for the subscription can edit the instance name and manage the instance’s settings on external platforms. 
{{% /alert %}}

This page presents the **Binding Key Names** that have been created as well as details on the user who created the binding keys (**Created By**) and when the binding keys were created (**Created At**). Click **Delete** to delete that group of binding keys.

{{< figure src="/attachments/appstore/general/app-store-overview/binding-keys.jpg" >}}

You can also select a group of binding keys and click **Manage Instance** to go to the component provider's configuration page, where you can do further configuration.

{{% alert color="info" %}}
This additional management option is only available for specific app services where necessary.
{{% /alert %}}

##### 4.8.1.1 Creating Binding Keys {#creating-binding-keys}

To create binding keys for a specific [subscription](#company-subscriptions), click **Create Binding Keys**. In the dialog box, enter a name for the keys that includes the name of the app where you intend to use the component you have subscribed to (so that it is clear to other users where the keys are used).

After you click **Create Keys**, a page appears with your binding keys. Click **Copy** for each key and manually save the keys somewhere safe.

{{% alert color="warning" %}}
Once you close this page, you will not be able to retrieve the keys again.
{{% /alert %}}

For more information, see the [Using the Binding Keys](#using) section below.

Click **Return to the overview** to go to the main page of the dashboard. 

##### 4.8.1.2 Using the Binding Keys {#using}

When you are developing your app, set the app service's binding keys as [constants](/refguide/configuration/#constants) in the [App Settings](/refguide/app-settings/).

Refer to the documentation on specific app services for how to use the binding keys (for example, see the [Authenticating MindSphere REST Calls](/partners/siemens/mindsphere-app-service/#authenticating) section of *MindSphere IIoT for Makers*).

### 4.9 Company Reviews {#company-reviews}

This page contains reviews of **Your company's content** as well as **Your company's reviews** that users from your company have written of other content.

### 4.10 Content Groups {#content-groups}

The **Content Groups** menu item and page are visible to all users. However, only [Mendix Admins](/developerportal/control-center/#company) can create and delete content groups. Both [Group Admins](#members) and Mendix Admins can manage content group members. 

You can configure content groups for various levels of access to your company content. The available configuration tabs for each content group page are described in the sections below.

This table breaks down the roles and permissions for content groups:

| Roles | Manage (Create & Delete) Groups | Manage Group Members | Assign Apps to Group | Manage (Edit, Add New Version & Unpublish) Content | View & Download Group Content | View Group List |
| --- | --- | --- | --- | --- | --- | --- |
| Mendix Admin | ✔ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Group Admin | ✘ | ✔ | ✔ | ✔ | ✔ | ✔ |
| Group Member | ✘ | ✘ | ✘ | ✔ | ✔ | ✔ |
| Organization member (not part of any group) | ✘ | ✘ | ✘ | ✘ | ✔ | ✔ |
| Guest | ✘ | ✘ | ✘ | ✘ | ✔ | ✘ |

#### 4.10.1 Content Tab {#group-content}

On this tab, you can assign content to this content group that can only be managed by members of this group. To assign a component to a content group, click **Assign Content** and select a company Marketplace component from the dialog box:

{{< figure src="/attachments/appstore/general/app-store-overview/group-content.png"  width="250"  >}}

{{% alert color="info" %}}
A component can only be assigned to one content group at a time. If a component is already assigned to another content group, it will not appear in this dialog box.
{{% /alert %}}

Click the context menu to access various options for managing this content:

{{< figure src="/attachments/appstore/general/app-store-overview/group-content-context.png" >}}

The options in this menu are the same as described for the context menu for the [My Content](#my-content) section above. The **Unassign from Group** button is only available for [Group Admins](#members) and can be used to remove content from the content group.

#### 4.10.2 Members Tab {#members}

On this tab, you can enter the email address of a Mendix Platform user from your company and click **Add Member** to add them as a content group member. User group members can manage the [content](#group-content) assigned to the group.

Once a member is added, you can select their permission level: **Group Member** or **Group Admin**.

To remove a member, click **Remove** next to their name.

#### 4.10.3 Guests Tab {#guests}

A guest is a Mendix Platform user from outside your organization who can download the selected private [Content](#group-content) of this group. To add a guest, enter their email address in the box and click **Add Guest**:

The guest will receive an email notifying them of access to the private content. They can then see all the private Marketplace content shared with them in their [Shared with Me](#shared-with-me) page.

{{% alert color="info" %}}
The guest must be a registered Mendix Platform user; otherwise, they will not be able to access the shared content.
{{% /alert %}}

To remove a guest, click **Remove**.

#### 4.10.4 Settings Tab

{{% alert color="info" %}}
This tab is only accessible to [Group Admins](#members) and [Mendix Admins](/developerportal/control-center/#company).
{{% /alert %}}

On this tab, you can enter a **Group Name** and a **Group Description**.

To delete a content group, a Group Admin or Mendix Admin can click **Delete Group**.

## 5 Read More

* [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/)
* [How to Share Marketplace Content](/appstore/general/share-app-store-content/)
* [Marketplace Content Support](/appstore/general/app-store-content-support/)
* [Mendix Component Partner Program](/appstore/creating-content/partner-program/)
