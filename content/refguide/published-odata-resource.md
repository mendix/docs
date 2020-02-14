---
title: "Published OData Resource"
parent: "published-odata-services"
tags: ["studio pro"]
---
{{% alert type="warning" %}}

This document describes the properties of a published OData resource. For a general overview of OData services see [Published OData Services](published-odata-svices).

{{% /alert %}}

## 1 Adding or Editing a Resource

**Add resource** or **Edit** button in the Published OData Service window opens an editor window for the published resource. The editor window is divided into two parts: **Resource** and **Uniform Resource Identifier**. The **Resource** window is for specifying the entity and entity attributes to expose, and the **Uniform Resource Identifier** enables you to customize the location where the resource will be published.

[//]: #	"verify the names of the button "

Another way to add a resource is to right-click on an entity in the domain model and select **Expose as OData resource**. Select or create a published OData service document and the Published resource editor will be displayed.

![](attachments/16713722/16843929.png)

### 1.1 Resource

Click **Select** to open the **Select Entity** window.  From the domain model select an entity to publish and click  **Select**.

![](attachments/16713722/16843930.png)

{{% alert type="info" %}}

IBM DB2 does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. For the further details refer to [IBM DB2](db2)

{{% /alert %}}

## 2 Selecting Exposed Attributes and Associations

When an entity to publish has been selected, click **Select** to display a list of the individual attributes to expose.

[//]: #	"The above is a repeat of the last instruction in the previous section - verify"

The System_._ID attribute is used as a key in OData services and must always be checked.

Attributes of published entities are nillable by default. This means that if their value is **empty** then they will be encoded as explicit nulls in the OData content. If you deselect the **nillable** column, the attribute cannot be **empty** (otherwise a runtime error would occur).

Attributes of type binary are not allowed to be exported through OData services except the Contents field of System.FileDocument.

## 3 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** to customize the name of the resource that is exposed to the outside World. By default, the name is the same as the name of the exposed entity in your domain model. It can be changed to any name that starts with a letter followed by letters or digits with a maximum length of 480 characters. Note, however, that location URIs must be unique. Exposing two different resources on the same location will result in a consistency error.

[//]: # "Should the Note about unique URIs be placed as an alert or warning?"

You can customize attributes and associations in the same way. In **Exposed attributes and associations**, you can override the exposed name. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). You can also specify the name of the association in the **exposed association name** column. By default, the name is the same as the name of the association in the domain model.

When these names have been overridden, the name of the entity, attribute or association as defined in your domain model will not be exposed to the outside world: for all OData communication the exposed name will be used.

These features make it easier to refactor your domain model without affecting external APIs.

## 4 Exposed Set Name

Enter the name of the entity set in the  **Exposed set name**. This is the last part of the URL of the resource.

Default: *{Entity name}s*

## 5 Use Paging

**Use paging** enables you to set a maximum number of objects per response, with a link included to the next set of objects. A client such as Tableau can use this to show progress and will automatically continuing to follow the links until all data is retrieved. Memory usage of clients can be improved if  paging is set to a reasonable page size.

Default: *No*

**{{% alert type="warning" %}}

Enabling **Use paging** does mean that retrieved data can be inconsistent as the data will not be retrieved  within a single transaction. For example, when sorting on an Age attribute in an entity called Customer and retrieving customers with 1000 objects per page. If a customer is deleted between two calls, then the customer with Age 23 at position 1001 now moves to position 1000. This means that the object that you _would_ have got on the next page now moves to the first page and is not retrieved anymore. Conversely, when data is inserted between calls can result in duplicates of the data. This option should only be used when this kind of inconsistency is acceptable.

{{% /alert %}}

## 6 Page Size

When **Use paging** is set to Yes, the number of objects per page can be set in **Page size**.

Default: *10000*
