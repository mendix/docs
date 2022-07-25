---
title: "Special checks"
url: /refguide7/special-checks/
---

## Checking for an Empty Object

### Input

An object.

Type: Any type of object.

### Output

Returns whether the object is empty.

Type: Boolean.

```java
$object1 = empty
```

Assuming $object1 is a domain entity and that currently exists, this statement will return False. Conversely, if the object does not currently exist (which is possible if you try to retrieve a non-existent object), it will return True.

The same holds for when $object1 is a variable (such as Integer, String etc).

## Checking for an Empty Object Member

### Input

A member (attribute or association) of an object.

Type: Any type of member.

### Output

Whether the attribute is empty.

Type: Boolean.

```java
$object1/member1 = empty
```

Assuming $object1 is an domain entity and that it has a member called 'member1', the following table illustrates what this statement will return:

|   | member1 has a value | member1 does not have a value |
| --- | --- | --- |
| $object1 has a value | false | true |
| $object1 has no value | N/A | true |

## Checking Whether an Object Is New<a name="new"></a>


### Input

An object.

Type: Any type of object.

### Output

Returns whether the object is new (created but not yet committed). Note this only holds when this function is called on the variable which represents the created object. When the object is retrieved from the database isNew will always yield false.

Type: Boolean.

```java
isNew($object1)
```

## Checking Whether an Object Is Synced<a name="synced"></a>

{{% alert color="info" %}}

This function is available only in expressions for [conditional visibility or editability](/refguide7/conditions/), as only they are evaluated client-side.

This was added in Mendix 7.1.

{{% /alert %}}

### Input

An object.

Type: Any type of object.

### Output

Returns whether the changes done to the object [offline](/refguide7/offline/) have been synchronized to the runtime database. In web profiles and [hybrid profiles](/refguide7/hybrid-phone-profile/) without offline support, this always returns `true`.

Type: Boolean.

```java
isSynced($currentObject)
```
