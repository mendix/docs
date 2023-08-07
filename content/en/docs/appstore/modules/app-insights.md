---
title: "Mendix Mini Surveys"
url: /appstore/modules/app-insights/
category: "Modules"
description: "Describes the configuration and usage of the Mendix Mini Surveys module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "app insights", "mini survey", "mini survey"]
aliases:
    - /appstore/modules/product-insights/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the app. See Mapping to Apps for more details. 
---

## 1 Introduction

After you have created a [mini survey](/developerportal/general/product-insights/) in the Developer Portal, use the [Mendix Mini Surveys](https://marketplace.mendix.com/link/component/205483) module to implement your mini survey in Studio Pro.

## 2 Installation

To import this module into your app, follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/).

## 3 Configuration {#configuration}

{{% alert color="info" %}}Before you configure this module in Studio Pro, make sure you have [created your mini survey](/developerportal/general/product-insights/#create-survey) in the Developer Portal. {{% /alert %}}

1. Open your app in Studio Pro.
2. In **App Explorer**, go to **Marketplace modules** > **AppInsights_MiniSurvey** > **\_SETUP**.
3. Open the **Set API Key & mode** folder and do the following:
    1. Set the constant **APIKEY_APPINSIGHTS** to the [API key](/developerportal/general/product-insights/#obtain-api-key) that you obtained.
    2. (Optional) Configure the constant **TEST_MODE**. If this is turned on, the survey will always show.
    3. Save the changes.
4. Open the **Put Survey Widget On Template** folder, and place **Template_SurveyWidget** on the page where you would like the mini survey to appear. We recommend placing only one widget inside the primary layout page.
5. Configure how the mini survey will appear, either on-action or on-page load:

    * For the on-action option:

        1. Open the **Show Survey** folder, then copy the **ShowSurvey_OnAction** nanoflow to your own module.
        2. In the nanoflow, double-click **Create String variable**, fill in the **Survey ID** of the mini survey, and then save the changes. You can find the survey ID on the [Settings](/developerportal/general/product-insights/#survey-details-settings) tab or [Implementation](/developerportal/general/product-insights/#survey-details-implementation) tab of the survey details page in **App Insights** in the Developer Portal.
        3. (Optional) Double-click **CHANGE ME**, add your microflow or nanoflow action, then save the changes.
        4. Create a button that calls the **ShowSurvey_OnAction** nanoflow on the page where **Template_SurveyWidget** is placed. Mendix recommends renaming the flow to something that describes the original action.

    * For the on-page load option:
    
        1. Open the **Show Survey** folder, and copy the widget from **ShowSurvey_OnPageLoad** to your page.
        2. Place this widget on any page you wish to show the survey (you can use multiple **Show Mini Survey On Page Load** widgets in your app to trigger many surveys).
        3. Double-click the **Show Mini Survey On Page Load** widget, then fill in the **Survey ID**.

6. In **App Explorer**, double-click **Security**, and add the **AppInsights_MiniSurvey.User** user role to all the system roles that use the mini survey in the **App Security** dialog box.

{{% alert color="info" %}}Once the start time of the mini survey is reached, the mini survey will start running, and all the target users of the mini survey will receive the survey automatically.{{% /alert %}}


## 4 FAQ {#FAQ}

### 4.1 How do I use a constant variable Survey ID to show a Survey?

This can be achieved using a Dataview and nanoflow solution we have provided in the module. In your app, goto Marketplace modules > AppInsights_MiniSurvey > Private(Do Not Touch) > Resources > Deprecated Widgets > ShowSurvey_UsingConstant folder. 
Copy the snippet called 'ShowSurvey_UsingDataView' to the page you want the survey to load. You also need to insure that the Mini Survey Widget is on the same page. Next, open the 'ShowSurvey_UsingConstant' nanoflow and open the SurrveyID Action Activity, replace the string value with your constant variable. 

{{% alert color="info" %}} We will continue to support this depreacted solution. In a future version you will be able to configure SurveyID's in AppInsights Dashboard, without configuring constants or string values in your app.{{% /alert %}}

### 4.2 Scheduled Events; What happends if a user does not finish answering a Survey? 

If a user only answers 1 or 2 questions and closes the Mini Survey. The answers will be stored in your app. 
Every 15 minutes a Scheduled Event will submit all unfinished Surveys collected in your app to AppInsights. A Survey answer must be more than 1 hour old before it will be submitted by the scheduled event. 

### 4.2 How does TEST_MODE constant affect unfinished surveys.

When using Test Mode. If a user only answers 1 or 2 questions and closes the Mini Survey. The answers will be stored in your app. 
Every 15 minutes a Scheduled Event will submit all unfinished Surveys collected in your app to AppInsights. A Survey answer must be more than 1 hour old before it will be submitted by the scheduled event. 

### Can I use multiple widgets on a single page? 

It's recommend that you use only 1 Mini Survey Widget per page. If you are experimenting please enable the TEST_MODE constant. 
If you app uses a master layout page and many child pages. You can place 1 Mini Survey Widget on the master layout page and then use mutiple 'ShowSurvey_OnAction' or 'ShowSurvey_UsingDataView' nanoflows actions to trigger the Survey to show. 

### Survey Opt-Out Rules 

A mini survey has the following opt-out rules:

* If a user has closed a survey, without answering any questions, then the survey will not show again to this user .
* If a user has answered one or more questions in a survey, but did not finished the survey, then the survey will show again. However, if the user has closed the survey before finishing for the second time, the survey will not show again to this user.
* If the user has answered all questions, then the survey will not show again to the user.

Survey Opt-Out rule is a variable cached to your internet browser. You can reset and show a survey multiple times by clearing your browser cache. If you are testing it's recommend you use the TEST_MODE constant to avoid clearing everytime. 


## 5 Troubleshooting {#troubleshooting}

### 5.1 Why is my Survey not Showing? 

1. In your App. Please double check the 'APIKEY_APPINSIGHTS' constant has the correct API key from AppInsights https://appinsights.mendix.com/
2. In your App. Open the Mini Survey Widget Settings. Check the correct SurveyID has been entered.
3. In your App. Enabled TEST_MODE constant. If the Survey loads, then the Survey has triggered a Op-Out rule and will not show. [Survey Opt-out Rules](/developerportal/general/product-insights/#obtain-api-key)
4. In your browser. You can clear the Survey Opt-out rules by clearing your browser cache or using igcognito mode. 





### 4.2 Surveys do not work locally when running multiple applications

If this occurs, upgrade the module to v1.1.0 or above, and ensure to clear your browsers cached data to remove deprecated feature – you only need to do this one time in your browser.
