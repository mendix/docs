---
title: "Maia Resources"
url: /control-center/maia-resources/
description: "Describes how to provision and deprovision Maia Resources using self-service."
weight: 25
---

## Introduction

Maia Resources is your access point to increase the capacity of Maia Units for using Maia Make in Studio Pro. It allows admins to provision, upgrade, downgrade, and deprovision Maia Units and manage the resources for Maia Make for their company. For more information on Maia Make’s capabilities, refer to [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/).

## Prerequisites

1. Sufficient token entitlements – The user should have an adequate number of available Mendix Cloud Tokens to allocate for Maia Unit provisioning.
2. Valid subscription plan – The user's Mendix subscription must be based on the FY21 price list or newer. Older subscription plans are not eligible for provisioning.
3. Single account ownership – The user must have a single account. Owning multiple accounts is not supported for Maia Unit provisioning.
4. Enterprise platform subscription – The user must have a single active enterprise platform subscription.

## Overview of Maia Units

The overview page provides a centralized view of all Maia Units currently provisioned for your company.

* Type – The type or resources; either Free or Provisioned
* Cloud Tokens – The number of Cloud Tokens used
* Capacity (Maia Units) – The number of Maia Units per month your organization can use
* State – Whether the resources is active, or ready to be downgraded or deprovisioned

{{< figure src="/attachments/control-center/maia-resources/overview.jpeg" alt="" >}}

## Increasing Your Maia Units Capacity {#increase-maia-units}

1. **Make sure you have Cloud Tokens available**
Cloud Tokens are purchased through your Mendix subscription. If your organization already has Cloud Tokens allocated to other services, you can reassign them. Check your available balance in the Control Center. If you need to purchase more, contact your Mendix account manager.
2. **Convert Cloud Tokens to Maia Units**
In the Control Center, go to Maia Resources and select Provision Resource. Choose how many Cloud Tokens to allocate. Each Cloud Token gives you 100 Maia Units per month.
3. **Use Maia in Studio Pro**
Your new capacity is active immediately. Studio Pro unblocks and Maia Make becomes available again.

### Key Considerations

* Monthly cycle – Your Maia Units reset each month. Unused units do not roll over.
* Upgrades – Upgrades take effect immediately. Downgrades and cancellations take effect at the end of the current month; you keep access until then.
* Free allowance – Every Mendix account includes a base allocation each month before any Cloud Tokens are needed.

## Provisioning Maia Units {#provisioning-maia-units}

You can provision any Maia resources directly within the Control Center using the self-service capability. To do this, select **Provision Resource**. 

This allows you to select how many Cloud Token to use to provision Maia Units. Every Cloud Token provisions 100 Maia Units per month.

{{< figure src="/attachments/control-center/maia-resources/provision.jpeg" alt="" >}}

Click **Provision** to select an amount of cloud tokens. An pop-up shows the Maia Units capacity that will be added. Clicking **Provision** again completes the process. You are taken back to the **Maia Resource** page where the newly provisioned Maia Units appear in the list.

{{< figure src="/attachments/control-center/maia-resources/resource-summary.jpeg" alt="" width="300" >}}

## Upgrading Maia Units {#upgrading-maia-units}

To upgrade your provisioned Maia Units, select a plan of type **Provisioned** from your resources overview and click **Edit Resource**. This opens the page of your current resource, showing the amount of allotted Cloud Tokens. Increase the amount of Cloud Tokens to upgrade your provisioned Maia Units, then click **Save Changes**. Upgrades will take effect immediately.

{{< figure src="/attachments/control-center/maia-resources/upgrade.jpeg" alt="" >}}

## Downgrading Maia Units {#downgrading-maia-units}

To downgrade your amount of provisioned Maia Units, select a plan of type **Provisioned** from your resources overview and press **Edit Resource**. This opens the page for your current resource, showing the amount of allotted Cloud Tokens. Decrease the amount of Cloud Tokens to downgrade your provisioned Maia Units, then click **Save Changes** to confirm.

{{% alert color="info" %}}
Your subscription plan operates on a monthly bundle cycle. When you downgrade, the new plan takes effect at the start of the new month. Until that date, you can still use the resource, and the status in the overview reads **Plan Downgrade Scheduled**.
{{% /alert %}}

## Deprovisioning Maia Units {#deprovisioning-maia-units}

To deprovision, select a plan of type **Provisioned** from your resources overview and click **Deprovision**. A confirmation pop-up window appears. Click **Deprovision** to confirm.

{{% alert color="info" %}}
Your subscription plan operates on a monthly bundle cycle. When you deprovision a resource, the deprovisioning takes effect at the end of the current subscription month. Until that date, you can still use the resource and status in the overview reads **Plan Deprovision Scheduled**.
{{% /alert %}}
