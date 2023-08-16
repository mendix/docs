---
title: "Amazon S3"
url: /appstore/connectors/aws/amazon-s3/
description: "Describes the configuration and usage of the Amazon S3 connector from the Mendix Marketplace. Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "amazon", "s3", "connector"]
aliases:
    - /appstore/connectors/aws/aws-s3-connector/
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

The Amazon S3 connector requires the [AWS Authentication connector version 2.1 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). It is crucial for the Amazon S3 connector to function correctly. For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

### 1.3 Licensing and Cost

This connector is available as a free download from the Mendix Marketplace, but the AWS service to which is connects may incur a usage cost. For more information, refer to AWS documentation.

{{% alert color="info" %}}
Most AWS services provide a free tier that allows easy access to most services. To find out if this service is included in the free tier, see [AWS Free Tier](https://aws.amazon.com/free/). To calculate the potential cost of using an AWS service outside of the free tier, use the [AWS Cost calculator](https://calculator.aws/).
{{% /alert %}}

Depending on your use case, your deployment environment, and the type of app that you want to build, you may also need a license for your Mendix app. For more information, refer to [Licensing Apps](/developerportal/deploy/licensing-apps-outside-mxcloud/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon S3 connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AmazonS3Connector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to Amazon S3. Each activity can be implemented by using it in a microflow. To ensure that your app can connect to the AWS service, you must also configure AWS authentication for the connector.

### 3.1 Configuring AWS Authentication

In order to use the Amazon 3 service, you must authenticate with AWS. To do so, you must set up a configuration profile in your Mendix app. After you set up the configuration profile, the connector module handles the authentication internally.

1. Ensure that you have installed and configured the AWS Authentication connector, as mentioned in [Prerequisites](#prerequisites).
2. Decide whether you want to use session or static credentials to authenticate.

    The Amazon S3 connector supports both session and static credentials. By default, the connector is pre-configured to use static credentials, but you may want to switch to session credentials, for example, to increase the security of your app. For an overview of both authentication methods, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

3. In the **App Explorer**, double-click the **Settings** for your app.
    
    {{< figure src="/attachments/appstore/connectors/aws-s3-connector/settings.png" alt="The Settings option in the App Explorer">}}

4. In the **App Settings dialog**, in the **Configurations** tab, edit or create an authentication profile.
    
    If you have multiple sets of AWS credentials, or if you want to use both static and session credentials for different use cases, create separate authentication profiles for each set of credentials.

5. In the **Edit Configuration** dialog, in the **Constants** tab, click **New** to add the constants required for the configuration.
6. In the **Select Constants** dialog, find and expand the **AmazonS3Connector** > **ConnectionDetails** section.

    {{< figure src="/attachments/appstore/connectors/aws-s3-connector/constants.png" alt="The SessionCredentials and StaticCredentials items in the ConnectionDetails section">}}

7. Depending on your selected authentication type, configure the required parameters for the **StaticCredentials** or **SessionCredentials**.
   
    | Credentials type | Parameter | Value |
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

After you configure the authentication profile for Amazon S3, you can implement the functions of the connector by using the provided activities in microflows. For example, to create a bucket in S3, perform the following steps:

1. In the **App Explorer**, right-click on the name of your module, and then click **Add microflow**.
2. Enter a name for your microflow, for example, *DS_CreateBucket*, and then click **OK**.
3. In the **App Explorer**, in the **AmazonS3Connector** > **Operations** section, find the **CreateBucket** activity.
4. Drag the **CreateBucket** activity onto the microflow you are working on.
5. Double-click the **CreateBucket** activity and configure the **AWS_Region** parameter by doing the following steps:
    1. Click **Edit parameter value**, edit the **AWS_Region** parameter, and change **Type** to **Expression**.
    2. In the expression builder, type `AWS_Region`, and then press **Ctrl+Space**.
    3. In the autocomplete dialog, select **AmazonS3Connector.AWS_Region**, then type *.* and select your AWS region from the list.

        {{< figure src="/attachments/appstore/connectors/aws-s3-connector/awsregions.png" alt="The list of AWS regions">}}
    
        For a list of available AWS regions, see [AWS Region](#aws-region).

6. In the **App Explorer**, in the **AmazonS3Connector** > **ConnectionDetails** section, find the **Credentials_GenerateFromConstants** activity.
7. Drag the **Credentials_GenerateFromConstants** activity onto the microflow you are working on, and position it between the microflow start event and the **CreateBucket** activity.
8. Double-click the **Credentials_GenerateFromConstants** activity, and then configure the required **AWS_Region** parameter in the same way as described in step 5.
9. Double-click the **CreateBucket** activity and configure the **Credentials** parameter by doing the following steps:
    1. Click **Edit parameter value**.
    2. Edit the **Credentials** parameter and let it auto-fill.
10. In the **Toolbox** pane, search for the **Create Object** activity, drag it onto the microflow area, and position it between the **Credentials_GenerateFromConstants** and the **CreateBucket** activity.
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

 {{< figure src="/attachments/appstore/connectors/aws-s3-connector/microflow.png" alt="Configured microflow">}}

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
| `BucketName` | Describes the name of the bucket to put the object in|
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
| N/A | Is a generalization of the S3 object|

#### 4.1.13 CommonPrefix {#commonprefix}

| Attribute | Description | 
| --- | --- |
| `Prefix` | Describes the name of the prefix |

#### 4.1.14 CopyObjectRequest {#copyobjectrequest}

| Attribute | Description | 
| --- | --- |
| `SourceBucketName` | Describes the name of the source bucket| 
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
| `SourceBucketName` | Describes the name of the source bucket| 
| `DestinationBucketName` | Describes the name of the target bucket |
| `DestinationKey` | Describes the target `Key` of the object |
| `SourceKey` | Describes the source `Key` of the object |

### 4.2 Enumerations

An enumeration is a predefined list of values that can be used as an attribute type. For more information, see [Enumerations](/refguide/enumerations/).

#### 4.2.1 AWS_Region {#aws-region}

| Name | Caption | 
| --- | --- | 
| `us_east_2` | US East (Ohio) | 
| `us_east_1` | US East (N. Virginia) | 
| `us_west_1` | US West (N. California) | 
| `us_west_2` | US West (Oregon) | 
| `af_south_1` | Africa (Cape Town) | 
| `ap_east_1` | Asia Pacific (Hong Kong) | 
| `ap_southeast_3` | Asia Pacific (Jakarta) | 
| `ap_south_1` | Asia Pacific (Mumbai) | 
| `ap_northeast_3` | Asia Pacific (Osaka) | 
| `ap_northeast_2` | Asia Pacific (Seoul) | 
| `ap_southeast_1` | Asia Pacific (Singapore) | 
| `ap_southeast_2` | Asia Pacific (Sydney) | 
| `ap_northeast_1` | Asia Pacific (Tokyo) | 
| `ca_central_1` | Canada (Central) | 
| `eu_central_1` | Europe (Frankfurt) | 
| `eu_west_1` | Europe (Ireland) | 
| `eu_west_2` | Europe (London) | 
| `eu_south_1` | Europe (Milan) | 
| `eu_west_3` | Europe (Paris) | 
| `eu_north_1` | Europe (Stockholm) | 
| `me_south_1` | Middle East (Bahrain) | 
| `sa_east_1` | South America (São Paulo) |

#### 4.2.3 ENUM_StorageClass {#enum-storageclass}

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

The `CreateBucket` Amazon S3 action allows you to create a new S3 Bucket. It requires a valid `AWS_Region` and `Credentials`, as well as a `CreateBucketRequest` object. It returns a `CreateBucketResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CreateBucketRequest`, `AWS_Region`, `Credentials` | `CreateBucketResponse` |

#### 4.3.2 PutObject {#putobject}

The `PutObject` Amazon S3 actions allows you put an object into a specified S3 bucket. It requires a valid `AWS_Region` and `Credentials`, as well as a `PutObjectRequest` object and a `FileDocument` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `PutObjectRequest`, `FileDocument`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.3 DeleteObject {#deleteobject}

The `DeleteObject` Amazon S3 actions allows you delete an object from a specified S3 bucket. It requires a valid `AWS_Region` and `Credentials`, as well as a `DeleteObjectRequest` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DeleteObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.4 ListBuckets {#listbuckets}

The `ListBuckets` Amazon S3 actions allows you retrieve a list of all buckets in one’s Amazon S3 environment. It requires a valid `AWS_Region` and `Credentials`. It returns a`ListBucketsResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `AWS_Region`, `Credentials` | `ListBucketsResponse` |

#### 4.3.5 ListObjects {#listobjects}

The `ListObjects` Amazon S3 actions allows you retrieve a list of the metadata of the objects for a specified bucket in one's Amazon S3 environment. It requires a valid `AWS_Region` and `Credentials`, as well as a `ListObjectsRequest` object. It returns a `ListObjectsResponse` object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `ListObjectsRequest`, `AWS_Region`, `Credentials` | `ListObjectsResponse` |

#### 4.3.6 DeleteBucket {#deletebucket}

The `DeleteBucket` Amazon S3 actions allows you delete a bucket. It requires a valid `AWS_Region` and `Credentials`, as well as a `DeleteBucketRequest` object. It returns a Boolean which indicates if the action was successful. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `DeleteBucketRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.7 GetObject {#getObject}

The `GetObject` Amazon S3 actions allows you to get an object from the s3 simple storage service. It requires a valid `AWS_Region` and `Credentials`, as well as a `GetObjectRequest` object. It returns a `GetObjectResponse` object which is a `FileDocument` generalization object. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `GetObjectRequest`, `AWS_Region`, `Credentials` | `GetObjectResponse` |

#### 4.3.8 CopyObject {#copyobject}

The `CopyObject` Amazon S3 actions allows you copy an s3 object placed within a bucket or prefix to an other bucket or prefix. It requires a valid `AWS_Region` parameter and `Credentials`, as well as a `CopyObjectRequest` object. It returns a Boolean. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `CopyObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |

#### 4.3.9 MoveObject {#moveobject}

The `MoveObject` Amazon S3 actions allows you move an s3 object between buckets or prefixes. It requires a valid `AWS_Region` parameter and `Credentials`, as well as a `MoveObjectRequest` object. It returns a Boolean. The input and output for this service are shown in the table below: 

| Input | Output | 
| --- | --- | 
| `MoveObjectRequest`, `AWS_Region`, `Credentials` | `Boolean` |
