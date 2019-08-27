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

### 2.1 FileDocument{#filedocument}

A 

The URL of the file within your app runtime is `/file?fileID={FILEID}` where `{FILEID}` is the value of the `FileID` attribute in your FileDocument entity. You can find the runtime URL of your app by using the `GetApplicationUrl` activity from the [Community Commons Function Library](https://appstore.home.mendix.com/link/app/170/) which you can download from the Mendix App Store.

For more information on working with FileDocuments, see [How to Work with Images & Files](/howto/data-models/working-with-images-and-files).

### 2.2 Image{#image}

For more information on working with Images, see [How to Work with Images & Files](/howto/data-models/working-with-images-and-files).

### 2.3 User{#user}

The **Administration** module (Project… > App Store modules > Administration), for example, has an **Account** entity which is a specialization of the **System.User** entity and is used to manage users of the app.

## 3 Non-generalizable Entities
