---
title: "Mini Surveys"
url: /developerportal/app-insights/mini-surveys/
weight: 6
description: "The app development team can utilize Mendix's user-friendly [Mini Surveys](/appstore/modules/mendix-mini-surveys/) module to integrate surveys into their applications. This empowers the Product Owner (PO), Scrum Master, or the development team to craft surveys with personalized customizations, including survey goals, duration, and questionnaire types. After configuring the survey, end-users can conveniently submit their responses. Subsequently, the Product Owner, Scrum Master, or the team can analyze the survey results, extracting valuable insights."
---

## Introduction

Mini Surveys is a part of Mendix App Insights, a set of tools designed to help you gather and consolidate feedback from your customers.

The Mini Surveys feature consists of two parts:

* A pop-up survey in your app for users to fill in

* A back-end dashboard in the [navigation pane](/developerportal/#navigation-pane) of **Apps** for you to create surveys and aggregate your survey results.

You begin by creating a mini survey from the **Mini Survey** page in the navigation pane of **Apps**, and then you implement the mini survey by configuring the [Mendix Mini Surveys](/appstore/modules/mendix-mini-surveys/) module in Studio Pro. After the mini survey has started, you can view responses that have been collected in Mini Surveys in the Mendix Portal and export the responses to an XLSX file.

This document first describes all the pages in Mini Surveys in **Apps**, and then it describes the procedure for running a mini survey.

## Mendix Mini Survey Configuration 

### Survey Overview {#survey-overview}

When you click **Mini Surveys** in the [navigation pane](/developerportal/#navigation-pane) for an app that already has existing mini surveys, the **Survey Overview** page opens first.

On the upper-left corner of the page, you can see the name of the app currently opened. Click the app name to open a drop-down list of other apps you can navigate to that have been previously opened for Mini Surveys.

The tabs of the **Survey Overview** page are described below.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/survey-overview.png" class="no-border" >}}

#### Active Tab {#active}

The **Active** tab shows all the mini surveys that are active for the app with the following details:

* **ID** – This is the unique ID of the mini survey. You can also find this ID on the [survey details](#survey-details) page of the mini survey. You need to use the ID as input when you configure the Mendix Mini Surveys module in Studio Pro to implement the mini survey.
* **Name** – This is the name of the mini survey.
* **Location** - The Location is an identifier which refers to the location of where the survey will show.
* **Responses** – This shows the number of responses that have been collected for the mini survey.
* **Status** – This shows the status of the mini survey. For more information, see the [Statuses of Mini Surveys](#survey-status) section.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Click the mini survey in a row on the list to see its [survey details](#survey-details) page.

##### Statuses of Mini Surveys {#survey-status}

A mini survey can have different statuses. You can check the status of a mini survey on the [Active](#active) tab.

Along its lifecycle, a mini survey can have the following statuses:

* **Draft** – This status means the mini survey is not finalized. You can still edit the survey and when you finalize it, you need to schedule it. Once you schedule a survey, its status changes to **Scheduled**.
* **Scheduled** – This status means the mini survey is finalized, but its start time is not reached yet. Once the start time is reached, its status changes to **Active**.
* **Active** – This status indicates that the mini survey is currently running. After the survey reaches its end time, the status will change to **Finished.** Keep in mind that only one survey can be active at a time for each Survey Location.
* **Finished** – This status means the mini survey has ended.

{{% alert color="info" %}}When a mini survey has the status of **Draft**, you can still edit everything in the survey. When a mini survey has the status of **Scheduled**, **Active**, or **Finished**, you can only edit the **Settings** section (for **Runtime** and **Toaster Placement**) in the survey.{{% /alert %}}

#### Archived Tab {#archived}

The **Archived** tab shows all the mini surveys that you are archived for the app. 

The list on this tab contains the following information:

* **ID** – This is the unique ID of the mini survey.
* **Name** – This is the name of the mini survey.
* **Responses** – This shows the number of responses that were collected for the mini survey.
* **Start & End Dates** – This shows the start and end dates of the mini survey.
* **Created on** – This shows when the mini survey was created.

Clicking the mini survey in a row on the list shows its [survey details](#survey-details) page.

#### Settings Tab {#settings}

On the **Settings** tab of **Survey Overview**, you can view or generate API keys.

* **API Keys** – You can view API keys here, or generate an API key if there is none available. You need to use the API key as input when you configure the Mendix Mini Surveys module in Studio Pro to implement the mini survey. You need only one API key per app.

    * To generate an API key, click **Generate API Key** here.

### Survey Details {#survey-details}

When you click a mini survey on the [Survey Overview](#survey-overview) page, the survey details page of the mini survey opens.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/survey-details.png" class="no-border" >}}

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking **Share Link** copies the link to this page, which allows you to share the survey details with others.
* **Archive Survey** – Clicking **Archive Survey** archives the survey. Once a survey is archived, you can find it on the [Archived](#archived) tab of the **Survey Overview** page.
* **Export Responses** – Clicking **Export Responses** exports the responses that have been collected to an XLSX file.
* **Delete Survey** - Clicking **Delete Survey** will delete the survey.

Depending on the [status](#survey-status) of the mini survey, the survey details page may contain some or all of the following tabs: **Settings**, and **Responses**.

#### Settings Tab {#survey-details-settings}

This tab is available for mini surveys with all the statuses. It gives an overview of the survey details, including **Survey ID**.

#### Responses Tab {#responses}

This tab is available for mini surveys with the status of **Active** or **Finished**. 

On this tab, you can view all the responses that have been collected for the mini survey.

## Running a Mini Survey

### Creating a Mini Survey {#create-survey}

To create a mini survey, follow these steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/) and click **Mini Surveys** in the sidebar. What you see depends on whether there are existing mini surveys for the app:

   * If there are existing mini surveys for the app, [Survey Overview](#survey-overview) opens, which lists all the existing mini surveys and shows the **Create New Survey** button
   * If there are no existing mini surveys for this app, you only see the **Create New Survey** button

2. Click **Create New Survey** to open the survey wizard.
3. Enter the following information for your mini survey:

   * **Context**
     * **Survey Title** – Give the mini survey a name.
     * **Description** – Give additional information on your survey.
     * **Start date & End date** – Set the start and end time of the mini survey.
     * **Survey Location** - Select the location of the survey widget 
   * **Questions**
     * On this page, you can set up to three questions per mini survey.
       * **Open Question** - Create a question where the user can fill in their own answer
       * **Score** - Creates a question where a user can give a star or emoji rating
       * **Multiple Choice** - Creates a question where you can set up to 4 answers for the user to pick from
       * **NPS** -  Let's the user pick a score between 0 and 10 to rate your app
   * **Finalize** - Shows an summary of your survey
     * **Toaster Placement** – Set on which corner of the page the mini survey appears.

4. Click **Preview** to see how the mini survey looks once it is live.
5. If the preview looks good, click **Schedule Survey** to complete the creation of the survey.

Now you can [implement the mini survey](#implement-survey).

### Editing a Mini Survey {#edit-survey}

To edit a mini survey, perform the following steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/).
2. Click **Mini Surveys** in the sidebar. The [Survey Overview](#survey-overview) page opens.
3. On the **Active** tab, click the mini survey that you want to edit. The [survey details](#survey-details) page opens.
4. Go to the **Details** tab.
5. Depending on its [status](#survey-status), you can edit different parts of the survey:

   * If the mini survey has the status of **Draft**, you can edit everything in the mini survey. To edit the mini survey, click **Edit Draft** on the upper-right corner of the page, and then make changes.
   * If the mini survey has the status of **Scheduled**, **Active**, or **Finished**, you can only edit the **Start and End Date** and the **Toaster Placement** in the survey. Click **Edit Settings** and then make the changes. Based on the dates set, the status of the survey will update:
     * **Scheduled** if both the start and end dates are in the future.
     * **Active** if the Start date is in the past and the end date in the future. Keep in mind that only one survey can be active at a time for each Survey Location.
     * **Finished** if both the start and end date are in the past.

### Implementing a Mini Survey {#implement-survey}

Before the start time of the mini survey is reached, you should implement the survey in Studio Pro. Otherwise, users will not actually receive the mini survey, even if it has the [Status](#survey-status) of **Active** on the **Survey Overview** page. You can [reset the start time in the Settings section](#edit-survey) if you need more time to implement the survey in Studio Pro.

#### Obtaining an API Key {#obtain-api-key}

To obtain an API key for the implementation, follow these steps:

1. On the [Survey Overview](#survey-overview) page.
2. Go to the [Setting](#settings) tab.
3. Check the **API Keys** section:
    * If there is already an active API key, it is shown on the table. If it is suitable to use, click **Copy* to copy the API key, and save it for later use.
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
