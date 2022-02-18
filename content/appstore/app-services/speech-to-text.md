---
title: "Speech To Text"
category: "App Services"
description: " "
tags: ["speech to text", "service", "app store", "marketplace", "component", "platform support"]
---

## 1 Introduction

The [Speech To Text](https://marketplace.mendix.com/link/component/118408) app service enables you to build an app to convert speech to text with state-of-the-art speech recognition. With this app service, your app can easily convert speech into text and trigger actions that you have specified. All you need to do is drag and drop items and configure them.

Here is an overview of what Speech To Text contains:

| Item                                        | Name                             |
| ------------------------------------------- | -------------------------------- |
| [Predefined entities](#predefined-entities) | MediaDocument                    |
| [Constants](#constants)                     | LicenseToken, TokenEndpoint      |
| [Microflows](#microflows)                   | BatchTranscription, StartService |
| [Widgets](#widgets)                         | Microphone                       |

In most cases, you will only need what is contained in the **SpeechToText** > **USE_ME** folder. The content in the **SpeechToText** > **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service to convert voice into text and trigger custom actions in your Mendix apps. You can also customize these actions and set voice feedback messages that your app sends to users. You can offer users different language options in your Mendix app.

### 1.2 Features

This app service enables doing the following:

* Convert speech to text
* Support speech-triggered actions
* Support voice feedback messages
* Support the batch mode to implement speech conversion as a back-end service
* Support different language options

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4](/releasenotes/studio-pro/9.4).

## 2 Installation

### 2.1 Obtaining a License Token {#obtain-license-token}

Speech to Text is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this app service in your app, first you need to start a subscription or a trial to get a license token.

#### 2.1.1 Starting a Trial

A trial gives everyone in your company one-month access to the app service. The trial has a limitation with data usage up to 300 minutes. To start a trial, perform the following steps:

1. Go to the [Speech to Text](https://marketplace.mendix.com/link/component/118408) page in the marketplace.
2. Click **Try for Free** to open the **Start Your Free Trial** page. Here you can see the **Trial Details** for the app service.
3. Select the check box to agree to the **Terms & Conditions**.
4. Click **Enable Trial**. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than at least 15 minutes for the system to process your request. After your request is processed, you will receive an email that says the app service is ready to be used. 
6. Click the link in the order confirmation email to go to the Marketplace [Subscriptions](https://docs.mendix.com/appstore/general/app-store-overview#subscriptions) page and log in there. The **Subscriptions** page gives an overview of all the subscriptions of your organization.
7. Click **Translation** to open the [service management dashboard](https://docs.mendix.com/appstore/general/app-store-overview#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview#creating-binding-keys) section in the *Marketplace Overview* to create a license token.

#### 2.1.2 Subscribing to the App Service

1. Go to the [Speech to Text](https://marketplace.mendix.com/link/component/118408) page in the marketplace.
2. Click **Subscribe** to start a subscription.
3. Select your subscription plan.
4. Fill in [Technical Contact](https://docs.mendix.com/developerportal/collaborate/app-roles#technical-contact) information (**First Name**, **Last Name**, **Email Address**), billing account information, payments and other required information and then place the order. A page opens and confirms that the your request has been received.
5. Wait until your request is processed. It can take more than 15 minutes for the system to process your request. After your request is processed, the Technical Contact will receive an email that says the app service is ready to be used. 
6. Click the link in the order confirmation email to go to the Marketplace [Subscriptions](https://docs.mendix.com/appstore/general/app-store-overview#subscriptions) page and log in there. The **Subscriptions** page gives an overview of all the subscriptions of your organization.
7. Click **Translation** to open the [service management dashboard](https://docs.mendix.com/appstore/general/app-store-overview#service-management-dashboard).
8. Follow the instructions in the [Creating Binding Keys](/appstore/general/app-store-overview#creating-binding-keys) section in the *Marketplace Overview* to create a license token.

### 2.2 Downloading the Component from the Marketplace

1. Go to the [Speech to Text](https://marketplace.mendix.com/link/component/118408) page in the marketplace.
2. **Download** the *SpeechToText.mpk* file.
3. To add the Speech to Text app service to your app in Mendix Studio Pro, follow these steps:

   1.  In the **App Explorer**, right-click the app.
   2.  Click **Import module package** and then select *SpeechToText.mpk*.

       In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app.

       ![import-speech-to-text](attachments/speech-to-text/import-speech-to-text.png)

       {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

   3.  In the **Import Module** dialog box, click **Import**. 
   4.  Wait until a pop-up box states that the module was successfully imported. Click **OK**.
   5.  Open the **App Explorer**  to view the **SpeechToText** module. You can also find the app service in the **Cognitive AI widgets** category in the **Toolbox**.

4. Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

You have successfully added the Speech To Text resources to your app.

## 3 Configuration

### 3.1 Predefined Entities {#predefined-entities}

#### 3.1.1 MediaDocument

The **MediaDocument** entity is a conceptual entity that inherits from the **System.FileDocument** entity and incorporates all the information of media document. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![mediadocument](attachments/speech-to-text/mediadocument.png)

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| `Transcript`   | String | The base64-encoded audio data string.     |
| `LanguageCode` | String | The [language code](#supported-languages) of this media document. |

### 3.2 Constants {#constants}

#### 3.2.1 LicenseToken

The **LicenseToken** constant provides a valid license token for an app that uses this app service. As Speech to Text is a commercial product, no matter your app is deployed in the [Mendix Cloud](/developerportal/deploy/mendix-cloud-deploy), your own environment, or locally in Studio Pro, you need a valid license token and configure it correctly. For details on how to get and configure a license token, see the [Obtaining a License Token](#obtain-license-token) section and [Configuring the License Token](#configure-license-token) section.

#### 3.2.2 TokenEndpoint

The **TokenEndpoint** constant provides a valid endpoint of security token service for the back-end authentication of the cognitive speech-to-text service. The constant comes with a default value which points to the deployed security token service. The security token service issues security tokens that authenticate user's identity. 

### 3.3 Microflows{#microflows}

#### 3.3.1 StartService

The **StartService** microflow is a Java action which starts the Speech To Text service. It is used to set up a cognitive speech-to-text back-end server infrastructure, which is critical for realizing all the functions that Speech To Text provides.

![startservice](attachments/speech-to-text/startservice.png)

#### 3.3.2 BatchTranscript {#batchtranscript}

The **BatchTranscription** microflow takes a **MediaDocument** object as an input parameter and converts the based64-encoded audio string into text.

![batchtranscription](attachments/speech-to-text/batchtranscription.png)

### 3.4 Widgets {#widgets}

#### 3.4.1 Microphone {#microphone}

The only core widget required is the **Microphone** widget. You can make the following settings for the **Microphone** widget:

* **General** tab
   * **Enable language selection** – when set to **Yes**, your users can select different languages in your app
   * **language**  – sets the default language using a [language code](#supported-languages) (if empty, the default language is `en-US`)
* **Events** tab
  * **On transcript** – by binding a string attribute to the **transcript** property, you can use this attribute as a voice input parameter sent to the back-end service and set a custom action that is executed when the transcript is received
     * **transcript**  – sets a string attribute as the voice input parameter
     * **Action** – sets which action is executed when the transcript is received (if empty, no action is executed)
  * **On error** – by binding a string attribute to the **Error** property, you can obtain the error message raised by the back-end service and set a custom action that is executed when an error occurs
     * **Error** – sets a string attribute as the error message
     * **Action** – sets which action is executed when an error occurs
* **Voice to Action** tab
   *  **Enable action** – when set to **Yes**, the following custom settings for actions are enabled:
     * **Actions** – a list of actions to execute when a transcript matches an utterance
         * **Utterance** – a string template following natural language syntax or a valid JavaScript regular expression.
         * **Action** – the action that is executed when the received transcript matches an utterance
         * **Feedback** – the voice feedback provided to users when an action is triggered
   *  **Arguments** – the captured arguments in a transcript as a comma-separated list that are passed to **Actions**
   *  **Fallback message** – the message to notify users when no action is matched

### 3.5 Supported Languages {#supported-languages}

| Language                | Language Code |
| ----------------------- | ------------- |
| Arabic, Gulf            | ar-AE         |
| Arabic, Modern Standard | ar-SA         |
| Chinese, Simplified     | zh-CN         |
| Chinese, Traditional    | zh-TW         |
| Danish                  | da-DK         |
| Dutch                   | nl-NL         |
| English, Australian     | en-AU         |
| English, British        | en-GB         |
| English, Indian         | en-IN         |
| English, Irish          | en-IE         |
| English, New Zealand    | en-NZ         |
| English, Scottish       | en-AB         |
| English, South African  | en-ZA         |
| English, US             | en-US         |
| English, Welsh          | en-WL         |
| French                  | fr-FR         |
| French, Canadian        | fr-CA         |
| Farsi                   | fa-IR         |
| German                  | de-DE         |
| German, Swiss           | de-CH         |
| Hebrew                  | he-IL         |
| Hindi, Indian           | hi-IN         |
| Indonesian              | id-ID         |
| Italian                 | it-IT         |
| Japanese                | ja-JP         |
| Korean                  | ko-KR         |
| Malay                   | ms-MY         |
| Portuguese              | pt-PT         |
| Portuguese, Brazilian   | pt-BR         |
| Russian                 | ru-RU         |
| Spanish                 | es-ES         |
| Spanish, US             | es-US         |
| Tamil                   | ta-IN         |
| Telugu                  | te-IN         |
| Thai                    | th-TH         |
| Turkish                 | tr-T          |

### 3.6 Configuring the LicenseToken {#configure-license-token}

#### 3.6.1 For an App Deployed Locally or in a Sandbox

If you deploy your app locally, configure the license token in Studio Pro as follows:

1. In the App Explorer, go to **Settings** to open the [App Settings](/refguide/project-settings) dialog box.

2. On the **Configurations** tab, click **Edit** to open the **Edit Configuration** dialog box.

3. On the **Constants** tab, create a new constant with the predefined constant **SpeechToText.LicenseToken**.

4. Fill in the **Value** with the license token that you [obtained](#obtain-license-token).

5. Click **OK** to save the settings.

   ![licensetoken-inmendix](attachments/speech-to-text/licensetoken-inmendix.png)

6. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 3.6.2 For an App Deployed in the Mendix Cloud

If you deploy your app in the Mendix Cloud, configure the license token in the [Developer Portal](/developerportal/deploy/environments-details):

* Before you deploy your app, configure the app **Constants** in the deployment package

![licensetoken-cloudportal](attachments/speech-to-text/licensetoken-cloudportal.png)

* If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app

![licensetoken-envdetails](attachments/speech-to-text/licensetoken-envdetails.png)

#### 3.6.3 For an App Deployed in Your Own Environment

If you deploy your app in your own environment, you need to configure the license token in your own environment. For more information, see [Deployment](/developerportal/deploy/index).

## 4 Usage

### 4.1 Initializing Speech To Text When App Starts

It can be useful to run the Speech to Text service automatically when your app starts. The app service contains a Java action – the **StartService** microflow, which can start the Speech To Text service for you. You can use the [After startup](/refguide/project-settings#after-startup) setting in your app to call the **StartService** microflow.

1. In the App Explorer, go to **Settings**. The [App Settings](/refguide/project-settings) dialog box opens.
2. Go to the **Runtime** tab. 
3. Select the **StartService** microflow from the **SpeechToText** > **USE_ME** folder.
4. Set **After startup** to the microflow that calls the **StartService** microflow.

### 4.2 Converting Speech into Text in Your Browser

You can use Speech To Text to convert voice into text and then trigger a customizable action. To let the [Microphone](#microphone) widget convert speech, set these data source attributes: **transcript**, **Actions** and **Arguments**. 

Below are the steps to build an example web app from a blank app template which can convert speech to text and triggers actions:

1.  In your app module's domain model, create an entity and name it *Microphone*, with the following attributes:
   * `NewTranscript` (String)
   * `AllTranscript` (String)
   * `Arguments` (String)
   * `Error` (String) 
   
2.  Create a nanoflow as follows:
    1. Name the nanoflow *CreateMicrophoneObject*.
    2. Add a create object activity to the nanoflow.
    3. Double-click the create object activity to open the **Create Object** dialog box. 
    4. **Select** the **Microphone** entity as the **Entity** and click **OK**. 
    5.  Right-click the create object activity and select **Set $NewMicrophone as return value** in the pop-up menu.
      
        ![createmicrophoneentity-nanoflow](attachments/speech-to-text/createmicrophoneentity-nanoflow.png)
   
3. Add a **Data view** widget to your page.

4. Set the **CreateMicrophoneObject** nanoflow as the data source of the Data View widget as follows:
   1. Double-click the **Data view** widget to open the **Edit Data View** dialog box.
   2. For **Data Source**, select **Nanoflow** as the **Type**.
   3. **Select** the **CreateMicrophoneObject** nanoflow for **Nanoflow**.
   4. Click **OK** to save the settings.
   
5. Inside the **Data view** widget, add a [Microphone](#microphone) widget.

6.  Change the settings of the **Microphone** widget as follows:
    1. Double-click the **Microphone** widget to open the **Edit Microphone** dialog box. 
    2. Go to the **Events** tab. 
    3. For **transcript**, **Select** the **NewTranscript** attribute. In this way, the app will pick up the result of speech conversion. For more information, see the [On Transcript](#on-transcript) section.
    
7. Inside the **Data view**, add a **Text area** widget.

8. Change the settings of the **Text area** widget as follows:

   1. Double-click the **Text area** widget to open the **Edit Text Area** dialog box.
   2. For **Data source**, select the **NewTranscript** attribute from **Data view**.
   3. Click **OK** to save the settings. 

9. Make sure that you have [configured the license token](#configure-license-token).

8. Run your app locally. Your app should be able to convert voice to text and trigger the related actions that you set up.

### 4.3 Handling Microphone Events

Multiple events can be picked up by the [Microphone](#microphone) widget and can be used to build your customized event handling logic.

There are two main types of events that can be picked up by the **Microphone** widget, which are described in the sections below.

#### 4.3.1 On Transcript {#on-transcript}

By binding an attribute to the **transcript** event, the app can pick up the result of speech conversion. Upon successful transcription, this attribute will then store real-time speech to text transcription result of the natural speech segment, such as a change in speaker or a pause in the audio.

**transcript** takes a string attribute. You can define an attribute and bind this attribute to **transcript**. This attribute stores the result of text converted from voice. The app can trigger an action after the transcript is received. You can select the custom **Action** from a list of actions.

![microphone-ontranscript-sample](attachments/speech-to-text/microphone-ontranscript-sample.png) 

For example, you can set up the **Action** to append the transcription result of each segment (sentence) and show the transcription results of the whole long speech input.

![show-transcript-history](attachments/speech-to-text/show-transcript-history.png)

#### 4.3.2 On Error {#on-error}

By binding an attribute to the **Error** event, the app can pick up an error raised by the back-end service.

**Error** takes a string attribute. You can define an attribute and bind this attribute to **Error**. In a running app, when speech-to-text transcription fails, an error event will be triggered, and the error information will be populated to this **Error** attribute. The app can obtain this error message and trigger a custom action. You can select the custom **Action** from a list of actions.

![microphone-onerror-sample](attachments/speech-to-text/microphone-onerror-sample.png) 

For example, you can set up the **Action** to make the app show a pop-up window to show error details to users.

![microphone-event-onerror](attachments/speech-to-text/microphone-event-onerror.jpg)

### 4.4 Adding Speech-Triggered Actions to Your App

You an set up rules of speech recognition that trigger actions as follows:

1. Double-click the **Microphone** widget. The **Edit Microphone** widget opens.
2. Go to the **Voice to Action** tab.
3. For **Arguments**, select **Arguments** from **Data view**.
4.  For each action, set up an [Utterance](#utterance), an [Action](#actions) and a [Feedback](#feedback).

    {{% alert type="info" %}}IYou can use **New**, **Delete**, and **Edit** to manage all the **Actions**.{{% /alert %}}. 

If the transcript received by the **Microphone** widget matches an utterance that you have specified, the app will run the action and give users the voice feedback.

#### 4.4.1 Utterance {#utterance}

**Utterance** can be a string template following natural language syntax or a valid JavaScript regular expression. It is self-defined rules used for matching the transcripts on speech conversion. Some internal trie filters are implemented to extract the key point of short sentences. 

For instance, you can set **Utterance** as `{rotate|move} the model {0:deg} degree around {1:x|y|z} direction`. Then if you say `rotate model 35 degree around x direction`, the **Microphone** widget will match the transcript to this utterance and trigger an action that you set. In **Utterance**, you can use multiple parameters, similar to in JavaScript, for example `{order: name}`, so that it becomes more flexible.

#### 4.4.2 Actions {#actions}

You can select an **Action** from a list of actions. This action is triggered when the received transcript matches an utterance.

#### 4.4.3 Feedback {#feedback}

**Feedback** is an optional configuration for set action items of voice-to-action, which can be a string template following natural language syntax, which is provided to users after an action is triggered.

For instance, you can set **Feedback** as `model is rotated {0} degree around {1} direction`, with `{0}` and `{1}` being the parameters passed through **Arguments** in the **Microphone** widget.

![microphone-voicetoaction-sample](attachments/speech-to-text/microphone-voicetoaction-sample.png)

### 4.5 Using the Batch Mode

When you need to implement the speech conversion as a back-end service rather than in the user interface operation, batch transcription is your best option to convert any Mendix **mediaDocument** object into written text. In this case, use the [BatchTranscript microflow](#batchtranscript).

### 4.6 Checking Statistics on the Usage Dashboard

The **Usage** dashboard shows the real-time statistics about the usage of an app service. Perform the following steps to check the real-time statistics:

1. Log into the Marketplace.
2. Go to **My Marketplace** and click [Subscriptions](/appstore/general/app-store-overview#subscriptions) on the left navigation menu. The **Subscriptions** page gives an overview of all the subscriptions of your organization.
3. Click **Speech to Text** to open the [service management dashboard](/appstore/general/app-store-overview#service-management-dashboard). On the **Overview** tab, the **Usage** dashboard shows the real-time statistics.
