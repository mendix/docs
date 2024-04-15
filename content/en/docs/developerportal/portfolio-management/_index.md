---
title: "Portfolio Management"
url: /developerportal/portfolio-management/
weight: 25
description: "Describes the Mendix Portfolio Management app."
tags: ["Portfolio Management"]
#The anchor #portfolios-settings and #privacy-settings below is mapped, so it should not be removed or changed. If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Portfolio Management](https://portfolio.mendix.com) tool is available to all Mendix customers. It enables staying informed about initiatives and managing them in the different development stages. It provides portfolio managers, business stakeholders, and developers with everything they need to collaborate effectively in one place and bring new initiatives to the Mendix Platform. 

With the Portfolio Management tool, you can manage [active initiatives](#initiative-overview) and [archived initiatives](#archive) in a portfolio. If you are Portfolio Managers, you can also [manage access](#access-management) and configure [portfolio settings](#portfolio-settings) of a portfolio.

To start the Portfolio Management app, go to the Developer Portal, open the [Global Navigation menu](/developerportal/) ({{% icon name="layout-rounded-1-filled" %}}), and select **Portfolio**.

## 2 Portfolio Landscape Overview {#portfolio-landscape}

When you start the Portfolio Management app for the first time, an introduction page opens. The introduction page describes the new features and gives helpful information. You can click **Get Started** to open the **Portfolio Landscape Overview** page. After that, when you start the Portfolio Management app, the **Portfolio Landscape Overview** page directly opens. You can click **Learn more about Portfolio Management** to go back to the introduction page.

### 2.1 My Portfolios vs Company Portfolios {#my-porfolios-vs-company-portfolios}

The **Portfolio Landscape Overview** page contains two sections: **My Portfolios** and **Company Portfolios**. A section only appears if there is at least one [portfolio card](#portfolio-card) in that section.

{{< figure src="/attachments/developerportal/portfolio-management/portfolio-landscape-overview.png" class="image-border" alt="portfolio-landscape-overview" >}}

* **My Portfolios** – This section shows all the portfolios where you are a portfolio member. Clicking a portfolio card opens the portfolio.

* **Company Portfolios** – This section shows all the restricted and open portfolios in your company, for which you are not a portfolio member. 
    * Restricted portfolios – Clicking the portfolio card shows more details about the restricted portfolio. To join a restricted portfolio, click **Request to Join** on the portfolio card. A Portfolio Manager needs to approve this [access request](#access-requests).
    * Open portfolios – You can directly access the open portfolio by clicking the portfolio card. You will have the same access rights as the Viewer of the portfolio. To join an open portfolio, click **Request to Join** on the lower-left corner after opening the portfolio. A Portfolio Manager needs to approve this [access request](#access-requests).

### 2.2 Portfolio Cards {#portfolio-card}

On the **Portfolio Landscape Overview** page, each portfolio is presented in a card. On a portfolio card, you can see the name of the portfolio, the company to which it belongs, the [privacy settings](#privacy-settings), and the avatars of Portfolio Managers (up to avatars of four Portfolio Managers).

#### 2.2.1 Different Privacy Settings of a Portfolio {#privacy-settings}

{{% alert color="info" %}}A Portfolio Manager change the **Privacy Settings** on the [Portfolio Settings](/developerportal/portfolio-management/#portfolio-settings) page.{{% /alert %}}

Currently, the privacy settings of a portfolio can be private, restricted, or open. The table below shows their differences:

| Portfolio type | Visible in the **Company Portfolios** section?         | Can users access the portfolio without joining the portfolio? | Can Portfolio Manager add users to the portfolio? * | Can users apply to join the portfolio? ** |
|-|-|-|-|-|
| Private        | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="remove-circle-filled" color="red" >}}|
| Restricted     | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}.|
| Open           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |{{< icon name="checkmark-circle-filled" color="green" >}}|{{< icon name="checkmark-circle-filled" color="green" >}}|

\* A Portfolio Manager can [add users to the portfolio](/developerportal/portfolio-management/#add-users).

** A user can apply to join the portfolio by clicking the **Request to Join** on the  portfolio card. A Portfolio Manager needs to approve this [access request](/developerportal/portfolio-management/#access-requests).

### 2.3 Creating a New Portfolio {#create-portfolio}

On the **Portfolio Landscape Overview** page, you can create a new portfolio as follows:

1. On the upper-right corner of the page, click **Create Portfolio**. The **New Portfolio** dialog box opens.

2. Enter **Portfolio Name** and **Description** for the new portfolio.

3. For **Privacy Settings**, select **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section, above.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve the creation of a restricted or open portfolio. In that case, a Mendix Admin will receive a notification about your request and can approve or reject your request from the [Control Center](/control-center/portfolios/#privacy-requests). The **Privacy Settings** of the portfolio will be **Private** until a Mendix Admin approves your request.{{% /alert %}}

4. For **Prioritization Model**, select [WSJF Prioritization](/developerportal/portfolio-management/#wsjf) or [RICE Prioritization](/developerportal/portfolio-management/#rice).

5. From the **Currency** drop-down list, select the default currency for this portfolio.

6. Click **Create**.

The portfolio is created. You are the first Portfolio Manager of this portfolio. You can start [inviting other people](#add-users) to the portfolio.

### 2.4 Opening a Portfolio 

When you click a portfolio card to which you have access, the portfolio opens with a menu on the left side. 

{{< figure src="/attachments/developerportal/portfolio-management/opened-portfolio.png"  class="image-border">}}

Clicking a menu item opens the corresponding page:

* [Initiatives Overview](#initiatives-overview)
* [Archive](#archived-initiatives)
* [Access Management](#access-management)
* [Portfolio Settings](#portfolio-settings) (only available for Portfolio Managers)





## 5 Access Management {#access-management}

The **Access Management** page allows you to view and manage user access to the portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/access-management.png" class="image-border" >}}

### 5.1 Members {#members}

The **Members** tab lists all the users that have portfolio access. You can search for a user by their user name, email, or company. You can also filter users by their role and status. The list contains the following items:

* **User Name** – This is the name of the user.

* **Email** – This is the email of the user.

* **Company** – This shows the company to which the user belongs.

* **Status** – This shows whether the user is active or deactivated.

  {{% alert color="info" %}}A Mendix Admin can activate or deactivate a user on the [Members](/control-center/members/#active-deactive-members) page in Control Center.{{% /alert %}}

* **Role** – This is the role of the user. A user can be a Portfolio Manager, Contributor, or Viewer. For more information about the permissions of each role, see the table below in this section.

* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) (only available to Portfolio Managers) – Clicking the button opens a menu with the following items:

    * **Edit Role** – Selecting this allows you to change the role of the user.
    * **Remove** – Selecting this allows you to remove the user from the portfolio. 

The table below shows the permissions of Portfolio Managers, Contributors, and Viewers:

| Action | Portfolio Manager | Contributor | Viewer\* |
| --- | --- | --- | --- |
| Invite users | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Remove user permissions and roles | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Update user permissions and roles | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| View user access information | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Manage portfolio settings | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Delete the portfolio | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Create initiatives | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Edit existing initiatives | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Archive and restore initiatives | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Delete initiatives | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| View initiative details | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Create comment | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Edit comments | Own comments | Own comments | Own comments |
| Delete comments | Own comments | Own comments | Own comments |
| View comments | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Add initiative attachments | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Delete initiative attachments | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| View and download initiative attachments | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Export and import initiatives | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| Link and unlink epics | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}} |
| View linked epics | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

\* For open portfolios, all company members (other than the portfolio members) have the same rights as the Viewer of the portfolio.

#### 5.1.1 Leaving the Portfolio

To leave the portfolio, click the **Leave** button on the right side above the member list. 

If you are the only Portfolio Manager of the portfolio, when you click **Leave**, a dialog window opens and asks you to choose one of these two options:

* Delete the portfolio permanently together with all the data in the portfolio when you leave the portfolio; or
* Assign another user to be the new Portfolio Manager before you leave the portfolio.
    * If you choose to assign another user to be the new Portfolio Manager, click **Assign Portfolio Manager**, and then select an existing member and edit their role to Portfolio Manager, or invite a new member to be the new Portfolio Manager.

#### 5.1.2 Adding New Users {#add-users}

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. On the upper-right corner of the **Members** tab, click **Add Users**.
3. In the dialog box, enter the email address of the user who you want to invite. The **Email Address** field also gives a drop-down list with all the active users from your company. You can add multiple email addresses if you need to invite more than one user. The users can be people within your company or outside your company. For users outside your company, their names and profile pictures are not displayed.
4. Select an **Access Role** for the users that you add – **Portfolio Manager**, **Contributor**, or **Viewer**. This determines their access level to all the initiatives in this portfolio.
5. Click **Add to List**.
6. Click **Send Invites**.

The users that you invited receive a notification per email and now appear on the **Access Management** page. 

For users outside your company, they need to accept the invitation. They will appear on the **Pending Invites** tab until they accept or reject the invitation. After they accept the invitation, they will appear in the **Members** tab.

For users within your company, they do not need to accept their invitation. If they have a Mendix account, they will immediately be given access and appear on the **Members** tab. If they do not have a Mendix account, they will appear on the **Pending Invites** tab. After they create a Mendix account and log in to Portfolio Management, they will immediately be given access and appear on the **Members** tab. 

#### 5.1.3 Removing Deactivated Users

{{% alert color="info" %}}Only [Portfolio Managers](#access-management) can remove a deactivated user.{{% /alert %}}

When there are deactivated members in the portfolio, the **Remove Deactivated Users** button becomes available above the list on the right side. Clicking the button allows you to remove all deactivated users from this portfolio in one go. If a deactivated user that you will remove still owns initiatives, these initiatives will no longer have an owner after you remove the user from the portfolio.

### 5.2 Access Requests {#access-requests}

{{% alert color="info" %}}
This tab is only visible to Portfolio Managers.
{{% /alert %}}

Users from the same company can request to join a restricted or open portfolio.

For restricted portfolios, you can request to join from the [Portfolio Landscape Overview](#portfolio-landscape) by clicking **Request to Join** on the portfolio card. For open portfolios, you can request to join by clicking **Request to Join** on the lower-left corner after opening the portfolio. Access requests need to be approved by a Portfolio Manager. Portfolio Managers automatically get a [notification](/developerportal/global-navigation/#notifications) for a new access request.

{{< figure src="/attachments/developerportal/portfolio-management/access-requests.png" >}}

The **Access Requests** tab shows all open access requests for the portfolio. You can search a user by their user name. You can also filter users by their role. The list contains the following items:

* **Requested By** – This is the name and avatar of the user who requested access.
* **Role** – This is the access role that was requested by the user.
* **Date** – This is the date when the request was made.
* **Reject** – Clicking this rejects the request.
* **Approve** – Clicking this approves the request and gives the user access to the portfolio.

### 5.3 Pending Invites {#pending-invites}

{{% alert color="info" %}}
This tab is only visible to Portfolio Managers.
{{% /alert %}}

When a Portfolio Manager invites a user outside the company to join the portfolio, the user gets an invite via email. The user must first accept the invite; then they can access this portfolio. Until the user accepts or rejects the invite, the invite appears on the **Pending Invites** tab. After they accept the invitation, they will appear on the **Members** tab.

The **Pending Invites** tab shows all pending invites of external users. You can search a user by their email. You can also filter users by their role. The list contains the following items:

* **Email** – This shows the email of the invited user.
* **Role** – This shows the access role of the invited user.
* **Invite Date** – This shows the date the invite was sent.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:

    * **Edit Role** – Selecting this allows you to change the access role of the pending invite.

    * **Delete** – Selecting this allows you to cancel the pending invite.

## 6 Portfolio Settings {#portfolio-settings}

{{% alert color="info" %}}
The **Portfolio Settings** page is only available for Portfolio Managers.
{{% /alert %}}

### 6.1 Changing Portfolio Settings

On the **Portfolio Settings** page, Portfolio Managers can change the following settings:

* **Portfolio Name** – Click **Edit Portfolio Details** to change the portfolio name.

* **Portfolio Description** – Click **Edit Portfolio Details** to change the portfolio description.

* **Privacy Settings** – You can set the settings to **Private**, **Restricted**, or **Open**. For details on privacy settings, see the [Different Privacy Settings of a Portfolio](#privacy-settings) section.

    {{% alert color="info" %}}If the toggle on the [Privacy Requests](/control-center/portfolios/#privacy-requests) tab is turned on in Control Center, a Mendix Admin needs to approve any change of **Privacy Settings**. In that case, a Mendix Admin will receive a notification about your change request and can approve or reject your request from Control Center. You can cancel a pending request by clicking **Cancel Request**.{{% /alert %}}
    
* **Stages** – Click **Move Up** ({{% icon name="chevron-up" %}}) or **Move Down** ({{% icon name="chevron-down" %}}) to move a stage upwards or downwards.

    {{< figure src="/attachments/developerportal/portfolio-management/move-upwards-downwards.png" >}}

* **Prioritization Model**

* **Currency**

* **Departments**

* **Locations**

* **Countries**

* **Scope Estimation - Use Cases**

* **Expected Value - Types**

To delete or edit an existing option for a setting, hover over the option to show the **Delete** button ({{% icon name="trash-can" %}}) or the **Edit** button ({{% icon name="pencil" %}}) at the end of the row, and then click the corresponding button.

{{< figure src="/attachments/developerportal/portfolio-management/delete-edit-stage.png" >}}

To add an option for a setting, click **Add Department**, **Add Country**, **Add Stage**, **Add Use Case**, or **Add Value Type** below the corresponding list.

### 6.2 Deleting a Portfolio

1. On the **Portfolio Settings** page, click **Delete** at the bottom of the page. The **Delete Portfolio** Dialog box opens.
2. Read the warning carefully. Deleting a portfolio means that you permanently delete the portfolio, including all the data in it. This change cannot be reverted.
3. If you decide to continue, type *DELETE* in the text box.
4. Click **Delete**. The portfolio is permanently deleted.

{{% alert color="info" %}}A Mendix Admin can also delete a portfolio in the [Portfolios](/control-center/portfolios/#delete-portfolio) section of Control Center.{{% /alert %}}

## 7 Read More

* [Prioritization Models Supported by Portfolio Management](/developerportal/portfolio-management/prioritization-models/)
* [Application Portfolio Management with Low-Code](https://www.mendix.com/application-portfolio-management/)
* [Make Strategic Decisions with Portfolio Management](https://academy.mendix.com/link/paths/145/Make-Strategic-Decisions-With-Portfolio-Management)
* [Why Portfolio Management is Crucial to App Development at Scale](https://www.mendix.com/blog/why-portfolio-management-is-crucial-to-app-development-at-scale/)
