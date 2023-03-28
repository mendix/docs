---
title: "Epics"
url: /developerportal/collaborate/epics/
category: "Collaboration"
weight: 2
description: "Describes how to use Epics for your app development."
tags: ["Epics", "Sprint", "Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

The Epics tool enables your team members to collaborate efficiently during the app development process. It supports the Scrum workflow and Kanban workflow. 

{{% alert color="info" %}}As of the GA release on December 1st, 2022, Epics is the default project management tool for all new apps.{{% /alert %}}

{{% alert color="warning" %}}You can still use [Stories](/developerportal/collaborate/stories/) in addition to Epics. However, Mendix recommends only using one tool at a time in an app, as using both will make data migration more difficult later.{{% /alert %}}

### 1.1 Getting Your Team Access to an App in Epics

Only a Scrum Master can give the team access to an app in Epics. To do so, the Scrum Master must open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), go to the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab on the **General Settings** page, and click **Switch to Epics**:

{{< figure src="/attachments/developerportal/collaborate/epics/project-management.png" width="600px" >}}

This gives everyone in the team access to this app in Epics. To give the team access to another app in Epics, the Scrum Master must repeat this procedure.

### 1.2 Opening an App in Epics

Once you have access to an app in Epics, open it in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps) and then go to the [Stories](/developerportal/collaborate/stories/) page. There is a notification on the top of the page where you can click **Check it Out** to open the app in Epics:

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

After you open the app in Epics, you can easily switch to other apps that you have access to. To do so, click the name of the current app on the upper-left corner, and then select a different app from the drop-down list.

### 1.3 Pages in Epics

Epics has the following pages: **Board**, **Planning**, **Epics**, and **Archive**. Some pages look different if you are working in the Scrum workflow or Kanban workflow. These pages are described in the sections below.

## 2 Board {#board}

If you work in the Scrum workflow, the **Board** page gives an overview of your current Sprint. The top of the page shows the name of the Sprint, when it ends, and how many stories and points it has. Below, the shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

{{% alert color="info" %}}When you commit changes in Studio Pro, you can link your commit to stories of the current Sprint in Epics in the [Commit](/refguide/commit-dialog/) dialog box.{{% /alert %}}

If you work in the Kanban workflow, the **Board** page gives an overview of all the stories that your team is currently working on. The top of the page shows the number of stories and the total points.

{{< figure src="/attachments/developerportal/collaborate/epics/stories-story-points.png" >}}

