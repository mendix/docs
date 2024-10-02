---
title: "Encryption"
url: /appstore/modules/encryption/
description: "Describes the configuration and usage of the Encryption module, which is available in the Mendix Marketplace."
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## Introduction

The [Encryption](https://marketplace.mendix.com/link/component/1011/) module takes care of the following encryption needs:

* Plain text encryption (for example, passwords)
* FileDocument encryption (for example, files or photos)

## Plain Text Encryption

Encrypt and decrypt plain texts using the [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) algorithm. The key used for encryption is configured as a constant and remains on the application server.

### Typical Use Cases

The typical usage scenario is when an app/module consumes a service where a user name and password are required, you can store the password in an encrypted way in the database. 

### Limitations

* Currently only AES is supported

### Configuration {#configuration}

#### EncryptionKey Constant

Set the `EncryptionKey` constant located in the **Private - String en/de-cryption** folder. Make sure the key consists of 16 characters.

In version 2.2.0, the key length was increased from 128 to 256 bits. The `EncryptionKey` constant must now have a key with 32 characters. The `LegacyEncryptionKey` constant can be used for the 128 bits, in order to decrypt strings that were encrypted using an older version of the Encryption module.

#### EncryptionPrefix Constant

Set the `EncryptionPrefix` constant located in the **Private - String en/de-cryption** folder. The value depends on the module version you are using:

* For version 2.2.0 or above, set the constant to `{AES3}`
* For versions 1.4.1–2.1.3, set the constant to `{AES2}`

{{% alert color="info" %}}
In version 1.4.1, the AES algorithm used for encrypting/decrypting text was switched from CBC to GCM mode, because CBC mode was vulnerable to Oracle padding attacks. For backward compatibility, the module still supports decrypting texts encrypted using CBC mode in older versions of the module. It does not support encrypting strings using the legacy CBC mode. So, strings encrypted in versions below 1.4.1 in CBC mode have the prefix `{AES}`, while strings encrypted in GCM mode in version 1.4.1 have the prefix `{AES2}`. If the `EncryptionPrefix` constant is set to `{AES}`, the module in version 1.4.1 or above will still encrypt the string using a new GCM mode. Then, when decrypting the string, the module will detect the prefix `{AES}` and try to decrypt it using the legacy CBC mode, which will fail because the string was encrypted using GCM mode (which is incompatible with CBC).
{{% /alert %}}

{{% alert color="warning" %}}
If you are updating the module from a version below 1.4.1 to 1.4.1 or above (including 2.2.0 and above), do not forget to update the `EncryptionPrefix` constant value when deploying your app to Mendix Cloud. It is also advised to re-encrypt the encrypted data by first decrypting and then encrypting it again, in order to ensure it is encrypted with the new mechanism.
{{% /alert %}}

## FileDocument Encryption

Encrypt and decrypt the contents of FileDocument entities using the [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) algorithm. The key used for symmetric encryption is embedded into encrypted file content. The certificate to use asymmetric encryption of the symmetric key is stored in the database.

### Typical Use Cases

One of the typical usage scenarios may be an app/module that stores customer sensitive documents such as photos. In such a case, you may want to encrypt those documents in a way that only the owner can see.

### Configuration

No configuration is needed. However, you should generate or upload certificates upfront using the **CertificateManagement** page.

{{% alert color="info" %}}
To use the FileDocument encryption, you need to use these two microflows – **Encrypt_Document** and **Decrypt_Document**. The microflows are in the **USE ME** > **PGP** folder. They are annotated with explanations and you can find more details when you open them in Mendix Studio Pro.
{{% /alert %}}
