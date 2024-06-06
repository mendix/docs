---
title: "Length"
url: /refguide/length/
weight: 135
---

## 1 Introduction

Basic function to determine the length of a string or a list.

## 2 length

Determines the length of a string or a list and outputs the value as an integer.

### 2.1 Input Parameters

The input parameters are described in the table below:

| Value                      | Type   |
| -------------------------- | ------ |
| String to find length of   | String |
| List to find the length of | List   |

### 2.2 Output

The output is described in the table below:

| Value                | Type    |
| -------------------- | ------- |
| Length of the string | Integer |
| Length of the list   | Integer |

### 2.3 Examples

| Input | Output |
| --- | --- |
| `length('thisismystring')` | 14 |
| `length($MyString)` and `MyString = 'qwer'` | 4 |
| `length($MyString)` and `MyString` is empty | 0 |
| `length($EntityAList)` and `EntityAList = '[MxObject, MxObject, MxObject]'`| 3 |
| `length($EntityAList)` and `EntityAList = '[]'`| 0 |
