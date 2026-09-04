---
title: "Maia Resources"
url: /control-center/maia-resources/
description: "Describes how to provision and deprovision Maia Resources using self-service."
weight: 10
---

## Maia Settings

The **Maia Settings** page allows **Company Administrators** to manage Maia access and usage limits for their organization. These settings apply across both the **Mendix Portal** and **Studio Pro**, providing centralized control over Maia availability and company-wide usage.

## General

The General tab controls whether Maia is available for users in the company.

### Company Access

Company administrators can enable or disable Maia access for the entire company.

### When Maia access is enabled:

* Maia Make is available in **Studio Pro**.
* Maia features are available in the **Mendix Portal**.
* Company and user usage limits are enforced according to the configured settings.

### When Maia access is disabled:

* Maia is unavailable for all users in the company.
* The company-wide usage limit is automatically set to **0**.
* Individual user limits are preserved but remain inactive until Maia access is enabled again.

This setting provides a single control point for enabling or disabling Maia across the organization.

{{< figure src="/attachments/control-center/maia/maia-settings-general.png" alt="" >}}

## Resources

The **Resources** tab allows Company Administrators to configure the default monthly Maia usage limit for users within the company.

### Default Limit per User

Company Administrators can define the default Maia usage limit that applies to all company users who do not have an individual custom limit.

The following options are available:

* **No Limit** - Allows users to use Maia without a default monthly usage limit.

* **Custom Limit** - Sets a specific monthly Maia unit limit that applies to all users by default.

When Custom Limit is selected, the Company Administrator can specify the number of Maia units available to each user per month.

Setting the Monthly Limit to 0 blocks Maia access for users who are using the default limit.

Users who have an individually configured custom limit are not affected by changes to the default limit.

{{< figure src="/attachments/control-center/maia/maia-settings-resources.png" alt="" >}}