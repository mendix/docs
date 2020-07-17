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

Use the following input parameters:

*   The string to parse
    Type: String
*   (Optional) Default value
    Type: Integer

### 2.2 Output

The integer, if it's possible to parse it from the string. If it's not a valid parsable string, the default value will be returned. If no default value is provided, an error will occur.

Type: Integer

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
