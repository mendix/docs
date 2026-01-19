---
title: "Commit"
url: /refguide/commit-dialog/
weight: 20
---

## Introduction

The commit dialog is used for committing changes to the Team Server. You can enter a message and, if applicable, select related stories.

## Branch

At the top of the dialog box you will see the branch which you are committing. This will be one of the following:

| Branch Description | Notes |
| --- | --- |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/commit-dialog/commit-main.png" alt="Main line icon" class="no-border" >}} |  you are committing the main line |
| {{< figure src="/attachments/refguide/modeling/menus/version-control-menu/commit-dialog/commit-branch.png" alt="Commit branch icon" class="no-border" >}} |  you are committing the specified branch |

## Message

Enter a message describing the changes you have made. This message may contain multiple lines. If you want to make the commit using the keyboard you can press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.

## Commit Tabs

### Related Stories {#stories}

Tick the boxes next to the stories that are related to your commit. Mendix recommends committing a small number of changes at a time, so there is usually just one related story.

### Changes in Model

If there are changes in the model this tab shows a summary of those changes. For more information on how changes are reported in Studio Pro, see [Changes Pane](/refguide/changes-pane/).

There are several scenarios and options that you can choose when committing. Two of these options are represented in the image below:

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/commit-dialog/commit-options.jpg" alt="Several options when committing" >}}

#### Commit and Push

{{% alert color="info" %}}

**Commit and Push** is the recommended flow to stay in-sync with your team and avoid conflicts.

{{% /alert %}}

Your changes are committed and pushed to the server.

#### Commit Locally

Changes are committed to your local working copy and are not pushed to the sever.

#### Commit and Combine {#combine}

If someone else committed a change since the last time you pulled your branch, you will have to pull and merge their changes before you can push to the server. This process is called **Commit and Combine** in the [Commit](/refguide/commit-dialog/) dialog box. **Commit and Combine** will first create a local commit and then automatically do a pull. After resolving any conflicts, you can push the combined version to the server.

{{< figure src="/attachments/refguide/modeling/menus/version-control-menu/commit-dialog/commit-and-combine.jpg" alt="Commit and combine changes" >}}

{{% alert color="warning" %}}

After you reviewed the changes, you will need to push your changes, as **Commit and Combine** only updates your local copy and does not push your changes to the server. 

{{% /alert %}}

### Changes on Disk

If there are changes on disk this tab shows a summary of those changes. Click **Open containing folder** to open the folder containing the selected file in Windows Explorer.

The tab page is hidden if there are no disk changes. Often, there are model changes but the only change on disk is the app file (*.mpr*) reflecting these model changes. In this case, it is also hidden, because it does not add useful information.

### Synchronizing Commit Content {#sync-commit-content}

There are several components in Studio Pro where files on disk need to be generated for the App to function. For example: theme cache, JavaScript actions, and Java Actions. 

These files are generated based on the Documents in the app. In some cases generation of these files takes a long time. Typically, the time taken is proportional to the app size. These files are included as part of the commit so that the existing version can be used when the app is opened, preventing errors or delays in testing the app locally while new versions of the files are being generated.

To ensure generated content is up to date and generation is complete before committing the changes to the repository, Mendix has introduced an additional step in **Prepare commit process**. This last step of the commit synchronizes the commit content. The **Progress** section shows the current type of synchronization.

If any synchronization fails during this step, you are asked if the commit should continue or be cancelled, along with an explanation of the failures and statuses. Only synchronizations that have failed are shown.
