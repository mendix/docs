---
title: "Just-In-Time (JIT) Access for Mendix on Azure"
url: /developerportal/deploy/mendix-on-azure/jit-requests/
description: "Describes Just-In-Time access requests and approval workflows for Mendix on Azure environments."
weight: 15
---

## Introduction

Mendix on Azure offers two security models to meet different organizational requirements:

* **Standard Plan** – Traditional model with always-available Owner-level permissions
* **JIT-Enabled Plan** – Enhanced security model with Just-In-Time elevation of privileges

This document explains how the JIT-enabled plan works and how to manage JIT approval requests.

## What is JIT?

**Just-In-Time (JIT)** is a security feature that provides elevated Azure permissions only when needed and only for a limited time. Instead of having standing Owner-level credentials that are always available, JIT environments require explicit approval before infrastructure operations can be performed.

### Benefits of JIT

JIT access provides the following benefits:

* **Reduced blast radius** – Minimize the impact of potential security incidents by limiting standing privileges
* **Improved auditability** – Track and approve all privileged operations
* **Compliance** – Meet enterprise security requirements for minimal standing privileges
* **Control** – Maintain explicit control over when elevated permissions are granted

## Plan Types

### Standard Plan

* Owner-level credentials are **always available**
* No approval required for infrastructure changes
* Traditional user experience with immediate provisioning
* Suitable for environments where speed is prioritized over strict privilege controls

### JIT-Enabled Plan

* Owner-level credentials are granted **only when approved**
* Explicit customer approval required for infrastructure operations
* Enhanced security with time-limited token access
* Suitable for organizations with strict compliance and security requirements

When deploying Mendix on Azure from the Azure Marketplace, you can select the JIT-enabled plan from the **Plan** dropdown:

{{< figure src="/attachments/deployment/mx-azure/jit-plan-selection.png" alt="Azure Marketplace plan selection showing JIT and Standard options" class="no-border" >}}

{{% alert color="info" %}}
Your plan type is displayed in the portal environment details, back office environment listing, and environment configuration page.
{{% /alert %}}

After deployment, you can view your plan type in the Infrastructure Details panel:

{{< figure src="/attachments/deployment/mx-azure/jit-infrastructure-details.png" alt="Infrastructure Details panel showing JIT plan type" class="no-border" >}}

## When JIT Approval is Required

JIT approval is required for the following operations on JIT-enabled environments:

### Environment Creation

When creating a new JIT-enabled environment, approval is needed before the infrastructure can be provisioned.

### Environment Configuration Changes

Modifications to environment settings that require Azure role assignments.

### Scheduled Infrastructure Upgrades

Quarterly or ad-hoc infrastructure upgrades require approval before execution.

### Role Assignment Operations

Any Terraform operations that modify Azure IAM roles and permissions.

{{% alert color="info" %}}
Standard Plan environments bypass all JIT workflows and operate with traditional permissions.
{{% /alert %}}

## Requesting JIT Approval

### For Environment Creation or Modifications

To request JIT approval for environment creation or modifications, do the following:

1. Create or edit your environment through the Mendix on Azure portal.
    
    For JIT-enabled environments, the portal automatically creates a JIT approval request.

2. Check your email for a notification requesting approval.
    
    The email contains the following:
    
    * Environment details
    * Operation description
    * Approval link
    * Expiration time

3. Click the approval link in the email.

4. Review the operation details.

5. Choose **Approve** or **Deny**.

Once approved, the portal detects the approval status and infrastructure provisioning continues automatically via Spacelift. You can monitor the operation status in the portal.

### For Scheduled Infrastructure Upgrades

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

1. **Request Created** – The request is initiated when you create or modify an environment, or when a scheduled upgrade is planned.

2. **Pending** – The request awaits customer approval. An email notification is sent at this stage.

3. **Approved or Denied** – You approve or deny the request via the approval link.

4. **Executing** – If approved, the infrastructure operation begins.

5. **Complete or Failed** – The operation finishes successfully or encounters an error.

### Request Statuses

The following table describes the possible statuses of a JIT request:

| Status | Description | User Action Required |
|--------|-------------|----------------------|
| **Pending** | Awaiting customer approval | Review and approve or deny |
| **Approved** | Approved and ready for execution | None – portal proceeds automatically |
| **Denied** | Customer denied the request | Operation cancelled |
| **Expired** | Approval window closed | Request new operation |
| **Executing** | Infrastructure operation in progress | Monitor progress |
| **Complete** | Operation finished successfully | None |
| **Failed** | Operation encountered an error | Review error, contact support if needed |

## Understanding JIT Request Status

### In the Portal

Navigate to your environment details page to view the following:

