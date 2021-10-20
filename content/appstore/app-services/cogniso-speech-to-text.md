---
title: "Cogniso Speech To Text"
category: "App Services"
menu_order: 1
tags: ["speech to text", "service", "app store", "marketplace", "component", "platform support"]
draft: true
---

## 1 Introduction

The [Cogniso Speech To Text](https://marketplace.mendix.com/link/component/118590) app service on mendix cloud that enables you to easily convert voice and audio into written text in your web applications. The app service contains out-of-the-box Java actions, JavaScript actions, domain models, nanoflows, microflows, and a set of widgets that enable you to build apps to work with the voice and audio to text transcriptions with state-of-the-art speech recognition. Also included are whole functionalities and integrations that can be very helpful when building your own voice to text applications. All you need to do is drag and drop items and configure them.

This app service does the heavy-lifting for you so you do not have to build a voice to text application from scratch.

Here is an overview of what the CognisoSpeechToText contains:

| Item | Name |
| ---  | --- |
| [Predefined entities](#predefined-entities) | MediaDocument |
| [Constants](#constants) | LicenseToken, TokenEndpoint |
| [Microflow](#microflow) | BatchTranscription, StartService |
| [Nanoflow](#nanoflow) |  |
| [Java action](#java-action) |  |
| [Widgets](#widgets) | Microphone |

In most cases, you will only need what is contained in the **SpeechToText/USE_ME** folder. The content in the **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on mendix cloud that enables you to easily convert audio and voice into written text in your mendix applications. You can perform some basic operations, such us enable wake up message, switch different language options, customize voice to text action, setup voice to action feedback and much more.

### 1.2 Features

This app service enables doing the following with Microphone widget:

* Customize voice to text action
* Customize audio to text action
* Customize wake up message
* Enable voice to action feedback
* Switch different language options
* Translate non-English transcripts into English

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](../../releasenotes/studio-pro/9.4).

## 2 Installation

First, download the *CognisoSpeechToText.mpk* file for the [Cogniso Speech To Text](https://marketplace.mendix.com/link/component/118590) from the Marketplace. When you want to add the app service to your app in Mendix Studio Pro, follow these steps:

1. Right-click the project in the **Project Explorer**, click **Import module package**, and select the *CognisoSpeechToText.mpk*. 
2.  In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your project.

	![import-speech-to-text](attachments/cogniso-speech-to-text/import-speech-to-text.png)
	
	{{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard App Store content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

3. Click **Import** on the **Import Module** dialog box, and a pop-up stating that “The app was successfully imported into the project” will appear. Click **OK**.
4. Open the **Project Explorer** to view the CognisoSpeechToText module. You can see a collection of ready to use items under the CognisoSpeechToText folder. Besides, if you go to Toolbox window, you will also notice a collection of widgets are added to Toolbox widget list, under the **Cognitive AI widgets** category. 
5. After importing, you need to map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

Now you have succesfully added the Cogniso Speech To Text resources to your app.

## 3 Initializing Cogniso Speech To Text on App Startup

To use the Cogniso Speech To Text features, your app needs to be bound to the Cogniso Speech To Text service. This is achieved by executing a microflow when the app starts. The Cogniso Speech To Text contains a Java action called **StartService**, which can start the Cogniso Speech To Text service for you. Call this Java action from your app's after-startup microflow, and this will automatically start the 3D Viewer when the app starts. (running after startup usually means you want to run a specific tool all the time)

If you app does not have an after-startup microflow set, follow these steps:

1. Create a **Startup** microflow and add the **CognisoSpeechToText/USE_ME/StartService** Microflow to it.
2. Set the return type of the microflow to **Boolean** with a **Value** of **true**.
3.  Set this microflow as the **After startup** step via **Project Settings** > **Runtime** > [After startup](/refguide8/project-settings#after-startup).

If your project already has a microflow set to execute after startup, you need to extend it with the **CognisoSpeechToText/USE_ME/StartService** Microflow and configure it as described in the above steps. 

## 4 CognisoSpeechToText Content

### 4.1 Predefined Entities {#predefined-entities}

The **MediaDocument** entity is a conceptual entity that inherit from **System.FileDocument** entity and incorporates all the information of media document. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![mediadocument](attachments/cogniso-speech-to-text/mediadocument.png)

| Attribute | Description |
| --- | --- |
| **Transcript** | The base64-encoded audio data string. |
| **LanguageCode** | The language code of this media document. |

### 4.2 Constants {#constants}

The **LicenseToken** constant is used to provide a valid CognisoSpeechToText license token for the app that uses CognisoSpeechToText to be successfully deployed to [Mendix Licensed Cloud Node](/developerportal/deploy/mendix-cloud-deploy) or your own environment. As CognisoSpeechToText is a commercial product, to be able to use the CognisoSpeechToText functionalities in a deployed app, you will need a long term valid license token, and you need to set the value of the **LicenseToken** constant to that license token in the deployment environment setting.

However, if you only plan to try how CognisoSpeechToText works  (meaning, build and run an app that uses CognisoSpeechToText locally in Studio Pro or deploy to a Mendix Free App environment), you need to subscribe a trialed version, and set the value of the **LicenseToken** constant to that license token in the project environment setting.

For details on how to get a license token, see the [Obtaining a LicenseToken for Your App](#obtain) section below.

The **TokenEndpoint** constant is used to provide a valid endpoint of security token service for cognitive speech to text service backend authentication. The constant comes with default value which point to the production environment of deployed security token service. The security token service issue security tokens that authenticate user's identity. 

### 4.3 Microflow {#microflow}

The **BatchTranscription** microflow takes a **MediaDocument** object as an input parameter and convert the based64-encoded audio string into text.

![batchtranscription](attachments/cogniso-speech-to-text/batchtranscription.png)

The **StartService** microflow is used to set up a cognitive speech to text backend server infrastructure, which is critical for realizing all the functions that Cogniso Speech To Text provides. It is exposed as microflow actions.

![startservice](attachments/cogniso-speech-to-text/startservice.png)

#### 4.4 Widgets {#widgets}

#### 4.4.1 Core Widgets

The core widgets required to perform voice to text actions are described below.

#### 4.4.1.1 Microphone {#microphone}

This widget provides customization of voice to text actions.

For this widget to perform voice to text correctly, set the following properties:

* On the **General** tab, there are some optional customization options for changing the widget's behavior:
	* **Language**  – the option **Enable language selection** enable custom language settings to perform speech conversion in microphone widget.
		* **language** - determines which language to perform speech conversion in microphone widget; this accepts a String value, the default language is US-English.
	* **Wakeup**  – the option **Enable wakeup** determines whether to activate microphone via wakeup message
		* **wakeupMessage** - the valid string value which approximatly contain two-four words to activate the voice to action, if message is empty means actions are always activated. 
		* **wakeupResponse** - the valid string value to give voice response to user when the voice to action is activated. 
		* **maxIdleTime** - the number to deactivate the voice to action after the specified idle time in seconds. This value less or equals to zero means the microphone are on standby forever once activated.
* On the **Events** tab, there are some optional customization options for changing the widget's behavior:
	* **On transcript** – by binding a String attribute to the **transcript** property, you can use this attribute as an voice input parameter send to backend service to match with voice to text actions.
	* **On error** – by binding a String attribute to the **Error** property, you can obtain the error message raised by the Viewer and add custom actions to trigger when an error arises
* On the **Voice to Action** tab, there are some optional customization options for voice to text actions:
	* **Actions**  – the option **Enable action** determines whether to enable speech actions.
		* **Actions** – the actions to take when a transcript is matched
			* **Utterance** – the utterance of action item could be string template following natural language syntax or valid JavaScript regular expression.
			* **Action** – the action of action item triggered when received transcript matches action text.
			* **Feedback** – the voice feedback of action item provided to user after an action is to be activated.
		* **Arguments** – the captured arguments in transcript as comma separated list. This requires you to specify parameterized action text in above table.
		* **Fallback message** – the message to notify user when no matched action is found.
		* **Translate** – The option to translate non-English transcripts and utterances into English for syntax analysis, enable this when you want to use non-English languages.

## 5 Using Cogniso Speech To Text

Cogniso Speech To Text provides microphone widget to convert voice into text with customizable actions.

When you start from a blank app template in Mendix Studio Pro, you can follow the steps below to setup customizable voice to text actions quickly.

### 5.1 Converting Voice into Text in Your Browser

For the [Microphone](#microphone) widget to perform voice to text actions, three data source attributes should be set: **transcript**, **Actions** and **Arguments**. To match voice to text actions, pass captured arguments to triggered actions, a set of action items should be configured in Microphone widget.

Follow these steps to configure this voice to text action:
1. Place a [Microphone](#microphone) widget on the page.
2. Create an entity and call it *Microphone* in your app module's domain model.
3. Wrap the Microphone widget inside a new data view widget.
4. Create a nanoflow, call it *CreateMicrophoneObject*, and set this as the data source of the data view.
5. On the **Events** tab, set the transcript attribute of the Microphone widget by setting **transcript**.
6. On the **Voice to Action** tab, set the arguments attribute of the Microphone widget by setting **Arguments**.
7. On the **Voice to Action** tab, configure the matching actions of Microphone widget by setting **Utterance**, **Action** and **Feedback** of action items.
8. Run your app locally. You can now perform voice to text actions directly in the browser:

![runlocally-speech-to-text](attachments/cogniso-speech-to-text/runlocally-speech-to-text.png)

### 5.2 Customizing Wakeup Message {#experimental}

In this section, you will learn how to config wake-up message to wakeup the backend service automatically with two key attributes **Wakeup message** and **Wakeup response**. Please notify that this is an experimental feature.

Follow these steps to configure this wake-up message:
1. Enable wakeup message to active microphone.
2. Setup message with no more than two words to active the voice to action.
3. Setup voice response message to notify user when voice voice to action is activated.

![wakeup-message](attachments/cogniso-speech-to-text/wakeup-message.png)

### 5.3 Customizing Voice to Text Actions

In previous use case, you already finish basic settings of working microphone.

In this section, the voice to text action allows you to customize action items with Utterance, Actions and Voice Feedback respectivly. You can build a customize automate conversation scenario by make listing of speech matching rules. Once you get started with action items, you may want to manage those actions by click **New**, **Delete**, **Edit** these function buttons.

#### 5.3.1 Customizing Utterance

The utterance of action item can be string template following natural language syntax or valid JavaScript regular expression, it is self defined rules which triggered on speech conversion, we also have some interal trie filters to extract the key point of short sentence.

For instance, you can set short sentence as `{rotate|move} the model {0:deg} degree around {1:x|y|z} direction`, if you say `rotate model 35 degree around x direction`, microphone will matching this action to perform next move to execute actions.

#### 5.3.2 Setting Actions

Like other Mendix events, you can select from a list of customize actions for **Action**. This action will be triggered when received transcript matches action text.

#### 5.3.3 Setting Voice Feedback

The voice feedback of action item can be string template following natural language syntax, which provided to user after an action is to be activated.

For instance, you can set voice feedback as `model is rotated {0} degree around {1} direction` with `{0}` and `{1}` are parameters passed through Arguments in Microphone.

![microphone-voicetoaction-sample](attachments/cogniso-speech-to-text/microphone-voicetoaction-sample.png)

### 5.4 Handling Microphone Events

Multiple events can be picked up by the [Microphone](#microphone) widget and can be used to build your customized event handling logic.

There are two main types of events that can be picked up on the Microphone widget, which are described in the sections below.

#### 5.4.1 On Error {#on-error}

By selecting one attribute to set the **Error** event, you can pick up an error raised by the Microphone.

**Error** takes a String attribute. You can define an attribute and bind that attribute to this property. In an running app, when there's problem converting voice into text, the error event will be triggered, and the error information will be populated to this Error attribute. You can easily obtain this error message raised by microphone and add custom actions to trigger when error arises.

![microphone-event-onerror](attachments/cogniso-speech-to-text/microphone-event-onerror.png)

Like other Mendix events, you can select from a list of actions upon a Microphone error for **Action**. One possible use case is show a error pop up page to let user know the error details.

![microphone-onerror-sample](attachments/cogniso-speech-to-text/microphone-onerror-sample.png) 

#### 5.4.2 On Transcript {#on-transcript}

By selecting one attribute to set the **transcript** event, you can pick up result of speech conversion by the Microphone.

**transcript** takes a String attribute. You can define an attribute and bind that attribute to this property. This attribute store the result of convert voice into text, which matchs the action items in Microphone widget to trigger action. 

![microphone-event-onerror](attachments/cogniso-speech-to-text/microphone-event-onerror.jpg)

Like other Mendix events, you can select from a list of customize actions for **Action**. One possible use case is show the whole content of voice to text converting history.

![microphone-ontranscript-sample](attachments/cogniso-speech-to-text/microphone-ontranscript-sample.png) 

## 6 Others

### 6.1 Batching mode of speech conversion

In the previous section, we introduced the usage of microphone widget, any voice to text conversion are contained in microphone. While, sometimes you need to implement it in the backend service rather than user interface operations. In this case, batching scription is your best option to convert any mendix mediaDocument into written text.

## 7 Obtaining a LicenseToken to Deploy Your App {#obtain}

Cogniso Speech To Text is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this product in an app, you need to provide a valid **LicenseToken** as an environment variable in the deployment setting; otherwise, the Cognitive AI service features may not work in your app.

### 7.1 Obtaining a LicenseToken with trial version

When you just need to run your app with Cogniso Speech To Text locally or deploy as a Mendix Free App for testing and trial purposes, you will need a trial version of LicenseToken.

To receive information on how to get the license token for [Cogniso Speech To Text](https://marketplace.mendix.com/link/component/118590) trial version, contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket for Cognitive AI development team.

### 7.2 Configuring a LicenseToken for App Deployment

#### 7.2.1 Configuring the LicenseToken in Studio Pro

In Mendix Studio Pro, go to [Project Settings](/refguide8/project-settings) and follow these steps:

1. In the **Configurations** tab, click **Edit**. 
2. In the **Constants** tab of the dialog box, create a new constant with the predefined constant **CognisoSpeechToText.LicenseToken**.
3. Fill in the **Value** with your obtained LicenseToken.
4.  Click **OK** to confirm the settings.

	![licensetoken-inmendix](attachments/cogniso-speech-to-text/licensetoken-inmendix.png)

5. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 7.2.2 Configuring the LicenseToken in Developer Portal

Alternatively, you can add or update LicenseToken as a constant in the [Developer Portal](/developerportal/deploy/environments-details).

Before you deploy your app, configure the app **Constants** in the deployment package

![licensetoken-cloudportal](attachments/cogniso-speech-to-text/licensetoken-cloudportal.png)

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app:

![licensetoken-envdetails](attachments/cogniso-speech-to-text/licensetoken-envdetails.png)
