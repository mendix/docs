---
title: "Feedback"
url: /developerportal/app-insights/feedback/
weight: 5
description: "Mendix supports [feedback management](/developerportal/app-insights/feedback/) by enabling [Feedback](/appstore/modules/mendix-feedback/) module in any application. App users can easily provide feedback through the feedback button integrated within the applications. This feedback is efficiently processed by the app development team using the Mendix Feedback UI. With the enhanced Mendix Feedback module, your app users gain the ability to capture pixel-perfect screenshots and annotate them, enabling them to clearly convey their specific points and preferences to you."
aliases:
    - /developerportal/collaborate/feedback/
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## Introduction

If your app uses the [Mendix Feedback](/appstore/modules/mendix-feedback/) module, users can report feedback to your team using the feedback widget in your app, and all their feedback will go to the **Feedback** page. **Feedback** enables your team to view all the feedback. It also allows team members with the right permissions to organize feedback and add feedback manually. 

You can access the **Feedback** page by selecting your app in [Apps](https://sprintr.home.mendix.com/) and then clicking **Feedback** in the navigation pane. 

The **Feedback** page contains two tabs: [Inbox](#inbox) and [Archive](#archive).

### What Happens to a User After They Submit Feedback? {#what-happens-to-user}

#### What Happens to Your Team

After a user reports feedback in the app using the feedback widget, the feedback goes automatically to the [Inbox](#inbox) on the **Feedback** page, and the members in your team who are a Scrum Master or have the same permissions as the default permissions of a Scrum Master will get a [notification](/developerportal/global-navigation/#notifications). If you no longer want to receive feedback notifications for a specific app, you can [stop watching](/developerportal/#my-apps) the app. 

Next to getting a notification in the Mendix Portal, Scrum Masters of your team will also receive an email with a link to the details of the new feedback.

#### What Happens to the User

After a user reports feedback in the app using the feedback widget, the user will get an email with a link to their submitted feedback. When the user opens the link, a page opens and shows their feedback details. See the table below:

| What a User Can See on the Page                             | What a User Cannot See on the Page                          |
| ----------------------------------------------------------- | ----------------------------------------------------------- |
| Name of the feedback they submitted                         | Metadata                                                    |
| Description of the feedback they wrote                      | Summary of the feedback that your team wrote                |
| Screenshot (if they uploaded a screenshot for the feedback) | To which team member the feedback is assigned               |
| Current status of the feedback                              | Tags that are assigned to the feedback                      |
| Submission date                                             | Other feedback items that are associated with this feedback |
| Last activity on the feedback                               | Attachments that you team uploaded for this feedback        |
|                                                             | Team comments on this feedback                              |

This page also has a message feature for the user to communicate with your team directly. Users can upload images in the messages. When the user posts a message, the assigned team member will receive an email. When there is a reply from your team, the user will get an email notification.

{{% alert color="warning" %}}Do not share the link to feedback details with someone unless it is necessary. Anyone who has this link can access the feedback details, including the title and the description of the feedback as well as the screenshot if there is one.{{% /alert %}}

If the user does not want to receive notifications anymore, they can clear the checkbox for the notification on the page, as shown in the image below: 

{{< figure src="/attachments/developerportal/app-insights/feedback/user-notification.png" class="no-border" >}}

## Inbox {#inbox}

On the **Inbox** tab, everyone from your team can view all the unarchived feedback sent from your app by users.  

{{< figure src="/attachments/developerportal/app-insights/feedback/feedback-items.png" alt="inbox tab" >}}

In the list on the **Inbox** tab, you can find the following information for each feedback:

* **ID** – the unique number that is assigned to the feedback
* **Subject** – the title of the feedback given by the reporter
* **Submitter** – the email address of the reporter
* **Tags** – tags that your team has assigned to the feedback
* **Status** – the status that your team has set to the feedback
* **Linked** – the number of the feedback items that are linked to this feedback
* **Priority** – the priority that the feedback has
* **Date** – the date when the feedback was submitted

{{% alert color="info" %}}For more information about each bullet item above, see the list in the [Feedback Details](#feedback-details) section.{{% /alert %}}

To export all feedback into one CSV file, click **Export**.

To search by **Subject**, **Description**, **User Email** and **Tags**, type the keywords in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter feedback using the **Environment**, **Assignee**, **Priority**, **Status**, and **Submission date**. The filters are saved until the page is refreshed.

### Organizing Feedback in Inbox

If your [role](/developerportal/general/app-roles/) has the permission that **Can edit ‘Stories, Documents and Feedback'**, you can also organize feedback items.

You can add new feedback manually yourself. 

To manually add feedback, click **Create new feedback** (if there is not any feedback yet on the **Inbox** tab) or click **Add feedback** (if there is already feedback on the **Inbox** tab), and then fill in the **Subject**, **Description**, and **Submitter Email** fields, and optionally **Upload Screenshots** in the **New Feedback** dialog box.

If you select feedback, you can see the following items: 

{{< figure src="/attachments/developerportal/app-insights/feedback/bulk-actions-bar.png" alt="bulk-actions-bar" >}}

* **Link** – Clicking this links the feedback together into one feedback group.

  You need to choose which item is the primary item of the group. After the feedback items are linked, only the primary feedback item appears in the list. The feedback items that are linked to the primary item will disappear from the list. You can only access these linked feedback items from their primary item. If you change the status of the primary feedback item, all the linked items will get the same status automatically.

  {{% alert color="info" %}}When you open a linked feedback, you can click **Make [the linked feedback] the Primary feedback** to make this feedback the primary feedback of the feedback group instead.{{% /alert %}}

* **Move** – Clicking this moves the selected feedback to any other app of which you are a member. Whenever you move feedback, you will also move all linked feedback. If you only want to move one feedback item, you need to unlink the feedback from the group first.

* **Create Stories** – If your app is connected to [Epics](/developerportal/project-management/epics/) or [Jira](/developerportal/project-management/jira-connector/), clicking this button will convert the selected feedback to stories on the designated board in Epics or Jira.

* Status drop-down list – You can select a status from the drop-down list and then click **Apply** to change the status of the selected feedback.

* **Archive** – Clicking this sets the selected feedback as archived.

* **Delete** – Clicking this deletes the selected feedback permanently. The result is irreversible.

## Archive {#archive}

On the **Archive** tab, everyone in your team can view all the archived feedback.

In the list on the **Archive** tab, you can find the following information for each feedback:

* **ID** – the unique number that is assigned to the feedback
* **Subject** – the title of the feedback given by the reporter
* **Submitter** – the email address of the reporter
* **Tags** – tags that your team has assigned to the feedback
* **Status** – the status that your team has set to the feedback
* **Date** – the date when the feedback was submitted
* **Archive Date** – the date when the feedback was archived

To export all the archived feedback into one CSV file, click **Export**.

To search by **Subject** and **ID**, type the keywords in the search bar.

Clicking the filter bar will open the **Filter by** side panel. In this side panel, you can filter the feedback using the **Environment**, **Closed date**, **Submission date**, and **Assignees**. The filters are saved until the page is refreshed.

## Opening Feedback in Inbox or Archive{#feedback-details}

On the [Inbox](#inbox) and [Archive](#archive) tabs, you can open feedback by clicking it in the list. If you click the **ID** of the feedback, the feedback details page will open. If you click a place other than the **ID** of the feedback, a side panel will open. Either the feedback details page or the side panel contains two tabs: [Feedback](#feedback) and [Contact Reporter](#contact-reporter).

### Feedback Tab {#feedback}

{{% alert color="info" %}}If your [role](/developerportal/general/app-roles/) has the permission that **Can edit ‘Stories, Documents and Feedback'**, you can edit the feedback details on the **Feedback** tab.{{% /alert %}}

The **Feedback** tab shows the following items: 

* Buttons ({{% icon name="view-off" %}} {{% icon name="view" %}} {{% icon name="hyperlink" %}} {{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner
    * {{% icon name="view-off" %}} – Clicking the button to start receiving [notifications](#notifications) for this feedback. You also automatically start receiving notifications for this feedback whenever you respond to the reporter of the feedback or leave a comment for your team in the **Communications** section within the feedback.
    * {{% icon name="view" %}} – Clicking the button to stop receiving notifications for this feedback.
    * **Copy Link** ({{% icon name="hyperlink" %}}) – Clicking this button copies the URL to the feedback. You can send the URL to other people.
    * **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking the button opens a menu with the following items:
        * **Move** – Clicking this button moves the feedback to any other app of which you are a member. Whenever you move feedback, you will also move all linked feedback. If you only want to move one feedback item, you need to unlink the feedback from the group first.
        * **Create Story** – If your app is connected to [Epics](/developerportal/project-management/epics/) or [Jira](/developerportal/project-management/jira-connector/), clicking this button will convert the feedback to a story on the designated board in Epics or Jira. Once the story is created, clicking this button brings you to the story on the board right away.
        * **Delete** – Clicking this button removes the feedback permanently from **Feedback**. The result is irreversible.
    
* **Last activity** – This shows when the last edit to the feedback was made.

* **Assigned To** – This shows to whom the feedback is assigned. When you assign the feedback to someone, they will get an email notification.

* **Priority** – This shows the priority that the feedback has.

* **Status** – This is the status of the feedback. There are two default statuses: **New** and **Closed**. Whenever feedback arrives in the app, it is set to **New**. When you close feedback, it is set to **Closed** and moved to the **Archived** page. You can also add custom statuses by clicking **Settings** ({{% icon name="cog" %}}) and adding the new statuses in the new dialog box. Custom statuses can only be used for feedback items that are not archived. You can filter your feedback based on the status.

* **Tags** – These are the tags assigned to the feedback. You can select a tag from the drop-down list or create new tags by typing the tag name inside the text box and then clicking **create [the tag name]**. A tag should contain maximum 50 characters. You can assign multiple tags.

    {{< figure src="/attachments/developerportal/app-insights/feedback/tags.png" class="no-border" >}}

    {{% alert color="info" %}}For more information about how to manage tags, see the [Managing Tags](#manage-tags) section.{{% /alert %}}

* **Summary** – This is the summary of the feedback. Only your team members can see this summary.

* **User Feedback** – This shows the original feedback title, feedback description, and screenshot submitted by the reporter.

* **Metadata** – This shows a list of metadata of the feedback.

    * **Active Userrole** – This is the user role the reporter has in your app
    * **Active form**– This is the page from which the reporter sent the feedback
    * **Screen Size** – This is the dimensions of the reporter’s screen in pixels
    * **Browser** – This is the version of the browser the reporter was using
    * **Application location** – This is the URL of the page from which the reporter sent the feedback
    * **Submitter name** – This shows the name of the reporter
    * **Submitter email** – This shows the email of the reporter
    * **Submission date** – This shows the date when the feedback was submitted

* **Linked Feedback** – This shows which feedback items are linked to this feedback.

  You can link a feedback item by selecting it from the drop-down list.

  {{< figure src="/attachments/developerportal/app-insights/feedback/linked-feedback.png" class="no-border" >}}

  Once the feedback is linked, it disappears from the list on the **Inbox** or **Archive** tab. You can only access the linked feedback from its primary feedback to which it is linked. If you change the status of the primary feedback, all the linked feedback will get the same status automatically.

  {{% alert color="info" %}}When you open a linked feedback item, you can click **Make [the linked feedback item] the Primary feedback** to make this feedback the primary feedback of the feedback group instead.{{% /alert %}}

  You can unlink a feedback item by hovering over the feedback and clicking the **Remove** ({{% icon name="remove" %}}) button. Once the feedback is not linked anymore, it appears again in the list on the **Inbox** or **Archive** tab.

* **Attachments** – This contains attachments to this feedback. To upload an attachment, click **Add** ({{% icon name="add" %}}) and select the file. The following formats are supported: .*peg*, *.png*, and *.gif*. Each attachment can be a maximum of 5 MB in size. Once an attachment is uploaded, only your team members can view, download, and delete the attachment.

* **Communication** – This section shows all the comments on this feedback from your team. You can leave comments here and attach attachments to each comment. Comments submitted to this section are only visible to your team members.

### Contact Reporter Tab {#contact-reporter}

The **Contact Reporter** tab allows you to read messages from the reporter and reply to them. Whenever the reporter sends a message, it is shown in this section. Once you reply to a message from the reporter, they receive an email. When multiple feedback items are linked, the system only sends an email to the reporter of this specific feedback item, not other associated feedback items in the same group.

For more information, see the [What Happens to a User After They Submit Feedback](#what-happens-to-user) section.

#### Managing Tags {#manage-tags}

From the [feedback details](#feedback-details) page, you can manage tags by clicking **Settings** ({{% icon name="cog" %}}) next to the **Tags** text box:

  {{< figure src="/attachments/developerportal/app-insights/feedback/tag-management-settings.png" alt="tag management setting" >}}

  To create a new tag, do as follows:

  1. Click **Add Tag**. A text box appears, with a colored circle indicating the color of the new tag.
  2. In the text box, enter the name of the new tag.
  3. If you want to change the color of the new tag, click the colored circle and select a different color.
  4. Click **Save** ({{% icon name="checkmark-circle" %}}) to save the new tag.

  To edit an existing tag, do as follows:

  1. To change the tag name, click the name of the tag. After the name becomes editable. Edit the name in the text box, and then click outside the text box to save the change.
  2. To change the tag color, click the colored circle and select a different color.

  To delete an existing tag, do as follows:

  1. Hover over the row where the tag is listed. A **Delete** button ({{% icon name="trash-can" %}}) appears at the end of the row.
  2. Click **Delete**. The **Confirmation** dialog box opens.
  3. Click **Delete Tag**.

## Receiving Notifications {#notifications}

You can receive a notification when new feedback lands in **Inbox** or when a reporter replies to their feedback. To receive notifications, do as follows:

1. Watch the app on the [Settings](/developerportal/collaborate/general-settings/) page after you open it in [Apps](https://sprintr.home.mendix.com/).
2. Go to Feedback again.
3. Enable the feedback notifications as follows:
    1. In Feedback, click the **Settings** {{% icon name="cog" %}} icon on the upper-right corner of the page.
    2. Turn on the toggle to receive notifications.

### Receiving Notifications for an Individual Feedback Item {#notifications-individual-feedback}

You can also just receive notifications for an individual feedback item. Set this up by clicking the {{% icon name="view-off" %}} icon on the upper-right corner of the [Feedback](#feedback) tab after you open the feedback. You also automatically start receiving notifications for an individual feedback item once you [respond to the reporter](#contact-reporter) of the feedback or leave a comment for your team in the **Communications** section within the feedback.
