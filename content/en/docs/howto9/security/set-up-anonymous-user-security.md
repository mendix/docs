---
title: "Set Up Anonymous User Security"
url: /howto9/security/set-up-anonymous-user-security/
weight: 30
description: "Describes how to set access to a non-persistable object and give anonymous users read and write access."
---

## Introduction

When setting up anonymous access for your application, you should be careful about where you give access to users. There are some guidelines for this so that you don't make your entire application accessible to the public.

When creating an anonymous user role, always make sure you give it as little access as possible. Accordingly, you never want to re-use module rules from your named user accounts. It may be faster to reuse module rules, but this makes it much easier to give an anonymous user too much access to information in your application. When you are using anonymous users, any changes made to your object can never be traced back to the actual user, since the user was anonymous and no longer exists.

**After using this how-to, you will know how to do the following:**  

* Set access to a non-persistable object
* Give anonymous users read and write access

## Non-Persistable Objects

When you set access to a non-persistable object, the security rules you specify should be whatever you functionally need. Non-persistable objects only live in the session cache from the user that created the object; therefore, an anonymous user is never able to access any information that wasn't created specifically for or by them. However, it is a completely different situation for a persistable object.

## Write Access

If you give an anonymous user write access on any field in the application, you must specify instance access as well. An anonymous user is hardly ever allowed to change every single record of a certain object type. The anonymous user is usually only allowed to change the record they just created; therefore, you will want to specify this access rule: `[System.Owner='[%CurrentUser%]']` That way, the anonymous user can only change the records they just created during their session. 

## Read Access

If an anonymous user needs to have access to certain primary data tables or needs the name of a user in an overview, the anonymous user needs read access on that entity. However, you should always limit this access. If the user doesn't need to have access to all fields, do not give it to them. If you see an anonymous user with full read access, always confirm that they cannot work with less access.

## Security Review

When going over an application and reviewing an anonymous user, there are three things that most often trigger a red flag (indicating the application is not secure):

* An anonymous user role that reuses the module roles from the regular application user
* An anonymous module role that has write access but no instance access XPath constraint
* An anonymous module role that has full read access on an entity

Whenever you see any of these situations, you should carefully consider if these parameters are necessary for what you want to achieve.

**Always be aware that limiting data in pages does NOT make your application secure.** The only way to make an application secure is by specifying access rules on all of your entities and limiting the instances of objects that you are allowed to see.

Any user can talk directly to the API by downloading a tool that can post messages to a URL and trying to send JSON queries to the platform. This simulates communication between the browser and the server, because the server doesn't care who sends the messages as long as they match what is allowed within the session.

## Best Practice 

If you have anonymous access, you need to limit the access to as few entities as possible and never give full read access to all attributes if it is just for selecting items. For example, if an anonymous user is allowed to see an app name, then only give read access to the app name and not the full entity.

If you need to give an anonymous user access to change an object ALWAYS apply instance access as well. An anonymous user should NEVER have write access on all records in an entity. 

Limiting the navigation or page display is not the same thing as security. All data can be accessed by talking directly to the Platform APIs, and anything that is visible according to the security model is accessible by sending the correct messages to the server. Limiting data in the UI does not mean that it cannot be accessed. Only instance access rules guarantee what you can and cannot do.

## Read More

* [Creating a Secure App](/howto9/security/create-a-secure-app/)
