---
title: "Planning"
url: /developerportal/project-management/epics/planning/
weight: 20
description: "Describes the Planning page in Epics. This page looks different, depending on whether you use the Scrum workflow or Kanban workflow."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---
## Introduction

The **Planning** page shows all your stories.

The main area of the **Planning** page lists all the stories in different categories. Each row represents a story:

{{< figure src="/attachments/developerportal/project-management/epics/planning/story-kanban.png" class="no-border" >}}

Each row shows the following information about a story:

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

On the upper-left corner of the page, you can use the search box to search stories based on story title, tags, epic name, assignee (including unassigned stories), story type (type *bug* or *feature*) and story ID. You can use the search box in combination with the filter.

On the upper-right corner of the page, you can see two buttons:

* **Create Story** – Clicking this enables you to create a new story.
* **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) – Clicking this shows the following options:
    * **Create Epic** – This enable you to create an epic.
    * **Edit Sprint** (only available for [a Scrum workflow](#scrum-planning)) – This enables you to edit the current Sprint.
    * **End Sprint** (only available for [a Scrum workflow](#scrum-planning)) – This enables you to the current Sprint.
    * **Start Sprint** (only available for [a Scrum workflow](#scrum-planning)) – This enables you to start a new Sprint.
    * **Import Stories** – Clicking this enables you to import stories from an Excel file.
        * For more information, see the [Import Stories](#import-stories) section.
    * **Board Settings** – Clicking this enables you configure the board settings.
        * For more information, see the [Board Settings](#settings) section.

### Selecting, Moving, Archiving, and Deleting Stories 

To select a story, select the checkbox for the story when the mouse pointer becomes a pointing hand:

 {{< figure src="/attachments/developerportal/project-management/epics/planning/pointing-hand.png" width="30px" class="no-border" >}}

{{% alert color="info" %}}You can also use keyboard shortcuts to select multiple stories. For more information, see the [Keyboard Shortcuts](#keyboard-shortcuts) section.{{% /alert %}}

To open the [story details](/developerportal/project-management/epics/board/#story-details) page, click the row of the story when the mouse pointer becomes an open hand:

{{< figure src="/attachments/developerportal/project-management/epics/planning/open-hand.png" width="30px" class="no-border" >}}

To move a story, drag the story to a different category. 

To move multiple stories, select these stories, choose the category name where they should go from the drop-down list at the bottom of the page, and then click **Move**.

{{< figure src="/attachments/developerportal/project-management/epics/planning/move-multiple-stories.png" class="no-border" >}}

To [archive](/developerportal/project-management/epics/archive/) or delete a story, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) at the end of the row, and then select the corresponding option:

{{< figure src="/attachments/developerportal/project-management/epics/planning/archive-delete-story-kanban.png" class="no-border" >}}

To archive or delete multiple stories, select these stories, and then click the corresponding option at the bottom of the page.

#### Keyboard Shortcuts For Selecting Stories{#keyboard-shortcuts}

For Windows, you can use the following keyboard shortcuts to select stories on the **Planning** page:

| Action                              | Windows                        | Mac                               |
| ----------------------------------- | ------------------------------ | --------------------------------- |
| Select all stories                  | <kbd>Ctrl</kbd> + <kbd>A</kbd> | <kbd>Ctrl</kbd> + <kbd>A</kbd>    |
| Cancel the selection of all stories | <kbd>Ctrl</kbd> + <kbd>D</kbd> | <kbd>Command</kbd> + <kbd>D</kbd> |
| Select multiple stories             | <kbd>Ctrl</kbd> + click        | <kbd>Command</kbd> + click        |
| Select a range of stories           | <kbd>Shift</kbd> + click       | <kbd>Shift</kbd> + click          |

## Scrum Planning vs Kanban Planning {#different-plannings}

The **Planning** page offers different features to accommodate two different workflows: Scrum or Kanban. Depending on your choice of board type – Scrum or Kanban, the **Board** page looks a bit different.

{{% alert color="info" %}}You can select your board type on the [Planning](/developerportal/project-management/epics/planning/#board-type) page.{{% /alert %}}

### Scrum Planning {#scrum-planning}

If your board style is Scrum, you can find the features below which accommodate your Scrum workflow.

If there is an active Sprint, on the upper-left corner, you can find the name of the Sprint, when it ends, and how many stories and points it has. If you hover over the goal icon, you can see the goal of the Sprint:

{{< figure src="/attachments/developerportal/project-management/epics/planning/scrum-planning.png" class="no-border" >}}

In the main area of the page, stories are grouped in these categories: **Active Sprint** (if there is an active Sprint), **Next Sprint**, **Refinement**, and **Backlog**.

On the upper-right corner, you can find these Scrum items if you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}):

* **Start Sprint** – Clicking this allows you to start a new Sprint. Once a Sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. 
    * This is available only when there is no Sprint running at this moment.
* **Edit Sprint** – Clicking this allows you to edit the current Sprint. When you end a Sprint, the system shows you how many stories were completed in that Sprint. All the completed stories are archived automatically, and you can decide where the unfinished stories should go.
    * This is available only when this is a Sprint running at this moment.
* **End Sprint** – Clicking this allows you to end the current Sprint. 
    * This is available only when this is a Sprint running at this moment.

### Kanban Planning {#kanban-planning}

If your board type is Kanban, the stories are grouped in these categories: **To Do**, **Refinement**, and **Backlog**. On the top of each category, you can see the total number of stories and points.

{{< figure src="/attachments/developerportal/project-management/epics/planning/kanban-planning.png" class="no-border" >}}

## Importing Stories {#import-stories}

You can import your stories using an Excel file to Epics as follows:

1. On the upper-right corner of the **Planning** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and then click **Import Stories**.

   {{< figure src="/attachments/developerportal/project-management/epics/planning/import-stories.png" class="no-border" >}}

   The **Import Stories From Excel** dialog box opens.

2. Click **Download** to download the Excel file template.

   {{% alert color="warning" %}}To prevent errors, Mendix recommends using this Excel file template to import your stories.{{% /alert %}}

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

## Exporting Stories {#export-stories}

You can export your stories on the **Planning** page to an Excel file as follows:

1. On the upper-right corner of the **Planning** page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) and then click **Export Stories**.

   {{< figure src="/attachments/developerportal/project-management/epics/planning/export-stories.png" class="no-border" >}}
2. Select from where you want to export stories.
3. Click **Continue** to see a preview of the Excel file.
4. Click **Export to Excel**.

## Board Settings {#settings}

When you click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the **Planning** page, and select **Board Settings**, a dialog box opens with four tabs: **Manage Tags**, **Board Type**, and **Toast Settings**. These tabs are described in the sections below.

{{< figure src="/attachments/developerportal/project-management/epics/planning/board-settings.png" class="no-border" >}}

### Managing Tags {#manage-tags}

On this tab, you can add, rename, and delete tags, as well as change tag colors. The changes here affect all the tags in your app.

To add a tag, click **+Add Tag**, enter the name, select a color, and then click **Save** {{% icon name="checkmark-circle" %}} to save it.

To rename a tag, double-click the tag name, change the name in the text box, and then click outside the text box to save it.

To delete a tag, hover over the row of the tag, and then click the **Cancel** button ({{% icon name="remove" %}}) that appears at the end of the row.

To change the tag color, click the current color, and then select the new color from the dialog box.

### Board Type {#board-type}

On this tab, you can switch between a Scrum workflow and Kanban workflow. The workflow you select determines how the [Board](/developerportal/project-management/epics/board/#different-boards) page and the [Planning](#different-plannings) page look.

### Toast Settings

On this tab, you can enable or disable the toast notifications that appear like this:

{{< figure src="/attachments/developerportal/project-management/epics/planning/toast-notification.png" width="500px" class="no-border" >}}
