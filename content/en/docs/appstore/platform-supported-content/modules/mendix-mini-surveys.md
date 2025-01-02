---
title: "Mendix Mini Surveys"
url: /appstore/modules/mendix-mini-surveys/
description: "Describes the configuration and usage of the Mendix Mini Surveys module, which is available in the Mendix Marketplace."
---

## Introduction

After you have created a [mini survey](/developerportal/app-insights/mini-surveys/) in the Mendix Portal, use the [Mendix Mini Surveys](https://marketplace.mendix.com/link/component/205483) module to implement your mini survey in Studio Pro.

## Installation

To import this module into your app, follow the instructions in [How to Use Marketplace Content](/appstore/use-content/).

## Configuration {#configuration}

{{% alert color="info" %}}Before you configure this module in Studio Pro, make sure you have [created your mini survey](/developerportal/app-insights/mini-surveys/#create-survey) in the Mendix Portal. {{% /alert %}}

1. Open your app in Studio Pro.
2. In **App Explorer**, go to **Marketplace modules** > **AppInsights_MiniSurvey** > **\_SETUP**.
3. Open the **Set API Key & mode** folder and do the following:
    1. Set the constant **APIKEY_APPINSIGHTS** to the [API key](/developerportal/app-insights/mini-surveys/#obtain-api-key) that you obtained.
    2. (Optional) Configure the constant **TEST_MODE**. If this is turned on, the survey will always show.
    3. Save the changes.
4. Open the **Put Survey Widget On Template** folder, and place **Template_SurveyWidget** on the page where you would like the mini survey to appear. Mendix recommends placing only one widget inside the primary layout page.
5. Configure how the mini survey will appear, either on-action or on-page load:

    * For the on-action option:

        1. Open the **Show Survey** folder, then copy the **ShowSurvey_OnAction** nanoflow to your own module.
        2. In the nanoflow, double-click **Create String variable**, fill in the **Survey ID** of the mini survey, and then save the changes. You can find the survey ID on the [Settings](/developerportal/app-insights/mini-surveys/#survey-details-settings) tab or [Implementation](/developerportal/app-insights/mini-surveys/#survey-details-implementation) tab of the survey details page in **Mini Surveys** in the Mendix Portal.
        3. (Optional) Double-click **CHANGE ME**, add your microflow or nanoflow action, then save the changes.
        4. Create a button that calls the **ShowSurvey_OnAction** nanoflow on the page where **Template_SurveyWidget** is placed. Mendix recommends renaming the flow to something that describes the original action.

    * For the on-page load option:
    
        1. Open the **Show Survey** folder, and copy the widget from **ShowSurvey_OnPageLoad** to your page.
        2. Place this widget on any page you wish to show the survey (you can use multiple **Show Mini Survey On Page Load** widgets in your app to trigger many surveys).
        3. Double-click the **Show Mini Survey On Page Load** widget, then fill in the **Survey ID**.

6. In **App Explorer**, double-click **Security**, and add the **AppInsights_MiniSurvey.User** user role to all the system roles that use the mini survey in the **App Security** dialog box.

{{% alert color="info" %}}Once the start time of the mini survey is reached, the mini survey will start running, and all the target users of the mini survey will receive the survey automatically.{{% /alert %}}

## FAQ {#faq} 

### How to Use a Constant Variable for Survey ID to Show a Survey? 

You can achieve this using the data view and nanoflow solution we provide in the module as follows:

1. In your app, go to **Marketplace modules** > **AppInsights_MiniSurvey** > **Private(Do Not Touch)** > **Resources** > **Deprecated Widgets** > **ShowSurvey_UsingConstant folder**. 
2. Copy the **ShowSurvey_UsingDataView** snippet to the page where you want the survey to load. You also need to ensure that the Mini Survey widget is on the same page.
3. Open the **ShowSurvey_UsingConstant** nanoflow and open the **SurveyID** action activity, replace the string value with your constant variable.

{{% alert color="info" %}}We will continue to support this deprecated solution. In a future version you will be able to configure survey IDs in the App Insights dashboard, without configuring constants or string values in your app.{{% /alert %}} 

### What Happens if a User Does Not Finish Answering a Survey? {#unfinished-survey}

If a user only answers one or two questions before they close the mini survey. The answers will be stored in your app. Every 15 minutes a scheduled event will submit all unfinished surveys collected in your app to the **Mini Surveys** in the Mendix Portal. A survey answer must be more than one hour old before it is submitted by the scheduled event.

### Does `TEST_MODE` Constant Affect Unfinished Surveys?

No. The behaviors are exactly the same as described in the [What Happens if a User Does Not Finish Answering a Survey?](#unfinished-survey) section above.

### Can I Use Multiple Widgets on a Single Page?

Mendix recommends using only one Mini Survey widget per page. If you are experimenting, enable the **TEST_MODE** constant.

If your app uses a master layout page and many child pages. You can place one Mini Survey widget on the master layout page and then use multiple **ShowSurvey_OnAction** or **ShowSurvey_UsingDataView** nanoflow actions to trigger the survey to show.

### What Are the Survey Opt-Out Rules? {#survey-rules} 

A mini survey has the following opt-out rules: 

* If a user has closed a survey, without answering any questions, then the survey will not show again to this user.

* If a user has answered one or more questions in a survey, but did not finished the survey, then the survey will show again. However, if the user has closed the survey before finishing for the second time, the survey will not show again to this user.

* If the user has answered all questions, then the survey will not show again to the user. 

Survey opt-out rule is a variable cached to your internet browser. You can reset and show a survey multiple times by clearing your browser cache. If you are testing, Mendix recommends using the **TEST_MODE** constant to avoid clearing every time.

{{% alert color="info" %}}In a future release, we will allow you to customize these opt-out rules from the App Insights portal.{{% /alert %}} 

### Can I Delay the Appearance of the Mini Survey After the Page Loads?

Yes. To set the delay time, open the settings of the Mini Survey widget, and set the delay time in seconds in the **Pop-up Delay** field on the **Show Survey** tab. If the value is set to 0, it is still assigned to the variable that is used.

## Troubleshooting {#troubleshooting} 

### The Survey Is Not Showing?

If this occurs, try the following:

* In the app, make sure that the **APIKEY_APPINSIGHTS** constant has the correct value of [API key](/developerportal/app-insights/mini-surveys/#obtain-api-key).

* In the app, open the settings of the Mini Survey widget. Make sure that you have entered the correct survey ID.

* In the app, enable the **TEST_MODE** constant. If the survey loads, then the survey has triggered an [op-out rule](#survey-rules) and will not show. In this case, clear the survey opt-out rules by clearing your browser cache or using incognito mode.

### Surveys Do not Work Locally When Running Multiple Applications

If this occurs, upgrade the module to v1.1.0 or above, and ensure to clear your browsers cached data to remove deprecated feature – you only need to do this one time in your browser.
