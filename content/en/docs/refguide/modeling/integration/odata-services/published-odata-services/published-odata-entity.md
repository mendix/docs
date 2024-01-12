---
title: "Published OData Entity"
url: /refguide/published-odata-entity/
tags: ["studio pro", "OData"]
alias:
    - /refguide/published-odata-services/
#If moving or renaming this doc file, implement a temporary redirect and let the respective team know they should update the URL in the product. See Mapping to Products for more details. 

---

## 1 Introduction

This document describes the properties of an entity published in an OData service. 

For an overview of OData services, see [Published OData Services](/refguide/published-odata-services/).

## 2 Adding or Editing an Entity

### 2.1 Add an Entity

Click **Add** in the **Entities** pane of the **Published OData Service** window to open the **Select Entity** window. Select an entity to publish and click **Select**.

An alternative way to add an entity is by right-clicking an entity in the **Domain Model** and choosing **Publish in OData service**. You will be asked to select a published OData service, or create a new one. 

### 2.2 Edit a Published Entity

In the **Entities** pane of the **Published OData Service** window, select an entity and click **Edit** to display the **Edit published entity** window. 

It is possible to select another **Entity** or view the entity in the domain model by clicking **Show**.

You can see the location where the entity is published in **Example of location**.

In the **Public documentation** tab, you can provide a summary and a description of the published entity.

## 3 Selecting Published Attributes and Associations {#exatass}

When you have selected an entity in the list to the left, its published attributes and associations are shown in the list to the right. In this list, you can add, edit, delete and move these attributes and associations.

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If **Nillable** is unchecked for an attribute, the attribute cannot be empty (as this will result in a runtime error).

{{% alert color="info" %}}

Attributes of type **Binary** cannot be exported through OData services except for the **Contents** field of the **System.FileDocument** attribute.

{{% /alert %}}

### 3.1 Required Validation Rules for Published Attributes

For published OData services, the **Can be empty** checkbox appears when you edit a published attribute. 

When the checkbox Can be empty is unselected, and there is no **Required** validation rule set, you will be prompted to add a 'required' validation rule or use a before commit microflow to ensure that end-users do not leave it empty.

## 4 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** in the **Edit published entity** window to customize the name of the entity that is exposed to the outside world. The default is the name of the published entity in the domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert color="info" %}}

Location URIs must be unique. Publishing two different entities at the same location will result in a [consistency error](/refguide/consistency-errors/).

{{% /alert %}}

Attributes and associations can be customized in the same way by clicking **Edit** in the list on the right. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default is the same as the name of the association in the domain model.

{{% alert color="info" %}}

When names have been customized in this way, the name of the entity, attribute, or association as defined in the domain model will not be exposed to the outside world. For all OData communication, the exposed name is used.

{{% /alert %}}

These features make it easier to refactor the domain model without affecting external APIs.

## 5 Exposed Set Name

It is possible to customize the name of the entity set that is displayed in the **Exposed set name** field of the **Edit published entity** window. This forms the last part of the URL of the published entity as given in the **Example of location**.

Default: *{Entity name}s*

## 6 Use Paging {#paging}

