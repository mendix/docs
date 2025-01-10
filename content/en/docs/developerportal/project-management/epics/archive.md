---
title: "Archive Stories"
linktitle: "Archive"
url: /developerportal/project-management/epics/archive/
weight: 40
description: "Describes the Archive page in Epics."
---
## Introduction

Every time you complete a Sprint, all the stories that are **Done** are archived automatically. You can also archive a story and a swimlane manually by doing the following:

* Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) on the upper-right corner of a [story card](/developerportal/project-management/epics/board/#story-card) or the [swimlane](/developerportal/project-management/epics/board/#swimlane) on the **Board** page and then select **Archive**.
* Click **More Options** ({{% icon name="three-dots-menu-horizontal" %}}) at the end of a [row](/developerportal/project-management/epics/planning/) on the **Planning** page and then select **Archive**.

All the archived stories are moved to the **Archived** page.

## Archived Stories

The **Archive** page shows all the archived stories.

 You can see the following details for an archived story:

* Unique story ID – Clicking this shows the story details.
* Story title – Clicking this shows the story details.
* Which Sprint the story belongs to – Clicking this shows the [archived Sprint details](#archived-sprint-details).
* Linked epic – Clicking this shows the epic details.
* Archive date and time – Clicking this shows the story details.

If a feedback item was linked to your archived story, you will see it with a purple icon:

{{< figure src="/attachments/developerportal/project-management/epics/archive/archive.png" class="no-border" >}}

On the top of the page, you can search a story in the search box, based on story title, tags, epic name, and story ID.

You can click **Export to Excel** on the upper-right corner of the page to [export all the archived stories](#export-archived-stories) to an Excel file.

## Archived Sprint Details {#archived-sprint-details}

When you click the Sprint name in a row of an archived story on the **Archived** page, you can see the following details of this Sprint:

* Sprint name
* When the Sprint was archived
* When the Sprint started and ended
* Summary of the Sprint
    * How many stories were completed
    * How many stories were uncompleted
    * Breakdown of completed points
* Sprint goal
* Whether the Sprint goal was reached
* Who archived the Sprint (shown under **Archived by**)
* Stories that were completed (shown under **Completed Stories**)
* Stories that were not completed (shown under **Incomplete Stories**)

## Exporting Archived Stories {#export-archived-stories}

On the upper-right corner of the **Archive** page, you can find the **Export to Excel** button. This allows you to export all the archived stories to an Excel file.

To export archived stories, perform these steps:

1. Click **Export to Excel**. The **Excel Export** dialog box opens.
2. Click **Export to Excel** to download the exported data.
3. Go to the folder where your downloaded files are stored, and open the Excel file. You can see the following columns in the Excel file: 
   * **Depth** – **+** refers to a story, and **++** refers for a task. A task is right below the story to which it belongs.
   * **UUID** – This is a universally unique identifier automatically generated for the story.
   * **Story id** – This is the unique ID of the story in Epics.
   * **Title** – This is the title of the story.
   * **Assigned to** – This shows the person to whom the story was assigned.
   * **Archived by** – This shows the person who archived the story.
   * **Description** – This is the description of the story.
   * **Story type** – This specifies whether the story is a **Feature** or **Bug**. 
   * **Story points** – This shows the story points.
   * **Epic id** – This is the unique ID of the epic to which the story is linked in Epics.
   * **Tags** – This shows the tags for the story.
   * **Archived date** – This shows the date when the Sprint was archived.
   * **Sprint name** – This shows the name of the Sprint to which the story belongs.
   * **Sprint start** – This shows when the Sprint started.
   * **Sprint end** – This shows when the Sprint ended.
