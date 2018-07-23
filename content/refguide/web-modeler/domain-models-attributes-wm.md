---
title: "Attribute Types in the Web Modeler"
parent: "domain-models-wm"
description: "Describes attribute types in the Mendix Web Modeler."
tags: ["web modeler", "domain model", "attributes", "attribute types"]
---

## 1 Introduction 

Attributes are characteristics that describe and/or identify the entity. If we compare these to an Excel table, attributes are the fields of the table. For example, a *Customer* entity typically has attributes for the name of the customer, an e-mail address, and other personal information. 

## 2 Types

Attributes in the Web Modeler can be of the following types:

| Type          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Autonumber    | A positive or negative whole number. AutoNumber attributes are automatically generated numbers. The default value of the attribute determines the first number that will be generated. Each created object will have an AutoNumber that is one greater than the previous one. |
| Binary        | Binary data. For example an entire file.                     |
| Boolean       | True or false.                                               |
| Date and Time | A point in time that consists of a date and a time component, accurate up to milliseconds. |
| Decimal       | A positive or negative number that can have digits after the decimal point. |
| Enumeration   | List of predefined values.                                   |
| Hashed String | A hashed string is text that will be stored after it is hashed (encrypted). This type can for example be used to store a password. |
| Integer       | A whole number.  In Java, the range of this type is –2,147,483,648 to 2,147,483,647. |
| Long          | A whole number.  In Java, the range of this type is –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. |
| String        | A text containing letters, spaces, numbers and other characters. You can set this type to unlimited or to limit it with the number of symbols you like. |

For more technical information on attribute types, see the [Type](../attributes#type) section in *Attributes* in the *Desktop Modeler* category.

## 3 Related Content

* [Domain Models Overview in the Web Modeler](domain-models-wm)
* [Attributes](../attributes) 
