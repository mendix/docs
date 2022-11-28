---
title: "Amazon Polly"
url: /appstore/connectors/aws-polly/
category: "App Services"
description: "Describes the configuration and usage of the Amazon Polly connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "aws", "polly", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Polly]([#needs-url]) connector enables you to connect your app to [Amazon Polly](https://aws.amazon.com/polly/) and easily convert written text into human voice in your web applications.

### 1.1 Typical Use Cases

Amazon Polly allows you to synthesize text to speech with 96 voices supporting 34 languages. You can use this to accommodate the following use cases:

* Provide accessibility features for users who have difficulty reading
* Create interfaces in your application supported with audio.

### 1.2 Prerequisites

The Amazon Polly Connector requires the AWS authentication connector version 2.1 or higher to authenticate with Amazon Web Services (AWS). for more information about installing and configuring the AWS Authentication Connector see AWS authentication.

### 1.3 Dependencies

* AWS Authentication Connector
* Mendix studio Pro 9.18.0


## 2 Installation

Follow the instructions in How to Use Marketplace Content in Studio Pro to import the Amazon Polly connector into your app.

## 3 Configuration

After you install the connector, you can find it under Add-On modules in the AmazonPollyConnector section. The connector provides a domain model and activities that you can use to connector your app to Amazon Polly. Each activity can be implemented using it in a microflow or nanoflow.

For example to synthesize a string of text into speech, implement the SynthesizeSpeech microflow action by performing the following steps:

1. In the App Explorer, right click on the name of your module and then click Add microflow.
2. Enter a name for your microflow, for example, ACT_SynthesizeSpeech, and then click OK
3. Int he App Explorer, in the AmazonPollyConnector > Operations section, find the SynthesizeSpeech activity
4. Drag the SynthesizeSpeech activity onto the work are of your microfow
5. Double click the SynthesizeSpeech activity to configure the required parameters. For the SynthesizeSpeech activity you must add your own entity that inherits from System.FileDocument to store the contents of the audio in and specify the AWS Region. Next build up your SynthesizeSpeechRequest entity in your microflow as last parameter. This entity requires 
    * OutputFormat (MP3, OGG_VORBIS and PCM). JSON is not yet supported by the connector
    * SampleRate ( The valid values for mp3 and ogg_vorbis are "8000", "16000", "22050", and "24000". Valid values for pcm are "8000" and "16000")
    * VoiceID - The selected voice for the output of the text
    * Text - the actual string of text that needs to be translated
6. In the Edit parameters section, edit the AWS_Region parameter, and provide a value by using a variable or an expression. For a list of available AWS regions, see AWS_Region.
7. Click OK
8. After the SynthesizeSpeech activity open a page that contains a widget for playing audio (like the Play Audio widget)
9. Configure the widget to use the FileDocument configured in the SynthesizeSpeech action.
10. Configure a method to trigger the ACT_SynthesizeSpeech action. For example by associating it with a custom button on a page in your app. For an example of how this can be implemented, see Create a Custom Save Button.

### 3.1 Constants

Constants are used to define configuration values. All activities are exported as microflow activities that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS.

| Name | Description |
| --- | --- |
| `AmazonPollyConnector.AWS_ClientCertificateID` | The ID for the ClientCertificate used to sign the authentication requests. (Link to Auth v2 docs) |
| `AmazonPollyConnector.HostPattern` | The endpoint URL for the AWS Rekognition Service, for example, `https://rekognition.us-east-1.amazonaws.com` |
| `AmazonPollyConnector.ProfileARN` | The ProfileARN for the IAM Roles Anywhere profile that has access to the Rekognition AWS service (Link to Auth v2 docs) |
| `AmazonPollyConnector.Region` | The region in which both the IAM Roles Anywhere and the Rekognition service are located |
| `AmazonPollyConnector.RoleARN` | The RoleARN of the IAM Role that has access to the Rekognition service. |
| `AmazonPollyConnector.AWS_TrustAnchorARN` | The TrustAnchorARN of the TrustAnchor configured in IAM Roles Anwhere that is used for the configured Role |
| `AmazonPollyConnector`.UseStaticCredentials | The USeStaticCredentials boolean defines if the connector uses the provided Static Credentials (AccessKey and SecretKey) over the Session ?Based Credentials |
| `AmazonPollyConnector`.AccessKey | The AccesKey from an AWS account able to use this service. |
| `AmazonPollyConnector`.SecretKey | The SecretKey from an AWS Account able to use this service |

### 3.2 Domain Model

| Name | Description |
| --- | --- |
| `Voice` | The Voice entity is a representation of an Amazon Polly voice. It contains the unique identifier for a voice (VoiceID) that is required for SynthesizeSpeech actions. It also contains additional information on a voice like the name, language and gender. |

### 3.3 Enumerations

An enumeration is a predefined list of values that an be used as an attribute type

#### 3.3.1 `OutputFormat`

The format in which the returned output will be encoded. For audio stream, this will be mp3, ogg_vorbis, or pcm. JSON is currently not supported

Values

| Name | Caption |
| --- | ---------- |
| MP3        | MP3        |
| OGG_VORBIS | OGG_VORBIS |
| PCM        | PCM        |

#### 3.3.2 Enumeration `Engine`

Specifies which engines (standard or neural) that are supported by a given voice.

Values

| Name | Caption |
| --- | --- |
| Standard | standard |
| Neural | neural |

#### 3.3.3 Enumeration `TextType`

Values

| Name | Caption |
| --- | --- |
| PlainText | PlainText |
| SSML | SSML |

#### 3.3.4 Enumeration `AWS_Region`

Values

| Name | Caption |
| --- | --- |
| us_east_2 | US Easth (Ohio) |
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

### 3.4 Activities

Activities define the actions that are executed in a microflow or a nanoflow.

#### 3.4.1 Synthesize Speech

The SynthesizeSpeech action allows you to synthesize a string of text into an audio file. It requires a SynthesizeSpeechRequest entity containing the required information and a TargetFileDocument (System.FileDocument or specialization) that will contain the response of the SynthesizeSpeech action.
The other required parameter is AWS_Region in which the Polly service should be called.

This activity returns a System.FileDocument entity containing the synthesized speech.

#### 3.4.2 DescribeVoices
The DescribeVoices action returns the list of voices from the Amazon Polly service. It requires an AWS_Region parameter to get the list of supported voices from the given AWS region.
These can be used in the Synthesize Speech action to synthesize a piece of text to speech with the right voice. The DescribeVoices action returns this in the form of a DescribeVoicesResponse entity containing a list of DescribeVoice entities.

##### 3.4.2.1 Parameters

| Name | Type | Documentation |
| --- | --- | --- |
| AWS_Region | Enumeration AmazonPollyConnector.AWS_Region | |

##### 3.4.2.2 Return type

| Name | Type |
| --- | --- |
| DescribeVoices | AmazonPollyConnector.DescribeVoicesResponse | 

The DescribeVoices action returns the list of voices from the Amazon Polly service. It requires an AWS_Region parameter to get the list of supported voices from the given AWS region.<br>These can be used in the Synthesize Speech action to synthesize a piece of text to speech with the right voice. The DescribeVoices action returns this in the form of a DescribeVoicesResponse entity containing a list of DescribeVoice entities. |