The **Use paging** option is used to set a maximum number of objects per response and include a link to the next set of objects. A client such as [Tableau](https://www.tableau.com) is able use this to display progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if paging is set to a reasonable page size.

Default: *No*

When set to **Yes**, select **Top supported** and **Skip supported** [query options](#query-options).

Setting **Use paging** to **Yes** may result in inconsistency in the retrieved data because the data will not be retrieved in a single transaction. As an example, sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 then moves to position 1000. This means that the object that would be the first item on the second page is moved to the first page and is no longer retrieved. Similarly, data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

## 7 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*

## 8 Key {#key}

Every entity in Mendix has an [ID](/refguide/odata-representation/#id-representation) that is used internally to store the object in the database. However, this ID is not stable over time, since it can change in certain scenarios (such as data migration). That means that it is not recommended to use the ID as a key. A published entity should have a combination of attributes that form a key instead. The attribute(s) can be of type **Integer**, **Long**, **String**, or **AutoNumber**.

Select a combination of attributes with the following constraints:

* Unique – The combination of key attributes should be unique, so each key points to exactly one object.
* Required – If one of the key attribute values is empty, you cannot find an object with it anymore.
* Stable over time – The attribute values used for the key should not change, so that you can find it again later.

Having an [index](/refguide/indexes/) for the key attribute(s) makes retrieving objects by key perform better.

You can set unique and required constraints using [validation rules](/refguide/validation-rules/).

{{% alert color="info" %}}
Selecting more than one attribute as the key is only available for published OData services that use OData v4.
{{% /alert %}}

## 9 Capabilities {#capabilities}

The **Capabilities** section gives an overview of what operations the published entity supports.

### 9.1 Insertable

Select the checkbox for **Insertable** to indicate that clients can insert new objects.

When the app receives a request to insert a new object, it does the following:

1. It checks that the request is formatted correctly, rejecting things like specifying a string value for an integer attribute.
2. It checks that the requested changes are valid, rejecting things like strings that are longer than the maximum length and empty values for required attributes.
3. It creates a new object with the values specified in the request.
4. It commits the object to the database.

This is the behavior when you choose the action **Write to database**.

You can also choose the **Call a microflow** action to use your own logic. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Commit](/refguide/committing-objects/) activity to commit the changes to the database. 

In the publishing app, you can use a validation message action to report a validation error. The client app can include a custom error handler on the [Send External Object](/refguide/send-external-object/) activity to handle the error. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed. For more information, see [OData query options](/refguide/odata-query-options/#updating-objects).

### 9.2 Readable {#readable}

A published OData entity is always readable.

There are two options to handle an incoming GET request for a published entity:

1. **Read from database** – This action will parse the incoming OData query to a database query and retrieve the data from the database. This is the default action for *Readable* section. This action is not applicable to non-persistable entities, because non-persistable entities cannot be retrieved from the database.
2. **Call a microflow** – This action will call a microflow. You can specify your custom logic in this microflow to return a list of objects that correspond to the incoming request.

You can also set the [query options](#query-options) for each request.

### 9.3 Updatable {#updatable}

Select the checkbox for **Updatable** to indicate that clients can update the values of attributes and associations.

When the app receives a request to change values, it does the following:

1. It checks that the request is formatted correctly, rejecting things like specifying a string value for an integer attribute.
2. It checks that the requested changes are valid, rejecting things like strings that are longer than the maximum length and empty values for required attributes.
3. It commits the changes to the database.

This is the behavior when you choose the action **Write to database**.

You can also choose the **Call a microflow** action to use your own logic. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Commit](/refguide/committing-objects/) activity to commit the changes to the database. 

In the publishing app, you can use a validation message action to report a validation error. The client app can include a custom error handler on the [Send External Object](/refguide/send-external-object/) activity to handle the error. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed. For more information, see [OData query options](/refguide/odata-query-options/#updating-objects).

### 9.4 Deletable {#deletable}

Select the checkbox for **Deletable** to indicate that clients can delete the values of attributes and associations.

Choose whether the object should be deleted from the database directly, or whether to call a microflow. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Delete](/refguide/deleting-objects/) activity to delete the object from the database. 

You can use a validation message to report a validation error if you are performing, for example, a soft delete. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed.

## 10 Query Options {#query-options}

Select the options to include for the **Readable** OData capability.

* **Countable** – This option is required for getting the total number of records.
* **Top supported** – This option indicates whether clients can specify that they want to retrieve only a limited number of items. Enable this option when [Use paging](#paging) is selected.
* **Skip supported** – This option indicates whether clients can specify the number of items in the queried collection that are to be skipped and not included in the result. Enable this option when [Use paging](#paging) is selected.

The **Top supported** and **skip supported** queries are required for pagination, when the server allows the client to request only a subset of the data and skips the first *n* objects. [Paging](#paging) occurs when the client requests a lot of data, and the server returns a subset and a link to request the rest.

For more information, see the [System Query Option $top and $skip](https://www.odata.org/getting-started/basic-tutorial/#topskip) in the *Basic Tutorial* on OData.org
