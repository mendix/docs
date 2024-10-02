---
title: "Logic Recommender"
url: /refguide/logic-recommender/
weight: 20
description: "Describes Logic Recommender in Mendix Studio Pro."
aliases:
    - /refguide/mx-assist-logic-bot/
---

## Introduction 

{{% alert color="info" %}}
Logic Bot was rebranded to Logic Recommender in Studio Pro 10.12.0.

It is also available for [rules](/refguide/rules/).
{{% /alert %}}

Logic Recommender is an AI-powered virtual co-developer that helps you to model and configure your application logic in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your logic based on the already designed activities, parameters, and other context-related information. It is built using the machine learning analysis of over twelve million anonymized application logics built with Mendix to detect and learn the best practice patterns in Mendix.

The key features of Logic Recommender are the following:

* **Smart search** (from Studio Pro 10.6.0) - you can search for the element you want to add to your flow based on microflow or nanoflow parameters, domain model entities, or the documents in your app.

* **Next best action suggestion** – it recommends the next best activities out of more than 40 different options with accuracy of 95%. 
* **Auto-configuration** – it does not only provide next best action, but automates the development further by pre-populating the parameters for such action.
* **Contextual suggestions** – it derives context in different ways, including by 'looking' left and right in your logic when the developer inserts a new activity or decision mid-flow; and by inferring the context using the page where it is called from.  
* **High accuracy** – continuous improvement and training of the model has elevated the accuracy level from 95%.

## Using Logic Recommender

### Studio Pro 10.6 and Above

{{% alert color="info" %}}
It is available for use when you are not signed in to Studio Pro, but you need to sign in to get better AI recommendations.
{{% /alert %}}

{{% alert color="info" %}}
In Studio Pro 10.12 and above, it is enabled by default. You can disable it via **Edit** > **Preferences** > **Maia** > **In-Editor Recommender**.

In Studio Pro versions from 10.6 to 10.11, it is enabled by default. You cannot switch it off.
{{% /alert %}}

Logic Recommender is displayed as a blue plus in the flow. When you want to view recommendations on a particular flow, you can hover the mouse over that flow and click on the blue plus, or navigate to it with the keyboard and press <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/assist-bulb.png" max-width=50% >}}

A dialog box is shown with recommendations of objects or activities to insert. This list initially contains the top 10 contextual suggestions. You can select an element directly from the recommendation list:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/initial-recommendations.png" max-width=80% >}}

You can also type in the search box to search for the elements that you want to add to the flow. Logic Recommender works with fuzzy search, which means that it finds direct matches first and then any matches in the recommendations. For instance, you can use `cr ob`  to search for the recommendations that contain **Create Object**.

The search is based on your microflow or nanoflow parameters, domain model entities, or the documents in your app. You can search for generic activities or elements from the toolbox:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/search-toolbox.png" max-width=80% >}}

You can search for sub-actions of an aggregate list or list operation activity, such as sum, count, or average:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/search-sub-actions.png" max-width=100% >}}

You can also use the search to call microflows or nanoflows with a concrete document:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/search-sub-flows.png" max-width=80% >}}

Choose a suggestion and click it to accept it. You can also choose a suggestion with the arrow keys and press the <kbd>Enter</kbd> key to accept it. The suggested element will be added to the flow and the Recommender will open on the next flow so that you can continue adding activities.

To open the properties dialog box after adding a suggested element, accept the suggestion with <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click). After closing the properties dialog box, the Recommender will open on the next flow.

### Studio Pro 10.5 and Below

{{% alert color="info" %}}
In Studio Pro 10.5 and below, you need to sign in to Studio Pro to use it.
{{% /alert %}}

In Studio Pro 10.5 and below, an older version of Logic Recommender is available. It is enabled by default. You can switch it on and off using the **On-Off** toggle in the top right corner of the editor. You can also enable or disable it through the **Enable MxAssist Logic Bot** setting under the **Mendix Assist** tab in Studio Pro Preferences.

To use this older version of Logic Recommender, do the following:

1. Click the icon to see the next best action recommendations:

    {{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-bot-recommender/mx-assist-recommendations.png" alt="Logic Bot Recommendations" class="no-border" >}}

2. Click one of the recommended activities to insert it into a microflow.

3. In the **Properties** dialog box, configure the selected activity/event.

The activity/event is added to your microflow.

If you do not see the desired activity or element in the top-five recommendation list, you can click **Add other element** and choose an activity, loop, decision, merge, or object type decision.

## Read More

* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
