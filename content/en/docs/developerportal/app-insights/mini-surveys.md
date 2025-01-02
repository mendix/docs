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

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/mini-surveys-overview.png">}}

#### Active Tab {#active}

The **Active** tab shows all the mini surveys that are active for the app with the following details:

* **ID** – This is the unique ID of the mini survey. You can also find this ID on the [survey details](#survey-details) page of the mini survey.
* **Name** – This is the name of the mini survey.
* **Location** – The location is a reference to where the mini survey widget pops up in your app.
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
* **Active** – This status indicates that the mini survey is currently running. After the survey reaches its end time, the status will change to **Finished**.

    {{% alert color="info" %}}Only one survey can be active per survey location at a given time.{{% /alert %}}

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

### Survey Details {#survey-details}

When you click a mini survey on the [Survey Overview](#survey-overview) page, the survey details page of the mini survey opens.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/survey-details.png" >}}

On the upper-right corner, you can find the following buttons:

* **Share Link** – Clicking **Share Link** copies the link to this page, which allows you to share the survey details with others.
* **Archive Survey** – Clicking **Archive Survey** archives the survey. Once a survey is archived, you can find it on the [Archived](#archived) tab of the **Survey Overview** page.
* **Export Responses** – Clicking **Export Responses** exports the responses that have been collected to an XLSX file.
* **Delete Survey** – Clicking **Delete Survey** deletes the survey.

Depending on the [status](#survey-status) of the mini survey, the survey details page may contain some or all of the following tabs: **Settings** and **Responses**.

#### Settings Tab {#survey-details-settings}

This tab is available for mini surveys with all the statuses. It gives an overview of the survey details, including **Survey ID**.

#### Responses Tab {#responses}

This tab is available for mini surveys with the status of **Active** or **Finished**. 

On this tab, you can view all the responses that have been collected for the mini survey.

### Settings Page {#settings}

When you click {{% icon name="cog" %}} **Settings** at the upper-right corner of the **Survey Overivew** page, the **Settings** page opens. Here you can change all your settings and preferences for the mini survey. There are two tabs available: **Survey Locations** and **API Key**.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/settings-page.png" >}}

#### Survey Locations {#survey-locations}

On the **Survey Locations** tab, you can create and manage your survey locations. 

You can see all the available survey locations in the list.

To add a new survey location, click **Add Location** above the right corner of the list. This opens a pop-up dialog box where you can enter the name of the new location.

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/add-survey-location.png" max-width=60% >}}

To use a newly-created location, make sure that the configuration of the mini survey widget uses exactly the same name as the location name shown in the list here. For more information, see the [Configuration](/appstore/modules/mendix-mini-surveys/#configuration) section in *Mendix Mini Surveys*.

To delete a survey location, click {{% icon name="trash-can" %}} **Delete** at the end of the row of the location in the list. This removes the location from the list. To use this location again, simply create the location again with the same name.

{{% alert color="info" %}}If a location is used in an active survey or a scheduled survey, you are unable to delete this location.{{% /alert %}}

#### API Key

{{< figure src="/attachments/developerportal/app-insights/mini-surveys/api-key.png" >}}

On the **API Key** tab, you can view or generate API keys. The list shows all the active API keys. 

To generate a new API key, click **Generate API Key** above the right corner of the list.  In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the new API key.

## Running a Mini Survey

### Creating a Mini Survey {#create-survey}

The first time you complete the onboarding, Mendix creates a demo survey for you to test Mini Surveys. If you want to create a new mini survey, follow these steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/) and click **Mini Surveys** in the sidebar. What you see depends on whether there are existing mini surveys for the app:

   * If there are existing mini surveys for the app, [Survey Overview](#survey-overview) opens, which lists all the existing mini surveys and shows the **Create New Survey** button
   * If there are no existing mini surveys for this app, you only see the **Create New Survey** button

2. Click **Create New Survey** to start the survey wizard.
3. Enter the following information for your mini survey:

    * **Context**
        * **Survey Title** – Give the mini survey a name.
        * **Description** – Descirbe your survey.
        * **Start date & End date** – Set the start and end time of the mini survey.
        * **Survey Location** – Select the location of the mini survey widget.
    * **Questions** – You can set up to five questions per mini survey.
        * **Open Question** – Create a question where the user can fill in their own answer.
        * **Score** – Create a question where a user can give a star, emoji or numerical rating.
        * **Multiple Choice** – Create a question where you can set up to 4 answers for the user to pick from.
        * **NPS** – Let the user pick a score between 0 and 10 to rate your app.
    * **Finalize** – Shows an summary of your survey.
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
   * If the mini survey has the status of **Active** or **Finished**, you can only edit the **Start and End Date** and the **Toaster Placement** in the survey. Click **Edit Settings** and then make the changes. Based on the dates set, the status of the survey will update as follows:
     * **Scheduled** –  if both the start and end dates are in the future
     * **Active** – if the start date is in the past and the end date is in the future
     
        {{% alert color="info" %}}Only one survey can be active per survey location at a given time.{{% /alert %}}
     
     * **Finished** – if both the start and end dates are in the past

    {{% alert color="info" %}}Changes made to an active survey can take up to 10 minutes to show up in your app.{{% /alert %}}
       
### Implementing a Mini Survey {#implement-survey}

Before the start time of the mini survey is reached, you should implement the survey in Studio Pro. Otherwise, users will not actually receive the mini survey, even if it has the [Status](#survey-status) of **Active** on the **Survey Overview** page. You can [reset the start time in the Settings section](#edit-survey) if you need more time to implement the survey in Studio Pro.

#### Obtaining an API Key {#obtain-api-key}

To obtain an API key for the implementation, follow these steps:

1. On the [Survey Overview](#survey-overview) page.
2. At the upper-right corner, click {{% icon name="cog" %}} **Settings** to go to the [Setting](#settings) page.
3. Check the **API Key** section:
    * If there is already an active API key, it is shown on the table. If it is suitable to use, click **Copy** to copy the API key, and save it for later use.
    * If there is no active API key that you can use, generate one as follows:

        1. Click **Generate API Key**.
        2. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the new API key.
        3. Copy the new API key and save it for later use.

#### Installing and Configuring the Module

To install the [Mendix Mini Surveys](/appstore/modules/mendix-mini-surveys/) module, follow these steps:

1. Open your app in Studio Pro.
2. Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the module into your app.
3. Follow the instructions in the [Configuration](/appstore/modules/mendix-mini-surveys/#configuration) section in *Mendix Mini Surveys* to complete the implementation of the mini survey in Studio Pro.

### Viewing or Exporting Responses {#view-export-responses}

When the start time that you set for the mini survey is reached, the survey will start running automatically. Then you get [notifications](/developerportal/global-navigation/#notifications) on how many responses have been collected.

To check the responses that have been collected, follow these steps:

1. Open the app in [Apps](https://sprintr.home.mendix.com/).
2. Click **Mini Surveys** in the sidebar. The [Survey Overview](#survey-overview) page opens.
3. On the **Active** tab, click the mini survey to open the [survey details](#survey-details) page.
4. Go to the **Responses** tab to see all the responses that have been collected.

    To have a quick view of individual survey responses, click a response in the list at the bottom. A side panel opens and shows the details of the response.

5. To export the responses to an XLSX file, click **Export Responses** on the upper-right corner of the page.

### Survey Opt-out Rules

A user can choose to opt out of a survey. Once opted out, the survey will no longer appear for that user, even if they have not completed it. This occurs when a user dismisses the survey without submitting it.

* If a user leaves the page, without closing the survey, it will reappear the next time they visit the page. Any information they entered will be saved and shown when they see the survey again.
* If the user dismisses the survey, it will no longer appear for them, even if they trigger it again.

Survey opt-out rule is a variable cached to your internet browser. You can reset and show a survey multiple times by clearing your browser cache.

{{% alert color="info" %}}In a future release, we will allow you to customize these opt-out rules from the App Insights portal.{{% /alert %}} 

### Unfinished Surveys

If a user only answers one or two questions before they close the mini survey. The answers will be stored in your app. Every 15 minutes a scheduled event will submit all unfinished surveys collected in your app to the **Mini Surveys** in **Apps**. A survey answer must be more than one hour old before it is submitted by the scheduled event.

## Troubleshooting & FAQ

For troubleshooting information and FAQ, see the [Troubleshooting](/appstore/modules/mendix-mini-surveys/#troubleshooting) section and the [FAQ](/appstore/modules/mendix-mini-surveys/#faq) section in *Mendix Mini Surveys*.
