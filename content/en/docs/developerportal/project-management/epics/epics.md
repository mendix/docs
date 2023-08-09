---
title: "Epics"
url: /developerportal/project-management/epics/epics/
weight: 30
description: "Describes the Epics page in Epics."
tags: ["Project Management", "Epics", "Sprint", "Stories", "Developer Portal"]
---

## 1 Introduction

The **Epics** page gives an overview of all the epics for your current app. Each row represents an epic.

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic.png" >}}

Each row shows the following details about an epic:

* Unique ID, which consists of a prefix and a number
* Title
* Tags
* To whom the epic is assigned
* Progress bar
* How many stories are completed for the epic

Clicking a row opens the [epic details](#epic-details) dialog box.

Clicking the **Create Epics** button on the upper-right corner enables you create a new epic.

## 2 Epic Details {#epic-details}

When you click an epic, the epic details dialog box opens. 

On the upper-right corner, there is a link icon and an ellipsis (**...**) icon. Clicking the link icon copies the link to the epic. Clicking the ellipsis icon opens a pop-up menu that allows you to delete the epic.

{{< figure src="/attachments/developerportal/project-management/epics/epics/epic-details-page-ellipsis.png" >}}

The epic details dialog box shows the following items:

* **Objective** – This is the description of the epic:
    * You can edit the objective of the epic by clicking **Edit Objective** and making changes in the WYSIWYG editor. The editor supports different text formats, including code blocks
    * You can link a story in the editor by typing *#* and the story title, and then selecting the right story from the list.
    * You can type a person in the editor by typing *@* and the person's name, and then selecting the right person from the list. Once you save the epic, the system will send a notification to the tagged person.

* **Assign to** – You can assign the epic to anybody who can access the app in the Developer Portal.
* **Tags** – You can add or remove tags.
    * You can create a new tag by typing the tag in the text box and clicking **Create new "[tag name]"**
    * You can [manage tags](/developerportal/project-management/epics/planning/#manage-tags) by clicking the settings icon at the end.

* **Attachments** – You can add attachments by clicking **+**.
* **Stories** – This shows the open stories that are linked to this epic.
    * You can click **Create** to create a new **Feature** or **Bug** story directly from the epic. The new story goes to the backlog by default.
    * You can link an existing story by entering the story name or ID in the search bar and then clicking **+**.
    * You can remove a linked story by clicking **x**.

* **Archived Stories** – This shows the archived stories that are linked to this epic.
* **Comment** – You can type a comment in the text box and then click **Post Your Comments** to save and post the comment.
    * You can sort the comments by clicking the **Newest** or **Oldest** button.

{{% alert color="info" %}}You can also edit the epic in this epic details dialog box. If you make any change, click **Save Epic** at the bottom to save it.{{% /alert %}}
