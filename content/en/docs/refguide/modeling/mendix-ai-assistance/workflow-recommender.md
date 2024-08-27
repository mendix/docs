---
title: "Workflow Recommender"
url: /refguide/workflow-recommender/
weight: 30
description: "Describes Workflow Recommender in Mendix Studio Pro."
---

## Introduction 

{{% alert color="info" %}}
Workflow Recommender is available in Studio Pro 10.12 and above.
{{% /alert %}}

Workflow Recommender is a virtual co-developer that helps you to model and configure your workflow in Mendix Studio Pro. It gives you contextualized recommendations on the next best activity in your workflow based on context-related information.

The key features of Workflow Recommender are the following:

* Smart search - you can search for the element you want to add to your workflow based on parameters, domain model entities, or other relevant documents in your app.
* Auto-configuration – it does not only provide next best action, but automates the development further by pre-populating the parameters for such an action.
* Contextual suggestions – it derives context in different ways, including by 'looking' left and right in your workflow when the developer inserts a new activity or decision mid-flow; and by inferring the context using the page where it is called from.

## Modeling Using Workflow Recommender

{{% alert color="info" %}}
Workflow Recommender is enabled by default.

It can be disabled via Studio Pro preferences: go to **Edit** > **Preferences** > **Maia** > **In-Editor Recommender**.
{{% /alert %}}

Workflow Recommender is displayed as a small blue plus sign in the flow. When you want to view recommendations on a particular flow, you can hover the mouse over that flow and click on the blue plus icon, or navigate to it with the keyboard and press <kbd>Enter</kbd>.

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/workflow-recommender/blue-plus.png" max-width=20% >}}

Workflow Recommender dialog box is shown with recommendations of workflow activities to insert. This list initially contains toolbox activities that can be added at that location in the flow. You can select an element directly from the recommendation list:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/workflow-recommender/initial-recommendations.png" max-width=50% >}}

You can also type in the search box to search for the elements that you want to add to the flow. Workflow Recommender works with fuzzy search, which means that it finds direct matches first and then any matches in the recommendations. For instance, you can use `us` to search for the recommendations that contain **User task**. The search is based on your workflow parameter, domain model entities, or user roles in your app. You can search for generic activities or elements from the toolbox:

{{< figure src="/attachments/refguide/modeling/mendix-ai-assistance/workflow-recommender/search-toolbox.png" max-width=80% >}}

Choose a suggestion and click it to accept it. You can also choose a suggestion with the arrow keys and press the <kbd>Enter</kbd> key to accept it. The suggested element will be added to the flow and Workflow Recommender will open on the next flow so that you can continue adding activities.

To open the properties dialog box after adding a suggested element, accept the suggestion with <kbd>Shift</kbd> + <kbd>Enter</kbd> (or <kbd>Shift</kbd> + mouse click).

## Read More

* [Workflows](/refguide/workflows/)
* [Logic Recommender](/refguide/logic-recommender/)
* [Mendix AI Assistance (Maia)](/refguide/mendix-ai-assistance/)
