---
title: "AWS S3 Connector"
url: /appstore/connectors/aws-s3-connector/
description: "Describes the configuration and usage of the AWS S3 connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "aws", "s3", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS S3 Connector](/needlinkhere/) allows your app to use AWS S3 buckets directly.

### 1.1 Typical Use Cases

Your app uses objects which you want to store independently from the database. Using AWS S3 gives you the benefits of a secure and redundant storage system that uses a flat object storage structure.

### 1.2  Dependencies

This connector uses the AWS Authentication Module to obtain the credentials with which to authenticate to the S3 bucket. You need to have the downloaded and configured the AWS Authentication Module to use the AWS S3 Connector. See [AWS Authenticator Module](/appstore/connectors/aws-authentication/) for more information.

## 2 Configuration

The microflow actions need AWS credentials. Most use an AWS access key ID and an AWS secret access key.

For the MQTT actions you need to provide the certificates as provided by AWS IoT. These should be stored
in the **resources** folder of your Mendix app:

{{< figure src="/attachments/appstore/connectors/aws-iot/certificates.png"   width="400"  >}}