* **Current JIT Request Status** – Shows pending, approved, or executing
* **Request ID** – Unique identifier for the JIT request
* **Created Time** – When the request was initiated
* **Approval or Denial Time** – When action was taken
* **Expiration Time** – Deadline for approval

### Status Messages

The following table describes common status messages:

| Message | Meaning |
|---------|---------|
| "Approval required" | JIT request is pending your approval |
| "Approved - provisioning" | Request approved, infrastructure operation starting |
| "Denied" | Request was denied, operation cancelled |
| "Expired" | Approval deadline passed, operation cancelled |
| "Skipped - already approved" | Duplicate request detected, using existing approval |

## Scheduled Infrastructure Upgrades

### Overview

The Mendix on Azure team performs scheduled infrastructure upgrades on a quarterly basis. For JIT-enabled environments, approval is required before these upgrades can proceed.

### Process

The scheduled infrastructure upgrade process follows these stages:

1. **Schedule Creation (T-14 days)** – The Mendix team schedules the upgrade release and sets the target date and time in the back office.

2. **JIT Request Generation (T-7 days)** – The portal identifies all JIT environments, creates individual JIT approval requests, and sends email notifications to environment owners.

3. **Approval Window (T-7 to T-0)** – Customers review and approve or deny requests. The portal continuously polls approval status, and approval tracking is available in the portal.

4. **Execution (Scheduled Time)** – The portal triggers Spacelift for all approved JIT environments. Standard plan environments proceed automatically. Execution status is displayed per environment.

5. **Post-Execution (T+1 day)** – A status report is sent to all customers. Failed executions create Jira tickets for tracking. Denied or expired environments are listed in the report.

### Auto-Approval Option

For scheduled upgrades within your approved maintenance windows, you can configure auto-approval:

* Contact your Mendix account team to set up auto-approval rules
* Specify approved time windows (for example, "Sundays 2-6 AM UTC")
* JIT requests during approved windows are automatically approved
* You still receive notifications for audit purposes

## Frequently Asked Questions

### How long does a JIT approval last?

JIT approvals are time-limited. For on-demand operations (environment creation or modification), approvals are valid for 2 hours. For scheduled upgrades, approvals are valid until the scheduled execution window.

### Can I approve multiple environments at once?

Yes, for scheduled infrastructure upgrades, you can approve JIT requests for multiple environments from a single notification email.

### What happens if I do not approve in time?

The JIT request expires and the operation is cancelled. For environment creation, you must restart the provisioning process. For scheduled upgrades, your environment is skipped and remains on the current infrastructure version.

### Can I switch from Standard Plan to JIT-Enabled Plan?

Plan changes are managed through the Microsoft Marketplace. Contact your Mendix account team for guidance on plan migration.

### Do I need approval for every operation?

JIT approval is required only for operations that involve Azure role assignments or infrastructure changes. Day-to-day application operations (deployments, scaling, monitoring) do not require JIT approval.

### Who can approve JIT requests?

Users with Owner or Contributor roles on the Azure subscription where Mendix on Azure is deployed can approve JIT requests.

### What if my approval request is stuck in Pending?

If a request shows Pending for an extended period:

1. Check your email for the approval notification.
2. Verify the request has not expired.
3. Check the portal for status updates.
4. Contact Mendix support if the issue persists.

### Can I view historical JIT requests?

Yes, historical JIT requests are available in the portal's environment activity log and in the back office for administrators.

## Troubleshooting

### Auto-approved JIT request still showing as Pending

**Symptoms:** JIT request scheduled within auto-approval window still shows Pending status.

**Resolution:**

* Verify auto-approval configuration in back office
* Check that current time is within approved window
* Wait 5-10 minutes for status polling to detect approval
* Contact support if issue persists beyond scheduled time

### Manual approval shows "Skipped - already approved"

**Symptoms:** Attempting to approve a JIT request shows message "Skipped JIT Request - It is already in approved state."

**Resolution:**

* This is informational – the request has already been approved
* No further action needed
* Infrastructure operation proceeds with existing approval

### Old pending requests not expiring

**Symptoms:** JIT requests from previous days still showing as Pending instead of Expired or Failed.

**Resolution:**

* The system automatically expires requests after 24 hours
* Contact support if requests remain pending beyond expiration period
* New requests can be created for the same operation

### Failed infrastructure upgrade

**Symptoms:** JIT request was approved but infrastructure upgrade failed.

**Resolution:**

* Check Spacelift logs (link provided in failure notification)
* A Jira ticket is automatically created for failed upgrades
* The Mendix engineering team is notified automatically
* You are contacted for any required actions

### Cannot add manual approval option in back office

**Symptoms:** Need to manually approve JIT requests for environments with auto-approval enabled.

**Resolution:**

* Contact Mendix support to temporarily disable auto-approval
* Or adjust auto-approval time windows to exclude current time
* Manual approval is then required for new requests
