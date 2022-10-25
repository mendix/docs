---
title: "Product Insights"
url: /appstore/modules/product-insights/
category: "Modules"
description: "Describes the configuration and usage of the Product Insights module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "product insights", "mini survey"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

After you already created a mini survey in Product Insights in Developer Portal, you should use the [Product Insights](#needs-url) module to implement your mini survey in Studio Pro.

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](https://docs.mendix.com/appstore/general/app-store-content/) to import the Product Insights module into your app.

## 3 Configuration {#configuration}

{{% alert color="info" %}}Before you configure the Product Insights module in Studio Pro, you should have already created your mini survey in Product Insights in the Developer Portal. If not, you should go there and [create the mini survey](/developerportal/collaborate/product-insights/#create-survey) first, and then follow the procedure below. {{% /alert %}}

1. Open your app in Studio Pro.

2. In **App Explorer**, go to **Marketplace modules** > **ProductInsights_Survey** > **_SETUP**.

3. Open the **Set API Key** folder, set the constant **APIKEY_PRODUCTINSIGHTS** to the [API key](/developerportal/collaborate/product-insights/#obtain-api-key) that you obtained, and then save the changes.

4. Open the **Put Survey Widget On Template** folder, and place **Template_SurveyWidget** on the page where you would like the mini survey to appear.

5. Open the **Trigger Survey** folder, and copy the **TriggerSurvey** nanoflow to your own module.

6. Set up the **TriggerSurvey** nanoflow as follows:

   1. Double-click **Create String variable**, fill in the survey ID of the mini survey, and then save the changes.

      {{% alert color="info" %}}You can find the survey ID on the [Settings](/developerportal/collaborate/product-insights/#survey-details-settings) tab or [Implementation](/developerportal/collaborate/product-insights/#survey-details-implementation) tab of the survey details page in Product Insights in the Developer Portal.{{% /alert %}}

   2. Double-click **CHANGE ME**, add your microflow or nanoflow action here, and then save the changes.

7. Create a button that calls the **TriggerSurvey** nanoflow on the page where **Template_SurveyWidget** is placed. 

   {{% alert color="info" %}}We recommend renaming the flow to something that describes the original action.{{% /alert %}}

8. In **App Explorer**, double-click **Security**, and add the **ProductInsights_Survey.Use**r user role to all the system roles which use the mini survey in the **App Security** dialog box.

Now you have implemented the mini survey in Studio Pro. Once the start time of the mini survey is reached, the mini survey will start running, and all the target users of the mini survey will receive the survey automatically.