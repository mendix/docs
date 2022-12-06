---
title: "Product Insights"
url: /developerportal/collaborate/product-insights/
category: "Collaboration"
weight: 4
description: "Describes how to set up mini surveys to gain product insights into your app and view and export the survey results."
tags: ["Product Insights", "Sprint", "Developer Portal"]
---

## 1 Introduction

By using Product Insights in the Developer Portal and the Product Insights - Mini Survey module in the Marketplace, you can set up mini surveys for a target user group that you would like to reach to collect their feedback and gain valuable product insights.

This document first describes all the pages in Product Insights in the Developer Portal, and then describes the procedure on how to run a mini survey: you begin with creating the mini survey with Product Insights in the Developer Portal, and then you should implement the mini survey by configuring the Product Insights module in Studio Pro. After the mini survey is up and running, you can view responses that have been collected in Product Insights in the Developer Portal, and export the responses to an XLSX file.

## 2 Pages in Product Insights in the Developer Portal 

### 2.1 Survey Overview Page {#survey-overview}

When you open an app in Product Insights, if the app already has existing mini surveys, the **Survey Overview** page opens.

On the upper-left corner of the page, you can see the name of the app that currently opens in Product Insights. Click the app name opens a drop-down list, which shows other apps that have been previously opened in Product Insights – if you select one of these apps, it opens in Project Insights.

{{< figure src="/attachments/developerportal/collaborate/product-insights/app-drop-down-list.png" >}}

The **Survey Overview** page has three tabs: the **Active** tab, the **Archived** tab, and the **Settings** tab.

{{< figure src="/attachments/developerportal/collaborate/product-insights/survey-overview.png" >}}

#### 2.1.1 Active Tab {#active}

The **Active** tab shows all the mini surveys that are active for the app.

The list on this tab contains the following information:

