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

Epics enables your team members to collaborate efficiently during the app development process. It supports the Scrum workflow and Kanban workflow. 

{{% alert color="info" %}}As of the GA release on December 1st, 2022, Epics is the default project management tool for all new apps.{{% /alert %}}

{{% alert color="warning" %}}You can still use [Stories](/developerportal/collaborate/stories/) in addition to Epics. However, Mendix recommends only using one tool at a time in an app, as using both will make data migration more difficult later.{{% /alert %}}

### 1.1 Getting Your Team Access to an App in Epics

Only a Scrum Master can give the team access to an app in Epics. To do so, the Scrum Master should open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), then go to the [General Settings](/developerportal/collaborate/general-settings/) page, then go to the [Project Management](/developerportal/collaborate/general-settings/#project-management) tab, and click **Switch to Epics**, as shown in the screenshot below. This gives everyone in the team access to this app in Epics.

{{< figure src="/attachments/developerportal/collaborate/epics/project-management.png" width="600px" >}}

To give the team access to another app in Epics, the Scrum Master needs to repeat this procedure.

### 1.2 Opening an App in Epics

Once you have access to an app in Epics, you can open it there. To do so, open the app in the [Developer Portal](https://sprintr.home.mendix.com/link/myapps), and then go to the [Stories](/developerportal/collaborate/stories/) page. You will see a notification on the top of the page, as shown in the screenshot below. Click **Check it Out** to open the app.

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

After you open an app in Epics, you can easily switch to other apps that you have access to. To do so, click the name of the current app on the upper-left corner, and then select a different app from the drop-down list.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-app.png" >}}

### 1.3 Pages in Epics

Epics has the following pages: **Board**, **Planning**, **Epics**, and **Archive**. Some pages show look different based on whether you work in the Scrum workflow or the Kanban workflow. These pages are described in the sections below.

## 2 Board {#board}

If you work in the Scrum workflow, the **Board** page gives an overview of your current Sprint. At the top of the page, it shows the name of the Sprint, when it ends, how many stories and points it has. Below, it shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

{{% alert color="info" %}}When you commit your changes in Studio Pro, you can link your commit to stories of the current Sprint in Epics in the [Commit](/refguide/commit-dialog/) dialog box in Studio Pro.{{% /alert %}}

If you work in the Kanban workflow, the **Board** page gives an overview of all the stories that your team is currently working on. At the top of the page, it shows the number of stories, and the total points.

{{< figure src="/attachments/developerportal/collaborate/epics/stories-story-points.png" >}}

Clicking **Project Buzz** on the upper-right corner of the page brings you to the [Buzz](/developerportal/collaborate/buzz/#app-buzz) page of the app. You can create an epic or a story by clicking **Create Epic** or **Create Story**. In the search box below, you can search stories based on story titles.

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

### 2.1 Swimlanes

On the **Board** page, the stories are grouped into different swimlanes based on their status. The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, **Testing**, etc. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" width="500px" >}}

To rename, [archive](#archive), or delete a swimlane, click the *...* icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

{{% alert color="info" %}}You cannot delete a swimlane when it has stories in it, or archive a swimlane when it has no stories.<br/>You cannot delete the two default swimlanes: **To Do** and **Done**.{{% /alert %}}

To move a swimlane, drag it to the new location.

### 2.2 Story Cards

On the **Board** page, each card represents a story.

{{< figure src="/attachments/developerportal/collaborate/epics/story-card.png" >}}

A story card shows the following information:

* ① Unique story ID, which consists of a prefix and a number
* ② Story title
* ③ Epic related to the story
* ④ Tags
* ⑤ Whether the story is about a feature or a bug – if it is about a feature, it shows a green star icon; and if it is about a bug, it shows a red bug icon

    {{< figure src="/attachments/developerportal/collaborate/epics/feature-bug.png" >}}

* ⑥ Number of comments
* ⑦ Number of tasks
* ⑧ Points of the story
* ⑨ To whom the story is assigned

To [archive](#archive) or delete a story, click the **...** icon on the upper-right corner of the card, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

To move a card within a swimlane or across swimlanes, drag the card to the new location.

Clicking the story card opens the [story details dialog box](#story-details).

### 2.3 Story Details {#story-details}

When you click the card of a story, the story details dialog box opens.

On the upper-right corner, there is a link icon and an ellipsis (**...**) icon. Clicking the link icon copies the link to the story. Clicking the  ellipsis icon opens a pop-up menu that allows you to clone, [archive](#archive), and delete the story. You need to confirm your action after you click a menu item.

{{< figure src="/attachments/developerportal/collaborate/epics/story-details-page-icons.png" >}}

{{% alert color="info" %}}The clone icon allows you to start creating a copy of the story – the title will be pre-filled as *Copy - [original story title]*, and all the other details will be pre-filled with the values from the original story.{{% /alert %}}

The story details dialog box shows the following items:

* **Description** – This is the description of the story.

    * You can edit the description of the story by clicking **Edit Description** and make changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor. To do so, type #, then start typing the story title, and then select the right story from the list.
    * You can tag a person in the editor. To do so, type *@*, then start typing the person's name, and then select the right person from the list. Once you save the story, the system will send a notification to the tagged person.

* **Assign to** – You can assign the story to anybody who can access the app in the Developer Portal.
* **Status** – You can set the status to any of the category/swimlane names on the **Board** page and the **Planning** page.
* **Tasks** – You can add a task by clicking **+ Add Task**. You can move the tasks by dragging them around.
* **Story Type** – You can set the story type to **Bug** or **Feature**. 
* **Linked Epic** – You can link the story to an epic.
* **Tags** – You can add or remove tags. To create a new tag, type the new tag in the text box and then click **Create new "[tag name]"**.
* **Story Points** – You can set story points to an integer.
* **Attached Files** – You can add attached files by clicking **+** below **Attached Files**. 
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change on the story details dialog box, click **Save Story** at the bottom of the page.{{% /alert %}}

## 3 Planning {#planning}

There are three tabs on the **Planning** page, which are described below.

### 3.1 Board Type

On this tab, you can switch between a Scrum workflow and a Kanban workflow by clicking the settings icon on the upper-right side of the screen. Which workflow you use also decides how the **Planning** page and the [Board](#board) page look.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-scrum-kanban.png" width="400px" >}}

If you select the **Scrum** workflow, the **Planning** page shows the **Active Sprint**, **Next Sprint**, **Refinement**, and **Backlog** categories. The goal for the current Sprint is shown on the top of all categories. When there is no active Sprint, you can start a new Sprint by clicking **Start Sprint** in the upper-right corner. Once a Sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. You can end a Sprint by clicking **End Sprint** on the upper-right corner. When you end a Sprint, the system shows you how many stories were completed in that Sprint. All the completed stories are [archived](#archive) automatically, and you can decide where the unfinished stories should go. 

If you use the **Kanban** workflow, the **Planning** page shows the **To Do**, **Refinement**, and **Backlog** categories.

No matter which workflow you use, you can always create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box, you can search for stories based on the story title.

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

Clicking a row opens the [story details](#story-details) page.

### 3.2 Toast Settings

On this tab, you can enable or disable the toast notifications that appear like this:

{{< figure src="/attachments/developerportal/collaborate/epics/toast-notification.png" width="500px" >}}

### 3.3 Data Migration {#data-migration}

On this tab, you can migrate all or part of your content from [Stories](/developerportal/collaborate/stories/) to Epics.

{{% alert color="info" %}}Only a Scrum Master can start a migration. Once you have started the migration, we recommend working on Epics from that point forward.{{% /alert %}}

#### 3.3.1 Migration Process

To migrate from Stories to Epics, follow these steps:

1. Go to [Planning](#planning) and click the settings icon on the upper-right side of the screen.
2. Go to the **Data Migration** tab. Make sure that you read the information before you click **Start Migration**:

    {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-info.png" width="400px" >}}

3. Select the content you want to migrate.

    {{% alert color="warning" %}}Stories will become read-only once ALL sections have been migrated successfully. There is no further synchronization available between Developer Portal and Epics (or vice versa). After the migration is completed, the option to migrate is removed from Epics.{{% /alert %}}
    
    {{< figure src="/attachments/developerportal/collaborate/epics/data-migration-content.png" width="400px" >}}
    
4. A notification is sent in the Developer Portal's [top bar](/developerportal/#navigation) informing you of the status of the migration. An email is also sent with this information. You can open the [migration report](#migration-report) by clicking the notification or the button provided in the email.
   
#### 3.3.2 What Is Migrated?

These are the new locations of migrated stories:

| From Stories | To Epics | Additionnal Information |
| --- | --- | --- |
| **Active Sprint** | **Active Sprint** in [Planning](#planning) | All the stories are migrated to the **To Do** swimlane with their tags. |
| Rest of the Sprints and backlog | **Refinement** in [Planning](#planning) | |
| Archived stories | [Archive](#archive) | 

These are the new details of migrated stories:

| From Stories | To Epics | Example |
| --- | --- | --- |
| Sprint **Name** | Tag with the format: **sprint:Sprint_Name** | **Sprint_Sprint 1** |
| Story **Status** | Tag with the format: **status:Status** | **status:To-do** |
| **Assignee** | Story is assigned unless the assignee is not a member of the app. | |

For example, here is a Sprint with three stories from [Stories](/developerportal/collaborate/stories/):

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-stories.png" >}}

And here is the outcome after migration:

{{< figure src="/attachments/developerportal/collaborate/epics/data-migration-example-epics.png" >}}

{{% alert color="info" %}}Beside the story details above, the remaining details for your stories are migrated according to their equivalents in [Epics](#epics).{{% /alert %}}

{{% alert color="warning" %}}In [Stories](/developerportal/collaborate/stories/), files are associated with Comments, not with Stories. In Epics, files can only be associated with Stories, not with Comments. Therefore, files migrated from Stories will lose their Comment context.{{% /alert %}}

#### 3.3.3 Migration Report {#migration-report}

The migration report is available a few seconds after the migration completes (depending on the number of stories you have).

Click **View Migration Report** to view the migration report:

{{< figure src="/attachments/developerportal/collaborate/epics/migration-report-buttons.png" >}}

The migration report then opens:

{{< figure src="/attachments/developerportal/collaborate/epics/migration-report.png" width="600px >}}

The **Migration Configuration** section presents what you have selected to migrate and the status of that migration. 

The **Not Finished** status means that you can use the **Continue Migration** button option (this button is only available if a migration has failed or there is still some stories data left to potentially migrate).

{{% alert color="info" %}}
If you still have content with the **Error** status (for example, in the **Unmigrated Stories** section) after retrying the migration via the **Continue Migration** button, Mendix recommends  manually migrating that data from [Stories](/developerportal/collaborate/stories/) to Epics. Furthermore, if a section has been successfully migrated but there is still data that has not been migrated, Mendix recommends manually migrating the data.
{{% /alert %}}

## 4 Epics {#epics}

The **Epics** page shows all the epics for your current app. 

Each row shows the following information about an epic:

* Unique epic ID, which consists of a prefix and a number
* Epic title
* To whom the epic is assigned
* How many stories are completed for that epic

{{< figure src="/attachments/developerportal/collaborate/epics/epic.png" >}}

You can create an epic by clicking **Create Epic** on the upper-right corner of the page.

Clicking a row opens the [epic details](#epic-details) page.

### 4.1 Epic Details {#epic-details}

If you click the row of an epic, the epic details dialog box opens. 

On the upper-right corner, there is a link icon and an ellipsis (**...**) icon. Clicking the link icon copies the link to the epic. Clicking the  ellipsis icon opens a pop-up menu that allows you to delete the epic. You need to confirm your action after you click **Delete**.

{{< figure src="/attachments/developerportal/collaborate/epics/epic-details-page-ellipsis.png" >}}

The epic details dialog box shows the following items:

* **Objective** – This is the description of the epic.

    * You can edit the objective of the epic by clicking **Edit Objective** and make changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor. To do so, type #, then start typing the story title, and then select the right story from the list.
    * You can tag a person in the editor. To do so, type *@*, then start typing the person's name, and then select the right person from the list. Once you save the epic, the system will send a notification to the tagged person.

* **Assign to** – You can assign the epic to anybody who can access the app in the Developer Portal.
* **Tags** – You can add or remove tags. To create a new tag, type the new tag in the text box and then click **Create new "[tag name]"**.
* **Attachments** – You can add attachments by clicking **+** below **Attachments**. 
* **Archived Stories** – This lists all the archived stories that are linked to this epic.
* **Stories** – This lists all the open stories that are linked to this epic.
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change on the epic details dialog box, click **Save Epic** at the bottom of the page.{{% /alert %}}

## 5 Archive {#archive}

Every time you complete a Sprint, all the stories that are **Done** are archived automatically. You can also archive a story and a swimlane manually by doing the following:

* Clicking the **...** icon on the upper-right corner of the story card or the swimlane on the **Board** page, and then selecting **Archive**
* Clicking the **...** icon at the end of a row on the **Planning** page, and then selecting **Archive**

All the archived stories are shown on the **Archive** page. You can see the following information of an archived story:

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
* When this Sprint was archived
* When this Sprint started and ended
* Sprint goal
* Whether the Sprint goal was reached
* Who archived the Sprint, shown under **Archived by**
* Stories that were completed, shown under **Completed Stories**
* Stories that were not completed, shown under **Incomplete Stories**
