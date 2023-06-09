---
title: "Board"
url: /developerportal/project-management/board/
weight: 10
description: "Describes the **Board** page in the Project Management section. This page looks different, depending on if you are working in the Scrum workflow or Kanban workflow. "
tags: ["Project Management", "Epics", "Sprint", "Board", "Stories", "Developer Portal"]
---
## 1 Introduction

The **Board** page gives an overview of all the stories that your team is currently working on.

On the upper-right corner of the page, you can find the following items:

{{< figure src="/attachments/developerportal/project-management/board/create-epic-story-search.png" >}}

* **Project Buzz**  – directs you to the [Buzz](/developerportal/collaborate/buzz/#app-buzz) page of the app

* **Create Epic** – opens a dialog box where you an create an epic

* **Create Story** – opens a dialog box where you can create a story

* Search box – enables searching stories based on story title, tags, epic name, assignee (and unassigned stories), and story ID.

## 2 Scrum Board vs Kanban Board {#different-boards}

Depending on your settings of board type: Scrum or Kanban, the main area of the board looks different.

### 2.1 Scrum Board

If you work with the Scrum board, on the upper-left corner, you can find the name of the Sprint, when it ends, and how many stories and points it has. The area right below shows the goal of the current Sprint.

{{< figure src="/attachments/developerportal/project-management/board/sprint-goal.png" >}}

The main area gives an overview of your current Sprint. 

{{% alert color="info" %}}When you commit changes in Studio Pro, you can link your commit to stories of the current Sprint in Epics in the [Commit](/refguide/commit-dialog/) dialog box.{{% /alert %}}

You can edit or end the current Sprint on the [Scrum Planning](/developerportal/project-management/planning/#scrum-planning) page.

### 2.2 Kanban Board

If you work with the Kanban board, the upper-left corner of the page shows the number of stories and the total points. 

{{< figure src="/attachments/developerportal/project-management/board/stories-story-points.png" >}}

The main area gives an overview of all the stories that your team is working on. 

## 3 Swimlanes

In the main area of the board, the stories are grouped into different swimlanes based on their status. 

The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, and **Testing**. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Then enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/project-management/board/add-swimlane.png" width="500px" >}}

You can rename, [archive](/developerportal/project-management/archive), or delete a swimlane as follows: click the **...** icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/project-management/board/rename-archive-delete-swimlane.png" >}}

However, it is not possible to do the following actions:

* Delete a swimlane if it still contains stories
* Archive a swimlane if it contains no stories
* Delete the default swimlanes:  **To Do** and **Done**

You can move a swimlane by dragging it to the new location.

### 3.1 Story Cards

Each card in a swimlane represents a story:

{{< figure src="/attachments/developerportal/project-management/board/story-card.png" >}}

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

You can [archive](/developerportal/project-management/archive) or delete a story as follows: click the **...** icon on the upper-right corner of the card, and then select the corresponding option:

{{< figure src="/attachments/developerportal/project-management/board/archive-delete-story.png" >}}

You can move a card within a swimlane or across swimlanes. To do so, drag the card to the new location.

You can click a story card to view the [story details](#story-details).

### 3.2 Story Details {#story-details}

When you click the card of a story, the story details dialog box opens.

On the upper-right corner, you can click the link icon to copy the link to the story. Click the  ellipsis (**...**) icon to open a pop-up menu that allows you to clone, [archive](/developerportal/project-management/archive), or delete the story.

{{< figure src="/attachments/developerportal/project-management/board/story-details-page-icons.png" >}}

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
  * You can [manage tags](/developerportal/project-management/planning/#manage-tags) by clicking the settings icon at the end.

* **Story Points** – You can set the story points to an integer.
* **Attached Files** – You can add attached files by clicking **+**.
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}You need to click **Save Story** at the bottom to save any change.{{% /alert %}}