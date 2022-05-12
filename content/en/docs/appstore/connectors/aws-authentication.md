---
title: "AWS Authentication Module"
url: /appstore/connectors/aws-authentication/
description: "Describes the configuration and usage of the AWS Authentication module from the Mendix Marketplace. This is required to authenticate AWS connectors such as the AWS S3 Connector"
tags: ["marketplace", "marketplace component", "aws", "authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

When using AWS connectors, you need to authenticate to the services being connected to. This is done using the [AWS Authentication Module](https://marketplace.mendix.com/link/component/120333) available from the Mendix Marketplace.

### 1.1 Typical Use Cases

You want to use the [AWS S3 Connector](/appstore/connectors/aws-s3-connector/). You can only connect to your S3 bucket when you have the correct credentials. These are provided by the AWS Authentication Module.

## 2 Configuration

The following actions need to be taken to use the AWS Authentication Module in your app.

1. Open your app in Studio Pro

2. Download the [AWS Authentication Module](https://marketplace.mendix.com/link/component/120333) from the Marketplace (see [How To Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/))

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

## 4 Using the AWS Authentication Module

You can now use the AWS Authentication Module in your app by using the `Get Static Credentials` microflow action, available in the **Toolbox**.

{{< figure src="/attachments/appstore/connectors/aws-authentication/get-static-credentials.png" >}}

You will need to provide the following values, obtained from the AWS Console:

* Access key ID
* Secret access key

{{< figure src="/attachments/appstore/connectors/aws-authentication/get-static-credentials-dialog.png" >}}

You can decide how to provide these securely within your app.

The action returns a `Credentials` object. See the documentation for your specific connector for more information on how to use the Credentials object.
