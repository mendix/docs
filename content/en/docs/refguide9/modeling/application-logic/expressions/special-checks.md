---
title: "Special Checks"
url: /refguide9/special-checks/
weight: 40
description: "Describes special checks in expressions in Mendix."
---

## Introduction

This documents describes special checks in expressions, such as checking whether an object is empty, new, is synced. 

## Checking for an Empty Object

Checks if an object is empty. 

### Input Parameters

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### Output

The output is described in the table below:

| Value    | Type    |
| ---------- | ------- |
| Returns whether the object is empty | Boolean |

### Example

If you use the following input:

```java
$object1 = empty
```

The output will be `False` assuming $object1 is a domain entity and that currently exists.

The output will be `True` if the object does not currently exist (which is possible if you try to retrieve a non-existent object).

The same holds for when $object1 is a variable (such as Integer, String, etc).

## Checking for an Empty Object Member

### Input Parameters

The input parameters are described in the table below:

| Value                                            | Type               |
| ------------------------------------------------ | ------------------ |
| A member (attribute or association) of an object | Any type of member |

### Output

The output is described in the table below:

| Value                                   | Type    |
| --------------------------------------- | ------- |
| Returns whether the attribute is empty | Boolean |

### Examples

For example, you have the following input:

```java
$object1/member1 = empty
```

Assuming $object1 is a domain entity that has a member called 'member1', the table below shows the output:

|   | member1 has a value | member1 does not have a value |
| --- | --- | --- |
| $object1 has a value | false | true |
| $object1 has no value | N/A | true |

## Checking Whether an Object Is New {#new}

Checks whether an object is new. 

### Input Parameters

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| The output depends on whether the object is new (created but not yet committed). Note this only holds when this function is called on a created object. When the object is retrieved from the database `isNew` will always be `false`. | Boolean |

### Example

An example of an input can be the following:

```java
isNew($object1)
```

## Checking Whether an Object Is Synced {#synced}

This function is available only in expressions for [conditional visibility or editability](/refguide9/common-widget-properties/) and [nanoflows](/refguide9/nanoflows/), as they are only evaluated on client side.

### Input Parameters

The input parameters are described in the table below:

| Value     | Type               |
| --------- | ------------------ |
| An object | Any type of object |

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Returns whether the changes done to the object [offline](/refguide9/offline-first/) have been synchronized to the runtime database. In web profiles and [hybrid profiles](/refguide9/navigation/#hybrid-profiles) without offline support, this always returns `true`. | Boolean |

### Example

An example of an input can be the following:

```java
isSynced($currentObject)
```

## Checking if a Synchronization is Running {#is-syncing}

This function is available only in client-side expressions (expressions in [nanoflows](/refguide9/nanoflows/) and [pages](/refguide9/pages/)).

### Input Parameters

No input parameter is required for this check.

### Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| Returns `true` when there is a [synchronization](/refguide9/synchronize/) process running, otherwise it returns `false`.| Boolean |

### Example

An example of an input can be the following:

```java
isSyncing()
```
