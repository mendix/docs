---
title: "Feedback Management"
category: "Collaboration Tools"
description: "Describes how to manage feedback on your Mendix app in the Developer Portal."
menu_order: 40
tags: ["Feedback","Developer Portal", "feedback widget"]
---

## 1 Introduction

On the **Feedback** page of the Developer Portal, you can view and manage the feedback that has been submitted about an app.

![](attachments/feedback/feedback.png)

This feedback comes from different sources:

* Submitted via the [Mendix Feedback widget](/appstore/widgets/mendix-feedback)
* Submitted on the **Feedback** page itself (for details, see the [Actions](#actions) section, below)
* Submitted in Mendix Studio (for more information, see [Buzz](/studio/buzz))

## 2 Feedback Fundamentals

### 2.1 Types of Feedback {#types}

There are three types of feedback item:

| Type         | Description                                                |
| ------------ | ---------------------------------------------------------- |
| Idea     | An idea for a change or new feature.                       |
| Question | A question about the app project.                             |
| Issue    | An issue or a bug that needs to be investigated for a fix. |

### 2.2 Feedback Stages {#stages}

Feedback can go through four different stages:

| Stage        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| Open     | The feedback is awaiting a response from the App Team.       |
| Handled  | The App Team has looked into the feedback and has requested further information. |
| Accepted | The App Team has accepted the feedback and added this feedback as a story to the Sprint. For more information, see [Adding a Feedback Story to Your Backlog](#adding), below. |
| Closed   | The App Team has closed the feedback.                        |

Feedback in each stage is shown in a separate tab on the **Feedback** page.

## 3 Feedback Actions {#actions}

These are the general feedback actions available on all the tabs of the **Feedback** page:

* **Add feedback** will add a new feedback item to the **Open** tab of the app project
* **Export to Excel** will export the listed feedback items to an *.xls* file
	* For the export, you can filter on the **Submitted after** date, **Label**, **Status** of feedback, and **Type** of feedback
* **Show filters** allows you to filter on the types of feedback being listed: **Ideas**, **Questions**, and/or **Issues**

## 4 Feedback Details

Clicking on the title of a feedback item or on **Details** opens the item's details page:

![](attachments/feedback/feedbacklist.jpg)

You can perform various actions for reviewing and processing a feedback item on this page. These actions are described below.

{{% alert type="info" %}}
If you need to use a link to a specific feedback item (for example, to ask someone else on your team to review it), you can use the URL `https://sprintr.home.mendix.com/link/showfeedback/{FeedbackID}` where `{FeedbackID}` is the feedback number – for example `382647` from the example above.
{{% /alert %}}

### 4.1 Reviewing a Feedback Item

Here you can review the feedback and start any necessary investigation.

![](attachments/feedback/feedback-no-details.png)

You can also click **Details** for technical details of the feedback item:

![](attachments/feedback/feedback-details.png)

On the item's details page, you can also **Turn email updates on/off**. This is useful for when you comment on a feedback item and perform further [processing](#processing) actions on it.

In the **Leave a comment** box, you can post a comment and start an exchange with the App User or App Team member who submitted the feedback. This is a good place to ask for clarification. You can also use the **Add:** icons to attach files to your comment.

![](attachments/feedback/comment.png)

### 4.2 Processing a Feedback Item {#processing}

To process a feedback item, you can select one of the following in the **Actions** menu. The options available depend on the current status of your feedback.

| Action                  | Description                                                  |
| ----------------------- | ------------------------------------------------------------ |
| Accept feedback    | Signifies the feedback is valid and that you want to add a story to your backlog on the basis of the feedback item. For more details, see [Adding a Feedback Story to Your Backlog](#adding), below). |
| Mark 'Under review' | Notifies the user who submitted the feedback as well as your team that the item is under review. |
| Mark as handled    | Changes the status of the item from Open to Handled. This removes the item from your open items list but does not close it. For more information, see the  [Feedback Stages](#stages) section. |
| Close feedback      | Closes the feedback item. You can close a feedback item when, for example, you can solve and implement it yourself, or when a duplicate has already been accepted. |

If the feedback item has not yet been accepted, you can also change the feedback item's type by clicking **Convert to idea**, **Convert to question**, or **Convert to issue**. For more information, see the [Types of Feedback](#types) section.

![](attachments/feedback/convert-feedback.png)

If the feedback applies to a different app, you can select an app where you are an App Team member from the drop-down menu under **Move to app**.

![](attachments/feedback/move-feedback.png)

Finally, you can click **Delete feedback** to delete the item. This action will remove all the associated messages as well. Note that this action cannot be performed if the item has been accepted, and cannot be undone.

![](attachments/feedback/delete-feedback.png)

### 4.3 Adding a Feedback Item to Your Backlog {#adding}

After clicking **Accept feedback**, you can create a story on the basis of the feedback item and add it to your backlog. To do that, follow these steps:

1. Enter a **Motivation** if required.
2. Enter a name for the story in **As story** and a description in **Story description**.
3. Decide whether the feedback item should be classified as a bug or feature in **Identify as**.
4. Select the Sprint (or backlog) to which you want to add the story in **Plan for sprint**.
5. Select the label(s) (if available ) to be added to the story under **Assign labels**.
6. Click **Submit** to submit the story.

    ![](attachments/feedback/accept-feedback.png)

Once a feedback item is connected to a user story, the user who submitted the story will automatically be updated on the progress made on that story:

* Adding a story with feedback attached from your backlog to a Sprint will result in a message that the item has been planned
* Completing a Sprint that contains a story with feedback attached will result in a message that the item has been completed
