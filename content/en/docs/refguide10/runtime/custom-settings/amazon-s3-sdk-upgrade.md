---
title: "Amazon S3 SDK Upgrade"
url: /refguide10/amazon-s3-sdk-upgrade/
description: "Describes breaking changes cause by Amazon S3 SDK library upgrade."
---

## Introduction

In Mendix 10.24.14 we upgraded the AWS SDK used for accessing S3 storage from version 1 to version 2. SDK version 2 has some [differences](https://docs.aws.amazon.com/sdk-for-java/latest/developer-guide/migration-s3.html) which affects our S3 storage implementation.

## Considerations When Upgrading Amazon S3 SDK

You will need to consider the following when upgrading to a version of Mendix which uses SDK version 2 for accessing AWS S3 storage.

### `com.mendix.storage.s3.Region` and `com.mendix.storage.s3.EndPoint` Settings

SDK version 2 is stricter with these settings.

* `com.mendix.storage.s3.Region` – always set to the region matching the region of the bucket.

* `com.mendix.storage.s3.EndPoint` – either do not set or set to an endpoint matching the region, for example: `s3.eu-west-1.amazonaws.com`.

When the region is not specified or there is an incompatibility between the two settings above, error logs will contain entries similar to the following:

``` text
- Unable to load region from any of the providers in the chain.
- The bucket you are attempting to access must be addressed using the specified endpoint.
- The authorization header is malformed; the region 'us-east-1' is wrong.
```

### AWS Signature V2 Support

SDK version 2 does not support AWS Signature v2 which is enabled by the [`com.mendix.storage.s3.UseV2Auth`](/refguide10/custom-settings/#commendixstorages3UseV2Auth) setting. This signature type is deprecated, and is not supported by new regions. For more information, see [AWS's Documentation](https://docs.aws.amazon.com/AmazonS3/latest/API/specify-signature-version.html).

We do not expect this to have any effect when using Amazon S3. It will, however, prevent the use of S3-compatible solutions which only support the v2 signature type. In situations like that, you need to switch to either Amazon S3 or a compatible solution that supports newer signature types.

### Client Side Encryption Changes

Client side encryption can be enabled using the [`com.mendix.storage.s3.EncryptionKeys`](/refguide10/custom-settings/#commendixstorages3EncryptionKeys) setting. Previously, any encryption algorithm supported by the JDK could be used. With the new SDK only AES is supported.

An error similar to the following will be printed in logs when an algorithm other than AES is used:

``` text
- Unsupported algorithm: DES
```

If you use an encryption algorithm other than `AES`, then all existing files should be migrated to use `AES` before upgrading to Mendix 10.24.14. This can be done by configuring a new `AES` key and rewriting all file documents.
