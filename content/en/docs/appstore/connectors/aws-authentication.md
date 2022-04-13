---
title: "AWS Authentication Module"
url: /appstore/connectors/aws-authentication/
description: "Describes the configuration and usage of the AWS Authentication module from the Mendix Marketplace. This is required to authenticate AWS connectors such as the AWS S3 Connector"
tags: ["marketplace", "marketplace component", "aws", "authentication"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

When using AWS connectors, you need to authenticate to the services being connected to. This is done using the [AWS Authentication Module](/needlinkhere/) available from the Mendix Marketplace.

The AWS Authentication Module records static credentials in your app's database which are used to authenticate to an AWS Service.

### 1.1 Typical Use Cases

You want to use the [AWS S3 Connector](/appstore/connectors/aws-s3-connector/). You can only connect to your S3 bucket when you have the correct credentials. These are held and supplied by the AWS Authentication Module.

## 2 Configuration

The following actions need to be taken to use the AWS Authentication Module in your app.

1. Open your app in Studio Pro

2. Download the [AWS Authentication Module](/needlinkhere/) from the Marketplace (see [How To Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/))

3. Add the `AfterStartup` microflow **App** > **Marketplace modules** > **AWSAuthentication** > **_USE_ME** > **microflows** > **AfterStartup** to the [Runtime Tab](/refguide/project-settings/#after-startup) of the app settings. If there is already an after startup microflow, you will need to call this after startup microflow from the existing microflow.

4. Ensure that an appropriate user role (for example, an administrator) can add AWS credentials to the `Credentials` and `StaticCredentials` entities in the AWSAuthentication module domain model. You will have to adjust the security settings to ensure the user roles have the correct access.

    For example, you can [generate overview pages](howto/front-end/create-your-first-two-overview-and-detail-pages/) for these entities, give access only to the administrator user role, and then add the pages to the  navigation for the administrator user role.

You can now use the AWS Authentication Module in your app by using the `Get_Credentials` microflow (**App** > **Marketplace modules** > **AWSAuthentication** > **_USE_ME** > **microflows** > **GET_Credentials**) when using your connector. See the documentation for your specific connector for more information.

## 3 Obtaining Credentials from AWS

Within AWS, you can create IAM Credentials using the AWS console.

1. In the [AWS Console](https://console.aws.amazon.com/console/home) choose the **IAM** service and select the **Users** tab.

2. Either create or choose a user which has the required permissions. The permissions given to this user are beyond the scope of this document, but should be the minimum access required to perform the functions of your AWS connector(s).

3. For the chosen user, switch to the **Security credentials** tab.

4. Either create an access key by clicking **Create access key** or use an existing **Access key ID**. This is the value to be stored in the `AccessKey` attribute of `StaticCredentials`.

5. Use the **Secret Access Key** associated with the Access Key ID as the `SecretKey` attribute of `StaticCredentials`.

    {{< figure src="/attachments/appstore/connectors/aws-authentication/iam-user-keys.png" >}}

    {{% alert color="warning" %}}
Once you have downloaded the credentials, you cannot retrieve your **Secret Access Key** from the AWS Console again. You will need to store it somewhere safely, or create a new Access Key if you have lost it.

Each user can only have two access keys set up.
    {{% /alert %}}

## 4 Overview of Module

### 4.1 Domain Model

The AWS Authentication Module contains two entities which contain the credentials for one or more AWS services: 

{{< figure src="/attachments/appstore/connectors/aws-authentication/domain-model.png" >}}

**StaticCredentials** contains the credentials required to authenticate to AWS:

* AccessKey – the access key id which can be obtained from the AWS Console
* SecretKey – the secret access key which you need to store securely when you create your access key in the AWS console

**Credentials** contains information to identify the associated static credentials:

* Name – a unique name you can give to these credentials - the credentials will always be accessed using this name
* Provider – an enumeration indicating the type of credentials being stored — currently always `_STATIC`

### 4.2 Microflows

The AWS Authentication Module contains two microflows which can be used by in your app. These are in the folder **App** > **Marketplace modules** > **AWSAuthentication** > **_USE_ME** > **microflows**:

* GET_Credentials – returns a `Credentials` object when passed a string containing the **Name** — returns an empty object if the string does not match the name of any credentials object
* AfterStartup – needs to be added to your app as an after startup microflow
