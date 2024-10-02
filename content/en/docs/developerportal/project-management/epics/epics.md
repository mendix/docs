---
title: "Epics Overview"
linktitle: "Epics"
url: /developerportal/project-management/epics/epics/
weight: 30
description: "Describes the Epics page in Epics."
---

## Introduction

The **Epics** page gives an overview of all the epics for your current app. You can use the filter on the upper-right corner to filter epics by their status: **All**, **Completed**, **In Progress**, or **Not Started**. Clicking the **Create Epics** button enables you create a new epic.

Each row represents an epic. 

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic.png" class="no-border" >}}

Each row shows the following details about an epic:

* Unique ID, which consists of a prefix and a number
* Title
* Tags
* To whom the epic is assigned
* Progress bar
* How many stories are completed for the epic

Clicking a row opens the [epic details](#epic-details) dialog box.

## Epic Details {#epic-details}

When you click an epic, the epic details dialog box opens. 

On the upper-right corner, there is a **Copy Link** icon ({{% icon name="hyperlink" %}}) and a **More Options** icon ({{% icon name="three-dots-menu-horizontal" %}}). Clicking **Copy Link** copies the link to the epic. Clicking **More Options** opens a pop-up menu that allows you to delete the epic.

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic-details-page-ellipsis.png" class="no-border" >}}

The epic details dialog box shows the following items:

* **Objective** – This is the description of the epic:
    * You can edit the objective of the epic by clicking **Edit Objective** and making changes in the WYSIWYG editor. The editor supports different text formats, including code blocks
    * You can link a story in the editor by typing *#* and the story title, and then selecting the right story from the list.
    * You can type a person in the editor by typing *@* and the person's name, and then selecting the right person from the list. Once you save the epic, the system will send a notification to the tagged person.

* **Assign to** – You can assign the epic to anybody who can access the app in [Apps](https://sprintr.home.mendix.com/).
* **Tags** – You can add or remove tags.
    * You can create a new tag by typing the tag in the text box and clicking **Create new "[tag name]"**
    * You can [manage tags](/developerportal/project-management/epics/planning/#manage-tags) by clicking **Manage Tags** ({{% icon name="cog" %}}) at the end.

* **Attachments** – You can add attachments by clicking **Add File** ({{% icon name="add" %}}).
* **Stories** – This shows the open stories that are linked to this epic.
    * You can click **Create** to create a new **Feature** or **Bug** story directly from the epic. The new story goes to the backlog by default.
    * You can link an existing story by entering the story name or ID in the search bar and then clicking **Link Story** ({{% icon name="add" %}}).
    * You can remove a linked story by clicking **Remove Story** ({{% icon name="remove" %}}).

* **Archived Stories** – This shows the archived stories that are linked to this epic.
* **Comment** – You can type a comment in the text box and then click **Post Your Comments** to save and post the comment.
    * You can sort the comments by clicking the **Newest** or **Oldest** button.

{{% alert color="info" %}}You can also edit the epic in this epic details dialog box. If you make any change, click **Save Epic** at the bottom to save it.{{% /alert %}}
