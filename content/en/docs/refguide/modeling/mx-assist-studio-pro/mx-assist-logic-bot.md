---
title: "MxAssist Logic Bot"
url: /refguide/mx-assist-logic-bot/
weight: 10
description: "Describes MxAssist Logic Bot in Mendix Studio Pro."
tags: ["studio pro", "logic bot", "mendix assist", "AI", "assist", "mx assist"]
---

## 1 Introduction 

{{% alert color="info" %}}
MxAssist Logic Bot has been enhanced since Studio Pro 10.4.0 in the redesigned logic editors. The redesigned logic editors were in beta in Studio Pro 10.4.0 and were released for GA in [Studio Pro 10.6.0](/releasenotes/studio-pro/10.6/#1060).
{{% /alert %}}

MxAssist Logic Bot is an AI-powered virtual co-developer bot that helps you to model and configure your application logic in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your logic based on the already designed activities, parameters, and other context-related information. It is built using the machine learning analysis of over twelve million anonymized application logics built with Mendix to detect and learn the best practice patterns in Mendix.

The key features of MxAssist Logic Bot are the following:

* **Smart search** (available from Studio Pro 10.4.0) - you can search for the element you want to add to your flow based on microflow or nanoflow parameters, domain model entities, or the documents in your app.

* **Next best action suggestion** – it recommends the next best activities out of more than 40 different options with accuracy of 95%. 
* **Auto-configuration** – it does not only provide next best action, but automates the development further by pre-populating the parameters for such action.
* **Contextual  suggestions** – it derives context in different ways, including by 'looking' left and right in your logic when the developer inserts a new activity or decision mid-flow; and by inferring the context using the page where it is called from.  
* **High accuracy** – continuous improvement and training of the model has elevated the accuracy level from 95%.

## 2  Modeling Using MxAssist Logic Bot {#logic-bot}

### 2.1 Studio Pro 10.4 and Above

{{% alert color="info" %}}
In Studio Pro 10.6, the enhanced MxAssist Logic Bot is enabled by default. You cannot switch it off in the default logic editors. You can still switch to the **Classic** version of the editor if you go to **Edit** > **Preferences** > **New features**, and **Enable switching to the Classic version of the editor**.

In studio Pro 10.4 and 10.5, you can access the the enhanced MxAssist Logic Bot if you switch to the **Beta Version** of the logic editors. You cannot switch it off in the beta logic editors.
{{% /alert %}}

MxAssist Logic Bot menu has been refreshed completely. The enhanced MxAssist Logic Bot provides better parametrized and AI-assisted suggestions, smart search, and keyboard-based navigation. Not only for microflows, it is also available for nanoflows and rules.

MxAssist Logic Bot is displayed as a blue dot in the flow. When you want to view recommendations on a particular flow, you can hover the mouse over that flow and click on the blue circle, or navigate to it with the keyboard and press <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/assist-bulb.png" >}}

A Logic Bot dialog box is shown with recommendations of objects or activities to insert. This list initially contains the top 10 contextual suggestions. You can select an element directly from the recommendation list:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/initial-recommendations.png" >}}

You can also type in the search box to search for the elements that you want to add to the flow. MxAssist Logic Bot works with fuzzy search, which means that it finds direct matches first and then any matches in the recommendations. For instance, you can use `cr ob`  to search for the recommendations that contain **Create Object**.

The search is based on your microflow or nanoflow parameters, domain model entities, or the documents in your app. You can search for generic activities or elements from the toolbox:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-toolbox.png" width="500px" >}}

You can search for sub-actions of an aggregate list or list operation activity, such as sum, count, or average:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-sub-actions.png" >}}

You can also use the search to call microflows or nanoflows with a concrete document:

{{< figure src="/attachments/refguide/modeling/application-logic/microflows-and-nanoflows/logic-editors-beta/search-microflows-nanoflows.png" >}}

Choose a suggestion with the arrow keys and press the <kbd>Enter</kbd> key to accept it. The suggested element will be added to the flow and the Logic Bot will open on the next flow so that you can continue adding activities.

To open the properties dialog box after adding a suggested element, accept the suggestion with <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click). After closing the properties dialog box, the Logic Bot will open on the next flow.

### 2.2 Studio Pro 10.3 and Below

In Studio Pro 10.3 and below, an older version of MxAssist Logic Bot is available. It is enabled by default. You can also access this MxAssist Logic Bot version in the **Classic** microflow editor from Studio Pro 10.4 to 10.6.

You can switch it on and off using the **On-Off** toggle in the top right corner of the editor. You can also enable or disable it through the **Enable MxAssist Logic Bot** setting under the **Mendix Assist** tab in Studio Pro **Preferences**. For more information, see the [Logic Bot](/refguide/preferences-dialog/#logic-bot) section in *Preferences*.

To use this older version of MxAssist Logic Bot, do the following:

1. Click the icon to see the next best action recommendations:

    {{< figure src="/attachments/refguide/modeling/mx-assist-studio-pro/mx-assist-logic-bot/mx-assist-recommendations.png" alt="Logic Bot Recommendations" >}}

2. Click one of the recommended activities to insert it into a microflow.

3. In the **Properties** dialog box, configure the selected activity/event.

The activity/event is added to your microflow.

If you do not see the desired activity or element in the top-five recommendation list, you can click **Add other element** and choose an activity, loop, decision, merge, or object type decision.

## 3 Read More

* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
