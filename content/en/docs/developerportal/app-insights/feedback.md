---
title: "Feedback"
url: /developerportal/app-insights/feedback/
category: "App Insights"
weight: 5
description: "Mendix supports [feedback management](/developerportal/app-insights/feedback/) by enabling [Feedback](/appstore/modules/mendix-feedback/)  module in any application. App users can easily provide feedback through the feedback button integrated within the applications. This feedback is efficiently processed by the app development team using the Mendix Feedback UI. With the enhanced Mendix Feedback module, your app users gain the ability to capture pixel-perfect screenshots and annotate them, enabling them to clearly convey their specific points and preferences to you."
tags: ["Feedback","Developer Portal", "feedback widget"]
aliases:
    - /developerportal/collaborate/feedback/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

If you app uses the [Mendix Feedback](/appstore/modules/mendix-feedback/) module, users can report feedback to your team using the feedback widget in your app, and all their feedback will go to the **Feedback** page. You can access this page by selecting your app in the Developer Portal and then clicking **Feedback** in the navigation pane. **Feedback** enables your team to view and manage all the feedback items that users have sent from your app.

### 1.1 What Happens to a User After They Submit Feedback? {#what-happens-to-user}

After a user reports feedback in the app using the feedback widget, they will get an email with a link to their submitted feedback item. When the user opens the link, a page opens and shows their feedback details. See the table below:

| What a User Can See on the Page                             | What a User Cannot See on the Page                           |
| ----------------------------------------------------------- | ------------------------------------------------------------ |
| Name of the feedback they submitted                         | Metadata                                                     |
| Description of the feedback they wrote                      | Summary of the feedback that your team wrote                 |
| Screenshot (if they uploaded a screenshot for the feedback) | To which team member the feedback item is assigned           |
| Current status of the feedback item                         | Tags that are assigned to the feedback item                  |
| Submission date                                             | Other feedback items that are associated with this feedback item |
| Last activity on the feedback item                          | Attachments that you team uploaded for this feedback item    |
|                                                             | Team comments on this feedback item                          |

This page also has a message feature for the user to communicate with your team directly. You can upload images in your messages. When the user posts a message, the assigned team member will receive an email. When there is a reply from your team, the user will get an email notification.

{{% alert color="warning" %}}Do not share the link to your feedback details with someone unless it is necessary. Anyone who has this link can access your feedback details, including the title and the description of the feedback item as well as the screenshot if there is one.{{% /alert %}}

If the user does not want to receive notifications anymore, they can clear the checkbox for the notification on the page, as shown in the image below: 

{{< figure src="/attachments/developerportal/app-insights/feedback/user-notification.png" >}}

## 2 Using Feedback

After a user submits a feedback item from your app, it goes automatically to **Feedback** in the Developer Portal. **Feedback** enables your team to view all the feedback items. It also allows team members with the right permissions to organize the feedback items, and add feedback items manually.

