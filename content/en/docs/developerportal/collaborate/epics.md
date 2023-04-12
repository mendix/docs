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

{{% alert color="warning" %}}As of the GA release on December 1st, 2022, Epics is the default project management tool for all new apps. </br>You can still use [Stories](/developerportal/collaborate/stories/) in addition to Epics. However, Mendix recommends only using one tool at a time in an app, as using both will make data migration more difficult later.{{% /alert %}}

### 1.1 Getting Your Team Access to an App in Epics

Only a Scrum Master can give the team access to an app in Epics. To do so, the Scrum Master must open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), go to the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab on the **General Settings** page, and click **Switch to Epics**:

{{< figure src="/attachments/developerportal/collaborate/epics/project-management.png" width="600px" >}}

This gives everyone in the team access to this app in Epics. To give the team access to another app in Epics, the Scrum Master must repeat this procedure.

### 1.2 Opening an App in Epics

Once you have access to an app in Epics, open it in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps) and then go to the [Stories](/developerportal/collaborate/stories/) page. There is a notification at the top of the page where you can click **Check it Out** to open the app in Epics:

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

After you open the app in Epics, you can easily switch to other apps that you have access to. To do so, click the name of the current app on the upper-left corner, and then select a different app from the drop-down list.

### 1.3 Pages in Epics

Epics has the following pages: **Board**, **Planning**, **Epics**, and **Archive**. The **Board** page and **Planning** page look different, depending on if you are working in the Scrum workflow or Kanban workflow. All the pages are described in the sections below.

## 2 Board {#board}

The **Board** page gives an overview of all the stories that your team is currently working on.

On the upper-right corner of the page, you can find the following items:

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

