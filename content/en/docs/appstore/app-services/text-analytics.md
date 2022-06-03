---
title: "Text Analytics"
url: /appstore/app-services/text-analytics/
category: "App Services"
description: "This document describes the configuration and usage of the Text Analystics app service, which enables performing text analytics in your web apps。"
tags: ["text analytics", "service", "app store", "marketplace", "component", "platform support"]
---

## 1 Introduction

The [Text Analytics](https://marketplace.mendix.com/link/component/118412) app service takes written text as input, and then do text analytics for your web applications. Powered by machine learning, this app service can find insights and relationships in text, identify the language of the text, extract key phrases, places, people, brands, or events; understand how positive or negative the text is, analyze text using tokenization and parts of speech, and automatically organize a collection of text files by topic. 

With this app service, you do not have to build a text analytics application from scratch. All you need to do is drag and drop items and configure them.

Here is an overview of what the Text Analytics contains:

| Item                                        | Name                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| [Predefined entities](#predefined-entities) | Detector, Language, Response, DominantLanguageDetector, DominantLanguage, SentimentDetector, Sentiment, SentimentScore, EntityDetector, Entity, PiiEntityDetector, PiiEntity, KeyPhraseDetector, KeyPhrase, SyntaxDetector, SyntaxToken |
| [Constants](#constants)                     | LicenseToken, TokenEndpoint                                  |
| [Microflows](#microflows)                   | CreateDominantLanguageDetector, CreateEntityDetector, CreateKeyPhraseDetector, CreatePiiEntityDetector, CreateSentimentDetector, CreateSyntaxDetector |
| [Nanoflows](#nanoflows)                     | DetectDominantLanguage, DetectEntities, DetectKeyPhrases, DetectPiiEntities, DetectSentiment, DetectSyntax |
| [Enumerations](#enumerations)               | EntityType, PartOfSpeechTag, PiiEntityType, SentimentType    |

In most cases, you will only need what is contained in the **TextAnalytics** > **USE_ME** folder. The content in the **TextAnalytics** > **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on Mendix cloud to easily identify the language of the text, extract key phrases, places, people, brands, or events, understand how positive or negative the text is, analyze text using tokenization and parts of speech, and automatically organize a collection of text files by topics in your Mendix applications.

### 1.2 Features

This app service enables doing the following:

* Key phrase detection based on text
* Sentiment detection based on text
* Language detection based on text
* Entity detection based on text, such as organizations, locations, dates, and persons
* Syntax detection based on text
* Personally Identifiable Information (PII) detection based on text

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](/releasenotes/studio-pro/9.4/).

## 2 Installation

### 2.1 Obtaining a License Token {#obtain-license-token}

Text Analytics is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this app service in your app, first you need to start a subscription or a trial to get a license token.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company one-month access to the app service. The trial has a limitation with [data usage](#check-usage) up to 1500 minutes. To start a trial, perform the following steps:

1. Go to the [Text Analytics](https://marketplace.mendix.com/link/component/118412) page in the marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [My Subscriptions](/appstore/general/app-store-overview/#my-subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **Text Analytics** to open the service management dashboard.
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create a license token. Save the license token somewhere safe. Later you will need to [configure the license token](#configure-license-token) in your app.

#### 2.1.2 Starting a Subscription

1. Go to the [Text Analytics](https://marketplace.mendix.com/link/component/118412) page in the marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in **Technical Owner** information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Owner will receive an email that says the app service is ready to be used. 
6. Click the link in the email to go to the [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) page and log in there. This page gives an overview of all the subscriptions of your organization.
7. Click **Text Analytics** to open the service management dashboard.
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview/#creating-binding-keys) section in the *Marketplace Overview* to create a license token. Save the license token somewhere safe. Later you will need to [configure the license token](#configure-license-token) in your app.

### 2.2 Installing the Component in Your App

1. To download and install the Text Analytics app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer** and also in the **Cognitive AI widgets** category in the **Toolbox**.
2. Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

#### 3.1.1 DominantLanguage

The **DominantLanguage** entity is an entity referenced from **DominantLanguageDetector** and **Language** that incorporates all the information of the supported dominant language object to help you get a confident score of the dominant language from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/dominantlanguage.png" alt="dominantlanguage" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `ConfidenceScore` | Decimal |The confident score of dominant language. |

#### 3.1.2 Language

The **Language** entity is a conceptual entity that incorporates all the information of the supported language object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

{{< figure src="/attachments/appstore/app-services/text-analytics/language.png" alt="language" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `Name` | String | The name of the language. |
| `Code` | String |The [language code](#supported-languages). |

#### 3.1.3 Detector

The **Detector** entity is a conceptual entity that incorporates all the information of the supported detector object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

{{< figure src="/attachments/appstore/app-services/text-analytics/detector.png" alt="detector" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `InputText` | String |The input text of target detector. |

#### 3.1.4 Seniment

The **Sentiment** entity is an entity referenced from **SentimentDetector** and **SentimentScore** that incorporates all the information of the supported sentiment object to help you perform sentiment analysis from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/sentiment.png" alt="sentiment" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `SentimentType` | Enumeration | The customized sentiment type enumeration. |

#### 3.1.5 SentimentScore

The **SentimentScore** entity is a conceptual entity that incorporates all the information of the supported level of confidence of the sentiment score detector object.

{{< figure src="/attachments/appstore/app-services/text-analytics/sentimentscore.png" alt="sentimentscore" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `Positive` | Decimal |The level of confidence that The detector has in the accuracy of its detection of the POSITIVE sentiment. |
| `Negative` | Decimal | The level of confidence that The detector has in the accuracy of its detection of the NEGATIVE sentiment. |
| `Neutral` | Decimal |The level of confidence that The detector has in the accuracy of its detection of the NEUTRAL sentiment. |
| `Mixed` | Decimal |The level of confidence that the detector has in the accuracy of its detection of the MIXED sentiment. |

#### 3.1.6 Entity

The **Entity** entity is a conceptual entity that inherits from the **TextAnalytics.Response** entity and is referenced from **EntityDetector** that incorporates all the information of the supported entity object to help you perform entity detection from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/entity.png" alt="entity" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `EntityType` | Enumeration |The customized entity type. |

#### 3.1.7 PiiEntity

The **PiiEntity** entity is a conceptual entity that inherits from the **TextAnalytics.Response** entity and referenced from **PiiEntityDetector** that incorporates all the information of the supported PII entity object to help you perform PII entity detection from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/piientity.png" alt="piientity" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `PiiEntityType` | Enumeration | The customized PII entity type. |

#### 3.1.8 KeyPhrase

The **KeyPhrase** entity is a conceptual entity that inherits from **TextAnalytics.Response** entity and is referenced from **KeyPhraseDetector** that incorporates all the information of the supported key phrase object to help you perform key phrase detection from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/keyphrase.png" alt="keyphrase" >}}

#### 3.1.9 SyntaxToken

The **SyntaxToken** entity is a conceptual entity that inherits from **TextAnalytics.Response** entity and is referenced from **SyntaxDetector** that incorporates all the information of the supported syntax token object to help you perform syntax token extraction from given text.

{{< figure src="/attachments/appstore/app-services/text-analytics/syntaxtoken.png" alt="syntaxtoken" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `Index` | Integer |The index of the token. |
| `PartOfSpeech` | Enumeration |The part of speech tag enumeration for the token. |

#### 3.1.10 Response

The **Response** entity is a conceptual entity that incorporates all the information of the supported response data object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

{{< figure src="/attachments/appstore/app-services/text-analytics/response.png" alt="response" >}}

| Attribute | Data Type |Description |
| --- | --- |---|
| `Text` | String | The word that was recognized in the source text. |
| `BeginOffset` | Integer |The zero-based offset from the beginning of the source text to the first character in the word. |
| `EndOffset` | Integer |The zero-based offset from the beginning of the source text to the last character in the word. |
| `ConfidenceScore` | Decimal |The level of confidence that the Text Analytics module has in the accuracy of the detection. |

### 3.2 Constants {#constants}

#### 3.2.1 LicenseToken

The **LicenseToken** constant provides a valid license token for an app that uses this app service. As Text Analytics is a commercial product, no matter your app is deployed in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy/), your own environment, or locally in Studio Pro, you need to have a valid license token and configure it correctly. For details on how to get and configure a license token, see the [Obtaining a License Token](#obtain-license-token) section and [Configuring the License Token](#configure-license-token) section.

#### 3.2.2 TokenEndpoint

The **TokenEndpoint** constant provides a valid endpoint of security token service for the back-end authentication of the app service. The constant comes with a default value which points to the deployed security token service. The security token service issues security tokens that authenticate user's identity. 

### 3.3 Microflows {#microflows}

#### 3.3.1 CreateDominantLanguageDetector

The **CreateDominantLanguageDetector** microflow takes **text** (String) as input parameters to create DominantLanguageDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createdominantlanguagedetector.png" alt="createdominantlanguagedetector" >}}

#### 3.3.2 CreateEntityDetector

The **CreateEntityDetector** microflow takes **text** (String) and **languageCode** (String) as input parameters to create CreateEntityDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createentitydetector.png" alt="createentitydetector" >}}

#### 3.3.3 CreateKeyPhraseDetector

The **CreateKeyPhraseDetector** microflow takes **text** (String) and **languageCode** (String) as input parameters to create CreateKeyPhraseDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createkeyphrasedetector.png" alt="createkeyphrasedetector" >}}

#### 3.3.4 CreatePiiEntityDetector

The **CreatePiiEntityDetector** microflow takes **text** (String) and **languageCode** (String) as input parameters to create CreatePiiEntityDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createpiientitydetector.png" alt="createpiientitydetector" >}}

#### 3.3.5 CreateSentimentDetector

The **CreateSentimentDetector** microflow takes **text** (String) and **languageCode** (String) as input parameters to create CreateSentimentDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createsentimentdetector.png" alt="createsentimentdetector" >}}

#### 3.3.6 CreateSyntaxDetector

The **CreateSyntaxDetector** microflow takes **text** (String) and **languageCode** (String) as input parameters to create CreateSyntaxDetector as a return object from the back-end service.

{{< figure src="/attachments/appstore/app-services/text-analytics/createsyntaxdetector.png" alt="createsyntaxdetector" >}}

### 3.4 Nanoflows {#nanoflows}

#### 3.4.1 DetectDominantLanguage

The **DetectDominantLanguage** nanoflow takes the **languageDetector** object as an input parameter to get a list of dominant languages.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectdominantlanguage.png" alt="detectdominantlanguage" >}}

#### 3.4.2 DetectEntities

The **DetectEntities** nanoflow takes the **entityDetector** object as an input parameter to get a list of entities.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectentities.png" alt="detectentities" >}}

#### 3.4.3 DetectKeyPhrases

The **DetectKeyPhrases** nanoflow takes the **keyPhrasesDetector** object as an input parameter to get a list of key phrases.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectkeyphrases.png" alt="detectkeyphrases" >}}

#### 3.4.4 DetectPiiEntities

The **DetectPiiEntities** nanoflow takes the **piiEntitiesDetector** object as an input parameter to get a list of PII entities.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectpiientities.png" alt="detectpiientities" >}}

#### 3.4.5 DetectPiiEntities

The **DetectSentiment** nanoflow takes the **sentimentDetector** object as an input parameter to get a sentiment object.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectsentiment.png" alt="detectsentiment" >}}

#### 3.4.6 DetectSyntax

The **DetectSyntax** nanoflow takes the **syntaxDetector** object as an input parameter to get a list of syntax tokens.

{{< figure src="/attachments/appstore/app-services/text-analytics/detectsyntax.png" alt="detectsyntax" >}}

### 3.5 Enumerations {#enumerations}

#### 3.5.1 SentimentType

The **SentimentType** is an enumeration that incorporates all the information of the supported sentiment type.

| Caption | Name |
| --- | --- |
| Positive | Positive |
| Negative | Negative |
| Neutral | Neutral |
| Mixed | Mixed |

#### 3.5.2 EntityType

The **EntityType** is an enumeration that incorporates all the information of the supported entity type.

| Caption | Name |
| --- | --- |
| Person | Positive |
| Location | Negative |
| Organization | Neutral |
| Commerical Item | Mixed |
| Event | Positive |
| Date | Negative |
| Quantity | Neutral |
| Title | Mixed |
| Other | Mixed |

#### 3.5.3 PartOfSpeechTag

The **PartOfSpeechTag** is an enumeration that incorporates all the supported part of speech tags.

| Caption | Name |
| --- | --- |
| Adjective | Adjective |
| Adposition | Adposition |
| Adverb | Adverb |
| Auxiliary | Auxiliary |
| Conjunction | Conjunction |
| Determiner | Determiner |
| Interjection | Interjection |
| Noun | Noun |
| Numeral | Numeral |
| Particle | Particle |
| Pronoun | Pronoun |
| Proper Noun | Proper_Noun |
| Punctuation | Punctuation |
| Subordinating Conjunction | Subordinating_Conjunction |
| Symbol | Symbol |
| Verb | Verb |
| Other | Other |

#### 3.5.4 PiiEntityType

The **PiiEntityType** is an enumeration that incorporates all the information of the supported Personally Identifiable Information (PII) types.

| Caption | Name |
| --- | --- |
| Bank Account Number | Bank_Account_Number |
| Bank Routing | Bank_Routing |
| Credit Debit Number | Credit_Debit_Number |
| Credit Debit CVV | Credit_Debit_CVV |
| Credit Debit Expiry | Credit_Debit_Expiry |
| Pin | Pin |
| Email | Email |
| Address | Address |
| Name | Name |
| Phone | Phone |
| SSN | SSN |
| Date Time | Date_Time |
| Passport Number | Passport_Number |
| Driver ID | Driver_Id |
| URL | URL |
| Age | Age |
| User Name | User_Name |
| Password | Password |
| IP Address | IP_Address |
| MAC Address | MAC_Address |
| All | All |

### 3.6 Supported Languages {#supported-languages}

| Language              | Code  |
| --------------------- | ----- |
| German                | de    |
| English               | en    |
| Spanish               | es    |
| Italian               | it    |
| Portuguese            | pt    |
| French                | fr    |
| Japanese              | ja    |
| Korean                | ko    |
| Hindi                 | hi    |
| Arabic                | ar    |
| Chinese (simplified)  | zh    |
| Chinese (traditional) | zh-TW |

### 3.7 Configuring the License Token {#configure-license-token}

#### 3.7.1 For an App Deployed Locally or as a Mendix Free App

If you deploy your app locally or as a Mendix Free App, configure the license token in Studio Pro. Perform the following steps:

1. In the App Explorer, go to **Settings** to open the [App Settings](/refguide/project-settings/) dialog box.
2. On the **Configurations** tab, click **Edit** to open the **Edit Configuration** dialog box.
3. On the **Constants** tab, create a new constant with the predefined constant **TextAnalytics.LicenseToken**.
4. Fill in the **Value** with the license token that you [obtained](#obtain-license-token).
5.  Click **OK** to save the settings.

    {{< figure src="/attachments/appstore/app-services/text-analytics/licensetoken-inmendix.png" alt="licensetoken-inmendix" >}}

6. When you finish building the app, click **Run Locally** to run your app locally or click **Run** to deploy it as a Mendix Free App. Then you can see the app service in your app.

#### 3.7.2 For an App Deployed in the Mendix Cloud

If you deploy your app in the Mendix Cloud, configure the license token in the [Developer Portal](/developerportal/deploy/environments-details/).

Before you deploy your app, configure the app **Constants** in the deployment package.

{{< figure src="/attachments/appstore/app-services/text-analytics/licensetoken-cloudportal.png" alt="licensetoken-cloudportal" >}}

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app.

{{< figure src="/attachments/appstore/app-services/text-analytics/licensetoken-envdetails.png" alt="licensetoken-envdetails" >}}

#### 3.7.3 For an App Deployed in Your Own Environment

If you deploy your app in your own environment, you need to configure the license token in your own environment. For more information, see [Deployment](/developerportal/deploy/).

## 4 Usage

### 4.1 Performing Dominant Language Detection in Your Browser

Use the **CreateDominantLanguageDetector** microflow and the **DetectDominantLanguage** nanoflow to perform language detection. Follow these steps to configure the language detection:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateDominantLanguageDetector*.
    2. Add the **CreateDominantLanguageDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateDominantLanguageDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.

        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createdominantlanguagedetector-microflow.png" alt="call-createdominantlanguagedetector-microflow" >}}

   4.  Right-click the microflow activity you just added and select **Set $detector as return value** in the pop-up menu.

       {{< figure src="/attachments/appstore/app-services/text-analytics/createdominantlanguagedetector-nanoflow.png" alt="createdominantlanguagedetector-nanoflow" >}}

2. From the **Toolbox**, add a **Data view** widget to your page.
3. Set the **CreateDominantLanguageDetector** nanoflow as the data source of the **Data View** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateDominantLanguageDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings.
4. Inside the **Data view**, add a **Text area** widget.
5. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings. 
6. Inside the **Data view**, add a **Button** widget below the **Text area** widget.
7. Change the settings of the **Button** widget as follows:
   1. Double-click the **Button** widget to open the **Action Button** dialog box.
   2. For **Caption**, enter *Detect Dominant Language*.
   3. In the **Event** section, set **On click** to **Call a nanoflow**.
   4. For **Nanoflow**, select the **DetectDominantLanguage** nanoflow from the **TextAnalytics** > **USE_ME** folder.
   5. Click **OK** to save the settings. 
8. Inside the **Data view**, add a **Template grid** widget below the **Button** widget.
9. Change the settings of the **Template grid** widget as follows:
   1. Double-click the **Template grid** widget to open the **Edit Template Grid** dialog box.
   2. Go to the **Data source** tab.
   3. Set **Type** to **Association**.
   4. Set **Entity (path)** to **TextAnalytics.DominantLanguageDetector_DominantLanguages/TextAnalytics.DominantLanguage**.
   5. Click **OK** to save the settings. 
10. Inside the **Template grid** widget, add a **Text box** widget.
11. Change the settings of the **Text box** widget as follows:
    1. Double-click the **Text area** widget to open the **Edit Text box** dialog box.
    2. Set **Data source** to **DominantLanguage_Language/Language/Name**.
    3. For **Label caption**, enter *Language*.
    4. Click **OK** to save the settings.
12. Inside the **Template grid** widget, add a second **Text box** widget below the **Text box** widget that you just created.
13. Change the settings of the **Text area** widget as follows:
    1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
    2. Set **Data source** to **ConfidenceScore** from **Template grid**.
    3. For **Label caption**, enter *Score*.
    4. Click **OK** to save the settings.
14. Make sure you have [configured the license token](#configure-license-token).
15.  Run your app locally. You can perform language detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-language-detection.png" alt="runlocally-language-detection" >}}

### 4.2 Performing Sentiment Detection in Your Browser

Use the **CreateSentimentDetector** microflow and the **DetectSentiment** nanoflow to perform sentiment detection. Follow these steps to configure the sentiment detection:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateSentimentDetector*. 
    2. Add the **CreateSentimentDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateSentimentDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.

        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createsentimentdetector-microflow.png" alt="call-createsentimentdetector-microflow" >}}
    
    4.  Right-click the create object activity and select **Set $detector as return value** in the pop-up menu.
    
        {{< figure src="/attachments/appstore/app-services/text-analytics/createsentimentdetector-nanoflow.png" alt="createsentimentdetector-nanoflow" >}}
    
2.  Create a microflow as follows:
    1. Name the microflow *GetDetectorSupportedLanguages*. 
    2. Right-click the canvas and select **Add** > **Parameter** from the pop-up menu. 
    3. Double-click the parameter to open the **Parameter** dialog box.
    4. Set **Data type** to **Object** and select **Detector** entity from **TextAnalytics** module as target object.
    5. For **Name**, enter *detector*.
    6. Click **OK** to save the changes.
    7. Double-click the end event to open the **End Event** dialog box.
    8. Set **Type** to **List**.
    9. For **Entity**, select **Language** entity from **TextAnalytics** module.
    10. In the text box, enter *$detector/TextAnalytics.Detector_SupportedLanguages/TextAnalytics.Language*.
    11.  Click **OK** to save the settings. 

         {{< figure src="/attachments/appstore/app-services/text-analytics/getdetectorsupportedlanguages-microflow.png" alt="getdetectorsupportedlanguages-microflow" >}}

3. Add a **Data view** widget to your page.
4. Set the **CreateSentimentDetector** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateSentimentDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings. 
5. Inside the **Data view** widget, add a **Reference selector** widget.
6. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **TextAnalytics.Detector_InputLanguage/TextAnalytics.Language/TextAnalytics.Language.Name**.
   7. Click **OK** to save the settings. 
7. Inside the **Data view** widget, add a **Text area** widget below the **Reference selector** widget.
8. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings. 
9. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.
10. Change the settings of the **Button** widget as follows:
    1.  Double-click the **Button** widget to open the **Action Button** dialog box.
    2.  For Caption, enter *Detect Sentiment*.
    3.  In the **Event** section, set **On click** to **Call a nanoflow**.
    4.  For **Nanoflow**, select the **DetectSentiment** nanoflow from the **TextAnalytics** > **USE_ME** folder.
    5.  Click **OK** to save the settings. 
11. Inside the **Data view** widget, add another **Data view** below the **Button** widget.
12. Change the settings of the **Data view** widget as follows:
    1. Double-click the **Data view** widget to open the **Data view** dialog box.
    2. Set **Entity (path)** to **TextAnalytics.SentimentDetector_Sentiment/TextAnalytics.Sentiment**.
    3. Click **OK** to save the settings. 
    4. When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
13. Inside the **Data view** widget that you just created, add another **Data view**.
14. Change the settings of the second **Data view** widget as follows:
    1. Double-click the **Data view** widget to open the **Data view** dialog box.
    2. Set **Entity (path)** to **TextAnalytics.Sentiment_SentimentScore/TextAnalytics.SentimentScore**.
    3. Click **OK** to save the settings.  
    4. When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
14. Make sure you have [configured the license token](#configure-license-token).
15.  Run your app locally. You can perform sentiment detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-sentiment-detection.png" alt="runlocally-sentiment-detection" >}}

### 4.3 Performing Key Phrase Detection in Your Browser

Use the **CreateKeyPhraseDetector** microflow and the **DetectKeyPhrases** nanoflow to perform key phrase detection. Follow these steps to configure this key phrase detect action:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateKeyPhraseDetector*.    
    2. Add the **CreateKeyPhraseDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateKeyPhraseDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.
    
        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createkeyphrasedetector-microflow.png" alt="call-createkeyphrasedetector-microflow" >}}
    
    4.  Right-click the create object activity and select **Set $detector as return value** in the pop-up menu.
      
        {{< figure src="/attachments/appstore/app-services/text-analytics/createkeyphrasedetector-nanoflow.png" alt="createkeyphrasedetector-nanoflow" >}}
   
2. Add a **Data view** widget to your page.
3. Set the **CreateKeyPhraseDetector** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateKeyPhraseDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings. 
4. Inside the **Data view** widget, add a **Reference selector** widget.
5. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **TextAnalytics.Detector_InputLanguage/TextAnalytics.Language/TextAnalytics.Language.Name**.
   7. Click **OK** to save the settings.
6. Inside the **Data view** widget, add a **Text area** widget below the **Reference selector** widget.
7. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings.
8. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.
9. Change the settings of the **Button** widget as follows:
   1. Double-click the **Button** to open the **Action Button** dialog box.
   2. For Caption, enter *Detect Key Phrases*.
   3. In the **Event** section, set **On click** to **Call a nanoflow**.
   4. For **Nanoflow**, select the **DetectKeyPhrases** nanoflow from the **TextAnalytics** > **USE_ME** folder.
   5. Click **OK** to save the settings.
10. Inside the **Data view** widget, add a **Data grid** widget below the **Button** widget.
11. Change the settings of the **Data grid** widget as follows:
    1. Double-click the **Data grid** widget to open the **Edit Data Grid** dialog box.
    2. Go to the **Data source** tab.
    3. For the **Type** of the **Data source**, select **Association**.
    4. Set **Entity (path)** to **TextAnalytics.KeyPhraseDetector_KeyPhrases/TextAnalytics.KeyPhrase**.
    5. Click **OK** to save the settings.
    6.  When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
    7. If needed, drag a column in the data grid to move it to a different place.
12. Make sure you have [configured the license token](#configure-license-token).
13.  Run your app locally. You can perform key phrase detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-keyphrase-detection.png" alt="runlocally-keyphrase-detection" >}}

### 4.4 Performing Entity Detection in Your Browser

Use the **CreateEntityDetector** microflow and the **DetectEntities** nanoflow to perform entity detection. Follow these steps to configure this entity detect action:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateEntityDetector*.
    2. Add the **CreateEntityDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateEntityDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.
    
        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createentitydetector-microflow.png" alt="call-createentitydetector-microflow" >}}
        
    4. Right-click the create object activity and select **Set $detector as return value** in the pop-up menu.
    
       {{< figure src="/attachments/appstore/app-services/text-analytics/createentitydetector-nanoflow.png" alt="createentitydetector-nanoflow" >}}
    
2. Add a **Data view** widget to your page.
3. Set the **CreateEntityDetector** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateEntityDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings.   
4. Inside the **Data view** widget, add a **Reference selector** widget.
5. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **TextAnalytics.Detector_InputLanguage/TextAnalytics.Language/TextAnalytics.Language.Name**.
   7. Click **OK** to save the settings.
6. Inside the **Data view** widget, add a **Text area** widget below the **Reference selector** widget.
7. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings. 
8. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.
9. Change the settings of the **Button** widget as follows:
   1. Double-click the **Button** widget to open the **Action Button** dialog box.
   2. For Caption, enter *Detect Entities*.
   3. In the **Event** section, set **On click** to **Call a nanoflow**.
   4. For **Nanoflow**, select the **DetectEntities** nanoflow from the **TextAnalytics** > **USE_ME** folder.
   5. Click **OK** to save the settings.
10.  Inside the **Data view** widget, add a **Data grid** widget below the **Button** widget.
11. Change the settings of the **Data grid** widget as follows:
    1. Double-click the **Data grid** widget to open the **Edit Data Grid** dialog box.
    2. Go to the **Data source** tab.
    3. For the **Type** of the **Data source**, select **Association**.
    4. Set **Entity (path)** to **TextAnalytics.EntityDetector_Entities/TextAnalytics.Entity**. 
    5. Click **OK** to save the settings.
    6. When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
    7. If needed, drag a column in the data grid to move it to a different place.
12. Make sure you have [configured the license token](#configure-license-token).
13.  Run your app locally. You can perform entity detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-entities-detection.png" alt="runlocally-entities-detection" >}}

### 4.5 Performing PII Entity Detection in Your Browser

Use the **CreatePiiEntityDetector** microflow and the **DetectPiiEntities** nanoflow to perform PII entity detection. Follow these steps to configure this PII entity detect action:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreatePiiEntityDetector*.
    2. Add the **CreatePiiEntityDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreatePiiEntityDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.

        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createpiientitydetector-microflow.png" alt="call-createpiientitydetector-microflow" >}}
      
   4.  Right-click the create object activity and select **Set $detector as return value** in the pop-up menu.
   
       {{< figure src="/attachments/appstore/app-services/text-analytics/createpiientitydetector-nanoflow.png" alt="createpiientitydetector-nanoflow" >}}
   
2. Add a **Data view** widget to your page.
3. Set the **CreatePiiEntityDetector** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreatePiiEntityDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings.   
4. Inside the **Data view** widget, add a **Reference selector** widget.
5. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **TextAnalytics.Detector_InputLanguage/TextAnalytics.Language/TextAnalytics.Language.Name**.
   7. Click **OK** to save the settings. 
6. Inside the **Data view** widget, add a **Text area** widget below the **Reference selector** widget.
7. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings. 
8. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.
9. Change the settings of the **Button** widget as follows:
   1. Double-click the **Button** widget to open the **Action Button** dialog box.
   2. For Caption, enter *Detect PII Entities*.
   3. In the **Event** section, set **On click** to **Call a nanoflow**.
   4. For **Nanoflow**, select the **DetectPiiEntities** nanoflow from the **TextAnalytics** > **USE_ME** folder.
   5. Click **OK** to save the settings.
10. Inside the **Data view** widget, add a **Data grid** widget below the **Button** widget.
11. Change the settings of the **Data grid** widget as follows:
    1. Double-click the **Data grid** widget to open the **Edit Data Grid** dialog box.
    2. Go to the **Data source** tab.
    3. For the **Type** of the **Data source**, select **Association**.
    4. Set **Entity (path)** to **TextAnalytics.PiiEntityDetector_PiiEntities/TextAnalytics.PiiEntity**. 
    5. Click **OK** to save the settings.
    6. When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
    7. If needed, drag a column in the data grid to move it to a different place.
12. Make sure you have [configured the license token](#configure-license-token).
13.  Run your app locally. You can perform PII entity detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-pii-entities-detection.png" alt="runlocally-pii-entities-detection" >}}

### 4.6 Performing Syntax Detection in Your Browser

Use the **CreateSyntaxDetector** microflow and the **DetectSyntax** nanoflow to perform syntax detection. Follow these steps to configure this syntax detect action:

1.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateSyntaxDetector*.
    2. Add the **CreateSyntaxDetector** microflow from the **TextAnalytics** > **USE_ME** folder to the nanoflow.
    3.  Double-click the **CreateSyntaxDetector** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.

        {{< figure src="/attachments/appstore/app-services/text-analytics/call-createsyntaxdetector-microflow.png" alt="call-createsyntaxdetector-microflow" >}}

    4.  Right-click the create object activity and select **Set $detector as return value** in the pop-up menu.

        {{< figure src="/attachments/appstore/app-services/text-analytics/createsyntaxdetector-nanoflow.png" alt="createsyntaxdetector-nanoflow" >}}

2. Add a **Data view** widget to your page.
3. Set the **CreateSyntaxDetector** nanoflow as the data source of the **Data view** widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data source**, select **Nanoflow**.
   3. **Select** the **CreateSyntaxDetector** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings. 
4. Inside the **Data view** widget, add a **Reference selector** widget.
5. Change the settings of the **Reference selector** widget as follows:
   1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
   2. Go to the **Selectable objects** tab.
   3. Set **Source** to **Microflow**.
   4. Set the **Microflow** as **GetTranslatorSupportedLanguages**.
   5. Go to the **General** tab.
   6. Set **Data source** to **TextAnalytics.Detector_InputLanguage/TextAnalytics.Language/TextAnalytics.Language.Name**.
   7. Click **OK** to save the settings.  
6. Inside the **Data view** widget,  add a **Text area** widget below the **Reference selector** widget.
7. Change the settings of the **Text area** widget as follows:
   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **InputText** attribute from **Data view**.
   3. For **Label caption**, enter *Text*.
   4. Click **OK** to save the settings.   
8. Inside the **Data view** widget, add a **Button** widget below the **Text area** widget.
9. Change the settings of the **Button** widget as follows:
   1. Double-click the **Button** widget to open the **Action Button** dialog box.
   2. For Caption, enter *Detect Syntax*.
   3. In the **Event** section, set **On click** to **Call a nanoflow**.
   4. For **Nanoflow**, select the **DetectSyntax** nanoflow from the **TextAnalytics** > **USE_ME** folder.
   5. Click **OK** to save the settings. 
10. Inside the **Data view** widget, add a **Data grid** widget below the **Button** widget.
11. Change the settings of the **Data grid** widget as follows:
    1. Double-click the **Data grid** widget to open the **Edit Data Grid** dialog box.
    2. Go to the **Data source** tab.
    3. For the **Type** of the **Data source**, select **Association**.
    4. Set **Entity (path)** to **extAnalytics.SyntaxDetector_SyntaxTokens/TextAnalytics.SyntaxToken**. 
    5. Click **OK** to save the settings.
    6. When the **Question** dialog box asks if you want to automatically fill the contents of the data view, click **Yes**.
    7. If needed, drag a column in the data grid to move it to a different place.
12. Make sure you have [configured the license token](#configure-license-token).
13.  Run your app locally. You can perform syntax detection directly in the browser:

     {{< figure src="/attachments/appstore/app-services/text-analytics/runlocally-syntax-detection.png" alt="runlocally-syntax-detection" >}}

### 4.7 Checking Statistics on the Usage Dashboard {#check-usage}

The **Usage Dashboard** shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:

   * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
   * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **Text Analytics** in the list.
4. Click **Usage Dashboard** to show the usage details.

## 5 Read More

* [Text Analytics and Translation App](https://academy.mendix.com/link/paths/118/Text-Analytics-and-Translation-App)
