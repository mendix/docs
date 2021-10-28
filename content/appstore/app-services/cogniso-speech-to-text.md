---
title: "Cogniso Speech To Text"
category: "App Services"
menu_order: 1
tags: ["speech to text", "service", "app store", "marketplace", "component", "platform support"]
draft: true

---

## 1 Introduction

The [Cogniso Speech To Text](https://marketplace.mendix.com/link/component/118590) app service on Mendix Cloud that enables you to easily convert voice and audio into written text in your web applications. The app service contains out-of-the-box Java actions, JavaScript actions, domain models, nanoflows, microflows, and a set of widgets that enable you to build apps to transcribe voice and audio to text with state-of-the-art speech recognition. Also included are whole functionality and integrations that can be very helpful when building your own voice-to-text applications. All you need to do is drag and drop items and configure them.

This app service does the heavy-lifting for you so you do not have to build a voice-to-text application from scratch.

Here is an overview of what the CognisoSpeechToText contains:

* [Predefined entities](#predefined-entities)
	* MediaDocument 
* [Constants](#constants)
	* LicenseToken
	* TokenEndpoint
* [Microflow](#microflow) 
	* BatchTranscription
	* StartService
* [Nanoflow](#nanoflow) 
* [Java action](#java-action) 
* [Widgets](#widgets) 
	* Microphone

In most cases, you will only need what is contained in the **SpeechToText** > **USE_ME** folder. The content in the **Internal** folder is for internal use only and you will not need it.

### 1.1 Typical Use Cases

You can use this app service on Mendix Cloud that enables you to easily convert audio and voice into written text in your mendix applications. You can perform some basic operations, such us enabling wakeup messages, switching different language options, customizing voice-to-text action, setting up voice-to-action feedback and much more.

### 1.2 Features

This app service enables doing the following with the Microphone widget:

* Customize voice-to-text actions
* Customize audio-to-text actions
* Customize wakeup messages
* Enable voice-to-action feedback
* Switch different language options
* Translate non-English transcripts into English

### 1.3 Prerequisites

This app service can only be used with Studio Pro 9 versions starting with [9.4.0](releasenotes/studio-pro/9.4).

## 2 Installation

1. Go to the [Cogniso Speech to Text](https://marketplace.mendix.com/link/component/118590) component page in the Marketplace and download the *CognisoSpeechToText.mpk* file.

2.  To add the Cogniso Speech to Text app service to your app in Mendix Studio Pro, follow these steps:

    1. In the **App Explorer**, right-click the app.
    2. Click **Import module package** and then select *CognisoSpeechToText.mpk*. 

       ![import-speech-to-text](attachments/cogniso-speech-to-text/import-speech-to-text.png)

       In the **Import Module** dialog box, **Add as a new module** is the default option when the module is being downloaded for the first time, which means that new entities will be created in your app.

       {{% alert type="warning" %}}If you have made any edits or customization to a module that you have already downloaded, be aware of the **Replace existing module** option. This will override all of your changes with the standard Marketplace content, which will result in the creation of new entities and attributes, the deletion of renamed entities and attributes, and the deletion of their respective tables and columns represented in the database. Therefore, unless you understand the implications of your changes and you will not update your content in the future, making edits to the downloaded modules is not recommended.{{% /alert %}}

    3. In the **Import Module** dialog box, click **Import**. 
    4. Wait until a pop-up box states that the module was successfully imported. Click **OK**.
    5. Open the **App Explorer**  to view the **CognisoSpeechToText** module. You can also find the app service in the **Cognitive AI widgets** category in the **Toolbox**.
3. Map the **Administrator** and **User** module roles of the installed modules to the applicable user roles in your app.

You have successfully added the Cogniso Speech To Text resources to your app.

## 3 Initializing Cogniso Speech To Text When App Starts

To use the Cogniso Speech To Text features, bind your app to the Cogniso Speech To Text service. To do this, execute a microflow when the app starts. 

* If you app has an after-startup microflow set, perform the following steps:

  1. Go to the after-startup microflow set in your app.
  
   	 {{% todo %}}[image]{{% /todo %}}

  2. From the after-startup microflow set, call the a Java action **StartService** , which can start the Cogniso Speech To Text service. This automatically starts the 3D Viewer when the app starts. To run a tool after the app starts usually means you want to run a specific tool all the time.
  3. Extend the microflow with the **SpeechToText/USE_ME/StartService** microflow.
  4. Set the return type of the microflow to **Boolean** with a **Value** of **true**.
  5. On the menu bar, go to a **App Settings** > **Runtime** > [After startup](/refguide/project-settings#after-startup) to set the **Startup** microflow as the **After startup** step.

* If your app does not have an after-startup microflow set, perform the following steps:

  1. Create a **Startup** microflow and add the **SpeechToText/USE_ME/StartService** Microflow to it.
  2. Set the return type of the microflow to **Boolean** with a **Value** of **true**.
  3. On the menu bar, go to **App Settings** > **Runtime** > [After startup](/refguide/project-settings#after-startup) to set the **Startup** microflow as the **After startup** step.

## 4 Configuration

### 4.1 Predefined Entities {#predefined-entities}

The **MediaDocument** entity is a conceptual entity that inherits from the **System.FileDocument** entity and incorporates all the information of media document. You can choose to inherit from this entity, set an association to the entity, or copy this entity to your module.

![mediadocument](attachments/cogniso-speech-to-text/mediadocument.png)

| Attribute        | Data Type | Description|
| ---------------- | ---- | -----------|
| **Transcript**   | String | The base64-encoded audio data string.     |
| **LanguageCode** | String | The language code of this media document. |

### 4.2 Constants {#constants}

#### 4.2.1 Lincese Token

The **LicenseToken** constant is used to provide a valid CognisoSpeechToText license token for the app that uses CognisoSpeechToText to be successfully deployed to [Mendix Licensed Cloud Node](/developerportal/deploy/mendix-cloud-deploy) or your own environment. As CognisoSpeechToText is a commercial product, to be able to use the CognisoSpeechToText fucntionality in a deployed app, you  need a long term valid license token, and you need to set the value of the **LicenseToken** constant to that license token in the deployment environment setting.

However, if you only plan to try how CognisoSpeechToText works, that is to say, you will only build and run an app that uses CognisoSpeechToText locally in Studio Pro or deploy to a Mendix Free App environment, then you need to subscribe a trial version, and set the value of the **LicenseToken** constant to that license token in the project environment setting.

For details on how to get a license token, see the [Obtaining a LicenseToken for Your App](#obtain) section below.

#### 4.2.2 TokenEndpoint

The **TokenEndpoint** constant is used to provide a valid endpoint of security token service for the back-end authentication of the cognitive speech-to-text service. The constant comes with a default value which points to the production environment of deployed security token service. The security token service issues security tokens that authenticate user's identity. 

### 4.3 Microflow {#microflow}

#### 4.3.1 BatchTranscript

The **BatchTranscription** microflow takes a **MediaDocument** object as an input parameter and converts the based64-encoded audio string into text.

![batchtranscription](attachments/cogniso-speech-to-text/batchtranscription.png)

#### 4.3.2 StartService

The **StartService** microflow is used to set up a cognitive speech-to-text back-end server infrastructure, which is critical for realizing all the functions that Cogniso Speech To Text provides. It is exposed as microflow actions.

![startservice](attachments/cogniso-speech-to-text/startservice.png)

### 4.4 Widgets {#widgets}

#### 4.4.1 Core Widgets

The core widgets required to perform voice-to-text actions are described below.

##### 4.4.1.1 Microphone {#microphone}

This Microphone widget provides the customization of voice-to-text actions.

For this widget to perform voice to text correctly, set the following properties:

*   **General** tab
  * **Enable language selection** – when set to **Yes**, custom language settings are enabled
    * **language**  – determines which language to use for speech conversion (default language: US-English, data type: String)
  * **Enable wakeup** – when set to **Yes**, the following custom language settings for speech conversion are enabled:
    * **wakeupMessage**  – the valid string value which approximately contains two-four words to activate the voice-to-text action (if the message is empty, the actions are always activated) {{% todo %}}[what is two-four words?]{{% /todo %}}
    * **wakeupResponse** – the valid string value to give voice response to users when the voice-to-text action is activated.
    * **maxIdleTime** – the number of seconds after which the voice-to-text action is deactivated (if the value is less or equals to zero, the microphone is always on standby once activated)
* **Events** tab
  * **On transcript** – by binding a String attribute to the **transcript** property, you can use this attribute as a voice input parameter sent to back-end service to match with voice-to-text actions
    * **transcript**
    * **Action**
  * **On error** – by binding a String attribute to the **Error** property, you can obtain the error message raised by the Viewer and add custom actions to trigger when an error occurs
    * **Error**
    * **Action**
* **Voice to Action** tab
  * **Actions**  – the option **Enable action** determines whether to enable speech actions
    * **Actions** – the actions to take when a transcript is matched
      * **Utterance** – the utterance of action item can be a string template following natural language syntax or a valid JavaScript regular expression.
      * **Action** – the action of action item triggered when the received transcript matches action text
      * **Feedback** – the voice feedback of action item provided to users after an action is to be activated.{{% todo %}}[what is to-be activated?]{{% /todo %}}
      
    * **Arguments** – the captured arguments in transcript as a comma-separated list. This requires you to specify parameterized action text in above table.{{% todo %}}[which table?]{{% /todo %}}
    
    * **Fallback message** – the message to notify users when no matched action is found.
    
    * **Translate** – the option to translate non-English transcripts and utterances into English for syntax analysis (enable this when you want to use non-English languages)
* **Common** tab
* **Appearance** tab

## 5 Using Cogniso Speech To Text

Cogniso Speech To Text provides the Microphone widget to convert voice into text with customizable actions.

When you start from a blank app template in Mendix Studio Pro, follow the steps below to set up customizable voice-to-text actions quickly.

### 5.1 Converting Voice into Text in Your Browser

To let the [Microphone](#microphone) widget perform voice-to-text actions, set these three data source attributes: **transcript**, **Actions** and **Arguments**. To match voice-to-text actions, pass captured arguments to triggered actions, configure a set of action items in the Microphone widget.

Follow these steps to configure this voice-to-text action:

1. Add a [Microphone](#microphone) widget on the page.
2. Create an entity and name it *Microphone* in your app module's domain model.
3. Wrap the Microphone widget inside a new data view widget.
4. Create a nanoflow and name it *CreateMicrophoneObject*
5. Set the nanoflow as the data source of the data view.
6. Double-click the **Microphone** widget. The **Edit Microphone** dialog box opens.
7. Go to the **Events** tab, set the transcript attribute of the Microphone widget by setting **transcript**.
8. Go to the **Voice to Action** tab, set **Arguments** attribute of the Microphone widget.
9. On the **Voice to Action** tab, configure the matching actions of the Microphone widget by setting **Utterance**, **Action**, and **Feedback** of **Action** items.
10. Run your app locally. You can now perform voice-to-text actions directly in the browser.

![runlocally-speech-to-text](attachments/cogniso-speech-to-text/runlocally-speech-to-text.png)

### 5.2 Customizing Wakeup Message {#experimental}

In this section, you will learn how to configure wakeup message to wake up the back-end service automatically with two key attributes **Wakeup message** and **Wakeup response**.

{{% alert type="info" %}}The configuration of wakeup messages is an experimental feature.{{% /alert %}}

Follow these steps to configure this wakeup message:

1. Double-click the **Microphone** widget. The **Edit Microphone** dialog box opens.
2. On the **General** tab, select **Yes** for **Enable wakeup** to active the microphone.
3. Set up a **Wakeup message** with no more than two words to active the voice to action.
4. Set up a **Wakeup response** message to notify users when voice to action is activated.

![wakeup-message](attachments/cogniso-speech-to-text/wakeup-message.png)

5. Click **OK** to save the changes and close the dialog box.

You have made the basic settings of the Microphone widget.

### 5.3 Customizing Voice to Text Actions

The voice-to-text action allows you to customize **Action** items (**Utterance**, **Actions** and **Voice Feedback**). You can build a customized, automated conversation scenario by make listing of speech matching rules. You can use **New**, **Delete**, and **Edit** to create a new action, delete an existing action, and edit an existing action.

#### 5.3.1 Utterance

**Utterance** can be a string template following natural language syntax or a valid JavaScript regular expression. It is self-defined rules which are triggered on speech conversion. We also have some interal trie filters to extract the key point of short sentences.{{% todo %}}[what are interal trie filters?]{{% /todo %}}

For instance, you can set short sentence as `{rotate|move} the model {0:deg} degree around {1:x|y|z} direction`. Then if you say `rotate model 35 degree around x direction`, the Microphone widget will match this action to perform next move to execute actions.

#### 5.3.2 Actions

You can select from a list of customized actions for **Action**. This action is triggered when a received transcript matches action text.

#### 5.3.3 Voice Feedback

**Voice feedback** can be a string template following natural language syntax, which is provided to user after an action is to be activated.

For instance, you can set voice feedback as `model is rotated {0} degree around {1} direction`, with `{0}` and `{1}` being the parameters passed through **Arguments** in the Microphone widget.

![microphone-voicetoaction-sample](attachments/cogniso-speech-to-text/microphone-voicetoaction-sample.png)

### 5.4 Handling Microphone Events

Multiple events can be picked up by the [Microphone](#microphone) widget and can be used to build your customized event handling logic.

There are two main types of events that can be picked up by the Microphone widget, which are described in the sections below.

#### 5.4.1 On Error {#on-error}

By binding an attribute to the **Error** event, you can pick up an error raised by the Microphone widget.

**Error** takes a String attribute. You can define an attribute and bind that attribute to this property. In a running app, when there is a problem with converting voice into text, the error event will be triggered, and the error information will be populated to this Error attribute. You can easily obtain this error message raised by microphone and add custom actions to trigger when error arises.

![microphone-event-onerror](attachments/cogniso-speech-to-text/microphone-event-onerror.png)

You can select an **Action** from a list of actions upon a Microphone error, for example, the action can be to show an error pop-up window to provide error details to users.

![microphone-onerror-sample](attachments/cogniso-speech-to-text/microphone-onerror-sample.png) 

#### 5.4.2 On Transcript {#on-transcript}

By binding an attribute to the **transcript** event, you can pick up the result of speech conversion by the Microphone widget.

**transcript** takes a String attribute. You can define an attribute and bind that attribute to this property. This attribute stores the result of the voice-into-text conversion, which matches the action items in the Microphone widget to trigger action. 

![microphone-event-onerror](attachments/cogniso-speech-to-text/microphone-event-onerror.jpg)

Like other Mendix events, you can select from a list of customized actions for **Action**. One possible use case is show the whole content of the voice-to-text conversion history.

![microphone-ontranscript-sample](attachments/cogniso-speech-to-text/microphone-ontranscript-sample.png) 

## 6 Others

### 6.1 Batching mode of speech conversion

In the previous section, we introduced the usage of the icrophone widget, any voice to text conversion are contained in microphone. While, sometimes you need to implement it in the backend service rather than user interface operations. In this case, batching scription is your best option to convert any mendix mediaDocument into written text.

## 7 Obtaining a LicenseToken to Deploy Your App {#obtain}

Cogniso Speech To Text is a premium Mendix product that is subject to a purchase and subscription fee. To successfully use this product in an app, you need to provide a valid **LicenseToken** as an environment variable in the deployment setting; otherwise, the Cognitive AI service features may not work in your app.

### 7.1 Obtaining a LicenseToken with trial version

When you need to run your app with Cogniso Speech To Text locally or deploy as a Mendix Free App for testing and trial purposes, you need a trial version of LicenseToken.

To receive information on how to get the license token for [Cogniso Speech To Text](https://marketplace.mendix.com/link/component/118590) trial version, contact [Mendix Support](https://support.mendix.com/hc/en-us) and raise a ticket for Cognitive AI development team.

### 7.2 Configuring a LicenseToken for App Deployment

#### 7.2.1 Configuring the LicenseToken in Studio Pro

1. In Mendix Studio Pro, go to [App Settings](/refguide/project-settings).

1. In the **Configurations** tab, click **Edit**. 

2. In the **Constants** tab of the dialog box, create a new constant with the predefined constant **SpeechToText.LicenseToken**.

3. Fill in the **Value** with your obtained LicenseToken.

4. Click **OK** to confirm the settings.

   ![licensetoken-inmendix](attachments/cogniso-speech-to-text/licensetoken-inmendix.png)

5. When you finish building the app, click **Run** to deploy your app to the cloud.

#### 7.2.2 Configuring the LicenseToken in Developer Portal

Alternatively, you can add or update LicenseToken as a constant in the [Developer Portal](/developerportal/deploy/environments-details).

Before you deploy your app, configure the app **Constants** in the deployment package.

![licensetoken-cloudportal](attachments/cogniso-speech-to-text/licensetoken-cloudportal.png)

If you have already deployed your app, change the existing **LicenseToken** constant value on the **Model Options** tab and restart the app:

![licensetoken-envdetails](attachments/cogniso-speech-to-text/licensetoken-envdetails.png)