* **Survey ID** – This is the unique ID of the mini survey. You can also find the survey ID on the [survey details](#survey-details) page of the mini survey. You need to use the survey ID as input when you configure the Product Insights - Mini Survey module in Studio Pro to implement the mini survey.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of the responses that have been collected for the mini survey.
* **Status** – This shows the status of the mini survey. For more information, see the [Statuses of Mini Surveys](#survey-status) section.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking the mini survey in a row on the list shows its [survey details](#survey-details) page.

##### 2.1.1.1 Statuses of Mini Surveys {#survey-status}

A mini survey can have different statuses. You can check the status of a mini survey on the [Active](#active) tab.

Along its lifecycle, a mini survey can have the following statuses:

* **Draft** – A mini survey with the status of **Draft** is not finalized. You can still edit the survey and when you finalize it, you need to mark it as ready. Once you mark a survey as ready, its status changes to **Ready to Implement**.
* **Ready to Implement** – A mini survey with the status of **Ready to Implement** is finalized, but its start time is not reached yet. Once the start time is reached, its status changes to **Running**.
* **Running** – A mini survey with the status of **Running** is currently running. Once the survey past its end time, its status changes to **Evaluate Responses.**
* **Evaluate Responses** – A mini survey with the status of **Evaluate Responses** has ended.

{{% alert color="info" %}}When a mini survey has the status of **Draft**, you can still edit everything in the survey. <br/>When a mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (**Runtime** and **Toaster Placement**) in the survey.{{% /alert %}}

#### 2.1.2 Archived Tab {#archived}

The **Archived** tab shows all the mini surveys that you are archived for the app. 

The list on this tab contains the following information:

* **Survey ID** – This is the unique ID of the mini survey.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of the responses that were collected for the mini survey.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking the mini survey in a row on the list shows its [survey details](#survey-details) page.

#### 2.1.3 Settings Tab {#settings}

On the **Settings** tab of the **Survey Overview** page, you can enable the test mode. Enabling this mode marks the team members of this app as testers. Testers will see the survey every time it is triggered, and their responses will not be saved. You can view all the test data on the [Test data](#test-data) tab of the survey details page.

{{% alert color="info" %}}If a team member is not authenticated through Mendix SSO, the test mode does not work for them.{{% /alert %}} 

### 2.2 Survey Details Page {#survey-details}

When you click a mini survey on the [Survey Overview](#survey-overview) page, the survey details page of the mini survey opens.

{{< figure src="/attachments/developerportal/collaborate/product-insights/survey-details.png" >}}

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking **Share Link** copies the link to this page, which allows you to share the survey details page with others.
* **Archive Survey** – Clicking **Archive Survey** archives the survey. Once a survey is archived, you can find it on the [Archived](#archived) tab of the **Survey Overview** page.
* **Export Responses** – Clicking **Export Responses** exports the responses that have been collected to an XLSX file.

Depending on the [status](#survey-status) of the mini survey, the survey details page may contain some or all of the following tabs: the **Settings** tab, the **Implementation** tab, the **Responses** tab, and the **Test data** tab.

#### 2.2.1 Settings Tab {#survey-details-settings}

The **Setting** tab is available for mini surveys with all the statuses. It gives an overview of the survey details, including **Survey ID**.

#### 2.2.2 Implementation Tab {#survey-details-implementation}

The **Implementation** tab is available for mini surveys with the status of **Draft**, **Ready for Implement**, or **Running**.

On this tab, you can find information about how to implement the mini survey in Studio Pro. For a more detailed procedure, see the [Implement a Mini Survey](#implement-survey) section instead.

#### 2.2.3 Responses Tab {#responses}

The **Responses** tab is available for mini surveys with the status of **Running** or **Evaluating Responses**. 

On this tab, you can view all the responses that have been collected for the mini survey.

#### 2.2.4 Test Data Tab {#test-data}

The **Test data** tab is available for mini surveys with the status of **Ready for Implement** or **Running**.

This tab shows the test data that has been collected from testers in the test mode.

You can collect test data using two methods:

* Change the value of the **TEST_MODE** constant in the Product Insights module. This will show **[TEST_MODE]** on the survey widget UI.
* Select the **Test Mode** check box on the **Settings** tab of the **Survey Overview** page. Enabling this mode will mark this project's team members as testers. This will not work if the project member is not authenticated through Mendix SSO. The survey widget will not show **[TEST_MODE]** on the UI.
    
### 2.3 Product Insights Settings Page {#product-insights-settings}

When you click the settings icon on the [Survey Overview](#survey-overview) page, the **Product Insights Settings** page opens.

{{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

Here you can view the existing API key, or generate an API key if there is not one available. You need to use the API key as input when you configure the Product Insights - Mini Survey module in Studio Pro to implement the mini survey. You need only one API key per app.

## 3 Running a Mini Survey

### 3.1 Creating a Mini Survey {#create-survey}

1. Open the app in the Developer Portal.
2. Click **Product Insights**. Depending on if there are existing mini surveys for this app, you see one of the following scenarios:

   * If there are already existing mini surveys for this app, the [Survey Overview](#survey-overview) page opens. The page lists all the existing mini surveys, and also shows the **Create New Survey** button.
   * If there are no existing mini surveys for this app, you only see the **Create New Survey** button.
3. Click the **Create New Survey** button. The **Create New Survey** page opens.
4. Enter the following information for your mini survey:

   * **Background**

     * **Name** – Give the mini survey a name.

     * **Goal** – Describe the goal of the mini survey.

   * **Conditions** – The conditions here you enter do not affect the mini survey directly. You still need to configure these conditions later in Studio Pro.
     * **Where** – Describe the location where the mini survey appears.
     * **When & How** – Describe what can trigger the mini survey to appear.
     * **Target User Group (Optional)** – Describe the target user group which you would like to reach. Leaving the text box empty means you woud like to reach all users.
     * **Attachments (Optional)** – Add attachments if needed. Supported formats are office files, .*pdf*, .*text*, .*png*, and .*jpeg*.

   * **Settings** – The settings in this section take effect immediately. You do not need to implement these settings later in Studio Pro.
     * **Runtime** –  Set the start and end time of the mini survey.
     * **Toaster Placement** – Set on which corner of the page the mini survey appears.

   * **Questions** – Set up to three questions per mini survey.
5. Click **Preview** to see how the mini survey looks once it is live.
6. If the preview looks good, click **Mark as Ready** to complete the creation of the survey. The survey details page opens and shows the **Survey ID**.
7. Copy the **Survey ID** and save it for later use. You will need it when you implement the mini survey. 

Now you can proceed to [implement the mini survey](#implement-survey).

### 3.2 Editing a Mini Survey {#edit-survey}

To edit a mini survey, perform the following steps:

1. Open the app in the Developer Portal.

2. Click **Product Insights**. The [Survey Overview](#survey-overview) page opens.

3. On the **Active** tab, click the mini survey that you want to edit. The survey details page opens.

4. Go to the **Settings** tab.

5. Depending on the [status](#survey-status) of the mini survey, you can edit different parts of the survey:

   * If a mini survey has the status of **Draft**, you can edit everything in the mini survey. To edit the mini survey, click **Edit Draft** on the upper-right corner of the page, and then make changes.

   * If a mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (**Runtime** and **Toaster Placement**) in the mini survey. To edit the **Setting** section, click **Edit Settings** in the **Settings** section, and then make changes.


### 3.3 Implementing a Mini Survey {#implement-survey}

Before the start time of the mini survey is reached, you should implement the survey in Studio Pro. Otherwise, users do not actually receive the mini survey even if the mini survey has the [Status](#survey-status) of **Running** on the **Survey Overview** page. You can [reset the start time in the Settings section](#edit-survey) if you need more time to implement the survey in Studio Pro.

#### 3.3.1 Obtaining an API Key {#obtain-api-key}

1. Open the app in the Developer Portal.
2. Click **Product Insights**. The [Survey Overview](#survey-overview) page opens.
3.  Click the settings icon on the [Survey Overview](#survey-overview) page.

    {{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

    The [Product Insights Settings](#product-insights-settings) page opens:

    *  If there is already an active API key, it is shown on the list. If it is suitable to use, click **View** to show the API key, then copy it, and save it for later use.

    *  If there is no active API key that you can use, generate one as follows:
      
        1. Click **Generate API Key**.
        2. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the new API key.
        3. Copy the new API key, and save it for later use.

#### 3.3.2 Installing the Product Insights - Mini Survey Module in Your App

1. Open your app in Studio Pro.
2. Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the Product Insights - Mini Survey module into your app.

#### 3.3.3 Configuring the Product Insights - Mini Survey Module

Follow the instruction in the [Configuration](/appstore/modules/product-insights/#configuration) section in *Product Insights* to complete the implementation of the mini survey in Studio Pro.

### 3.4 Viewing and Exporting Responses of a Mini Survey {#view-export-responses}

When the start time that you set for the mini survey is reached, the survey will start running automatically. Then you get [notifications](/developerportal/#notifications) on how much responses that have been collected.

To check the responses that have been collected, do as follows:

1. Open the app in the Developer Portal.
2. Click **Product Insights**. The [Survey Overview](#survey-overview) page opens.
4. On the **Active** tab, click the mini survey to open the [survey details](#survey-details) page.
5. Go to the **Responses** tab to see all the responses that have been collected.
6. To export the responses to an XLSX file, click **Export Responses** on the upper-right corner of the page.