{{% alert color="info" %}}When a user submits a feedback item from your app, everyone in your team will get a [notification](/developerportal/global-navigation/#notifications). If you no longer want to receive feedback notifications for a specific app, you can [stop watching](https://docs.mendix.com/developerportal/#my-apps) the app.</br>Next to getting a notification in the Developer Portal, Scrum Masters of your team will also receive an email with a link to the details of the new feedback item.{{% /alert %}}

**Feedback** contains two tabs: **Inbox** and **Archive**.

### 2.1 Inbox {#inbox}

On the **Inbox** tab, everyone from your team can view all the unarchived feedback items that have been sent from your app by users.  

{{< figure src="/attachments/developerportal/app-insights/feedback/feedback-items.png" class="image-border" alt="inbox tab" >}}

In the list on the **Inbox** tab, you can find the following information for each feedback item:

* **ID** – the unique number that is assigned to the feedback item
* **Subject** – the title of the feedback item given by the reporter
* **Submitter** – the email address of the reporter
* **Tags** – tags that your team has assigned to the feedback item
* **Status** – the status that your team has set to the feedback item
* **Linked** – the number of the feedback items that are linked to this feedback
* **Priority** – the priority that the feedback item has
* **Date** – the date when the feedback was submitted

{{% alert color="info" %}}For more information about each bullet item above, see the list in the [Feedback Details](#feedback-details) section.{{% /alert %}}

To export all feedback items into one Excel file, click **Export**.

To search by **Subject**, **Description**, **User Email** and **Tags**, type the keywords in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter the feedback items using the **Environment**, **Assignee**, **Priority**, **Status**, and **Submission date**. The filters are saved until the page is refreshed.

#### 2.1.1 Organizing Feedback Items in Inbox

If your [role](/developerportal/general/app-roles/) has the permission that **Can edit ‘Stories, Documents and Feedback'**, you can also organize feedback items.

You can add new feedback items manually yourself. 

To manually add a feedback item, click **Create new feedback item** (if there is not any feedback item yet on the **Inbox** tab) or click **Add item** (if there are already feedback items on the **Inbox** tab), and then fill in the **Subject**, **Description**, and **Submitter Email** fields, and optionally **Upload Screenshots** in the **New Feedback item** dialog box.

If you select feedback items, you can see the following items: 

{{< figure src="/attachments/developerportal/app-insights/feedback/bulk-actions-bar.png" class="image-border" alt="bulk-actions-bar" >}}

* **Link Items** – Clicking this links the feedback items together into one feedback group.

  You need to choose which item is the primary item of the group. After the feedback items are linked, only the primary feedback item appears in the list. The feedback items that are linked to the primary item will disappear from the list. You can only access these linked feedback items from their primary item. If you change the status of the primary feedback item, all the linked items will get the same status automatically.

  {{% alert color="info" %}}When you open a linked feedback item, you can click **Make [the linked feedback item] the Primary Item** to make this feedback item the primary item of the feedback group instead.{{% /alert %}}

* **Move** – Clicking this moves the selected feedback items to any other app of which you are a member. Whenever you move feedback items, you will also move all linked feedback. If you only want to move one feedback item, you need to unlink the feedback item from the group first.

* **Create Stories** – If your app is connected to [Epics](/developerportal/project-management/epics/) or [Jira](/developerportal/project-management/jira-connector/), clicking this button will convert the selected feedback items to stories on the designated board in Epics or Jira.

* Status drop-down list – You can select a status from the drop-down list and then click **Apply** to change the status of the selected feedback items.

* **Archive** – Clicking this sets the selected feedback items as archived.

* **Delete** – Clicking this deletes the selected feedback items permanently. The result is irreversible.

### 2.2 Archive {#archive}

On the **Archive** tab, everyone in your team can view all the archived feedback items.

In the list on the **Archive** tab, you can find the following information for each feedback item:

* **ID** – the unique number that is assigned to the feedback item
* **Subject** – the title of the feedback item given by the reporter
* **Submitter** – the email address of the reporter
* **Tags** – tags that your team has assigned to the feedback item
* **Status** – the status that your team has set to the feedback item
* **Date** – the date when the feedback was submitted
* **Archive Date** – the date when the feedback was archived

To export all the archived feedback items into one Excel file, click **Export**.

To search by **Subject** and **ID**, type the keywords in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter the feedback items using the **Environment**, **Closed date**, **Submission date**, and **Assignees**. The filters are saved until the page is refreshed.

### 2.3 Feedback Details {#feedback-details}

On the [Inbox](#inbox) and [Archive](#archive) tabs, if you click the **ID** of a feedback item in the list, the **Feedback Details** page opens. There, you can see more details about the feedback item, and contact the reporter of the feedback item. (If you click a place other than the **ID** of a feedback item in the list, the details of the feedback will show on a side panel. However, you cannot contact the reporter of the feedback item from this side panel.)

{{% alert color="info" %}}If your [role](/developerportal/general/app-roles/) has the permission that **Can edit ‘Stories, Documents and Feedback'**, you can edit the feedback details.{{% /alert %}}

The feedback details on the **Feedback Details** page or on the side panel contain the following items: 

* Buttons ({{% icon name="hyperlink" %}} {{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner
    * **Copy Link** ({{% icon name="hyperlink" %}}) – Clicking this button copies the URL to the feedback item. You can send the URL to other people.
    * **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking the button opens a menu with the following items:
        * **Move** – Clicking this button moves the items to any other app of which you are a member. Whenever you move feedback, you will also move all linked feedback. If you only want to move one item, you need to unlink the item from the group first.
        * **Create Story** – If your app is connected to [Epics](/developerportal/project-management/epics/) or [Jira](/developerportal/project-management/jira-connector/), clicking this button will convert the feedback item to a story on the designated board in Epics or Jira. Once the story is created, clicking this button brings you to the story on the board right away.
        * **Delete** – Clicking this button removes the feedback item permanently from **Feedback**. The result is irreversible.

* **Last activity** – This shows when the last edit to the feedback item was made.

* **Priority** – This shows the priority that the feedback item has.

* **Assigned To** – This shows to whom the feedback item is assigned. When you assign the feedback item to someone,  they will get an email notification.

* **Status** – This is the status of the feedback item. There are two default statuses: **New** and **Closed**. Whenever a feedback arrives in the app, it is set to **New**. When you close a feedback, it is set to **Closed** and moved to the **Archived** page. You can also add custom statuses by clicking **Settings** ({{% icon name="cog" %}}) and adding the new statuses in the new dialog box. Custom statuses can only be used for feedback items that are not archived. You can filter your feedback items based on the status.

* **Summary** – This is the summary of the feedback item. Only your team members can see this summary.

* **User Feedback** – This shows the original feedback title, feedback description, and screenshot submitted by the reporter.

* **Metadata** – This shows a list of metadata of the feedback item.

    * **Active Userrole** – This is the user role the reporter has in your app
    * **Active form**– This is the page from which the reporter sent the feedback
    * **Screen Size** – This is the dimensions of the reporter’s screen in pixels
    * **Browser** – This is the version of the browser the reporter was using
    * **Application location** – This is the URL of the page from which the reporter sent the feedback
    * **Submitter name** – This shows the name of the reporter
    * **Submitter email** – This shows the email of the reporter
    * **Submission date** – This shows the date when the feedback was submitted

* **Tags** – These are the tags assigned to the feedback item. You can select a tag from the drop-down list or create new tags by typing the tag name inside the text box and then clicking **create [the tag name]**. A tag should contain maximum 50 characters. You can assign multiple tags to a feedback item.

  {{< figure src="/attachments/developerportal/app-insights/feedback/tags.png" >}}

  {{% alert color="info" %}}For more information about how to manage tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

* **Linked Feedback** – This shows which feedback items are linked to this feedback item.

  You can link a feedback item by selecting a feedback item from the drop-down list.

  {{< figure src="/attachments/developerportal/app-insights/feedback/linked-feedback.png" >}}

  Once a feedback item is linked, it disappears from the list on the **Inbox** or **Archive** tab. You can only access the linked feedback item from its primary feedback item to which it is linked. If you change the status of the primary feedback item, all the linked items will get the same status automatically.

  {{% alert color="info" %}}When you open a linked feedback item, you can click **Make [the linked feedback item] the Primary Item** to make this feedback item the primary item of the feedback group instead.{{% /alert %}}

  You can unlink a feedback item by hovering over the feedback item and clicking the **Remove** ({{% icon name="remove" %}}) button. Once the feedback is not linked anymore, it appears again in the list on the **Inbox** or **Archive** tab.

* **Attachments** – This contains attachments to this feedback item. To upload an attachment, click **Add** ({{% icon name="add" %}}) and select the file. The following formats are supported: .*peg*, *.png*, and *.gif*. Each attachment should be maximum 5 MB in size. Once an attachment is uploaded, only your team members can view, download, and delete the attachments.

* **Team Comments** – This section shows all the comments on this feedback item from your team. You can leave comments here and attach attachments to each comment. Comments submitted to this section are only visible to your team members.

* **Contact reporter** (not available on the side panel) – This section allows you to read messages from the reporter and reply to them. Whenever the reporter sends a message, it will be shown in this section. Once you reply a message from the reporter, they will receive an email. When there are multiple feedback items linked, the system only sends an email to the reporter of this specific feedback item, not other associated items in the same group.

  For more information, see the [What Happens to a User After They Submit Feedback](#what-happens-to-user) section.
  
#### 2.3.1 Managing Tags {#manage-tags}

  From the [feedback details](#feedback-details) page, you can manage tags by clicking **Settings** ({{% icon name="cog" %}}) next to the **Tags** text box:

  {{< figure src="/attachments/developerportal/app-insights/feedback/tag-management-settings.png" >}}

  To create a new tag, do as follows:

  1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
  2. In the text box, enter the name for the new tag.
  3. If you want to change the color of the new tag, click the colored circle and select a different color.
  4. Click **Save** ({{% icon name="checkmark-circle" %}}) to save the new tag.

  To edit an existing tag, do as follows:

  1. To change the tag name, click the name of the tag. After the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
  2. To change the tag color, click the colored circle, and select a different color.

  To delete an existing tag, do as follows:

  1. Hover over the row where the tag is listed. A **Delete** button ({{% icon name="trash-can" %}}) appears at the end of the row.
  2. Click **Delete**. The **Confirmation** dialog box opens.
  3. Click **Delete Tag**.
