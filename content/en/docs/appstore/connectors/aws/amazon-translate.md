---
title: "Amazon Translate"
url: /appstore/connectors/aws/amazon-translate
description: "Describes the configuration and usage of the Amazon Translate app service. Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation."
weight: 20
tags: ["translation", "service", "app store", "marketplace", "component", "platform support"]
aliases:
    - /appstore/connectors/amazon-translate/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Translate](https://marketplace.mendix.com/link/component/204706) connector enables you to connect your app to [Amazon Translate](https://aws.amazon.com/translate/) and build web applications that work with state-of-the-art multi-language text translation.

### 1.1 Typical Use Cases

Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms.
With Amazon Translate, you can localize content such as websites and applications for your diverse users, easily translate large volumes of text for analysis, and efficiently enable cross-lingual communication between users.

### 1.2 Prerequisites {#prerequisites}

The Amazon Translate connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Translate connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **Translation** section. The connector provides a [domain model](#domain-model), as well as the [enumerations](#enumerations) and [activities](#activities) that you can use to implement automatic translation for your app.

{{% alert color="info" %}}
The artifacts that you need are contained in the **AmazonTranslateConnector** > **Operations** folder. The content in the **Translation** > **Internal** folder is for internal use only. In most cases, you will not need to use it directly.
{{% /alert %}}

### 3.1 Configuring AWS Authentication

In order to use the Amazon Translate service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Translate connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-translate/translate_open_settings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonTranslateConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-translate/translate_edit_configuration.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Constant | Value |
    | --- | --- | --- |
    | Any | **UseStaticCredentials** | **true** if you want to use static credentials, or **false** for session credentials |
    | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites)  |
    | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
    | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
    | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
    | **SessionCredentials** | **Session Name** | An identifier for the session |

## 4 Technical Reference

To help you work with the Amazon Translate connector, the following sections of this document list the available entities, enumerations, and actions that you can use in your application.

### 4.1 Domain model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/). For the Amazon Translate connector, the domain model contains the `ListLanguageResponse`, `LanguageResponse`, and `TranslateRequest` entities.

#### 4.1.1 ListLanguageResponse

The `ListLanguageResponse` entity is used when calling the [ListLanguages](#list-languages) action. It is associated with a `LanguageResponse` entity.

| Attribute | Description |
| --- | --- |
| `Name` | The language name, equivalent to the locale name (string)|
| `Code` | The [language code](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) that assigns letters or numbers as identifiers or classifiers for languages / minimum length: 2, maximum length: 5 (string) |

#### 4.1.2 TranslateRequest

The `TranslateRequest` entity contains `InputLanguageCode`, `OutputLanguageCode` and `InputText` as attributes.

| Attribute | Description |
| --- | --- |
| `InputLanguageCode` | The language code of the input text (string) |
| `OutputLanguageCode` | The language code of the desired output text (string) |
| `InputText` | The input text (string) |

### 4.2 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon Translate connector, an enumeration is used to list available AWS regions.

#### 4.2.1 `AWS_Region` {#aws-region}

| Name | Caption |
| --- | --- |
| `us_east_2` |    **US East (Ohio)** |
| `us_east_1` |    **US East (N. Virginia)** |
| `us_west_1` |    **US West (N. California)** |
| `us_west_2` |    **US West (Oregon)** |
| `af_south_1` |    **Africa (Cape Town)** |
| `ap_east_1` |    **Asia Pacific (Hong Kong)** |
| `ap_southeast_3` |    **Asia Pacific (Jakarta)** |
| `ap_south_1` |    **Asia Pacific (Mumbai)** |
| `ap_northeast_3` |    **Asia Pacific (Osaka)** |
| `ap_northeast_2` |    **Asia Pacific (Seoul)** |
| `ap_southeast_1` |    **Asia Pacific (Singapore)** |
| `ap_southeast_2` |    **Asia Pacific (Sydney)** |
| `ap_northeast_1` |    **Asia Pacific (Tokyo)** |
| `ca_central_1` |    **Canada (Central)** |
| `eu_central_1` |    **Europe (Frankfurt)** |
| `eu_west_1` |    **Europe (Ireland)** |
| `eu_west_2` |    **Europe (London)** |
| `eu_south_1` |    **Europe (Milan)** |
| `eu_west_3` |    **Europe (Paris)** |
| `eu_north_1` |    **Europe (Stockholm)** |
| `me_south_1` |    **Middle East (Bahrain)** |
| `sa_east_1` |    **South America (São Paulo)** |

### 4.3 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.3.1 ListLanguages {#list-languages}

The `ListLanguages` action takes `AWS_Region` as the input parameter and returns a `ListLanguageResponse` object containing a list of `LanguageResponse` objects, which are the supported languages for the Amazon Translate Connector.

{{% alert color="info" %}}
For more information about the language codes, see the [list of supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) in the AWS documentation.
{{% /alert %}}

#### 4.3.2 TranslateText {#translate-text}

The `TranslateText` action takes `inputText`, `inputLanguageCode`, `outputLanguageCode`, and `AWS_Region` as input parameters and gives back the translation of the input text as a string.
