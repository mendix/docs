---
title: "OData Query Options"
url: /refguide/odata-query-options/
tags: ["OData", "filter", "count", "sort", "select", "page", "studio pro"]
---

## 1 Introduction

This is a list of query options for OData.

{{% alert color="info" %}}
We currently only support the options described here.
{{% /alert %}}

## 2 Retrieving Objects

### 2.1 Retrieving All Objects

All objects can be retrieved by specifying the URI. For example: `/odata/myservice/v1/Employees`. You can see this if you specify the URI in a browser.

### 2.2 Retrieving a Single Object

A single object can be retrieved by passing the object identifier in the URI. For example: `/odata/myservice/v1/Employees(8444249301330581)`.

### 2.3 Retrieving Associated Objects

For this example, imagine that you have four entities in your domain model: **Employee**, **Car**, **Address**, and **City**. They include the following:

* An association between **Employee** and **Car**
* An association between **Employee** and **Address**
* An association between **City** and **Address**

Associated objects can be retrieved by passing the `$expand` query parameter. For example: `/odata/myservice/v1/Employees?$expand=Cars,Address($expand=City)` (OData 4) or `/odata/myservice/v1/Employees?$expand=Cars,Address/City` (OData 3).

## 3 Counting the Number of Objects

### 3.1 Retrieving a Count of Objects

You can find out how many objects there are by passing the `$count` query option. In this case, the result is an integer which is the number of objects. For example: `/odata/myservice/v1/Employees/$count`.

### 3.2 (Inline) Count

For OData 4, by setting the `$count` query option to `true`, a count of the number of items returned will be included in the result. For example: `?$count=true`.

For OData 3, by setting the `$inlinecount` query option to `allpages`, a count of the number of items returned will be included in the result. For example: `?$inlinecount=allpages`.

## 4 Filtering

Filters are applied by appending a `$filter=...` parameter to the request. For example: `/Employees?$filter=Name eq 'John'`.

### 4.1 Passing attributes

This table describes how to pass values for different attribute types:

| Type | How to Pass |
| --- | --- |
| String and Enumeration | Enclosed in single quotes (for example, `'John'`) |
| Datetime | For OData 4: a plain value (for example, `2021-12-31`). For OData 3: Preceded with `datetime` and enclosed in single quotes (for example, `datetime'2021-12-31'` or `datetime'<epoch value here>'`) |
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
| contains<sup>1</sup> | `/Employees?$filter=contains(Name, 'f')`     | All employees with names that contain an 'f' |
| startswith   | `/Employees?$filter=startswith(Name, 'f')`      | All employees with names that start with 'f' |
| endswith     | `/Employees?$filter=endswith(Name, 'f')`        | All employees with names that end with 'f' |
| length       | `/Employees?$filter=length(Name) eq 5`          | All employees with names that have a length of 5 |
| year         | `/Employees?$filter=year(DateOfBirth) eq 1990`  | All employees born in the year 1990 |
| month        | `/Employees?$filter=month(DateOfBirth) eq 5`    | All employees born in May |
| day          | `/Employees?$filter=day(DateOfBirth) eq 31`     | All employees born on the 31st day of the month |
| hour         | `/Employees?$filter=hour(Registration) eq 13`   | All employees registered between 13:00 (1 PM) and 13:59 (1:59 PM) |
| minute       | `/Employees?$filter=minute(Registration) eq 55` | All employees registered on the 55th minute of any hour |
| second       | `/Employees?$filter=second(Registration) eq 55` | All employees registered on the 55th second of any minute of any hour |

<small><sup>1</sup> In OData 3, the `contains` function is called `substringof`, and its arguments are reversed For example, `/Employees?$filter=substringof('f', Name)`</small>

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

