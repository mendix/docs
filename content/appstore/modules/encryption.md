---
title: "Encryption"
category: "Modules"
description: "Describes the configuration and usage of the Encryption module, which is available in the Mendix App Store."
tags: ["app store", "app store component", "encryption", "aes", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

The [Encryption](https://appstore.home.mendix.com/link/app/1011/) module takes care of the encryption of strings (for example, passwords) using AES.

### 1.1 Typical Use Cases

The typical usage scenario is when a project/module consumes a service where a user name and password are required, you can store the password in an encrpyted way in the database. The key used for encrypting passwords is configured as a constant and remains on the application server.

### 1.2 Limitations

* Encryption using AES only

## 2 Configuration

Set the `EncryptionKey` constant located in the **Private - String en/de-cryption** folder. Make sure the key consists of 16 characters.

Set the `EncryptionPrefix` constant located in the **Private - String en/de-cryption** folder. If you're using version 1.4.1 or newer of the Encryption module, the value of this constant should be set to `{AES2}`. In version 1.4.1, the AES algorithm used for encrypting/decrypting text was switched from CBC to GCM mode because CBC mode was vulnerable to oracle padding attacks. For backward compatibility the module still support decrypting texts encrypted using CBC mode in older versions of the module. It does not support encrypting strings using legacy CBC mode. So, strings encrypted in versions prior to 1.4.1 in CBC mode have prefix `{AES}` while strings encrypted in GCM mode in version 1.4.1 have prefix `{AES2}`. If the the `EncryptionPrefix` constant is set to `{AES}`, the module in version 1.4.1 or newer will still encrypt the string using a new GCM mode. Then when decrypting the string the module will detect the prefix `{AES}` and try to decrypt it using the legacy CBC mode which will fail because the string was encrypted using GCM mode which is incompatible with CBC. If you are updating the module from a version prior to 1.4.1 to 1.4.1 or newer, don't forget to update the constant value when deploying your app to the Mendix Cloud. It is also advised to re-encrypt the encrypted data by first decrypting and then encrypting it again,to ensure it is encrypted with the new mechanism.

## 3 Read More

* [How to Implement Push Notifications](/howto/mobile/implementation-guide)
