---
title: "Amazon Translate"
url: /appstore/modules/aws/amazon-translate/
description: "Describes the configuration and usage of the Amazon Translate app service. Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation."
weight: 20
aliases:
    - /appstore/connectors/amazon-translate/
    - /appstore/connectors/aws/amazon-translate/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Translate](https://marketplace.mendix.com/link/component/204706) connector enables you to connect your app to [Amazon Translate](https://aws.amazon.com/translate/) and build web applications that work with state-of-the-art multi-language text translation.

### 1.1 Typical Use Cases

Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms.
With Amazon Translate, you can localize content such as websites and applications for your diverse users, easily translate large volumes of text for analysis, and efficiently enable cross-lingual communication between users.

### 1.2 Prerequisites {#prerequisites}

The Amazon Translate connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333).  If you are using the Amazon Translate Connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon Translate connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonTranslateConnector** section. The connector provides the [domain model](#domain-model) and [activities](#activities) that you can use to implement automatic translation for your app.

{{% alert color="info" %}}
The artifacts that you need are contained in the **AmazonTranslateConnector** > **Operations** folder. The content in the **Translation** > **Private** folder is for internal use. In most cases, you will not need to use it directly.
{{% /alert %}}

### 3.1 Configuring AWS Authentication

In order to use the Amazon Translate service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

## 4 Technical Reference

To help you work with the Amazon Translate connector, the following sections of this document list the available entities, enumerations, and actions that you can use in your application.

### 4.1 Domain model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/). 

#### 4.1.1 ListLanguagesRequest {#list-languages-request}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes. |

#### 4.1.2 ListLanguagesResponse {#list-languages-response}

| Attribute | Description |
| --- | --- |
| N/A | The entity does not contain any attributes, but it contains a list of [Language](#language) objects. |

#### 4.1.3 Language {#language}

| Attribute | Description |
| --- | --- |
| `LanguageName` | The language name, equivalent to the locale name (string)|
| `LanguageCode` | The [language code](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) that assigns letters or numbers as identifiers or classifiers for languages / minimum length: 2, maximum length: 5 (string) |

#### 4.1.4 TranslateTextRequest {#translate-text-request}

| Attribute | Description |
| --- | --- |
| `SourceLanguageCode` | The language code of the input text (string) |
| `TargetLanguageCode` | The language code of the desired output text (string) |
| `InputText` | The input text (string) |

#### 4.1.5 TranslateTextResponse {#translate-text-response}

| Attribute | Description |
| --- | --- |
| `SourceLanguageCode` | The language code of the input text (string) |
| `TargetLanguageCode` | The language code of the desired output text (string) |
| `InputText` | The input text (string) |

### 4.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.2.1 ListLanguages {#list-languages}

The `ListLanguages` Amazon Translate action allow you to retrieve a list of supported languages that can used for translation. It requires a valid `ENUM_Region` and `Credentials` object, as well as a `ListLanguagesRequest` object and returns a `ListLanguagesResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListLanguagesRequest`, `ENUM_Region`, `Credentials` | `ListLanguagesResponse` |

{{% alert color="info" %}}
For more information about the language codes, see the [list of supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) in the AWS documentation.
{{% /alert %}}

#### 4.2.2 TranslateText {#translate-text}

The `TranslateText` Amazon Translate action allow you to retrieve the translation of the input text. It requires a valid `ENUM_Region` and `Credentials` object, as well as a `TranslateTextRequest` object and returns a `TranslateTextResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `TranslateTextRequest`, `ENUM_Region`, `Credentials` | `TranslateTextResponse` |