Filtering on an associated object or list in this way is possible when you [expose associations as a link](/refguide/odata-representation/#associations). It is not possible when you [expose associations as an associated object ID](/refguide/odata-representation/#associations).

## 5 Sorting

You can sort the result using the `$orderby` query option. For example: `?$orderby=Name` or `?$orderby=BirthPlace/CityName`.

The default direction is ascending, and you can make this explicit. For example: `?$orderby=Name asc`.

You can also order the result in a descending direction. For example: `?$orderby=Name desc`.

It is possible to sort on multiple attributes, which have to be comma-separated. For example: `?$orderby=Name asc,Age desc`.

## 6 Selecting fields

You can select which attributes and associations to return by specifying the `$select` query option. For example: `?$select=Name,Age`.

## 7 Paging {#paging}

### 7.1 Top (Limit)

You can limit the number of returned objects using the `$top` query option, where the limit is a positive integer. For example: `?$top=100`.

### 7.2 Skip (Offset)

You can skip a number of objects before retrieving the result using the `$skip` query option, where the offset is a positive integer. For example: `?$skip=100` will return objects starting with the 101st object in the list.

## 8 Null Literals

You can compare values against the `null` literal. For example: `?$filter=Name eq null`.

In this example, `Name` is a string attribute that can have no assigned value in the database. Note that `null` means *no value* as opposed to `''` (which is an empty string).

When you filter against associations, null literals can be quite useful. For example: `?$filter=Association_A_B ne null`. In this example, you query for objects of entity type `A` that have at least one association set to objects of entity type `B`.

## 9 Passing Query Options in the Request Body

If the OData query is too long to be sent as a `GET` request, clients can send the query as a `POST` request to the `/$query` endpoint. For example, `GET /Products?$select=Name,Price` and `POST /Products/$query` with `$select=Name,Price` in the request body give the same result. These `POST` requests must specify the header `Content-Type: text/plain`. 

{{% alert color="info" %}}
The body must adhere to *URL encoding* principles. So, for instance, spaces, tabs, and newlines are not allowed.
{{% /alert %}}

## 10 Updating Objects {#updating-objects}

When a published resource has the [Updatable](/refguide/published-odata-resource/#capabilities) capability, clients can update its attributes and associations by sending a `PATCH` request to the URL of the object (for example, `PATCH /odata/myservice/v1/Employees(8444249301330581)`).

Specify new values for attributes in the body of the request. Here is an example:

```json
{
  "Name": "John",
  "FirstContact": "2012-12-03T07:16:23Z",
  "DateOfBirth": null
}
```

When the association refers to a single object, use the `@id` syntax to set an associated object, or use `null` to empty the associated object. Here is an example:

```json
{
  "Birthplace": { "@id": "Cities(511342)" },
  "Region": null
}
```

When the association refers to multiple objects, add objects to or remove objects from the association by using the `@delta` syntax:

```json
{
  "Customers@delta": [
    {
      "@id": "Customers(484)"
    },
    {
      "@removed": {
        "reason": "changed"
      },
      "@id": "Customers(712)"
    }
  ]
}
```

Clients can only update an association from the entity that is the [owner](/refguide/associations/).

{{% alert color="info" %}}
The *updating attributes* functionality was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/). The *updating associations* functionality was introduced in Studio Pro [9.8.0](/releasenotes/studio-pro/9.8/).
{{% /alert %}}

## 10 Inserting Objects {#inserting-objects}

When a published resource has the [Insertable](/refguide/published-odata-resource/#capabilities) capability, clients can create new objects by sending a `POST` request to the URL of the entity set (for example, `POST /odata/myservice/v1/Employees`). 

The body of the request may specify attribute and association values just as with updates. There is one difference: when the association refers to multiple objects, objects are specified without using `@delta`. For example:

```json
{
  "Customers": [
    { "@id": "Customers(484)" },
    { "@id": "Customers(712)" }
  ]
}
```

Clients can only set values for an association from the entity that is the [owner](/refguide/associations/).

{{% alert type="info" %}}
The *inserting objects* functionality was introduced in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

## 11 Deleting Objects {#deleting-objects}

When a published resource has the [Deletable](/refguide/published-odata-resource/#capabilities) capability, clients can delete an object by sending a `DELETE` request to the URL of the object (for example, `PATCH /odata/myservice/v1/Employees(8444249301330581)`).

{{% alert type="info" %}}
The *deleting objects* functionality was introduced in Studio Pro [9.13.0](/releasenotes/studio-pro/9.13/).
{{% /alert %}}
