---
title: "Planning"
url: /developerportal/project-management/planning/
weight: 20
description: "Describes the **Planning** page in the Project Management section. This page looks different, depending on if you are working in the Scrum workflow or Kanban workflow."
tags: ["Project Management", "Epics", "Sprint", "Planning", "Stories", Developer Portal"]
---
## 1 Introduction

The **Planning** page shows all your stories. At the top of the page, you can find the following items:

* **...** – Clicking the icon opens the option to import stories using an Excel file.
  * For more information, see the [Import Stories](#import-stories) section.
* **Settings icon** – This enables changing settings.
  * For more information, see the [Settings](#settings) section.

* **Create Epic** – This enables creating an epic.
* **Create Story** – This enables creating a story.
* **Edit Sprint** (only available for [Scrum planning](#scrum-planning)) – This enables editing the current Sprint.
* **End Sprint** (only available for [Scrum planning](#scrum-planning)) – This enables ending the current Sprint.
* **Start Sprint** (only available for [Scrum planning](#scrum-planning)) – This enables starting a new Sprint.
* Search box – This enables searching stories based on story title, tags, epic name, assignee (and unassigned stories), and story ID.

The main area of the **Planning** page lists all the stories in different categories. Each row represents a story:

{{< figure src="/attachments/developerportal/project-management/planning/story-kanban.png" >}}

A row shows the following information about a story:

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

## 2 Scrum Planning vs Kanban Planning {#different-plannings}

Depending on your settings of [board type](#board-type): Scrum or Kanban, the **Planning** page looks different.

### 2.1 Scrum Planning {#scrum-planning}

If there is an active Sprint, on the upper-left corner, you can find the name of the Sprint, when it ends, and how many stories and points it has. The area right below shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/project-management/planning/scrum-planning.png" >}}

On the upper-right corner, you can find **End Sprint** and **Edit Sprint**, or **Start Sprint**:

If there is an active Sprint, you can find **End Sprint** and **Edit Sprint**. When you end a Sprint, the system shows you how many stories were completed in that Sprint. All the completed stories are [archived](/developerportal/project-management/archive/) automatically, and you can decide where the unfinished stories should go. 

If there is no active Sprint, you can find **Start Sprint**. Once a Sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. 

In the main area of the page, stories are grouped in these categories: **Active Sprint** (if there is an active Sprint), **Next Sprint**, **Refinement**, and **Backlog**.

### 2.2 Kanban Planning {#kanban-planning}

If you do Kanban planning, the upper-top corner of the page shows the number of stories and the total points. 

{{< figure src="/attachments/developerportal/project-management/planning/kanban-planning.png" >}}

In the main area of the page, stories are grouped in these categories: **To Do**, **Refinement**, and **Backlog**.

## 3 Settings {#settings}

When you click the settings icon on the upper-right side of the screen, a dialog box opens with four tabs: **Manage Tags**, **Board Type**, **Toast Settings**, and **Data Migration**. 

{{< figure src="/attachments/developerportal/project-management/planning/planning-settings.png" >}}

These tabs are described below.

### 3.1 Managing Tags {#manage-tags}

On this tab, you can add, rename, and delete tags, as well as change tag colors. The changes here affect all the tags in your app.

To add a tag, click **+Add Tag**, enter the name,  select a color, and then click the save icon to save it.

To rename a tag, double click the tag name, change the name in the text box, and then click outside the text box to save it.

To delete a tag, hover over the row of the tag, and then click the delete icon that appears at the end of the row.

To change the tag color, click the current color, and then select the new color from the dialog box.

### 3.2 Board Type {#board-type}

On this tab, you can switch between a Scrum workflow and Kanban workflow. The workflow you select determines how the [Board](/developerportal/project-management/board/#different-boards) page and the [Planning](#different-plannings) page look.

### 3.3 Toast Settings

On this tab, you can enable or disable the toast notifications that appear like this:

{{< figure src="/attachments/developerportal/project-management/planning/toast-notification.png" width="500px" >}}

### 3.4 Data Migration {#data-migration}

On this tab, you can migrate all or part of your content from [Stories](/developerportal/collaborate/stories/) to Epics.

{{% alert color="info" %}}Only a Scrum Master can start a migration. Once you have started the migration, Mendix recommends working on Epics from that point forward.{{% /alert %}}

#### 3.4.1 Migration Process

To migrate from Stories to Epics, follow these steps:

1. Go to [Planning](#planning) and click the settings icon on the upper-right side of the screen.

2. Go to the **Data Migration** tab. Be sure to read the information before you click **Start Migration**:

   {{< figure src="/attachments/developerportal/project-management/planning/data-migration-info.png" width="400px" >}}

3. Select the content you want to migrate.

   {{% alert color="warning" %}}Stories will become read-only once ALL sections have been migrated successfully. There is no further synchronization available between Developer Portal and Epics (or vice versa). After the migration is completed, the option to migrate is removed from Epics.{{% /alert %}}

   {{< figure src="/attachments/developerportal/project-management/planning/data-migration-content.png" width="400px" >}}

4. A notification is sent in the Developer Portal's [top bar](/developerportal/#navigation) informing you of the status of the migration. An email is also sent with this information. You can open the [migration report](#migration-report) by clicking the notification or the button provided in the email.

#### 3.4.2 What Is Migrated?

These are the new locations of migrated stories:

| From Stories                    | To Epics                                                     | Additional Information                                    |
| ------------------------------- | ------------------------------------------------------------ | --------------------------------------------------------- |
| **Active Sprint**               | **Active Sprint** on the **Planning** page                   | All stories are migrated to **To Do** swimlane with tags. |
| Rest of the Sprints and backlog | **Refinement** on the **Planning** page                      |                                                           |
| Archived stories                | Archived stories on the [Archive](/developerportal/project-management/archive/) page |                                                           |

These are the new details of migrated stories:

| From Stories     | To Epics                                                     | Example             |
| ---------------- | ------------------------------------------------------------ | ------------------- |
| Sprint **Name**  | Tag with this format: **sprint:Sprint_Name**                 | **Sprint_Sprint 1** |
| Story **Status** | Tag with this format: **status:Status**                      | **status:To-do**    |
| **Assignee**     | Story is assigned unless the assignee is not a member of the app team. |                     |

For example, here is a Sprint with three stories from [Stories](/developerportal/collaborate/stories/):

{{< figure src="/attachments/developerportal/project-management/planning/data-migration-example-stories.png" >}}

Here is the outcome after migration:

{{< figure src="/attachments/developerportal/project-management/planning/data-migration-example-epics.png" >}}

Beside the story details above, the remaining details for your stories are migrated according to their equivalents in the [Project Management](/developerportal/project-management/) section in the Developer Portal.

{{% alert color="warning" %}}In [Stories](/developerportal/collaborate/stories/), files are associated with Comments, not with Stories. In Epics, files can only be associated with Stories, not with Comments. Therefore, files migrated from Stories will lose their Comment context.{{% /alert %}}

#### 3.4.3 Migration Report {#migration-report}

The migration report is available a few seconds after the migration completes (timing depends on the number of stories you have).

Click **View Migration Report**:

{{< figure src="/attachments/developerportal/project-management/planning/migration-report-buttons.png" width="400px" >}}

The migration report then opens:

{{< figure src="/attachments/developerportal/project-management/planning/migration-report.png" width="600px" >}}

The **Migration Configuration** section presents what you have selected to migrate and the status of that migration. 

The **Not Finished** status means that you can use the **Continue Migration** button option (this button is only available if a migration has failed or there is still some stories data left to migrate).

{{% alert color="info" %}}
If you still have content with the **Error** status (for example, in the **Unmigrated Stories** section) after retrying the migration via the **Continue Migration** button, Mendix recommends manually migrating that data from [Stories](/developerportal/collaborate/stories/) to Epics. Furthermore, if a section has been successfully migrated but there is still data that has not been migrated, Mendix recommends manually migrating the data.
{{% /alert %}}

## 3 Selecting, Moving, Archiving, and Deleting Stories 

To select a story, select the checkbox for the story when the mouse pointer is a pointing hand:

 {{< figure src="/attachments/developerportal/project-management/planning/pointing-hand.png" width="30px" >}}

{{% alert color="info" %}}You can also use keyboard shortcuts to select multiple stories. For more information, see the [Keyboard Shortcuts](#keyboard-shortcuts) section.{{% /alert %}}

To open the [story details](/developerportal/project-management/board/#story-details) page, click the row of the story when the mouse pointer is an open hand:

{{< figure src="/attachments/developerportal/project-management/planning/open-hand.png" width="30px" >}}

To move a story, drag the story to a different category. 

To move multiple stories, select these stories, choose the category name where they should go from the drop-down list at the bottom of the page, and then click **Move**.

{{< figure src="/attachments/developerportal/project-management/planning/move-multiple-stories.png" >}}

To [archive](#archive) or delete a story, click the **...** icon at the end of the row, and then select the corresponding option:

{{< figure src="/attachments/developerportal/project-management/planning/archive-delete-story-kanban.png" >}}

To archive or delete multiple stories, select these stories, and then click the corresponding option at the bottom of the page.

#### 3.1 Keyboard Shortcuts {#keyboard-shortcuts}

For Windows, you can use the following keyboard shortcuts to select stories on the **Planning** page:

* <kbd>Ctrl</kbd> + <kbd>A</kbd> – select all stories
* <kbd>Ctrl</kbd> + <kbd>D</kbd> – cancel the selection of all stories
* <kbd>Ctrl</kbd> + click – select multiple stories
* <kbd>Shift</kbd> + click – select a range of stories

For Mac, you can use the following keyboard shortcuts to select stories on the **Planning** page:

* <kbd>Command</kbd> + <kbd>A</kbd> – select all stories
* <kbd>Command</kbd> + <kbd>D</kbd> – cancel the selection of all stories
* <kbd>Command</kbd> + click – select multiple stories
* <kbd>Shift</kbd> + click – select a range of stories

## 4 Importing Stories {#import-stories}

You can import your stories using an Excel file to Epics as follows:

1. At the top of the **Planning** page, click **...** and then click **Import Stories**.

   {{< figure src="/attachments/developerportal/project-management/planning/import-stories.png" >}}

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
