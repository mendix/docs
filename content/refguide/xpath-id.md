---
title: "XPath id"
parent: "xpath-query-functions"
---


This function replaces the default XPath query syntax. It retrieves data based upon the unique identification number supplied. Each individual mendix object generated in a project is automatically provided with an ID.

The argument of this function can be:

*   a string containing one ID
*   a string containing a space-separated sequence of ID's

{{% alert type="info" %}}

```java
id('ID_123423462342')
```

This query returns a list with one object. This object has the ID 123423462342.

{{% /alert %}}{{% alert type="info" %}}

```java
id('ID_123423462342 ID_123423462343 ID_123423462344')
```

This query returns a list with three objects. These objects have the ID's 123423462342, 123423462343 and 123423462344.

{{% /alert %}}{{% alert type="warning" %}}

Id-queries cannot be started by the characters '//'! Id-queries always start directly with id(....

{{% /alert %}}


This function is often used to constraint retrieving objects to the objects of the current user only:

[id = $currentUser]

It will only return results when you are querying System.Account or specializations of that entity. Entities with a 1-1 relation to account will give no results.

If you want to get all objects (querying any entity) that were created by the current user, you should use:

[System.owner='[%CurrentUser%]']