* **Project Buzz**  – directs you to the [Buzz](/developerportal/collaborate/buzz/#app-buzz) page of the app

* **Create Epic** – opens a dialog box where you an create an epic

* **Create Story** – opens a dialog box where you can create a story

* Search box – enables searching stories based on story title, tags, epic name, assignee (and unassigned stories), and story ID.

### 2.1 Scrum Board vs Kanban Board {#different-boards}

Depending on your settings of [board type](#board-type): Scrum or Kanban, the main area of the board looks different.

#### 2.1.1 Scrum Board

If you work with the Scrum board, on the upper-left corner, you can find the name of the Sprint, when it ends, and how many stories and points it has. The area right below shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

The main area gives an overview of your current Sprint. 

{{% alert color="info" %}}When you commit changes in Studio Pro, you can link your commit to stories of the current Sprint in Epics in the [Commit](/refguide/commit-dialog/) dialog box.{{% /alert %}}

You can edit or end the current Sprint on the [Scrum Planning](#scrum-planning) page.

#### 2.1.2 Kanban Board

If you work with the Kanban board, the upper-left corner of the page shows the number of stories and the total points. 

{{< figure src="/attachments/developerportal/collaborate/epics/stories-story-points.png" >}}

The main area gives an overview of all the stories that your team is working on. 

### 2.1 Swimlanes

In the main area of the board, the stories are grouped into different swimlanes based on their status. 

The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, and **Testing**. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Then enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" width="500px" >}}

You can rename, [archive](#archive), or delete a swimlane as follows: click the **...** icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

However, it is not possible to do the following actions:

* Delete a swimlane if it still contains stories
* Archive a swimlane if it contains no stories
* Delete the default swimlanes:  **To Do** and **Done**

You can move a swimlane by dragging it to the new location.

### 2.2 Story Cards

Each card in a swimlane represents a story:

{{< figure src="/attachments/developerportal/collaborate/epics/story-card.png" >}}

A story card shows the following details:

* ① Unique story ID, which consists of a prefix and a number
* ② Story title
* ③ Epic related to the story
* ④ Tags
* ⑤ Whether the story is for a feature or a bug (a green star icon means a feature; a red bug icon means a bug)
* ⑥ Number of comments
* ⑦ Number of tasks
* ⑧ Points of the story
* ⑨ To whom the story is assigned

You can [archive](#archive) or delete a story as follows: click the **...** icon on the upper-right corner of the card, and then select the corresponding option:

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

You can move a card within a swimlane or across swimlanes. To do so, drag the card to the new location.

You can click a story card to view the [story details](#story-details).

### 2.3 Story Details {#story-details}

When you click the card of a story, the story details dialog box opens.

On the upper-right corner, you can click the link icon to copy the link to the story. Click the  ellipsis (**...**) icon to open a pop-up menu that allows you to clone, [archive](#archive), or delete the story.

{{< figure src="/attachments/developerportal/collaborate/epics/story-details-page-icons.png" >}}

The story details dialog box shows the following items:

* **Description** – This is the description of the story:
    * You can edit the description of the story by clicking **Edit Description** and making changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor by typing *#* and the story title, and then selecting the right story from the list.
    * You can type a person in the editor by typing *@*, and the person's name, and then selecting the right person from the list. Once you save the story, the system will send a notification to the tagged person.
    
* **Assign to** – You can assign the story to anybody who can access the app in the Developer Portal.
* **Status** – You can set the status to any of the category/swimlane names on the **Board** and **Planning** pages.
* **Tasks** – All the tasks are listed.
    * You can add a task by clicking **+ Add Task**.

    * You can move a task upwards or downwards by dragging them around.
    
* **Story Type** – You can set the story type to **Bug** or **Feature**.
* **Linked Epic** – You can select an epic from the drop-down list.
* **Tags** – You can add or remove tags.
    * You can create a new tag by typing the tag in the text box and clicking **Create new "[tag name]"**.
    * You can [manage tags](#manage-tags) by clicking the settings icon at the end.

* **Story Points** – You can set the story points to an integer.
* **Attached Files** – You can add attached files by clicking **+**.
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}You need to click **Save Story** at the bottom to save any change.{{% /alert %}}

## 3 Planning {#planning}

The **Planning** page shows all your stories. At the top of the page, you can find the following items:

* **...** – Clicking the icon opens the option to import stories with an Excel file.
  * For more information, see the [Import Stories](#import-stories) section.
* **Settings icon** – This enables changing settings.
  * For more information, see the [Settings](#settings) section.

* **Create Epic** – This enables creating an epic.
* **Create Story** – This enables creating a story.
* **Edit Sprint** (only available for [Scrum planning](#Scrum-planning)) – This enables editing the current Sprint.
* **End Sprint** (only available for [Scrum planning](#Scrum-planning)) – This enables ending the current Sprint.
* **Start Sprint** (only available for [Scrum planning](#Scrum-planning)) – This enables starting a new Sprint.
* Search box – This enables searching stories based on story title, tags, epic name, assignee (and unassigned stories), and story ID.

### 3.1 Scrum Planning vs Kanban Planning {#different-plannings}

Depending on your settings of [board type](#board-type): Scrum or Kanban, the **Planning** page looks different.

#### 3.1.1 Scrum Planning {#scrum-planning}

If there is an active Sprint, on the upper-left corner, you can find the name of the Sprint, when it ends, and how many stories and points it has. The area right below shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/scrum-planning.png" >}}

On the upper-right corner, you can find **End Sprint** and **Edit Sprint**, or **Start Sprint**:

If there is an active Sprint, you can find **End Sprint** and **Edit Sprint**. When you end a Sprint, the system shows you how many stories were completed in that Sprint. All the completed stories are [archived](#archive) automatically, and you can decide where the unfinished stories should go. 

If there is no active Sprint, you can find **Start Sprint**. Once a Sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. 

In the main area of the page, stories are grouped in these categories: **Active Sprint** (if there is an active Sprint), **Next Sprint**, **Refinement**, and **Backlog**.

#### 3.1.2 Kanban Planning {#kanban-planning}

If you do Kanban planning, the upper-top corner of the page shows the number of stories and the total points. 

{{< figure src="/attachments/developerportal/collaborate/epics/kanban-planning.png" >}}

In the main area of the page, stories are grouped in these categories: **To Do**, **Refinement**, and **Backlog**.

### 3.2 Planning Overview

The main area of the **Planning** page lists all the stories in different categories. Each row shows the following information about a story:

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

Clicking a row opens the [story details](#story-details) page.

### 3.3 Import Stories {#import-stories}

You can import your stories using an Excel file to Epics as follows:

1. At the top of the **Planning** page, click **...** and then click **Import Stories**.

   {{< figure src="/attachments/developerportal/collaborate/epics/import-stories.png" >}}

   The **Import Stories From Excel** dialog box opens.

2. Click **Download** to download the Excel file template.

   {{% alert color="warning" %}}To prevent errors, we recommend that you use this Excel file template to import your stories.{{% /alert %}}

3. Open the Excel file. Enter the data for your stories as follows:

   * **Depth** – Enter **+** for a story and **++** for a task. A task should be added right below the story to which it belongs.

   * **Name** – Enter the name of the story. For tasks, leave this column empty.

   * **Epic** – If the story is linked to an epic, enter the epic ID. For tasks, leave this column empty.

     {{% alert color="warning" %}}The Epic ID that you enter in the Excel file should already exist in Epics.{{% /alert %}}

   * **Story Type** – Specify whether the story is a **Feature** or **Bug**. For tasks, leave this column empty.

   * **Story Points** – Enter the story points. For tasks, leave this column empty.

   * **Description** – Enter the description of the story. For tasks, leave this column empty.

   * **Tags** – Enter the tags for the story. Use a comma to separate tags. For tasks, leave this column empty.

     {{% alert color="warning" %}}All the tags that you enter in the Excel file should already exist in Epics.{{% /alert %}}

4. Save the Excel file.

5. Go back to the **Import Stories from Excel** dialog box. 

6. Click **Browse**, navigate to the Excel file, and then select it.

7. Click **Continue**. The dialog box gives a preview of all the stories that will be imported.

8. Click **Continue** to import the stories. A pop-up window shows the import is finished.

You can find all the imported stories in the **Backlog**.

### 3.4 Settings {#settings}

When you click the settings icon on the upper-right side of the screen, a dialog box opens with four tabs: **Manage Tags**, **Board Type**, **Toast Settings**, and **Data Migration**. 

{{< figure src="/attachments/developerportal/collaborate/epics/planning-settings.png" >}}

These tabs are described below.

#### 3.4.1 Manage Tags {#manage-tags}

On this tab, you can add, rename, and delete tags, as well as change tag colors. The changes here affect all the tags in your app.

To add a tag, click **+Add Tag**, enter the name,  select a color, and then click the save icon to save it.

To rename a tag, double click the tag name, change the name in the text box, and then click outside the text box to save it.

To delete a tag, hover over the row of the tag, and then click the delete icon that appears at the end of the row.

To change the tag color, click the current color, and then select the new color from the dialog box.

#### 3.4.2 Board Type {#board-type}

On this tab, you can switch between a Scrum workflow and Kanban workflow. The workflow you select determines how the [Board](#different-boards) page and the [Planning](#different-plannings) page look.

#### 3.4.3 Toast Settings

On this tab, you can enable or disable the toast notifications that appear like this:

{{< figure src="/attachments/developerportal/collaborate/epics/toast-notification.png" width="500px" >}}

#### 3.4.4 Data Migration {#data-migration}

On this tab, you can migrate all or part of your content from [Stories](/developerportal/collaborate/stories/) to Epics.

{{% alert color="info" %}}Only a Scrum Master can start a migration. Once you have started the migration, Mendix recommends working on Epics from that point forward.{{% /alert %}}

##### 3.4.4.1 Migration Process

To migrate from Stories to Epics, follow these steps:

1. Go to [Planning](#planning) and click the settings icon on the upper-right side of the screen.

2. Go to the **Data Migration** tab. Be sure to read the information before you click **Start Migration**:

   {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-info.png" width="400px" >}}

3. Select the content you want to migrate.

   {{% alert color="warning" %}}Stories will become read-only once ALL sections have been migrated successfully. There is no further synchronization available between Developer Portal and Epics (or vice versa). After the migration is completed, the option to migrate is removed from Epics.{{% /alert %}}

   {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-content.png" width="400px" >}}

4. A notification is sent in the Developer Portal's [top bar](/developerportal/#navigation) informing you of the status of the migration. An email is also sent with this information. You can open the [migration report](#migration-report) by clicking the notification or the button provided in the email.

##### 3.4.4.2 What Is Migrated?

These are the new locations of migrated stories:

| From Stories                    | To Epics                                   | Additional Information                                    |
| ------------------------------- | ------------------------------------------ | --------------------------------------------------------- |
| **Active Sprint**               | **Active Sprint** in [Planning](#planning) | All stories are migrated to **To Do** swimlane with tags. |
| Rest of the Sprints and backlog | **Refinement** in [Planning](#planning)    |                                                           |
| Archived stories                | [Archive](#archive)                        |                                                           |

These are the new details of migrated stories:

| From Stories     | To Epics                                                     | Example             |
| ---------------- | ------------------------------------------------------------ | ------------------- |
| Sprint **Name**  | Tag with this format: **sprint:Sprint_Name**                 | **Sprint_Sprint 1** |
| Story **Status** | Tag with this format: **status:Status**                      | **status:To-do**    |
| **Assignee**     | Story is assigned unless the assignee is not a member of the app team. |                     |

For example, here is a Sprint with three stories from [Stories](/developerportal/collaborate/stories/):

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-stories.png" >}}

Here is the outcome after migration:

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-epics.png" >}}

Beside the story details above, the remaining details for your stories are migrated according to their equivalents in [Epics](#epics).

{{% alert color="warning" %}}In [Stories](/developerportal/collaborate/stories/), files are associated with Comments, not with Stories. In Epics, files can only be associated with Stories, not with Comments. Therefore, files migrated from Stories will lose their Comment context.{{% /alert %}}

##### 3.4.4.3 Migration Report {#migration-report}

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

On the upper-right corner of the page, **Create Epic** enables creating an epic.

### 4.1 Epics Overview 

The main area gives an overview of all the epics for your current app. Each row shows the following details about an epic:

* Unique ID, which consists of a prefix and a number
* Title
* Tags
* To whom the epic is assigned
* Progress bar
* How many stories are completed for the epic

{{< figure src="/attachments/developerportal/collaborate/epics/epic.png" >}}

Clicking a row opens the [epic details](#epic-details) dialog box.

### 4.2 Epic Details {#epic-details}

When you click an epic, the epic details dialog box opens. 

On the upper-right corner, there is a link icon and an ellipsis (**...**) icon. Clicking the link icon copies the link to the epic. Clicking the ellipsis icon opens a pop-up menu that allows you to delete the epic.

{{< figure src="/attachments/developerportal/collaborate/epics/epic-details-page-ellipsis.png" >}}

The epic details dialog box shows the following items:

* **Objective** – This is the description of the epic:
    * You can edit the objective of the epic by clicking **Edit Objective** and making changes in the WYSIWYG editor. The editor supports different text formats, including code blocks
    * You can link a story in the editor by typing *#* and the story title, and then selecting the right story from the list.
    * You can type a person in the editor by typing *@* and the person's name, and then selecting the right person from the list. Once you save the epic, the system will send a notification to the tagged person.
    
* **Assign to** – You can assign the epic to anybody who can access the app in the Developer Portal.
* **Tags** – You can add or remove tags.
    * You can create a new tag by typing the tag in the text box and clicking **Create new "[tag name]"**
    * You can [manage tags](#manage-tags) by clicking the settings icon at the end.

* **Attachments** – You can add attachments by clicking **+**.
* **Stories** – This shows the open stories that are linked to this epic.
    * You can click **Create** to create a new **Feature** or **Bug** story directly from the epic. The new story goes to the backlog by default.
    * You can link an existing story by entering the story name or ID in the search bar and then clicking **+**.
    * You can remove a linked story by clicking **x**.

* **Archived Stories** – This shows the archived stories that are linked to this epic.
* **Comment** – You can type a comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}You need to click **Save Epic** at the bottom to save any change.{{% /alert %}}

## 5 Archive {#archive}

Every time you complete a Sprint, all the stories that are **Done** are archived automatically. You can also archive a story and a swimlane manually by doing the following:

* Click the **...** icon on the upper-right corner of the story card or the swimlane on the **Board** page and then select **Archive**
* Click the **...** icon at the end of a row on the **Planning** page and then select **Archive**

All the archived stories are shown on the **Archive** page. You can see the following details for an archived story:

* Unique story ID – Clicking this shows the story details.
* Story title – Clicking this shows the story details.
* Which Sprint the story belongs to – Clicking this shows the [archived Sprint details](#archived-sprint-details).
* Linked epic – Clicking this shows the epic details.
* Archive date and time – Clicking this shows the story details.

If a feedback item was linked to your archived story, you will see it with a purple icon:

{{< figure src="/attachments/developerportal/collaborate/epics/archive.png" >}}

You can search a story in the search box, based on story title, tags, epic name, and story ID.

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
