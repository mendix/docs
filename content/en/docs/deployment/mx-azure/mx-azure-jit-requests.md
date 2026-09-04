---
title: "Just-In-Time (JIT) Access for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/jit-requests/
description: "Describes Just-In-Time access requests and approval workflows for Mendix on Azure environments."
weight: 19
---

## Introduction

Mendix on Azure offers two security models to meet different organizational requirements:

* Standard plan - Traditional model with always-available Owner-level permissions
* JIT-enabled plan - Enhanced security model with Just-In-Time elevation of privileges

This document explains how the JIT-enabled plan works and how to manage JIT approval requests.

## What is JIT?

*Just-In-Time (JIT)* is a security feature that provides elevated Azure permissions only when needed and only for a limited time. Instead of having Owner-level credentials that are always available, JIT environments require explicit approval before infrastructure operations can be performed.

### Benefits of JIT

JIT access provides the following benefits:

* Minimize the impact of potential security incidents by limiting standing privileges.
* Achieve improved **auditability** by tracking and approving all privileged operations.
* Increase compliance by meeting enterprise security requirements for minimal standing privileges.
* Maintain explicit control over when elevated permissions are granted.

## Differences Between Standard and JIT-Enabled Plans

The following sections describe the differences between standard and JIT-enabled plans with regards to owner-level credentials, approvals, user experience, and audience.

### Standard Plan

* Owner-level credentials are permanently available to Mendix.
* No approval is required for infrastructure changes.
* Offers a traditional user experience with immediate provisioning.
* Is suitable for environments where speed is prioritized over strict privilege controls.

### JIT-Enabled Plan

* Owner-level credentials are granted only when approved to Mendix.
* Explicit customer approval is required for infrastructure operations.
* Offers enhanced security with time-limited token access.
* Is suitable for organizations with strict compliance and security requirements.

## Configuring JIT-Enabled Plans

When deploying Mendix on Azure from the Azure Marketplace, perform the following steps to configure a JIT-enabled plan:

1. Select the JIT-enabled plan from the **Plan** dropdown:

    {{< figure src="/attachments/deployment/mx-azure/jit-plan-selection.png" alt="Azure Marketplace plan selection showing JIT and Standard options" class="no-border" >}}

2. After selecting the JIT plan, configure the JIT access settings in the **JIT Configuration** step:

    {{< figure src="/attachments/deployment/mx-azure/jit-enable-access.png" alt="Enable JIT access configuration" class="no-border" >}}

3. Set the **Activation maximum duration** to 8 hours and choose **Automatic** approval mode for scheduled upgrades:

    {{< figure src="/attachments/deployment/mx-azure/jit-8hour-configuration.png" alt="JIT 8-hour activation duration configuration" class="no-border" >}}

    {{% alert color="info" %}}
    Setting the **Activation maximum duration** to 8 hours ensures JIT API calls complete successfully during the approval window. Shorter durations may cause API call failures.
    {{% /alert %}}

    Your plan type is displayed in the portal environment details and environment configuration page.

4. After deployment, you can view your plan type in the **Infrastructure Details** panel:

    {{< figure src="/attachments/deployment/mx-azure/jit-infrastructure-details.png" alt="Infrastructure Details panel showing JIT plan type" class="no-border" >}}

## Requesting JIT Approval

JIT approval is required for the following operations on JIT-enabled environments:

