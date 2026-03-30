---
title: "Submitted Requests"
url: /control-center/submitted-requests/
description: "Describes the Submitted Requests page in the Mendix Control Center."
weight: 20
no_list: true
aliases:
    - /control-center/private-marketplace/
---

## Introduction

The **Submitted Requests** page gives you the governance capabilities to approve or decline a request for adding a new component or a new version of an existing component to your organization's Marketplace. It gives you the following benefits:

* Enhanced security: It allows you to mitigate security risks by ensuring that only vetted and approved components are added to the company’s Marketplace.
* Company guidelines assurance: It enables you to meet regulatory requirements and internal policies by thoroughly reviewing components.
* Efficient management: It offers a centralized approval process to save time and resources, preventing additional communication outside of the platform. 

{{% alert color="info" %}}As a Mendix Admin or component owner, you can always unpublish content from the Marketplace of your organization. This can help your organization keep its private Marketplace neat, with only relevant company content. To do so, go to [Company Content](/appstore/home-page/#company-content) in the Marketplace home page, click the {{% icon name="three-dots-menu-horizontal" %}} icon on the component card, then select **Unpublish all versions**. {{% /alert %}}

The **Submitted Requests** page contains the following tabs: 

* [Pending Approvals](#pending-approvals)
* [Approval Settings](#approval-settings)
* [Approval History](#approval-history)

## Pending Approvals {#pending-approvals}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-pending-approvals.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

On the **Pending Approvals** tab, you can manage all pending requests.

The **Pending Approvals** list shows all the submission requests that need to be approved or rejected, with the following details:

* **Component Name** – The name of the component for which there is a pending request.
* **Content Type** – The type of the component for which there is a pending request.
* **Version** – The version of the component for which there is a pending request.
* **Studio Pro Version** – The Studio Pro version which is compatible with the component for which there is a pending request.
* **Submitter** – Te name of the request submitter.
* **Submitted on** – The date when the request is submitted.

### Request Details

If you click the component name of a request in the **Pending Approvals** list, the details of the request open in a new page. Here, you can check all the provided information about the component, download the *•mpk* file, and approve or decline the request.

At the top of the page, you can find following buttons:

* **Approve** – Click this button to approve the request. After you approve the request, the submitter receives a notification, and the component is published on your company's Marketplace.    
    From the approval confirmation window, you can add the company-approved badge to the approved component.
* **Decline** – Click this button to reject the request. You can also add a reason. After you decline the request, the submitter receives a notification.
* **Download** – Click this button to download the *.mpk* file of the component.

The request details page also includes the following tabs:

* **General** – This tab shows general information about the component, such as content type, category, license, description, and cover image. The right side of the screen shows the submitter's name and email, the activity log, and the technical details of the component, such as the compatible Mendix version, component ID, and UUID.

* **Package** – This tab shows the information and the version of the *.mpk* file and the release notes.

  {{% alert color="info" %}}If the content type of the component is **Industry Template**, this tab is optional. If the content type of the component is **Solution Content type**, the tab is unavailable.{{% /alert %}}

* **Documentation** – This tab shows the documentation and screenshots, as well as the link to the demo if there is one.

* **Capabilities** – This tab shows additional information about content types such as **Solution** and **Industry Template**. 

## Approval Settings {#approval-settings}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-approval-settings.png" max-width=50% alt=''displaying-company-approved-mp-content'' >}}

The **Approval Settings** tab allows you to configure settings for the following governance capabilities:

{{% alert color="info" %}}All the settings are turned off by default.{{% /alert %}}

* **Company Admin must approve submissions of new components** – If you turn on this toggle, when a new component is submitted to the Marketplace, a company Admin needs to approve the submission before the component is published to the Marketplace. The submission is displayed on the [Pending Approvals](#pending-approvals) tab before it gets approved or declined.

  {{% alert color="info" %}}This setting only affects the submission of a new component. After you approve the submission, developers can later directly add new versions of the component to the Marketplace without an approval from a company Admin, unless you also turn on the toggle **Company Admin must approve submissions of new component versions**. {{% /alert %}}

  Turning off this toggle has the following consequences:

    * The **Company Admin must approve submissions of new component versions** toggle is turned off automatically.
    * All pending requests get approved automatically.
    * Developers can directly add components to the Marketplace, without an approval from a company Admin.

* **Company Admin must approve submissions of new component versions** – If you turn on this toggle, when a new version of a component is submitted to the Marketplace, a company Admin needs to approve the submission before the new version is published to the Marketplace. The submission is displayed on the [Pending Approvals](#pending-approvals) tab before it gets approved or declined.

  If you turn off this toggle, developers can directly add new versions of an existing component to the Marketplace, without approval from a company Admin.

* **Receive emails notifications when a submission is waiting to be approved** – If you turn on this toggle, when there is a new submission request, you get a notification.

  {{% alert color="info" %}}This setting only affects your notifications, not the notifications of other Mendix Admins in your organization.{{% /alert %}}

## Approval History {#approval-history}

{{< figure src="/attachments/control-center/marketplace/submitted-requests/submitted-requests-approval-history.png" max-width=100% alt=''displaying-company-approved-mp-content'' >}}

The **Approval History** tab lists all the requests that were approved or declined in the history.

The list shows the following details:

* **Component Name** – This shows the name of the component in the request.
* **Content Type** – This shows the type of the component in the request.
* **Action** – This shows whether the component in the request got **Published** or **Declined**.
* **Admin** – This shows the name of the Mendix Admin who approved or declined the request.
* **Date** – This shows the date when the request got approved or declined.
* **Reason** – This shows the reason why the request got approved or declined.
