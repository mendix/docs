---
title: "IMAP/POP3 Incoming Email"
category: "Modules"
description: " "
tags: [ ]
draft: true
---

## 1 Introduction

The [IMAP/POP3 Incoming Email](https://appstore.home.mendix.com/link/app/1042/) module enables your app project to retrieve emails from POP3, POP3S, IMAP, and IMAPS servers. In order for Mendix to act on incoming email, you can implement this module and model all the actions around it.

### 1.1 Typical Usage Scenario

* Retrieve emails and act like an email client, which is the recommended approach when hosting your application in the Mendix Cloud

### 1.2 Features

    Configuration of multiple accounts.
    Supported protocols:
        POP3 / POP3S
        IMAP / IMAPS
    Actions to be performed after receiving emails:
        Deleted from server
        Move to a folder (e.g. archive).

Limitations

    Does not retrieve meeting requests (.ics).

Installation

This module depends on the following modules:

    Encryption v2.0.0 (used to encrypt passwords of the email accounts)

Configuration

Basic setup and receive of emails can be done using the EmailAccount_Overview. To invoke receiving emails from an account you can call DS_ReceiveEmails.