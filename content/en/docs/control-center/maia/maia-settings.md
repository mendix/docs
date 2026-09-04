---
title: "Maia Settings"
url: /control-center/maia-settings/
description: "Describes the Maia Settings page in Control Center, where company administrators can manage Maia access and configure usage limits for their organization."
weight: 10
---

## Maia Settings

The **Maia Settings** page allows company administrators to manage Maia access and usage limits for their organization. These settings apply across both the Mendix Portal and Studio Pro, providing centralized control over Maia availability and company-wide usage.

## General

The **General** tab controls whether Maia is available for users in the company.

### Company Access

Company administrators can enable or disable Maia access for the entire company.

This setting provides a single control point for enabling or disabling Maia across the organization.

{{< figure src="/attachments/control-center/maia/maia-settings-general.png" alt="" >}}

#### When Enabled

When Maia access is enabled:

* Maia Make is available in Studio Pro
* Maia features are available in the Mendix Portal
* Company and user usage limits are enforced according to the configured settings

#### When Disabled

When Maia access is disabled:

* Maia is unavailable for all users in the company
* The company-wide usage limit is automatically set to 0
* Individual user limits are preserved but remain inactive until Maia access is enabled again

## Resources

The **Resources** tab allows company administrators to configure the default monthly Maia usage limit for users within the company.

### Default Limit Per User

Company administrators can define the default Maia usage limit that applies to all company users who do not have an individual custom limit.

The following options are available:

* **No Limit** – allows users to use Maia without a default monthly usage limit
* **Custom Limit** – sets a specific monthly Maia unit limit that applies to all users by default

When **Custom Limit** is selected, the company administrator can specify the number of Maia Units available to each user per month.

Setting the monthly limit to 0 blocks Maia access for users who are using the default limit.

Changes to the default limit do not affect users with an individually configured custom limit.

{{< figure src="/attachments/control-center/maia/maia-settings-resources.png" alt="" >}}