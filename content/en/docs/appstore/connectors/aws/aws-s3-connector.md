---
title: "Amazon S3"
url: /appstore/connectors/aws/aws-s3-connector/
description: "Describes the configuration and usage of the Amazon S3 connector, which is available in the Mendix Marketplace. Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance."
weight: 20
tags: ["marketplace", "marketplace component", "aws", "s3", "connector"]
aliases:
    - /appstore/connectors/aws-s3-connector/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [Amazon S3](https://marketplace.mendix.com/link/component/120340) connector allows your app to use AWS S3 buckets directly.

### 1.1 Typical Use Cases

Amazon Simple Storage Service (Amazon S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can store and protect any amount of data for virtually any use case, such as data lakes, cloud-native applications, and mobile apps. With cost-effective storage classes and easy-to-use management features, you can optimize costs, organize data, and configure fine-tuned access controls to meet specific business, organizational, and compliance requirements.

### 1.2  Prerequisites

The Amazon S3 connector requires the [AWS Authentication connector version 2.0 or higher](https://marketplace.mendix.com/link/component/120333) to authenticate with Amazon Web Services (AWS). For more information about installing and configuring the AWS Authentication connector, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).

## 2 Installation

Follow the instructions in [How to Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/) to import the Amazon S3 connector into your app.

## 3 Configuration

After you install the connector, you can find it in the **App Explorer**, in the **AWSS3Connector** section. The connector provides a [domain model](#domain-model) and several [activities](#activities) that you can use to connect your app to one or more Amazon S3 buckets. Each activity can be implemented by using it in a microflow, and the Amazon S3 connector comes with example microflows which you can use to quickly configure the S3 connector for your use case.

To quickly configure the connection to Amazon S3 by using an example microflow, perform the following steps:

1. Optional: If you have not configured your default AWS region before, click **App** > **Marketplace modules** > **AWSS3Connector** > **_USE_ME** > **AWS_Default_Region**, and then select the region of your choice.
    This step is not required, but you may wish to perform it for one of the following reasons:
        
        * To reduce latency by choosing a region which is geographically close to you
        * To choose a region to which you have access, if you do not have access to some regions
        
    {{% alert color="info" %}}
    For technical reasons, you cannot set AWS_Default_Region to `aws-global` or `us-east-1`.
    {{% /alert %}}

2. Create a microflow with session or static credentials authentication. For more information, see [AWS Authentication](/appstore/connectors/aws/aws-authentication/).
3. In the App Explorer, in **App** > **Marketplace modules** > **AWSS3Connector** > **Examples**, find an example microflow that performs a function which you want to use in your app.
    For example, if you want to get the contents of an object in the S3 bucket, find the **SUB_GetObject** example microflow. For more information about the activities that the microflows can perform, see [Activities](#activities).
4. Drag the example microflow onto the working area of the microflow that you created in step 2, and position it after the **GetSessionCredentials** activity.
5. Double-click on the microflow activity that you added in step 4.
    The example microflow opens.
6. Configure the required parameters.
    For example, for the **SUB_GetObject** example microflow, you must configure the S3 object that you want to access.

To help you work with the Amazon S3 connector, the following sections of this document list the available entities and activities that you can use in your application.

### 3.1 Domain Model {#domain-model}

The domain model is a data model that describes the information in your application domain in an abstract way. For more information, see [Domain Model](/refguide/domain-model/).

The domain model used by the Amazon S3 connector is shown below.

{{< figure src="/attachments/appstore/connectors/aws-s3-connector/domain-model.png" >}}

When using the [Java activities](#activities), results are stored as objects of the following entity types. These objects can be passed to other Java activities to specify on which objects an activity is to be performed.

| Entity | Description |
| --- | --- |
| Bucket | Bucket information |
| Prefix | Information about prefixes used by a bucket |
| S3Object | Information about objects in a bucket |
| Document | The content of an S3 object |

The entities are either not persistable, or have the `DeleteAfterDownload` flag set so that they are automatically deleted from the database. Because of that, you do not need remove the resulting objects yourself.

### 3.2 Activities {#activities}

Activities define the actions that are executed in a microflow or a nanoflow. For the Amazon S3 connector, they represent the actions that can be performed on S3 buckets.

#### 3.2.1 List Bucket

This activity lists all the S3 buckets which are available for the supplied AWS credentials.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector

**Returns**

* List of objects of entity type `Bucket`

#### 3.2.2 List Prefix

This activity lists all the [prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) used to organize objects in an S3 bucket.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of entity type `Bucket` – the bucket that you are querying

**Returns**

* List of objects of entity type `Prefix` which are in the bucket you supplied as a parameter

#### 3.2.3 List Object

This activity lists all the objects in an S3 bucket.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of entity type `Bucket` – the bucket that you are querying

**Returns**

* List of objects of entity type `S3Object` which are in the bucket that you supplied as a parameter

#### 3.2.4 Get Object

This activity returns the contents of a single object defined by an object of entity type `S3Object`.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of type `S3Object` – the object which you want to download; must contain the `Key` of the object and be associated with the desired `Bucket`

**Returns**

* Object of type `Document` – contains the content of the S3 object requested

#### 3.2.5 Put Object

This activity puts the contents of a `Document` object into a single object defined by an object of entity type `S3Object`. The name of the object is the `Name` attribute of the `Document`. This activity can update an existing object, or it can create a new object.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of type `Document` – contains the data you want to upload to AWS S3 Storage; the `Name` attribute of the document contains the [Key](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) of the S3 object where the content is put
* Object of type `Bucket` – the destination bucket where you want to upload the object

**Returns**

* Boolean – `true` if object was successfully put, otherwise `false`

#### 3.2.6 Delete Object

This activity deletes a single object defined by an object of entity type `S3Object`.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of type `S3Object` – the S3 object which you want to delete; the object must contain the [Key](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) of the S3 object and be associated with the `Bucket` it is in

**Returns**

* Boolean – `true` if object was successfully deleted, otherwise `false`

#### 3.2.7 Move Object

This activity moves an object from one bucket to another bucket. The new object has the same key as the original object, and the original object is deleted.

{{% alert color="info" %}}
You cannot change the key of an existing object. To do this, you should:

* Get the object
* Update the `Document/Name`
* Put the object with its new name (key)
* Delete the original object
{{% /alert %}}

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of type `S3Object` – the S3 object which you want to delete; the object must contain the [Key](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) of the S3 object and be associated with the `Bucket` it is in
* Object of type `Bucket` – the destination bucket to which you want to move the object

**Returns**

* Boolean – `true` if object was successfully moved, otherwise `false`

#### 3.2.8 Copy Object

This activity copies an object from one bucket to another bucket.  The new object has the same key as the original object and the original object remains in its original bucket.

**Parameters**

* Object of entity type `Credentials` – obtained from the [AWS Authentication](/appstore/connectors/aws/aws-authentication/) connector
* Object of type `S3Object` – the S3 object which you want to delete; the object must contain the [Key](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) of the S3 object and be associated with the `Bucket` it is in
* Object of type `Bucket` – the destination bucket to which you want to copy the object

**Returns**

* Boolean – `true` if object was successfully copied, otherwise `false`
