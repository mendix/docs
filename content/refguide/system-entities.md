---
title: "System Entities"
parent: "entities"
menu_order: 80
description: "Technical and user information about the system entities FileDocument, Image, and User"
tags: ["domain model", "entity", "system", "generalization", "specialization", "studio pro", "Image", "FileDocument", "User"]
---

## 1 Introduction

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

### 2.2 Image{#image}

### 2.3 User{#user}

The **Administration** module (Project… > App Store modules > Administration), for example, has an **Account** entity which is a specialization of the **System.User** entity and is used to manage users of the app.

## 3 Non-generalizable Entities
