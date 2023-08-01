---
title: "Feedback"
url: /developerportal/general/feedback/
category: "General"
weight: 6
description: "Describes how to manage feedback on your Mendix app in the Developer Portal."
tags: ["Feedback","Developer Portal", "feedback widget", "feedback module"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

{{% alert color="info" %}}
On 12 August, 2023, the way that feedback is presented in the Developer Portal will be changed to become part of **App Insights**.

Existing and new feedback items will continue to be available and you will not need to change the [Mendix Feedback](/appstore/modules/mendix-feedback/) module will not need to be changed in your app(s).

See [App Insights Features](#app-insights), below, for a summary of the new features you will be getting.
{{% /alert %}}

## 1 Introduction

On the **Feedback** page of the Developer Portal, you can view and manage the feedback that has been submitted about an app.

{{< figure src="/attachments/developerportal/general/feedback/feedback.png" >}}

This feedback comes from different sources:

* Submitted via the [Mendix Feedback module](/appstore/modules/mendix-feedback/)
* Submitted on the **Feedback** page itself (for details, see the [Actions](#actions) section, below)

{{% alert color="info" %}}When new feedback is submitted for your app, you will also get a notification. You can check the notification by clicking the [Notifications](/developerportal/#notifications) icon. If you no longer would like to receive feedback notifications for a specific app, go to the [Team](/developerportal/general/team/) page for this app, and then change your role to a role that does not have the permission **Can edit 'Stories, Documents and Feedback'**.{{% /alert %}}

## 2 Feedback Fundamentals

### 2.1 Types of Feedback {#types}

There are three types of feedback items:

* **Question** – a question about the app
* **Idea** – an idea for a change or new feature
* **Issue** – an issue or a bug that needs to be investigated for a fix

### 2.2 Feedback Stages {#stages}

Feedback can go through four different stages:

* **Open** – the feedback is awaiting a response from the team
* **Handled** – the team has looked into the feedback and has requested further information
* **Accepted** – the team has accepted the feedback and added this feedback as a story to the Sprint (for details, see the [Adding a Feedback Story to Your Backlog](#adding) section below)
* **Closed** – the team has closed the feedback

Feedback in each stage is shown in a separate tab on the **Feedback** page.

## 3 Feedback Actions {#actions}

These are the general feedback actions available on all the tabs of the **Feedback** page:

* **Add New Feedback** will add a new feedback item to the **Open** tab of the app
* **Export to Excel** will export the listed feedback items to an *.xls* file
    * For the export, you can filter on the **Submitted after** date, **Label**, **Status** of feedback, and **Type** of feedback
* The filters (in the drop-down menu via the default **Show All** option) allow you to filter on the types of feedback being listed: **Question**, **Idea**, and/or **Issue**

## 4 Feedback Details {#feedback-details}

Clicking **Details** or the title of a feedback item opens the item's details page, where you can perform various actions for reviewing and processing a feedback item on this page. These actions are described below.

{{% alert color="info" %}}
If you need to use a link to a specific feedback item (for example, to ask someone else on your team to review it), you can use the URL `https://sprintr.home.mendix.com/link/showfeedback/{FeedbackID}` where `{FeedbackID}` is the feedback number – for example `382647` from the example above.
{{% /alert %}}

### 4.1 Reviewing a Feedback Item

Here you can review the feedback and start any necessary investigation:

{{< figure src="/attachments/developerportal/general/feedback/feedback-no-details.png" >}}

The number and type of the feedback item are presented below the item's title, along with the name of the feedback provider and the date on which the feedback was provided.

On the **Overview** tab, in the **Leave a comment** box, you can post a comment and start an exchange with the App User or team member who submitted the feedback. This is a good place to ask for clarification. You can also use the **Add:** icons to attach files to your comment.

On the **History** tab, you can see the changes made to the feedback item.

### 4.2 Processing a Feedback Item {#processing}

To process a feedback item, you can select one of the following actions (note that the options available depend on the current status of your feedback):

* **Accept Feedback** – signifies the feedback is valid and that you want to add a story to your backlog on the basis of the feedback item (for details, see the [Adding a Feedback Story to Your Backlog](#adding) section below)
* **Mark Under Review** – notifies the user who submitted the feedback as well as your team that the item is under review
* **Mark as Handled** – changes the [feedback stage](#stages) of the item from **Open** to **Handled**, which then removes the item from your open items list but does not close it
* **Close Feedback** – closes the feedback item; you can close a feedback item when, for example, you can solve and implement it yourself, or when a duplicate has already been accepted

If the feedback item has not yet been accepted, you can also change the feedback item's type via the drop-down meny by selecting **Question**, **Idea**, and/or **Issue**. For more information, see the [Types of Feedback](#types) section.

If the feedback applies to a different app, you can select an app where you are an team member from the drop-down menu under **Move to App**.

Finally, click **Delete feedback** to delete the item. This action will remove all the associated messages as well. Note that this action cannot be performed if the item has been accepted, and cannot be undone.

### 4.3 Adding a Feedback Item to Your Backlog {#adding}

After clicking **Accept feedback**, you can create a story on the basis of the feedback item and add it to your backlog. To do that, follow these steps:

1. Enter a **Motivation** if required.
2. Enter a name for the story in **As Story** and a description in **Story description**.
3. Decide whether the feedback item should be classified as a bug or feature in **Identify as**.
4. Click **Submit** to submit the story.

    {{< figure src="/attachments/developerportal/general/feedback/accept-feedback.png"   width="500"  >}}

Once a feedback item is connected to a user story, the user who submitted the story will automatically be updated on the progress made on that story:

* Adding a story with feedback attached from your backlog to a Sprint will result in a message that the item has been planned
* Completing a Sprint that contains a story with feedback attached will result in a message that the item has been completed

## 5 App Insights Features {#app-insights}

On 12 August, 2023, the way that Feedback is managed in the Developer Portal will change. This will give you additional features to help you work with your existing and new feedback items. You will not need to make any changes to your app(s), the current [Mendix Feedback](/appstore/modules/mendix-feedback/) module will continue to work.

The new features include: 

* Improved search capabilities
* Adding tags to feedback items
* Allow teams to define custom statuses for feedback items
* Identifying which environment the feedback item comes from (for example Production or Test)
* Linking feedback items together, for example feedback about the same issue
* Moving feedback between apps
* Allowing reporters to see and update their feedback items in the Developer Portal
* Integrating feedback with Jira
