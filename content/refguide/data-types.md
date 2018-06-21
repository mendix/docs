---
title: "Data Types"
category: "Desktop Modeler"
---


Throughout the Modeler the same set of data types are used. The exception is the type of [attributes](attributes), which is more specific with regard to storage in the database. In general, an attribute type maps to the data type with the same name. The exceptions are mentioned in the table below.

Mendix supports the following data types:

| Name | Description | Examples |
| --- | --- | --- |
| Boolean | A truth value. | `true` and `false` |
| Binary | Binary data such as files and images. |   |
| Date and time | A point in time consisting of a date and a time component accurate up to milliseconds. | Thursday, 12 February 2015, 14:50:36 |
| Decimal | A high-precision fractional number. The Decimal type can be used for high-precision calculations. Use this type to represent amounts of money for example. | 3.14, 738000000000.00000001 |
| Enumeration | One of the values of the given [enumeration](enumerations). | Red, Green, Blue; Todo, Running, Done |
| Integer/Long | A whole number. The attribute types AutoNumber, Integer and Long map to this data type. | -42, 0, 123 |
| Float | ***The Float type is deprecated. Use the high-precision Decimal type instead.*** A fractional number. The attribute types Float and Currency both map to this data type. | -3.45, 0.0, 43.21 |
| List | A list of objects of a specific [entity](entities). |   |
| Nothing | No value. Can only be used as the return type of a [microflow](microflows). |   |
| Object | A single object of a specific [entity](entities). |   |
| String | A piece of text that can contain letters, numbers, spaces and other characters. The attribute types String and HashString both map to this data type. | 'Hello World!'; 'Desiderius Erasmus' |
