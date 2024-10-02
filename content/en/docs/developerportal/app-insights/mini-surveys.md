---
title: "Mini Surveys"
url: /developerportal/app-insights/mini-surveys/
weight: 6
description: "The app development team can utilize Mendix's user-friendly [Mini Surveys](/appstore/modules/mendix-mini-surveys/) module to integrate surveys into their applications. This empowers the Product Owner (PO), Scrum Master, or the development team to craft surveys with personalized customizations, including survey goals, duration, and questionnaire types. After configuring the survey, end-users can conveniently submit their responses. Subsequently, the Product Owner, Scrum Master, or the team can analyze the survey results, extracting valuable insights."
---

## Introduction

The Mini Surveys feature is part of the Mendix App Insights collection of tools designed to help you collect and aggregate feedback from your customers. 

The Mini Surveys feature consists of two parts:

* A pop-up survey in your app for users to fill in

* A back-end dashboard in the [navigation pane](/developerportal/#navigation-pane) of **Apps** for you to create surveys and aggregate your survey results.

You begin by creating a mini survey from the **Mini Survey** page in the navigation pane of **Apps**, and then you implement the mini survey by configuring the [Mendix Mini Surveys](/appstore/modules/mendix-mini-surveys/) module in Studio Pro. After the mini survey is running, you can view responses that have been collected in Mini Surveys in the Mendix Portal and export the responses to an XLSX file.

This document first describes all the pages in Mini Surveys in **Apps**, and then it describes the procedure for running a mini survey.

## Mendix Mini Survey Configuration 

### Survey Overview {#survey-overview}

When you click **Mini Surveys** in the [navigation pane](/developerportal/#navigation-pane) for an app that already has existing mini surveys, the **Survey Overview** page opens first.

On the upper-left corner of the page, you can see the name of the app currently opened. Click the app name to open a drop-down list of other apps you can navigate to that have been previously opened for Mini Surveys.

The tabs of the **Survey Overview** page are described below.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/survey-overview.png" class="no-border" >}}

#### Active Tab {#active}

The **Active** tab shows all the mini surveys that are active for the app with the following details:

* **Survey ID** – This is the unique ID of the mini survey. You can also find this ID on the [survey details](#survey-details) page of the mini survey. You need to use the ID as input when you configure the Mendix Mini Surveys module in Studio Pro to implement the mini survey.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of responses that have been collected for the mini survey.
* **Status** – This shows the status of the mini survey. For more information, see the [Statuses of Mini Surveys](#survey-status) section.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Click the mini survey in a row on the list to see its [survey details](#survey-details) page.

##### Statuses of Mini Surveys {#survey-status}

A mini survey can have different statuses. You can check the status of a mini survey on the [Active](#active) tab.

Along its lifecycle, a mini survey can have the following statuses:

* **Draft** – This status means the mini survey is not finalized. You can still edit the survey and when you finalize it, you need to mark it as ready. Once you mark a survey as ready, its status changes to **Ready to Implement**.
* **Ready to Implement** – This status means the mini survey is finalized, but its start time is not reached yet. Once the start time is reached, its status changes to **Running**.
* **Running** – This status means the mini survey is currently running. Once the survey passes its end time, its status changes to **Evaluate Responses.**
* **Evaluate Responses** – This status means the mini survey has ended.

{{% alert color="info" %}}When a mini survey has the status of **Draft**, you can still edit everything in the survey. When a mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (for **Runtime** and **Toaster Placement**) in the survey.{{% /alert %}}

#### Archived Tab {#archived}

The **Archived** tab shows all the mini surveys that you are archived for the app. 

The list on this tab contains the following information:

* **Survey ID** – This is the unique ID of the mini survey.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of responses that were collected for the mini survey.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking the mini survey in a row on the list shows its [survey details](#survey-details) page.

#### Settings Tab {#settings}

On the **Settings** tab of **Survey Overview**, you can enable the test mode, and view or generate API keys.

* **Test Mode - For All Users** – After you enable this test mode, all users will become the testers of your survey. They will see the survey every time it is triggered. Their responses will not be saved, and therefore will not pollute the true survey results. You can view their responses on the [Test data](#test-data) tab of the survey details page. 
  
    * To enable this test mode, open your app in Studio Pro. In the **App Explorer**, go to **Marketplace modules > AppInsights_MiniSurvey > _SETUP > 2. Set API Key & mode.**, and set the **TEST_MODE** constant to **True**.
    
* **Test Mode - For Project Members** – After you enable this test mode, all team members of the app will become the testers of your survey. They will see the survey every time it is triggered. Their responses will not be saved, and therefore will not pollute the true survey results. You can view their responses on the [Test data](#test-data) tab of the survey details page.

    {{% alert color="info" %}}This test mode only works for app team members who are authenticated through Mendix SSO.{{% /alert %}} 

    * To enable this test mode, select **Yes** for **Test Mode - For Project Members** here.

* **API Keys** – You can view API keys here, or generate an API key if there is none available. You need to use the API key as input when you configure the Mendix Mini Surveys module in Studio Pro to implement the mini survey. You need only one API key per app.

    * To generate an API key, click **Generate API Key** here.
    * To view an existing API key, click the eye icon ({{% icon name="view-off" %}}) in the **View** column in the table.

### Survey Details {#survey-details}

When you click a mini survey on the [Survey Overview](#survey-overview) page, the survey details page of the mini survey opens.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/survey-details.png" class="no-border" >}}

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking **Share Link** copies the link to this page, which allows you to share the survey details with others.
* **Archive Survey** – Clicking **Archive Survey** archives the survey. Once a survey is archived, you can find it on the [Archived](#archived) tab of the **Survey Overview** page.
* **Export Responses** – Clicking **Export Responses** exports the responses that have been collected to an XLSX file.

Depending on the [status](#survey-status) of the mini survey, the survey details page may contain some or all of the following tabs: **Settings**, **Implementation**, **Responses**, and **Test data**.

#### Settings Tab {#survey-details-settings}

This tab is available for mini surveys with all the statuses. It gives an overview of the survey details, including **Survey ID**.

#### Implementation Tab {#survey-details-implementation}

This tab is available for mini surveys with the status of **Draft**, **Ready for Implement**, or **Running**.

On this tab, you can find information about how to implement the mini survey in Studio Pro. For a more detailed procedure, see the [Implement a Mini Survey](#implement-survey) section.

#### Responses Tab {#responses}

This tab is available for mini surveys with the status of **Running** or **Evaluating Responses**. 

On this tab, you can view all the responses that have been collected for the mini survey.

#### Test Data Tab {#test-data}

This tab is available for mini surveys with the status of **Ready for Implement** or **Running**.

This tab shows the test data that has been collected from testers in the test mode or Mendix SSO test users.

You can collect test data using two methods:

* Change the value of the **TEST_MODE** constant in the [Mendix Mini Surveys](/appstore/modules/mendix-mini-surveys/) module. This will show **[TEST_MODE]** on the survey widget UI.
* Select the **Enable Mendix SSO test users"** checkbox on the **Settings** tab of **Survey Overview**, which marks the app team members as testers. Note that if an app team member is not authenticated through Mendix SSO, this setting does not work for them. The survey widget will not show **[TEST_MODE]** on the UI.

## Running a Mini Survey

### Creating a Mini Survey {#create-survey}

To create a mini survey, follow these steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/) and click **Mini Surveys** in the sidebar. What you see depends on whether there are existing mini surveys for the app:

   * If there are existing mini surveys for the app, [Survey Overview](#survey-overview) opens, which lists all the existing mini surveys and shows the **Create New Survey** button
   * If there are no existing mini surveys for this app, you only see the **Create New Survey** button

2. Click **Create New Survey**.
3. Enter the following information for your mini survey:

   * **Background**
     * **Name** – Give the mini survey a name.
     * **Goal** – Describe the goal of the mini survey.
   * **Conditions** – The conditions you enter here do not affect the mini survey directly. You still need to configure these conditions later in Studio Pro.
     * **Where** – Describe the location where the mini survey appears.
     * **When & How** – Describe what can trigger the mini survey to appear.
     * **Target User Group (Optional)** – Describe the target user group you would like to reach. Leaving the text box empty means you would like to reach all users.
     * **Attachments (Optional)** – Add attachments if needed. Supported formats are Microsoft Office files, .*pdf*, .*text*, .*png*, and .*jpeg*.
   * **Settings** – The settings in this section take effect immediately. You do not need to implement these settings later in Studio Pro.
     * **Runtime** – Set the start and end time of the mini survey.
     * **Toaster Placement** – Set on which corner of the page the mini survey appears.
   * **Questions** – Set up to three questions per mini survey.

4. Click **Preview** to see how the mini survey looks once it is live.
5. If the preview looks good, click **Mark as Ready** to complete the creation of the survey. The survey details page opens and shows the **Survey ID**.
6. Copy the **Survey ID** and save it for later use. You will need it when you implement the mini survey. 

Now you can [implement the mini survey](#implement-survey).

### Editing a Mini Survey {#edit-survey}

To edit a mini survey, perform the following steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/).
2. Click **Mini Surveys** in the sidebar. The [Survey Overview](#survey-overview) page opens.
3. On the **Active** tab, click the mini survey that you want to edit. The [survey details](#survey-details) page opens.
4. Go to the **Settings** tab.
5. Depending on its [status](#survey-status), you can edit different parts of the survey:

   * If the mini survey has the status of **Draft**, you can edit everything in the mini survey. To edit the mini survey, click **Edit Draft** on the upper-right corner of the page, and then make changes.
   * If the mini survey has the status of **Ready to Implement**, **Running**, or **Evaluate Responses**, you can only edit the **Settings** section (for **Runtime** and **Toaster Placement**) in the survey. Click **Edit Settings** and then make the changes.

### Implementing a Mini Survey {#implement-survey}

Before the start time of the mini survey is reached, you should implement the survey in Studio Pro. Otherwise, users will not actually receive the mini survey, even if it has the [Status](#survey-status) of **Running** on the **Survey Overview** page. You can [reset the start time in the Settings section](#edit-survey) if you need more time to implement the survey in Studio Pro.

#### Obtaining an API Key {#obtain-api-key}

To obtain an API key for the implementation, follow these steps:

1. On the [Survey Overview](#survey-overview) page.
2. Go to the [Setting](#settings) tab.
3. Check the **API Keys** section:
    * If there is already an active API key, it is shown on the table. If it is suitable to use, click **View** to show the API key, then copy it and save it for later use.
    * If there is no active API key that you can use, generate one as follows:

        1. Click **Generate API Key**.
        2. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the new API key.
        3. Copy the new API key and save it for later use.

#### Installing and Configuring the Module

To install the [Mendix Mini Surveys](/appstore/modules/mendix-mini-surveys/) module, follow these steps:

1. Open your app in Studio Pro.
2. Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the module into your app.
3. Follow the instructions in the [Configuration](/appstore/modules/mendix-mini-surveys/#configuration) section in *Mendix Mini Surveys* to complete the implementation of the mini survey in Studio Pro.

### Viewing/Exporting Responses {#view-export-responses}

When the start time that you set for the mini survey is reached, the survey will start running automatically. Then you get [notifications](/developerportal/global-navigation/#notifications) on how many responses have been collected.

To check the responses that have been collected, follow these steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/).

2. Click **Mini Surveys** in the sidebar. The [Survey Overview](#survey-overview) page opens.

3. On the **Active** tab, click the mini survey to open the [survey details](#survey-details) page.

4. Go to the **Responses** tab to see all the responses that have been collected.

   To have a quick view of individual survey responses, click a response in the list at the bottom. A side panel opens and shows the details of the response.

5. To export the responses to an XLSX file, click **Export Responses** on the upper-right corner of the page.

### Survey Opt-out Rules

A mini survey has the following opt-out rules: 

* If a user has closed a survey, without answering any questions, then the survey will not show again to this user .

* If a user has answered one or more questions in a survey, but did not finished the survey, then the survey will show again. However, if the user has closed the survey before finishing for the second time, the survey will not show again to this user.
* If the user has answered all questions, then the survey will not show again to the user.

Survey opt-out rule is a variable cached to your internet browser. You can reset and show a survey multiple times by clearing your browser cache. If you are testing, Mendix recommends using the **TEST_MODE** constant to avoid clearing every time.

{{% alert color="info" %}}In a future release, we will allow you to customize these opt-out rules from the App Insights portal.{{% /alert %}} 

### Unfinished Surveys

If a user only answers one or two questions before they close the mini survey. The answers will be stored in your app. Every 15 minutes a scheduled event will submit all unfinished surveys collected in your app to the **Mini Surveys** in **Apps**. A survey answer must be more than one hour old before it is submitted by the scheduled event.

## Troubleshooting & FAQ

For troubleshooting information and FAQ, see the [Troubleshooting](/appstore/modules/mendix-mini-surveys/#troubleshooting) section and the [FAQ](/appstore/modules/mendix-mini-surveys/#faq) section in *Mendix Mini Surveys*.
