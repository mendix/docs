---
title: "End-Users"
url: /control-center/end-users/
description: "Describes the End-Users page in the Mendix Control Center."
weight: 30
no_list: false 
beta: true
---

{{% alert color="warning" %}}
This feature is in Private Beta. For more information, refer to [Release Status](/releasenotes/release-status/).
{{% /alert %}}

## Introduction

End-user metering is a process that accurately measures the number and types of users interacting with Mendix apps. This is important for ensuring transparency and compliance with license agreements, while optimizing licensing costs. 

The **End-Users** page allows you to keep track of end-user licenses and usage for all apps across your company.

### User Types

Mendix differentiates between these types of users:

* Multi-app internal user – An employee or a contractor of the customer or of the affiliated company or group who can access any number of apps.     
    The associated licensing model is **Multi-App Internal User Pack**.
* Single-app internal user – An employee or a contractor of the customer or of the affiliated company or group who is licensed for one specific app.    
    The associated licensing model is **Single-App Internal User Pack**.
* External user – A user who is not an employee or a contractor of the customer or of the affiliated company or group.    
    The associated licensing model is **External User Pack**.

For details, refer to [...](link to the main User Metering page in Deployment/Licensing).

### User Metering Process

User metering consists of an automated five-step process:

1. In-app user classification – Your app logic is responsible for creating and maintaining user records.
2. Data collection – All apps deployed to Mendix Cloud and Mendix Cloud Dedicated automatically send usage data to the Mendix platform.
3. Data aggregation and deduplication – The Mendix platform processes the data collected during the first step.
4. User classification – Mendix classifies users as:

    * External users
    * Single-App users
    * Multi-App internal users    

5. Reporting – End-of-month usage reports are generated and made available on the 1st of every month for the previous month.

For details on the user metering process, refer to [[...](link to the main User Metering page in Deployment/Licensing).

## Overview Tab

The **Overview** tab displays end-user entitlements, and named user details. It also allows you to assign Internal single-app user packs.

### End-User Entitlements

The card in this section display the number of users who have licensing entitlements, grouped by user type. Each card also includes the expiration date of those licenses.

The information is updated daily.

### Named Users

[…]

### Assigning Single-App Internal User Packs

If you have single-app internal user packs in your account, you can assign them to apps deployed to production. Follow these steps to do that:

1. In the **Named Users** list, identify the app to which you want to assign a single-app internal user pack, and click **Assign** at the end of its row.
2. In the **Assign Internal Single-App User Pack** dialog box, select a pack from the **Select Single-app User Pack** list.
3. Click **Confirm**.

## Usage Report Tab

The **Usage Report** tab allows you to monitor user entitlements and consumption across all available license types over a period of one month.     
The report is generated on the first day of every month for the previous month's usage. As such, the information on this tab is updated every month, and reflects the usage as processed on the last day of the previous month.

### Entitlements & Consumption

This is the information available in the **Entitlements & Consumption** section of the **Usage Report** tab:

* **Time Period** – Allows you to select the month for which you want to see consumption information. By default, the field is set to the most recent month for which a report is available.
* Consumption pack cards – These cards display the number of licenses used out of the total provided by each pack. <!-- are these packs new? should we document them? perhaps in Cloud Resource Packs (https://docs.mendix.com/developerportal/deploy/mendix-cloud-deploy/#resource-pack)? -->

### Usage in Apps

The **Usage in Apps** section of the **Usage Report** tab displays the number of consumption units per app, detailed as follows:

* **App Name** – The name of the app where units were consumed.
* **Environment Name** – The name of the app environment where units were consumed.
* **Deployment Type** – The platform to which the app is deployed.
* **Multi-App Users** – The number of multi-app users who consumed units in the app.
* **Single-App Users** – The number of single-app users who consumed units in the app.
* **External Users** – The number of external users who consumed units in the app.

## Activity Log Tab

[...]
