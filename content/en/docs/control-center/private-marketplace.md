---
title: "Private Marketplace"
url: /control-center/private-marketplace/
description: "Describes the Private Marketplace page in the Mendix Control Center."
tags: ["control center", "mendix admin", "private marketplace", "marketplace"]
weight: 70
no_list: true
---

## 1 Introduction

The **Private Marketplace** page in Control Center gives you the capabilities to govern the submissions to the private Marketplace of your organization. 

### 1.1 Why Is the Governance Feature Useful?

The governance feature for private Marketplace brings the following benefits:

- Enhanced Security: it allows you to mitigate security risks by ensuring that only vetted and approved components are added to the company’s Private Marketplace.
- Company Guidelines Assurance: It enables you to meet regulatory requirements and internal policies by thoroughly reviewing components.
- Efficient Management: It offers a centralized approval process to save time and resources, preventing additional communication outside of the platform. 

## 2 Approval Requests

{{< figure src="/attachments/control-center/private-marketplace/approval-requests.png" max-width=100% class="image-border" alt=''private-marketplace''  >}}

#### 2.1 Approval Requests Settings

On the **Approval Requests** tab, you can configure settings for the following governance capabilities:

* **Mendix Admins must approve submissions for new components** – If you turn on this toggle, when a new component is submitted to the private Marketplace, a Mendix Admin needs to approve the submission before the component is added to the private Marketplace. The submission appears on the [Pending Approvals](#pending-approvals) list before it gets approved or declined.
* **Mendix Admins must approve submissions of new component's versions** – If you turn on this toggle, when a new version of a component is submitted to the private Marketplace, a Mendix Admin needs to approve the submission before the new version is added to the private Marketplace. The submission appears on the [Pending Approvals](#pending-approvals) list before it gets approved or declined.
* **I'd like to create a notification when an approval request is waiting to be approved** – If you turn on this toggle, when there is a new approval request, you get a notification.

#### 2.2 Pending Approvals List {#pending-approvals}

The **Pending Approvals** list shows all the approval requests that need to be approved or rejected, with the following details:

* **Component Name** – This shows the name of the component submitted for approval. 
* **Content Type** – This shows the type of the component submitted for approval. 
* **Version** – This shows the version of the component submitted for approval. 
* **Mendix Version** – This shows the version of Studio Pro which the submitted component is compatible with.
* **Submitter** – This shows the name of the submitter.
* **Submission Date** – This shows the date when the component is submitted.

## 3 Approval History

{{< figure src="/attachments/control-center/private-marketplace/approval-history.png" max-width=100% class="image-border" alt=''approval-history''  >}}

The **Approval History** tab shows all the request for submitting content to the private Marketplace of your organization that have been approved or rejected, with the following details:

* **Component Name** – This shows the name of the component submitted for approval. 
* **Content Type** – This shows the type of the component submitted for approval. 
* **Action** – This shows whether the component submitted for approval got published or declined.
* **Admin** – This shows the name of the Mendix Admin who published or declined the component submitted for approval.
* **Date** – This shows the date when the content submitted fort approval got published or declined.
* **Reason** – This shows the reason why the content submitted fort approval got published or declined.
