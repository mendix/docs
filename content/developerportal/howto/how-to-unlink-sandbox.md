---
title: "Unlink Your Free App from a Sandbox Environment"
category: "How-To's"
menu_order: 160
description: "This page describes how to unlink a Free App from a Sandbox Environment."
tags: ["App","Sandbox","Developer Portal","Unlink","Delete"]
---

## 1 Introduction

This how-to describes the process of unlinking your Sandbox from your Free App. 
A Sandbox will be only linked to you Free App when you you click **Enable Team Server** in the **Mendix Modeler**. 

**This how-to will teach you how to do the following:**

*   How to unlink (delete) your Sandbox

## 2 Prerequisites

Before starting this how-to, make sure you have completed the following prerequisites:

*   You have a Free App (Mendix version 5.18 and up)
*   Your Free App is linked to a Sandbox. This happens automatically when you deploy your Free App from your **Mendix Modeler**
*   Your Two-Factor Google Authenticator is enabled
*   You are the [Technical Contact](/developerportal/company-app-roles/technical-contact) of the sandbox

## 3 Download a Backup

{{% alert type="warning" %}}

Please note that because you are going to unlink the Sandbox from your Free App, the Sandbox environment will be permanently deleted. This means that all data will be lost from the Sandbox/Free App. To keep your data, you need to download a backup.

{{% /alert %}}

The documentation on how to download a backup can be found [here](how-to-download-a-backup).

## 4 Unlink a Free App From a Sandbox

When you have a Free App running in the Sandbox you will need to unlink the Free App from the Sandbox. Unlinking the Free App from the Sandbox will cause the Sandbox/Free App to be deleted. All data will be lost. Follow these steps to unlink your Free App from a Sandbox:

1.  Go to the **[Developer Portal](http://home.mendix.com)**.
2.  Click **Apps** in the top navigation panel.
3.  Select your **Free App**.
4.  Go to **Environments** in the left navigation panel.
5.  Click **Unlink your app**. Beware that all your data will be lost!
6.  Click **Yes, delete all data and unlink this project** to confirm.
7.  Validate with your [Two-Factor Authentication](../deploy/two-factor-authentication).

The Free App has now been unlinked from the Sandbox environment.

## 5 Related Content

*   [How to Configure Custom Domains](custom-domains)
*   [How to Deploy to the Mendix Cloud](../deploy/mendix-cloud-deploy)
*   [How to Download a Backup](how-to-download-a-backup)
*   [How to Link a Different App to a Cloud Node](how-to-link-a-different-app-to-a-node)
*   [How to Link Your Free App to a Licensed Cloud Node](how-to-link-app-to-node) 
*   [How to Restore a Backup](how-to-restore-a-backup)
*   [How to Upgrade Your Free App to a Licensed App](how-to-upgrade-free-app)
*   [How to Set Up Two-Factor Authentication With Google Authenticator](/howtogeneral/support/how-to-set-up-two-factor-authentication-with-google-authenticator)
