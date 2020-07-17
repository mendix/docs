---
title: "Special Checks"
parent: "expressions"
description: "Describes special checks in expressions in Mendix."
tags: ["studio pro", "special checks", "special check", "expressions"]
---

## 1 Introduction

This documents describes special checks in expressions, such as checking whether an object is empty, new, is synched. 

## 2 Checking for an Empty Object

Checks if an object is empty. 

### 2.1 Input Parameters

An object.

Type: Any type of object.

### 2.2 Output

Returns whether the object is empty.

Type: Boolean.

### 2.3 Example

If you type in the following input:

```java
$object1 = empty
```

The output will be `False` assuming $object1 is a domain entity and that currently exists.

The output will be `True` if the object does not currently exist (which is possible if you try to retrieve a non-existent object).

The same holds for when $object1 is a variable (such as Integer, String, etc).

## 3 Checking for an Empty Object Member

### 3.1 Input Parameters

A member (attribute or association) of an object.

Type: Any type of member.

### 3.2. Output

Whether the attribute is empty.

Type: Boolean.

### 3.3 Examples

For example, you have the following input:

```java
$object1/member1 = empty
```

Assuming $object1 is a domain entity that has a member called 'member1', the table below shows the output:

|   | member1 has a value | member1 does not have a value |
| --- | --- | --- |
| $object1 has a value | false | true |
| $object1 has no value | N/A | true |

## 4 Checking Whether an Object Is New<a name="new"></a>

Checks whether an object is new. 

### 4.1 Input Parameters

An object.

Type: Any type of object.

### 4.2 Output

The output depends on whether the object is created but not commited yet.

Type: Boolean.

### 4.3 Example

For example, you have the following input:

```java
isNew($object1)
```

The output depends on whether the object is new (created but not yet committed). Note this only holds when this function is called on a created object. When the object is retrieved from the database isNew will always be false.

## 5 Checking Whether an Object Is Synced<a name="synced"></a>

{{% alert type="info" %}}
This function is available only in expressions for [conditional visibility or editability](common-widget-properties), as only they are evaluated client-side.
{{% /alert %}}

### 5.1 Input Parameters

An object.

Type: Any type of object.

### 5.2 Output

Returns whether the changes done to the object [offline](offline-first) have been synchronized to the runtime database. In web profiles and [hybrid profiles](navigation#hybrid-profiles) without offline support, this always returns `true`.

Type: Boolean.

### 5.3 Example

```java
isSynced($currentObject)
```
