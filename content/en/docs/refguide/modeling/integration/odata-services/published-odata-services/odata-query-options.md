---
title: "OData Query Options"
url: /refguide/odata-query-options/
tags: ["OData", "filter", "count", "sort", "select", "page", "studio pro", "insert", "create", "update", "delete", "actions"]
---

## 1 Introduction

This is a list of query options for OData.

{{% alert color="info" %}}
Mendix currently supports only the options described here.
{{% /alert %}}

## 2 Retrieving Objects

### 2.1 Retrieving All Objects

All objects can be retrieved by specifying the URI (for example, `/odata/myservice/v1/Employees`). You can see this if you specify the URI in a browser.

### 2.2 Retrieving a Single Object

A single object can be retrieved by passing the object identifier in the URI (for example, `/odata/myservice/v1/Employees(8444249301330581)`).

### 2.3 Retrieving Associated Objects

For this example, imagine that you have four entities in your domain model: **Employee**, **Car**, **Address**, and **City**. They include the following:

* An association between **Employee** and **Car**
* An association between **Employee** and **Address**
* An association between **City** and **Address**

Associated objects can be retrieved by passing the `$expand` query parameter. For example, you could pass `/odata/myservice/v1/Employees?$expand=Cars,Address($expand=City)` in OData v4 or `/odata/myservice/v1/Employees?$expand=Cars,Address/City` in OData v3 (deprecated).

## 3 Counting the Number of Objects

### 3.1 Retrieving a Count of Objects

To find out how many objects there are, pass the `$count` query option. In this case, the result is an integer, which is the number of objects. Here is an example: `/odata/myservice/v1/Employees/$count`.

### 3.2 (Inline) Count

For OData v4: If you set the `$count` query option to `true` (like this: `?$count=true`), a count of the number of items returned is included in the result.

For OData v3 (deprecated): If you set the `$inlinecount` query option to `allpages` (like this: `?$inlinecount=allpages`), a count of the number of items returned is included in the result.

## 4 Filtering

Filters are applied by appending a `$filter=...` parameter to the request, like this: `/Employees?$filter=Name eq 'John'`.

### 4.1 Passing attributes

This table describes how to pass values for different attribute types:

| Attribute Type | How to Pass |
| -------------- | ----------- |
| String         | Enclose the value in single quotes (for example, `'John'`).|
| Enumeration    | Enclose the enumeration member name in single quotes, prefixed with the enumeration type (for example, `DefaultNamespace.PrimaryColor'Red'`). OData v4.01 syntax without the qualified enumeration type name is not supported.    |
| Datetime       | For OData v4, use a plain value (for example, `2021-12-31`). For OData v3 (deprecated), enclose the value in single quotes and prefix `datetime` (for example, `datetime'2021-12-31'` or `datetime'<epoch value here>'`). |
| Other          | Plain value (for example, `15`)                            |

### 4.2 Comparison Operators

Mendix supports the following comparison operators:

| Operator | Meaning                  | Example                             |
| -------- | ------------------------ | ----------------------------------- |
| `eq`     | equals                   | `/Employees?$filter=Name eq 'John'` |
| `ne`     | does not equal           | `/Employees?$filter=Name ne 'John'` |
| `gt`     | greater than             | `/Employees?$filter=Age gt 15`      |
| `lt`     | less than                | `/Employees?$filter=Age lt 15`      |
| `ge`     | greater than or equal to | `/Employees?$filter=Age ge 15`      |
| `le`     | less than or equal to    | `/Employees?$filter=Age le 15`      |

### 4.3 Functions

