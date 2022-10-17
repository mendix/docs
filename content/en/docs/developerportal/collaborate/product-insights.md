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

## 2 Opening an App in Project Insights {#open-app}

Open the app in Developer Portal and click **Product Insights**. 

On the upper-left corner, you can see the name of the app. Click the name opens a drop-down list that allows you to open a different app in Project Insights.

{{< figure src="/attachments/developerportal/collaborate/product-insights/app-drop-down-list.png" >}}

Under **My projects**, you can see all the apps for which Product Insights are enabled. You can click an app to start setting up a mini survey for that app. If your app does not appear here, you can [add a new project](#add-new-project). {{% todo %}}Check if this is still applicable for the final product.{{% /todo %}}

## 3 Adding a New Project {#add-new-project}

1. Go to the [General Settings](/developerportal/collaborate/general-settings/#2-general) page for this app.
2. On the **General** tab, copy the **App ID**. 
3. Go to **Project Insights**.
4.  Paste the app ID in the text box, as shown in the screenshot below.

    {{< figure src="/attachments/developerportal/collaborate/product-insights/add-new-project.png" >}}

5. Click **Add project**.

The app should appear under **My projects**. {{% todo %}}Check if **My projects** is still for the final product.{{% /todo %}}

## 3 Setting up a Mini Survey

1. [Open the app in Project Insights](#open-app) in Developer Portal.

2. Under **My projects**, click the app for which you want to set up the mini survey. If the app does not appear under **My projects**, [add a new project first](#aa-new-project).{{% todo %}}Check My projects still for the final product.{{% /todo %}}

   If there are existing surveys for this app, the **Survey Overview** page opens and lists all the existing surveys. The page also shows the **Create New Survey** button.

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
   
   * **Save Draft** – If you click **Save Draft**, the mini survey is saved as a draft. You can see it on the **Survey Overview** page with its **Status** as **Draft**. If you click the draft, you can continue editing the draft survey.
   
   * **Mark as Ready** – If you click **Mark as Ready**, the survey is saved and ready for implementation. Then the **Settings** tab opens and shows the survey details. You need to save the **Survey ID**, and then you can proceed to [implement the mini survey in Studio Pro](#implement-survey). 
   
     {{% alert color="info" %}}After you mark a mini survey as ready, you can only make changes in the **Settings** section (**Runtime** and **Toaster Placement**). If you make changes in the **Settings** section, the changes are applied to the survey immediately.{{% /alert %}}


## 4 Implement the Mini Survey in Studio Pro {#implement-survey}

1. Generate an API key as follows:

   1. [Open the app in Project Insights](#open-app).

   2. On the Survey Overview page, click the settings icon.

      {{< figure src="/attachments/developerportal/collaborate/product-insights/settings-icon.png" >}}

      The **Product Insights Settings** page opens.

   3. Click **General API Key**.

   4. Choose whether the API key is a **Development Key** or **Product Key**. 

   5. In the **Confirmation dialog** box, click **Proceed**. The **Generated Token** pop-up window opens and shows the API key generated.

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

## 5 Viewing Survey Results

After your mini survey is up and running, you can check the data that has been collected in Product Insights in Developer Portal. To do so, perform the following steps:



## 6 Notifications

{{% todo %}}When to get them, and how to configure notifications?{{% /todo %}}
