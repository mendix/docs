---
title: "Feedback"
url: /developerportal/app-insights/feedback/
category: "App Insights"
weight: 5
description: "Describes how to manage feedback on your Mendix app in the Developer Portal."
tags: ["Feedback","Developer Portal", "feedback widget"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Whenever feedback is sent from your app, it is collected in Feedback Management. In the developer portal, you can find the Feedback Management page. Here, you can view, organize and manage all your feedback.

{{% alert color="info" %}}When new feedback is submitted for your app, you will also get a notification. You can check the notification by clicking the [Notifications](https://docs.mendix.com/developerportal/#notifications) icon. If you no longer want to receive feedback notifications for a specific app, you can [stop watching](https://docs.mendix.com/developerportal/#my-apps) the project. {{% /alert %}}

# 2 Inbox and Archive

The feedback management app is divided into two pages: Inbox and Archive.

## 2.1 Overview

Starting out you may not have any feedback items. You can manually add your own feedback by using the ‘create new feedback item’ button. You can fill in the Subject, Description, the Email and optionally attach a screenshot.

{{< figure src="/attachments/developerportal/app-insights/feedback/feedback-items.png" >}}

From the Inbox, you can access all the feedback that’s been sent to your app. You’ll find some information for your feedback on this page.

- The ID holds the unique number that’s given to the feedback
- The Subject is the title of the feedback given by the reporter
- The Submitter shows the email address of the reporter
- The Tags are a list of tags given by one of the makers. Read more about tags below this section.
- The Status is the status given by one of the makers. Read more about status below this section.
- Linked shows how many items are linked to this feedback. Read more about Linked items below this section.
- The date shows the submission date of the feedback.

## 2.2 Actions

There are a couple of actions you can do on this page.

- You can create new feedback by adding a new item.
- You can export all the feedback to an excel sheet using the Export button.
- You can search by Subject, Description, User Email and Tags using the search bar.
- Clicking the filter bar will open a new side panel. In this side panel, you can also filter on the type of environment the feedback is sent from, filter on submission dates and filter on assignees.

Selecting any of the feedback opens up more options. Most of these options are explained in the feedback section below.

- Link Items will link the feedback items together. You get to choose which item will be the primary item. See below for more information on linking items.
- Move will move the items to any of the other apps you have access to. You can find more information in Moving Feedback.
- Archive will set all the feedback items as Archived. See Statuses for more information.
- Delete will remove the feedback item completely from Feedback Management. This is irreversible.

# 3 Manage Feedback

{{% alert color="info" %}}Only people with the right access can manage feedback. To see if you have the right access, go to the [Team](https://docs.mendix.com/developerportal/collaborate/team/) page for this app, and then change your role to a role that has the permission **Can edit** **‘Stories,** **Documents and Feedback’**.{{% /alert %}}

There are two places where you can interact with feedback: the side panel and the full detail page. Both can be accessed from either the Inbox page or the Archive page.

Clicking the number will send you to the full detail page, clicking on another part of the bar will send you to the side panel. Most information is shown on both pages, with the exception of the Contact Reporter function.

## 3.1 Summary

This field is only visible to the makers. You can summarize the feedback in here. Every other member of the team will be able to see this summary.

## 3.2 User Feedback and Metadata

The original title, description and screenshot from the reporter can be found here. You can see information on the user in the metadata section.

- Active Userrole: the role the reporter has in your app
- Active form: the page the reporter sent the feedback from
- Screen Size: the dimensions in pixels of the reporter’s screen
- Browser: the version of the browser the reporter is using
- Application location: The URL of the page the reporter sent the feedback from
- Submitter name: The name of the reporter
- Submitter email: The email of the reporter
- Submission date: The date when the feedback was submitted`

Both the User Feedback and Metadata sections are collapsible.

## 3.3 Assigning feedback

It is possible to assign another person or yourself to a feedback item. You can assign any maker from the project as an assignee. Whenever you assign another person as an assignee, they will get an email letting them know they are assigned as an assignee.

## 3.4 Status and Custom Status

Every feedback has a status. By default, there are two statuses: New and Closed. Whenever a feedback arrives in the app, it is set to New. Whenever you close a feedback, it will be set to Closed and moved to the Archived folder.

{{< figure src="/attachments/developerportal/app-insights/feedback/custom-status.png" >}}

It is also possible to add custom statuses. By clicking the cog wheel, you will open a pop up where you can manage your own custom statuses. Just like the default statuses, you can apply your custom status to a feedback item. Custom statuses will be shown on the Inbox page. It is not possible to create a custom status for the Archived page.

## 3.5 Tags

It is also possible to assign Tags for a feedback item. In the Tag section, you can select a Tag from the dropdown. You can create new tags by typing inside the dropdown. This will create a new tag associated to the project. Unlike Statuses, a feedback item can have as many tags as you want. There is no cap on the amount of tags you can create, but a tag has a limit of 50 characters.

{{< figure src="/attachments/developerportal/app-insights/feedback/tags.png" >}}

## 3.6 Linking feedback

If you have multiple feedback items, you can link them together. Linking feedback items will remove the linked items from the overview, they are still accessible through the Primary feedback item.

{{< figure src="/attachments/developerportal/app-insights/feedback/linked-feedback.png" >}}

Clicking the Linked Feedback Dropdown will show a list of all your unlinked feedback items, connected to the same project. If you select any of the feedback items, you will link the items together. The first item will be the primary feedback item. This item will be shown in the overview page.

You can unlink an item by pressing the cross next to the item you want to unlink. If you unlink the last linked item, both that item and the primary item will be unlinked.

You can still access linked feedback items. By clicking their ID number, you will open their page in the side panel. From here, you can turn that item into the primary of that group.

## 3.7 Attachments

You can upload attachments to each feedback item. Once uploaded, only makers connected to the project can view, download and delete the attachments.

Each attachment can be up to 5MB in size. App Insights supports the following file-types: .jpeg, .png, and .gif.

## 3.8 Team Comments

Each feedback item has its own comment section. You can leave comments here and attach attachments to each comment. See the Attachment section for more information on attachments.

Comments submitted to this section are only visible to other makers connected to this project.

## 3.9 Contact reporter

In the full detail page, you can access the contact reporter function. Here, you can read and reply to the reporter. Each message is sent as an email to the reporter. Whenever a reporter sends a reply, it will be shown in this message box. When there are multiple feedback items linked, you will only send an email to the reporter of the current selected feedback.

## 3.10 Moving feedback

Feedback can be moved between projects. You can move feedback between any project you are a part of. Whenever you move feedback, you will also move all linked feedback. If you only want to move one item, you need to unlink the item(s) first.

## 3.11 3rd Party integration

{{< figure src="/attachments/developerportal/app-insights/feedback/third-party-integration.png" >}}

If your project is connected to [Epics](https://docs.mendix.com/developerportal/project-management/epics/epics/) or [Jira](https://www.atlassian.com/software/jira), you can send feedback items directly to that service. By selecting the Convert to Story button, you will create a story on the designated board. Once this is done, the same button will now show the story on the right board.

# 4 Reporter

Once the feedback module is installed any user of the application can report feedback by clicking the feedback widget. Besides sending the feedback to the feedback management app, they will also get an email with a link to their reported feedback.

## 4.1 Information

On this page, they will see the basic information on their feedback. They will be able to see the name of the feedback they submitted, the description they sent in, and the screenshot if they uploaded one. They can also see the see the current Status of the feedback item, the Submission date and the last activity on this item.

They won’t be able to see the following:

- Meta data
- The given Summary by the makers
- Who’s currently assigned to the feedback item
- Which tags are set to this feedback item
- Which other items are linked to this feedback item
- Any attachments attached to this item
- Any of the team comments posted to this feedback item.

## 4.2 Actions

There are two actions a reporter can perform.

- Turn notification on or off for this feedback item. If the notification is off, responses to this feedback item won’t be send through email.
- Contact App Maker, using this Message box, the reporter can send messages to the assigned maker. The assigned maker will receive an email whenever a message is posted.

