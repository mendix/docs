---
title: "Access Management"
url: /developerportal/portfolio-management/access-management/
weight: 15
description: "Describes the Access Management page in the Mendix Portfolio Management app."
---

## Introduction

The **Access Management** page allows you to view and manage user access to the portfolio.

{{< figure src="/attachments/developerportal/portfolio-management/access-management.png" >}}

## Members {#members}

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

| Action                                   | Portfolio Manager                                         | Contributor                                               | Viewer\*                                                  |
| ---------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| Invite users                             | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| Remove user permissions and roles        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| Update user permissions and roles        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| View user access information             | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Manage portfolio settings                | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| Delete the portfolio                     | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      | {{< icon name="remove-circle-filled" color="red" >}}      |
| Create initiatives                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Edit existing initiatives                | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Archive and restore initiatives          | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Delete initiatives                       | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| View initiative details                  | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Create comment                           | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Edit comments                            | Own comments                                              | Own comments                                              | Own comments                                              |
| Delete comments                          | Own comments                                              | Own comments                                              | Own comments                                              |
| View comments                            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Add initiative attachments               | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Delete initiative attachments            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| View and download initiative attachments | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |
| Export and import initiatives            | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| Link and unlink epics                    | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="remove-circle-filled" color="red" >}}      |
| View linked epics                        | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} | {{< icon name="checkmark-circle-filled" color="green" >}} |

\* For open portfolios, all company members (other than the portfolio members) have the same rights as the Viewer of the portfolio.

### Leaving the Portfolio

To leave the portfolio, click the **Leave** button on the right side above the member list. 

If you are the only Portfolio Manager of the portfolio, when you click **Leave**, a dialog window opens and asks you to choose one of these two options:

* Delete the portfolio permanently together with all the data in the portfolio when you leave the portfolio; or
* Assign another user to be the new Portfolio Manager before you leave the portfolio.
    * If you choose to assign another user to be the new Portfolio Manager, click **Assign Portfolio Manager**, and then select an existing member and edit their role to Portfolio Manager, or invite a new member to be the new Portfolio Manager.

### Adding New Users {#add-users}

{{% alert color="info" %}}Only [Portfolio Managers](#members) can add new users.{{% /alert %}}

1. Go to **Access Management**.
2. On the upper-right corner of the **Members** tab, click **Add Users**.
3. In the dialog box, enter the email address of the user who you want to invite. The **Email Address** field also gives a drop-down list with all the active users from your company. You can add multiple email addresses if you need to invite more than one user. The users can be people within your company or outside your company. For users outside your company, their names and profile pictures are not displayed.
4. Select an **Access Role** for the users that you add – **Portfolio Manager**, **Contributor**, or **Viewer**. This determines their access level to all the initiatives in this portfolio.
5. Click **Add to List**.
6. Click **Send Invites**.

The users that you invited receive a notification per email and now appear on the **Access Management** page. 

For users outside your company, they need to accept the invitation. They will appear on the **Pending Invites** tab until they accept or reject the invitation. After they accept the invitation, they will appear in the **Members** tab.

For users within your company, they do not need to accept their invitation. If they have a Mendix account, they will immediately be given access and appear on the **Members** tab. If they do not have a Mendix account, they will appear on the **Pending Invites** tab. After they create a Mendix account and log in to Portfolio Management, they will immediately be given access and appear on the **Members** tab. 

### Removing Deactivated Users

{{% alert color="info" %}}Only [Portfolio Managers](#members) can remove a deactivated user.{{% /alert %}}

When there are deactivated members in the portfolio, the **Remove Deactivated Users** button becomes available above the list on the right side. Clicking the button allows you to remove all deactivated users from this portfolio in one go. If a deactivated user that you will remove still owns initiatives, these initiatives will no longer have an owner after you remove the user from the portfolio.

## Access Requests {#access-requests}

{{% alert color="info" %}}
The **Access Requests** tab is only visible to Portfolio Managers.
{{% /alert %}}

Users from the same company can request to join a restricted or open portfolio.

For restricted portfolios, you can request to join from the [Portfolio Landscape Overview](/developerportal/portfolio-management/#portfolio-landscape) by clicking **Request to Join** on the portfolio card. For open portfolios, you can request to join by clicking **Request to Join** on the lower-left corner after opening the portfolio. Access requests need to be approved by a Portfolio Manager. Portfolio Managers automatically get a [notification](/developerportal/global-navigation/#notifications) for a new access request.

{{< figure src="/attachments/developerportal/portfolio-management/access-requests.png" >}}

The **Access Requests** tab shows all open access requests for the portfolio. You can search a user by their user name. You can also filter users by their role. The list contains the following items:

* **Requested By** – This is the name and avatar of the user who requested access.
* **Role** – This is the access role that was requested by the user.
* **Date** – This is the date when the request was made.
* **Reject** – Clicking this rejects the request.
* **Approve** – Clicking this opens a dialog box where you can approve the access request and give the user access to the portfolio. In the dialog box, you also have the option to assign the user an access role different from the one they requested.

## Pending Invites {#pending-invites}

{{% alert color="info" %}}
The **Pending Invites** tab is only visible to Portfolio Managers.
{{% /alert %}}

When a Portfolio Manager invites a user outside the company to join the portfolio, the user gets an invite via email. The user must first accept the invite; then they can access this portfolio. Until the user accepts or rejects the invite, the invite appears on the **Pending Invites** tab. After they accept the invitation, they will appear on the **Members** tab.

The **Pending Invites** tab shows all pending invites of external users. You can search a user by their email. You can also filter users by their role. The list contains the following items:

* **Email** – This shows the email of the invited user.
* **Role** – This shows the access role of the invited user.
* **Invite Date** – This shows the date the invite was sent.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this button opens a menu with the following items:

    * **Edit Role** – Selecting this allows you to change the access role of the pending invite.

    * **Delete** – Selecting this allows you to cancel the pending invite.
