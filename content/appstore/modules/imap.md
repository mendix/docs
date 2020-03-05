---
title: "IMAP/POP3 Incoming Email"
category: "Modules"
description: "Describes the configuration and usage of the IMAP/POP3 Incoming Email module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "imap", "pop3", "incoming email", "encryption", "platform support"]
draft: true
---

## 1 Introduction

The [IMAP/POP3 Incoming Email](https://appstore.home.mendix.com/link/app/1042/) module enables your app project to retrieve emails from POP3, POP3S, IMAP, and IMAPS servers. In order for Mendix to act on incoming email, you can implement this module and model all the actions around it.

### 1.1 Typical Usage Scenario

* Retrieve emails and act like an email client, which is the recommended approach when hosting your application in the Mendix Cloud

### 1.2 Features

* Configuration of multiple accounts.
* Supported protocols:
	* POP3 and POP3S
	* IMAP and IMAPS
* Actions to be performed after receiving emails:
	* Delete from server
	* Move to a folder (for example, an archive)

### 1.3 Limitations

* Does not retrieve meeting requests (*.ics*)

### 1.4 Dependencies

* [Encryption](encryption) (used to encrypt passwords of the email accounts)

## 2 Configuration

The basic setup and reception of emails can be done using the **EmailAccount_Overview** example page.

To invoke receiving emails from an account, you can call the **DS_ReceiveEmails** microflow.