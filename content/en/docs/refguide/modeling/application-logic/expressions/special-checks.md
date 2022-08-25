---
title: "Special Checks"
url: /refguide/special-checks/
weight: 40
description: "Describes special checks in expressions in Mendix."
tags: ["studio pro", "special checks", "special check", "expressions"]
---

## 1 Introduction

This documents describes special checks in expressions, such as checking whether an object is empty, new, is synced. 

## 2 Checking for an Empty Object

Checks if an object is empty. 

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### 2.2 Output

The output is described in the table below:

| Value    | Type    |
| ---------- | ------- |
| Returns whether the object is empty | Boolean |

### 2.3 Example

If you use the following input:

```java
$object1 = empty
```

The output will be `False` assuming $object1 is a domain entity and that currently exists.

The output will be `True` if the object does not currently exist (which is possible if you try to retrieve a non-existent object).

The same holds for when $object1 is a variable (such as Integer, String, etc).

## 3 Checking for an Empty Object Member

### 3.1 Input Parameters

The input parameters are described in the table below:

| Value                                            | Type               |
| ------------------------------------------------ | ------------------ |
| A member (attribute or association) of an object | Any type of member |

### 3.2. Output

The output is described in the table below:

| Value                                   | Type    |
| --------------------------------------- | ------- |
| Returns whether the attribute is empty | Boolean |

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

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### 4.2 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The output depends on whether the object is new (created but not yet committed). Note this only holds when this function is called on a created object. When the object is retrieved from the database `isNew` will always be `false`. | Boolean |

### 4.3 Example

An example of an input can be the following:

```java
isNew($object1)
```

## 5 Checking Whether an Object Is Synced {#synced}

This function is available only in expressions for [conditional visibility or editability](/refguide/common-widget-properties/), as only they are evaluated on client side.

### 5.1 Input Parameters

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### 5.2 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Returns whether the changes done to the object [offline](/refguide/offline-first/) have been synchronized to the runtime database. In web profiles and [hybrid profiles](/refguide/navigation/#hybrid-profiles) without offline support, this always returns `true`. | Boolean |

### 5.3 Example

An example of an input can be the following:

```java
isSynced($currentObject)
```

## 6 Checking if a Synchronization is Running {#is-syncing}

This function is available only in client-side expressions (expressions in [nanoflows](/refguide/nanoflows/) and [pages](/refguide/pages/)).

### 6.1 Input Parameters

No input parameter is required for this check.

### 6.1 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Returns `true` when there is a [synchronization](/refguide/synchronize/) process running, otherwise it returns `false`.| Boolean |

### 6.3 Example

An example of an input can be the following:

```java
isSyncing()
```
