---
title: "Attribute Types in the Web Modeler"
parent: "domain-models-wm"
description: "Describes attribute types in the Mendix Web Modeler."
tags: ["web modeler", "domain model", "attributes", "attribute types"]
---

## 1 Introduction 

Attributes are characteristics that describe and/or identify the entity. If we compare these to an database table, attributes are the fields of the table. For example, a *Customer* entity typically has attributes for the name of the customer, an e-mail address, and other personal information. 

## 2 Types

Attributes in the Web Modeler can be of the following types:

| Type          | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Autonumber    | A positive or negative whole number. AutoNumber attributes are automatically generated numbers. The default value of the attribute determines the first number that will be generated. Each created object will have an AutoNumber that is one greater than the previous one. |
| Binary        | Binary data. For example, an entire file.                    |
| Boolean       | True or false.                                               |
| Date and Time | A point in time that consists of a date and a time component, accurate up to milliseconds. |
| Decimal       | A positive or negative number that can have digits after the decimal point. |
| Enumeration   | A list of predefined values.                                 |
| Hashed String | A text that will be stored after it is hashed (encrypted). This type can for example be used to store a password. |
| Integer       | A whole number.  The range of this type is –2,147,483,648 to 2,147,483,647. |
| Long          | A whole number.  The range of this type is –9,223,372,036,854,775,808 to 9,223,372,036,854,775,807. |
| String        | A text containing letters, spaces, numbers and other characters. You can set this type to unlimited or to limit it with the number of symbols you like. |

For more technical information on attribute types, see the [Type](../attributes#type) section in *Attributes* in the *Desktop Modeler* category.

## 3 Attribute Properties {#attribute-properties}

While attributes have common properties, some properties are specific for a particular attribute type. 

### 3.1 Common Properties

You can find the description of the common properties in the table below. 

| Property      | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| Name          | Defines the name of the attribute.                           |
| Type          | Shows the type of the attribute.                             |
| Default Value | Defines the preset value of the attribute when the object is created. Setting the default value can speed up the process of interacting with your app. For instance, you have an attribute of the enumeration type, defining addresses where customers can pick their orders up. The default value can display the most popular pickup point. <br />The default value should be compatible with the type of the attribute. For example, you cannot write a text as a default value for decimal.  <br />**Note** All attribute types can have a default value except binary. |

### 3.2 Specific Properties

You can find the description of specific properties that differ per attribute type in the table below. 

| Property                                    | Attribute Type | Description                                                  |
| ------------------------------------------- | -------------- | ------------------------------------------------------------ |
| Localize                                    | Date and Time  | Indicates if local time or server time is used. **Use local time** means the local time zone of a user will be used. **Use server time** means UTC  will be set for all users. <br />*Default value: Use local time* |
| [Enumeration](domain-models-enumeration-wm) | Enumeration    | With this property you can define an enumeration (predefined list of options), by creating a new list or choosing from existing enumerations. For more information, see [Enumeration in the Web Modeler](domain-models-enumeration-wm). |
| Length                                      | String         | Specifies whether the length of a string is limited or unlimited. In the case the length is limited, the **Max-Length** property specifies the maximum number of characters that can be stored in the attribute . <br />*Default value: Unlimited* |

## 4 Related Content

* [Domain Models Overview in the Web Modeler](domain-models-wm)
* [Attributes](../attributes) 
* [Enumeration in the Web Modeler](domain-models-enumeration-wm)
