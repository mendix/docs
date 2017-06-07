---
title: "How to Upgrade Your Free App to a Licensed App"
space: "Developer Portal"
category: "How-To's"
description: "This page describes how to upgrade a Free App to a Licensed App."
tags: ["App","Sandbox","Developer Portal","Upgrade","Node"]
---

## 1 Introduction

This how-to describes the process of upgrading your Free App to a Licensed App.

**After completing this how-to you will know:**

*   How to download a backup
*   How to unlink (delete) your Sandbox
*   How to link your App to a Licensed Cloud Node
*   How to restore a backup

## 2 Prerequisites

Before starting with this how-to, please make sure you have completed the following prerequisites.

*   You have a Free App (Mendix version 5.18 and up)
*   An available Licensed Cloud Node. To request a licensed cloud node, contact your Customer Success Manager (CSM)

## 3 Upgrade Steps for a Sandbox Environment

### 3.1 Download a Backup

If your Free App is linked to a Sandbox environment you will first need to create a backup of your data that is stored in the Sandbox.

<div class="alert alert-warning">{% markdown %}

Please note that because you are going to unlink the Sandbox from your Free App, the Sandbox environment will be permanently deleted. This means that all data will be lost from the Sandbox/Free app. To keep your data, you need to create a backup.

{% endmarkdown %}</div>

The documentation on how to download a backup can be found [here](how-to-download-a-backup).

### 3.2 Unlink your Free App from Sandbox

Follow the instructions from paragraph **2.1 Method 1** of the [How to Connect your Free App to a Licensed Cloud Node](how-to-link-app-to-node) how-to.

<div class="alert alert-info">{% markdown %}

If you have just unlinked your Free App from a Sanbox, you only have to refresh the page and follow the steps 4 and 5 of the documentation about How to Unlink Your Free App from a Sandbox Environment.

{% endmarkdown %}</div>

The documentation on how to unlink your Free App from a Sandbox can be found [here](how-to-unlink-sandbox).

### 3.3 Link Your Free App to Licensed Cloud Node

If you had a Sandbox linked to your Free App, you had to first create a backup and unlink the Sandbox. The next step is linking your Free App to a licensed cloud node.

The documentation on how to link your Free App to a licensed cloud node can be found [here](how-to-link-app-to-node).

### 3.4 Restore Backup

After you have linked your App to a licensed node, you will need to restore a backup from your Sandbox environment.

The documentation on how to restore a backup can be found [here](how-to-restore-a-backup).

## 4 Upgrade Steps for a Free App Without a Sandbox Environment

##$ 4.1 Link Your Free App to Licensed Cloud Node

If you do not have a Sandbox linked to your Free App, you only have to follow instructions to link your Free App to a Licensed Cloud Node.

The documentation on how to link your Free App to a Licensed Cloud Node can be found [here](how-to-link-app-to-node).

## 5 Related Content

*   [How To Configure Custom Domains](custom-domains)
*   [How To Deploy to the Mendix Cloud](deploying-to-the-cloud)
*   [How To Download A Backup](how-to-download-a-backup)
*   [How To Link a Different App to a Cloud Node](how-to-link-a-different-app-to-a-node)
*   [How To Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node)
*   [How To Restore A Backup](how-to-restore-a-backup)
*   [How To Unlink Your Free App from a Sandbox Environment](how-to-unlink-sandbox)
