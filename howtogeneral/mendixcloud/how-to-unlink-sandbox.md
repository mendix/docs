---
title: "How to Unlink Your Free App from a Sandbox Environment"
space: "General How-To's"
category: "Mendix Cloud"
---

This how-to describes the process of unlinking your Sandbox from your Free App. 
A Sandbox will be only linked to you Free App when you you click **Enable Team Server** in the **Mendix Modeler**. 

**After completing this how-to you will know:**

*   How to unlink (delete) your Sandbox

## 1 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   You have a Free App (Mendix version 5.18 and up)
*   Your Free App is linked to a Sandbox. This happens automatically when you deploy your Free App from your **Mendix Modeler**
*   Your Two-Factor Google Authenticator is enabled

## 2 Download a Backup

<div class="alert alert-warning">{% markdown %}

Please note that because you are going to unlink the Sandbox from your Free App, the Sandbox environment will be permanently deleted. This means that all data will be lost from the Sandbox/Free App. To keep your data, you need to create a backup.

{% endmarkdown %}</div>

The documentation on how to download a backup can be found [here](how-to-download-a-backup).

## 3 Unlink a Free App From a Sandbox

When you have a Free App running in the Sandbox you will need to unlink the Free App from the Sandbox. Unlinking the Free App from the Sandbox will cause the Sandbox/Free App to be deleted. All data will be lost. Follow these steps to unlink your Free App from a Sandbox:

1.  Go to the **[Developer Portal](http://home.mendix.com)**.
2.  Click **Apps** in the top navigation panel.
3.  Select your **Free App**.
4.  Go to **Environments** in the left navigation panel.
5.  Click **Unlink your app**. Beware that all your data will be lost!
6.  Click **Yes, delete all data and unlink this project** to confirm.
7.  Validate with your **Google Authenticator**.

The Free App has now been unlinked from the Sandbox environment.

## 4 Related Content
*   [How To Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node) 
*   [How To Download a Backup](how-to-download-a-backup)
*   [How To Restore a Backup](how-to-restore-a-backup)
*   [How to Upgrade Your Free App to a Licensed App](how-to-upgrade-free-app)
*   [How to Set Up Two-Factor Authentication With Google Authenticator](/howtogeneral/support/how-to-set-up-two-factor-authentication-with-google-authenticator)
