---
title: "AWS Authentication"
url: /appstore/connectors/aws-authentication/
description: "Describes the configuration and usage of the AWS Authentication connector from the Mendix Marketplace. This is required to authenticate AWS connectors such as the Amazon S3 connector"
tags: ["marketplace", "marketplace component", "aws", "authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

[AWS Authentication](https://marketplace.mendix.com/link/component/120333) connector provides a way to authenticate on AWS for other compatible AWS connectors, for example, the [Amazon S3](/appstore/connectors/aws-s3-connector/) connector, the [Amazon Rekognition](new-url) connector, the Amazon SNS connector, and the Amazon SQS connector.

There are two types of credentials that can be used through the AWS Authentication connector:

- Static credentials
- Session credentials

To generate these credentials, you can use the **Get Static Credentials** action and the **Get Session Credentials Credentials** action delivered with the connector. These actions will return a Credentials object, which can be used for authentication for other compatible AWS connectors.

### 1.1 Typical Use Cases

You want to use an AWS connector, for example the [Amazon S3](/appstore/connectors/aws-s3-connector/) – then you can only connect to your S3 bucket when you have the correct credentials. These credentials are provided by the AWS Authentication connector.

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the AWS Authentication connector into your app.

## 3 Usage

### 3.1 Creating Static Credentials

Static credentials use a mechanism with an access key and a secret.

#### 3.1.1 Obtaining IAM Credentials on AWS

Within AWS, you can create IAM Credentials using the AWS console as follows:

1. In the [AWS Console](https://console.aws.amazon.com/console/home), choose the **IAM** service and select the **Users** tab.

2. Either create or choose a user which has the required permissions. The permissions given to this user are beyond the scope of this document, but should be the minimum access required to perform the functions of your AWS connector(s).

3. For the chosen user, switch to the **Security credentials** tab.

4. Either create an access key by clicking **Create access key** or use an existing access key ID.

5. Make a note of the **Secret Access Key** associated with the access key ID.


{{% alert color="warning" %}}
Once you have created the credentials, you cannot retrieve your secret access key from the AWS Console again. You will need to store it somewhere safely, or create a new access key if you have lost it.

You can only set up two access keys for each user.
{{% /alert %}}

#### 3.1.2 Using the Get Static Credentials Action in Studio Pro

You can use the AWS Authentication connector in your app as follows:

1. Open your app in Studio Pro.
2. Drag the **Get Static Credentials** action from the **Toolbox** to a microflow to create credentials.
3. Double-click the **Get Static Credentials** action and fill in **Access key ID** and **Secret access key** that you obtained from the AWS Console. You can decide how to provide the access key ID and the secret access key securely within your app.

   {{< figure src="/attachments/appstore/connectors/aws-authentication/microflow-get-static-credentials.png" >}}


The action returns a **Credentials** object. For more information on how to use this object, see the documentation for your specific connector.

### 3.2 Creating Session Credentials {#session}

Session credentials use Amazon IAM Roles Anywhere to assume an AWS Role. IAM Roles Anywhere is used to create a session token valid for a specific duration. The default duration is one hour.

#### 3.1.1 Setting up IAM Roles Anywhere on AWS

For the setup of IAM Roles Anywhere, see [AWS documentation](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html).

#### 3.2.2  Adding the Client Certificate in Mendix Deployment Portal

You can add the client certificate used for creating Trust Anchor in RolesAnywhere as follows:

1. Log in to the Developer Portal.

2. Select your app, click **Environments**, and then click **Details** on the specific environment to open the [Environment Details](/developerportal/deploy/environments-details/#network-tab) page.

3. Go to the **Network** tab, add the client certificate used for creating Trust Anchor in RolesAnywhere in the **Outgoing Connections Certificates** section.

   {{< figure src="/attachments/appstore/connectors/aws-authentication/ongoing-connections-certificate.png" >}}

   {{% alert color="info" %}}Make sure to add an identifier to the certificate which will be used as input while creating the session credentials.{{% /alert %}}

   {{< figure src="/attachments/appstore/connectors/aws-authentication/identifier.png" >}}

#### 3.2.3 Using the Get Session Credentials Action in Studio Pro

You can use the AWS Authentication connector in your app as follows:

1. Open your app in Studio Pro.

2. Drag the **Get Session Credentials** action from the **Toolbox** to a microflow to create credentials.

3. Double-click the **Get Session Credentials** action and configure the parameters as shown in the table below:

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

The action returns a **Credentials** object. For more information on how to use this object, see the documentation for your specific connector.
