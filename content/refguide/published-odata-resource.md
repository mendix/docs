---
title: "Published OData Resource"
parent: "published-odata-services"
tags: ["studio pro"]
---
++check all button and menu names

{{% alert type="warning" %}}

This document describes the properties of a published OData resource. For a general overview of OData services, see [Published OData Services](published-odata-services).

{{% /alert %}}

## 1 Adding or Editing a Resource

The **Add resource** or **Edit** button in the **Published OData Service** window opens the editor window for the published resource. This window is divided into two parts: **Resource** and **Uniform Resource Identifier**. The **Resource** window is for specifying the entity and entity attributes to expose, and the **Uniform Resource Identifier** window enables you to specify the location where the resource will be published.

Another way to add a resource is in the domain model, right-click an entity and select **Expose as OData resource**. Select or create a published OData service document to display the **Published resource editor**.

![](attachments/16713722/16843929.png)

### 1.1 Resource

Click **Select** to open the **Select Entity** window.  From the domain model select an entity to publish and click  **Select**.

![](attachments/16713722/16843930.png)

{{% alert type="info" %}}

IBM DB2 does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. For the further details, see [IBM DB2](db2)

{{% /alert %}}

## 2 Selecting Exposed Attributes and Associations

When the entity to publish has been selected, click **Select** to display a list of the individual attributes to expose.

{{% alert type="info" %}}

The _System_._ID_ attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are nillable by default. This means that if their value is **empty** then they will be encoded as explicit nulls in the OData content. If you deselect the **nillable** column, the attribute cannot be **empty** (otherwise a runtime error would occur).++check the key names.++

{{% alert type="info" %}}

Attributes of type binary cannot be exported through OData services except the **Contents** field of _System_._FileDocument_.

{{% /alert %}}

## 3 Mapping from Internal Names to Exposed Names

Use the **Exposed entity name** to customize the name of the resource that is exposed to the outside world. The default name is the same as the name of the exposed entity in your domain model. It can be changed to any name that starts with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert type="info" %}}

Location URIs must be unique. Exposing two different resources on the same location will result in a consistency error.

{{% /alert %}}

You can customize attributes and associations in the same way by overriding the exposed name in **Exposed attributes and associations**. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). You can also specify the name of the association in the **Exposed association name** column. The default name is the same as the name of the association in the domain model.

When names have been overridden, the name of the entity, attribute, or association as defined in your domain model will not be exposed to the outside world: for all OData communication the exposed name will be used.

These features make it easier to refactor the domain model without affecting external APIs.

## 4 Exposed Set Name

Enter the name of the entity set in the  **Exposed set name**. This is the last part of the URL of the resource.

Default: *{Entity name}s*

## 5 Use Paging++

The **Use paging** option ++ enables you to set a maximum number of objects per response, and include a link to the next set of objects. A client such as Tableau can use this to show progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if  paging is set to a reasonable page size.

Default: *No*

**{{% alert type="warning" %}}

Enabling **Use paging** may result in inconsistenty in the retrieved data because the data will not be retrieved  in a single transaction. For example, when sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 now moves to position 1000. This means that the object that would be the first item on the second page now moves to the first page and is not retrieved anymore. Conversely,  data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

{{% /alert %}}

## 6 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*
