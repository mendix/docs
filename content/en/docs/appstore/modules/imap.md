---
title: "IMAP/POP3 Incoming Email"
url: /appstore/modules/imap/
category: "Modules"
description: "Describes the configuration and usage of the IMAP/POP3 Incoming Email module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "imap", "pop3", "incoming email", "encryption", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [IMAP/POP3 Incoming Email](https://marketplace.mendix.com/link/component/1042/) module enables your app to retrieve emails from POP3, POP3S, IMAP, and IMAPS servers. In order for Mendix to act on incoming email, you can implement this module and model all the actions around it.

### 1.1 Typical Usage Scenario

* Retrieve emails and act like an email client, which is the recommended approach when hosting your application in the Mendix Cloud.

### 1.2 Features

* Configuration of multiple accounts
* Supported protocols:
	* POP3 and POP3S
	* IMAP and IMAPS
* Actions to be performed after receiving emails:
	* Delete from server
	* Move to a folder (for example, an archive)
* Subscribe to incoming email
	* Supports the IMAP and IMAPS protocol only
	* A microflow can be configured to execute for new incoming email
* Unsubscribe from incoming email
	* Removes the subscription (if it exists)

## 2 Configuration

The basic setup and reception of emails can be done using the **EmailAccount_Overview** page, which is in the **ExamplePages** folder under **USE_ME**. Link this page in your app to configure the email server.

Provide a value for the `EncryptionKey` constant available in the **USE_ME** folder for email account password encryption. 

### 2.1 Account Settings

The **Account Settings** window includes the following options:

* Select the **Sanitize email to prevent XSS attacks** option to enable the removal of malicious scripts to prevent XSS attacks. This option is unselected by default. To learn more about this option, see [Sanitize untrusted HTML (to prevent XSS)](https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer).
* When **Replicate everything in [Folder Name]** is not checked, the module will fetch the number of emails defined in **Number of emails to retrieve from server** configuration based on the selected **Fetch strategy**.
* When **Replicate everything in [Folder Name]** is checked, then module will fetch all the emails (in order of oldest to newest) from that folder in batch size as mentioned in **Email Batch Size** configuration.
* The **Timeout** field is the connection timeout for sending and receiving email operations. This can be set in the **Email Account** object.

## 3 Usage

Using a Java action in a microflow requires an email account for input. Please make sure you configure the setup first. 

* To invoke receiving emails from an account, call the **RetrieveEmailMessages** action.
* To subscribe to incoming email from an account, call the **SubscribeToIncomingEmail** action.
* To unsubscribe from incoming email from an account, call the **UnsubscribeFormIncomingEmail** action.

{{% alert color="info" %}}
In the **Private** folder, we provide microflows to support what we have built and provide guidance for your own needs. Any changes you make to these will be overwritten if you upgrade to a new version.
{{% /alert %}}