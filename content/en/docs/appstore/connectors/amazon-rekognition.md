---
title: "Amazon Rekognition"
url: /appstore/connectors/amazon-rekognition/
description: "Describes the configuration and usage of the Amazon Rekognition from the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "amazon", "rekognition", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

[Amazon Rekognition](#needs-url) offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images. You can use this connector when you need to extract information from images, such as the location of faces in an image.

### 1.1 Features

* Identify where the faces are located in an image
* Compare faces from two different images
* Identify where labels are located within an image
* Identify custom labels like your logo in images
* Identify if a person in an image is wearing protective equipment

### 1.2 Prerequisites

This connector requires the [Amazon Authentication V2](#needs-url) Connector from the Marketplace.

## 2 Configuration

### 2.1 Configuring Constants

All actions are exported as microflow actions that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS.

| Name                                            | Value                                                        |
| ----------------------------------------------- | ------------------------------------------------------------ |
| AWSRekognitionConnector.AWS_ClientCertificateID | The ID for the ClientCertificate used to sign the authentication requests. (Link to Auth v2 docs) |
| AWSRekognitionConnector.HostPattern             | The endpoint URL for the AWS Rekognition Service (e.g https://rekognition.us-east-1.amazonaws.com) |
| AWSRekognitionConnector.ProfileARN              | The ProfileARN for the IAM Roles Anywhere profile that has access to the Rekognition AWS service (Link to Auth v2 docs) |
| AWSRekognitionConnector.Region                  | The region in which both the IAM Roles Anywhere and the Rekognition service are located |
| AWSRekognitionConnector.RoleARN                 | The RoleARN of the IAM Role that has access to the Rekognition service. |
| AWSRekognitionConnector.AWS_TrustAnchorARN      | The TrustAnchorARN of the TrustAnchor configured in IAM Roles Anwhere that is used for the configured Role |

### 2.2 Configuring Domain Model

The entities in the table below describe all generalizations. These are (re-)used by the different models for the specific microflow actions or for storing connection details.

| Name              | Description                                                  |
| ----------------- | ------------------------------------------------------------ |
| ConnectionDetails | This entity holds information regarding the connection with Amazon's Rekognition service. |
| Face              | This entity includes a confidence. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| BoundingBox       | This entity identifies the bounding box around the label, face, text, object of interest, or Personal Protective Equipment (PPE). The left (x) coordinate and top (y) coordinate are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). The top and left values returned are ratios of the overall image size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200).<br />The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| Label             | This entity includes a confidence and a name. The confidence is that of Amazon Rekognition service's accuracy in recognizing a face and the name is that of the generated label. <br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| Polygon           | This entity contains the left (x) and top (y) coordinates of a point in an image or a video frame. The left (x) and top (y) values are ratios of the overall image size or video resolution. For example, if an input image is 700 x 200 and the values are X = 0.5 and Y = 0.25, then the point is at the (350,50) pixel coordinate in the image.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| Pose              | This entity indicates the pose of the face as determined by its pitch, roll, and yaw. These three Euler angles could be described as following: the pitch is the rotational movement of the head that resembles nodding, the yaw resembles the movement of shaking, and the roll resembles the movement of tilting.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| ImageQuality      | This entity identifies the brightness and sharpness of the face image. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| Landmark          | This entity indicates the location of the landmark on the face, it includes the type and left (x) and top (y) coordinates. The type relates to the referenced region of the face.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| PhysicalProperty  | This entity is extracted from various entities that consist of the same attributes and can be described as physical properties. The attributes include a confidence and a value. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face and the value is whether the said physical property has been detected or not. These entities are the following:<br />- `Beard`<br />- `Eyeglasses`<br />- `EyesOpen`<br />- `CoversBodyPart`<br />- `MouthOpen`<br />- `Mustache`<br />- `Sunglasses`<br />- `SmileDetectFace`<br />- `SmileRecognizeFace`<br />- `SmileCompareFace`<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| Emotion           | This entity holds the information regarding the emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| PersonsEquipment  | This entity holds information regarding a person's status of wearing protective equipment, including the value. The value is a representation of the ID of the detected person.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |

### 2.3 Enumerations

#### 2.3.1 QualityFilter

| **Name** | **Caption** |
| -------- | ----------- |
| `NONE`   | `NONE`      |
| `AUTO`   | `AUTO`      |
| `LOW`    | `LOW`       |
| `MEDIUM` | `MEDIUM`    |
| `HIGH`   | `HIGH`      |

#### 2.3.2 AWS_Region

| **Name**         | **Caption**      |
| ---------------- | ---------------- |
| `us_east_2`      | `us-east-2`      |
| `us_east_1`      | `us-east-1`      |
| `us_west_1`      | `us-west-1`      |
| `us_west_2`      | `us-west-2`      |
| `ap_south_1`     | `ap-south-1`     |
| `ap_northeast_2` | `ap-northeast-2` |
| `ap_southeast_1` | `ap-southeast-1` |
| `ap_southeast_2` | `ap-southeast-2` |
| `ap_northeast_1` | `ap-northeast-1` |
| `ca_central_1`   | `ca-central-1`   |
| `eu_central_1`   | `eu-central-1`   |
| `eu_west_1`      | `eu-west-1`      |
| `eu_west_2`      | `eu-west-2`      |
| `us_gov_west_1`  | `us-gov-west-1`  |

## 3 Usage

### 3.1 Actions

#### 3.1.1 Compare Face

The Amazon `CompareFaces` service compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.

The input and output for this service are shown in the table below:

| Input | Output |
| ----- | ------ |
|- SourceImage (Image)<br />\- TargetImage (Image)<br />\- SimilarityThreshold (Decimal)<br />\- QualityFilter (Enumeration)|\- Level of similarity among inputted images (Decimal)|

This service returns a `CompareFaces` entity with associated entities as shown in the table below:

| Name                      | Generalization                                | Documentation                                                |
| ------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| `CompareFaces`            |                                               | This entity is the root object for Amazon's `CompareFaces` service. |
| `FaceToBeCompared`        | `AmazonRekognitionConnector.Face`             | This entity contains the face results for the `CompareFace` action. It includes a confidence. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `MatchedFace`             |                                               | This entity holds the information on the level of similarity of the matched face with the face to be compared. The similarity is the confidence level that the source image and target image are a match. |
| `BoundingBoxCompareFace`  | `AmazonRekognitionConnector.BoundingBox`      | This entity contains the bounding box results for the `CompareFaces` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `ImageQualityCompareFace` | `AmazonRekognitionConnector.ImageQuality`     | This entity contains the image quality results for the `CompareFaces` action. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `SmileCompareFace`        | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the physical property results for the `CompareFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `LandmarkCompareFace`     | `AmazonRekognitionConnector.Landmark`         | This entity contains the landmark results for the `CompareFaces` action. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |
| `EmotionCompareFace`      | `AmazonRekognitionConnector.Emotion`          | This entity contains the emotion results for the `CompareFaces` action. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `PoseCompareFace`         | `AmazonRekognitionConnector.Pose`             | This entity contains the pose results for the `CompareFaces` action. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |

#### 3.1.2 Detect Custom Labels

The Amazon `DetectCustomLabels `service detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the `ProjectVersionArn` input parameter.

The input and output for this service are shown in the table below:

| Input                                                        | Output          |
| ------------------------------------------------------------ | --------------- |
| - `MinConfidence` (Integer/Long)<br />- `MaxResults` (Integer/Long)<br />- `ProjectARN` (String)<br />- `Image` (Image) | \- Custom label |

This service returns a list of `DetectCustomLabel`s objects and associated objects.

| Name                           | Generalization                           | Documentation                                                |
| ------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| `DetectCustomLabels`           | `AmazonRekognitionConnector.Label`       | This entity is the root object for Amazon's `DetectCustomLabels` service. It includes a confidence and a value. Additionally, it is used to hold information over associations about the detected label, including the name, detected instances, parent labels, and confidence level. It is a specialization of the `Label` generalization entity. |
| `BoundingBoxDetectCustomLabel` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectCustomLabels` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PolygonDetectCustomLabel`     | `AmazonRekognitionConnector.Polygon`     | This entity contains the polygon results for the `DetectCustomLabels` action. It includes left (x) and top (y) coordinates. It is a specialization of the `Polygon` generalization entity. An array of `Point` objects, `Polygon`, is returned by `DetectText` and `DetectCustomLabels` or used to define regions of interest in Amazon Rekognition Video operations such as `CreateStreamProcessor`. `Polygon` represents a fine-grained polygon around a detected item. |

#### 3.1.3 Detect Faces – Default

The Amazon `DetectFaces` service detects faces within an image that is provided as input.

The input and output for this service are shown in the table below:

| Input            | Output                                    |
| ---------------- | ----------------------------------------- |
| \- Image (Image) | \- An array or object of detected face(s) |

This service returns a list of `DetectFaces` object with results.

| Name                     | Generalization                            | Documentation                                                |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| `DetectFaces`            |                                           | This entity is the root object for Amazon's `DetectFaces` service. It includes the orientation correction. |
| `BoundingBoxDetectFace`  | `AmazonRekognitionConnector.BoundingBox`  | This entity contains the bounding box results for the `DetectFaces` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PoseDetectFace`         | `AmazonRekognitionConnector.Pose`         | This entity contains the pose results for the `DetectFaces` action. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityDetectFace` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `DetectFaces` action. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `LandmarkDetectFace`     | `AmazonRekognitionConnector.Landmark`     | This entity contains the landmark results for the `DetectFaces` action. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |
