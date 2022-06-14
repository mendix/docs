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

Epics is an efficient tool that enables your team to collaborate during the app development process. It allows you to work in Scrum or with Kanban.

To obtain the access to Epics, currently you need to contact your Mendix Customer Success Manager.

Once you get the access to Epics, you can open Epics by clicking **Check it Out** from the upper-right corner of the [Stories](/developerportal/collaborate/stories/) page for your app in the Developer Portal.

{{< figure src="/attachments/developerportal/collaborate/epics/epics-check-it-out.png" >}}

{{% todo %}}Check with Jelena the final way to access **Epics**, and whether **Epics**  dded on the menu on the left side of the page.{{% / todo %}}

Once you open the app project in Epics, you can switch to a different app project by clicking the name of the app project on the upper-left corner, and then select a different app project from the drop-down list.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-app.png" >}}

You can manage your app project with the following pages: **Board**, **Planning**, **Epics**, and **Archive**.

## 2 Board

### 2.1.1 Board for Scrum

When you work with Scrum, the **Board** page gives you an overview of all items in the current sprint. 

On the top of page, you can see the name of the sprint, when it ends, how many stories and points it has. Below them, you can see the goal for the current sprint.

{{< figure src="/attachments/developerportal/collaborate/epics/sprint-goal.png" >}}

On the upper-right corner, you can create an epic or a story. In the search box, you can search stories based on the story title.

{{% todo %}}Check with Jelena if more information can be used for search, for example epics or labels.{{% / todo %}}

{{< figure src="/attachments/developerportal/collaborate/epics/create-epic-story-search.png" >}}

Below, the items are categorized in different swimlanes, for example, **To Do**, **In Progress**, **In Review**, **Testing**, and **Done**. The swimlanes indicate the different statuses of the items. 

You can add new swimlanes. To add a new swimlane, hover over the border of an existing swimlane where the new swimlane should be added, and click the vertical line that appears. Enter the **Name of Swimlane** and click **✓** to save the name.

{{< figure src="/attachments/developerportal/collaborate/epics/add-swimlane.png" >}}

You can move a swimlane to a different location. To move a swimlane, drag it to the new location.

You can rename, [archive](#archive), or delete a whole swimlane. To do so, click the *...* icon on the upper-right corner of the swimlane, and then select the corresponding option.

{{% alert color="info" %}}You cannot delete the **To Do** and **Done** swimlanes.{{% /alert %}}

{{< figure src="/attachments/developerportal/collaborate/epics/rename-archive-delete-swimlane.png" >}}

Each card represents a story. On the card, you can see the following information:

* Unique story ID, which consists of a prefix and a number

* Title of the story

* Epic related to the story

* Labels, which can have different colors

* Whether the story is about a bug or a feature – if it is about a bug, there is a red bug icon at the bottom of the card; and if it is about a feature, there is a green star icon at the bottom of the card

  {{< figure src="/attachments/developerportal/collaborate/epics/feature-bug.png" >}}

* Tasks

* Number of comments

* Points of the story

* To whom the story is assigned

You can [archive](#archive) or delete a story. To do so, click the **...** icon on the upper-right corner of the card, and then select the corresponding option.

{{< figure src="/attachments/developerportal/collaborate/epics/archive-delete-story.png" >}}

You can move a card within a swimlane or across swimlane. To do so, drag the card to the new location.

You can open the [details of a story](#story-details) by clicking the card of the story.

#### 2.1.1 Story Details Page {#story-details}

When you click the card of the story, the story details page opens with the following items:

* **Description** – You can edit the description of the story by clicking **Edit Description** and make the changes in the WYSIWYG editor. The editor support different text formats, including code blocks. You can link a story in the description by typing *#*. You can tag a person in the description by typing *@* – once you save the tag, the system will send a notification to the person tagged.

* **Assign to** – You can change the person to whom the story is assigned. The story can be assigned to anybody who can access the project in the Developer Portal.
* **Status** – You can set the story to any of the board statuses or any of the planning statuses.
* **Tasks** – You can add a task by clicking **Add Task**. You can move the tasks by dragging them around.
* **Story Type** – You can also set it to **Bug** or **Feature**. 
* **Linked Epic** – You can link the story to an epic.
* **Tags** – You can add or delete **Tags**. To create a new tag, type the new tag directly in **Tags**.
* **Story Points** – You can set **Story Points** to the story by entering an integer.
* **Attached Files** – You can add **Attached Files** by clicking **+**. 
* **Comment** – You can leave a **Comment** by typing your comment in the text box. The comment is directly saved and posted after you click **Post Your Comments**. 

{{% alert color="info" %}}To save any change you made on the story details page (except for comment), you must click **Save Story** at the bottom of the page,.{{% /alert %}}

## 3 Planning

On the **Planning** page, you can switch the layout between a Scrum layout and a Kanban layout by click the settings icon on the upper-right side of the screen.

{{< figure src="/attachments/developerportal/collaborate/epics/switch-scrum-kanban.png" >}}

### 3.1 Scrum Layout

If you use the Scrum layout, you can see the **Active Sprint**, **Next Sprint**, **Refinement**, **Backlog** categories.

To start a new sprint, click Start Sprint on the upper-right corner, fill in **Name**, **Spring Goal**, **Start date**, **End date** for the new sprint, and then click **Start sprint**. Once the sprint is created, all the items in the **Next Sprint** are moved to the **Active Sprint** automatically.

You can end a sprint by clicking **End Sprint** on the upper-right corner. After you confirm the end of the sprint, the system will tell you how many stories are completed in your sprint.

The goal for the current sprint is shown on the top of all categories.

You can drag an item and move it to a different category.

### 3.2 Kanban Layout

If you use the Kanban layout, you can see the **To Do**, **Refinement**, **Backlog** categories. 

## 4 Epics

The **Epics** page shows an overview of all the epics, with a progress bar indicating how many stories are completed for each epic. You can open the [details of an epic](#epic-details) by clicking the card of the epic.

### 4.1 Epic Details Page

An epic details page has similar info as a [story details page](#story-details), but an epic details page also shows the status of all the stories that are linked to this epic.

## 5 Archive

Every time you complete a sprint, all the stories that are **Done** go to **Archive** automatically. You can also archive a story and a whole swimlane manually by clicking the **...** icon on the upper-right corner of the story card or the swimlane in the **Board** page.

You can see which sprint an archived story belongs to. If you click the sprint, you can see details of this sprint in the page that opens on the right side of the screen, such as start date, end date, sprint goal, completed stories, and incomplete stories.

{{% todo %}}Screenshot{{% /todo %}}



