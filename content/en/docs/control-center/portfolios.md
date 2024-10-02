---
title: "Portfolios"
url: /control-center/portfolios/
description: "Describes the Portfolios page in the Mendix Control Center."
weight: 65
no_list: true
---

## Introduction

The **Portfolios** page offers governance features for [portfolio management](/developerportal/portfolio-management/) in your company. You can have an overview of all portfolios in your company, manage portfolio access, delete portfolios, reject or approve requests for changes of portfolio privacy settings. 

The **Portfolios** page contains three tabs: [All Portfolios](#all-portfolios), [Alerts](#alerts), and [Privacy Requests](#privacy-requests).

{{% alert color="info" %}}
As a Mendix Admin, you cannot directly see the content of a portfolio. You need to have [portfolio access](#access-management) for this. You can give yourself portfolio access if needed.
{{% /alert %}}

## All Portfolios {#all-portfolios}

The **All Portfolios** tab lists all portfolios in your company. Here you can [manage portfolio access](#access-management) and [delete portfolios](#delete-portfolio). In the search box, you can search for a portfolio by its name.

In the list, you can see the following items:

* **Portfolio Name** – This is the name of the portfolio. Clicking the name opens a pop-up window that shows the general information of the portfolio, such as the company name, privacy settings of the portfolio, number of active members (deactivated users are not counted), and a list of the Portfolio Managers.
* **Managers** – This shows the number of Portfolio Managers in this portfolio.
* **Members** – This shows the number of active users of this portfolio. The deactivated users are not included in this number.
* **Privacy** – This shows the current privacy settings of the portfolio.

    * **Private** – A private portfolio is not discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a private portfolio need an invitation.
    * **Restricted** – A restricted portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a restricted portfolio need an invitation.
    * **Open** – An open portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. All company members can access an open portfolio without being a portfolio member.

* **Created** – This shows the date on which the portfolio was created.

* **Last Modified** – This shows the date on which the portfolio was last modified.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:

    * **Access management** – Selecting this brings you to the [Access Management](#access-management) page.

    * **Delete** – Selecting this allows you to [delete the portfolio](#delete-portfolio) permanently together with all the data in the portfolio.

{{% alert color="info" %}}

If a portfolio has an alert icon (**⚠**), that means it no longer has a Portfolio Manager. You can assign new Portfolio Managers to the portfolio or delete the portfolio. All the portfolios that no longer have a Portfolio Manager are also listed on the [Alerts](#alerts) tab.

{{% /alert %}}

### Access Management {#access-management}

After you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the list on the [All Portfolios](#all-portfolios) tab or the [Alerts](#alerts) tab, you can choose **Access Management** to open the **Access Management** page. The Access Management page contains two tabs: the **Members** tab and the **Pending Invites** tab.

#### Members {#members}

The **Members** tab shows all users who have access to the portfolio. You can search for a user in the search box by the user name, email, company, or role.

The **Add Users** button on the upper-right corner allows you to invite new users to the portfolio using their email addresses.

The **Remove Deactivated Users** button is available when there are deactivated members in the portfolio. Clicking the button allows you to remove all deactivated users from this portfolio. If a deactivated user that you will remove still owns initiatives, these initiatives will no longer have an owner after you remove the user from the portfolio.

In the list, you can see the following items:

* **User Name** – This shows the user name.
* **Email** – This shows the email of the user.
* **Company** – This shows the company where the user works.
* **Status** – This shows whether the user is active or deactivated.
  
  {{% alert color="info" %}}A Mendix Admin can activate or deactivate a user on the [Members](/control-center/members/#active-deactive-members) page in Control Center.{{% /alert %}}
  
* **Role** – This shows the portfolio access role of the user. For more information about different roles and permissions, see [Access Management](/developerportal/portfolio-management/access-management/).
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking the button opens a menu with the following items:
    * **Edit Role** – Selecting this allows you to change the role of the user.
    * **Remove** – Selecting this allows you to remove the user from the portfolio.

#### Pending Invites {#pending-invites}

When a Portfolio Manager invites a user outside the company to join the portfolio, the user gets an invite via email. The user must first accept the invite, then they can access this portfolio. Until the user accepts or rejects the invite, the invite appears on the **Pending Invites** tab. After they accept the invitation, they will appear on the **Members** tab.

The **Pending Invites** tab shows all pending invites of external users. You can search a user by their email. You can also filter users by their role. The list contains the following items:

* **Email** – This shows the email of the invited user.
* **Role** – This shows the access role of the invited user.
* **Invite Date** – This shows the date the invite was sent.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:
    * **Edit Role** – Selecting this allows you to change the access role of the pending invite.
    * **Delete** – Selecting this allows you to cancel the pending invite.

### Deleting a Portfolio {#delete-portfolio}

After you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) in the list on the [All Portfolios](#all-portfolios) tab or the [Alerts](#alerts) tab, you can choose **Delete** to delete the portfolio.

{{% alert color="warning" %}}

Deleting a portfolio means that you permanently delete the portfolio, including all the data in the portfolio. This change cannot be reverted. 

{{% /alert %}}

The **Delete Portfolio** dialog box opens. If you decide to continue, type *DELETE* in the text box, and click **Delete**.

## Alerts {#alerts}

The **Alerts** tab lists all the portfolios that no longer have a Portfolio Manager. You can assign new Portfolio Managers to a portfolio or delete the portfolio by clicking **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the list and selecting the corresponding item.

In the list, you can see the following items:

* **Portfolio Name** – This is the name of the portfolio. Clicking the name opens a pop-up window that shows the general information of the portfolio, such as the company name, privacy settings of the portfolio, number of active members (deactivated users are not counted), and a list of the Portfolio Managers.

* **Managers** – This shows the number of Portfolio Managers in this portfolio.

* **Members** – This shows the number of active users of this portfolio. The deactivated users are not included in this number.

* **Privacy** – This shows the current privacy settings of the portfolio.
    * **Private** – A private portfolio is not discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a private portfolio need an invitation.
    * **Restricted** – A restricted portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. People who want to access a restricted portfolio need an invitation.
    * **Open** – An open portfolio is discoverable in the **Company Portfolios** section of the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) page in the Portfolio Management app. All company members can access an open portfolio without being a portfolio member.

* **Created** – This shows the date on which the portfolio was created.
* **Last Modified** – This shows the date on which the portfolio was last modified.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:

    * **Access management** – Selecting this brings you to the [Access Management](#access-management) page.

    * **Delete** – Selecting this allows you to [delete the portfolio](#delete-portfolio) permanently together with all the data in the portfolio.

## Privacy Requests {#privacy-requests}

On the **Privacy Requests** tab, you can decide whether a Mendix Admin needs to approve the creation of a restricted or open portfolio or any change of privacy settings of an existing portfolio. You can use the toggle on the tab to turn it on or off. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](/developerportal/portfolio-management/#privacy-settings) section.

{{< figure src="/attachments/control-center/portfolios/admin-curation-toggle.png" alt="Mendix Admins must approve changes to portfolio privacy settings" class="no-border" >}}

The toggle is turned off by default. If the toggle is turned on, as a Mendix Admin, you automatically get a [notification](/developerportal/global-navigation/#notifications) whenever someone creates a restricted or open portfolio or changes the privacy settings of an existing portfolio. 

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
