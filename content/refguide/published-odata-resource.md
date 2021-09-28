---
title: "Published OData Resource"
parent: "published-odata-services"
tags: ["studio pro"]
---

## 1 Introduction

This document describes the properties of a published OData resource. 

For an overview of OData services, see [Published OData Services](published-odata-services).

## 2 Adding or Editing a Resource

### 2.1 Add a Resource

Click **Add** in the **Resources** pane of the **Published OData Service** window to open the **Select Entity** window. Select an entity to publish and click **Select**.

An alternative way to add a resource is by right-clicking an entity in the **Domain Model** and choosing **Expose as OData resource**. You will be asked to select a published OData service, or create a new one. 

### 2.2 Edit a Resource

In the **Entitiies** pane of the **Published OData Service** window, select a resource and click **Edit** to display the **Edit published resource** window. 

It is possible to select another **Entity** or view the entity in the domain model by clicking **Show**.

You can see the location where the resource will be published in **Example of location**.

In the **Public documentation** tab, you can provide a summary and a description of the exposed entity.

{{% alert type="info" %}}

[IBM DB2](db2) does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. 

{{% /alert %}}

## 3 Selecting Exposed Attributes and Associations {#exatass}

When you have selected an entity in the list to the left, its published attributes and associations are shown in the list to the right. In this list, you can add, edit, delete and move these attributes and associations.

{{% alert type="info" %}}

The **System.ID** attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If **Nillable** is unchecked for an attribute, the attribute cannot be empty (as this will result in a runtime error).

{{% alert type="info" %}}

Attributes of type **Binary** cannot be exported through OData services except for the **Contents** field of the **System.FileDocument** attribute.

{{% /alert %}}

## 4 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** in the **Edit published resource** window to customize the name of the resource that is exposed to the outside world. The default is the name of the exposed entity in the domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert type="info" %}}

Location URIs must be unique. Exposing two different resources at the same location will result in a consistency error.

{{% /alert %}}

Attributes and associations can be customized in the same way by clicking **Edit** in the list on the right. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default is the same as the name of the association in the domain model.

{{% alert type="info" %}}

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

## 8 Capabilities

A published OData resource is always readable. Use the checkbox for **Updatable (write)** to indicate that clients can update the values of attributes. Only users that have write entity access to attributes can update them.

{{% alert type="info" %}}
This *Capabilities* section was introduced in Studio Pro [9.6.0](/releasenotes/studio-pro/9.6).
{{% /alert %}}
