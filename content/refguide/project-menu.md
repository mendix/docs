---
title: "Project Menu"
category: "App Modeling"
description: "Describes the Project Menu in Studio Pro."
menu_order: 15
tags: ["Studio Pro", "project menu", "top bar"]
---

## 1 Introduction



| Menu Item                                                    | Description                                                  | Shortcut Key |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------ |
| **Update**                                                   | Updates the local app to the latest revision that was committed to the version control server. |              |
| **Commit**                                                   | Commits all local changes made to the app since the previous commit to the version control server. |              |
| **Show Changes on Disk**                                     | Opens a dialog that shows which files on disk have been changed since the last commit. |              |
| **More Versioning** > **History**                            | Shows the history of committed revisions of the app.         |              |
| **More Versioning** > **Download from Version Control Server** | Downloads an app from the Team Server or another SVN server. This creates a local working copy of the app for development. |              |
| **More Versioning** > **Upload to Version Control Server**   | Uploads a local app to a new or existing Team Server repository, or to another SVN server. This is only possible if the app is not yet version controlled. |              |
| **More Versioning** > **Manage Branch Lines**                | Manages branch lines on the version control server that can be used to develop functionality separately from the main line. |              |
| **More Versioning** > **Merge Changes Here**                 | Merges changes that were committed in another development line to the development line that is currently opened in Studio Pro. |              |
| **More Versioning** > **Reverse Merge Changes**              | Allows locally rolling back changes that were committed to the version control repository. These local changes can then be committed as a new revision. |              |
| **More Versioning** > **Add Snapshot of Data**               | Creates a snapshot of the built-in database and adds that to the version control repository. This is especially useful for adding test data to your app or for demo purposes. |              |
| **Tools** > **Batch update button icons**                    | Opens the **Batch Update Button Icons** dialog box so that you can configure the batch update of many button icons at once. |              |
| **Tools** > **Batch update layouts**                         | Opens the **Batch Update Layouts** dialog box so that you can configure the batch update of the layouts of many pages at once. |              |
| **Tools** > **Batch convert Split panes**                    | Opens the **Batch Convert Split Panes** dialog box so that you can configure the batch update. |              |
| **Tools** > **Update Widgets**                               | Presents the current versions of the widgets you are using in your app project, what the latest versions of the widgets are, and an update option. |              |
| **Tools** > **Check Widgets**                                | Checks that the widgets you have implemented in the app project have been built correctly. |              |
| **Synchronize Project Directory**                            | If necessary, this action creates folders inside the project directory (resources, widgets, theme, etc.). It also reads the widget packages that are currently inside the widgets folders. For example, if you add widgets to the widgets folder, you needs to synchronize the project directory for them to appear in the **Toolbox**. | F4           |
| **Show Project Directory in Explorer**                       | Shows the directory that contains the project file (*.mpr*) and other assets such as resources and Java actions in Windows Explorer. |              |
| **Deploy for Eclipse**                                       | Deploys the project to the deployment directory. The Java stubs are generated so that you can start editing them in Eclipse. This action does not compile the Java actions. Use this if you are writing Java actions and you want to compile and debug them through Eclipse. | F6           |
| **Create Deployment Package**                                | Creates a Mendix Deployment Archive package (*.mda*) that contains all necessary files to run the project. This can be used if you want to deploy your project on a Windows server or on a custom Mendix Cloud. | F7           |
| **Clean Deployment Directory**                               | Cleans the deployment directory.                             |              |
| **Deploy to Licensed Cloud Node**                            | Deploys the latest committed revision of a Team Server project to the associated Mendix Cloud node. | Ctrl + F5    |

## 16 Read More

* 
* [Studio Pro Overview](studio-pro-overview)