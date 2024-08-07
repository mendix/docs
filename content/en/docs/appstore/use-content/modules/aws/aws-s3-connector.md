---
title: "Amazon S3"
url: /appstore/modules/aws/amazon-s3/
description: "Describes the configuration and usage of the Amazon S3 connector from the Mendix Marketplace. Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
aliases:
    - /appstore/connectors/aws/aws-s3-connector/
    - /appstore/connectors/aws/amazon-s3/
---

## 1 Introduction

The [Amazon S3 connector](https://marketplace.mendix.com/link/component/120340) enables you to connect your app to [Amazon S3](https://aws.amazon.com/s3/) and easily store objects.

### 1.1 Typical Use Cases

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements. Some typical use cases of Amazon S3 are:

* Build a data lake - Run big data analytics, artificial intelligence (AI), machine learning (ML), and high performance computing (HPC) applications to unlock data insights.
* Back up and restore critical data - Meet Recovery Time Objectives (RTO), Recovery Point Objectives (RPO), and compliance requirements with S3's robust replication features.
* Archive data at the lowest cost - Move data archives to the Amazon S3 Glacier storage classes to lower costs, eliminate operational complexities, and gain new insights.
* Run cloud-native applications - Build fast, powerful mobile and web-based cloud-native apps that scale automatically in a highly available configuration.

### 1.2 Prerequisites {#prerequisites}

The Amazon S3 connector requires the [AWS Authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). If you are using the Amazon S3 connector version 3.0 or higher, it requires the AWS Authentication connector version 3.0 or higher. It is crucial for the Amazon S3 connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/modules/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [Using Marketplace Content](/appstore/use-content/) to import the Amazon S3 connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonS3Connector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon S3. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon S3 service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

As of version 3.0.0 of the [AWS Authentication Connector](https://marketplace.mendix.com/link/component/120333), all the resources and logic required to set up authentication are centralized inside the AWS Authentication Connector module. 

The AWS Authentication Connector supports both **static credentials** and **temporary credentials**. For more information and detailed instructions please refer to the [AWS Authentication Connector documentation page](/appstore/modules/aws/aws-authentication/).

### 3.2 Configuring a Microflow for an AWS Service

After you configure the authentication profile for Amazon S3, you can implement the functions of the connector by using the provided activities in microflows. For example, to create a bucket in S3, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *DS_CreateBucket*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonS3Connector** > **Operations** section, find the **CreateBucket** activity.
4. Drag the **CreateBucket** activity onto the microflow you are working on.
5. Double-click the **CreateBucket** activity and configure the **AWS_Region** parameter by doing the following steps:
    1. Click **Edit parameter value**, edit the **ENUM_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `ENUM_Region`, and then press **Ctrl+Space**.
    3. In the autocomplete dialog, select **AWSAuthentication.ENUM_Region**, then type *.* and select your AWS region from the list.

        {{< figure src="/attachments/appstore/use-content/modules/aws-s3-connector/awsregions.png" alt="The list of AWS regions" class="no-border" >}}
    
6. In the **App Explorer**, in the **AWSAuthentication** > **Operations** section, find the **GetStaticCredentials** and **GetTemporaryCredentials** actions.
7. Drag the one you would like to use onto the microflow you are working on, and position it between the microflow start event and the **CreateBucket** activity.
8. Double-click the microflow action and then configure the required **Region** parameter in the same way as described in step 5.
9. Double-click the **CreateBucket** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **GetStaticCredentials** or **GetTemporaryCredentials** and the **CreateBucket** activity.
11. Double-click the **Create Object** activity, and then select **AmazonS3Connector.CreateBucketRequest** as the entity.
12. In the **Member** section, click **New**, and then select **BucketName** as the member.
13. Configure an expression to generate the names of the buckets created in Amazon S3 by the microflow.
{{% alert color="warning" %}}
The name generated by the expression must be all lower-case. If the bucket name is not lower-case, the Amazon S3 service will return an error.
{{% /alert %}}

14. Click **OK**, and then click **OK** again.
15. Double-click the **CreateBucket** activity and configure the **CreateBucketRequest** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **CreateBucketRequest** parameter and let it auto-fill.

 {{< figure src="/attachments/appstore/use-content/modules/aws-s3-connector/microflow.png" alt="Configured microflow" class="no-border" >}}

## 4 Technical Reference

To help you work with the Amazon S3 connector, the following sections of this document list the available entities, enumerations, and activities that you can use in your application.

### 4.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The entities in the table below describe all generalizations. These are reused by the different models for the specific microflow activities or for storing connection details.

#### 4.1.1 S3Object {#s3object}

| Attribute | Description | 
| --- | --- |
| `ETag` | Describes the entity tag is a hash of the object |
| `Key` | Describes the name that has been assigned to an object |
| `LastModified` | Describes the creation date of the object |
| `Size` | Describes the size in bytes of the object |
| `StorageClass` | Describes the class of the storage used to store the object |

#### 4.1.2 CreateBucketRequest {#createbucketrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket to create |

#### 4.1.3 CreateBucketResponse {#createbucketresponse}

| Attribute | Description | 
| --- | --- |
| `Location` | Gives the location of the created bucket |

#### 4.1.4 PutObjectRequest {#putobjectrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket to put the object in |
| `Key`| Describes the unique identifier for the object that needs to be put |

#### 4.1.5 GetObjectRequest {#getobjectrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket to get the object from |
| `Key` | Describes the object's key |

#### 4.1.6 GetObjectResponse {#getobjectresponse}

| Attribute | Description | 
| --- | --- |
| `Key` | Describes the object's key |

#### 4.1.7 DeleteObjectRequest {#deleteobjectrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket to delete |
| `Key` | Describes the object's key |

#### 4.1.8 ListBucketResponse {#listbucketrequest}

| Attribute | Description | 
| --- | --- |
| N/A | The object does not contain any attributes, but is associated with the `Bucket` object|

#### 4.1.9 Bucket {#bucket}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket |
| `CreationDate` | Describes the creation date of the bucket |

#### 4.1.10 ListObjectsRequest {#listobjectsrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket that includes the desired list of the objects |
| `Delimiter` | Describes a character you use to group keys |
| `MaxKeys` | Describes  the maximum number of keys returned in the response. By default the action returns up to 1,000 key names. The response might contain fewer keys but will never contain more |
| `Prefix` | Describes the prefix that can be used to limit the response to keys that begin with the specified prefix |
| `ContinuationToken` | Describes to the Amazon S3 service that the list is being continued on this bucket with a token |
| `StartAfter` | Describes where you want Amazon S3 to start listing from. Amazon S3 starts listing after this specified key. `StartAfter` can be any key in the bucket |

#### 4.1.11 ListObjectsResponse {#listobjectsresponse}

| Attribute | Description | 
| --- | --- |
| `IsTruncated` | Describes whether all results were returned. If all are returned, this value is set to **true**, otherwise it is set to **false** |
| `KeyCount` | Describes the number of keys returned with this request. `KeyCount` will always be less than or equal to the `MaxKeys` field  of the `ListObjectsRequest`. For example, if you ask for 50 keys, your result will include 50 keys or fewer |
| `NextContinuationToken` | Describes whether there are more keys in the bucket that can be listed. The next list requests to Amazon S3 can be continued with this `NextContinuationToken`. `NextContinuationToken` is obfuscated and is not a real key |

#### 4.1.12 ListedObject {#listedobject}

| Attribute | Description | 
| --- | --- |
| N/A | Is a generalization of the S3 object |

#### 4.1.13 CommonPrefix {#commonprefix}

| Attribute | Description | 
| --- | --- |
| `Prefix` | Describes the name of the prefix |

#### 4.1.14 CopyObjectRequest {#copyobjectrequest}

| Attribute | Description | 
| --- | --- |
| `SourceBucketName` | Describes the name of the source bucket | 
| `SourceKey` | Describes the source Key of the object |
| `DestinationBucketName` | Describes the name of the target bucket |
| `DestinationKey` | Describes the target Key of the object |

#### 4.1.15 DeleteBucketRequest {#deletebucketrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket to be deleted | 

#### 4.1.16 MoveObjectRequest {#moveobjectrequest}

| Attribute | Description | 
| --- | --- |
| `SourceBucketName` | Describes the name of the source bucket | 
| `DestinationBucketName` | Describes the name of the target bucket |
| `DestinationKey` | Describes the target `Key` of the object |
| `SourceKey` | Describes the source `Key` of the object |

#### 4.1.17 AbstractS3Request {#abstracts3request}

This entity is the generalization of all request entities of the S3 Connector. It has an association to the `S3Configuration` entity.

#### 4.1.18 S3Configuration {s3configuration}

| Attribute | Description | 
| --- | --- |
| `PathStyleAccessEnabled` | The PathStyleAccessEnabled attribute specifies whether the S3 resources are accessed using the path-style hosting or its default virtual hosting. |

[Read more about these hosting styles | AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html)

#### 4.1.19 AbstractPresignConfig {#abstractpresignconfig}

| Attribute | Description | 
| --- | --- |
| `Expiration` | The Expiration attribute specifies after how long (in seconds) the pre-signed URL expires. |

#### 4.1.20 PutObjectPresignConfig {#putobjectpresignconfig}

This entity can be used to presign a `PutObjectRequest`. To do so, associate an instance of this object to your `PutObjectRequest` and specify the `Expiration` attribute. Then you can generate a presigned url using the [Generate Presigned Url](#generatepresignedurl) operation.

#### 4.1.21 GetObjectPresignConfig {#getobjectpresignconfig}

This entity can be used to presign a `GetObjectRequest`. To do so, associate an instance of this object to your `GetObjectRequest` and specify the `Expiration` attribute. Then you can generate a presigned url using the [Generate Presigned Url](#generatepresignedurl) operation.

#### 4.1.22 DeleteObjectPresignConfig {#deleteobjectpresignconfig}

This entity can be used to presign a `DeleteObjectRequest`. To do so, associate an instance of this object to your `DeleteObjectRequest` and specify the `Expiration` attribute. Then you can generate a presigned url using the [Generate Presigned Url](#generatepresignedurl) operation.

#### 4.1.23 HeadBucketRequest {#headbucketrequest}

| Attribute | Description | 
| --- | --- |
| `BucketName` | Describes the name of the bucket | 

#### 4.1.24 HeadBucketResponse {#headbucketresponse}

| Attribute | Description | 
| --- | --- |
| `Region` | Describes the AWS location of the given bucket |
| `AccessPointAlias` | Describes whether the bucket was requested through an Access Point Alias |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](/refguide/enumerations/).

#### 4.2.1 ENUM_StorageClass {#enum-storage-class}

| Name | Caption | Description |
| --- | --- | --- |
| `STANDARD` | **STANDARD** | (Default) Selecting this enumeration value stores an object according to the standard class |
| `REDUCED_REDUNDANCY` | **REDUCED_REDUNDANCY** | Selecting this enumeration value stores an object according to the RRS (reduced redundancy storage) class |
| `GLACIER` | **GLACIER** | Selecting this enumeration value stores an object according to the glacier class |
| `STANDARD_IA` | **STANDARD_IA** | Selecting this enumeration value stores an object according to the standard-IA (infrequent access) class |
| `ONEZONE_IA` | **ONEZONE_IA** | Selecting this enumeration value stores an object according to the one zone-IA (infrequent access) class |
| `INTELLIGENT_TIERING` | **INTELLIGENT_TIERING** | Selecting this enumeration value stores an object according to the intelligent tiering class |
| `DEEP_ARCHIVE` | **DEEP_ARCHIVE** | Selecting this enumeration value stores an object according to the glacier deep archive class |
| `OUTPOSTS` | **OUTPOSTS** | Selecting this enumeration value stores an object according to the outposts (on-premise) class |
| `GLACIER_IR` | **GLACIER_IR** | Selecting this enumeration value stores an object according to the glacier instant retrieval (IR) class |
| `UNKNOWN_TO_SDK_VERSION` | **UNKNOWN_TO_SDK_VERSION** | This enumeration value is returned when the S3 service returns a value unknown to the SDK |

### 4.3 Activities {#activities} 

Activities define the actions that are executed in a microflow or a nanoflow. For more information, see [Activities](/refguide/activities/).

#### 4.3.1 CreateBucket {#createbucket}

The `CreateBucket` Amazon S3 action allows you to create a new S3 Bucket. It requires a valid `AWS_Region` parameter, `Credentials`, and a `CreateBucketRequest` object. It returns a `CreateBucketResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateBucketRequest`, `AWS_Region`, `Credentials` | `CreateBucketResponse` |

#### 4.3.2 PutObject {#putobject}

The `PutObject` Amazon S3 action allows you to put an object into a specified S3 bucket. It requires a valid `AWS_Region` parameter, `Credentials`, a `PutObjectRequest` object and a `FileDocument` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `PutObjectRequest`, `FileDocument`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.3 DeleteObject {#deleteobject}

The `DeleteObject` Amazon S3 action allows you to delete an object from a specified S3 bucket. It requires a valid `AWS_Region` parameter, `Credentials`, and a `DeleteObjectRequest` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DeleteObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.4 ListBuckets {#listbuckets}

The `ListBuckets` Amazon S3 action allows you to retrieve a list of all buckets in one’s Amazon S3 environment. It requires a valid `AWS_Region` parameter and `Credentials`. It returns a `ListBucketsResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `AWS_Region`, `Credentials` | `ListBucketsResponse` |

#### 4.3.5 ListObjects {#listobjects}

The `ListObjects` Amazon S3 action allows you to retrieve a list of the metadata of the objects for a specified bucket in one's Amazon S3 environment. It requires a valid `AWS_Region` parameter, `Credentials`, and a `ListObjectsRequest` object. It returns a `ListObjectsResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListObjectsRequest`, `AWS_Region`, `Credentials` | `ListObjectsResponse` |

#### 4.3.6 DeleteBucket {#deletebucket}

The `DeleteBucket` Amazon S3 action allows you to delete a bucket. It requires a valid `AWS_Region` parameter, `Credentials`, and a `DeleteBucketRequest` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DeleteBucketRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.7 GetObject {#getObject}

The `GetObject` Amazon S3 action allows you to get an object from the s3 simple storage service. It requires a valid `AWS_Region` parameter, `Credentials`, and a `GetObjectRequest` object. It returns a `GetObjectResponse` object which is a `FileDocument` generalization object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `GetObjectRequest`, `AWS_Region`, `Credentials` | `GetObjectResponse` |

#### 4.3.8 CopyObject {#copyobject}

The `CopyObject` Amazon S3 action allows you to copy an s3 object placed within a bucket or prefix to an other bucket or prefix. It requires a valid `AWS_Region` parameter and `Credentials`, and a `CopyObjectRequest` object. It returns a Boolean. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CopyObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.9 MoveObject {#moveobject}

The `MoveObject` Amazon S3 action allows you to move an s3 object between buckets or prefixes. It requires a valid `AWS_Region` parameter, `Credentials`, and a `MoveObjectRequest` object. It returns a Boolean. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `MoveObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.10 GeneratePresignedUrl {#generatepresignedurl}

The `GeneratePresignedUrl` Amazon S3 actions allows you to presign a request and generates and returns the presigned url. The presigned url can be used to send the request in a later point in time without requiring additional authentication. It requires a valid `AWS_Region` parameter and `Credentials`, as well as a specialized object of the `AbstractS3Request` entity, which must be of one of the following types:

* `PutObjectRequest`, with an association to a `PutObjectPresignConfig` object.
* `GetObjectRequest`, with an association to a `GetObjectPresignConfig` object.
* `DeleteObjectRequest`, with an association to a `DeleteObjectPresignConfig` object.

It returns the presigned url as a String. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `AbstractS3Request`, `AWS_Region`, `Credentials` | `String` |
=======
#### 4.3.11 HeadBucket {#headbucket}

The `HeadBucket` operation allows you to retrieve the `AWS_Region` where a bucket is located, check if the bucket exists, and verify if you have access to the bucket. Furthermore it determines if the bucket name used in the request is an access point alias. It requires a valid `AWS_Region` parameter, `Credentials`, and a `HeadBucketRequest` object, and it returns a `HeadBucketResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `HeadBucketRequest`, `AWS_Region`, `Credentials` | `HeadBucketResponse` |

