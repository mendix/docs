---
title: "Cogniso Text To Speech"
category: "App Services"
menu_order: 1
tags: ["text to speech", "service", "app store", "marketplace", "component", "platform support"]
draft: true
---

## 1 Introduction

The [Cogniso Text To Speech](https://marketplace.mendix.com/link/component/118591) app service on mendix cloud enables you to easily convert written text into human voice in your web applications. The app service contains out-of-the-box Java actions, JavaScript actions, domain models, nanoflows, microflows, and a set of widgets that enable you to build apps to work with the state-of-the-art of text to voice conversion. Also, the whole functionality and integrations can be very helpful when building your own text to voice applications. All you need to do is drag and drop items and configure them.

This app service does the heavy-lifting for you so you do not have to build a text to voice application from scratch.

Here is an overview of what the CognisoTextToSpeech contains:

* [Predefined entities](#predefined-entities) 
	* SpeechSynthesizer
	* Voice
* [Constants](#constants)
	* LicenseToken,
	* TokenEndpoint
* [Microflow](#microflow)
	* CreateSpeechSynthesizer
* [Nanoflow](#nanoflow)
	* SynthesizeSpeech
* [Java action](#java-action)
* [Widgets](#widgets)
	* AudioPlayer

In most cases, you will only need what is contained in the **TextToSpeech** > **USE_ME** folder. The content in the **SpeechToText** > **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on mendix cloud that enables you to easily convert written text into voice in your mendix applications. You can perform some basic operations, such us synthesize speech from given text with different language options, play synthesized audio with AudioPlayer widget.

### 1.2 Features

This app service enables doing the following:

* Customize text to voice action
* Switch different language options
* Play synthesized audio with AudioPlayer widget

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](/releasenotes/studio-pro/9.4).

## 2 Installation

1. Go to the [Cogniso Text Analytics](https://marketplace.mendix.com/link/component/118593) component page in the Marketplace and download the *CognisoTextToSpeech.mpk* file.
2. To add the Cogniso Speech to Text app service to your app in Mendix Studio Pro, follow these steps:

   1. In the **App Explorer**, right-click the app.

   2. Click **Import module package** and then select *CognisoTextToSpeech.mpk* file.

      In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.

      ![import-text-to-speech](attachments/cogniso-text-to-speech/import-text-to-speech.png)

     {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

   3. In the **Import Module** dialog box, click **Import**. 
   4. Wait until a pop-up box states that the module was successfully imported. Click **OK**.
   5. Open the **App Explorer**  to view the **CognisoTextAnalytics** module. You can also find the app service in the **Cognitive AI widgets** category in the **Toolbox**.
3. After importing, you need to map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

You have successfully added the Cogniso Speech To Text resources to your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

The **SpeechSynthesizer** entity is a conceptual entity that incorporates all the information of synthesize media document. It contains the text and synthesized audio string. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![speechsynthesizer](attachments/cogniso-text-to-speech/speechsynthesizer.png)

| Attribute | Description |
| --- | --- |
| **Text** | The text string need to be converted. |
| **Audio** | The base64-encoded audio data string. |

The **Voice** entity is an entity referenced from **SpeechSynthesizer** that incorporates all the information of supported voice object.

![voice](attachments/cogniso-text-to-speech/voice.png)

| Attribute | Description |
| --- | --- |
| **LanguageName** | The language name of voice object. |
| **LanguageCode** | The language code of voice object. |
| **VoiceName** | The name of voice object. |
| **VoiceId** | The UUID of voice object. |
| **SampleRate** | The sample rate of voice. |
| **Description** | The text string of voice description. |

There are many-to-many association between SpeechSynthesizer and Voice entities.

### 3.2 Constants {#constants}

The **LicenseToken** constant is used to provide a valid CognisoTextToSpeech license token for the app that uses CognisoTextToSpeech to be successfully deployed to [Mendix Licensed Cloud Node](/developerportal/deploy/mendix-cloud-deploy) or your own environment. As CognisoTextToSpeech is a commercial product, to be able to use the CognisoTextToSpeech functionalities in a deployed app, you will need a long term valid license token, and you need to set the value of the **LicenseToken** constant to that license token in the deployment environment setting.

However, if you only plan to try how CognisoTextToSpeech works  (meaning, build and run an app that uses CognisoTextToSpeech locally in Studio Pro or deploy to a Mendix Free App environment), you need to subscribe a trialed version, and set the value of the **LicenseToken** constant to that license token in the project environment setting.

For details on how to get a license token, see the [Obtaining a LicenseToken for Your App](#obtain) section below.

The **TokenEndpoint** constant is used to provide a valid endpoint of security token service for cognitive text to speech service backend authentication. The constant comes with default value which point to the production environment of deployed security token service. The security token service issue security tokens that authenticate user's identity. 

### 3.3 Microflow {#microflow}

The **CreateSpeechSynthesizer** microflow takes **text** and **languageCode** from voice object as input parameters, also return the **speechSynthesizer** object that contains the based64-encoded audio string and text string.

![speechsynthesizer](attachments/cogniso-text-to-speech/speechsynthesizer.png)

### 3.4 Nanoflow {#nanoflow}

The **SynthesizeSpeech** nanoflow takes a **speechSynthesizer** as an input parameter, syntheize audio string from input parameter and update **speechSynthesizer** audio string parameter.

![synthesizeSpeech](attachments/cogniso-text-to-speech/synthesizeSpeech.png)

### 3.5 Widgets {#widgets}

#### 3.5.1 Core Widgets

The core widgets required to perform text-to-voice actions are described below.

#### 3.5.1.1 AudioPlayer {#audioplayer}

This widget provides customization of text to voice actions.

For this widget to perform text to voice correctly, set the following properties:

* **General** tab, there are some optional customization options for changing the widget's behavior:
	* **Source**  – the value of the Audio attribute of a speechSynthesizer object
	* **Controls**  – determines if it offers controls to allow the end user to control audio playback, including volume, seeking, and pause/resume playback; this accepts a Boolean value

## 4 Using Cogniso Text To Speech

Cogniso Text To Speech provides audioplayer widget to convert text into voice with customizable actions.

When you start from a blank app template in Mendix Studio Pro, you can follow the steps below to setup customizable text to voice actions quickly.

### 4.1 Converting Text into Voice in Your Browser

For the [AudioPlayer](#audioplayer) widget to perform text to voice actions, two data source attributes should be set: **Source** and **Controls**. To match text to voice actions, pass captured arguments to triggered actions, a set of action items should be configured in AudioPlayer widget.

Follow these steps to configure this text to voice action:
1. Place a [AudioPlayer](#audioplayer) widget on the page.
2. Wrap the Microphone widget inside a new data view widget.
3. Create a nanoflow, call it *CreateSpeechSynthesizer*, and set this as the data source of the data view.
4. Place a textArea, set *Text* from data view object as the data source, while place a reference selector, set description from association in the input group box.
5. Place a button, call it *Synthesize Speech*, and set nanoflow **SynthesizeSpeech** as the action of events.
6. On the **General** tab, set **Source** to **$currentObject/Audio**, by binding the base64-encoded audio data string.

	![audioplayer-datasource](attachments/cogniso-text-to-speech/audioplayer-datasource.png)

7. Run your app locally. You can now perform text to voice actions directly in the browser:

![runlocally-text-to-speech](attachments/cogniso-text-to-speech/runlocally-text-to-speech.png)

## 5 Obtaining a LicenseToken to Deploy Your App {#obtain}

Cogniso Text To Speech is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this product in an app, you need to provide a valid **LicenseToken** as an environment variable in the deployment setting; otherwise, the Cognitive AI service features may not work in your app.

### 5.1 Obtaining a LicenseToken with trial version

When you just need to run your app with Cogniso Text To Speech locally or deploy as a Mendix Free App for testing and trial purposes, you will need a trial version of LicenseToken.

To receive information on how to get the license token for [Cogniso Text To Speech](https://marketplace.mendix.com/link/component/118591) trial version, contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket for Cognitive AI development team.

### 5.2 Configuring a LicenseToken for App Deployment

#### 5.2.1 Configuring the LicenseToken in Studio Pro

In Mendix Studio Pro, go to [Project Settings](/refguide8/project-settings) and follow these steps:

1. In the **Configurations** tab, click **Edit**. 
2. In the **Constants** tab of the dialog box, create a new constant with the predefined constant **TextToSpeech.LicenseToken**.
3. Fill in the **Value** with your obtained LicenseToken.
4.  Click **OK** to confirm the settings.

	![licensetoken-inmendix](attachments/cogniso-text-to-speech/licensetoken-inmendix.png)

5. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 5.2.2 Configuring the LicenseToken in Developer Portal

Alternatively, you can add or update LicenseToken as a constant in the [Developer Portal](/developerportal/deploy/environments-details).

Before you deploy your app, configure the app **Constants** in the deployment package

![licensetoken-cloudportal](attachments/cogniso-text-to-speech/licensetoken-cloudportal.png)

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app:

![licensetoken-envdetails](attachments/cogniso-text-to-speech/licensetoken-envdetails.png)
