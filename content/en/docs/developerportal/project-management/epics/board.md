---
title: "Board"
url: /developerportal/project-management/epics/board/
weight: 10
description: "Describes the Board page in Epics. This page looks different, depending on whether you use the Scrum workflow or Kanban workflow. "
---
## Introduction

The **Board** page gives an overview of all the stories that your team is currently working on. The stories are groups in different swimlanes based on their status.

On the upper-right corner of the page, you can find the following items:

* **Create Story** – Clicking this enables you to create a new story.
* **Create Epic** – Clicking this enables you to create a new epic.
  
* Search box – You can search stories based on story title, tags, epic name, assignee (including unassigned stories), and story ID. You can use the search box in combination with the filter.

## Swimlanes {#swimlane}

The two default swimlanes are **To Do** and **Done**. 

You can add more custom swimlanes, such as **In Progress**, **In Review**, and **Testing**. To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Then enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/project-management/epics/board/add-swimlane.png" width="500px" class="no-border" >}}

You can rename, archive, or delete a swimlane as follows: click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the swimlane, and then select the corresponding option.

{{< figure src="/attachments/developerportal/project-management/epics/board/rename-archive-delete-swimlane.png" class="no-border" >}}

However, it is not possible to do the following actions:

* Delete a swimlane if it still contains stories
* Archive a swimlane if it contains no stories
* Delete the default swimlanes:  **To Do** and **Done**

You can move a swimlane by dragging it to the new location.

### Story Cards {#story-card}

Each card in a swimlane represents a story:

{{< figure src="/attachments/developerportal/project-management/epics/board/story-card.png" class="no-border" >}}

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

You can [archive](/developerportal/project-management/epics/archive/) or delete a story as follows: click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of the card, and then select the corresponding option:

{{< figure src="/attachments/developerportal/project-management/epics/board/archive-delete-story.png" class="no-border" >}}

You can move a card within a swimlane or across swimlanes. To do so, drag the card to the new location.

You can click a story card to view the [story details](#story-details).

### Story Details {#story-details}

When you click the card of a story, the story details dialog box opens.

On the upper-right corner, you can click **Copy Link** ({{% icon name="hyperlink" %}}) to copy the link to the story. Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) to open a menu that allows you to clone, archive, or delete the story.

{{< figure src="/attachments/developerportal/project-management/epics/board/story-details-page-icons.png" class="no-border" >}}

The story details dialog box shows the following items:

* **Description** – This is the description of the story:
    * You can edit the description of the story by clicking **Edit Description** and making changes in the WYSIWYG editor. The editor supports different text formats, including code blocks.
    * You can link a story in the editor by typing *#* and the story title, and then selecting the right story from the list.
    * You can type a person in the editor by typing *@*, and the person's name, and then selecting the right person from the list. Once you save the story, the system will send a notification to the tagged person.

* **Created by** – This shows the person who created the story.

* **Assign to** – You can assign the story to anybody who can access the app in [Apps](https://sprintr.home.mendix.com/).

* **Status** – You can set the status to any of the category/swimlane names on the **Board** and **Planning** pages.

* **Tasks** – All the tasks are listed.
    * You can add a task by clicking **+ Add Task**.
    * You can move a task upwards or downwards by dragging them around.
    
* **Story Type** – You can set the story type to **Bug** or **Feature**.

* **Linked Epic** – You can select an epic from the drop-down list.

* **Tags** – You can add or remove tags.
    * You can create a new tag by typing the tag in the text box and clicking **Create new "[tag name]"**.
    * You can [manage tags](/developerportal/project-management/epics/planning/#manage-tags) by clicking **Settings** ({{% icon name="cog" %}}) at the end.
    
* **Story Points** – You can set the story points to an integer.

* **Attached Files** – You can add attached files by clicking **+**.

* **Audit Trail** – This gives information on all the updates related to the story, including who did the update and when:
    * Story assigned to {user name}
    
    * Story assigned to {user name} from {user name}
    
    * Story unassigned from {user name}
    
    * Changed Status to {status}
    
    * Story type changed to {story type}
    
    * Task {task name} added
    
    * Task {task name} completed
    
    * Task {task name} deleted
    
    * Epic {epic name} linked
    
    * Epic {epic name} unlinked
    
    * Tag (or tags) {tag names} added
    
    * Tag (or tags) {tag names} removed
    
    * Story points changed to {story points}
    
    * File attached {file name}
    
    * File removed {file name}
    
    * Story archived
    
    * Comment Deleted
    
    * Comment Edited
    
    {{< figure src="/attachments/developerportal/project-management/epics/board/audit-trail.png" class="no-border" >}}
    
* **Revision** – This shows the revision history of a story. This feature is only available for apps that use Git for version control.

* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.
    * You can sort the comments by clicking the **Newest** or **Oldest** button.

{{% alert color="info" %}}You can also edit the story in this story details dialog box. If you make any change, click **Save Story** at the bottom to save it.{{% /alert %}}

## Scrum Board vs Kanban Board {#different-boards}

The **Board** page offers different features to accommodate two different workflows: Scrum or Kanban. Depending on your choice of board type – Scrum or Kanban, the **Board** page looks a bit different.

{{% alert color="info" %}}You can select your board type on the [Planning](/developerportal/project-management/epics/planning/#board-type) page.{{% /alert %}}

### Scrum Board

If your board style is Scrum, you can find the features below which accommodate your Scrum workflow.

The upper-left corner of the page shows the name of the current Sprint, when the Sprint ends, and how many stories and points it has, as well as the goal of the Sprint.

{{< figure src="/attachments/developerportal/project-management/epics/board/scrum-board.png" class="no-border" >}}

The main area of the page gives an overview of all the stories in your current Sprint. When you commit changes in Studio Pro, you can link your commit to stories of the current Sprint in the [Commit](/refguide/commit-dialog/) dialog box.

{{% alert color="info" %}}To edit or end the current Sprint, you should go to the [Planning](/developerportal/project-management/epics/planning/#scrum-planning) page, click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner, and select the corresponding item.{{% /alert %}}

### Kanban Board

If your board type is Kanban, the upper-left corner of the page shows the number of stories and the total points. 

{{< figure src="/attachments/developerportal/project-management/epics/board/kanban-stories-story-points.png" class="no-border" >}}

The main area gives an overview of all the stories that your team is working on. 
