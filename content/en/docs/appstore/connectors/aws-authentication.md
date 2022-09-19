---
title: "AWS Authentication"
url: /appstore/connectors/aws-authentication/
description: "Describes the configuration and usage of the AWS Authentication connector from the Mendix Marketplace. This is required to authenticate AWS connectors such as the Amazon S3 connector"
tags: ["marketplace", "marketplace component", "aws", "authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

AWS Authentication Connector provides a way to authenticate on AWS for other compatible AWS connectors (for example, the [Amazon S3](/appstore/connectors/aws-s3-connector/) connector, the [Amazon Rekognition](new-url) connector the Amazon SNS connector, and the Amazon SQS connector).

There are two types of credentials that can be used through the AWS Authentication connector:

- Static credentials: use an access key and secret mechanism.
- Session credentials: use Amazon IAM RolesAnywhere to assume an AWS Role.  IAM RolesAnywhere is used to create a sessionToken valid for a specific duration. Default duration is one hour.

Credentials object returned by the actions above can be used as authentication for other compatible AWS connectors.

### 1.1 Typical Use Cases

You want to use an AWS connector, for example the [Amazon S3](/appstore/connectors/aws-s3-connector/). You can only connect to your S3 bucket when you have the correct credentials. These are provided by the AWS Authentication connector.

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the AWS Authentication connector into your app.

## 3 Obtaining Credentials from AWS

Within AWS, you can create IAM Credentials using the AWS console.

1. In the [AWS Console](https://console.aws.amazon.com/console/home) choose the **IAM** service and select the **Users** tab.

2. Either create or choose a user which has the required permissions. The permissions given to this user are beyond the scope of this document, but should be the minimum access required to perform the functions of your AWS connector(s).

3. For the chosen user, switch to the **Security credentials** tab.

4. Either create an access key by clicking **Create access key** or use an existing **Access key ID**.

5. Make a note of the **Secret Access Key** associated with the Access Key ID.

    {{< figure src="/attachments/appstore/connectors/aws-authentication/iam-user-keys.png" >}}

{{% alert color="warning" %}}
Once you have created the credentials, you cannot retrieve your **Secret Access Key** from the AWS Console again. You will need to store it somewhere safely, or create a new Access Key if you have lost it.

You can only set up two access keys for each user.
{{% /alert %}}

## 4 Using the AWS Authentication Connector

You can now use the AWS Authentication connector in your app by using the `Get Static Credentials` microflow action, available in the **Toolbox**.

{{< figure src="/attachments/appstore/connectors/aws-authentication/get-static-credentials.png" >}}

You will need to provide the following values, obtained from the AWS Console:

* Access key ID
* Secret access key

{{< figure src="/attachments/appstore/connectors/aws-authentication/get-static-credentials-dialog.png" >}}

You can decide how to provide these securely within your app.

The action returns a `Credentials` object. See the documentation for your specific connector for more information on how to use the Credentials object.







### 1.1 Static Credentials {#static}

Static credentials use an access key and secret mechanism.

Users can create and access these keys from the **AWS Console** > **My Security Credentials** > **AWS IAM Credentials**. Further users need to use the **Get Static Credentials** action in a microflow to create credentials using the access key id and secret access key.

{{< figure src="/attachments/appstore/connectors/aws-authentication/microflow-get-static-credentials.png" >}}

### 1.2 Session Credentials {#session}

Session credentials use Amazon IAM RolesAnywhere to assume an AWS Role.  IAM RolesAnywhere is used to create a sessionToken valid for a specific duration. Default duration is one hour.

For IAM RolesAnywhere setup, refer to [AWS documentation](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html).

Then users need to add the client certificate used for creating Trust Anchor in RolesAnywhere in Mendix Deployment Portal on the [Network](/developerportal/deploy/environments-details/#network-tab) tab on the **Outgoing Connections Certificates** section.

{{< figure src="/attachments/appstore/connectors/aws-authentication/ongoing-connections-certificate.png" >}}

Make sure to add an identifier to the certificate which will be used as input while creating the session credentials.

{{< figure src="/attachments/appstore/connectors/aws-authentication/identifier.png" >}}

Then, users need to use the **Get Session Credentials** action in a microflow to create credentials with the below parameters:

| Parameter                         | Value                                                        |
| --------------------------------- | ------------------------------------------------------------ |
| **Region**                        | AWS Region                                                   |
| **Role ARN**                      | Arn of the AWS role to assume                                |
| **Profile ARN**                   | Arn of the Profile created at IAM RolesAnywhere              |
| **Trust Anchor ARN**              | Arn of the Trust Anchor created at IAM RolesAnywhere         |
| **Client Certificate Identifier** | Identifier mentioned (as Pin) in the Outgoing Certificates in Runtime tab of Mendix Cloud Environment |
| **Duration**                      | Duration for which the session token should be valid         |
| **Session Name**                  | An identifier for the assumed role session                   |

For example:

{{< figure src="/attachments/appstore/connectors/aws-authentication/microflow-get-session-credentials.png" >}}