| Function               | Example                                         | Returns                                                               |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| `contains`<sup>1</sup> | `/Employees?$filter=contains(Name, 'f')`        | All employees with names that contain an `f`                          |
| `startswith`           | `/Employees?$filter=startswith(Name, 'f')`      | All employees with names that start with `f`                          |
| `endswith`             | `/Employees?$filter=endswith(Name, 'f')`        | All employees with names that end with `f`                            |
| `length`               | `/Employees?$filter=length(Name) eq 5`          | All employees with names that have a length of 5                      |
| `year`                 | `/Employees?$filter=year(DateOfBirth) eq 1990`  | All employees born in the year 1990                                   |
| `month`                | `/Employees?$filter=month(DateOfBirth) eq 5`    | All employees born in May                                             |
| `day`                  | `/Employees?$filter=day(DateOfBirth) eq 31`     | All employees born on the 31st day of the month                       |
| `hour`                 | `/Employees?$filter=hour(Registration) eq 13`   | All employees registered between 13:00 (1 PM) and 13:59 (1:59 PM)     |
| `minute`               | `/Employees?$filter=minute(Registration) eq 55` | All employees registered on the 55th minute of any hour               |
| `second`               | `/Employees?$filter=second(Registration) eq 55` | All employees registered on the 55th second of any minute of any hour |

<small><sup>1</sup> In OData v3 (deprecated), the `contains` function is called `substringof`, and its arguments are reversed. Here is an example: `/Employees?$filter=substringof('f', Name)`.</small>

### 4.4 Combining Filters

Filters can be combined with `and`, `or`, `not`, and `()`. Here is an example: `?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)`.

| Combination | Example                                                          |
| ----------- | ---------------------------------------------------------------- |
| `and`       | `/Employees?$filter=Name eq 'John' and Age gt 65`                |
| `or`        | `/Employees?$filter=Age gt 65 or Age lt 11`                      |
| `not`       | `/Employees?$filter=not(Name eq 'John')`                         |
| `()`        | `/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)` |

### 4.5 Filtering by Association

You can filter on attributes of an associated entity. The way you do this depends on whether the association exposes one object or a list of objects.

| Type                           | Example                                               |
| ------------------------------ | ----------------------------------------------------- |
| Filter on an associated object | `People?$filter=BirthPlace/CityName eq 'Rotterdam'`   |
| Filter on an associated list   | `City?$filter=BornIn/any(person:person/Year le 1919)` |

Filtering on an associated object or list in this way is possible when you [expose associations as a link](/refguide/odata-representation/#associations). It is not possible when you [expose associations as an associated object ID](/refguide/odata-representation/#associations).

### 4.6 Arithmetic Operators

The use of arithmetic operators such as `add`, `sub`, `mul`, `div`, and `mod` in filter expressions is not supported.

## 5 Sorting

You can sort the result using the `$orderby` query option. Here are some examples: `?$orderby=Name` or `?$orderby=BirthPlace/CityName`.

The default direction is ascending. You can make this explicit as follows: `?$orderby=Name asc`.

You can also order the result in a descending direction. Here is an example: `?$orderby=Name desc`.

It is possible to sort on multiple attributes, which have to be comma separated. Here is an example: `?$orderby=Name asc,Age desc`.

## 6 Selecting fields

You can select which attributes and associations to return by specifying the `$select` query option. For example: `?$select=Name,Age`.

## 7 Paging {#paging}

Paging allows you to load data incrementally to better handle large amounts of data. Paging occurs when the client requests a lot of data, and the server returns a subset and a link to request the rest.

### 7.1 Top (Limit)

You can limit the number of returned objects using the `$top` query option, where the limit is a positive integer. For example: `?$top=100`.

### 7.2 Skip (Offset)

You can skip a number of objects before retrieving the result using the `$skip` query option, where the offset is a positive integer. For example: `?$skip=100` will return objects starting with the 101 object in the list.

## 8 Null Literals

You can compare values against the `null` literal.

Consider this example: `?$filter=Name eq null`). In this example, `Name` is a string attribute that can have no assigned value in the database. Note that `null` means *no value*, not `''` (which is an empty string).

When you filter against associations, null literals can be quite useful. Here is an example: `?$filter=Association_A_B ne null`. This example queries for objects of entity type `A` that have at least one association set to objects of entity type `B`.

## 9 Passing Query Options in the Request Body

If the OData query is too long to be sent as a `GET` request, clients can send the query as a `POST` request to the `/$query` endpoint. For example, `GET /Products?$select=Name,Price` and `POST /Products/$query` with `$select=Name,Price` in the request body give the same result. These `POST` requests must specify the header `Content-Type: text/plain`. 

{{% alert color="info" %}}
The body must adhere to URL encoding principles. So, for example, spaces, tabs, and newlines are not allowed.
{{% /alert %}}

