---
title: "How to Unlink Your Free App from a Sandbox Environment"
space: "General How-To's"
category: "Mendix Cloud"
---

This how-to describes the process of unlinking your Sandbox from your Free App. 
A **Sandbox** will be only linked to you **Free App** when you you click on **Enable Teamserver** in the **Mendix Modeler**. 

**After completing this how-to you will know:**

*   How to unlink (delete) your sandbox.

## 1 Preparation

Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   You have a Free App (Mendix version 5.18 and up).
*   Your Free App is linked to a Sandbox. This happens automatically when you deploy your Free App from your Mendix Modeler. 
*   Your Two Factor Google Authenticator is enabled

## 2 Downloading a Backup

Please note that because you are going to unlink the Sandbox from your Free App, the Sandbox environment will be permanently deleted. This means that all data will be lost from the Sandbox/Free app. To keep your data, you need to create a backup.

The documentation on how to download a backup can be found [here](how-to-download-a-backup).

## 3 Unlinking Free App from Sandbox

When you have a Free App running in the sandbox you will need to unlink the Free App from the sandbox. Unlinking the Free App from the sandbox will cause the sandbox/free app to be deleted. All data will be lost. 

1.  Go to the ‘[Developer Portal](http://home.mendix.com)’
2.  Click on **Apps** in the top navigation panel
3.  Select your Free App
4.  Go to **Environments** in the left navigation panel
5.  Click on **unlink your app**
6.  Beware, all data will be lost. Click **'Yes, delete all data and unlink this project'** to confirm.
7.  Validate with your Google Authenticator.

The Free App has now been unlinked from the Sandbox environment.

## 4 Related Content
*   [How To Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node) 
*   [How To Download A Backup](how-to-download-a-backup)
*   [How To Restore A Backup](how-to-restore-a-backup)
*   [How to Upgrade your Free App to a Licensed App](how-to-upgrade-free-app)
