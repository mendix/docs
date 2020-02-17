---
title: "Encryption"
category: "Modules"
description: "Describes the configuration and usage of the Encryption module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "encryption", "aes", "platform support"]
draft: true
---

## 1 Introduction

The [Encryption](https://appstore.home.mendix.com/link/app/1011/) module takes care of the encryption of strings (for example, passwords) using AES.

### 1.1 Typical Usage Scenarios

The typical usage scenario is when a project/module consumes a service where a user name and password are required, you can store the password in an encrpyted way in the database. The key used for encrypting passwords is configured as a constant and remains on the application server.

### 1.2 Limitations

* Encryption using AES only

## 2 Configuration

Set the `EncryptionKey` constant located in the **Private - String en/de-cryption** folder. Make sure the key consists of 16 characters.

## 3 Read More

* [How to Install & Configure the SMTP Email Module](https://docs.mendix.com/howto/integration/install-and-configure-the-smtp-module)
* [How to Synchronize User Accounts Using the LDAP Module](https://docs.mendix.com/howto/integration/synchronizing-user-accounts-using-the-ldap-module)
* [How to Implement Push Notifications](https://docs.mendix.com/howto/mobile/implementation-guide)
