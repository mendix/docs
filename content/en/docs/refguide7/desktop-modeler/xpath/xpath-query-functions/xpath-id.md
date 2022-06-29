---
title: "XPath id"
url: /refguide7/xpath-id/
---

## 1 Overview

This function replaces the default XPath query syntax. It retrieves data based upon the unique identification number supplied. Each individual Mendix object generated in a project is automatically provided with an ID.

The argument of this function can be the following:

* A string containing one ID
* A string containing a space-separated sequence of IDs

## 2 Examples

This query returns a list with one object (which has the ID "123423462342"):

```java
id('ID_123423462342')
```

This query returns a list with three objects (these objects have the IDs "123423462342," "123423462343," and "123423462344"):

```java
id('ID_123423462342 ID_123423462343 ID_123423462344')
```

{{% alert color="warning" %}}
ID queries cannot be started by the characters `'//'`. ID queries always start directly with `id(....`.
{{% /alert %}}

This function is often used to constrain retrieving objects to the objects of the current user only: 

`[id = $currentUser]`

It will only return results when you are querying `System.Account` or specializations of that entity. Entities with a one-to-one relation to the account will give no results.

If you want to get all the objects (querying any entity) that were created by the current user, you should use the following function:

`[System.owner='[%CurrentUser%]']`