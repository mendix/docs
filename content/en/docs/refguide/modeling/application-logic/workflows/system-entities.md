---
title: "System Entities"
parent: "entities"
menu_order: 80
description: "Technical and user information about the system entities FileDocument, Image, and User"
tags: ["domain model", "entity", "system", "generalization", "specialization", "studio pro", "Image", "FileDocument", "User"]
---

## 1 Introduction


{{% todo %}}
[Should we document system attributes here or somewhere else?
"currentDeviceType",
"currentSession",
"latestError",
"latestHttpResponse",
"latestSoapFault"]
{{% /todo %}}

{{% todo %}}
[Where do we document attributes with stored information
"CreatedBy",
"CreationDate",
"LastChangedBy",
"LastChangedDate"]
{{% /todo %}}

The domain model in the **System** module holds information which is needed for the native functions of Mendix. For example, managing scheduled events and reporting on errors.

The entities in the system domain model fall into three categories:

* entities which can be used as generalizations to use in your own domain models
* entities which can be used directly in the system domain model
* entities which are only used internally by Mendix.

## 2 Generalizable Entities

There are three entities in the system domain model which can be used as generalizations. You cannot use any of the other entities in the system domain model as generalizations.

The three entities are:

* [FileDocument](#filedocument)
* [Image](#image)
* [User](#user)

To learn more about generalizations and specializations, see [Generalization & One-to-One Associations](generalization-and-1-1-association).

### 2.1 System.FileDocument{#filedocument}

The entity type System.FileDocument is a built-in entity type that represents a file. Its attributes contains the metadata of a file.
The underlying file may be stored in various ways, for example, on disk or in the cloud.

#### 2.1.1 Entity Attributes

The FileDocument entity has the following attributes:

| ## *Attribute Name* | ## *Type*    | ## *Default* |
| ------------------- | ------------ | ------------ |
| FileID              | AutoNumber   | 1            |
| Name                | String (400) |              |
| DeleteAfterDownload | Boolean      | false        |
| Contents            | Binary       |              |
| HasContents         | Boolean      | false        |
| Size                | Long         | -1           |

## **FileID**

The FileID attribute is a unique identifier for the FileDocument instance. It is automatically set by the runtime.


## **Name**

The name of the file. When downloading such a file, this name will be used.


## **DeleteAfterDownload**

A boolean that indicates whether the file should be deleted after being downloaded. The file will no longer exist in the database and will be deleted in storage as well.

A retrieve from database is *not* the same as performing an actual download and does not result in the file being deleted.

Does this mean that the S3 file will be deleted the first time it is downloaded (e.g. for sharing one-time secrets)? Does the entity also get deleted, or does it end up will null content?
 • 
JS
Jan-David Salchow  2 days ago
​​I wouldn’t want to make such promises. For example when you delete a file document it might stay in S3, Azure, or on the disk for quite some time before it actually gets deleted (so that you can rollback a transaction). We didn’t think about the implications for security of this design. I would think of this feature more like a “garbage collection”.


## **Contents**

A binary attribute that allows accessing and modifying the contents of the underlying file. Modifications are transactionally safe.

J-D S: All interactions with file documents are designed in such a way that it doesn’t matter what backend you use. A file document is back by one “BinaryAttribute” implementation. In principle the data could also be stored in the database. This is transparent to the user.
​​


## **HasContents**

A boolean that indicates whether there is a current file. This is automatically set by the runtime.


## **Size**

The size of the file. Defaults to -1. Files with size -1 will automatically be updated in the background to their correct file size. Files that are not found have a size 0.


## **Remarks** ⚠️ 

There are hidden attributes for the System.FileDocument entity, these are used internally by runtime and should not be changed manually.

#### 2.1.2 Entity Behavior

You  9 days ago
​​Is there anything more we can say about how this actually works? Perhaps a short description of how the CRUD actions on this entity are different from CRUD actions on ‘normal’ entities.
​​
​​For example, making it explicit whether the S3 file is deleted when the entity is deleted, or whether it stays there but no longer has a pointer.
​​
​​Also, if I get a list of FileDocuments, is the Contents pulled into memory as well, or does the Contents stay on disk until it is explicitly referred to.
​​
​​And are there any technical limits on the size of the Contents of a FileDocument entity?
 • 
AM
Adrian Mensing  5 days ago
​​The FileDocument entity has been developed in such a way that it maintains the same behaviour as a normal entity as much possible.
​​
​​For the other questions, I do not think there is enough space in the small documentation box for entities.
You  2 days ago
​​I’m looking for information to go onto the documentation site, https://docs.mendix.com so i doesn’t matter how long it is - as long as it is useful to the customer when they are developing.
 • 
JS
Jan-David Salchow  2 days ago
​​Our scope here is to document the system entities within Studio Pro, that’s why keeping it short matters. Of course we can for the purpose of documentation elsewhere add more
You  6 minutes ago
​​OK - thanks for the clarification.
​​I’ll pick up what I can for documentation and then look at filling out more information over time.
 • 


**Not sure we should say this: check with #frontend** 

The URL of the file within your app runtime is `/file?fileID={FILEID}` where `{FILEID}` is the value of the `FileID` attribute in your FileDocument entity. You can find the runtime URL of your app by using the `GetApplicationUrl` activity from the [Community Commons Function Library](https://appstore.home.mendix.com/link/app/170/) which you can download from the Mendix App Store.

For more information on working with FileDocuments, see [How to Work with Images & Files](/howto/data-models/working-with-images-and-files).

### 2.2 System.Image{#image}

# System.Image

An entity that inherits from the System.FileDocument entity. Used to store images. It is verified that the contents of the file is an image. In some places, thumbnails are generated.


## Entity Attributes
| ## *Attribute Name* | ## *Type*    | ## *Default* |
| ------------------- | ------------ | ------------ |
| PublicThumbnailPath | String (500) |              |

## PublicThumbnailPath

Not used internally.

For more information on working with Images, see [How to Work with Images & Files](/howto/data-models/working-with-images-and-files).

### 2.3 System.User{#user}

The **Administration** module (Project… > App Store modules > Administration), for example, has an **Account** entity which is a specialization of the **System.User** entity and is used to manage users of the app.

## 3 Non-generalizable Entities
