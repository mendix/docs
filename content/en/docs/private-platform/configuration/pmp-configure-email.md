---
title: "Configure the Email Settings of the Private Mendix Platform"
linktitle: "Configure the Email Settings"
url: /private-mendix-platform-configuration/email/
description: "Documents the email configuration for the Private Mendix Platform."
weight: 20
tags: ["private mendix platform",  "private platform", "private marketplace", "email configuration"]
---

## 1 Email Settings

Email settings allow you to manage your the SMTP server settings used by Private Mendix Platform. These settings are necessary to ensure that your system can send out email notifications. You can also configure additional settings such as email templates, view your email queue, and manage recurring tasks.

## 2 Templates

In this tab, you can create and manage the templates for any standard notification emails that you want your app to send, such as automated reports, assigned tasks, or others. Templates created here can then be referenced in microflows.

{{< figure src="/attachments/private-platform/pmp-wizard3.png" >}}

## 3 Emails

In this tab, you can view the following details about the emails sent from your system:

* **Queued** - A list of all emails queued to be sent, regardless of delivery status.
* **Sent** - A list of all emails that were successfully sent.
* **Failed** - A list of emails that could not be sent after a maximum number of attempts defined in the Configuration tab.
* **Logs** - Errors and other messages that were logged while attempting to send emails. You can search the list by date, message type and content, or the microflow that triggered the email.

## 4 Configuration

In this tab, you can configure SMTP server settings for your email account.

{{< figure src="/attachments/private-platform/pmp-wizard4.png" >}}

## 5 Administrative Tasks

In this tab, you can trigger various scheduled tasks, such as sending queued emails or cleaning the email queue.