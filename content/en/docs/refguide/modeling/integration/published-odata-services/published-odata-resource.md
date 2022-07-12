---
title: "Published OData Resource"
url: /refguide/published-odata-resource/
tags: ["studio pro", "OData"]
---

## 1 Introduction

This document describes the properties of a published OData resource. 

For an overview of OData services, see [Published OData Services](/refguide/published-odata-services/).

## 2 Adding or Editing a Resource

### 2.1 Add a Resource

Click **Add** in the **Resources** pane of the **Published OData Service** window to open the **Select Entity** window. Select an entity to publish and click **Select**.

An alternative way to add a resource is by right-clicking an entity in the **Domain Model** and choosing **Expose as OData resource**. You will be asked to select a published OData service, or create a new one. 

### 2.2 Edit a Resource

In the **Entities** pane of the **Published OData Service** window, select a resource and click **Edit** to display the **Edit published resource** window. 

It is possible to select another **Entity** or view the entity in the domain model by clicking **Show**.

You can see the location where the resource will be published in **Example of location**.

In the **Public documentation** tab, you can provide a summary and a description of the exposed entity.

{{% alert color="info" %}}

[IBM DB2](/refguide/db2/) does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. 

{{% /alert %}}

## 3 Selecting Exposed Attributes and Associations {#exatass}

When you have selected an entity in the list to the left, its published attributes and associations are shown in the list to the right. In this list, you can add, edit, delete and move these attributes and associations.

{{% alert color="info" %}}

The **System.ID** attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If **Nillable** is unchecked for an attribute, the attribute cannot be empty (as this will result in a runtime error).

{{% alert color="info" %}}

Attributes of type **Binary** cannot be exported through OData services except for the **Contents** field of the **System.FileDocument** attribute.

{{% /alert %}}

## 4 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** in the **Edit published resource** window to customize the name of the resource that is exposed to the outside world. The default is the name of the exposed entity in the domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert color="info" %}}

Location URIs must be unique. Exposing two different resources at the same location will result in a [consistency error](/refguide/consistency-errors/).

{{% /alert %}}

Attributes and associations can be customized in the same way by clicking **Edit** in the list on the right. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default is the same as the name of the association in the domain model.

{{% alert color="info" %}}

When names have been customized in this way, the name of the entity, attribute, or association as defined in the domain model will not be exposed to the outside world. For all OData communication, the exposed name is used.

{{% /alert %}}

These features make it easier to refactor the domain model without affecting external APIs.

## 5 Exposed Set Name

It is possible to customize the name of the entity set that is displayed in the **Exposed set name** field of the **Edit published resource** window. This forms the last part of the URL of the resource as given in the **Example of location**.

Default: *{Entity name}s*

## 6 Use Paging

The **Use paging** option is used to set a maximum number of objects per response and include a link to the next set of objects. A client such as [Tableau](https://www.tableau.com) is able use this to display progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if paging is set to a reasonable page size.

Default: *No*

Setting **Use paging** to **Yes** may result in inconsistency in the retrieved data because the data will not be retrieved in a single transaction. As an example, sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 then moves to position 1000. This means that the object that would be the first item on the second page is moved to the first page and is no longer retrieved. Similarly, data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

## 7 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*

## 8 Capabilities {#capabilities}

The **Capabilities** section gives an overview of what operations the resource supports.

{{% alert color="info" %}}
This *Capabilities* section was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6/).
{{% /alert %}}

### 8.1 Insertable

Select the check box for **Insertable** to indicate that clients can insert new objects.

When the app receives a request to insert a new object, it does the following:

1. It checks that the request is formatted correctly, rejecting things like specifying a string value for an integer attribute.
2. It checks that the requested changes are valid, rejecting things like strings that are longer than the maximum length and empty values for required attributes.
3. It creates a new object with the values specified in the request.
4. It commits the object to the database.

This is the behavior when you choose the action **Write to database**.

You can also choose the **Call a microflow** action to use your own logic. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Commit](/refguide/committing-objects/) activity to commit the changes to the database. 

In the publishing app, you can use a validation message action to report a validation error. The client app can include a custom error handler on the [Send External Object](/refguide/send-external-object/) activity to handle the error. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed. For more information, see [OData query options](/refguide/odata-query-options/#updating-objects).

{{% alert color="info" %}}
This **Call a microflow** action was introduced in Studio Pro [9.11.0](/releasenotes/studio-pro/9.11/). The *Insertable* capability was introduced in Studio Pro [9.12.0](/releasenotes/studio-pro/9.12/).
{{% /alert %}}

### 8.2 Readable

A published OData resource is always readable.

### 8.3 Updatable

Select the check box for **Updatable** to indicate that clients can update the values of attributes and associations.

When the app receives a request to change values, it does the following:

1. It checks that the request is formatted correctly, rejecting things like specifying a string value for an integer attribute.
2. It checks that the requested changes are valid, rejecting things like strings that are longer than the maximum length and empty values for required attributes.
3. It commits the changes to the database.

This is the behavior when you choose the action **Write to database**.

You can also choose the **Call a microflow** action to use your own logic. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Commit](/refguide/committing-objects/) activity to commit the changes to the database. 

In the publishing app, you can use a validation message action to report a validation error. The client app can include a custom error handler on the [Send External Object](/refguide/send-external-object/) activity to handle the error. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed. For more information, see [OData query options](/refguide/odata-query-options/#updating-objects).

### 8.4 Deletable {#deletable}

Select the check box for **Deletable** to indicate that clients can delete the values of attributes and associations.

Choose whether the object should be deleted from the database directly, or whether to call a microflow. Specify a microflow that takes the entity as a parameter, and optionally a [System.HttpRequest](/refguide/http-request-and-response-entities/) parameter. In the microflow, you can use the [Delete](/refguide/deleting-objects/) activity to delete the object from the database. 

You can use a validation message to report a validation error if you are performing, for example, a soft delete. If the microflow reports [validation feedback](/refguide/validation-feedback/), the runtime informs the client that the request has failed.

{{% alert type="info" %}}
The *Deletable* capability was introduced in Studio Pro [9.13.0](/releasenotes/studio-pro/9.13/).
{{% /alert %}}
