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

When you sign up on the Mendix Platform, you are able to create new apps, invite other users to your app teams, deploy your apps, and invite app end-users to give feedback, among many other activities. Insights into these company activities are provided in Control Center in one central overview. These insights will help you to be in control and remain aware of everything happening within the Mendix landscape of your company.

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

### 3.1 Active and Deactivated Apps {#active-deactivated}

#### 3.1.1 Overview {#overview}

On the **Active Apps** tab and the **Deactivated Apps** tab, you can see an overview of the active and deactivated apps that belong to your company.

When you select one or more apps via the checkboxes in the list, a context menu appears at the bottom of the screen with options for exporting app details to an *.xlsx* file, deactivating apps (on the **Active Apps** tab) or activating apps (on the **Deactivated Apps** tab), and deleting an app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on the Mendix Cloud.
{{% /alert %}}

{{% alert color="info" %}}
In the overview, you can activate or deactivate up to 100 apps at a time and delete 1 app at a time.
{{% /alert %}}

The consequences of deactivating and deleting an app are as below:

| | Deactivating an App | Deleting an App |
| --- | --- | --- |
| App code repository stays persistent | {{< figure src="/attachments/developerportal/control-center/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| App members can access the project code repository | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| App stays persistent | {{< figure src="/attachments/developerportal/control-center/check-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| App members can access the app in the Developer Portal | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |
| Cloud environment stays persistent | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} | {{< figure src="/attachments/developerportal/control-center/cross-mark.svg" >}} |

#### 3.1.2 App Details {#app-details}

If you click the name of an app in the overview list, a page opens and shows the details of this app.

If the app is not a licensed app, you can see the **...** icon on the upper-right corner of the page. If the app is active, then you have the options to deactivate the app and delete the app; and if the app is deactivated, then you have the options to activate the app and delete the app.

{{% alert color="info" %}}
Deleting and deactivating apps is currently not supported for licensed apps or apps that are not running on the Mendix Cloud. For the consequences of these operations, see the table in the [Overview of Apps](#overview) section.
{{% /alert %}} 

The app details page has the following tabs:

* **App Info** – This tab has the **Description** and **App ID** fields, which are also available on the [General Settings](/developerportal/collaborate/general-settings/) page for your app in the Developer Portal.
* **Members** – This tab presents the internal members and external members of the app.
    * You can directly deactivate an internal member from the app by clicking their name and selecting **Deactivate Member**.
    * For other member management options, click **Manage Members**, which will open the **Security** > [Team](/developerportal/general/team/#managing) page. As a Mendix Admin, you can also add yourself to a team via this page.
* **Environments** – This tab shows all the Mendix Cloud environments. You can delete a free Mendix Cloud environment on this tab. Once the free environment is deleted, all data will be removed. However, the app members can still access the associated app repository in the Developer Portal.
* **App Roles** – This tab presents the app team roles defined via the **Default App Roles** tab and/or customized for a particular app

### 3.2 Default App Roles

The **Default App Roles** tab shows the default [team roles](/developerportal/general/app-roles/#team-roles) assigned for every new app created in your company. Hovering over a role brings up options to **Delete** and **Edit** the role. Click **Add Role** to add a new default role, which includes permissions on accessing [Team Server](/developerportal/general/team-server/) and [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/) information.

{{< figure src="/attachments/developerportal/control-center/roles.jpg" >}}

## 4 Members {#members}

Members are users who can view and/or edit an app.

### 4.1 Active and Deactivated Members

On the **Active Members** tab and the **Deactivated Members** tab, you can see an overview of the active and deactivated members of your company.

When you click a member's name, a pop-up window opens with their member profile. The profile displays the apps of which they are a member as well as their **App role** for each app. Click an app name to go to the [details page](#app-details) of this app.

When you select members in the lists on these tabs, a context menu appears with options for exporting member details to an *.xlsx* file and deactivating (on the **Active Members** tab) or activating (on the **Deactivated Members** tab) members.

For security reasons, we recommend that you deactivate an employee that is leaving your company (if the employee returns to your company, they can be activated as a member again).

{{% alert color="info" %}}
You cannot deactivate yourself.
{{% /alert %}}

### 4.2 External Members

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

### 6.1 Company Details {#company-details}

On the **Company Details** tab of this page, you can edit your **Company Name** and **Description**.

You can request new **Company Email Domains** by clicking **Add Domain**, upon which a request is sent to [Mendix Support](/developerportal/support/). Once a domain is added, every user who signs up to Mendix with that email domain will be assigned to your company.

If you have [configured single sign on using BYOIDP](/developerportal/control-center/set-up-sso-byoidp/), you will have to wait until the domain has been added, then deactivate and reactivate BYOIDP to pick up the new email domain. It is not possible to add email domains which do not use single sign-on if it is activated for your company.

{{< figure src="/attachments/developerportal/control-center/company-email-domains.png" width="650px" >}}

You can also provide a specific **Security Contact** who is informed if there are critical security issues with the Mendix Platform and platform-supported Marketplace components. Mendix strongly recommends applying a team email address or a functional mailbox instead of a personal individual email address.

After you click **Add security contact** and add the required **Name** and **Email** address, a confirmation email is sent to the proposed contact. The recipient has seven days to click the link in the email and validate the Security Contact request. After seven days, the pending request is automatically removed. If the recipient has not received the confirmation email but is still within the seven-day validation timeframe, you can click **Resend confirmation email**.

For an existing **Security Contact**, there are two menu options available:

{{< figure src="/attachments/developerportal/control-center/security-contact.png" >}}

Click **Edit** to edit the Security Contact's **Name**.

Click **Delete** to delete the existing Security Contact. This is the first step in changing a validated Security Contact. After you make the deletion, you can add the new Security Contact.

For more information on security issues, see [Security Advisories](/releasenotes/security-advisories/).

### 6.2 Mendix Admins

The **Mendix Admins** tab lists all the current Mendix Admins in your company. A Mendix Admin will normally be someone in the IT department of your company, and they will have full access to Control Center to perform all available tasks. 

To add a new admin, click **Add Mendix Admin**. To remove an admin, hover over their name in the list and click **Remove**.

{{< figure src="/attachments/developerportal/control-center/admin.jpg" >}}

{{% alert color="info" %}}
It is not possible to remove yourself as a Mendix Admin.
{{% /alert %}}

## 7 Company Brand {#company-brand}

On this page, you can upload, edit, or remove a **Company Logo**. The company logo uploaded here will appear across the platform where it is used. For instance, it will be displayed on your published Marketplace content and available for usage in your [company onboarding](#onboarding).

You can upload, edit, or remove a **Cover image**. The cover image uploaded here will be available for usage in your company onboarding.

{{< figure src="/attachments/developerportal/control-center/company-brand.png" >}}

## 8 Onboarding {#onboarding}

On the **Landing Page** tab of this page, you can customize your company's onboarding landing page and use that instead of the standard Mendix Platform onboarding page for new platform users from your company. This helps users to understand your company’s way of working on the Mendix Platform and enables them to get started more quickly. You can share your company’s best practices on Mendix Platform usage, and you can link to videos, company documentation, and other content.

You can start configuring the sections and blocks of your landing page from a standard template or from scratch. You can work on drafts and preview how the page looks before publishing for your company's new platform users.

{{< figure src="/attachments/developerportal/control-center/onboarding-landing.png" >}}

When you configure the landing page, if you turn on the **Include company logo** toggle and the **Include company header image** toggle on the left side, and then click the **Update Company Branding** button on the top, then the **Company Logo** and **Cover Image** currently set in the [Company Brand](#company-brand) page will be used on your landing page.

{{< figure src="/attachments/developerportal/control-center/update-company-branding.png" >}}

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

The **Paid Environments** tab on this page presents an overview of the licensed Mendix Cloud environments allocated to your company. This includes information on an environment's [Resource pack](/developerportal/deploy/mendix-cloud-deploy/#resource-pack) and whether the [Fallback](/developerportal/deploy/mendix-cloud-deploy/#fallback) option is included as part of a Premium plan.   

{{< figure src="/attachments/developerportal/control-center/cloud.jpg" >}}

When you select one or more environments via the checkboxes on the **Paid Environments** or **Free Environments** tab, a context menu appears at the bottom of the screen with the option for exporting environment details to an *.xlsx* file.

There are links to three other pages from this tab to allow you to [make requests to Mendix Support](/developerportal/support/submit-support-request/#submitting) to do the following:

* [Add Node](/developerportal/support/new-app-node-request-template/#new-node) – requests a new app node for a specific app and environment
* [Resize Environment](/developerportal/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/developerportal/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

{{% alert color="info" %}}
These links will open in a new browser tab.
{{% /alert %}}

The **Free Environments** tab presents details on your company's free environments.

## 11 Entitlements {#entitlements}

{{% alert color="info" %}}
This feature is currently in Beta. For more information about Beta features, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

The **Entitlements** page is a self-service tool that displays the transactions (such as purchases of cloud credits, or provisioning of new environments) registered for your organization. You can use the page to monitor your resource entitlements and your consumption of cloud credits.

{{< figure src="/attachments/developerportal/control-center/entitlements.png" alt="entitlements page" >}}

## 12 Deployed Apps {#deployed-apps}

{{% alert color="info" %}}
This feature is currently in Beta. For more information about Beta features, see [Beta Releases](/releasenotes/beta-features/).
{{% /alert %}}

The **Deployed Apps Overview** page is a self-service tool that enables you to provision and offboard environments.

The **Deployed Apps Overview** page shows a list of all the apps within your company. You can use it to view an app's name, ID, technical contact, or status. The page has separate tabs for **Mendix Cloud Apps** and **Free Apps**.

{{< figure src="/attachments/developerportal/control-center/apps-overview.png" alt="Deployed Apps - apps overview" >}}

You can click the name of an app to see a list of environments available for the app.

{{< figure src="/attachments/developerportal/control-center/cloud-provisioning.png" alt="cloud provisioning page for an app" >}}

Click the icon in the top right corner to access the following pages that allow you to [make requests to Mendix Support](/developerportal/support/submit-support-request/#submitting):

* [Resize Environment](/developerportal/support/new-app-node-request-template/#resize) – requests a container size change
* [Offboard Environment](/developerportal/support/new-app-node-request-template/#offboard) – requests that an app is offboarded

### 12.1 Adding a New Environment

To add a new environment for your app, click the name of an app, and then click the **Add Environment** button. You must specify the following information:

* **Environment Name** – Enter a name for your new environment. The name must be unique (that is, your app cannot have more than one environment with the same name).
* **Resource Pack** – Select the resources required for the new environment. The page displays the resources included in each resource pack, and their cost in cloud credits.
* **Production Environment** – Indicate whether the environment will be used for production.

{{< figure src="/attachments/developerportal/control-center/new-environment.png" alt="adding a new environment" >}}

### 12.2 Offboarding an Environment

To offboard an environment, click **Offboard**, which is available for stopped environments. After that, confirm that you have made any necessary backups, and type *Offboard* to confirm.

{{< figure src="/attachments/developerportal/control-center/offboarding.png" alt="confirming the offboarding" >}}

{{% alert color="warning" %}}
Offboarding an environment deletes it permanently. You are responsible for making a backup of the environment in case you need it in the future.
{{% /alert %}}

### 12.3 Changing the Technical Contact of an App

To quickly change the [Technical Contact](/developerportal/general/app-roles/#technical-contact) for your app, click **Edit** by the name of the contact.

{{< figure src="/attachments/developerportal/control-center/edit-technical-contact.png" alt="changing the technical contact" >}}

{{% alert color="info" %}}
You may only have one Technical Contact per app. When you change the Technical Contact, both the new and the old contact receive a notification email about the change.
{{% /alert %}}

## 13 Catalog {#catalog}

An organization's Catalog requires governance of the data-sharing policy down to the practical details of curating registered assets. A Mendix Admin can oversee these functions and also assign curators that can perform governance tasks for their apps.

For details on these tasks, see [Catalog Administration](/developerportal/control-center/catalog-admin/).

## 14 Portfolios {#portfolios}

The **Portfolios** page offers governance features for [portfolio management](/developerportal/portfolio-management/) in your company. You can have an overview of all portfolios in your company, manage portfolio access, delete portfolios, reject or approve requests for changes of portfolio privacy settings. 

The **Portfolios** page contains three tabs: [All Portfolios](#all-portfolios), [Alerts](#alerts), and [Privacy Requests](#privacy-requests).

{{% alert color="info" %}}

As a Mendix Admin, you cannot directly see the content of a portfolio. You need to have [portfolio access](#access-management) for this. You can give yourself portfolio access if needed.

{{% /alert %}}

### 14.1 All Portfolios {#all-portfolios}

The **All Portfolios** tab lists all portfolios in your company. Here you can [manage portfolio access](#access-management) and [delete portfolios](#delete-portfolio). In the search box, you can search for a portfolio by its name.

In the list, you can see the following items:

* **Portfolio Name** – This is the name of the portfolio. Clicking the name opens a pop-up window that shows the general information of the portfolio and the list of the Portfolio Managers.
* **Managers** – This shows the number of Portfolio Managers in this portfolio.
* **Members** – This shows the number of users who have access to this portfolio.
* **Privacy** – This shows the current privacy settings of the portfolio.
  
    * **Private** –  A private portfolio is not discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a private portfolio need an invitation.
    * **Restricted** – A restricted portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a restricted portfolio need an invitation.
  
* **Created** – This shows the date on which the portfolio was created.

* **Last Modified** – This shows the date on which the portfolio was last modified.

* Ellipsis (**...**) – Clicking the button opens a menu with the following items:

    * **Access management** – Selecting this brings you to the [Access Management](#access-management) page.

    * **Delete** – Selecting this allows you to [delete the portfolio](#delete-portfolio) permanently together with all the data in the portfolio.

{{% alert color="info" %}}

If a portfolio has an alert icon (**⚠**), that means it no longer has a Portfolio Manager. You can assign new Portfolio Managers to the portfolio or delete the portfolio. All the portfolios that no longer have a Portfolio Manager are also listed on the [Alerts](#alerts) tab.

{{% /alert %}}

#### 14.1.1 Access Management {#access-management}

After you click the ellipsis button (**...**) in the list on the [All Portfolios](#all-portfolios) tab or the [Alerts](#alerts) tab, you can choose **Access Management** to open the **Access Management** page.

In the search box, you can search for a user by the user name, email, company, status, or role.

The **Add Users** button on the upper-right corner allows you to invite new users to the portfolio using their email addresses.

The list shows all users who have access to the portfolio as well as the pending portfolio invitations. In the list, you can see the following items:

* **User Name** – This shows the user name.
* **Email** – This shows the email of the user.
* **Company** – This shows the company where the user works.
* **Status** – This shows the status of the portfolio access of the user.
    * **Active** – The user has access to the portfolio.
    * **Pending** – The user still needs to accept the invitation to the portfolio.
* **Role** – This shows the portfolio access role of the user. For more information about different roles and permissions, see the [Access Management](/developerportal/portfolio-management/#access-management) section in *Portfolio Management*.
* Ellipsis (**...**) – Clicking the button opens a menu with the following items:
    * **Edit** – Selecting this allows you to change the role of the user.
    * **Remove** – Selecting this allows you to remove the user from the portfolio.

#### 14.1.2 Deleting a Portfolio {#delete-portfolio}

After you click the ellipsis button (**...**) in the list on the [All Portfolios](#all-portfolios) tab or the [Alerts](#alerts) tab, you can choose **Delete** to delete the portfolio.

{{% alert color="warning" %}}

Deleting a portfolio means that you permanently delete the portfolio, including all the data in the portfolio. This change cannot be reverted. 

{{% /alert %}}

The **Delete Portfolio** dialog box opens. If you decide to continue, type *DELETE* in the text box, and click **Delete**.

### 14.2 Alerts {#alerts}

The **Alerts** tab lists all the portfolios that no longer have a Portfolio Manager. You can assign new Portfolio Managers to a portfolio or delete the portfolio by clicking the ellipsis button (**...**) on the list and selecting the corresponding item.

In the list, you can see the following items:

* **Portfolio Name** – This is the name of the portfolio. Clicking the name opens a pop-up window that shows the general information of the portfolio and the list of the Portfolio Managers.

* **Managers** – This shows the number of Portfolio Managers in this portfolio.

* **Members** – This shows the number of users who have access to the portfolio.

* **Privacy** – This shows the current privacy settings of the portfolio.
    * **Private** –  A private portfolio is not discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a private portfolio need an invitation.
    * **Restricted** – A restricted portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a restricted portfolio need an invitation.

* **Created** – This shows the date on which the portfolio was created.
* **Last Modified** – This shows the date on which the portfolio was last modified.

* Ellipsis (**...**) – Clicking the icon opens a menu with the following items:

    * **Access management** – Selecting this brings you to the [Access Management](#access-management) page.

    * **Delete** – Selecting this allows you to [delete the portfolio](#delete-portfolio) permanently together with all the data in the portfolio.

### 14.3 Privacy Requests {#privacy-requests}

On the **Privacy Requests** tab, you can decide whether a Mendix Admin needs to approve the creation of a restricted portfolio or any change of privacy settings of an existing portfolio. You can use the toggle on the tab to turn it on or off. 

{{< figure src="/attachments/developerportal/control-center/admin-curation-toggle.png" alt="Mendix Admins must approve changes to portfolio privacy settings" >}}

The toggle is turned off by default. If the toggle is turned on, as a Mendix Admin, you automatically get a [notification](/developerportal/#notifications) whenever someone creates a restricted portfolio or changes the privacy settings of an existing portfolio. 

On the **Privacy Requests** tab, you can view all the pending requests. You can approve or reject a request here. Every request contains the following items:

* **Portfolio Name** – This shows the name of the portfolio.
* **Requested By** – This shows the name of the user who made the request.
* **From** – This shows the current privacy settings.
* **To** – This shows the new privacy settings that are being requested.
* **Date** – This shows the date on which the request was made.
* **Reject** – Clicking this rejects the request. When you reject a request, optionally you can fill in a reason to inform the requester.
* **Approve** – Clicking this approves the request.

{{% alert color="info" %}}
After a request is either rejected or approved, a notification is sent to the requester. If the Mendix Admin fills in the reason for the rejection, the reason is also shown to the requester.
{{% /alert %}}

## 15 Documents in This Category
