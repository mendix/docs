---
title: "Amazon Rekognition"
url: /appstore/modules/aws/amazon-rekognition/
description: "Describes the configuration and usage of the Amazon Rekognition connector from the Mendix Marketplace. Amazon Rekognition offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images and videos.​"
weight: 20
aliases:
    - /appstore/connectors/amazon-rekognition/
    - /appstore/connectors/aws/amazon-rekognition/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## Introduction

The [Amazon Rekognition](https://marketplace.mendix.com/link/component/204717) connector provides a way for you to enrich your Mendix app with AI image analysis capabilities by implementing [Amazon Rekognition](https://aws.amazon.com/rekognition/).

### Typical Use Cases

Amazon Rekognition allows your app to analyze images by using machine learning. You can use it to address use cases such as the following:

* Identify where the faces are located in an image
* Compare faces from two different images
* Identify where labels are located in an image
* Identify custom labels like a logo in images
* Identify if a person in an image is wearing protective equipment

### Prerequisites {#prerequisites}

The Amazon Rekognition connector requires Mendix Studio Pro 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 3.0.0 or higher](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### Example

{{< youtube h_R1mMtkfd8 >}}

### Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## Installation

Follow the instructions in [How to Use Marketplace Content](/appstore/use-content/) to import the Amazon Rekognition connector into your app.

## Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonRekognitionConnector** section. The connector provides a [domain model and activities](#technical-reference) that you can use to connect your app to Amazon Rekognition. Each activity can be implemented by using it in a microflow.

### Configuring AWS Authentication

In order to use the Amazon Rekognition service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon Rekognition, you can implement the functions of the connector by using the provided activities in microflows. For example, to detect labels for a given image, implement the **DetectLabels** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_DetectLabels*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonRekognitionConnector** > **Operations** section, find the **DetectLabels** activity.
4. Drag the **DetectLabels** activity onto the work area of your microflow.
5. Double-click the **DetectLabels** microflow activity to configure the required parameters. For the **DetectLabels** activity, you must attach an image. Optional parameters are **MinConfidence** and **MaxLabels**. (Corresponding labels should have at least the provided **MinConfidence**, and **MaxLabels** is the maximum number of labels returned.) Other activities may have different required parameters.
6. For the **ENUM_Region** parameter, provide a value by using a variable or an expression. This must be of the type ENUM_Region of the AWS Authentication connector.
7. For the **Credentials** parameter, provide a Credentials Object from the AWS Authentication connector:
    1. In the **App Explorer**, in the **AWSAuthentication** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions under > **Operations**.
    2. Drag the one you would like to use to the beginning of your microflow.
    3. Double-click the microflow action to configure the required parameters and provide a value for the AWS Region.
8. The `DetectLabelResponse` object is returned by the **DetectLabels** activity.   
9. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow work area.
10. Position the **Retrieve** activity between the **DetectLabels** activity and the microflow end event.
11. Double-click the **Retrieve** activity.
12. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **DetectLabels** as the association.
13. Click **OK**.
14. Configure a method for triggering the **ACT_DetectLabels** microflow. For example, you can trigger a Microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## Technical Reference {#technical-reference}

The module includes technical reference documentation for the available entities, enumerations, activities, and other items that you can use in your application. You can view the information about each object in context by using the **Documentation** pane in Studio Pro.

The **Documentation** pane displays the documentation for the currently selected element. To view it, perform the following steps:

1. In the [View menu](/refguide/view-menu/) of Studio Pro, select **Documentation**.
2. Click on the element for which you want to view the documentation.

    {{< figure src="/attachments/appstore/platform-supported-content/modules/technical-reference/doc-pane.png" class="no-border" >}}
