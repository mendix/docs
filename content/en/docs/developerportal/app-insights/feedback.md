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

**Feedback** in the Developer Portal enables you to view and manage all your feedback items that are sent from your app. It also allows you to add feedback items for your app manually yourself.

{{% alert color="info" %}}When new feedback is submitted from your app, you will get a notification. You can check the notification by clicking the [Notifications](/developerportal/#notifications) icon in the Developer Portal. If you no longer want to receive feedback notifications for a specific app, you can [stop watching](https://docs.mendix.com/developerportal/#my-apps) the app. {{% /alert %}}

**Feedback** contains two pages: **Inbox** and **Archive**.

## 2 Inbox {#inbox}

The **Inbox** page enables you to organise and manage all your unarchived feedback items. 

{{< figure src="/attachments/developerportal/app-insights/feedback/feedback-items.png" >}}

Here you can find all the unarchived feedback items that have been sent from your app by users. You can also add feedback items manually yourself.

To manually add a feedback item, click **Create new feedback item** (if there is not any feedback item yet on the **Inbox** page) or click **Add item** (if there are already feedback items on the **Inbox** page), and then fill in the **Subject**, **Description**, and **Submitter Email** fields, and optionally **Upload Screenshots** in the **New Feedback** item dialog box.

To export all feedback items into one Excel file, click **Export**.

To search by **Subject**, **Description**, **User Email** and **Tags**, type the key words in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter the feedback items using the **Environment**, **Submission date**, and **Assignees**.

In the list, you can find the following information for each feedback item:

- **ID** – the unique number that is assigned to the feedback
- **Subject** – the title of the feedback given by the reporter
- **Submitter** – the email address of the reporter
- **Tags** – a list of tags given by one of the makers (for more information, see the [Tags](#tags) section)
- **Status** – the status given by one of the makers (for more information, see the [Status and Custom Status](#status) section)
- **Linked** – how many items are linked to this feedback (for more information, see the [Linking Feedback](#linking-feedback) section)
- **Date** – the submission date of the feedback

If you select feedback items, you can see the following buttons: 

* **Link Items** – Clicking this links the feedback items together into one feedback group. You need to choose which item is the primary item of the group. After the feedback items are linked, only the primary feedback item shows in the list. The feedback items that are linked to the primary item will disappear from the list. You can only access these linked feedback items from their primary item. When you open a linked feedback item, you can click **Make [the linked feedback item] the Primary Item** to make this feedback item the primary item of the feedback group instead.

  {{< figure src="/attachments/developerportal/app-insights/feedback/linked-feedback.png" >}}

* **Move** – Clicking this moves the items to any other app of which you are a member. Whenever you move feedback, you will also move all linked feedback. If you only want to move one item, you need to unlink the item from the group first.

* **Archive** – Clicking this sets all the feedback items as archived (for more information, see the [Statuses and Custom Status](#status) section)

* **Delete** – Clicking this removes the feedback item permanently from **Feedback**. The result is irreversible.

## 3 Archive {#archive}

The **Archive** page shows all the archived feedback items.

To export all the archived feedback items into one Excel file, click **Export**.

To search by **Subject** and **ID**, type the key words in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter the feedback items using the **Environment**, **Closed date**, **Submission date**, and **Assignees**.

In the list, you can find the following information for each feedback item:

- **ID** – the unique number that is assigned to the feedback.
- **Subject** – the title of the feedback given by the reporter
- **Submitter** – the email address of the reporter
- **Tags** – a list of tags given by one of the makers (for more information, see the [Tags](#tags) section)
- **Status** – the status given by one of the makers (for more information, see the [Status and Custom Status](#status) section)
- **Date** – the submission date of the feedback
- **Archive Date** – the date when the feedback was archived

## 4 Feedback Details {#feedback-details}

On the [Inbox](#inbox) or [Archive](#archive) page, when you click the **ID** of a feedback item in the list, the **Feedback Details** page opens. There, you can see more details about the feedback item, and contact the reporter of the feedback item.

If you click a place other than the **ID** of a feedback item in the list, the details of the feedback will show on a side panel. However, you cannot contact the reporter from this side panel.

{{% alert color="info" %}}With the right permission, you can edit the feedback details on the **Feedback Details** page or on the side panel. To get the right permission, go to the [Team](https://docs.mendix.com/developerportal/collaborate/team/) page in the Developer Portal for your app, and then change your role to a role that has the permission **Can edit** **‘Stories,** **Documents and Feedback’**. {{% /alert %}}

The feedback details on the **Feedback Details** page or on the side panel contain the following items: 

* Buttons on the upper-right corner

  {{< figure src="/attachments/developerportal/app-insights/feedback/third-party-integration.png" >}}

  * **Convert to a story** – If your app is connected to [Epics](/developerportal/project-management/epics/epics/) or [Jira](https://www.atlassian.com/software/jira), clicking this button will convert the feedback item to a story on the designated board in Epics or Jira. Once the story is already created, clicking this button brings you to the story on the board right away.
  * **Share** – Clicking this button copies the URL to the feedback item. You can share the URL to other people.
  * Ellipsis (**...**)
    * Move – Clicking this button moves the items to any other app of which you are a member. Whenever you move feedback, you will also move all linked feedback. If you only want to move one item, you need to unlink the item from the group first.
    * Delete – Clicking this button removes the feedback item permanently from **Feedback**. The result is irreversible.

* **Last activity** – This shows when the last edit to the feedback item was made.

* **Assigned To** – This shows to whom the feedback item is assigned. When you assign the feedback item to someone,  they will get an email notification.

* **Status** – This is the status of the feedback item. There are two default statuses: **New** and **Closed**. Whenever a feedback arrives in the app, it is set to **New**. Whenever you close a feedback, it will be set to **Closed** and moved to the **Archived** page. You an also add custom statuses by clicking the settings icon and adding the new statuses in the new dialog box. Custom statuses can only be used for feedback items that are not archived.

* **Summary** – This is the summary of the feedback item. This field is only visible to the makers. You can summarize the feedback in here. Every other member of the team will be able to see this summary.

* **User Feedback** – This shows the original feedback title, description, and screenshot from the reporter.

* **Metadata** – This shows a list of metadata of the feedback item.

  - **Active Userrole** – This is the role the reporter has in your app
  - **Active form**– This is the page the reporter sent the feedback from
  - **Screen Size** – This is the dimensions in pixels of the reporter’s screen
  - **Browser** – This is the version of the browser the reporter was using
  - **Application location** – This is the URL of the page from which the reporter sent the feedback
  - **Submitter name** – This shows the name of the reporter
  - **Submitter email** – This shows the email of the reporter
  - **Submission date** – This shows the date when the feedback was submitted`

* **Tags** – These are the tags assigned to the feedback item. You can select a tag from the drop-down list or create new tags by typing the tag name inside the text box and then clicking **create [the tag name]** . A tag should contain maximum 50 characters. You can assign multiple tags to a feedback item.

  {{< figure src="/attachments/developerportal/app-insights/feedback/tags.png" >}}

* **Linked Feedback** – This shows which feedback items are linked to this feedback item. 

  You can link a feedback item by selecting a feedback item from the drop-down list. Once a feedback item is linked, it disappears from the list on the **Inbox** or **Archive** page. You can only access the linked feedback item from its primary feedback item to which it is linked. Once you open the linked feedback item, you can click **Make [the linked feedback item] the Primary Item** to make this feedback item the primary item of that feedback group instead.

  You can unlink a feedback item by hovering over the feedback item and clicking the **X** button. Once the feedback is not linked anymore, it appears again in the list on the **Inbox** or **Archive** page.

* **Attachments** – This contains attachments to this feedback item. To upload an attachment, click **+** and select the file. The following formats are supported: .*peg*, *.png*, and *.gif*. Each attachment should be maximum 5 MB in size. Once an attachment is uploaded, only makers connected to the project can view, download and delete the attachments.

* **Team Comments** – This section shows all the comments on this feedback item from your team. You can leave comments here and attach attachments to each comment. Comments submitted to this section are only visible to other makers connected to this project.

* **Contact reporter** – This section allows you to read and reply to the reporter. Each message is sent as an email to the reporter. Whenever a reporter sends a reply, it will be shown in this section. When there are multiple feedback items linked, the system only sends an email to the reporter of this specific feedback item, not other associated items in the same group.

  {{% alert color="info" %}}**Contact reporter** only shows on the Feedback Details page, not on the side panel.{{% /alert %}}

# 4 Reporter

Once the [Mendix Feedback](/appstore/modules/mendix-feedback/) module is installed in your app, any user of the app can report feedback by clicking the feedback widget. Besides sending the feedback, they will also get an email with a link to their reported feedback. 

When a reporter opens the link, a page opens and offers more information about the feedback item. See the table below:

| What a Reporter Can See                                     | What a Reporter Cannot See                                   |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| Name of the feedback they submitted                         | Metadata                                                     |
| Description of the feedback they wrote                      | Summary of the feedback that makers wrote                    |
| Screenshot (if they uploaded a screenshot for the feedback) | To whom the feedback item is assigned                        |
| Current status of the feedback item                         | Tags that are assigned to the feedback item                  |
| Submission date                                             | Other feedback items that are associated with this feedback item |
| Last activity on the feedback item                          | Attachments uploaded for this feedback item                  |
|                                                             | Team comments on this feedback item                          |

A reporter can turn the notification on or off for this feedback item. If the notification is off, they will not receive any email about the responses to this feedback item.

A reporter can contact the app maker using the message box on the page, the reporter can send messages to the assigned maker. The assigned maker will receive an email whenever the report posts a message.

