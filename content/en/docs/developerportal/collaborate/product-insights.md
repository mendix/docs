---
title: "Product Insights"
url: /developerportal/collaborate/product-insights/
category: "Collaboration"
weight: 4
description: "Describes how to set up mini surveys to gain product insights into your app and view and export the survey results."
tags: ["Product Insights", "Sprint", "Developer Portal"]
---

## 1 Introduction

With Product Insights in the Developer Portal and the [Product Insights](/appstore/modules/product-insights/) module in the Marketplace, you can set up mini surveys for a target user group which you would like to reach to collect their feedback, and gain valuable product insights.

You start with creating the mini survey with Product Insights in the Developer Portal. After that, you should implement the mini survey using the Product Insights module in Studio Pro. After the mini survey is up and running, you can view responses that have been collected in Product Insights in the Developer Portal, and export the responses to an XLSX file.

## 2 Pages in Product Insights in the Developer Portal 

### 2.1 My Projects Page

When you open Product Insights in the Developer Portal, the **My projects** page opens.

On the **My projects** page, you can see all the apps for which Product Insights are enabled. You can click an app to start creating a mini survey for that app. If your app does not appear on this page, you can [add the app](#add-new-project). {{% todo %}}Check if this is still applicable for the final product.{{% /todo %}}

On the upper-left corner of the page, you can see the name of the app that currently opens in Product Insights. Click the name opens a drop-down list that allows you to switch to a different app in Project Insights.

{{< figure src="/attachments/developerportal/collaborate/product-insights/app-drop-down-list.png" >}}

### 2.2 Survey Overview Page {#survey-overview}

When you [open an app](#open-app) in Product Insights, if the app already has existing mini surveys, the **Survey Overview** page opens. This page has three tabs: the **Active** tab, the **Archived** tab, and the **Settings** tab.

{{< figure src="/attachments/developerportal/collaborate/product-insights/survey-overview.png" >}}

#### 2.2.1 Active Tab {#active}

The **Active** tab shows all the mini surveys that are active for this app.

The list on this tab contains the following information:

* **Survey ID** – This is the unique ID of the mini survey. This ID is needed when the mini survey is implemented in Studio Pro. You can also find the survey ID on the [survey details](#survey-details) page.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of the responses that have been collected for the mini survey.
* **Status** – For more information, see the [Status of Mini Surveys](#survey-status) section.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking a row shows the [details](#survey-details) of the mini survey in that row.

##### 2.2.1.1 Status of Mini Surveys {#survey-status}

The mini survey can have different statuses. You can check its status on the [Survey Overview](#survey-overview) page.

Along its lifecycle, a mini survey can have the following statuses:

* **Draft** – A mini survey with the status of **Draft** is not finalized. You can still edit the survey and when you finalize it, you need to mark it as ready. Once you mark a survey as ready, its status changes to **Ready to Implement**.
* **Ready to Implement** – A mini survey with the status of **Ready to Implement** is finalized, but its start time is not reached yet. Once the start time is reached, its status changes to **Running**.
* **Running** – A mini survey with the status of **Running** is currently running. Once the survey past its end time, its status changes to **Evaluate Responses.**
* **Evaluate Responses** – A mini survey with the status of **Evaluate Responses** has ended.

{{% alert color="info" %}}When a mini survey has the status of **Draft**, you can still edit everything in the survey. <br/>When a mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (**Runtime** and **Toaster Placement**) in the survey.{{% /alert %}}

#### 2.2.2 Archived Tab {#archived}

The **Archived** tab shows all the mini surveys that you are archived for this app. 

The list on this tab contains the following information:

* **Survey ID** – This is the unique ID of the mini survey. The survey ID is needed when the mini survey is implemented in Studio Pro. You can also find the survey ID on the [survey details](#survey-details) page.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of the responses that have been collected for the mini survey.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking a row shows the [details](#survey-details) of the mini survey in that row.

#### 2.2.3 Settings Tab {#settings}

On the **Settings** tab, you can enable the test mode. Enabling this mode will mark the team members of this app as testers. Their responses will not be saved and they will see the survey every time it is triggered.

{{% alert color="info" %}}If a team member is not authenticated through Mendix SSO, the test mode does not work for them.{{% /alert %}} 

### 2.3 Product Insights Settings Page {#product-insights-settings}

When you click the settings icon on the [Survey Overview](#survey-overview) page, the **Product Insights Settings** page opens.

{{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

Here you can view the existing API key, or generate an API key if there is not any. This API key is needed when you implement the mini survey in Studio Pro. You need only one API key for all mini surveys.

The API key can be one of the following types:

* Development API key: This key should only be used in local test environments.
* Production API key: This key should only be used in production environments.

### 2.4 Survey Details Page {#survey-details}

When you click a row in the list on the [Active](#active) or [Archived](#archived) tab of the **Survey Overview** page, the survey details page opens.

{{< figure src="/attachments/developerportal/collaborate/product-insights/survey-details.png" >}}

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking **Share Link** copies the link to this page, which allows you to share the survey details page with others.
* **Archive Survey** – Clicking **Archive Survey** archives the survey. Once a survey is archived, you can find it on the [Archived](#archived) tab of the **Survey Overview** page.
* **Export Responses** – Clicking **Export Responses** exports the responses that have been collected to an XLSX file.

The survey details page can contain the **Settings** tab, the **Implementation** tab, the **Responses** tab, and the **Test data** tab – depending on the [status](#survey-status) of the mini survey, you may not see all three tabs.

#### 2.4.1 Settings Tab {#survey-details-settings}

The **Setting** tab is available for all the mini surveys. It gives an overview of all the survey details, including **Survey ID**.

#### 5.4.2 Implementation Tab {#survey-details-implementation}

The **Implementation** tab is available for mini surveys with the status of **Draft**, **Ready for Implement**, and **Running**.

On this tab, you can find information about how to implement the mini survey in Studio Pro. For a more step-by-step procedure, see the [Implement the Mini Survey in Studio Pro](#implement-survey) section.

#### 2.4.3 Responses Tab {#responses}

The **Responses** tab is available for mini surveys with the status of **Running** and **Evaluating Responses**. 

On this tab, you can view all the responses that have been collected for the mini survey.

#### 2.4.4 Test Data Tab

The **Test data** tab is available for mini surveys with the status of **Ready for Implement** and **Running**.

This tab shows the test data that has been collected from testers when they use a development API key in the test mode.

{{% alert color="info" %}}You can get a development API key on the [Product Insights Settings](#product-insights-settings) page.<br/>You can enable the test mode on the [Settings](#settings) tab of the **Survey Overview** page.{{% /alert %}}

## 3 Setting up a Mini Survey

### 3.1 Opening an App in Project Insights in the Developer Portal{#open-app}

To open an app in Product Insights, open the app in the Developer Portal and then click **Product Insights**.

{{% todo %}}Check how to open an app in the final product.{{% /todo %}}

### 3.2 Adding a New Project in Project Insights in the Developer Portal{#add-new-project}

1. Go to the [General Settings](/developerportal/collaborate/general-settings/) page in the Developer Portal for this app.

2. On the **General** tab, copy the **App ID**. 

3. Go to **Project Insights**. {{% todo %}}Check how to go to Project Insights from here.{{% /todo %}}

4. Paste the app ID in the text box, as shown in the screenshot below.

   {{< figure src="/attachments/developerportal/collaborate/product-insights/add-new-project.png" >}}

5. Click **Add project**.

The app should appear on the **My projects** page. {{% todo %}}Check if the My projects page still exists in the final product.{{% /todo %}}

### 3.3 Creating a Mini Survey in Project Insights in the Developer Portal {#create-survey}

1. [Open the app in Project Insights](#open-app) in the Developer Portal.

2. On the **My projects** page, click the app for which you want to create the mini survey. (If you cannot find the app on the **My projects** page, [add the app first](#add-new-project).){{% todo %}}Check if the My projects page still exists in the final product.{{% /todo %}}

   Depending on if there are existing surveys for this app, you see one of the following scenarios:

   * If there are already existing mini surveys for this app, the [Survey Overview](#survey-overview) page opens. The page lists all the existing mini surveys, and also shows the **Create New Survey** button.
   * If there are no existing mini surveys for this app, you only see the **Create New Survey** button.

3. Click **Create New Survey**. The **Create New Survey** page opens.

4. Enter the following information for your mini survey:

   * **Background**

     * **Name** – Give the mini survey a name.

     * **Goal** – Describe the goal of the mini survey.

   * **Conditions** – The conditions here you enter do not affect the mini survey directly. They still need to be implemented in Studio Pro.
     * **Where** – Describe the location where the mini survey appears.
     * **When & How** – Describe what can trigger the mini survey to appear.
     * **Target User Group (Optional)** – Describe the target user group which you would like to reach. Leaving the text box empty means you woud like to reach all users.
     * **Attachments (Optional)** – Add attachments if needed. Supported formats are office files, .*pdf*, .*text*, .*png*, and .*jpeg*.

   * **Settings** – The settings in this section are applied to the mini survey immediately. They do not need to be implemented in Studio Pro.
     * **Runtime** –  This defines the start and end time of the mini survey.
     * **Toaster Placement** – This defines at which corner of the page the mini survey appears.

   * **Questions** – You can set up to three questions per mini survey.

5. After you fill in all the information, you can perform one of the following actions by clicking the corresponding button at the bottom of the page:

   * **Preview** – If you click **Preview**, you can get a preview that shows how the mini survey looks once it is live.

   * **Save Draft** – If you click **Save Draft**, the mini survey is saved as a [draft](#survey-status). The **Survey Overview** page opens and shows that the mini survey has the **Status** of **Draft**. If you click mini survey, you can continue to edit it.

   * **Mark as Ready** – If you click **Mark as Ready**, the survey is finalized and it is [ready to implement](#survey-status). The [survey details](#survey-details) page opens. Save the **Survey ID** because you need it when you implement the mini survey in Studio Pro. Then you can proceed to [implement the mini survey in Studio Pro](#implement-survey)。

### 3.4 Editing a Mini Survey in Project Insights in the Developer Portal{#edit-survey}

To edit a mini survey, perform the following steps:

1. [Open the app in Project Insights](#open-app) in the Developer Portal.

2. On the **My projects** page, click the app for which you want to edit the mini survey. The [Survey Overview](#survey-overview) page opens.{{% todo %}}Check if the My projects page still exists in the final product.{{% /todo %}}

3. On the **Active** tab, click the mini survey. Depending on the [status](#survey-status) of the mini survey, you can edit different parts of the mini survey:

* If a mini survey has the status of **Draft**, you can still edit everything in the mini survey. To edit the mini survey, click **Edit Draft** on the upper-right corner of the page, and then make changes.
* If a mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (**Runtime** and **Toaster Placement**) in the mini survey. To edit the **Setting** section, click **Edit Settings** in the **Settings** section, and then make changes.

## 4 Implementing a Mini Survey in Studio Pro {#implement-survey}

{{% alert color="info" %}}Make sure that you implement the survey in Studio Pro before the start time of the mini survey. Otherwise, even if the mini survey has the [Status](#survey-status) of **Running** on the **Survey Overview** page, users do not actually receive the mini survey. You can [reset the start time in the Settings section](#edit-survey) if you need more time to implement the survey in Studio Pro.{{% /alert %}}

1. Generate an API key as follows:

   1. [Open the app in Project Insights](#open-app) in the Developer Portal.

   2. On the **My projects** page, click the app for which you want to implement the mini survey. The [Survey Overview](#survey-overview) page opens.{{% todo %}}Check if the My projects page still exists in the final product.{{% /todo %}}

   3. Click the settings icon on the [Survey Overview](#survey-overview) page, the [Product Insights Settings](#product-insights-settings) page opens.

      {{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

   4. Click **General API Key**.

   5. Choose whether the API key is a **Development Key** or **Product Key**. 

   6. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the API key generated.

2. Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the [Product Insights](#needs-url) module into your app.

3. [Configure the Product Insights module](/appstore/modules/product-insights/#configuration) to implement the mini survey in Studio Pro.

## 5 Viewing and Exporting Responses of a Mini Survey

When the start time that you set for the mini survey is reached, the survey will start running automatically. Then you get [notifications](/developerportal/#notifications) on how much responses that have been collected.

To check the responses that have been collected, open the [survey details page](#survey-details). The responses are shown on the [Responses](#responses) tab.

To export the responses to an XLSX file, click **Export Responses** on the upper-right corner of the survey details page.
