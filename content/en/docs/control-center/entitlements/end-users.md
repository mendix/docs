---
title: "End-Users"
url: /control-center/end-users/
description: "Describes the End-Users page in the Mendix Control Center."
weight: 30
beta: true
---

{{% alert color="warning" %}}
This feature is in Private Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

End-user metering is a process that accurately measures the number and types of users interacting with Mendix apps. This is important for ensuring transparency and compliance with license agreements, while optimizing licensing costs. 

End-user metering ensures that you benefit from:

* Automatic tracking – User consumption is tracked from the moment your app is deployed to production and running.
* Monthly reporting – Usage data is collected regularly, processed monthly, and made available in Control Center.
* App-level visibility – View named user counts per app to identify optimization opportunities.
* Subscription type classification – Users are classified as External, Multi-App Internal, or Single-App Internal based on their subscription type.
* Historical data – Access usage data for all the months since enabling user metering.

You can read about the user metering process in [User Metering](/developerportal/deploy/user-metering/).

The **End-Users** page allows you to keep track of end-user subscriptions and usage for all apps across your company.

### User Types

Mendix differentiates between these types of users:

* Multi-app internal user – An employee or a contractor of the customer or of the affiliated company or group who can access any number of apps.     
  The associated licensing model is **Multi-App Internal User Subscription**.

* Single-app internal user – An employee or a contractor of the customer or of the affiliated company or group, who holds a subscription for one specific app.    
  The associated licensing model is **Single-App Internal User Subscription**.

* External user – A user who is not an employee or a contractor of the customer or of the affiliated company or group.    
  The associated licensing model is **External User Subscription**.

For details on user types, refer to the [User Types and Definitions](/developerportal/deploy/licensing-apps-outside-mxcloud/#user-types-and-definitions) section of *Licensing Apps*.

## Overview Tab

The **Overview** tab displays end-user entitlements, and [named user](https://www.mendix.com/legal/platform-usage/order-form-definitions/#named-user) details. It also allows you to assign Internal single-app user subscriptions.

### User Entitlements – Active Today

The cards in this section display end-user subscription entitlements, grouped by user type, and valid as of the current date. Each card also includes the expiration date of that subscription.

### Named User Consumption

This section includes a list of apps and their corresponding number of named users for the current month. These are the available details:

* **App Name** – The name of the app.
* **ID** – The unique ID of the app, with the option to copy it. 
* **Environment Name** – The name of the production environment to which the app is deployed.
* **Env ID** – The unique ID of the environment to which the app is deployed.
* **Deployment Type** – The target platform to which the app is deployed.
* **Usage Extracted On** – The date and time when usage information was last recorded.
* **Named Users** – The number of named users as seen in the app.
* **Actions** – This option is only relevant for single-app internal user subscriptions, and it allows you to assign such a subscription to the app. For details, refer to [Assigning Single-App Internal User Subscriptions](#assign-subscriptions). 

### Assigning Single-App Internal User Subscriptions {#assign-subscriptions}

If you have single-app internal user subscriptions in your account, you must assign them to an app environment deployed to production. Follow these steps to do that:

1. In the **Named Users** list, identify the app to which you want to assign a single-app internal user subscription, and click **Assign** at the end of its row.
2. In the **Assign Internal Single-App User Subscription** dialog box, select a subscription from the **Select Single-App User Subscription** list.
3. Click **Confirm**.

## Usage Report Tab

The **Usage Report** tab allows you to monitor user entitlements and consumption across all available subscription types over a period of one calendar month.     
The report is generated on the first day of every month for the previous month's usage. As such, the information on this tab is updated every month, and reflects the usage as processed on the last day of the previous month.

### Entitlements & Consumption

This is the information available in the **Entitlements & Consumption** section of the **Usage Report** tab:

* **Usage Month** – Allows you to select the month for which you want to see consumption information. By default, the field is set to the most recent month for which a report is available.
* Subscription cards – These cards display the entitlements and consumption as calculated on the last day of the selected month. 

In case of over-usage, which means that entitlements have been exceeded, apps continue to work, with no consequences to end-users. Over-usage needs to be discussed with the Mendix CSM or representative.

<!-- 

Usage in Apps
The Usage in Apps section of the Usage Report tab displays the number of consumption units per app, detailed as follows:

App Name – The name of the app where units were consumed.

Environment Name – The name of the app environment where units were consumed.

Deployment Type – The platform to which the app is deployed.

Multi-App Users – The number of multi-app users who consumed units in the app.

Single-App Users – The number of single-app users who consumed units in the app.

External Users – The number of external users who consumed units in the app.

-->
