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
Logic Recommender is also available for [rules](/refguide/rules/).
{{% /alert %}}

{{% alert color="info" %}}
It works both online and offline. However, to get better AI-based recommendations, you need to be signed in to Studio Pro.
{{% /alert %}}

Logic Recommender is an AI-powered virtual co-developer that helps you to model and configure your application logic in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your logic based on the already designed activities, parameters, and other context-related information. It is built using the machine learning analysis of over twelve million anonymized application logics built with Mendix to detect and learn the best practice patterns in Mendix.

The key features of Logic Recommender are the following:

* **Smart search** - you can search for the element you want to add to your flow based on microflow or nanoflow parameters, domain model entities, or the documents in your app.

* **Next best action suggestion** – it recommends the next best activities out of more than 40 different options with accuracy of 95%. 
* **Auto-configuration** – it does not only provide next best action, but automates the development further by pre-populating the parameters for such action.
* **Contextual suggestions** – it derives context in different ways, including by 'looking' left and right in your logic when the developer inserts a new activity or decision mid-flow; and by inferring the context using the page where it is called from.  
* **High accuracy** – continuous improvement and training of the model has elevated the accuracy level from 95%.

## Using Logic Recommender

Logic Recommender is enabled by default. You can disable it via **Edit** > **Preferences** > **Maia** > **In-Editor Recommender**. 

Logic Recommender is displayed as a blue plus in the flow. When you want to view recommendations on a particular flow, you can hover the mouse over that flow and click on the blue plus, or navigate to it with the keyboard and press <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-recommender/assist-bulb.png" max-width=50% >}}

{{% alert color="info" %}}
If the sequence flow is too short or is selected, the blue plus is hidden. To open Logic Recommender in such cases, right-click the flow to open its context menu, and click **Open recommender**.
{{% /alert %}}

A dialog box is shown with recommendations of objects or activities to insert. This list initially contains the top 10 contextual suggestions. You can select an element directly from the recommendation list:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-recommender/initial-recommendations.png" max-width=80% >}}

You can also type in the search box to search for the elements that you want to add to the flow. Logic Recommender works with fuzzy search, which means that it finds direct matches first and then any matches in the recommendations. For instance, you can use `cr ob`  to search for the recommendations that contain **Create Object**.

The search is based on your microflow or nanoflow parameters, domain model entities, or the documents in your app. You can search for generic activities or elements from the toolbox:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-recommender/search-toolbox.png" max-width=80% >}}

You can search for sub-actions of an aggregate list or list operation activity, such as sum, count, or average:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-recommender/search-sub-actions.png" max-width=100% >}}

You can also use the search to call microflows or nanoflows with a concrete document:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/logic-recommender/search-sub-flows.png" max-width=80% >}}

Choose a suggestion and click it to accept it. You can also choose a suggestion with the arrow keys and press the <kbd>Enter</kbd> key to accept it. The suggested element will be added to the flow and the Recommender will open on the next flow so that you can continue adding activities.

To open the properties dialog box after adding a suggested element, accept the suggestion with <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click). After closing the properties dialog box, the Recommender will open on the next flow.

## Read More

* [Microflows and Nanoflows](/refguide/microflows-and-nanoflows/)
