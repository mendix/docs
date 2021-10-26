---
title: "Cogniso Text Analytics"
category: "App Services"
menu_order: 1
tags: ["text analytics", "service", "app store", "marketplace", "component", "platform support"]
draft: true
---

## 1 Introduction

The [Cogniso Text Analytics](https://marketplace.mendix.com/link/component/118593) app service on mendix cloud that enables you to easily convert voice and audio into written text in your web applications. The app service contains out-of-the-box Java actions, JavaScript actions, domain models, nanoflows, microflows that enable you to build apps to work with state-of-the-art text analytics actions. This app service uses machine learning to find insights and relationships in text. Also identifies the language of the text; extracts key phrases, places, people, brands, or events; understands how positive or negative the text is; analyzes text using tokenization and parts of speech; and automatically organizes a collection of text files by topic. All you need to do is drag and drop items and configure them.

This app service does the heavy-lifting for you so you do not have to build a text analytics application from scratch.

Here is an overview of what the CognisoTextAnalytics contains:

| Item | Name |
| ---  | --- |
| [Predefined entities](#predefined-entities) | Detector, Language, Response, DominantLanguageDetector, DominantLanguage, SentimentDetector, Sentiment, SentimentScore, EntityDetector, Entity, PiiEntityDetector, PiiEntity, KeyPhraseDetector, KeyPhrase, SyntaxDetector, SyntaxToken |
| [Constants](#constants) | LicenseToken, TokenEndpoint |
| [Enumeration](#enumeration) | EntityType, PartOfSpeechTag, PiiEntityType, SentimentType |
| [Microflow](#microflow) | BatchTranscription, StartService |
| [Nanoflow](#nanoflow) |  |
| [Java action](#java-action) |  |
| [Widgets](#widgets) |  |

In most cases, you will only need what is contained in the **TextAnalytics/USE_ME** folder. The content in the **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on mendix cloud that enables you to easily identifies the language of the text; extracts key phrases, places, people, brands, or events; understands how positive or negative the text is; analyzes text using tokenization and parts of speech; and automatically organizes a collection of text files by topic in your mendix applications.

### 1.2 Features

This app service enables doing the following:

* Key phrase detection based on text
* Sentiment detection based on text
* Language detection based on text
* Entity detection based on text, such as organizations, locations, dates, and persons
* Syntax detection based on text
* Personally Identifiable Information (PII) detection based on text

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](../../releasenotes/studio-pro/9.4).

## 2 Installation

1. Go to the [Cogniso Text Analytics](https://marketplace.mendix.com/link/component/118593) component page in the Marketplace and download the *CognisoTextAnalytics.mpk* file.

2. To add the Cogniso Speech to Text app service to your app in Mendix Studio Pro, follow these steps:

   1. In the **App Explorer**, right-click the app.

   2. Click **Import module package** and then select *CognisoTextAnalytics.mpk*. 

   3. In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.

      ![import-text-analytics](attachments/cogniso-text-analytics/import-text-analytics.png)

      {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

   4. In the **Import Module** dialog box, click **Import**. 

   5. Wait until a pop-up box states that the module was successfully imported. Click **OK**.

   6. Open the **App Explorer**  to view the **CognisoTextAnalytics** module. You can also find the app service in the **Cognitive AI widgets** category in the **Toolbox**.

3. After importing, you need to map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

You have successfully added the Cogniso Speech To Text resources to your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

The **DominantLanguage** entity is an entity referenced from **DominantLanguageDetector** and **Language** that incorporates all the information of supported dominant language object to help you get confident score of dominant language from given text.

![dominantlanguage](attachments/cogniso-text-analytics/dominantlanguage.png)

| Attribute | Description |
| --- | --- |
| **ConfidenceScore** | The confident score of dominant language. |

The **Language** entity is a conceptual entity that incorporates all the information of supported language object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![language](attachments/cogniso-text-analytics/language.png)

| Attribute | Description |
| --- | --- |
| **Name** | The name of the language. |
| **Code** | The code of the language. |

The **Detector** entity is a conceptual entity that incorporates all the information of supported detector object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![detector](attachments/cogniso-text-analytics/detector.png)

| Attribute | Description |
| --- | --- |
| **InputText** | The input text of target detector. |

The **Sentiment** entity is an entity referenced from **SentimentDetector** and **SentimentScore** that incorporates all the information of supported sentiment object to help you perform sentiment analysis from given text.

![sentiment](attachments/cogniso-text-analytics/sentiment.png)

| Attribute | Description |
| --- | --- |
| **SentimentType** | The customized sentiment type enumeration. |

The **SentimentScore** entity is an conceptual entity that incorporates all the information of supported level of confidence of sentiment score detector object.

![sentimentscore](attachments/cogniso-text-analytics/sentimentscore.png)

| Attribute | Description |
| --- | --- |
| **Positive** | The level of confidence that The detector has in the accuracy of its detection of the POSITIVE sentiment. |
| **Negative** | The level of confidence that The detector has in the accuracy of its detection of the NEGATIVE sentiment. |
| **Neutral** | The level of confidence that The detector has in the accuracy of its detection of the NEUTRAL sentiment. |
| **Mixed** | The level of confidence that the detector has in the accuracy of its detection of the MIXED sentiment. |

The **Entity** entity is a conceptual entity that inherit from **TextAnalytics.Response** entity and referenced from **EntityDetector** that incorporates all the information of supported entity object to help you perform entity detection from given text.

![entity](attachments/cogniso-text-analytics/entity.png)

| Attribute | Description |
| --- | --- |
| **EntityType** | The customized entity type enumeration. |

The **PiiEntity** entity is a conceptual entity that inherit from **TextAnalytics.Response** entity and referenced from **PiiEntityDetector** that incorporates all the information of supported PII entity object to help you perform PII entity detection from given text.

![piientity](attachments/cogniso-text-analytics/piientity.png)

| Attribute | Description |
| --- | --- |
| **PiiEntityType** | The customized PII entity type enumeration. |

The **KeyPhrase** entity is a conceptual entity that inherit from **TextAnalytics.Response** entity and referenced from **KeyPhraseDetector** that incorporates all the information of supported key phrase object to help you perform key phrase detection from given text.

![keyphrase](attachments/cogniso-text-analytics/keyphrase.png)

| Attribute | Description |
| --- | --- |
|  |  |

The **SyntaxToken** entity is a conceptual entity that inherit from **TextAnalytics.Response** entity and referenced from **SyntaxDetector** that incorporates all the information of supported syntax token object to help you perform syntax token extraction from given text.

![syntaxtoken](attachments/cogniso-text-analytics/syntaxtoken.png)

| Attribute | Description |
| --- | --- |
| **index** | The index of the token |
| **PartOfSpeech** | The part of speech tag enumeration for the token. |

The **Response** entity is an conceptual entity that incorporates all the information of supported response data object. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![response](attachments/cogniso-text-analytics/response.png)

| Attribute | Description |
| --- | --- |
| **Text** | The word that was recognized in the source text. |
| **BeginOffset** | The zero-based offset from the beginning of the source text to the first character in the word. |
| **EndOffset** | The zero-based offset from the beginning of the source text to the last character in the word. |
| **ConfidenceScore** | The level of confidence that TextAnalytics module has in the accuracy of the detection. |

### 3.2 Constants {#constants}

The **LicenseToken** constant is used to provide a valid CognisoTextAnalytics license token for the app that uses CognisoTextAnalytics to be successfully deployed to [Mendix Licensed Cloud Node](/developerportal/deploy/mendix-cloud-deploy) or your own environment. As CognisoTextAnalytics is a commercial product and subject to a subscription fee, to be able to use the CognisoTextAnalytics functionalities in a deployed app, you will need a valid license token, and you need to set the value of the **LicenseToken** constant to that license token in the deployment environment setting.

However, if you only plan to try how CognisoTextAnalytics works  (meaning, build and run an app that uses CognisoTextAnalytics locally in Studio Pro or deploy to a Mendix Free App environment), you do not need to subscribe to get a license token. Therefore, you do not need to set a value for the **LicenseToken** constant, just leave it empty.

For details on how to get a license token, see the [Obtaining a LicenseToken to Deploy Your App](#obtain) section below.

The **TokenEndpoint** constant is used to provide a valid endpoint of security token service for cognitive speech to text service backend authentication. The constant comes with default value which point to the production environment of deployed security token service. The security token service issue security tokens that authenticate user's identity. 

### 3.3 Microflow {#microflow}

The **CreateDominantLanguageDetector** microflow takes **text** and **languageCode** string as an input parameters to create DominantLanguageDetector as return object from backend service.

![createdominantlanguagedetector](attachments/cogniso-text-analytics/createdominantlanguagedetector.png)

The **CreateEntityDetector** microflow takes **text** and **languageCode** string as an input parameters to create CreateEntityDetector as return object from backend service.

![createentitydetector](attachments/cogniso-text-analytics/createentitydetector.png)

The **CreateKeyPhraseDetector** microflow takes **text** and **languageCode** string as an input parameters to create CreateKeyPhraseDetector as return object from backend service.

![createkeyphrasedetector](attachments/cogniso-text-analytics/createkeyphrasedetector.png)

The **CreatePiiEntityDetector** microflow takes **text** and **languageCode** string as an input parameters to create CreatePiiEntityDetector as return object from backend service.

![createpiientitydetector](attachments/cogniso-text-analytics/createpiientitydetector.png)

The **CreateSentimentDetector** microflow takes **text** and **languageCode** string as an input parameters to create CreateSentimentDetector as return object from backend service.

![createsentimentdetector](attachments/cogniso-text-analytics/createsentimentdetector.png)

The **CreateSyntaxDetector** microflow takes **text** and **languageCode** string as an input parameters to create CreateSyntaxDetector as return object from backend service.

![createsyntaxdetector](attachments/cogniso-text-analytics/createsyntaxdetector.png)

### 3.4 Nanoflow {#nanoflow}

The **DetectDominantLanguage** nanoflow takes **languageDetector** object as an input parameter to get list of dominant languages.

![detectdominantlanguage](attachments/cogniso-text-analytics/detectdominantlanguage.png)

The **DetectEntities** nanoflow takes **entityDetector** object as an input parameter to get list of entities.

![detectentities](attachments/cogniso-text-analytics/detectentities.png)

The **DetectKeyPhrases** nanoflow takes **keyPhrasesDetector** object as an input parameter to get list of key phrases.

![detectkeyphrases](attachments/cogniso-text-analytics/detectkeyphrases.png)

The **DetectPiiEntities** nanoflow takes **piiEntitiesDetector** object as an input parameter to get list of Pii entities.

![detectpiientities](attachments/cogniso-text-analytics/detectpiientities.png)

The **DetectSentiment** nanoflow takes **sentimentDetector** object as an input parameter to get sentiment object.

![detectsentiment](attachments/cogniso-text-analytics/detectsentiment.png)

The **DetectSyntax** nanoflow takes **syntaxDetector** object as an input parameter to get list of syntax tokens.

![detectsyntax](attachments/cogniso-text-analytics/detectsyntax.png)

### 3.5 Enumeration {#enumeration}

The **SentimentType** is an enumeration that incorporates all the information of supported sentiment type.

![sentimenttype](attachments/cogniso-text-analytics/sentimenttype.png)

| Caption | Name |
| --- | --- |
| **Positive** | Positive |
| **Negative** | Negative |
| **Neutral** | Neutral |
| **Mixed** | Mixed |

The **EntityType** is an enumeration that incorporates all the information of supported entity type.

![entitytype](attachments/cogniso-text-analytics/entitytype.png)

| Caption | Name |
| --- | --- |
| **Person** | Positive |
| **Location** | Negative |
| **Organization** | Neutral |
| **Commerical Item** | Mixed |
| **Event** | Positive |
| **Date** | Negative |
| **Quantity** | Neutral |
| **Title** | Mixed |
| **Other** | Mixed |

The **PartOfSpeechTag** is an enumeration that incorporates all the supported part of speech tags.

![partofspeechtag](attachments/cogniso-text-analytics/partofspeechtag.png)

| Caption | Name |
| --- | --- |
| **Adjective** | Adjective |
| **Adposition** | Adposition |
| **Adverb** | Adverb |
| **Auxiliary** | Auxiliary |
| **Conjunction** | Conjunction |
| **Determiner** | Determiner |
| **Interjection** | Interjection |
| **Noun** | Noun |
| **Numeral** | Numeral |
| **Particle** | Particle |
| **Pronoun** | Pronoun |
| **Proper Noun** | Proper_Noun |
| **Punctuation** | Punctuation |
| **Subordinating Conjunction** | Subordinating_Conjunction |
| **Symbol** | Symbol |
| **Verb** | Verb |
| **Other** | Other |

The **PiiEntityType** is an enumeration that incorporates all the information of supported Personally Identifiable Information (PII) types.

![piientitytype](attachments/cogniso-text-analytics/piientitytype.png)

| Caption | Name |
| --- | --- |
| **Bank Account Number** | Bank_Account_Number |
| **Bank Routing** | Bank_Routing |
| **Credit Debit Number** | Credit_Debit_Number |
| **Credit Debit CVV** | Credit_Debit_CVV |
| **Credit Debit Expiry** | Credit_Debit_Expiry |
| **Pin** | Pin |
| **Email** | Email |
| **Address** | Address |
| **Name** | Name |
| **Phone** | Phone |
| **SSN** | SSN |
| **Date Time** | Date_Time |
| **Passport Number** | Passport_Number |
| **Driver ID** | Driver_Id |
| **URL** | URL |
| **Age** | Age |
| **User Name** | User_Name |
| **Password** | Password |
| **IP Address** | IP_Address |
| **MAC Address** | MAC_Address |
| **All** | All |

## 4 Using Cogniso Text Analytics

Cogniso Text Analytics provides actions that enables you to easily identifies the language of the text; extracts key phrases, understands how positive or negative the text is; analyzes text using tokenization and parts of speech.

When you start from a blank app template in Mendix Studio Pro, you can follow the steps below to setup customizable text analytic actions quickly.

### 4.1 Performing language detection in Your Browser

From the **CreateDominantLanguageDetector** microflow and **DetectDominantLanguage** nanoflow to perform language detection.

Follow these steps to configure this language detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreateDominantLanguageDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
4. Place a button, call it *Detect Dominant Language*, and set nanoflow **DetectDominantLanguage** as the action of events.
5. Place a templateGrid, set *Association* as data source type, set *DominantLanguage* as entity path 
6. Run your app locally. You can now perform language detection directly in the browser:

![runlocally-language-detection](attachments/cogniso-text-analytics/runlocally-language-detection.png)

### 4.2 Performing sentiment detection in Your Browser

From the **CreateSentimentDetector** microflow and **DetectSentiment** nanoflow to perform sentiment detection.

Follow these steps to configure this sentiment detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreateSentimentDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
3. Place a reference selector and set name of language entity from association as the data source.
4. Place a button, call it *Detect Sentiment*, and set nanoflow **DetectSentiment** as the action of events.
5. Place a data view, and set *Sentiment* from association as the data source
5. Place another data view inside of previous one, and set *SentimentScore* from association as the data source
6. Run your app locally. You can now perform sentiment detection directly in the browser:

![runlocally-sentiment-detection](attachments/cogniso-text-analytics/runlocally-sentiment-detection.png)

### 4.3 Performing key phrase detection in Your Browser

From the **CreateKeyPhraseDetector** microflow and **DetectKeyPhrases** nanoflow to perform key phrase detection.

Follow these steps to configure this key phrase detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreateKeyPhraseDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
4. Place a button, call it *Detect Key Phrases*, and set nanoflow **DetectKeyPhrases** as the action of events.
5. Place a grid, set *Association* as data source type, set *KeyPhrase* as entity path
6. Run your app locally. You can now perform key phrase detection directly in the browser:

![runlocally-keyphrase-detection](attachments/cogniso-text-analytics/runlocally-keyphrase-detection.png)

### 4.4 Performing entity detection in Your Browser

From the **CreateEntityDetector** microflow and **DetectEntities** nanoflow to perform entity detection.

Follow these steps to configure this entity detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreateEntityDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
4. Place a button, call it *Detect Entities*, and set nanoflow **DetectEntities** as the action of events.
5. Place a grid, set *Association* as data source type, set *Entity* as entity path
6. Run your app locally. You can now perform entity detection directly in the browser:

![runlocally-entities-detection](attachments/cogniso-text-analytics/runlocally-entities-detection.png)

### 4.5 Performing PII entity detection in Your Browser

From the **CreatePiiEntityDetector** microflow and **DetectPiiEntities** nanoflow to perform PII entity detection.

Follow these steps to configure this PII entity detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreatePiiEntityDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
4. Place a button, call it *Detect PII Entities*, and set nanoflow **DetectPiiEntities** as the action of events.
5. Place a grid, set *Association* as data source type, set *Entity* as entity path
6. Run your app locally. You can now perform PII entity detection directly in the browser:

![runlocally-pii-entities-detection](attachments/cogniso-text-analytics/runlocally-pii-entities-detection.png)

### 4.6 Performing syntax detection in Your Browser

From the **CreateSyntaxDetector** microflow and **DetectSyntax** nanoflow to perform syntax detection.

Follow these steps to configure this syntax detect action:
1. Place a new data view on the page.
2. Create a nanoflow, call it *CreateSyntaxDetector*, and set this as the data source of the data view.
3. Place a textArea and set inputText of data view object as the data source.
4. Place a button, call it *Detect Syntax*, and set nanoflow **DetectSyntax** as the action of events.
5. Place a grid, set *Association* as data source type, set *SyntaxToken* as entity path
6. Run your app locally. You can now perform syntax detection directly in the browser:

![runlocally-syntax-detection](attachments/cogniso-text-analytics/runlocally-syntax-detection.png)

## 5 Obtaining a LicenseToken to Deploy Your App {#obtain}

Cogniso Text Analytics is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this product in an app, you need to provide a valid **LicenseToken** as an environment variable in the deployment setting; otherwise, the Cognitive AI service features may not work in your app.

### 5.1 Obtaining a LicenseToken with trial version

When you just need to run your app with Cogniso Text Analytics locally or deploy as a Mendix Free App for testing and trial purposes, you will need a trial version of LicenseToken.

To receive information on how to get the license token for [Cogniso Text Analytics](https://marketplace.mendix.com/link/component/118593) trial version, contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket for Cognitive AI development team.

### 5.2  Subscribing to Get a LicenseToken

To receive information on how to get the license token for [Cogniso Text Analytics](https://marketplace.mendix.com/link/component/118593) trial version, contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket for Cognitive AI development team.

### 5.2 Configuring a LicenseToken for App Deployment

#### 5.2.1 Configuring the LicenseToken in Studio Pro

In Mendix Studio Pro, go to [Project Settings](/refguide8/project-settings) and follow these steps:

1. In the **Configurations** tab, click **Edit**. 
2. In the **Constants** tab of the dialog box, create a new constant with the predefined constant **TextAnalytics.LicenseToken**.
3. Fill in the **Value** with your obtained LicenseToken.
4.  Click **OK** to confirm the settings.

	![licensetoken-inmendix](attachments/cogniso-text-analytics/licensetoken-inmendix.png)

5. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 5.2.2 Configuring the LicenseToken in Developer Portal

Alternatively, you can add or update LicenseToken as a constant in the [Developer Portal](/developerportal/deploy/environments-details).

Before you deploy your app, configure the app **Constants** in the deployment package

![licensetoken-cloudportal](attachments/cogniso-text-analytics/licensetoken-cloudportal.png)

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app:

![licensetoken-envdetails](attachments/cogniso-text-analytics/licensetoken-envdetails.png)
