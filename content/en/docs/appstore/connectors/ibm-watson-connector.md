---
title: "IBM Watson Connector"
url: /appstore/connectors/ibm-watson-connector/
category: "Connectors"
description: "Describes using connectors with Mendix that simplify the use of various IBM Watson™ services"
tags: ["IBM", "Watson", "AI", "Translation", "Image Analysis", "Assistant", "Speech to Text", "Text to Speech", "Tone Analyzer", "Visual Recognition", "Face Detection", "Image Classification"]
aliases:
  - /partners/ibm/ibm-watson-connector
#If moving or renaming this doc file, implement a temporary redirect and let the team responsible for IBM Watson connectors and apps in the Marketplace know to change the URL in the documentation.
---

## 1 Introduction

IBM Watson™ is a suite of services which gives you access to a range of AI and Machine Learning techniques and applications. These services are available over the web and cover the following areas:

* AI Assistant
* Knowledge
* Vision
* Speech
* Language
* Empathy
* Data

You can find out more about IBM Watson on the [IBM Watson website](https://www.ibm.com/watson/products-services/).

The [IBM Watson Connector Suite](https://marketplace.mendix.com/link/component/2860/) in the Mendix Marketplace provides connectors which simplify the use of the Watson services. Including the IBM Watson Connector Suite in your app allows you to add microflow actions which make use of IBM Watson services. The IBM Watson Connector Suite is based on version 6.11.0 of the [IBM Watson SDK](https://github.com/watson-developer-cloud/java-sdk).

### 1.1 Prerequisites

The following prerequisites are required to use the IBM Watson Connector Suite:

#### 1.1.1 IBM Cloud{#IBMCloud}

To use IBM Watson services you must have an account on [IBM Cloud](https://www.ibm.com/cloud/). There are various pricing points for this, and there are free options available to allow you to try out IBM services. You can then add Watson services to projects on your IBM Cloud account: see [Getting started with Watson and IBM Cloud](https://cloud.ibm.com/docs/services/watson/index.html). Once you have added a service to your account you will be given credentials which you use each time you want to access the service.

To view the credentials:

* View your existing services from the IBM Cloud dashboard
* If the service is part of a project, click the name of the project that contains the service and you can view the credentials from the Credentials section of the project details page
* If the service is not part of a project, click the service name that you want to view

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/ibm-credentials.png" alt="The IBM cloud page where you get the service credentials" >}}

For more information see [Service credentials for Watson services](https://cloud.ibm.com/docs/services/watson/getting-started-credentials.html).

{{% alert color="warning" %}}
If you have an existing Watson service it may give a *Username* and *Password* in the credentials. To obtain credentials in the correct format, you will have to create a **new** service which has *API Key* and *URL* as the credentials. It is not possible to obtain the API Key/URL style of credentials for an existing service which uses Username/Password credentials.
{{% /alert %}}

If you are running your app on IBM Cloud and the Watson resources have been added to your IBM Cloud project, the credentials can be picked up automatically via VCAP. See the [Watson Service Configuration](#WatSerCon) section, below, for more information on VCAP. This section also covers the IBM Watson Connector Suite configuration for storing credentials. If you are testing your app locally, or in another environment, you will need to enter these credentials manually when you use the connector in your Mendix app.

#### 1.1.2 IBM Watson Connector Suite

Import the [IBM Watson Connector Suite](https://marketplace.mendix.com/link/component/2860/) into your project from the Marketplace. This will give you access to the connector actions within your microflows. IBM app templates for Watson have the suite already included.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/connectorlist.png" alt="The list of IBM Watson connector actions available in Mendix microflows" >}}

To use these actions, just drag them into your microflow. Each of the connectors is described in the following sections:

* [Watson Assistant](#WatsonAssistant)
* [Speech to Text](#SpeechToText)
* [Text to Speech](#TextToSpeech)
* [Tone Analyzer](#ToneAnalyzer)
* [Language Translator](#LanguageTranslator)
* [Visual Recognition](#VisualRecognition)

{{% alert color="info" %}}
Not all Watson services are currently supported by the IBM Watson Connector Suite. More services will be added over time.

These connectors are based on version 6.11.0 of the [Watson SDK](https://github.com/watson-developer-cloud/java-sdk).

If there is no connector for the service you want, you can use Mendix native REST to use the service yourself. See [How to Consume a REST Service](/howto/integration/consume-a-rest-service/).
{{% /alert %}}

## 2 Connector Actions: Assistant{#WatsonAssistant}

To use IBM Watson Assistant, you must first create an **assistant** for your IBM Cloud service. An assistant is given a **dialog skill** which defines the flow of a conversation for your assistant. Watson uses natural-language processing and machine learning to choose the appropriate response within the dialog skill.

The easiest way to set up an assistant is through the Watson Assistant Tool. Here you can create an assistant. You can give the assistant a sample skill or, alternatively, create a skill which supports your own dialog requirements and give this to your assistant. More information about assistants and dialog skills, and how they need to be set up, is available in the [Watson Assistant: Getting started tutorial](https://cloud.ibm.com/docs/services/assistant/getting-started.html#getting-started).

{{% alert color="info" %}}
There is no action in the IBM Watson Connector Suite to allow you to create or configure an assistant. If you wish to do this programmatically, you will need to use Mendix's native REST.
{{% /alert %}}

More information on the APIs for the IBM Watson Conversation service is available here: [Watson Assistant – API methods summary](https://cloud.ibm.com/docs/services/assistant/api-methods.html#api-methods-summary)

{{% alert color="info" %}}
Watson Assistant used to be called Watson Conversation.
{{% /alert %}}

There are two actions supporting Watson Assistant:

* Create session
* Send message

### 2.1 Assistant - Create Session

This action creates a new session for the [Watson Assistant](https://cloud.ibm.com/docs/services/assistant/index.html). A session is used to send user input to an assistant and receive responses. It also maintains the state of the conversation. See [Watson Assistant API: Create a session](https://cloud.ibm.com/apidocs/assistant-v2#create-a-session) for more details.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/assistant-create-session.png" alt="Configuration of the Create Session action for Watson Assistant" >}}

#### 2.1.1 Apikey

This is a string containing the API key assigned to the Watson Assistant service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 2.1.2 Url

This is a string containing the URL assigned to the Watson Assistant service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 2.1.3 Assistant

This is an **Assistant** object in which the **Assistant ID** attribute contains the ID of an assistant you have set up for your IBM Cloud service. The Assistant ID of your Watson Assistant can be found by selecting **View API Details** from the assistant in your IBM Cloud service.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/assistant-api-details.png" alt="Where to find the Watson Assistant API details" >}}

#### 2.1.4 Variable (SessionContext)

This is an object of type *SessionContext* which is used to maintain the context of the current session with Watson Assistant. You will need to use the return variable to identify this object when you send messages to the assistant.

### 2.2 Assistant – Send Message

This action sends a message from your app to a specified session. This will use the assistant associated with this session to analyze the message and return an appropriate response. See [Watson Assistant API: Send user input to assistant](https://cloud.ibm.com/apidocs/assistant-v2#send-user-input-to-assistant) for more details.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/assistant-send-message.png" alt="Configuration dialog for the Assistant - Send Message action" >}}

#### 2.2.1 Apikey

This is a string containing the API key assigned to the Watson Assistant service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 2.2.2 Url

This is a string containing the URL assigned to the Watson Assistant service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 2.2.3 Session Context

This is an object of type *SessionContext* which contains the context for this conversation.

The SessionContext object contains the SessionId. This is a unique identifier which Watson Assistant uses to keep track of where you are in a conversation. This means that Watson Assistant can interpret your response in the light of what has been said before. For example, if you have been in a dialog about the weather, Watson Assistant will recognize that you are still in that part of the conversation.

#### 2.2.4 Input

This is a string containing the input to the conversation. This string cannot contain carriage return, newline, or tab characters, and it must be no longer than 2048 characters. 

#### 2.2.5 Variable (AssistantMessageResponse)

This is the name you wish to assign to an object of type AssistantMessageResponse which is the response received from Watson.

The AssistantMessageResponse contains the following:

* Input – the input which was sent to Watson; the same as the input string above
* Output – the response from Watson to the input
* ConversationId – the ConversationId; the same as the ConversationId passed in the Conversation context
* Association to *AssistantIntent* which gives more information on what Watson Assistant interpreted as the intention of the input
* Association to *AssistantEntity* which gives more information on which (dialog skill) entities Watson interpreted as being referred to

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/assistant.png" alt="Domain model for Watson Assistant connector actions" >}}

## 3 Connector Actions: Speech To Text{#SpeechToText}

This action uses the [IBM Watson Speech to Text service](https://cloud.ibm.com/docs/services/speech-to-text/index.html) to transcribe audio to text. Audio can be supplied in a number of common formats and the service uses machine intelligence to transcribe the text into one of a number of possible target languages.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/speechtotext.png" alt="Parameters for the Mendix connector action for the IBM Watson Speech to Text service" >}}

More information on the APIs for the IBM Watson Speech to Text service is available here: [IBM Cloud API Docs / Speech to Text](https://cloud.ibm.com/apidocs/speech-to-text).

### 3.1 Apikey

This is a string containing the API key assigned to the Speech to Text service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

### 3.2 Url

This is a string containing the URL assigned to the Speech to Text service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

### 3.3 Audio File

This is an object of type, or a specialization of type, FileDocument containing the audio stream to be analyzed. The stream must be encoded in the format described in the audio format parameter.

{{% alert color="info" %}}
Currently, transcribing speech uses a recorded sample - there are no options for transcribing a stream in real time using the Mendix IBM Watson Connector Suite.
{{% /alert %}}

### 3.4 Audio Format

The format of the audio file which is to be transcribed. These are listed in the enumeration AudioFormats.

All of the formats detailed on the IBM site are supported. For more detail see the [IBM Cloud documentation on audio formats](https://console.bluemix.net/docs/services/speech-to-text/audio-formats.html).

{{% alert color="info" %}}
Watson Speech to Text expects the sampling rate for BASIC files to be 8000 Hz. For RAW files, the connector doesn't currently support setting a custom sampling rate - files must have a sampling rate of 22050 Hz to be successfully processed. The rate for all other file types will be detected automatically. BASIC files are narrowband and can only be processed by a narrowband model.
{{% /alert %}}

### 3.5 Audio Language

This is the language in which the text detected in the speech file should be transcribed. These are listed in the AudioLanguage enumeration. More information on the supported languages is available in the API reference: [IBM Cloud API Docs / Speech to Text](https://cloud.ibm.com/apidocs/speech-to-text) on the IBM Cloud site.

### 3.6 Variable (SpeechReturn)

This is the name you want to give to the object of type SpeechReturn which is returned by the IBM Speech to Text Analyzer.

The domain model for this action allows for several interim responses. In this implementation, however, you will only get final results (with `_final` set to true) because the connector cannot analyze a stream, only a complete file.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/speechtotext-microflow.png" alt="Domain model for Speech to Text connector actions" >}}

If Watson detects that the speech file contains multiple sentences or speakers, each recognized sentence will be provided via a separate **Result** object.

The text which has been decoded is in the object of type **Alternative** in the **transcript** attribute. The **confidence** indicates the service's confidence in the transcription in a range 0 to 1. If the speech cannot be clearly recognized, there may be more than one alternative transcription of the same sentence.

## 4 Connector Actions: Text To Speech – Synthesize{#TextToSpeech}

This connector uses the [IBM Text to Speech service](https://cloud.ibm.com/docs/services/text-to-speech/index.html) to 'speak' some text. It converts a string containing text into a sound object corresponding to the synthesis of the text using a specified voice. This voice can sound male or female and is optimized for a particular language. Some voices can, depending on their capabilities, add extra vocal signals such as speed, timbre, or emotional cues.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/texttospeech-synthesize.png" alt="Configuration dialog for the Text To Speech - Synthesize action" >}}

More information on the APIs for the IBM Watson text to speech service is available here: [IBM Cloud API Docs / Text to Speech](https://cloud.ibm.com/apidocs/text-to-speech).

### 4.1 Apikey

This is a string containing the API key assigned to the Text to Speech service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

### 4.2 Url

This is a string containing the URL assigned to the Text to Speech service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

### 4.3 Text

This is a string containing the text to be 'spoken'. This can also contain additional XML instructions on how the text should be performed. For example you can make certain phrases slower or louder than Watson would normally speak them. Depending on the **Voice** chosen, you can add more sophisticated expression to the text. More information is available in IBM's [SSML documentation](https://cloud.ibm.com/docs/services/text-to-speech/SSML.html).

### 4.4 Voice

This is an object of type VoiceEnum which instructs the IBM Watson service how to synthesize the spoken text.

Note that the voice chosen should match the language of the **Text**. There is no validation that the two match and using, for example, a Spanish **Voice** to synthesize English **Text** may have unexpected results.

### 4.5 Audio Format

This is an object of type AudioFormats_TextToSpeech which specifies the format of the audio data which is returned as the spoken text.

{{% alert color="info" %}}
All formats except BASIC and RAW can be played back in a Mendix app using the community-supported [Audio Video Playback](https://marketplace.mendix.com/link/component/932/) widget available in the Marketplace.
{{% /alert %}}

### 4.6 Variable (Speech)

This is the name you wish to assign to an object of type Speech which contains the sound response received from Watson.

## 5 Connector Actions: Tone Analyzer – Analyze Tone{#ToneAnalyzer}

This connector uses the [Tone Analyzer](https://cloud.ibm.com/docs/services/tone-analyzer/index.html) to detect emotional and language tones in written text.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/toneanalyzer-analyzetone.png" alt="Configuration dialog for the Tone Analyzer - Analyze Tone action" >}}

More information on the APIs for the IBM Watson Analyze Tone service is available here: [IBM Cloud API Docs / Tone Analyzer](https://cloud.ibm.com/apidocs/tone-analyzer).

### 5.1 Apikey

This is a string containing the API key assigned to the Tone Analyzer service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

### 5.2 Url

This is a string containing the URL assigned to the Tone Analyzer service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

### 5.3 Text

This is a string containing the text to be analyzed. You can submit no more than 128 KB of total input content and no more than 1000 individual sentences. The text is analyzed as being in English.

### 5.4 Variable (ToneAnalyzerResponse)

This is the name you wish to assign to an object of type ToneAnalyzerResponse which is the response received from Watson. This is associated with the responses from the Tone Analyzer.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/toneanalyzer.png" alt="Domain model for Tone Analyzer connector actions" >}}

{{% alert color="info" %}}
In the previous version of the Tone Analyzer, tones were split into *Tone Categories*. This additional level of categorization has been removed from the current version of the Tone Analyzer.
{{% /alert %}}

You can retrieve tone information from two sources:

1. The tone of the whole document

    One or more **Tone** objects are linked to the ToneAnalyzerResponse object via the association **Document_Tones**. Each Tone object has a **Name** and a **Score** which indicates to what extent this tone exists in the document.

2. The tone of each sentence

    The document is also broken up into sentences using punctuation and line breaks.

    One or more SentenceTone objects, containing the sentence content (**Text**), are associated with the ToneAnalyzerResponse object via the association **Sentence_Tones**. There will be one SentenceTone object for each sentence.

    From each SentenceTone, one or more Tone objects are linked via the association **Tone_SentenceTone**. These contain the same information as for the tone of the whole document.

## 6 Connector Actions: Language Translator{#LanguageTranslator}

The [IBM Watson Language Translator](https://cloud.ibm.com/docs/services/language-translator/index.html) can translate text between languages programmatically.

More information on the APIs for the Language Translator service is available here: [IBM Cloud API Docs / Language Translator](https://cloud.ibm.com/apidocs/language-translator).

The IBM Watson Connector Suite provides three actions which allow you to use the Language Translator service through Mendix:

* Get Identifiable Languages
* Get Translation Models
* Translate Language

### 6.1 Translation – Get Identifiable Languages{#getIdentifiableLanguages}

This action is part of the Language Translator service and returns a list of languages which are recognized by the Watson Language Translation Service. Each language is represented by a code and a name. These languages are used as the input to the Translate language action, below.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/translation-getidentifiablelanguages.png" alt="Configuration dialog for the Translation - Get Identifiable Languages action" >}}

{{% alert color="info" %}}
Note that [Translate Language](#translate-language) cannot translate between any possible combination of languages. If translation between languages is not supported by Watson (for example, _Traditional Chinese_ to _Catalan_), the [Translate Language](#translate-language) action will throw an error. The language pairs which are supported by the [Translate Language](#translate-language) action can be identified from the results of the [Get Translation Models](#getTranslationModels) action.
{{% /alert %}}

#### 6.1.1 Apikey

This is a string containing the API key assigned to the Language Translator service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.1.2 Url

This is a string containing the URL assigned to the Language Translator service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.1.3 Variable (List of Language)

This is the name you wish to assign to a list of objects of type Language which is the response received from Watson.

Each language object consists of two attributes:

* Name – the English name of the language
* Code – a code representing the language (for example, **en** for English)

### 6.2 Translation - Get Translation Models{#getTranslationModels}

This action is part of the Language Translator service and returns a list of translation models in your Language Translator service. You can only translate between two languages if a model exists in the Language Translator service which maps the two languages.

IBM provides a number of standard models, and it is possible to extend these with your own models.

{{% alert color="info" %}}
The IBM Watson Connector Suite does not support the creation and deletion of custom models. you will need to do this using the native REST capabilities of Mendix.
{{% /alert %}}

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/translation-gettranslationmodels.png" alt="Configuration dialog for the Translation - Get Translation Models action" >}}

#### 6.2.1 Apikey

This is a string containing the API key assigned to the Language Translator service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.2.2 Url

This is a string containing the URL assigned to the Language Translator service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.2.3 Languages

This is a list of objects of type **Language**. You can create this list using the *Get Identifiable Languages* action, described [above](#getIdentifiableLanguages).

Each translation model which is retrieved from the service will have a pair of languages, a source language and a target language. The languages on the model are associated with the languages in the supplied list. These languages are used in the **Translate Language** action to identify the source and target languages.

More information can be found in the [Translation - Translate Language](#translate-language) section.

#### 6.2.4 Variable (List of TranslationModel)

This is the name you wish to assign to a list of objects of type TranslationModel which is the response received from Watson.

Each TranslationModel object is associated with two languages:

* via TranslationModel_SourceLanguage to the source language
* via TranslationModel_TargetLanguage for the language to be translated to

### 6.3 Translation – Translate Language{#translate-language}

This action is part of the Language Translator service and translates a piece of text from one language to another using the *default* translation model for that pair of languages.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/translation-translatelanguage.png" alt="Configuration dialog for the Translation - Translate Language action" >}}

The languages are not explicit in the parameters of the action, but are identified by associating the **Translation** object which is passed with two **Language** objects via the following associations:

* Translation_TargetLanguage – the language you are translating to
* Translation_SourceLanguage – the language you are translating from

You can create the objects of entity type Language using the *Get Identifiable Languages* action, described [above](#getIdentifiableLanguages).

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/translation.png" alt="Domain model for Translation connector actions" >}}

{{% alert color="info" %}}
Note that not all pairs of languages are supported. For example, you can translate to and from English and Spanish and English and Portuguese. However, there is no model in Watson to translate Spanish to Portuguese. The IBM Watson Connector Suite does not check whether there is a valid model before it passes the language pair to Watson.

The valid model pairs can be retrieved through the Get Translation Models action.

The translation will always be performed using the **default** translation model for the selected language pair. If you need to use a custom translation model, you will have to use the API of the Language Translator using native REST.
{{% /alert %}}

More information on the APIs for the IBM Watson Language Translation service is available here: [IBM Cloud API Docs / Language Translator](https://cloud.ibm.com/apidocs/language-translator).

#### 6.3.1 Apikey

This is a string containing the API key assigned to the Language Translator service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.3.2 Url

This is a string containing the URL assigned to the Language Translator service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 6.3.3 Translation

This is a translation object. For a successful translation it must have:

* a **Text** attribute containing the text to be translated
* an association to a **Language** object representing the source language of the text via the Translation_SourceLanguage association: this must be one of the supported languages for Language Translator
* an association to a **Language** object representing the target language of the text via the Translation_TargetLanguage association: this must be one of the supported languages for Language Translator and be supported by a translation model for translating between the source and target languages

#### 6.3.4 Variable (Translation)

This is the name you wish to assign to an object of type Translation which is the response received from Watson.

This object will contain the following attributes:

* **Text** – the original text to be translated
* **Output** – the text translated into the target language
* **WordCount** – the number of words in the original text
* **CharacterCount** – the number of characters in the original text

    and associations

* *Translation_TargetLanguage* – the language you have translated to
* *Translation_SourceLanguage* – the language you have translated from

## 7 Connector Actions: Visual Recognition{#VisualRecognition}

The [IBM Watson Visual Recognition service](https://cloud.ibm.com/docs/services/visual-recognition/index.html) uses deep learning algorithms to analyze images for scenes, objects, faces, and other content. The response includes keywords that provide information about the content.

The IBM Watson Connector Suite consists of five actions to classify images:

* [Classify Image](#classifyImage)
* [Create Classifier](#createClassifier)
* [Delete Classifier](#deleteClassifier)
* [Detect Faces](#detectFaces)
* [Get Classifiers](#getClassifiers)

### 7.1 Visual Recognition – Classify Image{#classifyImage}

This action passes an image to the Visual Recognition service which uses either its built-in classifiers or custom classifiers to analyze the image and identify the contents.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition-classifyimage.png" alt="Configuration dialog for the Visual Recognition - Classify Image action" >}}

More information on the APIs for the IBM Watson Visual Recognition service is available here: [IBM Cloud API Docs / Visual Recognition](https://cloud.ibm.com/apidocs/visual-recognition).

#### 7.1.1 Apikey

This is a string containing the API key assigned to the Visual Recognition service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.1.2 Url

This is a string containing the URL assigned to the Visual Recognition service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.1.3 Visual Request Object

This is an object of type **VisualRecognitionImage** which contains the image which is to be classified. The image must

* have a pixel density of at least 32X32 pixels per inch
* be less that 10MB
* be in one of the following formats
  * png
  * jpg
  * gif
  * tiff

#### 7.1.4 Classifiers

This is a list of the classifiers which Watson should use to classify the image. Before you use **Classify Image** you will need to get a list of available classifiers using the **Get Classifier** action.

{{% alert color="info" %}}
To use built-in IBM classifiers such as *default*, *food*, or *explicit*, you will need to create *Classifier* object for the classifier(s) you wish to use. Set the **Classifier Id** to the classifier_id of the IBM classifier. The built-in classifiers are described in the IBM documentation [Classify an image](https://cloud.ibm.com/apidocs/visual-recognition#classify-an-image).

If the Classifiers list is empty, classification will be performed using the _default_ classifier.
{{% /alert %}}

#### 7.1.5 Variable (List of Classifier)

This is the name of the list of Classifier objects returned from Watson.

Associated with each of the classifier objects will be zero or more **ClassifierClass** objects. Each of these contain the **Name** of content which Watson has identified using the classifier, and the **Score** which is an indication of the confidence that Watson has that it has correctly identified the content, with 1.0 indicating complete confidence in the identification.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition.png" alt="Domain model for Visual Recognition connector actions" >}}

### 7.2 Visual Recognition – Create Classifier{#createClassifier}

This action allows you to train a new classifier for the Visual Recognition service by uploading ZIP files containing images.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition-createclassifier.png" alt="Configuration dialog for the Visual Recognition - Create Classifier action" >}}

You can use a number of files which contain positive examples: images which depict the visual subject of this class. These are stored as **TrainingImagesZipFile** entities. The name of the class is in the *ClassName* attribute of the *TrainingImagesZipFile* entity. Each positive class is associated with the **Classifier** being created via the *Classifier_positiveTrainingImagesZipFiles* association.

One file contains negative examples: images which are visually similar to the positive images, but do not contain the visual subject of this classifier.

For example, if you want to have a classifier to identify different sorts of mammal, you could upload positive class image files "dog", "cat", "pig", and "horse", and a negative one containing images of reptiles.

Each ZIP file must

* have a maximum size of 100MB
* contain at least 10 images in jpg or png format (minimum recommended image resolution is 32X32 pixels)
* contain less than 10,000 images

{{% alert color="info" %}}
You cannot retrain an existing classifier.

It can take a substantial length of time (several minutes) to create a classifier. It cannot be used for classification until the **Status** is set to *Ready*. You can find the status of a classifier using the **Get Classifiers** action and looking at the value of the Status attribute in the Classifier entity.

Values for the classifier status are:

* ready
* training
* retraining
* failed
{{% /alert %}}

#### 7.2.1 Apikey

This is a string containing the API key assigned to the Visual Recognition service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.2.2 Url

This is a string containing the URL assigned to the Visual Recognition service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.2.3 Classifier

This is an object of type Classifier. This is associated with the following objects.

* One or more TrainingImagesZipFile objects via the association Classifier_positiveTrainingImagesZipFile; the positive example files described above
* One TrainingImagesZipFile object via the association Classifier_negativeTrainingImagesZipFile; the negative example file described above

The **Name** attribute of the Classifier is the name of the classifier which will be created by Watson. For example "Mammals" for a classifier identifying mammals.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition.png" alt="Domain model for Visual Recognition connector actions" >}}

#### 7.2.4 Variable (String)

This is the name of a string containing the ID of the new classifier.

### 7.3 Visual Recognition – Delete Classifier{#deleteClassifier}

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition-deleteclassifier.png" alt="Configuration dialog for the Visual Recognition - Delete Classifier action" >}}

#### 7.3.1 Apikey

This is a string containing the API key assigned to the Visual Recognition service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.3.2 Url

This is a string containing the URL assigned to the Visual Recognition service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.3.3 Classifier id

This is the id of the classifier which is to be deleted. The Classifier id is held in the *ClassifierId* attribute of the classifier and also returned as a string when a classifier is created within the Mendix app.

#### 7.3.4 Variable (Boolean)

The action returns *true* if the delete request is accepted. Otherwise it throws an error.

{{% alert color="info" %}}
You cannot delete an IBM built-in classifier, for example *default*, *food*, or *explicit*.

It may take several minutes to fully delete a classifier. Any quota for the maximum number of custom classifier models will not be updated until the classifier has been deleted fully.
{{% /alert %}}

### 7.4 Visual Recognition – Detect Faces{#detectFaces}

This action allows you to analyze and get data about faces in images. Responses can include estimated age and gender.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition-detectfaces.png" alt="Configuration dialog for the Visual Recognition - Detect Faces action" >}}

#### 7.4.1 Apikey

This is a string containing the API key assigned to the Visual Recognition service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.4.2 Url

This is a string containing the URL assigned to the Visual Recognition service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.4.3 Image

This is an object of type, or a specialization of, System.Image containing the image in which faces should be detected.

The image must

* have a pixel density of at least 32X32 pixels per inch
* be less that 10MB
* be in one of the following formats
  * *.png*
  * *.jpg*
  * *.gif*
  * *.tiff*

#### 7.4.4 Variable (List of Face)

This is the name you wish to assign to a list of objects of type Face. Each object contains information about a face which has been detected in the image.

Each face object will contain the following:

* AgeMin – Minimum age of this face
* AgeMax – Maximum age of this face
* AgeScore – A confidence score for the detected ages, in the range 0 to 1
* LocationHeight – Height of the detected face, in pixels
* LocationLeft – X-position of the upper-left pixel of the face region
* LocationTop – Y-position of the upper-left pixel of the face region
* LocationWidth – Width of the detected face, in pixels
* GenderName – The gender of the detected face
* GenderScore – A confidence score for the detected gender, in the range 0 to 1

{{% alert color="info" %}}
If there are more than ten faces in an image, these will all be detected but the age and gender confidence may return scores of zero.

The attributes which were used in previous versions to identify individuals have been removed in this version. These were: IdentityName, IdentityScore, and TypeHierarchy. For more details, see the [IBM Watson Release Notes](https://cloud.ibm.com/docs/services/visual-recognition/release-notes.html#2april2018).
{{% /alert %}}

### 7.5 Visual Recognition – Get Classifiers{#getClassifiers}

This action returns a list of *custom* classifiers which can be used in visual recognition.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/visualrecognition-getclassifiers.png" alt="Configuration dialog for the Visual Recognition - Get Classifiers action" >}}

#### 7.5.1 Apikey

This is a string containing the API key assigned to the Visual Recognition service in your IBM Cloud. See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.5.2 Url

This is a string containing the URL assigned to the Visual Recognition service in your IBM Cloud.  See the section [IBM Cloud](#IBMCloud) for more details.

#### 7.5.3 Variable (List of Classifier)

This is the name to give to a list of Classifier objects which is the list of *custom* classifiers available in your Visual Recognition service.

{{% alert color="info" %}}
**Get Classifiers** only returns details for custom classifiers. It doesn't return details for built-in IBM classifiers such as *default*, *food*, or *explicit*.
{{% /alert %}}

Each Classifier object will be contain the following information:

* Name – the classifier name
* ClassifierId – a unique identifier for this classifier
* ClassifierOwner – the owner of the classifier
* Created – the date and time that the classifier was created
* Status – the training status of classifier; possible values are *ready*, *training*, *retraining*, *failed*. Only classifiers with a status of *ready* can be used to classify an image
* Explanation – will sometimes contain text describing why training of a classifier has failed

## 8 Watson Service Configuration{#WatSerCon}

Functionality to store the API keys and username/password combinations which are required to access IBM Watson services is built into the Watson Connector Suite example app. You need an API key and a URL to access an IBM Watson service.

If the app is running on IBM Cloud, then it can use VCAP to obtain the credentials for the configured services. Support for this functionality is in the **USE_ME** folder of project module **WatsonServices**.
If the app is not running on IBM Cloud (for example if you are testing it locally or on a Mendix cloud), then the credentials will have to be supplied manually.

### 8.1 Getting Credentials Through VCAP

An example of how to check for the VCAP services and import the configured credentials is in the WatsonServices microflow **USE_ME > OnStartUpWatsonAppOnIBMCloud**. In the sample app, this is configured to run automatically in **App Settings > Runtime > After startup**.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/onstartupwatsonapponibmcloud.png" alt="On Startup Microflow" >}}

The microflow does the following:

* Calls CFCommons.getEnvVariables to get an environment variable **VCAP_SERVICES**
* If the variable does not exist, the microflow ends and returns **false**
* If the VCAP_SERVICE environment variable does exist it will contain the credentials, in JSON format, of all the services which have been allocated to your project on IBM Cloud
* The action **Import with mapping** is used, together with the mapping **USE_ME > JsonMapping > VCAP_Import_Mapping** to populate an object of type **Config** (see [Import Mapping Action](/refguide/import-mapping-action/) for more information)

    {{< figure src="/attachments/appstore/connectors/ibm-watson-connector/vcap.png" alt="Domain model for Watson VCAP Management" >}}

* A list of all the **ConfigItem** objects associated with the **Config** item which has just been created is retrieved
* This list is passed to the microflow **IVK_CreateOrUpdateService** which creates an object of type **WatsonServiceConfig** for each item in the list which contains credentials for a Watson service

The credentials are now stored in the database and can be used with IBM Watson Services actions.

### 8.2 Entering Credentials Manually

If VCAP is not available, then the WatsonServiceConfig objects will have to be entered manually. This can be done in a number of ways. Two examples are:

1. Create simple Mendix overview and newedit pages to allow an administrator to enter the credentials: examples of these are in the **Config** folder of the WatsonServicesExamples module

2. Put the credentials in constants and run an **After start** microflow to populate the database when the application is run for the first time

### 8.3 Using the Credentials

The microflow **GetWatsonServiceConfiguration** takes a parameter of WatsonServiceConfigType and checks to see that a configuration of that type has been set up as a **WatsonServiceConfig** object. It returns the object if it exists. If the object does not exist, it posts a message to the log and returns an empty object.

{{< figure src="/attachments/appstore/connectors/ibm-watson-connector/getwatsonserviceconfiguration.png" alt="GetWatsonServiceConfiguration microflow" >}}

The WatsonServiceConfig entity has the following attributes:

* Apikey – a string containing an API key used to access an IBM Watson service
* Url - a string containing the URL used to access an IBM Watson service
* Label – a label identifying the service for which these credentials are stored. It is an enumeration of WatsonServiceConfigType

{{% alert color="info" %}}
The enumeration **WatsonServiceConfigType** contains a *Name* which reflects the VCAP value referring to the service. In some cases this is different from the current name of the service (for example the *Assistant* service uses the VCAP name *conversation*). The current name of the service is shown in the *Caption* of the enumeration.
{{% /alert %}}

## 9 Limitations

* Some Watson services are not available in every region.

    The IBM [Service availability](https://cloud.ibm.com/docs/resources/services_region.html#services_region) document contains a comprehensive list of services and the regions where they are available.

## 10 Not Yet Supported

The IBM Watson Connector Suite does not yet have actions for all the APIs of the services which it does support. For example the APIs which allow you to build a conversation without using the IBM Watson Conversation Workspaces Tool.

In addition, the following IBM AI services are not yet supported at all by the IBM Watson Connector Suite. However, you can connect to them yourself using the native Mendix activities for consuming REST services. See [How to Consume a REST Service](/howto/integration/consume-a-rest-service/).

1. AI OpenScale
2. Compare Comply
3. Discovery
4. Knowledge Catalog
5. Knowledge Studio
6. Machine Learning
7. Natural Language Classifier
8. Natural Language Understanding
9. Personality Insights
10. Watson Studio
11. PowerAI

## 11 Read More

* [Getting started with Watson and IBM Cloud](https://cloud.ibm.com/docs/services/watson/index.html)
* [How to Consume a REST Service](/howto/integration/consume-a-rest-service/)
* [IBM Cloud](https://www.ibm.com/cloud/)
* [IBM Watson Connector Suite](https://marketplace.mendix.com/link/component/2860/)
* [IBM Watson website](https://www.ibm.com/watson/products-services/)
* [Service credentials for Watson services](https://cloud.ibm.com/docs/services/watson/getting-started-credentials.html)
