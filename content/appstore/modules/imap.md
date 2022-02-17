---
title: "IMAP/POP3 Incoming Email"
category: "Modules"
description: "Describes the configuration and usage of the IMAP/POP3 Incoming Email module, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "imap", "pop3", "incoming email", "encryption", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [IMAP/POP3 Incoming Email](https://marketplace.mendix.com/link/component/1042/) module enables your app to retrieve emails from POP3, POP3S, IMAP, and IMAPS servers. In order for Mendix to act on incoming email, you can implement this module and model all the actions around it.

### 1.1 Typical Usage Scenario

* Retrieve emails and act like an email client, which is the recommended approach when hosting your application in the Mendix Cloud

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

The basic setup and reception of emails can be done using the **EmailAccount_Overview** example page.

Set **Sanitize email to prevent XSS attacks** option in case it is enabled, malicious scripts would be removed to prevent XSS attacks. More details here(https://jsoup.org/cookbook/cleaning-html/safelist-sanitizer). By default emails are not sanitized

To invoke receiving emails from an account, call the **RetrieveEmailMessages** Java action.

To subscribe to incoming email from an account, call the **SubscribeToIncomingEmail** Java action.

To unsubscribe from incoming email from an account, call the **UnsubscribeFormIncomingEmail** Java action.

Set the **EncryptionKey** constant for email account passowrd encryption.
