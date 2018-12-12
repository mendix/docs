---
title: "OData Query Options"
parent: "published-odata-services"
---

## 1 Introduction

This is a list of query options for OData. Note that when something is not in this list, we currently don't support it (yet).

## 2 Retrieving Objects

### 2.2 Retrieving All Objects

This can be done by opening the URI in a browser. For example: `/odata/myservice/myresource`.

### 2.1 Retrieving a Single Object

This can be done by passing the identifier in the URI. For example: `/odata/myservice/myresource(8444249301330581)`.

## 3 Counting the Number of Objects

### 3.1 Retrieving a Count of Objects

This can be done by passing the `$count` query option. In this case, the result is just the number of objects. For example: `/odata/myservice/myresource/$count`.

### 3.2 Inline Count

By setting the `$inlinecount` query option to 'allpages', an inline count will be added to the result. For example: `?$inlinecount=allpages`.

## 4 Filtering

At the moment, we only support basic filtering options.

This is done by passing parameters to the request. For example: `/Employees?$filter=Name eq 'John'`.

We support the following operators:

| Operator | Meaning | Example |
| --- | --- | --- |
| eq | equals | `/Employees?$filter=Name eq 'John'` |
| ne | not equals | `/Employees?$filter=Name ne 'John'` |
| gt | greater than | `/Employees?$filter=Age gt 15` |
| lt | less than | `/Employees?$filter=Age lt 15` |
| ge | greater than or equals to | `/Employees?$filter=Age ge 15` |
| le | less than or equals to | `/Employees?$filter=Age le 15` |

This table describes how to pass values for different attribute types:

| Type | How to Pass |
| --- | --- |
| String and Enumeration | Surrounded with apostrophes (for example, 'John') |
| Datetime | Surrounded with datetime and apostrophes (for example, datetime'2015-01-01' or datetime'&lt;epoch value here&gt;') |
| Other | Plain value (for example, 15) |

### 4.1 Arithmetic Operators

| Operator | Example                              | Returns |
| ---      | ---                                  | ---     |
| add      | `/Products?$filter=Prices add 2 eq 10` | All products with price 9 |
| sub      | `/Products?$filter=Prices sub 2 eq 10` | All products with price 12 |
| mul      | `/Products?$filter=Prices mul 2 eq 10` | All products with price 5 |
| div      | `/Products?$filter=Prices div 2 eq 10` | All products with price 20 |
| mod      | `/Products?$filter=Prices mod 5 eq 0`  | All products with price divisible by 5 |

### 4.2 Functions

| Function     | Example                                 | Returns |
| ---          | ---                                     | ---     |
| substringof  | `/Employees?substringof('f', Name)`     | All employees with names that contain an 'f' |
| endswith     | `/Employees?endswith(Name, 'f')`        | All employees with names that end with 'f' |
| startswith   | `/Employees?startswith(Name, 'f')`      | All employees with names that start with 'f' |
| length       | `/Employees?length(Name) eq 5`          | All employees with names that have a length of 5 |
| year         | `/Employees?year(DateOfBirth) eq 1990`  | All employees born in the year 1990 |
| month        | `/Employees?month(DateOfBirth) eq 5`    | All employees born in May |
| day          | `/Employees?day(DateOfBirth) eq 31`     | All employees born on the 31st day of the month |
| hour         | `/Employees?hour(Registration) eq 13`   | All employees registered between 13:00 (1 PM) and 13:59 (1:59 PM) |
| minute       | `/Employees?minute(Registration) eq 55` | All employees registered on the 55th minute of any hour |
| second       | `/Employees?second(Registration) eq 55` | All employees registered on the 55th second of any minute of any hour |

### 4.3 Combining Filters

Filters can be combined with 'and' and 'or', 'not', and (). For example" `?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)`.

| Combination | Example |
| --- | --- |
| and | `/Employees?$filter=Name eq 'John' and Age gt 65` |
| or | `/Employees?$filter=Age gt 65 or Age lt 11` |
| not | `/Employees?$filter=not(Name eq 'John')` |
| ( ) | `/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)` |

## 5 Sorting

You can sort the result using the `$orderby` query option. For example: `?$orderby=Name`.

The default direction is ascending, and you can pass this to make it explicit. For example: `?$orderby=Name_ asc`.

You can also order the result in a descending direction. For example: `?$orderby=Name_ desc`.

It is possible to sort on multiple attributes, which have to be comma-separated. For example: `?$orderby=Name, Age desc`.

## 6 Selecting fields

You can select which attributes and associations to return by specifying the `$select` query option. For example: `?$select=Name,Age`.

## 7 Paging

### 7.1 Top (Limit)

Limiting the amount of returned objects can be done using the `$top` query option, where the value is a positive integer. For example: `?$top=100`.

### 7.2 Skip (Offset)

Skipping a number of objects in the result can be done using the `$skip` query option, where the value is a positive integer. For example: `?$skip=100`.

## 8 Null Literals

Operators can compare against 'null' literals. For example: `?$filter=Name eq null`.

In this example, `Name` is a string attribute that can have an empty value in the database. Note that `null` means "no value," as opposed to `""` (which is an empty string).

When you filter against associations, null literals can be quite useful. For example: `?$filter=Association_A_B ne null`. In this example, you query for objects `A` that actually have an association set to `B` objects.
