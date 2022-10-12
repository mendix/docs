---
title: "Product Insights"
url: /developerportal/collaborate/product-insights/
category: "Collaboration"
weight: 4
description: "Describes how to design mini surveys to gain product insights into your app and view the survey results."
tags: ["Product Insights", "Sprint", "Developer Portal"]
---

## 1 Introduction

Mendix allows you to set up mini surveys for your Mendix apps. You can set up mini surveys for a target user group which you would like to reach, collect their feedback, and gain valuable product insights.

You start setting up the mini survey with Product Insights in the Developer Portal. Then the developer of the app should [implement this survey](#implement-survey) in Studio Pro. After the survey is up and running, you can view the data that the survey has collected in Product Insights, and export the data to an XLSX file.

## 2 Opening an App in Project Insights {#open-app}

Open the app in Developer Portal and click **Product Insights**. 

On the upper-left corner, you can see the name of the app. Click the name opens a drop-down list that allows you to open a different app in Project Insights.

{{< figure src="/attachments/developerportal/collaborate/product-insights/app-drop-down-list.png" >}}

Under **My projects**, you can see all the apps for which Product Insights are enabled are shown. You can click the app to start setting up a mini survey for that app. If your app is not shown here, you can [add a new project](#add-new-project). {{% todo %}}Check if this is still applicable for the final product.{{% /todo %}}

## 3 Adding a New Project {#add-new-project}

1. Go to the [General Settings](/developerportal/collaborate/general-settings/#2-general) page for this app.
2. On the **General** tab, copy the **App ID**. 
3. Go to **Project Insights**.
4.  Paste the app ID in the text box, as shown in the screenshot below.

    {{< figure src="/attachments/developerportal/collaborate/product-insights/add-new-project.png" >}}

5. Click **Add project**.

You should be able to see the app that you just added appears under **My projects**. {{% todo %}}Check My projects still for the final product.{{% /todo %}}

## 3 Setting up a Mini Survey

1. [Open the app in Project Insights](#open-app).

2. Under **My projects**, click the app for which you want to design the mini survey. {{% todo %}}Check My projects still for the final product.{{% /todo %}}

   If there are existing surveys for this app, you see the **Survey Overview** page with all the existing surveys, as well as the **Create New Survey** button.

   If there are no existing surveys for this app, you see the **Create New Survey** button.

3. Click **Create New Survey**. The **Create New Survey** page opens.

4. Enter the following information for your survey:

   * **Background**

     * **Name** – Give your mini survey a name.

     * **Goal** – Describe the goal of your mini survey.

   * **Conditions**

     {{% alert color="info" %}}Developers will use the **Conditions** information filled in here to implement the mini survey in Studio Pro.{{% /alert %}}

     * **Where** – Describe the location where the mini survey appears.
     * **When & How** – Describe what can trigger the mini survey to appear.
     * **Target User Group (Optional)** – Describe the target user group which you would like to reach. Leaving the text box empty means you want to reach all users.
     * **Attachments (Optional)** – Add attachments if needed. Supported formats are office files, .*pdf*, .*text*, .*png*, and .*jpeg*.

   * **Settings** – The information filled here have effects on the survey directly.

     * **Runtime** –  This defines the start and end time for the mini survey.
     * **Toaster Placement** – This defines where the mini survey will appear on the page.

   * **Questions** – You can set up to three questions per survey.

5. After you fill in all the information, you can perform one of the following actions by clicking the button at the bottom of the page:
   * **Preview** – If you click this button, you can get a preview that shows how the mini survey looks once it is live.
   * **Save Draft** – If you click this button, the mini survey is saved as a draft. You can see it on the **Survey Overview** page with its **Status** as **Draft**. If you click the draft, you can still edit the draft survey.
   * **Mark as Ready** – If you click this button, the survey is saved and ready for implementation. You can only change **Settings** (**Runtime** and **Toaster Placement**), and you cannot change any other information that you have entered. You can proceed to [implement the mini survey in Studio Pro](#implement-survey).


## 4 Implement the Mini Survey in Studio Pro {#implement-survey}

1. General the API key as follows:

   1. The API Key can be generated in the 

      [ Project Settings](https://productinsights.mendix.com/#)

2. Open your app in Studio Pro.

3. Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to install the Product Insights module to your app.

4. Open the **_SETUP** folder and set the API Key in the constant **APIKEY_PRODUCTINSIGHTS.** 

5. Open the **Put Survey Widget On Template** folder and place that **Survey Widget** on the page where you would like the survey to appear.

6. Open the **Trigger Survey** folder and copy the **TriggerSurvey** nanoflow to your own module.

7. Open the **TriggerSurvey** nanoflow and follow the instructions inside.

8. After you follow the instructions, create a button that calls this nanoflow on the same page as the **Survey Widget**. We recommend renaming the flow to something that describes the original action.

9. Add the **ProductInsights_Survey.Use**r user role to all the system roles which might use the survey in the **App Security**.

## 5 Viewing Survey Results

## 6 Notifications

{{% todo %}}When to get them, and how to configure notifications?{{% /todo %}}
