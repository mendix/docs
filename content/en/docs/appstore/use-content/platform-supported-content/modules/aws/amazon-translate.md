---
title: "Amazon Translate"
url: /appstore/modules/aws/amazon-translate/
description: "Describes the configuration and usage of the Amazon Translate app service. Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation."
weight: 20
aliases:
    - /appstore/connectors/amazon-translate/
    - /appstore/connectors/aws/amazon-translate/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Translate](https://marketplace.mendix.com/link/component/204706) connector enables you to connect your app to [Amazon Translate](https://aws.amazon.com/translate/) and build web applications that work with state-of-the-art multi-language text translation.

### Typical Use Cases

Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation. Neural machine translation is a form of language translation automation that uses deep learning models to deliver more accurate and more natural sounding translation than traditional statistical and rule-based translation algorithms.
With Amazon Translate, you can localize content such as websites and applications for your diverse users, easily translate large volumes of text for analysis, and efficiently enable cross-lingual communication between users.

### Prerequisites {#prerequisites}

The Amazon Translate connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector](https://marketplace.mendix.com/link/component/120333).  If you are using the Amazon Translate Connector version 2.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon Translate connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonTranslateConnector** section. The connector provides the [domain model and activities](#technical-reference) that you can use to implement automatic translation for your app.

{{% alert color="info" %}}
The artifacts that you need are contained in the **AmazonTranslateConnector** > **Operations** folder. The content in the **Translation** > **Private** folder is for internal use. In most cases, you will not need to use it directly.
{{% /alert %}}

### Configuring AWS Authentication

In order to use the Amazon Translate service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
