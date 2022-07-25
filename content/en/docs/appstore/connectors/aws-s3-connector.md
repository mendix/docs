---
title: "AWS S3 Connector"
url: /appstore/connectors/aws-s3-connector/
description: "Describes the configuration and usage of the AWS S3 connector, which is available in the Mendix Marketplace."
tags: ["marketplace", "marketplace component", "aws", "s3", "connector"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 
---

## 1 Introduction

The [AWS S3 Connector](https://marketplace.mendix.com/link/component/120340) allows your app to use AWS S3 buckets directly.

### 1.1 Typical Use Cases

Your app uses objects which you want to store independently from the database. Using AWS S3 gives you the benefits of a secure and redundant storage system that uses a flat object storage structure.

### 1.2  Dependencies

This connector uses the AWS Authentication Module to provide the credentials with which to authenticate to the S3 bucket. You need to have the downloaded and configured the AWS Authentication Module to use the AWS S3 Connector. See [AWS Authentication Module](/appstore/connectors/aws-authentication/) for more information.

## 2 Configuration

The Java actions provided in the module need AWS credentials. These are provided using the [AWS Authentication Module](/appstore/connectors/aws-authentication/). This needs to be set up as described in the linked document.

To include the AWS S3 Connector module in your app, do the following.

1. Open your app in Studio Pro

2. Download the [AWS S3 Connector](https://marketplace.mendix.com/link/component/120340) from the Marketplace (see [How To Use Marketplace Content in Studio Pro](/appstore/general/app-store-content/))

## 3 Using the AWS S3 Connector Module

The AWS S3 Connector module contains a number of Java actions which can be used in your microflows to connect to one or more S3 buckets. These use the domain model of the module to connect to your S3 bucket(s).

### 3.1 Domain Model

The domain model used by the AWS S3 Connector is shown below.

{{< figure src="/attachments/appstore/connectors/aws-s3-connector/domain-model.png" >}}

When using the Java actions, results will be stored as objects of the following entity types. These objects can be passed to other Java actions to specify on which object(s) an action is to be performed.

| Entity | Persistable | Description |
| --- | --- | --- |
| Bucket | No | Bucket information |
| Prefix | No | information about prefixes used by a bucket |
| S3Object | No | information about objects in a bucket |
| Document | Yes<sup><small>[1]</small></sup> | the content of an S3 object |

<sup><small>[1]</small></sup>The Document entity is persistable for technical reasons, but will have the `DeleteAfterDownload` flag set so that it is automatically deleted from the database. You will not have to remove Document objects yourself.

### 3.2 Java Actions

You can drag Java actions from the **Toolbox** into your microflows to connect to your S3 bucket(s).

The module comes with some example microflows which you can find in **App** > **Marketplace modules** > **AWSS3Connector** > **Examples**.

To use these Java Actions you must do the following:

1. Provide a **Credentials** object which you have retrieved using the `GetStaticCredentials` microflow in the [AWS Authentication Module](/appstore/connectors/aws-authentication/) — this needs to be passed to all the Java actions as a parameter to allow authentication to take place.

2. Provide other parameters to the action as objects of entities in the AWSS3Connector domain model. 

3. Have an [error handler](/howto/logic-business-rules/set-up-error-handling/) defined for the Java action to deal with any errors.

The Java Actions you can use are listed below. You can drag them into your microflows from the **Toolbox**.

{{< figure src="/attachments/appstore/connectors/aws-s3-connector/s3-connector-actions.png" >}}

Here is a summary of the Java actions - see the sections below for more detail.

| Operation     | Purpose | Param. 1 | Param. 2 | Param. 3 | Return Value                                                            |
| --- | --- | --- | --- | --- | --- |
| List Bucket   | List all Buckets for these credentials | `Credentials` object | n/a | n/a | List of `Bucket` objects  |
| List Prefix   | List all Prefixes for a bucket | `Credentials` object | `Bucket` object | n/a | List of `Prefix` objects |
| List Object   | List of S3 Objects in a bucket | `Credentials` object | `Bucket` object | n/a | List of `S3Object` objects |
| Get Object    | Get content of an S3 Object | `Credentials` object | `S3Object` object | n/a | `Document` object |
| Put Object    | Save data as an S3 Object | `Credentials` object | `Document` object | `Bucket` object | Success Boolean |
| Delete Object | Delete an S3 Object and contents | `Credentials` object | `S3Object` object | n/a | Success Boolean |
| Move Object   | Move an S3 Object to a different bucket | `Credentials` object | `S3Object` object | `Bucket` object | Success Boolean |
| Copy Object   | Copy an S3 Object to a different bucket | `Credentials` object | `S3Object` object | `Bucket` object | Success Boolean |

#### 3.2.1 List Bucket

This action lists all the S3 buckets which are visible using the supplied credentials.

{{% alert color="info" %}}
When List Bucket is first used, a connection will be made to the region stored in the constant **App** > **Marketplace modules** > **AWSS3Connector** > **_USE_ME** > **AWS_Default_Region**.

This can be changed to the AWS Region of your choice. You may wish to do this for one of the following reasons:

* To reduce latency by choosing a region which is geographically close to you
* To choose a region to which you have access, if you do not have access to some regions

**For technical reasons, you cannot set AWS_Default_Region to `aws-global` or `us-east-1`**.
{{% /alert %}}

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module

**Returns**

* List of objects of entity type `Bucket`

#### 3.2.2 List Prefix

This action lists all the [prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) used to organize objects in an S3 bucket.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of entity type `Bucket` – the bucket you are querying

**Returns**

* List of objects of entity type `Prefix` which are in the bucket you supplied as a parameter

#### 3.2.3 List Object

This action lists all the objects in an S3 bucket.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of entity type `Bucket` – the bucket you are querying

**Returns**

* List of objects of entity type `S3Object` which are in the bucket you supplied as a parameter

#### 3.2.4 Get Object

This action returns the contents of a single object defined by an object of entity type `S3Object`.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of type `S3Object` – the object which you want to download — the object must contain the `Key` of the object and be associated with the desired `Bucket`

**Returns**

* Object of type `Document` – contains the content of the S3 object requested          |

#### 3.2.5 Put Object

This action puts the contents of a `Document` object into a single object defined by an object of entity type `S3Object`. The name of the object is the `Name` attribute of the `Document`. This action can update an existing object, or it can create a new object.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of type `Document` – contains the data you want to upload to AWS S3 Storage — the `Name` attribute of the document contains the `Key` of the S3 object where the content is put, see [Creating object key names](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html) in the AWS S3 documentation for information about creating valid object keys
* Object of type `Bucket` – the destination bucket where you want to upload the object

**Returns**

* Boolean – `true` if object was successfully put, otherwise `false`

#### 3.2.6 Delete Object

This action deletes a single object defined by an object of entity type `S3Object`.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of type `S3Object` – the object which you want to delete — the object must contain the `Key` of the object and be associated with the `Bucket` it is in

**Returns**

* Boolean – `true` if object was successfully deleted, otherwise `false`

#### 3.2.7 Move Object

This action moves an object from one bucket to another bucket. The new object has the same key as the original object and the original object is deleted.

{{% alert color="info" %}}
You cannot change the key of an existing object. To do this, you should:

* Get the object
* Update the `Document/Name`
* Put the object with its new name (key)
* Delete the original object
{{% /alert %}}

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of type `S3Object` – the object which you want to move — the object must contain the `Key` of the object and be associated with the `Bucket` it is in
* Object of type `Bucket` – the destination bucket to which you want to move the object

**Returns**

* Boolean – `true` if object was successfully moved, otherwise `false`

#### 3.2.8 Copy Object

This action copies an object from one bucket to another bucket.  The new object has the same key as the original object and the original object remains in its original bucket.

**Parameters**

* Object of entity type `Credentials` – these belong to a AWS user managed using the `AWSAuthentication` module
* Object of type `S3Object` – the object which you want to copy — the object must contain the `Key` of the object and be associated with the `Bucket` it is in
* Object of type `Bucket` – the destination bucket to which you want to copy the object

**Returns**

* Boolean – `true` if object was successfully copied, otherwise `false`