## 10 Updating Objects {#updating-objects}

### 10.1 Updating Attributes

When a published resource has the [Updatable](/refguide/published-odata-resource/#capabilities) capability, clients can update its attributes and associations by sending a `PATCH` request to the URL of the object (for example, `PATCH /odata/myservice/v1/Employees(8444249301330581)`).

Specify new values for attributes in the body of the request. Here is an example:

```json
{
  "Name": "John",
  "FirstContact": "2012-12-03T07:16:23Z",
  "DateOfBirth": null
}
```

#### 10.1.1 Updating Attributes of Enumeration Type

To update attributes of an enumeration type, specify the exposed value of the enumeration, without the prefix of the enumeration type, in the body of the `PATCH` request.

For an attribute of type `Country` with values `MyModule.Country.FR`, `MyModule.Country.BR`, and `MyModule.Country.JP`, exposed as `France`, `Brazil`, and `Japan`, respectively, you can update your object as follows:

```json
{
  "Country": "Brazil"
}
```

{{% alert color="info" %}}
Specifying the enumeration member by its numeric value is not supported.
{{% /alert %}}

### 10.2 Updating Associations

When the association refers to a single object, use the [`@id` syntax](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_EntityReference) to set an associated object, or use `null` to empty the associated object. Here is an example:

```json
{
  "Birthplace": { "@id": "Cities(511342)" },
  "Region": null
}
```

When the association refers to multiple objects, use the `@delta` syntax to add objects or remove objects from the association.

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

## 11 Inserting Objects {#inserting-objects}

When a published resource has the [Insertable](/refguide/published-odata-resource/#capabilities) capability, clients can create new objects by sending a `POST` request to the URL of the entity set (for example, `POST /odata/myservice/v1/Employees`). 

The body of the request may specify attribute and association values just as with updates. There is one difference: when the association refers to multiple objects, objects are specified without using `@delta`. Here is an example:

```json
{
  "Customers": [
    { "@id": "Customers(484)" },
    { "@id": "Customers(712)" }
  ]
}
```

Clients can only set values for an association from the entity that is the [owner](/refguide/associations/).

## 12 Deleting Objects {#deleting-objects}

When a published resource has the [Deletable](/refguide/published-odata-resource/#capabilities) capability, clients can delete an object by sending a `DELETE` request to the URL of the object (for example, `PATCH /odata/myservice/v1/Employees(8444249301330581)`).

## 13 Calling Microflows {#actions}

Microflows that are published in your OData service can be called by sending a `POST` request to the action's endpoint URL, which is defined by the base URL of the OData service and the exposed name of the microflow. Here is an example: `POST /odata/myservice/v1/OnboardNewEmployee`. An example URL can be found when opening the [Edit published microflow](/refguide/published-odata-microflow/) dialog; on the bottom you will find the **Example of location** property.

The request body is always a JSON object, with a property for each parameter that is defined in the published microflow. Here is an example:

```json
{
  "FirstName": "John",
  "LastName": "Doe",
  "FirstWorkingDay": "20240101T00:00:00.000Z",
  "CreatePayrollAccount": true
}
```

If a parameter has type **object** or **list**, the value of the parameter's property is a JSON object or array, respectively. This is similar to what is expected when [inserting objects](#inserting-objects) for that entity.

It is possible to pass an existing object by using the [`@id` syntax](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_EntityReference) to reference the existing object. It is also possible to pass both an `@id` reference and attributes of the object combined, which results in the existing object having the additional attributes' values. Here is an example:

```json
{
  "OffboardingDate": "20231231T00:00:00.000Z",  
  "Employee": {
    "@id": "Employees(1783)",
    "Email": "john.doe.personal@gmail.com"
  }
}
```

If the referenced object cannot be found, the action will fail.

If the action returns a value, it will always be contained in a JSON object with a single property named `value`.

{{% alert type="info" %}}
Note that an object passed to a microflow will not be committed automatically. If you want the passed object to be saved, you will have to implement this in the microflow.
{{% /alert %}}

{{% alert type="info" %}}
Functionality for publishing microflows was introduced in Studio Pro [10.2.0](/releasenotes/studio-pro/10.2/).
{{% /alert %}}
