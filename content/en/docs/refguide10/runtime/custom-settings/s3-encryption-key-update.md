---
title: "Updating Encryption Keys for S3 File Storage"
url: /refguide10/s3-encryption-key-update/
description: "Describes how to add a new encryption key and re-encrypt all existing files on S3 storage."
---

## Introduction

Client side encryption for S3 can be enabled by specifying encryption keys with the `com.mendix.storage.s3.EncryptionKeys` setting. This setting allows you to specify multiple keys. 
The last encryption key will be used for encrypting new files. When retrieving a file the correct encryption key will be used from the list of encryption keys.

A sample value for the setting would be:

```json
[
  {
    "keyID": "first",
    "algorithm": "AES",
    "key": "IauTCIvTCZ4iy4jm4rzjmYXBLlFgP3hCVKxjXIcBX0Q="
  },
  {
    "keyID": "first",
    "algorithm": "AES",
    "key": "Eu9O519OaDgtiSSpNoXM51eDjc0UIHHxBfXukR5Cyqw="
  }
]
```

{{% alert color="warning" %}}
For deployments to Mendix Cloud, SAP BTP, and Mendix on Kubernetes, these encryption keys are managed for you and cannot be changed.
{{% /alert %}}

## Implementing Key Rotation

When a new key is added, that key will be used for newly encrypted files but existing files will *not* be automatically re-encrypted. For this you need to implement re-encryption inside your application.
This can be done by adding a new encryption key and then re-uploading all existing files.

The following is a Java action that demonstrates re-uploading a list of files:

```java
public class JA_RefreshFileContents extends UserAction<java.lang.Void>
{
  …
  private final java.util.List<IMendixObject> __files;

  …
  public java.lang.Void executeAction() throws Exception
  {
    // BEGIN USER CODE
    IContext sc = Core.createSystemContext();
    sc.startTransaction();
    __files.stream().forEach(f -> { f.setValue(sc, "Contents", (java.io.InputStream) f.getValue(sc, "Contents")); });
    sc.endTransaction();
    Core.commit(sc, __files);
    return null;
    // END USER CODE
  }

  …
}
```

This Java action can be repeatedly called from a microflow that reads objects of type `System.FileDocument`' in batches. For example, see the following microflow:

{{< figure src="/attachments/refguide9/runtime/custom-settings/batch-file-update-microflow.png" class="no-border" alt="Microflow which contains a loop which retrieves a list of FileDocument objects and rewrites them to rotate the encryption key." >}}

Here, a list of FileDocument objects is retrieved, for example 100, ordered by the `FileID` attribute, and passed to the `JA_RefreshFileContents` Java action. This is repeated until all the batches of files are processed. The microflow logs and stores the `FileID` attribute of the last processed file in each batch in case the process gets interrupted.

This microflow can be executed in a task queue.