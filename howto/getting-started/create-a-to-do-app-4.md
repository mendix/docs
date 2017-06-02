---
title: "Create a Mobile To-Do App Step 4: _________"
space: "Mendix 7 How-To's"
parent: "create-a-to-do-app"
description: "This is the fourth how-to for creating a to-do app in 20 minutes using the Mendix Mobile Quick Starter app."
tags: ["Mobile", "Quick", "Starter", "App", "To-do", "Kickstart", "Development"]
toc-level: "4"
---

## 1 Introduction

_______

**This how-to will teach you how to do the following:**

[EDIT - WHICH TO INCLUDE?]

* Create a project that will speed up and simplify your mobile app development
* Build a to-do app
* Configure several widgets to realize a rich mobile app with a native look and feel

![](attachments/create-a-to-do-app/todo-00.jpg)

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisite:

* Complete [Create a Mobile To-Do App Step 3: ]()

## 3 Adding Logic to the Microflows

The **List view swipe** widget has been configured, but you added two microflows that do not have any logic yet. Follow these steps to add some logic and make them execute the behavior we want when they are triggered:

1. Open the **ACT_ToDo_Delete** microflow.
2. Add an **Activity** that deletes the **ToDo** object and refreshes the client.
<iframe width='100%' height='350px' frameborder='0' src='https://modelshare.mendix.com/models/83d0f300-356e-4a6b-9ea3-7625284a6937/act_todo_delete?embed=true' allowfullscreen></iframe>
3. Open the **ACT_ToDo_MarkAsCompleted** microlfow.
4. Add an **Activity** that changes the **Completed** attributed of the **ToDo** object to *true* and set **Commit** to *Yes*.
<iframe width='100%' height='350px' frameborder='0' src='https://modelshare.mendix.com/models/adbe2dd5-2e27-41ab-8f67-3a728917f01b/act_todo_markascompleted?embed=true' allowfullscreen></iframe>
<div class="alert alert-info">
There is no need to refresh in the client due to the *Move out, hide* behavior of the List view swipe widget.
</div>

## 4 Running the App and Simulating Touch Behavior of Mobile Device

The app is now finished. Follow these steps to run the app and view it on a simulated mobile device:

1. Save all changes and run the app locally.
2. Open the **View App** dropdown and select **View Hybrid Mobile App**.
3. Choose the **Profile** navigation profile.
4. Click on the laptop icon under **Preview in browser**.

![](attachments/create-a-to-do-app/todo-00.jpg)

## 5 Related Content

* [How to Deploy Your First Hybrid Mobile App](../mobile/deploy-your-first-hybrid-mobile-app)
* [How to Publish a Mendix Hybrid Mobile App in Mobile App Stores](../mobile/publishing-a-mendix-hybrid-mobile-app-in-mobile-app-stores)
* [Push Notifications](../mobile/push-notifications)
