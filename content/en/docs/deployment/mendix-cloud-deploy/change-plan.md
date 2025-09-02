---
title: "Changing Your Plan in Mendix Cloud"
linktitle: "Changing Plan"
url: /developerportal/deploy/change-plan/
weight: 80
beta: true
description: "Describes how to change your plan in Mendix Cloud."

#Do NOT remove any of the anchors in this document as they are all referenced from other documents
---

{{% alert color="warning" %}}
This feature is in Public Beta. For more information, see [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

Mendix offers several license plans including Free, Basic, Standard, Premium, and Premium Plus. For more information, see [Pricing](https://www.mendix.com/pricing/).

This document explains how to change your environment's [plan](/developerportal/deploy/mendix-cloud-deploy/#plans-1) in Mendix Cloud. Plan changes can be applied independently to each environment. For example, the Technical Contact can upgrade the application's acceptance environment while keeping production on its current plan.

{{% alert color="info" %}}
It is only possible to change and upgrade to higher-tier plans, not downgrade. Upgrades from legacy plans to new plans are supported, but not from new plans to legacy plans. 
{{% /alert %}}

## Prerequisites {#prerequisites}

Before requesting a plan change, verify the following:

* The app runs on Kubernetes.
* The app's tenant is self-service enabled. To activate this capability for your company, contact your Customer Success Manager.
* You are the [Technical Contact](/support/#technical-contacts) for the app (only Technical Contacts can submit a plan change request).

{{% alert color="info" %}}
Changing your app environment's plan does not change the additional storage attached to it. To change the additional storage, you must request an [environment resize](/support/new-app-node-request-template/#resize) through [Mendix Support](https://support.mendix.com/).
{{% /alert %}}

## Changing a Plan {#changing-plan}

{{% alert color="info" %}}
This feature is only visible to the Technical Contact.
{{% /alert %}}

To change an environment's plan, follow these steps:

1. Go to [Apps](https://sprintr.home.mendix.com/)
2. Click **Environments** on your app. 
3. On the **Environments** page, click the **Overview** tab to view your environments.
4. Find your target environment.
5. Use the **Expand** ({{< icon name="chevron-down" >}}) toggle to view detailed information about each environment, such as the environment resources and deployed package.
6. In the environment resource section, click **Change Plan**. 
7. On the left side of the form that appears, review your current plan details. These include:
    * **Name** – Plan name.
    * **Environment** – Plan environment (such as, staging or acceptance).
    * **App** – App name.
    * **Memory** – Allocated plan's memory.
8. On the right side of the form that appears, create a new plan:
    * To compare plans, click **Show Comparison**. This opens a comparison page where the Technical Contact can evaluate the current plan against other available options. The last selected comparison will populate the form. Alternatively, select a new plan directly from the **Plan** dropdown without comparing.
    * Enter a reason for plan change.

9. All submitted plan change requests appear in the [Control Center](/control-center/approval-requests/) for the [Mendix Admin](/control-center/company-settings/#mendix-admins) review. To view the list of approvers, click **Mendix Admin** at the bottom of the **New Plan** form. When ready, click **Submit Request** to submit your plan change request. 

    {{% alert color="info" %}}Approval from a Mendix Admin only authorizes the plan change but does not immediately apply it. As a result, the environment will remain on its current plan until the new plan is [approved](/control-center/approval-requests/#approving-a-request), [scheduled](#scheduling-a-plan-change) and [successfully applied](#after-schedule).
    {{% /alert %}}

11. [Track and manage](#manage-plan-requests) your plan change requests from the [Request Overview](/developerportal/deploy/environments/#request-overview) tab on your app's environment's page. 

{{% alert color="info" %}}
Changing plan consumes [Mendix Cloud Tokens](/control-center/cloud-tokens/#cloud-tokens). Only one plan change request can exist per environment at a time. As a result, new requests cannot be submitted for the same environment until the current one is completed.
{{% /alert %}}

## Managing Plan Requests {#manage-plan-requests}

The **Request Overview** tab allows Technical Contacts to view all submitted plan change requests (both past and current) and track pending request status.

To access it:

1. Go to [Apps](https://sprintr.home.mendix.com/).
2. Click **Environments** on your app.
3. Open the **Request Overview** tab.

For detailed information on the **Request Overview** tab, refer to the [Request Overview](/developerportal/deploy/environments/#request-overview) section in *Environments and Deployment*.

This diagram shows the progress of the request status from plan change submission to fulfilled (approved, rejected, completed, or failed):

{{< figure src="/attachments/deployment/mendix-cloud-deploy/plan-change-status.png" >}}

### Available Actions by Status {#available-actions-by-status}

Depending on the request's status, Technical Contacts can perform the following actions:

* **Pending approval** – Click **Cancel Request** to cancel the entire request.
* **Pending schedule** – Click **Cancel Request** to cancel the entire request, or click **Schedule Change** to set execution timing for when the approved plan will be applied. For more details on how to schedule a plan change, see [Scheduling a Plan Change](#scheduling-a-plan-change).
* **Scheduled** – Click **Cancel Request** to cancel the entire request, or click **Execute Now** to apply the new plan immediately.

{{% alert color="warning" %}}
If the Technical Contact cancels a request, the plan change process is canceled entirely. To proceed with a plan change, the Technical Contact must start over and submit a new request.
{{% /alert %}}

## Scheduling a Plan Change {#scheduling-a-plan-change}

If your request status is **Pending Schedule**:

1. Open **Request Details** by clicking **Details** in the **Request Overview** tab.
2. Click **Schedule Change**.
3. Choose from the following options:
   * **Execute Now** to apply the change immediately
   * **Schedule for later** to delay the plan application until the next maintenance window

To schedule for later:

* Select a preferred date.
* The system will apply the change during the first available maintenance window after that date. For example, if you select May 22 and the next window is May 28, the change will occur on May 28.

After scheduling, the status changes to **Scheduled**. You can still click **Execute Now** at any time before the scheduled window to apply the change immediately. This overrides the scheduled maintenance window and executes the plan change right away.

{{% alert color="warning" %}}
Applications will be unavailable for up to 45 minutes while the plan change is being applied.
{{% /alert %}}

### After Scheduling {#after-schedule}

After scheduling, once the plan change process starts:

1. The status changes to **In Progress**.
2. Next, the status progresses to either **Completed** (if successful) or **Failed** (if an error occurs).

{{% alert color="info" %}}
After a plan change is applied, you cannot change to a new plan for the same environment for the next 6 hours.
{{% /alert %}}

## Monitoring Updates {#monitoring-updates}

To stay informed about changes and status updates, open notifications by clicking on the **Notifications** icon ({{< icon name="alarm-bell" >}}) at the upper-right corner of the Mendix platform.
