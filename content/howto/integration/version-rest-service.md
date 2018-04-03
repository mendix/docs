---
title: "Version a REST Service"
category: "Integration"
description: "Describes the best practices for versioning REST services in Mendix"
---

You can have different versions of the same REST service published at the same time. This _How-To_ gives the best practices on when and how to do that.

Give each service a version number following the `MAJOR.MINOR.PATCH` format.

   1. A service must get a new `MAJOR` version when you make incompatible API changes (such as removing an operation)
   2. A service should get a new `MINOR` version when you add functionality that is backwards compatible (such as adding an operation)
   3. A service may get a new `PATCH` version when you make a bug fix that is backwards compatible

To make versioning more explicit in your model, we suggest creating a folder for each service. Call it _ServiceName_Version_. Store all microflows, mappings and message definitions that are used in the service in that folder.

After you have published a service and clients are using it, it is not advisable to change it anymore. 

If you were to change it in a way that requires the clients to change, you would introduced a _breaking change_. A client would start getting errors without doing anything different.

Instead of changing a published service, you should duplicate the service and give it a new major version. If you want to change a microflow, a mapping or a message definition, you duplicate that as well, and change the duplicate.

Change the _location_ of the new version to include the new version, for example _rest/myservice/v1.1_. It is custom to omit the _.0_ or _.0.0_ in the URL.

The new version of the service reuses all microflows, mappings and message definitions from the previous version that that didn't change in this version.

The rest of this article gives some examples of typical changes that occur and how to handle versioning of you service in those cases.

# 1 Examples

## 1.1 Fixing a bug in a microflow

### 1.1.1 Scenario

You have a REST service in Petstore version 1.0.0 in production. You find out that you need a small change to the GetPet microflow. When the incoming pet_id is empty, it is giving an error that results in _500 Internal Server Error_, and it should be _400 Bad Request_.

### 1.1.2 Solution

Since this is a non breaking change, there are two solutions to this problem. One is to create a separate patch version, and the other is to just fix the bug in the current version.

To create a patch version, you do the following:

1. Create a new folder called PetStore_1_0_1
2. Duplicate the PetStore service. Call it PetStore_1_0_1 and move it to the PetStore_1_0_1 folder
3. Duplicate the GetPet microflow. Call it GetPet_1_0_1 and move it to the PetStore_1_0_1 folder
4. Update the PetStore_1_0_1 service, making the GET operation refer to GetPet_1_0_1
5. Change microflow GetPet_1_0_1 to fix the behavior

## 1.2 Adding an operation to a resource

### 1.2.1 Scenario

You have a REST service in Petstore version 1.0.0 in production. You want to add an operation to retieve pets by status.

### 2.2 Solution

Since this is change is backwards compatible, there are two solutions to this problem. One is to create a new minor version, and the other is to just add the operation to the current version.

To create a new minor version, you do the following:

1. Create a new folder called PetStore_1_1_0
2. Duplicate the PetStore service. Call it PetStore_1_1_0 and move it to the PetStore_1_1_0 folder
3. Add the GetPetByStatus operation to the PetStore_1_1_0 service

## 1.3 Changing the type of an attribute

### 1.3.1 Scenario

You have a REST service in Petstore version 1.0.0 in production. The _GET /pet_ operation returns the year of birth of a pet as an integer. You have a message definition called Pet that is based on the Pet entity. The ExportPet export mapping maps the entity to the message definition.

You want to change the year of birth to date of birth.

### 1.3.2 Solution

Note that this is a breaking change (it's not backwards compatible), so you must create a new version if you don't want to get complaints from existing users of your service.

1. Add a new attribute DateOfBirth to the Pet entity
2. Create a new folder called PetStore_2_0_0
3. Duplicate the new message definitions. Call it PetStoreMessages_2_0_0 and move it to the PetStore_2_0_0 folder. Remove any message definitions that you don't want to change
3. Create a new export mapping called ExportPet_2_0_0 in the PetStore_2_0_0 folder. Base it on the Pet entity, selecting the same attributes as before, but choosing DateOfBirth instead of YearOfBirth.
3. Duplicate the PetStore service. Call it PetStore_2_0_0 and move it to the PetStore_2_0_0 folder.
4. Update the _GET /pet_ operation in the PetStore_2_0_0 service, choosing the ExportPet_2_0_0 export mapping

# 2 Deprecation

After you have created a new version of your service, you should mark the old version as deprecated.

You do that by adding ` (deprecated)` to the service name. Write a description of why it was deprecated and what the new version number is in the _Public documentation_ of the service.

You should let clients know that the this version is deprecated, for instance by publishing release notes.

After a version has been deprecated for a sufficiently long time, you can remove it. All clients should have moved to the new version in that time.