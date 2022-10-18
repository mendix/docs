---
title: "Product Insights"
url: /developerportal/collaborate/product-insights/
category: "Collaboration"
weight: 4
description: "Describes how to design mini surveys to gain product insights into your app and view the survey results."
tags: ["Product Insights", "Sprint", "Developer Portal"]
---

## 1 Introduction

With Product Insights in Developer Portal and the [Product Insights](needs-url) module in the Marketplace, you can set up mini surveys for a target user group which you would like to reach, collect their feedback, and gain valuable product insights.

You start with setting up the mini survey with Product Insights in the Developer Portal. After that, based on your requirements the developer of the app can [implement the mini survey in Studio Pro](#implement-survey). After the mini survey is up and running, you can view the data that the survey has collected in Product Insights in Developer Portal, and export the data to an XLSX file.

## 2 Pages in Product Insights

### 2.1 My Projects Page

After you open Product Insights, **My projects** page opens.

On the **My projects **page, you can see all the apps for which Product Insights are enabled. You can click an app to start setting up a mini survey for that app. If your app does not appear here, you can [add a new project](#add-new-project). {{% todo %}}Check if this is still applicable for the final product.{{% /todo %}}

On the upper-left corner, you can see the name of the app that opens in Product Insights. Click the name opens a drop-down list that allows you to open another app in Project Insights.

{{< figure src="/attachments/developerportal/collaborate/product-insights/app-drop-down-list.png" >}}

### 2.2 Survey Overview Page {#survey-overview}

If you [open an app](open-app) with existing surveys in Product Insights, the **Survey Overview** page opens.

#### 2.2.1 Active Tab

The **Active** Tab shows all the mini surveys that are active.

You can see the following information:

* Survey ID – This is the unique ID of the mini survey. This ID is needed as input when the mini survey is implemented in Studio Pro.
* Name – This is the name of the mini survey.
* Responses – This is the number of the responses that have been collected for the mini survey.
* Status – For more informations, see [Status of Mini Surveys](#survey-status).
* Start & End Dates – This shows the start and end dates for the mini survey.
* Created on – This shows when the mini survey was created.

Clicking a survey opens the [survey details](#survey-details) page.

##### 2.2.1.1 Status of Mini Surveys {#survey-status}

The mini survey can have different statuses. You can check its status on the Survey Overview page.

Along its lifecycle, a mini survey has the following status:

* **Draft** – A mini survey with the status of **Draft** is not finalized. Once the survey is marked as ready, its status changes to **Ready to Implement**. While a survey is in **Draft**, you can still make changes to everything in the survey. 
* **Ready to Implement** – A mini survey with the status of **Ready to Implement** is finalized, but its start time is not reached yet. Once the start time is reached, its status change to **Running**. While a survey is **Ready to Implement**, you can only make changes to the **Settings** section (**Runtime** and **Toaster Placement**) section.
* **Running** – A mini survey with the status of **Running** is currently running. Once the survey past its end time, its status changes to **Evaluate Responses.** While a survey is **Running**, you can only make changes to the **Settings** section (**Runtime** and **Toaster Placement**) section. 
* **Evaluate Responses **– A mini survey with the status of **Evaluate Responses** has ended. After a survey is ended, you can only make changes to the **Settings** section (**Runtime** and **Toaster Placement**) section.

#### 2.2.2 Archived Tab

The **Archived** tab shows all the mini surveys that you are archived. Clicking a survey opens the [survey details](#survey-details) page.

#### 2.2.3 Settings Tab

On the **Settings** tab, you can enable the test mode. Enabling this mode will mark this project team members as testers. Their responses will not be saved and they will see the survey every time it is triggered. This will not work if the project member is not authenticated through Mendix SSO.

### 2.3 Product Insights Settings Page

If you click the settings icon on the [Survey Overview](#survey-overview) page, the **Product Insights Settings** page opens.

{{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

On this page, you can view the existing API key or generate an API key. The API key is needed as input when the mini survey is implemented in Studio Pro. You only need one API key for all the mini surveys.

### 2.4 Survey Details Page {#survey-details}

If you click a survey in the list on the [Survey Overview](#survey-overview) page, the survey details page opens.

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking it coped the link to this page, which you can share with others.
* **Archive Survey** – Clicking it archives the survey. You can find all the archived survey on the [Archived](#archived) tab on the **Survey Overview** page.
* **Export Responses** – Clicking it enable you to export responses to an XLSX file.

The tabs on this page are described below.

#### 2.4.1 Settings Tab

The **Setting** tab is available for all the surveys. It gives an overview of all the survey details. 

#### 2.4.2 Implementation Tab

The **Implementation** tab is available for surveys with the status of **Draft**, **Ready for Implement**, and **Running**.

On this tab, you can find instructions on how to implement the mini survey in Studio Pro. For a more step-by-step procedure, see [Implement the Mini Survey in Studio Pro](#implement-surey)

#### 2.4.3 Responses Tab

The **Responses** tab is available for surveys with the status of **Running** and **Evaluating Responses**. 

On this tab, you can view all the responses that have been collected.

#### 2.4.4 Test Data Tab

The **Test Data** tab is available for surveys with the status of **Ready for Implement** and **Running**.

On this tab, you can view all the test data. {{% todo %}}What are you looking at exactly here?{{% /todo %}}

## 3 Using Product Insights in Developer Portal

### 3.1 Opening an App in Project Insights {#open-app}

To open an app in Product Insights, open the app in Developer Portal and then click **Product Insights**. {{% todo %}}Check if this is applicable for the final product.{{% /todo %}}

### 3.2 Adding a New Project {#add-new-project}

1. Go to the [General Settings](/developerportal/collaborate/general-settings/#2-general) page in Developer Portal for this app.

2. On the **General** tab, copy the **App ID**. 

3. Go to **Project Insights**.

4. Paste the app ID in the text box, as shown in the screenshot below.

   {{< figure src="/attachments/developerportal/collaborate/product-insights/add-new-project.png" >}}

5. Click **Add project**.

The app should appear on the **My projects **page. {{% todo %}}Check if **My projects** is still for the final product.{{% /todo %}}

### 3.3 Setting up a Mini Survey {#set-up-survey}

1. [Open the app in Project Insights](#open-app) in Developer Portal.

2. On the **My projects** page, click the app for which you want to set up the mini survey. If the app does not appear here, [add a new project first](#aa-new-project).{{% todo %}}Check if My projects page is still for the final product.{{% /todo %}}

   If there are existing surveys for this app, the [Survey Overview](#survey-overview) page opens and lists all the existing surveys. The page also shows the **Create New Survey** button.

   If there are no existing surveys for this app, you only see the **Create New Survey** button.

3. Click **Create New Survey**. The **Create New Survey** page opens.

4. Enter the following information for your mini survey:

   * **Background**

     * **Name** – Give the mini survey a name.

     * **Goal** – Describe the goal of the mini survey.

   * **Conditions** – The conditions here you enter do no have effects on the mini survey directly. They still need to be implemented in Studio Pro.
     * **Where** – Describe the location where the mini survey appears.
     * **When & How** – Describe what can trigger the mini survey to appear.
     * **Target User Group (Optional)** – Describe the target user group which you would like to reach. Leaving the text box empty means you woud like to reach all users.
     * **Attachments (Optional)** – Add attachments if needed. Supported formats are office files, .*pdf*, .*text*, .*png*, and .*jpeg*.

   * **Settings** – The settings in this section will be applied to the mini survey immediately. They do not need to be implemented in Studio Pro.
     * **Runtime** –  This defines the start and end time for the mini survey.
     * **Toaster Placement** – This defines at which corner of the page the mini survey will appear.

   * **Questions** – You can set up to three questions per survey.

5. After you fill in all the information, you can perform one of the following actions by clicking the corresponding button at the bottom of the page:

   * **Preview** – If you click **Preview**, you can get a preview that shows how the mini survey looks once it is live.

   * **Save Draft** – If you click **Save Draft**, the mini survey is saved as a [draft](#survey-status). You can see it on the **Survey Overview** page with its **Status** as **Draft**. If you click the draft, you can continue editing the draft survey.

   * **Mark as Ready** – If you click **Mark as Ready**, the survey is saved and it is [ready for implementation](#survey-status). 

     The [survey details](#survey-details) page opens. You need to save the **Survey ID**, and then proceed to [implement the mini survey in Studio Pro](#implement-survey). 

     {{% alert color="info" %}}After you mark a mini survey as ready, you can only make changes in the **Settings** section (**Runtime** and **Toaster Placement**).If you make changes in this section, they are applied to the survey immediately.{{% /alert %}}


### 3.4 Implement the Mini Survey in Studio Pro {#implement-survey}

1. Generate an API key as follows:

   1. Go to the [Product Insights Settings](#product-insights-settings) page.

   2. Click **General API Key**.

   3. Choose whether the API key is a **Development Key** or **Product Key**. 

   4. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the API key generated.

2. Open your app in Studio Pro.

3. Installing the Product Insights module in your app by following the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

4. In **App Explorer**, go to **Marketplace modules** > **ProductInsights_Survey**.

5. Open the **_SETUP** folder.

6. Open the **Set API Key** folder, set the constant **APIKEY_PRODUCTINSIGHTS** to the API key that you generated, and then save the changes.

7. Open the **Put Survey Widget On Template** folder, and place **Template_SurveyWidget** on the page where you would like the survey to appear.

8. Open the **Trigger Survey** folder, and copy the **TriggerSurvey** nanoflow to your own module.

9. Set up the **TriggerSurvey** nanoflow as follows:

   1. Double-click **Create String variable**, and fill in the survey ID that you copied from Product Insights in Developer Portal, and save the changes.
   2. Double-click **CHANGE ME**, add your microflow or nanoflow action there, and then save the changes.

10. Create a button that calls the **TriggerSurvey** nanoflow on the same page as **Template_SurveyWidget**. We recommend renaming the flow to something that describes the original action.

11. In App Explorer, double-click **Security**, and add the **ProductInsights_Survey.Use**r user role to all the system roles which might use the survey in the **App Security** dialog box.

### 3.5 Viewing and Exporting Responses

When the start time that you set for the mini survey is reached, the survey will start running automatically. Then you get [notifications](/developerportal/#notifications) on how much data you have collected. Once some data is collected, you can view it in Product Insights in Developer Portal.

{{% alert color="info" %}}Make sure that you have [implemented the survey in Studio Pro](#implement-survey) before the start time. Otherwise, even if the survey has the **Status** of **Running** on the **Survey Overview** page, the users do not actually receive the mini survey. You can [reset the start time in the Settings section](#set-up-survey) if you need more time to implement the survey in Studio Pro.{{% /alert %}}

To check the responses that have been collected, open the [survey details page](#survey-details). The responses are shown on the [Responses](#responses) tab.

To export the responses to an XLSX file, click **Export Responses** on the upper-right corner.
