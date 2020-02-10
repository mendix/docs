---
title: "Attributes"
parent: "entities"
menu_order: 30
tags: ["domain model", "entity", "attribute", "studio pro"]
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details.
---

## 1 Introduction

Attributes are characteristics that describe and/or identify the entity. For example, a Customer entity typically has attributes for the name of the customer, an e-mail address and other personal information.

The domain model editor uses the following symbols for visualization of attribute properties:

| Symbol | Description |
| --- | --- |
| ![](attachments/entities/917593.png) | This attribute has one or more validation rules. |
| ![](attachments/entities/917592.png) | This attribute has a microflow that calculates the value of the attribute. |

## 2 Common

### 2.1 Name

The name property defines the name of the attribute. This name is used to refer to the attribute from forms, microflows, queries, constraints etcetera.

{{% alert type="warning" %}}
If you delete an attribute in your entity and then create a new attribute with the same name, Mendix will consider it a new and different attribute. This means that upon deployment the old column will be dropped, including its data. Then a new, empty, column with the same name will be created.
{{% /alert %}}

## 3 Type {#type}

### 3.1 Type

The type property defines the type of data that can be stored in the attribute. An attribute has one of the following types:

Type | Possible values
--- | ---
AutoNumber | A positive or negative whole number. AutoNumber attributes are automatically generated numbers. The default value of the attribute determines the first number that will be generated. Each created object will have an AutoNumber that is one greater than the previous one. AutoNumbers can only be used for persistable entities as the AutoNumber value is computed in the database.
Binary | Binary data. Can only be used for persistable entities as the data is stored in the database. For example an entire file. In most cases you want to use an association to a FileDocument or Image to store file contents.
Boolean | True or false.
Date and time | A point in time consisting of a date and a time component accurate up to milliseconds. 
Decimal | A positive or negative number that can have digits after the decimal point. The Decimal type can be used for high-precision calculations. Use this type to represent amounts of money for example. When a Decimal type attribute is persisted in the database its value is validated against 2 conditions. In case the number of digits of the integral part (before the decimal separator) is more than 20, an exception is thrown. In case the number of digits of the fractional part (after the decimal separator) is more than 8, the fractional value is automatically rounded according to [the round half to even rule (also known as bankers' rounding)](https://en.wikipedia.org/wiki/Rounding#Round_half_to_even). Therefore the the maximum allowable value for the Decimal type is 99999999999999999999.99999999.
Enumeration | A list of predefined attributes. For more information, see [Enumerations](enumerations). 
Integer | A whole number that can be positive (maximum 2<sup>31</sup>-1, thus 2147483647), negative (minimum -2<sup>31</sup>, thus -2147483648), or zero.
Long | A whole number that can be positive (maximum 2<sup>63</sup>-1), negative (minimum -2<sup>63</sup>), or zero.
String *(default)* | A text containing letters, spaces, numbers and other characters.

The maximum size that can approximately be stored in an attribute of type binary depends on the database:

| HSQLDB | PostgreSQL | SQL Server | Oracle |
| --- | --- | --- | --- |
| 1 MB | 1 GB | 2 GB | 128 TB or limited by hard disk of server |

In a web shop, you want to store the id, profile photo, level (for service quality), user name, password, activity, total of minutes spent online, year of subscription, date of birth, total amount of expenses and the standard amount of discount for a customer.

The ID should be unique for every customer, so this attribute has type AutoNumber.

The photo will be represented by an association to an entity that specializes Image. You do not use a Binary attribute for this purpose.

Level has three possible values: High, Medium and Low. This is stored in an attribute of type Enumeration.

The password itself should not be stored, but only its hash value, thus it is stored in an attribute of type **Hashed string**.

A customer can be active or inactive, which is stored in an attribute named 'Active' of type Boolean.

![](attachments/entities/917578.png)

### 3.2 Localize (Only for Date & Time Attribute Type)

This property indicates whether the date and time should be localized. By default localization is enabled. If you are _not_ interested in the time component of a date (e.g. a birthday), you should set this property to 'No'. Otherwise, the date can change because of time zone differences: a date and time early in the morning on April 2nd in Europe will be on April 1st in the U.S.A.

In technical terms, this property indicates whether the client assumes that the date and time are in a local time zone (Yes) or in UTC (No). In the former case, the date is first converted to UTC before being sent to the server and converted from UTC before being displayed.

Default: *Yes*

### 3.3 Enumeration (Only for Enumeration Attribute Type)

The enumeration property indicates which enumeration defines the possible values for this attribute.

### 3.4 Length (Only for String Attribute Type)

This property specifies whether the length of a String is limited to a maximum or unlimited. In the case of a limited length, the 'Max length' property specifies the maximum (see below).

Default: *Limited*

### 3.5 Max Length (Only for String Attribute Type)

The 'Max length' property specifies the number of characters that can be stored in the attribute.

Default: *200*

## 4 Value

### 4.1 Value

The **Value** determines whether the value of the attribute is **Calculated** by a microflow or **Stored** in the database.

Take note of the following things when using **Calculated** attributes:

* Each time an object with a calculated attribute is retrieved, the attribute is calculated. Depending on the complexity of the microflow and the number of objects you retrieve this can have impact on performance.
* Attributes that are calculated by a microflow are not stored in the database.
* It is not possible to sort on an attribute for which this property is used, because sorting is done by the database engine.
* Uncommitted associated objects cannot be retrieved in calculated attributes.

### 4.2 Microflow (If Value Is Calculated with Microflow)

If the value is a computation, the **Microflow** property defines which microflow defines this computation to calculate the value of the attribute when the object is retrieved. The microflow should have a parameter of the type of the entity of the attribute and it should return a value with the same type as the attribute.

For example, in a web shop, you want to show the total expenses for each customer. These are calculated by retrieving all orders associated with the customer and adding their totals.

![](attachments/entities/917570.png)

### 4.3 Default Value (If Value Is Stored)

The **Default value** property defines the value of this attribute when an object is created. The default value should be compatible with the type of the attribute.

| Type of Attribute | Default Value When Not Specified | Additional Comments |
| --- | --- | --- |
| AutoNumber | 1 | Starting value of this attribute. If there are already objects of this entity, the AutoNumber values will be based on the right 32 bits of the id column value. This can cause gaps in the AutoNumber ranges with jumps of 100, because id values are reserved by the Runtime in blocks of 100. |
| Binary | N/A |   |
| Boolean | False |   |
| Date and time | (empty) | The default value can either be a UTC date with the format `year-month-day` (suffixed optionally by ` hour:minute`, or ` hours:minute:second`), or `[%CurrentDateTime%]` (which sets the value of this attribute to the date and time when the object is created). |
| Decimal | 0 |   |
| Enumeration | (empty) |   |
| Hashed string | (empty) |   |
| Integer | 0 |   |
| Long | 0 |   |
| String | (empty) |   |

## 5 Effects of Data Type Changes on Existing Attributes

For more information, see [Attributes Type Migration](attributes-type-migration).
