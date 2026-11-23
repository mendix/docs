---
title: "Maia Consumption"
url: /control-center/maia-consumption/
description: "Describes the Maia Consumption page in Control Center, where company administrators can monitor Maia usage and manage consumption limits for individual users."
weight: 30
---

## Introduction

The Maia **Consumption** page allows company administrators to view and manage consumption and usage limits.

## Page Tabs

The Maia **Consumption** page is made up of the tabs described in the following sections.

### Overview Tab

The **Overview** tab displays your company’s Maia Units usage for the current monthly cycle. It includes the following information:

* The percentage of units used
* The number of units consumed
* The number of remaining units
* The date your monthly consumption resets

{{< figure src="/attachments/control-center/maia/maia-consumption-overview.png" alt="Overview tab of the Maia Consumption page showing Maia Units usage for the current monthly cycle" >}}

### Users Tab {#usage}

The **Users** tab provides an overview of each user’s current month usage, allowing you to [set individual usage caps](#manage-user-limit), [manage multiple users at once](#manage-multiple-users), and [export usage data](#export-data).

{{< figure src="/attachments/control-center/maia/maia-consumption-users.png" alt="Users tab of the Maia Consumption page showing a table with Name, Email, Monthly usage, and Monthly limit columns, and a Manage link per user" >}}

#### Manage User Limit {#manage-user-limit}

To manage an individual user’s usage limit, follow these steps:

1. At the end of the user's line item, click **Manage**. The **Manage User Limit** dialog box is displayed.
2. Enter the custom limit.
3. Click **Save Changes**.

{{< figure src="/attachments/control-center/maia/user-limit-manage.png" alt="Manage User Limit dialog box showing Monthly Maia Unit Limit options and a Custom Limit field" max-width="60%" >}}

{{% alert color="info" %}}
The **Manage** button is unavailable when the company only has free resources. To enable this button and manage a user's Maia Units limit, the company must have at least one provisioned resource.
{{% /alert %}}

If no individual limit is set, the user is subject to the default company-wide user limit. To set a company-wide limit, go to the [Resources](/control-center/maia-settings/#resources) tab in Maia Settings.

Once a user reaches their individual limit, they cannot use Maia for the rest of the current monthly cycle.

#### Manage Multiple Users {#manage-multiple-users}

To manage usage limits for multiple users at once, follow these steps:

1. Click **Manage multiple users**.
2. In the **Select users** field, choose one of the following options:
    * **Manually** – Enter one or more email addresses
    * **All users with a custom limit** – Selects all users who currently have a custom limit set
3. In the **Monthly Maia Unit Limit** section, select one of the following options:
    * **Use default** – Apply the default company-wide limit to the selected users
    * **Set custom limit** – Enter a custom limit value
4. Click **Apply**.

{{< figure src="/attachments/control-center/maia/manage-multiple-users.png" alt="Manage multiple users dialog box showing selection options, email field, and limit settings" max-width="60%" >}}

{{% alert color="info" %}}
This action is processed in the background and may take some time to complete, especially for a large number of users. You will receive a notification when the changes have been applied.
{{% /alert %}}


#### Export Data {#export-data}

Export consumption data by clicking **Export**. This downloads an Excel file containing each user's monthly usage and limit. 
