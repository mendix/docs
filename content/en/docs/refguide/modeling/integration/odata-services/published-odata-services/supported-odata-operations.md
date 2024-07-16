---
title: "Supported OData Operations"
url: /refguide/supported-odata-operations/
description: "Lists the supported operations for published OData services."
weight: 20
aliases:
  - /refguide/odata-query-options/ 
---

## 1 Introduction

This is a list of supported operations for OData services.

{{% alert color="info" %}}
Mendix currently supports only the operations described here.
{{% /alert %}}

A published OData service is automatically documented. Studio Pro allows you to [export the OpenAPI specification](/refguide/published-odata-services/#openapi), which is a machine-readable file that is supported by most API tools, like Swagger UI and Postman.

When running your app, you can [use Swagger UI](/refguide/build-odata-apis/#contract-and-test) to read this documentation and test your service. 

Below is a more descriptive explanation of the operations that a published OData service supports.

## 2 Retrieving Objects

### 2.1 Retrieving All Objects

To retrieve all objects, specify the URI (for example, `/odata/myservice/v1/Employees`). You can see this if you specify the URI in a browser.

### 2.2 Retrieving a Single Object

To retrieve a single object, pass the object identifier in the URI (for example, `/odata/myservice/v1/Employees(8444249301330581)`).

### 2.3 Query Options {#query-options}

#### 2.3.1 Retrieving Associated Objects

To retrieve associated objects, pass the `$expand` query parameter.

For example, imagine you have four entities in your domain model: **Employee**, **Car**, **Address**, and **City**. They include the following associations:

* An association between **Employee** and **Car**
* An association between **Employee** and **Address**
* An association between **City** and **Address**

In this case, you could retrieve associated objects by passing `/odata/myservice/v1/Employees?$expand=Cars,Address($expand=City)` in OData v4 or `/odata/myservice/v1/Employees?$expand=Cars,Address/City` in OData v3 (⚠ deprecated).

#### 2.3.2 Counting the Number of Objects

##### 2.3.2.1 Retrieving a Count of Objects

To find out how many objects there are, pass the `$count` query option (for example, `/odata/myservice/v1/Employees/$count`). This returns an integer representing the number of objects.

##### 2.3.2.2 (Inline) Count

You can also adjust your query so that the result includes a count of the number of items returned. To do this in OData v4, set the `$count` query option to `true` (like this: `?$count=true`). To do this in OData v3 (⚠ deprecated), set the `$inlinecount` query option to `allpages` (like this: `?$inlinecount=allpages`).

#### 2.3.3 Filtering {#filtering}

To apply a filter, append a `$filter=...` parameter to the request, like this: `/Employees?$filter=Name eq 'John'`.

##### 2.3.3.1 Passing attributes

This table describes how to pass values for different attribute types:

| Attribute Type | How to Pass                                                 |
| -------------- | ----------------------------------------------------------- |
| String         | Enclose the value in single quotes (for example, `'John'`). |
| Enumeration    | Enclose the enumeration member name in single quotes, prefixed with the enumeration type (for example, `DefaultNamespace.PrimaryColor'Red'`). OData v4.01 syntax without the qualified enumeration type name is not supported. |
| Datetime       | For OData v4, use a plain value (for example, `2021-12-31`). For OData v3 (⚠ deprecated), enclose the value in single quotes and prefix `datetime` (for example, `datetime'2021-12-31'` or `datetime'<epoch value here>'`). |
| Other          | Use a plain value (for example, `15`).                            |

##### 2.3.3.2 Comparison Operators

Mendix supports the following comparison operators:

| Operator | Meaning                  | Example                             |
| -------- | ------------------------ | ----------------------------------- |
| `eq`     | Equals                   | `/Employees?$filter=Name eq 'John'` |
| `ne`     | Does not equal           | `/Employees?$filter=Name ne 'John'` |
| `gt`     | Greater than             | `/Employees?$filter=Age gt 15`      |
| `lt`     | Less than                | `/Employees?$filter=Age lt 15`      |
| `ge`     | Greater than or equal to | `/Employees?$filter=Age ge 15`      |
| `le`     | Less than or equal to    | `/Employees?$filter=Age le 15`      |

##### 2.3.3.3 Functions

| Function               | Example                                         | Returns                                                               |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------------------------- |
| `contains`<sup>1</sup> | `/Employees?$filter=contains(Name, 'f')`        | All employees with names that contain an `f`                          |
| `startswith`           | `/Employees?$filter=startswith(Name, 'f')`      | All employees with names that start with `f`                          |
| `endswith`             | `/Employees?$filter=endswith(Name, 'f')`        | All employees with names that end with `f`                            |
| `length`               | `/Employees?$filter=length(Name) eq 5`          | All employees with names that have a length of 5                      |
| `year`                 | `/Employees?$filter=year(DateOfBirth) eq 1990`  | All employees born in the year 1990                                   |
| `month`                | `/Employees?$filter=month(DateOfBirth) eq 5`    | All employees born in May                                             |
| `day`                  | `/Employees?$filter=day(DateOfBirth) eq 31`     | All employees born on the 31st day of the month                       |
| `hour`                 | `/Employees?$filter=hour(Registration) eq 13`   | All employees registered between 13:00 (1:00 PM) and 13:59 (1:59 PM)     |
| `minute`               | `/Employees?$filter=minute(Registration) eq 55` | All employees registered on the 55th minute of any hour               |
| `second`               | `/Employees?$filter=second(Registration) eq 55` | All employees registered on the 55th second of any minute of any hour |

<small><sup>1</sup> In OData v3 (⚠ deprecated), the `contains` function is called `substringof`, and its arguments are reversed. Here is an example: `/Employees?$filter=substringof('f', Name)`.</small>

##### 2.3.3.4 Combining Filters

Filters can be combined with `and`, `or`, `not`, and `()` (for example, `?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)`).

| Combination | Example                                                          |
| ----------- | ---------------------------------------------------------------- |
| `and`       | `/Employees?$filter=Name eq 'John' and Age gt 65`                |
| `or`        | `/Employees?$filter=Age gt 65 or Age lt 11`                      |
| `not`       | `/Employees?$filter=not(Name eq 'John')`                         |
| `()`        | `/Employees?$filter=Name eq 'John' and (Age gt 65 or Age lt 11)` |

##### 2.3.3.5 Filtering by Association

You can filter on the attributes of an associated entity. The syntax depends on whether the association exposes one object or a list of objects:

| Type                           | Example                                               |
| ------------------------------ | ----------------------------------------------------- |
| Filter on an associated object | `People?$filter=BirthPlace/CityName eq 'Rotterdam'`   |
| Filter on an associated list   | `City?$filter=BornIn/any(person:person/Year le 1919)` |

Filtering on an associated object or list in this way is possible only when you [expose associations as a link](/refguide/odata-representation/#associations). It is not possible when you expose associations as an associated object ID.

##### 2.3.3.6 Arithmetic Operators

The use of arithmetic operators such as `add`, `sub`, `mul`, `div`, and `mod` in filter expressions is not supported.

#### 2.3.4 Sorting

To sort the result, use the `$orderby` query option (for example, `?$orderby=Name` and `?$orderby=BirthPlace/CityName`).

The default sort direction is ascending. You can make this explicit as follows: `?$orderby=Name asc`.

You can also order the result in descending direction (for example, `?$orderby=Name desc`).

To sort on multiple attributes, separate each attribute with a comma (for example, `?$orderby=Name asc,Age desc`).

#### 2.3.5 Selecting fields

To select which attributes and associations to return, specify the `$select` query option (for example, `?$select=Name,Age`).

#### 2.3.6 Paging {#paging}

Paging enables loading data incrementally to better handle large amounts of data. Paging occurs when the client requests a lot of data, and the server returns a subset and a link to request the rest.

##### 2.3.6.1 Top (Limit)

To limit the number of returned objects, use the `$top` query option. The limit (the number of objects to return) must be a positive integer. For example, `?$top=100` returns the top 100 objects in the list.

##### 2.3.6.2 Skip (Offset)

To skip a number of objects before retrieving the result, use the `$skip` query option. The offset (the number of objects to skip) must be a positive integer. For example, `?$skip=100` returns objects starting with the 101st object in the list.

#### 2.3.7 Null Literals

You can compare values against the `null` literal. For example, given a string attribute `Name`, you can use `?$filter=Name eq null` to query for the objects that have no value assigned to the `Name` attribute.

{{% alert color="info" %}}
Keep in mind that `null` is different from an empty string; a null attribute has no value, but an empty string (`''`) is a string of length 0.
{{% /alert %}}

Null literals are especially useful when you filter against associations. For example, with `?$filter=Association_A_B ne null`, you can query for objects of entity type `A` that have at least one association set to objects of entity type `B`.

#### 2.3.8 Passing Query Options in the Request Body

If the OData query is too long to be sent as a `GET` request, you can send the query as a `POST` request to the `/$query` endpoint. For example, `POST /Products/$query` with `$select=Name,Price` in the request body gives the same result as `GET /Products?$select=Name,Price`. These `POST` requests must specify the header `Content-Type: text/plain`. 

{{% alert color="info" %}}
The request body must adhere to URL encoding principles; that means that everything must be written in [ASCII characters](https://www.w3schools.com/tags/ref_urlencode.asp).
{{% /alert %}}

## 3 Updating Objects {#updating-objects}

### 3.1 Updating Attributes

When a published entity has the [Updatable](/refguide/published-odata-entity/#updatable) capability, you can update attributes and associations by sending a `PATCH` request to the URL of the object. Here is an example: `PATCH /odata/myservice/v1/Employees(8444249301330581)`.

Specify new values for attributes in the body of the request. Here is an example:

```json
{
  "Name": "John",
  "FirstContact": "2012-12-03T07:16:23Z",
  "DateOfBirth": null
}
```

#### 3.1.1 Updating Attributes of Enumeration Type

To update attributes of an enumeration type, specify the exposed value of the enumeration in the body of the `PATCH` request. Do not include the prefix of the enumeration type.

So, for an attribute of type `Country` with values `MyModule.Country.FR`, `MyModule.Country.BR`, and `MyModule.Country.JP` (exposed as `France`, `Brazil`, and `Japan`, respectively), you can update your object as follows:

```json
{
  "Country": "Brazil"
}
```

{{% alert color="info" %}}
Specifying the enumeration member by its numeric value is not supported.
{{% /alert %}}

### 3.2 Updating Associations

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

{{% alert color="info" %}}
You can update an association only from the entity that is the [owner](/refguide/associations/#ownership).
{{% /alert %}}

## 4 Inserting Objects {#inserting-objects}

When a published entity has the [Insertable](/refguide/published-odata-entity/#capabilities) capability, you can create new objects by sending a `POST` request to the URL of the entity set. Here is an example: `POST /odata/myservice/v1/Employees`.

The body of the request may specify attribute and association values, just as with updates. However, unlike with updates, the `@delta` syntax is not used to specify objects, even when the association refers to multiple objects. Here is an example:

```json
{
  "Customers": [
    { "@id": "Customers(484)" },
    { "@id": "Customers(712)" }
  ]
}
```

You can set values for an association only from the entity that is the [owner](/refguide/associations/#ownership).

## 5 Deleting Objects {#deleting-objects}

When a published entity has the [Deletable](/refguide/published-odata-entity/#deletable) capability, you can delete an object by sending a `DELETE` request to the URL of the object (for example, `PATCH /odata/myservice/v1/Employees(8444249301330581)`).

## 6 Calling Microflows {#actions}

To call microflows that are published in your OData service, send a `POST` request to the action's endpoint URL (for example, `POST /odata/myservice/v1/OnboardNewEmployee`).

The endpoint URL is defined by the base URL of the OData service and the exposed name of the microflow. To find an example URL, you can open the [Edit published microflow](/refguide/published-odata-microflow/#edit-microflow) dialog box and look at the **Example of location** property.

The request body is always a JSON object, with a property for each parameter that is defined in the published microflow. Here is an example:

```json
{
  "FirstName": "John",
  "LastName": "Doe",
  "FirstWorkingDay": "20240101T00:00:00.000Z",
  "CreatePayrollAccount": true
}
```

If a parameter's data type is object, the value of the parameter's property is a JSON object. If a parameter's data type is list, the value of the parameter's property is a JSON array. This is similar to what is expected when [inserting objects](#inserting-objects) for that entity.

For parameters whose type is an entity with the **Readable** capability, you can pass an existing object. Use the [`@id` syntax](https://docs.oasis-open.org/odata/odata-json-format/v4.01/odata-json-format-v4.01.html#sec_EntityReference) to reference the object. When you pass an object using the `@id` reference, you can also pass attributes of the object; this assigns the specified attribute values to the existing object. Here is an example that passes the `Employees(1783)` object while specifying a value for the `Email` attribute:

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

When you pass a value for an attribute that is not writable—such as AutoNumber, Binary attributes, calculated attributes, and system attributes—the value is ignored and the object is passed to the microflow with the default value (for new objects) or the previous value (for existing objects). If it is an attribute that is writable but the current user does not have write rights for that member, the request will fail.

If the action returns a value, it will always be contained in a JSON object with a single property named `value`.

{{% alert type="info" %}}
An object passed to a microflow will not be committed automatically. If you want the passed object to be saved, you must implement this in the microflow.
{{% /alert %}}

{{% alert type="info" %}}
The functionality for [publishing microflows in your OData service](/refguide/published-odata-microflow/) was introduced in Studio Pro [10.2.0](/releasenotes/studio-pro/10.2/).
Support for publishing entities without the **Readable** capability was introduced in Studio Pro [10.8.0](/releasenotes/studio-pro/10.8/).
{{% /alert %}}
