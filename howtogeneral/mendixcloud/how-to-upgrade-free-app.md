---
title: "How to Upgrade Your Free App to a Licensed App"
space: "General How-To's"
category: "Mendix Cloud"
---

This how-to describes the process of upgrading your Free App to a Licensed App.

**After completing this how-to you will know:**

*   How to download a backup
*   How to unlink (delete) your Sandbox
*   How to link your App to a Licensed Cloud Node
*   How to restore a backup

## 1 Preparation
Before you can start with this how-to, please make sure you have completed the following prerequisites.

*   You have a Free App (Mendix version 5.18 and up).
*   An available Licensed Cloud Node. To request a licensed cloud node, contact [Mendix Support](www.support.mendix.com)

## 2 Upgrade Steps for a Sandbox Environment

1.  Download a Backup
    If your Free App is linked to a Sandbox environment you will first need to create a backup of your data that is stored in the Sandbox.

    Please note that because you are going to unlink the Sandbox from your Free App, the Sandbox environment will be permanently deleted. This means that all data will be lost from the Sandbox/Free app. To keep your data, you need to create a backup.

    The documentation on how to download a backup can be found [here.](how-to-download-a-backup)

2. Unlink your Free App from Sandbox
    Follow the instructions from **2.1 Method 1** of the documentation [How to Connect your Free App to a Licensed Cloud Node]
    If you have just unlinked your Free App from a Sanbox, you only have to refresh the page and follow the steps 4 and 5 of the documentation.

    The documentation on how to unlink your Free App from a Sandbox can be found [here.](how-to-unlink-your-sandbox)

3. Link Your Free App to Licensed Cloud Node
    If you had an Sandbox linked to your Free App, you had to first create a backup and unlink the Sandbox. After completing that or in case you didn't have a Sandbox, you will have to follow instructions to link your Free App to a Licensed Cloud Node.

    The documentation on how to link your Free App to a Licensed Cloud Node can be found [here.](how-to-link-app-to-node)

4. Restore Backup
    After you have connected your project to a licensed node, you will need to restore a backup from your **Sandbox** environment.

    The documentation on how to download a backup can be found [here.](how-to-restore-a-backup)

## 3 Upgrade Steps for a Free App Without a Sandbox Environment

1. Link Your Free App to Licensed Cloud Node
    If you had an Sandbox linked to your Free App, you had to first create a backup and unlink the Sandbox. After completing that or in case you didn't have a Sandbox, you will have to follow instructions to link your Free App to a Licensed Cloud Node.

    The documentation on how to link your Free App to a Licensed Cloud Node can be found [here.](how-to-link-app-to-node)

## 4 Related Content
*   [How To Link Your Free App to a Licensed Cloud Node] (how-to-link-app-to-node)
*   [How To Download A Backup](how-to-download-a-backup)
*   [How To Restore A Backup](how-to-restore-a-backup)
*   [How To Unlink Your Sandbox](how-to-unlink-your-sandbox)