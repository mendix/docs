---
title: "Maia Consumption"
url: /control-center/maia-consumption/
description: "Describes the Maia Settings page in Control Center, where company administrators can monitor Maia usage and manage consumption limits for individual users."
weight: 10
---

## Maia Consumption

The **Maia Consumption** page allows company administrators to view and manage users’ consumption and usage limits.

## Overview of Maia Units

The overview page provides a centralized view of all Maia Units currently provisioned for your company.

* Type – The type or resources; either Free or Provisioned
* Cloud Tokens – The number of Cloud Tokens used
* Capacity (Maia Units) – The number of Maia Units per month your organization can use
* State – Whether the resources is active, or ready to be downgraded or deprovisioned

{{< figure src="/attachments/control-center/maia/maia-consumption-overview.png" alt="" >}}

## Usage {#usage}

The **Usage** section provides an overview of each user’s usage for the current month. It also enables you to manage budgets by setting usage caps for individual users.

To manage an individual user’s usage limit:

1. On the user line, click **Manage**.
2. Enter the custom limit.
3. Click **Save Changes**.

{{< figure src="/attachments/control-center/maia/user-limit-manage.png" alt="" width="450" >}}

If no individual limit is set, the user is subject to the default company-wide user limit. To set a company-wide limit, go to the [Resources](/control-center/maia-settings/#resources) tab in Maia Settings.

Once a user reaches their individual limit, further Maia use is disabled for that user for the remainder of the current monthly cycle.
