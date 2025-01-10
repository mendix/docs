---
title: "Amazon Polly"
url: /appstore/modules/aws/amazon-polly/
description: "Describes the configuration and usage of the Amazon Polly connector, which is available in the Mendix Marketplace. Amazon Polly uses deep learning technologies to synthesize natural-sounding human speech, so you can convert articles to speech."
weight: 20
aliases:
    - /appstore/connectors/amazon-polly/
    - /appstore/connectors/aws/amazon-polly/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Polly](https://marketplace.mendix.com/link/component/205068) connector enables you to connect your app to [Amazon Polly](https://aws.amazon.com/polly/) and easily convert written text into human voice in your web applications.

### Typical Use Cases

Amazon Polly allows you to synthesize text to speech, with 96 voices supporting 34 languages. With dozens of lifelike voices across a broad set of languages, use Amazon Polly to build speech-activated applications, for example, to accommodate the following use cases:

* Provide accessibility features for users who have difficulty reading
* Create audio-supported interfaces in your application.

### Prerequisites {#prerequisites}

The Amazon Polly connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333). If you are using the Amazon Polly Connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon Polly connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonPollyConnector** section. The connector provides a domain model and activities that you can use to connect your app to Amazon Polly. Each activity can be implemented using it in a microflow or nanoflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### Configuring AWS Authentication {#authentication}

In order to use the Amazon Polly service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Polly, you can implement the functions of the connector by using the provided activities in microflows. For example, to synthesize a string of text into speech, implement the **SynthesizeSpeech** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_SynthesizeSpeech*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonPollyConnector** section, find the **SynthesizeSpeech** operation microflow.
4. In the **App Explorer**, in the **AWSAuthentication** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** microflows.
5. Drag the one you would like to use and the **SynthesizeSpeech** microflow in to your microflow in that order.
6. Double-click the **SynthesizeSpeech** activity to configure the required parameters. 
    
    For the `SynthesizeSpeech` activity, you must add your own entity that inherits from `System.FileDocument` to store the contents of the audio, provide a credentials object and specify the AWS Region. You must then add your `SynthesizeSpeechRequest` entity in your microflow as the last parameter. This entity requires the following parameters:

    * `Text` - The actual string of text that needs to be synthesized.
    * `OutputFormat` - MP3, OGG_VORBIS, or PCM. JSON is not yet supported by the connector.
    * `Engine` - The enumeration parameter that specifies which engine (*standard* or *neural*) will be used by Amazon Polly during speech synthesis. It is set automatically to *standard* in the connector when a `SynthesizeSpeechRequest` object is created, but can be modified by the user.
    * `VoiceID` - The selected voice for the output of the text.

    The following parameters are optional:
    * `TextType` - The enumeration parameter to specify if the input text is plain text or SSML. If left empty, the default value is plain text.
    * `SampleRate` - The valid values for MP3 and OGG_VORBIS are *8000*, *16000*, *22050*, and *24000*. The valid values for PCM are *8000* and *16000*. The default values are used by Amazon Polly, if not given.
    * `LanguageCode` - Language code of the voice. This parameter is only necessary if you are using a voice that can use multiple languages. If left empty, the default value for that voice is used. 
    
    For more information on Amazon Polly voices and their engines, see [Voices in Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html).
7. In the **Edit parameters** section, edit the **ENUM_Region** parameter, and provide a value by using a variable or an expression.
8. Click **OK**.
9. Open a page that contains a widget for playing audio, for example, the [Play Audio](https://marketplace.mendix.com/link/component/120804) widget.
10. Configure the widget to use the `FileDocument` configured in the **SynthesizeSpeech** activity.
11. Configure a method to trigger the `ACT_SynthesizeSpeech` activity. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
    
## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
