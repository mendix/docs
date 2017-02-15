---
title: "How to Unlink Your Sandbox From Your Free App"
space: "General How-To's"
category: "Mendix Support"
#parent: ""
#description: ""
#tags: []
---

## 1 Introduction
This how-to will teach you how to unlink (and delete) a Sandbox environment from a Free App.

**This how-to will teach you how to do the following:**

*   How to unlink and delete your Sandbox environment

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   A project that has been connected to a Sandbox environment
*   A Free App

## 3 Download A Backup

Because you are going to unlink the Free App from the project, the Free App will be deleted. That is why all the data will from the Free App be lost.

Follow the steps in this how to to make a backup of your data: [how-to-download-a-backup](how-to-download-a-backup).

## 3 Unlink Your Project

When you have a project running in the Free App, you will need to unlink the project from the Free App. If you unlink the project from the Free App, the Free App to be deleted. Follow these steps to unlink a project from a Free App:

1.  Go to [home.mendix.com](http://home.mendix.com).
2.  Log in with your Mendix account.
3.  Click **Dev Portal**.
4.  Go to **Projects**.
5.  Select the project with the attached Free App you want to delete.
6.  Go to the **Deploy** tab.
7.  Click **Unlink project**.

    > Beware that all the data will be lost!

8.  Click **Yes, delete all data and unlink this project** to confirm.

    > If required, use your selected two factor authentication method to proceed.


## 5 Related Content
*   [How To Download A Backup](how-to-download-a-backup)
*   [How To Restore A Backup](how-to-restore-a-backup)
*   [How To Connect A Project To A Licensed Cloud Node](how-to-connect-a-project-to-a-licensed-node)
