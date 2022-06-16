---
title: "Epics"
url: /developerportal/collaborate/epics/
category: "Collaboration"
weight: 3
description: "Describes how to use Epics for your app development."
tags: ["Epics", "Sprint", "Developer Portal"]
#To update these screenshots, you can log in with credentials detailed in How to Update Screenshots Using Team Apps.
---

## 1 Introduction

Epics is an efficient tool that enables your team to collaborate during the app development process. It allows you to work in the Scrum workflow or Kanban workflow.

{{% alert color="info" %}}To obtain access to Epics, contact your Mendix Customer Success Manager.{{% /alert %}}

To open an app project in Epics, go to the [Developer Portal](https://sprintr.home.mendix.com/link/myapps) and open the app, then go to the [Stories](/developerportal/collaborate/stories/) page. On the top of the **Stories** page, there is a notification as shown in the screenshot below. Click **Check it Out** to open the app project in Epics.

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

{{% todo %}}Check with Jelena the final way to access Epics, and whether **Epics** is added on the menu on the left side of the page.{{% / todo %}}

Once you open an app project in Epics, you can switch to a different app project in Epics. To do so, click the name of the app project on the upper-left corner, and then select a different app project from the drop-down list.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-app.png" >}}

In Epics, you can manage an app project with the following pages: **Board**, **Planning**, **Epics**, and **Archive**.

## 2 Board

If you work in the Scrum workflow, the **Board** page gives an overview of your current sprint. At the top of the page, it shows the name of the sprint, when it ends, how many stories and points it has. Below, it shows the goal for the current sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

If you work in the Kanban workflow, the **Board** page gives an overview of all the stories that your team is currently working on. At the top of the page, it shows the number of stories, and the total points.

{{< figure src="/attachments/developerportal/collaborate/epics/stories-story-points.png" >}}

You can create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box below, you can search stories based on the story title.

{{% todo %}}Check with Jelena if more information can be used for search, for example epics or labels.{{% / todo %}}

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

### 2.1 Swimlanes

The stories on the **Board** page are grouped in different swimlanes. The swimlanes indicate the different statuses of the items. The default two swimlanes are **To Do** and **Done**. You can add more swimlanes, such as **In Progress**, **In Review**, **Testing**, etc. 

To add a new swimlane, hover over the border of the swimlane where the new swimlane should be added, and click the vertical line when it appears. Enter the name of the swimlane and click **✓** to save the changes.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" >}}

To rename, [archive](#archive), or delete a swimlane, click the *...* icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{% alert color="info" %}}You cannot delete the **To Do** and **Done** swimlanes.{{% /alert %}}

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

To move a swimlane, drag it to the new location.

### 2.2 Story Cards

Each card in a swimlane represents a story in the current sprint. 

{{< figure src="/attachments/developerportal/collaborate/epics/story-card.png" >}}

The card shows the following information:

* Unique story ID, which consists of a prefix and a number (①)

* Title of the story (②)

* Epic related to the story (③)

* Tags (④)

* Whether the story is about a feature or a bug – if it is about a feature, there is a green star icon at the bottom of the card; and if it is about a bug, there is a red bug icon at the bottom of the card (⑤)

  {{< figure src="/attachments/developerportal/collaborate/epics/feature-bug.png" >}}

* Number of comments (⑥)

* Number of tasks (⑦)

* Points of the story (⑧)

* To whom the story is assigned (⑨)

To [archive](#archive) or delete a story, click the **...** icon on the upper-right corner of the card, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

To move a card within a swimlane or across swimlane, drag the card to the new location.

You can open the [details of a story](#story-details) by clicking the card of the story.

### 2.3 Story Details Page {#story-details}

If you click the card of a story, the story details page opens and shows the following items:

* **Description** – You can edit the description of the story by clicking **Edit Description** and make changes in the WYSIWYG editor. The editor support different text formats, including code blocks. You can link a story by typing *# and then the story title. You can also tag a person by typing *@* and then the person's name (once you save the story, the system will send a notification to the tagged person).

* **Assign to** – You can change the person to whom the story is assigned. The story can be assigned to anybody who can access the app project in the Developer Portal.
* **Status** – You can set the story to any of the board statuses or any of the planning statuses.
* **Tasks** – You can add a task by clicking **+ Add Task**. You can move the tasks by dragging them around.
* **Story Type** – You can set it to **Bug** or **Feature**. 
* **Linked Epic** – You can link the story to an epic.
* **Tags** – You can add or delete tags. To create a new tag, type the new tag directly in **Tags** and then click **Create new **.
* **Story Points** – You can set story points to an integer.
* **Attached Files** – You can add attached files by clicking **+** below **Attached Files**. 
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change you made on the story details page (except for comment), you must click **Save Story** at the bottom of the page.{{% /alert %}}

## 3 Planning

On the **Planning** page, you can switch the layout between a Scrum workflow and a Kanban workflow by click the settings icon on the upper-right side of the screen.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-scrum-kanban.png" >}}

If you use the Scrum layout, the **Planning** page shows the **Active Sprint**, **Next Sprint**, **Refinement**, **Backlog** lists. The goal for the current sprint is shown on the top of all categories. If there is no active sprint, you can start a new sprint. To do so, click **Start Sprint** on the upper-right corner, fill in **Name**, **Spring Goal**, **Start date**, **End date** for the new sprint, and then click **Start sprint**. Once the sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically. You can end a sprint by clicking **End Sprint** on the upper-right corner. When you end a sprint, the system will tell you how many stories are completed in this sprint, and you can decide where the unfinished stories should go, and all the completed stories will go to [Archive](#archive) automatically.

If you use the Kanban layout, the **Planning** page shows the **To Do**, **Refinement**, **Backlog** lists. 

You can create an epic or a story by clicking **Create Epic** or **Create Story** on the upper-right corner of the page. In the search box below, you can search stories based on the story title.

{{% todo %}}Check with Jelena if more information can be used for search, for example epics or labels.{{% / todo %}}

Each list shows all the stories in that category. In each row, it shows whether the story is a bug or a feature, the unique story ID, the story title, the linked epic, the tags, the number of comments, the number of the tasks, story points, and to whom the story is assigned.

{{< figure src="/attachments/developerportal/collaborate/epics/story-kanban.png" >}}

You can open the [details of a story](#story-details) by clicking the row of the story.

To  [archive](#archive) or delete a story, click the *...* icon at the end of the row, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story-kanban.png" >}}

You can drag an item and move it to a different category.

## 4 Epics

The **Epics** page has a list that shows all the epics for your current app project. At the end of each row, a progress bar indicates how many stories are completed for that epic. You can open the [details of an epic](#epic-details) by clicking the row of the epic.

You can create an epic by clicking **Create Epic** on the upper-right corner of the page.

### 4.1 Epic Details Page {#epic-details}

If you click the row of an epic, the epic details page opens and shows the following items:

* **Objective** – You can edit the description of the story by clicking **Edit Objective** and make changes in the WYSIWYG editor. The editor support different text formats, including code blocks. You can link a story by typing # and then the story title. You can also tag a person by typing *@* and then the person's name (once you save the story, the system will send a notification to the tagged person).

* **Assign to** – You can change the person to whom the epic is assigned. The epic can be assigned to anybody who can access the app project in the Developer Portal.
* **Tags** – You can add or delete tags. To create a new tag, type the new tag directly in **Tags** and then click **Create new **.
* **Attachments** – You can add attachments by clicking **+** below **Attachments**. 
* **Archived Stories** – This lists all the archived stories that are linked to this epic.
* **Stories** – This lists all the open stories that are linked to this epic.
* **Comment** – You can type your comment in the text box and then click **Post Your Comments** to save and post the comment.

{{% alert color="info" %}}To save any change you made on the story details page (except for comment), you must click **Save Story** at the bottom of the page.{{% /alert %}}

## 5 Archive {#archive}

Every time you complete a sprint, all the stories that are **Done** go to **Archive** automatically. You can also archive a story and a swimlane manually by clicking the **...** icon on the upper-right corner of the story card or the swimlane in the **Board** page.

The **Archive** page shows all the archived stories. You can search stories based on the story title in the search box.

{{< figure src="/attachments/developerportal/collaborate/epics/archive.png" >}}

You can see the following information of an archived story:

* Unique story ID – if you click it, you can see the details of the story
* Story title – if you click it, you can see the details of the story.
* Which sprint the story belongs to – if you click it, you can see the details of this sprint
* Linked epic – if you click it, you can see the details of this epic
* Archive date and time – if you click it, you can see the details of the story



