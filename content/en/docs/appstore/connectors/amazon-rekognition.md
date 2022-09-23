---
title: "Amazon Rekognition"
url: /appstore/connectors/amazon-rekognition/
description: "Describes the configuration and usage of the Amazon Rekognition from the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "amazon", "rekognition", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

[Amazon Rekognition](#needs-url) offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from your images. It enables you to extract information from images, such as the location of faces in an image.

### 1.1 Typical Use Cases

Below are some typical use cases : 

* Identify where the faces are located in an image
* Compare faces from two different images
* Identify where labels are located in an image
* Identify custom labels like a logo in images
* Identify if a person in an image is wearing protective equipment

### 1.2 Prerequisites

The Amazon Rekognition connector requires the installation of [Amazon Authentication version 2](/appstore/connectors/aws-authentication/) from the Marketplace.

## 2 Configuration

### 2.1 Constants

All actions are exported as microflow actions that can directly be added to a microflow. Make sure the constants are configured correctly as shown in the table below, so the connector can authenticate the request with AWS.

| Name                                              | Value                                                        |
| ------------------------------------------------- | ------------------------------------------------------------ |
| `AWSRekognitionConnector.AWS_ClientCertificateID` | The ID for the ClientCertificate used to sign the authentication requests. (Link to Auth v2 docs) |
| `AWSRekognitionConnector.HostPattern`             | The endpoint URL for the AWS Rekognition Service, for example, `https://rekognition.us-east-1.amazonaws.com` |
| `AWSRekognitionConnector.ProfileARN`              | The ProfileARN for the IAM Roles Anywhere profile that has access to the Rekognition AWS service (Link to Auth v2 docs) |
| `AWSRekognitionConnector.Region`                  | The region in which both the IAM Roles Anywhere and the Rekognition service are located |
| `AWSRekognitionConnector.RoleARN`                 | The RoleARN of the IAM Role that has access to the Rekognition service. |
| `AWSRekognitionConnector.AWS_TrustAnchorARN`      | The TrustAnchorARN of the TrustAnchor configured in IAM Roles Anwhere that is used for the configured Role |

### 2.2 Domain Model

The entities in the table below describe all generalizations. These are (re-)used by the different models for the specific microflow actions or for storing connection details.

| Name                | Description                                                  |
| ------------------- | ------------------------------------------------------------ |
| `ConnectionDetails` | This entity holds information regarding the connection with Amazon's Rekognition service. |
| `Face`              | This entity includes a confidence. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `BoundingBox`       | This entity identifies the bounding box around the label, face, text, object of interest, or Personal Protective Equipment (PPE). The left (x) coordinate and top (y) coordinate are coordinates representing the top and left sides of the bounding box. Note that the upper-left corner of the image is the origin (0,0). The top and left values returned are ratios of the overall image size. For example, if the input image is 700 x 200 pixels, and the top-left coordinate of the bounding box is 350 x 50 pixels, the API returns a left value of 0.5 (350/700) and a top value of 0.25 (50/200).<br />The width and height values represent the dimensions of the bounding box as a ratio of the overall image dimension. For example, if the input image is 700 x 200 pixels, and the bounding box width is 70 pixels, the width returned is 0.1.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Label`             | This entity includes a confidence and a name. The confidence is that of Amazon Rekognition service's accuracy in recognizing a face and the name is that of the generated label. <br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Polygon`           | This entity contains the left (x) and top (y) coordinates of a point in an image or a video frame. The left (x) and top (y) values are ratios of the overall image size or video resolution. For example, if an input image is 700 x 200 and the values are X = 0.5 and Y = 0.25, then the point is at the (350,50) pixel coordinate in the image.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Pose`              | This entity indicates the pose of the face as determined by its pitch, roll, and yaw. These three Euler angles could be described as following: the pitch is the rotational movement of the head that resembles nodding, the yaw resembles the movement of shaking, and the roll resembles the movement of tilting.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `ImageQuality`      | This entity identifies the brightness and sharpness of the face image. Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Landmark`          | This entity indicates the location of the landmark on the face, it includes the type and left (x) and top (y) coordinates. The type relates to the referenced region of the face.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `PhysicalProperty`  | This entity is extracted from various entities that consist of the same attributes and can be described as physical properties. The attributes include a confidence and a value. The confidence is that of Amazon Rekognition service in its accuracy of recognizing a face and the value is whether the said physical property has been detected or not. These entities are the following:<br />- `Beard`<br />- `Eyeglasses`<br />- `EyesOpen`<br />- `CoversBodyPart`<br />- `MouthOpen`<br />- `Mustache`<br />- `Sunglasses`<br />- `SmileDetectFace`<br />- `SmileRecognizeFace`<br />- `SmileCompareFace`<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `Emotion`           | This entity holds the information regarding the emotions that appear to be expressed on the face, and the confidence level in the determination. The API is only making a determination of the physical appearance of a person's face. It is not a determination of the person’s internal emotional state and should not be used in such a way. For example, a person pretending to have a sad face might not be sad emotionally.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |
| `PersonsEquipment`  | This entity holds information regarding a person's status of wearing protective equipment, including the value. The value is a representation of the ID of the detected person.<br />Additionally, this entity is a generalization, and the specialization(s) of this entity should be used instead. |

### 2.3 Enumerations

#### 2.3.1 `QualityFilter`

| **Name** | **Caption** |
| -------- | ----------- |
| `NONE`   | NONE        |
| `AUTO`   | AUTO        |
| `LOW`    | LOW         |
| `MEDIUM` | MEDIUM      |
| `HIGH`   | HIGH        |

#### 2.3.2 `AWS_Region`

| **Name**         | **Caption**    |
| ---------------- | -------------- |
| `us_east_2`      | us-east-2      |
| `us_east_1`      | us-east-1      |
| `us_west_1`      | us-west-1      |
| `us_west_2`      | us-west-2      |
| `ap_south_1`     | ap-south-1     |
| `ap_northeast_2` | ap-northeast-2 |
| `ap_southeast_1` | ap-southeast-1 |
| `ap_southeast_2` | ap-southeast-2 |
| `ap_northeast_1` | ap-northeast-1 |
| `ca_central_1`   | ca-central-1   |
| `eu_central_1`   | eu-central-1   |
| `eu_west_1`      | eu-west-1      |
| `eu_west_2`      | eu-west-2      |
| `us_gov_west_1`  | us-gov-west-1  |

### 2.4 Actions

#### 2.4.1 Compare Face

The Amazon `CompareFaces` service compares a face in the source input image with each of the 100 largest faces detected in the target input image. If the source image contains multiple faces, the service detects the largest face and compares it with each face detected in the target image.

The input and output for this service are shown in the table below:

| Input                                                        | Output                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| - `SourceImage` (Image)<br />- `TargetImage` (Image)<br />\- `SimilarityThreshold` (Decimal)<br />- `QualityFilter` (Enumeration) | - Level of similarity among inputted images (Decimal) |

This action returns a `CompareFaces` entity with associated entities as shown in the table below:

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

#### 2.4.2 Detect Custom Labels

The Amazon `DetectCustomLabels` service detects custom labels in a supplied image by using an Amazon Rekognition Custom Labels model. You specify which version of a model version to use by using the `ProjectVersionArn` input parameter.

The input and output for this service are shown in the table below:

| Input                                                        | Output          |
| ------------------------------------------------------------ | --------------- |
| - `MinConfidence` (Integer/Long)<br />- `MaxResults` (Integer/Long)<br />- `ProjectARN` (String)<br />- `Image` (Image) | \- Custom label |

This action returns a list of `DetectCustomLabels` objects and associated objects as shown in the table below:

| Name                           | Generalization                           | Documentation                                                |
| ------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| `DetectCustomLabels`           | `AmazonRekognitionConnector.Label`       | This entity is the root object for Amazon's `DetectCustomLabels` service. It includes a confidence and a value. Additionally, it is used to hold information over associations about the detected label, including the name, detected instances, parent labels, and confidence level. It is a specialization of the `Label` generalization entity. |
| `BoundingBoxDetectCustomLabel` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectCustomLabels` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PolygonDetectCustomLabel`     | `AmazonRekognitionConnector.Polygon`     | This entity contains the polygon results for the `DetectCustomLabels` action. It includes left (x) and top (y) coordinates. It is a specialization of the `Polygon` generalization entity. An array of `Point` objects, `Polygon`, is returned by `DetectText` and `DetectCustomLabels` or used to define regions of interest in Amazon Rekognition Video operations such as `CreateStreamProcessor`. `Polygon` represents a fine-grained polygon around a detected item. |

#### 2.4.3 Detect Faces – Default

The Amazon `DetectFaces` service detects faces within an image that is provided as input.

The input and output for this service are shown in the table below:

| Input              | Output                                    |
| ------------------ | ----------------------------------------- |
| \- `Image` (Image) | \- An array or object of detected face(s) |

This action returns a list of `DetectFaces` object with results as shown in the table below:

| Name                     | Generalization                            | Documentation                                                |
| ------------------------ | ----------------------------------------- | ------------------------------------------------------------ |
| `DetectFaces`            |                                           | This entity is the root object for Amazon's `DetectFaces` service. It includes the orientation correction. |
| `BoundingBoxDetectFace`  | `AmazonRekognitionConnector.BoundingBox`  | This entity contains the bounding box results for the `DetectFaces` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PoseDetectFace`         | `AmazonRekognitionConnector.Pose`         | This entity contains the pose results for the `DetectFaces` action. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityDetectFace` | `AmazonRekognitionConnector.ImageQuality` | This entity contains the image quality results for the `DetectFaces` action. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `LandmarkDetectFace`     | `AmazonRekognitionConnector.Landmark`     | This entity contains the landmark results for the `DetectFaces` action. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |

#### 2.4.4 Detect Faces – All Attributes

The Amazon `DetectFaces` service detects faces within an image that is provided as input.

The input and output for this service are shown in the table below:

| Input              | Output                                    |
| ------------------ | ----------------------------------------- |
| \- `Image` (Image) | \- An array or object of detected face(s) |

This action returns a list of `DetectFaces` object with results as shown in the table below:

| Name                     | Generalization                                | Documentation                                                |
| ------------------------ | --------------------------------------------- | ------------------------------------------------------------ |
| `DetectFaces`            |                                               | This entity is the root object for Amazon's `DetectFaces` service. It includes the orientation correction. |
| `FaceDetectFace`         | `AmazonRekognitionConnector.Face`             | This entity contains the face results for the `DetectFaces` action. It includes a confidence. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `AgeRange`               |                                               | This entity contains the estimated age range, in years, for a detected face. This includes the high and low, where the high represents the ceiling of the range and low represents the floor of the range. Amazon Rekognition estimates an age range for faces detected in the input image. Estimated age ranges can overlap. A face of a five-year-old might have an estimated range of 4-6, while the face of a six-year-old might have an estimated range of 4-8. |
| `Beard`                  | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the beard results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Eyeglasses`             | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the eyeglasses results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `EyesOpen`               | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the eyes open results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Gender`                 |                                               | This entity holds the prediction of the gender of a detected face. The entity includes a confidence and a value, where the confidence is the confidence level of the prediction and the value is the predicted gender of the face. Amazon Rekognition makes gender-binary (male or female) predictions based on the physical appearance of a face in a particular image. This kind of prediction is not designed to categorize a person’s gender identity, and you should not use Amazon Rekognition to make such a determination. For example, a male actor wearing a long-haired wig and earrings for a role might be predicted as female. Using Amazon Rekognition to make gender-binary predictions is best suited for use cases where aggregate gender distribution statistics need to be analyzed without identifying specific users. For example, the percentage of female users compared to male users on a social media platform. We do not recommend using gender-binary predictions to make decisions that impact an individual's rights, privacy, or access to services. |
| `BoundingBoxDetectFace`  | `AmazonRekognitionConnector.BoundingBox`      | This entity contains the bounding box results for the `DetectFaces` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `MouthOpen`              | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the mouth open results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `Mustache`               | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the mustache results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `PoseDetectFace`         | `AmazonRekognitionConnector.Pose`             | This entity contains the pose results for the `DetectFaces` action. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityDetectFace` | `AmazonRekognitionConnector.ImageQuality`     | This entity contains the image quality results for the `DetectFaces` action. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `EmotionDetectFace`      | `AmazonRekognitionConnector.Emotion`          | This entity contains the emotion results for the `DetectFaces` action. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `Sunglasses`             | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the sunglasses results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `SmileDetectFace`        | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the smile results for the `DetectFaces` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `LandmarkDetectFace`     | `AmazonRekognitionConnector.Landmark`         | This entity contains the landmark results for the `DetectFaces` action. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |

#### 2.4.5 Detect Moderation Labels

The Amazon `DetectModerationLabels` service detects unsafe content in a specified image (JPEG or PNG). Use `DetectModerationLabels` to moderate images depending on your requirements. For example, you might want to filter images that contain nudity, but not images containing suggestive content.

The input and output for this service are shown in the table below:

| Input                                                     | Output                                                |
| --------------------------------------------------------- | ----------------------------------------------------- |
| \- `MinConfidence` (Integer/Long)<br />\- `Image` (Image) | \- An array or object of detected moderation label(s) |

This action returns a list of `DetectModerationLabels` objects and associated objects as shown in the table below:

| Name                        | Generalization | Documentation                                                |
| --------------------------- | -------------- | ------------------------------------------------------------ |
| `DetectModerationLabels`    |                | This entity is the root object for Amazon's `DetectModerationLabels` service. It includes the moderation model version. |
| `ModerationLabel`           |                | This entity provides information about a single type of inappropriate, unwanted, or offensive content found in an image or video. Each type of moderated content has a label within a hierarchical taxonomy. The confidence represents the confidence level of the label detection and the name represents the label content. |
| `HumanLoopActivationOutput` |                | This entity shows the results of the human in the loop evaluation. It includes two attributes: (1) `HumanLoopActivationCondition` and (2) `HumanLoopArn`. The former shows the result of condition evaluations, including those conditions which activated a human review, while the latter is the Amazon Resource Name (ARN) of the `HumanLoop` created. If there is no `HumanLoopArn`, the input did not trigger a human review. |
| `HumanActivityReason`       |                | This entity includes the conditions which activated a human review. |

#### 2.4.6 Detect Labels

The Amazon `DetectLabels` service detects instances of real-world entities within an image (JPEG or PNG) that is provided as input. This includes objects like flower, tree, and table; events like wedding, graduation, and birthday party; and concepts like landscape, evening, and nature. 

The input and output for this service are shown in the table below:

| Input                                                        | Output                                     |
| ------------------------------------------------------------ | ------------------------------------------ |
| \- `MinConfidence` (Integer/Long)<br />\- `MaxLabels` (Integer/Long)<br />- `Image` (Image) | \- An array or object of detected label(s) |

This action returns a list of `DetectLabels` objects with associated objects as shown in the table below:

| Name                    | Generalization                           | Documentation                                                |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| `DetectLabels`          |                                          | This entity is the root object for Amazon's `DetectLabels` service. It includes the label model version and orientation correction. |
| `Instance`              |                                          | This entity holds an instance of a label returned by Amazon Rekognition Image (`DetectLabels`) or by Amazon Rekognition Video (`GetLabelDetection`). |
| `Parent`                |                                          | This entity contains a parent label for a label. A label can have zero, one, or more parents. |
| `BoundingBoxDetectFace` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectFaces` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `LabelDetectLabel`      | `AmazonRekognitionConnector.Label`       | This entity contains the label results for the `DetectLabels` action. It includes a confidence and a name. Additionally, it is used to hold information over associations about the detected label, including the name, detected instances, parent labels, and confidence level. It is a specialization of the `Label` generalization entity. |

#### 2.4.7 Detect Text

The Amazon `DetectText` service detects text in the input image and converts it into machine-readable text.

The input and output for this service are shown in the table below:

| Input             | Output                                 |
| ----------------- | -------------------------------------- |
| - `Image` (Image) | \- An array or object of detected text |

This action returns a `DetectText` object with results as shown in the table below:

| Name                    | Generalization                           | Documentation                                                |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| `DetectText`            |                                          | This entity is the root object for Amazon's `DetectText` service. It includes the text model version. |
| `TextDetection`         |                                          | This entity contains information about a word or line of text detected by `DetectText`. This includes a confidence, the detected text, its (parental) ID, and type. The confidence is that of Amazon's Rekognition in its accuracy of the detected text and the accuracy of the geometry points around the detected text. The detected text is the word or line of text recognized by the service. The `DetectedText` field contains the text that Amazon Rekognition detected in the image. The ID is the identifier for the detected text, and the parent ID is for the detected text identified by the value of `_Id`.  Every word and line has an identifier (`Id`). The word `Id` is also an index for the word within a line of words. Each word belongs to a line and has a parent identifier (`ParentId`) that identifies the line of text in which the word appears. The type reflects the type of text that was detected (`Type` or `Line`). If the type of the detected text is `Line`, the value of `ParentId` is `null`. |
| `Geometry`              |                                          | This entity contains information over associations about where an object (`DetectCustomLabels`) or text (`DetectText`) is located in an image. |
| `BoundingBoxTextDetect` | `AmazonRekognitionConnector.BoundingBox` | This entity contains the bounding box results for the `DetectText` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PolygonTextDetect`     | `AmazonRekognitionConnector.Polygon`     | This entity contains the polygon results for the `DetectText` action. It includes left (x) and top (y) coordinates. It is a specialization of the `Polygon` generalization entity. An array of `Point` objects, `Polygon`, is returned by `DetectText` and `DetectCustomLabels` or used to define regions of interest in Amazon Rekognition Video operations such as `CreateStreamProcessor`. `Polygon` represents a fine-grained polygon around a detected item. |

#### 2.4.8 Detect Protective Equipment

The Amazon `DetectProtectiveEquipment` service detects Personal Protective Equipment (PPE) worn by people detected in an image. Amazon Rekognition can detect the following types of PPE:

* Face cover
* Hand cover
* Head cover

The input and output for this service are shown in the table below:

| Input             | Output                                                       |
| ----------------- | ------------------------------------------------------------ |
| - `Image` (Image) | - An array or object of detected person(s), including their status of protective equipment (with, without or indeterminate) |

This action returns a `DetectProtectiveEquipment` object with the results as shown in the table below:

| Name                              | Generalization                                | Documentation                                                |
| --------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| `DetectProtectiveEquipment`       |                                               | This entity is the root object for Amazon's `DetectProtectiveEquipment` service. It includes the protective equipment model version. |
| `ProtectiveEquipmentBodyPart`     |                                               | This entity contains information about a body part detected by `DetectProtectiveEquipment` that contains Personal Protective Equipment (PPE). This includes a confidence and a name. The confidence is that of Amazon Rekognition service in the detection accuracy of the detected body part and the name is that of a detected body part. An array of `ProtectiveEquipmentBodyPart` objects is returned for each person detected by `DetectProtectiveEquipment`. |
| `EquipmentDetection`              |                                               | This entity contains information about an item of Personal Protective Equipment (PPE) detected by `DetectProtectiveEquipment`. It includes a confidence and a type. The confidence is that of Amazon Rekognition service that the bounding box contains an item of PPE and the type is the type of PPE. For more information, see `DetectProtectiveEquipment`. |
| `ProtectiveEquipmentPerson`       |                                               | This entity detects a person by a call to `DetectProtectiveEquipment`. It includes a confidence and an identifier. The confidence is that of Amazon Rekognition service that the bounding box contains a person and the identifier is for the detected person. The API returns all persons detected in the input image in an array of `ProtectiveEquipmentPerson` objects. |
| `CoversBodyPart`                  | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains information about an item of Personal Protective Equipment (PPE) covering a corresponding body part. For more information, see `DetectProtectiveEquipment`. |
| `PersonsIndeterminate`            | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons where it was not possible to determine if they are wearing Personal Protective Equipment (PPE). It is a specialization of the `PersonEquipment` generalization entity. |
| `PersonsWithoutRequiredEquipment` | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons who are not wearing all types of Personal Protective Equipment (PPE) specified in the `RequiredEquipmentTypes` field of the detected PPE. It is a specialization of the `PersonEquipment` generalization entity. |
| `PersonsWithRequiredEquipment`    | `AmazonRekognitionConnector.PersonsEquipment` | This entity contains an array of IDs for persons who are wearing detected Personal Protective Equipment (PPE). It is a specialization of the `PersonEquipment` generalization entity. |
| `BoundingBoxEquipmentDetection`   | `AmazonRekognitionConnector.BoundingBox`      | This entity contains the bounding box results for the `DetectProtectiveEquipment` action, specifically the `EquipmentDetection`. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `BoundingBoxPerson`               | `AmazonRekognitionConnector.BoundingBox`      | This entity contains the bounding box results for the `DetectProtectiveEquipment` action, specifically the `ProtectiveEquipmentPerson`. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |

#### 2.4.9 Recognize Celebrities

The Amazon `RecognizeCelebrities` service returns an array of celebrities recognized in the input image.

The input and output for this service are shown in the table below:

| Input             | Output                                        |
| ----------------- | --------------------------------------------- |
| - `Image` (Image) | \- An array or object of detected celebrities |

This action returns a `RecognizeCelebrities` object with results as shown in the table below:

| Name                             | Generalization                                | Documentation                                                |
| -------------------------------- | --------------------------------------------- | ------------------------------------------------------------ |
| `RecognizeCelebrities`           |                                               | This entity is the root object for Amazon's `RecognizeCelebrities` service. It includes the orientation correction. |
| `KnownGender`                    |                                               | This entity contains the known gender identity for the celebrity that matches the provided ID. The known gender identity can be `Male`, `Female`, `Nonbinary`, or `Unlisted`. |
| `URL`                            |                                               | This entity contains an array of URLs pointing to additional information about the celebrity. If there is no additional information about the celebrity, this list is empty. |
| `FaceCelebrity`                  | `AmazonRekognitionConnector.Face`             | This entity holds the information of the face-unrecognized and face-recognized celebrities. Additionally, it is used to hold information over associations regarding the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. It is a specialization of the `Face` generalization entity. |
| `BoundingBoxRecognizeCelebrity`  | `AmazonRekognitionConnector.BoundingBox`      | This entity contains the bounding box results for the `DetectrCelebrities` action. It includes the left (x) coordinates, top (y) coordinates, and the image's width and height. It is a specialization of the `BoundingBox` generalization entity. |
| `PoseRecognizeCelebrity`         | `AmazonRekognitionConnector.Pose`             | This entity contains the pose results for the `RecognizeCelebrities` action. It includes the pitch, roll, and yaw of the image. It is a specialization of the `Pose` generalization entity. |
| `ImageQualityRecognizeCelebrity` | `AmazonRekognitionConnector.ImageQuality`     | This entity contains the image quality results for the `RecognizeCelebrity` action. It includes the brightness and sharpness of the image. It is a specialization of the `ImageQuality` generalization entity. |
| `SmileRecognizeCelebrity`        | `AmazonRekognitionConnector.PhysicalProperty` | This entity contains the smile results for the `RecognizeCelebrities` action. It includes a confidence and a value. It is a specialization of the `PhysicalProperty` generalization entity. |
| `EmotionRecognizeCelebrity`      | `AmazonRekognitionConnector.Emotion`          | This entity contains the emotion results for the `RecognizeCelebrities` action. It includes a confidence and a type. It is a specialization of the `Emotion` generalization entity. |
| `UnrecognizedCelebrity`          | `AmazonRekognitionConnector.FaceCelebrity`    | This entity holds the information of a detected face that could not be recognized as a celebrity. It is a specialization of the `FaceCelebrity` generalization entity. |
| `FaceRecognizedCelebrity`        | `AmazonRekognitionConnector.FaceCelebrity`    | This entity provides information about the celebrity's face, such as its location in the image. It is a specialization of the `FaceCelebrity` generalization entity. |
| `Celebrity`                      |                                               | This entity provides information about a celebrity recognized by the `RecognizeCelebrities` operation. It includes an identifier, a confidence, and a name. The identifier is an unique identifier for the recognized celebrity. The confidence is that of Amazon Rekognition service that it recognizes a celebrity. The name is that of the recognized celebrity. |
| `LandmarkRecognizeCelebrity`     | `AmazonRekognitionConnector.Landmark`         | This entity contains the landmark results for the `RecognizeCelebrities` action. It includes its type and left (x) and top (y) coordinates. It is a specialization of the `Landmark` generalization entity. |