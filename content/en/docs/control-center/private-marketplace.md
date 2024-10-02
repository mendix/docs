---
title: "Private Marketplace"
url: /control-center/private-marketplace/
description: "Describes the Private Marketplace page in the Mendix Control Center."
weight: 70
no_list: true
---

## Introduction

The **Private Marketplace** page gives you the governance capabilities to approve or decline a request for adding a new component or a new version of an existing component to your organization's private Marketplace. It gives you the following benefits:

* Enhanced security: It allows you to mitigate security risks by ensuring that only vetted and approved components are added to the company’s Private Marketplace.
* Company guidelines assurance: It enables you to meet regulatory requirements and internal policies by thoroughly reviewing components.
* Efficient management: It offers a centralized approval process to save time and resources, preventing additional communication outside of the platform. 

{{% alert color="info" %}}As a Mendix Admin, you can always unpublish content from the private Marketplace of your organization. This can help your organization keep its private Marketplace neat, with only relevant company content. To do so, go to [Company Content](/appstore/overview/#company-content) in the Marketplace home page, click the {{% icon name="three-dots-menu-horizontal" %}} icon on the component card, and then select **Unpublish all versions**. {{% /alert %}}

The **Private Marketplace** page contains two tabs: the [Approval Requests](#approval-requests) tab and the [Approval History](#approval-history) tab.

## Approval Requests {#approval-requests}

On the **Approval Requests** tab, you can configure the governance settings for publishing private Marketplace content and also manage all the pending requests.

{{< figure src="/attachments/control-center/private-marketplace/approval-requests.png" max-width=100% alt=''private-marketplace''  >}}

### Approval Requests Settings

Under the **Approvals Requests** section, you can configure settings for the following governance capabilities:

{{% alert color="info" %}}All the settings are turned off by default.{{% /alert %}}

* **Mendix Admins must approve submissions for new components** – If you turn on this toggle, when a new component is submitted to the private Marketplace, a Mendix Admin needs to approve the submission before the component is added to the private Marketplace. The submission appears on the [Pending Approvals](#pending-approvals) list before it gets approved or declined.

  {{% alert color="info" %}}This setting only affects only the submission of a new component. After you approve the submission, developers can later directly add new versions of the component to the private Marketplace without an approval from a Mendix Admin, unless you also turn on the toggle **Mendix Admins must approve submissions of new component's versions**. {{% /alert %}}

  If you turn off this toggle, there will be the following consequences:

    * The toggle **Mendix Admins must approve submissions of new component's versions** will be turned off automatically.
    * All the pending requests will get approved automatically.

    * Developers will be able to directly add component to the private Marketplace without an approval from a Mendix Admin.

* **Mendix Admins must approve submissions of new component's versions** – If you turn on this toggle, when a new version of a component is submitted to the private Marketplace, a Mendix Admin needs to approve the submission before the new version is added to the private Marketplace. The submission appears on the [Pending Approvals](#pending-approvals) list before it gets approved or declined.

  If you turn off this toggle, developers can directly add new versions of an existing component to the private Marketplace without an approval from a Mendix Admin.

* **I'd like to create a notification when an approval request is waiting to be approved** – If you turn on this toggle, when there is a new submission request, you get a notification.

  {{% alert color="info" %}}This setting only affects your notifications, not the notifications of other Mendix Admins in your organization.{{% /alert %}}

### Pending Approvals List {#pending-approvals}

The **Pending Approvals** list shows all the submission requests that need to be approved or rejected, with the following details:

* **Component Name** – This shows the name of the component in the pending request.
* **Content Type** – This shows the type of the component in the pending request.
* **Version** – This shows the version of the component in the pending request.
* **Mendix Version** – This shows the compatible Mendix version for the component in the pending request.
* **Submitter** – This shows the name of the submitter.
* **Submission Date** – This shows the date when the request is submitted.

#### Request Details

If you click the component name in a request on the **Pending Approvals** list, the details of the request open in a new page. Here you can check all the provided information about the component, download the *•mpk* file, and approve or decline the request.

{{< figure src="/attachments/control-center/private-marketplace/request-details.png" max-width=100% alt=''request-details''  >}}

On the top, you can find following buttons:

* **Approval** – Click this button to approve the request. After you approve the request, the submitter will receive a notification, and the component will be published in the private Marketplace of your company.
* **Decline** – Click this button to reject the request. You can also add a reason. After you decline the request, the submitter will receive a notification.
* **Download** – Click this button to download the *.mpk* file of the component.

The request details page also has the following tabs:

* **General** – This tab shows the general information about the component, such as content type, category, license, description, and cover image. The right side of the screen shows the submitter's name and email, the activity log, and the technical details of the component, such as the compatible Mendix version, component ID, and UUID.

* **Package** – This tab shows the information and the version of the *.mpk* file and the release notes.

  {{% alert color="info" %}}If the content type of the component is **Industry Template**, this tab is optional. If the content type of the component is **Solution Content type**, the tab is unavailable.{{% /alert %}}

* **Documentation** – This tab shows the documentation and screenshots, as well as the link to the demo if there is a demo.

* **Capabilities** – This tab shows additional information about content types such as **Solution** and **Industry Template**. 

## Approval History {#approval-history}

The **Approval History** tab lists all the requests that were approved or declined in the history.

{{< figure src="/attachments/control-center/private-marketplace/approval-history.png" max-width=100% alt=''approval-history''  >}}

The list shows the following details:

* **Component Name** – This shows the name of the component in the request.
* **Content Type** – This shows the type of the component in the request.
* **Action** – This shows whether the component in the request got **Published** or **Declined**.
* **Admin** – This shows the name of the Mendix Admin who approved or declined the request.
* **Date** – This shows the date when the request got approved or declined.
* **Reason** – This shows the reason why the request got approved or declined.
