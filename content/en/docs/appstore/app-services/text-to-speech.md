---
title: "Text to Speech"
url: /appstore/app-services/text-to-speech/
category: "App Services"
description: "Describes the configuration and usage of the Text to Speech app service, which enables converting text into voice in your web apps."
tags: ["text to speech", "service", "app store", "marketplace", "component", "platform support"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Text to Speech](https://marketplace.mendix.com/link/component/118409) app service enables you to easily convert written text into human voice in your web applications. With this app service, you can build an app to work with the state-of-the-art of text to voice conversion, without building your own text-to-speech app from the scratch. All you need to do is drag and drop items and configure them.

Here is an overview of what the Text To Speech contains:

| Item                                        | Name                        |
| ------------------------------------------- | --------------------------- |
| [Predefined entities](#predefined-entities) | SpeechSynthesizer, Voice    |
| [Constants](#constants)                     | AWS_Default_Region |
| [Microflows](#microflows)                   | CreateSpeechSynthesizer, SynthesizeSpeech_MF     |
| [Nanoflows](#nanoflows)                     | SynthesizeSpeech            |
| [Widgets](#widgets)                         | AudioPlayer                 |

In most cases, you will only need what is contained in the **TextToSpeech** > **USE_ME** folder. The content in the **TextToSpeech** > **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service to easily convert written text into voice in your Mendix apps. You can perform some basic operations, such us synthesizing speech from given text with different language options, and playing synthesized audio with the **AudioPlayer** widget.

### 1.2 Features

This app service enables doing the following:

* Convert text to voice
* Support different language options
* Play synthesized audio with the **AudioPlayer** widget

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](/releasenotes/studio-pro/9.4/).

## 2 Installation

### 2.1 Obtaining a AWS credentials {#obtain-aws-credentials}

Text to Speech is a premium Mendix product that requires AWS authentication. To use this app service in your app, first you must obtain AWS credentials. For more information, see [AWS credentials](https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html).

### 2.2 Installing the Component in Your App

1. To download and install the Text to Speech app service in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer** and also in the **Cognitive AI widgets** category in the **Toolbox**.

2. To download and install the AWS Authentication Connector in your app, follow the instructions in the [Importing Content from the App Explorer](/appstore/general/app-store-content/#import) section in *Use Marketplace Content in Studio Pro*. After the app service is installed, you can see it in the **App Explorer**.

3. Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

#### 3.1.1 SpeechSynthesizer

The **SpeechSynthesizer** entity is a conceptual entity that incorporates all the information of the synthesized media document. It contains the text and synthesized audio string. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

{{< figure src="/attachments/appstore/app-services/text-to-speech/speechsynthesizer.png" alt="speechsynthesizer" >}}

| Attribute |Data Type | Description|
| --- | --- |---|
| `Text` | String |The text string need to be converted. |
| `Audio` | String |The base64-encoded audio data string. |

The **Voice** entity is an entity referenced from **SpeechSynthesizer** that incorporates all the information of the supported voice object.

{{< figure src="/attachments/appstore/app-services/text-to-speech/voice.png" alt="voice" >}}

| Attribute |Data Type | Description|
| --- | --- |---|
| `LanguageName` | String |The language name of the voice object. |
| `LanguageCode` | String |The [language code](#supported-languages) of the voice object. |
| `VoiceName` | String |The name of the voice object. |
| `VoiceId` | String |The UUID of the voice object. |
| `SampleRate` | String |The sample rate of voice. |
| `Description` | String |The text string of the voice description. |

There is a many-to-many association between the **SpeechSynthesizer** entity and the **Voice** entity.

### 3.2 Constants {#constants}

#### 3.2.1 AWS_Default_Region

The **AWS_Default_Region** constant provides a default AWS region configuration for an app that uses this app service. AWS Regions are separate geographic areas that AWS uses to house its infrastructure. These are distributed around the world so that customers can choose a region closest to them in order to host their cloud infrastructure there. The closer your region is to you, the better, so that you can reduce network latency as much as possible for your end-users.

### 3.3 Microflows {#microflows}

#### 3.3.1 CreateSpeechSynthesizer {#createspeechsynthesizer}

The **CreateSpeechSynthesizer** microflow takes **text**, **languageCode** and **credentials** from a voice object as input parameters, and returns a **speechSynthesizer** object that contains the based64-encoded audio string and text string. For instance, **languageCode** can be set to `en-US`. 

{{< figure src="/attachments/appstore/app-services/text-to-speech/createspeechsynthesizer.png" alt="createspeechsynthesizer" >}}

{{% alert color="info" %}}
For more information about language codes, see the [Supported Languages](#supported-languages) section.
{{% /alert %}}

#### 3.3.2 SynthesizeSpeech_MF

The **SynthesizeSpeech_MF** microflow takes **speechSynthesizer** and **credentials** object as an input parameter, syntheizes audio string from the input parameter, and updates the **speechSynthesizer** audio string parameter.

{{< figure src="/attachments/appstore/app-services/text-to-speech/synthesizespeech.png" alt="synthesizespeech" >}}

### 3.4 Nanoflows {#nanoflows}

#### 3.4.1 SynthesizeSpeech

The **SynthesizeSpeech** nanoflow takes **speechSynthesizer** and **credentials** object as an input parameter, syntheizes audio string from the input parameter, and updates the **speechSynthesizer** audio string parameter.

{{< figure src="/attachments/appstore/app-services/text-to-speech/synthesizespeech.png" alt="synthesizespeech" >}}

### 3.5 Widgets {#widgets}

#### 3.5.1 AudioPlayer {#audioplayer}

The core widget required is the **AudioPlayer** widget. You can make the following settings for the **AudioPlayer** widget:

* **General** tab
    * **Source**  – the value of the **Audio** attribute of a **speechSynthesizer** object
    * **Controls**  – determines if it offers controls to allow the end user to control audio playback, including volume, seeking, and pause/resume playback; this accepts a Boolean value

### 3.6 Supported Languages {#supported-languages}

| Language               | Language Code |
| ---------------------- | ------------- |
| Arabic                 | arb           |
| Chinese, Mandarin      | cmn-CN        |
| Danish                 | da-DK         |
| Dutch                  | nl-NL         |
| English, Australian    | en-AU         |
| English, British       | en-GB         |
| English, Indian        | en-IN         |
| English, New Zealand   | en-NZ         |
| English, South African | en-ZA         |
| English, US            | en-US         |
| English, Welsh         | en-GB-WLS     |
| French                 | fr-FR         |
| French, Canadian       | fr-CA         |
| Hindi                  | hi-IN         |
| German                 | de-DE         |
| Icelandic              | is-IS         |
| Italian                | it-IT         |
| Japanese               | ja-JP         |
| Korean                 | ko-KR         |
| Norwegian              | nb-NO         |
| Polish                 | pl-PL         |
| Portuguese, Brazilian  | pt-BR         |
| Portuguese, European   | pt-PT         |
| Romanian               | ro-RO         |
| Russian                | ru-RU         |
| Spanish, European      | es-ES         |
| Spanish, Mexican       | es-MX         |
| Spanish, US            | es-US         |
| Swedish                | sv-SE         |
| Turkish                | tr-TR         |
| Welsh                  | cy-GB         |

### 3.7 Configuring the AWS credentials {#configure-aws-credentials}

#### 3.7.1 For an App Deployed Locally or as a Mendix Free App

If you deploy your app locally or as a Mendix Free App, configure the AWS credentials in Studio Pro. Perform the following steps:

1. Create a microflow as follows:
    1. Name the microflow *GetCredential*. 
    2. Right-click the working area and select **Add** > **Activity** from the pop-up menu.
    3. Double-click the activity to open the **Action Activity** dialog box.
    4. Select **Get Static Credentials** action from **AWS Authentication** category as target object.
    5. Under **Input** section, fill **Access key ID**, and **Secret access key** as AWS credentials respectivly.
    6. Under **Output** section, update **Object name** as *Credentials*.
    7. Click **OK** to save the changes.
    8. Right-click the credentials action to *Set $Credentials as return value*.

2. Default AWS region configuration:
    1. In the App Explorer, go to **Settings** to open the [App Settings](/refguide/app-settings/) dialog box.
    2. On the **Configurations** tab, click **Edit** to open the **Edit Configuration** dialog box.
    3. On the **Constants** tab, create a new constant with the predefined constant **TextToSpeech.AWS_Default_Region**.
    4. Fill in the **Value** with the AWS region that you obtained.
    5. Click **OK** to save the settings.

    {{< figure src="/attachments/appstore/app-services/text-to-speech/awsregion-inmendix.png" alt="awsregion-inmendix" >}}

3. This is the microflow could help you to pass credentials object in calling all the service actions. When you finish building the app, click **Run Locally** to run your app locally or click **Run** to deploy it as a Mendix Free App. Then you can see the app service in your app.

#### 3.7.2 For an App Deployed in the Mendix Cloud

If you deploy your app in the Mendix Cloud, configure the AWS region in the [Developer Portal](/developerportal/deploy/environments-details/).

Before you deploy your app, configure the app **Constants** in the deployment package.

{{< figure src="/attachments/appstore/app-services/text-to-speech/awsregion-cloudportal.png" alt="awsregion-cloudportal" >}}

If you have already deployed your app, change the existing **AWS_Default_Region** constant value on the **Model Options** tab and restart the app.

{{< figure src="/attachments/appstore/app-services/text-to-speech/awsregion-envdetails.png" alt="awsregion-envdetails" >}}

#### 3.7.3 For an App Deployed in Your Own Environment

If you deploy your app in your own environment, you need to configure the AWS region in your own environment. For more information, see [Deployment](/developerportal/deploy/).

## 4 Usage

### 4.1 Converting Text to Speech in Your Browser

When you start from a blank app template in Mendix Studio Pro, follow the steps below to set up the text-to-speech conversion:

1. Create a nanoflow as follows:
    1. Name the nanoflow *CreateSpeechSynthesizer*.

    2. Add the **CreateSpeechSynthesizer** microflow from the **TextToSpeech** > **USE_ME** folder to the nanoflow.

    3. Double-click the **CreateSpeechSynthesizer** microflow in the nanoflow, change the settings as shown in the screenshot below, and click **OK**.

        {{< figure src="/attachments/appstore/app-services/text-to-speech/call-createspeechsynthesizer-microflow.png" alt="call-createspeechsynthesizer-microflow" >}}

        In this example, the **languageCode** is set to `''`, then the default language option `en-US` is used. You can also set it to a different [language code](#supported-languages). For more information about the parameters, see [CreateSpeechSynthesizer](#createspeechsynthesizer)

    4. Right-click the **CreateSpeechSynthesizer** microflow and select **Set $speechSynthesizer as return value** in the pop-up menu.

        {{< figure src="/attachments/appstore/app-services/text-to-speech/createspeechsynthesizer-nanoflow.png" alt="createspeechsynthesizer" >}}

2. Create a microflow as follows:
    1. Name the microflow *GetSupportedVoices*. 
    2. Right-click the working area and select **Add** > **Parameter** from the pop-up menu. 
    3. Double-click the parameter to open the **Parameter** dialog box.
    4. Set **Data type** to **Object** and select **SpeechSynthesizer** entity from **TextToSpeech** module as target object.
    5. For **Name**, enter *speechSynthesizer*.
    6. Click **OK** to save the changes.
    7. Add a retrieve object activity to the microflow.
    8. Double-click the retrieve object activity to open the **Retrieve Objects** dialog box.
    9. Set the **Source** to **By association**.
    10. Set **Association** to **$speechSynthesizer/SpeechSynthesizer_SupportedVoices**.
    11. Click **OK** to save the settings.
    12. Right-click the **GetSupportedVoices** microflow and select **Set $Voices as return value** in the pop-up menu.

        {{< figure src="/attachments/appstore/app-services/text-to-speech/getsupportedvoices-microflow.png" alt="getsupportedvoices-microflow" >}}

3. Add a **Data view** widget to your page.
4. Set the **GetCredential** microflow as the data source of the **Data view** widget as follows:
    1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
    2. For **Data source**, select **Microflow**.
    3. **Select** the **GetCredential** microflow for **Microflow**.
    4. Click **OK** to save the settings. 
5. Inside the GetCredential **Data view** widget, add a new **Data view** widget.
6. Set the **CreateSpeechSynthsizer** nanoflow as the data source of the **Data view** widget as follows:
    1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
    2. For **Data source**, select **Nanoflow**.
    3. **Select** the **CreateSpeechSynthsizer** nanoflow for **Nanoflow**.
    4. Click **OK** to save the settings.
7. Inside the **Data view** widget, add a **Text area** widget.
8. Change the settings of the **Text area** widget as follows:
    1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
    2. Set **Data source** to **SpeechSynthesizer_Voice/Voice/SpeechSynthesizer_Voice/SpeechSynthesizer/Text**.
    3. Click **OK** to save the settings.
9. Inside the **Data view** widget, add a **Reference selector** widget below the **Text area** widget.
10. Change the settings of the **Reference selector** widget as follows:
    1. Double-click the **Reference selector** widget to open the **Edit Reference Selector** dialog box.
    2. Go to the **Selectable objects** tab.
    3. Set **Source** to **Microflow**.
    4. Set the **Microflow** as **GetSupportedVoices**.
    5. Go to the **General** tab.
    6. Set **Data source** to **TextToSpeech.SpeechSynthesizer_Voice/TextToSpeech.Voice/TextToSpeech.Voice.Description**.
    7. For **Label caption**, enter *Language*.
    8. Click **OK** to save the settings.
11. Inside the **Data view** widget, add an [Audio player](#audioplayer) widget below the **Reference selector** widget.
12. Change the settings of the **Audio player** widget as follows:
    1. Double-click the **Audio Player** widget to open the **Audio Player** dialog box.
    2. On the **General** tab, set **Source** to **$currentObject/Audio** to bind the base64-encoded audio data string.
    3. Set **Controls** to **true**.

        {{< figure src="/attachments/appstore/app-services/text-to-speech/audioplayer-datasource.png" alt="audioplayer-datasource" >}}

    4. Click **OK** to save the settings.
13. Inside the **Data view** widget, add a **Button** widget below the **Audio player** widget.
14. Change the settings of the **Button** widget as follows:
    1. Double-click the **Button** widget to open the **Action Button** dialog box.
    2. For **Caption**, enter *Synthesize Speech*.
    3. In the **Event** section, set **On click** to **Call a nanoflow**.
    4. For **Nanoflow**, **Select** the **SynthesizeSpeech** nanoflow from the **TextToSpeech** > **USE_ME** folder.
    5. Click **OK** to save the settings. 
15. Make sure you have [configured the AWS credentials](#configure-aws-credentials).
16. Run your app locally. You can convert text to speech directly in the browser:

    {{< figure src="/attachments/appstore/app-services/text-to-speech/runlocally-text-to-speech.png" alt="runlocally-text-to-speech" >}}

### 4.2 Checking Statistics on the Usage Dashboard {#check-usage}

The **Usage Dashboard** shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and then do as follows:

    * If you have a trial, click [My Subscriptions](https://marketplace.mendix.com/link/mysubscriptions) on the left navigation menu. This page shows all the products that you have trials for.
    * If you have a subscription, click [Company Subscriptions](https://marketplace.mendix.com/link/company/subscriptions) on the left navigation menu. This page gives an overview of all the subscriptions of your organization.
3. Find **Text to Speech** in the list.
4. Click **Usage Dashboard** to show the usage details.

## 5 Read More

* [Build an App with Speech Synthesis and Recognition](https://academy.mendix.com/link/paths/119/Build-an-App-with-Speech-Synthesis-and--Recognition)
