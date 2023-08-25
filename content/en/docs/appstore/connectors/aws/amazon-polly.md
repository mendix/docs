---
title: "Amazon Polly"
url: /appstore/connectors/aws/amazon-polly/
category: "Connectors"
description: "Describes the configuration and usage of the Amazon Polly connector, which is available in the Mendix Marketplace. Amazon Polly uses deep learning technologies to synthesize natural-sounding human speech, so you can convert articles to speech."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "polly", "connector", "amazon"]
aliases:
    - /appstore/connectors/amazon-polly/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Polly](https://marketplace.mendix.com/link/component/205068) connector enables you to connect your app to [Amazon Polly](https://aws.amazon.com/polly/) and easily convert written text into human voice in your web applications.

### 1.1 Typical Use Cases

Amazon Polly allows you to synthesize text to speech, with 96 voices supporting 34 languages. With dozens of lifelike voices across a broad set of languages, use Amazon Polly to build speech-activated applications, for example, to accommodate the following use cases:

* Provide accessibility features for users who have difficulty reading
* Create audio-supported interfaces in your application.

### 1.2 Prerequisites {#prerequisites}

The Amazon Polly connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Polly connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonPollyConnector** section. The connector provides a domain model and activities that you can use to connect your app to Amazon Polly. Each activity can be implemented using it in a microflow or nanoflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication {#authentication}

In order to use the Amazon Polly service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Polly connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-polly/polly_open_settings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonPollyConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-polly/polly_edit_configuration.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.

    | Credentials type | Constant | Value |
    | --- | --- | --- |
    | Any | **UseStaticCredentials** | **true** if you want to use static credentials, or **false** for session credentials |
    | **StaticCredentials** | **AccessKey** | Access key ID [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites)  |
    | **StaticCredentials** | **SecretKey** | Secret key [created in IAM](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Role ARN** | [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS role that the connector should assume |
    | **SessionCredentials** | **Profile ARN** | ARN of the profile [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Trust Anchor ARN** | ARN of the trust anchor [created in IAM Roles Anywhere](/appstore/connectors/aws/aws-authentication/#prerequisites) |
    | **SessionCredentials** | **Client Certificate Identifier** | The **Client Certificate Pin** visible in the **Outgoing Certificates** section on the **Network** tab in the Mendix Cloud environment |
    | **SessionCredentials** | **Duration** | Duration for which the session token should be valid; after the duration passes, the validity of the session credentials expires |
    | **SessionCredentials** | **Session Name** | An identifier for the session |

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Polly, you can implement the functions of the connector by using the provided activities in microflows. For example, to synthesize a string of text into speech, implement the [SynthesizeSpeech](#synthesize-speech) activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_SynthesizeSpeech*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonPollyConnector** section, find the **SynthesizeSpeech** activity.
4. Drag the **SynthesizeSpeech** activity onto the work are of your microflow.
5. Double-click the **SynthesizeSpeech** activity to configure the required parameters. 
    
    For the `SynthesizeSpeech` activity, you must add your own entity that inherits from `System.FileDocument` to store the contents of the audio in and specify the AWS Region. You must then add your `SynthesizeSpeechRequest` entity in your microflow as the last parameter. This entity requires the following parameters:

    * `Text` - The actual string of text that needs to be translated.
    * `OutputFormat` - MP3, OGG_VORBIS, or PCM. JSON is not yet supported by the connector.
    * `Engine` - The enumeration parameter that specifies which engine (*standard* or *neural*) will be used by Amazon Polly during speech synthesis. It is set automatically to *standard* in the connector when a `SynthesizeSpeechRequest` object is created, but can be modified by the user.
    * `VoiceID` - The selected voice for the output of the text.

    The following parameters are optional:
    * `TextType` - The enumeration parameter to specify if the input text is plain text or SSML. If left empty, the default value is plain text.
    * `SampleRate` - The valid values for MP3 and OGG_VORBIS are *8000*, *16000*, *22050*, and *24000*. The valid values for PCM are *8000* and *16000*. The default values are used by Amazon Polly, if not given.
    * `LanguageCode` - Language code of the voice. This parameter is only necessary if you are using a voice that can use multiple languages. If left empty, the default value for that voice is used. 
    
    For more information on Amazon Polly voices and their engines, see [Voices in Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html).
6. In the **Edit parameters** section, edit the **AWS_Region** parameter, and provide a value by using a variable or an expression. For a list of available AWS regions, see [AWS_Region](#aws-region).
7. Click **OK**.
8. Open a page that contains a widget for playing audio, for example, the [Play Audio](https://marketplace.mendix.com/link/component/120804) widget.
9. Configure the widget to use the `FileDocument` configured in the **SynthesizeSpeech** activity.
10. Configure a method to trigger the `ACT_SynthesizeSpeech` activity. 
    For example, you can associate the activity with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).
    
## 4 Technical Reference

To help you work with the Amazon Translate connector, the following sections of this document list the available entities, constants, activities, and enumerations that you can use in your application.

### 4.1 Constants

Constants are used to define configuration values. All activities are exported as microflow activities that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS. For more information, see [Configuring AWS Authentication](#authentication).

| Name | Description |
| --- | --- |
| `AmazonPollyConnector.AWS_ClientCertificateID` | The ID for the `ClientCertificate` used to sign the authentication requests.  |
| `AmazonPollyConnector.ProfileARN` | The `ProfileARN` for the [IAM Roles Anywhere](https://docs.aws.amazon.com/rolesanywhere/latest/userguide/introduction.html) profile that has access to the Amazon Polly service |
| `AmazonPollyConnector.Region` | The region in which both the IAM Roles Anywhere and the Polly service are located |
| `AmazonPollyConnector.RoleARN` | The `RoleARN` of the IAM Role that has access to the Polly service. |
| `AmazonPollyConnector.AWS_TrustAnchorARN` | The `TrustAnchorARN` of the TrustAnchor configured in IAM Roles Anywhere that is used for the configured role |
| `AmazonPollyConnector.UseStaticCredentials` | The `UseStaticCredentials` Boolean value defines if the connector uses the provided static credentials (`AccessKey` and `SecretKey`) over the session-based credentials |
| `AmazonPollyConnector.AccessKey` | The `AccessKey` from an AWS account able to use this service |
| `AmazonPollyConnector.SecretKey` | The `SecretKey` from an AWS Account able to use this service |

### 4.2 Domain Model

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

#### 4.2.1 Voice {#voice}

The `Voice` entity is a representation of an Amazon Polly voice. It contains the unique identifier for a voice (`VoiceID`) that is required for `SynthesizeSpeech` activities. It also contains additional information on a voice like the name, language and gender.

| Attribute | Description |
| --- | --- |
| `VoiceID` | ID assigned by Amazon Polly that is specified when calling the [SynthesizeSpeech](#synthesize-speech) action (string)|
| `Name` | Name of the voice (string)|
| `LanguageName` | Name of the language in English (string)|
| `LanguageCode` | The language code of the voice (string)|
| `Gender` | Gender of the voice. (string)|

#### 4.2.2 DescribeVoicesResponse

The `DescribeVoicesResponse` entity is the response for the [DescribeVoices](#describe-voices) action. The action also returns a list of `DescribeVoice` objects associated with the `DescribeVoicesResponse` object. The `DescribeVoice` entity inherits from the voice entity and contains all its attributes. For more information on the attributes, see [Voice](#voice).

#### 4.2.3 SynthesizeSpeechRequest

The `SynthesizeSpeechRequest` entity is used when calling the [SynthesizeSpeech](#synthesize-speech) action. 

| Attribute | Description |
| --- | --- |
| `Text` | Text to synthesize (string)|
| `TextType` | It is used to specify whether the input text is plain text or SSML. If left empty, the default value is 'plain text' (enum)|
| `OutputFormat` | The format that the output should be encoded (enum)|
| `SampleRate` | The sample rate for speech synthesis (string)|
| `Engine` | The engine that will be used during speech synthesis (enum)|
| `VoiceID` | The ID of the voice (string)|
| `LanguageCode` | The language code of the voice (string)|

### 4.3 Enumerations

An enumeration is a predefined list of values that an be used as an attribute type.

#### 4.3.1 `OutputFormat`

The format in which the returned output will be encoded. For audio streams, this must be MP3, OGG_VORBIS, or PCM. JSON is currently not supported.

| Name | Caption |
| --- | --- |
| MP3        | MP3        |
| OGG_VORBIS | OGG_VORBIS |
| PCM        | PCM        |

#### 4.3.2 `Engine`

Specifies the engines (standard or neural) that are supported by a given voice.

| Name | Caption |
| --- | --- |
| Standard | standard |
| Neural | neural |

#### 4.3.3 `TextType`

| Name | Caption |
| --- | --- |
| PlainText | PlainText |
| SSML | SSML |

#### 4.3.4 `AWS_Region` {#aws-region}

| Name | Caption |
| --- | --- |
| us_east_2 | US East (Ohio) |
| us_east_1 | US East (N. Virginia) |
| us_west_1 | US West (N. California) |
| us_west_2 | US West (Oregon) |
| af_south_1 | Africa (Cape Town) |
| ap_east_1 | Asia Pacific (Hong Kong) |
| ap_southeast_3 | Asia Pacific (Jakarta) |
| ap_south_1 | Asia Pacific (Mumbai) |
| ap_northeast_3 | Asia Pacific (Osaka) |
| ap_northeast_2 | Asia Pacific (Seoul) |
| ap_southeast_1 | Asia Pacific (Singapore) |
| ap_southeast_2 | Asia Pacific (Sydney) |
| ap_northeast_1 | Asia Pacific (Tokyo) |
| ca_central_1 | Canada (Central) |
| eu_central_1 | Europe (Frankfurt) |
| eu_west_1 | Europe (Ireland) |
| eu_west_2 | Europe (London) |
| eu_south_1 | Europe (Milan) |
| eu_west_3 | Europe (Paris) |
| eu_north_1 | Europe (Stockholm) |
| me_south_1 | Middle East (Bahrain) |
| sa_east_1 | South America (São Paulo) |

### 4.4 Activities

Activities define the actions that are executed in a microflow or a nanoflow.

#### 4.4.1 Synthesize Speech {#synthesize-speech}

The `SynthesizeSpeech` activity allows you to synthesize a string of text into an audio file. It requires a `SynthesizeSpeechRequest` entity containing the required information, and a `TargetFileDocument` (`System.FileDocument` or its specialization) to contain the response of the `SynthesizeSpeech` activity. It also requires the `AWS_Region` in which the Polly service should be called.

The `SynthesizeSpeech` activity has no return value, instead the input parameter TargetFileDocument contains the synthesized speech.

#### 4.4.2 DescribeVoices {#describe-voices}

The `DescribeVoices` activity returns the list of voices from the Amazon Polly service. It requires an `AWS_Region` parameter to get the list of supported voices from the given AWS region.
The voices can be used in the `Synthesize Speech` activity to synthesize a piece of text to speech with the right voice. 

The `DescribeVoices` activity returns a `DescribeVoicesResponse` entity containing a list of `DescribeVoice` entities. Examples of the returned `DescribeVoice` objects can be seen below. 

 {{< figure src="/attachments/appstore/connectors/aws-polly/polly-example-voices.png" alt="Examples of available voices for Amazon Polly">}}

For more Amazon Polly voices and their information, see [Voices in Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html).
