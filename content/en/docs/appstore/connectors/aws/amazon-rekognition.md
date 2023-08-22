---
title: "Amazon Rekognition"
url: /appstore/connectors/aws/amazon-rekognition/
description: "Describes the configuration and usage of the Amazon Rekognition connector from the Mendix Marketplace. Amazon Rekognition offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images and videos.​"
weight: 20
tags: ["marketplace", "marketplace component", "amazon", "rekognition", "connector"]
aliases:
    - /appstore/connectors/amazon-rekognition/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon Rekognition](https://marketplace.mendix.com/link/component/204717) connector provides a way for you to enrich your Mendix app with AI image analysis capabilities by implementing [Amazon Rekognition](https://aws.amazon.com/rekognition/).

### 1.1 Typical Use Cases

Amazon Rekognition allows your app to analyze images by using machine learning. You can use it to address use cases such as the following:

* Identify where the faces are located in an image
* Compare faces from two different images
* Identify where labels are located in an image
* Identify custom labels like a logo in images
* Identify if a person in an image is wearing protective equipment

### 1.2 Prerequisites {#prerequisites}

The Amazon Rekognition connector requires Mendix Studio Pro version 9.18.0 or above.

To authenticate with Amazon Web Service (AWS), you must also install and configure the [AWS authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Example

{{% youtube h_R1mMtkfd8 %}}

### 1.4 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon Rekognition connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonRekognitionConnector** section. The connector provides a [domain model](#domain-model) and [activities](#activities) that you can use to connect your app to Amazon Rekognition. Each activity can be implemented by using it in a microflow.

### 3.1 Configuring AWS Authentication

In order to use the Amazon Rekognition service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.
    The Amazon Rekognition connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the **App Explorer**, double-click the **Settings** for your app.

    {{< figure src="/attachments/appstore/connectors/aws-rekognition/appsettings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings** dialog, in the **Configurations** tab, edit or create an authentication profile.
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.
5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonRekognitionConnector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-rekognition/credentials.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

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

After you configure the authentication profile for Amazon Rekognition, you can implement the functions of the connector by using the provided activities in microflows. For example, to detect labels for a given image, implement the **DetectLabels** activity by performing the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *ACT_DetectLabels*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonRekognitionConnector** > **Operations** section, find the **DetectLabels** activity.
4. Drag the **DetectLabels** activity onto the work area of your microflow.
5. Double-click the **DetectLabels** microflow activity to configure the required parameters. For the **DetectLabels** activity, you must attach an image and specify an AWS region. Optional parameters are **MinConfidence** and **MaxLabels**. (Corresponding labels should have at least the provided **MinConfidence**, and **MaxLabels** is the maximum number of labels returned.) Other activities may have different required parameters.
6. In the **Edit** parameters section, edit the **AWS_Region** parameter, and provide a value by using a variable or an expression. For a list of available AWS regions, see [AWS_Region](#aws_region).
7. Click **OK**.
8. In the **Toolbox** pane, search for the **Retrieve** activity and drag it onto the microflow area.
9. Position the **Retrieve** activity between the **DetectLabels** activity and the microflow end event.
10. Double-click the **Retrieve** activity.
11. In the **Select Association** dialog box, in the **Association** section, click **Select**, and then select **DetectLabels** as the association.
12. Click **OK**.
13. Configure a method for triggering the **ACT_DetectLabels** microflow. For example, you can trigger a microflow by associating it with a custom button on a page in your app. For an example of how this can be implemented, see [Creating a Custom Save Button with a Microflow](/refguide/creating-a-custom-save-button/).

## 4 Technical Reference

To help you work with the Amazon Rekognition connector, the following sections of this document list the available [constants](#constants), [entities](#domain-model), [enumerations](#enumerations), [activities](#activities), and [JavaScript actions](#js-actions) that you can use in your application.

### 4.1 Constants {#constants}

Constants are used to define configuration values. All activities are exported as microflow activities that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS.

For more information, see [Constants](/refguide/constants/).

| Name | Value |
| --- | --- |
| `AWSRekognitionConnector.AWS_ClientCertificateID` | The ID for the ClientCertificate used to sign the authentication requests. (Link to Auth v2 docs) |
| `AWSRekognitionConnector.HostPattern` | The endpoint URL for the AWS Rekognition Service, for example, `https://rekognition.us-east-1.amazonaws.com` |
| `AWSRekognitionConnector.ProfileARN` | The ProfileARN for the IAM Roles Anywhere profile that has access to the Rekognition AWS service (Link to Auth v2 docs) |
| `AWSRekognitionConnector.Region` | The region in which both the IAM Roles Anywhere and the Rekognition service are located |
| `AWSRekognitionConnector.RoleARN` | The RoleARN of the IAM Role that has access to the Rekognition service. |
| `AWSRekognitionConnector.AWS_TrustAnchorARN` | The TrustAnchorARN of the TrustAnchor configured in IAM Roles Anywhere that is used for the configured Role |

### 4.2 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are (re-)used by the different models for the specific microflow activities or for storing connection details.

| Name | Description |
| --- | --- |
| `ConnectionDetails` | This entity holds information regarding the connection with Amazon's Rekognition service. |
| `Face` | This entity includes a confidence. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `BoundingBox` | This entity identifies the bounding box around the label, face, text, object of interest, or Personal Protective Equipment (PPE). The left (x) coordinate and top (y) coordinate are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). The top and left values returned are ratios of the overall image size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200). The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Label` | This entity includes a confidence and a name. The confidence is that of Amazon Rekognition service's accuracy in recognizing a face and the name is that of the generated label. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Polygon` | This entity contains the left (x) and top (y) coordinates of a point in an image or a video frame. The left (x) and top (y) values are ratios of the overall image size or video resolution. For example, if an input image is 700 x 200 and the values are X = 0.5 and Y = 0.25, then the point is at the (350,50) pixel coordinate in the image. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Pose` | This entity indicates the pose of the face as determined by its pitch, roll, and yaw. These three Euler angles could be described as following: the pitch is the rotational movement of the head that resembles nodding, the yaw resembles the movement of shaking, and the roll resembles the movement of tilting. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `ImageQuality` | This entity identifies the brightness and sharpness of the face image. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Landmark` | This entity indicates the location of the landmark on the face, it includes the type and left (x) and top (y) coordinates. The type relates to the referenced region of the face. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `PhysicalProperty` | This entity is extracted from various entities that consist of the same attributes and can be described as physical properties. The attributes include a confidence and a value. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face and the value is whether the said physical property has been detected or not. These entities are the following:; `Beard`; `Eyeglasses`;  `EyesOpen`; `CoversBodyPart`; `MouthOpen`; `Mustache`; `Sunglasses`; `SmileDetectFace`; `SmileRecognizeFace`; `SmileCompareFace`. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Emotion` | This entity holds the information regarding the emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `PersonsEquipment` | This entity holds information regarding a person's status of wearing protective equipment, including the value. The value is a representation of the ID of the detected person. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |

### 4.3 Enumerations {#enumerations}

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](/refguide/enumerations/).

#### 4.3.1 QualityFilter

This enumeration specifies how much filtering is applied, for example, to identify faces. If the quality filter is applied, then low-quality results are filtered out.

| **Name** | **Caption** | **Description** |
| --- | --- | --- |
| `NONE` | NONE | No quality filtering is applied. |
| `AUTO` | AUTO | Amazon Rekognition automatically selects the level of quality filtering that is applied. |
| `LOW` | LOW | A low level of quality filtering is applied. |
| `MEDIUM` | MEDIUM | A medium level of quality filtering is applied. |
| `HIGH` | HIGH | A high level of quality filtering is applied. |

#### 4.3.2 AWS_Region {#aws_region}

This enumeration provides a list of available AWS regions.

| **Name** | **Caption** |
| --- | --- |
| `us_east_2` | **us-east-2** |
| `us_east_1` | **us-east-1** |
| `us_west_1` | **us-west-1** |
| `us_west_2` | **us-west-2** |
| `ap_south_1` | **ap-south-1** |
| `ap_northeast_2` | **ap-northeast-2** |
| `ap_southeast_1` | **ap-southeast-1** |
| `ap_southeast_2` | **ap-southeast-2** |
| `ap_northeast_1` | **ap-northeast-1** |
| `ca_central_1` | **ca-central-1** |
| `eu_central_1` | **eu-central-1** |
| `eu_west_1` | **eu-west-1** |
| `eu_west_2` | **eu-west-2** |
| `us_gov_west_1` | **us-gov-west-1** |

### 4.4 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](/refguide/activities/).

#### 4.4.1 Compare Face

The Amazon `CompareFaces` service compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.

The input and output for this service are shown in the table below:

| Input | Output |
| --- |
| `SourceImage` (Image); `TargetImage` (Image); `SimilarityThreshold` (Decimal); `QualityFilter` (Enumeration) | Level of similarity among inputted images (Decimal) |

This activity returns a `CompareFaces` entity with associated entities as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `CompareFaces` | | This entity is the root object for Amazon's `CompareFaces` service. |
| `FaceToBeCompared` | `AmazonRekognitionConnector.Face` | This entity contains the face results for the `CompareFace` activity. It includes a confidence. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `MatchedFace` | | This entity holds the information on the level of similarity of the matched face with the face to be compared. The similarity is the confidence level that the source image and target image are a match. |
| `BoundingBoxCompareFace` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `CompareFaces` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `ImageQualityCompareFace` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `CompareFaces` activity. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `SmileCompareFace` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the physical property results for the `CompareFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `LandmarkCompareFace` | `AmazonRekognitionConnector.Landmark` | This entity contains the landmark results for the `CompareFaces` activity. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |
| `EmotionCompareFace` | `AmazonRekognitionConnector.Emotion` | This entity contains the emotion results for the `CompareFaces` activity. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `PoseCompareFace` | `AmazonRekognitionConnector.Pose` | This entity contains the pose results for the `CompareFaces` activity. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |

#### 4.4.2 Detect Custom Labels

The Amazon `DetectCustomLabels` service detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the `ProjectVersionArn` input parameter.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |

| `MinConfidence` (Integer/Long, value should be between 0 and 100); `MaxResults` (Integer/Long, minimum value of 0); `ProjectARN` (String); `Image` (Image) | Custom label |

This activity returns a list of `DetectCustomLabels` objects and associated objects as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectCustomLabels` | `AmazonRekognitionConnector.Label` | This entity is the root object for Amazon's `DetectCustomLabels` service. It includes a confidence and a value. Additionally, it is used to hold information over associations about the detected label, including the name, detected instances, parent labels, and confidence level. It is a specialization of the `Label` generalization entity. |
| `BoundingBoxDetectCustomLabel` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectCustomLabels` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PolygonDetectCustomLabel` | `AmazonRekognitionConnector.Polygon` | This entity contains the polygon results for the `DetectCustomLabels` activity. It includes left (x) and top (y) coordinates. It is a specialization of the `Polygon` generalization entity. An array of `Point` objects, `Polygon`, is returned by `DetectText` and `DetectCustomLabels` or used to define regions of interest in Amazon Rekognition Video operations such as `CreateStreamProcessor`. `Polygon` represents a fine-grained polygon around a detected item. |

#### 4.4.3 Detect Faces – Default

The Amazon `DetectFaces` service detects faces within an image that is provided as input.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Image` (Image) | An array or object of detected face(s) |

This activity returns a list of `DetectFaces` object with results as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectFaces` | | This entity is the root object for Amazon's `DetectFaces` service. It includes the orientation correction. |
| `BoundingBoxDetectFace` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectFaces` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PoseDetectFace` | `AmazonRekognitionConnector.Pose` | This entity contains the pose results for the `DetectFaces` activity. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityDetectFace` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `DetectFaces` activity. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `LandmarkDetectFace` | `AmazonRekognitionConnector.Landmark` | This entity contains the landmark results for the `DetectFaces` activity. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |

#### 4.4.4 Detect Faces – All Attributes

The Amazon `DetectFaces` service detects faces within an image that is provided as input.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Image` (Image) | An array or object of detected face(s) |

This activity returns a list of `DetectFaces` object with results as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectFaces` | | This entity is the root object for Amazon's `DetectFaces` service. It includes the orientation correction. |
| `FaceDetectFace` | `AmazonRekognitionConnector.Face` | This entity contains the face results for the `DetectFaces` activity. It includes a confidence. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `AgeRange` | | This entity contains the estimated age range, in years, for a detected face. This includes the high and low, where the high represents the ceiling of the range and low represents the floor of the range. Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a five-year-old might have an estimated range of 4-6, while the face of a six-year-old might have an estimated range of 4-8. |
| `Beard` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the beard results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Eyeglasses` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the eyeglasses results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `EyesOpen` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the eyes open results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Gender` | | This entity holds the prediction of the gender of a detected face. The entity includes a confidence and a value, where the confidence is the confidence level of the prediction and the value is the predicted gender of the face. Amazon Rekognition makes gender-binary (male or female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you should not use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female. Using Amazon Rekognition to make gender-binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. We do not recommend using gender-binary predictions to make decisions that impact an individual's rights, privacy, or access to services. |
| `BoundingBoxDetectFace` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectFaces` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `MouthOpen` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the mouth open results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Mustache` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the mustache results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `PoseDetectFace` | `AmazonRekognitionConnector.Pose` | This entity contains the pose results for the `DetectFaces` activity. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityDetectFace` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `DetectFaces` activity. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `EmotionDetectFace` | `AmazonRekognitionConnector.Emotion` | This entity contains the emotion results for the `DetectFaces` activity. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `Sunglasses` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the sunglasses results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `SmileDetectFace` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the smile results for the `DetectFaces` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `LandmarkDetectFace` | `AmazonRekognitionConnector.Landmark` | This entity contains the landmark results for the `DetectFaces` activity. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |

#### 4.4.5 Detect Moderation Labels

The Amazon `DetectModerationLabels` service detects unsafe content in a specified image (JPEG or PNG). Use `DetectModerationLabels` to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `MinConfidence` (Integer/Long, value should be between 0 and 100); `Image` (Image) | An array or object of detected moderation label(s) |

This activity returns a list of `DetectModerationLabels` objects and associated objects as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectModerationLabels` | | This entity is the root object for Amazon's `DetectModerationLabels` service. It includes the moderation model version. |
| `ModerationLabel` | | This entity provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. The confidence represents the confidence level of the label detection and the name represents the label content. |
| `HumanLoopActivationOutput` | | This entity shows the results of the human in the loop evaluation. It includes two attributes: (1) `HumanLoopActivationCondition` and (2) `HumanLoopArn`. The former shows the result of condition evaluations, including those conditions which activated a human review, while the latter is the Amazon Resource Name (ARN) of the `HumanLoop` created. If there is no `HumanLoopArn`, the input did not trigger a human review. |
| `HumanActivityReason` | | This entity includes the conditions which activated a human review. |

#### 4.4.6 Detect Labels

The Amazon `DetectLabels` service detects instances of real-world entities within an image (JPEG or PNG) that is provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. 

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `MinConfidence` (Integer/Long, value should be between 0 and 100); `MaxLabels` (Integer/Long, minimum value of 0); `Image` (Image) | An array or object of detected label(s) |

This activity returns a list of `DetectLabels` objects with associated objects as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectLabels` | | This entity is the root object for Amazon's `DetectLabels` service. It includes the label model version and orientation correction. |
| `Instance` | | This entity holds an instance of a label returned by Amazon Rekognition Image (`DetectLabels`) or by Amazon Rekognition Video (`GetLabelDetection`). |
| `Parent` | | This entity contains a parent label for a label. A label can have zero, one, or more parents. |
| `BoundingBoxDetectFace` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectFaces` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `LabelDetectLabel` | `AmazonRekognitionConnector.Label` | This entity contains the label results for the `DetectLabels` activity. It includes a confidence and a name. Additionally, it is used to hold information over associations about the detected label, including the name, detected instances, parent labels, and confidence level. It is a specialization of the `Label` generalization entity. |

#### 4.4.7 Detect Text

The Amazon `DetectText` service detects text in the input image and converts it into machine-readable text.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Image` (Image) | An array or object of detected text |

This activity returns a `DetectText` object with results as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectText` | | This entity is the root object for Amazon's `DetectText` service. It includes the text model version. |
| `TextDetection` | | This entity contains information about a word or line of text detected by `DetectText`. This includes a confidence, the detected text, its (parental) ID, and type. The confidence is that of Amazon's Rekognition in its accuracy of the detected text and the accuracy of the geometry points around the detected text. The detected text is the word or line of text recognized by the service. The `DetectedText` field contains the text that Amazon Rekognition detected in the image. The ID is the identifier for the detected text, and the parent ID is for the detected text identified by the value of `_Id`.  Every word and line has an identifier (`Id`). The word `Id` is also an index for the word within a line of words. Each word belongs to a line and has a parent identifier (`ParentId`) that identifies the line of text in which the word appears. The type reflects the type of text that was detected (`Type` or `Line`). If the type of the detected text is `Line`, the value of `ParentId` is `null`. |
| `Geometry` | | This entity contains information over associations about where an object (`DetectCustomLabels`) or text (`DetectText`) is located in an image. |
| `BoundingBoxTextDetect` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectText` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PolygonTextDetect` | `AmazonRekognitionConnector.Polygon` | This entity contains the polygon results for the `DetectText` activity. It includes left (x) and top (y) coordinates. It is a specialization of the `Polygon` generalization entity. An array of `Point` objects, `Polygon`, is returned by `DetectText` and `DetectCustomLabels` or used to define regions of interest in Amazon Rekognition Video operations such as `CreateStreamProcessor`. `Polygon` represents a fine-grained polygon around a detected item. |

#### 4.4.8 Detect Protective Equipment

The Amazon `DetectProtectiveEquipment` service detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE:

* Face cover
* Hand cover
* Head cover

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Image` (Image) | An array or object of detected person(s), including their status of protective equipment (with, without or indeterminate) |

This activity returns a `DetectProtectiveEquipment` object with the results as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `DetectProtectiveEquipment` | | This entity is the root object for Amazon's `DetectProtectiveEquipment` service. It includes the protective equipment model version. |
| `ProtectiveEquipmentBodyPart` | | This entity contains information about a body part detected by `DetectProtectiveEquipment` that contains Personal Protective Equipment (PPE). This includes a confidence and a name. The confidence is that of Amazon Rekognition service in the detection accuracy of the detected body part and the name is that of a detected body part. An array of `ProtectiveEquipmentBodyPart` objects is returned for each person detected by `DetectProtectiveEquipment`. |
| `EquipmentDetection` | | This entity contains information about an item of Personal Protective Equipment (PPE) detected by `DetectProtectiveEquipment`. It includes a confidence and a type. The confidence is that of Amazon Rekognition service that the bounding box contains an item of PPE and the type is the type of PPE. For more information, see `DetectProtectiveEquipment`. |
| `ProtectiveEquipmentPerson` | | This entity detects a person by a call to `DetectProtectiveEquipment`. It includes a confidence and an identifier. The confidence is that of Amazon Rekognition service that the bounding box contains a person and the identifier is for the detected person. The API returns all persons detected in the input image in an array of `ProtectiveEquipmentPerson` objects. |
| `CoversBodyPart` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains information about an item of Personal Protective Equipment (PPE) covering a corresponding body part. For more information, see `DetectProtectiveEquipment`. |
| `PersonsIndeterminate` | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons where it was not possible to determine if they are wearing Personal Protective Equipment (PPE). It is a specialization of the `PersonEquipment` generalization entity. |
| `PersonsWithoutRequiredEquipment` | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons who are not wearing all types of Personal Protective Equipment (PPE) specified in the `RequiredEquipmentTypes` field of the detected PPE. It is a specialization of the `PersonEquipment` generalization entity. |
| `PersonsWithRequiredEquipment` | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons who are wearing detected Personal Protective Equipment (PPE). It is a specialization of the `PersonEquipment` generalization entity. |
| `BoundingBoxEquipmentDetection` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectProtectiveEquipment` activity, specifically the `EquipmentDetection`. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `BoundingBoxPerson` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectProtectiveEquipment` activity, specifically the `ProtectiveEquipmentPerson`. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |

#### 4.4.9 Recognize Celebrities

The Amazon `RecognizeCelebrities` service returns an array of celebrities recognized in the input image.

The input and output for this service are shown in the table below:

| Input | Output |
| --- | --- |
| `Image` (Image) | An array or object of detected celebrities |

This activity returns a `RecognizeCelebrities` object with results as shown in the table below:

| Name | Generalization | Documentation |
| --- | --- | --- |
| `RecognizeCelebrities` | | This entity is the root object for Amazon's `RecognizeCelebrities` service. It includes the orientation correction. |
| `KnownGender` | | This entity contains the known gender identity for the celebrity that matches the provided ID. The known gender identity can be `Male`, `Female`, `Nonbinary`, or `Unlisted`. |
| `URL` | | This entity contains an array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty. |
| `FaceCelebrity` | `AmazonRekognitionConnector.Face` | This entity holds the information of the face-unrecognized and face-recognized celebrities. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `BoundingBoxRecognizeCelebrity` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectrCelebrities` activity. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PoseRecognizeCelebrity` | `AmazonRekognitionConnector.Pose` | This entity contains the pose results for the `RecognizeCelebrities` activity. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityRecognizeCelebrity` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `RecognizeCelebrity` activity. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `SmileRecognizeCelebrity` | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the smile results for the `RecognizeCelebrities` activity. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `EmotionRecognizeCelebrity` | `AmazonRekognitionConnector.Emotion` | This entity contains the emotion results for the `RecognizeCelebrities` activity. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `UnrecognizedCelebrity` | `AmazonRekognitionConnector.FaceCelebrity` | This entity holds the information of a detected face that could not be recognized as a celebrity. It is a specialization of the `FaceCelebrity` generalization entity. |
| `FaceRecognizedCelebrity` | `AmazonRekognitionConnector.FaceCelebrity` | This entity provides information about the celebrity's face, such as its location in the image. It is a specialization of the `FaceCelebrity` generalization entity. |
| `Celebrity` | | This entity provides information about a celebrity recognized by the `RecognizeCelebrities` operation. It includes an identifier, a confidence, and a name. The identifier is an unique identifier for the recognized celebrity. The confidence is that of Amazon Rekognition service that it recognizes a celebrity. The name is that of the recognized celebrity. |
| `LandmarkRecognizeCelebrity` | `AmazonRekognitionConnector.Landmark` | This entity contains the landmark results for the `RecognizeCelebrities` activity. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |

### 4.5 JavaScript Actions {#js-actions}

JavaScript actions provide an additional way to extend the functionality of your application. For more information, see [JavaScript Actions](/refguide/javascript-actions/).

#### 4.5.1 JS_AddBoundingBox

The `AddBoundingBox` JavaScript action can be used to draw a rectangle around the labels that have been found on an image.
