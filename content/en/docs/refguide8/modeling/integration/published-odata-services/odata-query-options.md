---
title: "OData Query Options"
url: /refguide8/odata-query-options/
tags: ["OData", "filter", "count", "sort", "select", "page", "studio pro"]
---

{{% alert color="info" %}}
<img src="/attachments/china.png" class="d-inline-block" /> For the Simplified Chinese translation, click [中文译文](https://cdn.mendix.tencent-cloud.com/documentation/refguide8/odata-query-options.pdf).
{{% /alert %}}

## 1 Introduction

This is a list of query options for OData.

{{% alert color="info" %}}
We currently only support the options described here.
{{% /alert %}}

## 2 Retrieving Objects

### 2.1 Retrieving All Objects

All objects can be retrieved by specifying the URI. For example: `/odata/myservice/myresource`. You can see this if you specify the URI in a browser.

### 2.2 Retrieving a Single Object

A single object can be retrieved by passing the object identifier in the URI. For example: `/odata/myservice/myresource(8444249301330581)`.

### 2.3 Retrieving Associated Objects

Associated objects can be retrieved by passing the `$expand` query parameter. For example: `/odata/myservice/Exployees?$expand=Cars,Address/City`.

{{% alert color="info" %}}
The `$expand` feature was introduced in Studio Pro [8.11.0](/releasenotes/studio-pro/8.11/#8110).
{{% /alert %}}

## 3 Counting the Number of Objects

### 3.1 Retrieving a Count of Objects

You can find out how many objects there are by passing the `$count` query option. In this case, the result is an integer which is the number of objects. For example: `/odata/myservice/myresource/$count`.

### 3.2 Inline Count

By setting the `$inlinecount` query option to 'allpages', a count of the number of items returned will be included in the result. For example: `?$inlinecount=allpages`.

## 4 Filtering

Filters are applied by appending a `$filter=...` parameter to the request. For example: `/Employees?$filter=Name eq 'John'`.

### 4.1 Passing attributes

This table describes how to pass values for different attribute types:

| Type | How to Pass |
| --- | --- |
| String and Enumeration | Enclosed in single quotes (for example, 'John') |
| Datetime | Preceded with `datetime` and enclosed in single quotes (for example, datetime'2015-01-01' or datetime'&lt;epoch value here&gt;') |
| Other | Plain value (for example, 15) |

### 4.2 Comparison Operators

We support the following comparison operators:

| Operator | Meaning | Example |
| --- | --- | --- |
| eq | equals | `/Employees?$filter=Name eq 'John'` |
| ne | does not equal | `/Employees?$filter=Name ne 'John'` |
| gt | greater than | `/Employees?$filter=Age gt 15` |
| lt | less than | `/Employees?$filter=Age lt 15` |
| ge | greater than or equal to | `/Employees?$filter=Age ge 15` |
| le | less than or equal to | `/Employees?$filter=Age le 15` |

### 4.3 Arithmetic Operators

| Operator | Meaning | Example                              | Returns |
| ---      | ---     | ---                                  | ---     |
| add      | add | `/Products?$filter=Prices add 2 eq 10` | All products with price 8 |
| sub      | minus | `/Products?$filter=Prices sub 2 eq 10` | All products with price 12 |
| mul      | multiplied by | `/Products?$filter=Prices mul 2 eq 10` | All products with price 5 |
| div      | divided by |`/Products?$filter=Prices div 2 eq 10` | All products with price 20 |
| mod      | modulus |`/Products?$filter=Prices mod 5 eq 0`  | All products with price divisible by 5 |

### 4.4 Functions

| Function     | Example                                 | Returns |
| ---          | ---                                     | ---     |
| substringof  | `/Employees?$filter=substringof('f', Name)`     | All employees with names that contain an 'f' |
| endswith     | `/Employees?$filter=endswith(Name, 'f')`        | All employees with names that end with 'f' |
| startswith   | `/Employees?$filter=startswith(Name, 'f')`      | All employees with names that start with 'f' |
| length       | `/Employees?$filter=length(Name) eq 5`          | All employees with names that have a length of 5 |
| year         | `/Employees?$filter=year(DateOfBirth) eq 1990`  | All employees born in the year 1990 |
| month        | `/Employees?$filter=month(DateOfBirth) eq 5`    | All employees born in May |
| day          | `/Employees?$filter=day(DateOfBirth) eq 31`     | All employees born on the 31st day of the month |
| hour         | `/Employees?$filter=hour(Registration) eq 13`   | All employees registered between 13:00 (1 PM) and 13:59 (1:59 PM) |
| minute       | `/Employees?$filter=minute(Registration) eq 55` | All employees registered on the 55th minute of any hour |
| second       | `/Employees?$filter=second(Registration) eq 55` | All employees registered on the 55th second of any minute of any hour |

### 4.5 Combining Filters

Filters can be combined with `and`, `or`, `not`, and `()`. For example: `?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)`.

| Combination | Example |
| --- | --- |
| and | `/Employees?$filter=Name eq 'John' and Age gt 65` |
| or | `/Employees?$filter=Age gt 65 or Age lt 11` |
| not | `/Employees?$filter=not(Name eq 'John')` |
| ( ) | `/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)` |

### 4.6 Filtering by Association

You can filter on attributes of an associated entity. The way you do this depends on whether the association exposes one object or a list of objects.

| Type | Example |
| --- | --- |
| Filter on an associated object | `People?$filter=BirthPlace/CityName eq 'Rotterdam'` |
| Filter on an associated list  | `City?$filter=BornIn/any(person:person/Year le 1919)` |

Filtering on an associated object or list in this way is possible when you [expose associations as a link](/refguide8/odata-representation/#associations). It is not possible when you [expose associations as an associated object ID](/refguide8/odata-representation/#associations).

## 5 Sorting

You can sort the result using the `$orderby` query option. For example: `?$orderby=Name` or `?$orderby=BirthPlace/CityName`.

The default direction is ascending, and you can make this explicit. For example: `?$orderby=Name asc`.

You can also order the result in a descending direction. For example: `?$orderby=Name desc`.

It is possible to sort on multiple attributes, which have to be comma-separated. For example: `?$orderby=Name asc,Age desc`.

## 6 Selecting fields

You can select which attributes and associations to return by specifying the `$select` query option. For example: `?$select=Name,Age`.

## 7 Paging

### 7.1 Top (Limit)

You can limit the number of returned objects using the `$top` query option, where the limit is a positive integer. For example: `?$top=100`.

### 7.2 Skip (Offset)

You can skip a number of objects before retrieving the result using the `$skip` query option, where the offset is a positive integer. For example: `?$skip=100` will return objects starting with the 101st object in the list.

## 8 Null Literals

You can compare values against the `null` literal. For example: `?$filter=Name eq null`.

In this example, `Name` is a string attribute that can have no assigned value in the database. Note that `null` means *no value* as opposed to `''` (which is an empty string).

When you filter against associations, null literals can be quite useful. For example: `?$filter=Association_A_B ne null`. In this example, you query for objects of entity type `A` that have at least one association set to objects of entity type `B`.
