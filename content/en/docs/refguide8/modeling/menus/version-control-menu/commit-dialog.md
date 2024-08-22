---
title: "Commit"
url: /refguide8/commit-dialog/
weight: 20
---

## Introduction

The commit dialog is used for committing changes to the Team Server. You can enter a message and, if applicable, select related stories.

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-dialog-stories.png" alt="Version Control Menu" class="no-border" >}}

## Branch

At the top of the dialog box you will see the branch which you are committing. This will be one of the following:

| Branch Description | Notes |
| --- | --- |
| {{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-main.png" alt="Version Control Menu" class="no-border" >}} |  you are committing the main line |
| {{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-branch.png" alt="Version Control Menu" class="no-border" >}} |  you are committing the specified branch |

## Message

Enter a message describing the changes you have made. This message may contain multiple lines. If you want to make the commit using the keyboard you can press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.

## Commit Tabs

### Related Stories {#stories}

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-dialog-stories.png" alt="Version Control Menu" class="no-border" >}}

Tick the boxes next to the stories that are related to your commit. Mendix recommends committing a small number of changes at a time, so there is usually just one related story.

### Changes in Model

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-dialog-model-changes.png" alt="Version Control Menu" class="no-border" >}}

If there are changes in the model this tab shows a summary of those changes. See [Changes Pane](/refguide8/changes-pane/) for a description of how changes are reported in Studio Pro.

### Changes on Disk

{{< figure src="/attachments/refguide8/modeling/menus/version-control-menu/commit-dialog/commit-dialog-disk-changes.png" alt="Version Control Menu" class="no-border" >}}

If there are changes on disk this page shows a summary of those changes. Click **Open containing folder** to open the folder containing the selected file in Windows Explorer.

The tab page will be hidden if there are no disk changes. Often, there are model changes but the only change on disk is the project file (.mpr) reflecting these model changes. In this case, it will also be hidden, because it does not add useful information.
