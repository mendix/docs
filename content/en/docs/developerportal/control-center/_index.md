---
title: "Control Center"
url: /developerportal/control-center/
description: "Describes the Mendix Control Center, used for the governance of company members, apps, security, and cloud resources."
tags: ["control center", "mendix admin", "developer portal", "role", "permissions", "fallback", "resource pack", "node", "offboard"]
weight: 20
no_list: false 
description_list: true
aliases:
    - /developerportal/company-app-roles/users.html
    - /developerportal/company-app-roles/users
---

## 1 Introduction

When you sign up on the Mendix Platform, you are able to create new apps, invite other users to your app teams, deploy your apps, and invite app end-users to give feedback, among many other activities. Insights into these company activities are provided in the Control Center in one central overview. These insights will help you to be in control and remain aware of everything happening within the Mendix landscape of your company.

The [Mendix Control Center](https://controlcenter.mendix.com/) consists of the pages described below, which are for use by [Mendix Admins](#company).

If your company does not already have a Mendix Admin, you will see a page that outlines the usage and goals of Control Center. You can also recommend a colleague for Mendix Admin status by clicking **Suggest a Mendix Admin**.

If your company already has a Mendix Admin but you yourself are not a Mendix Admin, you will see this page:

{{< figure src="/attachments/developerportal/control-center/admin-exists.jpg" >}}

If you are a Mendix Admin, you will immediately see the [Dashboard](#dashboard) page and can navigate to the pages described below.

## 2 Dashboard {#dashboard}

The Control Center dashboard gives you an overview of various activities for your company on the Mendix Platform:

{{< figure src="/attachments/developerportal/control-center/dashboard.png" >}}

These are some examples of what you can find on the dashboard:

* **Apps Created** – you can filter these [apps](#apps) by date
* **Mendix Versions** – describes which Studio Pro/Mendix versions your internal and external [members](#members) are using for apps, which is especially important as the development of apps on outdated or [non-MTS/LTS versions](/releasenotes/studio-pro/lts-mts/) can lead to security issues
* **Certification Level** – presents the number of members per [Mendix certification](https://academy.mendix.com/link/certification)
* **External Members** – click a part of this pie chart to see a list of external members from a specific company
* **Company Feed** – presents events in your company, such as members joining the company and the created app

## 3 Apps {#apps}

### 3.1 Active Apps Tab and Deactivated Apps Tab

#### 3.1.1 Overview of Apps {#overview}

On the **Active Apps** tab and the **Deactivated Apps** tab, you can see an overview of the active and deactivated apps that belong to your company.

When you select one or more apps via the check boxes in the list, a context menu appears at the bottom of the screen with options for exporting app details to an *.xlsx* file, deactivating apps (on the **Active Apps** tab) or activating apps (on the **Deactivated Apps** tab), and deleting an app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on the Mendix Cloud. On the overview tab, you can only deactivate or activate up to 20 apps and delete one app in one go.
{{% /alert %}}

The consequences of deactivating and deleting an app are as below:

|                                                              | Consequences of deactivating an app                          | Consequences of deleting an app                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Project code repository stays persistent                     | {{< figure src="/attachments/developerportal/control-center/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| Project members can access the project code repository       | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| App project stays persistent                                 | {{< figure src="/attachments/developerportal/control-center/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| Project members can access the app project in the Developer Portal | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| Cloud environment stays persistent                           | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |

#### 3.1.2 App Details Page {#app-details}

If you click the name of an app in the overview list, a page opens and shows the details of this app.

If the app is not a licensed app, you can see the **...** icon on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on the Mendix Cloud. For the consequences of these operations, see the table in the [Overview of Apps](#overview) section.
{{% /alert %}} 

The app details page has the following tabs:

* **App Info** – This tab has the **Description** and **App ID** fields, which are also available on the [General Settings](/developerportal/collaborate/general-settings/) page for your app in the Developer Portal.
* **Members** – This tab presents the internal members and external members of the app.

    * You can directly deactivate an internal member from the app by clicking their name and selecting **Deactivate Member**.
    * For other member management options, click **Manage Members**, which will open the **Security** > [Team](/developerportal/collaborate/team/#managing) page.
        * As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – This tab shows all the Mendix Cloud environments.
    * You can delete a free Mendix Cloud environment on this tab. Once the free environment is deleted, all data will be removed; however, the project members can still access the associated project and app repository in the Developer Portal.
* **App Roles** – This tab presents the team roles defined via the **Default App Roles** tab and/or customized for a particular app

### 3.2 Default App Roles Tab

The **Default App Roles** tab shows the default [team roles](/developerportal/collaborate/app-roles/#team-roles) assigned for every new app created in your company. Hovering over a role brings up options to **Delete** and **Edit** the role. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/collaborate/team-server/) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) information.

{{< figure src="/attachments/developerportal/control-center/roles.jpg" >}}

## 4 Members {#members}

Members are users who can view and/or edit an app.

### 4.1 Active Members Tab and Deactivated Members Tab

On the **Active Members** tab and the **Deactivated Members** tab, you can see an overview of the active and deactivated members of your company.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member as well as their **App role** for each app. Click an app name to go to the [details page](#app-details) of this app.

When you select members in the lists on these tabs, a context menu appears with options for exporting member details to an *.xlsx* file and deactivating (on the **Active Members** tab) or activating (on the **Deactivated Members** tab) members.

For security reasons, we recommend that you deactivate an employee that is leaving your company (if the employee returns to your company, they can be activated as a member again).

{{% alert color="info" %}}
You cannot deactivate yourself.
{{% /alert %}}

### 4.2 External Members Tab

On the **External Members** tab, you can see the members outside of your company who have access to at least one of your company apps.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member as well as their **App role** for each app. Click an app name to go to the [details page](#app-details) of this app.

When you select members in the lists, a context menu appears with options for exporting member details to an *.xlsx* file.

{{% alert color="info" %}}
You cannot activate/deactivate external members, because they belong to a different company than you.
{{% /alert %}}

## 5 Groups {#groups}

A Mendix Admin can set up **App Access Groups**, which consist of end-users (who are active members of your company) who will have access to [Mendix SSO](/appstore/modules/mendix-sso/)-enabled apps with specific environments and roles. Click **Add Access Group** to create a new group with a **Name** and **Description**.

Click a group name to bring up the group details pop-up window, and click **Add Member** to add members to the group. When you add members to an app access group, they will automatically be granted access to the apps listed on **Accessible Apps** tab. After you select an app to be accessible for the group, you also need to select a specific app [environment](/developerportal/deploy/environments/) node to be accessible, in addition to specific [user roles](/refguide/user-roles/) that should be able to access the app.

{{< figure src="/attachments/developerportal/control-center/access-group.jpg" >}}

{{% alert color="warning" %}}
You can only add apps that utilize [Mendix SSO](/appstore/modules/mendix-sso/) to App Access Groups.
{{% /alert %}}

When you select groups in the list or members or accessible apps in the group details page, a context menu will appear with options for exporting item details to an *.xlsx* file, deleting access groups, removing members from access groups, and removing accessible apps.

## 6 Company Settings {#company}

On the **Company Details** tab of this page, you can edit your **Company Name** and **Description**.

You can also request new **Company Email Domains** by clicking **Add Domain**, upon which a request is sent to [Mendix Support](/developerportal/support/). Once a domain is added, every user who signs up to Mendix with that email domain will be assigned to your company.

If you have [configured single sign on using BYOIDP](/developerportal/control-center/set-up-sso-byoidp/), you will have to wait until the domain has been added, then deactivate and reactivate BYOIDP to pick up the new email domain. It is not possible to add email domains which do not use single sign-on if it is activated for your company.

The **Mendix Admins** tab lists all the current Mendix Admins in your company. A Mendix Admin will normally be someone in the IT department of your company, and they will have full access to Control Center to perform all available tasks. 

To add a new admin, click **Add Mendix Admin**. To remove an admin, hover over their name in the list and click **Remove**.

{{< figure src="/attachments/developerportal/control-center/admin.jpg" >}}

{{% alert color="info" %}}
It is not possible to remove yourself as a Mendix Admin.
{{% /alert %}}

## 7 Company Brand

{{% alert color="warning" %}}
Features on this page are available to try out, but you will not see changes implemented yet.
{{% /alert %}}

On this page, you can add and edit a **Logo** that will appear on your company page. (Please note your company page will be available in a future iteration of Control Center.)

You can set a **Cover image** to be the background header of your company page. If you do not set an image by clicking **Upload**, the **Primary** color as set in the **Brand colors** section will be used.

{{< figure src="/attachments/developerportal/control-center/brand.jpg" >}}

## 8 Onboarding {#onboarding}

On the **Landing Page** tab of this page, you can customize your company's onboarding landing page and use that instead of the standard Mendix Platform onboarding page for new platform users from your company. This helps users to understand your company’s way of working on the Mendix Platform and enables them to get started more quickly. You can share your company’s best practices on Mendix Platform usage, and you can link to videos, company documentation, and other content.

You can start configuring the sections and blocks of your landing page from a standard template or from scratch. You can work on drafts and preview how the page looks before publishing for your company's new platform users.

{{< figure src="/attachments/developerportal/control-center/onboarding-landing.png" >}}

Once you publish your landing page, this will be where new users land after signing up with your company's domains on Mendix. This page is also accessible via the **Getting Started with Mendix** link in the upper-right navigation menu. If you do not have a company onboarding landing page set up, this link will lead to the default Mendix onboarding page.

On the **Onboarding Email** tab, you can customize the onboarding email that users of your domains receive when they join the Mendix Platform. You can provide a link to your company's onboarding page, share a welcome message, or present company guidelines for using Mendix. You can create a draft email before sending it.

{{< figure src="/attachments/developerportal/control-center/onboarding-email.png" >}}

## 9 Security {#security}

On the **Password Policy** tab of this page, you can set the password expiration policy for all company members. If you do not want the passwords to expire, toggle **Passwords of company members never expire** to **On**.

On the **Single Sign-On** tab, you can set up an identity federation between the Mendix Platform and your corporate identity provider. We call this feature *Bring Your Own Identity Provider (BYOIDP)* and you can find more information in [How to Set Up an SSO (BYOIDP)](/developerportal/control-center/set-up-sso-byoidp/).

On the **Security History** tab, you can click **Show Security History** to open a page (in a new browser tab) that presents an audit trail of security-related changes in **App History** and **Member History**. You can search through and view details on these changes as well as export the audit trail to a CSV file.

{{< figure src="/attachments/developerportal/control-center/security.jpg" >}}

## 10 Cloud {#cloud}

{{% alert color="warning" %}}
This feature is not yet publicly available. Please talk to your Customer Success Manager to enable this page.
{{% /alert %}}

The **Paid Environments** tab on this page presents an overview of the licensed Mendix Cloud environments allocated to your company. This includes information on an environment's [Resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) and whether the [Fallback](/developerportal/deploy/mendix-cloud-deploy/#fallback) option has been purchased as part of a Premium plan.   

{{< figure src="/attachments/developerportal/control-center/cloud.jpg" >}}

When you select one or more environments via the check boxes on the **Paid Environments** or **Free Environments** tab, a context menu appears at the bottom of the screen with the option for exporting environment details to an *.xlsx* file.

There are links to three other pages from this tab to allow you to [make requests to Mendix Support](/developerportal/support/submit-support-request/#submitting) to do the following:

* [Add Node](/developerportal/support/new-app-node-request-template/#new-node) – requests a new app node for a specific app and environment
* [Resize Environment](/developerportal/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/developerportal/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

{{% alert color="info" %}}
These links will open in a new browser tab.
{{% /alert %}}

The **Free Environments** tab presents details on your company's free environments.

## 11 Subscriptions {#subscriptions}

{{% todo %}}1. Check if the order of the sections reflect the final product. 2. Check whether the final name of the menu item is Subscriptions. 3. Add a screenshot of the final page.{{% /todo %}}

Before the licenses are renewed for your company, Mendix checks if your company's payment method is still valid. If it is expired, you will receive an email that asks you to update your company's payment method on the **Billing Accounts** page.

The **Billing Accounts** page shows the details of your company's existing billing accounts. These accounts are on the company level. If your company has multiple billing accounts, you can select a billing account from the drop-down list.

You can find **Payment Method** at the bottom of the page. Depending on the payment method, you see either an invoice or the credit card data.

{{% alert color="info" %}}You might have used different credit cards with the same billing account when purchasing premium content at the marketplace in the past. These cards are not shown here. Only the last credit card which is register as the credit card for your company's billing account is shown here. This card will also be used for the renewal of the existing subscriptions.{{% /alert %}}

If the credit card is expired, the credit card data is shown in red. To update the credit card data, click **Update**, fill in the new credit card data, and then click **Update Details**.

## 12 Data Hub {#data-hub}

An organization's Data Hub requires governance of the data-sharing policy down to the practical details of curating registered assets. A Mendix Admin can oversee these functions and also assign curators that can perform governance tasks for their apps.

For details on these tasks, see [Data Hub Administration](/developerportal/control-center/data-hub-admin/).

## 13 Marketplace Content {#marketplace-content}

The **Marketplace Content** page offers a dashboard where you can manage the visibility of public and [private Marketplace components](/appstore/general/app-store-overview/#company-content) in Studio for your company's users. Currently, you can only configure the visibility of widgets. 

{{< figure src="/attachments/developerportal/control-center/marketplace-content.png" >}}

The list shows all the Marketplace components for which you have the curation options. This list includes all the public Marketplace components that can be used in Studio and all the private Marketplace components of your company. You can configure whether any of these components is visible in Studio to your company's users (whether components appear in the **Toolbox** in Studio).

The search box above the list enables you to search for a Marketplace component. The drop-down list on the right side allows you to filter for public or private Marketplace components.

The list has the following columns:

* **Product Name** – This shows the component name. Clicking the name opens the Marketplace page of this component.

* **Content Type** – This shows the type of the component.

  {{% alert color="info" %}}Currently, you can only configure the visibility of widgets. Therefore, you can only find widgets in this list.{{% /alert %}}

* **Content Last Updated** – This shows the date when a component was last updated. The most recently updated component is shown on top.

* **Studio Visibility** – You can toggle the button to configure whether the component is visible in Studio's **Toolbox** to your company's users. 

## 14 Documents in This Category