Click **Project Buzz** on the upper-right corner of the page to go back to the [Buzz](/developerportal/collaborate/buzz/#app-buzz) page of the app. Click **Create Epic** or **Create Story** to create an item. In the search box, you can search stories based on story title, tags, epic name, assignee (and unassigned stories), story title, and story ID.

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

### 2.1 Swimlanes

On the **Board** page, the stories are grouped into different swimlanes based on their status. The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, and **Testing**. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" width="500px" >}}

To rename, [archive](#archive), or delete a swimlane, click the **...** icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

{{% alert color="info" %}}It is not possible to do the following: delete a swimlane when it has stories in it, archive a swimlane when it has no stories, or delete the **To Do** and **Done** default swimlanes.{{% /alert %}}

To move a swimlane, drag it to the new location.

### 2.2 Story Cards

On the **Board** page, each card represents a story:

{{< figure src="/attachments/developerportal/collaborate/epics/story-card.png" >}}

A story card shows the following details:

* ① Unique story ID, which consists of a prefix and a number
* ② Story title
* ③ Epic related to the story
* ④ Tags
* ⑤ Whether the story is for a feature or a bug (if it is about a feature, it shows a green star icon; if it is about a bug, it shows a red bug icon)
* ⑥ Number of comments
* ⑦ Number of tasks
* ⑧ Points of the story
* ⑨ To whom the story is assigned

To [archive](#archive) or delete a story, click the **...** icon on the upper-right corner of the card, and then select the corresponding option:

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

To move a card within a swimlane or across swimlanes, drag the card to the new location.

Click the story card to open the [story details](#story-details) dialog box.

### 2.3 Story Details {#story-details}

When you click the card of a story, the story details dialog box opens.

On the upper-right corner, you can click the link icon to copy the link to the story. Click the  ellipsis (**...**) icon to open a pop-up menu that allows you to clone, [archive](#archive), or delete the story.

{{< figure src="/attachments/developerportal/collaborate/epics/story-details-page-icons.png" >}}

{{% alert color="info" %}}The clone option allows you to start creating a copy of the story. The title is pre-filled as *Copy - [original story title]*, and the other details are pre-filled with values from the original story.{{% /alert %}}

The story details dialog box shows the following items:

* **Description** – the description of the story:

    * Edit the description of the story by clicking **Edit Description** and making changes in the WYSIWYG editor; the editor supports different text formats, including code blocks
    * Link a story in the editor by typing *#*, typing the story title, and selecting the right story from the list
    * Tag a person in the editor by typing *@*, typing the person's name, and selecting the right person from the list; once you save the story, the system will send a notification to the tagged person

* **Assign to** – enables assigning the story to anybody who can access the app in the Developer Portal
* **Status** – enables setting the status to any of the category/swimlane names on the **Board** and **Planning** pages
* **Tasks** – enables adding a task by clicking **+ Add Task**; you can move the tasks by dragging them around
* **Story Type** – enables setting the story type to **Bug** or **Feature**
* **Linked Epic** – enables linking the story to an epic
* **Tags** – enables adding or removing tags; to create a new tag, type the tag in the text box and click **Create new "[tag name]"**
* **Story Points** – enables setting the story points to an integer
* **Attached Files** – enables adding attached files by clicking **+**
* **Comment** – enables typing your comment in the text box and then clicking **Post Your Comments** to save and post the comment

{{% alert color="info" %}}To save any change on the story details dialog box, click **Save Story** at the bottom of the page.{{% /alert %}}

## 3 Planning {#planning}

There are three tabs on the **Planning** page, which are described below.

### 3.1 Board Type

On this tab, you can switch between a Scrum workflow and Kanban workflow by clicking the settings icon on the upper-right side of the screen. The workflow you select determines how the **Planning** page and the [Board](#board) page look.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-scrum-kanban.png" width="500px" >}}

If you select the **Scrum** workflow, the **Planning** page shows the **Active Sprint**, **Next Sprint**, **Refinement**, and **Backlog** categories. The goal for the current Sprint is shown on the top of all categories. When there is no active Sprint, you can start a new Sprint by clicking **Start Sprint** in the upper-right corner. Once a Sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. You can end a Sprint by clicking **End Sprint** on the upper-right corner. When you end a Sprint, the system shows you how many stories were completed in that Sprint. All the completed stories are [archived](#archive) automatically, and you can decide where the unfinished stories should go. 

If you use the **Kanban** workflow, the **Planning** page shows the **To Do**, **Refinement**, and **Backlog** categories.

No matter which workflow you use, you can always create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box, you can search stories based on story title, tags, epic name, assignee (and unassigned stories), status name (only in the Scrum workflow), story title, and story ID.

Each row in a category shows the following information about a story:

* Whether the story is a bug or a feature
* If the story has a feedback item linked to it
* Unique story ID
* Story title
* Linked epic
* Tags
* Number of comments
* Number of the tasks
* Story points
* To whom the story is assigned

{{< figure src="/attachments/developerportal/collaborate/epics/story-kanban.png" >}}

To [archive](#archive) or delete a story, click the **...** icon at the end of the row, and then select the corresponding option:

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story-kanban.png" >}}

To move a story, drag the row to a different category.

Click a row to open the [story details](#story-details) page.

### 3.2 Toast Settings

On this tab, you can enable or disable the toast notifications that appear like this:

{{< figure src="/attachments/developerportal/collaborate/epics/toast-notification.png" width="500px" >}}

### 3.3 Data Migration {#data-migration}

On this tab, you can migrate all or part of your content from [Stories](/developerportal/collaborate/stories/) to Epics.

{{% alert color="info" %}}Only a Scrum Master can start a migration. Once you have started the migration, Mendix recommends working on Epics from that point forward.{{% /alert %}}

#### 3.3.1 Migration Process

To migrate from Stories to Epics, follow these steps:

1. Go to [Planning](#planning) and click the settings icon on the upper-right side of the screen.
2. Go to the **Data Migration** tab. Be sure to read the information before you click **Start Migration**:

    {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-info.png" width="400px" >}}

3. Select the content you want to migrate.

    {{% alert color="warning" %}}Stories will become read-only once ALL sections have been migrated successfully. There is no further synchronization available between Developer Portal and Epics (or vice versa). After the migration is completed, the option to migrate is removed from Epics.{{% /alert %}}
    
    {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-content.png" width="400px" >}}
    
4. A notification is sent in the Developer Portal's [top bar](/developerportal/#navigation) informing you of the status of the migration. An email is also sent with this information. You can open the [migration report](#migration-report) by clicking the notification or the button provided in the email.
   
#### 3.3.2 What Is Migrated?

These are the new locations of migrated stories:

| From Stories | To Epics | Additionnal Information |
| --- | --- | --- |
| **Active Sprint** | **Active Sprint** in [Planning](#planning) | All stories are migrated to **To Do** swimlane with tags. |
| Rest of the Sprints and backlog | **Refinement** in [Planning](#planning) | |
| Archived stories | [Archive](#archive) | 

These are the new details of migrated stories:

| From Stories | To Epics | Example |
| --- | --- | --- |
| Sprint **Name** | Tag with this format: **sprint:Sprint_Name** | **Sprint_Sprint 1** |
| Story **Status** | Tag with this format: **status:Status** | **status:To-do** |
| **Assignee** | Story is assigned unless the assignee is not a member of the app team. | |

For example, here is a Sprint with three stories from [Stories](/developerportal/collaborate/stories/):

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-stories.png" >}}

Here is the outcome after migration:

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-epics.png" >}}

Beside the story details above, the remaining details for your stories are migrated according to their equivalents in [Epics](#epics).

{{% alert color="warning" %}}In [Stories](/developerportal/collaborate/stories/), files are associated with Comments, not with Stories. In Epics, files can only be associated with Stories, not with Comments. Therefore, files migrated from Stories will lose their Comment context.{{% /alert %}}

#### 3.3.3 Migration Report {#migration-report}

The migration report is available a few seconds after the migration completes (timing depends on the number of stories you have).

Click **View Migration Report**:

{{< figure src="/attachments/developerportal/collaborate/epics/migration-report-buttons.png" width="400px" >}}

The migration report then opens:

{{< figure src="/attachments/developerportal/collaborate/epics/migration-report.png" width="600px" >}}

The **Migration Configuration** section presents what you have selected to migrate and the status of that migration. 

The **Not Finished** status means that you can use the **Continue Migration** button option (this button is only available if a migration has failed or there is still some stories data left to migrate).

{{% alert color="info" %}}
If you still have content with the **Error** status (for example, in the **Unmigrated Stories** section) after retrying the migration via the **Continue Migration** button, Mendix recommends manually migrating that data from [Stories](/developerportal/collaborate/stories/) to Epics. Furthermore, if a section has been successfully migrated but there is still data that has not been migrated, Mendix recommends manually migrating the data.
{{% /alert %}}

## 4 Epics {#epics}

### 4.1 Epics Overview 

The **Epics** overview page shows all the epics for your current app. Each row shows the following details about the epic:

* Unique ID, which consists of a prefix and a number
* Title
* Tags
* To whom the epic is assigned
* How many stories are completed for the epic

{{< figure src="/attachments/developerportal/collaborate/epics/epic.png" >}}

You can create an epic by clicking **Create Epic** on the upper-right corner of the page.

### 4.1 Epic Details {#epic-details}

When you click the row of an epic, the epic details dialog box opens. 

On the upper-right corner, there is a link icon and an ellipsis (**...**) icon. Clicking the link icon copies the link to the epic. Clicking the ellipsis icon opens a pop-up menu that allows you to delete the epic.

{{< figure src="/attachments/developerportal/collaborate/epics/epic-details-page-ellipsis.png" >}}

The epic details dialog box shows the following items:

* **Objective** – this is the description of the epic:

    * Edit the objective of the epic by clicking **Edit Objective** and making changes in the WYSIWYG editor; the editor supports different text formats, including code blocks
    * Link a story in the editor by typing *#*, typing the story title, and selecting the right story from the list
    * Tag a person in the editor by typing *@*, typing the person's name, and selecting the right person from the list; once you save the epic, the system will send a notification to the tagged person

* **Assign to** – enables assigning the epic to anybody who can access the app in the Developer Portal
* **Tags** – enables adding or removing tags; to create a new tag, type the tag in the text box and click **Create new "[tag name]"**
* **Attachments** – enables adding attachments by clicking **+**
* **Stories** – all the open stories that are linked to this epic; click **Create** to create a new **Feature** or **Bug** story directly from the epic
* **Archived Stories** – all the archived stories that are linked to this epic
* **Comment** – enables typing your comment in the text box and then clicking **Post Your Comments** to save and post the comment

{{% alert color="info" %}}To save any change on the epic details dialog box, click **Save Epic** at the bottom of the page.{{% /alert %}}

## 5 Archive {#archive}

Every time you complete a Sprint, all the stories that are **Done** are archived automatically. You can also archive a story and a swimlane manually by doing the following:

* Click the **...** icon on the upper-right corner of the story card or the swimlane on the **Board** page and then select **Archive**
* Click the **...** icon at the end of a row on the **Planning** page and then select **Archive**

All the archived stories are shown on the **Archive** page. You can see the following details for an archived story:

* Unique story ID – clicking this shows the story details
* Story title – clicking this shows the story details
* Which Sprint the story belongs to – clicking this shows the [archived Sprint details](#archived-sprint-details)
* Linked epic – clicking this shows the epic details
* Archive date and time – clicking this shows the story details

If a feedback item was linked to your archived story, you will see it with a purple icon:

{{< figure src="/attachments/developerportal/collaborate/epics/archive.png" >}}

You can search stories based on story titles in the search box.

### 5.1 Archived Sprint Details {#archived-sprint-details}

When you click the Sprint icon in a row of an archived story on the **Archived** page, you can see the following details of this Sprint:

* Sprint name
* When the Sprint was archived
* When the Sprint started and ended
* Sprint goal
* Whether the Sprint goal was reached
* Who archived the Sprint (shown under **Archived by**)
* Stories that were completed (shown under **Completed Stories**)
* Stories that were not completed (shown under **Incomplete Stories**)
