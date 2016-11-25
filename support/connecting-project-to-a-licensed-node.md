---
title: "How to unlink (delete) your sandbox and connect the project to a licensed node."
space: "Mendix Support"
category: "Mendix Support"
---

This how-to describes how to unlink (delete) your sandbox and connect the project to a licensed node.

**After completing this how-to you will know:**

*   How to unlink (delete) your sandbox.
*   How to connect a project to a licensed node.

## 1. Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   A project that has been connected to a sandbox/free app.
*   Sandbox/free app (Each team server project has a sandbox/ free app attached (Mendix version 5.18 and up).
*   Have a licensed node available.

## 2\. Downloading a backup

Because we are going to unlink the sandbox/free app from the project, the sandbox/free app will be deleted. That is why all data will be lost from the sandbox/free app or licensed node. To keep your data a backup needs to be created.

The documentation on how to download a backup can be found [here.](how-to-download-a-backup)

## 3\. Unlinking project from sandbox and connecting to a licensed node

When you have a project running in the sandbox/free app you will need to unlink the project from the sandbox/free app. Unlinking the project from the sandbox/free app will cause the sandbox/free app to be deleted.

1.  Go to ‘[home.mendix.com](http://home.mendix.com)’.
2.  Click on ‘Dev Portal’.
    ![](attachments/20643887/21168152.png)
3.  Go to the projects tab.
4.  Then select the project with the attached sandbox that has to be deleted.
    ![](attachments/20643887/21168167.png)

5.  On the project overview go to the deploy tab.
    ![](attachments/20643887/21168168.png)

6.  Click on the ‘unlink project’ button.
    ![](attachments/20643887/21168169.png)

7.  Beware, all data will be lost. Click 'Yes, delete all data and unlink this project' to confirm.
    ![](attachments/20643887/21168170.png)
8.  Refresh the page.
9.  The button ‘select node’ should be available now. Click on 'select node' to connect a licensed node to the project.
    ![](attachments/20643887/21168171.png)

10.  Select the node that you want to connect to your project to by pressing on ‘use this node’.
    ![](attachments/20643887/21168172.png)

11.  Click on continue to confirm that the project will be connected to the node.

The project has now been connected to the node. Refresh page to see the project connected to the node.

## 4\. Restoring backup

After you have connected your project to a licensed node, you will need to restore a backup.

The documentation on how to download a backup can be found [here.](how-to-restore-a-backup)
