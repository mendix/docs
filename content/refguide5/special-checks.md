---
title: "Special checks"
parent: "microflow-expressions"
---


## Checking for an empty object

### Input

An object
Type: Any type of object.

### Output

Returns whether the object is empty..
Type: Boolean.


```java
$object1 = empty

```

Assuming $object1 is a domain entity and that currently exists, this statement will return False. Conversely, if the object does not currently exist (which is possible if you try to retrieve a non-existent object), it will return True.

The same holds for when $object1 is a variable (such as Integer, String etc).

## Checking for an empty object member

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

<table><thead><tr><td class="confluenceTd">&nbsp;</td><td class="confluenceTd">member1 has a value</td><td class="confluenceTd">member1 does not have a value</td></tr></thead><tbody><tr><td class="confluenceTd">$object1 has a value</td><td class="confluenceTd">false</td><td class="confluenceTd">true</td></tr><tr><td class="confluenceTd">$object1 has no value</td><td class="confluenceTd">N/A</td><td class="confluenceTd">true</td></tr></tbody></table>

## Checking whether an object is new

### Input

An object
Type: Any type of object.

### Output

Returns whether the object is new (created but not yet committed). Note this only holds when this function is called on the variable which represents the created object. When the object is retrieved from the database isNew will always yield false.
Type: Boolean.

```java
isNew($object1)

```
