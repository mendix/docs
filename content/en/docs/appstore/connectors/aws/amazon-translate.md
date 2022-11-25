---
title: "Amazon Translate"
url: /appstore/connector/amazon-translate
description: "Describes the configuration and usage of the Amazon Translate app service, which enables performing text translation in your web apps."
tags: ["translation", "service", "app store", "marketplace", "component", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Translate](https://marketplace.mendix.com/link/component/204706) connector enables you to connect your app to [Amazon Translate](https://aws.amazon.com/translate/) and build web applications that work with state-of-the-art multi-language text translation.

### 1.1 Typical Use Cases

Amazon Translate provides a service that enables you to perform text translation in your Mendix applications. You can use it to localize your app into multiple languages to better support the requirements of your users.

### 1.2 Prerequisites

The Amazon Translate connector requires the [AWS Authentication connector](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Translate connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **Translation** section. The connector provides a [domain model](#domain-model), as well as the [enumerations](#enumerations) and [microflows](#microflows) that you can use to implement automatic translation for your app.

{{% alert color="info" %}}
The artifacts that you need are contained in the **AmazonTranslateConnector** > **Operations** folder. The content in the **Translation** > **Internal** folder is for internal use only. In most cases, you will not need to use it directly.
{{% /alert %}}

To help you work with the Amazon Translate connector, the following sections of this document list the available entities, constants, microflows, and nanoflows that you can use in your application.

### 3.1 Domain model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/). For the Amazon Translate connector, the domain model contains the `Translator` and `Language` entities.

#### 3.1.1 TranslateRequest

The `TranslateRequest` entity is an entity that returns the output of the translation as a string from the microflow action. The entity  contains `InputLanguageCode`, `OutputLanguageCode` and `InputText` as attributes.

| Attribute | Description |
| --- | --- |
| `InputText` | The input text string (minimum length: 1, maximum length: 5000). |
| `OutputText` | The output text string. |

#### 3.1.2 ListLanguageResponse

The `ListLanguageResponse` entity is used when calling the ListLanguages action. It is associated with a `LanguageResponse` entity.

| Attribute | Description |
| --- | --- |
| `Name` | The language name, equivalent to the locale name. |
| `Code` | The [language code](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) that assigns letters or numbers as identifiers or classifiers for languages (minimum length: 2, maximum length: 5). |

### 3.2 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For the Amazon Translate connector, an enumeration is used to list available AWS regions.

#### 3.2.1 `AWS_Region` {#aws-region}

| Name | Caption |
| --- | --- |
| `us_east_2` |	**US Easth (Ohio)** |
| `us_east_1` |	**US East (N. Virginia)** |
| `us_west_1` |	**US West (N. California)** |
| `us_west_2` |	**US West (Oregon)** |
| `af_south_1` |	**Africa (Cape Town)** |
| `ap_east_1` |	**Asia Pacific (Hong Kong)** |
| `ap_southeast_3` |	**Asia Pacific (Jakarta)** |
| `ap_south_1` |	**Asia Pacific (Mumbai)** |
| `ap_northeast_3` |	**Asia Pacific (Osaka)** |
| `ap_northeast_2` |	**Asia Pacific (Seoul)** |
| `ap_southeast_1` |	**Asia Pacific (Singapore)** |
| `ap_southeast_2` |	**Asia Pacific (Sydney)** |
| `ap_northeast_1` |	**Asia Pacific (Tokyo)** |
| `ca_central_1` |	**Canada (Central)** |
| `eu_central_1` |	**Europe (Frankfurt)** |
| `eu_west_1` |	**Europe (Ireland)** |
| `eu_west_2` |	**Europe (London)** |
| `eu_south_1` |	**Europe (Milan)** |
| `eu_west_3` |	**Europe (Paris)** |
| `eu_north_1` |	**Europe (Stockholm)** |
| `me_south_1` |	**Middle East (Bahrain)** |
| `sa_east_1` |	**South America (São Paulo)** |

### 3.3 Microflows {#microflows}

Microflows allow you to express the logic of your application. A microflow can perform actions such as creating and updating objects, showing pages and making choices. Microflows run in the runtime server and can therefore not be used in offline apps. For more information, see [Microflows](/refguide/microflows/).

#### 3.3.1 CreateTranslator {#create-translator}

The `CreateTranslator` microflow takes `inputText`, `inputLanguageCode`, and `outputLanguageCode` as input parameters and creates translator actions in the back-end service. For instance, `inputLanguageCode` and `outputLanguageCode` can be set to `en-US`.

{{% alert color="info" %}}
For more information about the language codes, see the [list of supported languages](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html) in AWS documentation.
{{% /alert %}}

#### 3.3.2 TranslateText

The `TranslateText` microflow takes the `TranslateRequest` object as an input parameter and performs text translation actions.