* Environment creation - When creating a new JIT-enabled environment, approval is needed before the infrastructure can be provisioned. For more information about the request process, see [Requesting JIT Approval for Environment Creation or Modifications](#create-modify-env).
* Environment configuration changes - Modifications to environment settings that require Azure role assignments. For more information about the request process, see [Requesting JIT Approval for Environment Creation or Modifications](#create-modify-env).
* Scheduled infrastructure upgrades - Quarterly or ad-hoc infrastructure upgrades require approval before execution. For more information about the request process, see [Requesting JIT Approval for Scheduled Infrastructure Upgrades](#scheduled-update).

{{% alert color="info" %}}
Standard Plan environments bypass all JIT workflows and operate with traditional permissions.
{{% /alert %}}

### Requesting JIT Approval for Environment Creation or Modifications {#create-modify-env}

To request JIT approval for environment creation or modifications, perform the following steps:

1. Create or edit your environment through the Mendix on Azure portal.
    
    For JIT-enabled environments, the portal automatically creates a JIT approval request.

2. Navigate to the Azure Portal and open your Managed Application.
3. Go to the **JIT Requests** page to view pending approval requests.
4. Review the operation details.
5. Select either **Approve** or **Deny**.

Once approved, the portal detects the approval status and infrastructure provisioning continues automatically. You can monitor the operation status in the portal.

### Requesting JIT Approval for Scheduled Infrastructure Upgrades {#scheduled-update}

To request JIT approval for scheduled infrastructure upgrades, do the following:

1. Check your email for an upgrade notification from the Mendix team.
    
    The email contains the following:
    
    * Scheduled upgrade date and time
    * List of affected JIT environments
    * Approval request for each environment

2. Review and approve the JIT request before the scheduled upgrade window.
    
    Multiple environments can be approved in batch.

Approved environments are upgraded during the scheduled window. Denied or expired approvals result in the environment being skipped. You receive a status report after the upgrade completes.

## JIT Request Lifecycle

A JIT request progresses through the following stages:

1. The request is initiated when you create or modify an environment, or when a scheduled upgrade is planned.
2. The request awaits approval. During this stage, the request has the status **Pending**. To proceed, review the request and approve or deny it.
3. The request is approved or denied, or its approval window expires without a decision from the user. You approve or deny the request via the Azure Portal JIT Requests page. The approval status can result in one of the following request statuses:

    * **Approved** - The request is approved and ready for execution. The portal proceeds with the execution automatically.
    * **Denied** - The customer has denied the request. The operation is canceled.
    * **Expired** - The approval window for the request has closed. If you want to continue, request a new operation for the request.

4. Executing - If approved, the infrastructure operation begins. The request has the status **Executing**. Monitor its progress to ensure that it completes successfully.
5. Complete or failed - The operation finishes successfully (resulting in the **Complete** status) or encounters an error (resulting in the **Failed** status). If the request has the **Failed** status, you must review the error and contact Mendix Support if needed. If the request is successfully completed, no further action is required.

### Viewing the Requests

Navigate to your **Environment Details** page to view the following:

* **Current JIT Request Status** - Shows pending, approved, or executing
* **Request ID** - Unique identifier for the JIT request
* **Created Time** - When the request was initiated
* **Approval or Denial Time** - When action was taken
* **Expiration Time** - Deadline for approval

## Scheduled Infrastructure Upgrades

The Mendix on Azure team performs scheduled infrastructure upgrades on a quarterly basis. For JIT-enabled environments, approval is required before these upgrades can proceed.

The scheduled infrastructure upgrade process follows these stages:

1. Schedule creation (T-14 days) - The Mendix on Azure team schedules the upgrade release and sets the target date and time.
2. JIT request generation (T-7 days) - The portal identifies all JIT environments, creates individual JIT approval requests, and sends email notifications to environment owners.
3. Approval window (T-7 to T-0) - Customers review and approve or deny requests. The portal continuously polls approval status, and approval tracking is available in the portal.
4. Execution (scheduled time) - The portal applies the infrastructure update for all approved JIT environments. Standard plan environments proceed automatically. Execution status is displayed per environment.
5. Post-execution (T+1 day) - A status report is sent to all customers. Failed executions are automatically escalated to the Mendix team for tracking. Denied or expired environments are listed in the report.

### Auto-Approving JIT Requests

For scheduled upgrades within your approved maintenance windows, you can configure auto-approval when purchasing the JIT offering.

To enable auto-approvals, specify approved time windows with a minimum of 8 hours (for example, *Sundays 2-10 AM UTC*). JIT requests created during the specified time windows are automatically approved. You will receive approval notifications for audit purposes.

## Frequently Asked Questions

This document answers common questions about JIT requests.

### How Long Does a JIT Approval Last?

JIT approvals are time-limited. For on-demand operations (environment creation or modification), approvals are valid for 2 hours. For scheduled upgrades, approvals are valid until the scheduled execution window.

### Can I Approve Multiple Environments at Once?

Yes, you can approve JIT requests for multiple environments from the Azure Portal JIT Requests page.

### What Happens if I Do Not Approve in Time?

The JIT request expires and the operation is canceled. For environment creation, you must restart the provisioning process. For scheduled upgrades, your environment is skipped and remains on the current infrastructure version.

### Can I Switch from Standard Plan to JIT-Enabled Plan?

Plan changes are managed through the Microsoft Marketplace. Contact your Mendix account team for guidance on plan migration.

### Do I Need Approval for Every Operation?

JIT approval is required only for operations that involve Azure role assignments or infrastructure changes. Day-to-day application operations (deployments, scaling, monitoring) do not require JIT approval.

### Who Can Approve JIT Requests?

Users with Owner or Contributor roles on the Azure subscription where Mendix on Azure is deployed can approve JIT requests.

### What if My Approval Request Is Stuck in Pending?

If a request shows the **Pending** status for an extended period, perform the following steps:

1. Navigate to the Azure Portal JIT Requests page.
2. Verify the request has not expired.
3. Check the portal for status updates.
4. Contact Mendix support if the issue persists.

### Can I View Historical JIT Requests?

Yes, historical JIT requests are available in the Azure Portal's JIT Requests page.

## Troubleshooting

If you encounter any issues with JIT requests, use the following troubleshooting tips to help you solve them.

### Auto-Approved JIT Request Still Showing as Pending

JIT request scheduled within auto-approval window still shows Pending status.

#### Solution

To solve this issue, perform the following steps:

1. Verify that the auto-approval configuration was set when purchasing the offering.
2. Check that current time is within the approved 8-hour window.
3. Wait 5-10 minutes for status polling to detect approval.
4. Contact support if issue persists beyond scheduled time.

### Manual Approval shows a Skipped - Already Approved Message

Attempting to approve a JIT request shows the following message: *Skipped JIT Request - It is already in approved state.*

#### Solution

The message is informational - the request has already been approved. No further action is needed. The infrastructure operation proceeds with the current approval.

### Old Pending Requests Do Not Expire

JIT requests from previous days still show as Pending instead of Expired or Failed.

#### Solution

The system automatically expires requests after 24 hours. Contact support if requests remain pending beyond this expiration period. If needed, create a new request for the same operation.

### Failed Infrastructure Upgrade

JIT request was approved but infrastructure upgrade failed.

#### Solution

The Mendix engineering team is notified automatically. You will be contacted for any required actions. Contact Mendix support if you need immediate assistance.

### Cannot Add Manual Approver

Unable to add a manual approver for JIT requests.

#### Solution

Contact Microsoft support for assistance with adding manual approvers to your subscription.
