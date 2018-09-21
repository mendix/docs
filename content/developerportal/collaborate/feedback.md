---
title: "Feedback"
category: "Collaborate"
menu_order: 40
description: "This page describes how to manage feedback."
tags: ["Feedback","Developer Portal"]
---

## 1 Introduction

Within Mendix, there are two use-cases for the Feedback widget:

* To provide feedback on the Mendix Platform
* To provide feedback via the app

In the **Developer Portal**, you can view and manage the feedback about your app by clicking **Feedback** in the **Collaborate** category.

![](attachments/feedback.png)

Feedback can go through the following four stages:

Stage | Description
| --- | --- |
**Open** | The feedback is awaiting a response from the App Team.
**Handled** | The App Team has looked into the feedback and has respond for further information.
**Accepted** | The App Team has accepted the feedback and added this feedback as a story to the sprint.
**Closed** | The App Team has closed the feedback.

Feedback in each stage is shown in a separate tab.

Each feedback item can be one of three types:

Type | Description
| --- | --- |
**Idea** | The feedback is an idea for a change or new feature.
**Question** | The feedback is a question.
**Issue** | The feedback is an issue or a bug.

## 2 Actions

### 2.1 Add feedback

This will add new feedback on your app

{{% alert type="info" %}}
The feedback button on the right side of the screen in the Developer Portal is the feedback button for the Mendix Platform. It will send the feedback to Mendix. To provide feedback on your app, click **Add feedback**.
{{% /alert %}}

### 2.2 Export to Excel

This will export feedback items into an *.xls* file (you can filter on date, label, status, and type

## 3 Filters

When you click **Show filter**, you can filter on the following:

* **Idea** - this will show all the ideas
* **Question** - this will show all the questions
* **Issue** - this will show all the issues

## 4 Feedback Details

Click **Details** for more information about this particular feedback item.

![](attachments/feedback-details.png)


On the detail page, click the plus sign (+) to see the following:

* Feedback number
* Active userroles
* Active form
* Screen size
* Browser
* Application location
* Submission date

On this page, you can also **Turn email updates on/off**.

When you click **Post a comment**, you can add files within a comment. 

### 4.1 Actions

You can manage the feedback item with the following actions:

Action | Description
| --- | --- |
**Accept feedback** | Means this feedback is valid and that you want to add a story to your backlog on the basis of this item.
**Mark 'Under review'** | Notifies the user who submitted the feedback and your team that the item is under review.
**Mark as handled** | Changes the status of the item from open to handled so that the item will not pollute your open items list.
**Close feedback** | Closes the feedback (for example, when the item is already solved or a duplicate has already been accepted).

### 4.2 Convert

If the feedback type is not correct, you can convert it afterwards by selecting one of these options:

Convert type | Description
| --- | --- |
**Convert to idea** | Changes the feedback type to an idea.
**Convert to question** | Changes the feedback type to a question.
**Convert to issue** | Changes the feedback type to an issue.

### 4.3 Move to App

This option allows you to move a particular feedback item to another app.

You are only allowed to move a feedback item to an app in which you are already a team-member.

### 4.4 Delete

When clicking **Delete feedback**, be sure that you want to delete that feedback item, because this will remove all the associated messages as well.

This action cannot be undone. 

## 5 Related Content

* [Feedback](/developerportal/collaborate/feedback)
* [Mendix Profile](/developerportal/general/mendixprofile)
* [How to Provide Feedback on Mendix](/developerportal/howto/feedback-mendix)
* [Stories](/developerportal/collaborate/stories)
* [How to Manage Sprints and Stories](/developerportal/howto/managing-your-application-requirements-with-mendix)
