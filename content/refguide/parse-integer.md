---
title: "Parse Integer"
parent: "expressions"
description: "Describes the function for parsing integer from strings in Mendix."
tags: ["studio pro", "expressions", "parse", "integer"]
---

## 1 Introduction

This document describes functions that converts a string to an integer.

## 2 parseInteger

Takes a string and parses it to an integer.

### 2.1 Input Parameters

Input parameters are described in the table below:

| Value                        | Type    |
| ---------------------------- | ------- |
| The string to parse          | String  |
| Default value **(optional)** | Integer |

### 2.2 Output

The output is described in the table below:

| Value                                                        | Type    |
| ------------------------------------------------------------ | ------- |
| An integer if it is possible to parse it from the string. If it is not a valid parsable string, the default value will be returned. If no default value is provided, an error will occur. | Integer |

### 2.3 Examples

The examples below illustrate which value the expression returns:

* If you type in the following input:

    ```java
    parseInteger('42')
    ```

    the output is:

    ```java
    42
    ```

* If you type in the following input:

    ```java
    parseInteger('not_an_integer', 42)
    ```

    the output is:

    ```java
    42
    ```
