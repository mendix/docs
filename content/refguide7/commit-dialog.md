---
title: "Commit Dialog"
parent: "dialogs"
---

## 1 Introduction

The **Commit** dialog box is used for committing changes to the Team Server. You can enter a message and—if applicable—select related stories.

![ ](attachments/commit-dialog/commit-dialog-stories.png)

## 2 Branch

At the top of the dialog box you will see the branch which you are committing. This will be one of the following:

| Branch Description | Notes |
| --- | --- |
| ![](attachments/commit-dialog/commit-main.png) |  you are committing the main line |
| ![](attachments/commit-dialog/commit-branch.png) |  you are committing the specified branch |

## 3 Message

Enter a message describing the changes you have made. This message may contain multiple lines. If you want to confirm the form by keyboard and you are inside the message box you can use <kbd>Ctrl</kbd> + <kbd>Enter</kbd>.

## 4 Commit Tabs

### 4.1 Related Stories {#stories}

Select the check boxes next to the stories that are related to your commit. We recommended small sets of changes and then there is usually just one related story.

### 4.2 Changes in Model

If there are changes in the model this tab page will show a summary of those changes in the form of a grid.

### 4.3 Changes on Disk

If there are changes on disk this tab page will show a summary of those changes in the form of a grid. The tab page will be hidden if there are no disk changes. In the very common case that there are model changes and the only change on disk is the project file (.mpr) it will also be hidden, because it does not add useful information in that case.
