---
 title: "Published OData Resource"
parent: "published-odata-services"
tags: ["studio pro"]
---

{{% alert type="warning" %}}

This document describes the properties of a published OData resource. For a general overview of OData services, see [Published OData Services](published-odata-services).

{{% /alert %}}

## 1 Adding or Editing a Resource

### 1.1 Add a Resource

Click **Add** in the **Resources** pane of the **Published OData Service** window to open the **Select Persistable Entity** window. Select an entity to publish from the **Project Explorer** and click **Select**.

![](attachments/16713722/published-odata-service.png)

### 1.1 Add a Resource from the Domain Module

An alternative way to add a resource is in the **Domain Model**: right-click an entity and select **Expose as OData resource...**. 

![](attachments/16713722/16843929.png)

To add a resource, click the OData service name in the project explorer in the **Select Published Data Service** window, and click **Select**. 

To create a new OData service and add the entity to it, click **New** , and type the name of the service you want to create in the **Add Published OData Service** dialog box. 

### 1.2 Edit a Resource
In the **Resources** pane of the **Published OData Service** window select a resource and click **Edit** to display the **Edit published resource** window. 

![](attachments/16713722/Edit-published-resource.png)

It is possible to **Select** another **Entity** or view the entity in the Domain model by clicking **Show**. The [**Exposed attributes and associations**]( #exatass) for the selected entity can be set in this window. 

Specify the location where the resource will be published in **Example of location**.

In the **Public documentation** tab, you can provide a summary and a description of the exposed entity.

{{% alert type="info" %}}

[IBM DB2](db2) does not support read-isolated data retrieval operations that are non-blocking in a multi-user environment. Therefore, the data retrieved by OData might not be 100% consistent if the same data rows are modified concurrently by another user. 

{{% /alert %}}

## 2 Selecting Exposed Attributes and Associations {#exatass}

In the **Edit published resource** window, **Select** the **Exposed attributes and associations** to display the list of attributes and associations for the entity.

{{% alert type="info" %}}

The **System.ID** attribute is used as a key in OData services and must always be checked.

{{% /alert %}}

Attributes of published entities are **Nillable** by default. This means that if their value is empty then they will be encoded as explicit nulls in the OData content. If **Nillable** is deselected for an attribute, the attribute cannot be empty (otherwise, a runtime error will occur).

{{% alert type="info" %}}

Attributes of the type **Binary** cannot be exported through OData services except the **Contents** field of the **System.FileDocument** attribute.

{{% /alert %}}

## 3 Mapping from Internal Names to Exposed Names

Use **Exposed entity name** in the **Edit published resource** window to customize the name of the resource that is exposed to the outside world. The default is the name of the exposed entity in the domain model. The **Exposed entity name** must start with a letter followed by letters or digits with a maximum length of 480 characters. 

{{% alert type="info" %}}

Location URIs must be unique. Exposing two different resources at the same location will result in a consistency error.

{{% /alert %}}

Attributes and associations can be customized in the same way in the **Exposed attributes and associations** list window under the the **Exposed name** column. 

For associations, the exposed name is the name given to the navigation property (which is the property referring to the associated object(s)). The default is the same as the name of the association in the domain model.

{{% alert type="info" %}}

When names have been customized in this way, the name of the entity, attribute, or association as defined in the domain model will not be exposed to the outside world. For all OData communication, the exposed name is used.

{{% /alert %}}

These features make it easier to refactor the domain model without affecting external APIs.

## 4 Exposed Set Name

Customize name of the entity set that is displayed in the **Exposed set name** field of the **Edit published resource** window. This is the last part of the URL of the resource as given in the **Example of location**.

Default: *{Entity name}s*

## 5 Use Paging

The **Use paging** option is used to set a maximum number of objects per response, and include a link to the next set of objects. A client such as [Tableau](https://www.tableau.com/trial/tableau-software?utm_campaign_id=2017049&utm_campaign=Prospecting-CORE-ALL-ALL-ALL-ALL&utm_medium=Paid+Search&utm_source=Google+Search&utm_language=EN&utm_country=BENX&kw=tableau&adgroup=CTX-Brand-Core-EN-E-control&adused=324815280187&matchtype=e&placement=&gclid=EAIaIQobChMI0831s4re5wIVScDeCh1osAAcEAAYASAAEgL9VfD_BwE&gclsrc=aw.ds) is able use this to show progress and automatically continue to follow the links until all the data is retrieved. The memory usage of the clients can be improved if paging is set to a reasonable page size.

Default: *No*

Setting **Use paging** to **Yes** may result in inconsistency in the retrieved data because the data will not be retrieved in a single transaction. As an example, sorting on the **Age** attribute in an entity called **Customer** and retrieving customers set to 1000 objects per page. If a customer is deleted between two calls, then the customer with **Age** 23 at position 1001 then moves to position 1000. This means that the object that would be the first item on the second page is moved to the first page and is no longer retrieved. Similarly, data inserted between calls can result in a duplication of the data. This option should only be used when this kind of inconsistency is acceptable.

## 6 Page Size

When **Use paging** is set to **Yes**, the number of objects per page can be set in **Page size**.

Default: *10000*
