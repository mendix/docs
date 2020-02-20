---
 title: "Published OData Resource"
parent: "published-odata-services"
tags: ["studio pro"]
---
```
[//]: # (simplify this by grouping the items on the different menus and describing them)
```

{{% alert type="warning" %}}

This document describes the properties of a published OData resource. For a general overview of OData services, see [Published OData Services](published-odata-services).

{{% /alert %}}

## 1 Adding or Editing a Resource

### 1.1 Add a Resource

Click **Add** in the **Resources** pane of the **Published OData Service** window to open the **Select Entity** window. Select an entity to publish from the **Project Explorer** window and click **Select**.

![](attachments/16713722/16843930.png)

[//]: # now called Select Persistable Entity when done from this doc - verify and replace

An alternative way to add a resource is in **Domain Model**, right-click an entity and select **Expose as OData resource**... to open the **Published OData Service** window. Add** or **Edit** a published OData service document to display the **Published resource editor**.

![](attachments/16713722/16843929.png)



### 1.2 Edit a Resource
Select a resource from the list displayed in the **Resources** pane of the **Published OData Service** window to open the **Edit published resource** window. 

In this window it is possible to edit or change the **Entity**, and specify the [**Exposed attributes and associations**]( #exatass) to expose for the selected entity. 

In **Example of location** specify the location where the resource will be published.

In the tab **Public documentation** of this window you can provide a summary and a description of the exposed entity which will be displayed when the entity is used.

{{% alert type="info" %}}

IBM DB2 does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. For the further details, see [IBM DB2](db2)

{{% /alert %}}

## 2 Selecting Exposed Attributes and Associations {#exatass}

In the **Edit published resource** window for a selected entity, for **Entity attributes and associations** click **Select** to display the list of attributes and associations in the **Select attributes and associations for entity** window.

{{% alert type="info" %}}

The _System_._ID_ attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If you deselect **Nillable** for an attribute, the attribute cannot be empty (otherwise a runtime error would occur).

{{% alert type="info" %}}

Attributes of **Type** **Binary** cannot be exported through OData services except the **Contents** field of _System_._FileDocument_.

{{% /alert %}}



## 3 Mapping from Internal Names to Exposed Names

Use the **Exposed entity name** to customize the name of the resource that is exposed to the outside world. The default name is the name of the exposed entity in your domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert type="info" %}}

Location URIs must be unique. Exposing two different resources on the same location will result in a consistency error.

{{% /alert %}}

Attributes and associations can be customized in the same way in the **Exposed name** column in the **Exposed attributes and associations** list window. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default name is the same as the name of the association in the domain model.

{{% alert type="info" %}}

When names have been overridden in this way, the name of the entity, attribute, or association as defined in your domain model will not be exposed to the outside world: for all OData communication the exposed name will be used.

{{% /alert %}}

These features make it easier to refactor the domain model without affecting external APIs.

## 4 Exposed Set Name

Enter the name of the entity set in the **Exposed set name**. This is the last part of the URL of the resource as given in the **Example of location**.

Default: *{Entity name}s*

## 5 Use Paging

The **Use paging** option enables you to set a maximum number of objects per response, and include a link to the next set of objects. A client such as [Tableau](https://www.tableau.com/trial/tableau-software?utm_campaign_id=2017049&utm_campaign=Prospecting-CORE-ALL-ALL-ALL-ALL&utm_medium=Paid+Search&utm_source=Google+Search&utm_language=EN&utm_country=BENX&kw=tableau&adgroup=CTX-Brand-Core-EN-E-control&adused=324815280187&matchtype=e&placement=&gclid=EAIaIQobChMI0831s4re5wIVScDeCh1osAAcEAAYASAAEgL9VfD_BwE&gclsrc=aw.ds) is able use this to show progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if paging is set to a reasonable page size.

Default: *No*

**{{% alert type="warning" %}}

Setting **Use paging** to **Yes** may result in inconsistency in the retrieved data because the data will not be retrieved in a single transaction. For example, when sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 now moves to position 1000. This means that the object that would be the first item on the second page now moves to the first page and is no longer retrieved. Conversely, data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

{{% /alert %}}

## 6 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*
